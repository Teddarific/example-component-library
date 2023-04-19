import * as Tt from "https://esm.sh/react@18.2.0";
import F, { createContext as Me, useContext as ke, forwardRef as Dt, createElement as Pr, Fragment as Ya, useRef as qa, useMemo as tr, isValidElement as Gt, cloneElement as Ht, useState as Ka, useCallback as Za } from "https://esm.sh/react@18.2.0";
var Vt = Me({});
Vt.displayName = "ColorModeContext";
function Ut() {
  const e = ke(Vt);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qe = {}, Ja = {
  get exports() {
    return Qe;
  },
  set exports(e) {
    Qe = e;
  }
};
(function(e, r) {
  var t = 200, a = "__lodash_hash_undefined__", s = 800, c = 16, u = 9007199254740991, d = "[object Arguments]", f = "[object Array]", m = "[object AsyncFunction]", p = "[object Boolean]", g = "[object Date]", $ = "[object Error]", S = "[object Function]", y = "[object GeneratorFunction]", b = "[object Map]", v = "[object Number]", k = "[object Null]", T = "[object Object]", M = "[object Proxy]", J = "[object RegExp]", j = "[object Set]", D = "[object String]", B = "[object Undefined]", vr = "[object WeakMap]", ge = "[object ArrayBuffer]", me = "[object DataView]", _n = "[object Float32Array]", xn = "[object Float64Array]", wn = "[object Int8Array]", Tn = "[object Int16Array]", Cn = "[object Int32Array]", Rn = "[object Uint8Array]", En = "[object Uint8ClampedArray]", $n = "[object Uint16Array]", In = "[object Uint32Array]", Bn = /[\\^$.*+?()[\]{}|]/g, Pn = /^\[object .+?Constructor\]$/, An = /^(?:0|[1-9]\d*)$/, A = {};
  A[_n] = A[xn] = A[wn] = A[Tn] = A[Cn] = A[Rn] = A[En] = A[$n] = A[In] = !0, A[d] = A[f] = A[ge] = A[p] = A[me] = A[g] = A[$] = A[S] = A[b] = A[v] = A[T] = A[J] = A[j] = A[D] = A[vr] = !1;
  var rt = typeof Ve == "object" && Ve && Ve.Object === Object && Ve, On = typeof self == "object" && self && self.Object === Object && self, xe = rt || On || Function("return this")(), tt = r && !r.nodeType && r, we = tt && !0 && e && !e.nodeType && e, nt = we && we.exports === tt, Sr = nt && rt.process, at = function() {
    try {
      var n = we && we.require && we.require("util").types;
      return n || Sr && Sr.binding && Sr.binding("util");
    } catch {
    }
  }(), ot = at && at.isTypedArray;
  function Mn(n, o, l) {
    switch (l.length) {
      case 0:
        return n.call(o);
      case 1:
        return n.call(o, l[0]);
      case 2:
        return n.call(o, l[0], l[1]);
      case 3:
        return n.call(o, l[0], l[1], l[2]);
    }
    return n.apply(o, l);
  }
  function zn(n, o) {
    for (var l = -1, h = Array(n); ++l < n; )
      h[l] = o(l);
    return h;
  }
  function Ln(n) {
    return function(o) {
      return n(o);
    };
  }
  function Fn(n, o) {
    return n == null ? void 0 : n[o];
  }
  function Wn(n, o) {
    return function(l) {
      return n(o(l));
    };
  }
  var Nn = Array.prototype, jn = Function.prototype, Le = Object.prototype, kr = xe["__core-js_shared__"], Fe = jn.toString, ae = Le.hasOwnProperty, it = function() {
    var n = /[^.]+$/.exec(kr && kr.keys && kr.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }(), st = Le.toString, Dn = Fe.call(Object), Gn = RegExp(
    "^" + Fe.call(ae).replace(Bn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), We = nt ? xe.Buffer : void 0, ct = xe.Symbol, lt = xe.Uint8Array, dt = We ? We.allocUnsafe : void 0, ut = Wn(Object.getPrototypeOf, Object), ft = Object.create, Hn = Le.propertyIsEnumerable, Vn = Nn.splice, le = ct ? ct.toStringTag : void 0, Ne = function() {
    try {
      var n = wr(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  }(), Un = We ? We.isBuffer : void 0, pt = Math.max, Xn = Date.now, ht = wr(xe, "Map"), Te = wr(Object, "create"), Yn = function() {
    function n() {
    }
    return function(o) {
      if (!ue(o))
        return {};
      if (ft)
        return ft(o);
      n.prototype = o;
      var l = new n();
      return n.prototype = void 0, l;
    };
  }();
  function de(n) {
    var o = -1, l = n == null ? 0 : n.length;
    for (this.clear(); ++o < l; ) {
      var h = n[o];
      this.set(h[0], h[1]);
    }
  }
  function qn() {
    this.__data__ = Te ? Te(null) : {}, this.size = 0;
  }
  function Kn(n) {
    var o = this.has(n) && delete this.__data__[n];
    return this.size -= o ? 1 : 0, o;
  }
  function Zn(n) {
    var o = this.__data__;
    if (Te) {
      var l = o[n];
      return l === a ? void 0 : l;
    }
    return ae.call(o, n) ? o[n] : void 0;
  }
  function Jn(n) {
    var o = this.__data__;
    return Te ? o[n] !== void 0 : ae.call(o, n);
  }
  function Qn(n, o) {
    var l = this.__data__;
    return this.size += this.has(n) ? 0 : 1, l[n] = Te && o === void 0 ? a : o, this;
  }
  de.prototype.clear = qn, de.prototype.delete = Kn, de.prototype.get = Zn, de.prototype.has = Jn, de.prototype.set = Qn;
  function oe(n) {
    var o = -1, l = n == null ? 0 : n.length;
    for (this.clear(); ++o < l; ) {
      var h = n[o];
      this.set(h[0], h[1]);
    }
  }
  function ea() {
    this.__data__ = [], this.size = 0;
  }
  function ra(n) {
    var o = this.__data__, l = je(o, n);
    if (l < 0)
      return !1;
    var h = o.length - 1;
    return l == h ? o.pop() : Vn.call(o, l, 1), --this.size, !0;
  }
  function ta(n) {
    var o = this.__data__, l = je(o, n);
    return l < 0 ? void 0 : o[l][1];
  }
  function na(n) {
    return je(this.__data__, n) > -1;
  }
  function aa(n, o) {
    var l = this.__data__, h = je(l, n);
    return h < 0 ? (++this.size, l.push([n, o])) : l[h][1] = o, this;
  }
  oe.prototype.clear = ea, oe.prototype.delete = ra, oe.prototype.get = ta, oe.prototype.has = na, oe.prototype.set = aa;
  function be(n) {
    var o = -1, l = n == null ? 0 : n.length;
    for (this.clear(); ++o < l; ) {
      var h = n[o];
      this.set(h[0], h[1]);
    }
  }
  function oa() {
    this.size = 0, this.__data__ = {
      hash: new de(),
      map: new (ht || oe)(),
      string: new de()
    };
  }
  function ia(n) {
    var o = Ge(this, n).delete(n);
    return this.size -= o ? 1 : 0, o;
  }
  function sa(n) {
    return Ge(this, n).get(n);
  }
  function ca(n) {
    return Ge(this, n).has(n);
  }
  function la(n, o) {
    var l = Ge(this, n), h = l.size;
    return l.set(n, o), this.size += l.size == h ? 0 : 1, this;
  }
  be.prototype.clear = oa, be.prototype.delete = ia, be.prototype.get = sa, be.prototype.has = ca, be.prototype.set = la;
  function ye(n) {
    var o = this.__data__ = new oe(n);
    this.size = o.size;
  }
  function da() {
    this.__data__ = new oe(), this.size = 0;
  }
  function ua(n) {
    var o = this.__data__, l = o.delete(n);
    return this.size = o.size, l;
  }
  function fa(n) {
    return this.__data__.get(n);
  }
  function pa(n) {
    return this.__data__.has(n);
  }
  function ha(n, o) {
    var l = this.__data__;
    if (l instanceof oe) {
      var h = l.__data__;
      if (!ht || h.length < t - 1)
        return h.push([n, o]), this.size = ++l.size, this;
      l = this.__data__ = new be(h);
    }
    return l.set(n, o), this.size = l.size, this;
  }
  ye.prototype.clear = da, ye.prototype.delete = ua, ye.prototype.get = fa, ye.prototype.has = pa, ye.prototype.set = ha;
  function ga(n, o) {
    var l = Rr(n), h = !l && Cr(n), x = !l && !h && vt(n), P = !l && !h && !x && kt(n), z = l || h || x || P, _ = z ? zn(n.length, String) : [], L = _.length;
    for (var K in n)
      (o || ae.call(n, K)) && !(z && // Safari 9 has enumerable `arguments.length` in strict mode.
      (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      x && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      P && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
      bt(K, L))) && _.push(K);
    return _;
  }
  function _r(n, o, l) {
    (l !== void 0 && !He(n[o], l) || l === void 0 && !(o in n)) && xr(n, o, l);
  }
  function ma(n, o, l) {
    var h = n[o];
    (!(ae.call(n, o) && He(h, l)) || l === void 0 && !(o in n)) && xr(n, o, l);
  }
  function je(n, o) {
    for (var l = n.length; l--; )
      if (He(n[l][0], o))
        return l;
    return -1;
  }
  function xr(n, o, l) {
    o == "__proto__" && Ne ? Ne(n, o, {
      configurable: !0,
      enumerable: !0,
      value: l,
      writable: !0
    }) : n[o] = l;
  }
  var ba = Ia();
  function De(n) {
    return n == null ? n === void 0 ? B : k : le && le in Object(n) ? Ba(n) : La(n);
  }
  function gt(n) {
    return Ce(n) && De(n) == d;
  }
  function ya(n) {
    if (!ue(n) || Ma(n))
      return !1;
    var o = $r(n) ? Gn : Pn;
    return o.test(ja(n));
  }
  function va(n) {
    return Ce(n) && St(n.length) && !!A[De(n)];
  }
  function Sa(n) {
    if (!ue(n))
      return za(n);
    var o = yt(n), l = [];
    for (var h in n)
      h == "constructor" && (o || !ae.call(n, h)) || l.push(h);
    return l;
  }
  function mt(n, o, l, h, x) {
    n !== o && ba(o, function(P, z) {
      if (x || (x = new ye()), ue(P))
        ka(n, o, z, l, mt, h, x);
      else {
        var _ = h ? h(Tr(n, z), P, z + "", n, o, x) : void 0;
        _ === void 0 && (_ = P), _r(n, z, _);
      }
    }, _t);
  }
  function ka(n, o, l, h, x, P, z) {
    var _ = Tr(n, l), L = Tr(o, l), K = z.get(L);
    if (K) {
      _r(n, l, K);
      return;
    }
    var X = P ? P(_, L, l + "", n, o, z) : void 0, Re = X === void 0;
    if (Re) {
      var Ir = Rr(L), Br = !Ir && vt(L), wt = !Ir && !Br && kt(L);
      X = L, Ir || Br || wt ? Rr(_) ? X = _ : Da(_) ? X = Ra(_) : Br ? (Re = !1, X = wa(L, !0)) : wt ? (Re = !1, X = Ca(L, !0)) : X = [] : Ga(L) || Cr(L) ? (X = _, Cr(_) ? X = Ha(_) : (!ue(_) || $r(_)) && (X = Pa(L))) : Re = !1;
    }
    Re && (z.set(L, X), x(X, L, h, P, z), z.delete(L)), _r(n, l, X);
  }
  function _a(n, o) {
    return Wa(Fa(n, o, xt), n + "");
  }
  var xa = Ne ? function(n, o) {
    return Ne(n, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Ua(o),
      writable: !0
    });
  } : xt;
  function wa(n, o) {
    if (o)
      return n.slice();
    var l = n.length, h = dt ? dt(l) : new n.constructor(l);
    return n.copy(h), h;
  }
  function Ta(n) {
    var o = new n.constructor(n.byteLength);
    return new lt(o).set(new lt(n)), o;
  }
  function Ca(n, o) {
    var l = o ? Ta(n.buffer) : n.buffer;
    return new n.constructor(l, n.byteOffset, n.length);
  }
  function Ra(n, o) {
    var l = -1, h = n.length;
    for (o || (o = Array(h)); ++l < h; )
      o[l] = n[l];
    return o;
  }
  function Ea(n, o, l, h) {
    var x = !l;
    l || (l = {});
    for (var P = -1, z = o.length; ++P < z; ) {
      var _ = o[P], L = h ? h(l[_], n[_], _, l, n) : void 0;
      L === void 0 && (L = n[_]), x ? xr(l, _, L) : ma(l, _, L);
    }
    return l;
  }
  function $a(n) {
    return _a(function(o, l) {
      var h = -1, x = l.length, P = x > 1 ? l[x - 1] : void 0, z = x > 2 ? l[2] : void 0;
      for (P = n.length > 3 && typeof P == "function" ? (x--, P) : void 0, z && Aa(l[0], l[1], z) && (P = x < 3 ? void 0 : P, x = 1), o = Object(o); ++h < x; ) {
        var _ = l[h];
        _ && n(o, _, h, P);
      }
      return o;
    });
  }
  function Ia(n) {
    return function(o, l, h) {
      for (var x = -1, P = Object(o), z = h(o), _ = z.length; _--; ) {
        var L = z[n ? _ : ++x];
        if (l(P[L], L, P) === !1)
          break;
      }
      return o;
    };
  }
  function Ge(n, o) {
    var l = n.__data__;
    return Oa(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map;
  }
  function wr(n, o) {
    var l = Fn(n, o);
    return ya(l) ? l : void 0;
  }
  function Ba(n) {
    var o = ae.call(n, le), l = n[le];
    try {
      n[le] = void 0;
      var h = !0;
    } catch {
    }
    var x = st.call(n);
    return h && (o ? n[le] = l : delete n[le]), x;
  }
  function Pa(n) {
    return typeof n.constructor == "function" && !yt(n) ? Yn(ut(n)) : {};
  }
  function bt(n, o) {
    var l = typeof n;
    return o = o ?? u, !!o && (l == "number" || l != "symbol" && An.test(n)) && n > -1 && n % 1 == 0 && n < o;
  }
  function Aa(n, o, l) {
    if (!ue(l))
      return !1;
    var h = typeof o;
    return (h == "number" ? Er(l) && bt(o, l.length) : h == "string" && o in l) ? He(l[o], n) : !1;
  }
  function Oa(n) {
    var o = typeof n;
    return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? n !== "__proto__" : n === null;
  }
  function Ma(n) {
    return !!it && it in n;
  }
  function yt(n) {
    var o = n && n.constructor, l = typeof o == "function" && o.prototype || Le;
    return n === l;
  }
  function za(n) {
    var o = [];
    if (n != null)
      for (var l in Object(n))
        o.push(l);
    return o;
  }
  function La(n) {
    return st.call(n);
  }
  function Fa(n, o, l) {
    return o = pt(o === void 0 ? n.length - 1 : o, 0), function() {
      for (var h = arguments, x = -1, P = pt(h.length - o, 0), z = Array(P); ++x < P; )
        z[x] = h[o + x];
      x = -1;
      for (var _ = Array(o + 1); ++x < o; )
        _[x] = h[x];
      return _[o] = l(z), Mn(n, this, _);
    };
  }
  function Tr(n, o) {
    if (!(o === "constructor" && typeof n[o] == "function") && o != "__proto__")
      return n[o];
  }
  var Wa = Na(xa);
  function Na(n) {
    var o = 0, l = 0;
    return function() {
      var h = Xn(), x = c - (h - l);
      if (l = h, x > 0) {
        if (++o >= s)
          return arguments[0];
      } else
        o = 0;
      return n.apply(void 0, arguments);
    };
  }
  function ja(n) {
    if (n != null) {
      try {
        return Fe.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  function He(n, o) {
    return n === o || n !== n && o !== o;
  }
  var Cr = gt(function() {
    return arguments;
  }()) ? gt : function(n) {
    return Ce(n) && ae.call(n, "callee") && !Hn.call(n, "callee");
  }, Rr = Array.isArray;
  function Er(n) {
    return n != null && St(n.length) && !$r(n);
  }
  function Da(n) {
    return Ce(n) && Er(n);
  }
  var vt = Un || Xa;
  function $r(n) {
    if (!ue(n))
      return !1;
    var o = De(n);
    return o == S || o == y || o == m || o == M;
  }
  function St(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= u;
  }
  function ue(n) {
    var o = typeof n;
    return n != null && (o == "object" || o == "function");
  }
  function Ce(n) {
    return n != null && typeof n == "object";
  }
  function Ga(n) {
    if (!Ce(n) || De(n) != T)
      return !1;
    var o = ut(n);
    if (o === null)
      return !0;
    var l = ae.call(o, "constructor") && o.constructor;
    return typeof l == "function" && l instanceof l && Fe.call(l) == Dn;
  }
  var kt = ot ? Ln(ot) : va;
  function Ha(n) {
    return Ea(n, _t(n));
  }
  function _t(n) {
    return Er(n) ? ga(n, !0) : Sa(n);
  }
  var Va = $a(function(n, o, l, h) {
    mt(n, o, l, h);
  });
  function Ua(n) {
    return function() {
      return n;
    };
  }
  function xt(n) {
    return n;
  }
  function Xa() {
    return !1;
  }
  e.exports = Va;
})(Ja, Qe);
const se = Qe;
function pe(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function fe(e, ...r) {
  return Qa(e) ? e(...r) : e;
}
var Qa = (e) => typeof e == "function", eo = (e) => /!(important)?$/.test(e), Ct = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, ro = (e, r) => (t) => {
  const a = String(r), s = eo(a), c = Ct(a), u = e ? `${e}.${c}` : c;
  let d = pe(t.__cssMap) && u in t.__cssMap ? t.__cssMap[u].varRef : r;
  return d = Ct(d), s ? `${d} !important` : d;
};
function Be(e) {
  const { scale: r, transform: t, compose: a } = e;
  return (c, u) => {
    const d = ro(r, c)(u);
    let f = (t == null ? void 0 : t(d, u)) ?? d;
    return a && (f = a(f, u)), f;
  };
}
var Ue = (...e) => (r) => e.reduce((t, a) => a(t), r);
function Q(e, r) {
  return (t) => {
    const a = { property: t, scale: e };
    return a.transform = Be({
      scale: e,
      transform: r
    }), a;
  };
}
var to = ({ rtl: e, ltr: r }) => (t) => t.direction === "rtl" ? e : r;
function no(e) {
  const { property: r, scale: t, transform: a } = e;
  return {
    scale: t,
    property: to(r),
    transform: t ? Be({
      scale: t,
      compose: a
    }) : a
  };
}
var Xt = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function ao() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Xt
  ].join(" ");
}
function oo() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Xt
  ].join(" ");
}
var io = {
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
}, so = {
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
function co(e) {
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
var lo = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Yt = "& > :not(style) ~ :not(style)", uo = {
  [Yt]: {
    marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
    marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
  }
}, fo = {
  [Yt]: {
    marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
    marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
  }
}, zr = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, po = new Set(Object.values(zr)), qt = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), ho = (e) => e.trim();
function go(e, r) {
  var t;
  if (e == null || qt.has(e))
    return e;
  const a = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g, { type: s, values: c } = ((t = a.exec(e)) == null ? void 0 : t.groups) ?? {};
  if (!s || !c)
    return e;
  const u = s.includes("-gradient") ? s : `${s}-gradient`, [d, ...f] = c.split(",").map(ho).filter(Boolean);
  if ((f == null ? void 0 : f.length) === 0)
    return e;
  const m = d in zr ? zr[d] : d;
  f.unshift(m);
  const p = f.map((g) => {
    if (po.has(g))
      return g;
    const $ = g.indexOf(" "), [S, y] = $ !== -1 ? [g.substr(0, $), g.substr($ + 1)] : [g], b = Kt(y) ? y : y && y.split(" "), v = `colors.${S}`, k = v in r.__cssMap ? r.__cssMap[v].varRef : S;
    return b ? [
      k,
      ...Array.isArray(b) ? b : [b]
    ].join(" ") : k;
  });
  return `${u}(${p.join(", ")})`;
}
var Kt = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), mo = (e, r) => go(e, r ?? {});
function bo(e) {
  return /^var\(--.+\)$/.test(e);
}
var yo = (e) => {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}, ee = (e) => (r) => `${e}(${r})`, w = {
  filter(e) {
    return e !== "auto" ? e : io;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : so;
  },
  ring(e) {
    return co(w.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? ao() : e === "auto-gpu" ? oo() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = yo(e);
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
    if (bo(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: mo,
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
    return e == null || Kt(e) || qt.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    const { space: r, divide: t } = lo[e] ?? {}, a = { flexDirection: e };
    return r && (a[r] = 1), t && (a[t] = 1), a;
  }
}, i = {
  borderWidths: Q("borderWidths"),
  borderStyles: Q("borderStyles"),
  colors: Q("colors"),
  borders: Q("borders"),
  radii: Q("radii", w.px),
  space: Q("space", Ue(w.vh, w.px)),
  spaceT: Q("space", Ue(w.vh, w.px)),
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
  sizes: Q("sizes", Ue(w.vh, w.px)),
  sizesT: Q("sizes", Ue(w.vh, w.fraction)),
  shadows: Q("shadows"),
  logical: no,
  blur: Q("blur", w.blur)
}, Ye = {
  background: i.colors("background"),
  backgroundColor: i.colors("backgroundColor"),
  backgroundImage: i.propT("backgroundImage", w.bgImage),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: w.bgClip },
  bgSize: i.prop("backgroundSize"),
  bgPosition: i.prop("backgroundPosition"),
  bg: i.colors("background"),
  bgColor: i.colors("backgroundColor"),
  bgPos: i.prop("backgroundPosition"),
  bgRepeat: i.prop("backgroundRepeat"),
  bgAttachment: i.prop("backgroundAttachment"),
  bgGradient: i.propT("backgroundImage", w.gradient),
  bgClip: { transform: w.bgClip }
};
Object.assign(Ye, {
  bgImage: Ye.backgroundImage,
  bgImg: Ye.backgroundImage
});
var C = {
  border: i.borders("border"),
  borderWidth: i.borderWidths("borderWidth"),
  borderStyle: i.borderStyles("borderStyle"),
  borderColor: i.colors("borderColor"),
  borderRadius: i.radii("borderRadius"),
  borderTop: i.borders("borderTop"),
  borderBlockStart: i.borders("borderBlockStart"),
  borderTopLeftRadius: i.radii("borderTopLeftRadius"),
  borderStartStartRadius: i.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: i.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: i.radii("borderTopRightRadius"),
  borderStartEndRadius: i.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: i.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: i.borders("borderRight"),
  borderInlineEnd: i.borders("borderInlineEnd"),
  borderBottom: i.borders("borderBottom"),
  borderBlockEnd: i.borders("borderBlockEnd"),
  borderBottomLeftRadius: i.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: i.radii("borderBottomRightRadius"),
  borderLeft: i.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: i.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: i.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: i.borders(["borderLeft", "borderRight"]),
  borderInline: i.borders("borderInline"),
  borderY: i.borders(["borderTop", "borderBottom"]),
  borderBlock: i.borders("borderBlock"),
  borderTopWidth: i.borderWidths("borderTopWidth"),
  borderBlockStartWidth: i.borderWidths("borderBlockStartWidth"),
  borderTopColor: i.colors("borderTopColor"),
  borderBlockStartColor: i.colors("borderBlockStartColor"),
  borderTopStyle: i.borderStyles("borderTopStyle"),
  borderBlockStartStyle: i.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: i.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: i.borderWidths("borderBlockEndWidth"),
  borderBottomColor: i.colors("borderBottomColor"),
  borderBlockEndColor: i.colors("borderBlockEndColor"),
  borderBottomStyle: i.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: i.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: i.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: i.borderWidths("borderInlineStartWidth"),
  borderLeftColor: i.colors("borderLeftColor"),
  borderInlineStartColor: i.colors("borderInlineStartColor"),
  borderLeftStyle: i.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: i.borderStyles("borderInlineStartStyle"),
  borderRightWidth: i.borderWidths("borderRightWidth"),
  borderInlineEndWidth: i.borderWidths("borderInlineEndWidth"),
  borderRightColor: i.colors("borderRightColor"),
  borderInlineEndColor: i.colors("borderInlineEndColor"),
  borderRightStyle: i.borderStyles("borderRightStyle"),
  borderInlineEndStyle: i.borderStyles("borderInlineEndStyle"),
  borderTopRadius: i.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: i.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: i.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: i.radii([
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
var vo = {
  color: i.colors("color"),
  textColor: i.colors("color"),
  fill: i.colors("fill"),
  stroke: i.colors("stroke")
}, Lr = {
  boxShadow: i.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: i.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: i.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Lr, {
  shadow: Lr.boxShadow
});
var So = {
  filter: { transform: w.filter },
  blur: i.blur("--chakra-blur"),
  brightness: i.propT("--chakra-brightness", w.brightness),
  contrast: i.propT("--chakra-contrast", w.contrast),
  hueRotate: i.degreeT("--chakra-hue-rotate"),
  invert: i.propT("--chakra-invert", w.invert),
  saturate: i.propT("--chakra-saturate", w.saturate),
  dropShadow: i.propT("--chakra-drop-shadow", w.dropShadow),
  backdropFilter: { transform: w.backdropFilter },
  backdropBlur: i.blur("--chakra-backdrop-blur"),
  backdropBrightness: i.propT("--chakra-backdrop-brightness", w.brightness),
  backdropContrast: i.propT("--chakra-backdrop-contrast", w.contrast),
  backdropHueRotate: i.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: i.propT("--chakra-backdrop-invert", w.invert),
  backdropSaturate: i.propT("--chakra-backdrop-saturate", w.saturate)
}, er = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: w.flexDirection },
  experimental_spaceX: {
    static: uo,
    transform: Be({
      scale: "space",
      transform: (e) => e !== null ? { "--chakra-space-x": e } : null
    })
  },
  experimental_spaceY: {
    static: fo,
    transform: Be({
      scale: "space",
      transform: (e) => e != null ? { "--chakra-space-y": e } : null
    })
  },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: i.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: i.space("gap"),
  rowGap: i.space("rowGap"),
  columnGap: i.space("columnGap")
};
Object.assign(er, {
  flexDir: er.flexDirection
});
var Zt = {
  gridGap: i.space("gridGap"),
  gridColumnGap: i.space("gridColumnGap"),
  gridRowGap: i.space("gridRowGap"),
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
}, ko = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: w.outline },
  outlineOffset: !0,
  outlineColor: i.colors("outlineColor")
}, Z = {
  width: i.sizesT("width"),
  inlineSize: i.sizesT("inlineSize"),
  height: i.sizes("height"),
  blockSize: i.sizes("blockSize"),
  boxSize: i.sizes(["width", "height"]),
  minWidth: i.sizes("minWidth"),
  minInlineSize: i.sizes("minInlineSize"),
  minHeight: i.sizes("minHeight"),
  minBlockSize: i.sizes("minBlockSize"),
  maxWidth: i.sizes("maxWidth"),
  maxInlineSize: i.sizes("maxInlineSize"),
  maxHeight: i.sizes("maxHeight"),
  maxBlockSize: i.sizes("maxBlockSize"),
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
  float: i.propT("float", w.float),
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
var _o = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: i.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: i.prop("listStyleImage")
};
function xo(e, r, t, a) {
  const s = typeof r == "string" ? r.split(".") : [r];
  for (a = 0; a < s.length && e; a += 1)
    e = e[s[a]];
  return e === void 0 ? t : e;
}
var wo = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (a, s, c, u) => {
    if (typeof a > "u")
      return e(a, s, c);
    r.has(a) || r.set(a, /* @__PURE__ */ new Map());
    const d = r.get(a);
    if (d.has(s))
      return d.get(s);
    const f = e(a, s, c, u);
    return d.set(s, f), f;
  };
}, To = wo(xo), Co = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Ro = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Ar = (e, r, t) => {
  const a = {}, s = To(e, r, {});
  for (const c in s)
    c in t && t[c] != null || (a[c] = s[c]);
  return a;
}, Eo = {
  srOnly: {
    transform(e) {
      return e === !0 ? Co : e === "focusable" ? Ro : {};
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
}, Ie = {
  position: !0,
  pos: i.prop("position"),
  zIndex: i.prop("zIndex", "zIndices"),
  inset: i.spaceT("inset"),
  insetX: i.spaceT(["left", "right"]),
  insetInline: i.spaceT("insetInline"),
  insetY: i.spaceT(["top", "bottom"]),
  insetBlock: i.spaceT("insetBlock"),
  top: i.spaceT("top"),
  insetBlockStart: i.spaceT("insetBlockStart"),
  bottom: i.spaceT("bottom"),
  insetBlockEnd: i.spaceT("insetBlockEnd"),
  left: i.spaceT("left"),
  insetInlineStart: i.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: i.spaceT("right"),
  insetInlineEnd: i.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Ie, {
  insetStart: Ie.insetInlineStart,
  insetEnd: Ie.insetInlineEnd
});
var $o = {
  ring: { transform: w.ring },
  ringColor: i.colors("--chakra-ring-color"),
  ringOffset: i.prop("--chakra-ring-offset-width"),
  ringOffsetColor: i.colors("--chakra-ring-offset-color"),
  ringInset: i.prop("--chakra-ring-inset")
}, O = {
  margin: i.spaceT("margin"),
  marginTop: i.spaceT("marginTop"),
  marginBlockStart: i.spaceT("marginBlockStart"),
  marginRight: i.spaceT("marginRight"),
  marginInlineEnd: i.spaceT("marginInlineEnd"),
  marginBottom: i.spaceT("marginBottom"),
  marginBlockEnd: i.spaceT("marginBlockEnd"),
  marginLeft: i.spaceT("marginLeft"),
  marginInlineStart: i.spaceT("marginInlineStart"),
  marginX: i.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: i.spaceT("marginInline"),
  marginY: i.spaceT(["marginTop", "marginBottom"]),
  marginBlock: i.spaceT("marginBlock"),
  padding: i.space("padding"),
  paddingTop: i.space("paddingTop"),
  paddingBlockStart: i.space("paddingBlockStart"),
  paddingRight: i.space("paddingRight"),
  paddingBottom: i.space("paddingBottom"),
  paddingBlockEnd: i.space("paddingBlockEnd"),
  paddingLeft: i.space("paddingLeft"),
  paddingInlineStart: i.space("paddingInlineStart"),
  paddingInlineEnd: i.space("paddingInlineEnd"),
  paddingX: i.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: i.space("paddingInline"),
  paddingY: i.space(["paddingTop", "paddingBottom"]),
  paddingBlock: i.space("paddingBlock")
};
Object.assign(O, {
  m: O.margin,
  mt: O.marginTop,
  mr: O.marginRight,
  me: O.marginInlineEnd,
  marginEnd: O.marginInlineEnd,
  mb: O.marginBottom,
  ml: O.marginLeft,
  ms: O.marginInlineStart,
  marginStart: O.marginInlineStart,
  mx: O.marginX,
  my: O.marginY,
  p: O.padding,
  pt: O.paddingTop,
  py: O.paddingY,
  px: O.paddingX,
  pb: O.paddingBottom,
  pl: O.paddingLeft,
  ps: O.paddingInlineStart,
  paddingStart: O.paddingInlineStart,
  pr: O.paddingRight,
  pe: O.paddingInlineEnd,
  paddingEnd: O.paddingInlineEnd
});
var Io = {
  textDecorationColor: i.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: i.shadows("textShadow")
}, Bo = {
  clipPath: !0,
  transform: i.propT("transform", w.transform),
  transformOrigin: !0,
  translateX: i.spaceT("--chakra-translate-x"),
  translateY: i.spaceT("--chakra-translate-y"),
  skewX: i.degreeT("--chakra-skew-x"),
  skewY: i.degreeT("--chakra-skew-y"),
  scaleX: i.prop("--chakra-scale-x"),
  scaleY: i.prop("--chakra-scale-y"),
  scale: i.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: i.degreeT("--chakra-rotate")
}, Po = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: i.prop("transitionDuration", "transition.duration"),
  transitionProperty: i.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: i.prop("transitionTimingFunction", "transition.easing")
}, Ao = {
  fontFamily: i.prop("fontFamily", "fonts"),
  fontSize: i.prop("fontSize", "fontSizes", w.px),
  fontWeight: i.prop("fontWeight", "fontWeights"),
  lineHeight: i.prop("lineHeight", "lineHeights"),
  letterSpacing: i.prop("letterSpacing", "letterSpacings"),
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
}, Oo = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  scrollMargin: i.spaceT("scrollMargin"),
  scrollMarginTop: i.spaceT("scrollMarginTop"),
  scrollMarginBottom: i.spaceT("scrollMarginBottom"),
  scrollMarginLeft: i.spaceT("scrollMarginLeft"),
  scrollMarginRight: i.spaceT("scrollMarginRight"),
  scrollMarginX: i.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: i.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: i.spaceT("scrollPadding"),
  scrollPaddingTop: i.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: i.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: i.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: i.spaceT("scrollPaddingRight"),
  scrollPaddingX: i.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: i.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function Jt(e) {
  return pe(e) && e.reference ? e.reference : String(e);
}
var nr = (e, ...r) => r.map(Jt).join(` ${e} `).replace(/calc/g, ""), Rt = (...e) => `calc(${nr("+", ...e)})`, Et = (...e) => `calc(${nr("-", ...e)})`, Fr = (...e) => `calc(${nr("*", ...e)})`, $t = (...e) => `calc(${nr("/", ...e)})`, It = (e) => {
  const r = Jt(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : Fr(r, -1);
}, Ee = Object.assign((e) => ({
  add: (...r) => Ee(Rt(e, ...r)),
  subtract: (...r) => Ee(Et(e, ...r)),
  multiply: (...r) => Ee(Fr(e, ...r)),
  divide: (...r) => Ee($t(e, ...r)),
  negate: () => Ee(It(e)),
  toString: () => e.toString()
}), {
  add: Rt,
  subtract: Et,
  multiply: Fr,
  divide: $t,
  negate: It
});
function Mo(e) {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}
function Bt(e) {
  if (e == null)
    return e;
  const { unitless: r } = Mo(e);
  return r || typeof e == "number" ? `${e}px` : e;
}
function zo(e, r) {
  const t = ["@media screen"];
  return e && t.push("and", `(min-width: ${Bt(e)})`), r && t.push("and", `(max-width: ${Bt(r)})`), t.join(" ");
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
}, ce = (e) => Qt((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), ie = (e) => Qt((r) => e(r, "~ &"), "[data-peer]", ".peer"), Qt = (e, ...r) => r.map(e).join(", "), Ur = {
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
}, Lo = Object.keys(Ur);
function Fo(e, r = []) {
  const t = Object.assign({}, e);
  for (const a of r)
    a in t && delete t[a];
  return t;
}
var Xr = se({}, Ye, C, vo, er, Z, So, $o, ko, Zt, Eo, Ie, Lr, O, Oo, Ao, Io, Bo, _o, Po);
Object.assign({}, O, Z, er, Zt, Ie);
var Wo = [...Object.keys(Xr), ...Lo], No = { ...Xr, ...Ur }, jo = (e) => e in No, Do = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: t, toArrayValue: a, media: s } = r.__breakpoints, c = {};
  for (const u in e) {
    let d = fe(e[u], r);
    if (d == null)
      continue;
    if (d = pe(d) && t(d) ? a(d) : d, !Array.isArray(d)) {
      c[u] = d;
      continue;
    }
    const f = d.slice(0, s.length).length;
    for (let m = 0; m < f; m += 1) {
      const p = s == null ? void 0 : s[m];
      if (!p) {
        c[u] = d[m];
        continue;
      }
      c[p] = c[p] || {}, d[m] != null && (c[p][u] = d[m]);
    }
  }
  return c;
};
function Go(e) {
  const r = [];
  let t = "", a = !1;
  for (let s = 0; s < e.length; s++) {
    const c = e[s];
    c === "(" ? (a = !0, t += c) : c === ")" ? (a = !1, t += c) : c === "," && !a ? (r.push(t), t = "") : t += c;
  }
  return t = t.trim(), t && r.push(t), r;
}
function Ho(e) {
  return /^var\(--.+\)$/.test(e);
}
var Vo = (e, r) => e.startsWith("--") && typeof r == "string" && !Ho(r), Uo = (e, r) => {
  if (r == null)
    return r;
  const t = (u) => {
    var d, f;
    return (f = (d = e.__cssMap) == null ? void 0 : d[u]) == null ? void 0 : f.varRef;
  }, a = (u) => t(u) ?? u, [s, c] = Go(r);
  return r = t(s) ?? a(c) ?? a(r), r;
};
function Xo(e) {
  const { configs: r = {}, pseudos: t = {}, theme: a } = e, s = (c, u = !1) => {
    var d;
    const f = fe(c, a), m = Do(f)(a);
    let p = {};
    for (let g in m) {
      const $ = m[g];
      let S = fe($, a);
      g in t && (g = t[g]), Vo(g, S) && (S = Uo(a, S));
      let y = r[g];
      if (y === !0 && (y = { property: g }), pe(S)) {
        p[g] = p[g] ?? {}, p[g] = se({}, p[g], s(S, !0));
        continue;
      }
      let b = ((d = y == null ? void 0 : y.transform) == null ? void 0 : d.call(y, S, a, f)) ?? S;
      b = y != null && y.processResult ? s(b, !0) : b;
      const v = fe(y == null ? void 0 : y.property, a);
      if (!u && (y != null && y.static)) {
        const k = fe(y.static, a);
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
      p[g] = b;
    }
    return p;
  };
  return s;
}
var Yo = (e) => (r) => Xo({
  theme: r,
  pseudos: Ur,
  configs: Xr
})(e);
function qo(e, r) {
  if (Array.isArray(e))
    return e;
  if (pe(e))
    return r(e);
  if (e != null)
    return [e];
}
function Ko(e, r) {
  for (let t = r + 1; t < e.length; t++)
    if (e[t] != null)
      return t;
  return -1;
}
function Zo(e) {
  const r = e.__breakpoints;
  return function(a, s, c, u) {
    var d, f;
    if (!r)
      return;
    const m = {}, p = qo(c, r.toArrayValue);
    if (!p)
      return m;
    const g = p.length, $ = g === 1, S = !!a.parts;
    for (let y = 0; y < g; y++) {
      const b = r.details[y], v = r.details[Ko(p, y)], k = zo(b.minW, v == null ? void 0 : v._minW), T = fe((d = a[s]) == null ? void 0 : d[p[y]], u);
      if (T) {
        if (S) {
          (f = a.parts) == null || f.forEach((M) => {
            se(m, {
              [M]: $ ? T[M] : { [k]: T[M] }
            });
          });
          continue;
        }
        if (!S) {
          $ ? se(m, T) : m[k] = T;
          continue;
        }
        m[k] = T;
      }
    }
    return m;
  };
}
function Jo(e) {
  return (r) => {
    const { variant: t, size: a, theme: s } = r, c = Zo(s);
    return se({}, fe(e.baseStyle ?? {}, r), c(e, "sizes", a, r), c(e, "variants", t, r));
  };
}
function en(e) {
  return Fo(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function Qo(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function ei(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var ri = /* @__PURE__ */ function() {
  function e(t) {
    var a = this;
    this._insertTag = function(s) {
      var c;
      a.tags.length === 0 ? a.insertionPoint ? c = a.insertionPoint.nextSibling : a.prepend ? c = a.container.firstChild : c = a.before : c = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(s, c), a.tags.push(s);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, r.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ei(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var c = Qo(s);
      try {
        c.insertRule(a, c.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(a));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(a) {
      return a.parentNode && a.parentNode.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), V = "-ms-", rr = "-moz-", R = "-webkit-", rn = "comm", Yr = "rule", qr = "decl", ti = "@import", tn = "@keyframes", ni = Math.abs, ar = String.fromCharCode, ai = Object.assign;
function oi(e, r) {
  return H(e, 0) ^ 45 ? (((r << 2 ^ H(e, 0)) << 2 ^ H(e, 1)) << 2 ^ H(e, 2)) << 2 ^ H(e, 3) : 0;
}
function nn(e) {
  return e.trim();
}
function ii(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function E(e, r, t) {
  return e.replace(r, t);
}
function Wr(e, r) {
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
function Xe(e, r) {
  return r.push(e), e;
}
function si(e, r) {
  return e.map(r).join("");
}
var or = 1, Se = 1, an = 0, U = 0, W = 0, _e = "";
function ir(e, r, t, a, s, c, u) {
  return { value: e, root: r, parent: t, type: a, props: s, children: c, line: or, column: Se, length: u, return: "" };
}
function $e(e, r) {
  return ai(ir("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function ci() {
  return W;
}
function li() {
  return W = U > 0 ? H(_e, --U) : 0, Se--, W === 10 && (Se = 1, or--), W;
}
function Y() {
  return W = U < an ? H(_e, U++) : 0, Se++, W === 10 && (Se = 1, or++), W;
}
function ne() {
  return H(_e, U);
}
function qe() {
  return U;
}
function ze(e, r) {
  return Pe(_e, e, r);
}
function Ae(e) {
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
  return or = Se = 1, an = re(_e = e), U = 0, [];
}
function sn(e) {
  return _e = "", e;
}
function Ke(e) {
  return nn(ze(U - 1, Nr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function di(e) {
  for (; (W = ne()) && W < 33; )
    Y();
  return Ae(e) > 2 || Ae(W) > 3 ? "" : " ";
}
function ui(e, r) {
  for (; --r && Y() && !(W < 48 || W > 102 || W > 57 && W < 65 || W > 70 && W < 97); )
    ;
  return ze(e, qe() + (r < 6 && ne() == 32 && Y() == 32));
}
function Nr(e) {
  for (; Y(); )
    switch (W) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nr(W);
        break;
      case 40:
        e === 41 && Nr(e);
        break;
      case 92:
        Y();
        break;
    }
  return U;
}
function fi(e, r) {
  for (; Y() && e + W !== 47 + 10; )
    if (e + W === 42 + 42 && ne() === 47)
      break;
  return "/*" + ze(r, U - 1) + "*" + ar(e === 47 ? e : Y());
}
function pi(e) {
  for (; !Ae(ne()); )
    Y();
  return ze(e, U);
}
function hi(e) {
  return sn(Ze("", null, null, null, [""], e = on(e), 0, [0], e));
}
function Ze(e, r, t, a, s, c, u, d, f) {
  for (var m = 0, p = 0, g = u, $ = 0, S = 0, y = 0, b = 1, v = 1, k = 1, T = 0, M = "", J = s, j = c, D = a, B = M; v; )
    switch (y = T, T = Y()) {
      case 40:
        if (y != 108 && H(B, g - 1) == 58) {
          Wr(B += E(Ke(T), "&", "&\f"), "&\f") != -1 && (k = -1);
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
        B += di(y);
        break;
      case 92:
        B += ui(qe() - 1, 7);
        continue;
      case 47:
        switch (ne()) {
          case 42:
          case 47:
            Xe(gi(fi(Y(), qe()), r, t), f);
            break;
          default:
            B += "/";
        }
        break;
      case 123 * b:
        d[m++] = re(B) * k;
      case 125 * b:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            v = 0;
          case 59 + p:
            S > 0 && re(B) - g && Xe(S > 32 ? At(B + ";", a, t, g - 1) : At(E(B, " ", "") + ";", a, t, g - 2), f);
            break;
          case 59:
            B += ";";
          default:
            if (Xe(D = Pt(B, r, t, m, p, s, d, M, J = [], j = [], g), c), T === 123)
              if (p === 0)
                Ze(B, r, D, D, J, c, g, d, j);
              else
                switch ($ === 99 && H(B, 3) === 110 ? 100 : $) {
                  case 100:
                  case 109:
                  case 115:
                    Ze(e, D, D, a && Xe(Pt(e, D, D, 0, 0, s, d, M, s, J = [], g), j), s, j, g, d, a ? J : j);
                    break;
                  default:
                    Ze(B, D, D, D, [""], j, 0, d, j);
                }
        }
        m = p = S = 0, b = k = 1, M = B = "", g = u;
        break;
      case 58:
        g = 1 + re(B), S = y;
      default:
        if (b < 1) {
          if (T == 123)
            --b;
          else if (T == 125 && b++ == 0 && li() == 125)
            continue;
        }
        switch (B += ar(T), T * b) {
          case 38:
            k = p > 0 ? 1 : (B += "\f", -1);
            break;
          case 44:
            d[m++] = (re(B) - 1) * k, k = 1;
            break;
          case 64:
            ne() === 45 && (B += Ke(Y())), $ = ne(), p = g = re(M = B += pi(qe())), T++;
            break;
          case 45:
            y === 45 && re(B) == 2 && (b = 0);
        }
    }
  return c;
}
function Pt(e, r, t, a, s, c, u, d, f, m, p) {
  for (var g = s - 1, $ = s === 0 ? c : [""], S = Kr($), y = 0, b = 0, v = 0; y < a; ++y)
    for (var k = 0, T = Pe(e, g + 1, g = ni(b = u[y])), M = e; k < S; ++k)
      (M = nn(b > 0 ? $[k] + " " + T : E(T, /&\f/g, $[k]))) && (f[v++] = M);
  return ir(e, r, t, s === 0 ? Yr : d, f, m, p);
}
function gi(e, r, t) {
  return ir(e, r, t, rn, ar(ci()), Pe(e, 2, -2), 0);
}
function At(e, r, t, a) {
  return ir(e, r, t, qr, Pe(e, 0, a), Pe(e, a + 1, -1), a);
}
function ve(e, r) {
  for (var t = "", a = Kr(e), s = 0; s < a; s++)
    t += r(e[s], s, e, r) || "";
  return t;
}
function mi(e, r, t, a) {
  switch (e.type) {
    case ti:
    case qr:
      return e.return = e.return || e.value;
    case rn:
      return "";
    case tn:
      return e.return = e.value + "{" + ve(e.children, a) + "}";
    case Yr:
      e.value = e.props.join(",");
  }
  return re(t = ve(e.children, a)) ? e.return = e.value + "{" + t + "}" : "";
}
function bi(e) {
  var r = Kr(e);
  return function(t, a, s, c) {
    for (var u = "", d = 0; d < r; d++)
      u += e[d](t, a, s, c) || "";
    return u;
  };
}
function yi(e) {
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
var vi = function(r, t, a) {
  for (var s = 0, c = 0; s = c, c = ne(), s === 38 && c === 12 && (t[a] = 1), !Ae(c); )
    Y();
  return ze(r, U);
}, Si = function(r, t) {
  var a = -1, s = 44;
  do
    switch (Ae(s)) {
      case 0:
        s === 38 && ne() === 12 && (t[a] = 1), r[a] += vi(U - 1, t, a);
        break;
      case 2:
        r[a] += Ke(s);
        break;
      case 4:
        if (s === 44) {
          r[++a] = ne() === 58 ? "&\f" : "", t[a] = r[a].length;
          break;
        }
      default:
        r[a] += ar(s);
    }
  while (s = Y());
  return r;
}, ki = function(r, t) {
  return sn(Si(on(r), t));
}, Ot = /* @__PURE__ */ new WeakMap(), _i = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, a = r.parent, s = r.column === a.column && r.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Ot.get(a)) && !s) {
      Ot.set(r, !0);
      for (var c = [], u = ki(t, c), d = a.props, f = 0, m = 0; f < u.length; f++)
        for (var p = 0; p < d.length; p++, m++)
          r.props[m] = c[f] ? u[f].replace(/&\f/g, d[p]) : d[p] + " " + u[f];
    }
  }
}, xi = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function ln(e, r) {
  switch (oi(e, r)) {
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
      return R + e + rr + e + V + e + e;
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
            return E(e, /(.+:)(.+)-([^]+)/, "$1" + R + "$2-$3$1" + rr + (H(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Wr(e, "stretch") ? ln(E(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (H(e, r + 1) !== 115)
        break;
    case 6444:
      switch (H(e, re(e) - 3 - (~Wr(e, "!important") && 10))) {
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
var wi = function(r, t, a, s) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case qr:
        r.return = ln(r.value, r.length);
        break;
      case tn:
        return ve([$e(r, {
          value: E(r.value, "@", "@" + R)
        })], s);
      case Yr:
        if (r.length)
          return si(r.props, function(c) {
            switch (ii(c, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ve([$e(r, {
                  props: [E(c, /:(read-\w+)/, ":" + rr + "$1")]
                })], s);
              case "::placeholder":
                return ve([$e(r, {
                  props: [E(c, /:(plac\w+)/, ":" + R + "input-$1")]
                }), $e(r, {
                  props: [E(c, /:(plac\w+)/, ":" + rr + "$1")]
                }), $e(r, {
                  props: [E(c, /:(plac\w+)/, V + "input-$1")]
                })], s);
            }
            return "";
          });
    }
}, Ti = [wi], Ci = function(r) {
  var t = r.key;
  if (t === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(b) {
      var v = b.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var s = r.stylisPlugins || Ti, c = {}, u, d = [];
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
  var f, m = [_i, xi];
  {
    var p, g = [mi, yi(function(b) {
      p.insert(b);
    })], $ = bi(m.concat(s, g)), S = function(v) {
      return ve(hi(v), $);
    };
    f = function(v, k, T, M) {
      p = T, S(v ? v + "{" + k.styles + "}" : k.styles), M && (y.inserted[k.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new ri({
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
function jr() {
  return jr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, jr.apply(this, arguments);
}
var Dr = {}, Ri = {
  get exports() {
    return Dr;
  },
  set exports(e) {
    Dr = e;
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
var N = typeof Symbol == "function" && Symbol.for, Zr = N ? Symbol.for("react.element") : 60103, Jr = N ? Symbol.for("react.portal") : 60106, sr = N ? Symbol.for("react.fragment") : 60107, cr = N ? Symbol.for("react.strict_mode") : 60108, lr = N ? Symbol.for("react.profiler") : 60114, dr = N ? Symbol.for("react.provider") : 60109, ur = N ? Symbol.for("react.context") : 60110, Qr = N ? Symbol.for("react.async_mode") : 60111, fr = N ? Symbol.for("react.concurrent_mode") : 60111, pr = N ? Symbol.for("react.forward_ref") : 60112, hr = N ? Symbol.for("react.suspense") : 60113, Ei = N ? Symbol.for("react.suspense_list") : 60120, gr = N ? Symbol.for("react.memo") : 60115, mr = N ? Symbol.for("react.lazy") : 60116, $i = N ? Symbol.for("react.block") : 60121, Ii = N ? Symbol.for("react.fundamental") : 60117, Bi = N ? Symbol.for("react.responder") : 60118, Pi = N ? Symbol.for("react.scope") : 60119;
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
function dn(e) {
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
  return dn(e) || q(e) === Qr;
};
I.isConcurrentMode = dn;
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
  return typeof e == "string" || typeof e == "function" || e === sr || e === fr || e === lr || e === cr || e === hr || e === Ei || typeof e == "object" && e !== null && (e.$$typeof === mr || e.$$typeof === gr || e.$$typeof === dr || e.$$typeof === ur || e.$$typeof === pr || e.$$typeof === Ii || e.$$typeof === Bi || e.$$typeof === Pi || e.$$typeof === $i);
};
I.typeOf = q;
(function(e) {
  e.exports = I;
})(Ri);
var un = Dr, Ai = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Oi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, fn = {};
fn[un.ForwardRef] = Ai;
fn[un.Memo] = Oi;
var Mi = !0;
function zi(e, r, t) {
  var a = "";
  return t.split(" ").forEach(function(s) {
    e[s] !== void 0 ? r.push(e[s] + ";") : a += s + " ";
  }), a;
}
var pn = function(r, t, a) {
  var s = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Mi === !1) && r.registered[s] === void 0 && (r.registered[s] = t.styles);
}, Li = function(r, t, a) {
  pn(r, t, a);
  var s = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var c = t;
    do
      r.insert(t === c ? "." + s : "", c, r.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function Fi(e) {
  for (var r = 0, t, a = 0, s = e.length; s >= 4; ++a, s -= 4)
    t = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      r ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(a) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Wi = {
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
}, Ni = /[A-Z]|^ms/g, ji = /_EMO_([^_]+?)_([^]*?)_EMO_/g, hn = function(r) {
  return r.charCodeAt(1) === 45;
}, Mt = function(r) {
  return r != null && typeof r != "boolean";
}, Or = /* @__PURE__ */ cn(function(e) {
  return hn(e) ? e : e.replace(Ni, "-$&").toLowerCase();
}), zt = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ji, function(a, s, c) {
          return te = {
            name: s,
            styles: c,
            next: te
          }, s;
        });
  }
  return Wi[r] !== 1 && !hn(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function Oe(e, r, t) {
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
        var a = t.next;
        if (a !== void 0)
          for (; a !== void 0; )
            te = {
              name: a.name,
              styles: a.styles,
              next: te
            }, a = a.next;
        var s = t.styles + ";";
        return s;
      }
      return Di(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var c = te, u = t(e);
        return te = c, Oe(e, r, u);
      }
      break;
    }
  }
  if (r == null)
    return t;
  var d = r[t];
  return d !== void 0 ? d : t;
}
function Di(e, r, t) {
  var a = "";
  if (Array.isArray(t))
    for (var s = 0; s < t.length; s++)
      a += Oe(e, r, t[s]) + ";";
  else
    for (var c in t) {
      var u = t[c];
      if (typeof u != "object")
        r != null && r[u] !== void 0 ? a += c + "{" + r[u] + "}" : Mt(u) && (a += Or(c) + ":" + zt(c, u) + ";");
      else if (Array.isArray(u) && typeof u[0] == "string" && (r == null || r[u[0]] === void 0))
        for (var d = 0; d < u.length; d++)
          Mt(u[d]) && (a += Or(c) + ":" + zt(c, u[d]) + ";");
      else {
        var f = Oe(e, r, u);
        switch (c) {
          case "animation":
          case "animationName": {
            a += Or(c) + ":" + f + ";";
            break;
          }
          default:
            a += c + "{" + f + "}";
        }
      }
    }
  return a;
}
var Lt = /label:\s*([^\s;\n{]+)\s*(;|$)/g, te, gn = function(r, t, a) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var s = !0, c = "";
  te = void 0;
  var u = r[0];
  u == null || u.raw === void 0 ? (s = !1, c += Oe(a, t, u)) : c += u[0];
  for (var d = 1; d < r.length; d++)
    c += Oe(a, t, r[d]), s && (c += u[d]);
  Lt.lastIndex = 0;
  for (var f = "", m; (m = Lt.exec(c)) !== null; )
    f += "-" + // $FlowFixMe we know it's not null
    m[1];
  var p = Fi(c) + f;
  return {
    name: p,
    styles: c,
    next: te
  };
}, Gi = function(r) {
  return r();
}, Hi = Tt["useInsertionEffect"] ? Tt["useInsertionEffect"] : !1, Vi = Hi || Gi, mn = /* @__PURE__ */ Me(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ci({
    key: "css"
  }) : null
);
mn.Provider;
var Ui = function(r) {
  return /* @__PURE__ */ Dt(function(t, a) {
    var s = ke(mn);
    return r(t, s, a);
  });
}, bn = /* @__PURE__ */ Me({});
function Xi() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return gn(r);
}
var Yi = function() {
  var r = Xi.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function qi(e) {
  return typeof e == "function";
}
function Ki(e, r) {
  const t = {};
  return Object.keys(e).forEach((a) => {
    r.includes(a) || (t[a] = e[a]);
  }), t;
}
function Zi(e, r, t, a) {
  const s = typeof r == "string" ? r.split(".") : [r];
  for (a = 0; a < s.length && e; a += 1)
    e = e[s[a]];
  return e === void 0 ? t : e;
}
var Ji = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (a, s, c, u) => {
    if (typeof a > "u")
      return e(a, s, c);
    r.has(a) || r.set(a, /* @__PURE__ */ new Map());
    const d = r.get(a);
    if (d.has(s))
      return d.get(s);
    const f = e(a, s, c, u);
    return d.set(s, f), f;
  };
}, Qi = Ji(Zi);
function yn(e, r) {
  const t = {};
  return Object.keys(e).forEach((a) => {
    const s = e[a];
    r(s, a, e) && (t[a] = s);
  }), t;
}
var vn = (e) => yn(e, (r) => r != null);
function es(e, ...r) {
  return qi(e) ? e(...r) : e;
}
function rs(e = {}) {
  const {
    strict: r = !0,
    errorMessage: t = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: a
  } = e, s = Me(void 0);
  s.displayName = a;
  function c() {
    var u;
    const d = ke(s);
    if (!d && r) {
      const f = new Error(t);
      throw f.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, f, c), f;
    }
    return d;
  }
  return [
    s.Provider,
    c,
    s
  ];
}
var ts = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ns = /* @__PURE__ */ cn(
  function(e) {
    return ts.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), as = ns, os = function(r) {
  return r !== "theme";
}, Ft = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? as : os;
}, Wt = function(r, t, a) {
  var s;
  if (t) {
    var c = t.shouldForwardProp;
    s = r.__emotion_forwardProp && c ? function(u) {
      return r.__emotion_forwardProp(u) && c(u);
    } : c;
  }
  return typeof s != "function" && a && (s = r.__emotion_forwardProp), s;
}, is = function(r) {
  var t = r.cache, a = r.serialized, s = r.isStringTag;
  return pn(t, a, s), Vi(function() {
    return Li(t, a, s);
  }), null;
}, ss = function e(r, t) {
  var a = r.__emotion_real === r, s = a && r.__emotion_base || r, c, u;
  t !== void 0 && (c = t.label, u = t.target);
  var d = Wt(r, t, a), f = d || Ft(s), m = !f("as");
  return function() {
    var p = arguments, g = a && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (c !== void 0 && g.push("label:" + c + ";"), p[0] == null || p[0].raw === void 0)
      g.push.apply(g, p);
    else {
      g.push(p[0][0]);
      for (var $ = p.length, S = 1; S < $; S++)
        g.push(p[S], p[0][S]);
    }
    var y = Ui(function(b, v, k) {
      var T = m && b.as || s, M = "", J = [], j = b;
      if (b.theme == null) {
        j = {};
        for (var D in b)
          j[D] = b[D];
        j.theme = ke(bn);
      }
      typeof b.className == "string" ? M = zi(v.registered, J, b.className) : b.className != null && (M = b.className + " ");
      var B = gn(g.concat(J), v.registered, j);
      M += v.key + "-" + B.name, u !== void 0 && (M += " " + u);
      var vr = m && d === void 0 ? Ft(T) : f, ge = {};
      for (var me in b)
        m && me === "as" || // $FlowFixMe
        vr(me) && (ge[me] = b[me]);
      return ge.className = M, ge.ref = k, /* @__PURE__ */ Pr(Ya, null, /* @__PURE__ */ Pr(is, {
        cache: v,
        serialized: B,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ Pr(T, ge));
    });
    return y.displayName = c !== void 0 ? c : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", y.defaultProps = r.defaultProps, y.__emotion_real = y, y.__emotion_base = s, y.__emotion_styles = g, y.__emotion_forwardProp = d, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + u;
      }
    }), y.withComponent = function(b, v) {
      return e(b, jr({}, t, v, {
        shouldForwardProp: Wt(y, v, !0)
      })).apply(void 0, g);
    }, y;
  };
}, cs = [
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
], Gr = ss.bind();
cs.forEach(function(e) {
  Gr[e] = Gr(e);
});
var ls = typeof Element < "u", ds = typeof Map == "function", us = typeof Set == "function", fs = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Je(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var t, a, s;
    if (Array.isArray(e)) {
      if (t = e.length, t != r.length)
        return !1;
      for (a = t; a-- !== 0; )
        if (!Je(e[a], r[a]))
          return !1;
      return !0;
    }
    var c;
    if (ds && e instanceof Map && r instanceof Map) {
      if (e.size !== r.size)
        return !1;
      for (c = e.entries(); !(a = c.next()).done; )
        if (!r.has(a.value[0]))
          return !1;
      for (c = e.entries(); !(a = c.next()).done; )
        if (!Je(a.value[1], r.get(a.value[0])))
          return !1;
      return !0;
    }
    if (us && e instanceof Set && r instanceof Set) {
      if (e.size !== r.size)
        return !1;
      for (c = e.entries(); !(a = c.next()).done; )
        if (!r.has(a.value[0]))
          return !1;
      return !0;
    }
    if (fs && ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
      if (t = e.length, t != r.length)
        return !1;
      for (a = t; a-- !== 0; )
        if (e[a] !== r[a])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === r.toString();
    if (s = Object.keys(e), t = s.length, t !== Object.keys(r).length)
      return !1;
    for (a = t; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, s[a]))
        return !1;
    if (ls && e instanceof Element)
      return !1;
    for (a = t; a-- !== 0; )
      if (!((s[a] === "_owner" || s[a] === "__v" || s[a] === "__o") && e.$$typeof) && !Je(e[s[a]], r[s[a]]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var ps = function(r, t) {
  try {
    return Je(r, t);
  } catch (a) {
    if ((a.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw a;
  }
};
function hs() {
  const e = ke(bn);
  if (!e)
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  return e;
}
function gs() {
  const e = Ut(), r = hs();
  return { ...e, theme: r };
}
rs({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
var ms = /* @__PURE__ */ new Set([
  ...Wo,
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
]), bs = /* @__PURE__ */ new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
function ys(e) {
  return bs.has(e) || !ms.has(e);
}
var vs = ({ baseStyle: e }) => (r) => {
  const { theme: t, css: a, __css: s, sx: c, ...u } = r, d = yn(u, (g, $) => jo($)), f = es(e, r), m = Object.assign({}, s, f, vn(d), c), p = Yo(m)(r.theme);
  return a ? [p, a] : p;
};
function Mr(e, r) {
  const { baseStyle: t, ...a } = r ?? {};
  a.shouldForwardProp || (a.shouldForwardProp = ys);
  const s = vs({ baseStyle: t }), c = Gr(e, a)(s);
  return F.forwardRef(function(f, m) {
    const { colorMode: p, forced: g } = Ut();
    return F.createElement(c, {
      ref: m,
      "data-theme": g ? p : void 0,
      ...f
    });
  });
}
function br(e) {
  return Dt(e);
}
function Ss(e, r = {}) {
  const { styleConfig: t, ...a } = r, { theme: s, colorMode: c } = gs(), u = e ? Qi(s, `components.${e}`) : void 0, d = t || u, f = se({ theme: s, colorMode: c }, (d == null ? void 0 : d.defaultProps) ?? {}, vn(Ki(a, ["children"]))), m = qa({});
  if (d) {
    const g = Jo(d)(f);
    ps(m.current, g) || (m.current = g);
  }
  return m.current;
}
function Sn(e, r = {}) {
  return Ss(e, r);
}
function ks() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Mr, {
    apply(r, t, a) {
      return Mr(...a);
    },
    get(r, t) {
      return e.has(t) || e.set(t, Mr(t)), e.get(t);
    }
  });
}
var he = ks();
function _s(e, r) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`;
}
function xs(e = {}) {
  const {
    name: r,
    strict: t = !0,
    hookName: a = "useContext",
    providerName: s = "Provider",
    errorMessage: c
  } = e, u = Me(void 0);
  u.displayName = r;
  function d() {
    var f;
    const m = ke(u);
    if (!m && t) {
      const p = new Error(c ?? _s(a, s));
      throw p.name = "ContextError", (f = Error.captureStackTrace) == null || f.call(Error, p, d), p;
    }
    return m;
  }
  return [u.Provider, d, u];
}
function ws(e, r) {
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
function Ts(...e) {
  return (r) => {
    e.forEach((t) => {
      ws(t, r);
    });
  };
}
function Cs(...e) {
  return tr(() => Ts(...e), e);
}
var Rs = (...e) => e.filter(Boolean).join(" "), Es = Yi({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), kn = br((e, r) => {
  const t = Sn("Spinner", e), {
    label: a = "Loading...",
    thickness: s = "2px",
    speed: c = "0.45s",
    emptyColor: u = "transparent",
    className: d,
    ...f
  } = en(e), m = Rs("chakra-spinner", d), p = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: s,
    borderBottomColor: u,
    borderLeftColor: u,
    animation: `${Es} ${c} linear infinite`,
    ...t
  };
  return /* @__PURE__ */ F.createElement(he.div, {
    ref: r,
    __css: p,
    className: m,
    ...f
  }, a && /* @__PURE__ */ F.createElement(he.span, {
    srOnly: !0
  }, a));
});
kn.displayName = "Spinner";
var yr = (...e) => e.filter(Boolean).join(" "), Nt = (e) => e ? "" : void 0, [$s, Is] = xs({
  strict: !1,
  name: "ButtonGroupContext"
});
function Hr(e) {
  const { children: r, className: t, ...a } = e, s = Gt(r) ? Ht(r, {
    "aria-hidden": !0,
    focusable: !1
  }) : r, c = yr("chakra-button__icon", t);
  return /* @__PURE__ */ F.createElement(he.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...a,
    className: c
  }, s);
}
Hr.displayName = "ButtonIcon";
function Vr(e) {
  const {
    label: r,
    placement: t,
    spacing: a = "0.5rem",
    children: s = /* @__PURE__ */ F.createElement(kn, {
      color: "currentColor",
      width: "1em",
      height: "1em"
    }),
    className: c,
    __css: u,
    ...d
  } = e, f = yr("chakra-button__spinner", c), m = t === "start" ? "marginEnd" : "marginStart", p = tr(() => ({
    display: "flex",
    alignItems: "center",
    position: r ? "relative" : "absolute",
    [m]: r ? a : 0,
    fontSize: "1em",
    lineHeight: "normal",
    ...u
  }), [u, r, m, a]);
  return /* @__PURE__ */ F.createElement(he.div, {
    className: f,
    ...d,
    __css: p
  }, s);
}
Vr.displayName = "ButtonSpinner";
function Bs(e) {
  const [r, t] = Ka(!e);
  return { ref: Za((c) => {
    c && t(c.tagName === "BUTTON");
  }, []), type: r ? "button" : void 0 };
}
var et = br((e, r) => {
  const t = Is(), a = Sn("Button", { ...t, ...e }), {
    isDisabled: s = t == null ? void 0 : t.isDisabled,
    isLoading: c,
    isActive: u,
    children: d,
    leftIcon: f,
    rightIcon: m,
    loadingText: p,
    iconSpacing: g = "0.5rem",
    type: $,
    spinner: S,
    spinnerPlacement: y = "start",
    className: b,
    as: v,
    ...k
  } = en(e), T = tr(() => {
    const D = { ...a == null ? void 0 : a._focus, zIndex: 1 };
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
      ...a,
      ...!!t && { _focus: D }
    };
  }, [a, t]), { ref: M, type: J } = Bs(v), j = { rightIcon: m, leftIcon: f, iconSpacing: g, children: d };
  return /* @__PURE__ */ F.createElement(he.button, {
    disabled: s || c,
    ref: Cs(r, M),
    as: v,
    type: $ ?? J,
    "data-active": Nt(u),
    "data-loading": Nt(c),
    __css: T,
    className: yr("chakra-button", b),
    ...k
  }, c && y === "start" && /* @__PURE__ */ F.createElement(Vr, {
    className: "chakra-button__spinner--start",
    label: p,
    placement: "start",
    spacing: g
  }, S), c ? p || /* @__PURE__ */ F.createElement(he.span, {
    opacity: 0
  }, /* @__PURE__ */ F.createElement(jt, {
    ...j
  })) : /* @__PURE__ */ F.createElement(jt, {
    ...j
  }), c && y === "end" && /* @__PURE__ */ F.createElement(Vr, {
    className: "chakra-button__spinner--end",
    label: p,
    placement: "end",
    spacing: g
  }, S));
});
et.displayName = "Button";
function jt(e) {
  const { leftIcon: r, rightIcon: t, children: a, iconSpacing: s } = e;
  return /* @__PURE__ */ F.createElement(F.Fragment, null, r && /* @__PURE__ */ F.createElement(Hr, {
    marginEnd: s
  }, r), a, t && /* @__PURE__ */ F.createElement(Hr, {
    marginStart: s
  }, t));
}
var Ps = br(function(r, t) {
  const {
    size: a,
    colorScheme: s,
    variant: c,
    className: u,
    spacing: d = "0.5rem",
    isAttached: f,
    isDisabled: m,
    ...p
  } = r, g = yr("chakra-button__group", u), $ = tr(() => ({ size: a, colorScheme: s, variant: c, isDisabled: m }), [a, s, c, m]);
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
  }, /* @__PURE__ */ F.createElement($s, {
    value: $
  }, /* @__PURE__ */ F.createElement(he.div, {
    ref: t,
    role: "group",
    __css: S,
    className: g,
    "data-attached": f ? "" : void 0,
    ...p
  }));
});
Ps.displayName = "ButtonGroup";
var As = br((e, r) => {
  const { icon: t, children: a, isRound: s, "aria-label": c, ...u } = e, d = t || a, f = Gt(d) ? Ht(d, {
    "aria-hidden": !0,
    focusable: !1
  }) : null;
  return /* @__PURE__ */ F.createElement(et, {
    padding: "0",
    borderRadius: s ? "full" : void 0,
    ref: r,
    "aria-label": c,
    ...u
  }, f);
});
As.displayName = "IconButton";
function Os({ text: e }) {
  return /* @__PURE__ */ F.createElement("div", null, e);
}
function zs({ label: e }) {
  return /* @__PURE__ */ F.createElement(et, null, /* @__PURE__ */ F.createElement(Os, { text: e }));
}
export {
  zs as Button,
  Os as Label
};
