function Mr(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const l in n)
        if (l !== "default" && !(l in e)) {
          const a = Object.getOwnPropertyDescriptor(n, l);
          a && Object.defineProperty(e, l, a.get ? a : {
            enumerable: !0,
            get: () => n[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Ir(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pe = {}, jr = {
  get exports() {
    return pe;
  },
  set exports(e) {
    pe = e;
  }
}, Le = {}, s = {}, Br = {
  get exports() {
    return s;
  },
  set exports(e) {
    s = e;
  }
}, E = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he = Symbol.for("react.element"), Ar = Symbol.for("react.portal"), Hr = Symbol.for("react.fragment"), Ur = Symbol.for("react.strict_mode"), Dr = Symbol.for("react.profiler"), Vr = Symbol.for("react.provider"), Wr = Symbol.for("react.context"), Gr = Symbol.for("react.forward_ref"), Zr = Symbol.for("react.suspense"), zr = Symbol.for("react.memo"), qr = Symbol.for("react.lazy"), yt = Symbol.iterator;
function Kr(e) {
  return e === null || typeof e != "object" ? null : (e = yt && e[yt] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ht = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ut = Object.assign, Dt = {};
function ce(e, t, r) {
  this.props = e, this.context = t, this.refs = Dt, this.updater = r || Ht;
}
ce.prototype.isReactComponent = {};
ce.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ce.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vt() {
}
Vt.prototype = ce.prototype;
function rt(e, t, r) {
  this.props = e, this.context = t, this.refs = Dt, this.updater = r || Ht;
}
var nt = rt.prototype = new Vt();
nt.constructor = rt;
Ut(nt, ce.prototype);
nt.isPureReactComponent = !0;
var wt = Array.isArray, Wt = Object.prototype.hasOwnProperty, lt = { current: null }, Gt = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zt(e, t, r) {
  var n, l = {}, a = null, o = null;
  if (t != null)
    for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t)
      Wt.call(t, n) && !Gt.hasOwnProperty(n) && (l[n] = t[n]);
  var c = arguments.length - 2;
  if (c === 1)
    l.children = r;
  else if (1 < c) {
    for (var u = Array(c), f = 0; f < c; f++)
      u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (n in c = e.defaultProps, c)
      l[n] === void 0 && (l[n] = c[n]);
  return { $$typeof: he, type: e, key: a, ref: o, props: l, _owner: lt.current };
}
function Yr(e, t) {
  return { $$typeof: he, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function at(e) {
  return typeof e == "object" && e !== null && e.$$typeof === he;
}
function Jr(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Et = /\/+/g;
function Ue(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Jr("" + e.key) : t.toString(36);
}
function Ce(e, t, r, n, l) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null)
    o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case he:
          case Ar:
            o = !0;
        }
    }
  if (o)
    return o = e, l = l(o), e = n === "" ? "." + Ue(o, 0) : n, wt(l) ? (r = "", e != null && (r = e.replace(Et, "$&/") + "/"), Ce(l, t, r, "", function(f) {
      return f;
    })) : l != null && (at(l) && (l = Yr(l, r + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Et, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, n = n === "" ? "." : n + ":", wt(e))
    for (var c = 0; c < e.length; c++) {
      a = e[c];
      var u = n + Ue(a, c);
      o += Ce(a, t, r, u, l);
    }
  else if (u = Kr(e), typeof u == "function")
    for (e = u.call(e), c = 0; !(a = e.next()).done; )
      a = a.value, u = n + Ue(a, c++), o += Ce(a, t, r, u, l);
  else if (a === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ge(e, t, r) {
  if (e == null)
    return e;
  var n = [], l = 0;
  return Ce(e, n, "", "", function(a) {
    return t.call(r, a, l++);
  }), n;
}
function Xr(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var j = { current: null }, ye = { transition: null }, Qr = { ReactCurrentDispatcher: j, ReactCurrentBatchConfig: ye, ReactCurrentOwner: lt };
E.Children = { map: ge, forEach: function(e, t, r) {
  ge(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return ge(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ge(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!at(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
E.Component = ce;
E.Fragment = Hr;
E.Profiler = Dr;
E.PureComponent = rt;
E.StrictMode = Ur;
E.Suspense = Zr;
E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qr;
E.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = Ut({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = lt.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var c = e.type.defaultProps;
    for (u in t)
      Wt.call(t, u) && !Gt.hasOwnProperty(u) && (n[u] = t[u] === void 0 && c !== void 0 ? c[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1)
    n.children = r;
  else if (1 < u) {
    c = Array(u);
    for (var f = 0; f < u; f++)
      c[f] = arguments[f + 2];
    n.children = c;
  }
  return { $$typeof: he, type: e.type, key: l, ref: a, props: n, _owner: o };
};
E.createContext = function(e) {
  return e = { $$typeof: Wr, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Vr, _context: e }, e.Consumer = e;
};
E.createElement = Zt;
E.createFactory = function(e) {
  var t = Zt.bind(null, e);
  return t.type = e, t;
};
E.createRef = function() {
  return { current: null };
};
E.forwardRef = function(e) {
  return { $$typeof: Gr, render: e };
};
E.isValidElement = at;
E.lazy = function(e) {
  return { $$typeof: qr, _payload: { _status: -1, _result: e }, _init: Xr };
};
E.memo = function(e, t) {
  return { $$typeof: zr, type: e, compare: t === void 0 ? null : t };
};
E.startTransition = function(e) {
  var t = ye.transition;
  ye.transition = {};
  try {
    e();
  } finally {
    ye.transition = t;
  }
};
E.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
E.useCallback = function(e, t) {
  return j.current.useCallback(e, t);
};
E.useContext = function(e) {
  return j.current.useContext(e);
};
E.useDebugValue = function() {
};
E.useDeferredValue = function(e) {
  return j.current.useDeferredValue(e);
};
E.useEffect = function(e, t) {
  return j.current.useEffect(e, t);
};
E.useId = function() {
  return j.current.useId();
};
E.useImperativeHandle = function(e, t, r) {
  return j.current.useImperativeHandle(e, t, r);
};
E.useInsertionEffect = function(e, t) {
  return j.current.useInsertionEffect(e, t);
};
E.useLayoutEffect = function(e, t) {
  return j.current.useLayoutEffect(e, t);
};
E.useMemo = function(e, t) {
  return j.current.useMemo(e, t);
};
E.useReducer = function(e, t, r) {
  return j.current.useReducer(e, t, r);
};
E.useRef = function(e) {
  return j.current.useRef(e);
};
E.useState = function(e) {
  return j.current.useState(e);
};
E.useSyncExternalStore = function(e, t, r) {
  return j.current.useSyncExternalStore(e, t, r);
};
E.useTransition = function() {
  return j.current.useTransition();
};
E.version = "18.2.0";
(function(e) {
  e.exports = E;
})(Br);
const _ = /* @__PURE__ */ Ir(s), Ye = /* @__PURE__ */ Mr({
  __proto__: null,
  default: _
}, [s]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en = s, tn = Symbol.for("react.element"), rn = Symbol.for("react.fragment"), nn = Object.prototype.hasOwnProperty, ln = en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, an = { key: !0, ref: !0, __self: !0, __source: !0 };
function zt(e, t, r) {
  var n, l = {}, a = null, o = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t)
    nn.call(t, n) && !an.hasOwnProperty(n) && (l[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      l[n] === void 0 && (l[n] = t[n]);
  return { $$typeof: tn, type: e, key: a, ref: o, props: l, _owner: ln.current };
}
Le.Fragment = rn;
Le.jsx = zt;
Le.jsxs = zt;
(function(e) {
  e.exports = Le;
})(jr);
const qt = pe.Fragment, i = pe.jsx, x = pe.jsxs;
/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Je() {
  return Je = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Je.apply(this, arguments);
}
var St;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(St || (St = {}));
function J(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Pt(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function $e(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
var Nt;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Nt || (Nt = {}));
function on(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? $e(t) : t, l = Jt(n.pathname || "/", r);
  if (l == null)
    return null;
  let a = Kt(e);
  sn(a);
  let o = null;
  for (let c = 0; o == null && c < a.length; ++c)
    o = gn(
      a[c],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      Cn(l)
    );
  return o;
}
function Kt(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let l = (a, o, c) => {
    let u = {
      relativePath: c === void 0 ? a.path || "" : c,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a
    };
    u.relativePath.startsWith("/") && (J(u.relativePath.startsWith(n), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(n.length));
    let f = ie([n, u.relativePath]), d = r.concat(u);
    a.children && a.children.length > 0 && (J(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      a.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + f + '".')
    ), Kt(a.children, t, d, f)), !(a.path == null && !a.index) && t.push({
      path: f,
      score: mn(f, a.index),
      routesMeta: d
    });
  };
  return e.forEach((a, o) => {
    var c;
    if (a.path === "" || !((c = a.path) != null && c.includes("?")))
      l(a, o);
    else
      for (let u of Yt(a.path))
        l(a, o, u);
  }), t;
}
function Yt(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [r, ...n] = t, l = r.endsWith("?"), a = r.replace(/\?$/, "");
  if (n.length === 0)
    return l ? [a, ""] : [a];
  let o = Yt(n.join("/")), c = [];
  return c.push(...o.map((u) => u === "" ? a : [a, u].join("/"))), l && c.push(...o), c.map((u) => e.startsWith("/") && u === "" ? "/" : u);
}
function sn(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : vn(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const un = /^:\w+$/, cn = 3, dn = 2, fn = 1, pn = 10, hn = -2, kt = (e) => e === "*";
function mn(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(kt) && (n += hn), t && (n += dn), r.filter((l) => !kt(l)).reduce((l, a) => l + (un.test(a) ? cn : a === "" ? fn : pn), n);
}
function vn(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, l) => n === t[l]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function gn(e, t) {
  let {
    routesMeta: r
  } = e, n = {}, l = "/", a = [];
  for (let o = 0; o < r.length; ++o) {
    let c = r[o], u = o === r.length - 1, f = l === "/" ? t : t.slice(l.length) || "/", d = xn({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: u
    }, f);
    if (!d)
      return null;
    Object.assign(n, d.params);
    let p = c.route;
    a.push({
      // TODO: Can this as be avoided?
      params: n,
      pathname: ie([l, d.pathname]),
      pathnameBase: Sn(ie([l, d.pathnameBase])),
      route: p
    }), d.pathnameBase !== "/" && (l = ie([l, d.pathnameBase]));
  }
  return a;
}
function xn(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = bn(e.path, e.caseSensitive, e.end), l = t.match(r);
  if (!l)
    return null;
  let a = l[0], o = a.replace(/(.)\/+$/, "$1"), c = l.slice(1);
  return {
    params: n.reduce((f, d, p) => {
      if (d === "*") {
        let m = c[p] || "";
        o = a.slice(0, a.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return f[d] = yn(c[p] || "", d), f;
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e
  };
}
function bn(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), ot(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (o, c) => (n.push(c), "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push("*"), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), n];
}
function Cn(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return ot(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function yn(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return ot(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")), e;
  }
}
function Jt(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function ot(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function wn(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: l = ""
  } = typeof e == "string" ? $e(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : En(r, t) : t,
    search: Pn(n),
    hash: Nn(l)
  };
}
function En(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((l) => {
    l === ".." ? r.length > 1 && r.pop() : l !== "." && r.push(l);
  }), r.length > 1 ? r.join("/") : "/";
}
function De(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Xt(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function Qt(e, t, r, n) {
  n === void 0 && (n = !1);
  let l;
  typeof e == "string" ? l = $e(e) : (l = Je({}, e), J(!l.pathname || !l.pathname.includes("?"), De("?", "pathname", "search", l)), J(!l.pathname || !l.pathname.includes("#"), De("#", "pathname", "hash", l)), J(!l.search || !l.search.includes("#"), De("#", "search", "hash", l)));
  let a = e === "" || l.pathname === "", o = a ? "/" : l.pathname, c;
  if (n || o == null)
    c = r;
  else {
    let p = t.length - 1;
    if (o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; )
        m.shift(), p -= 1;
      l.pathname = m.join("/");
    }
    c = p >= 0 ? t[p] : "/";
  }
  let u = wn(l, c), f = o && o !== "/" && o.endsWith("/"), d = (a || o === ".") && r.endsWith("/");
  return !u.pathname.endsWith("/") && (f || d) && (u.pathname += "/"), u;
}
const ie = (e) => e.join("/").replace(/\/\/+/g, "/"), Sn = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Pn = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Nn = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function kn(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const _n = typeof Object.is == "function" ? Object.is : kn, {
  useState: Ln,
  useEffect: $n,
  useLayoutEffect: Fn,
  useDebugValue: On
} = Ye;
function Rn(e, t, r) {
  const n = t(), [{
    inst: l
  }, a] = Ln({
    inst: {
      value: n,
      getSnapshot: t
    }
  });
  return Fn(() => {
    l.value = n, l.getSnapshot = t, Ve(l) && a({
      inst: l
    });
  }, [e, n, t]), $n(() => (Ve(l) && a({
    inst: l
  }), e(() => {
    Ve(l) && a({
      inst: l
    });
  })), [e]), On(n), n;
}
function Ve(e) {
  const t = e.getSnapshot, r = e.value;
  try {
    const n = t();
    return !_n(r, n);
  } catch {
    return !0;
  }
}
function Tn(e, t, r) {
  return t();
}
const Mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", In = !Mn, jn = In ? Tn : Rn;
"useSyncExternalStore" in Ye && ((e) => e.useSyncExternalStore)(Ye);
const Bn = /* @__PURE__ */ s.createContext(null), er = /* @__PURE__ */ s.createContext(null), Fe = /* @__PURE__ */ s.createContext(null), tr = /* @__PURE__ */ s.createContext(null), rr = /* @__PURE__ */ s.createContext({
  outlet: null,
  matches: []
});
function it(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  st() || J(!1);
  let {
    basename: n,
    navigator: l
  } = s.useContext(Fe), {
    hash: a,
    pathname: o,
    search: c
  } = ut(e, {
    relative: r
  }), u = o;
  return n !== "/" && (u = o === "/" ? n : ie([n, o])), l.createHref({
    pathname: u,
    search: c,
    hash: a
  });
}
function st() {
  return s.useContext(tr) != null;
}
function me() {
  return st() || J(!1), s.useContext(tr).location;
}
function An() {
  st() || J(!1);
  let {
    basename: e,
    navigator: t
  } = s.useContext(Fe), {
    matches: r
  } = s.useContext(rr), {
    pathname: n
  } = me(), l = JSON.stringify(Xt(r).map((c) => c.pathnameBase)), a = s.useRef(!1);
  return s.useEffect(() => {
    a.current = !0;
  }), s.useCallback(function(c, u) {
    if (u === void 0 && (u = {}), !a.current)
      return;
    if (typeof c == "number") {
      t.go(c);
      return;
    }
    let f = Qt(c, JSON.parse(l), n, u.relative === "path");
    e !== "/" && (f.pathname = f.pathname === "/" ? e : ie([e, f.pathname])), (u.replace ? t.replace : t.push)(f, u.state, u);
  }, [e, t, l, n]);
}
function ut(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    matches: n
  } = s.useContext(rr), {
    pathname: l
  } = me(), a = JSON.stringify(Xt(n).map((o) => o.pathnameBase));
  return s.useMemo(() => Qt(e, JSON.parse(a), l, r === "path"), [e, a, l, r]);
}
var _t;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator";
})(_t || (_t = {}));
var Lt;
(function(e) {
  e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator";
})(Lt || (Lt = {}));
var $t;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})($t || ($t = {}));
new Promise(() => {
});
/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ne() {
  return Ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ne.apply(this, arguments);
}
function nr(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), l, a;
  for (a = 0; a < n.length; a++)
    l = n[a], !(t.indexOf(l) >= 0) && (r[l] = e[l]);
  return r;
}
function Hn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Un(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Hn(e);
}
const Dn = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], Vn = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], Wn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Gn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, lr = /* @__PURE__ */ s.forwardRef(function(t, r) {
  let {
    onClick: n,
    relative: l,
    reloadDocument: a,
    replace: o,
    state: c,
    target: u,
    to: f,
    preventScrollReset: d
  } = t, p = nr(t, Dn), {
    basename: m
  } = s.useContext(Fe), g, h = !1;
  if (typeof f == "string" && Gn.test(f) && (g = f, Wn)) {
    let P = new URL(window.location.href), F = f.startsWith("//") ? new URL(P.protocol + f) : new URL(f), $ = Jt(F.pathname, m);
    F.origin === P.origin && $ != null ? f = $ + F.search + F.hash : h = !0;
  }
  let v = it(f, {
    relative: l
  }), b = zn(f, {
    replace: o,
    state: c,
    target: u,
    preventScrollReset: d,
    relative: l
  });
  function w(P) {
    n && n(P), P.defaultPrevented || b(P);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ s.createElement("a", Ne({}, p, {
      href: g || v,
      onClick: h || a ? n : w,
      ref: r,
      target: u
    }))
  );
}), Zn = /* @__PURE__ */ s.forwardRef(function(t, r) {
  let {
    "aria-current": n = "page",
    caseSensitive: l = !1,
    className: a = "",
    end: o = !1,
    style: c,
    to: u,
    children: f
  } = t, d = nr(t, Vn), p = ut(u, {
    relative: d.relative
  }), m = me(), g = s.useContext(er), {
    navigator: h
  } = s.useContext(Fe), v = h.encodeLocation ? h.encodeLocation(p).pathname : p.pathname, b = m.pathname, w = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
  l || (b = b.toLowerCase(), w = w ? w.toLowerCase() : null, v = v.toLowerCase());
  let P = b === v || !o && b.startsWith(v) && b.charAt(v.length) === "/", F = w != null && (w === v || !o && w.startsWith(v) && w.charAt(v.length) === "/"), $ = P ? n : void 0, M;
  typeof a == "function" ? M = a({
    isActive: P,
    isPending: F
  }) : M = [a, P ? "active" : null, F ? "pending" : null].filter(Boolean).join(" ");
  let D = typeof c == "function" ? c({
    isActive: P,
    isPending: F
  }) : c;
  return /* @__PURE__ */ s.createElement(lr, Ne({}, d, {
    "aria-current": $,
    className: M,
    ref: r,
    style: D,
    to: u
  }), typeof f == "function" ? f({
    isActive: P,
    isPending: F
  }) : f);
});
var Ft;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher";
})(Ft || (Ft = {}));
var Ot;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Ot || (Ot = {}));
function zn(e, t) {
  let {
    target: r,
    replace: n,
    state: l,
    preventScrollReset: a,
    relative: o
  } = t === void 0 ? {} : t, c = An(), u = me(), f = ut(e, {
    relative: o
  });
  return s.useCallback((d) => {
    if (Un(d, r)) {
      d.preventDefault();
      let p = n !== void 0 ? n : Pt(u) === Pt(f);
      c(e, {
        replace: p,
        state: l,
        preventScrollReset: a,
        relative: o
      });
    }
  }, [u, c, f, n, l, r, e, a, o]);
}
/**
 * @remix-run/react v1.14.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, X.apply(this, arguments);
}
/**
 * @remix-run/react v1.14.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ct(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
/**
 * @remix-run/react v1.14.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
async function qn(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch {
    return window.location.reload(), new Promise(() => {
    });
  }
}
/**
 * @remix-run/react v1.14.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Kn(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && (typeof e.imageSrcSet == "string" || typeof e.imagesrcset == "string") && (typeof e.imageSizes == "string" || typeof e.imagesizes == "string") : typeof e.rel == "string" && typeof e.href == "string";
}
async function Yn(e, t, r) {
  return (await Promise.all(e.map(async (l) => {
    let a = await qn(t.routes[l.route.id], r);
    return a.links ? a.links() : [];
  }))).flat(1).filter(Kn).filter((l) => l.rel === "stylesheet" || l.rel === "preload").map((l) => l.rel === "preload" ? {
    ...l,
    rel: "prefetch"
  } : {
    ...l,
    rel: "prefetch",
    as: "style"
  });
}
function Rt(e, t, r, n, l, a) {
  let o = or(e), c = (d, p) => r[p] ? d.route.id !== r[p].route.id : !0, u = (d, p) => {
    var m;
    return (
      // param change, /users/123 -> /users/456
      r[p].pathname !== d.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((m = r[p].route.path) === null || m === void 0 ? void 0 : m.endsWith("*")) && r[p].params["*"] !== d.params["*"]
    );
  };
  return a === "data" && l.search !== o.search ? (
    // this is really similar to stuff in transition.ts, maybe somebody smarter
    // than me (or in less of a hurry) can share some of it. You're the best.
    t.filter((d, p) => {
      if (!n.routes[d.route.id].hasLoader)
        return !1;
      if (c(d, p) || u(d, p))
        return !0;
      if (d.route.shouldRevalidate) {
        var g;
        let h = d.route.shouldRevalidate({
          currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
          currentParams: ((g = r[0]) === null || g === void 0 ? void 0 : g.params) || {},
          nextUrl: new URL(e, window.origin),
          nextParams: d.params,
          defaultShouldRevalidate: !0
        });
        if (typeof h == "boolean")
          return h;
      }
      return !0;
    })
  ) : t.filter((d, p) => {
    let m = n.routes[d.route.id];
    return (a === "assets" || m.hasLoader) && (c(d, p) || u(d, p));
  });
}
function Jn(e, t, r) {
  let n = or(e);
  return ar(t.filter((l) => r.routes[l.route.id].hasLoader).map((l) => {
    let {
      pathname: a,
      search: o
    } = n, c = new URLSearchParams(o);
    return c.set("_data", l.route.id), `${a}?${c}`;
  }));
}
function Xn(e, t) {
  return ar(e.map((r) => {
    let n = t.routes[r.route.id], l = [n.module];
    return n.imports && (l = l.concat(n.imports)), l;
  }).flat(1));
}
function ar(e) {
  return [...new Set(e)];
}
function or(e) {
  let t = $e(e);
  return t.search === void 0 && (t.search = ""), t;
}
/**
 * @remix-run/react v1.14.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qn() {
  let e = s.useContext(Bn);
  return ct(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function el() {
  let e = s.useContext(er);
  return ct(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
const ir = /* @__PURE__ */ s.createContext(void 0);
ir.displayName = "Remix";
function sr() {
  let e = s.useContext(ir);
  return ct(e, "You must render this element inside a <Remix> element"), e;
}
function ur(e, t) {
  let [r, n] = s.useState(!1), [l, a] = s.useState(!1), {
    onFocus: o,
    onBlur: c,
    onMouseEnter: u,
    onMouseLeave: f,
    onTouchStart: d
  } = t;
  s.useEffect(() => {
    e === "render" && a(!0);
  }, [e]);
  let p = () => {
    e === "intent" && n(!0);
  }, m = () => {
    e === "intent" && (n(!1), a(!1));
  };
  return s.useEffect(() => {
    if (r) {
      let g = setTimeout(() => {
        a(!0);
      }, 100);
      return () => {
        clearTimeout(g);
      };
    }
  }, [r]), [l, {
    onFocus: de(o, p),
    onBlur: de(c, m),
    onMouseEnter: de(u, p),
    onMouseLeave: de(f, m),
    onTouchStart: de(d, p)
  }];
}
const cr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
let tl = /* @__PURE__ */ s.forwardRef(({
  to: e,
  prefetch: t = "none",
  ...r
}, n) => {
  let l = typeof e == "string" && cr.test(e), a = it(e), [o, c] = ur(t, r);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Zn, X({
    ref: n,
    to: e
  }, r, c)), o && !l ? /* @__PURE__ */ s.createElement(dr, {
    page: a
  }) : null);
});
tl.displayName = "NavLink";
let z = /* @__PURE__ */ s.forwardRef(({
  to: e,
  prefetch: t = "none",
  ...r
}, n) => {
  let l = typeof e == "string" && cr.test(e), a = it(e), [o, c] = ur(t, r);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(lr, X({
    ref: n,
    to: e
  }, r, c)), o && !l ? /* @__PURE__ */ s.createElement(dr, {
    page: a
  }) : null);
});
z.displayName = "Link";
function de(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function dr({
  page: e,
  ...t
}) {
  let {
    router: r
  } = Qn(), n = s.useMemo(() => on(r.routes, e), [r.routes, e]);
  return n ? /* @__PURE__ */ s.createElement(nl, X({
    page: e,
    matches: n
  }, t)) : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function rl(e) {
  let {
    manifest: t,
    routeModules: r
  } = sr(), [n, l] = s.useState([]);
  return s.useEffect(() => {
    let a = !1;
    return Yn(e, t, r).then((o) => {
      a || l(o);
    }), () => {
      a = !0;
    };
  }, [e, t, r]), n;
}
function nl({
  page: e,
  matches: t,
  ...r
}) {
  let n = me(), {
    manifest: l
  } = sr(), {
    matches: a
  } = el(), o = s.useMemo(() => Rt(e, t, a, l, n, "data"), [e, t, a, l, n]), c = s.useMemo(() => Rt(e, t, a, l, n, "assets"), [e, t, a, l, n]), u = s.useMemo(() => Jn(e, o, l), [o, e, l]), f = s.useMemo(() => Xn(c, l), [c, l]), d = rl(c);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, u.map((p) => /* @__PURE__ */ s.createElement("link", X({
    key: p,
    rel: "prefetch",
    as: "fetch",
    href: p
  }, r))), f.map((p) => /* @__PURE__ */ s.createElement("link", X({
    key: p,
    rel: "modulepreload",
    href: p
  }, r))), d.map((p) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ s.createElement("link", X({
      key: p.href
    }, p))
  )));
}
var Xe = {}, ll = {
  get exports() {
    return Xe;
  },
  set exports(e) {
    Xe = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], l = 0; l < arguments.length; l++) {
        var a = arguments[l];
        if (a) {
          var o = typeof a;
          if (o === "string" || o === "number")
            n.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var c = r.apply(null, a);
              c && n.push(c);
            }
          } else if (o === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              n.push(a.toString());
              continue;
            }
            for (var u in a)
              t.call(a, u) && a[u] && n.push(u);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(ll);
const k = Xe, dt = "inline-flex items-center justify-center rounded px-3 py-1 font-bold focus:outline-none duration-500 sm:w-auto transition whitespace-nowrap", fr = k(
  dt,
  "bg-gradient-primary hover:bg-gradient-primary-hover text-slate-1000 focus:ring-toxic-500 overflow-hidden"
), pr = k(
  dt,
  "bg-gradient-secondary-button transition duration-500 text-slate-1000 hover:bg-gradient-secondary-hover border-violet-500 focus:ring-violet-500 hover:border-slate-200 py-1/2 flex h-10 text-lg px-2 md:h-12  md:px-4 group mb-4 lg:mb-0 transition"
), hr = k(
  dt,
  "border border-violet-500 text-violet-400 !text-base focus:ring-violet-400 py-1/2 hover:border-violet-400"
);
function La({ children: e, className: t, ...r }) {
  return /* @__PURE__ */ i("button", { className: k(fr, t), ...r, children: e });
}
function mr({ children: e, className: t, to: r, ...n }) {
  return /* @__PURE__ */ i(z, { to: r, className: k(fr, t), ...n, children: e });
}
function $a({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ i("button", { className: k(pr, t), ...r, children: e });
}
function Fa({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ i(
    "button",
    {
      className: k(hr, t),
      ...r,
      children: e
    }
  );
}
function Oa({ children: e, className: t, ...r }) {
  return /* @__PURE__ */ i(z, { ...r, className: k(pr, t), children: e });
}
function Ra({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ i(
    z,
    {
      ...r,
      target: "_blank",
      className: k(hr, t),
      children: e
    }
  );
}
const we = s;
function al({
  title: e,
  titleId: t,
  ...r
}, n) {
  return /* @__PURE__ */ we.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ we.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ we.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
  }));
}
const ol = we.forwardRef(al);
var il = ol;
const Ee = s;
function sl({
  title: e,
  titleId: t,
  ...r
}, n) {
  return /* @__PURE__ */ Ee.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ Ee.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ Ee.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 12.75l6 6 9-13.5"
  }));
}
const ul = Ee.forwardRef(sl);
var cl = ul;
const Se = s;
function dl({
  title: e,
  titleId: t,
  ...r
}, n) {
  return /* @__PURE__ */ Se.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ Se.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ Se.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
  }));
}
const fl = Se.forwardRef(dl);
var pl = fl;
const Pe = s;
function hl({
  title: e,
  titleId: t,
  ...r
}, n) {
  return /* @__PURE__ */ Pe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ Pe.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ Pe.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
  }));
}
const ml = Pe.forwardRef(hl);
var vl = ml, gl = il, xl = cl, vr = pl, bl = vl;
function gr({
  children: e,
  value: t,
  className: r,
  onCopied: n
}) {
  const l = s.useCallback(
    (a) => {
      a.preventDefault(), a.stopPropagation(), navigator.clipboard.writeText(t), n && n();
    },
    [t, n]
  );
  return /* @__PURE__ */ i("div", { onClick: l, className: `${r}`, children: e });
}
const Tt = {
  slate: "bg-slate-800 text-white rounded px-2 py-1 transition hover:text-slate-700 hover:bg-slate-700 hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
  blue: "text-sm bg-indigo-700 rounded px-3 py-2 transition text-white hover:bg-indigo-600 active:bg-indigo-800 active:text-indigo-100 focus-visible:outline-indigo-600",
  darkTransparent: "bg-black/10 text-slate-900 rounded px-2 py-1 transition hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
  lightTransparent: "bg-white/10 text-white-900 rounded px-2 py-1 transition hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
  text: "text-sm text-slate-400 transition hover:text-slate-300"
};
function Ta({
  value: e,
  className: t,
  text: r,
  variant: n = "blue"
}) {
  const [l, a] = s.useState(!1), o = s.useCallback(() => {
    a(!0), setTimeout(() => {
      a(!1);
    }, 1500);
  }, [a]);
  return /* @__PURE__ */ i(gr, { className: `${t}`, value: e, onCopied: o, children: l ? /* @__PURE__ */ i(
    "div",
    {
      className: k(
        "flex items-center hover:cursor-pointer",
        Tt[n]
      ),
      children: /* @__PURE__ */ i("p", { className: "font-sans", children: "Copied!" })
    }
  ) : /* @__PURE__ */ x(
    "div",
    {
      className: k(
        "flex items-center hover:cursor-pointer",
        Tt[n]
      ),
      children: [
        /* @__PURE__ */ i(vr, { className: "mr-[2px] h-4 w-4" }),
        /* @__PURE__ */ i("p", { className: "font-sans", children: "Copy" })
      ]
    }
  ) });
}
const Mt = {
  primary: "truncate text-indigo-300 bg-indigo-700/50 pl-3.5 pr-2 py-3 rounded border border-indigo-600 flex items-center justify-between gap-2 hover:cursor-pointer hover:bg-indigo-600/50 hover:border-indigo-600 transition",
  slate: "flex w-full items-center justify-between gap-2 truncate rounded bg-slate-850 py-2 pl-2.5 pr-1 transition hover:cursor-pointer hover:bg-slate-800 hover:text-slate-300",
  text: "flex w-full items-center justify-between gap-2 truncate rounded bg-transparent py-2 pl-2.5 pr-1 transition hover:cursor-pointer hover:border-slate-700/50 hover:bg-slate-700/50",
  light: "truncate text-slate-300 bg-slate-900/50 pl-3.5 pr-2 py-3 rounded border border-slate-300/80 flex items-center justify-between gap-2 hover:cursor-pointer hover:text-slate-100 hover:bg-slate-900/50 hover:border-slate-200 transition"
};
function Ma({
  value: e,
  text: t,
  className: r,
  variant: n = "primary"
}) {
  const [l, a] = s.useState(!1), o = s.useCallback(() => {
    a(!0), setTimeout(() => {
      a(!1);
    }, 1500);
  }, [a]);
  return /* @__PURE__ */ i(gr, { value: e, onCopied: o, className: "w-full", children: l ? /* @__PURE__ */ x("div", { className: k(r, Mt[n]), children: [
    /* @__PURE__ */ i("span", { className: "truncate font-mono text-sm", children: t ?? e }),
    /* @__PURE__ */ i(xl, { className: "h-5 w-5 min-w-[1.25rem] text-green-500" })
  ] }) : /* @__PURE__ */ x("div", { className: k(r, Mt[n]), children: [
    /* @__PURE__ */ i("span", { className: "truncate font-mono text-sm", children: t ?? e }),
    /* @__PURE__ */ i(vr, { className: "h-4 w-4 min-w-[1.25rem]" })
  ] }) });
}
function Cl({ className: e, children: t }) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: k(
        "mx-auto max-w-7xl px-4 sm:px-10  lg:px-16 py-24 md:py-32",
        e
      ),
      children: t
    }
  );
}
function xr(e) {
  return /* @__PURE__ */ i(
    "svg",
    {
      className: e.className,
      width: "20",
      height: "20",
      viewBox: "2 0 24 22",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M18.0881 7.3374C18.0116 7.27279 17.9402 7.2032 17.8637 7.14356C17.554 6.88097 17.2269 6.63856 16.8846 6.41792C16.4342 6.13677 15.9516 5.90824 15.4464 5.73702C15.0844 5.61277 14.7172 5.51835 14.35 5.40901C14.2837 5.40901 14.2786 5.38414 14.3092 5.3245C14.3398 5.26485 14.4061 5.14558 14.4469 5.05115C14.4538 5.03366 14.4667 5.0191 14.4835 5.01001C14.5003 5.00092 14.5198 4.99789 14.5387 5.00146C14.809 5.04619 15.0844 5.07601 15.3547 5.13069C15.8281 5.229 16.2896 5.3756 16.7316 5.56805C17.1998 5.76225 17.6502 5.99501 18.0779 6.26385C18.2267 6.353 18.3697 6.45094 18.5063 6.5571C18.5891 6.62989 18.6566 6.71764 18.7051 6.81552C19.1108 7.51363 19.4521 8.24546 19.7251 9.00236C20.1066 10.0234 20.3983 11.0742 20.5971 12.1435C20.7042 12.715 20.7909 13.2866 20.8674 13.8631C20.9184 14.216 20.9388 14.5788 20.9745 14.9366C20.9745 15.0559 20.9745 15.1702 21 15.2895C21 15.3164 20.9911 15.3425 20.9745 15.3641C20.462 15.9257 19.8549 16.398 19.1794 16.7606C18.5379 17.1017 17.8516 17.3558 17.1395 17.5161C16.7511 17.6096 16.3554 17.6711 15.9564 17.7H15.7116C15.701 17.7002 15.6904 17.6981 15.6807 17.6938C15.671 17.6895 15.6624 17.6831 15.6555 17.6752C15.4413 17.4068 15.2323 17.1334 15.0232 16.8551V16.8253C16.3606 16.3823 17.5548 15.6041 18.4859 14.5689C18.3788 14.6434 18.2819 14.718 18.1748 14.7826C17.8739 14.9665 17.5781 15.1504 17.267 15.3193C16.7354 15.61 16.1728 15.8433 15.5892 16.0151C14.6422 16.3069 13.6595 16.474 12.6671 16.5121H12.3713H11.8155C11.4011 16.5146 10.9871 16.4897 10.5762 16.4376C10.1887 16.3879 9.80109 16.3332 9.41351 16.2636C8.86661 16.1567 8.33068 16.002 7.81221 15.8014C7.15233 15.5479 6.523 15.2246 5.93553 14.8372L5.55306 14.5788C6.01711 15.0934 6.54864 15.5462 7.13396 15.9257C7.72153 16.3044 8.35541 16.6099 9.02084 16.8352L8.98514 16.8899L8.39358 17.6553C8.38145 17.6729 8.36453 17.6868 8.34472 17.6956C8.3249 17.7044 8.30298 17.7076 8.28138 17.705C7.93875 17.691 7.59775 17.6511 7.26145 17.5857C6.76756 17.4952 6.28289 17.3621 5.81314 17.1881C5.27458 16.9934 4.76114 16.7382 4.28323 16.4277C3.86783 16.1551 3.48621 15.8365 3.14601 15.4784C3.14601 15.4784 3.12051 15.4386 3.10011 15.4287C3.06012 15.3983 3.03012 15.3571 3.01381 15.3103C2.9975 15.2635 2.99559 15.2131 3.00831 15.1653L3.05421 14.6335C3.0899 14.2856 3.1205 13.9426 3.1664 13.5947C3.2123 13.2468 3.28879 12.7647 3.36529 12.3472C3.51174 11.5311 3.7093 10.7244 3.95685 9.93177C4.16738 9.2543 4.42116 8.59033 4.71671 7.94373C4.91624 7.50667 5.14275 7.08178 5.39497 6.6714C5.46939 6.5728 5.56514 6.49137 5.67544 6.43284C6.1388 6.11857 6.63239 5.84893 7.14925 5.62769C7.71444 5.38251 8.30641 5.20075 8.91375 5.08594L9.47981 5.00643C9.49599 5.00328 9.51279 5.00611 9.52694 5.01438C9.54108 5.02265 9.55155 5.03575 9.55631 5.05115L9.7042 5.33942C9.7297 5.38415 9.7042 5.39907 9.6685 5.40901C9.41351 5.47859 9.15854 5.54319 8.90865 5.61774C8.45618 5.75584 8.01886 5.93729 7.60313 6.15946C7.24627 6.34465 6.9052 6.5574 6.58319 6.79565C6.3588 6.9696 6.14462 7.14853 5.92533 7.32745C5.9235 7.33135 5.92255 7.33557 5.92255 7.33986C5.92255 7.34415 5.9235 7.3484 5.92533 7.35229L5.99163 7.32248C6.471 7.09882 6.95037 6.86522 7.43994 6.65647C8.00719 6.4106 8.59831 6.22081 9.20443 6.08991C9.61682 5.99062 10.0361 5.92083 10.459 5.88114C10.8414 5.84635 11.2239 5.82649 11.6013 5.80661C11.79 5.80661 11.9787 5.80661 12.1673 5.80661C12.5141 5.80661 12.866 5.8414 13.2128 5.86625C13.8437 5.91322 14.4686 6.01806 15.0793 6.17936C15.6332 6.32264 16.1739 6.51049 16.6959 6.74099L17.9606 7.33243L18.0218 7.36224L18.0881 7.3374ZM9.35232 10.5679C9.08643 10.5761 8.82881 10.66 8.6113 10.8093C8.39378 10.9586 8.2259 11.1667 8.12839 11.4079C7.98657 11.7022 7.93351 12.0296 7.97541 12.3522C8.01397 12.7406 8.19505 13.1024 8.48538 13.371C8.61754 13.5006 8.77761 13.6 8.95401 13.6619C9.13041 13.7238 9.31872 13.7467 9.50531 13.7289C9.68475 13.7178 9.85988 13.6705 10.0196 13.5901C10.1794 13.5097 10.3203 13.3979 10.4335 13.2617C10.7252 12.9245 10.8682 12.4886 10.8312 12.049C10.8196 11.7253 10.7096 11.4122 10.515 11.1494C10.3862 10.9659 10.2123 10.8166 10.0093 10.7151C9.80628 10.6135 9.58046 10.563 9.35232 10.5679ZM16.1094 12.1733C16.1148 11.8593 16.0319 11.55 15.8697 11.2787C15.7548 11.0583 15.5775 10.8747 15.3587 10.7496C15.14 10.6245 14.889 10.5632 14.6356 10.5729C14.451 10.578 14.2698 10.6219 14.1043 10.7017C13.9388 10.7815 13.793 10.8953 13.6769 11.0351C13.5285 11.203 13.4159 11.398 13.3459 11.6088C13.2758 11.8196 13.2496 12.0419 13.2689 12.2627C13.2861 12.6947 13.4787 13.1023 13.8043 13.3959C13.9417 13.5243 14.1072 13.6205 14.2883 13.6773C14.4694 13.7342 14.6614 13.7501 14.8498 13.7239C15.1962 13.6764 15.5095 13.4978 15.7218 13.2269C15.9694 12.9284 16.106 12.5571 16.1094 12.1733Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function br(e) {
  return /* @__PURE__ */ x(
    "svg",
    {
      viewBox: "0 0 751 130",
      xmlns: "http://www.w3.org/2000/svg",
      className: e.className,
      children: [
        /* @__PURE__ */ i(
          "path",
          {
            d: "M195.022 16.2676H135.445H137.799V32.5096H157.858V102.4H174.84V32.5096H195.022V16.2676Z",
            fill: "url(#paint0_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M211.265 51.4587V40.8767H195.391V102.4H211.265V72.9917C211.265 60.0719 221.725 56.3805 229.97 57.3648V39.6463C222.218 39.6463 214.465 43.0916 211.265 51.4587Z",
            fill: "url(#paint1_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M246.954 33.494C252.368 33.494 256.799 29.0644 256.799 23.7734C256.799 18.4824 252.368 13.9297 246.954 13.9297C241.662 13.9297 237.232 18.4824 237.232 23.7734C237.232 29.0644 241.662 33.494 246.954 33.494ZM239.078 102.4H254.953V40.8767H239.078V102.4Z",
            fill: "url(#paint2_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M315.253 40.8768V48.5056C310.946 42.7224 304.301 39.1542 295.563 39.1542C278.089 39.1542 264.921 53.4275 264.921 70.6539C264.921 88.0033 278.089 102.154 295.563 102.154C304.301 102.154 310.946 98.5853 315.253 92.8021V99.4466C315.253 109.167 309.1 114.581 299.132 114.581C289.656 114.581 285.596 110.767 283.011 105.968L269.475 113.72C274.889 123.687 285.472 128.731 298.64 128.731C314.884 128.731 330.758 119.626 330.758 99.4466V40.8768H315.253ZM298.025 87.5112C288.057 87.5112 280.796 80.4975 280.796 70.6539C280.796 60.9332 288.057 53.9196 298.025 53.9196C307.992 53.9196 315.253 60.9332 315.253 70.6539C315.253 80.4975 307.992 87.5112 298.025 87.5112Z",
            fill: "url(#paint3_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M390.936 40.8768V48.5056C386.629 42.7224 379.983 39.1542 371.246 39.1542C353.772 39.1542 340.604 53.4275 340.604 70.6539C340.604 88.0033 353.772 102.154 371.246 102.154C379.983 102.154 386.629 98.5853 390.936 92.8021V99.4466C390.936 109.167 384.783 114.581 374.815 114.581C365.339 114.581 361.278 110.767 358.694 105.968L345.157 113.72C350.572 123.687 361.155 128.731 374.322 128.731C390.566 128.731 406.441 119.626 406.441 99.4466V40.8768H390.936ZM373.707 87.5112C363.739 87.5112 356.479 80.4975 356.479 70.6539C356.479 60.9332 363.739 53.9196 373.707 53.9196C383.675 53.9196 390.936 60.9332 390.936 70.6539C390.936 80.4975 383.675 87.5112 373.707 87.5112Z",
            fill: "url(#paint4_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M432.9 78.1597H479.293C479.663 76.0679 479.909 73.9761 479.909 71.6383C479.909 53.5505 466.987 39.1542 448.775 39.1542C429.454 39.1542 416.287 53.3044 416.287 71.6383C416.287 89.9721 429.331 104.122 450.005 104.122C461.819 104.122 471.048 99.3236 476.832 90.9564L464.034 83.5737C461.327 87.142 456.404 89.726 450.251 89.726C441.883 89.726 435.115 86.2807 432.9 78.1597ZM432.654 65.8551C434.5 57.9802 440.284 53.4274 448.775 53.4274C455.42 53.4274 462.065 56.9958 464.034 65.8551H432.654Z",
            fill: "url(#paint5_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M505.199 51.4587V40.8767H489.324V102.4H505.199V72.9917C505.199 60.0719 515.659 56.3805 523.904 57.3648V39.6463C516.151 39.6463 508.398 43.0916 505.199 51.4587Z",
            fill: "url(#paint6_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M529.934 103.999C535.717 103.999 540.394 99.3235 540.394 93.5404C540.394 87.7572 535.717 83.0815 529.934 83.0815C524.15 83.0815 519.473 87.7572 519.473 93.5404C519.473 99.3235 524.15 103.999 529.934 103.999Z",
            fill: "url(#paint7_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M596.632 16.2676V48.1364C592.202 42.4763 585.679 39.1541 576.696 39.1541C560.206 39.1541 546.67 53.3044 546.67 71.6382C546.67 89.972 560.206 104.122 576.696 104.122C585.679 104.122 592.202 100.8 596.632 95.1399V102.4H612.506V16.2676L596.632 16.2676ZM579.65 88.9876C569.805 88.9876 562.544 81.9741 562.544 71.6382C562.544 61.3024 569.805 54.2887 579.65 54.2887C589.371 54.2887 596.632 61.3024 596.632 71.6382C596.632 81.9741 589.371 88.9876 579.65 88.9876Z",
            fill: "url(#paint8_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M637.98 78.1597H684.373C684.742 76.0679 684.989 73.9761 684.989 71.6383C684.989 53.5505 672.067 39.1542 653.855 39.1542C634.534 39.1542 621.367 53.3044 621.367 71.6383C621.367 89.9721 634.411 104.122 655.085 104.122C666.899 104.122 676.128 99.3236 681.912 90.9564L669.114 83.5737C666.407 87.142 661.484 89.726 655.331 89.726C646.963 89.726 640.195 86.2807 637.98 78.1597ZM637.734 65.8551C639.58 57.9802 645.363 53.4274 653.855 53.4274C660.5 53.4274 667.145 56.9958 669.114 65.8551H637.734Z",
            fill: "url(#paint9_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M732.859 40.8768L717.846 83.9428L702.955 40.8768H685.481L708.862 102.4H726.952L750.333 40.8768H732.859Z",
            fill: "url(#paint10_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M35.664 42.3949L59.4114 1.26865L118.264 103.194H0.558823L24.3062 62.0665L41.1046 71.7643L34.157 83.7971H84.6657L59.4114 40.0612L52.4637 52.094L35.664 42.3949Z",
            fill: "url(#paint11_linear_228_1439)"
          }
        ),
        /* @__PURE__ */ x("defs", { children: [
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint0_linear_228_1439",
              x1: "329.674",
              y1: "150.079",
              x2: "329.674",
              y2: "13.9297",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#41FF54" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#E7FF52" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint1_linear_228_1439",
              x1: "329.674",
              y1: "150.079",
              x2: "329.674",
              y2: "13.9297",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#41FF54" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#E7FF52" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint2_linear_228_1439",
              x1: "329.674",
              y1: "150.079",
              x2: "329.674",
              y2: "13.9297",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#41FF54" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#E7FF52" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint3_linear_228_1439",
              x1: "329.674",
              y1: "150.079",
              x2: "329.674",
              y2: "13.9297",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#41FF54" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#E7FF52" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint4_linear_228_1439",
              x1: "329.674",
              y1: "150.079",
              x2: "329.674",
              y2: "13.9297",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#41FF54" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#E7FF52" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint5_linear_228_1439",
              x1: "329.674",
              y1: "150.079",
              x2: "329.674",
              y2: "13.9297",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#41FF54" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#E7FF52" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint6_linear_228_1439",
              x1: "329.674",
              y1: "150.079",
              x2: "329.674",
              y2: "13.9297",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#41FF54" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#E7FF52" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint7_linear_228_1439",
              x1: "634.903",
              y1: "139.717",
              x2: "651.436",
              y2: "25.9719",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#2563EB" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#A855F7" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint8_linear_228_1439",
              x1: "634.903",
              y1: "139.717",
              x2: "651.436",
              y2: "25.9719",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#2563EB" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#A855F7" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint9_linear_228_1439",
              x1: "634.903",
              y1: "139.717",
              x2: "651.436",
              y2: "25.9719",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#2563EB" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#A855F7" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint10_linear_228_1439",
              x1: "634.903",
              y1: "139.717",
              x2: "651.436",
              y2: "25.9719",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#2563EB" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#A855F7" })
              ]
            }
          ),
          /* @__PURE__ */ x(
            "linearGradient",
            {
              id: "paint11_linear_228_1439",
              x1: "95.8593",
              y1: "103.194",
              x2: "94.7607",
              y2: "31.2381",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ i("stop", { stopColor: "#41FF54" }),
                /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#E7FF52" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Ia() {
  return /* @__PURE__ */ i("footer", { className: "bg-slate-900 pb-10 z-10 border-t border-slate-400/10 pt-12", children: /* @__PURE__ */ x(Cl, { children: [
    /* @__PURE__ */ x("div", { className: "flex items-start grow md:flex-row flex-col justify-between px-4", children: [
      /* @__PURE__ */ i("div", { className: "hidden lg:flex w-64 h-auto mr-60", children: /* @__PURE__ */ i(br, {}) }),
      /* @__PURE__ */ x("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-y-12 sm:pt-2 pt-8 w-full", children: [
        /* @__PURE__ */ x("div", { className: "grid gap-y-2 content-start", children: [
          /* @__PURE__ */ i("p", { className: "pb-4 text-slate-500 text-xs md:text-xs font-bold tracking-wider", children: "PRODUCT" }),
          /* @__PURE__ */ i(
            "a",
            {
              href: "https://docs.trigger.dev",
              "aria-label": "Docs",
              title: "Docs",
              target: "_blank",
              className: " flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: "Docs"
            }
          ),
          /* @__PURE__ */ i(
            "a",
            {
              href: "https://app.trigger.dev/templates",
              "aria-label": "Templates",
              title: "Templates",
              className: " flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: "Templates"
            }
          ),
          /* @__PURE__ */ i(
            "a",
            {
              href: "/pricing",
              "aria-label": "Pricing",
              title: "Pricing",
              className: " flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: "Pricing"
            }
          )
        ] }),
        /* @__PURE__ */ x("div", { className: "grid gap-y-2 content-start", children: [
          /* @__PURE__ */ i("p", { className: "pb-4 text-slate-500 text-xs md:text-xs font-bold tracking-wider", children: "COMPANY" }),
          /* @__PURE__ */ i(
            "a",
            {
              href: "https://blog.trigger.dev",
              "aria-label": "Blog",
              title: "Blog",
              className: " flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: "Blog"
            }
          ),
          /* @__PURE__ */ i(
            "a",
            {
              href: "/legal/privacy",
              "aria-label": "Privacy",
              target: "_blank",
              title: "Privacy",
              className: " flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: "Privacy"
            }
          ),
          /* @__PURE__ */ i(
            "a",
            {
              href: "/legal/terms",
              "aria-label": "Terms",
              target: "_blank",
              title: "Terms",
              className: " flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: "Terms"
            }
          )
        ] }),
        /* @__PURE__ */ x("div", { className: "grid grow gap-y-2 content-start", children: [
          /* @__PURE__ */ i("p", { className: "pb-4 text-slate-500 text-xs md:text-xs font-bold tracking-wider", children: "COMMUNITY" }),
          /* @__PURE__ */ x(
            "a",
            {
              href: "https://github.com/triggerdotdev/trigger.dev",
              "aria-label": "Trigger.dev GitHub",
              target: "_blank",
              title: "Trigger.dev GitHub",
              className: " flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: [
                /* @__PURE__ */ i(
                  "svg",
                  {
                    className: "mr-2",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ i(
                      "path",
                      {
                        d: "M11.9906 1.78809C6.19453 1.78574 1.5 6.47793 1.5 12.2693C1.5 16.849 4.43672 20.742 8.52656 22.1717C9.07734 22.31 8.99297 21.9186 8.99297 21.6514V19.835C5.8125 20.2076 5.68359 18.1029 5.47031 17.7514C5.03906 17.0154 4.01953 16.8279 4.32422 16.4764C5.04844 16.1037 5.78672 16.5701 6.64219 17.8334C7.26094 18.7498 8.46797 18.5951 9.07969 18.4428C9.21328 17.892 9.49922 17.3998 9.89297 17.0178C6.59766 16.4271 5.22422 14.4162 5.22422 12.0256C5.22422 10.8654 5.60625 9.79902 6.35625 8.93887C5.87812 7.5209 6.40078 6.30684 6.47109 6.12637C7.83281 6.00449 9.24844 7.10137 9.35859 7.18809C10.132 6.97949 11.0156 6.86934 12.0047 6.86934C12.9984 6.86934 13.8844 6.98418 14.6648 7.19512C14.9297 6.99355 16.2422 6.05137 17.5078 6.16621C17.5758 6.34668 18.0867 7.53262 17.6367 8.93184C18.3961 9.79434 18.7828 10.8701 18.7828 12.0326C18.7828 14.4279 17.4 16.4412 14.0953 17.0225C14.3784 17.3008 14.6031 17.6328 14.7564 17.999C14.9098 18.3652 14.9886 18.7583 14.9883 19.1553V21.792C15.007 22.0029 14.9883 22.2115 15.3398 22.2115C19.4906 20.8123 22.4789 16.8912 22.4789 12.2717C22.4789 6.47793 17.782 1.78809 11.9906 1.78809V1.78809Z",
                        fill: "currentColor"
                      }
                    )
                  }
                ),
                "GitHub"
              ]
            }
          ),
          /* @__PURE__ */ x(
            "a",
            {
              href: "https://discord.gg/nkqV9xBYWy",
              "aria-label": "Discord",
              target: "_blank",
              title: "Discord",
              className: " flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: [
                /* @__PURE__ */ i(xr, { className: "mr-1" }),
                "Discord"
              ]
            }
          ),
          /* @__PURE__ */ x(
            "a",
            {
              href: "https://twitter.com/triggerdotdev",
              "aria-label": "Trigger.dev on Twitter",
              target: "_blank",
              className: "group flex items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: [
                /* @__PURE__ */ i(
                  "svg",
                  {
                    className: "mr-2",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "none",
                    viewBox: "0 0 25 24",
                    children: /* @__PURE__ */ i(
                      "path",
                      {
                        fill: "currentColor",
                        d: "M7.9975 21.6102C16.9943 21.6102 21.9143 14.1625 21.9143 7.7042C21.9143 7.49266 21.91 7.28207 21.9005 7.07245C22.8555 6.38257 23.6856 5.52166 24.3403 4.54162C23.4639 4.93087 22.5208 5.1929 21.5314 5.31106C22.5413 4.70599 23.3166 3.74883 23.6823 2.6078C22.7373 3.16761 21.6907 3.57449 20.5764 3.79416C19.6839 2.84418 18.4131 2.25 17.0061 2.25C14.305 2.25 12.1146 4.43878 12.1146 7.13676C12.1146 7.52028 12.1575 7.89333 12.2414 8.25117C8.1762 8.04677 4.57148 6.10196 2.159 3.14474C1.73894 3.86701 1.49672 4.70601 1.49672 5.60123C1.49672 7.29687 2.36024 8.79379 3.67336 9.66951C2.87088 9.64473 2.11704 9.42461 1.45816 9.05823C1.45744 9.07874 1.45744 9.09874 1.45744 9.12065C1.45744 11.4876 3.14344 13.4638 5.38152 13.9116C4.97052 14.0236 4.53808 14.0836 4.09176 14.0836C3.77707 14.0836 3.47048 14.0527 3.17248 13.9955C3.79518 15.9374 5.60088 17.3506 7.74168 17.3901C6.0676 18.7012 3.95872 19.4821 1.66672 19.4821C1.2724 19.4821 0.882856 19.4597 0.5 19.4144C2.66472 20.8009 5.23512 21.6099 7.99776 21.6099"
                      }
                    )
                  }
                ),
                "Twitter"
              ]
            }
          ),
          /* @__PURE__ */ x(
            "a",
            {
              href: "https://www.linkedin.com/company/triggerdotdev",
              "aria-label": "Trigger.dev LinkedIn",
              target: "_blank",
              title: "Trigger.dev LinkedIn",
              className: " flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: [
                /* @__PURE__ */ i(
                  "svg",
                  {
                    className: "mr-2",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "15",
                    height: "15",
                    fill: "none",
                    viewBox: "0 0 25 24",
                    children: /* @__PURE__ */ i(
                      "path",
                      {
                        fill: "currentColor",
                        d: "M20.8084 20.1082H17.2769V14.6321C17.2769 13.3262 17.2533 11.6452 15.4401 11.6452C13.6007 11.6452 13.3193 13.068 13.3193 14.537V20.1078H9.78768V8.84669H13.178V10.3856H13.2255C13.5648 9.81124 14.055 9.33871 14.6441 9.01837C15.2332 8.69804 15.8989 8.5419 16.5705 8.56658C20.1499 8.56658 20.8099 10.8978 20.8099 13.9305L20.8084 20.1082ZM5.80288 7.30737C5.39755 7.30744 5.00128 7.1885 4.66422 6.96559C4.32715 6.74267 4.06443 6.42579 3.90925 6.05503C3.75407 5.68426 3.7134 5.27625 3.7924 4.88261C3.87141 4.48896 4.06654 4.12735 4.3531 3.84351C4.63967 3.55966 5.00481 3.36633 5.40234 3.28796C5.79988 3.20959 6.21195 3.2497 6.58646 3.40322C6.96097 3.55675 7.28109 3.81678 7.50634 4.15045C7.7316 4.48411 7.85187 4.87643 7.85194 5.27777C7.85199 5.54425 7.79902 5.80814 7.69607 6.05435C7.59312 6.30057 7.44222 6.5243 7.25195 6.71276C7.06167 6.90123 6.83576 7.05074 6.58713 7.15276C6.3385 7.25479 6.07202 7.30732 5.80288 7.30737V7.30737ZM7.56867 20.1082H4.03342V8.84669H7.56867V20.1082ZM22.5691 0.00160786H2.2588C1.79782 -0.00354313 1.3536 0.172731 1.02381 0.491694C0.694018 0.810658 0.505626 1.24621 0.5 1.70266V21.8963C0.505434 22.353 0.693715 22.7888 1.0235 23.1081C1.35328 23.4274 1.79759 23.604 2.2588 23.5992H22.5691C23.0312 23.6049 23.4768 23.4288 23.8078 23.1095C24.1389 22.7902 24.3285 22.3539 24.3349 21.8963V1.7012C24.3283 1.24385 24.1386 0.8078 23.8075 0.488844C23.4764 0.169889 23.031 -0.00588157 22.5691 0.00015027"
                      }
                    )
                  }
                ),
                "LinkedIn"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ x("div", { className: "grid gap-y-2 content-start", children: [
          /* @__PURE__ */ i("p", { className: "pb-4 text-slate-500 text-xs md:text-xs font-bold tracking-wider", children: "CONTACT" }),
          /* @__PURE__ */ x(
            "a",
            {
              href: "mailto:hello@trigger.dev",
              "aria-label": "Send Trigger.dev an email",
              className: "group flex gap-2 items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: [
                /* @__PURE__ */ i(bl, { className: "h-4 w-4 text-slate-500 group-hover:fill-toxic-500 transition" }),
                "Get in touch"
              ]
            }
          ),
          /* @__PURE__ */ x(
            "a",
            {
              href: "https://cal.com/team/triggerdotdev/call",
              "aria-label": "Schedule a call with the founders",
              target: "_blank",
              className: "group flex gap-2 items-center text-xs text-slate-500 hover:text-toxic-500 transition",
              children: [
                /* @__PURE__ */ i(gl, { className: "h-4 w-4 text-slate-500 group-hover:fill-toxic-500 transition" }),
                "Schedule a call"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ x("div", { className: "flex flex-col gap-y-2 pt-12 pb-8 px-4", children: [
      /* @__PURE__ */ x("p", { className: "mt-6 text-xs text-slate-500 sm:mt-0", children: [
        "Copyright © ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Trigger.dev. All rights reserved."
      ] }),
      /* @__PURE__ */ x("p", { className: "mt-2 text-xs text-slate-500 sm:mt-0", children: [
        "From the makers of ",
        /* @__PURE__ */ i(
          "a",
          {
            href: "https://jsonhero.io",
            className: "text-slate-400 underline transition hover:underline hover:text-toxic-500",
            target: "_blank",
            children: "JSON Hero"
          }
        ),
        "."
      ] })
    ] })
  ] }) });
}
function Cr({ className: e }) {
  return /* @__PURE__ */ x(
    "svg",
    {
      className: e,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ i("g", { clipPath: "url(#clip0_571_3822)", children: /* @__PURE__ */ i(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 0C5.37017 0 0 5.50708 0 12.306C0 17.745 3.44015 22.3532 8.20626 23.9849C8.80295 24.0982 9.02394 23.7205 9.02394 23.3881C9.02394 23.0935 9.01657 22.3229 9.00921 21.2956C5.67219 22.0359 4.96501 19.6487 4.96501 19.6487C4.41989 18.2285 3.63168 17.8508 3.63168 17.8508C2.54144 17.0878 3.71271 17.1029 3.71271 17.1029C4.91344 17.1936 5.55433 18.372 5.55433 18.372C6.62247 20.2531 8.36096 19.7092 9.04604 19.3919C9.15654 18.5987 9.46593 18.0548 9.80479 17.745C7.13812 17.4353 4.33886 16.3777 4.33886 11.6638C4.33886 10.3192 4.80295 9.2238 5.57643 8.36261C5.4512 8.05288 5.03867 6.79887 5.69429 5.1067C5.69429 5.1067 6.7035 4.77432 8.99447 6.36827C9.95212 6.09632 10.9761 5.96034 12 5.95279C13.0166 5.95279 14.0479 6.09632 15.0055 6.36827C17.2965 4.77432 18.3057 5.1067 18.3057 5.1067C18.9613 6.79887 18.5488 8.05288 18.4236 8.36261C19.1897 9.2238 19.6538 10.3192 19.6538 11.6638C19.6538 16.3928 16.8471 17.4278 14.1731 17.7375C14.6004 18.1152 14.9908 18.8706 14.9908 20.0189C14.9908 21.6657 14.9761 22.9877 14.9761 23.3957C14.9761 23.728 15.1897 24.1058 15.8011 23.9849C20.5672 22.3532 24 17.745 24 12.3135C24 5.50708 18.6298 0 12 0Z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("clipPath", { id: "clip0_571_3822", children: /* @__PURE__ */ i("rect", { width: "24", height: "24", fill: "white" }) }) })
      ]
    }
  );
}
function yl({ count: e }) {
  const t = e >= 1e3 ? Math.floor(e / 1e3 * 10) / 10 + "k" : Math.round(e / 50) * 50 + "";
  return /* @__PURE__ */ x(
    z,
    {
      to: "https://github.com/triggerdotdev/trigger.dev",
      className: "group flex h-8 flex-row items-center justify-center overflow-hidden rounded border-[1px] border-slate-700 bg-slate-800 transition",
      target: "_blank",
      children: [
        /* @__PURE__ */ x("div", { className: "flex h-full items-center justify-center bg-slate-700/80 pr-2 pl-2 placeholder-blue-200 transition group-hover:bg-slate-600", children: [
          /* @__PURE__ */ i(Cr, { className: "flex h-4 w-4 text-slate-50 lg:mr-1" }),
          /* @__PURE__ */ i("p", { className: "ml-1 hidden text-sm font-semibold tracking-tight text-slate-300 transition group-hover:text-slate-50 lg:flex", children: "Star" })
        ] }),
        /* @__PURE__ */ i("div", { className: "h-full w-[1px] bg-slate-700" }),
        /* @__PURE__ */ i("div", { className: "flex h-full bg-slate-800 pl-2 pr-2 transition group-hover:bg-slate-700", children: /* @__PURE__ */ i("p", { className: "text-md min-w-4 flex items-center justify-center text-sm font-semibold tracking-tight text-slate-300 transition group-hover:text-slate-50", children: t }) })
      ]
    }
  );
}
function ja({ count: e }) {
  const t = e >= 1e3 ? Math.floor(e / 1e3 * 10) / 10 + "k" : Math.round(e / 50) * 50 + "";
  return /* @__PURE__ */ x(
    z,
    {
      to: "https://github.com/triggerdotdev/trigger.dev",
      className: "group flex flex-row items-center justify-center overflow-hidden rounded border-[1px] border-slate-700 bg-slate-800 transition",
      target: "_blank",
      children: [
        /* @__PURE__ */ x("div", { className: "flex h-full items-center justify-center bg-slate-700/80 p-3 placeholder-blue-200 transition group-hover:bg-slate-600", children: [
          /* @__PURE__ */ i(Cr, { className: "flex h-6 w-6 text-slate-50 lg:mr-1" }),
          /* @__PURE__ */ i("p", { className: "ml-1 text-lg font-semibold tracking-tight text-slate-100 transition group-hover:text-slate-50", children: "Star us on GitHub" })
        ] }),
        /* @__PURE__ */ i("div", { className: "h-full w-[1px] bg-slate-700" }),
        /* @__PURE__ */ i("div", { className: "flex h-full bg-slate-800 pl-3 pr-3 transition group-hover:bg-slate-700", children: /* @__PURE__ */ i("p", { className: "text-md min-w-4 flex items-center justify-center text-lg font-semibold tracking-tight text-slate-100 transition group-hover:text-slate-50", children: t }) })
      ]
    }
  );
}
var wl = Object.defineProperty, El = (e, t, r) => t in e ? wl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, We = (e, t, r) => (El(e, typeof t != "symbol" ? t + "" : t, r), r);
let Sl = class {
  constructor() {
    We(this, "current", this.detect()), We(this, "handoffState", "pending"), We(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, Q = new Sl(), ee = (e, t) => {
  Q.isServer ? s.useEffect(e, t) : s.useLayoutEffect(e, t);
};
function U(e) {
  let t = s.useRef(e);
  return ee(() => {
    t.current = e;
  }, [e]), t;
}
function Pl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function ve() {
  let e = [], t = { addEventListener(r, n, l, a) {
    return r.addEventListener(n, l, a), t.add(() => r.removeEventListener(n, l, a));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    return t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    return t.add(() => clearTimeout(n));
  }, microTask(...r) {
    let n = { current: !0 };
    return Pl(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = !1;
    });
  }, style(r, n, l) {
    let a = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: l }), this.add(() => {
      Object.assign(r.style, { [n]: a });
    });
  }, group(r) {
    let n = ve();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e.push(r), () => {
      let n = e.indexOf(r);
      if (n >= 0)
        for (let l of e.splice(n, 1))
          l();
    };
  }, dispose() {
    for (let r of e.splice(0))
      r();
  } };
  return t;
}
function yr() {
  let [e] = s.useState(ve);
  return s.useEffect(() => () => e.dispose(), [e]), e;
}
let O = function(e) {
  let t = U(e);
  return _.useCallback((...r) => t.current(...r), [t]);
};
function ft() {
  let [e, t] = s.useState(Q.isHandoffComplete);
  return e && Q.isHandoffComplete === !1 && t(!1), s.useEffect(() => {
    e !== !0 && t(!0);
  }, [e]), s.useEffect(() => Q.handoff(), []), e;
}
var It;
let se = (It = _.useId) != null ? It : function() {
  let e = ft(), [t, r] = _.useState(e ? () => Q.nextId() : null);
  return ee(() => {
    t === null && r(Q.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function T(e, t, ...r) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...r) : l;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, T), n;
}
function pt(e) {
  return Q.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let Qe = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var W = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(W || {}), ke = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(ke || {}), Nl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Nl || {});
function Oe(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Qe)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ht = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ht || {});
function wr(e, t = 0) {
  var r;
  return e === ((r = pt(e)) == null ? void 0 : r.body) ? !1 : T(t, { [0]() {
    return e.matches(Qe);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(Qe))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
let kl = ["textarea", "input"].join(",");
function _l(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, kl)) != null ? r : !1;
}
function Ll(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let l = t(r), a = t(n);
    if (l === null || a === null)
      return 0;
    let o = l.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function le(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: l = [] } = {}) {
  let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, o = Array.isArray(e) ? r ? Ll(e) : e : Oe(e);
  l.length > 0 && o.length > 1 && (o = o.filter((g) => !l.includes(g))), n = n ?? a.activeElement;
  let c = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = t & 32 ? { preventScroll: !0 } : {}, d = 0, p = o.length, m;
  do {
    if (d >= p || d + p <= 0)
      return 0;
    let g = u + d;
    if (t & 16)
      g = (g + p) % p;
    else {
      if (g < 0)
        return 3;
      if (g >= p)
        return 1;
    }
    m = o[g], m == null || m.focus(f), d += c;
  } while (m !== a.activeElement);
  return t & 6 && _l(m) && m.select(), m.hasAttribute("tabindex") || m.setAttribute("tabindex", "0"), 2;
}
function Ge(e, t, r) {
  let n = U(t);
  s.useEffect(() => {
    function l(a) {
      n.current(a);
    }
    return document.addEventListener(e, l, r), () => document.removeEventListener(e, l, r);
  }, [e, r]);
}
function $l(e, t, r = !0) {
  let n = s.useRef(!1);
  s.useEffect(() => {
    requestAnimationFrame(() => {
      n.current = r;
    });
  }, [r]);
  function l(o, c) {
    if (!n.current || o.defaultPrevented)
      return;
    let u = function d(p) {
      return typeof p == "function" ? d(p()) : Array.isArray(p) || p instanceof Set ? p : [p];
    }(e), f = c(o);
    if (f !== null && f.getRootNode().contains(f)) {
      for (let d of u) {
        if (d === null)
          continue;
        let p = d instanceof HTMLElement ? d : d.current;
        if (p != null && p.contains(f) || o.composed && o.composedPath().includes(p))
          return;
      }
      return !wr(f, ht.Loose) && f.tabIndex !== -1 && o.preventDefault(), t(o, f);
    }
  }
  let a = s.useRef(null);
  Ge("mousedown", (o) => {
    var c, u;
    n.current && (a.current = ((u = (c = o.composedPath) == null ? void 0 : c.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), Ge("click", (o) => {
    a.current && (l(o, () => a.current), a.current = null);
  }, !0), Ge("blur", (o) => l(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function jt(e) {
  var t;
  if (e.type)
    return e.type;
  let r = (t = e.as) != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button")
    return "button";
}
function Fl(e, t) {
  let [r, n] = s.useState(() => jt(e));
  return ee(() => {
    n(jt(e));
  }, [e.type, e.as]), ee(() => {
    r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button");
  }, [r, t]), r;
}
let Er = Symbol();
function Ol(e, t = !0) {
  return Object.assign(e, { [Er]: t });
}
function te(...e) {
  let t = s.useRef(e);
  s.useEffect(() => {
    t.current = e;
  }, [e]);
  let r = O((n) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(n) : l.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[Er])) ? void 0 : r;
}
function Sr(...e) {
  return e.filter(Boolean).join(" ");
}
var ue = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ue || {}), G = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(G || {});
function re({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: l, visible: a = !0, name: o }) {
  let c = Pr(t, e);
  if (a)
    return xe(c, r, n, o);
  let u = l ?? 0;
  if (u & 2) {
    let { static: f = !1, ...d } = c;
    if (f)
      return xe(d, r, n, o);
  }
  if (u & 1) {
    let { unmount: f = !0, ...d } = c;
    return T(f ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return xe({ ...d, hidden: !0, style: { display: "none" } }, r, n, o);
    } });
  }
  return xe(c, r, n, o);
}
function xe(e, t = {}, r, n) {
  var l;
  let { as: a = r, children: o, refName: c = "ref", ...u } = Ze(e, ["unmount", "static"]), f = e.ref !== void 0 ? { [c]: e.ref } : {}, d = typeof o == "function" ? o(t) : o;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t));
  let p = {};
  if (t) {
    let m = !1, g = [];
    for (let [h, v] of Object.entries(t))
      typeof v == "boolean" && (m = !0), v === !0 && g.push(h);
    m && (p["data-headlessui-state"] = g.join(" "));
  }
  if (a === s.Fragment && Object.keys(Bt(u)).length > 0) {
    if (!s.isValidElement(d) || Array.isArray(d) && d.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
    let m = Sr((l = d.props) == null ? void 0 : l.className, u.className), g = m ? { className: m } : {};
    return s.cloneElement(d, Object.assign({}, Pr(d.props, Bt(Ze(u, ["ref"]))), p, f, Rl(d.ref, f.ref), g));
  }
  return s.createElement(a, Object.assign({}, Ze(u, ["ref"]), a !== s.Fragment && f, a !== s.Fragment && p), d);
}
function Rl(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e)
      r != null && (typeof r == "function" ? r(t) : r.current = t);
  } };
}
function Pr(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let l in n)
      l.startsWith("on") && typeof n[l] == "function" ? (r[l] != null || (r[l] = []), r[l].push(n[l])) : t[l] = n[l];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](l, ...a) {
      let o = r[n];
      for (let c of o) {
        if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented)
          return;
        c(l, ...a);
      }
    } });
  return t;
}
function q(e) {
  var t;
  return Object.assign(s.forwardRef(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Bt(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function Ze(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Nr(e) {
  let t = e.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return n && Tl(r) ? !1 : n;
}
function Tl(e) {
  if (!e)
    return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Ml = "div";
var _e = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(_e || {});
function Il(e, t) {
  let { features: r = 1, ...n } = e, l = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return re({ ourProps: l, theirProps: n, slot: {}, defaultTag: Ml, name: "Hidden" });
}
let et = q(Il), mt = s.createContext(null);
mt.displayName = "OpenClosedContext";
var I = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(I || {});
function Re() {
  return s.useContext(mt);
}
function kr({ value: e, children: t }) {
  return _.createElement(mt.Provider, { value: e }, t);
}
var Y = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Y || {});
function jl(e, t, r) {
  let n = U(t);
  s.useEffect(() => {
    function l(a) {
      n.current(a);
    }
    return window.addEventListener(e, l, r), () => window.removeEventListener(e, l, r);
  }, [e, r]);
}
var Z = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Z || {});
function _r() {
  let e = s.useRef(0);
  return jl("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Lr() {
  let e = s.useRef(!1);
  return ee(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function vt(...e) {
  return s.useMemo(() => pt(...e), [...e]);
}
function Bl(e, t, r, n) {
  let l = U(r);
  s.useEffect(() => {
    e = e ?? window;
    function a(o) {
      l.current(o);
    }
    return e.addEventListener(t, a, n), () => e.removeEventListener(t, a, n);
  }, [e, t, n]);
}
var Al = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Al || {}), Hl = ((e) => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(Hl || {});
let Ul = { [0]: (e) => ({ ...e, popoverState: T(e.popoverState, { [0]: 1, [1]: 0 }) }), [1](e) {
  return e.popoverState === 1 ? e : { ...e, popoverState: 1 };
}, [2](e, t) {
  return e.button === t.button ? e : { ...e, button: t.button };
}, [3](e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, [4](e, t) {
  return e.panel === t.panel ? e : { ...e, panel: t.panel };
}, [5](e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
} }, gt = s.createContext(null);
gt.displayName = "PopoverContext";
function Te(e) {
  let t = s.useContext(gt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Te), r;
  }
  return t;
}
let xt = s.createContext(null);
xt.displayName = "PopoverAPIContext";
function bt(e) {
  let t = s.useContext(xt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, bt), r;
  }
  return t;
}
let Ct = s.createContext(null);
Ct.displayName = "PopoverGroupContext";
function $r() {
  return s.useContext(Ct);
}
let Me = s.createContext(null);
Me.displayName = "PopoverPanelContext";
function Dl() {
  return s.useContext(Me);
}
function Vl(e, t) {
  return T(t.type, Ul, e, t);
}
let Wl = "div";
function Gl(e, t) {
  var r;
  let n = s.useRef(null), l = te(t, Ol((C) => {
    n.current = C;
  })), a = s.useRef([]), o = s.useReducer(Vl, { popoverState: 1, buttons: a, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: s.createRef(), afterPanelSentinel: s.createRef() }), [{ popoverState: c, button: u, buttonId: f, panel: d, panelId: p, beforePanelSentinel: m, afterPanelSentinel: g }, h] = o, v = vt((r = n.current) != null ? r : u), b = s.useMemo(() => {
    if (!u || !d)
      return !1;
    for (let V of document.querySelectorAll("body > *"))
      if (Number(V == null ? void 0 : V.contains(u)) ^ Number(V == null ? void 0 : V.contains(d)))
        return !0;
    let C = Oe(), S = C.indexOf(u), H = (S + C.length - 1) % C.length, A = (S + 1) % C.length, ae = C[H], Ae = C[A];
    return !d.contains(ae) && !d.contains(Ae);
  }, [u, d]), w = U(f), P = U(p), F = s.useMemo(() => ({ buttonId: w, panelId: P, close: () => h({ type: 1 }) }), [w, P, h]), $ = $r(), M = $ == null ? void 0 : $.registerPopover, D = O(() => {
    var C;
    return (C = $ == null ? void 0 : $.isFocusWithinPopoverGroup()) != null ? C : (v == null ? void 0 : v.activeElement) && ((u == null ? void 0 : u.contains(v.activeElement)) || (d == null ? void 0 : d.contains(v.activeElement)));
  });
  s.useEffect(() => M == null ? void 0 : M(F), [M, F]), Bl(v == null ? void 0 : v.defaultView, "focus", (C) => {
    var S, H, A, ae;
    c === 0 && (D() || u && d && C.target !== window && ((H = (S = m.current) == null ? void 0 : S.contains) != null && H.call(S, C.target) || (ae = (A = g.current) == null ? void 0 : A.contains) != null && ae.call(A, C.target) || h({ type: 1 })));
  }, !0), $l([u, d], (C, S) => {
    h({ type: 1 }), wr(S, ht.Loose) || (C.preventDefault(), u == null || u.focus());
  }, c === 0);
  let N = O((C) => {
    h({ type: 1 });
    let S = (() => C ? C instanceof HTMLElement ? C : "current" in C && C.current instanceof HTMLElement ? C.current : u : u)();
    S == null || S.focus();
  }), R = s.useMemo(() => ({ close: N, isPortalled: b }), [N, b]), L = s.useMemo(() => ({ open: c === 0, close: N }), [c, N]), B = e, y = { ref: l };
  return _.createElement(Me.Provider, { value: null }, _.createElement(gt.Provider, { value: o }, _.createElement(xt.Provider, { value: R }, _.createElement(kr, { value: T(c, { [0]: I.Open, [1]: I.Closed }) }, re({ ourProps: y, theirProps: B, slot: L, defaultTag: Wl, name: "Popover" })))));
}
let Zl = "button";
function zl(e, t) {
  let r = se(), { id: n = `headlessui-popover-button-${r}`, ...l } = e, [a, o] = Te("Popover.Button"), { isPortalled: c } = bt("Popover.Button"), u = s.useRef(null), f = `headlessui-focus-sentinel-${se()}`, d = $r(), p = d == null ? void 0 : d.closeOthers, m = Dl() !== null;
  s.useEffect(() => {
    if (!m)
      return o({ type: 3, buttonId: n }), () => {
        o({ type: 3, buttonId: null });
      };
  }, [m, n, o]);
  let [g] = s.useState(() => Symbol()), h = te(u, t, m ? null : (y) => {
    if (y)
      a.buttons.current.push(g);
    else {
      let C = a.buttons.current.indexOf(g);
      C !== -1 && a.buttons.current.splice(C, 1);
    }
    a.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), y && o({ type: 2, button: y });
  }), v = te(u, t), b = vt(u), w = O((y) => {
    var C, S, H;
    if (m) {
      if (a.popoverState === 1)
        return;
      switch (y.key) {
        case Y.Space:
        case Y.Enter:
          y.preventDefault(), (S = (C = y.target).click) == null || S.call(C), o({ type: 1 }), (H = a.button) == null || H.focus();
          break;
      }
    } else
      switch (y.key) {
        case Y.Space:
        case Y.Enter:
          y.preventDefault(), y.stopPropagation(), a.popoverState === 1 && (p == null || p(a.buttonId)), o({ type: 0 });
          break;
        case Y.Escape:
          if (a.popoverState !== 0)
            return p == null ? void 0 : p(a.buttonId);
          if (!u.current || b != null && b.activeElement && !u.current.contains(b.activeElement))
            return;
          y.preventDefault(), y.stopPropagation(), o({ type: 1 });
          break;
      }
  }), P = O((y) => {
    m || y.key === Y.Space && y.preventDefault();
  }), F = O((y) => {
    var C, S;
    Nr(y.currentTarget) || e.disabled || (m ? (o({ type: 1 }), (C = a.button) == null || C.focus()) : (y.preventDefault(), y.stopPropagation(), a.popoverState === 1 && (p == null || p(a.buttonId)), o({ type: 0 }), (S = a.button) == null || S.focus()));
  }), $ = O((y) => {
    y.preventDefault(), y.stopPropagation();
  }), M = a.popoverState === 0, D = s.useMemo(() => ({ open: M }), [M]), N = Fl(e, u), R = m ? { ref: v, type: N, onKeyDown: w, onClick: F } : { ref: h, id: a.buttonId, type: N, "aria-expanded": e.disabled ? void 0 : a.popoverState === 0, "aria-controls": a.panel ? a.panelId : void 0, onKeyDown: w, onKeyUp: P, onClick: F, onMouseDown: $ }, L = _r(), B = O(() => {
    let y = a.panel;
    if (!y)
      return;
    function C() {
      T(L.current, { [Z.Forwards]: () => le(y, W.First), [Z.Backwards]: () => le(y, W.Last) }) === ke.Error && le(Oe().filter((S) => S.dataset.headlessuiFocusGuard !== "true"), T(L.current, { [Z.Forwards]: W.Next, [Z.Backwards]: W.Previous }), { relativeTo: a.button });
    }
    C();
  });
  return _.createElement(_.Fragment, null, re({ ourProps: R, theirProps: l, slot: D, defaultTag: Zl, name: "Popover.Button" }), M && !m && c && _.createElement(et, { id: f, features: _e.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: B }));
}
let ql = "div", Kl = ue.RenderStrategy | ue.Static;
function Yl(e, t) {
  let r = se(), { id: n = `headlessui-popover-overlay-${r}`, ...l } = e, [{ popoverState: a }, o] = Te("Popover.Overlay"), c = te(t), u = Re(), f = (() => u !== null ? (u & I.Open) === I.Open : a === 0)(), d = O((m) => {
    if (Nr(m.currentTarget))
      return m.preventDefault();
    o({ type: 1 });
  }), p = s.useMemo(() => ({ open: a === 0 }), [a]);
  return re({ ourProps: { ref: c, id: n, "aria-hidden": !0, onClick: d }, theirProps: l, slot: p, defaultTag: ql, features: Kl, visible: f, name: "Popover.Overlay" });
}
let Jl = "div", Xl = ue.RenderStrategy | ue.Static;
function Ql(e, t) {
  let r = se(), { id: n = `headlessui-popover-panel-${r}`, focus: l = !1, ...a } = e, [o, c] = Te("Popover.Panel"), { close: u, isPortalled: f } = bt("Popover.Panel"), d = `headlessui-focus-sentinel-before-${se()}`, p = `headlessui-focus-sentinel-after-${se()}`, m = s.useRef(null), g = te(m, t, (N) => {
    c({ type: 4, panel: N });
  }), h = vt(m);
  ee(() => (c({ type: 5, panelId: n }), () => {
    c({ type: 5, panelId: null });
  }), [n, c]);
  let v = Re(), b = (() => v !== null ? (v & I.Open) === I.Open : o.popoverState === 0)(), w = O((N) => {
    var R;
    switch (N.key) {
      case Y.Escape:
        if (o.popoverState !== 0 || !m.current || h != null && h.activeElement && !m.current.contains(h.activeElement))
          return;
        N.preventDefault(), N.stopPropagation(), c({ type: 1 }), (R = o.button) == null || R.focus();
        break;
    }
  });
  s.useEffect(() => {
    var N;
    e.static || o.popoverState === 1 && ((N = e.unmount) == null || N) && c({ type: 4, panel: null });
  }, [o.popoverState, e.unmount, e.static, c]), s.useEffect(() => {
    if (!l || o.popoverState !== 0 || !m.current)
      return;
    let N = h == null ? void 0 : h.activeElement;
    m.current.contains(N) || le(m.current, W.First);
  }, [l, m, o.popoverState]);
  let P = s.useMemo(() => ({ open: o.popoverState === 0, close: u }), [o, u]), F = { ref: g, id: n, onKeyDown: w, onBlur: l && o.popoverState === 0 ? (N) => {
    var R, L, B, y, C;
    let S = N.relatedTarget;
    S && m.current && ((R = m.current) != null && R.contains(S) || (c({ type: 1 }), ((B = (L = o.beforePanelSentinel.current) == null ? void 0 : L.contains) != null && B.call(L, S) || (C = (y = o.afterPanelSentinel.current) == null ? void 0 : y.contains) != null && C.call(y, S)) && S.focus({ preventScroll: !0 })));
  } : void 0, tabIndex: -1 }, $ = _r(), M = O(() => {
    let N = m.current;
    if (!N)
      return;
    function R() {
      T($.current, { [Z.Forwards]: () => {
        var L;
        le(N, W.First) === ke.Error && ((L = o.afterPanelSentinel.current) == null || L.focus());
      }, [Z.Backwards]: () => {
        var L;
        (L = o.button) == null || L.focus({ preventScroll: !0 });
      } });
    }
    R();
  }), D = O(() => {
    let N = m.current;
    if (!N)
      return;
    function R() {
      T($.current, { [Z.Forwards]: () => {
        var L;
        if (!o.button)
          return;
        let B = Oe(), y = B.indexOf(o.button), C = B.slice(0, y + 1), S = [...B.slice(y + 1), ...C];
        for (let H of S.slice())
          if (H.dataset.headlessuiFocusGuard === "true" || (L = o.panel) != null && L.contains(H)) {
            let A = S.indexOf(H);
            A !== -1 && S.splice(A, 1);
          }
        le(S, W.First, { sorted: !1 });
      }, [Z.Backwards]: () => {
        var L;
        le(N, W.Previous) === ke.Error && ((L = o.button) == null || L.focus());
      } });
    }
    R();
  });
  return _.createElement(Me.Provider, { value: n }, b && f && _.createElement(et, { id: d, ref: o.beforePanelSentinel, features: _e.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: M }), re({ ourProps: F, theirProps: a, slot: P, defaultTag: Jl, features: Xl, visible: b, name: "Popover.Panel" }), b && f && _.createElement(et, { id: p, ref: o.afterPanelSentinel, features: _e.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: D }));
}
let ea = "div";
function ta(e, t) {
  let r = s.useRef(null), n = te(r, t), [l, a] = s.useState([]), o = O((h) => {
    a((v) => {
      let b = v.indexOf(h);
      if (b !== -1) {
        let w = v.slice();
        return w.splice(b, 1), w;
      }
      return v;
    });
  }), c = O((h) => (a((v) => [...v, h]), () => o(h))), u = O(() => {
    var h;
    let v = pt(r);
    if (!v)
      return !1;
    let b = v.activeElement;
    return (h = r.current) != null && h.contains(b) ? !0 : l.some((w) => {
      var P, F;
      return ((P = v.getElementById(w.buttonId.current)) == null ? void 0 : P.contains(b)) || ((F = v.getElementById(w.panelId.current)) == null ? void 0 : F.contains(b));
    });
  }), f = O((h) => {
    for (let v of l)
      v.buttonId.current !== h && v.close();
  }), d = s.useMemo(() => ({ registerPopover: c, unregisterPopover: o, isFocusWithinPopoverGroup: u, closeOthers: f }), [c, o, u, f]), p = s.useMemo(() => ({}), []), m = e, g = { ref: n };
  return _.createElement(Ct.Provider, { value: d }, re({ ourProps: g, theirProps: m, slot: p, defaultTag: ea, name: "Popover.Group" }));
}
let ra = q(Gl), na = q(zl), la = q(Yl), aa = q(Ql), oa = q(ta), be = Object.assign(ra, { Button: na, Overlay: la, Panel: aa, Group: oa });
function ia(e = 0) {
  let [t, r] = s.useState(e), n = s.useCallback((c) => r((u) => u | c), [t]), l = s.useCallback((c) => !!(t & c), [t]), a = s.useCallback((c) => r((u) => u & ~c), [r]), o = s.useCallback((c) => r((u) => u ^ c), [r]);
  return { flags: t, addFlag: n, hasFlag: l, removeFlag: a, toggleFlag: o };
}
function sa(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function ze(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function qe(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function ua(e, t) {
  let r = ve();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: l } = getComputedStyle(e), [a, o] = [n, l].map((u) => {
    let [f = 0] = u.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, p) => p - d);
    return f;
  }), c = a + o;
  if (c !== 0) {
    r.group((f) => {
      f.setTimeout(() => {
        t(), f.dispose();
      }, c), f.addEventListener(e, "transitionrun", (d) => {
        d.target === d.currentTarget && f.dispose();
      });
    });
    let u = r.addEventListener(e, "transitionend", (f) => {
      f.target === f.currentTarget && (t(), u());
    });
  } else
    t();
  return r.add(() => t()), r.dispose;
}
function ca(e, t, r, n) {
  let l = r ? "enter" : "leave", a = ve(), o = n !== void 0 ? sa(n) : () => {
  };
  l === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let c = T(l, { enter: () => t.enter, leave: () => t.leave }), u = T(l, { enter: () => t.enterTo, leave: () => t.leaveTo }), f = T(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return qe(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), ze(e, ...c, ...f), a.nextFrame(() => {
    qe(e, ...f), ze(e, ...u), ua(e, () => (qe(e, ...c), ze(e, ...t.entered), o()));
  }), a.dispose;
}
function da({ container: e, direction: t, classes: r, onStart: n, onStop: l }) {
  let a = Lr(), o = yr(), c = U(t);
  ee(() => {
    let u = ve();
    o.add(u.dispose);
    let f = e.current;
    if (f && c.current !== "idle" && a.current)
      return u.dispose(), n.current(c.current), u.add(ca(f, r.current, c.current === "enter", () => {
        u.dispose(), l.current(c.current);
      })), u.dispose;
  }, [t]);
}
function ne(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ie = s.createContext(null);
Ie.displayName = "TransitionContext";
var fa = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(fa || {});
function pa() {
  let e = s.useContext(Ie);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function ha() {
  let e = s.useContext(je);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let je = s.createContext(null);
je.displayName = "NestingContext";
function Be(e) {
  return "children" in e ? Be(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Fr(e, t) {
  let r = U(e), n = s.useRef([]), l = Lr(), a = yr(), o = O((g, h = G.Hidden) => {
    let v = n.current.findIndex(({ el: b }) => b === g);
    v !== -1 && (T(h, { [G.Unmount]() {
      n.current.splice(v, 1);
    }, [G.Hidden]() {
      n.current[v].state = "hidden";
    } }), a.microTask(() => {
      var b;
      !Be(n) && l.current && ((b = r.current) == null || b.call(r));
    }));
  }), c = O((g) => {
    let h = n.current.find(({ el: v }) => v === g);
    return h ? h.state !== "visible" && (h.state = "visible") : n.current.push({ el: g, state: "visible" }), () => o(g, G.Unmount);
  }), u = s.useRef([]), f = s.useRef(Promise.resolve()), d = s.useRef({ enter: [], leave: [], idle: [] }), p = O((g, h, v) => {
    u.current.splice(0), t && (t.chains.current[h] = t.chains.current[h].filter(([b]) => b !== g)), t == null || t.chains.current[h].push([g, new Promise((b) => {
      u.current.push(b);
    })]), t == null || t.chains.current[h].push([g, new Promise((b) => {
      Promise.all(d.current[h].map(([w, P]) => P)).then(() => b());
    })]), h === "enter" ? f.current = f.current.then(() => t == null ? void 0 : t.wait.current).then(() => v(h)) : v(h);
  }), m = O((g, h, v) => {
    Promise.all(d.current[h].splice(0).map(([b, w]) => w)).then(() => {
      var b;
      (b = u.current.shift()) == null || b();
    }).then(() => v(h));
  });
  return s.useMemo(() => ({ children: n, register: c, unregister: o, onStart: p, onStop: m, wait: f, chains: d }), [c, o, n, p, m, d, f]);
}
function ma() {
}
let va = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function At(e) {
  var t;
  let r = {};
  for (let n of va)
    r[n] = (t = e[n]) != null ? t : ma;
  return r;
}
function ga(e) {
  let t = s.useRef(At(e));
  return s.useEffect(() => {
    t.current = At(e);
  }, [e]), t;
}
let xa = "div", Or = ue.RenderStrategy;
function ba(e, t) {
  let { beforeEnter: r, afterEnter: n, beforeLeave: l, afterLeave: a, enter: o, enterFrom: c, enterTo: u, entered: f, leave: d, leaveFrom: p, leaveTo: m, ...g } = e, h = s.useRef(null), v = te(h, t), b = g.unmount ? G.Unmount : G.Hidden, { show: w, appear: P, initial: F } = pa(), [$, M] = s.useState(w ? "visible" : "hidden"), D = ha(), { register: N, unregister: R } = D, L = s.useRef(null);
  s.useEffect(() => N(h), [N, h]), s.useEffect(() => {
    if (b === G.Hidden && h.current) {
      if (w && $ !== "visible") {
        M("visible");
        return;
      }
      return T($, { hidden: () => R(h), visible: () => N(h) });
    }
  }, [$, h, N, R, w, b]);
  let B = U({ enter: ne(o), enterFrom: ne(c), enterTo: ne(u), entered: ne(f), leave: ne(d), leaveFrom: ne(p), leaveTo: ne(m) }), y = ga({ beforeEnter: r, afterEnter: n, beforeLeave: l, afterLeave: a }), C = ft();
  s.useEffect(() => {
    if (C && $ === "visible" && h.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [h, $, C]);
  let S = F && !P, H = (() => !C || S || L.current === w ? "idle" : w ? "enter" : "leave")(), A = ia(0), ae = O((K) => T(K, { enter: () => {
    A.addFlag(I.Opening), y.current.beforeEnter();
  }, leave: () => {
    A.addFlag(I.Closing), y.current.beforeLeave();
  }, idle: () => {
  } })), Ae = O((K) => T(K, { enter: () => {
    A.removeFlag(I.Opening), y.current.afterEnter();
  }, leave: () => {
    A.removeFlag(I.Closing), y.current.afterLeave();
  }, idle: () => {
  } })), V = Fr(() => {
    M("hidden"), R(h);
  }, D);
  da({ container: h, classes: B, direction: H, onStart: U((K) => {
    V.onStart(h, K, ae);
  }), onStop: U((K) => {
    V.onStop(h, K, Ae), K === "leave" && !Be(V) && (M("hidden"), R(h));
  }) }), s.useEffect(() => {
    S && (b === G.Hidden ? L.current = null : L.current = w);
  }, [w, S, $]);
  let He = g, Tr = { ref: v };
  return P && w && Q.isServer && (He = { ...He, className: Sr(g.className, ...B.current.enter, ...B.current.enterFrom) }), _.createElement(je.Provider, { value: V }, _.createElement(kr, { value: T($, { visible: I.Open, hidden: I.Closed }) | A.flags }, re({ ourProps: Tr, theirProps: He, defaultTag: xa, features: Or, visible: $ === "visible", name: "Transition.Child" })));
}
function Ca(e, t) {
  let { show: r, appear: n = !1, unmount: l, ...a } = e, o = s.useRef(null), c = te(o, t);
  ft();
  let u = Re();
  if (r === void 0 && u !== null && (r = (u & I.Open) === I.Open), ![!0, !1].includes(r))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [f, d] = s.useState(r ? "visible" : "hidden"), p = Fr(() => {
    d("hidden");
  }), [m, g] = s.useState(!0), h = s.useRef([r]);
  ee(() => {
    m !== !1 && h.current[h.current.length - 1] !== r && (h.current.push(r), g(!1));
  }, [h, r]);
  let v = s.useMemo(() => ({ show: r, appear: n, initial: m }), [r, n, m]);
  s.useEffect(() => {
    if (r)
      d("visible");
    else if (!Be(p))
      d("hidden");
    else {
      let w = o.current;
      if (!w)
        return;
      let P = w.getBoundingClientRect();
      P.x === 0 && P.y === 0 && P.width === 0 && P.height === 0 && d("hidden");
    }
  }, [r, p]);
  let b = { unmount: l };
  return _.createElement(je.Provider, { value: p }, _.createElement(Ie.Provider, { value: v }, re({ ourProps: { ...b, as: s.Fragment, children: _.createElement(Rr, { ref: c, ...b, ...a }) }, theirProps: {}, defaultTag: s.Fragment, features: Or, visible: f === "visible", name: "Transition" })));
}
function ya(e, t) {
  let r = s.useContext(Ie) !== null, n = Re() !== null;
  return _.createElement(_.Fragment, null, !r && n ? _.createElement(tt, { ref: t, ...e }) : _.createElement(Rr, { ref: t, ...e }));
}
let tt = q(Ca), Rr = q(ba), wa = q(ya), Ke = Object.assign(tt, { Child: wa, Root: tt });
function fe({
  to: e,
  children: t,
  target: r,
  className: n,
  onClick: l,
  ...a
}) {
  return /* @__PURE__ */ i(
    z,
    {
      to: e,
      onClick: l,
      target: r,
      className: k(
        "whitespace-nowrap inline-block text-sm  text-slate-200 hover:text-toxic-500 transition",
        n
      ),
      ...a,
      children: t
    }
  );
}
function oe({
  to: e,
  children: t,
  className: r,
  onClick: n,
  ...l
}) {
  return /* @__PURE__ */ i(
    z,
    {
      to: e,
      ...l,
      onClick: n,
      className: k(
        "text-sm p-2 block w-full whitespace-nowrap text-slate-50 hover:text-toxic-500 transition text-center text-s bg-slate-900 rounded-lg",
        { className: r }
      ),
      children: t
    }
  );
}
function Ea({ open: e }) {
  return /* @__PURE__ */ x(
    "svg",
    {
      "aria-hidden": "true",
      className: "h-3.5 w-3.5 overflow-visible stroke-slate-300",
      fill: "none",
      strokeWidth: 2,
      strokeLinecap: "round",
      children: [
        /* @__PURE__ */ i(
          "path",
          {
            d: "M0 1H14M0 7H14M0 13H14",
            className: k(
              "origin-center transition",
              e && "scale-90 opacity-0"
            )
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M2 2L12 12M12 2L2 12",
            className: k(
              "origin-center transition",
              !e && "scale-90 opacity-0"
            )
          }
        )
      ]
    }
  );
}
function Sa() {
  return /* @__PURE__ */ x(be, { children: [
    /* @__PURE__ */ i(
      be.Button,
      {
        className: "bg-slate-70  relative z-10 flex h-8 w-8 items-center justify-center rounded border-none bg-opacity-50 focus:border-none [&:not(:focus-visible)]:focus:outline-none",
        "aria-label": "Toggle Navigation",
        children: ({ open: e }) => /* @__PURE__ */ i(Ea, { open: e })
      }
    ),
    /* @__PURE__ */ x(Ke.Root, { children: [
      /* @__PURE__ */ i(
        Ke.Child,
        {
          as: s.Fragment,
          enter: "duration-150 ease-out",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "duration-150 ease-in",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ i(be.Overlay, { className: "absolute inset-x-6 top-full mt-4 flex origin-top flex-col gap-2 rounded bg-slate-600 p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5" })
        }
      ),
      /* @__PURE__ */ i(
        Ke.Child,
        {
          as: s.Fragment,
          enter: "duration-150 ease-out",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "duration-100 ease-in",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ x(
            be.Panel,
            {
              as: "div",
              className: "absolute inset-x-6 top-full mt-4 flex origin-top flex-col gap-4 rounded bg-slate-800 p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-700",
              children: [
                /* @__PURE__ */ i(
                  mr,
                  {
                    className: "whitespace-nowrap text-base",
                    to: "https://app.trigger.dev",
                    children: "Sign up"
                  }
                ),
                /* @__PURE__ */ i(
                  oe,
                  {
                    className: "whitespace-nowrap text-base",
                    to: "https://docs.trigger.dev",
                    target: "_blank",
                    children: "Docs"
                  }
                ),
                /* @__PURE__ */ i(oe, { to: "/blog", children: "Blog" }),
                /* @__PURE__ */ i(
                  oe,
                  {
                    className: "whitespace-nowrap text-base",
                    to: "https://app.trigger.dev/templates",
                    children: "Browse templates"
                  }
                ),
                /* @__PURE__ */ i(oe, { to: "/pricing", title: "Pricing", children: "Pricing" }),
                /* @__PURE__ */ i(
                  oe,
                  {
                    to: "https://github.com/triggerdotdev/trigger.dev",
                    target: "_blank",
                    children: "GitHub"
                  }
                ),
                /* @__PURE__ */ i(oe, { to: "https://app.trigger.dev", children: "Login" })
              ]
            }
          )
        }
      )
    ] })
  ] });
}
function Aa() {
  return /* @__PURE__ */ x(qt, { children: [
    /* @__PURE__ */ i("div", { className: "" }),
    /* @__PURE__ */ i("header", { className: "fixed top-0 left-0 z-50 h-20 w-full border-b-[0.1px] border-slate-1000 bg-slate-900/80 backdrop-blur-md", children: /* @__PURE__ */ x("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-10 lg:px-16", children: [
      /* @__PURE__ */ x("div", { className: "flex items-center gap-x-4 lg:gap-x-12", children: [
        /* @__PURE__ */ i("div", { className: "flex w-[140px] items-center lg:w-[160px]", children: /* @__PURE__ */ i(z, { to: "/", children: /* @__PURE__ */ i("div", { className: "cursor-pointer", children: /* @__PURE__ */ i(br, { className: "w-full" }) }) }) }),
        /* @__PURE__ */ x("div", { className: "hidden gap-x-4 font-semibold drop-shadow-2xl md:flex md:gap-x-6 lg:gap-x-12", children: [
          /* @__PURE__ */ i(
            fe,
            {
              to: "https://docs.trigger.dev/",
              title: "Docs",
              "aria-label": "Docs",
              target: "_blank",
              children: "Docs"
            }
          ),
          /* @__PURE__ */ i(
            fe,
            {
              to: "https://app.trigger.dev/templates",
              title: "Templates",
              "aria-label": "Templates",
              children: "Templates"
            }
          ),
          /* @__PURE__ */ i(fe, { to: "/blog", title: "Templates", "aria-label": "Templates", children: "Blog" }),
          /* @__PURE__ */ i(fe, { to: "/pricing", title: "Pricing", "aria-label": "Pricing", children: "Pricing" })
        ] })
      ] }),
      /* @__PURE__ */ x("div", { className: "flex flex-row items-center justify-center gap-x-4 lg:gap-x-6", children: [
        /* @__PURE__ */ i(
          "a",
          {
            href: "https://discord.gg/nkqV9xBYWy",
            "aria-label": "Discord",
            target: "_blank",
            title: "Discord",
            className: " hidden items-center text-right text-xs text-slate-300 transition hover:text-toxic-500 md:flex",
            rel: "noreferrer",
            children: /* @__PURE__ */ i(xr, {})
          }
        ),
        /* @__PURE__ */ i("div", { className: "hidden font-semibold drop-shadow-2xl md:flex", children: /* @__PURE__ */ i(
          fe,
          {
            to: "https://app.trigger.dev",
            title: "Login",
            "aria-label": "Login",
            children: "Login"
          }
        ) }),
        /* @__PURE__ */ x(
          mr,
          {
            className: "whitespace-nowrap",
            to: "https://app.trigger.dev",
            children: [
              /* @__PURE__ */ i("div", { className: "hidden sm:block", children: "Sign up" }),
              /* @__PURE__ */ i("div", { className: "block sm:hidden", children: "Sign up" })
            ]
          }
        ),
        /* @__PURE__ */ i("div", { className: "hidden sm:block", children: /* @__PURE__ */ i(yl, { count: 3300 }) }),
        /* @__PURE__ */ i("div", { className: "-mr-1 md:hidden", children: /* @__PURE__ */ i(Sa, {}) })
      ] })
    ] }) })
  ] });
}
function Ha({ children: e }) {
  return /* @__PURE__ */ i("main", { className: "prose prose-invert flex-1 lg:prose-xl prose-h2:mt-[-7rem] prose-h2:pt-[7rem] prose-h3:mt-[-6.7rem] prose-h3:pt-[6.7rem] prose-h4:mt-[-6.5rem] prose-h4:pt-[6.5rem]", children: e });
}
const Pa = "p-[1px] rounded-xl ", Na = "flex flex-col p-6 rounded-xl gap-y-4 w-full h-full";
function Ua({ children: e, className: t, variant: r }) {
  let n, l;
  switch (r) {
    case "dark":
      n = "bg-border-gradient-dark", l = "bg-gradient-panel-bg-dark";
      break;
    case "dark-shiny":
      n = "bg-border-gradient-shiny", l = "bg-gradient-panel-bg-dark";
      break;
  }
  return /* @__PURE__ */ i("div", { className: k(Pa, t, n), children: /* @__PURE__ */ i("div", { className: k(Na, l), children: e }) });
}
function Da() {
  return /* @__PURE__ */ i("div", { className: "absolute top-0 left-0 w-full overflow-hidden", children: /* @__PURE__ */ i(
    "svg",
    {
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1200 120",
      preserveAspectRatio: "none",
      className: "relative block w-[calc(100%+1.3px)] h-20",
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M1200 0L0 0 892.25 114.72 1200 0z",
          fill: "rgb(249 250 251)"
        }
      )
    }
  ) });
}
function Va() {
  return /* @__PURE__ */ i("div", { className: "absolute bottom-0 left-0 w-full overflow-hidden", children: /* @__PURE__ */ i(
    "svg",
    {
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1200 120",
      preserveAspectRatio: "none",
      className: "relative block w-[calc(100%+1.3px)] h-20 rotate-180",
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M1200 0L0 0 892.25 114.72 1200 0z",
          fill: "rgb(249 250 251)"
        }
      )
    }
  ) });
}
function Wa() {
  return /* @__PURE__ */ i("div", { className: "absolute top-0 left-0 w-full overflow-hidden", children: /* @__PURE__ */ i(
    "svg",
    {
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1200 120",
      preserveAspectRatio: "none",
      className: "relative block w-[calc(100%+1.3px)] h-[93px]",
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M1200 0L0 0 892.25 114.72 1200 0z",
          fill: "rgb(249 250 251)"
        }
      )
    }
  ) });
}
function Ga() {
  return /* @__PURE__ */ i("div", { className: "absolute left-0 w-full overflow-hidden", children: /* @__PURE__ */ i(
    "svg",
    {
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1200 120",
      preserveAspectRatio: "none",
      className: "relative block w-[calc(119%+1.3px)] h-[77px] rotate-180",
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z",
          fill: "rgb(249 250 251)"
        }
      )
    }
  ) });
}
function Za() {
  return /* @__PURE__ */ i("div", { className: "absolute bottom-0 left-0 w-full overflow-hidden", children: /* @__PURE__ */ i(
    "svg",
    {
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1200 120",
      preserveAspectRatio: "none",
      className: "relative block w-[calc(119%+1.3px)] h-[77px] rotate-180",
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z",
          fill: "rgb(249 250 251)"
        }
      )
    }
  ) });
}
function za() {
  return /* @__PURE__ */ i("div", { className: "absolute -top-0.5 left-0 w-full overflow-hidden z-10", children: /* @__PURE__ */ i(
    "svg",
    {
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1200 120",
      preserveAspectRatio: "none",
      className: "relative block w-[calc(160%+1.3px)] h-[40px] md:h-[118px] rotate-180",
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",
          fill: "#030713"
        }
      )
    }
  ) });
}
function qa() {
  return /* @__PURE__ */ x(qt, { children: [
    /* @__PURE__ */ i("div", { className: "absolute top-0 left-0 bg-midnight-1000 z-20 h-52 w-full" }),
    /* @__PURE__ */ i("div", { className: "absolute top-52 left-0 w-full overflow-hidden z-10", children: /* @__PURE__ */ i(
      "svg",
      {
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1200 120",
        preserveAspectRatio: "none",
        className: "relative block w-[calc(160%+1.3px)] h-[40px] md:h-[118px] rotate-180",
        children: /* @__PURE__ */ i(
          "path",
          {
            d: "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",
            fill: "#030713"
          }
        )
      }
    ) })
  ] });
}
function Ka() {
  return /* @__PURE__ */ i("div", { className: "absolute bottom-0 left-0 w-full overflow-hidden", children: /* @__PURE__ */ i(
    "svg",
    {
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1200 120",
      preserveAspectRatio: "none",
      className: "relative block w-[calc(160%+1.3px)] h-[40px] md:h-[147px]",
      children: /* @__PURE__ */ i(
        "path",
        {
          d: "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",
          fill: "#030713"
        }
      )
    }
  ) });
}
const ka = "font-sans", _a = "text-slate-300";
function Ya({
  children: e,
  className: t = _a,
  theme: r,
  size: n = "regular",
  ...l
}) {
  let a = "text-base";
  switch (n) {
    case "large":
      a = "text-lg";
      break;
    case "small":
      a = "text-sm";
      break;
    case "extra-small":
      a = "text-xs";
      break;
  }
  return /* @__PURE__ */ i(
    "p",
    {
      className: k(
        ka,
        a,
        r === "light" ? "text-slate-200" : "text-slate-400",
        t
      ),
      ...l,
      children: e
    }
  );
}
function Ja({
  children: e,
  className: t,
  theme: r,
  ...n
}) {
  return /* @__PURE__ */ i(
    "p",
    {
      className: k(
        "font-handwriting py-2 text-sm lg:text-base",
        r === "light" ? "text-slate-700" : "text-slate-200",
        t
      ),
      ...n,
      children: e
    }
  );
}
function Xa({
  children: e,
  className: t,
  theme: r,
  ...n
}) {
  return /* @__PURE__ */ i(
    "h1",
    {
      className: k(
        "font-display md:leading-12 py-4 text-left text-3xl font-bold tracking-tight md:text-6xl",
        r === "light" ? "text-slate-700" : "text-slate-300",
        t
      ),
      ...n,
      children: e
    }
  );
}
function Qa({
  children: e,
  className: t,
  theme: r,
  ...n
}) {
  return /* @__PURE__ */ i(
    "h2",
    {
      className: k(
        "font-display text-3xl font-bold tracking-tight md:text-5xl lg:px-0",
        r === "light" ? "text-slate-700" : "text-slate-300",
        t
      ),
      ...n,
      children: e
    }
  );
}
function eo({
  children: e,
  className: t,
  theme: r,
  ...n
}) {
  return /* @__PURE__ */ i(
    "h2",
    {
      className: k(
        "font-display text-left text-xl font-bold tracking-tight md:text-2xl",
        r === "light" ? "text-slate-700" : "text-slate-300",
        t
      ),
      ...n,
      children: e
    }
  );
}
function to({
  children: e,
  className: t,
  theme: r,
  ...n
}) {
  return /* @__PURE__ */ i(
    "h2",
    {
      className: k(
        "font-display text-left text-lg font-bold tracking-tight md:text-xl",
        r === "light" ? "text-slate-700" : "text-slate-300",
        t
      ),
      ...n,
      children: e
    }
  );
}
function ro({ children: e, className: t, ...r }) {
  return /* @__PURE__ */ i(
    "span",
    {
      style: {
        background: "linear-gradient(to right, #E7FF52, #41FF54)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      },
      children: e
    }
  );
}
function no({ children: e, className: t, ...r }) {
  return /* @__PURE__ */ i(
    "span",
    {
      style: {
        background: "linear-gradient(to right, #2563EB, #A855F7)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      },
      children: e
    }
  );
}
export {
  Cl as Container,
  gr as CopyText,
  Ta as CopyTextButton,
  Ma as CopyTextPanel,
  Ia as Footer,
  ja as GithubStarsButtonLargeStatic,
  yl as GithubStarsButtonStatic,
  Ja as Handwriting,
  Aa as Header,
  Xa as Header1,
  Qa as Header2,
  eo as Header3,
  to as Header4,
  Ha as MarkdownMain,
  Ea as MobileNavIcon,
  oe as MobileNavLink,
  fe as NavLink,
  Za as OffsetCurveBottom,
  Ga as OffsetCurveTop,
  Va as OffsetTriangleBottom,
  Wa as OffsetTriangleLeftTop,
  Da as OffsetTriangleTop,
  Ua as Panel,
  Ya as Paragraph,
  La as PrimaryButton,
  mr as PrimaryLink,
  no as PurpoText,
  $a as SecondaryButton,
  Fa as SecondaryButtonOutline,
  Oa as SecondaryLink,
  Ra as SecondaryLinkOutline,
  ro as ToxicText,
  br as TriggerdotdevLogo,
  Ka as WaveBottom,
  za as WaveTop,
  qa as WaveTopWithPadding
};
