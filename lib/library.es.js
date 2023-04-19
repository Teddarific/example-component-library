import * as Ot from "react";
import N, { createContext as ze, forwardRef as Zt, useContext as ge, createElement as Se, Fragment as Jt, useRef as io, useMemo as nr, isValidElement as Qt, cloneElement as en, useState as so, useCallback as co } from "react";
function lo(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function uo(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var fo = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var c;
      n.tags.length === 0 ? n.insertionPoint ? c = n.insertionPoint.nextSibling : n.prepend ? c = n.container.firstChild : c = n.before : c = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, c), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(uo(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var c = lo(o);
      try {
        c.insertRule(n, c.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), V = "-ms-", er = "-moz-", R = "-webkit-", rn = "comm", Kr = "rule", Zr = "decl", po = "@import", tn = "@keyframes", ho = Math.abs, ar = String.fromCharCode, go = Object.assign;
function mo(e, r) {
  return H(e, 0) ^ 45 ? (((r << 2 ^ H(e, 0)) << 2 ^ H(e, 1)) << 2 ^ H(e, 2)) << 2 ^ H(e, 3) : 0;
}
function nn(e) {
  return e.trim();
}
function bo(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function E(e, r, t) {
  return e.replace(r, t);
}
function Lr(e, r) {
  return e.indexOf(r);
}
function H(e, r) {
  return e.charCodeAt(r) | 0;
}
function Be(e, r, t) {
  return e.slice(r, t);
}
function re(e) {
  return e.length;
}
function Jr(e) {
  return e.length;
}
function Ue(e, r) {
  return r.push(e), e;
}
function yo(e, r) {
  return e.map(r).join("");
}
var or = 1, _e = 1, an = 0, U = 0, F = 0, xe = "";
function ir(e, r, t, n, o, c, d) {
  return { value: e, root: r, parent: t, type: n, props: o, children: c, line: or, column: _e, length: d, return: "" };
}
function $e(e, r) {
  return go(ir("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function vo() {
  return F;
}
function So() {
  return F = U > 0 ? H(xe, --U) : 0, _e--, F === 10 && (_e = 1, or--), F;
}
function X() {
  return F = U < an ? H(xe, U++) : 0, _e++, F === 10 && (_e = 1, or++), F;
}
function ne() {
  return H(xe, U);
}
function qe() {
  return U;
}
function Le(e, r) {
  return Be(xe, e, r);
}
function Oe(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function on(e) {
  return or = _e = 1, an = re(xe = e), U = 0, [];
}
function sn(e) {
  return xe = "", e;
}
function Ke(e) {
  return nn(Le(U - 1, Nr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ko(e) {
  for (; (F = ne()) && F < 33; )
    X();
  return Oe(e) > 2 || Oe(F) > 3 ? "" : " ";
}
function _o(e, r) {
  for (; --r && X() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return Le(e, qe() + (r < 6 && ne() == 32 && X() == 32));
}
function Nr(e) {
  for (; X(); )
    switch (F) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nr(F);
        break;
      case 40:
        e === 41 && Nr(e);
        break;
      case 92:
        X();
        break;
    }
  return U;
}
function xo(e, r) {
  for (; X() && e + F !== 47 + 10; )
    if (e + F === 42 + 42 && ne() === 47)
      break;
  return "/*" + Le(r, U - 1) + "*" + ar(e === 47 ? e : X());
}
function wo(e) {
  for (; !Oe(ne()); )
    X();
  return Le(e, U);
}
function To(e) {
  return sn(Ze("", null, null, null, [""], e = on(e), 0, [0], e));
}
function Ze(e, r, t, n, o, c, d, u, f) {
  for (var g = 0, p = 0, m = d, $ = 0, S = 0, y = 0, b = 1, v = 1, k = 1, T = 0, M = "", J = o, j = c, D = n, P = M; v; )
    switch (y = T, T = X()) {
      case 40:
        if (y != 108 && H(P, m - 1) == 58) {
          Lr(P += E(Ke(T), "&", "&\f"), "&\f") != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Ke(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += ko(y);
        break;
      case 92:
        P += _o(qe() - 1, 7);
        continue;
      case 47:
        switch (ne()) {
          case 42:
          case 47:
            Ue(Co(xo(X(), qe()), r, t), f);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * b:
        u[g++] = re(P) * k;
      case 125 * b:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            v = 0;
          case 59 + p:
            S > 0 && re(P) - m && Ue(S > 32 ? Mt(P + ";", n, t, m - 1) : Mt(E(P, " ", "") + ";", n, t, m - 2), f);
            break;
          case 59:
            P += ";";
          default:
            if (Ue(D = At(P, r, t, g, p, o, u, M, J = [], j = [], m), c), T === 123)
              if (p === 0)
                Ze(P, r, D, D, J, c, m, u, j);
              else
                switch ($ === 99 && H(P, 3) === 110 ? 100 : $) {
                  case 100:
                  case 109:
                  case 115:
                    Ze(e, D, D, n && Ue(At(e, D, D, 0, 0, o, u, M, o, J = [], m), j), o, j, m, u, n ? J : j);
                    break;
                  default:
                    Ze(P, D, D, D, [""], j, 0, u, j);
                }
        }
        g = p = S = 0, b = k = 1, M = P = "", m = d;
        break;
      case 58:
        m = 1 + re(P), S = y;
      default:
        if (b < 1) {
          if (T == 123)
            --b;
          else if (T == 125 && b++ == 0 && So() == 125)
            continue;
        }
        switch (P += ar(T), T * b) {
          case 38:
            k = p > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            u[g++] = (re(P) - 1) * k, k = 1;
            break;
          case 64:
            ne() === 45 && (P += Ke(X())), $ = ne(), p = m = re(M = P += wo(qe())), T++;
            break;
          case 45:
            y === 45 && re(P) == 2 && (b = 0);
        }
    }
  return c;
}
function At(e, r, t, n, o, c, d, u, f, g, p) {
  for (var m = o - 1, $ = o === 0 ? c : [""], S = Jr($), y = 0, b = 0, v = 0; y < n; ++y)
    for (var k = 0, T = Be(e, m + 1, m = ho(b = d[y])), M = e; k < S; ++k)
      (M = nn(b > 0 ? $[k] + " " + T : E(T, /&\f/g, $[k]))) && (f[v++] = M);
  return ir(e, r, t, o === 0 ? Kr : u, f, g, p);
}
function Co(e, r, t) {
  return ir(e, r, t, rn, ar(vo()), Be(e, 2, -2), 0);
}
function Mt(e, r, t, n) {
  return ir(e, r, t, Zr, Be(e, 0, n), Be(e, n + 1, -1), n);
}
function ke(e, r) {
  for (var t = "", n = Jr(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Ro(e, r, t, n) {
  switch (e.type) {
    case po:
    case Zr:
      return e.return = e.return || e.value;
    case rn:
      return "";
    case tn:
      return e.return = e.value + "{" + ke(e.children, n) + "}";
    case Kr:
      e.value = e.props.join(",");
  }
  return re(t = ke(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Eo(e) {
  var r = Jr(e);
  return function(t, n, o, c) {
    for (var d = "", u = 0; u < r; u++)
      d += e[u](t, n, o, c) || "";
    return d;
  };
}
function $o(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function cn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Io = function(r, t, n) {
  for (var o = 0, c = 0; o = c, c = ne(), o === 38 && c === 12 && (t[n] = 1), !Oe(c); )
    X();
  return Le(r, U);
}, Po = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Oe(o)) {
      case 0:
        o === 38 && ne() === 12 && (t[n] = 1), r[n] += Io(U - 1, t, n);
        break;
      case 2:
        r[n] += Ke(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = ne() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += ar(o);
    }
  while (o = X());
  return r;
}, Bo = function(r, t) {
  return sn(Po(on(r), t));
}, zt = /* @__PURE__ */ new WeakMap(), Oo = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !zt.get(n)) && !o) {
      zt.set(r, !0);
      for (var c = [], d = Bo(t, c), u = n.props, f = 0, g = 0; f < d.length; f++)
        for (var p = 0; p < u.length; p++, g++)
          r.props[g] = c[f] ? d[f].replace(/&\f/g, u[p]) : u[p] + " " + d[f];
    }
  }
}, Ao = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function ln(e, r) {
  switch (mo(e, r)) {
    case 5103:
      return R + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return R + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return R + e + er + e + V + e + e;
    case 6828:
    case 4268:
      return R + e + V + e + e;
    case 6165:
      return R + e + V + "flex-" + e + e;
    case 5187:
      return R + e + E(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + V + "flex-$1$2") + e;
    case 5443:
      return R + e + V + "flex-item-" + E(e, /flex-|-self/, "") + e;
    case 4675:
      return R + e + V + "flex-line-pack" + E(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return R + e + V + E(e, "shrink", "negative") + e;
    case 5292:
      return R + e + V + E(e, "basis", "preferred-size") + e;
    case 6060:
      return R + "box-" + E(e, "-grow", "") + R + e + V + E(e, "grow", "positive") + e;
    case 4554:
      return R + E(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
    case 6187:
      return E(E(E(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return E(e, /(image-set\([^]*)/, R + "$1$`$1");
    case 4968:
      return E(E(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + V + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + R + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e, /(.+)-inline(.+)/, R + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (re(e) - 1 - r > 6)
        switch (H(e, r + 1)) {
          case 109:
            if (H(e, r + 4) !== 45)
              break;
          case 102:
            return E(e, /(.+:)(.+)-([^]+)/, "$1" + R + "$2-$3$1" + er + (H(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Lr(e, "stretch") ? ln(E(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (H(e, r + 1) !== 115)
        break;
    case 6444:
      switch (H(e, re(e) - 3 - (~Lr(e, "!important") && 10))) {
        case 107:
          return E(e, ":", ":" + R) + e;
        case 101:
          return E(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + R + (H(e, 14) === 45 ? "inline-" : "") + "box$3$1" + R + "$2$3$1" + V + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (H(e, r + 11)) {
        case 114:
          return R + e + V + E(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return R + e + V + E(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return R + e + V + E(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return R + e + V + e + e;
  }
  return e;
}
var Mo = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Zr:
        r.return = ln(r.value, r.length);
        break;
      case tn:
        return ke([$e(r, {
          value: E(r.value, "@", "@" + R)
        })], o);
      case Kr:
        if (r.length)
          return yo(r.props, function(c) {
            switch (bo(c, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ke([$e(r, {
                  props: [E(c, /:(read-\w+)/, ":" + er + "$1")]
                })], o);
              case "::placeholder":
                return ke([$e(r, {
                  props: [E(c, /:(plac\w+)/, ":" + R + "input-$1")]
                }), $e(r, {
                  props: [E(c, /:(plac\w+)/, ":" + er + "$1")]
                }), $e(r, {
                  props: [E(c, /:(plac\w+)/, V + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, zo = [Mo], Lo = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(b) {
      var v = b.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || zo, c = {}, d, u = [];
  d = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(b) {
      for (var v = b.getAttribute("data-emotion").split(" "), k = 1; k < v.length; k++)
        c[v[k]] = !0;
      u.push(b);
    }
  );
  var f, g = [Oo, Ao];
  {
    var p, m = [Ro, $o(function(b) {
      p.insert(b);
    })], $ = Eo(g.concat(o, m)), S = function(v) {
      return ke(To(v), $);
    };
    f = function(v, k, T, M) {
      p = T, S(v ? v + "{" + k.styles + "}" : k.styles), M && (y.inserted[k.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new fo({
      key: t,
      container: d,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: c,
    registered: {},
    insert: f
  };
  return y.sheet.hydrate(u), y;
};
function Fr() {
  return Fr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Fr.apply(this, arguments);
}
var Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wr = {}, No = {
  get exports() {
    return Wr;
  },
  set exports(e) {
    Wr = e;
  }
}, I = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W = typeof Symbol == "function" && Symbol.for, Qr = W ? Symbol.for("react.element") : 60103, et = W ? Symbol.for("react.portal") : 60106, sr = W ? Symbol.for("react.fragment") : 60107, cr = W ? Symbol.for("react.strict_mode") : 60108, lr = W ? Symbol.for("react.profiler") : 60114, dr = W ? Symbol.for("react.provider") : 60109, ur = W ? Symbol.for("react.context") : 60110, rt = W ? Symbol.for("react.async_mode") : 60111, fr = W ? Symbol.for("react.concurrent_mode") : 60111, pr = W ? Symbol.for("react.forward_ref") : 60112, hr = W ? Symbol.for("react.suspense") : 60113, Fo = W ? Symbol.for("react.suspense_list") : 60120, gr = W ? Symbol.for("react.memo") : 60115, mr = W ? Symbol.for("react.lazy") : 60116, Wo = W ? Symbol.for("react.block") : 60121, jo = W ? Symbol.for("react.fundamental") : 60117, Do = W ? Symbol.for("react.responder") : 60118, Go = W ? Symbol.for("react.scope") : 60119;
function q(e) {
  if (typeof e == "object" && e !== null) {
    var r = e.$$typeof;
    switch (r) {
      case Qr:
        switch (e = e.type, e) {
          case rt:
          case fr:
          case sr:
          case lr:
          case cr:
          case hr:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ur:
              case pr:
              case mr:
              case gr:
              case dr:
                return e;
              default:
                return r;
            }
        }
      case et:
        return r;
    }
  }
}
function dn(e) {
  return q(e) === fr;
}
I.AsyncMode = rt;
I.ConcurrentMode = fr;
I.ContextConsumer = ur;
I.ContextProvider = dr;
I.Element = Qr;
I.ForwardRef = pr;
I.Fragment = sr;
I.Lazy = mr;
I.Memo = gr;
I.Portal = et;
I.Profiler = lr;
I.StrictMode = cr;
I.Suspense = hr;
I.isAsyncMode = function(e) {
  return dn(e) || q(e) === rt;
};
I.isConcurrentMode = dn;
I.isContextConsumer = function(e) {
  return q(e) === ur;
};
I.isContextProvider = function(e) {
  return q(e) === dr;
};
I.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
};
I.isForwardRef = function(e) {
  return q(e) === pr;
};
I.isFragment = function(e) {
  return q(e) === sr;
};
I.isLazy = function(e) {
  return q(e) === mr;
};
I.isMemo = function(e) {
  return q(e) === gr;
};
I.isPortal = function(e) {
  return q(e) === et;
};
I.isProfiler = function(e) {
  return q(e) === lr;
};
I.isStrictMode = function(e) {
  return q(e) === cr;
};
I.isSuspense = function(e) {
  return q(e) === hr;
};
I.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === sr || e === fr || e === lr || e === cr || e === hr || e === Fo || typeof e == "object" && e !== null && (e.$$typeof === mr || e.$$typeof === gr || e.$$typeof === dr || e.$$typeof === ur || e.$$typeof === pr || e.$$typeof === jo || e.$$typeof === Do || e.$$typeof === Go || e.$$typeof === Wo);
};
I.typeOf = q;
(function(e) {
  e.exports = I;
})(No);
var un = Wr, Ho = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Vo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, fn = {};
fn[un.ForwardRef] = Ho;
fn[un.Memo] = Vo;
var Uo = !0;
function pn(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var tt = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Uo === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, hn = function(r, t, n) {
  tt(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var c = t;
    do
      r.insert(t === c ? "." + o : "", c, r.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function Yo(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Xo = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, qo = /[A-Z]|^ms/g, Ko = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gn = function(r) {
  return r.charCodeAt(1) === 45;
}, Lt = function(r) {
  return r != null && typeof r != "boolean";
}, Ar = /* @__PURE__ */ cn(function(e) {
  return gn(e) ? e : e.replace(qo, "-$&").toLowerCase();
}), Nt = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Ko, function(n, o, c) {
          return te = {
            name: o,
            styles: c,
            next: te
          }, o;
        });
  }
  return Xo[r] !== 1 && !gn(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function Ae(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0)
    return t;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return te = {
          name: t.name,
          styles: t.styles,
          next: te
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            te = {
              name: n.name,
              styles: n.styles,
              next: te
            }, n = n.next;
        var o = t.styles + ";";
        return o;
      }
      return Zo(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var c = te, d = t(e);
        return te = c, Ae(e, r, d);
      }
      break;
    }
  }
  if (r == null)
    return t;
  var u = r[t];
  return u !== void 0 ? u : t;
}
function Zo(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Ae(e, r, t[o]) + ";";
  else
    for (var c in t) {
      var d = t[c];
      if (typeof d != "object")
        r != null && r[d] !== void 0 ? n += c + "{" + r[d] + "}" : Lt(d) && (n += Ar(c) + ":" + Nt(c, d) + ";");
      else if (Array.isArray(d) && typeof d[0] == "string" && (r == null || r[d[0]] === void 0))
        for (var u = 0; u < d.length; u++)
          Lt(d[u]) && (n += Ar(c) + ":" + Nt(c, d[u]) + ";");
      else {
        var f = Ae(e, r, d);
        switch (c) {
          case "animation":
          case "animationName": {
            n += Ar(c) + ":" + f + ";";
            break;
          }
          default:
            n += c + "{" + f + "}";
        }
      }
    }
  return n;
}
var Ft = /label:\s*([^\s;\n{]+)\s*(;|$)/g, te, nt = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, c = "";
  te = void 0;
  var d = r[0];
  d == null || d.raw === void 0 ? (o = !1, c += Ae(n, t, d)) : c += d[0];
  for (var u = 1; u < r.length; u++)
    c += Ae(n, t, r[u]), o && (c += d[u]);
  Ft.lastIndex = 0;
  for (var f = "", g; (g = Ft.exec(c)) !== null; )
    f += "-" + // $FlowFixMe we know it's not null
    g[1];
  var p = Yo(c) + f;
  return {
    name: p,
    styles: c,
    next: te
  };
}, Jo = function(r) {
  return r();
}, Qo = Ot["useInsertionEffect"] ? Ot["useInsertionEffect"] : !1, mn = Qo || Jo, at = {}.hasOwnProperty, bn = /* @__PURE__ */ ze(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Lo({
    key: "css"
  }) : null
);
bn.Provider;
var yn = function(r) {
  return /* @__PURE__ */ Zt(function(t, n) {
    var o = ge(bn);
    return r(t, o, n);
  });
}, ot = /* @__PURE__ */ ze({}), jr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ei = function(r, t) {
  var n = {};
  for (var o in t)
    at.call(t, o) && (n[o] = t[o]);
  return n[jr] = r, n;
}, ri = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return tt(t, n, o), mn(function() {
    return hn(t, n, o);
  }), null;
}, ti = /* @__PURE__ */ yn(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[jr], c = [n], d = "";
  typeof e.className == "string" ? d = pn(r.registered, c, e.className) : e.className != null && (d = e.className + " ");
  var u = nt(c, void 0, ge(ot));
  d += r.key + "-" + u.name;
  var f = {};
  for (var g in e)
    at.call(e, g) && g !== "css" && g !== jr && (f[g] = e[g]);
  return f.ref = t, f.className = d, /* @__PURE__ */ Se(Jt, null, /* @__PURE__ */ Se(ri, {
    cache: r,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ Se(o, f));
}), Dr = {}, ni = {
  get exports() {
    return Dr;
  },
  set exports(e) {
    Dr = e;
  }
}, br = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ai = N, oi = Symbol.for("react.element"), ii = Symbol.for("react.fragment"), si = Object.prototype.hasOwnProperty, ci = ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, li = { key: !0, ref: !0, __self: !0, __source: !0 };
function vn(e, r, t) {
  var n, o = {}, c = null, d = null;
  t !== void 0 && (c = "" + t), r.key !== void 0 && (c = "" + r.key), r.ref !== void 0 && (d = r.ref);
  for (n in r)
    si.call(r, n) && !li.hasOwnProperty(n) && (o[n] = r[n]);
  if (e && e.defaultProps)
    for (n in r = e.defaultProps, r)
      o[n] === void 0 && (o[n] = r[n]);
  return { $$typeof: oi, type: e, key: c, ref: d, props: o, _owner: ci.current };
}
br.Fragment = ii;
br.jsx = vn;
br.jsxs = vn;
(function(e) {
  e.exports = br;
})(ni);
const Wt = Dr.jsx;
function Gr(e, r, t) {
  return at.call(r, "css") ? Wt(ti, ei(e, r), t) : Wt(e, r, t);
}
function di({ text: e }) {
  return /* @__PURE__ */ Gr("div", { children: e });
}
var Sn = ze({});
Sn.displayName = "ColorModeContext";
function kn() {
  const e = ge(Sn);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var rr = {}, ui = {
  get exports() {
    return rr;
  },
  set exports(e) {
    rr = e;
  }
};
(function(e, r) {
  var t = 200, n = "__lodash_hash_undefined__", o = 800, c = 16, d = 9007199254740991, u = "[object Arguments]", f = "[object Array]", g = "[object AsyncFunction]", p = "[object Boolean]", m = "[object Date]", $ = "[object Error]", S = "[object Function]", y = "[object GeneratorFunction]", b = "[object Map]", v = "[object Number]", k = "[object Null]", T = "[object Object]", M = "[object Proxy]", J = "[object RegExp]", j = "[object Set]", D = "[object String]", P = "[object Undefined]", kr = "[object WeakMap]", me = "[object ArrayBuffer]", be = "[object DataView]", An = "[object Float32Array]", Mn = "[object Float64Array]", zn = "[object Int8Array]", Ln = "[object Int16Array]", Nn = "[object Int32Array]", Fn = "[object Uint8Array]", Wn = "[object Uint8ClampedArray]", jn = "[object Uint16Array]", Dn = "[object Uint32Array]", Gn = /[\\^$.*+?()[\]{}|]/g, Hn = /^\[object .+?Constructor\]$/, Vn = /^(?:0|[1-9]\d*)$/, O = {};
  O[An] = O[Mn] = O[zn] = O[Ln] = O[Nn] = O[Fn] = O[Wn] = O[jn] = O[Dn] = !0, O[u] = O[f] = O[me] = O[p] = O[be] = O[m] = O[$] = O[S] = O[b] = O[v] = O[T] = O[J] = O[j] = O[D] = O[kr] = !1;
  var lt = typeof Ye == "object" && Ye && Ye.Object === Object && Ye, Un = typeof self == "object" && self && self.Object === Object && self, we = lt || Un || Function("return this")(), dt = r && !r.nodeType && r, Te = dt && !0 && e && !e.nodeType && e, ut = Te && Te.exports === dt, _r = ut && lt.process, ft = function() {
    try {
      var a = Te && Te.require && Te.require("util").types;
      return a || _r && _r.binding && _r.binding("util");
    } catch {
    }
  }(), pt = ft && ft.isTypedArray;
  function Yn(a, i, l) {
    switch (l.length) {
      case 0:
        return a.call(i);
      case 1:
        return a.call(i, l[0]);
      case 2:
        return a.call(i, l[0], l[1]);
      case 3:
        return a.call(i, l[0], l[1], l[2]);
    }
    return a.apply(i, l);
  }
  function Xn(a, i) {
    for (var l = -1, h = Array(a); ++l < a; )
      h[l] = i(l);
    return h;
  }
  function qn(a) {
    return function(i) {
      return a(i);
    };
  }
  function Kn(a, i) {
    return a == null ? void 0 : a[i];
  }
  function Zn(a, i) {
    return function(l) {
      return a(i(l));
    };
  }
  var Jn = Array.prototype, Qn = Function.prototype, Ne = Object.prototype, xr = we["__core-js_shared__"], Fe = Qn.toString, ae = Ne.hasOwnProperty, ht = function() {
    var a = /[^.]+$/.exec(xr && xr.keys && xr.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  }(), gt = Ne.toString, ea = Fe.call(Object), ra = RegExp(
    "^" + Fe.call(ae).replace(Gn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), We = ut ? we.Buffer : void 0, mt = we.Symbol, bt = we.Uint8Array, yt = We ? We.allocUnsafe : void 0, vt = Zn(Object.getPrototypeOf, Object), St = Object.create, ta = Ne.propertyIsEnumerable, na = Jn.splice, le = mt ? mt.toStringTag : void 0, je = function() {
    try {
      var a = Cr(Object, "defineProperty");
      return a({}, "", {}), a;
    } catch {
    }
  }(), aa = We ? We.isBuffer : void 0, kt = Math.max, oa = Date.now, _t = Cr(we, "Map"), Ce = Cr(Object, "create"), ia = function() {
    function a() {
    }
    return function(i) {
      if (!ue(i))
        return {};
      if (St)
        return St(i);
      a.prototype = i;
      var l = new a();
      return a.prototype = void 0, l;
    };
  }();
  function de(a) {
    var i = -1, l = a == null ? 0 : a.length;
    for (this.clear(); ++i < l; ) {
      var h = a[i];
      this.set(h[0], h[1]);
    }
  }
  function sa() {
    this.__data__ = Ce ? Ce(null) : {}, this.size = 0;
  }
  function ca(a) {
    var i = this.has(a) && delete this.__data__[a];
    return this.size -= i ? 1 : 0, i;
  }
  function la(a) {
    var i = this.__data__;
    if (Ce) {
      var l = i[a];
      return l === n ? void 0 : l;
    }
    return ae.call(i, a) ? i[a] : void 0;
  }
  function da(a) {
    var i = this.__data__;
    return Ce ? i[a] !== void 0 : ae.call(i, a);
  }
  function ua(a, i) {
    var l = this.__data__;
    return this.size += this.has(a) ? 0 : 1, l[a] = Ce && i === void 0 ? n : i, this;
  }
  de.prototype.clear = sa, de.prototype.delete = ca, de.prototype.get = la, de.prototype.has = da, de.prototype.set = ua;
  function oe(a) {
    var i = -1, l = a == null ? 0 : a.length;
    for (this.clear(); ++i < l; ) {
      var h = a[i];
      this.set(h[0], h[1]);
    }
  }
  function fa() {
    this.__data__ = [], this.size = 0;
  }
  function pa(a) {
    var i = this.__data__, l = De(i, a);
    if (l < 0)
      return !1;
    var h = i.length - 1;
    return l == h ? i.pop() : na.call(i, l, 1), --this.size, !0;
  }
  function ha(a) {
    var i = this.__data__, l = De(i, a);
    return l < 0 ? void 0 : i[l][1];
  }
  function ga(a) {
    return De(this.__data__, a) > -1;
  }
  function ma(a, i) {
    var l = this.__data__, h = De(l, a);
    return h < 0 ? (++this.size, l.push([a, i])) : l[h][1] = i, this;
  }
  oe.prototype.clear = fa, oe.prototype.delete = pa, oe.prototype.get = ha, oe.prototype.has = ga, oe.prototype.set = ma;
  function ye(a) {
    var i = -1, l = a == null ? 0 : a.length;
    for (this.clear(); ++i < l; ) {
      var h = a[i];
      this.set(h[0], h[1]);
    }
  }
  function ba() {
    this.size = 0, this.__data__ = {
      hash: new de(),
      map: new (_t || oe)(),
      string: new de()
    };
  }
  function ya(a) {
    var i = He(this, a).delete(a);
    return this.size -= i ? 1 : 0, i;
  }
  function va(a) {
    return He(this, a).get(a);
  }
  function Sa(a) {
    return He(this, a).has(a);
  }
  function ka(a, i) {
    var l = He(this, a), h = l.size;
    return l.set(a, i), this.size += l.size == h ? 0 : 1, this;
  }
  ye.prototype.clear = ba, ye.prototype.delete = ya, ye.prototype.get = va, ye.prototype.has = Sa, ye.prototype.set = ka;
  function ve(a) {
    var i = this.__data__ = new oe(a);
    this.size = i.size;
  }
  function _a() {
    this.__data__ = new oe(), this.size = 0;
  }
  function xa(a) {
    var i = this.__data__, l = i.delete(a);
    return this.size = i.size, l;
  }
  function wa(a) {
    return this.__data__.get(a);
  }
  function Ta(a) {
    return this.__data__.has(a);
  }
  function Ca(a, i) {
    var l = this.__data__;
    if (l instanceof oe) {
      var h = l.__data__;
      if (!_t || h.length < t - 1)
        return h.push([a, i]), this.size = ++l.size, this;
      l = this.__data__ = new ye(h);
    }
    return l.set(a, i), this.size = l.size, this;
  }
  ve.prototype.clear = _a, ve.prototype.delete = xa, ve.prototype.get = wa, ve.prototype.has = Ta, ve.prototype.set = Ca;
  function Ra(a, i) {
    var l = $r(a), h = !l && Er(a), x = !l && !h && Rt(a), B = !l && !h && !x && $t(a), z = l || h || x || B, _ = z ? Xn(a.length, String) : [], L = _.length;
    for (var K in a)
      (i || ae.call(a, K)) && !(z && // Safari 9 has enumerable `arguments.length` in strict mode.
      (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      x && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      B && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
      Tt(K, L))) && _.push(K);
    return _;
  }
  function wr(a, i, l) {
    (l !== void 0 && !Ve(a[i], l) || l === void 0 && !(i in a)) && Tr(a, i, l);
  }
  function Ea(a, i, l) {
    var h = a[i];
    (!(ae.call(a, i) && Ve(h, l)) || l === void 0 && !(i in a)) && Tr(a, i, l);
  }
  function De(a, i) {
    for (var l = a.length; l--; )
      if (Ve(a[l][0], i))
        return l;
    return -1;
  }
  function Tr(a, i, l) {
    i == "__proto__" && je ? je(a, i, {
      configurable: !0,
      enumerable: !0,
      value: l,
      writable: !0
    }) : a[i] = l;
  }
  var $a = Da();
  function Ge(a) {
    return a == null ? a === void 0 ? P : k : le && le in Object(a) ? Ga(a) : qa(a);
  }
  function xt(a) {
    return Re(a) && Ge(a) == u;
  }
  function Ia(a) {
    if (!ue(a) || Ya(a))
      return !1;
    var i = Pr(a) ? ra : Hn;
    return i.test(Qa(a));
  }
  function Pa(a) {
    return Re(a) && Et(a.length) && !!O[Ge(a)];
  }
  function Ba(a) {
    if (!ue(a))
      return Xa(a);
    var i = Ct(a), l = [];
    for (var h in a)
      h == "constructor" && (i || !ae.call(a, h)) || l.push(h);
    return l;
  }
  function wt(a, i, l, h, x) {
    a !== i && $a(i, function(B, z) {
      if (x || (x = new ve()), ue(B))
        Oa(a, i, z, l, wt, h, x);
      else {
        var _ = h ? h(Rr(a, z), B, z + "", a, i, x) : void 0;
        _ === void 0 && (_ = B), wr(a, z, _);
      }
    }, It);
  }
  function Oa(a, i, l, h, x, B, z) {
    var _ = Rr(a, l), L = Rr(i, l), K = z.get(L);
    if (K) {
      wr(a, l, K);
      return;
    }
    var Y = B ? B(_, L, l + "", a, i, z) : void 0, Ee = Y === void 0;
    if (Ee) {
      var Br = $r(L), Or = !Br && Rt(L), Bt = !Br && !Or && $t(L);
      Y = L, Br || Or || Bt ? $r(_) ? Y = _ : eo(_) ? Y = Fa(_) : Or ? (Ee = !1, Y = za(L, !0)) : Bt ? (Ee = !1, Y = Na(L, !0)) : Y = [] : ro(L) || Er(L) ? (Y = _, Er(_) ? Y = to(_) : (!ue(_) || Pr(_)) && (Y = Ha(L))) : Ee = !1;
    }
    Ee && (z.set(L, Y), x(Y, L, h, B, z), z.delete(L)), wr(a, l, Y);
  }
  function Aa(a, i) {
    return Za(Ka(a, i, Pt), a + "");
  }
  var Ma = je ? function(a, i) {
    return je(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: ao(i),
      writable: !0
    });
  } : Pt;
  function za(a, i) {
    if (i)
      return a.slice();
    var l = a.length, h = yt ? yt(l) : new a.constructor(l);
    return a.copy(h), h;
  }
  function La(a) {
    var i = new a.constructor(a.byteLength);
    return new bt(i).set(new bt(a)), i;
  }
  function Na(a, i) {
    var l = i ? La(a.buffer) : a.buffer;
    return new a.constructor(l, a.byteOffset, a.length);
  }
  function Fa(a, i) {
    var l = -1, h = a.length;
    for (i || (i = Array(h)); ++l < h; )
      i[l] = a[l];
    return i;
  }
  function Wa(a, i, l, h) {
    var x = !l;
    l || (l = {});
    for (var B = -1, z = i.length; ++B < z; ) {
      var _ = i[B], L = h ? h(l[_], a[_], _, l, a) : void 0;
      L === void 0 && (L = a[_]), x ? Tr(l, _, L) : Ea(l, _, L);
    }
    return l;
  }
  function ja(a) {
    return Aa(function(i, l) {
      var h = -1, x = l.length, B = x > 1 ? l[x - 1] : void 0, z = x > 2 ? l[2] : void 0;
      for (B = a.length > 3 && typeof B == "function" ? (x--, B) : void 0, z && Va(l[0], l[1], z) && (B = x < 3 ? void 0 : B, x = 1), i = Object(i); ++h < x; ) {
        var _ = l[h];
        _ && a(i, _, h, B);
      }
      return i;
    });
  }
  function Da(a) {
    return function(i, l, h) {
      for (var x = -1, B = Object(i), z = h(i), _ = z.length; _--; ) {
        var L = z[a ? _ : ++x];
        if (l(B[L], L, B) === !1)
          break;
      }
      return i;
    };
  }
  function He(a, i) {
    var l = a.__data__;
    return Ua(i) ? l[typeof i == "string" ? "string" : "hash"] : l.map;
  }
  function Cr(a, i) {
    var l = Kn(a, i);
    return Ia(l) ? l : void 0;
  }
  function Ga(a) {
    var i = ae.call(a, le), l = a[le];
    try {
      a[le] = void 0;
      var h = !0;
    } catch {
    }
    var x = gt.call(a);
    return h && (i ? a[le] = l : delete a[le]), x;
  }
  function Ha(a) {
    return typeof a.constructor == "function" && !Ct(a) ? ia(vt(a)) : {};
  }
  function Tt(a, i) {
    var l = typeof a;
    return i = i ?? d, !!i && (l == "number" || l != "symbol" && Vn.test(a)) && a > -1 && a % 1 == 0 && a < i;
  }
  function Va(a, i, l) {
    if (!ue(l))
      return !1;
    var h = typeof i;
    return (h == "number" ? Ir(l) && Tt(i, l.length) : h == "string" && i in l) ? Ve(l[i], a) : !1;
  }
  function Ua(a) {
    var i = typeof a;
    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? a !== "__proto__" : a === null;
  }
  function Ya(a) {
    return !!ht && ht in a;
  }
  function Ct(a) {
    var i = a && a.constructor, l = typeof i == "function" && i.prototype || Ne;
    return a === l;
  }
  function Xa(a) {
    var i = [];
    if (a != null)
      for (var l in Object(a))
        i.push(l);
    return i;
  }
  function qa(a) {
    return gt.call(a);
  }
  function Ka(a, i, l) {
    return i = kt(i === void 0 ? a.length - 1 : i, 0), function() {
      for (var h = arguments, x = -1, B = kt(h.length - i, 0), z = Array(B); ++x < B; )
        z[x] = h[i + x];
      x = -1;
      for (var _ = Array(i + 1); ++x < i; )
        _[x] = h[x];
      return _[i] = l(z), Yn(a, this, _);
    };
  }
  function Rr(a, i) {
    if (!(i === "constructor" && typeof a[i] == "function") && i != "__proto__")
      return a[i];
  }
  var Za = Ja(Ma);
  function Ja(a) {
    var i = 0, l = 0;
    return function() {
      var h = oa(), x = c - (h - l);
      if (l = h, x > 0) {
        if (++i >= o)
          return arguments[0];
      } else
        i = 0;
      return a.apply(void 0, arguments);
    };
  }
  function Qa(a) {
    if (a != null) {
      try {
        return Fe.call(a);
      } catch {
      }
      try {
        return a + "";
      } catch {
      }
    }
    return "";
  }
  function Ve(a, i) {
    return a === i || a !== a && i !== i;
  }
  var Er = xt(function() {
    return arguments;
  }()) ? xt : function(a) {
    return Re(a) && ae.call(a, "callee") && !ta.call(a, "callee");
  }, $r = Array.isArray;
  function Ir(a) {
    return a != null && Et(a.length) && !Pr(a);
  }
  function eo(a) {
    return Re(a) && Ir(a);
  }
  var Rt = aa || oo;
  function Pr(a) {
    if (!ue(a))
      return !1;
    var i = Ge(a);
    return i == S || i == y || i == g || i == M;
  }
  function Et(a) {
    return typeof a == "number" && a > -1 && a % 1 == 0 && a <= d;
  }
  function ue(a) {
    var i = typeof a;
    return a != null && (i == "object" || i == "function");
  }
  function Re(a) {
    return a != null && typeof a == "object";
  }
  function ro(a) {
    if (!Re(a) || Ge(a) != T)
      return !1;
    var i = vt(a);
    if (i === null)
      return !0;
    var l = ae.call(i, "constructor") && i.constructor;
    return typeof l == "function" && l instanceof l && Fe.call(l) == ea;
  }
  var $t = pt ? qn(pt) : Pa;
  function to(a) {
    return Wa(a, It(a));
  }
  function It(a) {
    return Ir(a) ? Ra(a, !0) : Ba(a);
  }
  var no = ja(function(a, i, l, h) {
    wt(a, i, l, h);
  });
  function ao(a) {
    return function() {
      return a;
    };
  }
  function Pt(a) {
    return a;
  }
  function oo() {
    return !1;
  }
  e.exports = no;
})(ui, rr);
const se = rr;
function pe(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function fe(e, ...r) {
  return fi(e) ? e(...r) : e;
}
var fi = (e) => typeof e == "function", pi = (e) => /!(important)?$/.test(e), jt = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, hi = (e, r) => (t) => {
  const n = String(r), o = pi(n), c = jt(n), d = e ? `${e}.${c}` : c;
  let u = pe(t.__cssMap) && d in t.__cssMap ? t.__cssMap[d].varRef : r;
  return u = jt(u), o ? `${u} !important` : u;
};
function Me(e) {
  const { scale: r, transform: t, compose: n } = e;
  return (c, d) => {
    const u = hi(r, c)(d);
    let f = (t == null ? void 0 : t(u, d)) ?? u;
    return n && (f = n(f, d)), f;
  };
}
var Xe = (...e) => (r) => e.reduce((t, n) => n(t), r);
function Q(e, r) {
  return (t) => {
    const n = { property: t, scale: e };
    return n.transform = Me({
      scale: e,
      transform: r
    }), n;
  };
}
var gi = ({ rtl: e, ltr: r }) => (t) => t.direction === "rtl" ? e : r;
function mi(e) {
  const { property: r, scale: t, transform: n } = e;
  return {
    scale: t,
    property: gi(r),
    transform: t ? Me({
      scale: t,
      compose: n
    }) : n
  };
}
var _n = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function bi() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ..._n
  ].join(" ");
}
function yi() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ..._n
  ].join(" ");
}
var vi = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, Si = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function ki(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var _i = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, xn = "& > :not(style) ~ :not(style)", xi = {
  [xn]: {
    marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
    marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
  }
}, wi = {
  [xn]: {
    marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
    marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
  }
}, Hr = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, Ti = new Set(Object.values(Hr)), wn = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), Ci = (e) => e.trim();
function Ri(e, r) {
  var t;
  if (e == null || wn.has(e))
    return e;
  const n = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g, { type: o, values: c } = ((t = n.exec(e)) == null ? void 0 : t.groups) ?? {};
  if (!o || !c)
    return e;
  const d = o.includes("-gradient") ? o : `${o}-gradient`, [u, ...f] = c.split(",").map(Ci).filter(Boolean);
  if ((f == null ? void 0 : f.length) === 0)
    return e;
  const g = u in Hr ? Hr[u] : u;
  f.unshift(g);
  const p = f.map((m) => {
    if (Ti.has(m))
      return m;
    const $ = m.indexOf(" "), [S, y] = $ !== -1 ? [m.substr(0, $), m.substr($ + 1)] : [m], b = Tn(y) ? y : y && y.split(" "), v = `colors.${S}`, k = v in r.__cssMap ? r.__cssMap[v].varRef : S;
    return b ? [
      k,
      ...Array.isArray(b) ? b : [b]
    ].join(" ") : k;
  });
  return `${d}(${p.join(", ")})`;
}
var Tn = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), Ei = (e, r) => Ri(e, r ?? {});
function $i(e) {
  return /^var\(--.+\)$/.test(e);
}
var Ii = (e) => {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}, ee = (e) => (r) => `${e}(${r})`, w = {
  filter(e) {
    return e !== "auto" ? e : vi;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : Si;
  },
  ring(e) {
    return ki(w.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? bi() : e === "auto-gpu" ? yi() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = Ii(e);
    return r || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, r) {
    const t = { left: "right", right: "left" };
    return r.direction === "rtl" ? t[e] : e;
  },
  degree(e) {
    if ($i(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: Ei,
  blur: ee("blur"),
  opacity: ee("opacity"),
  brightness: ee("brightness"),
  contrast: ee("contrast"),
  dropShadow: ee("drop-shadow"),
  grayscale: ee("grayscale"),
  hueRotate: ee("hue-rotate"),
  invert: ee("invert"),
  saturate: ee("saturate"),
  sepia: ee("sepia"),
  bgImage(e) {
    return e == null || Tn(e) || wn.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    const { space: r, divide: t } = _i[e] ?? {}, n = { flexDirection: e };
    return r && (n[r] = 1), t && (n[t] = 1), n;
  }
}, s = {
  borderWidths: Q("borderWidths"),
  borderStyles: Q("borderStyles"),
  colors: Q("colors"),
  borders: Q("borders"),
  radii: Q("radii", w.px),
  space: Q("space", Xe(w.vh, w.px)),
  spaceT: Q("space", Xe(w.vh, w.px)),
  degreeT(e) {
    return { property: e, transform: w.degree };
  },
  prop(e, r, t) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: Me({ scale: r, transform: t })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: Q("sizes", Xe(w.vh, w.px)),
  sizesT: Q("sizes", Xe(w.vh, w.fraction)),
  shadows: Q("shadows"),
  logical: mi,
  blur: Q("blur", w.blur)
}, Je = {
  background: s.colors("background"),
  backgroundColor: s.colors("backgroundColor"),
  backgroundImage: s.propT("backgroundImage", w.bgImage),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: w.bgClip },
  bgSize: s.prop("backgroundSize"),
  bgPosition: s.prop("backgroundPosition"),
  bg: s.colors("background"),
  bgColor: s.colors("backgroundColor"),
  bgPos: s.prop("backgroundPosition"),
  bgRepeat: s.prop("backgroundRepeat"),
  bgAttachment: s.prop("backgroundAttachment"),
  bgGradient: s.propT("backgroundImage", w.gradient),
  bgClip: { transform: w.bgClip }
};
Object.assign(Je, {
  bgImage: Je.backgroundImage,
  bgImg: Je.backgroundImage
});
var C = {
  border: s.borders("border"),
  borderWidth: s.borderWidths("borderWidth"),
  borderStyle: s.borderStyles("borderStyle"),
  borderColor: s.colors("borderColor"),
  borderRadius: s.radii("borderRadius"),
  borderTop: s.borders("borderTop"),
  borderBlockStart: s.borders("borderBlockStart"),
  borderTopLeftRadius: s.radii("borderTopLeftRadius"),
  borderStartStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: s.radii("borderTopRightRadius"),
  borderStartEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: s.borders("borderRight"),
  borderInlineEnd: s.borders("borderInlineEnd"),
  borderBottom: s.borders("borderBottom"),
  borderBlockEnd: s.borders("borderBlockEnd"),
  borderBottomLeftRadius: s.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: s.radii("borderBottomRightRadius"),
  borderLeft: s.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: s.borders(["borderLeft", "borderRight"]),
  borderInline: s.borders("borderInline"),
  borderY: s.borders(["borderTop", "borderBottom"]),
  borderBlock: s.borders("borderBlock"),
  borderTopWidth: s.borderWidths("borderTopWidth"),
  borderBlockStartWidth: s.borderWidths("borderBlockStartWidth"),
  borderTopColor: s.colors("borderTopColor"),
  borderBlockStartColor: s.colors("borderBlockStartColor"),
  borderTopStyle: s.borderStyles("borderTopStyle"),
  borderBlockStartStyle: s.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: s.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: s.borderWidths("borderBlockEndWidth"),
  borderBottomColor: s.colors("borderBottomColor"),
  borderBlockEndColor: s.colors("borderBlockEndColor"),
  borderBottomStyle: s.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: s.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: s.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: s.borderWidths("borderInlineStartWidth"),
  borderLeftColor: s.colors("borderLeftColor"),
  borderInlineStartColor: s.colors("borderInlineStartColor"),
  borderLeftStyle: s.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: s.borderStyles("borderInlineStartStyle"),
  borderRightWidth: s.borderWidths("borderRightWidth"),
  borderInlineEndWidth: s.borderWidths("borderInlineEndWidth"),
  borderRightColor: s.colors("borderRightColor"),
  borderInlineEndColor: s.colors("borderInlineEndColor"),
  borderRightStyle: s.borderStyles("borderRightStyle"),
  borderInlineEndStyle: s.borderStyles("borderInlineEndStyle"),
  borderTopRadius: s.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: s.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: s.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: s.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(C, {
  rounded: C.borderRadius,
  roundedTop: C.borderTopRadius,
  roundedTopLeft: C.borderTopLeftRadius,
  roundedTopRight: C.borderTopRightRadius,
  roundedTopStart: C.borderStartStartRadius,
  roundedTopEnd: C.borderStartEndRadius,
  roundedBottom: C.borderBottomRadius,
  roundedBottomLeft: C.borderBottomLeftRadius,
  roundedBottomRight: C.borderBottomRightRadius,
  roundedBottomStart: C.borderEndStartRadius,
  roundedBottomEnd: C.borderEndEndRadius,
  roundedLeft: C.borderLeftRadius,
  roundedRight: C.borderRightRadius,
  roundedStart: C.borderInlineStartRadius,
  roundedEnd: C.borderInlineEndRadius,
  borderStart: C.borderInlineStart,
  borderEnd: C.borderInlineEnd,
  borderTopStartRadius: C.borderStartStartRadius,
  borderTopEndRadius: C.borderStartEndRadius,
  borderBottomStartRadius: C.borderEndStartRadius,
  borderBottomEndRadius: C.borderEndEndRadius,
  borderStartRadius: C.borderInlineStartRadius,
  borderEndRadius: C.borderInlineEndRadius,
  borderStartWidth: C.borderInlineStartWidth,
  borderEndWidth: C.borderInlineEndWidth,
  borderStartColor: C.borderInlineStartColor,
  borderEndColor: C.borderInlineEndColor,
  borderStartStyle: C.borderInlineStartStyle,
  borderEndStyle: C.borderInlineEndStyle
});
var Pi = {
  color: s.colors("color"),
  textColor: s.colors("color"),
  fill: s.colors("fill"),
  stroke: s.colors("stroke")
}, Vr = {
  boxShadow: s.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: s.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: s.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Vr, {
  shadow: Vr.boxShadow
});
var Bi = {
  filter: { transform: w.filter },
  blur: s.blur("--chakra-blur"),
  brightness: s.propT("--chakra-brightness", w.brightness),
  contrast: s.propT("--chakra-contrast", w.contrast),
  hueRotate: s.degreeT("--chakra-hue-rotate"),
  invert: s.propT("--chakra-invert", w.invert),
  saturate: s.propT("--chakra-saturate", w.saturate),
  dropShadow: s.propT("--chakra-drop-shadow", w.dropShadow),
  backdropFilter: { transform: w.backdropFilter },
  backdropBlur: s.blur("--chakra-backdrop-blur"),
  backdropBrightness: s.propT("--chakra-backdrop-brightness", w.brightness),
  backdropContrast: s.propT("--chakra-backdrop-contrast", w.contrast),
  backdropHueRotate: s.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: s.propT("--chakra-backdrop-invert", w.invert),
  backdropSaturate: s.propT("--chakra-backdrop-saturate", w.saturate)
}, tr = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: w.flexDirection },
  experimental_spaceX: {
    static: xi,
    transform: Me({
      scale: "space",
      transform: (e) => e !== null ? { "--chakra-space-x": e } : null
    })
  },
  experimental_spaceY: {
    static: wi,
    transform: Me({
      scale: "space",
      transform: (e) => e != null ? { "--chakra-space-y": e } : null
    })
  },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: s.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: s.space("gap"),
  rowGap: s.space("rowGap"),
  columnGap: s.space("columnGap")
};
Object.assign(tr, {
  flexDir: tr.flexDirection
});
var Cn = {
  gridGap: s.space("gridGap"),
  gridColumnGap: s.space("gridColumnGap"),
  gridRowGap: s.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, Oi = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: w.outline },
  outlineOffset: !0,
  outlineColor: s.colors("outlineColor")
}, Z = {
  width: s.sizesT("width"),
  inlineSize: s.sizesT("inlineSize"),
  height: s.sizes("height"),
  blockSize: s.sizes("blockSize"),
  boxSize: s.sizes(["width", "height"]),
  minWidth: s.sizes("minWidth"),
  minInlineSize: s.sizes("minInlineSize"),
  minHeight: s.sizes("minHeight"),
  minBlockSize: s.sizes("minBlockSize"),
  maxWidth: s.sizes("maxWidth"),
  maxInlineSize: s.sizes("maxInlineSize"),
  maxHeight: s.sizes("maxHeight"),
  maxBlockSize: s.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: s.propT("float", w.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Z, {
  w: Z.width,
  h: Z.height,
  minW: Z.minWidth,
  maxW: Z.maxWidth,
  minH: Z.minHeight,
  maxH: Z.maxHeight,
  overscroll: Z.overscrollBehavior,
  overscrollX: Z.overscrollBehaviorX,
  overscrollY: Z.overscrollBehaviorY
});
var Ai = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: s.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: s.prop("listStyleImage")
};
function Mi(e, r, t, n) {
  const o = typeof r == "string" ? r.split(".") : [r];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? t : e;
}
var zi = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (n, o, c, d) => {
    if (typeof n > "u")
      return e(n, o, c);
    r.has(n) || r.set(n, /* @__PURE__ */ new Map());
    const u = r.get(n);
    if (u.has(o))
      return u.get(o);
    const f = e(n, o, c, d);
    return u.set(o, f), f;
  };
}, Li = zi(Mi), Ni = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Fi = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Mr = (e, r, t) => {
  const n = {}, o = Li(e, r, {});
  for (const c in o)
    c in t && t[c] != null || (n[c] = o[c]);
  return n;
}, Wi = {
  srOnly: {
    transform(e) {
      return e === !0 ? Ni : e === "focusable" ? Fi : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, t) => Mr(r, `layerStyles.${e}`, t)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, t) => Mr(r, `textStyles.${e}`, t)
  },
  apply: {
    processResult: !0,
    transform: (e, r, t) => Mr(r, e, t)
  }
}, Pe = {
  position: !0,
  pos: s.prop("position"),
  zIndex: s.prop("zIndex", "zIndices"),
  inset: s.spaceT("inset"),
  insetX: s.spaceT(["left", "right"]),
  insetInline: s.spaceT("insetInline"),
  insetY: s.spaceT(["top", "bottom"]),
  insetBlock: s.spaceT("insetBlock"),
  top: s.spaceT("top"),
  insetBlockStart: s.spaceT("insetBlockStart"),
  bottom: s.spaceT("bottom"),
  insetBlockEnd: s.spaceT("insetBlockEnd"),
  left: s.spaceT("left"),
  insetInlineStart: s.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: s.spaceT("right"),
  insetInlineEnd: s.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Pe, {
  insetStart: Pe.insetInlineStart,
  insetEnd: Pe.insetInlineEnd
});
var ji = {
  ring: { transform: w.ring },
  ringColor: s.colors("--chakra-ring-color"),
  ringOffset: s.prop("--chakra-ring-offset-width"),
  ringOffsetColor: s.colors("--chakra-ring-offset-color"),
  ringInset: s.prop("--chakra-ring-inset")
}, A = {
  margin: s.spaceT("margin"),
  marginTop: s.spaceT("marginTop"),
  marginBlockStart: s.spaceT("marginBlockStart"),
  marginRight: s.spaceT("marginRight"),
  marginInlineEnd: s.spaceT("marginInlineEnd"),
  marginBottom: s.spaceT("marginBottom"),
  marginBlockEnd: s.spaceT("marginBlockEnd"),
  marginLeft: s.spaceT("marginLeft"),
  marginInlineStart: s.spaceT("marginInlineStart"),
  marginX: s.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: s.spaceT("marginInline"),
  marginY: s.spaceT(["marginTop", "marginBottom"]),
  marginBlock: s.spaceT("marginBlock"),
  padding: s.space("padding"),
  paddingTop: s.space("paddingTop"),
  paddingBlockStart: s.space("paddingBlockStart"),
  paddingRight: s.space("paddingRight"),
  paddingBottom: s.space("paddingBottom"),
  paddingBlockEnd: s.space("paddingBlockEnd"),
  paddingLeft: s.space("paddingLeft"),
  paddingInlineStart: s.space("paddingInlineStart"),
  paddingInlineEnd: s.space("paddingInlineEnd"),
  paddingX: s.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: s.space("paddingInline"),
  paddingY: s.space(["paddingTop", "paddingBottom"]),
  paddingBlock: s.space("paddingBlock")
};
Object.assign(A, {
  m: A.margin,
  mt: A.marginTop,
  mr: A.marginRight,
  me: A.marginInlineEnd,
  marginEnd: A.marginInlineEnd,
  mb: A.marginBottom,
  ml: A.marginLeft,
  ms: A.marginInlineStart,
  marginStart: A.marginInlineStart,
  mx: A.marginX,
  my: A.marginY,
  p: A.padding,
  pt: A.paddingTop,
  py: A.paddingY,
  px: A.paddingX,
  pb: A.paddingBottom,
  pl: A.paddingLeft,
  ps: A.paddingInlineStart,
  paddingStart: A.paddingInlineStart,
  pr: A.paddingRight,
  pe: A.paddingInlineEnd,
  paddingEnd: A.paddingInlineEnd
});
var Di = {
  textDecorationColor: s.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: s.shadows("textShadow")
}, Gi = {
  clipPath: !0,
  transform: s.propT("transform", w.transform),
  transformOrigin: !0,
  translateX: s.spaceT("--chakra-translate-x"),
  translateY: s.spaceT("--chakra-translate-y"),
  skewX: s.degreeT("--chakra-skew-x"),
  skewY: s.degreeT("--chakra-skew-y"),
  scaleX: s.prop("--chakra-scale-x"),
  scaleY: s.prop("--chakra-scale-y"),
  scale: s.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: s.degreeT("--chakra-rotate")
}, Hi = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: s.prop("transitionDuration", "transition.duration"),
  transitionProperty: s.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: s.prop("transitionTimingFunction", "transition.easing")
}, Vi = {
  fontFamily: s.prop("fontFamily", "fonts"),
  fontSize: s.prop("fontSize", "fontSizes", w.px),
  fontWeight: s.prop("fontWeight", "fontWeights"),
  lineHeight: s.prop("lineHeight", "lineHeights"),
  letterSpacing: s.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, Ui = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  scrollMargin: s.spaceT("scrollMargin"),
  scrollMarginTop: s.spaceT("scrollMarginTop"),
  scrollMarginBottom: s.spaceT("scrollMarginBottom"),
  scrollMarginLeft: s.spaceT("scrollMarginLeft"),
  scrollMarginRight: s.spaceT("scrollMarginRight"),
  scrollMarginX: s.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: s.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: s.spaceT("scrollPadding"),
  scrollPaddingTop: s.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: s.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: s.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: s.spaceT("scrollPaddingRight"),
  scrollPaddingX: s.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: s.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function Rn(e) {
  return pe(e) && e.reference ? e.reference : String(e);
}
var yr = (e, ...r) => r.map(Rn).join(` ${e} `).replace(/calc/g, ""), Dt = (...e) => `calc(${yr("+", ...e)})`, Gt = (...e) => `calc(${yr("-", ...e)})`, Ur = (...e) => `calc(${yr("*", ...e)})`, Ht = (...e) => `calc(${yr("/", ...e)})`, Vt = (e) => {
  const r = Rn(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : Ur(r, -1);
}, Ie = Object.assign((e) => ({
  add: (...r) => Ie(Dt(e, ...r)),
  subtract: (...r) => Ie(Gt(e, ...r)),
  multiply: (...r) => Ie(Ur(e, ...r)),
  divide: (...r) => Ie(Ht(e, ...r)),
  negate: () => Ie(Vt(e)),
  toString: () => e.toString()
}), {
  add: Dt,
  subtract: Gt,
  multiply: Ur,
  divide: Ht,
  negate: Vt
});
function Yi(e) {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}
function Ut(e) {
  if (e == null)
    return e;
  const { unitless: r } = Yi(e);
  return r || typeof e == "number" ? `${e}px` : e;
}
function Xi(e, r) {
  const t = ["@media screen"];
  return e && t.push("and", `(min-width: ${Ut(e)})`), r && t.push("and", `(max-width: ${Ut(r)})`), t.join(" ");
}
var G = {
  hover: (e, r) => `${e}:hover ${r}, ${e}[data-hover] ${r}`,
  focus: (e, r) => `${e}:focus ${r}, ${e}[data-focus] ${r}`,
  focusVisible: (e, r) => `${e}:focus-visible ${r}`,
  focusWithin: (e, r) => `${e}:focus-within ${r}`,
  active: (e, r) => `${e}:active ${r}, ${e}[data-active] ${r}`,
  disabled: (e, r) => `${e}:disabled ${r}, ${e}[data-disabled] ${r}`,
  invalid: (e, r) => `${e}:invalid ${r}, ${e}[data-invalid] ${r}`,
  checked: (e, r) => `${e}:checked ${r}, ${e}[data-checked] ${r}`,
  indeterminate: (e, r) => `${e}:indeterminate ${r}, ${e}[aria-checked=mixed] ${r}, ${e}[data-indeterminate] ${r}`,
  readOnly: (e, r) => `${e}:read-only ${r}, ${e}[readonly] ${r}, ${e}[data-read-only] ${r}`,
  expanded: (e, r) => `${e}:read-only ${r}, ${e}[aria-expanded=true] ${r}, ${e}[data-expanded] ${r}`,
  placeholderShown: (e, r) => `${e}:placeholder-shown ${r}`
}, ce = (e) => En((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), ie = (e) => En((r) => e(r, "~ &"), "[data-peer]", ".peer"), En = (e, ...r) => r.map(e).join(", "), it = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: ce(G.hover),
  _peerHover: ie(G.hover),
  _groupFocus: ce(G.focus),
  _peerFocus: ie(G.focus),
  _groupFocusVisible: ce(G.focusVisible),
  _peerFocusVisible: ie(G.focusVisible),
  _groupActive: ce(G.active),
  _peerActive: ie(G.active),
  _groupDisabled: ce(G.disabled),
  _peerDisabled: ie(G.disabled),
  _groupInvalid: ce(G.invalid),
  _peerInvalid: ie(G.invalid),
  _groupChecked: ce(G.checked),
  _peerChecked: ie(G.checked),
  _groupFocusWithin: ce(G.focusWithin),
  _peerFocusWithin: ie(G.focusWithin),
  _peerPlaceholderShown: ie(G.placeholderShown),
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"
}, qi = Object.keys(it);
function Ki(e, r = []) {
  const t = Object.assign({}, e);
  for (const n of r)
    n in t && delete t[n];
  return t;
}
var st = se({}, Je, C, Pi, tr, Z, Bi, ji, Oi, Cn, Wi, Pe, Vr, A, Ui, Vi, Di, Gi, Ai, Hi);
Object.assign({}, A, Z, tr, Cn, Pe);
var Zi = [...Object.keys(st), ...qi], Ji = { ...st, ...it }, Qi = (e) => e in Ji, es = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: t, toArrayValue: n, media: o } = r.__breakpoints, c = {};
  for (const d in e) {
    let u = fe(e[d], r);
    if (u == null)
      continue;
    if (u = pe(u) && t(u) ? n(u) : u, !Array.isArray(u)) {
      c[d] = u;
      continue;
    }
    const f = u.slice(0, o.length).length;
    for (let g = 0; g < f; g += 1) {
      const p = o == null ? void 0 : o[g];
      if (!p) {
        c[d] = u[g];
        continue;
      }
      c[p] = c[p] || {}, u[g] != null && (c[p][d] = u[g]);
    }
  }
  return c;
};
function rs(e) {
  const r = [];
  let t = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const c = e[o];
    c === "(" ? (n = !0, t += c) : c === ")" ? (n = !1, t += c) : c === "," && !n ? (r.push(t), t = "") : t += c;
  }
  return t = t.trim(), t && r.push(t), r;
}
function ts(e) {
  return /^var\(--.+\)$/.test(e);
}
var ns = (e, r) => e.startsWith("--") && typeof r == "string" && !ts(r), as = (e, r) => {
  if (r == null)
    return r;
  const t = (d) => {
    var u, f;
    return (f = (u = e.__cssMap) == null ? void 0 : u[d]) == null ? void 0 : f.varRef;
  }, n = (d) => t(d) ?? d, [o, c] = rs(r);
  return r = t(o) ?? n(c) ?? n(r), r;
};
function os(e) {
  const { configs: r = {}, pseudos: t = {}, theme: n } = e, o = (c, d = !1) => {
    var u;
    const f = fe(c, n), g = es(f)(n);
    let p = {};
    for (let m in g) {
      const $ = g[m];
      let S = fe($, n);
      m in t && (m = t[m]), ns(m, S) && (S = as(n, S));
      let y = r[m];
      if (y === !0 && (y = { property: m }), pe(S)) {
        p[m] = p[m] ?? {}, p[m] = se({}, p[m], o(S, !0));
        continue;
      }
      let b = ((u = y == null ? void 0 : y.transform) == null ? void 0 : u.call(y, S, n, f)) ?? S;
      b = y != null && y.processResult ? o(b, !0) : b;
      const v = fe(y == null ? void 0 : y.property, n);
      if (!d && (y != null && y.static)) {
        const k = fe(y.static, n);
        p = se({}, p, k);
      }
      if (v && Array.isArray(v)) {
        for (const k of v)
          p[k] = b;
        continue;
      }
      if (v) {
        v === "&" && pe(b) ? p = se({}, p, b) : p[v] = b;
        continue;
      }
      if (pe(b)) {
        p = se({}, p, b);
        continue;
      }
      p[m] = b;
    }
    return p;
  };
  return o;
}
var is = (e) => (r) => os({
  theme: r,
  pseudos: it,
  configs: st
})(e);
function ss(e, r) {
  if (Array.isArray(e))
    return e;
  if (pe(e))
    return r(e);
  if (e != null)
    return [e];
}
function cs(e, r) {
  for (let t = r + 1; t < e.length; t++)
    if (e[t] != null)
      return t;
  return -1;
}
function ls(e) {
  const r = e.__breakpoints;
  return function(n, o, c, d) {
    var u, f;
    if (!r)
      return;
    const g = {}, p = ss(c, r.toArrayValue);
    if (!p)
      return g;
    const m = p.length, $ = m === 1, S = !!n.parts;
    for (let y = 0; y < m; y++) {
      const b = r.details[y], v = r.details[cs(p, y)], k = Xi(b.minW, v == null ? void 0 : v._minW), T = fe((u = n[o]) == null ? void 0 : u[p[y]], d);
      if (T) {
        if (S) {
          (f = n.parts) == null || f.forEach((M) => {
            se(g, {
              [M]: $ ? T[M] : { [k]: T[M] }
            });
          });
          continue;
        }
        if (!S) {
          $ ? se(g, T) : g[k] = T;
          continue;
        }
        g[k] = T;
      }
    }
    return g;
  };
}
function ds(e) {
  return (r) => {
    const { variant: t, size: n, theme: o } = r, c = ls(o);
    return se({}, fe(e.baseStyle ?? {}, r), c(e, "sizes", n, r), c(e, "variants", t, r));
  };
}
function $n(e) {
  return Ki(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function us() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return nt(r);
}
var fs = function() {
  var r = us.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function ps(e) {
  return typeof e == "function";
}
function hs(e, r) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    r.includes(n) || (t[n] = e[n]);
  }), t;
}
function gs(e, r, t, n) {
  const o = typeof r == "string" ? r.split(".") : [r];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? t : e;
}
var ms = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (n, o, c, d) => {
    if (typeof n > "u")
      return e(n, o, c);
    r.has(n) || r.set(n, /* @__PURE__ */ new Map());
    const u = r.get(n);
    if (u.has(o))
      return u.get(o);
    const f = e(n, o, c, d);
    return u.set(o, f), f;
  };
}, bs = ms(gs);
function In(e, r) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    r(o, n, e) && (t[n] = o);
  }), t;
}
var Pn = (e) => In(e, (r) => r != null);
function ys(e, ...r) {
  return ps(e) ? e(...r) : e;
}
function vs(e = {}) {
  const {
    strict: r = !0,
    errorMessage: t = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = ze(void 0);
  o.displayName = n;
  function c() {
    var d;
    const u = ge(o);
    if (!u && r) {
      const f = new Error(t);
      throw f.name = "ContextError", (d = Error.captureStackTrace) == null || d.call(Error, f, c), f;
    }
    return u;
  }
  return [
    o.Provider,
    c,
    o
  ];
}
var Ss = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ks = /* @__PURE__ */ cn(
  function(e) {
    return Ss.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _s = ks, xs = function(r) {
  return r !== "theme";
}, Yt = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? _s : xs;
}, Xt = function(r, t, n) {
  var o;
  if (t) {
    var c = t.shouldForwardProp;
    o = r.__emotion_forwardProp && c ? function(d) {
      return r.__emotion_forwardProp(d) && c(d);
    } : c;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, ws = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return tt(t, n, o), mn(function() {
    return hn(t, n, o);
  }), null;
}, Ts = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, c, d;
  t !== void 0 && (c = t.label, d = t.target);
  var u = Xt(r, t, n), f = u || Yt(o), g = !f("as");
  return function() {
    var p = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (c !== void 0 && m.push("label:" + c + ";"), p[0] == null || p[0].raw === void 0)
      m.push.apply(m, p);
    else {
      m.push(p[0][0]);
      for (var $ = p.length, S = 1; S < $; S++)
        m.push(p[S], p[0][S]);
    }
    var y = yn(function(b, v, k) {
      var T = g && b.as || o, M = "", J = [], j = b;
      if (b.theme == null) {
        j = {};
        for (var D in b)
          j[D] = b[D];
        j.theme = ge(ot);
      }
      typeof b.className == "string" ? M = pn(v.registered, J, b.className) : b.className != null && (M = b.className + " ");
      var P = nt(m.concat(J), v.registered, j);
      M += v.key + "-" + P.name, d !== void 0 && (M += " " + d);
      var kr = g && u === void 0 ? Yt(T) : f, me = {};
      for (var be in b)
        g && be === "as" || // $FlowFixMe
        kr(be) && (me[be] = b[be]);
      return me.className = M, me.ref = k, /* @__PURE__ */ Se(Jt, null, /* @__PURE__ */ Se(ws, {
        cache: v,
        serialized: P,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ Se(T, me));
    });
    return y.displayName = c !== void 0 ? c : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = r.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = m, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + d;
      }
    }), y.withComponent = function(b, v) {
      return e(b, Fr({}, t, v, {
        shouldForwardProp: Xt(y, v, !0)
      })).apply(void 0, m);
    }, y;
  };
}, Cs = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Yr = Ts.bind();
Cs.forEach(function(e) {
  Yr[e] = Yr(e);
});
var Rs = typeof Element < "u", Es = typeof Map == "function", $s = typeof Set == "function", Is = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Qe(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var t, n, o;
    if (Array.isArray(e)) {
      if (t = e.length, t != r.length)
        return !1;
      for (n = t; n-- !== 0; )
        if (!Qe(e[n], r[n]))
          return !1;
      return !0;
    }
    var c;
    if (Es && e instanceof Map && r instanceof Map) {
      if (e.size !== r.size)
        return !1;
      for (c = e.entries(); !(n = c.next()).done; )
        if (!r.has(n.value[0]))
          return !1;
      for (c = e.entries(); !(n = c.next()).done; )
        if (!Qe(n.value[1], r.get(n.value[0])))
          return !1;
      return !0;
    }
    if ($s && e instanceof Set && r instanceof Set) {
      if (e.size !== r.size)
        return !1;
      for (c = e.entries(); !(n = c.next()).done; )
        if (!r.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Is && ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
      if (t = e.length, t != r.length)
        return !1;
      for (n = t; n-- !== 0; )
        if (e[n] !== r[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === r.toString();
    if (o = Object.keys(e), t = o.length, t !== Object.keys(r).length)
      return !1;
    for (n = t; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[n]))
        return !1;
    if (Rs && e instanceof Element)
      return !1;
    for (n = t; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Qe(e[o[n]], r[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var Ps = function(r, t) {
  try {
    return Qe(r, t);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
function Bs() {
  const e = ge(ot);
  if (!e)
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  return e;
}
function Os() {
  const e = kn(), r = Bs();
  return { ...e, theme: r };
}
vs({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
var As = /* @__PURE__ */ new Set([
  ...Zi,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), Ms = /* @__PURE__ */ new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
function zs(e) {
  return Ms.has(e) || !As.has(e);
}
var Ls = ({ baseStyle: e }) => (r) => {
  const { theme: t, css: n, __css: o, sx: c, ...d } = r, u = In(d, (m, $) => Qi($)), f = ys(e, r), g = Object.assign({}, o, f, Pn(u), c), p = is(g)(r.theme);
  return n ? [p, n] : p;
};
function zr(e, r) {
  const { baseStyle: t, ...n } = r ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = zs);
  const o = Ls({ baseStyle: t }), c = Yr(e, n)(o);
  return N.forwardRef(function(f, g) {
    const { colorMode: p, forced: m } = kn();
    return N.createElement(c, {
      ref: g,
      "data-theme": m ? p : void 0,
      ...f
    });
  });
}
function vr(e) {
  return Zt(e);
}
function Ns(e, r = {}) {
  const { styleConfig: t, ...n } = r, { theme: o, colorMode: c } = Os(), d = e ? bs(o, `components.${e}`) : void 0, u = t || d, f = se({ theme: o, colorMode: c }, (u == null ? void 0 : u.defaultProps) ?? {}, Pn(hs(n, ["children"]))), g = io({});
  if (u) {
    const m = ds(u)(f);
    Ps(g.current, m) || (g.current = m);
  }
  return g.current;
}
function Bn(e, r = {}) {
  return Ns(e, r);
}
function Fs() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(zr, {
    apply(r, t, n) {
      return zr(...n);
    },
    get(r, t) {
      return e.has(t) || e.set(t, zr(t)), e.get(t);
    }
  });
}
var he = Fs();
function Ws(e, r) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`;
}
function js(e = {}) {
  const {
    name: r,
    strict: t = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: c
  } = e, d = ze(void 0);
  d.displayName = r;
  function u() {
    var f;
    const g = ge(d);
    if (!g && t) {
      const p = new Error(c ?? Ws(n, o));
      throw p.name = "ContextError", (f = Error.captureStackTrace) == null || f.call(Error, p, u), p;
    }
    return g;
  }
  return [d.Provider, u, d];
}
function Ds(e, r) {
  if (e != null) {
    if (typeof e == "function") {
      e(r);
      return;
    }
    try {
      e.current = r;
    } catch {
      throw new Error(`Cannot assign value '${r}' to ref '${e}'`);
    }
  }
}
function Gs(...e) {
  return (r) => {
    e.forEach((t) => {
      Ds(t, r);
    });
  };
}
function Hs(...e) {
  return nr(() => Gs(...e), e);
}
var Vs = (...e) => e.filter(Boolean).join(" "), Us = fs({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), On = vr((e, r) => {
  const t = Bn("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: c = "0.45s",
    emptyColor: d = "transparent",
    className: u,
    ...f
  } = $n(e), g = Vs("chakra-spinner", u), p = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: d,
    borderLeftColor: d,
    animation: `${Us} ${c} linear infinite`,
    ...t
  };
  return /* @__PURE__ */ N.createElement(he.div, {
    ref: r,
    __css: p,
    className: g,
    ...f
  }, n && /* @__PURE__ */ N.createElement(he.span, {
    srOnly: !0
  }, n));
});
On.displayName = "Spinner";
var Sr = (...e) => e.filter(Boolean).join(" "), qt = (e) => e ? "" : void 0, [Ys, Xs] = js({
  strict: !1,
  name: "ButtonGroupContext"
});
function Xr(e) {
  const { children: r, className: t, ...n } = e, o = Qt(r) ? en(r, {
    "aria-hidden": !0,
    focusable: !1
  }) : r, c = Sr("chakra-button__icon", t);
  return /* @__PURE__ */ N.createElement(he.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...n,
    className: c
  }, o);
}
Xr.displayName = "ButtonIcon";
function qr(e) {
  const {
    label: r,
    placement: t,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ N.createElement(On, {
      color: "currentColor",
      width: "1em",
      height: "1em"
    }),
    className: c,
    __css: d,
    ...u
  } = e, f = Sr("chakra-button__spinner", c), g = t === "start" ? "marginEnd" : "marginStart", p = nr(() => ({
    display: "flex",
    alignItems: "center",
    position: r ? "relative" : "absolute",
    [g]: r ? n : 0,
    fontSize: "1em",
    lineHeight: "normal",
    ...d
  }), [d, r, g, n]);
  return /* @__PURE__ */ N.createElement(he.div, {
    className: f,
    ...u,
    __css: p
  }, o);
}
qr.displayName = "ButtonSpinner";
function qs(e) {
  const [r, t] = so(!e);
  return { ref: co((c) => {
    c && t(c.tagName === "BUTTON");
  }, []), type: r ? "button" : void 0 };
}
var ct = vr((e, r) => {
  const t = Xs(), n = Bn("Button", { ...t, ...e }), {
    isDisabled: o = t == null ? void 0 : t.isDisabled,
    isLoading: c,
    isActive: d,
    children: u,
    leftIcon: f,
    rightIcon: g,
    loadingText: p,
    iconSpacing: m = "0.5rem",
    type: $,
    spinner: S,
    spinnerPlacement: y = "start",
    className: b,
    as: v,
    ...k
  } = $n(e), T = nr(() => {
    const D = { ...n == null ? void 0 : n._focus, zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...n,
      ...!!t && { _focus: D }
    };
  }, [n, t]), { ref: M, type: J } = qs(v), j = { rightIcon: g, leftIcon: f, iconSpacing: m, children: u };
  return /* @__PURE__ */ N.createElement(he.button, {
    disabled: o || c,
    ref: Hs(r, M),
    as: v,
    type: $ ?? J,
    "data-active": qt(d),
    "data-loading": qt(c),
    __css: T,
    className: Sr("chakra-button", b),
    ...k
  }, c && y === "start" && /* @__PURE__ */ N.createElement(qr, {
    className: "chakra-button__spinner--start",
    label: p,
    placement: "start",
    spacing: m
  }, S), c ? p || /* @__PURE__ */ N.createElement(he.span, {
    opacity: 0
  }, /* @__PURE__ */ N.createElement(Kt, {
    ...j
  })) : /* @__PURE__ */ N.createElement(Kt, {
    ...j
  }), c && y === "end" && /* @__PURE__ */ N.createElement(qr, {
    className: "chakra-button__spinner--end",
    label: p,
    placement: "end",
    spacing: m
  }, S));
});
ct.displayName = "Button";
function Kt(e) {
  const { leftIcon: r, rightIcon: t, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ N.createElement(N.Fragment, null, r && /* @__PURE__ */ N.createElement(Xr, {
    marginEnd: o
  }, r), n, t && /* @__PURE__ */ N.createElement(Xr, {
    marginStart: o
  }, t));
}
var Ks = vr(function(r, t) {
  const {
    size: n,
    colorScheme: o,
    variant: c,
    className: d,
    spacing: u = "0.5rem",
    isAttached: f,
    isDisabled: g,
    ...p
  } = r, m = Sr("chakra-button__group", d), $ = nr(() => ({ size: n, colorScheme: o, variant: c, isDisabled: g }), [n, o, c, g]);
  let S = {
    display: "inline-flex"
  };
  return f ? S = {
    ...S,
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  } : S = {
    ...S,
    "& > *:not(style) ~ *:not(style)": { marginStart: u }
  }, /* @__PURE__ */ N.createElement(Ys, {
    value: $
  }, /* @__PURE__ */ N.createElement(he.div, {
    ref: t,
    role: "group",
    __css: S,
    className: m,
    "data-attached": f ? "" : void 0,
    ...p
  }));
});
Ks.displayName = "ButtonGroup";
var Zs = vr((e, r) => {
  const { icon: t, children: n, isRound: o, "aria-label": c, ...d } = e, u = t || n, f = Qt(u) ? en(u, {
    "aria-hidden": !0,
    focusable: !1
  }) : null;
  return /* @__PURE__ */ N.createElement(ct, {
    padding: "0",
    borderRadius: o ? "full" : void 0,
    ref: r,
    "aria-label": c,
    ...d
  }, f);
});
Zs.displayName = "IconButton";
function Qs({ label: e }) {
  return /* @__PURE__ */ Gr(ct, { children: /* @__PURE__ */ Gr(di, { text: e }) });
}
export {
  Qs as Button,
  di as Label
};
