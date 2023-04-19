import * as Bt from "https://cdn.skypack.dev/react@17";
import N, { createContext as ze, forwardRef as qt, useContext as ge, createElement as Se, Fragment as Kt, useRef as no, useMemo as nr, isValidElement as Zt, cloneElement as Jt, useState as ao, useCallback as oo } from "https://cdn.skypack.dev/react@17";
import { jsx as Pt } from "https://cdn.skypack.dev/react@17/jsx-runtime";
function io(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function so(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var co = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(i) {
      var c;
      n.tags.length === 0 ? n.insertionPoint ? c = n.insertionPoint.nextSibling : n.prepend ? c = n.container.firstChild : c = n.before : c = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, c), n.tags.push(i);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(so(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var c = io(i);
      try {
        c.insertRule(n, c.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), V = "-ms-", er = "-moz-", R = "-webkit-", Qt = "comm", Xr = "rule", qr = "decl", lo = "@import", en = "@keyframes", uo = Math.abs, ar = String.fromCharCode, fo = Object.assign;
function po(e, r) {
  return H(e, 0) ^ 45 ? (((r << 2 ^ H(e, 0)) << 2 ^ H(e, 1)) << 2 ^ H(e, 2)) << 2 ^ H(e, 3) : 0;
}
function rn(e) {
  return e.trim();
}
function ho(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function E(e, r, t) {
  return e.replace(r, t);
}
function zr(e, r) {
  return e.indexOf(r);
}
function H(e, r) {
  return e.charCodeAt(r) | 0;
}
function Pe(e, r, t) {
  return e.slice(r, t);
}
function re(e) {
  return e.length;
}
function Kr(e) {
  return e.length;
}
function Ue(e, r) {
  return r.push(e), e;
}
function go(e, r) {
  return e.map(r).join("");
}
var or = 1, _e = 1, tn = 0, U = 0, F = 0, xe = "";
function ir(e, r, t, n, i, c, u) {
  return { value: e, root: r, parent: t, type: n, props: i, children: c, line: or, column: _e, length: u, return: "" };
}
function $e(e, r) {
  return fo(ir("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function mo() {
  return F;
}
function bo() {
  return F = U > 0 ? H(xe, --U) : 0, _e--, F === 10 && (_e = 1, or--), F;
}
function X() {
  return F = U < tn ? H(xe, U++) : 0, _e++, F === 10 && (_e = 1, or++), F;
}
function ne() {
  return H(xe, U);
}
function qe() {
  return U;
}
function Le(e, r) {
  return Pe(xe, e, r);
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
function nn(e) {
  return or = _e = 1, tn = re(xe = e), U = 0, [];
}
function an(e) {
  return xe = "", e;
}
function Ke(e) {
  return rn(Le(U - 1, Lr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yo(e) {
  for (; (F = ne()) && F < 33; )
    X();
  return Oe(e) > 2 || Oe(F) > 3 ? "" : " ";
}
function vo(e, r) {
  for (; --r && X() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return Le(e, qe() + (r < 6 && ne() == 32 && X() == 32));
}
function Lr(e) {
  for (; X(); )
    switch (F) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Lr(F);
        break;
      case 40:
        e === 41 && Lr(e);
        break;
      case 92:
        X();
        break;
    }
  return U;
}
function So(e, r) {
  for (; X() && e + F !== 47 + 10; )
    if (e + F === 42 + 42 && ne() === 47)
      break;
  return "/*" + Le(r, U - 1) + "*" + ar(e === 47 ? e : X());
}
function ko(e) {
  for (; !Oe(ne()); )
    X();
  return Le(e, U);
}
function _o(e) {
  return an(Ze("", null, null, null, [""], e = nn(e), 0, [0], e));
}
function Ze(e, r, t, n, i, c, u, d, f) {
  for (var g = 0, p = 0, m = u, $ = 0, S = 0, y = 0, b = 1, v = 1, k = 1, T = 0, M = "", J = i, j = c, D = n, B = M; v; )
    switch (y = T, T = X()) {
      case 40:
        if (y != 108 && H(B, m - 1) == 58) {
          zr(B += E(Ke(T), "&", "&\f"), "&\f") != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        B += Ke(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        B += yo(y);
        break;
      case 92:
        B += vo(qe() - 1, 7);
        continue;
      case 47:
        switch (ne()) {
          case 42:
          case 47:
            Ue(xo(So(X(), qe()), r, t), f);
            break;
          default:
            B += "/";
        }
        break;
      case 123 * b:
        d[g++] = re(B) * k;
      case 125 * b:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            v = 0;
          case 59 + p:
            S > 0 && re(B) - m && Ue(S > 32 ? At(B + ";", n, t, m - 1) : At(E(B, " ", "") + ";", n, t, m - 2), f);
            break;
          case 59:
            B += ";";
          default:
            if (Ue(D = Ot(B, r, t, g, p, i, d, M, J = [], j = [], m), c), T === 123)
              if (p === 0)
                Ze(B, r, D, D, J, c, m, d, j);
              else
                switch ($ === 99 && H(B, 3) === 110 ? 100 : $) {
                  case 100:
                  case 109:
                  case 115:
                    Ze(e, D, D, n && Ue(Ot(e, D, D, 0, 0, i, d, M, i, J = [], m), j), i, j, m, d, n ? J : j);
                    break;
                  default:
                    Ze(B, D, D, D, [""], j, 0, d, j);
                }
        }
        g = p = S = 0, b = k = 1, M = B = "", m = u;
        break;
      case 58:
        m = 1 + re(B), S = y;
      default:
        if (b < 1) {
          if (T == 123)
            --b;
          else if (T == 125 && b++ == 0 && bo() == 125)
            continue;
        }
        switch (B += ar(T), T * b) {
          case 38:
            k = p > 0 ? 1 : (B += "\f", -1);
            break;
          case 44:
            d[g++] = (re(B) - 1) * k, k = 1;
            break;
          case 64:
            ne() === 45 && (B += Ke(X())), $ = ne(), p = m = re(M = B += ko(qe())), T++;
            break;
          case 45:
            y === 45 && re(B) == 2 && (b = 0);
        }
    }
  return c;
}
function Ot(e, r, t, n, i, c, u, d, f, g, p) {
  for (var m = i - 1, $ = i === 0 ? c : [""], S = Kr($), y = 0, b = 0, v = 0; y < n; ++y)
    for (var k = 0, T = Pe(e, m + 1, m = uo(b = u[y])), M = e; k < S; ++k)
      (M = rn(b > 0 ? $[k] + " " + T : E(T, /&\f/g, $[k]))) && (f[v++] = M);
  return ir(e, r, t, i === 0 ? Xr : d, f, g, p);
}
function xo(e, r, t) {
  return ir(e, r, t, Qt, ar(mo()), Pe(e, 2, -2), 0);
}
function At(e, r, t, n) {
  return ir(e, r, t, qr, Pe(e, 0, n), Pe(e, n + 1, -1), n);
}
function ke(e, r) {
  for (var t = "", n = Kr(e), i = 0; i < n; i++)
    t += r(e[i], i, e, r) || "";
  return t;
}
function wo(e, r, t, n) {
  switch (e.type) {
    case lo:
    case qr:
      return e.return = e.return || e.value;
    case Qt:
      return "";
    case en:
      return e.return = e.value + "{" + ke(e.children, n) + "}";
    case Xr:
      e.value = e.props.join(",");
  }
  return re(t = ke(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function To(e) {
  var r = Kr(e);
  return function(t, n, i, c) {
    for (var u = "", d = 0; d < r; d++)
      u += e[d](t, n, i, c) || "";
    return u;
  };
}
function Co(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function on(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Ro = function(r, t, n) {
  for (var i = 0, c = 0; i = c, c = ne(), i === 38 && c === 12 && (t[n] = 1), !Oe(c); )
    X();
  return Le(r, U);
}, Eo = function(r, t) {
  var n = -1, i = 44;
  do
    switch (Oe(i)) {
      case 0:
        i === 38 && ne() === 12 && (t[n] = 1), r[n] += Ro(U - 1, t, n);
        break;
      case 2:
        r[n] += Ke(i);
        break;
      case 4:
        if (i === 44) {
          r[++n] = ne() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += ar(i);
    }
  while (i = X());
  return r;
}, $o = function(r, t) {
  return an(Eo(nn(r), t));
}, Mt = /* @__PURE__ */ new WeakMap(), Io = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, i = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Mt.get(n)) && !i) {
      Mt.set(r, !0);
      for (var c = [], u = $o(t, c), d = n.props, f = 0, g = 0; f < u.length; f++)
        for (var p = 0; p < d.length; p++, g++)
          r.props[g] = c[f] ? u[f].replace(/&\f/g, d[p]) : d[p] + " " + u[f];
    }
  }
}, Bo = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function sn(e, r) {
  switch (po(e, r)) {
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
            return ~zr(e, "stretch") ? sn(E(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (H(e, r + 1) !== 115)
        break;
    case 6444:
      switch (H(e, re(e) - 3 - (~zr(e, "!important") && 10))) {
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
var Po = function(r, t, n, i) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case qr:
        r.return = sn(r.value, r.length);
        break;
      case en:
        return ke([$e(r, {
          value: E(r.value, "@", "@" + R)
        })], i);
      case Xr:
        if (r.length)
          return go(r.props, function(c) {
            switch (ho(c, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ke([$e(r, {
                  props: [E(c, /:(read-\w+)/, ":" + er + "$1")]
                })], i);
              case "::placeholder":
                return ke([$e(r, {
                  props: [E(c, /:(plac\w+)/, ":" + R + "input-$1")]
                }), $e(r, {
                  props: [E(c, /:(plac\w+)/, ":" + er + "$1")]
                }), $e(r, {
                  props: [E(c, /:(plac\w+)/, V + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, Oo = [Po], Ao = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(b) {
      var v = b.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var i = r.stylisPlugins || Oo, c = {}, u, d = [];
  u = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(b) {
      for (var v = b.getAttribute("data-emotion").split(" "), k = 1; k < v.length; k++)
        c[v[k]] = !0;
      d.push(b);
    }
  );
  var f, g = [Io, Bo];
  {
    var p, m = [wo, Co(function(b) {
      p.insert(b);
    })], $ = To(g.concat(i, m)), S = function(v) {
      return ke(_o(v), $);
    };
    f = function(v, k, T, M) {
      p = T, S(v ? v + "{" + k.styles + "}" : k.styles), M && (y.inserted[k.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new co({
      key: t,
      container: u,
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
  return y.sheet.hydrate(d), y;
};
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Nr.apply(this, arguments);
}
var Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fr = {}, Mo = {
  get exports() {
    return Fr;
  },
  set exports(e) {
    Fr = e;
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
var W = typeof Symbol == "function" && Symbol.for, Zr = W ? Symbol.for("react.element") : 60103, Jr = W ? Symbol.for("react.portal") : 60106, sr = W ? Symbol.for("react.fragment") : 60107, cr = W ? Symbol.for("react.strict_mode") : 60108, lr = W ? Symbol.for("react.profiler") : 60114, dr = W ? Symbol.for("react.provider") : 60109, ur = W ? Symbol.for("react.context") : 60110, Qr = W ? Symbol.for("react.async_mode") : 60111, fr = W ? Symbol.for("react.concurrent_mode") : 60111, pr = W ? Symbol.for("react.forward_ref") : 60112, hr = W ? Symbol.for("react.suspense") : 60113, zo = W ? Symbol.for("react.suspense_list") : 60120, gr = W ? Symbol.for("react.memo") : 60115, mr = W ? Symbol.for("react.lazy") : 60116, Lo = W ? Symbol.for("react.block") : 60121, No = W ? Symbol.for("react.fundamental") : 60117, Fo = W ? Symbol.for("react.responder") : 60118, Wo = W ? Symbol.for("react.scope") : 60119;
function q(e) {
  if (typeof e == "object" && e !== null) {
    var r = e.$$typeof;
    switch (r) {
      case Zr:
        switch (e = e.type, e) {
          case Qr:
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
      case Jr:
        return r;
    }
  }
}
function cn(e) {
  return q(e) === fr;
}
I.AsyncMode = Qr;
I.ConcurrentMode = fr;
I.ContextConsumer = ur;
I.ContextProvider = dr;
I.Element = Zr;
I.ForwardRef = pr;
I.Fragment = sr;
I.Lazy = mr;
I.Memo = gr;
I.Portal = Jr;
I.Profiler = lr;
I.StrictMode = cr;
I.Suspense = hr;
I.isAsyncMode = function(e) {
  return cn(e) || q(e) === Qr;
};
I.isConcurrentMode = cn;
I.isContextConsumer = function(e) {
  return q(e) === ur;
};
I.isContextProvider = function(e) {
  return q(e) === dr;
};
I.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zr;
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
  return q(e) === Jr;
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
  return typeof e == "string" || typeof e == "function" || e === sr || e === fr || e === lr || e === cr || e === hr || e === zo || typeof e == "object" && e !== null && (e.$$typeof === mr || e.$$typeof === gr || e.$$typeof === dr || e.$$typeof === ur || e.$$typeof === pr || e.$$typeof === No || e.$$typeof === Fo || e.$$typeof === Wo || e.$$typeof === Lo);
};
I.typeOf = q;
(function(e) {
  e.exports = I;
})(Mo);
var ln = Fr, jo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Do = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, dn = {};
dn[ln.ForwardRef] = jo;
dn[ln.Memo] = Do;
var Go = !0;
function un(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(i) {
    e[i] !== void 0 ? r.push(e[i] + ";") : n += i + " ";
  }), n;
}
var et = function(r, t, n) {
  var i = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Go === !1) && r.registered[i] === void 0 && (r.registered[i] = t.styles);
}, fn = function(r, t, n) {
  et(r, t, n);
  var i = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var c = t;
    do
      r.insert(t === c ? "." + i : "", c, r.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function Ho(e) {
  for (var r = 0, t, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (i) {
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
var Vo = {
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
}, Uo = /[A-Z]|^ms/g, Yo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pn = function(r) {
  return r.charCodeAt(1) === 45;
}, zt = function(r) {
  return r != null && typeof r != "boolean";
}, Or = /* @__PURE__ */ on(function(e) {
  return pn(e) ? e : e.replace(Uo, "-$&").toLowerCase();
}), Lt = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Yo, function(n, i, c) {
          return te = {
            name: i,
            styles: c,
            next: te
          }, i;
        });
  }
  return Vo[r] !== 1 && !pn(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
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
        var i = t.styles + ";";
        return i;
      }
      return Xo(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var c = te, u = t(e);
        return te = c, Ae(e, r, u);
      }
      break;
    }
  }
  if (r == null)
    return t;
  var d = r[t];
  return d !== void 0 ? d : t;
}
function Xo(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var i = 0; i < t.length; i++)
      n += Ae(e, r, t[i]) + ";";
  else
    for (var c in t) {
      var u = t[c];
      if (typeof u != "object")
        r != null && r[u] !== void 0 ? n += c + "{" + r[u] + "}" : zt(u) && (n += Or(c) + ":" + Lt(c, u) + ";");
      else if (Array.isArray(u) && typeof u[0] == "string" && (r == null || r[u[0]] === void 0))
        for (var d = 0; d < u.length; d++)
          zt(u[d]) && (n += Or(c) + ":" + Lt(c, u[d]) + ";");
      else {
        var f = Ae(e, r, u);
        switch (c) {
          case "animation":
          case "animationName": {
            n += Or(c) + ":" + f + ";";
            break;
          }
          default:
            n += c + "{" + f + "}";
        }
      }
    }
  return n;
}
var Nt = /label:\s*([^\s;\n{]+)\s*(;|$)/g, te, rt = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var i = !0, c = "";
  te = void 0;
  var u = r[0];
  u == null || u.raw === void 0 ? (i = !1, c += Ae(n, t, u)) : c += u[0];
  for (var d = 1; d < r.length; d++)
    c += Ae(n, t, r[d]), i && (c += u[d]);
  Nt.lastIndex = 0;
  for (var f = "", g; (g = Nt.exec(c)) !== null; )
    f += "-" + // $FlowFixMe we know it's not null
    g[1];
  var p = Ho(c) + f;
  return {
    name: p,
    styles: c,
    next: te
  };
}, qo = function(r) {
  return r();
}, Ko = Bt["useInsertionEffect"] ? Bt["useInsertionEffect"] : !1, hn = Ko || qo, tt = {}.hasOwnProperty, gn = /* @__PURE__ */ ze(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ao({
    key: "css"
  }) : null
);
gn.Provider;
var mn = function(r) {
  return /* @__PURE__ */ qt(function(t, n) {
    var i = ge(gn);
    return r(t, i, n);
  });
}, nt = /* @__PURE__ */ ze({}), Wr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Zo = function(r, t) {
  var n = {};
  for (var i in t)
    tt.call(t, i) && (n[i] = t[i]);
  return n[Wr] = r, n;
}, Jo = function(r) {
  var t = r.cache, n = r.serialized, i = r.isStringTag;
  return et(t, n, i), hn(function() {
    return fn(t, n, i);
  }), null;
}, Qo = /* @__PURE__ */ mn(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var i = e[Wr], c = [n], u = "";
  typeof e.className == "string" ? u = un(r.registered, c, e.className) : e.className != null && (u = e.className + " ");
  var d = rt(c, void 0, ge(nt));
  u += r.key + "-" + d.name;
  var f = {};
  for (var g in e)
    tt.call(e, g) && g !== "css" && g !== Wr && (f[g] = e[g]);
  return f.ref = t, f.className = u, /* @__PURE__ */ Se(Kt, null, /* @__PURE__ */ Se(Jo, {
    cache: r,
    serialized: d,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ Se(i, f));
});
function jr(e, r, t) {
  return tt.call(r, "css") ? Pt(Qo, Zo(e, r), t) : Pt(e, r, t);
}
function ei({ text: e }) {
  return /* @__PURE__ */ jr("div", { children: e });
}
var bn = ze({});
bn.displayName = "ColorModeContext";
function yn() {
  const e = ge(bn);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var rr = {}, ri = {
  get exports() {
    return rr;
  },
  set exports(e) {
    rr = e;
  }
};
(function(e, r) {
  var t = 200, n = "__lodash_hash_undefined__", i = 800, c = 16, u = 9007199254740991, d = "[object Arguments]", f = "[object Array]", g = "[object AsyncFunction]", p = "[object Boolean]", m = "[object Date]", $ = "[object Error]", S = "[object Function]", y = "[object GeneratorFunction]", b = "[object Map]", v = "[object Number]", k = "[object Null]", T = "[object Object]", M = "[object Proxy]", J = "[object RegExp]", j = "[object Set]", D = "[object String]", B = "[object Undefined]", Sr = "[object WeakMap]", me = "[object ArrayBuffer]", be = "[object DataView]", Bn = "[object Float32Array]", Pn = "[object Float64Array]", On = "[object Int8Array]", An = "[object Int16Array]", Mn = "[object Int32Array]", zn = "[object Uint8Array]", Ln = "[object Uint8ClampedArray]", Nn = "[object Uint16Array]", Fn = "[object Uint32Array]", Wn = /[\\^$.*+?()[\]{}|]/g, jn = /^\[object .+?Constructor\]$/, Dn = /^(?:0|[1-9]\d*)$/, O = {};
  O[Bn] = O[Pn] = O[On] = O[An] = O[Mn] = O[zn] = O[Ln] = O[Nn] = O[Fn] = !0, O[d] = O[f] = O[me] = O[p] = O[be] = O[m] = O[$] = O[S] = O[b] = O[v] = O[T] = O[J] = O[j] = O[D] = O[Sr] = !1;
  var st = typeof Ye == "object" && Ye && Ye.Object === Object && Ye, Gn = typeof self == "object" && self && self.Object === Object && self, we = st || Gn || Function("return this")(), ct = r && !r.nodeType && r, Te = ct && !0 && e && !e.nodeType && e, lt = Te && Te.exports === ct, kr = lt && st.process, dt = function() {
    try {
      var a = Te && Te.require && Te.require("util").types;
      return a || kr && kr.binding && kr.binding("util");
    } catch {
    }
  }(), ut = dt && dt.isTypedArray;
  function Hn(a, o, l) {
    switch (l.length) {
      case 0:
        return a.call(o);
      case 1:
        return a.call(o, l[0]);
      case 2:
        return a.call(o, l[0], l[1]);
      case 3:
        return a.call(o, l[0], l[1], l[2]);
    }
    return a.apply(o, l);
  }
  function Vn(a, o) {
    for (var l = -1, h = Array(a); ++l < a; )
      h[l] = o(l);
    return h;
  }
  function Un(a) {
    return function(o) {
      return a(o);
    };
  }
  function Yn(a, o) {
    return a == null ? void 0 : a[o];
  }
  function Xn(a, o) {
    return function(l) {
      return a(o(l));
    };
  }
  var qn = Array.prototype, Kn = Function.prototype, Ne = Object.prototype, _r = we["__core-js_shared__"], Fe = Kn.toString, ae = Ne.hasOwnProperty, ft = function() {
    var a = /[^.]+$/.exec(_r && _r.keys && _r.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  }(), pt = Ne.toString, Zn = Fe.call(Object), Jn = RegExp(
    "^" + Fe.call(ae).replace(Wn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), We = lt ? we.Buffer : void 0, ht = we.Symbol, gt = we.Uint8Array, mt = We ? We.allocUnsafe : void 0, bt = Xn(Object.getPrototypeOf, Object), yt = Object.create, Qn = Ne.propertyIsEnumerable, ea = qn.splice, le = ht ? ht.toStringTag : void 0, je = function() {
    try {
      var a = Tr(Object, "defineProperty");
      return a({}, "", {}), a;
    } catch {
    }
  }(), ra = We ? We.isBuffer : void 0, vt = Math.max, ta = Date.now, St = Tr(we, "Map"), Ce = Tr(Object, "create"), na = function() {
    function a() {
    }
    return function(o) {
      if (!ue(o))
        return {};
      if (yt)
        return yt(o);
      a.prototype = o;
      var l = new a();
      return a.prototype = void 0, l;
    };
  }();
  function de(a) {
    var o = -1, l = a == null ? 0 : a.length;
    for (this.clear(); ++o < l; ) {
      var h = a[o];
      this.set(h[0], h[1]);
    }
  }
  function aa() {
    this.__data__ = Ce ? Ce(null) : {}, this.size = 0;
  }
  function oa(a) {
    var o = this.has(a) && delete this.__data__[a];
    return this.size -= o ? 1 : 0, o;
  }
  function ia(a) {
    var o = this.__data__;
    if (Ce) {
      var l = o[a];
      return l === n ? void 0 : l;
    }
    return ae.call(o, a) ? o[a] : void 0;
  }
  function sa(a) {
    var o = this.__data__;
    return Ce ? o[a] !== void 0 : ae.call(o, a);
  }
  function ca(a, o) {
    var l = this.__data__;
    return this.size += this.has(a) ? 0 : 1, l[a] = Ce && o === void 0 ? n : o, this;
  }
  de.prototype.clear = aa, de.prototype.delete = oa, de.prototype.get = ia, de.prototype.has = sa, de.prototype.set = ca;
  function oe(a) {
    var o = -1, l = a == null ? 0 : a.length;
    for (this.clear(); ++o < l; ) {
      var h = a[o];
      this.set(h[0], h[1]);
    }
  }
  function la() {
    this.__data__ = [], this.size = 0;
  }
  function da(a) {
    var o = this.__data__, l = De(o, a);
    if (l < 0)
      return !1;
    var h = o.length - 1;
    return l == h ? o.pop() : ea.call(o, l, 1), --this.size, !0;
  }
  function ua(a) {
    var o = this.__data__, l = De(o, a);
    return l < 0 ? void 0 : o[l][1];
  }
  function fa(a) {
    return De(this.__data__, a) > -1;
  }
  function pa(a, o) {
    var l = this.__data__, h = De(l, a);
    return h < 0 ? (++this.size, l.push([a, o])) : l[h][1] = o, this;
  }
  oe.prototype.clear = la, oe.prototype.delete = da, oe.prototype.get = ua, oe.prototype.has = fa, oe.prototype.set = pa;
  function ye(a) {
    var o = -1, l = a == null ? 0 : a.length;
    for (this.clear(); ++o < l; ) {
      var h = a[o];
      this.set(h[0], h[1]);
    }
  }
  function ha() {
    this.size = 0, this.__data__ = {
      hash: new de(),
      map: new (St || oe)(),
      string: new de()
    };
  }
  function ga(a) {
    var o = He(this, a).delete(a);
    return this.size -= o ? 1 : 0, o;
  }
  function ma(a) {
    return He(this, a).get(a);
  }
  function ba(a) {
    return He(this, a).has(a);
  }
  function ya(a, o) {
    var l = He(this, a), h = l.size;
    return l.set(a, o), this.size += l.size == h ? 0 : 1, this;
  }
  ye.prototype.clear = ha, ye.prototype.delete = ga, ye.prototype.get = ma, ye.prototype.has = ba, ye.prototype.set = ya;
  function ve(a) {
    var o = this.__data__ = new oe(a);
    this.size = o.size;
  }
  function va() {
    this.__data__ = new oe(), this.size = 0;
  }
  function Sa(a) {
    var o = this.__data__, l = o.delete(a);
    return this.size = o.size, l;
  }
  function ka(a) {
    return this.__data__.get(a);
  }
  function _a(a) {
    return this.__data__.has(a);
  }
  function xa(a, o) {
    var l = this.__data__;
    if (l instanceof oe) {
      var h = l.__data__;
      if (!St || h.length < t - 1)
        return h.push([a, o]), this.size = ++l.size, this;
      l = this.__data__ = new ye(h);
    }
    return l.set(a, o), this.size = l.size, this;
  }
  ve.prototype.clear = va, ve.prototype.delete = Sa, ve.prototype.get = ka, ve.prototype.has = _a, ve.prototype.set = xa;
  function wa(a, o) {
    var l = Er(a), h = !l && Rr(a), x = !l && !h && Tt(a), P = !l && !h && !x && Rt(a), z = l || h || x || P, _ = z ? Vn(a.length, String) : [], L = _.length;
    for (var K in a)
      (o || ae.call(a, K)) && !(z && // Safari 9 has enumerable `arguments.length` in strict mode.
      (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      x && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      P && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
      xt(K, L))) && _.push(K);
    return _;
  }
  function xr(a, o, l) {
    (l !== void 0 && !Ve(a[o], l) || l === void 0 && !(o in a)) && wr(a, o, l);
  }
  function Ta(a, o, l) {
    var h = a[o];
    (!(ae.call(a, o) && Ve(h, l)) || l === void 0 && !(o in a)) && wr(a, o, l);
  }
  function De(a, o) {
    for (var l = a.length; l--; )
      if (Ve(a[l][0], o))
        return l;
    return -1;
  }
  function wr(a, o, l) {
    o == "__proto__" && je ? je(a, o, {
      configurable: !0,
      enumerable: !0,
      value: l,
      writable: !0
    }) : a[o] = l;
  }
  var Ca = Fa();
  function Ge(a) {
    return a == null ? a === void 0 ? B : k : le && le in Object(a) ? Wa(a) : Ua(a);
  }
  function kt(a) {
    return Re(a) && Ge(a) == d;
  }
  function Ra(a) {
    if (!ue(a) || Ha(a))
      return !1;
    var o = Ir(a) ? Jn : jn;
    return o.test(Ka(a));
  }
  function Ea(a) {
    return Re(a) && Ct(a.length) && !!O[Ge(a)];
  }
  function $a(a) {
    if (!ue(a))
      return Va(a);
    var o = wt(a), l = [];
    for (var h in a)
      h == "constructor" && (o || !ae.call(a, h)) || l.push(h);
    return l;
  }
  function _t(a, o, l, h, x) {
    a !== o && Ca(o, function(P, z) {
      if (x || (x = new ve()), ue(P))
        Ia(a, o, z, l, _t, h, x);
      else {
        var _ = h ? h(Cr(a, z), P, z + "", a, o, x) : void 0;
        _ === void 0 && (_ = P), xr(a, z, _);
      }
    }, Et);
  }
  function Ia(a, o, l, h, x, P, z) {
    var _ = Cr(a, l), L = Cr(o, l), K = z.get(L);
    if (K) {
      xr(a, l, K);
      return;
    }
    var Y = P ? P(_, L, l + "", a, o, z) : void 0, Ee = Y === void 0;
    if (Ee) {
      var Br = Er(L), Pr = !Br && Tt(L), It = !Br && !Pr && Rt(L);
      Y = L, Br || Pr || It ? Er(_) ? Y = _ : Za(_) ? Y = za(_) : Pr ? (Ee = !1, Y = Oa(L, !0)) : It ? (Ee = !1, Y = Ma(L, !0)) : Y = [] : Ja(L) || Rr(L) ? (Y = _, Rr(_) ? Y = Qa(_) : (!ue(_) || Ir(_)) && (Y = ja(L))) : Ee = !1;
    }
    Ee && (z.set(L, Y), x(Y, L, h, P, z), z.delete(L)), xr(a, l, Y);
  }
  function Ba(a, o) {
    return Xa(Ya(a, o, $t), a + "");
  }
  var Pa = je ? function(a, o) {
    return je(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: ro(o),
      writable: !0
    });
  } : $t;
  function Oa(a, o) {
    if (o)
      return a.slice();
    var l = a.length, h = mt ? mt(l) : new a.constructor(l);
    return a.copy(h), h;
  }
  function Aa(a) {
    var o = new a.constructor(a.byteLength);
    return new gt(o).set(new gt(a)), o;
  }
  function Ma(a, o) {
    var l = o ? Aa(a.buffer) : a.buffer;
    return new a.constructor(l, a.byteOffset, a.length);
  }
  function za(a, o) {
    var l = -1, h = a.length;
    for (o || (o = Array(h)); ++l < h; )
      o[l] = a[l];
    return o;
  }
  function La(a, o, l, h) {
    var x = !l;
    l || (l = {});
    for (var P = -1, z = o.length; ++P < z; ) {
      var _ = o[P], L = h ? h(l[_], a[_], _, l, a) : void 0;
      L === void 0 && (L = a[_]), x ? wr(l, _, L) : Ta(l, _, L);
    }
    return l;
  }
  function Na(a) {
    return Ba(function(o, l) {
      var h = -1, x = l.length, P = x > 1 ? l[x - 1] : void 0, z = x > 2 ? l[2] : void 0;
      for (P = a.length > 3 && typeof P == "function" ? (x--, P) : void 0, z && Da(l[0], l[1], z) && (P = x < 3 ? void 0 : P, x = 1), o = Object(o); ++h < x; ) {
        var _ = l[h];
        _ && a(o, _, h, P);
      }
      return o;
    });
  }
  function Fa(a) {
    return function(o, l, h) {
      for (var x = -1, P = Object(o), z = h(o), _ = z.length; _--; ) {
        var L = z[a ? _ : ++x];
        if (l(P[L], L, P) === !1)
          break;
      }
      return o;
    };
  }
  function He(a, o) {
    var l = a.__data__;
    return Ga(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map;
  }
  function Tr(a, o) {
    var l = Yn(a, o);
    return Ra(l) ? l : void 0;
  }
  function Wa(a) {
    var o = ae.call(a, le), l = a[le];
    try {
      a[le] = void 0;
      var h = !0;
    } catch {
    }
    var x = pt.call(a);
    return h && (o ? a[le] = l : delete a[le]), x;
  }
  function ja(a) {
    return typeof a.constructor == "function" && !wt(a) ? na(bt(a)) : {};
  }
  function xt(a, o) {
    var l = typeof a;
    return o = o ?? u, !!o && (l == "number" || l != "symbol" && Dn.test(a)) && a > -1 && a % 1 == 0 && a < o;
  }
  function Da(a, o, l) {
    if (!ue(l))
      return !1;
    var h = typeof o;
    return (h == "number" ? $r(l) && xt(o, l.length) : h == "string" && o in l) ? Ve(l[o], a) : !1;
  }
  function Ga(a) {
    var o = typeof a;
    return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? a !== "__proto__" : a === null;
  }
  function Ha(a) {
    return !!ft && ft in a;
  }
  function wt(a) {
    var o = a && a.constructor, l = typeof o == "function" && o.prototype || Ne;
    return a === l;
  }
  function Va(a) {
    var o = [];
    if (a != null)
      for (var l in Object(a))
        o.push(l);
    return o;
  }
  function Ua(a) {
    return pt.call(a);
  }
  function Ya(a, o, l) {
    return o = vt(o === void 0 ? a.length - 1 : o, 0), function() {
      for (var h = arguments, x = -1, P = vt(h.length - o, 0), z = Array(P); ++x < P; )
        z[x] = h[o + x];
      x = -1;
      for (var _ = Array(o + 1); ++x < o; )
        _[x] = h[x];
      return _[o] = l(z), Hn(a, this, _);
    };
  }
  function Cr(a, o) {
    if (!(o === "constructor" && typeof a[o] == "function") && o != "__proto__")
      return a[o];
  }
  var Xa = qa(Pa);
  function qa(a) {
    var o = 0, l = 0;
    return function() {
      var h = ta(), x = c - (h - l);
      if (l = h, x > 0) {
        if (++o >= i)
          return arguments[0];
      } else
        o = 0;
      return a.apply(void 0, arguments);
    };
  }
  function Ka(a) {
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
  function Ve(a, o) {
    return a === o || a !== a && o !== o;
  }
  var Rr = kt(function() {
    return arguments;
  }()) ? kt : function(a) {
    return Re(a) && ae.call(a, "callee") && !Qn.call(a, "callee");
  }, Er = Array.isArray;
  function $r(a) {
    return a != null && Ct(a.length) && !Ir(a);
  }
  function Za(a) {
    return Re(a) && $r(a);
  }
  var Tt = ra || to;
  function Ir(a) {
    if (!ue(a))
      return !1;
    var o = Ge(a);
    return o == S || o == y || o == g || o == M;
  }
  function Ct(a) {
    return typeof a == "number" && a > -1 && a % 1 == 0 && a <= u;
  }
  function ue(a) {
    var o = typeof a;
    return a != null && (o == "object" || o == "function");
  }
  function Re(a) {
    return a != null && typeof a == "object";
  }
  function Ja(a) {
    if (!Re(a) || Ge(a) != T)
      return !1;
    var o = bt(a);
    if (o === null)
      return !0;
    var l = ae.call(o, "constructor") && o.constructor;
    return typeof l == "function" && l instanceof l && Fe.call(l) == Zn;
  }
  var Rt = ut ? Un(ut) : Ea;
  function Qa(a) {
    return La(a, Et(a));
  }
  function Et(a) {
    return $r(a) ? wa(a, !0) : $a(a);
  }
  var eo = Na(function(a, o, l, h) {
    _t(a, o, l, h);
  });
  function ro(a) {
    return function() {
      return a;
    };
  }
  function $t(a) {
    return a;
  }
  function to() {
    return !1;
  }
  e.exports = eo;
})(ri, rr);
const se = rr;
function pe(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function fe(e, ...r) {
  return ti(e) ? e(...r) : e;
}
var ti = (e) => typeof e == "function", ni = (e) => /!(important)?$/.test(e), Ft = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, ai = (e, r) => (t) => {
  const n = String(r), i = ni(n), c = Ft(n), u = e ? `${e}.${c}` : c;
  let d = pe(t.__cssMap) && u in t.__cssMap ? t.__cssMap[u].varRef : r;
  return d = Ft(d), i ? `${d} !important` : d;
};
function Me(e) {
  const { scale: r, transform: t, compose: n } = e;
  return (c, u) => {
    const d = ai(r, c)(u);
    let f = (t == null ? void 0 : t(d, u)) ?? d;
    return n && (f = n(f, u)), f;
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
var oi = ({ rtl: e, ltr: r }) => (t) => t.direction === "rtl" ? e : r;
function ii(e) {
  const { property: r, scale: t, transform: n } = e;
  return {
    scale: t,
    property: oi(r),
    transform: t ? Me({
      scale: t,
      compose: n
    }) : n
  };
}
var vn = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function si() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...vn
  ].join(" ");
}
function ci() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...vn
  ].join(" ");
}
var li = {
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
}, di = {
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
function ui(e) {
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
var fi = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Sn = "& > :not(style) ~ :not(style)", pi = {
  [Sn]: {
    marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
    marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
  }
}, hi = {
  [Sn]: {
    marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
    marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
  }
}, Dr = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, gi = new Set(Object.values(Dr)), kn = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), mi = (e) => e.trim();
function bi(e, r) {
  var t;
  if (e == null || kn.has(e))
    return e;
  const n = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g, { type: i, values: c } = ((t = n.exec(e)) == null ? void 0 : t.groups) ?? {};
  if (!i || !c)
    return e;
  const u = i.includes("-gradient") ? i : `${i}-gradient`, [d, ...f] = c.split(",").map(mi).filter(Boolean);
  if ((f == null ? void 0 : f.length) === 0)
    return e;
  const g = d in Dr ? Dr[d] : d;
  f.unshift(g);
  const p = f.map((m) => {
    if (gi.has(m))
      return m;
    const $ = m.indexOf(" "), [S, y] = $ !== -1 ? [m.substr(0, $), m.substr($ + 1)] : [m], b = _n(y) ? y : y && y.split(" "), v = `colors.${S}`, k = v in r.__cssMap ? r.__cssMap[v].varRef : S;
    return b ? [
      k,
      ...Array.isArray(b) ? b : [b]
    ].join(" ") : k;
  });
  return `${u}(${p.join(", ")})`;
}
var _n = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), yi = (e, r) => bi(e, r ?? {});
function vi(e) {
  return /^var\(--.+\)$/.test(e);
}
var Si = (e) => {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}, ee = (e) => (r) => `${e}(${r})`, w = {
  filter(e) {
    return e !== "auto" ? e : li;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : di;
  },
  ring(e) {
    return ui(w.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? si() : e === "auto-gpu" ? ci() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = Si(e);
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
    if (vi(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: yi,
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
    return e == null || _n(e) || kn.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    const { space: r, divide: t } = fi[e] ?? {}, n = { flexDirection: e };
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
  logical: ii,
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
var ki = {
  color: s.colors("color"),
  textColor: s.colors("color"),
  fill: s.colors("fill"),
  stroke: s.colors("stroke")
}, Gr = {
  boxShadow: s.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: s.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: s.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Gr, {
  shadow: Gr.boxShadow
});
var _i = {
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
    static: pi,
    transform: Me({
      scale: "space",
      transform: (e) => e !== null ? { "--chakra-space-x": e } : null
    })
  },
  experimental_spaceY: {
    static: hi,
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
var xn = {
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
}, xi = {
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
var wi = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: s.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: s.prop("listStyleImage")
};
function Ti(e, r, t, n) {
  const i = typeof r == "string" ? r.split(".") : [r];
  for (n = 0; n < i.length && e; n += 1)
    e = e[i[n]];
  return e === void 0 ? t : e;
}
var Ci = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (n, i, c, u) => {
    if (typeof n > "u")
      return e(n, i, c);
    r.has(n) || r.set(n, /* @__PURE__ */ new Map());
    const d = r.get(n);
    if (d.has(i))
      return d.get(i);
    const f = e(n, i, c, u);
    return d.set(i, f), f;
  };
}, Ri = Ci(Ti), Ei = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, $i = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Ar = (e, r, t) => {
  const n = {}, i = Ri(e, r, {});
  for (const c in i)
    c in t && t[c] != null || (n[c] = i[c]);
  return n;
}, Ii = {
  srOnly: {
    transform(e) {
      return e === !0 ? Ei : e === "focusable" ? $i : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, t) => Ar(r, `layerStyles.${e}`, t)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, t) => Ar(r, `textStyles.${e}`, t)
  },
  apply: {
    processResult: !0,
    transform: (e, r, t) => Ar(r, e, t)
  }
}, Be = {
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
Object.assign(Be, {
  insetStart: Be.insetInlineStart,
  insetEnd: Be.insetInlineEnd
});
var Bi = {
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
var Pi = {
  textDecorationColor: s.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: s.shadows("textShadow")
}, Oi = {
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
}, Ai = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: s.prop("transitionDuration", "transition.duration"),
  transitionProperty: s.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: s.prop("transitionTimingFunction", "transition.easing")
}, Mi = {
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
}, zi = {
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
function wn(e) {
  return pe(e) && e.reference ? e.reference : String(e);
}
var br = (e, ...r) => r.map(wn).join(` ${e} `).replace(/calc/g, ""), Wt = (...e) => `calc(${br("+", ...e)})`, jt = (...e) => `calc(${br("-", ...e)})`, Hr = (...e) => `calc(${br("*", ...e)})`, Dt = (...e) => `calc(${br("/", ...e)})`, Gt = (e) => {
  const r = wn(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : Hr(r, -1);
}, Ie = Object.assign((e) => ({
  add: (...r) => Ie(Wt(e, ...r)),
  subtract: (...r) => Ie(jt(e, ...r)),
  multiply: (...r) => Ie(Hr(e, ...r)),
  divide: (...r) => Ie(Dt(e, ...r)),
  negate: () => Ie(Gt(e)),
  toString: () => e.toString()
}), {
  add: Wt,
  subtract: jt,
  multiply: Hr,
  divide: Dt,
  negate: Gt
});
function Li(e) {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}
function Ht(e) {
  if (e == null)
    return e;
  const { unitless: r } = Li(e);
  return r || typeof e == "number" ? `${e}px` : e;
}
function Ni(e, r) {
  const t = ["@media screen"];
  return e && t.push("and", `(min-width: ${Ht(e)})`), r && t.push("and", `(max-width: ${Ht(r)})`), t.join(" ");
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
}, ce = (e) => Tn((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), ie = (e) => Tn((r) => e(r, "~ &"), "[data-peer]", ".peer"), Tn = (e, ...r) => r.map(e).join(", "), at = {
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
}, Fi = Object.keys(at);
function Wi(e, r = []) {
  const t = Object.assign({}, e);
  for (const n of r)
    n in t && delete t[n];
  return t;
}
var ot = se({}, Je, C, ki, tr, Z, _i, Bi, xi, xn, Ii, Be, Gr, A, zi, Mi, Pi, Oi, wi, Ai);
Object.assign({}, A, Z, tr, xn, Be);
var ji = [...Object.keys(ot), ...Fi], Di = { ...ot, ...at }, Gi = (e) => e in Di, Hi = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: t, toArrayValue: n, media: i } = r.__breakpoints, c = {};
  for (const u in e) {
    let d = fe(e[u], r);
    if (d == null)
      continue;
    if (d = pe(d) && t(d) ? n(d) : d, !Array.isArray(d)) {
      c[u] = d;
      continue;
    }
    const f = d.slice(0, i.length).length;
    for (let g = 0; g < f; g += 1) {
      const p = i == null ? void 0 : i[g];
      if (!p) {
        c[u] = d[g];
        continue;
      }
      c[p] = c[p] || {}, d[g] != null && (c[p][u] = d[g]);
    }
  }
  return c;
};
function Vi(e) {
  const r = [];
  let t = "", n = !1;
  for (let i = 0; i < e.length; i++) {
    const c = e[i];
    c === "(" ? (n = !0, t += c) : c === ")" ? (n = !1, t += c) : c === "," && !n ? (r.push(t), t = "") : t += c;
  }
  return t = t.trim(), t && r.push(t), r;
}
function Ui(e) {
  return /^var\(--.+\)$/.test(e);
}
var Yi = (e, r) => e.startsWith("--") && typeof r == "string" && !Ui(r), Xi = (e, r) => {
  if (r == null)
    return r;
  const t = (u) => {
    var d, f;
    return (f = (d = e.__cssMap) == null ? void 0 : d[u]) == null ? void 0 : f.varRef;
  }, n = (u) => t(u) ?? u, [i, c] = Vi(r);
  return r = t(i) ?? n(c) ?? n(r), r;
};
function qi(e) {
  const { configs: r = {}, pseudos: t = {}, theme: n } = e, i = (c, u = !1) => {
    var d;
    const f = fe(c, n), g = Hi(f)(n);
    let p = {};
    for (let m in g) {
      const $ = g[m];
      let S = fe($, n);
      m in t && (m = t[m]), Yi(m, S) && (S = Xi(n, S));
      let y = r[m];
      if (y === !0 && (y = { property: m }), pe(S)) {
        p[m] = p[m] ?? {}, p[m] = se({}, p[m], i(S, !0));
        continue;
      }
      let b = ((d = y == null ? void 0 : y.transform) == null ? void 0 : d.call(y, S, n, f)) ?? S;
      b = y != null && y.processResult ? i(b, !0) : b;
      const v = fe(y == null ? void 0 : y.property, n);
      if (!u && (y != null && y.static)) {
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
  return i;
}
var Ki = (e) => (r) => qi({
  theme: r,
  pseudos: at,
  configs: ot
})(e);
function Zi(e, r) {
  if (Array.isArray(e))
    return e;
  if (pe(e))
    return r(e);
  if (e != null)
    return [e];
}
function Ji(e, r) {
  for (let t = r + 1; t < e.length; t++)
    if (e[t] != null)
      return t;
  return -1;
}
function Qi(e) {
  const r = e.__breakpoints;
  return function(n, i, c, u) {
    var d, f;
    if (!r)
      return;
    const g = {}, p = Zi(c, r.toArrayValue);
    if (!p)
      return g;
    const m = p.length, $ = m === 1, S = !!n.parts;
    for (let y = 0; y < m; y++) {
      const b = r.details[y], v = r.details[Ji(p, y)], k = Ni(b.minW, v == null ? void 0 : v._minW), T = fe((d = n[i]) == null ? void 0 : d[p[y]], u);
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
function es(e) {
  return (r) => {
    const { variant: t, size: n, theme: i } = r, c = Qi(i);
    return se({}, fe(e.baseStyle ?? {}, r), c(e, "sizes", n, r), c(e, "variants", t, r));
  };
}
function Cn(e) {
  return Wi(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function rs() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return rt(r);
}
var ts = function() {
  var r = rs.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function ns(e) {
  return typeof e == "function";
}
function as(e, r) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    r.includes(n) || (t[n] = e[n]);
  }), t;
}
function os(e, r, t, n) {
  const i = typeof r == "string" ? r.split(".") : [r];
  for (n = 0; n < i.length && e; n += 1)
    e = e[i[n]];
  return e === void 0 ? t : e;
}
var is = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (n, i, c, u) => {
    if (typeof n > "u")
      return e(n, i, c);
    r.has(n) || r.set(n, /* @__PURE__ */ new Map());
    const d = r.get(n);
    if (d.has(i))
      return d.get(i);
    const f = e(n, i, c, u);
    return d.set(i, f), f;
  };
}, ss = is(os);
function Rn(e, r) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const i = e[n];
    r(i, n, e) && (t[n] = i);
  }), t;
}
var En = (e) => Rn(e, (r) => r != null);
function cs(e, ...r) {
  return ns(e) ? e(...r) : e;
}
function ls(e = {}) {
  const {
    strict: r = !0,
    errorMessage: t = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, i = ze(void 0);
  i.displayName = n;
  function c() {
    var u;
    const d = ge(i);
    if (!d && r) {
      const f = new Error(t);
      throw f.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, f, c), f;
    }
    return d;
  }
  return [
    i.Provider,
    c,
    i
  ];
}
var ds = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, us = /* @__PURE__ */ on(
  function(e) {
    return ds.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), fs = us, ps = function(r) {
  return r !== "theme";
}, Vt = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? fs : ps;
}, Ut = function(r, t, n) {
  var i;
  if (t) {
    var c = t.shouldForwardProp;
    i = r.__emotion_forwardProp && c ? function(u) {
      return r.__emotion_forwardProp(u) && c(u);
    } : c;
  }
  return typeof i != "function" && n && (i = r.__emotion_forwardProp), i;
}, hs = function(r) {
  var t = r.cache, n = r.serialized, i = r.isStringTag;
  return et(t, n, i), hn(function() {
    return fn(t, n, i);
  }), null;
}, gs = function e(r, t) {
  var n = r.__emotion_real === r, i = n && r.__emotion_base || r, c, u;
  t !== void 0 && (c = t.label, u = t.target);
  var d = Ut(r, t, n), f = d || Vt(i), g = !f("as");
  return function() {
    var p = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (c !== void 0 && m.push("label:" + c + ";"), p[0] == null || p[0].raw === void 0)
      m.push.apply(m, p);
    else {
      m.push(p[0][0]);
      for (var $ = p.length, S = 1; S < $; S++)
        m.push(p[S], p[0][S]);
    }
    var y = mn(function(b, v, k) {
      var T = g && b.as || i, M = "", J = [], j = b;
      if (b.theme == null) {
        j = {};
        for (var D in b)
          j[D] = b[D];
        j.theme = ge(nt);
      }
      typeof b.className == "string" ? M = un(v.registered, J, b.className) : b.className != null && (M = b.className + " ");
      var B = rt(m.concat(J), v.registered, j);
      M += v.key + "-" + B.name, u !== void 0 && (M += " " + u);
      var Sr = g && d === void 0 ? Vt(T) : f, me = {};
      for (var be in b)
        g && be === "as" || // $FlowFixMe
        Sr(be) && (me[be] = b[be]);
      return me.className = M, me.ref = k, /* @__PURE__ */ Se(Kt, null, /* @__PURE__ */ Se(hs, {
        cache: v,
        serialized: B,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ Se(T, me));
    });
    return y.displayName = c !== void 0 ? c : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = r.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = m, y.__emotion_forwardProp = d, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + u;
      }
    }), y.withComponent = function(b, v) {
      return e(b, Nr({}, t, v, {
        shouldForwardProp: Ut(y, v, !0)
      })).apply(void 0, m);
    }, y;
  };
}, ms = [
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
], Vr = gs.bind();
ms.forEach(function(e) {
  Vr[e] = Vr(e);
});
var bs = typeof Element < "u", ys = typeof Map == "function", vs = typeof Set == "function", Ss = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Qe(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var t, n, i;
    if (Array.isArray(e)) {
      if (t = e.length, t != r.length)
        return !1;
      for (n = t; n-- !== 0; )
        if (!Qe(e[n], r[n]))
          return !1;
      return !0;
    }
    var c;
    if (ys && e instanceof Map && r instanceof Map) {
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
    if (vs && e instanceof Set && r instanceof Set) {
      if (e.size !== r.size)
        return !1;
      for (c = e.entries(); !(n = c.next()).done; )
        if (!r.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Ss && ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
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
    if (i = Object.keys(e), t = i.length, t !== Object.keys(r).length)
      return !1;
    for (n = t; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, i[n]))
        return !1;
    if (bs && e instanceof Element)
      return !1;
    for (n = t; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !Qe(e[i[n]], r[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var ks = function(r, t) {
  try {
    return Qe(r, t);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
function _s() {
  const e = ge(nt);
  if (!e)
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  return e;
}
function xs() {
  const e = yn(), r = _s();
  return { ...e, theme: r };
}
ls({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
var ws = /* @__PURE__ */ new Set([
  ...ji,
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
]), Ts = /* @__PURE__ */ new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
function Cs(e) {
  return Ts.has(e) || !ws.has(e);
}
var Rs = ({ baseStyle: e }) => (r) => {
  const { theme: t, css: n, __css: i, sx: c, ...u } = r, d = Rn(u, (m, $) => Gi($)), f = cs(e, r), g = Object.assign({}, i, f, En(d), c), p = Ki(g)(r.theme);
  return n ? [p, n] : p;
};
function Mr(e, r) {
  const { baseStyle: t, ...n } = r ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = Cs);
  const i = Rs({ baseStyle: t }), c = Vr(e, n)(i);
  return N.forwardRef(function(f, g) {
    const { colorMode: p, forced: m } = yn();
    return N.createElement(c, {
      ref: g,
      "data-theme": m ? p : void 0,
      ...f
    });
  });
}
function yr(e) {
  return qt(e);
}
function Es(e, r = {}) {
  const { styleConfig: t, ...n } = r, { theme: i, colorMode: c } = xs(), u = e ? ss(i, `components.${e}`) : void 0, d = t || u, f = se({ theme: i, colorMode: c }, (d == null ? void 0 : d.defaultProps) ?? {}, En(as(n, ["children"]))), g = no({});
  if (d) {
    const m = es(d)(f);
    ks(g.current, m) || (g.current = m);
  }
  return g.current;
}
function $n(e, r = {}) {
  return Es(e, r);
}
function $s() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Mr, {
    apply(r, t, n) {
      return Mr(...n);
    },
    get(r, t) {
      return e.has(t) || e.set(t, Mr(t)), e.get(t);
    }
  });
}
var he = $s();
function Is(e, r) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`;
}
function Bs(e = {}) {
  const {
    name: r,
    strict: t = !0,
    hookName: n = "useContext",
    providerName: i = "Provider",
    errorMessage: c
  } = e, u = ze(void 0);
  u.displayName = r;
  function d() {
    var f;
    const g = ge(u);
    if (!g && t) {
      const p = new Error(c ?? Is(n, i));
      throw p.name = "ContextError", (f = Error.captureStackTrace) == null || f.call(Error, p, d), p;
    }
    return g;
  }
  return [u.Provider, d, u];
}
function Ps(e, r) {
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
function Os(...e) {
  return (r) => {
    e.forEach((t) => {
      Ps(t, r);
    });
  };
}
function As(...e) {
  return nr(() => Os(...e), e);
}
var Ms = (...e) => e.filter(Boolean).join(" "), zs = ts({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), In = yr((e, r) => {
  const t = $n("Spinner", e), {
    label: n = "Loading...",
    thickness: i = "2px",
    speed: c = "0.45s",
    emptyColor: u = "transparent",
    className: d,
    ...f
  } = Cn(e), g = Ms("chakra-spinner", d), p = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: i,
    borderBottomColor: u,
    borderLeftColor: u,
    animation: `${zs} ${c} linear infinite`,
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
In.displayName = "Spinner";
var vr = (...e) => e.filter(Boolean).join(" "), Yt = (e) => e ? "" : void 0, [Ls, Ns] = Bs({
  strict: !1,
  name: "ButtonGroupContext"
});
function Ur(e) {
  const { children: r, className: t, ...n } = e, i = Zt(r) ? Jt(r, {
    "aria-hidden": !0,
    focusable: !1
  }) : r, c = vr("chakra-button__icon", t);
  return /* @__PURE__ */ N.createElement(he.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...n,
    className: c
  }, i);
}
Ur.displayName = "ButtonIcon";
function Yr(e) {
  const {
    label: r,
    placement: t,
    spacing: n = "0.5rem",
    children: i = /* @__PURE__ */ N.createElement(In, {
      color: "currentColor",
      width: "1em",
      height: "1em"
    }),
    className: c,
    __css: u,
    ...d
  } = e, f = vr("chakra-button__spinner", c), g = t === "start" ? "marginEnd" : "marginStart", p = nr(() => ({
    display: "flex",
    alignItems: "center",
    position: r ? "relative" : "absolute",
    [g]: r ? n : 0,
    fontSize: "1em",
    lineHeight: "normal",
    ...u
  }), [u, r, g, n]);
  return /* @__PURE__ */ N.createElement(he.div, {
    className: f,
    ...d,
    __css: p
  }, i);
}
Yr.displayName = "ButtonSpinner";
function Fs(e) {
  const [r, t] = ao(!e);
  return { ref: oo((c) => {
    c && t(c.tagName === "BUTTON");
  }, []), type: r ? "button" : void 0 };
}
var it = yr((e, r) => {
  const t = Ns(), n = $n("Button", { ...t, ...e }), {
    isDisabled: i = t == null ? void 0 : t.isDisabled,
    isLoading: c,
    isActive: u,
    children: d,
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
  } = Cn(e), T = nr(() => {
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
  }, [n, t]), { ref: M, type: J } = Fs(v), j = { rightIcon: g, leftIcon: f, iconSpacing: m, children: d };
  return /* @__PURE__ */ N.createElement(he.button, {
    disabled: i || c,
    ref: As(r, M),
    as: v,
    type: $ ?? J,
    "data-active": Yt(u),
    "data-loading": Yt(c),
    __css: T,
    className: vr("chakra-button", b),
    ...k
  }, c && y === "start" && /* @__PURE__ */ N.createElement(Yr, {
    className: "chakra-button__spinner--start",
    label: p,
    placement: "start",
    spacing: m
  }, S), c ? p || /* @__PURE__ */ N.createElement(he.span, {
    opacity: 0
  }, /* @__PURE__ */ N.createElement(Xt, {
    ...j
  })) : /* @__PURE__ */ N.createElement(Xt, {
    ...j
  }), c && y === "end" && /* @__PURE__ */ N.createElement(Yr, {
    className: "chakra-button__spinner--end",
    label: p,
    placement: "end",
    spacing: m
  }, S));
});
it.displayName = "Button";
function Xt(e) {
  const { leftIcon: r, rightIcon: t, children: n, iconSpacing: i } = e;
  return /* @__PURE__ */ N.createElement(N.Fragment, null, r && /* @__PURE__ */ N.createElement(Ur, {
    marginEnd: i
  }, r), n, t && /* @__PURE__ */ N.createElement(Ur, {
    marginStart: i
  }, t));
}
var Ws = yr(function(r, t) {
  const {
    size: n,
    colorScheme: i,
    variant: c,
    className: u,
    spacing: d = "0.5rem",
    isAttached: f,
    isDisabled: g,
    ...p
  } = r, m = vr("chakra-button__group", u), $ = nr(() => ({ size: n, colorScheme: i, variant: c, isDisabled: g }), [n, i, c, g]);
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
    "& > *:not(style) ~ *:not(style)": { marginStart: d }
  }, /* @__PURE__ */ N.createElement(Ls, {
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
Ws.displayName = "ButtonGroup";
var js = yr((e, r) => {
  const { icon: t, children: n, isRound: i, "aria-label": c, ...u } = e, d = t || n, f = Zt(d) ? Jt(d, {
    "aria-hidden": !0,
    focusable: !1
  }) : null;
  return /* @__PURE__ */ N.createElement(it, {
    padding: "0",
    borderRadius: i ? "full" : void 0,
    ref: r,
    "aria-label": c,
    ...u
  }, f);
});
js.displayName = "IconButton";
function Hs({ label: e }) {
  return /* @__PURE__ */ jr(it, { children: /* @__PURE__ */ jr(ei, { text: e }) });
}
export {
  Hs as Button,
  ei as Label
};
