from flask import (Flask, render_template, url_for,
                   redirect, request, make_response, 
                   flash, jsonify, session)
from custom_converters.float_converter import ConvertFloat
import firebase_admin
from firebase_admin import db, credentials
from config import SECRET_KEY
import json
import decimal
from options import DEFAULT
 

""" 

Running from command line
. venv/bin/activate
export FLASK_APP=hello.py
export FLASK_ENV=development
flask run

This creates a local URL and enabled debug mode

"""

app = Flask(__name__)
app.url_map.converters['float'] = ConvertFloat

cred = credentials.Certificate('/Users/gibson.holland/Documents/checkout_practice/keys.json')
app.secret_key = SECRET_KEY
default_app = firebase_admin.initialize_app(
    credential=cred,
    options={
    'databaseURL': 'https://checkout-practice.firebaseio.com'
    },
    name='checkout-practice'
)

CHECKOUT = db.reference(path='/orders', app=default_app)
ITEMS = db.reference(path='/items', app=default_app)

def get_saved_data():
    try:
        data = json.loads(request.cookies.get('numbers'))
    except TypeError:
        data = {}
    return data

def get_total(data=None):
    try:
        number1 = int(data['num1'])
        number2 = int(data['num2'])
        total = number1 + number2
        print(total)
    except TypeError:
        data = {}
    return total

@app.route('/add')
def add():
    # adds two numbers together (integers and floats ok)
    # renders static file add.html
    total = 0
    data = get_saved_data()
    if data == {}:
        pass
    else:
        total = get_total(data)
    print(type(data))
    # total = get_total(data)
    print(type(total))
    return render_template("add.html", saves=data, total=total), total

@app.route('/save', methods=['POST'])
def save():
    response = make_response(redirect(url_for('add')))
    data = get_saved_data()
    data.update(dict(request.form.items()))
    response.set_cookie('numbers', json.dumps(data))
    return response
    # in Flask cookies are sent on the response but we don't have that until
    # we get the redirect so we have to make the response (easier in Django and JS)

@app.route('/')
@app.route('/<phrase>')
@app.route('/<phrase>/<name>')
def index(phrase="wassup", name="dawg"):
    # renders default phrase and name unless new ones provided
    # render static file index.html
    context = {'phrase': phrase, 'name': name}
    return render_template('index.html', **context)

@app.route('/subtract/<float:num1>/<float:num2>')
def subtract(num1, num2):
    # adds two numbers together (integers and floats ok)
    # renders static file add.html
    num3 = num1 - num2
    context = {'num1': num1, 'num2': num2, 'num3': num3}
    return render_template("subtract.html", **context)

@app.route('/multiply')
@app.route('/multiply/<float:num1>/<float:num2>')
def multiply(num1=5, num2=5):
    # multiplies two numbers together (integers and floats ok)
    # has default values and not using .html so serve as basic example
    total = (num1 * num2)
    return '{} * {} = {}'.format(num1, num2, total)

@app.route('/user')
@app.route('/user/<username>')
def show_user_profile(username="gobsin.hoblin"):
    # show the user profile for that user
    return 'Username is {}'.format(username)

@app.route('/checkout', methods=['GET'])
def checkout():
    items = ITEMS.get().values()
    print(items)
    for item in items:
        price = (item['price']), type(item['price'])
        print(price)
    for item in items:
        print(item)
    # price = items.__getattribute__('amount_cents') / 100
    return render_template('checkout.html', items=items)

@app.route('/checkout/orders', methods=['POST'])
def submit_order():
    flash('Thanks for submitting your order!')
    new_order = dict(request.form)
    CHECKOUT.push(new_order)
    return redirect(url_for('checkout')), 201

@app.route('/checkout/item', methods=['POST'])
def create_item():
    flash('Thanks for creating a new item!')
    new_item = dict(request.form)
    ITEMS.push(new_item)
    return redirect(url_for('checkout')), 201