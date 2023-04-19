function Za(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Ja(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Qa = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ja(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var c = Za(o);
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
}(), H = "-ms-", Ke = "-moz-", C = "-webkit-", Vt = "comm", Vr = "rule", Ur = "decl", eo = "@import", Ut = "@keyframes", ro = Math.abs, Qe = String.fromCharCode, to = Object.assign;
function no(e, r) {
  return G(e, 0) ^ 45 ? (((r << 2 ^ G(e, 0)) << 2 ^ G(e, 1)) << 2 ^ G(e, 2)) << 2 ^ G(e, 3) : 0;
}
function Yt(e) {
  return e.trim();
}
function ao(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function E(e, r, t) {
  return e.replace(r, t);
}
function Br(e, r) {
  return e.indexOf(r);
}
function G(e, r) {
  return e.charCodeAt(r) | 0;
}
function $e(e, r, t) {
  return e.slice(r, t);
}
function ee(e) {
  return e.length;
}
function Yr(e) {
  return e.length;
}
function De(e, r) {
  return r.push(e), e;
}
function oo(e, r) {
  return e.map(r).join("");
}
var er = 1, ve = 1, Xt = 0, V = 0, N = 0, Se = "";
function rr(e, r, t, n, o, c, d) {
  return { value: e, root: r, parent: t, type: n, props: o, children: c, line: er, column: ve, length: d, return: "" };
}
function Te(e, r) {
  return to(rr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function io() {
  return N;
}
function so() {
  return N = V > 0 ? G(Se, --V) : 0, ve--, N === 10 && (ve = 1, er--), N;
}
function Y() {
  return N = V < Xt ? G(Se, V++) : 0, ve++, N === 10 && (ve = 1, er++), N;
}
function te() {
  return G(Se, V);
}
function Ve() {
  return V;
}
function Oe(e, r) {
  return $e(Se, e, r);
}
function Ie(e) {
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
function qt(e) {
  return er = ve = 1, Xt = ee(Se = e), V = 0, [];
}
function Kt(e) {
  return Se = "", e;
}
function Ue(e) {
  return Yt(Oe(V - 1, Or(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function co(e) {
  for (; (N = te()) && N < 33; )
    Y();
  return Ie(e) > 2 || Ie(N) > 3 ? "" : " ";
}
function lo(e, r) {
  for (; --r && Y() && !(N < 48 || N > 102 || N > 57 && N < 65 || N > 70 && N < 97); )
    ;
  return Oe(e, Ve() + (r < 6 && te() == 32 && Y() == 32));
}
function Or(e) {
  for (; Y(); )
    switch (N) {
      case e:
        return V;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Or(N);
        break;
      case 40:
        e === 41 && Or(e);
        break;
      case 92:
        Y();
        break;
    }
  return V;
}
function uo(e, r) {
  for (; Y() && e + N !== 47 + 10; )
    if (e + N === 42 + 42 && te() === 47)
      break;
  return "/*" + Oe(r, V - 1) + "*" + Qe(e === 47 ? e : Y());
}
function fo(e) {
  for (; !Ie(te()); )
    Y();
  return Oe(e, V);
}
function po(e) {
  return Kt(Ye("", null, null, null, [""], e = qt(e), 0, [0], e));
}
function Ye(e, r, t, n, o, c, d, u, f) {
  for (var g = 0, p = 0, m = d, $ = 0, S = 0, y = 0, b = 1, v = 1, k = 1, R = 0, M = "", Z = o, W = c, j = n, P = M; v; )
    switch (y = R, R = Y()) {
      case 40:
        if (y != 108 && G(P, m - 1) == 58) {
          Br(P += E(Ue(R), "&", "&\f"), "&\f") != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Ue(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += co(y);
        break;
      case 92:
        P += lo(Ve() - 1, 7);
        continue;
      case 47:
        switch (te()) {
          case 42:
          case 47:
            De(ho(uo(Y(), Ve()), r, t), f);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * b:
        u[g++] = ee(P) * k;
      case 125 * b:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            v = 0;
          case 59 + p:
            S > 0 && ee(P) - m && De(S > 32 ? $t(P + ";", n, t, m - 1) : $t(E(P, " ", "") + ";", n, t, m - 2), f);
            break;
          case 59:
            P += ";";
          default:
            if (De(j = Et(P, r, t, g, p, o, u, M, Z = [], W = [], m), c), R === 123)
              if (p === 0)
                Ye(P, r, j, j, Z, c, m, u, W);
              else
                switch ($ === 99 && G(P, 3) === 110 ? 100 : $) {
                  case 100:
                  case 109:
                  case 115:
                    Ye(e, j, j, n && De(Et(e, j, j, 0, 0, o, u, M, o, Z = [], m), W), o, W, m, u, n ? Z : W);
                    break;
                  default:
                    Ye(P, j, j, j, [""], W, 0, u, W);
                }
        }
        g = p = S = 0, b = k = 1, M = P = "", m = d;
        break;
      case 58:
        m = 1 + ee(P), S = y;
      default:
        if (b < 1) {
          if (R == 123)
            --b;
          else if (R == 125 && b++ == 0 && so() == 125)
            continue;
        }
        switch (P += Qe(R), R * b) {
          case 38:
            k = p > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            u[g++] = (ee(P) - 1) * k, k = 1;
            break;
          case 64:
            te() === 45 && (P += Ue(Y())), $ = te(), p = m = ee(M = P += fo(Ve())), R++;
            break;
          case 45:
            y === 45 && ee(P) == 2 && (b = 0);
        }
    }
  return c;
}
function Et(e, r, t, n, o, c, d, u, f, g, p) {
  for (var m = o - 1, $ = o === 0 ? c : [""], S = Yr($), y = 0, b = 0, v = 0; y < n; ++y)
    for (var k = 0, R = $e(e, m + 1, m = ro(b = d[y])), M = e; k < S; ++k)
      (M = Yt(b > 0 ? $[k] + " " + R : E(R, /&\f/g, $[k]))) && (f[v++] = M);
  return rr(e, r, t, o === 0 ? Vr : u, f, g, p);
}
function ho(e, r, t) {
  return rr(e, r, t, Vt, Qe(io()), $e(e, 2, -2), 0);
}
function $t(e, r, t, n) {
  return rr(e, r, t, Ur, $e(e, 0, n), $e(e, n + 1, -1), n);
}
function ye(e, r) {
  for (var t = "", n = Yr(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function go(e, r, t, n) {
  switch (e.type) {
    case eo:
    case Ur:
      return e.return = e.return || e.value;
    case Vt:
      return "";
    case Ut:
      return e.return = e.value + "{" + ye(e.children, n) + "}";
    case Vr:
      e.value = e.props.join(",");
  }
  return ee(t = ye(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function mo(e) {
  var r = Yr(e);
  return function(t, n, o, c) {
    for (var d = "", u = 0; u < r; u++)
      d += e[u](t, n, o, c) || "";
    return d;
  };
}
function bo(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Zt(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var yo = function(r, t, n) {
  for (var o = 0, c = 0; o = c, c = te(), o === 38 && c === 12 && (t[n] = 1), !Ie(c); )
    Y();
  return Oe(r, V);
}, vo = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Ie(o)) {
      case 0:
        o === 38 && te() === 12 && (t[n] = 1), r[n] += yo(V - 1, t, n);
        break;
      case 2:
        r[n] += Ue(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = te() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += Qe(o);
    }
  while (o = Y());
  return r;
}, So = function(r, t) {
  return Kt(vo(qt(r), t));
}, It = /* @__PURE__ */ new WeakMap(), ko = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !It.get(n)) && !o) {
      It.set(r, !0);
      for (var c = [], d = So(t, c), u = n.props, f = 0, g = 0; f < d.length; f++)
        for (var p = 0; p < u.length; p++, g++)
          r.props[g] = c[f] ? d[f].replace(/&\f/g, u[p]) : u[p] + " " + d[f];
    }
  }
}, _o = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Jt(e, r) {
  switch (no(e, r)) {
    case 5103:
      return C + "print-" + e + e;
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
      return C + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return C + e + Ke + e + H + e + e;
    case 6828:
    case 4268:
      return C + e + H + e + e;
    case 6165:
      return C + e + H + "flex-" + e + e;
    case 5187:
      return C + e + E(e, /(\w+).+(:[^]+)/, C + "box-$1$2" + H + "flex-$1$2") + e;
    case 5443:
      return C + e + H + "flex-item-" + E(e, /flex-|-self/, "") + e;
    case 4675:
      return C + e + H + "flex-line-pack" + E(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return C + e + H + E(e, "shrink", "negative") + e;
    case 5292:
      return C + e + H + E(e, "basis", "preferred-size") + e;
    case 6060:
      return C + "box-" + E(e, "-grow", "") + C + e + H + E(e, "grow", "positive") + e;
    case 4554:
      return C + E(e, /([^-])(transform)/g, "$1" + C + "$2") + e;
    case 6187:
      return E(E(E(e, /(zoom-|grab)/, C + "$1"), /(image-set)/, C + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return E(e, /(image-set\([^]*)/, C + "$1$`$1");
    case 4968:
      return E(E(e, /(.+:)(flex-)?(.*)/, C + "box-pack:$3" + H + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + C + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e, /(.+)-inline(.+)/, C + "$1$2") + e;
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
      if (ee(e) - 1 - r > 6)
        switch (G(e, r + 1)) {
          case 109:
            if (G(e, r + 4) !== 45)
              break;
          case 102:
            return E(e, /(.+:)(.+)-([^]+)/, "$1" + C + "$2-$3$1" + Ke + (G(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Br(e, "stretch") ? Jt(E(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (G(e, r + 1) !== 115)
        break;
    case 6444:
      switch (G(e, ee(e) - 3 - (~Br(e, "!important") && 10))) {
        case 107:
          return E(e, ":", ":" + C) + e;
        case 101:
          return E(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + C + (G(e, 14) === 45 ? "inline-" : "") + "box$3$1" + C + "$2$3$1" + H + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (G(e, r + 11)) {
        case 114:
          return C + e + H + E(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return C + e + H + E(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return C + e + H + E(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return C + e + H + e + e;
  }
  return e;
}
var xo = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Ur:
        r.return = Jt(r.value, r.length);
        break;
      case Ut:
        return ye([Te(r, {
          value: E(r.value, "@", "@" + C)
        })], o);
      case Vr:
        if (r.length)
          return oo(r.props, function(c) {
            switch (ao(c, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ye([Te(r, {
                  props: [E(c, /:(read-\w+)/, ":" + Ke + "$1")]
                })], o);
              case "::placeholder":
                return ye([Te(r, {
                  props: [E(c, /:(plac\w+)/, ":" + C + "input-$1")]
                }), Te(r, {
                  props: [E(c, /:(plac\w+)/, ":" + Ke + "$1")]
                }), Te(r, {
                  props: [E(c, /:(plac\w+)/, H + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, wo = [xo], Ro = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(b) {
      var v = b.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || wo, c = {}, d, u = [];
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
  var f, g = [ko, _o];
  {
    var p, m = [go, bo(function(b) {
      p.insert(b);
    })], $ = mo(g.concat(o, m)), S = function(v) {
      return ye(po(v), $);
    };
    f = function(v, k, R, M) {
      p = R, S(v ? v + "{" + k.styles + "}" : k.styles), M && (y.inserted[k.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new Qa({
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
function Ar() {
  return Ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ar.apply(this, arguments);
}
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mr = {}, To = {
  get exports() {
    return Mr;
  },
  set exports(e) {
    Mr = e;
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
var F = typeof Symbol == "function" && Symbol.for, Xr = F ? Symbol.for("react.element") : 60103, qr = F ? Symbol.for("react.portal") : 60106, tr = F ? Symbol.for("react.fragment") : 60107, nr = F ? Symbol.for("react.strict_mode") : 60108, ar = F ? Symbol.for("react.profiler") : 60114, or = F ? Symbol.for("react.provider") : 60109, ir = F ? Symbol.for("react.context") : 60110, Kr = F ? Symbol.for("react.async_mode") : 60111, sr = F ? Symbol.for("react.concurrent_mode") : 60111, cr = F ? Symbol.for("react.forward_ref") : 60112, lr = F ? Symbol.for("react.suspense") : 60113, Co = F ? Symbol.for("react.suspense_list") : 60120, dr = F ? Symbol.for("react.memo") : 60115, ur = F ? Symbol.for("react.lazy") : 60116, Eo = F ? Symbol.for("react.block") : 60121, $o = F ? Symbol.for("react.fundamental") : 60117, Io = F ? Symbol.for("react.responder") : 60118, Po = F ? Symbol.for("react.scope") : 60119;
function X(e) {
  if (typeof e == "object" && e !== null) {
    var r = e.$$typeof;
    switch (r) {
      case Xr:
        switch (e = e.type, e) {
          case Kr:
          case sr:
          case tr:
          case ar:
          case nr:
          case lr:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ir:
              case cr:
              case ur:
              case dr:
              case or:
                return e;
              default:
                return r;
            }
        }
      case qr:
        return r;
    }
  }
}
function Qt(e) {
  return X(e) === sr;
}
I.AsyncMode = Kr;
I.ConcurrentMode = sr;
I.ContextConsumer = ir;
I.ContextProvider = or;
I.Element = Xr;
I.ForwardRef = cr;
I.Fragment = tr;
I.Lazy = ur;
I.Memo = dr;
I.Portal = qr;
I.Profiler = ar;
I.StrictMode = nr;
I.Suspense = lr;
I.isAsyncMode = function(e) {
  return Qt(e) || X(e) === Kr;
};
I.isConcurrentMode = Qt;
I.isContextConsumer = function(e) {
  return X(e) === ir;
};
I.isContextProvider = function(e) {
  return X(e) === or;
};
I.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xr;
};
I.isForwardRef = function(e) {
  return X(e) === cr;
};
I.isFragment = function(e) {
  return X(e) === tr;
};
I.isLazy = function(e) {
  return X(e) === ur;
};
I.isMemo = function(e) {
  return X(e) === dr;
};
I.isPortal = function(e) {
  return X(e) === qr;
};
I.isProfiler = function(e) {
  return X(e) === ar;
};
I.isStrictMode = function(e) {
  return X(e) === nr;
};
I.isSuspense = function(e) {
  return X(e) === lr;
};
I.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === tr || e === sr || e === ar || e === nr || e === lr || e === Co || typeof e == "object" && e !== null && (e.$$typeof === ur || e.$$typeof === dr || e.$$typeof === or || e.$$typeof === ir || e.$$typeof === cr || e.$$typeof === $o || e.$$typeof === Io || e.$$typeof === Po || e.$$typeof === Eo);
};
I.typeOf = X;
(function(e) {
  e.exports = I;
})(To);
var en = Mr, Bo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Oo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, rn = {};
rn[en.ForwardRef] = Bo;
rn[en.Memo] = Oo;
var Ao = !0;
function tn(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Zr = function(r, t, n) {
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
  Ao === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, nn = function(r, t, n) {
  Zr(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var c = t;
    do
      r.insert(t === c ? "." + o : "", c, r.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function Mo(e) {
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
var zo = {
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
}, Lo = /[A-Z]|^ms/g, No = /_EMO_([^_]+?)_([^]*?)_EMO_/g, an = function(r) {
  return r.charCodeAt(1) === 45;
}, Pt = function(r) {
  return r != null && typeof r != "boolean";
}, $r = /* @__PURE__ */ Zt(function(e) {
  return an(e) ? e : e.replace(Lo, "-$&").toLowerCase();
}), Bt = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(No, function(n, o, c) {
          return re = {
            name: o,
            styles: c,
            next: re
          }, o;
        });
  }
  return zo[r] !== 1 && !an(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function Pe(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0)
    return t;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return re = {
          name: t.name,
          styles: t.styles,
          next: re
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            re = {
              name: n.name,
              styles: n.styles,
              next: re
            }, n = n.next;
        var o = t.styles + ";";
        return o;
      }
      return Fo(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var c = re, d = t(e);
        return re = c, Pe(e, r, d);
      }
      break;
    }
  }
  if (r == null)
    return t;
  var u = r[t];
  return u !== void 0 ? u : t;
}
function Fo(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Pe(e, r, t[o]) + ";";
  else
    for (var c in t) {
      var d = t[c];
      if (typeof d != "object")
        r != null && r[d] !== void 0 ? n += c + "{" + r[d] + "}" : Pt(d) && (n += $r(c) + ":" + Bt(c, d) + ";");
      else if (Array.isArray(d) && typeof d[0] == "string" && (r == null || r[d[0]] === void 0))
        for (var u = 0; u < d.length; u++)
          Pt(d[u]) && (n += $r(c) + ":" + Bt(c, d[u]) + ";");
      else {
        var f = Pe(e, r, d);
        switch (c) {
          case "animation":
          case "animationName": {
            n += $r(c) + ":" + f + ";";
            break;
          }
          default:
            n += c + "{" + f + "}";
        }
      }
    }
  return n;
}
var Ot = /label:\s*([^\s;\n{]+)\s*(;|$)/g, re, Jr = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, c = "";
  re = void 0;
  var d = r[0];
  d == null || d.raw === void 0 ? (o = !1, c += Pe(n, t, d)) : c += d[0];
  for (var u = 1; u < r.length; u++)
    c += Pe(n, t, r[u]), o && (c += d[u]);
  Ot.lastIndex = 0;
  for (var f = "", g; (g = Ot.exec(c)) !== null; )
    f += "-" + // $FlowFixMe we know it's not null
    g[1];
  var p = Mo(c) + f;
  return {
    name: p,
    styles: c,
    next: re
  };
}, Wo = function(r) {
  return r();
}, on = React["useInsertionEffect"] ? React["useInsertionEffect"] : !1, sn = on || Wo;
on || React.useLayoutEffect;
var Qr = {}.hasOwnProperty, cn = /* @__PURE__ */ React.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ro({
    key: "css"
  }) : null
);
cn.Provider;
var ln = function(r) {
  return /* @__PURE__ */ React.forwardRef(function(t, n) {
    var o = React.useContext(cn);
    return r(t, o, n);
  });
}, et = /* @__PURE__ */ React.createContext({}), zr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", jo = function(r, t) {
  var n = {};
  for (var o in t)
    Qr.call(t, o) && (n[o] = t[o]);
  return n[zr] = r, n;
}, Do = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Zr(t, n, o), sn(function() {
    return nn(t, n, o);
  }), null;
}, Go = /* @__PURE__ */ ln(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[zr], c = [n], d = "";
  typeof e.className == "string" ? d = tn(r.registered, c, e.className) : e.className != null && (d = e.className + " ");
  var u = Jr(c, void 0, React.useContext(et));
  d += r.key + "-" + u.name;
  var f = {};
  for (var g in e)
    Qr.call(e, g) && g !== "css" && g !== zr && (f[g] = e[g]);
  return f.ref = t, f.className = d, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Do, {
    cache: r,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ React.createElement(o, f));
}), Lr = {}, Ho = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
  }
}, fr = {};
const Vo = React;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo = Vo, Yo = Symbol.for("react.element"), Xo = Symbol.for("react.fragment"), qo = Object.prototype.hasOwnProperty, Ko = Uo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Zo = { key: !0, ref: !0, __self: !0, __source: !0 };
function dn(e, r, t) {
  var n, o = {}, c = null, d = null;
  t !== void 0 && (c = "" + t), r.key !== void 0 && (c = "" + r.key), r.ref !== void 0 && (d = r.ref);
  for (n in r)
    qo.call(r, n) && !Zo.hasOwnProperty(n) && (o[n] = r[n]);
  if (e && e.defaultProps)
    for (n in r = e.defaultProps, r)
      o[n] === void 0 && (o[n] = r[n]);
  return { $$typeof: Yo, type: e, key: c, ref: d, props: o, _owner: Ko.current };
}
fr.Fragment = Xo;
fr.jsx = dn;
fr.jsxs = dn;
(function(e) {
  e.exports = fr;
})(Ho);
const At = Lr.jsx;
function Nr(e, r, t) {
  return Qr.call(r, "css") ? At(Go, jo(e, r), t) : At(e, r, t);
}
function Jo({ text: e }) {
  return /* @__PURE__ */ Nr("div", { children: e });
}
var un = React.createContext({});
un.displayName = "ColorModeContext";
function fn() {
  const e = React.useContext(un);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Ze = {}, Qo = {
  get exports() {
    return Ze;
  },
  set exports(e) {
    Ze = e;
  }
};
(function(e, r) {
  var t = 200, n = "__lodash_hash_undefined__", o = 800, c = 16, d = 9007199254740991, u = "[object Arguments]", f = "[object Array]", g = "[object AsyncFunction]", p = "[object Boolean]", m = "[object Date]", $ = "[object Error]", S = "[object Function]", y = "[object GeneratorFunction]", b = "[object Map]", v = "[object Number]", k = "[object Null]", R = "[object Object]", M = "[object Proxy]", Z = "[object RegExp]", W = "[object Set]", j = "[object String]", P = "[object Undefined]", mr = "[object WeakMap]", he = "[object ArrayBuffer]", ge = "[object DataView]", Rn = "[object Float32Array]", Tn = "[object Float64Array]", Cn = "[object Int8Array]", En = "[object Int16Array]", $n = "[object Int32Array]", In = "[object Uint8Array]", Pn = "[object Uint8ClampedArray]", Bn = "[object Uint16Array]", On = "[object Uint32Array]", An = /[\\^$.*+?()[\]{}|]/g, Mn = /^\[object .+?Constructor\]$/, zn = /^(?:0|[1-9]\d*)$/, O = {};
  O[Rn] = O[Tn] = O[Cn] = O[En] = O[$n] = O[In] = O[Pn] = O[Bn] = O[On] = !0, O[u] = O[f] = O[he] = O[p] = O[ge] = O[m] = O[$] = O[S] = O[b] = O[v] = O[R] = O[Z] = O[W] = O[j] = O[mr] = !1;
  var at = typeof Ge == "object" && Ge && Ge.Object === Object && Ge, Ln = typeof self == "object" && self && self.Object === Object && self, ke = at || Ln || Function("return this")(), ot = r && !r.nodeType && r, _e = ot && !0 && e && !e.nodeType && e, it = _e && _e.exports === ot, br = it && at.process, st = function() {
    try {
      var a = _e && _e.require && _e.require("util").types;
      return a || br && br.binding && br.binding("util");
    } catch {
    }
  }(), ct = st && st.isTypedArray;
  function Nn(a, i, l) {
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
  function Fn(a, i) {
    for (var l = -1, h = Array(a); ++l < a; )
      h[l] = i(l);
    return h;
  }
  function Wn(a) {
    return function(i) {
      return a(i);
    };
  }
  function jn(a, i) {
    return a == null ? void 0 : a[i];
  }
  function Dn(a, i) {
    return function(l) {
      return a(i(l));
    };
  }
  var Gn = Array.prototype, Hn = Function.prototype, Ae = Object.prototype, yr = ke["__core-js_shared__"], Me = Hn.toString, ne = Ae.hasOwnProperty, lt = function() {
    var a = /[^.]+$/.exec(yr && yr.keys && yr.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  }(), dt = Ae.toString, Vn = Me.call(Object), Un = RegExp(
    "^" + Me.call(ne).replace(An, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ze = it ? ke.Buffer : void 0, ut = ke.Symbol, ft = ke.Uint8Array, pt = ze ? ze.allocUnsafe : void 0, ht = Dn(Object.getPrototypeOf, Object), gt = Object.create, Yn = Ae.propertyIsEnumerable, Xn = Gn.splice, ce = ut ? ut.toStringTag : void 0, Le = function() {
    try {
      var a = kr(Object, "defineProperty");
      return a({}, "", {}), a;
    } catch {
    }
  }(), qn = ze ? ze.isBuffer : void 0, mt = Math.max, Kn = Date.now, bt = kr(ke, "Map"), xe = kr(Object, "create"), Zn = function() {
    function a() {
    }
    return function(i) {
      if (!de(i))
        return {};
      if (gt)
        return gt(i);
      a.prototype = i;
      var l = new a();
      return a.prototype = void 0, l;
    };
  }();
  function le(a) {
    var i = -1, l = a == null ? 0 : a.length;
    for (this.clear(); ++i < l; ) {
      var h = a[i];
      this.set(h[0], h[1]);
    }
  }
  function Jn() {
    this.__data__ = xe ? xe(null) : {}, this.size = 0;
  }
  function Qn(a) {
    var i = this.has(a) && delete this.__data__[a];
    return this.size -= i ? 1 : 0, i;
  }
  function ea(a) {
    var i = this.__data__;
    if (xe) {
      var l = i[a];
      return l === n ? void 0 : l;
    }
    return ne.call(i, a) ? i[a] : void 0;
  }
  function ra(a) {
    var i = this.__data__;
    return xe ? i[a] !== void 0 : ne.call(i, a);
  }
  function ta(a, i) {
    var l = this.__data__;
    return this.size += this.has(a) ? 0 : 1, l[a] = xe && i === void 0 ? n : i, this;
  }
  le.prototype.clear = Jn, le.prototype.delete = Qn, le.prototype.get = ea, le.prototype.has = ra, le.prototype.set = ta;
  function ae(a) {
    var i = -1, l = a == null ? 0 : a.length;
    for (this.clear(); ++i < l; ) {
      var h = a[i];
      this.set(h[0], h[1]);
    }
  }
  function na() {
    this.__data__ = [], this.size = 0;
  }
  function aa(a) {
    var i = this.__data__, l = Ne(i, a);
    if (l < 0)
      return !1;
    var h = i.length - 1;
    return l == h ? i.pop() : Xn.call(i, l, 1), --this.size, !0;
  }
  function oa(a) {
    var i = this.__data__, l = Ne(i, a);
    return l < 0 ? void 0 : i[l][1];
  }
  function ia(a) {
    return Ne(this.__data__, a) > -1;
  }
  function sa(a, i) {
    var l = this.__data__, h = Ne(l, a);
    return h < 0 ? (++this.size, l.push([a, i])) : l[h][1] = i, this;
  }
  ae.prototype.clear = na, ae.prototype.delete = aa, ae.prototype.get = oa, ae.prototype.has = ia, ae.prototype.set = sa;
  function me(a) {
    var i = -1, l = a == null ? 0 : a.length;
    for (this.clear(); ++i < l; ) {
      var h = a[i];
      this.set(h[0], h[1]);
    }
  }
  function ca() {
    this.size = 0, this.__data__ = {
      hash: new le(),
      map: new (bt || ae)(),
      string: new le()
    };
  }
  function la(a) {
    var i = We(this, a).delete(a);
    return this.size -= i ? 1 : 0, i;
  }
  function da(a) {
    return We(this, a).get(a);
  }
  function ua(a) {
    return We(this, a).has(a);
  }
  function fa(a, i) {
    var l = We(this, a), h = l.size;
    return l.set(a, i), this.size += l.size == h ? 0 : 1, this;
  }
  me.prototype.clear = ca, me.prototype.delete = la, me.prototype.get = da, me.prototype.has = ua, me.prototype.set = fa;
  function be(a) {
    var i = this.__data__ = new ae(a);
    this.size = i.size;
  }
  function pa() {
    this.__data__ = new ae(), this.size = 0;
  }
  function ha(a) {
    var i = this.__data__, l = i.delete(a);
    return this.size = i.size, l;
  }
  function ga(a) {
    return this.__data__.get(a);
  }
  function ma(a) {
    return this.__data__.has(a);
  }
  function ba(a, i) {
    var l = this.__data__;
    if (l instanceof ae) {
      var h = l.__data__;
      if (!bt || h.length < t - 1)
        return h.push([a, i]), this.size = ++l.size, this;
      l = this.__data__ = new me(h);
    }
    return l.set(a, i), this.size = l.size, this;
  }
  be.prototype.clear = pa, be.prototype.delete = ha, be.prototype.get = ga, be.prototype.has = ma, be.prototype.set = ba;
  function ya(a, i) {
    var l = wr(a), h = !l && xr(a), x = !l && !h && _t(a), B = !l && !h && !x && wt(a), z = l || h || x || B, _ = z ? Fn(a.length, String) : [], L = _.length;
    for (var q in a)
      (i || ne.call(a, q)) && !(z && // Safari 9 has enumerable `arguments.length` in strict mode.
      (q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      x && (q == "offset" || q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      B && (q == "buffer" || q == "byteLength" || q == "byteOffset") || // Skip index properties.
      St(q, L))) && _.push(q);
    return _;
  }
  function vr(a, i, l) {
    (l !== void 0 && !je(a[i], l) || l === void 0 && !(i in a)) && Sr(a, i, l);
  }
  function va(a, i, l) {
    var h = a[i];
    (!(ne.call(a, i) && je(h, l)) || l === void 0 && !(i in a)) && Sr(a, i, l);
  }
  function Ne(a, i) {
    for (var l = a.length; l--; )
      if (je(a[l][0], i))
        return l;
    return -1;
  }
  function Sr(a, i, l) {
    i == "__proto__" && Le ? Le(a, i, {
      configurable: !0,
      enumerable: !0,
      value: l,
      writable: !0
    }) : a[i] = l;
  }
  var Sa = Oa();
  function Fe(a) {
    return a == null ? a === void 0 ? P : k : ce && ce in Object(a) ? Aa(a) : Wa(a);
  }
  function yt(a) {
    return we(a) && Fe(a) == u;
  }
  function ka(a) {
    if (!de(a) || Na(a))
      return !1;
    var i = Tr(a) ? Un : Mn;
    return i.test(Ha(a));
  }
  function _a(a) {
    return we(a) && xt(a.length) && !!O[Fe(a)];
  }
  function xa(a) {
    if (!de(a))
      return Fa(a);
    var i = kt(a), l = [];
    for (var h in a)
      h == "constructor" && (i || !ne.call(a, h)) || l.push(h);
    return l;
  }
  function vt(a, i, l, h, x) {
    a !== i && Sa(i, function(B, z) {
      if (x || (x = new be()), de(B))
        wa(a, i, z, l, vt, h, x);
      else {
        var _ = h ? h(_r(a, z), B, z + "", a, i, x) : void 0;
        _ === void 0 && (_ = B), vr(a, z, _);
      }
    }, Rt);
  }
  function wa(a, i, l, h, x, B, z) {
    var _ = _r(a, l), L = _r(i, l), q = z.get(L);
    if (q) {
      vr(a, l, q);
      return;
    }
    var U = B ? B(_, L, l + "", a, i, z) : void 0, Re = U === void 0;
    if (Re) {
      var Cr = wr(L), Er = !Cr && _t(L), Ct = !Cr && !Er && wt(L);
      U = L, Cr || Er || Ct ? wr(_) ? U = _ : Va(_) ? U = Ia(_) : Er ? (Re = !1, U = Ca(L, !0)) : Ct ? (Re = !1, U = $a(L, !0)) : U = [] : Ua(L) || xr(L) ? (U = _, xr(_) ? U = Ya(_) : (!de(_) || Tr(_)) && (U = Ma(L))) : Re = !1;
    }
    Re && (z.set(L, U), x(U, L, h, B, z), z.delete(L)), vr(a, l, U);
  }
  function Ra(a, i) {
    return Da(ja(a, i, Tt), a + "");
  }
  var Ta = Le ? function(a, i) {
    return Le(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: qa(i),
      writable: !0
    });
  } : Tt;
  function Ca(a, i) {
    if (i)
      return a.slice();
    var l = a.length, h = pt ? pt(l) : new a.constructor(l);
    return a.copy(h), h;
  }
  function Ea(a) {
    var i = new a.constructor(a.byteLength);
    return new ft(i).set(new ft(a)), i;
  }
  function $a(a, i) {
    var l = i ? Ea(a.buffer) : a.buffer;
    return new a.constructor(l, a.byteOffset, a.length);
  }
  function Ia(a, i) {
    var l = -1, h = a.length;
    for (i || (i = Array(h)); ++l < h; )
      i[l] = a[l];
    return i;
  }
  function Pa(a, i, l, h) {
    var x = !l;
    l || (l = {});
    for (var B = -1, z = i.length; ++B < z; ) {
      var _ = i[B], L = h ? h(l[_], a[_], _, l, a) : void 0;
      L === void 0 && (L = a[_]), x ? Sr(l, _, L) : va(l, _, L);
    }
    return l;
  }
  function Ba(a) {
    return Ra(function(i, l) {
      var h = -1, x = l.length, B = x > 1 ? l[x - 1] : void 0, z = x > 2 ? l[2] : void 0;
      for (B = a.length > 3 && typeof B == "function" ? (x--, B) : void 0, z && za(l[0], l[1], z) && (B = x < 3 ? void 0 : B, x = 1), i = Object(i); ++h < x; ) {
        var _ = l[h];
        _ && a(i, _, h, B);
      }
      return i;
    });
  }
  function Oa(a) {
    return function(i, l, h) {
      for (var x = -1, B = Object(i), z = h(i), _ = z.length; _--; ) {
        var L = z[a ? _ : ++x];
        if (l(B[L], L, B) === !1)
          break;
      }
      return i;
    };
  }
  function We(a, i) {
    var l = a.__data__;
    return La(i) ? l[typeof i == "string" ? "string" : "hash"] : l.map;
  }
  function kr(a, i) {
    var l = jn(a, i);
    return ka(l) ? l : void 0;
  }
  function Aa(a) {
    var i = ne.call(a, ce), l = a[ce];
    try {
      a[ce] = void 0;
      var h = !0;
    } catch {
    }
    var x = dt.call(a);
    return h && (i ? a[ce] = l : delete a[ce]), x;
  }
  function Ma(a) {
    return typeof a.constructor == "function" && !kt(a) ? Zn(ht(a)) : {};
  }
  function St(a, i) {
    var l = typeof a;
    return i = i ?? d, !!i && (l == "number" || l != "symbol" && zn.test(a)) && a > -1 && a % 1 == 0 && a < i;
  }
  function za(a, i, l) {
    if (!de(l))
      return !1;
    var h = typeof i;
    return (h == "number" ? Rr(l) && St(i, l.length) : h == "string" && i in l) ? je(l[i], a) : !1;
  }
  function La(a) {
    var i = typeof a;
    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? a !== "__proto__" : a === null;
  }
  function Na(a) {
    return !!lt && lt in a;
  }
  function kt(a) {
    var i = a && a.constructor, l = typeof i == "function" && i.prototype || Ae;
    return a === l;
  }
  function Fa(a) {
    var i = [];
    if (a != null)
      for (var l in Object(a))
        i.push(l);
    return i;
  }
  function Wa(a) {
    return dt.call(a);
  }
  function ja(a, i, l) {
    return i = mt(i === void 0 ? a.length - 1 : i, 0), function() {
      for (var h = arguments, x = -1, B = mt(h.length - i, 0), z = Array(B); ++x < B; )
        z[x] = h[i + x];
      x = -1;
      for (var _ = Array(i + 1); ++x < i; )
        _[x] = h[x];
      return _[i] = l(z), Nn(a, this, _);
    };
  }
  function _r(a, i) {
    if (!(i === "constructor" && typeof a[i] == "function") && i != "__proto__")
      return a[i];
  }
  var Da = Ga(Ta);
  function Ga(a) {
    var i = 0, l = 0;
    return function() {
      var h = Kn(), x = c - (h - l);
      if (l = h, x > 0) {
        if (++i >= o)
          return arguments[0];
      } else
        i = 0;
      return a.apply(void 0, arguments);
    };
  }
  function Ha(a) {
    if (a != null) {
      try {
        return Me.call(a);
      } catch {
      }
      try {
        return a + "";
      } catch {
      }
    }
    return "";
  }
  function je(a, i) {
    return a === i || a !== a && i !== i;
  }
  var xr = yt(function() {
    return arguments;
  }()) ? yt : function(a) {
    return we(a) && ne.call(a, "callee") && !Yn.call(a, "callee");
  }, wr = Array.isArray;
  function Rr(a) {
    return a != null && xt(a.length) && !Tr(a);
  }
  function Va(a) {
    return we(a) && Rr(a);
  }
  var _t = qn || Ka;
  function Tr(a) {
    if (!de(a))
      return !1;
    var i = Fe(a);
    return i == S || i == y || i == g || i == M;
  }
  function xt(a) {
    return typeof a == "number" && a > -1 && a % 1 == 0 && a <= d;
  }
  function de(a) {
    var i = typeof a;
    return a != null && (i == "object" || i == "function");
  }
  function we(a) {
    return a != null && typeof a == "object";
  }
  function Ua(a) {
    if (!we(a) || Fe(a) != R)
      return !1;
    var i = ht(a);
    if (i === null)
      return !0;
    var l = ne.call(i, "constructor") && i.constructor;
    return typeof l == "function" && l instanceof l && Me.call(l) == Vn;
  }
  var wt = ct ? Wn(ct) : _a;
  function Ya(a) {
    return Pa(a, Rt(a));
  }
  function Rt(a) {
    return Rr(a) ? ya(a, !0) : xa(a);
  }
  var Xa = Ba(function(a, i, l, h) {
    vt(a, i, l, h);
  });
  function qa(a) {
    return function() {
      return a;
    };
  }
  function Tt(a) {
    return a;
  }
  function Ka() {
    return !1;
  }
  e.exports = Xa;
})(Qo, Ze);
const ie = Ze;
function fe(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function ue(e, ...r) {
  return ei(e) ? e(...r) : e;
}
var ei = (e) => typeof e == "function", ri = (e) => /!(important)?$/.test(e), Mt = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, ti = (e, r) => (t) => {
  const n = String(r), o = ri(n), c = Mt(n), d = e ? `${e}.${c}` : c;
  let u = fe(t.__cssMap) && d in t.__cssMap ? t.__cssMap[d].varRef : r;
  return u = Mt(u), o ? `${u} !important` : u;
};
function Be(e) {
  const { scale: r, transform: t, compose: n } = e;
  return (c, d) => {
    const u = ti(r, c)(d);
    let f = (t == null ? void 0 : t(u, d)) ?? u;
    return n && (f = n(f, d)), f;
  };
}
var He = (...e) => (r) => e.reduce((t, n) => n(t), r);
function J(e, r) {
  return (t) => {
    const n = { property: t, scale: e };
    return n.transform = Be({
      scale: e,
      transform: r
    }), n;
  };
}
var ni = ({ rtl: e, ltr: r }) => (t) => t.direction === "rtl" ? e : r;
function ai(e) {
  const { property: r, scale: t, transform: n } = e;
  return {
    scale: t,
    property: ni(r),
    transform: t ? Be({
      scale: t,
      compose: n
    }) : n
  };
}
var pn = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function oi() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...pn
  ].join(" ");
}
function ii() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...pn
  ].join(" ");
}
var si = {
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
}, ci = {
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
function li(e) {
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
var di = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, hn = "& > :not(style) ~ :not(style)", ui = {
  [hn]: {
    marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
    marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
  }
}, fi = {
  [hn]: {
    marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
    marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
  }
}, Fr = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, pi = new Set(Object.values(Fr)), gn = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), hi = (e) => e.trim();
function gi(e, r) {
  var t;
  if (e == null || gn.has(e))
    return e;
  const n = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g, { type: o, values: c } = ((t = n.exec(e)) == null ? void 0 : t.groups) ?? {};
  if (!o || !c)
    return e;
  const d = o.includes("-gradient") ? o : `${o}-gradient`, [u, ...f] = c.split(",").map(hi).filter(Boolean);
  if ((f == null ? void 0 : f.length) === 0)
    return e;
  const g = u in Fr ? Fr[u] : u;
  f.unshift(g);
  const p = f.map((m) => {
    if (pi.has(m))
      return m;
    const $ = m.indexOf(" "), [S, y] = $ !== -1 ? [m.substr(0, $), m.substr($ + 1)] : [m], b = mn(y) ? y : y && y.split(" "), v = `colors.${S}`, k = v in r.__cssMap ? r.__cssMap[v].varRef : S;
    return b ? [
      k,
      ...Array.isArray(b) ? b : [b]
    ].join(" ") : k;
  });
  return `${d}(${p.join(", ")})`;
}
var mn = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), mi = (e, r) => gi(e, r ?? {});
function bi(e) {
  return /^var\(--.+\)$/.test(e);
}
var yi = (e) => {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}, Q = (e) => (r) => `${e}(${r})`, w = {
  filter(e) {
    return e !== "auto" ? e : si;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : ci;
  },
  ring(e) {
    return li(w.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? oi() : e === "auto-gpu" ? ii() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = yi(e);
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
    if (bi(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: mi,
  blur: Q("blur"),
  opacity: Q("opacity"),
  brightness: Q("brightness"),
  contrast: Q("contrast"),
  dropShadow: Q("drop-shadow"),
  grayscale: Q("grayscale"),
  hueRotate: Q("hue-rotate"),
  invert: Q("invert"),
  saturate: Q("saturate"),
  sepia: Q("sepia"),
  bgImage(e) {
    return e == null || mn(e) || gn.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    const { space: r, divide: t } = di[e] ?? {}, n = { flexDirection: e };
    return r && (n[r] = 1), t && (n[t] = 1), n;
  }
}, s = {
  borderWidths: J("borderWidths"),
  borderStyles: J("borderStyles"),
  colors: J("colors"),
  borders: J("borders"),
  radii: J("radii", w.px),
  space: J("space", He(w.vh, w.px)),
  spaceT: J("space", He(w.vh, w.px)),
  degreeT(e) {
    return { property: e, transform: w.degree };
  },
  prop(e, r, t) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: Be({ scale: r, transform: t })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: J("sizes", He(w.vh, w.px)),
  sizesT: J("sizes", He(w.vh, w.fraction)),
  shadows: J("shadows"),
  logical: ai,
  blur: J("blur", w.blur)
}, Xe = {
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
Object.assign(Xe, {
  bgImage: Xe.backgroundImage,
  bgImg: Xe.backgroundImage
});
var T = {
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
Object.assign(T, {
  rounded: T.borderRadius,
  roundedTop: T.borderTopRadius,
  roundedTopLeft: T.borderTopLeftRadius,
  roundedTopRight: T.borderTopRightRadius,
  roundedTopStart: T.borderStartStartRadius,
  roundedTopEnd: T.borderStartEndRadius,
  roundedBottom: T.borderBottomRadius,
  roundedBottomLeft: T.borderBottomLeftRadius,
  roundedBottomRight: T.borderBottomRightRadius,
  roundedBottomStart: T.borderEndStartRadius,
  roundedBottomEnd: T.borderEndEndRadius,
  roundedLeft: T.borderLeftRadius,
  roundedRight: T.borderRightRadius,
  roundedStart: T.borderInlineStartRadius,
  roundedEnd: T.borderInlineEndRadius,
  borderStart: T.borderInlineStart,
  borderEnd: T.borderInlineEnd,
  borderTopStartRadius: T.borderStartStartRadius,
  borderTopEndRadius: T.borderStartEndRadius,
  borderBottomStartRadius: T.borderEndStartRadius,
  borderBottomEndRadius: T.borderEndEndRadius,
  borderStartRadius: T.borderInlineStartRadius,
  borderEndRadius: T.borderInlineEndRadius,
  borderStartWidth: T.borderInlineStartWidth,
  borderEndWidth: T.borderInlineEndWidth,
  borderStartColor: T.borderInlineStartColor,
  borderEndColor: T.borderInlineEndColor,
  borderStartStyle: T.borderInlineStartStyle,
  borderEndStyle: T.borderInlineEndStyle
});
var vi = {
  color: s.colors("color"),
  textColor: s.colors("color"),
  fill: s.colors("fill"),
  stroke: s.colors("stroke")
}, Wr = {
  boxShadow: s.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: s.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: s.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Wr, {
  shadow: Wr.boxShadow
});
var Si = {
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
}, Je = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: w.flexDirection },
  experimental_spaceX: {
    static: ui,
    transform: Be({
      scale: "space",
      transform: (e) => e !== null ? { "--chakra-space-x": e } : null
    })
  },
  experimental_spaceY: {
    static: fi,
    transform: Be({
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
Object.assign(Je, {
  flexDir: Je.flexDirection
});
var bn = {
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
}, ki = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: w.outline },
  outlineOffset: !0,
  outlineColor: s.colors("outlineColor")
}, K = {
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
Object.assign(K, {
  w: K.width,
  h: K.height,
  minW: K.minWidth,
  maxW: K.maxWidth,
  minH: K.minHeight,
  maxH: K.maxHeight,
  overscroll: K.overscrollBehavior,
  overscrollX: K.overscrollBehaviorX,
  overscrollY: K.overscrollBehaviorY
});
var _i = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: s.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: s.prop("listStyleImage")
};
function xi(e, r, t, n) {
  const o = typeof r == "string" ? r.split(".") : [r];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? t : e;
}
var wi = (e) => {
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
}, Ri = wi(xi), Ti = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Ci = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Ir = (e, r, t) => {
  const n = {}, o = Ri(e, r, {});
  for (const c in o)
    c in t && t[c] != null || (n[c] = o[c]);
  return n;
}, Ei = {
  srOnly: {
    transform(e) {
      return e === !0 ? Ti : e === "focusable" ? Ci : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, t) => Ir(r, `layerStyles.${e}`, t)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, t) => Ir(r, `textStyles.${e}`, t)
  },
  apply: {
    processResult: !0,
    transform: (e, r, t) => Ir(r, e, t)
  }
}, Ee = {
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
Object.assign(Ee, {
  insetStart: Ee.insetInlineStart,
  insetEnd: Ee.insetInlineEnd
});
var $i = {
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
var Ii = {
  textDecorationColor: s.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: s.shadows("textShadow")
}, Pi = {
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
}, Bi = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: s.prop("transitionDuration", "transition.duration"),
  transitionProperty: s.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: s.prop("transitionTimingFunction", "transition.easing")
}, Oi = {
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
}, Ai = {
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
function yn(e) {
  return fe(e) && e.reference ? e.reference : String(e);
}
var pr = (e, ...r) => r.map(yn).join(` ${e} `).replace(/calc/g, ""), zt = (...e) => `calc(${pr("+", ...e)})`, Lt = (...e) => `calc(${pr("-", ...e)})`, jr = (...e) => `calc(${pr("*", ...e)})`, Nt = (...e) => `calc(${pr("/", ...e)})`, Ft = (e) => {
  const r = yn(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : jr(r, -1);
}, Ce = Object.assign((e) => ({
  add: (...r) => Ce(zt(e, ...r)),
  subtract: (...r) => Ce(Lt(e, ...r)),
  multiply: (...r) => Ce(jr(e, ...r)),
  divide: (...r) => Ce(Nt(e, ...r)),
  negate: () => Ce(Ft(e)),
  toString: () => e.toString()
}), {
  add: zt,
  subtract: Lt,
  multiply: jr,
  divide: Nt,
  negate: Ft
});
function Mi(e) {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}
function Wt(e) {
  if (e == null)
    return e;
  const { unitless: r } = Mi(e);
  return r || typeof e == "number" ? `${e}px` : e;
}
function zi(e, r) {
  const t = ["@media screen"];
  return e && t.push("and", `(min-width: ${Wt(e)})`), r && t.push("and", `(max-width: ${Wt(r)})`), t.join(" ");
}
var D = {
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
}, se = (e) => vn((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), oe = (e) => vn((r) => e(r, "~ &"), "[data-peer]", ".peer"), vn = (e, ...r) => r.map(e).join(", "), rt = {
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
  _groupHover: se(D.hover),
  _peerHover: oe(D.hover),
  _groupFocus: se(D.focus),
  _peerFocus: oe(D.focus),
  _groupFocusVisible: se(D.focusVisible),
  _peerFocusVisible: oe(D.focusVisible),
  _groupActive: se(D.active),
  _peerActive: oe(D.active),
  _groupDisabled: se(D.disabled),
  _peerDisabled: oe(D.disabled),
  _groupInvalid: se(D.invalid),
  _peerInvalid: oe(D.invalid),
  _groupChecked: se(D.checked),
  _peerChecked: oe(D.checked),
  _groupFocusWithin: se(D.focusWithin),
  _peerFocusWithin: oe(D.focusWithin),
  _peerPlaceholderShown: oe(D.placeholderShown),
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
}, Li = Object.keys(rt);
function Ni(e, r = []) {
  const t = Object.assign({}, e);
  for (const n of r)
    n in t && delete t[n];
  return t;
}
var tt = ie({}, Xe, T, vi, Je, K, Si, $i, ki, bn, Ei, Ee, Wr, A, Ai, Oi, Ii, Pi, _i, Bi);
Object.assign({}, A, K, Je, bn, Ee);
var Fi = [...Object.keys(tt), ...Li], Wi = { ...tt, ...rt }, ji = (e) => e in Wi, Di = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: t, toArrayValue: n, media: o } = r.__breakpoints, c = {};
  for (const d in e) {
    let u = ue(e[d], r);
    if (u == null)
      continue;
    if (u = fe(u) && t(u) ? n(u) : u, !Array.isArray(u)) {
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
function Gi(e) {
  const r = [];
  let t = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const c = e[o];
    c === "(" ? (n = !0, t += c) : c === ")" ? (n = !1, t += c) : c === "," && !n ? (r.push(t), t = "") : t += c;
  }
  return t = t.trim(), t && r.push(t), r;
}
function Hi(e) {
  return /^var\(--.+\)$/.test(e);
}
var Vi = (e, r) => e.startsWith("--") && typeof r == "string" && !Hi(r), Ui = (e, r) => {
  if (r == null)
    return r;
  const t = (d) => {
    var u, f;
    return (f = (u = e.__cssMap) == null ? void 0 : u[d]) == null ? void 0 : f.varRef;
  }, n = (d) => t(d) ?? d, [o, c] = Gi(r);
  return r = t(o) ?? n(c) ?? n(r), r;
};
function Yi(e) {
  const { configs: r = {}, pseudos: t = {}, theme: n } = e, o = (c, d = !1) => {
    var u;
    const f = ue(c, n), g = Di(f)(n);
    let p = {};
    for (let m in g) {
      const $ = g[m];
      let S = ue($, n);
      m in t && (m = t[m]), Vi(m, S) && (S = Ui(n, S));
      let y = r[m];
      if (y === !0 && (y = { property: m }), fe(S)) {
        p[m] = p[m] ?? {}, p[m] = ie({}, p[m], o(S, !0));
        continue;
      }
      let b = ((u = y == null ? void 0 : y.transform) == null ? void 0 : u.call(y, S, n, f)) ?? S;
      b = y != null && y.processResult ? o(b, !0) : b;
      const v = ue(y == null ? void 0 : y.property, n);
      if (!d && (y != null && y.static)) {
        const k = ue(y.static, n);
        p = ie({}, p, k);
      }
      if (v && Array.isArray(v)) {
        for (const k of v)
          p[k] = b;
        continue;
      }
      if (v) {
        v === "&" && fe(b) ? p = ie({}, p, b) : p[v] = b;
        continue;
      }
      if (fe(b)) {
        p = ie({}, p, b);
        continue;
      }
      p[m] = b;
    }
    return p;
  };
  return o;
}
var Xi = (e) => (r) => Yi({
  theme: r,
  pseudos: rt,
  configs: tt
})(e);
function qi(e, r) {
  if (Array.isArray(e))
    return e;
  if (fe(e))
    return r(e);
  if (e != null)
    return [e];
}
function Ki(e, r) {
  for (let t = r + 1; t < e.length; t++)
    if (e[t] != null)
      return t;
  return -1;
}
function Zi(e) {
  const r = e.__breakpoints;
  return function(n, o, c, d) {
    var u, f;
    if (!r)
      return;
    const g = {}, p = qi(c, r.toArrayValue);
    if (!p)
      return g;
    const m = p.length, $ = m === 1, S = !!n.parts;
    for (let y = 0; y < m; y++) {
      const b = r.details[y], v = r.details[Ki(p, y)], k = zi(b.minW, v == null ? void 0 : v._minW), R = ue((u = n[o]) == null ? void 0 : u[p[y]], d);
      if (R) {
        if (S) {
          (f = n.parts) == null || f.forEach((M) => {
            ie(g, {
              [M]: $ ? R[M] : { [k]: R[M] }
            });
          });
          continue;
        }
        if (!S) {
          $ ? ie(g, R) : g[k] = R;
          continue;
        }
        g[k] = R;
      }
    }
    return g;
  };
}
function Ji(e) {
  return (r) => {
    const { variant: t, size: n, theme: o } = r, c = Zi(o);
    return ie({}, ue(e.baseStyle ?? {}, r), c(e, "sizes", n, r), c(e, "variants", t, r));
  };
}
function Sn(e) {
  return Ni(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function Qi() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Jr(r);
}
var es = function() {
  var r = Qi.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function rs(e) {
  return typeof e == "function";
}
function ts(e, r) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    r.includes(n) || (t[n] = e[n]);
  }), t;
}
function ns(e, r, t, n) {
  const o = typeof r == "string" ? r.split(".") : [r];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? t : e;
}
var as = (e) => {
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
}, os = as(ns);
function kn(e, r) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    r(o, n, e) && (t[n] = o);
  }), t;
}
var _n = (e) => kn(e, (r) => r != null);
function is(e, ...r) {
  return rs(e) ? e(...r) : e;
}
function ss(e = {}) {
  const {
    strict: r = !0,
    errorMessage: t = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = React.createContext(void 0);
  o.displayName = n;
  function c() {
    var d;
    const u = React.useContext(o);
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
var cs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ls = /* @__PURE__ */ Zt(
  function(e) {
    return cs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ds = ls, us = function(r) {
  return r !== "theme";
}, jt = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? ds : us;
}, Dt = function(r, t, n) {
  var o;
  if (t) {
    var c = t.shouldForwardProp;
    o = r.__emotion_forwardProp && c ? function(d) {
      return r.__emotion_forwardProp(d) && c(d);
    } : c;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, fs = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Zr(t, n, o), sn(function() {
    return nn(t, n, o);
  }), null;
}, ps = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, c, d;
  t !== void 0 && (c = t.label, d = t.target);
  var u = Dt(r, t, n), f = u || jt(o), g = !f("as");
  return function() {
    var p = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (c !== void 0 && m.push("label:" + c + ";"), p[0] == null || p[0].raw === void 0)
      m.push.apply(m, p);
    else {
      m.push(p[0][0]);
      for (var $ = p.length, S = 1; S < $; S++)
        m.push(p[S], p[0][S]);
    }
    var y = ln(function(b, v, k) {
      var R = g && b.as || o, M = "", Z = [], W = b;
      if (b.theme == null) {
        W = {};
        for (var j in b)
          W[j] = b[j];
        W.theme = React.useContext(et);
      }
      typeof b.className == "string" ? M = tn(v.registered, Z, b.className) : b.className != null && (M = b.className + " ");
      var P = Jr(m.concat(Z), v.registered, W);
      M += v.key + "-" + P.name, d !== void 0 && (M += " " + d);
      var mr = g && u === void 0 ? jt(R) : f, he = {};
      for (var ge in b)
        g && ge === "as" || // $FlowFixMe
        mr(ge) && (he[ge] = b[ge]);
      return he.className = M, he.ref = k, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(fs, {
        cache: v,
        serialized: P,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ React.createElement(R, he));
    });
    return y.displayName = c !== void 0 ? c : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = r.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = m, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + d;
      }
    }), y.withComponent = function(b, v) {
      return e(b, Ar({}, t, v, {
        shouldForwardProp: Dt(y, v, !0)
      })).apply(void 0, m);
    }, y;
  };
}, hs = [
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
], Dr = ps.bind();
hs.forEach(function(e) {
  Dr[e] = Dr(e);
});
var gs = typeof Element < "u", ms = typeof Map == "function", bs = typeof Set == "function", ys = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function qe(e, r) {
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
        if (!qe(e[n], r[n]))
          return !1;
      return !0;
    }
    var c;
    if (ms && e instanceof Map && r instanceof Map) {
      if (e.size !== r.size)
        return !1;
      for (c = e.entries(); !(n = c.next()).done; )
        if (!r.has(n.value[0]))
          return !1;
      for (c = e.entries(); !(n = c.next()).done; )
        if (!qe(n.value[1], r.get(n.value[0])))
          return !1;
      return !0;
    }
    if (bs && e instanceof Set && r instanceof Set) {
      if (e.size !== r.size)
        return !1;
      for (c = e.entries(); !(n = c.next()).done; )
        if (!r.has(n.value[0]))
          return !1;
      return !0;
    }
    if (ys && ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
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
    if (gs && e instanceof Element)
      return !1;
    for (n = t; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !qe(e[o[n]], r[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var vs = function(r, t) {
  try {
    return qe(r, t);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
function Ss() {
  const e = React.useContext(et);
  if (!e)
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  return e;
}
function ks() {
  const e = fn(), r = Ss();
  return { ...e, theme: r };
}
ss({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
var _s = /* @__PURE__ */ new Set([
  ...Fi,
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
]), xs = /* @__PURE__ */ new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
function ws(e) {
  return xs.has(e) || !_s.has(e);
}
var Rs = ({ baseStyle: e }) => (r) => {
  const { theme: t, css: n, __css: o, sx: c, ...d } = r, u = kn(d, (m, $) => ji($)), f = is(e, r), g = Object.assign({}, o, f, _n(u), c), p = Xi(g)(r.theme);
  return n ? [p, n] : p;
};
function Pr(e, r) {
  const { baseStyle: t, ...n } = r ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = ws);
  const o = Rs({ baseStyle: t }), c = Dr(e, n)(o);
  return React.forwardRef(function(f, g) {
    const { colorMode: p, forced: m } = fn();
    return React.createElement(c, {
      ref: g,
      "data-theme": m ? p : void 0,
      ...f
    });
  });
}
function hr(e) {
  return React.forwardRef(e);
}
function Ts(e, r = {}) {
  const { styleConfig: t, ...n } = r, { theme: o, colorMode: c } = ks(), d = e ? os(o, `components.${e}`) : void 0, u = t || d, f = ie({ theme: o, colorMode: c }, (u == null ? void 0 : u.defaultProps) ?? {}, _n(ts(n, ["children"]))), g = React.useRef({});
  if (u) {
    const m = Ji(u)(f);
    vs(g.current, m) || (g.current = m);
  }
  return g.current;
}
function xn(e, r = {}) {
  return Ts(e, r);
}
function Cs() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Pr, {
    apply(r, t, n) {
      return Pr(...n);
    },
    get(r, t) {
      return e.has(t) || e.set(t, Pr(t)), e.get(t);
    }
  });
}
var pe = Cs();
function Es(e, r) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`;
}
function $s(e = {}) {
  const {
    name: r,
    strict: t = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: c
  } = e, d = React.createContext(void 0);
  d.displayName = r;
  function u() {
    var f;
    const g = React.useContext(d);
    if (!g && t) {
      const p = new Error(c ?? Es(n, o));
      throw p.name = "ContextError", (f = Error.captureStackTrace) == null || f.call(Error, p, u), p;
    }
    return g;
  }
  return [d.Provider, u, d];
}
function Is(e, r) {
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
function Ps(...e) {
  return (r) => {
    e.forEach((t) => {
      Is(t, r);
    });
  };
}
function Bs(...e) {
  return React.useMemo(() => Ps(...e), e);
}
var Os = (...e) => e.filter(Boolean).join(" "), As = es({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), wn = hr((e, r) => {
  const t = xn("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: c = "0.45s",
    emptyColor: d = "transparent",
    className: u,
    ...f
  } = Sn(e), g = Os("chakra-spinner", u), p = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: d,
    borderLeftColor: d,
    animation: `${As} ${c} linear infinite`,
    ...t
  };
  return /* @__PURE__ */ React.createElement(pe.div, {
    ref: r,
    __css: p,
    className: g,
    ...f
  }, n && /* @__PURE__ */ React.createElement(pe.span, {
    srOnly: !0
  }, n));
});
wn.displayName = "Spinner";
var gr = (...e) => e.filter(Boolean).join(" "), Gt = (e) => e ? "" : void 0, [Ms, zs] = $s({
  strict: !1,
  name: "ButtonGroupContext"
});
function Gr(e) {
  const { children: r, className: t, ...n } = e, o = React.isValidElement(r) ? React.cloneElement(r, {
    "aria-hidden": !0,
    focusable: !1
  }) : r, c = gr("chakra-button__icon", t);
  return /* @__PURE__ */ React.createElement(pe.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...n,
    className: c
  }, o);
}
Gr.displayName = "ButtonIcon";
function Hr(e) {
  const {
    label: r,
    placement: t,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ React.createElement(wn, {
      color: "currentColor",
      width: "1em",
      height: "1em"
    }),
    className: c,
    __css: d,
    ...u
  } = e, f = gr("chakra-button__spinner", c), g = t === "start" ? "marginEnd" : "marginStart", p = React.useMemo(() => ({
    display: "flex",
    alignItems: "center",
    position: r ? "relative" : "absolute",
    [g]: r ? n : 0,
    fontSize: "1em",
    lineHeight: "normal",
    ...d
  }), [d, r, g, n]);
  return /* @__PURE__ */ React.createElement(pe.div, {
    className: f,
    ...u,
    __css: p
  }, o);
}
Hr.displayName = "ButtonSpinner";
function Ls(e) {
  const [r, t] = React.useState(!e);
  return { ref: React.useCallback((c) => {
    c && t(c.tagName === "BUTTON");
  }, []), type: r ? "button" : void 0 };
}
var nt = hr((e, r) => {
  const t = zs(), n = xn("Button", { ...t, ...e }), {
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
  } = Sn(e), R = React.useMemo(() => {
    const j = { ...n == null ? void 0 : n._focus, zIndex: 1 };
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
      ...!!t && { _focus: j }
    };
  }, [n, t]), { ref: M, type: Z } = Ls(v), W = { rightIcon: g, leftIcon: f, iconSpacing: m, children: u };
  return /* @__PURE__ */ React.createElement(pe.button, {
    disabled: o || c,
    ref: Bs(r, M),
    as: v,
    type: $ ?? Z,
    "data-active": Gt(d),
    "data-loading": Gt(c),
    __css: R,
    className: gr("chakra-button", b),
    ...k
  }, c && y === "start" && /* @__PURE__ */ React.createElement(Hr, {
    className: "chakra-button__spinner--start",
    label: p,
    placement: "start",
    spacing: m
  }, S), c ? p || /* @__PURE__ */ React.createElement(pe.span, {
    opacity: 0
  }, /* @__PURE__ */ React.createElement(Ht, {
    ...W
  })) : /* @__PURE__ */ React.createElement(Ht, {
    ...W
  }), c && y === "end" && /* @__PURE__ */ React.createElement(Hr, {
    className: "chakra-button__spinner--end",
    label: p,
    placement: "end",
    spacing: m
  }, S));
});
nt.displayName = "Button";
function Ht(e) {
  const { leftIcon: r, rightIcon: t, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, r && /* @__PURE__ */ React.createElement(Gr, {
    marginEnd: o
  }, r), n, t && /* @__PURE__ */ React.createElement(Gr, {
    marginStart: o
  }, t));
}
var Ns = hr(function(r, t) {
  const {
    size: n,
    colorScheme: o,
    variant: c,
    className: d,
    spacing: u = "0.5rem",
    isAttached: f,
    isDisabled: g,
    ...p
  } = r, m = gr("chakra-button__group", d), $ = React.useMemo(() => ({ size: n, colorScheme: o, variant: c, isDisabled: g }), [n, o, c, g]);
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
  }, /* @__PURE__ */ React.createElement(Ms, {
    value: $
  }, /* @__PURE__ */ React.createElement(pe.div, {
    ref: t,
    role: "group",
    __css: S,
    className: m,
    "data-attached": f ? "" : void 0,
    ...p
  }));
});
Ns.displayName = "ButtonGroup";
var Fs = hr((e, r) => {
  const { icon: t, children: n, isRound: o, "aria-label": c, ...d } = e, u = t || n, f = React.isValidElement(u) ? React.cloneElement(u, {
    "aria-hidden": !0,
    focusable: !1
  }) : null;
  return /* @__PURE__ */ React.createElement(nt, {
    padding: "0",
    borderRadius: o ? "full" : void 0,
    ref: r,
    "aria-label": c,
    ...d
  }, f);
});
Fs.displayName = "IconButton";
function Ws({ label: e }) {
  return /* @__PURE__ */ Nr(nt, { children: /* @__PURE__ */ Nr(Jo, { text: e }) });
}
export {
  Ws as Button,
  Jo as Label
};
