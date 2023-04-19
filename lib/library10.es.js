import * as ce from "https://esm.sh/react@18.2.0";
import C, { useLayoutEffect as sa, useEffect as ve, createContext as Ve, useState as et, useMemo as fe, useCallback as Nt, useContext as Z, createElement as Er, forwardRef as la, useRef as xe, Fragment as fh, useInsertionEffect as Tc, useId as ca, cloneElement as ua, Children as hh, isValidElement as da, startTransition as ph, memo as mh, useSyncExternalStore as gh } from "https://esm.sh/react@18.2.0";
import { createPortal as Pc } from "https://esm.sh/react-dom@18.2.0";
var Gn = globalThis != null && globalThis.document ? sa : ve, fa = Ve({});
fa.displayName = "ColorModeContext";
function ha() {
  const e = Z(fa);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var kn = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function bh(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? kn.dark : kn.light), document.body.classList.remove(n ? kn.light : kn.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(n) {
      return r.query().matches ?? n === "dark" ? "dark" : "light";
    },
    addListener(n) {
      const o = r.query(), i = (a) => {
        n(a.matches ? "dark" : "light");
      };
      return typeof o.addListener == "function" ? o.addListener(i) : o.addEventListener("change", i), () => {
        typeof o.removeListener == "function" ? o.removeListener(i) : o.removeEventListener("change", i);
      };
    },
    preventTransition() {
      const n = document.createElement("style");
      return n.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(n), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(n);
          });
        });
      };
    }
  };
  return r;
}
var yh = "chakra-ui-color-mode";
function vh(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {
      }
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var Sh = vh(yh), vs = () => {
};
function Ss(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function Ac(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = Sh
  } = e, s = o === "dark" ? "dark" : "light", [l, c] = et(() => Ss(a, s)), [u, d] = et(() => Ss(a)), { getSystemTheme: h, setClassName: p, setDataset: b, addListener: y } = fe(() => bh({ preventTransition: i }), [i]), x = o === "system" && !l ? u : l, k = Nt((T) => {
    const A = T === "system" ? h() : T;
    c(A), p(A === "dark"), b(A), a.set(A);
  }, [a, h, p, b]);
  Gn(() => {
    o === "system" && d(h());
  }, []), ve(() => {
    const T = a.get();
    if (T) {
      k(T);
      return;
    }
    if (o === "system") {
      k("system");
      return;
    }
    k(s);
  }, [a, s, o, k]);
  const w = Nt(() => {
    k(x === "dark" ? "light" : "dark");
  }, [x, k]);
  ve(() => {
    if (n)
      return y(k);
  }, [n, y, k]);
  const S = fe(() => ({
    colorMode: t ?? x,
    toggleColorMode: t ? vs : w,
    setColorMode: t ? vs : k,
    forced: t !== void 0
  }), [x, w, k, t]);
  return /* @__PURE__ */ C.createElement(fa.Provider, {
    value: S
  }, r);
}
Ac.displayName = "ColorModeProvider";
var wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qn = {}, xh = {
  get exports() {
    return qn;
  },
  set exports(e) {
    qn = e;
  }
};
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", h = "[object Error]", p = "[object Function]", b = "[object GeneratorFunction]", y = "[object Map]", x = "[object Number]", k = "[object Null]", w = "[object Object]", S = "[object Proxy]", T = "[object RegExp]", A = "[object Set]", B = "[object String]", E = "[object Undefined]", M = "[object WeakMap]", H = "[object ArrayBuffer]", he = "[object DataView]", $e = "[object Float32Array]", je = "[object Float64Array]", ht = "[object Int8Array]", te = "[object Int16Array]", ee = "[object Int32Array]", Ne = "[object Uint8Array]", pt = "[object Uint8ClampedArray]", Oo = "[object Uint16Array]", un = "[object Uint32Array]", dn = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, Gt = /^(?:0|[1-9]\d*)$/, N = {};
  N[$e] = N[je] = N[ht] = N[te] = N[ee] = N[Ne] = N[pt] = N[Oo] = N[un] = !0, N[s] = N[l] = N[H] = N[u] = N[he] = N[d] = N[h] = N[p] = N[y] = N[x] = N[w] = N[T] = N[A] = N[B] = N[M] = !1;
  var pr = typeof wn == "object" && wn && wn.Object === Object && wn, fn = typeof self == "object" && self && self.Object === Object && self, Fe = pr || fn || Function("return this")(), mr = t && !t.nodeType && t, At = mr && !0 && e && !e.nodeType && e, qt = At && At.exports === mr, mt = qt && pr.process, We = function() {
    try {
      var f = At && At.require && At.require("util").types;
      return f || mt && mt.binding && mt.binding("util");
    } catch {
    }
  }(), gr = We && We.isTypedArray;
  function hn(f, m, v) {
    switch (v.length) {
      case 0:
        return f.call(m);
      case 1:
        return f.call(m, v[0]);
      case 2:
        return f.call(m, v[0], v[1]);
      case 3:
        return f.call(m, v[0], v[1], v[2]);
    }
    return f.apply(m, v);
  }
  function Jd(f, m) {
    for (var v = -1, P = Array(f); ++v < f; )
      P[v] = m(v);
    return P;
  }
  function ef(f) {
    return function(m) {
      return f(m);
    };
  }
  function tf(f, m) {
    return f == null ? void 0 : f[m];
  }
  function rf(f, m) {
    return function(v) {
      return f(m(v));
    };
  }
  var nf = Array.prototype, of = Function.prototype, pn = Object.prototype, jo = Fe["__core-js_shared__"], mn = of.toString, tt = pn.hasOwnProperty, es = function() {
    var f = /[^.]+$/.exec(jo && jo.keys && jo.keys.IE_PROTO || "");
    return f ? "Symbol(src)_1." + f : "";
  }(), ts = pn.toString, af = mn.call(Object), sf = RegExp(
    "^" + mn.call(tt).replace(dn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), gn = qt ? Fe.Buffer : void 0, rs = Fe.Symbol, ns = Fe.Uint8Array, os = gn ? gn.allocUnsafe : void 0, is = rf(Object.getPrototypeOf, Object), as = Object.create, lf = pn.propertyIsEnumerable, cf = nf.splice, Et = rs ? rs.toStringTag : void 0, bn = function() {
    try {
      var f = Ho(Object, "defineProperty");
      return f({}, "", {}), f;
    } catch {
    }
  }(), uf = gn ? gn.isBuffer : void 0, ss = Math.max, df = Date.now, ls = Ho(Fe, "Map"), br = Ho(Object, "create"), ff = function() {
    function f() {
    }
    return function(m) {
      if (!Rt(m))
        return {};
      if (as)
        return as(m);
      f.prototype = m;
      var v = new f();
      return f.prototype = void 0, v;
    };
  }();
  function _t(f) {
    var m = -1, v = f == null ? 0 : f.length;
    for (this.clear(); ++m < v; ) {
      var P = f[m];
      this.set(P[0], P[1]);
    }
  }
  function hf() {
    this.__data__ = br ? br(null) : {}, this.size = 0;
  }
  function pf(f) {
    var m = this.has(f) && delete this.__data__[f];
    return this.size -= m ? 1 : 0, m;
  }
  function mf(f) {
    var m = this.__data__;
    if (br) {
      var v = m[f];
      return v === n ? void 0 : v;
    }
    return tt.call(m, f) ? m[f] : void 0;
  }
  function gf(f) {
    var m = this.__data__;
    return br ? m[f] !== void 0 : tt.call(m, f);
  }
  function bf(f, m) {
    var v = this.__data__;
    return this.size += this.has(f) ? 0 : 1, v[f] = br && m === void 0 ? n : m, this;
  }
  _t.prototype.clear = hf, _t.prototype.delete = pf, _t.prototype.get = mf, _t.prototype.has = gf, _t.prototype.set = bf;
  function rt(f) {
    var m = -1, v = f == null ? 0 : f.length;
    for (this.clear(); ++m < v; ) {
      var P = f[m];
      this.set(P[0], P[1]);
    }
  }
  function yf() {
    this.__data__ = [], this.size = 0;
  }
  function vf(f) {
    var m = this.__data__, v = yn(m, f);
    if (v < 0)
      return !1;
    var P = m.length - 1;
    return v == P ? m.pop() : cf.call(m, v, 1), --this.size, !0;
  }
  function Sf(f) {
    var m = this.__data__, v = yn(m, f);
    return v < 0 ? void 0 : m[v][1];
  }
  function xf(f) {
    return yn(this.__data__, f) > -1;
  }
  function kf(f, m) {
    var v = this.__data__, P = yn(v, f);
    return P < 0 ? (++this.size, v.push([f, m])) : v[P][1] = m, this;
  }
  rt.prototype.clear = yf, rt.prototype.delete = vf, rt.prototype.get = Sf, rt.prototype.has = xf, rt.prototype.set = kf;
  function Kt(f) {
    var m = -1, v = f == null ? 0 : f.length;
    for (this.clear(); ++m < v; ) {
      var P = f[m];
      this.set(P[0], P[1]);
    }
  }
  function wf() {
    this.size = 0, this.__data__ = {
      hash: new _t(),
      map: new (ls || rt)(),
      string: new _t()
    };
  }
  function Cf(f) {
    var m = Sn(this, f).delete(f);
    return this.size -= m ? 1 : 0, m;
  }
  function Tf(f) {
    return Sn(this, f).get(f);
  }
  function Pf(f) {
    return Sn(this, f).has(f);
  }
  function Af(f, m) {
    var v = Sn(this, f), P = v.size;
    return v.set(f, m), this.size += v.size == P ? 0 : 1, this;
  }
  Kt.prototype.clear = wf, Kt.prototype.delete = Cf, Kt.prototype.get = Tf, Kt.prototype.has = Pf, Kt.prototype.set = Af;
  function Xt(f) {
    var m = this.__data__ = new rt(f);
    this.size = m.size;
  }
  function Ef() {
    this.__data__ = new rt(), this.size = 0;
  }
  function _f(f) {
    var m = this.__data__, v = m.delete(f);
    return this.size = m.size, v;
  }
  function Rf(f) {
    return this.__data__.get(f);
  }
  function Mf(f) {
    return this.__data__.has(f);
  }
  function Bf(f, m) {
    var v = this.__data__;
    if (v instanceof rt) {
      var P = v.__data__;
      if (!ls || P.length < r - 1)
        return P.push([f, m]), this.size = ++v.size, this;
      v = this.__data__ = new Kt(P);
    }
    return v.set(f, m), this.size = v.size, this;
  }
  Xt.prototype.clear = Ef, Xt.prototype.delete = _f, Xt.prototype.get = Rf, Xt.prototype.has = Mf, Xt.prototype.set = Bf;
  function Vf(f, m) {
    var v = qo(f), P = !v && Go(f), $ = !v && !P && hs(f), U = !v && !P && !$ && ms(f), X = v || P || $ || U, V = X ? Jd(f.length, String) : [], Y = V.length;
    for (var Re in f)
      (m || tt.call(f, Re)) && !(X && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Re == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      $ && (Re == "offset" || Re == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      U && (Re == "buffer" || Re == "byteLength" || Re == "byteOffset") || // Skip index properties.
      ds(Re, Y))) && V.push(Re);
    return V;
  }
  function No(f, m, v) {
    (v !== void 0 && !xn(f[m], v) || v === void 0 && !(m in f)) && Wo(f, m, v);
  }
  function $f(f, m, v) {
    var P = f[m];
    (!(tt.call(f, m) && xn(P, v)) || v === void 0 && !(m in f)) && Wo(f, m, v);
  }
  function yn(f, m) {
    for (var v = f.length; v--; )
      if (xn(f[v][0], m))
        return v;
    return -1;
  }
  function Wo(f, m, v) {
    m == "__proto__" && bn ? bn(f, m, {
      configurable: !0,
      enumerable: !0,
      value: v,
      writable: !0
    }) : f[m] = v;
  }
  var Ff = Kf();
  function vn(f) {
    return f == null ? f === void 0 ? E : k : Et && Et in Object(f) ? Xf(f) : th(f);
  }
  function cs(f) {
    return yr(f) && vn(f) == s;
  }
  function Df(f) {
    if (!Rt(f) || Jf(f))
      return !1;
    var m = Xo(f) ? sf : K;
    return m.test(ih(f));
  }
  function If(f) {
    return yr(f) && ps(f.length) && !!N[vn(f)];
  }
  function zf(f) {
    if (!Rt(f))
      return eh(f);
    var m = fs(f), v = [];
    for (var P in f)
      P == "constructor" && (m || !tt.call(f, P)) || v.push(P);
    return v;
  }
  function us(f, m, v, P, $) {
    f !== m && Ff(m, function(U, X) {
      if ($ || ($ = new Xt()), Rt(U))
        Lf(f, m, X, v, us, P, $);
      else {
        var V = P ? P(Uo(f, X), U, X + "", f, m, $) : void 0;
        V === void 0 && (V = U), No(f, X, V);
      }
    }, gs);
  }
  function Lf(f, m, v, P, $, U, X) {
    var V = Uo(f, v), Y = Uo(m, v), Re = X.get(Y);
    if (Re) {
      No(f, v, Re);
      return;
    }
    var Ce = U ? U(V, Y, v + "", f, m, X) : void 0, vr = Ce === void 0;
    if (vr) {
      var Yo = qo(Y), Zo = !Yo && hs(Y), ys = !Yo && !Zo && ms(Y);
      Ce = Y, Yo || Zo || ys ? qo(V) ? Ce = V : ah(V) ? Ce = Uf(V) : Zo ? (vr = !1, Ce = Nf(Y, !0)) : ys ? (vr = !1, Ce = Hf(Y, !0)) : Ce = [] : sh(Y) || Go(Y) ? (Ce = V, Go(V) ? Ce = lh(V) : (!Rt(V) || Xo(V)) && (Ce = Yf(Y))) : vr = !1;
    }
    vr && (X.set(Y, Ce), $(Ce, Y, P, U, X), X.delete(Y)), No(f, v, Ce);
  }
  function Of(f, m) {
    return nh(rh(f, m, bs), f + "");
  }
  var jf = bn ? function(f, m) {
    return bn(f, "toString", {
      configurable: !0,
      enumerable: !1,
      value: uh(m),
      writable: !0
    });
  } : bs;
  function Nf(f, m) {
    if (m)
      return f.slice();
    var v = f.length, P = os ? os(v) : new f.constructor(v);
    return f.copy(P), P;
  }
  function Wf(f) {
    var m = new f.constructor(f.byteLength);
    return new ns(m).set(new ns(f)), m;
  }
  function Hf(f, m) {
    var v = m ? Wf(f.buffer) : f.buffer;
    return new f.constructor(v, f.byteOffset, f.length);
  }
  function Uf(f, m) {
    var v = -1, P = f.length;
    for (m || (m = Array(P)); ++v < P; )
      m[v] = f[v];
    return m;
  }
  function Gf(f, m, v, P) {
    var $ = !v;
    v || (v = {});
    for (var U = -1, X = m.length; ++U < X; ) {
      var V = m[U], Y = P ? P(v[V], f[V], V, v, f) : void 0;
      Y === void 0 && (Y = f[V]), $ ? Wo(v, V, Y) : $f(v, V, Y);
    }
    return v;
  }
  function qf(f) {
    return Of(function(m, v) {
      var P = -1, $ = v.length, U = $ > 1 ? v[$ - 1] : void 0, X = $ > 2 ? v[2] : void 0;
      for (U = f.length > 3 && typeof U == "function" ? ($--, U) : void 0, X && Zf(v[0], v[1], X) && (U = $ < 3 ? void 0 : U, $ = 1), m = Object(m); ++P < $; ) {
        var V = v[P];
        V && f(m, V, P, U);
      }
      return m;
    });
  }
  function Kf(f) {
    return function(m, v, P) {
      for (var $ = -1, U = Object(m), X = P(m), V = X.length; V--; ) {
        var Y = X[f ? V : ++$];
        if (v(U[Y], Y, U) === !1)
          break;
      }
      return m;
    };
  }
  function Sn(f, m) {
    var v = f.__data__;
    return Qf(m) ? v[typeof m == "string" ? "string" : "hash"] : v.map;
  }
  function Ho(f, m) {
    var v = tf(f, m);
    return Df(v) ? v : void 0;
  }
  function Xf(f) {
    var m = tt.call(f, Et), v = f[Et];
    try {
      f[Et] = void 0;
      var P = !0;
    } catch {
    }
    var $ = ts.call(f);
    return P && (m ? f[Et] = v : delete f[Et]), $;
  }
  function Yf(f) {
    return typeof f.constructor == "function" && !fs(f) ? ff(is(f)) : {};
  }
  function ds(f, m) {
    var v = typeof f;
    return m = m ?? a, !!m && (v == "number" || v != "symbol" && Gt.test(f)) && f > -1 && f % 1 == 0 && f < m;
  }
  function Zf(f, m, v) {
    if (!Rt(v))
      return !1;
    var P = typeof m;
    return (P == "number" ? Ko(v) && ds(m, v.length) : P == "string" && m in v) ? xn(v[m], f) : !1;
  }
  function Qf(f) {
    var m = typeof f;
    return m == "string" || m == "number" || m == "symbol" || m == "boolean" ? f !== "__proto__" : f === null;
  }
  function Jf(f) {
    return !!es && es in f;
  }
  function fs(f) {
    var m = f && f.constructor, v = typeof m == "function" && m.prototype || pn;
    return f === v;
  }
  function eh(f) {
    var m = [];
    if (f != null)
      for (var v in Object(f))
        m.push(v);
    return m;
  }
  function th(f) {
    return ts.call(f);
  }
  function rh(f, m, v) {
    return m = ss(m === void 0 ? f.length - 1 : m, 0), function() {
      for (var P = arguments, $ = -1, U = ss(P.length - m, 0), X = Array(U); ++$ < U; )
        X[$] = P[m + $];
      $ = -1;
      for (var V = Array(m + 1); ++$ < m; )
        V[$] = P[$];
      return V[m] = v(X), hn(f, this, V);
    };
  }
  function Uo(f, m) {
    if (!(m === "constructor" && typeof f[m] == "function") && m != "__proto__")
      return f[m];
  }
  var nh = oh(jf);
  function oh(f) {
    var m = 0, v = 0;
    return function() {
      var P = df(), $ = i - (P - v);
      if (v = P, $ > 0) {
        if (++m >= o)
          return arguments[0];
      } else
        m = 0;
      return f.apply(void 0, arguments);
    };
  }
  function ih(f) {
    if (f != null) {
      try {
        return mn.call(f);
      } catch {
      }
      try {
        return f + "";
      } catch {
      }
    }
    return "";
  }
  function xn(f, m) {
    return f === m || f !== f && m !== m;
  }
  var Go = cs(function() {
    return arguments;
  }()) ? cs : function(f) {
    return yr(f) && tt.call(f, "callee") && !lf.call(f, "callee");
  }, qo = Array.isArray;
  function Ko(f) {
    return f != null && ps(f.length) && !Xo(f);
  }
  function ah(f) {
    return yr(f) && Ko(f);
  }
  var hs = uf || dh;
  function Xo(f) {
    if (!Rt(f))
      return !1;
    var m = vn(f);
    return m == p || m == b || m == c || m == S;
  }
  function ps(f) {
    return typeof f == "number" && f > -1 && f % 1 == 0 && f <= a;
  }
  function Rt(f) {
    var m = typeof f;
    return f != null && (m == "object" || m == "function");
  }
  function yr(f) {
    return f != null && typeof f == "object";
  }
  function sh(f) {
    if (!yr(f) || vn(f) != w)
      return !1;
    var m = is(f);
    if (m === null)
      return !0;
    var v = tt.call(m, "constructor") && m.constructor;
    return typeof v == "function" && v instanceof v && mn.call(v) == af;
  }
  var ms = gr ? ef(gr) : If;
  function lh(f) {
    return Gf(f, gs(f));
  }
  function gs(f) {
    return Ko(f) ? Vf(f, !0) : zf(f);
  }
  var ch = qf(function(f, m, v, P) {
    us(f, m, v, P);
  });
  function uh(f) {
    return function() {
      return f;
    };
  }
  function bs(f) {
    return f;
  }
  function dh() {
    return !1;
  }
  e.exports = ch;
})(xh, qn);
const Xe = qn;
function Oe(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Dt(e, ...t) {
  return kh(e) ? e(...t) : e;
}
var kh = (e) => typeof e == "function", wh = (e) => /!(important)?$/.test(e), xs = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, Ch = (e, t) => (r) => {
  const n = String(t), o = wh(n), i = xs(n), a = e ? `${e}.${i}` : i;
  let s = Oe(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = xs(s), o ? `${s} !important` : s;
};
function jr(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    const s = Ch(t, i)(a);
    let l = (r == null ? void 0 : r(s, a)) ?? s;
    return n && (l = n(l, a)), l;
  };
}
var Cn = (...e) => (t) => e.reduce((r, n) => n(r), t);
function De(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = jr({
      scale: e,
      transform: t
    }), n;
  };
}
var Th = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function Ph(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: Th(t),
    transform: r ? jr({
      scale: r,
      compose: n
    }) : n
  };
}
var Ec = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function Ah() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Ec
  ].join(" ");
}
function Eh() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Ec
  ].join(" ");
}
var _h = {
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
}, Rh = {
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
function Mh(e) {
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
var Bh = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, _c = "& > :not(style) ~ :not(style)", Vh = {
  [_c]: {
    marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
    marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
  }
}, $h = {
  [_c]: {
    marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
    marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
  }
}, Ri = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, Fh = new Set(Object.values(Ri)), Rc = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), Dh = (e) => e.trim();
function Ih(e, t) {
  var r;
  if (e == null || Rc.has(e))
    return e;
  const n = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g, { type: o, values: i } = ((r = n.exec(e)) == null ? void 0 : r.groups) ?? {};
  if (!o || !i)
    return e;
  const a = o.includes("-gradient") ? o : `${o}-gradient`, [s, ...l] = i.split(",").map(Dh).filter(Boolean);
  if ((l == null ? void 0 : l.length) === 0)
    return e;
  const c = s in Ri ? Ri[s] : s;
  l.unshift(c);
  const u = l.map((d) => {
    if (Fh.has(d))
      return d;
    const h = d.indexOf(" "), [p, b] = h !== -1 ? [d.substr(0, h), d.substr(h + 1)] : [d], y = Mc(b) ? b : b && b.split(" "), x = `colors.${p}`, k = x in t.__cssMap ? t.__cssMap[x].varRef : p;
    return y ? [
      k,
      ...Array.isArray(y) ? y : [y]
    ].join(" ") : k;
  });
  return `${a}(${u.join(", ")})`;
}
var Mc = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), zh = (e, t) => Ih(e, t ?? {});
function Lh(e) {
  return /^var\(--.+\)$/.test(e);
}
var Oh = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, He = (e) => (t) => `${e}(${t})`, F = {
  filter(e) {
    return e !== "auto" ? e : _h;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : Rh;
  },
  ring(e) {
    return Mh(F.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? Ah() : e === "auto-gpu" ? Eh() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = Oh(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const r = { left: "right", right: "left" };
    return t.direction === "rtl" ? r[e] : e;
  },
  degree(e) {
    if (Lh(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: zh,
  blur: He("blur"),
  opacity: He("opacity"),
  brightness: He("brightness"),
  contrast: He("contrast"),
  dropShadow: He("drop-shadow"),
  grayscale: He("grayscale"),
  hueRotate: He("hue-rotate"),
  invert: He("invert"),
  saturate: He("saturate"),
  sepia: He("sepia"),
  bgImage(e) {
    return e == null || Mc(e) || Rc.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    const { space: t, divide: r } = Bh[e] ?? {}, n = { flexDirection: e };
    return t && (n[t] = 1), r && (n[r] = 1), n;
  }
}, g = {
  borderWidths: De("borderWidths"),
  borderStyles: De("borderStyles"),
  colors: De("colors"),
  borders: De("borders"),
  radii: De("radii", F.px),
  space: De("space", Cn(F.vh, F.px)),
  spaceT: De("space", Cn(F.vh, F.px)),
  degreeT(e) {
    return { property: e, transform: F.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: jr({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: De("sizes", Cn(F.vh, F.px)),
  sizesT: De("sizes", Cn(F.vh, F.fraction)),
  shadows: De("shadows"),
  logical: Ph,
  blur: De("blur", F.blur)
}, In = {
  background: g.colors("background"),
  backgroundColor: g.colors("backgroundColor"),
  backgroundImage: g.propT("backgroundImage", F.bgImage),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: F.bgClip },
  bgSize: g.prop("backgroundSize"),
  bgPosition: g.prop("backgroundPosition"),
  bg: g.colors("background"),
  bgColor: g.colors("backgroundColor"),
  bgPos: g.prop("backgroundPosition"),
  bgRepeat: g.prop("backgroundRepeat"),
  bgAttachment: g.prop("backgroundAttachment"),
  bgGradient: g.propT("backgroundImage", F.gradient),
  bgClip: { transform: F.bgClip }
};
Object.assign(In, {
  bgImage: In.backgroundImage,
  bgImg: In.backgroundImage
});
var D = {
  border: g.borders("border"),
  borderWidth: g.borderWidths("borderWidth"),
  borderStyle: g.borderStyles("borderStyle"),
  borderColor: g.colors("borderColor"),
  borderRadius: g.radii("borderRadius"),
  borderTop: g.borders("borderTop"),
  borderBlockStart: g.borders("borderBlockStart"),
  borderTopLeftRadius: g.radii("borderTopLeftRadius"),
  borderStartStartRadius: g.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: g.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: g.radii("borderTopRightRadius"),
  borderStartEndRadius: g.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: g.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: g.borders("borderRight"),
  borderInlineEnd: g.borders("borderInlineEnd"),
  borderBottom: g.borders("borderBottom"),
  borderBlockEnd: g.borders("borderBlockEnd"),
  borderBottomLeftRadius: g.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: g.radii("borderBottomRightRadius"),
  borderLeft: g.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: g.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: g.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: g.borders(["borderLeft", "borderRight"]),
  borderInline: g.borders("borderInline"),
  borderY: g.borders(["borderTop", "borderBottom"]),
  borderBlock: g.borders("borderBlock"),
  borderTopWidth: g.borderWidths("borderTopWidth"),
  borderBlockStartWidth: g.borderWidths("borderBlockStartWidth"),
  borderTopColor: g.colors("borderTopColor"),
  borderBlockStartColor: g.colors("borderBlockStartColor"),
  borderTopStyle: g.borderStyles("borderTopStyle"),
  borderBlockStartStyle: g.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: g.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: g.borderWidths("borderBlockEndWidth"),
  borderBottomColor: g.colors("borderBottomColor"),
  borderBlockEndColor: g.colors("borderBlockEndColor"),
  borderBottomStyle: g.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: g.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: g.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: g.borderWidths("borderInlineStartWidth"),
  borderLeftColor: g.colors("borderLeftColor"),
  borderInlineStartColor: g.colors("borderInlineStartColor"),
  borderLeftStyle: g.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: g.borderStyles("borderInlineStartStyle"),
  borderRightWidth: g.borderWidths("borderRightWidth"),
  borderInlineEndWidth: g.borderWidths("borderInlineEndWidth"),
  borderRightColor: g.colors("borderRightColor"),
  borderInlineEndColor: g.colors("borderInlineEndColor"),
  borderRightStyle: g.borderStyles("borderRightStyle"),
  borderInlineEndStyle: g.borderStyles("borderInlineEndStyle"),
  borderTopRadius: g.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: g.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: g.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: g.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(D, {
  rounded: D.borderRadius,
  roundedTop: D.borderTopRadius,
  roundedTopLeft: D.borderTopLeftRadius,
  roundedTopRight: D.borderTopRightRadius,
  roundedTopStart: D.borderStartStartRadius,
  roundedTopEnd: D.borderStartEndRadius,
  roundedBottom: D.borderBottomRadius,
  roundedBottomLeft: D.borderBottomLeftRadius,
  roundedBottomRight: D.borderBottomRightRadius,
  roundedBottomStart: D.borderEndStartRadius,
  roundedBottomEnd: D.borderEndEndRadius,
  roundedLeft: D.borderLeftRadius,
  roundedRight: D.borderRightRadius,
  roundedStart: D.borderInlineStartRadius,
  roundedEnd: D.borderInlineEndRadius,
  borderStart: D.borderInlineStart,
  borderEnd: D.borderInlineEnd,
  borderTopStartRadius: D.borderStartStartRadius,
  borderTopEndRadius: D.borderStartEndRadius,
  borderBottomStartRadius: D.borderEndStartRadius,
  borderBottomEndRadius: D.borderEndEndRadius,
  borderStartRadius: D.borderInlineStartRadius,
  borderEndRadius: D.borderInlineEndRadius,
  borderStartWidth: D.borderInlineStartWidth,
  borderEndWidth: D.borderInlineEndWidth,
  borderStartColor: D.borderInlineStartColor,
  borderEndColor: D.borderInlineEndColor,
  borderStartStyle: D.borderInlineStartStyle,
  borderEndStyle: D.borderInlineEndStyle
});
var jh = {
  color: g.colors("color"),
  textColor: g.colors("color"),
  fill: g.colors("fill"),
  stroke: g.colors("stroke")
}, Mi = {
  boxShadow: g.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: g.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: g.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Mi, {
  shadow: Mi.boxShadow
});
var Nh = {
  filter: { transform: F.filter },
  blur: g.blur("--chakra-blur"),
  brightness: g.propT("--chakra-brightness", F.brightness),
  contrast: g.propT("--chakra-contrast", F.contrast),
  hueRotate: g.degreeT("--chakra-hue-rotate"),
  invert: g.propT("--chakra-invert", F.invert),
  saturate: g.propT("--chakra-saturate", F.saturate),
  dropShadow: g.propT("--chakra-drop-shadow", F.dropShadow),
  backdropFilter: { transform: F.backdropFilter },
  backdropBlur: g.blur("--chakra-backdrop-blur"),
  backdropBrightness: g.propT("--chakra-backdrop-brightness", F.brightness),
  backdropContrast: g.propT("--chakra-backdrop-contrast", F.contrast),
  backdropHueRotate: g.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: g.propT("--chakra-backdrop-invert", F.invert),
  backdropSaturate: g.propT("--chakra-backdrop-saturate", F.saturate)
}, Kn = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: F.flexDirection },
  experimental_spaceX: {
    static: Vh,
    transform: jr({
      scale: "space",
      transform: (e) => e !== null ? { "--chakra-space-x": e } : null
    })
  },
  experimental_spaceY: {
    static: $h,
    transform: jr({
      scale: "space",
      transform: (e) => e != null ? { "--chakra-space-y": e } : null
    })
  },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: g.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: g.space("gap"),
  rowGap: g.space("rowGap"),
  columnGap: g.space("columnGap")
};
Object.assign(Kn, {
  flexDir: Kn.flexDirection
});
var Bc = {
  gridGap: g.space("gridGap"),
  gridColumnGap: g.space("gridColumnGap"),
  gridRowGap: g.space("gridRowGap"),
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
}, Wh = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: F.outline },
  outlineOffset: !0,
  outlineColor: g.colors("outlineColor")
}, Be = {
  width: g.sizesT("width"),
  inlineSize: g.sizesT("inlineSize"),
  height: g.sizes("height"),
  blockSize: g.sizes("blockSize"),
  boxSize: g.sizes(["width", "height"]),
  minWidth: g.sizes("minWidth"),
  minInlineSize: g.sizes("minInlineSize"),
  minHeight: g.sizes("minHeight"),
  minBlockSize: g.sizes("minBlockSize"),
  maxWidth: g.sizes("maxWidth"),
  maxInlineSize: g.sizes("maxInlineSize"),
  maxHeight: g.sizes("maxHeight"),
  maxBlockSize: g.sizes("maxBlockSize"),
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
  float: g.propT("float", F.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Be, {
  w: Be.width,
  h: Be.height,
  minW: Be.minWidth,
  maxW: Be.maxWidth,
  minH: Be.minHeight,
  maxH: Be.maxHeight,
  overscroll: Be.overscrollBehavior,
  overscrollX: Be.overscrollBehaviorX,
  overscrollY: Be.overscrollBehaviorY
});
var Hh = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: g.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: g.prop("listStyleImage")
};
function Uh(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var Gh = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, a) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, i, a);
    return s.set(o, l), l;
  };
}, qh = Gh(Uh), Kh = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Xh = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Qo = (e, t, r) => {
  const n = {}, o = qh(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, Yh = {
  srOnly: {
    transform(e) {
      return e === !0 ? Kh : e === "focusable" ? Xh : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Qo(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Qo(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Qo(t, e, r)
  }
}, _r = {
  position: !0,
  pos: g.prop("position"),
  zIndex: g.prop("zIndex", "zIndices"),
  inset: g.spaceT("inset"),
  insetX: g.spaceT(["left", "right"]),
  insetInline: g.spaceT("insetInline"),
  insetY: g.spaceT(["top", "bottom"]),
  insetBlock: g.spaceT("insetBlock"),
  top: g.spaceT("top"),
  insetBlockStart: g.spaceT("insetBlockStart"),
  bottom: g.spaceT("bottom"),
  insetBlockEnd: g.spaceT("insetBlockEnd"),
  left: g.spaceT("left"),
  insetInlineStart: g.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: g.spaceT("right"),
  insetInlineEnd: g.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(_r, {
  insetStart: _r.insetInlineStart,
  insetEnd: _r.insetInlineEnd
});
var Zh = {
  ring: { transform: F.ring },
  ringColor: g.colors("--chakra-ring-color"),
  ringOffset: g.prop("--chakra-ring-offset-width"),
  ringOffsetColor: g.colors("--chakra-ring-offset-color"),
  ringInset: g.prop("--chakra-ring-inset")
}, G = {
  margin: g.spaceT("margin"),
  marginTop: g.spaceT("marginTop"),
  marginBlockStart: g.spaceT("marginBlockStart"),
  marginRight: g.spaceT("marginRight"),
  marginInlineEnd: g.spaceT("marginInlineEnd"),
  marginBottom: g.spaceT("marginBottom"),
  marginBlockEnd: g.spaceT("marginBlockEnd"),
  marginLeft: g.spaceT("marginLeft"),
  marginInlineStart: g.spaceT("marginInlineStart"),
  marginX: g.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: g.spaceT("marginInline"),
  marginY: g.spaceT(["marginTop", "marginBottom"]),
  marginBlock: g.spaceT("marginBlock"),
  padding: g.space("padding"),
  paddingTop: g.space("paddingTop"),
  paddingBlockStart: g.space("paddingBlockStart"),
  paddingRight: g.space("paddingRight"),
  paddingBottom: g.space("paddingBottom"),
  paddingBlockEnd: g.space("paddingBlockEnd"),
  paddingLeft: g.space("paddingLeft"),
  paddingInlineStart: g.space("paddingInlineStart"),
  paddingInlineEnd: g.space("paddingInlineEnd"),
  paddingX: g.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: g.space("paddingInline"),
  paddingY: g.space(["paddingTop", "paddingBottom"]),
  paddingBlock: g.space("paddingBlock")
};
Object.assign(G, {
  m: G.margin,
  mt: G.marginTop,
  mr: G.marginRight,
  me: G.marginInlineEnd,
  marginEnd: G.marginInlineEnd,
  mb: G.marginBottom,
  ml: G.marginLeft,
  ms: G.marginInlineStart,
  marginStart: G.marginInlineStart,
  mx: G.marginX,
  my: G.marginY,
  p: G.padding,
  pt: G.paddingTop,
  py: G.paddingY,
  px: G.paddingX,
  pb: G.paddingBottom,
  pl: G.paddingLeft,
  ps: G.paddingInlineStart,
  paddingStart: G.paddingInlineStart,
  pr: G.paddingRight,
  pe: G.paddingInlineEnd,
  paddingEnd: G.paddingInlineEnd
});
var Qh = {
  textDecorationColor: g.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: g.shadows("textShadow")
}, Jh = {
  clipPath: !0,
  transform: g.propT("transform", F.transform),
  transformOrigin: !0,
  translateX: g.spaceT("--chakra-translate-x"),
  translateY: g.spaceT("--chakra-translate-y"),
  skewX: g.degreeT("--chakra-skew-x"),
  skewY: g.degreeT("--chakra-skew-y"),
  scaleX: g.prop("--chakra-scale-x"),
  scaleY: g.prop("--chakra-scale-y"),
  scale: g.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: g.degreeT("--chakra-rotate")
}, ep = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: g.prop("transitionDuration", "transition.duration"),
  transitionProperty: g.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: g.prop("transitionTimingFunction", "transition.easing")
}, tp = {
  fontFamily: g.prop("fontFamily", "fonts"),
  fontSize: g.prop("fontSize", "fontSizes", F.px),
  fontWeight: g.prop("fontWeight", "fontWeights"),
  lineHeight: g.prop("lineHeight", "lineHeights"),
  letterSpacing: g.prop("letterSpacing", "letterSpacings"),
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
}, rp = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  scrollMargin: g.spaceT("scrollMargin"),
  scrollMarginTop: g.spaceT("scrollMarginTop"),
  scrollMarginBottom: g.spaceT("scrollMarginBottom"),
  scrollMarginLeft: g.spaceT("scrollMarginLeft"),
  scrollMarginRight: g.spaceT("scrollMarginRight"),
  scrollMarginX: g.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: g.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: g.spaceT("scrollPadding"),
  scrollPaddingTop: g.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: g.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: g.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: g.spaceT("scrollPaddingRight"),
  scrollPaddingX: g.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: g.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function Vc(e) {
  return Oe(e) && e.reference ? e.reference : String(e);
}
var uo = (e, ...t) => t.map(Vc).join(` ${e} `).replace(/calc/g, ""), ks = (...e) => `calc(${uo("+", ...e)})`, ws = (...e) => `calc(${uo("-", ...e)})`, Bi = (...e) => `calc(${uo("*", ...e)})`, Cs = (...e) => `calc(${uo("/", ...e)})`, Ts = (e) => {
  const t = Vc(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Bi(t, -1);
}, $t = Object.assign((e) => ({
  add: (...t) => $t(ks(e, ...t)),
  subtract: (...t) => $t(ws(e, ...t)),
  multiply: (...t) => $t(Bi(e, ...t)),
  divide: (...t) => $t(Cs(e, ...t)),
  negate: () => $t(Ts(e)),
  toString: () => e.toString()
}), {
  add: ks,
  subtract: ws,
  multiply: Bi,
  divide: Cs,
  negate: Ts
});
function np(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function op(e) {
  const t = np(e.toString());
  return ap(ip(t));
}
function ip(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function ap(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function sp(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function lp(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function cp(e, t = "") {
  return op(`--${sp(e, t)}`);
}
function W(e, t, r) {
  const n = cp(e, r);
  return {
    variable: n,
    reference: lp(n, t)
  };
}
function up(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function dp(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Vi(e) {
  if (e == null)
    return e;
  const { unitless: t } = dp(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var $c = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, pa = (e) => Object.fromEntries(Object.entries(e).sort($c));
function Ps(e) {
  const t = pa(e);
  return Object.assign(Object.values(t), t);
}
function fp(e) {
  const t = Object.keys(pa(e));
  return new Set(t);
}
function As(e) {
  if (!e)
    return e;
  e = Vi(e) ?? e;
  const t = e.endsWith("px") ? -1 : -0.0625;
  return typeof e == "number" ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + t}`);
}
function Tr(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Vi(e)})`), t && r.push("and", `(max-width: ${Vi(t)})`), r.join(" ");
}
function hp(e) {
  if (!e)
    return null;
  e.base = e.base ?? "0px";
  const t = Ps(e), r = Object.entries(e).sort($c).map(([i, a], s, l) => {
    let [, c] = l[s + 1] ?? [];
    return c = parseFloat(c) > 0 ? As(c) : void 0, {
      _minW: As(a),
      breakpoint: i,
      minW: a,
      maxW: c,
      maxWQuery: Tr(null, c),
      minWQuery: Tr(a),
      minMaxQuery: Tr(a, c)
    };
  }), n = fp(e), o = Array.from(n.values());
  return {
    keys: n,
    normalized: t,
    isResponsive(i) {
      const a = Object.keys(i);
      return a.length > 0 && a.every((s) => n.has(s));
    },
    asObject: pa(e),
    asArray: Ps(e),
    details: r,
    media: [
      null,
      ...t.map((i) => Tr(i)).slice(1)
    ],
    toArrayValue(i) {
      if (!Oe(i))
        throw new Error("toArrayValue: value must be an object");
      const a = o.map((s) => i[s] ?? null);
      for (; up(a) === null; )
        a.pop();
      return a;
    },
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return i.reduce((a, s, l) => {
        const c = o[l];
        return c != null && s != null && (a[c] = s), a;
      }, {});
    }
  };
}
var le = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, gt = (e) => Fc((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), nt = (e) => Fc((t) => e(t, "~ &"), "[data-peer]", ".peer"), Fc = (e, ...t) => t.map(e).join(", "), fo = {
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
  _groupHover: gt(le.hover),
  _peerHover: nt(le.hover),
  _groupFocus: gt(le.focus),
  _peerFocus: nt(le.focus),
  _groupFocusVisible: gt(le.focusVisible),
  _peerFocusVisible: nt(le.focusVisible),
  _groupActive: gt(le.active),
  _peerActive: nt(le.active),
  _groupDisabled: gt(le.disabled),
  _peerDisabled: nt(le.disabled),
  _groupInvalid: gt(le.invalid),
  _peerInvalid: nt(le.invalid),
  _groupChecked: gt(le.checked),
  _peerChecked: nt(le.checked),
  _groupFocusWithin: gt(le.focusWithin),
  _peerFocusWithin: nt(le.focusWithin),
  _peerPlaceholderShown: nt(le.placeholderShown),
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
}, pp = Object.keys(fo);
function Es(e, t) {
  return W(String(e).replace(/\./g, "-"), void 0, t);
}
function mp(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: c } = Es(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const h = o.split("."), [p, ...b] = h, y = `${p}.-${b.join(".")}`, x = $t.negate(s), k = $t.negate(c);
        n[y] = {
          value: x,
          var: l,
          varRef: k
        };
      }
      r[l] = s, n[o] = {
        value: s,
        var: l,
        varRef: c
      };
      continue;
    }
    const u = (h) => {
      const b = [String(o).split(".")[0], h].join(".");
      if (!e[b])
        return h;
      const { reference: x } = Es(b, t == null ? void 0 : t.cssVarPrefix);
      return x;
    }, d = Oe(s) ? s : { default: s };
    r = Xe(r, Object.entries(d).reduce((h, [p, b]) => {
      var y;
      const x = u(b);
      if (p === "default")
        return h[l] = x, h;
      const k = ((y = fo) == null ? void 0 : y[p]) ?? p;
      return h[k] = { [l]: x }, h;
    }, {})), n[o] = {
      value: c,
      var: l,
      varRef: c
    };
  }
  return {
    cssVars: r,
    cssMap: n
  };
}
function gp(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function bp(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var yp = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur"
];
function vp(e) {
  return bp(e, yp);
}
function Sp(e) {
  return e.semanticTokens;
}
function xp(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
function kp({
  tokens: e,
  semanticTokens: t
}) {
  const r = Object.entries($i(e) ?? {}).map(([o, i]) => [o, { isSemantic: !1, value: i }]), n = Object.entries($i(t, 1) ?? {}).map(([o, i]) => [o, { isSemantic: !0, value: i }]);
  return Object.fromEntries([
    ...r,
    ...n
  ]);
}
function $i(e, t = 1 / 0) {
  return !Oe(e) && !Array.isArray(e) || !t ? e : Object.entries(e).reduce((r, [n, o]) => (Oe(o) || Array.isArray(o) ? Object.entries($i(o, t - 1)).forEach(([i, a]) => {
    r[`${n}.${i}`] = a;
  }) : r[n] = o, r), {});
}
function wp(e) {
  var t;
  const r = xp(e), n = vp(r), o = Sp(r), i = kp({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    cssMap: s,
    cssVars: l
  } = mp(i, { cssVarPrefix: a });
  return Object.assign(r, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...l },
    __cssMap: s,
    __breakpoints: hp(r.breakpoints)
  }), r;
}
var ma = Xe({}, In, D, jh, Kn, Be, Nh, Zh, Wh, Bc, Yh, _r, Mi, G, rp, tp, Qh, Jh, Hh, ep);
Object.assign({}, G, Be, Kn, Bc, _r);
var Cp = [...Object.keys(ma), ...pp], Tp = { ...ma, ...fo }, Pp = (e) => e in Tp, Ap = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Dt(e[a], t);
    if (s == null)
      continue;
    if (s = Oe(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
      i[a] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let c = 0; c < l; c += 1) {
      const u = o == null ? void 0 : o[c];
      if (!u) {
        i[a] = s[c];
        continue;
      }
      i[u] = i[u] || {}, s[c] != null && (i[u][a] = s[c]);
    }
  }
  return i;
};
function Ep(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function _p(e) {
  return /^var\(--.+\)$/.test(e);
}
var Rp = (e, t) => e.startsWith("--") && typeof t == "string" && !_p(t), Mp = (e, t) => {
  if (t == null)
    return t;
  const r = (a) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[a]) == null ? void 0 : l.varRef;
  }, n = (a) => r(a) ?? a, [o, i] = Ep(t);
  return t = r(o) ?? n(i) ?? n(t), t;
};
function Bp(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s;
    const l = Dt(i, n), c = Ap(l)(n);
    let u = {};
    for (let d in c) {
      const h = c[d];
      let p = Dt(h, n);
      d in r && (d = r[d]), Rp(d, p) && (p = Mp(n, p));
      let b = t[d];
      if (b === !0 && (b = { property: d }), Oe(p)) {
        u[d] = u[d] ?? {}, u[d] = Xe({}, u[d], o(p, !0));
        continue;
      }
      let y = ((s = b == null ? void 0 : b.transform) == null ? void 0 : s.call(b, p, n, l)) ?? p;
      y = b != null && b.processResult ? o(y, !0) : y;
      const x = Dt(b == null ? void 0 : b.property, n);
      if (!a && (b != null && b.static)) {
        const k = Dt(b.static, n);
        u = Xe({}, u, k);
      }
      if (x && Array.isArray(x)) {
        for (const k of x)
          u[k] = y;
        continue;
      }
      if (x) {
        x === "&" && Oe(y) ? u = Xe({}, u, y) : u[x] = y;
        continue;
      }
      if (Oe(y)) {
        u = Xe({}, u, y);
        continue;
      }
      u[d] = y;
    }
    return u;
  };
  return o;
}
var Dc = (e) => (t) => Bp({
  theme: t,
  pseudos: fo,
  configs: ma
})(e);
function q(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function Vp(e, t) {
  if (Array.isArray(e))
    return e;
  if (Oe(e))
    return t(e);
  if (e != null)
    return [e];
}
function $p(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function Fp(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = Vp(i, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, h = d === 1, p = !!n.parts;
    for (let b = 0; b < d; b++) {
      const y = t.details[b], x = t.details[$p(u, b)], k = Tr(y.minW, x == null ? void 0 : x._minW), w = Dt((s = n[o]) == null ? void 0 : s[u[b]], a);
      if (w) {
        if (p) {
          (l = n.parts) == null || l.forEach((S) => {
            Xe(c, {
              [S]: h ? w[S] : { [k]: w[S] }
            });
          });
          continue;
        }
        if (!p) {
          h ? Xe(c, w) : c[k] = w;
          continue;
        }
        c[k] = w;
      }
    }
    return c;
  };
}
function Dp(e) {
  return (t) => {
    const { variant: r, size: n, theme: o } = t, i = Fp(o);
    return Xe({}, Dt(e.baseStyle ?? {}, t), i(e, "sizes", n, t), i(e, "variants", r, t));
  };
}
function ho(e) {
  return gp(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function Ip(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function zp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Lp = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zp(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ip(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), pe = "-ms-", Xn = "-moz-", I = "-webkit-", Ic = "comm", ga = "rule", ba = "decl", Op = "@import", zc = "@keyframes", jp = Math.abs, po = String.fromCharCode, Np = Object.assign;
function Wp(e, t) {
  return ue(e, 0) ^ 45 ? (((t << 2 ^ ue(e, 0)) << 2 ^ ue(e, 1)) << 2 ^ ue(e, 2)) << 2 ^ ue(e, 3) : 0;
}
function Lc(e) {
  return e.trim();
}
function Hp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function L(e, t, r) {
  return e.replace(t, r);
}
function Fi(e, t) {
  return e.indexOf(t);
}
function ue(e, t) {
  return e.charCodeAt(t) | 0;
}
function Nr(e, t, r) {
  return e.slice(t, r);
}
function qe(e) {
  return e.length;
}
function ya(e) {
  return e.length;
}
function Tn(e, t) {
  return t.push(e), e;
}
function Up(e, t) {
  return e.map(t).join("");
}
var mo = 1, ur = 1, Oc = 0, ke = 0, ne = 0, hr = "";
function go(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: mo, column: ur, length: a, return: "" };
}
function Sr(e, t) {
  return Np(go("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Gp() {
  return ne;
}
function qp() {
  return ne = ke > 0 ? ue(hr, --ke) : 0, ur--, ne === 10 && (ur = 1, mo--), ne;
}
function Pe() {
  return ne = ke < Oc ? ue(hr, ke++) : 0, ur++, ne === 10 && (ur = 1, mo++), ne;
}
function Ze() {
  return ue(hr, ke);
}
function zn() {
  return ke;
}
function Qr(e, t) {
  return Nr(hr, e, t);
}
function Wr(e) {
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
function jc(e) {
  return mo = ur = 1, Oc = qe(hr = e), ke = 0, [];
}
function Nc(e) {
  return hr = "", e;
}
function Ln(e) {
  return Lc(Qr(ke - 1, Di(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Kp(e) {
  for (; (ne = Ze()) && ne < 33; )
    Pe();
  return Wr(e) > 2 || Wr(ne) > 3 ? "" : " ";
}
function Xp(e, t) {
  for (; --t && Pe() && !(ne < 48 || ne > 102 || ne > 57 && ne < 65 || ne > 70 && ne < 97); )
    ;
  return Qr(e, zn() + (t < 6 && Ze() == 32 && Pe() == 32));
}
function Di(e) {
  for (; Pe(); )
    switch (ne) {
      case e:
        return ke;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Di(ne);
        break;
      case 40:
        e === 41 && Di(e);
        break;
      case 92:
        Pe();
        break;
    }
  return ke;
}
function Yp(e, t) {
  for (; Pe() && e + ne !== 47 + 10; )
    if (e + ne === 42 + 42 && Ze() === 47)
      break;
  return "/*" + Qr(t, ke - 1) + "*" + po(e === 47 ? e : Pe());
}
function Zp(e) {
  for (; !Wr(Ze()); )
    Pe();
  return Qr(e, ke);
}
function Qp(e) {
  return Nc(On("", null, null, null, [""], e = jc(e), 0, [0], e));
}
function On(e, t, r, n, o, i, a, s, l) {
  for (var c = 0, u = 0, d = a, h = 0, p = 0, b = 0, y = 1, x = 1, k = 1, w = 0, S = "", T = o, A = i, B = n, E = S; x; )
    switch (b = w, w = Pe()) {
      case 40:
        if (b != 108 && ue(E, d - 1) == 58) {
          Fi(E += L(Ln(w), "&", "&\f"), "&\f") != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Ln(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Kp(b);
        break;
      case 92:
        E += Xp(zn() - 1, 7);
        continue;
      case 47:
        switch (Ze()) {
          case 42:
          case 47:
            Tn(Jp(Yp(Pe(), zn()), t, r), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * y:
        s[c++] = qe(E) * k;
      case 125 * y:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            x = 0;
          case 59 + u:
            p > 0 && qe(E) - d && Tn(p > 32 ? Rs(E + ";", n, r, d - 1) : Rs(L(E, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            E += ";";
          default:
            if (Tn(B = _s(E, t, r, c, u, o, s, S, T = [], A = [], d), i), w === 123)
              if (u === 0)
                On(E, t, B, B, T, i, d, s, A);
              else
                switch (h === 99 && ue(E, 3) === 110 ? 100 : h) {
                  case 100:
                  case 109:
                  case 115:
                    On(e, B, B, n && Tn(_s(e, B, B, 0, 0, o, s, S, o, T = [], d), A), o, A, d, s, n ? T : A);
                    break;
                  default:
                    On(E, B, B, B, [""], A, 0, s, A);
                }
        }
        c = u = p = 0, y = k = 1, S = E = "", d = a;
        break;
      case 58:
        d = 1 + qe(E), p = b;
      default:
        if (y < 1) {
          if (w == 123)
            --y;
          else if (w == 125 && y++ == 0 && qp() == 125)
            continue;
        }
        switch (E += po(w), w * y) {
          case 38:
            k = u > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[c++] = (qe(E) - 1) * k, k = 1;
            break;
          case 64:
            Ze() === 45 && (E += Ln(Pe())), h = Ze(), u = d = qe(S = E += Zp(zn())), w++;
            break;
          case 45:
            b === 45 && qe(E) == 2 && (y = 0);
        }
    }
  return i;
}
function _s(e, t, r, n, o, i, a, s, l, c, u) {
  for (var d = o - 1, h = o === 0 ? i : [""], p = ya(h), b = 0, y = 0, x = 0; b < n; ++b)
    for (var k = 0, w = Nr(e, d + 1, d = jp(y = a[b])), S = e; k < p; ++k)
      (S = Lc(y > 0 ? h[k] + " " + w : L(w, /&\f/g, h[k]))) && (l[x++] = S);
  return go(e, t, r, o === 0 ? ga : s, l, c, u);
}
function Jp(e, t, r) {
  return go(e, t, r, Ic, po(Gp()), Nr(e, 2, -2), 0);
}
function Rs(e, t, r, n) {
  return go(e, t, r, ba, Nr(e, 0, n), Nr(e, n + 1, -1), n);
}
function rr(e, t) {
  for (var r = "", n = ya(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function em(e, t, r, n) {
  switch (e.type) {
    case Op:
    case ba:
      return e.return = e.return || e.value;
    case Ic:
      return "";
    case zc:
      return e.return = e.value + "{" + rr(e.children, n) + "}";
    case ga:
      e.value = e.props.join(",");
  }
  return qe(r = rr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function tm(e) {
  var t = ya(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function rm(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ms = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Wc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var nm = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ze(), o === 38 && i === 12 && (r[n] = 1), !Wr(i); )
    Pe();
  return Qr(t, ke);
}, om = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Wr(o)) {
      case 0:
        o === 38 && Ze() === 12 && (r[n] = 1), t[n] += nm(ke - 1, r, n);
        break;
      case 2:
        t[n] += Ln(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ze() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += po(o);
    }
  while (o = Pe());
  return t;
}, im = function(t, r) {
  return Nc(om(jc(t), r));
}, Bs = /* @__PURE__ */ new WeakMap(), am = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Bs.get(n)) && !o) {
      Bs.set(t, !0);
      for (var i = [], a = im(r, i), s = n.props, l = 0, c = 0; l < a.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = i[l] ? a[l].replace(/&\f/g, s[u]) : s[u] + " " + a[l];
    }
  }
}, sm = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Hc(e, t) {
  switch (Wp(e, t)) {
    case 5103:
      return I + "print-" + e + e;
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
      return I + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return I + e + Xn + e + pe + e + e;
    case 6828:
    case 4268:
      return I + e + pe + e + e;
    case 6165:
      return I + e + pe + "flex-" + e + e;
    case 5187:
      return I + e + L(e, /(\w+).+(:[^]+)/, I + "box-$1$2" + pe + "flex-$1$2") + e;
    case 5443:
      return I + e + pe + "flex-item-" + L(e, /flex-|-self/, "") + e;
    case 4675:
      return I + e + pe + "flex-line-pack" + L(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return I + e + pe + L(e, "shrink", "negative") + e;
    case 5292:
      return I + e + pe + L(e, "basis", "preferred-size") + e;
    case 6060:
      return I + "box-" + L(e, "-grow", "") + I + e + pe + L(e, "grow", "positive") + e;
    case 4554:
      return I + L(e, /([^-])(transform)/g, "$1" + I + "$2") + e;
    case 6187:
      return L(L(L(e, /(zoom-|grab)/, I + "$1"), /(image-set)/, I + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return L(e, /(image-set\([^]*)/, I + "$1$`$1");
    case 4968:
      return L(L(e, /(.+:)(flex-)?(.*)/, I + "box-pack:$3" + pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + I + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return L(e, /(.+)-inline(.+)/, I + "$1$2") + e;
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
      if (qe(e) - 1 - t > 6)
        switch (ue(e, t + 1)) {
          case 109:
            if (ue(e, t + 4) !== 45)
              break;
          case 102:
            return L(e, /(.+:)(.+)-([^]+)/, "$1" + I + "$2-$3$1" + Xn + (ue(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Fi(e, "stretch") ? Hc(L(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ue(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ue(e, qe(e) - 3 - (~Fi(e, "!important") && 10))) {
        case 107:
          return L(e, ":", ":" + I) + e;
        case 101:
          return L(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + I + (ue(e, 14) === 45 ? "inline-" : "") + "box$3$1" + I + "$2$3$1" + pe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ue(e, t + 11)) {
        case 114:
          return I + e + pe + L(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return I + e + pe + L(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return I + e + pe + L(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return I + e + pe + e + e;
  }
  return e;
}
var lm = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ba:
        t.return = Hc(t.value, t.length);
        break;
      case zc:
        return rr([Sr(t, {
          value: L(t.value, "@", "@" + I)
        })], o);
      case ga:
        if (t.length)
          return Up(t.props, function(i) {
            switch (Hp(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return rr([Sr(t, {
                  props: [L(i, /:(read-\w+)/, ":" + Xn + "$1")]
                })], o);
              case "::placeholder":
                return rr([Sr(t, {
                  props: [L(i, /:(plac\w+)/, ":" + I + "input-$1")]
                }), Sr(t, {
                  props: [L(i, /:(plac\w+)/, ":" + Xn + "$1")]
                }), Sr(t, {
                  props: [L(i, /:(plac\w+)/, pe + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, cm = [lm], um = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var x = y.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || cm, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(y) {
      for (var x = y.getAttribute("data-emotion").split(" "), k = 1; k < x.length; k++)
        i[x[k]] = !0;
      s.push(y);
    }
  );
  var l, c = [am, sm];
  {
    var u, d = [em, rm(function(y) {
      u.insert(y);
    })], h = tm(c.concat(o, d)), p = function(x) {
      return rr(Qp(x), h);
    };
    l = function(x, k, w, S) {
      u = w, p(x ? x + "{" + k.styles + "}" : k.styles), S && (b.inserted[k.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new Lp({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return b.sheet.hydrate(s), b;
};
function Yn() {
  return Yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yn.apply(this, arguments);
}
var Ii = {}, dm = {
  get exports() {
    return Ii;
  },
  set exports(e) {
    Ii = e;
  }
}, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se = typeof Symbol == "function" && Symbol.for, va = se ? Symbol.for("react.element") : 60103, Sa = se ? Symbol.for("react.portal") : 60106, bo = se ? Symbol.for("react.fragment") : 60107, yo = se ? Symbol.for("react.strict_mode") : 60108, vo = se ? Symbol.for("react.profiler") : 60114, So = se ? Symbol.for("react.provider") : 60109, xo = se ? Symbol.for("react.context") : 60110, xa = se ? Symbol.for("react.async_mode") : 60111, ko = se ? Symbol.for("react.concurrent_mode") : 60111, wo = se ? Symbol.for("react.forward_ref") : 60112, Co = se ? Symbol.for("react.suspense") : 60113, fm = se ? Symbol.for("react.suspense_list") : 60120, To = se ? Symbol.for("react.memo") : 60115, Po = se ? Symbol.for("react.lazy") : 60116, hm = se ? Symbol.for("react.block") : 60121, pm = se ? Symbol.for("react.fundamental") : 60117, mm = se ? Symbol.for("react.responder") : 60118, gm = se ? Symbol.for("react.scope") : 60119;
function _e(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case va:
        switch (e = e.type, e) {
          case xa:
          case ko:
          case bo:
          case vo:
          case yo:
          case Co:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case xo:
              case wo:
              case Po:
              case To:
              case So:
                return e;
              default:
                return t;
            }
        }
      case Sa:
        return t;
    }
  }
}
function Uc(e) {
  return _e(e) === ko;
}
j.AsyncMode = xa;
j.ConcurrentMode = ko;
j.ContextConsumer = xo;
j.ContextProvider = So;
j.Element = va;
j.ForwardRef = wo;
j.Fragment = bo;
j.Lazy = Po;
j.Memo = To;
j.Portal = Sa;
j.Profiler = vo;
j.StrictMode = yo;
j.Suspense = Co;
j.isAsyncMode = function(e) {
  return Uc(e) || _e(e) === xa;
};
j.isConcurrentMode = Uc;
j.isContextConsumer = function(e) {
  return _e(e) === xo;
};
j.isContextProvider = function(e) {
  return _e(e) === So;
};
j.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === va;
};
j.isForwardRef = function(e) {
  return _e(e) === wo;
};
j.isFragment = function(e) {
  return _e(e) === bo;
};
j.isLazy = function(e) {
  return _e(e) === Po;
};
j.isMemo = function(e) {
  return _e(e) === To;
};
j.isPortal = function(e) {
  return _e(e) === Sa;
};
j.isProfiler = function(e) {
  return _e(e) === vo;
};
j.isStrictMode = function(e) {
  return _e(e) === yo;
};
j.isSuspense = function(e) {
  return _e(e) === Co;
};
j.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === bo || e === ko || e === vo || e === yo || e === Co || e === fm || typeof e == "object" && e !== null && (e.$$typeof === Po || e.$$typeof === To || e.$$typeof === So || e.$$typeof === xo || e.$$typeof === wo || e.$$typeof === pm || e.$$typeof === mm || e.$$typeof === gm || e.$$typeof === hm);
};
j.typeOf = _e;
(function(e) {
  e.exports = j;
})(dm);
var Gc = Ii, bm = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ym = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qc = {};
qc[Gc.ForwardRef] = bm;
qc[Gc.Memo] = ym;
var vm = !0;
function Sm(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Kc = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  vm === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Xc = function(t, r, n) {
  Kc(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function xm(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var km = {
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
}, wm = /[A-Z]|^ms/g, Cm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Yc = function(t) {
  return t.charCodeAt(1) === 45;
}, Vs = function(t) {
  return t != null && typeof t != "boolean";
}, Jo = /* @__PURE__ */ Wc(function(e) {
  return Yc(e) ? e : e.replace(wm, "-$&").toLowerCase();
}), $s = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Cm, function(n, o, i) {
          return Ke = {
            name: o,
            styles: i,
            next: Ke
          }, o;
        });
  }
  return km[t] !== 1 && !Yc(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Hr(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Ke = {
          name: r.name,
          styles: r.styles,
          next: Ke
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Ke = {
              name: n.name,
              styles: n.styles,
              next: Ke
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return Tm(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ke, a = r(e);
        return Ke = i, Hr(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function Tm(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Hr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : Vs(a) && (n += Jo(i) + ":" + $s(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Vs(a[s]) && (n += Jo(i) + ":" + $s(i, a[s]) + ";");
      else {
        var l = Hr(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Jo(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var Fs = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ke, ka = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Ke = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Hr(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Hr(n, r, t[s]), o && (i += a[s]);
  Fs.lastIndex = 0;
  for (var l = "", c; (c = Fs.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    c[1];
  var u = xm(i) + l;
  return {
    name: u,
    styles: i,
    next: Ke
  };
}, Pm = function(t) {
  return t();
}, Zc = ce["useInsertionEffect"] ? ce["useInsertionEffect"] : !1, Am = Zc || Pm, Ds = Zc || sa, Qc = /* @__PURE__ */ Ve(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ um({
    key: "css"
  }) : null
);
Qc.Provider;
var Jc = function(t) {
  return /* @__PURE__ */ la(function(r, n) {
    var o = Z(Qc);
    return t(r, o, n);
  });
}, Ur = /* @__PURE__ */ Ve({}), Em = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return Yn({}, t, r);
}, _m = /* @__PURE__ */ Ms(function(e) {
  return Ms(function(t) {
    return Em(e, t);
  });
}), Rm = function(t) {
  var r = Z(Ur);
  return t.theme !== r && (r = _m(r)(t.theme)), /* @__PURE__ */ Er(Ur.Provider, {
    value: r
  }, t.children);
}, Ao = /* @__PURE__ */ Jc(function(e, t) {
  var r = e.styles, n = ka([r], void 0, Z(Ur)), o = xe();
  return Ds(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Ds(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Xc(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function Mm() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ka(t);
}
var Bm = function() {
  var t = Mm.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function Vm(e) {
  return typeof e == "function";
}
function $m(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function Fm(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var Dm = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, a) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, i, a);
    return s.set(o, l), l;
  };
}, eu = Dm(Fm);
function tu(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var ru = (e) => tu(e, (t) => t != null);
function nu(e, ...t) {
  return Vm(e) ? e(...t) : e;
}
function Im(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = Ve(void 0);
  o.displayName = n;
  function i() {
    var a;
    const s = Z(o);
    if (!s && t) {
      const l = new Error(r);
      throw l.name = "ContextError", (a = Error.captureStackTrace) == null || a.call(Error, l, i), l;
    }
    return s;
  }
  return [
    o.Provider,
    i,
    o
  ];
}
var zm = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Lm = /* @__PURE__ */ Wc(
  function(e) {
    return zm.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Om = Lm, jm = function(t) {
  return t !== "theme";
}, Is = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Om : jm;
}, zs = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Nm = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Kc(r, n, o), Am(function() {
    return Xc(r, n, o);
  }), null;
}, Wm = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = zs(t, r, n), l = s || Is(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      d.push(u[0][0]);
      for (var h = u.length, p = 1; p < h; p++)
        d.push(u[p], u[0][p]);
    }
    var b = Jc(function(y, x, k) {
      var w = c && y.as || o, S = "", T = [], A = y;
      if (y.theme == null) {
        A = {};
        for (var B in y)
          A[B] = y[B];
        A.theme = Z(Ur);
      }
      typeof y.className == "string" ? S = Sm(x.registered, T, y.className) : y.className != null && (S = y.className + " ");
      var E = ka(d.concat(T), x.registered, A);
      S += x.key + "-" + E.name, a !== void 0 && (S += " " + a);
      var M = c && s === void 0 ? Is(w) : l, H = {};
      for (var he in y)
        c && he === "as" || // $FlowFixMe
        M(he) && (H[he] = y[he]);
      return H.className = S, H.ref = k, /* @__PURE__ */ Er(fh, null, /* @__PURE__ */ Er(Nm, {
        cache: x,
        serialized: E,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ Er(w, H));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = d, b.__emotion_forwardProp = s, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + a;
      }
    }), b.withComponent = function(y, x) {
      return e(y, Yn({}, r, x, {
        shouldForwardProp: zs(b, x, !0)
      })).apply(void 0, d);
    }, b;
  };
}, Hm = [
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
], zi = Wm.bind();
Hm.forEach(function(e) {
  zi[e] = zi(e);
});
function O(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
  }
  function o(...u) {
    n();
    for (const d of u)
      t[d] = l(d);
    return O(e, t);
  }
  function i(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return O(e, t);
  }
  function a() {
    return Object.fromEntries(Object.entries(t).map(([d, h]) => [d, h.selector]));
  }
  function s() {
    return Object.fromEntries(Object.entries(t).map(([d, h]) => [d, h.className]));
  }
  function l(u) {
    const p = `chakra-${(["container", "root"].includes(u ?? "") ? [e] : [e, u]).filter(Boolean).join("__")}`;
    return {
      className: p,
      selector: `.${p}`,
      toString: () => u
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var Um = O("accordion").parts("root", "container", "button", "panel").extend("icon"), Gm = O("alert").parts("title", "description", "container").extend("icon", "spinner"), qm = O("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), Km = O("breadcrumb").parts("link", "item", "container").extend("separator");
O("button").parts();
var Xm = O("checkbox").parts("control", "icon", "container").extend("label");
O("progress").parts("track", "filledTrack").extend("label");
var Ym = O("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Zm = O("editable").parts("preview", "input", "textarea"), Qm = O("form").parts("container", "requiredIndicator", "helperText"), Jm = O("formError").parts("text", "icon"), e0 = O("input").parts("addon", "field", "element"), t0 = O("list").parts("container", "item", "icon"), r0 = O("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"), n0 = O("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), o0 = O("numberinput").parts("root", "field", "stepperGroup", "stepper");
O("pininput").parts("field");
var i0 = O("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), a0 = O("progress").parts("label", "filledTrack", "track"), s0 = O("radio").parts("container", "control", "label"), l0 = O("select").parts("field", "icon"), c0 = O("slider").parts("container", "track", "thumb", "filledTrack", "mark"), u0 = O("stat").parts("container", "label", "helpText", "number", "icon"), d0 = O("switch").parts("container", "track", "thumb"), f0 = O("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"), h0 = O("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"), p0 = O("tag").parts("container", "label", "closeButton"), m0 = O("card").parts("container", "header", "body", "footer");
function de(e, t) {
  g0(e) && (e = "100%");
  var r = b0(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Pn(e) {
  return Math.min(1, Math.max(0, e));
}
function g0(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function b0(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ou(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function An(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function It(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function y0(e, t, r) {
  return {
    r: de(e, 255) * 255,
    g: de(t, 255) * 255,
    b: de(r, 255) * 255
  };
}
function Ls(e, t, r) {
  e = de(e, 255), t = de(t, 255), r = de(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = 0, s = (n + o) / 2;
  if (n === o)
    a = 0, i = 0;
  else {
    var l = n - o;
    switch (a = s > 0.5 ? l / (2 - n - o) : l / (n + o), n) {
      case e:
        i = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / l + 2;
        break;
      case r:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l: s };
}
function ei(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function v0(e, t, r) {
  var n, o, i;
  if (e = de(e, 360), t = de(t, 100), r = de(r, 100), t === 0)
    o = r, i = r, n = r;
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = ei(s, a, e + 1 / 3), o = ei(s, a, e), i = ei(s, a, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function Os(e, t, r) {
  e = de(e, 255), t = de(t, 255), r = de(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = n, s = n - o, l = n === 0 ? 0 : s / n;
  if (n === o)
    i = 0;
  else {
    switch (n) {
      case e:
        i = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / s + 2;
        break;
      case r:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, v: a };
}
function S0(e, t, r) {
  e = de(e, 360) * 6, t = de(t, 100), r = de(r, 100);
  var n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), l = n % 6, c = [r, a, i, i, s, r][l], u = [s, r, r, a, i, i][l], d = [i, i, s, r, r, a][l];
  return { r: c * 255, g: u * 255, b: d * 255 };
}
function js(e, t, r, n) {
  var o = [
    It(Math.round(e).toString(16)),
    It(Math.round(t).toString(16)),
    It(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function x0(e, t, r, n, o) {
  var i = [
    It(Math.round(e).toString(16)),
    It(Math.round(t).toString(16)),
    It(Math.round(r).toString(16)),
    It(k0(n))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function k0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ns(e) {
  return Te(e) / 255;
}
function Te(e) {
  return parseInt(e, 16);
}
function w0(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Li = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function C0(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = A0(e)), typeof e == "object" && (ot(e.r) && ot(e.g) && ot(e.b) ? (t = y0(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ot(e.h) && ot(e.s) && ot(e.v) ? (n = An(e.s), o = An(e.v), t = S0(e.h, n, o), a = !0, s = "hsv") : ot(e.h) && ot(e.s) && ot(e.l) && (n = An(e.s), i = An(e.l), t = v0(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = ou(r), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var T0 = "[-\\+]?\\d+%?", P0 = "[-\\+]?\\d*\\.\\d+%?", kt = "(?:".concat(P0, ")|(?:").concat(T0, ")"), ti = "[\\s|\\(]+(".concat(kt, ")[,|\\s]+(").concat(kt, ")[,|\\s]+(").concat(kt, ")\\s*\\)?"), ri = "[\\s|\\(]+(".concat(kt, ")[,|\\s]+(").concat(kt, ")[,|\\s]+(").concat(kt, ")[,|\\s]+(").concat(kt, ")\\s*\\)?"), ze = {
  CSS_UNIT: new RegExp(kt),
  rgb: new RegExp("rgb" + ti),
  rgba: new RegExp("rgba" + ri),
  hsl: new RegExp("hsl" + ti),
  hsla: new RegExp("hsla" + ri),
  hsv: new RegExp("hsv" + ti),
  hsva: new RegExp("hsva" + ri),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function A0(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Li[e])
    e = Li[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = ze.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = ze.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = ze.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = ze.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = ze.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = ze.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = ze.hex8.exec(e), r ? {
    r: Te(r[1]),
    g: Te(r[2]),
    b: Te(r[3]),
    a: Ns(r[4]),
    format: t ? "name" : "hex8"
  } : (r = ze.hex6.exec(e), r ? {
    r: Te(r[1]),
    g: Te(r[2]),
    b: Te(r[3]),
    format: t ? "name" : "hex"
  } : (r = ze.hex4.exec(e), r ? {
    r: Te(r[1] + r[1]),
    g: Te(r[2] + r[2]),
    b: Te(r[3] + r[3]),
    a: Ns(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = ze.hex3.exec(e), r ? {
    r: Te(r[1] + r[1]),
    g: Te(r[2] + r[2]),
    b: Te(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function ot(e) {
  return !!ze.CSS_UNIT.exec(String(e));
}
var Jr = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = w0(t)), this.originalInput = t;
      var o = C0(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, o, i = t.r / 255, a = t.g / 255, s = t.b / 255;
      return i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = ou(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Os(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Os(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Ls(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Ls(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), js(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), x0(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(de(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(de(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + js(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Li); r < n.length; r++) {
        var o = n[r], i = o[0], a = o[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, o = this.a < 1 && this.a >= 0, i = !r && o && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = Pn(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Pn(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Pn(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Pn(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), o = new e(t).toRgb(), i = r / 100, a = {
        r: (o.r - n.r) * i + n.r,
        g: (o.g - n.g) * i + n.g,
        b: (o.b - n.b) * i + n.b,
        a: (o.a - n.a) * i + n.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), o = 360 / r, i = [this];
      for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + o) % 360, i.push(new e(n));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, o = r.s, i = r.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: n, s: o, v: i })), i = (i + s) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), o = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, o = [this], i = 360 / t, a = 1; a < t; a++)
        o.push(new e({ h: (n + a * i) % 360, s: r.s, l: r.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function iu(e) {
  if (e === void 0 && (e = {}), e.count !== void 0 && e.count !== null) {
    var t = e.count, r = [];
    for (e.count = void 0; t > r.length; )
      e.count = null, e.seed && (e.seed += 1), r.push(iu(e));
    return e.count = t, r;
  }
  var n = E0(e.hue, e.seed), o = _0(n, e), i = R0(n, o, e), a = { h: n, s: o, v: i };
  return e.alpha !== void 0 && (a.a = e.alpha), new Jr(a);
}
function E0(e, t) {
  var r = B0(e), n = Zn(r, t);
  return n < 0 && (n = 360 + n), n;
}
function _0(e, t) {
  if (t.hue === "monochrome")
    return 0;
  if (t.luminosity === "random")
    return Zn([0, 100], t.seed);
  var r = au(e).saturationRange, n = r[0], o = r[1];
  switch (t.luminosity) {
    case "bright":
      n = 55;
      break;
    case "dark":
      n = o - 10;
      break;
    case "light":
      o = 55;
      break;
  }
  return Zn([n, o], t.seed);
}
function R0(e, t, r) {
  var n = M0(e, t), o = 100;
  switch (r.luminosity) {
    case "dark":
      o = n + 20;
      break;
    case "light":
      n = (o + n) / 2;
      break;
    case "random":
      n = 0, o = 100;
      break;
  }
  return Zn([n, o], r.seed);
}
function M0(e, t) {
  for (var r = au(e).lowerBounds, n = 0; n < r.length - 1; n++) {
    var o = r[n][0], i = r[n][1], a = r[n + 1][0], s = r[n + 1][1];
    if (t >= o && t <= a) {
      var l = (s - i) / (a - o), c = i - l * o;
      return l * t + c;
    }
  }
  return 0;
}
function B0(e) {
  var t = parseInt(e, 10);
  if (!Number.isNaN(t) && t < 360 && t > 0)
    return [t, t];
  if (typeof e == "string") {
    var r = lu.find(function(a) {
      return a.name === e;
    });
    if (r) {
      var n = su(r);
      if (n.hueRange)
        return n.hueRange;
    }
    var o = new Jr(e);
    if (o.isValid) {
      var i = o.toHsv().h;
      return [i, i];
    }
  }
  return [0, 360];
}
function au(e) {
  e >= 334 && e <= 360 && (e -= 360);
  for (var t = 0, r = lu; t < r.length; t++) {
    var n = r[t], o = su(n);
    if (o.hueRange && e >= o.hueRange[0] && e <= o.hueRange[1])
      return o;
  }
  throw Error("Color not found");
}
function Zn(e, t) {
  if (t === void 0)
    return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
  var r = e[1] || 1, n = e[0] || 0;
  t = (t * 9301 + 49297) % 233280;
  var o = t / 233280;
  return Math.floor(n + o * (r - n));
}
function su(e) {
  var t = e.lowerBounds[0][0], r = e.lowerBounds[e.lowerBounds.length - 1][0], n = e.lowerBounds[e.lowerBounds.length - 1][1], o = e.lowerBounds[0][1];
  return {
    name: e.name,
    hueRange: e.hueRange,
    lowerBounds: e.lowerBounds,
    saturationRange: [t, r],
    brightnessRange: [n, o]
  };
}
var lu = [
  {
    name: "monochrome",
    hueRange: null,
    lowerBounds: [
      [0, 0],
      [100, 0]
    ]
  },
  {
    name: "red",
    hueRange: [-26, 18],
    lowerBounds: [
      [20, 100],
      [30, 92],
      [40, 89],
      [50, 85],
      [60, 78],
      [70, 70],
      [80, 60],
      [90, 55],
      [100, 50]
    ]
  },
  {
    name: "orange",
    hueRange: [19, 46],
    lowerBounds: [
      [20, 100],
      [30, 93],
      [40, 88],
      [50, 86],
      [60, 85],
      [70, 70],
      [100, 70]
    ]
  },
  {
    name: "yellow",
    hueRange: [47, 62],
    lowerBounds: [
      [25, 100],
      [40, 94],
      [50, 89],
      [60, 86],
      [70, 84],
      [80, 82],
      [90, 80],
      [100, 75]
    ]
  },
  {
    name: "green",
    hueRange: [63, 178],
    lowerBounds: [
      [30, 100],
      [40, 90],
      [50, 85],
      [60, 81],
      [70, 74],
      [80, 64],
      [90, 50],
      [100, 40]
    ]
  },
  {
    name: "blue",
    hueRange: [179, 257],
    lowerBounds: [
      [20, 100],
      [30, 86],
      [40, 80],
      [50, 74],
      [60, 60],
      [70, 52],
      [80, 44],
      [90, 39],
      [100, 35]
    ]
  },
  {
    name: "purple",
    hueRange: [258, 282],
    lowerBounds: [
      [20, 100],
      [30, 87],
      [40, 79],
      [50, 70],
      [60, 65],
      [70, 59],
      [80, 52],
      [90, 45],
      [100, 42]
    ]
  },
  {
    name: "pink",
    hueRange: [283, 334],
    lowerBounds: [
      [20, 100],
      [30, 90],
      [40, 86],
      [60, 84],
      [80, 80],
      [90, 75],
      [100, 73]
    ]
  }
];
function V0(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var $0 = (e) => Object.keys(e).length === 0, be = (e, t, r) => {
  const n = V0(e, `colors.${t}`, t), { isValid: o } = new Jr(n);
  return o ? n : r;
}, F0 = (e) => (t) => {
  const r = be(t, e);
  return new Jr(r).isDark() ? "dark" : "light";
}, D0 = (e) => (t) => F0(e)(t) === "dark", dr = (e, t) => (r) => {
  const n = be(r, e);
  return new Jr(n).setAlpha(t).toRgbString();
};
function Ws(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
function I0(e) {
  const t = iu().toHexString();
  return !e || $0(e) ? t : e.string && e.colors ? L0(e.string, e.colors) : e.string && !e.colors ? z0(e.string) : e.colors && !e.string ? O0(e.colors) : t;
}
function z0(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let n = 0; n < e.length; n += 1)
    t = e.charCodeAt(n) + ((t << 5) - t), t = t & t;
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = t >> n * 8 & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function L0(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function O0(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function _(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function wa(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function j0(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function cu(e) {
  return j0(e) && e.reference ? e.reference : String(e);
}
var Eo = (e, ...t) => t.map(cu).join(` ${e} `).replace(/calc/g, ""), Hs = (...e) => `calc(${Eo("+", ...e)})`, Us = (...e) => `calc(${Eo("-", ...e)})`, Oi = (...e) => `calc(${Eo("*", ...e)})`, Gs = (...e) => `calc(${Eo("/", ...e)})`, qs = (e) => {
  const t = cu(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Oi(t, -1);
}, it = Object.assign((e) => ({
  add: (...t) => it(Hs(e, ...t)),
  subtract: (...t) => it(Us(e, ...t)),
  multiply: (...t) => it(Oi(e, ...t)),
  divide: (...t) => it(Gs(e, ...t)),
  negate: () => it(qs(e)),
  toString: () => e.toString()
}), {
  add: Hs,
  subtract: Us,
  multiply: Oi,
  divide: Gs,
  negate: qs
});
function N0(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function W0(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function uu(e) {
  const t = W0(e.toString());
  return t.includes("\\.") ? e : N0(e) ? t.replace(".", "\\.") : e;
}
function H0(e, t = "") {
  return [t, uu(e)].filter(Boolean).join("-");
}
function U0(e, t) {
  return `var(${uu(e)}${t ? `, ${t}` : ""})`;
}
function G0(e, t = "") {
  return `--${H0(e, t)}`;
}
function ie(e, t) {
  const r = G0(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: U0(r, q0(t == null ? void 0 : t.fallback))
  };
}
function q0(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { definePartsStyle: K0, defineMultiStyleConfig: X0 } = q(Um.keys), Y0 = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, Z0 = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, Q0 = {
  pt: "2",
  px: "4",
  pb: "5"
}, J0 = {
  fontSize: "1.25em"
}, eg = K0({
  container: Y0,
  button: Z0,
  panel: Q0,
  icon: J0
}), tg = X0({ baseStyle: eg }), { definePartsStyle: en, defineMultiStyleConfig: rg } = q(Gm.keys), Ae = W("alert-fg"), ut = W("alert-bg"), ng = en({
  container: {
    bg: ut.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: Ae.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Ae.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Ca(e) {
  const { theme: t, colorScheme: r } = e, n = dr(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var og = en((e) => {
  const { colorScheme: t } = e, r = Ca(e);
  return {
    container: {
      [Ae.variable]: `colors.${t}.500`,
      [ut.variable]: r.light,
      _dark: {
        [Ae.variable]: `colors.${t}.200`,
        [ut.variable]: r.dark
      }
    }
  };
}), ig = en((e) => {
  const { colorScheme: t } = e, r = Ca(e);
  return {
    container: {
      [Ae.variable]: `colors.${t}.500`,
      [ut.variable]: r.light,
      _dark: {
        [Ae.variable]: `colors.${t}.200`,
        [ut.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Ae.reference
    }
  };
}), ag = en((e) => {
  const { colorScheme: t } = e, r = Ca(e);
  return {
    container: {
      [Ae.variable]: `colors.${t}.500`,
      [ut.variable]: r.light,
      _dark: {
        [Ae.variable]: `colors.${t}.200`,
        [ut.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Ae.reference
    }
  };
}), sg = en((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Ae.variable]: "colors.white",
      [ut.variable]: `colors.${t}.500`,
      _dark: {
        [Ae.variable]: "colors.gray.900",
        [ut.variable]: `colors.${t}.200`
      },
      color: Ae.reference
    }
  };
}), lg = {
  subtle: og,
  "left-accent": ig,
  "top-accent": ag,
  solid: sg
}, cg = rg({
  baseStyle: ng,
  variants: lg,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), du = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, ug = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, dg = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, fg = {
  ...du,
  ...ug,
  container: dg
}, fu = fg, hg = (e) => typeof e == "function";
function ye(e, ...t) {
  return hg(e) ? e(...t) : e;
}
var { definePartsStyle: hu, defineMultiStyleConfig: pg } = q(qm.keys), nr = W("avatar-border-color"), ni = W("avatar-bg"), mg = {
  borderRadius: "full",
  border: "0.2em solid",
  [nr.variable]: "white",
  _dark: {
    [nr.variable]: "colors.gray.800"
  },
  borderColor: nr.reference
}, gg = {
  [ni.variable]: "colors.gray.200",
  _dark: {
    [ni.variable]: "colors.whiteAlpha.400"
  },
  bgColor: ni.reference
}, Ks = W("avatar-background"), bg = (e) => {
  const { name: t, theme: r } = e, n = t ? I0({ string: t }) : "colors.gray.400", o = D0(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: Ks.reference,
    "&:not([data-loaded])": {
      [Ks.variable]: n
    },
    color: i,
    [nr.variable]: "colors.white",
    _dark: {
      [nr.variable]: "colors.gray.800"
    },
    borderColor: nr.reference,
    verticalAlign: "top"
  };
}, yg = hu((e) => ({
  badge: ye(mg, e),
  excessLabel: ye(gg, e),
  container: ye(bg, e)
}));
function bt(e) {
  const t = e !== "100%" ? fu[e] : void 0;
  return hu({
    container: {
      width: e,
      height: e,
      fontSize: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      width: e,
      height: e
    },
    label: {
      fontSize: `calc(${t ?? e} / 2.5)`,
      lineHeight: e !== "100%" ? t ?? e : void 0
    }
  });
}
var vg = {
  "2xs": bt(4),
  xs: bt(6),
  sm: bt(8),
  md: bt(12),
  lg: bt(16),
  xl: bt(24),
  "2xl": bt(32),
  full: bt("100%")
}, Sg = pg({
  baseStyle: yg,
  sizes: vg,
  defaultProps: { size: "md" }
}), xg = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
}, or = W("badge-bg"), Ye = W("badge-color"), kg = (e) => {
  const { colorScheme: t, theme: r } = e, n = dr(`${t}.500`, 0.6)(r);
  return {
    [or.variable]: `colors.${t}.500`,
    [Ye.variable]: "colors.white",
    _dark: {
      [or.variable]: n,
      [Ye.variable]: "colors.whiteAlpha.800"
    },
    bg: or.reference,
    color: Ye.reference
  };
}, wg = (e) => {
  const { colorScheme: t, theme: r } = e, n = dr(`${t}.200`, 0.16)(r);
  return {
    [or.variable]: `colors.${t}.100`,
    [Ye.variable]: `colors.${t}.800`,
    _dark: {
      [or.variable]: n,
      [Ye.variable]: `colors.${t}.200`
    },
    bg: or.reference,
    color: Ye.reference
  };
}, Cg = (e) => {
  const { colorScheme: t, theme: r } = e, n = dr(`${t}.200`, 0.8)(r);
  return {
    [Ye.variable]: `colors.${t}.500`,
    _dark: {
      [Ye.variable]: n
    },
    color: Ye.reference,
    boxShadow: `inset 0 0 0px 1px ${Ye.reference}`
  };
}, Tg = {
  solid: kg,
  subtle: wg,
  outline: Cg
}, Rr = {
  baseStyle: xg,
  variants: Tg,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: Pg, definePartsStyle: Ag } = q(Km.keys), Eg = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, _g = Ag({
  link: Eg
}), Rg = Pg({
  baseStyle: _g
}), Mg = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, pu = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: _("inherit", "whiteAlpha.900")(e),
      _hover: {
        bg: _("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: _("gray.200", "whiteAlpha.300")(e) }
    };
  const n = dr(`${t}.200`, 0.12)(r), o = dr(`${t}.200`, 0.24)(r);
  return {
    color: _(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: _(`${t}.50`, n)(e)
    },
    _active: {
      bg: _(`${t}.100`, o)(e)
    }
  };
}, Bg = (e) => {
  const { colorScheme: t } = e, r = _("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
      marginEnd: "-1px"
    },
    ...ye(pu, e)
  };
}, Vg = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, $g = (e) => {
  const { colorScheme: t } = e;
  if (t === "gray") {
    const s = _("gray.100", "whiteAlpha.200")(e);
    return {
      bg: s,
      _hover: {
        bg: _("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: s
        }
      },
      _active: { bg: _("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: r = `${t}.500`,
    color: n = "white",
    hoverBg: o = `${t}.600`,
    activeBg: i = `${t}.700`
  } = Vg[t] ?? {}, a = _(r, `${t}.200`)(e);
  return {
    bg: a,
    color: _(n, "gray.800")(e),
    _hover: {
      bg: _(o, `${t}.300`)(e),
      _disabled: {
        bg: a
      }
    },
    _active: { bg: _(i, `${t}.400`)(e) }
  };
}, Fg = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: _(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: _(`${t}.700`, `${t}.500`)(e)
    }
  };
}, Dg = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, Ig = {
  ghost: pu,
  outline: Bg,
  solid: $g,
  link: Fg,
  unstyled: Dg
}, zg = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, Lg = {
  baseStyle: Mg,
  variants: Ig,
  sizes: zg,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Lt, defineMultiStyleConfig: Og } = q(m0.keys), Qn = W("card-bg"), ir = W("card-padding"), jg = Lt({
  container: {
    [Qn.variable]: "chakra-body-bg",
    backgroundColor: Qn.reference,
    color: "chakra-body-text"
  },
  body: {
    padding: ir.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: ir.reference
  },
  footer: {
    padding: ir.reference
  }
}), Ng = {
  sm: Lt({
    container: {
      borderRadius: "base",
      [ir.variable]: "space.3"
    }
  }),
  md: Lt({
    container: {
      borderRadius: "md",
      [ir.variable]: "space.5"
    }
  }),
  lg: Lt({
    container: {
      borderRadius: "xl",
      [ir.variable]: "space.7"
    }
  })
}, Wg = {
  elevated: Lt({
    container: {
      boxShadow: "base",
      _dark: {
        [Qn.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Lt({
    container: {
      borderWidth: "1px",
      borderColor: "chakra-border-color"
    }
  }),
  filled: Lt({
    container: {
      [Qn.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: { padding: 0 },
    header: { padding: 0 },
    footer: { padding: 0 }
  }
}, Hg = Og({
  baseStyle: jg,
  variants: Wg,
  sizes: Ng,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), { definePartsStyle: jn, defineMultiStyleConfig: Ug } = q(Xm.keys), Mr = W("checkbox-size"), Gg = (e) => {
  const { colorScheme: t } = e;
  return {
    w: Mr.reference,
    h: Mr.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: _(`${t}.500`, `${t}.200`)(e),
      borderColor: _(`${t}.500`, `${t}.200`)(e),
      color: _("white", "gray.900")(e),
      _hover: {
        bg: _(`${t}.600`, `${t}.300`)(e),
        borderColor: _(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: _("gray.200", "transparent")(e),
        bg: _("gray.200", "whiteAlpha.300")(e),
        color: _("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: _(`${t}.500`, `${t}.200`)(e),
      borderColor: _(`${t}.500`, `${t}.200`)(e),
      color: _("white", "gray.900")(e)
    },
    _disabled: {
      bg: _("gray.100", "whiteAlpha.100")(e),
      borderColor: _("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: _("red.500", "red.300")(e)
    }
  };
}, qg = {
  _disabled: { cursor: "not-allowed" }
}, Kg = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, Xg = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, Yg = jn((e) => ({
  icon: Xg,
  container: qg,
  control: ye(Gg, e),
  label: Kg
})), Zg = {
  sm: jn({
    control: { [Mr.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: jn({
    control: { [Mr.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: jn({
    control: { [Mr.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Jn = Ug({
  baseStyle: Yg,
  sizes: Zg,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Br = ie("close-button-size"), xr = ie("close-button-bg"), Qg = {
  w: [Br.reference],
  h: [Br.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [xr.variable]: "colors.blackAlpha.100",
    _dark: {
      [xr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [xr.variable]: "colors.blackAlpha.200",
    _dark: {
      [xr.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: xr.reference
}, Jg = {
  lg: {
    [Br.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Br.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Br.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, eb = {
  baseStyle: Qg,
  sizes: Jg,
  defaultProps: {
    size: "md"
  }
}, { variants: tb, defaultProps: rb } = Rr, nb = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
}, ob = {
  baseStyle: nb,
  variants: tb,
  defaultProps: rb
}, ib = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, ab = {
  baseStyle: ib
}, sb = {
  opacity: 0.6,
  borderColor: "inherit"
}, lb = {
  borderStyle: "solid"
}, cb = {
  borderStyle: "dashed"
}, ub = {
  solid: lb,
  dashed: cb
}, db = {
  baseStyle: sb,
  variants: ub,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: ji, defineMultiStyleConfig: fb } = q(Ym.keys), oi = W("drawer-bg"), ii = W("drawer-box-shadow");
function Yt(e) {
  return ji(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var hb = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
}, pb = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, mb = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [oi.variable]: "colors.white",
    [ii.variable]: "shadows.lg",
    _dark: {
      [oi.variable]: "colors.gray.700",
      [ii.variable]: "shadows.dark-lg"
    },
    bg: oi.reference,
    boxShadow: ii.reference
  };
}, gb = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, bb = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, yb = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, vb = {
  px: "6",
  py: "4"
}, Sb = ji((e) => ({
  overlay: hb,
  dialogContainer: pb,
  dialog: ye(mb, e),
  header: gb,
  closeButton: bb,
  body: yb,
  footer: vb
})), xb = {
  xs: Yt("xs"),
  sm: Yt("md"),
  md: Yt("lg"),
  lg: Yt("2xl"),
  xl: Yt("4xl"),
  full: Yt("full")
}, kb = fb({
  baseStyle: Sb,
  sizes: xb,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: wb, defineMultiStyleConfig: Cb } = q(Zm.keys), Tb = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, Pb = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Ab = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Eb = wb({
  preview: Tb,
  input: Pb,
  textarea: Ab
}), _b = Cb({
  baseStyle: Eb
}), { definePartsStyle: Rb, defineMultiStyleConfig: Mb } = q(Qm.keys), ar = W("form-control-color"), Bb = {
  marginStart: "1",
  [ar.variable]: "colors.red.500",
  _dark: {
    [ar.variable]: "colors.red.300"
  },
  color: ar.reference
}, Vb = {
  mt: "2",
  [ar.variable]: "colors.gray.600",
  _dark: {
    [ar.variable]: "colors.whiteAlpha.600"
  },
  color: ar.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, $b = Rb({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: Bb,
  helperText: Vb
}), Fb = Mb({
  baseStyle: $b
}), { definePartsStyle: Db, defineMultiStyleConfig: Ib } = q(Jm.keys), sr = W("form-error-color"), zb = {
  [sr.variable]: "colors.red.500",
  _dark: {
    [sr.variable]: "colors.red.300"
  },
  color: sr.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, Lb = {
  marginEnd: "0.5em",
  [sr.variable]: "colors.red.500",
  _dark: {
    [sr.variable]: "colors.red.300"
  },
  color: sr.reference
}, Ob = Db({
  text: zb,
  icon: Lb
}), jb = Ib({
  baseStyle: Ob
}), Nb = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, Wb = {
  baseStyle: Nb
}, Hb = {
  fontFamily: "heading",
  fontWeight: "bold"
}, Ub = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, Gb = {
  baseStyle: Hb,
  sizes: Ub,
  defaultProps: {
    size: "xl"
  }
}, { definePartsStyle: at, defineMultiStyleConfig: qb } = q(e0.keys), Kb = at({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), yt = {
  lg: {
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  }
}, Xb = {
  lg: at({
    field: yt.lg,
    addon: yt.lg
  }),
  md: at({
    field: yt.md,
    addon: yt.md
  }),
  sm: at({
    field: yt.sm,
    addon: yt.sm
  }),
  xs: at({
    field: yt.xs,
    addon: yt.xs
  })
};
function Ta(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || _("blue.500", "blue.300")(e),
    errorBorderColor: r || _("red.500", "red.300")(e)
  };
}
var Yb = at((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Ta(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: _("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: be(t, n),
        boxShadow: `0 0 0 1px ${be(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: be(t, r),
        boxShadow: `0 0 0 1px ${be(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: _("inherit", "whiteAlpha.50")(e),
      bg: _("gray.100", "whiteAlpha.300")(e)
    }
  };
}), Zb = at((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Ta(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: _("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: _("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: be(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: be(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: _("gray.100", "whiteAlpha.50")(e)
    }
  };
}), Qb = at((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Ta(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: be(t, n),
        boxShadow: `0px 1px 0px 0px ${be(t, n)}`
      },
      _focusVisible: {
        borderColor: be(t, r),
        boxShadow: `0px 1px 0px 0px ${be(t, r)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), Jb = at({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), ey = {
  outline: Yb,
  filled: Zb,
  flushed: Qb,
  unstyled: Jb
}, z = qb({
  baseStyle: Kb,
  sizes: Xb,
  variants: ey,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), ai = W("kbd-bg"), ty = {
  [ai.variable]: "colors.gray.100",
  _dark: {
    [ai.variable]: "colors.whiteAlpha.100"
  },
  bg: ai.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, ry = {
  baseStyle: ty
}, ny = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, oy = {
  baseStyle: ny
}, { defineMultiStyleConfig: iy, definePartsStyle: ay } = q(t0.keys), sy = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, ly = ay({
  icon: sy
}), cy = iy({
  baseStyle: ly
}), { defineMultiStyleConfig: uy, definePartsStyle: dy } = q(r0.keys), Ge = W("menu-bg"), si = W("menu-shadow"), fy = {
  [Ge.variable]: "#fff",
  [si.variable]: "shadows.sm",
  _dark: {
    [Ge.variable]: "colors.gray.700",
    [si.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Ge.reference,
  boxShadow: si.reference
}, hy = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Ge.variable]: "colors.gray.100",
    _dark: {
      [Ge.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Ge.variable]: "colors.gray.200",
    _dark: {
      [Ge.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Ge.variable]: "colors.gray.100",
    _dark: {
      [Ge.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Ge.reference
}, py = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, my = {
  opacity: 0.6
}, gy = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, by = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, yy = dy({
  button: by,
  list: fy,
  item: hy,
  groupTitle: py,
  command: my,
  divider: gy
}), vy = uy({
  baseStyle: yy
}), { defineMultiStyleConfig: Sy, definePartsStyle: Ni } = q(n0.keys), xy = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, ky = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto"
  };
}, wy = (e) => {
  const { scrollBehavior: t } = e;
  return {
    borderRadius: "md",
    bg: _("white", "gray.700")(e),
    color: "inherit",
    my: "16",
    zIndex: "modal",
    maxH: t === "inside" ? "calc(100% - 7.5rem)" : void 0,
    boxShadow: _("lg", "dark-lg")(e)
  };
}, Cy = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Ty = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Py = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, Ay = {
  px: "6",
  py: "4"
}, Ey = Ni((e) => ({
  overlay: xy,
  dialogContainer: ye(ky, e),
  dialog: ye(wy, e),
  header: Cy,
  closeButton: Ty,
  body: ye(Py, e),
  footer: Ay
}));
function Ie(e) {
  return Ni(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var _y = {
  xs: Ie("xs"),
  sm: Ie("sm"),
  md: Ie("md"),
  lg: Ie("lg"),
  xl: Ie("xl"),
  "2xl": Ie("2xl"),
  "3xl": Ie("3xl"),
  "4xl": Ie("4xl"),
  "5xl": Ie("5xl"),
  "6xl": Ie("6xl"),
  full: Ie("full")
}, Ry = Sy({
  baseStyle: Ey,
  sizes: _y,
  defaultProps: { size: "md" }
}), My = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, mu = My, { defineMultiStyleConfig: By, definePartsStyle: gu } = q(o0.keys), Pa = ie("number-input-stepper-width"), bu = ie("number-input-input-padding"), Vy = it(Pa).add("0.5rem").toString(), li = ie("number-input-bg"), ci = ie("number-input-color"), ui = ie("number-input-border-color"), $y = {
  [Pa.variable]: "sizes.6",
  [bu.variable]: Vy
}, Fy = (e) => {
  var t;
  return ((t = ye(z.baseStyle, e)) == null ? void 0 : t.field) ?? {};
}, Dy = {
  width: Pa.reference
}, Iy = {
  borderStart: "1px solid",
  borderStartColor: ui.reference,
  color: ci.reference,
  bg: li.reference,
  [ci.variable]: "colors.chakra-body-text",
  [ui.variable]: "colors.chakra-border-color",
  _dark: {
    [ci.variable]: "colors.whiteAlpha.800",
    [ui.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [li.variable]: "colors.gray.200",
    _dark: {
      [li.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, zy = gu((e) => ({
  root: $y,
  field: ye(Fy, e) ?? {},
  stepperGroup: Dy,
  stepper: Iy
}));
function En(e) {
  var t, r;
  const n = (t = z.sizes) == null ? void 0 : t[e], o = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = ((r = n.field) == null ? void 0 : r.fontSize) ?? "md", a = mu.fontSizes[i];
  return gu({
    field: {
      ...n.field,
      paddingInlineEnd: bu.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: it(a).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: o[e]
      },
      _last: {
        borderBottomEndRadius: o[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var Ly = {
  xs: En("xs"),
  sm: En("sm"),
  md: En("md"),
  lg: En("lg")
}, Oy = By({
  baseStyle: zy,
  sizes: Ly,
  variants: z.variants,
  defaultProps: z.defaultProps
}), Xs, jy = {
  ...(Xs = z.baseStyle) == null ? void 0 : Xs.field,
  textAlign: "center"
}, Ny = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, Ys, Wy = {
  outline: (e) => {
    var t, r;
    return ((r = ye((t = z.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) ?? {};
  },
  flushed: (e) => {
    var t, r;
    return ((r = ye((t = z.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) ?? {};
  },
  filled: (e) => {
    var t, r;
    return ((r = ye((t = z.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) ?? {};
  },
  unstyled: ((Ys = z.variants) == null ? void 0 : Ys.unstyled.field) ?? {}
}, Hy = {
  baseStyle: jy,
  sizes: Ny,
  variants: Wy,
  defaultProps: z.defaultProps
}, { defineMultiStyleConfig: Uy, definePartsStyle: Gy } = q(i0.keys), _n = ie("popper-bg"), qy = ie("popper-arrow-bg"), Zs = ie("popper-arrow-shadow-color"), Ky = { zIndex: 10 }, Xy = {
  [_n.variable]: "colors.white",
  bg: _n.reference,
  [qy.variable]: _n.reference,
  [Zs.variable]: "colors.gray.200",
  _dark: {
    [_n.variable]: "colors.gray.700",
    [Zs.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, Yy = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, Zy = {
  px: 3,
  py: 2
}, Qy = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, Jy = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, ev = Gy({
  popper: Ky,
  content: Xy,
  header: Yy,
  body: Zy,
  footer: Qy,
  closeButton: Jy
}), tv = Uy({
  baseStyle: ev
}), { defineMultiStyleConfig: rv, definePartsStyle: Pr } = q(a0.keys), nv = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = _(Ws(), Ws("1rem", "rgba(0,0,0,0.1)"))(e), a = _(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${be(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, ov = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, iv = (e) => ({
  bg: _("gray.100", "whiteAlpha.300")(e)
}), av = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...nv(e)
}), sv = Pr((e) => ({
  label: ov,
  filledTrack: av(e),
  track: iv(e)
})), lv = {
  xs: Pr({
    track: { h: "1" }
  }),
  sm: Pr({
    track: { h: "2" }
  }),
  md: Pr({
    track: { h: "3" }
  }),
  lg: Pr({
    track: { h: "4" }
  })
}, cv = rv({
  sizes: lv,
  baseStyle: sv,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: uv, definePartsStyle: Nn } = q(s0.keys), dv = (e) => {
  var t;
  const r = (t = ye(Jn.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...r,
    borderRadius: "full",
    _checked: {
      ...r == null ? void 0 : r._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, fv = Nn((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Jn).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Jn).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: dv(e)
  };
}), hv = {
  md: Nn({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Nn({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Nn({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, pv = uv({
  baseStyle: fv,
  sizes: hv,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: mv, definePartsStyle: gv } = q(l0.keys), Rn = W("select-bg"), Qs, bv = {
  ...(Qs = z.baseStyle) == null ? void 0 : Qs.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Rn.reference,
  [Rn.variable]: "colors.white",
  _dark: {
    [Rn.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Rn.reference
  }
}, yv = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, vv = gv({
  field: bv,
  icon: yv
}), Mn = {
  paddingInlineEnd: "8"
}, Js, el, tl, rl, nl, ol, il, al, Sv = {
  lg: {
    ...(Js = z.sizes) == null ? void 0 : Js.lg,
    field: {
      ...(el = z.sizes) == null ? void 0 : el.lg.field,
      ...Mn
    }
  },
  md: {
    ...(tl = z.sizes) == null ? void 0 : tl.md,
    field: {
      ...(rl = z.sizes) == null ? void 0 : rl.md.field,
      ...Mn
    }
  },
  sm: {
    ...(nl = z.sizes) == null ? void 0 : nl.sm,
    field: {
      ...(ol = z.sizes) == null ? void 0 : ol.sm.field,
      ...Mn
    }
  },
  xs: {
    ...(il = z.sizes) == null ? void 0 : il.xs,
    field: {
      ...(al = z.sizes) == null ? void 0 : al.xs.field,
      ...Mn
    },
    icon: {
      insetEnd: "1"
    }
  }
}, xv = mv({
  baseStyle: vv,
  sizes: Sv,
  variants: z.variants,
  defaultProps: z.defaultProps
}), di = W("skeleton-start-color"), fi = W("skeleton-end-color"), kv = {
  [di.variable]: "colors.gray.100",
  [fi.variable]: "colors.gray.400",
  _dark: {
    [di.variable]: "colors.gray.800",
    [fi.variable]: "colors.gray.600"
  },
  background: di.reference,
  borderColor: fi.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, wv = {
  baseStyle: kv
}, hi = W("skip-link-bg"), Cv = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [hi.variable]: "colors.white",
    _dark: {
      [hi.variable]: "colors.gray.700"
    },
    bg: hi.reference
  }
}, Tv = {
  baseStyle: Cv
}, { defineMultiStyleConfig: Pv, definePartsStyle: _o } = q(c0.keys), Gr = W("slider-thumb-size"), qr = W("slider-track-size"), xt = W("slider-bg"), Av = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...wa({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, Ev = (e) => ({
  ...wa({
    orientation: e.orientation,
    horizontal: { h: qr.reference },
    vertical: { w: qr.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [xt.variable]: "colors.gray.200",
  _dark: {
    [xt.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [xt.variable]: "colors.gray.300",
    _dark: {
      [xt.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: xt.reference
}), _v = (e) => {
  const { orientation: t } = e;
  return {
    ...wa({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: Gr.reference,
    h: Gr.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, Rv = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [xt.variable]: `colors.${t}.500`,
    _dark: {
      [xt.variable]: `colors.${t}.200`
    },
    bg: xt.reference
  };
}, Mv = _o((e) => ({
  container: Av(e),
  track: Ev(e),
  thumb: _v(e),
  filledTrack: Rv(e)
})), Bv = _o({
  container: {
    [Gr.variable]: "sizes.4",
    [qr.variable]: "sizes.1"
  }
}), Vv = _o({
  container: {
    [Gr.variable]: "sizes.3.5",
    [qr.variable]: "sizes.1"
  }
}), $v = _o({
  container: {
    [Gr.variable]: "sizes.2.5",
    [qr.variable]: "sizes.0.5"
  }
}), Fv = {
  lg: Bv,
  md: Vv,
  sm: $v
}, Dv = Pv({
  baseStyle: Mv,
  sizes: Fv,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Ft = ie("spinner-size"), Iv = {
  width: [Ft.reference],
  height: [Ft.reference]
}, zv = {
  xs: {
    [Ft.variable]: "sizes.3"
  },
  sm: {
    [Ft.variable]: "sizes.4"
  },
  md: {
    [Ft.variable]: "sizes.6"
  },
  lg: {
    [Ft.variable]: "sizes.8"
  },
  xl: {
    [Ft.variable]: "sizes.12"
  }
}, Lv = {
  baseStyle: Iv,
  sizes: zv,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: Ov, definePartsStyle: yu } = q(u0.keys), jv = {
  fontWeight: "medium"
}, Nv = {
  opacity: 0.8,
  marginBottom: "2"
}, Wv = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, Hv = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, Uv = yu({
  container: {},
  label: jv,
  helpText: Nv,
  number: Wv,
  icon: Hv
}), Gv = {
  md: yu({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, qv = Ov({
  baseStyle: Uv,
  sizes: Gv,
  defaultProps: {
    size: "md"
  }
}), { defineMultiStyleConfig: Kv, definePartsStyle: Wn } = q(d0.keys), Vr = ie("switch-track-width"), Ot = ie("switch-track-height"), pi = ie("switch-track-diff"), Xv = it.subtract(Vr, Ot), Wi = ie("switch-thumb-x"), kr = ie("switch-bg"), Yv = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [Vr.reference],
    height: [Ot.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [kr.variable]: "colors.gray.300",
    _dark: {
      [kr.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [kr.variable]: `colors.${t}.500`,
      _dark: {
        [kr.variable]: `colors.${t}.200`
      }
    },
    bg: kr.reference
  };
}, Zv = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Ot.reference],
  height: [Ot.reference],
  _checked: {
    transform: `translateX(${Wi.reference})`
  }
}, Qv = Wn((e) => ({
  container: {
    [pi.variable]: Xv,
    [Wi.variable]: pi.reference,
    _rtl: {
      [Wi.variable]: it(pi).negate().toString()
    }
  },
  track: Yv(e),
  thumb: Zv
})), Jv = {
  sm: Wn({
    container: {
      [Vr.variable]: "1.375rem",
      [Ot.variable]: "sizes.3"
    }
  }),
  md: Wn({
    container: {
      [Vr.variable]: "1.875rem",
      [Ot.variable]: "sizes.4"
    }
  }),
  lg: Wn({
    container: {
      [Vr.variable]: "2.875rem",
      [Ot.variable]: "sizes.6"
    }
  })
}, e1 = Kv({
  baseStyle: Qv,
  sizes: Jv,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: t1, definePartsStyle: lr } = q(f0.keys), r1 = lr({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), eo = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, n1 = lr((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: _("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: _(`${t}.100`, `${t}.700`)(e),
      ...eo
    },
    td: {
      borderBottom: "1px",
      borderColor: _(`${t}.100`, `${t}.700`)(e),
      ...eo
    },
    caption: {
      color: _("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), o1 = lr((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: _("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: _(`${t}.100`, `${t}.700`)(e),
      ...eo
    },
    td: {
      borderBottom: "1px",
      borderColor: _(`${t}.100`, `${t}.700`)(e),
      ...eo
    },
    caption: {
      color: _("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: _(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: _(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), i1 = {
  simple: n1,
  striped: o1,
  unstyled: {}
}, a1 = {
  sm: lr({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: lr({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: lr({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, s1 = t1({
  baseStyle: r1,
  variants: i1,
  sizes: a1,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Se = W("tabs-color"), Le = W("tabs-bg"), Bn = W("tabs-border-color"), { defineMultiStyleConfig: l1, definePartsStyle: Qe } = q(h0.keys), c1 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, u1 = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, d1 = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, f1 = {
  p: 4
}, h1 = Qe((e) => ({
  root: c1(e),
  tab: u1(e),
  tablist: d1(e),
  tabpanel: f1
})), p1 = {
  sm: Qe({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Qe({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Qe({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, m1 = Qe((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = r === "vertical" ? "borderStart" : "borderBottom", i = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [i]: "-2px",
      _selected: {
        [Se.variable]: `colors.${t}.600`,
        _dark: {
          [Se.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [Le.variable]: "colors.gray.200",
        _dark: {
          [Le.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Se.reference,
      bg: Le.reference
    }
  };
}), g1 = Qe((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Bn.reference]: "transparent",
      _selected: {
        [Se.variable]: `colors.${t}.600`,
        [Bn.variable]: "colors.white",
        _dark: {
          [Se.variable]: `colors.${t}.300`,
          [Bn.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Bn.reference
      },
      color: Se.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), b1 = Qe((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [Le.variable]: "colors.gray.50",
      _dark: {
        [Le.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [Le.variable]: "colors.white",
        [Se.variable]: `colors.${t}.600`,
        _dark: {
          [Le.variable]: "colors.gray.800",
          [Se.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Se.reference,
      bg: Le.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), y1 = Qe((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: be(r, `${t}.700`),
        bg: be(r, `${t}.100`)
      }
    }
  };
}), v1 = Qe((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Se.variable]: "colors.gray.600",
      _dark: {
        [Se.variable]: "inherit"
      },
      _selected: {
        [Se.variable]: "colors.white",
        [Le.variable]: `colors.${t}.600`,
        _dark: {
          [Se.variable]: "colors.gray.800",
          [Le.variable]: `colors.${t}.300`
        }
      },
      color: Se.reference,
      bg: Le.reference
    }
  };
}), S1 = Qe({}), x1 = {
  line: m1,
  enclosed: g1,
  "enclosed-colored": b1,
  "soft-rounded": y1,
  "solid-rounded": v1,
  unstyled: S1
}, k1 = l1({
  baseStyle: h1,
  sizes: p1,
  variants: x1,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: w1, definePartsStyle: jt } = q(p0.keys), C1 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  borderRadius: "md",
  _focusVisible: {
    boxShadow: "outline"
  }
}, T1 = {
  lineHeight: 1.2,
  overflow: "visible"
}, P1 = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, A1 = jt({
  container: C1,
  label: T1,
  closeButton: P1
}), E1 = {
  sm: jt({
    container: {
      minH: "5",
      minW: "5",
      fontSize: "xs",
      px: "2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: jt({
    container: {
      minH: "6",
      minW: "6",
      fontSize: "sm",
      px: "2"
    }
  }),
  lg: jt({
    container: {
      minH: "8",
      minW: "8",
      fontSize: "md",
      px: "3"
    }
  })
}, _1 = {
  subtle: jt((e) => {
    var t;
    return {
      container: (t = Rr.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: jt((e) => {
    var t;
    return {
      container: (t = Rr.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: jt((e) => {
    var t;
    return {
      container: (t = Rr.variants) == null ? void 0 : t.outline(e)
    };
  })
}, R1 = w1({
  variants: _1,
  baseStyle: A1,
  sizes: E1,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), sl, M1 = {
  ...(sl = z.baseStyle) == null ? void 0 : sl.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, ll, B1 = {
  outline: (e) => {
    var t;
    return ((t = z.variants) == null ? void 0 : t.outline(e).field) ?? {};
  },
  flushed: (e) => {
    var t;
    return ((t = z.variants) == null ? void 0 : t.flushed(e).field) ?? {};
  },
  filled: (e) => {
    var t;
    return ((t = z.variants) == null ? void 0 : t.filled(e).field) ?? {};
  },
  unstyled: ((ll = z.variants) == null ? void 0 : ll.unstyled.field) ?? {}
}, cl, ul, dl, fl, V1 = {
  xs: ((cl = z.sizes) == null ? void 0 : cl.xs.field) ?? {},
  sm: ((ul = z.sizes) == null ? void 0 : ul.sm.field) ?? {},
  md: ((dl = z.sizes) == null ? void 0 : dl.md.field) ?? {},
  lg: ((fl = z.sizes) == null ? void 0 : fl.lg.field) ?? {}
}, $1 = {
  baseStyle: M1,
  sizes: V1,
  variants: B1,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Vn = ie("tooltip-bg"), mi = ie("tooltip-fg"), F1 = ie("popper-arrow-bg"), D1 = {
  bg: Vn.reference,
  color: mi.reference,
  [Vn.variable]: "colors.gray.700",
  [mi.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Vn.variable]: "colors.gray.300",
    [mi.variable]: "colors.gray.900"
  },
  [F1.variable]: Vn.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, I1 = {
  baseStyle: D1
}, z1 = {
  Accordion: tg,
  Alert: cg,
  Avatar: Sg,
  Badge: Rr,
  Breadcrumb: Rg,
  Button: Lg,
  Checkbox: Jn,
  CloseButton: eb,
  Code: ob,
  Container: ab,
  Divider: db,
  Drawer: kb,
  Editable: _b,
  Form: Fb,
  FormError: jb,
  FormLabel: Wb,
  Heading: Gb,
  Input: z,
  Kbd: ry,
  Link: oy,
  List: cy,
  Menu: vy,
  Modal: Ry,
  NumberInput: Oy,
  PinInput: Hy,
  Popover: tv,
  Progress: cv,
  Radio: pv,
  Select: xv,
  Skeleton: wv,
  SkipLink: Tv,
  Slider: Dv,
  Spinner: Lv,
  Stat: qv,
  Switch: e1,
  Table: s1,
  Tabs: k1,
  Tag: R1,
  Textarea: $1,
  Tooltip: I1,
  Card: Hg
}, L1 = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, O1 = L1, j1 = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, N1 = j1, W1 = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, H1 = W1, U1 = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, G1 = U1, q1 = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, K1 = q1, X1 = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, Y1 = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, Z1 = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, Q1 = {
  property: X1,
  easing: Y1,
  duration: Z1
}, J1 = Q1, eS = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, tS = eS, rS = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, nS = rS, oS = {
  breakpoints: N1,
  zIndices: tS,
  radii: G1,
  blur: nS,
  colors: H1,
  ...mu,
  sizes: fu,
  shadows: K1,
  space: du,
  borders: O1,
  transition: J1
}, iS = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, aS = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
      wordWrap: "break-word"
    }
  }
}, sS = "ltr", lS = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, cS = {
  semanticTokens: iS,
  direction: sS,
  ...oS,
  components: z1,
  styles: aS,
  config: lS
}, uS = typeof Element < "u", dS = typeof Map == "function", fS = typeof Set == "function", hS = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Hn(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!Hn(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (dS && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Hn(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (fS && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (hS && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n]))
        return !1;
    if (uS && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Hn(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var pS = function(t, r) {
  try {
    return Hn(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
function mS() {
  const e = Z(Ur);
  if (!e)
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  return e;
}
function gS() {
  const e = ha(), t = mS();
  return { ...e, theme: t };
}
function bS(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = fe(() => wp(r), [r]);
  return /* @__PURE__ */ C.createElement(Rm, {
    theme: o
  }, /* @__PURE__ */ C.createElement(yS, {
    root: t
  }), n);
}
function yS({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ C.createElement(Ao, {
    styles: (r) => ({ [t]: r.__cssVars })
  });
}
Im({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function vS() {
  const { colorMode: e } = ha();
  return /* @__PURE__ */ C.createElement(Ao, {
    styles: (t) => {
      const r = eu(t, "styles.global"), n = nu(r, { theme: t, colorMode: e });
      return n ? Dc(n)(t) : void 0;
    }
  });
}
var SS = /* @__PURE__ */ new Set([
  ...Cp,
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
]), xS = /* @__PURE__ */ new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
function kS(e) {
  return xS.has(e) || !SS.has(e);
}
var wS = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = tu(a, (d, h) => Pp(h)), l = nu(e, t), c = Object.assign({}, o, l, ru(s), i), u = Dc(c)(t.theme);
  return n ? [u, n] : u;
};
function gi(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = kS);
  const o = wS({ baseStyle: r }), i = zi(e, n)(o);
  return C.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = ha();
    return C.createElement(i, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function ft(e) {
  return la(e);
}
function vu(e, t = {}) {
  const { styleConfig: r, ...n } = t, { theme: o, colorMode: i } = gS(), a = e ? eu(o, `components.${e}`) : void 0, s = r || a, l = Xe({ theme: o, colorMode: i }, (s == null ? void 0 : s.defaultProps) ?? {}, ru($m(n, ["children"]))), c = xe({});
  if (s) {
    const d = Dp(s)(l);
    pS(c.current, d) || (c.current = d);
  }
  return c.current;
}
function Aa(e, t = {}) {
  return vu(e, t);
}
function CS(e, t = {}) {
  return vu(e, t);
}
function TS() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(gi, {
    apply(t, r, n) {
      return gi(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, gi(r)), e.get(r);
    }
  });
}
var me = TS();
function PS(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function tn(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: i
  } = e, a = Ve(void 0);
  a.displayName = t;
  function s() {
    var l;
    const c = Z(a);
    if (!c && r) {
      const u = new Error(i ?? PS(n, o));
      throw u.name = "ContextError", (l = Error.captureStackTrace) == null || l.call(Error, u, s), u;
    }
    return c;
  }
  return [a.Provider, s, a];
}
function AS(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function ES(...e) {
  return (t) => {
    e.forEach((r) => {
      AS(r, t);
    });
  };
}
function _S(...e) {
  return fe(() => ES(...e), e);
}
var RS = (...e) => e.filter(Boolean).join(" "), hl = {
  path: /* @__PURE__ */ C.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ C.createElement("path", {
    strokeLinecap: "round",
    fill: "none",
    d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
  }), /* @__PURE__ */ C.createElement("path", {
    fill: "currentColor",
    strokeLinecap: "round",
    d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
  }), /* @__PURE__ */ C.createElement("circle", {
    fill: "none",
    strokeMiterlimit: "10",
    cx: "12",
    cy: "12",
    r: "11.25"
  })),
  viewBox: "0 0 24 24"
}, rn = ft((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...c
  } = e, u = RS("chakra-icon", s), d = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l
  }, h = {
    ref: t,
    focusable: i,
    className: u,
    __css: d
  }, p = n ?? hl.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ C.createElement(me.svg, {
      as: r,
      ...h,
      ...c
    });
  const b = a ?? hl.path;
  return /* @__PURE__ */ C.createElement(me.svg, {
    verticalAlign: "middle",
    viewBox: p,
    ...h,
    ...c
  }, b);
});
rn.displayName = "Icon";
function MS(e, t = []) {
  const r = xe(e);
  return ve(() => {
    r.current = e;
  }), Nt((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
const Su = Ve({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Ro = Ve({}), nn = Ve(null), Mo = typeof document < "u", to = Mo ? sa : ve, xu = Ve({ strict: !1 });
function BS(e, t, r, n) {
  const { visualElement: o } = Z(Ro), i = Z(xu), a = Z(nn), s = Z(Su).reducedMotion, l = xe();
  n = n || i.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  return Tc(() => {
    c && c.update(r, a);
  }), to(() => {
    c && c.render();
  }), ve(() => {
    c && c.updateFeatures();
  }), (window.HandoffAppearAnimations ? to : ve)(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), c;
}
function Jt(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function VS(e, t, r) {
  return Nt(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Jt(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Kr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Bo(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Ea = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], _a = ["initial", ...Ea];
function Vo(e) {
  return Bo(e.animate) || _a.some((t) => Kr(e[t]));
}
function ku(e) {
  return !!(Vo(e) || e.variants);
}
function $S(e, t) {
  if (Vo(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Kr(r) ? r : void 0,
      animate: Kr(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function FS(e) {
  const { initial: t, animate: r } = $S(e, Z(Ro));
  return fe(() => ({ initial: t, animate: r }), [pl(t), pl(r)]);
}
function pl(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ml = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Xr = {};
for (const e in ml)
  Xr[e] = {
    isEnabled: (t) => ml[e].some((r) => !!t[r])
  };
function DS(e) {
  for (const t in e)
    Xr[t] = {
      ...Xr[t],
      ...e[t]
    };
}
function Ra(e) {
  const t = xe(null);
  return t.current === null && (t.current = e()), t.current;
}
const $r = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
let IS = 1;
function zS() {
  return Ra(() => {
    if ($r.hasEverUpdated)
      return IS++;
  });
}
const Ma = Ve({}), wu = Ve({}), LS = Symbol.for("motionComponentSymbol");
function OS({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && DS(e);
  function i(s, l) {
    let c;
    const u = {
      ...Z(Su),
      ...s,
      layoutId: jS(s)
    }, { isStatic: d } = u, h = FS(s), p = d ? void 0 : zS(), b = n(s, d);
    if (!d && Mo) {
      h.visualElement = BS(o, b, u, t);
      const y = Z(wu), x = Z(xu).strict;
      h.visualElement && (c = h.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        x,
        e,
        p,
        y
      ));
    }
    return ce.createElement(
      Ro.Provider,
      { value: h },
      c && h.visualElement ? ce.createElement(c, { visualElement: h.visualElement, ...u }) : null,
      r(o, s, p, VS(b, h.visualElement, l), b, d, h.visualElement)
    );
  }
  const a = la(i);
  return a[LS] = o, a;
}
function jS({ layoutId: e }) {
  const t = Z(Ma).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function NS(e) {
  function t(n, o = {}) {
    return OS(e(n, o));
  }
  if (typeof Proxy > "u")
    return t;
  const r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
  });
}
const WS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ba(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(WS.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const ro = {};
function HS(e) {
  Object.assign(ro, e);
}
const on = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ht = new Set(on);
function Cu(e, { layout: t, layoutId: r }) {
  return Ht.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!ro[e] || e === "opacity");
}
const we = (e) => !!(e && e.getVelocity), US = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, GS = on.length;
function qS(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < GS; a++) {
    const s = on[a];
    if (e[s] !== void 0) {
      const l = US[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const Tu = (e) => (t) => typeof t == "string" && t.startsWith(e), Pu = Tu("--"), Hi = Tu("var(--"), KS = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, XS = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Wt = (e, t, r) => Math.min(Math.max(r, e), t), Ut = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Fr = {
  ...Ut,
  transform: (e) => Wt(0, 1, e)
}, $n = {
  ...Ut,
  default: 1
}, Dr = (e) => Math.round(e * 1e5) / 1e5, $o = /(-)?([\d]*\.?[\d])+/g, Au = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, YS = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function an(e) {
  return typeof e == "string";
}
const sn = (e) => ({
  test: (t) => an(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), vt = sn("deg"), Je = sn("%"), R = sn("px"), ZS = sn("vh"), QS = sn("vw"), gl = {
  ...Je,
  parse: (e) => Je.parse(e) / 100,
  transform: (e) => Je.transform(e * 100)
}, bl = {
  ...Ut,
  transform: Math.round
}, Eu = {
  // Border props
  borderWidth: R,
  borderTopWidth: R,
  borderRightWidth: R,
  borderBottomWidth: R,
  borderLeftWidth: R,
  borderRadius: R,
  radius: R,
  borderTopLeftRadius: R,
  borderTopRightRadius: R,
  borderBottomRightRadius: R,
  borderBottomLeftRadius: R,
  // Positioning props
  width: R,
  maxWidth: R,
  height: R,
  maxHeight: R,
  size: R,
  top: R,
  right: R,
  bottom: R,
  left: R,
  // Spacing props
  padding: R,
  paddingTop: R,
  paddingRight: R,
  paddingBottom: R,
  paddingLeft: R,
  margin: R,
  marginTop: R,
  marginRight: R,
  marginBottom: R,
  marginLeft: R,
  // Transform props
  rotate: vt,
  rotateX: vt,
  rotateY: vt,
  rotateZ: vt,
  scale: $n,
  scaleX: $n,
  scaleY: $n,
  scaleZ: $n,
  skew: vt,
  skewX: vt,
  skewY: vt,
  distance: R,
  translateX: R,
  translateY: R,
  translateZ: R,
  x: R,
  y: R,
  z: R,
  perspective: R,
  transformPerspective: R,
  opacity: Fr,
  originX: gl,
  originY: gl,
  originZ: R,
  // Misc
  zIndex: bl,
  // SVG
  fillOpacity: Fr,
  strokeOpacity: Fr,
  numOctaves: bl
};
function Va(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const h = t[d];
    if (Pu(d)) {
      i[d] = h;
      continue;
    }
    const p = Eu[d], b = XS(h, p);
    if (Ht.has(d)) {
      if (l = !0, a[d] = b, !u)
        continue;
      h !== (p.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = b) : o[d] = b;
  }
  if (t.transform || (l || n ? o.transform = qS(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: h = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${h} ${p}`;
  }
}
const $a = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function _u(e, t, r) {
  for (const n in t)
    !we(t[n]) && !Cu(n, r) && (e[n] = t[n]);
}
function JS({ transformTemplate: e }, t, r) {
  return fe(() => {
    const n = $a();
    return Va(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function ex(e, t, r) {
  const n = e.style || {}, o = {};
  return _u(o, n, e), Object.assign(o, JS(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function tx(e, t, r) {
  const n = {}, o = ex(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const rx = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function no(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || rx.has(e);
}
let Ru = (e) => !no(e);
function nx(e) {
  e && (Ru = (t) => t.startsWith("on") ? !no(t) : e(t));
}
try {
  nx(require("@emotion/is-prop-valid").default);
} catch {
}
function ox(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Ru(o) || r === !0 && no(o) || !t && !no(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function yl(e, t, r) {
  return typeof e == "string" ? e : R.transform(t + r * e);
}
function ix(e, t, r) {
  const n = yl(t, e.x, e.width), o = yl(r, e.y, e.height);
  return `${n} ${o}`;
}
const ax = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, sx = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function lx(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? ax : sx;
  e[i.offset] = R.transform(-n);
  const a = R.transform(t), s = R.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Fa(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: i,
  pathLength: a,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, d, h) {
  if (Va(e, c, u, h), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: b, dimensions: y } = e;
  p.transform && (y && (b.transform = p.transform), delete p.transform), y && (o !== void 0 || i !== void 0 || b.transform) && (b.transformOrigin = ix(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), a !== void 0 && lx(p, a, s, l, !1);
}
const Mu = () => ({
  ...$a(),
  attrs: {}
}), Da = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function cx(e, t, r, n) {
  const o = fe(() => {
    const i = Mu();
    return Fa(i, t, { enableHardwareAcceleration: !1 }, Da(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    _u(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function ux(e = !1) {
  return (r, n, o, i, { latestValues: a }, s) => {
    const c = (Ba(r) ? cx : tx)(n, a, s, r), d = {
      ...ox(n, typeof r == "string", e),
      ...c,
      ref: i
    }, { children: h } = n, p = fe(() => we(h) ? h.get() : h, [h]);
    return o && (d["data-projection-id"] = o), Er(r, {
      ...d,
      children: p
    });
  };
}
const Ia = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Bu(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const Vu = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function $u(e, t, r, n) {
  Bu(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(Vu.has(o) ? o : Ia(o), t.attrs[o]);
}
function za(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (we(r[o]) || t.style && we(t.style[o]) || Cu(o, e)) && (n[o] = r[o]);
  return n;
}
function Fu(e, t) {
  const r = za(e, t);
  for (const n in e)
    if (we(e[n]) || we(t[n])) {
      const o = on.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function La(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
const oo = (e) => Array.isArray(e), dx = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), fx = (e) => oo(e) ? e[e.length - 1] || 0 : e;
function Un(e) {
  const t = we(e) ? e.get() : e;
  return dx(t) ? t.toValue() : t;
}
function hx({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: px(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const Du = (e) => (t, r) => {
  const n = Z(Ro), o = Z(nn), i = () => hx(e, t, n, o);
  return r ? i() : Ra(i);
};
function px(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const h in i)
    o[h] = Un(i[h]);
  let { initial: a, animate: s } = e;
  const l = Vo(e), c = ku(e);
  t && c && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || a === !1;
  const d = u ? s : a;
  return d && typeof d != "boolean" && !Bo(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const b = La(e, p);
    if (!b)
      return;
    const { transitionEnd: y, transition: x, ...k } = b;
    for (const w in k) {
      let S = k[w];
      if (Array.isArray(S)) {
        const T = u ? S.length - 1 : 0;
        S = S[T];
      }
      S !== null && (o[w] = S);
    }
    for (const w in y)
      o[w] = y[w];
  }), o;
}
const mx = {
  useVisualState: Du({
    scrapeMotionValuesFromProps: Fu,
    createRenderState: Mu,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      try {
        r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
      } catch {
        r.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Fa(r, n, { enableHardwareAcceleration: !1 }, Da(t.tagName), e.transformTemplate), $u(t, r);
    }
  })
}, gx = {
  useVisualState: Du({
    scrapeMotionValuesFromProps: za,
    createRenderState: $a
  })
};
function bx(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Ba(e) ? mx : gx,
    preloadedFeatures: r,
    useRender: ux(t),
    createVisualElement: n,
    Component: e
  };
}
function st(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const Iu = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Fo(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const yx = (e) => (t) => Iu(t) && e(t, Fo(t));
function lt(e, t, r, n) {
  return st(e, t, yx(r), n);
}
const vx = (e, t) => (r) => t(e(r)), wt = (...e) => e.reduce(vx);
function zu(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const vl = zu("dragHorizontal"), Sl = zu("dragVertical");
function Lu(e) {
  let t = !1;
  if (e === "y")
    t = Sl();
  else if (e === "x")
    t = vl();
  else {
    const r = vl(), n = Sl();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function Ou() {
  const e = Lu(!0);
  return e ? (e(), !1) : !0;
}
class Pt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Sx(e) {
  let t = [], r = [], n = 0, o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = !1, u = !1) => {
      const d = u && o, h = d ? t : r;
      return c && a.add(l), h.indexOf(l) === -1 && (h.push(l), d && o && (n = t.length)), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      const c = r.indexOf(l);
      c !== -1 && r.splice(c, 1), a.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        i = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.length = 0, n = t.length, n)
        for (let c = 0; c < n; c++) {
          const u = t[c];
          u(l), a.has(u) && (s.schedule(u), e());
        }
      o = !1, i && (i = !1, s.process(l));
    }
  };
  return s;
}
const ae = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}, xx = 40;
let Ui = !0, Yr = !1;
const Do = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], cr = Do.reduce((e, t) => (e[t] = Sx(() => Yr = !0), e), {}), kx = (e) => cr[e].process(ae), ju = (e) => {
  Yr = !1, ae.delta = Ui ? 1e3 / 60 : Math.max(Math.min(e - ae.timestamp, xx), 1), ae.timestamp = e, ae.isProcessing = !0, Do.forEach(kx), ae.isProcessing = !1, Yr && (Ui = !1, requestAnimationFrame(ju));
}, wx = () => {
  Yr = !0, Ui = !0, ae.isProcessing || requestAnimationFrame(ju);
}, Q = Do.reduce((e, t) => {
  const r = cr[t];
  return e[t] = (n, o = !1, i = !1) => (Yr || wx(), r.schedule(n, o, i)), e;
}, {});
function dt(e) {
  Do.forEach((t) => cr[t].cancel(e));
}
function xl(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || Ou())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && Q.update(() => s[n](i, a));
  };
  return lt(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class Cx extends Pt {
  mount() {
    this.unmount = wt(xl(this.node, !0), xl(this.node, !1));
  }
  unmount() {
  }
}
class Tx extends Pt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = wt(st(this.node.current, "focus", () => this.onFocus()), st(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Nu = (e, t) => t ? e === t ? !0 : Nu(e, t.parentElement) : !1, oe = (e) => e;
function bi(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Fo(r));
}
class Px extends Pt {
  constructor() {
    super(...arguments), this.removeStartListeners = oe, this.removeEndListeners = oe, this.removeAccessibleListeners = oe, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = lt(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        Q.update(() => {
          Nu(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = lt(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = wt(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || bi("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && Q.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = st(this.node.current, "keyup", a), bi("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = st(this.node.current, "keydown", t), n = () => {
        this.isPressing && bi("cancel", (i, a) => this.cancelPress(i, a));
      }, o = st(this.node.current, "blur", n);
      this.removeAccessibleListeners = wt(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Q.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Ou();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && Q.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = lt(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = st(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = wt(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Gi = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), Ax = (e) => {
  const t = Gi.get(e.target);
  t && t(e);
}, Ex = (e) => {
  e.forEach(Ax);
};
function _x({ root: e, ...t }) {
  const r = e || document;
  yi.has(r) || yi.set(r, {});
  const n = yi.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(Ex, { root: e, ...t })), n[o];
}
function Rx(e, t, r) {
  const n = _x(t);
  return Gi.set(e, r), n.observe(e), () => {
    Gi.delete(e), n.unobserve(e);
  };
}
const Mx = {
  some: 0,
  all: 1
};
class Bx extends Pt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : Mx[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), h = c ? u : d;
      h && h(l);
    };
    return Rx(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(Vx(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function Vx({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const $x = {
  inView: {
    Feature: Bx
  },
  tap: {
    Feature: Px
  },
  focus: {
    Feature: Tx
  },
  hover: {
    Feature: Cx
  }
};
function Wu(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function Fx(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function Dx(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Io(e, t, r) {
  const n = e.getProps();
  return La(n, t, r !== void 0 ? r : n.custom, Fx(e), Dx(e));
}
const Ix = "framerAppearId", zx = "data-" + Ia(Ix);
let Lx = oe, Oa = oe;
const Ct = (e) => e * 1e3, ct = (e) => e / 1e3, Ox = {
  current: !1
}, Hu = (e) => Array.isArray(e) && typeof e[0] == "number";
function Uu(e) {
  return !!(!e || typeof e == "string" && Gu[e] || Hu(e) || Array.isArray(e) && e.every(Uu));
}
const Ar = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, Gu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ar([0, 0.65, 0.55, 1]),
  circOut: Ar([0.55, 0, 1, 0.45]),
  backIn: Ar([0.31, 0.01, 0.66, -0.59]),
  backOut: Ar([0.33, 1.53, 0.69, 0.99])
};
function qu(e) {
  if (e)
    return Hu(e) ? Ar(e) : Array.isArray(e) ? e.map(qu) : Gu[e];
}
function jx(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = qu(s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
const kl = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, vi = {}, Ku = {};
for (const e in kl)
  Ku[e] = () => (vi[e] === void 0 && (vi[e] = kl[e]()), vi[e]);
function Nx(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const Xu = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, Wx = 1e-7, Hx = 12;
function Ux(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = Xu(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > Wx && ++s < Hx);
  return a;
}
function ln(e, t, r, n) {
  if (e === t && r === n)
    return oe;
  const o = (i) => Ux(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : Xu(o(i), t, n);
}
const Gx = ln(0.42, 0, 1, 1), qx = ln(0, 0, 0.58, 1), Yu = ln(0.42, 0, 0.58, 1), Kx = (e) => Array.isArray(e) && typeof e[0] != "number", Zu = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Qu = (e) => (t) => 1 - e(1 - t), Ju = (e) => 1 - Math.sin(Math.acos(e)), ja = Qu(Ju), Xx = Zu(ja), ed = ln(0.33, 1.53, 0.69, 0.99), Na = Qu(ed), Yx = Zu(Na), Zx = (e) => (e *= 2) < 1 ? 0.5 * Na(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Qx = {
  linear: oe,
  easeIn: Gx,
  easeInOut: Yu,
  easeOut: qx,
  circIn: Ju,
  circInOut: Xx,
  circOut: ja,
  backIn: Na,
  backInOut: Yx,
  backOut: ed,
  anticipate: Zx
}, wl = (e) => {
  if (Array.isArray(e)) {
    Oa(e.length === 4);
    const [t, r, n, o] = e;
    return ln(t, r, n, o);
  } else if (typeof e == "string")
    return Qx[e];
  return e;
}, Wa = (e, t) => (r) => !!(an(r) && YS.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), td = (e, t, r) => (n) => {
  if (!an(n))
    return n;
  const [o, i, a, s] = n.match($o);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, Jx = (e) => Wt(0, 255, e), Si = {
  ...Ut,
  transform: (e) => Math.round(Jx(e))
}, zt = {
  test: Wa("rgb", "red"),
  parse: td("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Si.transform(e) + ", " + Si.transform(t) + ", " + Si.transform(r) + ", " + Dr(Fr.transform(n)) + ")"
};
function ek(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const qi = {
  test: Wa("#"),
  parse: ek,
  transform: zt.transform
}, er = {
  test: Wa("hsl", "hue"),
  parse: td("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Je.transform(Dr(t)) + ", " + Je.transform(Dr(r)) + ", " + Dr(Fr.transform(n)) + ")"
}, ge = {
  test: (e) => zt.test(e) || qi.test(e) || er.test(e),
  parse: (e) => zt.test(e) ? zt.parse(e) : er.test(e) ? er.parse(e) : qi.parse(e),
  transform: (e) => an(e) ? e : e.hasOwnProperty("red") ? zt.transform(e) : er.transform(e)
}, J = (e, t, r) => -r * e + r * t + e;
function xi(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function tk({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = xi(l, s, e + 1 / 3), i = xi(l, s, e), a = xi(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const ki = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, rk = [qi, zt, er], nk = (e) => rk.find((t) => t.test(e));
function Cl(e) {
  const t = nk(e);
  let r = t.parse(e);
  return t === er && (r = tk(r)), r;
}
const rd = (e, t) => {
  const r = Cl(e), n = Cl(t), o = { ...r };
  return (i) => (o.red = ki(r.red, n.red, i), o.green = ki(r.green, n.green, i), o.blue = ki(r.blue, n.blue, i), o.alpha = J(r.alpha, n.alpha, i), zt.transform(o));
};
function ok(e) {
  var t, r;
  return isNaN(e) && an(e) && (((t = e.match($o)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(Au)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const nd = {
  regex: KS,
  countKey: "Vars",
  token: "${v}",
  parse: oe
}, od = {
  regex: Au,
  countKey: "Colors",
  token: "${c}",
  parse: ge.parse
}, id = {
  regex: $o,
  countKey: "Numbers",
  token: "${n}",
  parse: Ut.parse
};
function wi(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function io(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && wi(r, nd), wi(r, od), wi(r, id), r;
}
function ad(e) {
  return io(e).values;
}
function sd(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = io(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(nd.token, a[l]) : l < n + r ? s = s.replace(od.token, ge.transform(a[l])) : s = s.replace(id.token, Dr(a[l]));
    return s;
  };
}
const ik = (e) => typeof e == "number" ? 0 : e;
function ak(e) {
  const t = ad(e);
  return sd(e)(t.map(ik));
}
const Tt = {
  test: ok,
  parse: ad,
  createTransformer: sd,
  getAnimatableNone: ak
}, ld = (e, t) => (r) => `${r > 0 ? t : e}`;
function cd(e, t) {
  return typeof e == "number" ? (r) => J(e, t, r) : ge.test(e) ? rd(e, t) : e.startsWith("var(") ? ld(e, t) : dd(e, t);
}
const ud = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => cd(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, sk = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = cd(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, dd = (e, t) => {
  const r = Tt.createTransformer(t), n = io(e), o = io(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? wt(ud(n.values, o.values), r) : ld(e, t);
}, Zr = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Tl = (e, t) => (r) => J(e, t, r);
function lk(e) {
  return typeof e == "number" ? Tl : typeof e == "string" ? ge.test(e) ? rd : dd : Array.isArray(e) ? ud : typeof e == "object" ? sk : Tl;
}
function ck(e, t, r) {
  const n = [], o = r || lk(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || oe : t;
      s = wt(l, s);
    }
    n.push(s);
  }
  return n;
}
function fd(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (Oa(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = ck(t, n, o), s = a.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Zr(e[u], e[u + 1], c);
    return a[u](d);
  };
  return r ? (c) => l(Wt(e[0], e[i - 1], c)) : l;
}
function uk(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Zr(0, t, n);
    e.push(J(r, 1, o));
  }
}
function dk(e) {
  const t = [0];
  return uk(t, e.length - 1), t;
}
function fk(e, t) {
  return e.map((r) => r * t);
}
function hk(e, t) {
  return e.map(() => t || Yu).splice(0, e.length - 1);
}
function ao({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = Kx(n) ? n.map(wl) : wl(n), i = {
    done: !1,
    value: t[0]
  }, a = fk(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : dk(t),
    e
  ), s = fd(a, t, {
    ease: Array.isArray(o) ? o : hk(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function hd(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const pk = 5;
function pd(e, t, r) {
  const n = Math.max(t - pk, 0);
  return hd(r - e(n), t - n);
}
const Ci = 1e-3, mk = 0.01, Pl = 10, gk = 0.05, bk = 1;
function yk({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  Lx(e <= Ct(Pl));
  let a = 1 - t;
  a = Wt(gk, bk, a), e = Wt(mk, Pl, ct(e)), a < 1 ? (o = (c) => {
    const u = c * a, d = u * e, h = u - r, p = Ki(c, a), b = Math.exp(-d);
    return Ci - h / p * b;
  }, i = (c) => {
    const d = c * a * e, h = d * r + r, p = Math.pow(a, 2) * Math.pow(c, 2) * e, b = Math.exp(-d), y = Ki(Math.pow(c, 2), a);
    return (-o(c) + Ci > 0 ? -1 : 1) * ((h - p) * b) / y;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -Ci + u * d;
  }, i = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = Sk(o, i, s);
  if (e = Ct(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * n;
    return {
      stiffness: c,
      damping: a * 2 * Math.sqrt(n * c),
      duration: e
    };
  }
}
const vk = 12;
function Sk(e, t, r) {
  let n = r;
  for (let o = 1; o < vk; o++)
    n = n - e(n) / t(n);
  return n;
}
function Ki(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const xk = ["duration", "bounce"], kk = ["stiffness", "damping", "mass"];
function Al(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function wk(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Al(e, kk) && Al(e, xk)) {
    const r = yk(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function md({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: h } = wk(n), p = u ? -ct(u) : 0, b = l / (2 * Math.sqrt(s * c)), y = i - o, x = ct(Math.sqrt(s / c)), k = Math.abs(y) < 5;
  r || (r = k ? 0.01 : 2), t || (t = k ? 5e-3 : 0.5);
  let w;
  if (b < 1) {
    const S = Ki(x, b);
    w = (T) => {
      const A = Math.exp(-b * x * T);
      return i - A * ((p + b * x * y) / S * Math.sin(S * T) + y * Math.cos(S * T));
    };
  } else if (b === 1)
    w = (S) => i - Math.exp(-x * S) * (y + (p + x * y) * S);
  else {
    const S = x * Math.sqrt(b * b - 1);
    w = (T) => {
      const A = Math.exp(-b * x * T), B = Math.min(S * T, 300);
      return i - A * ((p + b * x * y) * Math.sinh(B) + S * y * Math.cosh(B)) / S;
    };
  }
  return {
    calculatedDuration: h && d || null,
    next: (S) => {
      const T = w(S);
      if (h)
        a.done = S >= d;
      else {
        let A = p;
        S !== 0 && (b < 1 ? A = pd(w, S, T) : A = 0);
        const B = Math.abs(A) <= r, E = Math.abs(i - T) <= t;
        a.done = B && E;
      }
      return a.value = a.done ? i : T, a;
    }
  };
}
function El({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], h = {
    done: !1,
    value: d
  }, p = (M) => s !== void 0 && M < s || l !== void 0 && M > l, b = (M) => s === void 0 ? l : l === void 0 || Math.abs(s - M) < Math.abs(l - M) ? s : l;
  let y = r * t;
  const x = d + y, k = a === void 0 ? x : a(x);
  k !== x && (y = k - d);
  const w = (M) => -y * Math.exp(-M / n), S = (M) => k + w(M), T = (M) => {
    const H = w(M), he = S(M);
    h.done = Math.abs(H) <= c, h.value = h.done ? k : he;
  };
  let A, B;
  const E = (M) => {
    p(h.value) && (A = M, B = md({
      keyframes: [h.value, b(h.value)],
      velocity: pd(S, M, h.value),
      damping: o,
      stiffness: i,
      restDelta: c,
      restSpeed: u
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (M) => {
      let H = !1;
      return !B && A === void 0 && (H = !0, T(M), E(M)), A !== void 0 && M > A ? B.next(M - A) : (!H && T(M), h);
    }
  };
}
const Ck = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => Q.update(t, !0),
    stop: () => dt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ae.isProcessing ? ae.timestamp : performance.now()
  };
}, _l = 2e4;
function Rl(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < _l; )
    t += r, n = e.next(t);
  return t >= _l ? 1 / 0 : t;
}
const Tk = {
  decay: El,
  inertia: El,
  tween: ao,
  keyframes: ao,
  spring: md
};
function so({ autoplay: e = !0, delay: t = 0, driver: r = Ck, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...h }) {
  let p = 1, b = !1, y, x;
  const k = () => {
    y && y(), x = new Promise((K) => {
      y = K;
    });
  };
  k();
  let w;
  const S = Tk[o] || ao;
  let T;
  S !== ao && typeof n[0] != "number" && (T = fd([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const A = S({ ...h, keyframes: n });
  let B;
  s === "mirror" && (B = S({
    ...h,
    keyframes: [...n].reverse(),
    velocity: -(h.velocity || 0)
  }));
  let E = "idle", M = null, H = null, he = null;
  A.calculatedDuration === null && i && (A.calculatedDuration = Rl(A));
  const { calculatedDuration: $e } = A;
  let je = 1 / 0, ht = 1 / 0;
  $e !== null && (je = $e + a, ht = je * (i + 1) - a);
  let te = 0;
  const ee = (K) => {
    if (H === null)
      return;
    p > 0 && (H = Math.min(H, K)), M !== null ? te = M : te = (K - H) * p;
    const Gt = te - t, N = Gt < 0;
    te = Math.max(Gt, 0), E === "finished" && M === null && (te = ht);
    let pr = te, fn = A;
    if (i) {
      const qt = te / je;
      let mt = Math.floor(qt), We = qt % 1;
      !We && qt >= 1 && (We = 1), We === 1 && mt--, mt = Math.min(mt, i + 1);
      const gr = !!(mt % 2);
      gr && (s === "reverse" ? (We = 1 - We, a && (We -= a / je)) : s === "mirror" && (fn = B));
      let hn = Wt(0, 1, We);
      te > ht && (hn = s === "reverse" && gr ? 1 : 0), pr = hn * je;
    }
    const Fe = N ? { done: !1, value: n[0] } : fn.next(pr);
    T && (Fe.value = T(Fe.value));
    let { done: mr } = Fe;
    !N && $e !== null && (mr = te >= ht);
    const At = M === null && (E === "finished" || E === "running" && mr || p < 0 && te <= 0);
    return d && d(Fe.value), At && Oo(), Fe;
  }, Ne = () => {
    w && w.stop(), w = void 0;
  }, pt = () => {
    E = "idle", Ne(), k(), H = he = null;
  }, Oo = () => {
    E = "finished", u && u(), Ne(), k();
  }, un = () => {
    if (b)
      return;
    w || (w = r(ee));
    const K = w.now();
    l && l(), M !== null ? H = K - M : (!H || E === "finished") && (H = K), he = H, M = null, E = "running", w.start();
  };
  e && un();
  const dn = {
    then(K, Gt) {
      return x.then(K, Gt);
    },
    get time() {
      return ct(te);
    },
    set time(K) {
      K = Ct(K), te = K, M !== null || !w || p === 0 ? M = K : H = w.now() - K / p;
    },
    get duration() {
      const K = A.calculatedDuration === null ? Rl(A) : A.calculatedDuration;
      return ct(K);
    },
    get speed() {
      return p;
    },
    set speed(K) {
      K === p || !w || (p = K, dn.time = ct(te));
    },
    get state() {
      return E;
    },
    play: un,
    pause: () => {
      E = "paused", M = te;
    },
    stop: () => {
      b = !0, E !== "idle" && (E = "idle", c && c(), pt());
    },
    cancel: () => {
      he !== null && ee(he), pt();
    },
    complete: () => {
      E = "finished";
    },
    sample: (K) => (H = 0, ee(K))
  };
  return dn;
}
const Pk = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Fn = 10, Ak = 2e4, Ek = (e, t) => t.type === "spring" || e === "backgroundColor" || !Uu(t.ease);
function _k(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(Ku.waapi() && Pk.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const c = () => {
    l = new Promise((k) => {
      s = k;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: h, times: p } = o;
  if (Ek(t, o)) {
    const k = so({
      ...o,
      repeat: 0,
      delay: 0
    });
    let w = { done: !1, value: u[0] };
    const S = [];
    let T = 0;
    for (; !w.done && T < Ak; )
      w = k.sample(T), S.push(w.value), T += Fn;
    p = void 0, u = S, d = T - Fn, h = "linear";
  }
  const b = jx(e.owner.current, t, u, {
    ...o,
    duration: d,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: h,
    times: p
  }), y = () => b.cancel(), x = () => {
    Q.update(y), s(), c();
  };
  return b.onfinish = () => {
    e.set(Nx(u, o)), n && n(), x();
  }, {
    then(k, w) {
      return l.then(k, w);
    },
    get time() {
      return ct(b.currentTime || 0);
    },
    set time(k) {
      b.currentTime = Ct(k);
    },
    get speed() {
      return b.playbackRate;
    },
    set speed(k) {
      b.playbackRate = k;
    },
    get duration() {
      return ct(d);
    },
    play: () => {
      a || (b.play(), dt(y));
    },
    pause: () => b.pause(),
    stop: () => {
      if (a = !0, b.playState === "idle")
        return;
      const { currentTime: k } = b;
      if (k) {
        const w = so({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(w.sample(k - Fn).value, w.sample(k).value, Fn);
      }
      x();
    },
    complete: () => b.finish(),
    cancel: x
  };
}
function Rk({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: oe,
    pause: oe,
    stop: oe,
    then: (i) => (i(), Promise.resolve()),
    cancel: oe,
    complete: oe
  });
  return t ? so({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const Mk = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Bk = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Vk = {
  type: "keyframes",
  duration: 0.8
}, $k = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Fk = (e, { keyframes: t }) => t.length > 2 ? Vk : Ht.has(e) ? e.startsWith("scale") ? Bk(t[1]) : Mk : $k, Xi = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
Tt.test(t) && // And it contains numbers and/or colors
!t.startsWith("url(")), Dk = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ik(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match($o) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = Dk.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const zk = /([a-z-]*)\(.*?\)/g, Yi = {
  ...Tt,
  getAnimatableNone: (e) => {
    const t = e.match(zk);
    return t ? t.map(Ik).join(" ") : e;
  }
}, Lk = {
  ...Eu,
  // Color props
  color: ge,
  backgroundColor: ge,
  outlineColor: ge,
  fill: ge,
  stroke: ge,
  // Border props
  borderColor: ge,
  borderTopColor: ge,
  borderRightColor: ge,
  borderBottomColor: ge,
  borderLeftColor: ge,
  filter: Yi,
  WebkitFilter: Yi
}, Ha = (e) => Lk[e];
function Ua(e, t) {
  let r = Ha(e);
  return r !== Yi && (r = Tt), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
function Ok({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function Ml(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function Bl(e) {
  return typeof e == "number" ? 0 : Ua("", e);
}
function gd(e, t) {
  return e[t] || e.default || e;
}
function jk(e, [...t]) {
  for (let r = 0; r < t.length; r++)
    t[r] === null && (t[r] = r === 0 ? e : t[r - 1]);
  return t;
}
function Nk(e, t, r, n) {
  const o = Xi(t, r);
  let i = n.from !== void 0 ? n.from : e.get();
  return i === "none" && o && typeof r == "string" ? i = Ua(t, r) : Ml(i) && typeof r == "string" ? i = Bl(r) : !Array.isArray(r) && Ml(r) && typeof i == "string" && (r = Bl(i)), Array.isArray(r) ? jk(i, r) : [i, r];
}
const Ga = (e, t, r, n = {}) => (o) => {
  const i = gd(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - Ct(a);
  const l = Nk(t, e, r, i), c = l[0], u = l[l.length - 1], d = Xi(e, c), h = Xi(e, u);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (b) => {
      t.set(b), i.onUpdate && i.onUpdate(b);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (Ok(i) || (p = {
    ...p,
    ...Fk(e, p)
  }), p.duration && (p.duration = Ct(p.duration)), p.repeatDelay && (p.repeatDelay = Ct(p.repeatDelay)), !d || !h || Ox.current || i.type === !1)
    return Rk(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const b = _k(t, e, p);
    if (b)
      return b;
  }
  return so(p);
};
function lo(e) {
  return !!(we(e) && e.add);
}
const Wk = (e) => /^\-?\d*\.?\d+$/.test(e), Hk = (e) => /^0[^.\s]+$/.test(e);
function qa(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ka(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Xa {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return qa(this.subscriptions, t), () => Ka(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Uk = (e) => !isNaN(parseFloat(e));
class Gk {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "10.12.4", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      this.prev = this.current, this.current = n;
      const { delta: i, timestamp: a } = ae;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, Q.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Q.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = Uk(this.current), this.owner = r.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Xa());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), Q.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), this.prev = t, this.timeDelta = n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t) {
    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      hd(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function fr(e, t) {
  return new Gk(e, t);
}
const bd = (e) => (t) => t.test(e), qk = {
  test: (e) => e === "auto",
  parse: (e) => e
}, yd = [Ut, R, Je, vt, QS, ZS, qk], wr = (e) => yd.find(bd(e)), Kk = [...yd, ge, Tt], Xk = (e) => Kk.find(bd(e));
function Yk(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, fr(r));
}
function Zk(e, t) {
  const r = Io(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = fx(i[a]);
    Yk(e, a, s);
  }
}
function Qk(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (Wk(u) || Hk(u)) ? u = parseFloat(u) : !Xk(u) && Tt.test(c) && (u = Ua(l, c)), e.addValue(l, fr(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function Jk(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function ew(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = Jk(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function tw({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function vd(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const h = e.getValue(d), p = s[d];
    if (!h || p === void 0 || u && tw(u, d))
      continue;
    const b = { delay: r, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !h.hasAnimated) {
      const x = e.getProps()[zx];
      x && (b.elapsed = window.HandoffAppearAnimations(x, d, h, Q));
    }
    h.start(Ga(d, h, p, e.shouldReduceMotion && Ht.has(d) ? { type: !1 } : b));
    const y = h.animation;
    lo(l) && (l.add(d), y.then(() => l.remove(d))), c.push(y);
  }
  return a && Promise.all(c).then(() => {
    a && Zk(e, a);
  }), c;
}
function Zi(e, t, r = {}) {
  const n = Io(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(vd(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return rw(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => c());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function rw(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(nw).forEach((c, u) => {
    c.notify("AnimationStart", t), a.push(Zi(c, t, {
      ...i,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function nw(e, t) {
  return e.sortNodePosition(t);
}
function ow(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Zi(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Zi(e, t, r);
  else {
    const o = typeof t == "function" ? Io(e, t, r.custom) : t;
    n = Promise.all(vd(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const iw = [...Ea].reverse(), aw = Ea.length;
function sw(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => ow(e, r, n)));
}
function lw(e) {
  let t = sw(e);
  const r = uw();
  let n = !0;
  const o = (l, c) => {
    const u = Io(e, c);
    if (u) {
      const { transition: d, transitionEnd: h, ...p } = u;
      l = { ...l, ...p, ...h };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, h = [], p = /* @__PURE__ */ new Set();
    let b = {}, y = 1 / 0;
    for (let k = 0; k < aw; k++) {
      const w = iw[k], S = r[w], T = u[w] !== void 0 ? u[w] : d[w], A = Kr(T), B = w === c ? S.isActive : null;
      B === !1 && (y = k);
      let E = T === d[w] && T !== u[w] && A;
      if (E && n && e.manuallyAnimateOnMount && (E = !1), S.protectedKeys = { ...b }, // If it isn't active and hasn't *just* been set as inactive
      !S.isActive && B === null || // If we didn't and don't have any defined prop for this animation type
      !T && !S.prevProp || // Or if the prop doesn't define an animation
      Bo(T) || typeof T == "boolean")
        continue;
      const M = cw(S.prevProp, T);
      let H = M || // If we're making this variant active, we want to always make it active
      w === c && S.isActive && !E && A || // If we removed a higher-priority variant (i is in reverse order)
      k > y && A;
      const he = Array.isArray(T) ? T : [T];
      let $e = he.reduce(o, {});
      B === !1 && ($e = {});
      const { prevResolvedValues: je = {} } = S, ht = {
        ...je,
        ...$e
      }, te = (ee) => {
        H = !0, p.delete(ee), S.needsAnimating[ee] = !0;
      };
      for (const ee in ht) {
        const Ne = $e[ee], pt = je[ee];
        b.hasOwnProperty(ee) || (Ne !== pt ? oo(Ne) && oo(pt) ? !Wu(Ne, pt) || M ? te(ee) : S.protectedKeys[ee] = !0 : Ne !== void 0 ? te(ee) : p.add(ee) : Ne !== void 0 && p.has(ee) ? te(ee) : S.protectedKeys[ee] = !0);
      }
      S.prevProp = T, S.prevResolvedValues = $e, S.isActive && (b = { ...b, ...$e }), n && e.blockInitialAnimation && (H = !1), H && !E && h.push(...he.map((ee) => ({
        animation: ee,
        options: { type: w, ...l }
      })));
    }
    if (p.size) {
      const k = {};
      p.forEach((w) => {
        const S = e.getBaseTarget(w);
        S !== void 0 && (k[w] = S);
      }), h.push({ animation: k });
    }
    let x = !!h.length;
    return n && u.initial === !1 && !e.manuallyAnimateOnMount && (x = !1), n = !1, x ? t(h) : Promise.resolve();
  }
  function s(l, c, u) {
    var d;
    if (r[l].isActive === c)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var b;
      return (b = p.animationState) === null || b === void 0 ? void 0 : b.setActive(l, c);
    }), r[l].isActive = c;
    const h = a(u, l);
    for (const p in r)
      r[p].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => r
  };
}
function cw(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Wu(t, e) : !1;
}
function Mt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function uw() {
  return {
    animate: Mt(!0),
    whileInView: Mt(),
    whileHover: Mt(),
    whileTap: Mt(),
    whileDrag: Mt(),
    whileFocus: Mt(),
    exit: Mt()
  };
}
class dw extends Pt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = lw(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Bo(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let fw = 0;
class hw extends Pt {
  constructor() {
    super(...arguments), this.id = fw++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const i = this.node.animationState.setActive("exit", !t, { custom: n ?? this.node.getProps().custom });
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const pw = {
  animation: {
    Feature: dw
  },
  exit: {
    Feature: hw
  }
}, Vl = (e, t) => Math.abs(e - t);
function mw(e, t) {
  const r = Vl(e.x, t.x), n = Vl(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Sd {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Pi(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = mw(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: h } = c, { timestamp: p } = ae;
      this.history.push({ ...h, timestamp: p });
      const { onStart: b, onMove: y } = this.handlers;
      u || (b && b(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Ti(u, this.transformPagePoint), Q.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: h } = this.handlers, p = Pi(c.type === "pointercancel" ? this.lastMoveEventInfo : Ti(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, p), h && h(c, p);
    }, !Iu(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = Fo(t), i = Ti(o, this.transformPagePoint), { point: a } = i, { timestamp: s } = ae;
    this.history = [{ ...a, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, Pi(i, this.history)), this.removeListeners = wt(lt(window, "pointermove", this.handlePointerMove), lt(window, "pointerup", this.handlePointerUp), lt(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), dt(this.updatePoint);
  }
}
function Ti(e, t) {
  return t ? { point: t(e.point) } : e;
}
function $l(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Pi({ point: e }, t) {
  return {
    point: e,
    delta: $l(e, xd(t)),
    offset: $l(e, gw(t)),
    velocity: bw(t, 0.1)
  };
}
function gw(e) {
  return e[0];
}
function xd(e) {
  return e[e.length - 1];
}
function bw(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = xd(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Ct(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = ct(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Ee(e) {
  return e.max - e.min;
}
function Qi(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Fl(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = J(t.min, t.max, e.origin), e.scale = Ee(r) / Ee(t), (Qi(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = J(r.min, r.max, e.origin) - e.originPoint, (Qi(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ir(e, t, r, n) {
  Fl(e.x, t.x, r.x, n ? n.originX : void 0), Fl(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Dl(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Ee(t);
}
function yw(e, t, r) {
  Dl(e.x, t.x, r.x), Dl(e.y, t.y, r.y);
}
function Il(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Ee(t);
}
function zr(e, t, r) {
  Il(e.x, t.x, r.x), Il(e.y, t.y, r.y);
}
function vw(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? J(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? J(r, e, n.max) : Math.min(e, r)), e;
}
function zl(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function Sw(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: zl(e.x, r, o),
    y: zl(e.y, t, n)
  };
}
function Ll(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function xw(e, t) {
  return {
    x: Ll(e.x, t.x),
    y: Ll(e.y, t.y)
  };
}
function kw(e, t) {
  let r = 0.5;
  const n = Ee(e), o = Ee(t);
  return o > n ? r = Zr(t.min, t.max - n, e.min) : n > o && (r = Zr(e.min, e.max - o, t.min)), Wt(0, 1, r);
}
function ww(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Ji = 0.35;
function Cw(e = Ji) {
  return e === !1 ? e = 0 : e === !0 && (e = Ji), {
    x: Ol(e, "left", "right"),
    y: Ol(e, "top", "bottom")
  };
}
function Ol(e, t, r) {
  return {
    min: jl(e, t),
    max: jl(e, r)
  };
}
function jl(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Nl = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Lr = () => ({
  x: Nl(),
  y: Nl()
}), Wl = () => ({ min: 0, max: 0 }), re = () => ({
  x: Wl(),
  y: Wl()
});
function Ue(e) {
  return [e("x"), e("y")];
}
function kd({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function Tw({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Pw(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function Ai(e) {
  return e === void 0 || e === 1;
}
function ea({ scale: e, scaleX: t, scaleY: r }) {
  return !Ai(e) || !Ai(t) || !Ai(r);
}
function Bt(e) {
  return ea(e) || wd(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function wd(e) {
  return Hl(e.x) || Hl(e.y);
}
function Hl(e) {
  return e && e !== "0%";
}
function co(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function Ul(e, t, r, n, o) {
  return o !== void 0 && (e = co(e, o, n)), co(e, r, n) + t;
}
function ta(e, t = 0, r = 1, n, o) {
  e.min = Ul(e.min, t, r, n, o), e.max = Ul(e.max, t, r, n, o);
}
function Cd(e, { x: t, y: r }) {
  ta(e.x, t.translate, t.scale, t.originPoint), ta(e.y, r.translate, r.scale, r.originPoint);
}
function Aw(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = r[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && tr(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Cd(e, a)), n && Bt(i.latestValues) && tr(e, i.latestValues));
  }
  t.x = Gl(t.x), t.y = Gl(t.y);
}
function Gl(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function St(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function ql(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = J(e.min, e.max, i);
  ta(e, t[r], t[n], a, t.scale);
}
const Ew = ["x", "scaleX", "originX"], _w = ["y", "scaleY", "originY"];
function tr(e, t) {
  ql(e.x, t, Ew), ql(e.y, t, _w);
}
function Td(e, t) {
  return kd(Pw(e.getBoundingClientRect(), t));
}
function Rw(e, t, r) {
  const n = Td(e, r), { scroll: o } = t;
  return o && (St(n.x, o.offset.x), St(n.y, o.offset.y)), n;
}
const Mw = /* @__PURE__ */ new WeakMap();
class Bw {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = re(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Fo(l, "page").point);
    }, i = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: h } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Lu(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ue((b) => {
        let y = this.getAxisMotionValue(b).get() || 0;
        if (Je.test(y)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const k = x.layout.layoutBox[b];
            k && (y = Ee(k) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[b] = y;
      }), h && Q.update(() => h(l, c), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, c) => {
      const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: h, onDrag: p } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: b } = c;
      if (d && this.currentDirection === null) {
        this.currentDirection = Vw(b), this.currentDirection !== null && h && h(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, b), this.updateAxis("y", c.point, b), this.visualElement.render(), p && p(l, c);
    }, s = (l, c) => this.stop(l, c);
    this.panSession = new Sd(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Q.update(() => i(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !Dn(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = vw(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && Jt(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = Sw(n.layoutBox, t) : this.constraints = !1, this.elastic = Cw(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Ue((i) => {
      this.getAxisMotionValue(i) && (this.constraints[i] = ww(n.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Jt(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = Rw(n, o.root, this.visualElement.getTransformPagePoint());
    let a = xw(o.layout.layoutBox, i);
    if (r) {
      const s = r(Tw(a));
      this.hasMutatedConstraints = !!s, s && (a = kd(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = Ue((u) => {
      if (!Dn(u, r, this.currentDirection))
        return;
      let d = l && l[u] || {};
      a && (d = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, p = o ? 40 : 1e7, b = {
        type: "inertia",
        velocity: n ? t[u] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(u, b);
    });
    return Promise.all(c).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Ga(t, n, 0, r));
  }
  stopAnimation() {
    Ue((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(), n = this.visualElement.getProps(), o = n[r];
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Ue((r) => {
      const { drag: n } = this.getProps();
      if (!Dn(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - J(a, s, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: n } = this.visualElement;
    if (!Jt(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Ue((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = kw({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Ue((a) => {
      if (!Dn(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: c } = this.constraints[a];
      s.set(J(l, c, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Mw.set(this.visualElement, this);
    const t = this.visualElement.current, r = lt(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      Jt(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = st(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Ue((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Ji, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function Dn(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function Vw(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class $w extends Pt {
  constructor(t) {
    super(t), this.removeGroupControls = oe, this.removeListeners = oe, this.controls = new Bw(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || oe;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Kl = (e) => (t, r) => {
  e && Q.update(() => e(t, r));
};
class Fw extends Pt {
  constructor() {
    super(...arguments), this.removePointerDownListener = oe;
  }
  onPointerDown(t) {
    this.session = new Sd(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Kl(t),
      onStart: Kl(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && Q.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = lt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Dw() {
  const e = Z(nn);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = ca();
  return ve(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function Iw() {
  return zw(Z(nn));
}
function zw(e) {
  return e === null ? !0 : e.isPresent;
}
function Xl(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Cr = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (R.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Xl(e, t.target.x), n = Xl(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, Lw = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Tt.parse(e);
    if (o.length > 5)
      return n;
    const i = Tt.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const c = J(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= c), typeof o[3 + a] == "number" && (o[3 + a] /= c), i(o);
  }
};
class Ow extends C.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    HS(jw), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), $r.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, a = n.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || Q.postRender(() => {
      const s = a.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(o), n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Pd(e) {
  const [t, r] = Dw(), n = Z(Ma);
  return C.createElement(Ow, { ...e, layoutGroup: n, switchLayoutGroup: Z(wu), isPresent: t, safeToRemove: r });
}
const jw = {
  borderRadius: {
    ...Cr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Cr,
  borderTopRightRadius: Cr,
  borderBottomLeftRadius: Cr,
  borderBottomRightRadius: Cr,
  boxShadow: Lw
}, Ad = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Nw = Ad.length, Yl = (e) => typeof e == "string" ? parseFloat(e) : e, Zl = (e) => typeof e == "number" || R.test(e);
function Ww(e, t, r, n, o, i) {
  o ? (e.opacity = J(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    Hw(n)
  ), e.opacityExit = J(t.opacity !== void 0 ? t.opacity : 1, 0, Uw(n))) : i && (e.opacity = J(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < Nw; a++) {
    const s = `border${Ad[a]}Radius`;
    let l = Ql(t, s), c = Ql(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Zl(l) === Zl(c) ? (e[s] = Math.max(J(Yl(l), Yl(c), n), 0), (Je.test(c) || Je.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = J(t.rotate || 0, r.rotate || 0, n));
}
function Ql(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Hw = Ed(0, 0.5, ja), Uw = Ed(0.5, 0.95, oe);
function Ed(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Zr(e, t, n));
}
function Jl(e, t) {
  e.min = t.min, e.max = t.max;
}
function Me(e, t) {
  Jl(e.x, t.x), Jl(e.y, t.y);
}
function ec(e, t, r, n, o) {
  return e -= t, e = co(e, 1 / r, n), o !== void 0 && (e = co(e, 1 / o, n)), e;
}
function Gw(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (Je.test(t) && (t = parseFloat(t), t = J(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = J(i.min, i.max, n);
  e === i && (s -= t), e.min = ec(e.min, t, r, s, o), e.max = ec(e.max, t, r, s, o);
}
function tc(e, t, [r, n, o], i, a) {
  Gw(e, t[r], t[n], t[o], t.scale, i, a);
}
const qw = ["x", "scaleX", "originX"], Kw = ["y", "scaleY", "originY"];
function rc(e, t, r, n) {
  tc(e.x, t, qw, r ? r.x : void 0, n ? n.x : void 0), tc(e.y, t, Kw, r ? r.y : void 0, n ? n.y : void 0);
}
function nc(e) {
  return e.translate === 0 && e.scale === 1;
}
function _d(e) {
  return nc(e.x) && nc(e.y);
}
function ra(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function oc(e) {
  return Ee(e.x) / Ee(e.y);
}
class Xw {
  constructor() {
    this.members = [];
  }
  add(t) {
    qa(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Ka(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0)
      return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, r && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ic(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const Yw = (e, t) => e.depth - t.depth;
class Zw {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    qa(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Ka(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Yw), this.isDirty = !1, this.children.forEach(t);
  }
}
function Qw(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (dt(n), e(i - t));
  };
  return Q.read(n, !0), () => dt(n);
}
function Jw(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function e2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function t2(e, t, r) {
  const n = we(e) ? e : fr(e);
  return n.start(Ga("", n, t, r)), n.animation;
}
const ac = ["", "X", "Y", "Z"], sc = 1e3;
let r2 = 0;
const Vt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Rd({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a, s = {}, l = t == null ? void 0 : t()) {
      this.id = r2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        Vt.totalNodes = Vt.resolvedTargetDeltas = Vt.recalculatedProjection = 0, this.nodes.forEach(i2), this.nodes.forEach(c2), this.nodes.forEach(u2), this.nodes.forEach(a2), Jw(Vt);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.elementId = a, this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0, a && this.root.registerPotentialNode(a, this);
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Zw());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Xa()), this.eventHandlers.get(a).add(s);
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    registerPotentialNode(a, s) {
      this.potentialNodes.set(a, s);
    }
    /**
     * Lifecycles
     */
    mount(a, s = !1) {
      if (this.instance)
        return;
      this.isSVG = e2(a), this.instance = a;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const h = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = Qw(h, 250), $r.hasAnimatedSinceResize && ($r.hasAnimatedSinceResize = !1, this.nodes.forEach(cc));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: h, hasRelativeTargetChanged: p, layout: b }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || u.getDefaultTransition() || m2, { onLayoutAnimationStart: x, onLayoutAnimationComplete: k } = u.getProps(), w = !this.targetLayout || !ra(this.targetLayout, b) || p, S = !h && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || S || h && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, S);
          const T = {
            ...gd(y, "layout"),
            onPlay: x,
            onComplete: k
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (T.delay = 0, T.type = !1), this.startAnimation(T);
        } else
          !h && this.animationProgress === 0 && cc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = b;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, dt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(d2), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    // Note: Currently only running on root node
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(lc);
        return;
      }
      this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(g2), this.potentialNodes.clear()), this.nodes.forEach(l2), this.nodes.forEach(n2), this.nodes.forEach(o2), this.clearAllSnapshots(), cr.update.process(ae), cr.preRender.process(ae), cr.render.process(ae));
    }
    clearAllSnapshots() {
      this.nodes.forEach(s2), this.sharedNodes.forEach(f2);
    }
    scheduleUpdateProjection() {
      Q.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Q.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = re(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: a,
        isRoot: n(this.instance),
        offset: r(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !_d(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      a && (s || Bt(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), b2(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return re();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (St(s.x, l.offset.x), St(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = re();
      Me(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            Me(s, a);
            const { scroll: h } = this.root;
            h && (St(s.x, -h.offset.x), St(s.y, -h.offset.y));
          }
          St(s.x, u.offset.x), St(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = re();
      Me(l, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && tr(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Bt(u.latestValues) && tr(l, u.latestValues);
      }
      return Bt(this.latestValues) && tr(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = re();
      Me(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Bt(c.latestValues))
          continue;
        ea(c.latestValues) && c.updateSnapshot();
        const u = re(), d = c.measurePageBox();
        Me(u, d), rc(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Bt(this.latestValues) && rc(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(a || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (this.resolvedRelativeTargetAt = ae.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = re(), this.relativeTargetOrigin = re(), zr(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Me(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = re(), this.targetWithTransforms = re()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), yw(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Me(this.target, this.layout.layoutBox), Cd(this.target, this.targetDelta)) : Me(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = re(), this.relativeTargetOrigin = re(), zr(this.relativeTargetOrigin, this.target, p.target), Me(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Vt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ea(this.parent.latestValues) || wd(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ae.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      Me(this.layoutCorrected, this.layout.layoutBox), Aw(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: h } = s;
      if (!h)
        return;
      this.projectionDelta || (this.projectionDelta = Lr(), this.projectionDeltaWithTransform = Lr());
      const p = this.treeScale.x, b = this.treeScale.y, y = this.projectionTransform;
      Ir(this.projectionDelta, this.layoutCorrected, h, this.latestValues), this.projectionTransform = ic(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== p || this.treeScale.y !== b) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h)), Vt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), a) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = Lr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const h = re(), p = l ? l.source : void 0, b = this.layout ? this.layout.source : void 0, y = p !== b, x = this.getStack(), k = !x || x.members.length <= 1, w = !!(y && !k && this.options.crossfade === !0 && !this.path.some(p2));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (T) => {
        const A = T / 1e3;
        uc(d.x, a.x, A), uc(d.y, a.y, A), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (zr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), h2(this.relativeTarget, this.relativeTargetOrigin, h, A), S && ra(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = re()), Me(S, this.relativeTarget)), y && (this.animationValues = u, Ww(u, c, this.latestValues, A, w, k)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = A;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (dt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Q.update(() => {
        $r.hasAnimatedSinceResize = !0, this.currentAnimation = t2(0, sc, {
          ...a,
          onUpdate: (s) => {
            this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(sc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = a;
      if (!(!s || !l || !c)) {
        if (this !== a && this.layout && c && Md(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || re();
          const d = Ee(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const h = Ee(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + h;
        }
        Me(s, l), tr(s, u), Ir(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Xw()), this.sharedNodes.get(a).add(s);
      const c = s.options.initialPromotionConfig;
      s.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let s = !1;
      const { latestValues: l } = a;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const c = {};
      for (let u = 0; u < ac.length; u++) {
        const d = "rotate" + ac[u];
        l[d] && (c[d] = l[d], a.setStaticValue(d, 0));
      }
      a.render();
      for (const u in c)
        a.setStaticValue(u, c[u]);
      a.scheduleRender();
    }
    getProjectionStyles(a = {}) {
      var s, l;
      const c = {};
      if (!this.instance || this.isSVG)
        return c;
      if (this.isVisible)
        c.visibility = "";
      else
        return { visibility: "hidden" };
      const u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Un(a.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Un(a.pointerEvents) || ""), this.hasProjected && !Bt(this.latestValues) && (y.transform = u ? u({}, "") : "none", this.hasProjected = !1), y;
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = ic(this.projectionDeltaWithTransform, this.treeScale, h), u && (c.transform = u(h, c.transform));
      const { x: p, y: b } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${b.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = h.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = d === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const y in ro) {
        if (h[y] === void 0)
          continue;
        const { correct: x, applyTo: k } = ro[y], w = c.transform === "none" ? h[y] : x(h[y], d);
        if (k) {
          const S = k.length;
          for (let T = 0; T < S; T++)
            c[k[T]] = w;
        } else
          c[y] = w;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? Un(a.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(lc), this.root.sharedNodes.clear();
    }
  };
}
function n2(e) {
  e.updateLayout();
}
function o2(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? Ue((d) => {
      const h = a ? r.measuredBox[d] : r.layoutBox[d], p = Ee(h);
      h.min = n[d].min, h.max = h.min + p;
    }) : Md(i, r.layoutBox, n) && Ue((d) => {
      const h = a ? r.measuredBox[d] : r.layoutBox[d], p = Ee(n[d]);
      h.max = h.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Lr();
    Ir(s, n, r.layoutBox);
    const l = Lr();
    a ? Ir(l, e.applyTransform(o, !0), r.measuredBox) : Ir(l, n, r.layoutBox);
    const c = !_d(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: p } = d;
        if (h && p) {
          const b = re();
          zr(b, r.layoutBox, h.layoutBox);
          const y = re();
          zr(y, n, p.layoutBox), ra(b, y) || (u = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = b, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function i2(e) {
  Vt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function a2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function s2(e) {
  e.clearSnapshot();
}
function lc(e) {
  e.clearMeasurements();
}
function l2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function cc(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function c2(e) {
  e.resolveTargetDelta();
}
function u2(e) {
  e.calcProjection();
}
function d2(e) {
  e.resetRotation();
}
function f2(e) {
  e.removeLeadSnapshot();
}
function uc(e, t, r) {
  e.translate = J(t.translate, 0, r), e.scale = J(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function dc(e, t, r, n) {
  e.min = J(t.min, r.min, n), e.max = J(t.max, r.max, n);
}
function h2(e, t, r, n) {
  dc(e.x, t.x, r.x, n), dc(e.y, t.y, r.y, n);
}
function p2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const m2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function g2(e, t) {
  let r = e.root;
  for (let i = e.path.length - 1; i >= 0; i--)
    if (e.path[i].instance) {
      r = e.path[i];
      break;
    }
  const o = (r && r !== e.root ? r.instance : document).querySelector(`[data-projection-id="${t}"]`);
  o && e.mount(o, !0);
}
function fc(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function b2(e) {
  fc(e.x), fc(e.y);
}
function Md(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Qi(oc(t), oc(r), 0.2);
}
const y2 = Rd({
  attachResizeListener: (e, t) => st(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ei = {
  current: void 0
}, Bd = Rd({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ei.current) {
      const e = new y2(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ei.current = e;
    }
    return Ei.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), v2 = {
  pan: {
    Feature: Fw
  },
  drag: {
    Feature: $w,
    ProjectionNode: Bd,
    MeasureLayout: Pd
  }
}, S2 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function x2(e) {
  const t = S2.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function na(e, t, r = 1) {
  const [n, o] = x2(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  return i ? i.trim() : Hi(o) ? na(o, t, r + 1) : o;
}
function k2(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const i = o.get();
    if (!Hi(i))
      return;
    const a = na(i, n);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Hi(i))
      continue;
    const a = na(i, n);
    a && (t[o] = a, r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const w2 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), Vd = (e) => w2.has(e), C2 = (e) => Object.keys(e).some(Vd), hc = (e) => e === Ut || e === R, pc = (e, t) => parseFloat(e.split(", ")[t]), mc = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return pc(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? pc(i[1], e) : 0;
  }
}, T2 = /* @__PURE__ */ new Set(["x", "y", "z"]), P2 = on.filter((e) => !T2.has(e));
function A2(e) {
  const t = [];
  return P2.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const gc = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: mc(4, 13),
  y: mc(5, 14)
}, E2 = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = gc[c](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = gc[c](l, i);
  }), e;
}, _2 = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(Vd);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = wr(u);
    const h = t[l];
    let p;
    if (oo(h)) {
      const b = h.length, y = h[0] === null ? 1 : 0;
      u = h[y], d = wr(u);
      for (let x = y; x < b && h[x] !== null; x++)
        p ? Oa(wr(h[x]) === p) : p = wr(h[x]);
    } else
      p = wr(h);
    if (d !== p)
      if (hc(d) && hc(p)) {
        const b = c.get();
        typeof b == "string" && c.set(parseFloat(b)), typeof h == "string" ? t[l] = parseFloat(h) : Array.isArray(h) && p === R && (t[l] = h.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (u === 0 || h === 0) ? u === 0 ? c.set(p.transform(u)) : t[l] = d.transform(h) : (a || (i = A2(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(h));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = E2(t, e, s);
    return i.length && i.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), Mo && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function R2(e, t, r, n) {
  return C2(t) ? _2(e, t, r, n) : { target: t, transitionEnd: n };
}
const M2 = (e, t, r, n) => {
  const o = k2(e, t, n);
  return t = o.target, n = o.transitionEnd, R2(e, t, r, n);
}, oa = { current: null }, $d = { current: !1 };
function B2() {
  if ($d.current = !0, !!Mo)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => oa.current = e.matches;
      e.addListener(t), t();
    } else
      oa.current = !1;
}
function V2(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if (we(i))
      e.addValue(o, i), lo(n) && n.add(o);
    else if (we(a))
      e.addValue(o, fr(i, { owner: e })), lo(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, fr(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const bc = /* @__PURE__ */ new WeakMap(), Fd = Object.keys(Xr), $2 = Fd.length, yc = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], F2 = _a.length;
class D2 {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Q.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Vo(r), this.isVariantNode = ku(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const h = u[d];
      s[d] !== void 0 && we(h) && (h.set(s[d], !1), lo(c) && c.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    this.current = t, bc.set(t, this), this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), $d.current || B2(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : oa.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    bc.delete(this.current), this.projection && this.projection.unmount(), dt(this.notifyUpdate), dt(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Ht.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && Q.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
    }), i = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, i, a) {
    let s, l;
    for (let c = 0; c < $2; c++) {
      const u = Fd[c], { isEnabled: d, Feature: h, ProjectionNode: p, MeasureLayout: b } = Xr[u];
      p && (s = p), d(r) && (!this.features[u] && h && (this.features[u] = new h(this)), b && (l = b));
    }
    if (!this.projection && s) {
      this.projection = new s(i, this.latestValues, this.parent && this.parent.projection);
      const { layoutId: c, layout: u, drag: d, dragConstraints: h, layoutScroll: p, layoutRoot: b } = r;
      this.projection.setOptions({
        layoutId: c,
        layout: u,
        alwaysMeasureLayout: !!d || h && Jt(h),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: a,
        layoutScroll: p,
        layoutRoot: b
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update(this.props, this.prevProps) : (r.mount(), r.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : re();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let n = 0; n < yc.length; n++) {
      const o = yc[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = V2(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (n.initial = this.props.initial), n;
    }
    const r = {};
    for (let n = 0; n < F2; n++) {
      const o = _a[n], i = this.props[o];
      (Kr(i) || i === !1) && (r[o] = i);
    }
    return r;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)), this.values.set(t, r), this.latestValues[t] = r.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && r !== void 0 && (n = fr(r, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = La(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !we(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Xa()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Dd extends D2 {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: r, ...n }, { transformValues: o }, i) {
    let a = ew(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      Qk(this, n, a);
      const s = M2(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function I2(e) {
  return window.getComputedStyle(e);
}
class z2 extends Dd {
  readValueFromInstance(t, r) {
    if (Ht.has(r)) {
      const n = Ha(r);
      return n && n.default || 0;
    } else {
      const n = I2(t), o = (Pu(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Td(t, r);
  }
  build(t, r, n, o) {
    Va(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return za(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    we(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    Bu(t, r, n, o);
  }
}
class L2 extends Dd {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Ht.has(r)) {
      const n = Ha(r);
      return n && n.default || 0;
    }
    return r = Vu.has(r) ? r : Ia(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return re();
  }
  scrapeMotionValuesFromProps(t, r) {
    return Fu(t, r);
  }
  build(t, r, n, o) {
    Fa(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    $u(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = Da(t.tagName), super.mount(t);
  }
}
const O2 = (e, t) => Ba(e) ? new L2(t, { enableHardwareAcceleration: !1 }) : new z2(t, { enableHardwareAcceleration: !0 }), j2 = {
  layout: {
    ProjectionNode: Bd,
    MeasureLayout: Pd
  }
}, N2 = {
  ...pw,
  ...$x,
  ...v2,
  ...j2
}, W2 = /* @__PURE__ */ NS((e, t) => bx(e, t, N2, O2));
function Id() {
  const e = xe(!1);
  return to(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function H2() {
  const e = Id(), [t, r] = et(0), n = Nt(() => {
    e.current && r(t + 1);
  }, [t]);
  return [Nt(() => Q.postRender(n), [n]), t];
}
class U2 extends ce.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      n.height = r.offsetHeight || 0, n.width = r.offsetWidth || 0, n.top = r.offsetTop, n.left = r.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function G2({ children: e, isPresent: t }) {
  const r = ca(), n = xe(null), o = xe({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return Tc(() => {
    const { width: i, height: a, top: s, left: l } = o.current;
    if (t || !n.current || !i || !a)
      return;
    n.current.dataset.motionPopId = r;
    const c = document.createElement("style");
    return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), ce.createElement(U2, { isPresent: t, childRef: n, sizeRef: o }, ce.cloneElement(e, { ref: n }));
}
const _i = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = Ra(q2), l = ca(), c = fe(
    () => ({
      id: l,
      initial: t,
      isPresent: r,
      custom: o,
      onExitComplete: (u) => {
        s.set(u, !0);
        for (const d of s.values())
          if (!d)
            return;
        n && n();
      },
      register: (u) => (s.set(u, !1), () => s.delete(u))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? void 0 : [r]
  );
  return fe(() => {
    s.forEach((u, d) => s.set(d, !1));
  }, [r]), ce.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), a === "popLayout" && (e = ce.createElement(G2, { isPresent: r }, e)), ce.createElement(nn.Provider, { value: c }, e);
};
function q2() {
  return /* @__PURE__ */ new Map();
}
function K2(e) {
  return ve(() => () => e(), []);
}
const Qt = (e) => e.key || "";
function X2(e, t) {
  e.forEach((r) => {
    const n = Qt(r);
    t.set(n, r);
  });
}
function Y2(e) {
  const t = [];
  return hh.forEach(e, (r) => {
    da(r) && t.push(r);
  }), t;
}
const Z2 = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  let [s] = H2();
  const l = Z(Ma).forceRender;
  l && (s = l);
  const c = Id(), u = Y2(e);
  let d = u;
  const h = /* @__PURE__ */ new Set(), p = xe(d), b = xe(/* @__PURE__ */ new Map()).current, y = xe(!0);
  if (to(() => {
    y.current = !1, X2(u, b), p.current = d;
  }), K2(() => {
    y.current = !0, b.clear(), h.clear();
  }), y.current)
    return ce.createElement(ce.Fragment, null, d.map((S) => ce.createElement(_i, { key: Qt(S), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: a }, S)));
  d = [...d];
  const x = p.current.map(Qt), k = u.map(Qt), w = x.length;
  for (let S = 0; S < w; S++) {
    const T = x[S];
    k.indexOf(T) === -1 && h.add(T);
  }
  return a === "wait" && h.size && (d = []), h.forEach((S) => {
    if (k.indexOf(S) !== -1)
      return;
    const T = b.get(S);
    if (!T)
      return;
    const A = x.indexOf(S), B = () => {
      b.delete(S), h.delete(S);
      const E = p.current.findIndex((M) => M.key === S);
      if (p.current.splice(E, 1), !h.size) {
        if (p.current = u, c.current === !1)
          return;
        s(), n && n();
      }
    };
    d.splice(A, 0, ce.createElement(_i, { key: Qt(T), isPresent: !1, onExitComplete: B, custom: t, presenceAffectsLayout: i, mode: a }, T));
  }), d = d.map((S) => {
    const T = S.key;
    return h.has(T) ? S : ce.createElement(_i, { key: Qt(S), isPresent: !0, presenceAffectsLayout: i, mode: a }, S);
  }), ce.createElement(ce.Fragment, null, h.size ? d : d.map((S) => ua(S)));
};
var Q2 = (...e) => e.filter(Boolean).join(" "), J2 = Bm({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Ya = ft((e, t) => {
  const r = Aa("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = ho(e), c = Q2("chakra-spinner", s), u = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${J2} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ C.createElement(me.div, {
    ref: t,
    __css: u,
    className: c,
    ...l
  }, n && /* @__PURE__ */ C.createElement(me.span, {
    srOnly: !0
  }, n));
});
Ya.displayName = "Spinner";
var zo = (...e) => e.filter(Boolean).join(" ");
function eC(e) {
  return /* @__PURE__ */ C.createElement(rn, {
    viewBox: "0 0 24 24",
    ...e
  }, /* @__PURE__ */ C.createElement("path", {
    fill: "currentColor",
    d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
  }));
}
function tC(e) {
  return /* @__PURE__ */ C.createElement(rn, {
    viewBox: "0 0 24 24",
    ...e
  }, /* @__PURE__ */ C.createElement("path", {
    fill: "currentColor",
    d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
  }));
}
function vc(e) {
  return /* @__PURE__ */ C.createElement(rn, {
    viewBox: "0 0 24 24",
    ...e
  }, /* @__PURE__ */ C.createElement("path", {
    fill: "currentColor",
    d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
  }));
}
var [rC, nC] = tn({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [oC, Za] = tn({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), zd = {
  info: { icon: tC, colorScheme: "blue" },
  warning: { icon: vc, colorScheme: "orange" },
  success: { icon: eC, colorScheme: "green" },
  error: { icon: vc, colorScheme: "red" },
  loading: { icon: Ya, colorScheme: "blue" }
};
function iC(e) {
  return zd[e].colorScheme;
}
function aC(e) {
  return zd[e].icon;
}
var Ld = ft(function(t, r) {
  const { status: n = "info", addRole: o = !0, ...i } = ho(t), a = t.colorScheme ?? iC(n), s = CS("Alert", { ...t, colorScheme: a }), l = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...s.container
  };
  return /* @__PURE__ */ C.createElement(rC, {
    value: { status: n }
  }, /* @__PURE__ */ C.createElement(oC, {
    value: s
  }, /* @__PURE__ */ C.createElement(me.div, {
    role: o ? "alert" : void 0,
    ref: r,
    ...i,
    className: zo("chakra-alert", t.className),
    __css: l
  })));
});
Ld.displayName = "Alert";
var Od = ft(function(t, r) {
  const o = {
    display: "inline",
    ...Za().description
  };
  return /* @__PURE__ */ C.createElement(me.div, {
    ref: r,
    ...t,
    className: zo("chakra-alert__desc", t.className),
    __css: o
  });
});
Od.displayName = "AlertDescription";
function jd(e) {
  const { status: t } = nC(), r = aC(t), n = Za(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ C.createElement(me.span, {
    display: "inherit",
    ...e,
    className: zo("chakra-alert__icon", e.className),
    __css: o
  }, e.children || /* @__PURE__ */ C.createElement(r, {
    h: "100%",
    w: "100%"
  }));
}
jd.displayName = "AlertIcon";
var Nd = ft(function(t, r) {
  const n = Za();
  return /* @__PURE__ */ C.createElement(me.div, {
    ref: r,
    ...t,
    className: zo("chakra-alert__title", t.className),
    __css: n.title
  });
});
Nd.displayName = "AlertTitle";
var Lo = (...e) => e.filter(Boolean).join(" "), Sc = (e) => e ? "" : void 0, [sC, lC] = tn({
  strict: !1,
  name: "ButtonGroupContext"
});
function ia(e) {
  const { children: t, className: r, ...n } = e, o = da(t) ? ua(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = Lo("chakra-button__icon", r);
  return /* @__PURE__ */ C.createElement(me.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...n,
    className: i
  }, o);
}
ia.displayName = "ButtonIcon";
function aa(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ C.createElement(Ya, {
      color: "currentColor",
      width: "1em",
      height: "1em"
    }),
    className: i,
    __css: a,
    ...s
  } = e, l = Lo("chakra-button__spinner", i), c = r === "start" ? "marginEnd" : "marginStart", u = fe(() => ({
    display: "flex",
    alignItems: "center",
    position: t ? "relative" : "absolute",
    [c]: t ? n : 0,
    fontSize: "1em",
    lineHeight: "normal",
    ...a
  }), [a, t, c, n]);
  return /* @__PURE__ */ C.createElement(me.div, {
    className: l,
    ...s,
    __css: u
  }, o);
}
aa.displayName = "ButtonSpinner";
function cC(e) {
  const [t, r] = et(!e);
  return { ref: Nt((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
var Qa = ft((e, t) => {
  const r = lC(), n = Aa("Button", { ...r, ...e }), {
    isDisabled: o = r == null ? void 0 : r.isDisabled,
    isLoading: i,
    isActive: a,
    children: s,
    leftIcon: l,
    rightIcon: c,
    loadingText: u,
    iconSpacing: d = "0.5rem",
    type: h,
    spinner: p,
    spinnerPlacement: b = "start",
    className: y,
    as: x,
    ...k
  } = ho(e), w = fe(() => {
    const B = { ...n == null ? void 0 : n._focus, zIndex: 1 };
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
      ...!!r && { _focus: B }
    };
  }, [n, r]), { ref: S, type: T } = cC(x), A = { rightIcon: c, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ C.createElement(me.button, {
    disabled: o || i,
    ref: _S(t, S),
    as: x,
    type: h ?? T,
    "data-active": Sc(a),
    "data-loading": Sc(i),
    __css: w,
    className: Lo("chakra-button", y),
    ...k
  }, i && b === "start" && /* @__PURE__ */ C.createElement(aa, {
    className: "chakra-button__spinner--start",
    label: u,
    placement: "start",
    spacing: d
  }, p), i ? u || /* @__PURE__ */ C.createElement(me.span, {
    opacity: 0
  }, /* @__PURE__ */ C.createElement(xc, {
    ...A
  })) : /* @__PURE__ */ C.createElement(xc, {
    ...A
  }), i && b === "end" && /* @__PURE__ */ C.createElement(aa, {
    className: "chakra-button__spinner--end",
    label: u,
    placement: "end",
    spacing: d
  }, p));
});
Qa.displayName = "Button";
function xc(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ C.createElement(C.Fragment, null, t && /* @__PURE__ */ C.createElement(ia, {
    marginEnd: o
  }, t), n, r && /* @__PURE__ */ C.createElement(ia, {
    marginStart: o
  }, r));
}
var uC = ft(function(t, r) {
  const {
    size: n,
    colorScheme: o,
    variant: i,
    className: a,
    spacing: s = "0.5rem",
    isAttached: l,
    isDisabled: c,
    ...u
  } = t, d = Lo("chakra-button__group", a), h = fe(() => ({ size: n, colorScheme: o, variant: i, isDisabled: c }), [n, o, i, c]);
  let p = {
    display: "inline-flex"
  };
  return l ? p = {
    ...p,
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  } : p = {
    ...p,
    "& > *:not(style) ~ *:not(style)": { marginStart: s }
  }, /* @__PURE__ */ C.createElement(sC, {
    value: h
  }, /* @__PURE__ */ C.createElement(me.div, {
    ref: r,
    role: "group",
    __css: p,
    className: d,
    "data-attached": l ? "" : void 0,
    ...u
  }));
});
uC.displayName = "ButtonGroup";
var dC = ft((e, t) => {
  const { icon: r, children: n, isRound: o, "aria-label": i, ...a } = e, s = r || n, l = da(s) ? ua(s, {
    "aria-hidden": !0,
    focusable: !1
  }) : null;
  return /* @__PURE__ */ C.createElement(Qa, {
    padding: "0",
    borderRadius: o ? "full" : void 0,
    ref: t,
    "aria-label": i,
    ...a
  }, l);
});
dC.displayName = "IconButton";
function kc(e, t) {
  const r = xe(!1), n = xe(!1);
  ve(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), ve(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
function fC(e) {
  return /* @__PURE__ */ C.createElement(rn, {
    focusable: "false",
    "aria-hidden": !0,
    ...e
  }, /* @__PURE__ */ C.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}
var Wd = ft(function(t, r) {
  const n = Aa("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = ho(t), l = {
    outline: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  };
  return /* @__PURE__ */ C.createElement(me.button, {
    type: "button",
    "aria-label": "Close",
    ref: r,
    disabled: i,
    __css: {
      ...l,
      ...n,
      ...a
    },
    ...s
  }, o || /* @__PURE__ */ C.createElement(fC, {
    width: "1em",
    height: "1em"
  }));
});
Wd.displayName = "CloseButton";
var Hd = `
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`, hC = () => /* @__PURE__ */ C.createElement(Ao, {
  styles: Hd
}), pC = () => /* @__PURE__ */ C.createElement(Ao, {
  styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${Hd}
    `
}), mC = {
  body: {
    classList: {
      add() {
      },
      remove() {
      }
    }
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  }
}, Ud = mC, Zt = () => {
}, gC = {
  document: Ud,
  navigator: {
    userAgent: ""
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener: Zt,
  removeEventListener: Zt,
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  matchMedia() {
    return {
      matches: !1,
      addListener: Zt,
      removeListener: Zt
    };
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
  setTimeout: () => 0,
  clearTimeout: Zt,
  setInterval: () => 0,
  clearInterval: Zt
}, bC = gC, yC = {
  window: bC,
  document: Ud
}, Gd = typeof window < "u" ? { window, document } : yC, qd = Ve(Gd);
qd.displayName = "EnvironmentContext";
function Kd(e) {
  const { children: t, environment: r } = e, [n, o] = et(null), [i, a] = et(!1);
  ve(() => a(!0), []);
  const s = fe(() => {
    if (r)
      return r;
    const l = n == null ? void 0 : n.ownerDocument, c = n == null ? void 0 : n.ownerDocument.defaultView;
    return l ? { document: l, window: c } : Gd;
  }, [n, r]);
  return /* @__PURE__ */ C.createElement(qd.Provider, {
    value: s
  }, t, !r && i && /* @__PURE__ */ C.createElement("span", {
    id: "__chakra_env",
    hidden: !0,
    ref: (l) => {
      ph(() => {
        l && o(l);
      });
    }
  }));
}
Kd.displayName = "EnvironmentProvider";
var [vC, SC] = tn({
  strict: !1,
  name: "PortalManagerContext"
});
function Xd(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ C.createElement(vC, {
    value: { zIndex: r }
  }, t);
}
Xd.displayName = "PortalManager";
var [Yd, xC] = tn({
  strict: !1,
  name: "PortalContext"
}), Ja = "chakra-portal", kC = ".chakra-portal", wC = (e) => /* @__PURE__ */ C.createElement("div", {
  className: "chakra-portal-zIndex",
  style: {
    position: "absolute",
    zIndex: e.zIndex,
    top: 0,
    left: 0,
    right: 0
  }
}, e.children), CC = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = et(null), i = xe(null), [, a] = et({});
  ve(() => a({}), []);
  const s = xC(), l = SC();
  Gn(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    i.current = u.createElement("div"), i.current.className = Ja, d.appendChild(i.current), a({});
    const h = i.current;
    return () => {
      d.contains(h) && d.removeChild(h);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ C.createElement(wC, {
    zIndex: l == null ? void 0 : l.zIndex
  }, r) : r;
  return i.current ? Pc(/* @__PURE__ */ C.createElement(Yd, {
    value: i.current
  }, c), i.current) : /* @__PURE__ */ C.createElement("span", {
    ref: (u) => {
      u && o(u);
    }
  });
}, TC = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = fe(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Ja), l;
  }, [o]), [, s] = et({});
  return Gn(() => s({}), []), Gn(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? Pc(/* @__PURE__ */ C.createElement(Yd, {
    value: n ? a : null
  }, t), a) : null;
};
function cn(e) {
  const { containerRef: t, ...r } = e;
  return t ? /* @__PURE__ */ C.createElement(TC, {
    containerRef: t,
    ...r
  }) : /* @__PURE__ */ C.createElement(CC, {
    ...r
  });
}
cn.defaultProps = {
  appendToParentPortal: !0
};
cn.className = Ja;
cn.selector = kC;
cn.displayName = "Portal";
function PC(e, t) {
  const r = MS(e);
  ve(() => {
    if (t == null)
      return;
    let n = null;
    return n = window.setTimeout(() => {
      r();
    }, t), () => {
      n && window.clearTimeout(n);
    };
  }, [t, r]);
}
function AC(e, ...t) {
  return EC(e) ? e(...t) : e;
}
var EC = (e) => typeof e == "function", _C = (e, t) => e.find((r) => r.id === t);
function wc(e, t) {
  const r = Zd(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function Zd(e, t) {
  for (const [r, n] of Object.entries(e))
    if (_C(n, t))
      return r;
}
function RC(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function MC(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0, n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: 5500,
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: i,
    left: a
  };
}
var BC = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Or = VC(BC);
function VC(e) {
  let t = e;
  const r = /* @__PURE__ */ new Set(), n = (o) => {
    t = o(t), r.forEach((i) => i());
  };
  return {
    getState: () => t,
    subscribe: (o) => (r.add(o), () => {
      n(() => e), r.delete(o);
    }),
    removeToast: (o, i) => {
      n((a) => ({
        ...a,
        [i]: a[i].filter((s) => s.id != o)
      }));
    },
    notify: (o, i) => {
      const a = $C(o, i), { position: s, id: l } = a;
      return n((c) => {
        const d = s.includes("top") ? [a, ...c[s] ?? []] : [...c[s] ?? [], a];
        return {
          ...c,
          [s]: d
        };
      }), l;
    },
    update: (o, i) => {
      o && n((a) => {
        const s = { ...a }, { position: l, index: c } = wc(s, o);
        return l && c !== -1 && (s[l][c] = {
          ...s[l][c],
          ...i,
          message: DC(i)
        }), s;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      n((i) => (o ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce((l, c) => (l[c] = i[c].map((u) => ({
        ...u,
        requestClose: !0
      })), l), { ...i }));
    },
    close: (o) => {
      n((i) => {
        const a = Zd(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!wc(Or.getState(), o).position
  };
}
var Cc = 0;
function $C(e, t = {}) {
  Cc += 1;
  const r = t.id ?? Cc, n = t.position ?? "bottom";
  return {
    id: r,
    message: e,
    position: n,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Or.removeToast(String(r), n),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var FC = (e) => {
  const {
    status: t,
    variant: r = "solid",
    id: n,
    title: o,
    isClosable: i,
    onClose: a,
    description: s,
    icon: l
  } = e, c = n ? {
    root: `toast-${n}`,
    title: `toast-${n}-title`,
    description: `toast-${n}-description`
  } : void 0;
  return /* @__PURE__ */ C.createElement(Ld, {
    addRole: !1,
    status: t,
    variant: r,
    id: c == null ? void 0 : c.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto"
  }, /* @__PURE__ */ C.createElement(jd, null, l), /* @__PURE__ */ C.createElement(me.div, {
    flex: "1",
    maxWidth: "100%"
  }, o && /* @__PURE__ */ C.createElement(Nd, {
    id: c == null ? void 0 : c.title
  }, o), s && /* @__PURE__ */ C.createElement(Od, {
    id: c == null ? void 0 : c.description,
    display: "block"
  }, s)), i && /* @__PURE__ */ C.createElement(Wd, {
    size: "sm",
    onClick: a,
    position: "absolute",
    insetEnd: 1,
    top: 1
  }));
};
function DC(e = {}) {
  const { render: t, toastComponent: r = FC } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ C.createElement(r, {
    ...o,
    ...e
  });
}
var IC = {
  initial: (e) => {
    const { position: t } = e, r = ["top", "bottom"].includes(t) ? "y" : "x";
    let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (n = 1), {
      opacity: 0,
      [r]: n * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}, Qd = mh((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: c = IC,
    toastSpacing: u = "0.5rem"
  } = e, [d, h] = et(s), p = Iw();
  kc(() => {
    p || n == null || n();
  }, [p]), kc(() => {
    h(s);
  }, [s]);
  const b = () => h(null), y = () => h(s), x = () => {
    p && o();
  };
  ve(() => {
    p && i && o();
  }, [p, i, o]), PC(x, d);
  const k = fe(() => ({
    pointerEvents: "auto",
    maxWidth: 560,
    minWidth: 300,
    margin: u,
    ...l
  }), [l, u]), w = fe(() => RC(a), [a]);
  return /* @__PURE__ */ C.createElement(W2.li, {
    layout: !0,
    className: "chakra-toast",
    variants: c,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    onHoverStart: b,
    onHoverEnd: y,
    custom: { position: a },
    style: w
  }, /* @__PURE__ */ C.createElement(me.div, {
    role: "status",
    "aria-atomic": "true",
    className: "chakra-toast__inner",
    __css: k
  }, AC(r, { id: t, onClose: x })));
});
Qd.displayName = "ToastComponent";
var zC = (e) => {
  const t = gh(Or.subscribe, Or.getState, Or.getState), {
    children: r,
    motionVariants: n,
    component: o = Qd,
    portalProps: i
  } = e, s = Object.keys(t).map((l) => {
    const c = t[l];
    return /* @__PURE__ */ C.createElement("ul", {
      role: "region",
      "aria-live": "polite",
      key: l,
      id: `chakra-toast-manager-${l}`,
      style: MC(l)
    }, /* @__PURE__ */ C.createElement(Z2, {
      initial: !1
    }, c.map((u) => /* @__PURE__ */ C.createElement(o, {
      key: u.id,
      motionVariants: n,
      ...u
    }))));
  });
  return /* @__PURE__ */ C.createElement(C.Fragment, null, r, /* @__PURE__ */ C.createElement(cn, {
    ...i
  }, s));
}, LC = (e) => {
  const {
    children: t,
    colorModeManager: r,
    portalZIndex: n,
    resetCSS: o = !0,
    theme: i = {},
    environment: a,
    cssVarsRoot: s
  } = e, l = /* @__PURE__ */ C.createElement(Kd, {
    environment: a
  }, t);
  return /* @__PURE__ */ C.createElement(bS, {
    theme: i,
    cssVarsRoot: s
  }, /* @__PURE__ */ C.createElement(Ac, {
    colorModeManager: r,
    options: i.config
  }, o ? /* @__PURE__ */ C.createElement(pC, null) : /* @__PURE__ */ C.createElement(hC, null), /* @__PURE__ */ C.createElement(vS, null), n ? /* @__PURE__ */ C.createElement(Xd, {
    zIndex: n
  }, l) : l));
};
function OC({
  children: e,
  theme: t = cS,
  toastOptions: r,
  ...n
}) {
  return /* @__PURE__ */ C.createElement(LC, {
    theme: t,
    ...n
  }, e, /* @__PURE__ */ C.createElement(zC, {
    ...r
  }));
}
function jC({ text: e }) {
  return /* @__PURE__ */ C.createElement("div", null, e);
}
function UC({
  label: e,
  onClick: t
}) {
  return /* @__PURE__ */ C.createElement(Qa, { onClick: t }, /* @__PURE__ */ C.createElement(jC, { text: e }));
}
function GC({ children: e }) {
  return /* @__PURE__ */ C.createElement(OC, null, e);
}
export {
  UC as Button,
  jC as Label,
  GC as ThemeProvider
};
