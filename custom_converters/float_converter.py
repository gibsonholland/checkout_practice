from werkzeug.routing import FloatConverter
import regex

class ConvertFloat(FloatConverter):
    regex = r'-?\d+(\.\d+)?'
