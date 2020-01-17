! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(o, r, function(n) {
                return e[n]
            }.bind(null, r));
        return o
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "/static/merchant/", t(t.s = 11)
}([function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = "fbxpxltr";
    n.trackEvent = function(e, n, t, r) {
        var i = function() {
                var e = document.getElementById(o);
                return e && "img" === e.tagName.toLowerCase() ? (e.existing = !0, e) : ((e = document.createElement("img")).id = o, e)
            }(),
            s = function(e, n, t) {
                return n || (function(e, n) {
                    return "https://checkout.fundboxpay.com" === n && e.startsWith("pk_test")
                }(e, t) ? "https://checkout-integration.fundboxpay.com" : t)
            }(n, t, r) + "/api/v2/track?type=" + e + "&key=" + n + "&stamp=" + Date.now();
        i.src = s, i.existing || document.body.appendChild(i)
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    n.FbxArgumentError = function(e) {
        function n(e) {
            ! function(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, n);
            var t = function(e, n) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != typeof n && "function" != typeof n ? e : n
            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
            return t.name = "FbxArgumentError", t
        }
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }(n, Error), n
    }()
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.isValidUUID4 = function(e) {
        return o.test(e)
    };
    var o = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
}, function(e, n) {
    e.exports = "data:image/png;base64,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"
}, function(e, n, t) {
    e.exports = '<div id="fb-checkout-overlay"\n  style="\n    position:fixed;\n    z-index:9999;\n    top:0;\n    left:0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.65);\n    background-image: radial-gradient(circle, rgba(255,255,255, 0.3) 0%, rgba(255,255,255, 0.1) 37%); width: 100%;\n    color: white;\n    font-size: 14px;\n    font-family: sans-serif;">\n  <div id="fb-checkout-overlay-close-button"\n    style="\n    position: absolute;\n    right: 40px;\n    top: 40px;\n    width: 24px;\n    height: 24px;\n    border: 1px solid white;\n    border-radius: 50%;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 22px;\n    cursor: pointer;\n    font-weight: 100;">\n    <div style="\n      box-sizing: border-box;\n      width: 16px;\n      position: absolute;\n      top: 50%;\n      left: 4px;\n      height: 1px;\n      background-color: white;\n      transform: rotate(45deg)"></div>\n    <div style="\n      box-sizing: border-box;\n      width: 16px;\n      position: absolute;\n      top: 50%;\n      left: 4px;\n      height: 1px;\n      background-color: white;\n      transform: rotate(-45deg)"></div>\n  </div>\n  <div class="fbx-content-wrapper"\n    style="\n      position: relative;\n      top: calc(50% - 110px);\n      text-align: center;">\n    <img src="' + t(3) + '"\n      style="\n        width: 150px;\n        margin: auto;\n        display: block;\n        padding: 0;" />\n    <h2 style="\n      font-weight: 100;\n      margin: 35px auto 20px;\n      padding: 0;\n      font-size: 24px;">Don\'t\n      see the secure Fundbox browser?</h2>\n    <p style="\n      font-weight: 100;\n      line-height: 24px;\n      max-width: 330px;\n      padding: 0;\n      margin: 0 auto 22px;">We\'ll\n      help you re-launch the window to complete your purchase.</p>\n    <span id="fb-checkout-overlay-focus-button"\n      style="\n        text-decoration: underline;\n        cursor: pointer;\n        font-weight: 100;">Continue</span>\n  </div>\n</div>\n'
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t(4));
    var r = "fb-checkout-overlay",
        i = "fb-checkout-overlay-focus-button",
        s = "fb-checkout-overlay-close-button";
    n.default = {
        attach: function(e, n) {
            var t = document.createRange().createContextualFragment(o.default);
            t.getElementById(i).addEventListener("click", e), t.getElementById(s).addEventListener("click", n), document.body.appendChild(t)
        },
        detach: function() {
            var e = document.getElementById(r);
            e && document.body.removeChild(e)
        }
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    n.MESSAGE_TYPES = {
        READY: "ready",
        CREATE_ORDER: "create_order",
        SET_ORDER_TOKEN: "set_order_token",
        ORDER_INIT_SUCCESS: "order_init_success",
        LEARN_MORE_INIT: "learn_more_init",
        CLOSE: "close",
        RESET_PASSWORD_SUCCESS: "fbpay-reset-password-form-submitted"
    }, n.CTA_TYPES = {
        CONFIRM_TERMS: "confirm-terms",
        CONFIRM_AND_PAY: "confirm-and-pay"
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var o = n[t];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        return function(n, t, o) {
            return t && e(n.prototype, t), o && e(n, o), n
        }
    }();
    var r = function() {
        function e(n, t) {
            ! function(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.global = n, this.origin = t, this.subscribers = {}, this.init()
        }
        return o(e, [{
            key: "init",
            value: function() {
                var e = this;
                this.global.addEventListener("message", function(n) {
                    if (n.origin === e.origin || "*" === e.origin) {
                        var t = e.parseMessageData(n.data);
                        t && e.dispatchMessage(t)
                    }
                })
            }
        }, {
            key: "setOrigin",
            value: function(e) {
                this.origin = e
            }
        }, {
            key: "dispatchMessage",
            value: function(e) {
                var n = this.subscribers[e.type];
                n && n.call(null, e.payload)
            }
        }, {
            key: "parseMessageData",
            value: function(e) {
                try {
                    var n = this.global.JSON.parse(e);
                    if (!n.type) return;
                    return n
                } catch (e) {}
            }
        }, {
            key: "subscribe",
            value: function(e, n) {
                if (!e || !n) throw new TypeError("Invalid arguments: type and callback should be provided to MessageSubscriber.subscribe() method");
                if ("string" != typeof e) throw new TypeError("Invalid arguments: type should be a string");
                if ("function" != typeof n) throw new TypeError("Invalid arguments: callback should be a function");
                this.subscribers[e] = n
            }
        }, {
            key: "unsubscribe",
            value: function(e) {
                delete this.subscribers[e]
            }
        }, {
            key: "unsubscribeAll",
            value: function() {
                this.subscribers = {}
            }
        }]), e
    }();
    n.default = r
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    n.default = function e(n, t) {
        ! function(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.type = n, this.payload = t
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(n, t, o) {
                return t && e(n.prototype, t), o && e(n, o), n
            }
        }(),
        r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(t(8));
    var i = function() {
        function e(n) {
            ! function(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.global = n
        }
        return o(e, [{
            key: "popupOpened",
            value: function() {
                return this.popupInstance && !this.popupInstance.closed
            }
        }, {
            key: "onClose",
            value: function() {
                this.global.clearInterval(this.closeWatcher), this.closeWatcher = null, this.popupInstance = null, this.closeCallback.call(null)
            }
        }, {
            key: "watchPopupCloseEvent",
            value: function() {
                var e = this;
                this.closeWatcher = this.global.setInterval(function() {
                    e.popupInstance.closed && e.onClose()
                }, 500)
            }
        }, {
            key: "calculateInitialPopupPosition",
            value: function(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 700,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500;
                if (!n || !e) throw new TypeError("Invalid arguments: screenHeight and screenWidth should be numbers");
                return {
                    left: n / 2 - o / 2,
                    top: e / 2 - t / 2
                }
            }
        }, {
            key: "getPopupSettings",
            value: function(e, n, t, o) {
                var r = {
                    left: n,
                    top: e,
                    height: t,
                    width: o,
                    toolbar: "no",
                    location: "no",
                    directories: "no",
                    status: "no",
                    menubar: "no",
                    resizable: "no",
                    minimizable: "no",
                    copyhistory: "no",
                    alwaysRaised: "yes"
                };
                return this.global.JSON.stringify(r).replace(/:/g, "=").replace(/"|{|}/g, "")
            }
        }, {
            key: "open",
            value: function(e, n, t, o) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 700,
                    i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 500,
                    s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function() {};
                if (this.popupOpened()) this.popupInstance.focus();
                else {
                    var u = this.calculateInitialPopupPosition(t, o, r, i),
                        a = u.left,
                        c = u.top,
                        l = this.getPopupSettings(c, a, r, i);
                    this.popupInstance = this.global.open(e, n, l), this.watchPopupCloseEvent(), this.closeCallback = s
                }
                return this.popupInstance
            }
        }, {
            key: "focus",
            value: function() {
                this.popupOpened() && this.popupInstance.focus()
            }
        }, {
            key: "close",
            value: function() {
                this.popupOpened() && this.popupInstance.close(), this.onClose()
            }
        }, {
            key: "sendMessage",
            value: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.popupOpened()) {
                    var t = new r.default(e, n),
                        o = this.global.JSON.stringify(t);
                    this.popupInstance.postMessage(o, "*")
                }
            }
        }]), e
    }();
    n.default = i
}, function(e, n, t) {
    "use strict";
    var o = l(t(9)),
        r = l(t(7)),
        i = t(6),
        s = l(t(5)),
        u = t(2),
        a = t(1),
        c = t(0);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = "/learn-more",
        p = "https://checkout.fundboxpay.com",
        d = null,
        b = null,
        g = null,
        h = new r.default(window, p),
        y = null;

    function A(e, n) {
        var t = new o.default(window);
        return h.unsubscribeAll(), h.subscribe(i.MESSAGE_TYPES.READY, e), h.subscribe(i.MESSAGE_TYPES.CLOSE, n), t
    }

    function v() {
        h.unsubscribeAll(), y = null, g && g.close()
    }

    function w(e) {
        var n = e.transactionToken,
            t = e.transactionType;
        b(n, t), h.unsubscribe(i.MESSAGE_TYPES.ORDER_INIT_SUCCESS), v()
    }

    function E(e) {
        var n = e.ctaType,
            t = void 0 === n ? i.CTA_TYPES.CONFIRM_TERMS : n,
            o = e.orderDetails;
        if (!o) throw new a.FbxArgumentError("orderDetails argument is missing on checkout 'open' method call");
        var r = o.customer_token;
        if (r && !(0, u.isValidUUID4)(r)) throw new a.FbxArgumentError("Provided customer_token is not valid UUID4");
        y = null, g && g.popupOpened() && v(), g = A(function() {
            return function(e, n) {
                h.unsubscribe(i.MESSAGE_TYPES.ORDER_INIT_SUCCESS), g.sendMessage(i.MESSAGE_TYPES.CREATE_ORDER, {
                    ctaType: e,
                    sellerKey: d,
                    orderDetails: n,
                    orderToken: y
                }), h.subscribe(i.MESSAGE_TYPES.SET_ORDER_TOKEN, function(e) {
                    var n = e.orderToken;
                    return y = n
                }), h.subscribe(i.MESSAGE_TYPES.ORDER_INIT_SUCCESS, w)
            }(t, o)
        }, v), s.default.attach(function() {
            return g.focus()
        }, function() {
            return v()
        }), g.open(p, "FBXCheckout", screen.height, screen.width, 700, 500, function() {
            return s.default.detach()
        })
    }

    function m() {
        h.unsubscribe(i.MESSAGE_TYPES.READY), g.sendMessage(i.MESSAGE_TYPES.LEARN_MORE_INIT, {
            sellerKey: d
        })
    }

    function O() {
        g && g.popupOpened() || (g = A(m, v)), g.open("" + p + f, "FBXCheckoutLearnMore", screen.height, screen.width, 570, 500)
    }
    window.FbxCheckout = {
        configure: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!e.fbxKey || !e.onComplete) throw new TypeError("Invalid arguments: fbxKey or onComplete callback are missing");
            if ("function" != typeof e.onComplete) throw new TypeError("Invalid arguments: onComplete callback should be a function");
            if (g && g.popupOpened()) throw new Error("Invalid evaluation: configuration is impossible when checkout popup is opened");
            return function(e) {
                var n = e.env,
                    t = void 0 === n ? p : n,
                    o = e.fbxKey,
                    r = e.onComplete;
                p = t, d = o, b = r, h.setOrigin(p)
            }(e), window.addEventListener("beforeunload", v), (0, c.trackEvent)("Configure was called", e.fbxKey, e.env, p), {
                open: E,
                close: v,
                learnMore: O
            }
        }
    }
}, function(e, n, t) {
    e.exports = t(10)
}]);