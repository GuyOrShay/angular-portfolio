!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(n) {
      if (o[n]) return o[n].exports;
      var i = (o[n] = { exports: {}, id: n, loaded: !1 });
      return e[n].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var o = {};
    return (t.m = e), (t.c = o), (t.p = "dist/"), t(0);
  })([
    function (e, t, o) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
          },
        a = o(1),
        r = (n(a), o(5)),
        c = n(r),
        u = o(6),
        s = n(u),
        d = o(7),
        f = n(d),
        l = o(8),
        m = n(l),
        p = o(9),
        b = n(p),
        v = o(10),
        g = n(v),
        y = o(13),
        w = n(y),
        h = [],
        k = !1,
        x = document.all && !window.atob,
        j = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
        },
        O = function () {
          var e =
            arguments.length <= 0 || void 0 === arguments[0]
              ? !1
              : arguments[0];
          return (
            e && (k = !0),
            k
              ? ((h = (0, g["default"])(h, j)), (0, b["default"])(h, j.once), h)
              : void 0
          );
        },
        _ = function () {
          (h = (0, w["default"])()), O();
        },
        z = function () {
          h.forEach(function (e, t) {
            e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay");
          });
        },
        A = function (e) {
          return (
            e === !0 ||
            ("mobile" === e && m["default"].mobile()) ||
            ("phone" === e && m["default"].phone()) ||
            ("tablet" === e && m["default"].tablet()) ||
            ("function" == typeof e && e() === !0)
          );
        },
        E = function (e) {
          return (
            (j = i(j, e)),
            (h = (0, w["default"])()),
            A(j.disable) || x
              ? z()
              : (document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", j.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", j.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", j.delay),
                "DOMContentLoaded" === j.startEvent &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? O(!0)
                  : "load" === j.startEvent
                  ? window.addEventListener(j.startEvent, function () {
                      O(!0);
                    })
                  : document.addEventListener(j.startEvent, function () {
                      O(!0);
                    }),
                window.addEventListener("resize", (0, s["default"])(O, 50, !0)),
                window.addEventListener(
                  "orientationchange",
                  (0, s["default"])(O, 50, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, c["default"])(function () {
                    (0, b["default"])(h, j.once);
                  }, 99)
                ),
                (0, f["default"])("[data-aos]", _),
                h)
          );
        };
      e.exports = { init: E, refresh: O, refreshHard: _ };
    },
    function (e, t) {},
    ,
    ,
    ,
    function (e, t, o) {
      "use strict";
      function n(e, t, o) {
        var n = !0,
          a = !0;
        if ("function" != typeof e) throw new TypeError(c);
        return (
          i(o) &&
            ((n = "leading" in o ? !!o.leading : n),
            (a = "trailing" in o ? !!o.trailing : a)),
          r(e, t, { leading: n, maxWait: t, trailing: a })
        );
      }
      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : a(e);
        return !!e && ("object" == t || "function" == t);
      }
      var a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol
                  ? "symbol"
                  : typeof e;
              },
        r = o(6),
        c = "Expected a function";
      e.exports = n;
    },
    function (e, t) {
      "use strict";
      function o(e, t, o) {
        function n(t) {
          var o = b,
            n = v;
          return (b = v = void 0), (O = t), (y = e.apply(n, o));
        }
        function a(e) {
          return (O = e), (w = setTimeout(d, t)), _ ? n(e) : y;
        }
        function r(e) {
          var o = e - h,
            n = e - O,
            i = t - o;
          return z ? x(i, g - n) : i;
        }
        function u(e) {
          var o = e - h,
            n = e - O;
          return !h || o >= t || 0 > o || (z && n >= g);
        }
        function d() {
          var e = j();
          return u(e) ? f(e) : void (w = setTimeout(d, r(e)));
        }
        function f(e) {
          return (
            clearTimeout(w), (w = void 0), A && b ? n(e) : ((b = v = void 0), y)
          );
        }
        function l() {
          void 0 !== w && clearTimeout(w), (h = O = 0), (b = v = w = void 0);
        }
        function m() {
          return void 0 === w ? y : f(j());
        }
        function p() {
          var e = j(),
            o = u(e);
          if (((b = arguments), (v = this), (h = e), o)) {
            if (void 0 === w) return a(h);
            if (z) return clearTimeout(w), (w = setTimeout(d, t)), n(h);
          }
          return void 0 === w && (w = setTimeout(d, t)), y;
        }
        var b,
          v,
          g,
          y,
          w,
          h = 0,
          O = 0,
          _ = !1,
          z = !1,
          A = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return (
          (t = c(t) || 0),
          i(o) &&
            ((_ = !!o.leading),
            (z = "maxWait" in o),
            (g = z ? k(c(o.maxWait) || 0, t) : g),
            (A = "trailing" in o ? !!o.trailing : A)),
          (p.cancel = l),
          (p.flush = m),
          p
        );
      }
      function n(e) {
        var t = i(e) ? h.call(e) : "";
        return t == f || t == l;
      }
      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t);
      }
      function a(e) {
        return (
          !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
        );
      }
      function r(e) {
        return (
          "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) ||
          (a(e) && h.call(e) == m)
        );
      }
      function c(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return d;
        if (i(e)) {
          var t = n(e.valueOf) ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(p, "");
        var o = v.test(e);
        return o || g.test(e) ? y(e.slice(2), o ? 2 : 8) : b.test(e) ? d : +e;
      }
      var u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol
                  ? "symbol"
                  : typeof e;
              },
        s = "Expected a function",
        d = NaN,
        f = "[object Function]",
        l = "[object GeneratorFunction]",
        m = "[object Symbol]",
        p = /^\s+|\s+$/g,
        b = /^[-+]0x[0-9a-f]+$/i,
        v = /^0b[01]+$/i,
        g = /^0o[0-7]+$/i,
        y = parseInt,
        w = Object.prototype,
        h = w.toString,
        k = Math.max,
        x = Math.min,
        j = Date.now;
      e.exports = o;
    },
    function (e, t) {
      "use strict";
      function o(e, t) {
        r.push({ selector: e, fn: t }),
          !c &&
            a &&
            ((c = new a(n)),
            c.observe(i.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            })),
          n();
      }
      function n() {
        for (var e, t, o = 0, n = r.length; n > o; o++) {
          (e = r[o]), (t = i.querySelectorAll(e.selector));
          for (var a, c = 0, u = t.length; u > c; c++)
            (a = t[c]), a.ready || ((a.ready = !0), e.fn.call(a, a));
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = window.document,
        a = window.MutationObserver || window.WebKitMutationObserver,
        r = [],
        c = void 0;
      t["default"] = o;
    },
    function (e, t) {
      "use strict";
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        i = (function () {
          function e() {
            o(this, e);
          }
          return (
            n(e, [
              {
                key: "phone",
                value: function () {
                  var e = !1;
                  return (
                    (function (t) {
                      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                        t
                      ) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                          t.substr(0, 4)
                        )) &&
                        (e = !0);
                    })(navigator.userAgent || navigator.vendor || window.opera),
                    e
                  );
                },
              },
              {
                key: "mobile",
                value: function () {
                  var e = !1;
                  return (
                    (function (t) {
                      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                        t
                      ) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                          t.substr(0, 4)
                        )) &&
                        (e = !0);
                    })(navigator.userAgent || navigator.vendor || window.opera),
                    e
                  );
                },
              },
              {
                key: "tablet",
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t["default"] = new i();
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = function (e, t, o) {
          var n = e.node.getAttribute("data-aos-once");
          t > e.position
            ? e.node.classList.add("aos-animate")
            : "undefined" != typeof n &&
              ("false" === n || (!o && "true" !== n)) &&
              e.node.classList.remove("aos-animate");
        },
        n = function (e, t) {
          var n = window.pageYOffset,
            i = window.innerHeight;
          e.forEach(function (e, a) {
            o(e, i + n, t);
          });
        };
      t["default"] = n;
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = o(11),
        a = n(i),
        r = function (e, t) {
          return (
            e.forEach(function (e, o) {
              e.node.classList.add("aos-init"),
                (e.position = (0, a["default"])(e.node, t.offset));
            }),
            e
          );
        };
      t["default"] = r;
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = o(12),
        a = n(i),
        r = function (e, t) {
          var o = 0,
            n = 0,
            i = window.innerHeight,
            r = {
              offset: e.getAttribute("data-aos-offset"),
              anchor: e.getAttribute("data-aos-anchor"),
              anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
            };
          switch (
            (r.offset && !isNaN(r.offset) && (n = parseInt(r.offset)),
            r.anchor &&
              document.querySelectorAll(r.anchor) &&
              (e = document.querySelectorAll(r.anchor)[0]),
            (o = (0, a["default"])(e).top),
            r.anchorPlacement)
          ) {
            case "top-bottom":
              break;
            case "center-bottom":
              o += e.offsetHeight / 2;
              break;
            case "bottom-bottom":
              o += e.offsetHeight;
              break;
            case "top-center":
              o += i / 2;
              break;
            case "bottom-center":
              o += i / 2 + e.offsetHeight;
              break;
            case "center-center":
              o += i / 2 + e.offsetHeight / 2;
              break;
            case "top-top":
              o += i;
              break;
            case "bottom-top":
              o += e.offsetHeight + i;
              break;
            case "center-top":
              o += e.offsetHeight / 2 + i;
          }
          return r.anchorPlacement || r.offset || isNaN(t) || (n = t), o + n;
        };
      t["default"] = r;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = function (e) {
        for (
          var t = 0, o = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
            (o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: o, left: t };
      };
      t["default"] = o;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = function (e) {
        e = e || document.querySelectorAll("[data-aos]");
        var t = [];
        return (
          [].forEach.call(e, function (e, o) {
            t.push({ node: e });
          }),
          t
        );
      };
      t["default"] = o;
    },
  ]);
});
//# sourceMappingURL=aos.js.map
