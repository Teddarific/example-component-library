function wo(e, r) {
  for (var n = 0; n < r.length; n++) {
    const a = r[n];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const s in a)
        if (s !== "default" && !(s in e)) {
          const u = Object.getOwnPropertyDescriptor(a, s);
          u && Object.defineProperty(e, s, u.get ? u : {
            enumerable: !0,
            get: () => a[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ro(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Re = {}, ko = {
  get exports() {
    return Re;
  },
  set exports(e) {
    Re = e;
  }
}, xt = {}, fn = {}, To = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
}, J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function Co() {
  if (fa)
    return J;
  fa = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), h = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), R = Symbol.iterator;
  function x(p) {
    return p === null || typeof p != "object" ? null : (p = R && p[R] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, N = Object.assign, C = {};
  function $(p, k, W) {
    this.props = p, this.context = k, this.refs = C, this.updater = W || P;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(p, k) {
    if (typeof p != "object" && typeof p != "function" && p != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, k, "setState");
  }, $.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function M() {
  }
  M.prototype = $.prototype;
  function O(p, k, W) {
    this.props = p, this.context = k, this.refs = C, this.updater = W || P;
  }
  var L = O.prototype = new M();
  L.constructor = O, N(L, $.prototype), L.isPureReactComponent = !0;
  var Y = Array.isArray, S = Object.prototype.hasOwnProperty, H = { current: null }, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Fe(p, k, W) {
    var F, G = {}, ce = null, ne = null;
    if (k != null)
      for (F in k.ref !== void 0 && (ne = k.ref), k.key !== void 0 && (ce = "" + k.key), k)
        S.call(k, F) && !U.hasOwnProperty(F) && (G[F] = k[F]);
    var ae = arguments.length - 2;
    if (ae === 1)
      G.children = W;
    else if (1 < ae) {
      for (var K = Array(ae), ge = 0; ge < ae; ge++)
        K[ge] = arguments[ge + 2];
      G.children = K;
    }
    if (p && p.defaultProps)
      for (F in ae = p.defaultProps, ae)
        G[F] === void 0 && (G[F] = ae[F]);
    return { $$typeof: e, type: p, key: ce, ref: ne, props: G, _owner: H.current };
  }
  function $e(p, k) {
    return { $$typeof: e, type: p.type, key: k, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function je(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }
  function mr(p) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(W) {
      return k[W];
    });
  }
  var er = /\/+/g;
  function Te(p, k) {
    return typeof p == "object" && p !== null && p.key != null ? mr("" + p.key) : k.toString(36);
  }
  function xe(p, k, W, F, G) {
    var ce = typeof p;
    (ce === "undefined" || ce === "boolean") && (p = null);
    var ne = !1;
    if (p === null)
      ne = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          ne = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case e:
            case r:
              ne = !0;
          }
      }
    if (ne)
      return ne = p, G = G(ne), p = F === "" ? "." + Te(ne, 0) : F, Y(G) ? (W = "", p != null && (W = p.replace(er, "$&/") + "/"), xe(G, k, W, "", function(ge) {
        return ge;
      })) : G != null && (je(G) && (G = $e(G, W + (!G.key || ne && ne.key === G.key ? "" : ("" + G.key).replace(er, "$&/") + "/") + p)), k.push(G)), 1;
    if (ne = 0, F = F === "" ? "." : F + ":", Y(p))
      for (var ae = 0; ae < p.length; ae++) {
        ce = p[ae];
        var K = F + Te(ce, ae);
        ne += xe(ce, k, W, K, G);
      }
    else if (K = x(p), typeof K == "function")
      for (p = K.call(p), ae = 0; !(ce = p.next()).done; )
        ce = ce.value, K = F + Te(ce, ae++), ne += xe(ce, k, W, K, G);
    else if (ce === "object")
      throw k = String(p), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
    return ne;
  }
  function Ee(p, k, W) {
    if (p == null)
      return p;
    var F = [], G = 0;
    return xe(p, F, "", "", function(ce) {
      return k.call(W, ce, G++);
    }), F;
  }
  function Be(p) {
    if (p._status === -1) {
      var k = p._result;
      k = k(), k.then(function(W) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = W);
      }, function(W) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = W);
      }), p._status === -1 && (p._status = 0, p._result = k);
    }
    if (p._status === 1)
      return p._result.default;
    throw p._result;
  }
  var B = { current: null }, Le = { transition: null }, rr = { ReactCurrentDispatcher: B, ReactCurrentBatchConfig: Le, ReactCurrentOwner: H };
  return J.Children = { map: Ee, forEach: function(p, k, W) {
    Ee(p, function() {
      k.apply(this, arguments);
    }, W);
  }, count: function(p) {
    var k = 0;
    return Ee(p, function() {
      k++;
    }), k;
  }, toArray: function(p) {
    return Ee(p, function(k) {
      return k;
    }) || [];
  }, only: function(p) {
    if (!je(p))
      throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, J.Component = $, J.Fragment = n, J.Profiler = s, J.PureComponent = O, J.StrictMode = a, J.Suspense = b, J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rr, J.cloneElement = function(p, k, W) {
    if (p == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var F = N({}, p.props), G = p.key, ce = p.ref, ne = p._owner;
    if (k != null) {
      if (k.ref !== void 0 && (ce = k.ref, ne = H.current), k.key !== void 0 && (G = "" + k.key), p.type && p.type.defaultProps)
        var ae = p.type.defaultProps;
      for (K in k)
        S.call(k, K) && !U.hasOwnProperty(K) && (F[K] = k[K] === void 0 && ae !== void 0 ? ae[K] : k[K]);
    }
    var K = arguments.length - 2;
    if (K === 1)
      F.children = W;
    else if (1 < K) {
      ae = Array(K);
      for (var ge = 0; ge < K; ge++)
        ae[ge] = arguments[ge + 2];
      F.children = ae;
    }
    return { $$typeof: e, type: p.type, key: G, ref: ce, props: F, _owner: ne };
  }, J.createContext = function(p) {
    return p = { $$typeof: h, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: u, _context: p }, p.Consumer = p;
  }, J.createElement = Fe, J.createFactory = function(p) {
    var k = Fe.bind(null, p);
    return k.type = p, k;
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(p) {
    return { $$typeof: v, render: p };
  }, J.isValidElement = je, J.lazy = function(p) {
    return { $$typeof: y, _payload: { _status: -1, _result: p }, _init: Be };
  }, J.memo = function(p, k) {
    return { $$typeof: _, type: p, compare: k === void 0 ? null : k };
  }, J.startTransition = function(p) {
    var k = Le.transition;
    Le.transition = {};
    try {
      p();
    } finally {
      Le.transition = k;
    }
  }, J.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, J.useCallback = function(p, k) {
    return B.current.useCallback(p, k);
  }, J.useContext = function(p) {
    return B.current.useContext(p);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(p) {
    return B.current.useDeferredValue(p);
  }, J.useEffect = function(p, k) {
    return B.current.useEffect(p, k);
  }, J.useId = function() {
    return B.current.useId();
  }, J.useImperativeHandle = function(p, k, W) {
    return B.current.useImperativeHandle(p, k, W);
  }, J.useInsertionEffect = function(p, k) {
    return B.current.useInsertionEffect(p, k);
  }, J.useLayoutEffect = function(p, k) {
    return B.current.useLayoutEffect(p, k);
  }, J.useMemo = function(p, k) {
    return B.current.useMemo(p, k);
  }, J.useReducer = function(p, k, W) {
    return B.current.useReducer(p, k, W);
  }, J.useRef = function(p) {
    return B.current.useRef(p);
  }, J.useState = function(p) {
    return B.current.useState(p);
  }, J.useSyncExternalStore = function(p, k, W) {
    return B.current.useSyncExternalStore(p, k, W);
  }, J.useTransition = function() {
    return B.current.useTransition();
  }, J.version = "18.2.0", J;
}
var It = {}, xo = {
  get exports() {
    return It;
  },
  set exports(e) {
    It = e;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var da;
function Oo() {
  return da || (da = 1, function(e, r) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.2.0", a = Symbol.for("react.element"), s = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), _ = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), $ = Symbol.iterator, M = "@@iterator";
      function O(t) {
        if (t === null || typeof t != "object")
          return null;
        var i = $ && t[$] || t[M];
        return typeof i == "function" ? i : null;
      }
      var L = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Y = {
        transition: null
      }, S = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, H = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, U = {}, Fe = null;
      function $e(t) {
        Fe = t;
      }
      U.setExtraStackFrame = function(t) {
        Fe = t;
      }, U.getCurrentStack = null, U.getStackAddendum = function() {
        var t = "";
        Fe && (t += Fe);
        var i = U.getCurrentStack;
        return i && (t += i() || ""), t;
      };
      var je = !1, mr = !1, er = !1, Te = !1, xe = !1, Ee = {
        ReactCurrentDispatcher: L,
        ReactCurrentBatchConfig: Y,
        ReactCurrentOwner: H
      };
      Ee.ReactDebugCurrentFrame = U, Ee.ReactCurrentActQueue = S;
      function Be(t) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), g = 1; g < i; g++)
            d[g - 1] = arguments[g];
          Le("warn", t, d);
        }
      }
      function B(t) {
        {
          for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), g = 1; g < i; g++)
            d[g - 1] = arguments[g];
          Le("error", t, d);
        }
      }
      function Le(t, i, d) {
        {
          var g = Ee.ReactDebugCurrentFrame, w = g.getStackAddendum();
          w !== "" && (i += "%s", d = d.concat([w]));
          var z = d.map(function(I) {
            return String(I);
          });
          z.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, z);
        }
      }
      var rr = {};
      function p(t, i) {
        {
          var d = t.constructor, g = d && (d.displayName || d.name) || "ReactClass", w = g + "." + i;
          if (rr[w])
            return;
          B("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, g), rr[w] = !0;
        }
      }
      var k = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(t) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(t, i, d) {
          p(t, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(t, i, d, g) {
          p(t, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(t, i, d, g) {
          p(t, "setState");
        }
      }, W = Object.assign, F = {};
      Object.freeze(F);
      function G(t, i, d) {
        this.props = t, this.context = i, this.refs = F, this.updater = d || k;
      }
      G.prototype.isReactComponent = {}, G.prototype.setState = function(t, i) {
        if (typeof t != "object" && typeof t != "function" && t != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, t, i, "setState");
      }, G.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      };
      {
        var ce = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ne = function(t, i) {
          Object.defineProperty(G.prototype, t, {
            get: function() {
              Be("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
            }
          });
        };
        for (var ae in ce)
          ce.hasOwnProperty(ae) && ne(ae, ce[ae]);
      }
      function K() {
      }
      K.prototype = G.prototype;
      function ge(t, i, d) {
        this.props = t, this.context = i, this.refs = F, this.updater = d || k;
      }
      var Ve = ge.prototype = new K();
      Ve.constructor = ge, W(Ve, G.prototype), Ve.isPureReactComponent = !0;
      function Rr() {
        var t = {
          current: null
        };
        return Object.seal(t), t;
      }
      var D = Array.isArray;
      function He(t) {
        return D(t);
      }
      function ir(t) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
          return d;
        }
      }
      function tr(t) {
        try {
          return vr(t), !1;
        } catch {
          return !0;
        }
      }
      function vr(t) {
        return "" + t;
      }
      function gr(t) {
        if (tr(t))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(t)), vr(t);
      }
      function Yr(t, i, d) {
        var g = t.displayName;
        if (g)
          return g;
        var w = i.displayName || i.name || "";
        return w !== "" ? d + "(" + w + ")" : d;
      }
      function yr(t) {
        return t.displayName || "Context";
      }
      function ze(t) {
        if (t == null)
          return null;
        if (typeof t.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
        switch (t) {
          case u:
            return "Fragment";
          case s:
            return "Portal";
          case v:
            return "Profiler";
          case h:
            return "StrictMode";
          case R:
            return "Suspense";
          case x:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case _:
              var i = t;
              return yr(i) + ".Consumer";
            case b:
              var d = t;
              return yr(d._context) + ".Provider";
            case y:
              return Yr(t, t.render, "ForwardRef");
            case P:
              var g = t.displayName || null;
              return g !== null ? g : ze(t.type) || "Memo";
            case N: {
              var w = t, z = w._payload, I = w._init;
              try {
                return ze(I(z));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var nr = Object.prototype.hasOwnProperty, ar = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ye, Ir, br;
      br = {};
      function $r(t) {
        if (nr.call(t, "ref")) {
          var i = Object.getOwnPropertyDescriptor(t, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return t.ref !== void 0;
      }
      function sr(t) {
        if (nr.call(t, "key")) {
          var i = Object.getOwnPropertyDescriptor(t, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return t.key !== void 0;
      }
      function kr(t, i) {
        var d = function() {
          Ye || (Ye = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: d,
          configurable: !0
        });
      }
      function jr(t, i) {
        var d = function() {
          Ir || (Ir = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: d,
          configurable: !0
        });
      }
      function Nr(t) {
        if (typeof t.ref == "string" && H.current && t.__self && H.current.stateNode !== t.__self) {
          var i = ze(H.current.type);
          br[i] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, t.ref), br[i] = !0);
        }
      }
      var cr = function(t, i, d, g, w, z, I) {
        var V = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: a,
          // Built-in properties that belong on the element
          type: t,
          key: i,
          ref: d,
          props: I,
          // Record the component responsible for creating this element.
          _owner: z
        };
        return V._store = {}, Object.defineProperty(V._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(V, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: g
        }), Object.defineProperty(V, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: w
        }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
      };
      function Ur(t, i, d) {
        var g, w = {}, z = null, I = null, V = null, te = null;
        if (i != null) {
          $r(i) && (I = i.ref, Nr(i)), sr(i) && (gr(i.key), z = "" + i.key), V = i.__self === void 0 ? null : i.__self, te = i.__source === void 0 ? null : i.__source;
          for (g in i)
            nr.call(i, g) && !ar.hasOwnProperty(g) && (w[g] = i[g]);
        }
        var pe = arguments.length - 2;
        if (pe === 1)
          w.children = d;
        else if (pe > 1) {
          for (var be = Array(pe), _e = 0; _e < pe; _e++)
            be[_e] = arguments[_e + 2];
          Object.freeze && Object.freeze(be), w.children = be;
        }
        if (t && t.defaultProps) {
          var Se = t.defaultProps;
          for (g in Se)
            w[g] === void 0 && (w[g] = Se[g]);
        }
        if (z || I) {
          var we = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          z && kr(w, we), I && jr(w, we);
        }
        return cr(t, z, I, V, te, H.current, w);
      }
      function Gr(t, i) {
        var d = cr(t.type, i, t.ref, t._self, t._source, t._owner, t.props);
        return d;
      }
      function pt(t, i, d) {
        if (t == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
        var g, w = W({}, t.props), z = t.key, I = t.ref, V = t._self, te = t._source, pe = t._owner;
        if (i != null) {
          $r(i) && (I = i.ref, pe = H.current), sr(i) && (gr(i.key), z = "" + i.key);
          var be;
          t.type && t.type.defaultProps && (be = t.type.defaultProps);
          for (g in i)
            nr.call(i, g) && !ar.hasOwnProperty(g) && (i[g] === void 0 && be !== void 0 ? w[g] = be[g] : w[g] = i[g]);
        }
        var _e = arguments.length - 2;
        if (_e === 1)
          w.children = d;
        else if (_e > 1) {
          for (var Se = Array(_e), we = 0; we < _e; we++)
            Se[we] = arguments[we + 2];
          w.children = Se;
        }
        return cr(t.type, z, I, V, te, pe, w);
      }
      function ur(t) {
        return typeof t == "object" && t !== null && t.$$typeof === a;
      }
      var Xe = ".", Tr = ":";
      function ht(t) {
        var i = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, g = t.replace(i, function(w) {
          return d[w];
        });
        return "$" + g;
      }
      var _r = !1, qr = /\/+/g;
      function Ke(t) {
        return t.replace(qr, "$&/");
      }
      function Ge(t, i) {
        return typeof t == "object" && t !== null && t.key != null ? (gr(t.key), ht("" + t.key)) : i.toString(36);
      }
      function lr(t, i, d, g, w) {
        var z = typeof t;
        (z === "undefined" || z === "boolean") && (t = null);
        var I = !1;
        if (t === null)
          I = !0;
        else
          switch (z) {
            case "string":
            case "number":
              I = !0;
              break;
            case "object":
              switch (t.$$typeof) {
                case a:
                case s:
                  I = !0;
              }
          }
        if (I) {
          var V = t, te = w(V), pe = g === "" ? Xe + Ge(V, 0) : g;
          if (He(te)) {
            var be = "";
            pe != null && (be = Ke(pe) + "/"), lr(te, i, be, "", function(Eo) {
              return Eo;
            });
          } else
            te != null && (ur(te) && (te.key && (!V || V.key !== te.key) && gr(te.key), te = Gr(
              te,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (te.key && (!V || V.key !== te.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ke("" + te.key) + "/"
              ) : "") + pe
            )), i.push(te));
          return 1;
        }
        var _e, Se, we = 0, Pe = g === "" ? Xe : g + Tr;
        if (He(t))
          for (var rn = 0; rn < t.length; rn++)
            _e = t[rn], Se = Pe + Ge(_e, rn), we += lr(_e, i, d, Se, w);
        else {
          var jn = O(t);
          if (typeof jn == "function") {
            var ca = t;
            jn === ca.entries && (_r || Be("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), _r = !0);
            for (var _o = jn.call(ca), ua, So = 0; !(ua = _o.next()).done; )
              _e = ua.value, Se = Pe + Ge(_e, So++), we += lr(_e, i, d, Se, w);
          } else if (z === "object") {
            var la = String(t);
            throw new Error("Objects are not valid as a React child (found: " + (la === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : la) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return we;
      }
      function We(t, i, d) {
        if (t == null)
          return t;
        var g = [], w = 0;
        return lr(t, g, "", "", function(z) {
          return i.call(d, z, w++);
        }), g;
      }
      function mt(t) {
        var i = 0;
        return We(t, function() {
          i++;
        }), i;
      }
      function Hr(t, i, d) {
        We(t, function() {
          i.apply(this, arguments);
        }, d);
      }
      function vt(t) {
        return We(t, function(i) {
          return i;
        }) || [];
      }
      function Xr(t) {
        if (!ur(t))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return t;
      }
      function Kr(t) {
        var i = {
          $$typeof: _,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: t,
          _currentValue2: t,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        i.Provider = {
          $$typeof: b,
          _context: i
        };
        var d = !1, g = !1, w = !1;
        {
          var z = {
            $$typeof: _,
            _context: i
          };
          Object.defineProperties(z, {
            Provider: {
              get: function() {
                return g || (g = !0, B("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), i.Provider;
              },
              set: function(I) {
                i.Provider = I;
              }
            },
            _currentValue: {
              get: function() {
                return i._currentValue;
              },
              set: function(I) {
                i._currentValue = I;
              }
            },
            _currentValue2: {
              get: function() {
                return i._currentValue2;
              },
              set: function(I) {
                i._currentValue2 = I;
              }
            },
            _threadCount: {
              get: function() {
                return i._threadCount;
              },
              set: function(I) {
                i._threadCount = I;
              }
            },
            Consumer: {
              get: function() {
                return d || (d = !0, B("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), i.Consumer;
              }
            },
            displayName: {
              get: function() {
                return i.displayName;
              },
              set: function(I) {
                w || (Be("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", I), w = !0);
              }
            }
          }), i.Consumer = z;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var Oe = -1, Mr = 0, Dr = 1, gt = 2;
      function yt(t) {
        if (t._status === Oe) {
          var i = t._result, d = i();
          if (d.then(function(z) {
            if (t._status === Mr || t._status === Oe) {
              var I = t;
              I._status = Dr, I._result = z;
            }
          }, function(z) {
            if (t._status === Mr || t._status === Oe) {
              var I = t;
              I._status = gt, I._result = z;
            }
          }), t._status === Oe) {
            var g = t;
            g._status = Mr, g._result = d;
          }
        }
        if (t._status === Dr) {
          var w = t._result;
          return w === void 0 && B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, w), "default" in w || B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, w), w.default;
        } else
          throw t._result;
      }
      function bt(t) {
        var i = {
          // We use these fields to store the result.
          _status: Oe,
          _result: t
        }, d = {
          $$typeof: N,
          _payload: i,
          _init: yt
        };
        {
          var g, w;
          Object.defineProperties(d, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return g;
              },
              set: function(z) {
                B("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), g = z, Object.defineProperty(d, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return w;
              },
              set: function(z) {
                B("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), w = z, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function fr(t) {
        t != null && t.$$typeof === P ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof t != "function" ? B("forwardRef requires a render function but was given %s.", t === null ? "null" : typeof t) : t.length !== 0 && t.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", t.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), t != null && (t.defaultProps != null || t.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var i = {
          $$typeof: y,
          render: t
        };
        {
          var d;
          Object.defineProperty(i, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return d;
            },
            set: function(g) {
              d = g, !t.name && !t.displayName && (t.displayName = g);
            }
          });
        }
        return i;
      }
      var c;
      c = Symbol.for("react.module.reference");
      function E(t) {
        return !!(typeof t == "string" || typeof t == "function" || t === u || t === v || xe || t === h || t === R || t === x || Te || t === C || je || mr || er || typeof t == "object" && t !== null && (t.$$typeof === N || t.$$typeof === P || t.$$typeof === b || t.$$typeof === _ || t.$$typeof === y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        t.$$typeof === c || t.getModuleId !== void 0));
      }
      function T(t, i) {
        E(t) || B("memo: The first argument must be a component. Instead received: %s", t === null ? "null" : typeof t);
        var d = {
          $$typeof: P,
          type: t,
          compare: i === void 0 ? null : i
        };
        {
          var g;
          Object.defineProperty(d, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return g;
            },
            set: function(w) {
              g = w, !t.name && !t.displayName && (t.displayName = w);
            }
          });
        }
        return d;
      }
      function j() {
        var t = L.current;
        return t === null && B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), t;
      }
      function re(t) {
        var i = j();
        if (t._context !== void 0) {
          var d = t._context;
          d.Consumer === t ? B("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === t && B("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return i.useContext(t);
      }
      function Q(t) {
        var i = j();
        return i.useState(t);
      }
      function X(t, i, d) {
        var g = j();
        return g.useReducer(t, i, d);
      }
      function q(t) {
        var i = j();
        return i.useRef(t);
      }
      function Ce(t, i) {
        var d = j();
        return d.useEffect(t, i);
      }
      function me(t, i) {
        var d = j();
        return d.useInsertionEffect(t, i);
      }
      function ye(t, i) {
        var d = j();
        return d.useLayoutEffect(t, i);
      }
      function Ne(t, i) {
        var d = j();
        return d.useCallback(t, i);
      }
      function Je(t, i) {
        var d = j();
        return d.useMemo(t, i);
      }
      function Jr(t, i, d) {
        var g = j();
        return g.useImperativeHandle(t, i, d);
      }
      function Me(t, i) {
        {
          var d = j();
          return d.useDebugValue(t, i);
        }
      }
      function _t() {
        var t = j();
        return t.useTransition();
      }
      function kn(t) {
        var i = j();
        return i.useDeferredValue(t);
      }
      function Zr() {
        var t = j();
        return t.useId();
      }
      function Ft(t, i, d) {
        var g = j();
        return g.useSyncExternalStore(t, i, d);
      }
      var Fr = 0, Bt, Lt, St, zt, Wt, Vt, Yt;
      function Ut() {
      }
      Ut.__reactDisabledLog = !0;
      function Tn() {
        {
          if (Fr === 0) {
            Bt = console.log, Lt = console.info, St = console.warn, zt = console.error, Wt = console.group, Vt = console.groupCollapsed, Yt = console.groupEnd;
            var t = {
              configurable: !0,
              enumerable: !0,
              value: Ut,
              writable: !0
            };
            Object.defineProperties(console, {
              info: t,
              log: t,
              warn: t,
              error: t,
              group: t,
              groupCollapsed: t,
              groupEnd: t
            });
          }
          Fr++;
        }
      }
      function Cn() {
        {
          if (Fr--, Fr === 0) {
            var t = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: W({}, t, {
                value: Bt
              }),
              info: W({}, t, {
                value: Lt
              }),
              warn: W({}, t, {
                value: St
              }),
              error: W({}, t, {
                value: zt
              }),
              group: W({}, t, {
                value: Wt
              }),
              groupCollapsed: W({}, t, {
                value: Vt
              }),
              groupEnd: W({}, t, {
                value: Yt
              })
            });
          }
          Fr < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Et = Ee.ReactCurrentDispatcher, wt;
      function Qr(t, i, d) {
        {
          if (wt === void 0)
            try {
              throw Error();
            } catch (w) {
              var g = w.stack.trim().match(/\n( *(at )?)/);
              wt = g && g[1] || "";
            }
          return `
` + wt + t;
        }
      }
      var Cr = !1, xr;
      {
        var xn = typeof WeakMap == "function" ? WeakMap : Map;
        xr = new xn();
      }
      function Gt(t, i) {
        if (!t || Cr)
          return "";
        {
          var d = xr.get(t);
          if (d !== void 0)
            return d;
        }
        var g;
        Cr = !0;
        var w = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var z;
        z = Et.current, Et.current = null, Tn();
        try {
          if (i) {
            var I = function() {
              throw Error();
            };
            if (Object.defineProperty(I.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(I, []);
              } catch (Pe) {
                g = Pe;
              }
              Reflect.construct(t, [], I);
            } else {
              try {
                I.call();
              } catch (Pe) {
                g = Pe;
              }
              t.call(I.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Pe) {
              g = Pe;
            }
            t();
          }
        } catch (Pe) {
          if (Pe && g && typeof Pe.stack == "string") {
            for (var V = Pe.stack.split(`
`), te = g.stack.split(`
`), pe = V.length - 1, be = te.length - 1; pe >= 1 && be >= 0 && V[pe] !== te[be]; )
              be--;
            for (; pe >= 1 && be >= 0; pe--, be--)
              if (V[pe] !== te[be]) {
                if (pe !== 1 || be !== 1)
                  do
                    if (pe--, be--, be < 0 || V[pe] !== te[be]) {
                      var _e = `
` + V[pe].replace(" at new ", " at ");
                      return t.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", t.displayName)), typeof t == "function" && xr.set(t, _e), _e;
                    }
                  while (pe >= 1 && be >= 0);
                break;
              }
          }
        } finally {
          Cr = !1, Et.current = z, Cn(), Error.prepareStackTrace = w;
        }
        var Se = t ? t.displayName || t.name : "", we = Se ? Qr(Se) : "";
        return typeof t == "function" && xr.set(t, we), we;
      }
      function qt(t, i, d) {
        return Gt(t, !1);
      }
      function On(t) {
        var i = t.prototype;
        return !!(i && i.isReactComponent);
      }
      function et(t, i, d) {
        if (t == null)
          return "";
        if (typeof t == "function")
          return Gt(t, On(t));
        if (typeof t == "string")
          return Qr(t);
        switch (t) {
          case R:
            return Qr("Suspense");
          case x:
            return Qr("SuspenseList");
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case y:
              return qt(t.render);
            case P:
              return et(t.type, i, d);
            case N: {
              var g = t, w = g._payload, z = g._init;
              try {
                return et(z(w), i, d);
              } catch {
              }
            }
          }
        return "";
      }
      var Ht = {}, Rt = Ee.ReactDebugCurrentFrame;
      function rt(t) {
        if (t) {
          var i = t._owner, d = et(t.type, t._source, i ? i.type : null);
          Rt.setExtraStackFrame(d);
        } else
          Rt.setExtraStackFrame(null);
      }
      function Pn(t, i, d, g, w) {
        {
          var z = Function.call.bind(nr);
          for (var I in t)
            if (z(t, I)) {
              var V = void 0;
              try {
                if (typeof t[I] != "function") {
                  var te = Error((g || "React class") + ": " + d + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw te.name = "Invariant Violation", te;
                }
                V = t[I](i, I, g, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (pe) {
                V = pe;
              }
              V && !(V instanceof Error) && (rt(w), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", d, I, typeof V), rt(null)), V instanceof Error && !(V.message in Ht) && (Ht[V.message] = !0, rt(w), B("Failed %s type: %s", d, V.message), rt(null));
            }
        }
      }
      function Or(t) {
        if (t) {
          var i = t._owner, d = et(t.type, t._source, i ? i.type : null);
          $e(d);
        } else
          $e(null);
      }
      var Br;
      Br = !1;
      function Xt() {
        if (H.current) {
          var t = ze(H.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
      function An(t) {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), d = t.lineNumber;
          return `

Check your code at ` + i + ":" + d + ".";
        }
        return "";
      }
      function In(t) {
        return t != null ? An(t.__source) : "";
      }
      var Lr = {};
      function kt(t) {
        var i = Xt();
        if (!i) {
          var d = typeof t == "string" ? t : t.displayName || t.name;
          d && (i = `

Check the top-level render call using <` + d + ">.");
        }
        return i;
      }
      function tt(t, i) {
        if (!(!t._store || t._store.validated || t.key != null)) {
          t._store.validated = !0;
          var d = kt(i);
          if (!Lr[d]) {
            Lr[d] = !0;
            var g = "";
            t && t._owner && t._owner !== H.current && (g = " It was passed a child from " + ze(t._owner.type) + "."), Or(t), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, g), Or(null);
          }
        }
      }
      function nt(t, i) {
        if (typeof t == "object") {
          if (He(t))
            for (var d = 0; d < t.length; d++) {
              var g = t[d];
              ur(g) && tt(g, i);
            }
          else if (ur(t))
            t._store && (t._store.validated = !0);
          else if (t) {
            var w = O(t);
            if (typeof w == "function" && w !== t.entries)
              for (var z = w.call(t), I; !(I = z.next()).done; )
                ur(I.value) && tt(I.value, i);
          }
        }
      }
      function Kt(t) {
        {
          var i = t.type;
          if (i == null || typeof i == "string")
            return;
          var d;
          if (typeof i == "function")
            d = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === y || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === P))
            d = i.propTypes;
          else
            return;
          if (d) {
            var g = ze(i);
            Pn(d, t.props, "prop", g, t);
          } else if (i.PropTypes !== void 0 && !Br) {
            Br = !0;
            var w = ze(i);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Jt(t) {
        {
          for (var i = Object.keys(t.props), d = 0; d < i.length; d++) {
            var g = i[d];
            if (g !== "children" && g !== "key") {
              Or(t), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Or(null);
              break;
            }
          }
          t.ref !== null && (Or(t), B("Invalid attribute `ref` supplied to `React.Fragment`."), Or(null));
        }
      }
      function at(t, i, d) {
        var g = E(t);
        if (!g) {
          var w = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = In(i);
          z ? w += z : w += Xt();
          var I;
          t === null ? I = "null" : He(t) ? I = "array" : t !== void 0 && t.$$typeof === a ? (I = "<" + (ze(t.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : I = typeof t, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, w);
        }
        var V = Ur.apply(this, arguments);
        if (V == null)
          return V;
        if (g)
          for (var te = 2; te < arguments.length; te++)
            nt(arguments[te], t);
        return t === u ? Jt(V) : Kt(V), V;
      }
      var Tt = !1;
      function Sr(t) {
        var i = at.bind(null, t);
        return i.type = t, Tt || (Tt = !0, Be("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return Be("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: t
            }), t;
          }
        }), i;
      }
      function zr(t, i, d) {
        for (var g = pt.apply(this, arguments), w = 2; w < arguments.length; w++)
          nt(arguments[w], g.type);
        return Kt(g), g;
      }
      function $n(t, i) {
        var d = Y.transition;
        Y.transition = {};
        var g = Y.transition;
        Y.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          t();
        } finally {
          if (Y.transition = d, d === null && g._updatedFibers) {
            var w = g._updatedFibers.size;
            w > 10 && Be("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), g._updatedFibers.clear();
          }
        }
      }
      var Ct = !1, ot = null;
      function Zt(t) {
        if (ot === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), d = e && e[i];
            ot = d.call(e, "timers").setImmediate;
          } catch {
            ot = function(w) {
              Ct === !1 && (Ct = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var z = new MessageChannel();
              z.port1.onmessage = w, z.port2.postMessage(void 0);
            };
          }
        return ot(t);
      }
      var Pr = 0, Qt = !1;
      function en(t) {
        {
          var i = Pr;
          Pr++, S.current === null && (S.current = []);
          var d = S.isBatchingLegacy, g;
          try {
            if (S.isBatchingLegacy = !0, g = t(), !d && S.didScheduleLegacyUpdate) {
              var w = S.current;
              w !== null && (S.didScheduleLegacyUpdate = !1, m(w));
            }
          } catch (Se) {
            throw it(i), Se;
          } finally {
            S.isBatchingLegacy = d;
          }
          if (g !== null && typeof g == "object" && typeof g.then == "function") {
            var z = g, I = !1, V = {
              then: function(Se, we) {
                I = !0, z.then(function(Pe) {
                  it(i), Pr === 0 ? o(Pe, Se, we) : Se(Pe);
                }, function(Pe) {
                  it(i), we(Pe);
                });
              }
            };
            return !Qt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              I || (Qt = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), V;
          } else {
            var te = g;
            if (it(i), Pr === 0) {
              var pe = S.current;
              pe !== null && (m(pe), S.current = null);
              var be = {
                then: function(Se, we) {
                  S.current === null ? (S.current = [], o(te, Se, we)) : Se(te);
                }
              };
              return be;
            } else {
              var _e = {
                then: function(Se, we) {
                  Se(te);
                }
              };
              return _e;
            }
          }
        }
      }
      function it(t) {
        t !== Pr - 1 && B("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Pr = t;
      }
      function o(t, i, d) {
        {
          var g = S.current;
          if (g !== null)
            try {
              m(g), Zt(function() {
                g.length === 0 ? (S.current = null, i(t)) : o(t, i, d);
              });
            } catch (w) {
              d(w);
            }
          else
            i(t);
        }
      }
      var l = !1;
      function m(t) {
        if (!l) {
          l = !0;
          var i = 0;
          try {
            for (; i < t.length; i++) {
              var d = t[i];
              do
                d = d(!0);
              while (d !== null);
            }
            t.length = 0;
          } catch (g) {
            throw t = t.slice(i + 1), g;
          } finally {
            l = !1;
          }
        }
      }
      var A = at, ee = zr, de = Sr, he = {
        map: We,
        forEach: Hr,
        count: mt,
        toArray: vt,
        only: Xr
      };
      r.Children = he, r.Component = G, r.Fragment = u, r.Profiler = v, r.PureComponent = ge, r.StrictMode = h, r.Suspense = R, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ee, r.cloneElement = ee, r.createContext = Kr, r.createElement = A, r.createFactory = de, r.createRef = Rr, r.forwardRef = fr, r.isValidElement = ur, r.lazy = bt, r.memo = T, r.startTransition = $n, r.unstable_act = en, r.useCallback = Ne, r.useContext = re, r.useDebugValue = Me, r.useDeferredValue = kn, r.useEffect = Ce, r.useId = Zr, r.useImperativeHandle = Jr, r.useInsertionEffect = me, r.useLayoutEffect = ye, r.useMemo = Je, r.useReducer = X, r.useRef = q, r.useState = Q, r.useSyncExternalStore = Ft, r.useTransition = _t, r.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(xo, It)), It;
}
var pa;
function Kn() {
  return pa || (pa = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Co() : e.exports = Oo();
  }(To)), fn;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ha;
function Po() {
  if (ha)
    return xt;
  ha = 1;
  var e = Kn(), r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(v, b, _) {
    var y, R = {}, x = null, P = null;
    _ !== void 0 && (x = "" + _), b.key !== void 0 && (x = "" + b.key), b.ref !== void 0 && (P = b.ref);
    for (y in b)
      a.call(b, y) && !u.hasOwnProperty(y) && (R[y] = b[y]);
    if (v && v.defaultProps)
      for (y in b = v.defaultProps, b)
        R[y] === void 0 && (R[y] = b[y]);
    return { $$typeof: r, type: v, key: x, ref: P, props: R, _owner: s.current };
  }
  return xt.Fragment = n, xt.jsx = h, xt.jsxs = h, xt;
}
var Ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma;
function Ao() {
  return ma || (ma = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Kn(), r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), v = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), N = Symbol.iterator, C = "@@iterator";
    function $(c) {
      if (c === null || typeof c != "object")
        return null;
      var E = N && c[N] || c[C];
      return typeof E == "function" ? E : null;
    }
    var M = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(c) {
      {
        for (var E = arguments.length, T = new Array(E > 1 ? E - 1 : 0), j = 1; j < E; j++)
          T[j - 1] = arguments[j];
        L("error", c, T);
      }
    }
    function L(c, E, T) {
      {
        var j = M.ReactDebugCurrentFrame, re = j.getStackAddendum();
        re !== "" && (E += "%s", T = T.concat([re]));
        var Q = T.map(function(X) {
          return String(X);
        });
        Q.unshift("Warning: " + E), Function.prototype.apply.call(console[c], console, Q);
      }
    }
    var Y = !1, S = !1, H = !1, U = !1, Fe = !1, $e;
    $e = Symbol.for("react.module.reference");
    function je(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === a || c === u || Fe || c === s || c === _ || c === y || U || c === P || Y || S || H || typeof c == "object" && c !== null && (c.$$typeof === x || c.$$typeof === R || c.$$typeof === h || c.$$typeof === v || c.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === $e || c.getModuleId !== void 0));
    }
    function mr(c, E, T) {
      var j = c.displayName;
      if (j)
        return j;
      var re = E.displayName || E.name || "";
      return re !== "" ? T + "(" + re + ")" : T;
    }
    function er(c) {
      return c.displayName || "Context";
    }
    function Te(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case s:
          return "StrictMode";
        case _:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case v:
            var E = c;
            return er(E) + ".Consumer";
          case h:
            var T = c;
            return er(T._context) + ".Provider";
          case b:
            return mr(c, c.render, "ForwardRef");
          case R:
            var j = c.displayName || null;
            return j !== null ? j : Te(c.type) || "Memo";
          case x: {
            var re = c, Q = re._payload, X = re._init;
            try {
              return Te(X(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var xe = Object.assign, Ee = 0, Be, B, Le, rr, p, k, W;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function G() {
      {
        if (Ee === 0) {
          Be = console.log, B = console.info, Le = console.warn, rr = console.error, p = console.group, k = console.groupCollapsed, W = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        Ee++;
      }
    }
    function ce() {
      {
        if (Ee--, Ee === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xe({}, c, {
              value: Be
            }),
            info: xe({}, c, {
              value: B
            }),
            warn: xe({}, c, {
              value: Le
            }),
            error: xe({}, c, {
              value: rr
            }),
            group: xe({}, c, {
              value: p
            }),
            groupCollapsed: xe({}, c, {
              value: k
            }),
            groupEnd: xe({}, c, {
              value: W
            })
          });
        }
        Ee < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = M.ReactCurrentDispatcher, ae;
    function K(c, E, T) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (re) {
            var j = re.stack.trim().match(/\n( *(at )?)/);
            ae = j && j[1] || "";
          }
        return `
` + ae + c;
      }
    }
    var ge = !1, Ve;
    {
      var Rr = typeof WeakMap == "function" ? WeakMap : Map;
      Ve = new Rr();
    }
    function D(c, E) {
      if (!c || ge)
        return "";
      {
        var T = Ve.get(c);
        if (T !== void 0)
          return T;
      }
      var j;
      ge = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = ne.current, ne.current = null, G();
      try {
        if (E) {
          var X = function() {
            throw Error();
          };
          if (Object.defineProperty(X.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(X, []);
            } catch (Me) {
              j = Me;
            }
            Reflect.construct(c, [], X);
          } else {
            try {
              X.call();
            } catch (Me) {
              j = Me;
            }
            c.call(X.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Me) {
            j = Me;
          }
          c();
        }
      } catch (Me) {
        if (Me && j && typeof Me.stack == "string") {
          for (var q = Me.stack.split(`
`), Ce = j.stack.split(`
`), me = q.length - 1, ye = Ce.length - 1; me >= 1 && ye >= 0 && q[me] !== Ce[ye]; )
            ye--;
          for (; me >= 1 && ye >= 0; me--, ye--)
            if (q[me] !== Ce[ye]) {
              if (me !== 1 || ye !== 1)
                do
                  if (me--, ye--, ye < 0 || q[me] !== Ce[ye]) {
                    var Ne = `
` + q[me].replace(" at new ", " at ");
                    return c.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", c.displayName)), typeof c == "function" && Ve.set(c, Ne), Ne;
                  }
                while (me >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        ge = !1, ne.current = Q, ce(), Error.prepareStackTrace = re;
      }
      var Je = c ? c.displayName || c.name : "", Jr = Je ? K(Je) : "";
      return typeof c == "function" && Ve.set(c, Jr), Jr;
    }
    function He(c, E, T) {
      return D(c, !1);
    }
    function ir(c) {
      var E = c.prototype;
      return !!(E && E.isReactComponent);
    }
    function tr(c, E, T) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return D(c, ir(c));
      if (typeof c == "string")
        return K(c);
      switch (c) {
        case _:
          return K("Suspense");
        case y:
          return K("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case b:
            return He(c.render);
          case R:
            return tr(c.type, E, T);
          case x: {
            var j = c, re = j._payload, Q = j._init;
            try {
              return tr(Q(re), E, T);
            } catch {
            }
          }
        }
      return "";
    }
    var vr = Object.prototype.hasOwnProperty, gr = {}, Yr = M.ReactDebugCurrentFrame;
    function yr(c) {
      if (c) {
        var E = c._owner, T = tr(c.type, c._source, E ? E.type : null);
        Yr.setExtraStackFrame(T);
      } else
        Yr.setExtraStackFrame(null);
    }
    function ze(c, E, T, j, re) {
      {
        var Q = Function.call.bind(vr);
        for (var X in c)
          if (Q(c, X)) {
            var q = void 0;
            try {
              if (typeof c[X] != "function") {
                var Ce = Error((j || "React class") + ": " + T + " type `" + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[X] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              q = c[X](E, X, j, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              q = me;
            }
            q && !(q instanceof Error) && (yr(re), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", T, X, typeof q), yr(null)), q instanceof Error && !(q.message in gr) && (gr[q.message] = !0, yr(re), O("Failed %s type: %s", T, q.message), yr(null));
          }
      }
    }
    var nr = Array.isArray;
    function ar(c) {
      return nr(c);
    }
    function Ye(c) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, T = E && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return T;
      }
    }
    function Ir(c) {
      try {
        return br(c), !1;
      } catch {
        return !0;
      }
    }
    function br(c) {
      return "" + c;
    }
    function $r(c) {
      if (Ir(c))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ye(c)), br(c);
    }
    var sr = M.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jr, Nr, cr;
    cr = {};
    function Ur(c) {
      if (vr.call(c, "ref")) {
        var E = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Gr(c) {
      if (vr.call(c, "key")) {
        var E = Object.getOwnPropertyDescriptor(c, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function pt(c, E) {
      if (typeof c.ref == "string" && sr.current && E && sr.current.stateNode !== E) {
        var T = Te(sr.current.type);
        cr[T] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Te(sr.current.type), c.ref), cr[T] = !0);
      }
    }
    function ur(c, E) {
      {
        var T = function() {
          jr || (jr = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        T.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function Xe(c, E) {
      {
        var T = function() {
          Nr || (Nr = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        T.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var Tr = function(c, E, T, j, re, Q, X) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: c,
        key: E,
        ref: T,
        props: X,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function ht(c, E, T, j, re) {
      {
        var Q, X = {}, q = null, Ce = null;
        T !== void 0 && ($r(T), q = "" + T), Gr(E) && ($r(E.key), q = "" + E.key), Ur(E) && (Ce = E.ref, pt(E, re));
        for (Q in E)
          vr.call(E, Q) && !kr.hasOwnProperty(Q) && (X[Q] = E[Q]);
        if (c && c.defaultProps) {
          var me = c.defaultProps;
          for (Q in me)
            X[Q] === void 0 && (X[Q] = me[Q]);
        }
        if (q || Ce) {
          var ye = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          q && ur(X, ye), Ce && Xe(X, ye);
        }
        return Tr(c, q, Ce, re, j, sr.current, X);
      }
    }
    var _r = M.ReactCurrentOwner, qr = M.ReactDebugCurrentFrame;
    function Ke(c) {
      if (c) {
        var E = c._owner, T = tr(c.type, c._source, E ? E.type : null);
        qr.setExtraStackFrame(T);
      } else
        qr.setExtraStackFrame(null);
    }
    var Ge;
    Ge = !1;
    function lr(c) {
      return typeof c == "object" && c !== null && c.$$typeof === r;
    }
    function We() {
      {
        if (_r.current) {
          var c = Te(_r.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function mt(c) {
      {
        if (c !== void 0) {
          var E = c.fileName.replace(/^.*[\\\/]/, ""), T = c.lineNumber;
          return `

Check your code at ` + E + ":" + T + ".";
        }
        return "";
      }
    }
    var Hr = {};
    function vt(c) {
      {
        var E = We();
        if (!E) {
          var T = typeof c == "string" ? c : c.displayName || c.name;
          T && (E = `

Check the top-level render call using <` + T + ">.");
        }
        return E;
      }
    }
    function Xr(c, E) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var T = vt(E);
        if (Hr[T])
          return;
        Hr[T] = !0;
        var j = "";
        c && c._owner && c._owner !== _r.current && (j = " It was passed a child from " + Te(c._owner.type) + "."), Ke(c), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, j), Ke(null);
      }
    }
    function Kr(c, E) {
      {
        if (typeof c != "object")
          return;
        if (ar(c))
          for (var T = 0; T < c.length; T++) {
            var j = c[T];
            lr(j) && Xr(j, E);
          }
        else if (lr(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var re = $(c);
          if (typeof re == "function" && re !== c.entries)
            for (var Q = re.call(c), X; !(X = Q.next()).done; )
              lr(X.value) && Xr(X.value, E);
        }
      }
    }
    function Oe(c) {
      {
        var E = c.type;
        if (E == null || typeof E == "string")
          return;
        var T;
        if (typeof E == "function")
          T = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === R))
          T = E.propTypes;
        else
          return;
        if (T) {
          var j = Te(E);
          ze(T, c.props, "prop", j, c);
        } else if (E.PropTypes !== void 0 && !Ge) {
          Ge = !0;
          var re = Te(E);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mr(c) {
      {
        for (var E = Object.keys(c.props), T = 0; T < E.length; T++) {
          var j = E[T];
          if (j !== "children" && j !== "key") {
            Ke(c), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Ke(null);
            break;
          }
        }
        c.ref !== null && (Ke(c), O("Invalid attribute `ref` supplied to `React.Fragment`."), Ke(null));
      }
    }
    function Dr(c, E, T, j, re, Q) {
      {
        var X = je(c);
        if (!X) {
          var q = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = mt(re);
          Ce ? q += Ce : q += We();
          var me;
          c === null ? me = "null" : ar(c) ? me = "array" : c !== void 0 && c.$$typeof === r ? (me = "<" + (Te(c.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : me = typeof c, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, q);
        }
        var ye = ht(c, E, T, re, Q);
        if (ye == null)
          return ye;
        if (X) {
          var Ne = E.children;
          if (Ne !== void 0)
            if (j)
              if (ar(Ne)) {
                for (var Je = 0; Je < Ne.length; Je++)
                  Kr(Ne[Je], c);
                Object.freeze && Object.freeze(Ne);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kr(Ne, c);
        }
        return c === a ? Mr(ye) : Oe(ye), ye;
      }
    }
    function gt(c, E, T) {
      return Dr(c, E, T, !0);
    }
    function yt(c, E, T) {
      return Dr(c, E, T, !1);
    }
    var bt = yt, fr = gt;
    Ot.Fragment = a, Ot.jsx = bt, Ot.jsxs = fr;
  }()), Ot;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Po() : e.exports = Ao();
})(ko);
function Io({ text: e }) {
  return /* @__PURE__ */ Re.jsx("div", { children: e });
}
var Z = Kn();
const Fn = /* @__PURE__ */ Ro(Z), va = /* @__PURE__ */ wo({
  __proto__: null,
  default: Fn
}, [Z]);
function $o(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function jo(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var No = /* @__PURE__ */ function() {
  function e(n) {
    var a = this;
    this._insertTag = function(s) {
      var u;
      a.tags.length === 0 ? a.insertionPoint ? u = a.insertionPoint.nextSibling : a.prepend ? u = a.container.firstChild : u = a.before : u = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(s, u), a.tags.push(s);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, r.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jo(this));
    var s = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var u = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
      u && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !u;
    }
    if (this.isSpeedy) {
      var h = $o(s);
      try {
        h.insertRule(a, h.cssRules.length);
      } catch (v) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(a) && console.error('There was a problem inserting the following rule: "' + a + '"', v);
      }
    } else
      s.appendChild(document.createTextNode(a));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(a) {
      return a.parentNode && a.parentNode.removeChild(a);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), De = "-ms-", dn = "-moz-", se = "-webkit-", Jn = "comm", Zn = "rule", Qn = "decl", Mo = "@import", Ga = "@keyframes", Do = Math.abs, gn = String.fromCharCode, Fo = Object.assign;
function Bo(e, r) {
  return Ie(e, 0) ^ 45 ? (((r << 2 ^ Ie(e, 0)) << 2 ^ Ie(e, 1)) << 2 ^ Ie(e, 2)) << 2 ^ Ie(e, 3) : 0;
}
function qa(e) {
  return e.trim();
}
function Lo(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function fe(e, r, n) {
  return e.replace(r, n);
}
function Bn(e, r) {
  return e.indexOf(r);
}
function Ie(e, r) {
  return e.charCodeAt(r) | 0;
}
function jt(e, r, n) {
  return e.slice(r, n);
}
function pr(e) {
  return e.length;
}
function ea(e) {
  return e.length;
}
function nn(e, r) {
  return r.push(e), e;
}
function zo(e, r) {
  return e.map(r).join("");
}
var yn = 1, ct = 1, Ha = 0, Ue = 0, ke = 0, ft = "";
function bn(e, r, n, a, s, u, h) {
  return { value: e, root: r, parent: n, type: a, props: s, children: u, line: yn, column: ct, length: h, return: "" };
}
function Pt(e, r) {
  return Fo(bn("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Wo() {
  return ke;
}
function Vo() {
  return ke = Ue > 0 ? Ie(ft, --Ue) : 0, ct--, ke === 10 && (ct = 1, yn--), ke;
}
function qe() {
  return ke = Ue < Ha ? Ie(ft, Ue++) : 0, ct++, ke === 10 && (ct = 1, yn++), ke;
}
function hr() {
  return Ie(ft, Ue);
}
function on() {
  return Ue;
}
function Dt(e, r) {
  return jt(ft, e, r);
}
function Nt(e) {
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
function Xa(e) {
  return yn = ct = 1, Ha = pr(ft = e), Ue = 0, [];
}
function Ka(e) {
  return ft = "", e;
}
function sn(e) {
  return qa(Dt(Ue - 1, Ln(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Yo(e) {
  for (; (ke = hr()) && ke < 33; )
    qe();
  return Nt(e) > 2 || Nt(ke) > 3 ? "" : " ";
}
function Uo(e, r) {
  for (; --r && qe() && !(ke < 48 || ke > 102 || ke > 57 && ke < 65 || ke > 70 && ke < 97); )
    ;
  return Dt(e, on() + (r < 6 && hr() == 32 && qe() == 32));
}
function Ln(e) {
  for (; qe(); )
    switch (ke) {
      case e:
        return Ue;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ln(ke);
        break;
      case 40:
        e === 41 && Ln(e);
        break;
      case 92:
        qe();
        break;
    }
  return Ue;
}
function Go(e, r) {
  for (; qe() && e + ke !== 47 + 10; )
    if (e + ke === 42 + 42 && hr() === 47)
      break;
  return "/*" + Dt(r, Ue - 1) + "*" + gn(e === 47 ? e : qe());
}
function qo(e) {
  for (; !Nt(hr()); )
    qe();
  return Dt(e, Ue);
}
function Ho(e) {
  return Ka(cn("", null, null, null, [""], e = Xa(e), 0, [0], e));
}
function cn(e, r, n, a, s, u, h, v, b) {
  for (var _ = 0, y = 0, R = h, x = 0, P = 0, N = 0, C = 1, $ = 1, M = 1, O = 0, L = "", Y = s, S = u, H = a, U = L; $; )
    switch (N = O, O = qe()) {
      case 40:
        if (N != 108 && Ie(U, R - 1) == 58) {
          Bn(U += fe(sn(O), "&", "&\f"), "&\f") != -1 && (M = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        U += sn(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        U += Yo(N);
        break;
      case 92:
        U += Uo(on() - 1, 7);
        continue;
      case 47:
        switch (hr()) {
          case 42:
          case 47:
            nn(Xo(Go(qe(), on()), r, n), b);
            break;
          default:
            U += "/";
        }
        break;
      case 123 * C:
        v[_++] = pr(U) * M;
      case 125 * C:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            $ = 0;
          case 59 + y:
            P > 0 && pr(U) - R && nn(P > 32 ? ya(U + ";", a, n, R - 1) : ya(fe(U, " ", "") + ";", a, n, R - 2), b);
            break;
          case 59:
            U += ";";
          default:
            if (nn(H = ga(U, r, n, _, y, s, v, L, Y = [], S = [], R), u), O === 123)
              if (y === 0)
                cn(U, r, H, H, Y, u, R, v, S);
              else
                switch (x === 99 && Ie(U, 3) === 110 ? 100 : x) {
                  case 100:
                  case 109:
                  case 115:
                    cn(e, H, H, a && nn(ga(e, H, H, 0, 0, s, v, L, s, Y = [], R), S), s, S, R, v, a ? Y : S);
                    break;
                  default:
                    cn(U, H, H, H, [""], S, 0, v, S);
                }
        }
        _ = y = P = 0, C = M = 1, L = U = "", R = h;
        break;
      case 58:
        R = 1 + pr(U), P = N;
      default:
        if (C < 1) {
          if (O == 123)
            --C;
          else if (O == 125 && C++ == 0 && Vo() == 125)
            continue;
        }
        switch (U += gn(O), O * C) {
          case 38:
            M = y > 0 ? 1 : (U += "\f", -1);
            break;
          case 44:
            v[_++] = (pr(U) - 1) * M, M = 1;
            break;
          case 64:
            hr() === 45 && (U += sn(qe())), x = hr(), y = R = pr(L = U += qo(on())), O++;
            break;
          case 45:
            N === 45 && pr(U) == 2 && (C = 0);
        }
    }
  return u;
}
function ga(e, r, n, a, s, u, h, v, b, _, y) {
  for (var R = s - 1, x = s === 0 ? u : [""], P = ea(x), N = 0, C = 0, $ = 0; N < a; ++N)
    for (var M = 0, O = jt(e, R + 1, R = Do(C = h[N])), L = e; M < P; ++M)
      (L = qa(C > 0 ? x[M] + " " + O : fe(O, /&\f/g, x[M]))) && (b[$++] = L);
  return bn(e, r, n, s === 0 ? Zn : v, b, _, y);
}
function Xo(e, r, n) {
  return bn(e, r, n, Jn, gn(Wo()), jt(e, 2, -2), 0);
}
function ya(e, r, n, a) {
  return bn(e, r, n, Qn, jt(e, 0, a), jt(e, a + 1, -1), a);
}
function st(e, r) {
  for (var n = "", a = ea(e), s = 0; s < a; s++)
    n += r(e[s], s, e, r) || "";
  return n;
}
function Ko(e, r, n, a) {
  switch (e.type) {
    case Mo:
    case Qn:
      return e.return = e.return || e.value;
    case Jn:
      return "";
    case Ga:
      return e.return = e.value + "{" + st(e.children, a) + "}";
    case Zn:
      e.value = e.props.join(",");
  }
  return pr(n = st(e.children, a)) ? e.return = e.value + "{" + n + "}" : "";
}
function Jo(e) {
  var r = ea(e);
  return function(n, a, s, u) {
    for (var h = "", v = 0; v < r; v++)
      h += e[v](n, a, s, u) || "";
    return h;
  };
}
function Zo(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Ja(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return r[n] === void 0 && (r[n] = e(n)), r[n];
  };
}
var Qo = function(r, n, a) {
  for (var s = 0, u = 0; s = u, u = hr(), s === 38 && u === 12 && (n[a] = 1), !Nt(u); )
    qe();
  return Dt(r, Ue);
}, ei = function(r, n) {
  var a = -1, s = 44;
  do
    switch (Nt(s)) {
      case 0:
        s === 38 && hr() === 12 && (n[a] = 1), r[a] += Qo(Ue - 1, n, a);
        break;
      case 2:
        r[a] += sn(s);
        break;
      case 4:
        if (s === 44) {
          r[++a] = hr() === 58 ? "&\f" : "", n[a] = r[a].length;
          break;
        }
      default:
        r[a] += gn(s);
    }
  while (s = qe());
  return r;
}, ri = function(r, n) {
  return Ka(ei(Xa(r), n));
}, ba = /* @__PURE__ */ new WeakMap(), ti = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var n = r.value, a = r.parent, s = r.column === a.column && r.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(r.props.length === 1 && n.charCodeAt(0) !== 58 && !ba.get(a)) && !s) {
      ba.set(r, !0);
      for (var u = [], h = ri(n, u), v = a.props, b = 0, _ = 0; b < h.length; b++)
        for (var y = 0; y < v.length; y++, _++)
          r.props[_] = u[b] ? h[b].replace(/&\f/g, v[y]) : v[y] + " " + h[b];
    }
  }
}, ni = function(r) {
  if (r.type === "decl") {
    var n = r.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, ai = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", oi = function(r) {
  return r.type === "comm" && r.children.indexOf(ai) > -1;
}, ii = function(r) {
  return function(n, a, s) {
    if (!(n.type !== "rule" || r.compat)) {
      var u = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (u) {
        for (var h = !!n.parent, v = h ? n.parent.children : (
          // global rule at the root level
          s
        ), b = v.length - 1; b >= 0; b--) {
          var _ = v[b];
          if (_.line < n.line)
            break;
          if (_.column < n.column) {
            if (oi(_))
              return;
            break;
          }
        }
        u.forEach(function(y) {
          console.error('The pseudo class "' + y + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + y.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Za = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, si = function(r, n) {
  for (var a = r - 1; a >= 0; a--)
    if (!Za(n[a]))
      return !0;
  return !1;
}, _a = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, ci = function(r, n, a) {
  Za(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), _a(r)) : si(n, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), _a(r)));
};
function Qa(e, r) {
  switch (Bo(e, r)) {
    case 5103:
      return se + "print-" + e + e;
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
      return se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + dn + e + De + e + e;
    case 6828:
    case 4268:
      return se + e + De + e + e;
    case 6165:
      return se + e + De + "flex-" + e + e;
    case 5187:
      return se + e + fe(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + De + "flex-$1$2") + e;
    case 5443:
      return se + e + De + "flex-item-" + fe(e, /flex-|-self/, "") + e;
    case 4675:
      return se + e + De + "flex-line-pack" + fe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return se + e + De + fe(e, "shrink", "negative") + e;
    case 5292:
      return se + e + De + fe(e, "basis", "preferred-size") + e;
    case 6060:
      return se + "box-" + fe(e, "-grow", "") + se + e + De + fe(e, "grow", "positive") + e;
    case 4554:
      return se + fe(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    case 6187:
      return fe(fe(fe(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return fe(e, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return fe(fe(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + De + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + se + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return fe(e, /(.+)-inline(.+)/, se + "$1$2") + e;
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
      if (pr(e) - 1 - r > 6)
        switch (Ie(e, r + 1)) {
          case 109:
            if (Ie(e, r + 4) !== 45)
              break;
          case 102:
            return fe(e, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + dn + (Ie(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Bn(e, "stretch") ? Qa(fe(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (Ie(e, r + 1) !== 115)
        break;
    case 6444:
      switch (Ie(e, pr(e) - 3 - (~Bn(e, "!important") && 10))) {
        case 107:
          return fe(e, ":", ":" + se) + e;
        case 101:
          return fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + se + (Ie(e, 14) === 45 ? "inline-" : "") + "box$3$1" + se + "$2$3$1" + De + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ie(e, r + 11)) {
        case 114:
          return se + e + De + fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return se + e + De + fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return se + e + De + fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return se + e + De + e + e;
  }
  return e;
}
var ui = function(r, n, a, s) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Qn:
        r.return = Qa(r.value, r.length);
        break;
      case Ga:
        return st([Pt(r, {
          value: fe(r.value, "@", "@" + se)
        })], s);
      case Zn:
        if (r.length)
          return zo(r.props, function(u) {
            switch (Lo(u, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return st([Pt(r, {
                  props: [fe(u, /:(read-\w+)/, ":" + dn + "$1")]
                })], s);
              case "::placeholder":
                return st([Pt(r, {
                  props: [fe(u, /:(plac\w+)/, ":" + se + "input-$1")]
                }), Pt(r, {
                  props: [fe(u, /:(plac\w+)/, ":" + dn + "$1")]
                }), Pt(r, {
                  props: [fe(u, /:(plac\w+)/, De + "input-$1")]
                })], s);
            }
            return "";
          });
    }
}, li = [ui], fi = function(r) {
  var n = r.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(C) {
      var $ = C.getAttribute("data-emotion");
      $.indexOf(" ") !== -1 && (document.head.appendChild(C), C.setAttribute("data-s", ""));
    });
  }
  var s = r.stylisPlugins || li;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var u = {}, h, v = [];
  h = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(C) {
      for (var $ = C.getAttribute("data-emotion").split(" "), M = 1; M < $.length; M++)
        u[$[M]] = !0;
      v.push(C);
    }
  );
  var b, _ = [ti, ni];
  process.env.NODE_ENV !== "production" && _.push(ii({
    get compat() {
      return N.compat;
    }
  }), ci);
  {
    var y, R = [Ko, process.env.NODE_ENV !== "production" ? function(C) {
      C.root || (C.return ? y.insert(C.return) : C.value && C.type !== Jn && y.insert(C.value + "{}"));
    } : Zo(function(C) {
      y.insert(C);
    })], x = Jo(_.concat(s, R)), P = function($) {
      return st(Ho($), x);
    };
    b = function($, M, O, L) {
      y = O, process.env.NODE_ENV !== "production" && M.map !== void 0 && (y = {
        insert: function(S) {
          O.insert(S + M.map);
        }
      }), P($ ? $ + "{" + M.styles + "}" : M.styles), L && (N.inserted[M.name] = !0);
    };
  }
  var N = {
    key: n,
    sheet: new No({
      key: n,
      container: h,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: u,
    registered: {},
    insert: b
  };
  return N.sheet.hydrate(v), N;
};
function zn() {
  return zn = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, zn.apply(this, arguments);
}
var Wn = {}, di = {
  get exports() {
    return Wn;
  },
  set exports(e) {
    Wn = e;
  }
}, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function pi() {
  if (Sa)
    return ue;
  Sa = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, h = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, R = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, N = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function L(S) {
    if (typeof S == "object" && S !== null) {
      var H = S.$$typeof;
      switch (H) {
        case r:
          switch (S = S.type, S) {
            case b:
            case _:
            case a:
            case u:
            case s:
            case R:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case v:
                case y:
                case N:
                case P:
                case h:
                  return S;
                default:
                  return H;
              }
          }
        case n:
          return H;
      }
    }
  }
  function Y(S) {
    return L(S) === _;
  }
  return ue.AsyncMode = b, ue.ConcurrentMode = _, ue.ContextConsumer = v, ue.ContextProvider = h, ue.Element = r, ue.ForwardRef = y, ue.Fragment = a, ue.Lazy = N, ue.Memo = P, ue.Portal = n, ue.Profiler = u, ue.StrictMode = s, ue.Suspense = R, ue.isAsyncMode = function(S) {
    return Y(S) || L(S) === b;
  }, ue.isConcurrentMode = Y, ue.isContextConsumer = function(S) {
    return L(S) === v;
  }, ue.isContextProvider = function(S) {
    return L(S) === h;
  }, ue.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }, ue.isForwardRef = function(S) {
    return L(S) === y;
  }, ue.isFragment = function(S) {
    return L(S) === a;
  }, ue.isLazy = function(S) {
    return L(S) === N;
  }, ue.isMemo = function(S) {
    return L(S) === P;
  }, ue.isPortal = function(S) {
    return L(S) === n;
  }, ue.isProfiler = function(S) {
    return L(S) === u;
  }, ue.isStrictMode = function(S) {
    return L(S) === s;
  }, ue.isSuspense = function(S) {
    return L(S) === R;
  }, ue.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === a || S === _ || S === u || S === s || S === R || S === x || typeof S == "object" && S !== null && (S.$$typeof === N || S.$$typeof === P || S.$$typeof === h || S.$$typeof === v || S.$$typeof === y || S.$$typeof === $ || S.$$typeof === M || S.$$typeof === O || S.$$typeof === C);
  }, ue.typeOf = L, ue;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function hi() {
  return Ea || (Ea = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, h = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, R = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, N = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function L(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === a || D === _ || D === u || D === s || D === R || D === x || typeof D == "object" && D !== null && (D.$$typeof === N || D.$$typeof === P || D.$$typeof === h || D.$$typeof === v || D.$$typeof === y || D.$$typeof === $ || D.$$typeof === M || D.$$typeof === O || D.$$typeof === C);
    }
    function Y(D) {
      if (typeof D == "object" && D !== null) {
        var He = D.$$typeof;
        switch (He) {
          case r:
            var ir = D.type;
            switch (ir) {
              case b:
              case _:
              case a:
              case u:
              case s:
              case R:
                return ir;
              default:
                var tr = ir && ir.$$typeof;
                switch (tr) {
                  case v:
                  case y:
                  case N:
                  case P:
                  case h:
                    return tr;
                  default:
                    return He;
                }
            }
          case n:
            return He;
        }
      }
    }
    var S = b, H = _, U = v, Fe = h, $e = r, je = y, mr = a, er = N, Te = P, xe = n, Ee = u, Be = s, B = R, Le = !1;
    function rr(D) {
      return Le || (Le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(D) || Y(D) === b;
    }
    function p(D) {
      return Y(D) === _;
    }
    function k(D) {
      return Y(D) === v;
    }
    function W(D) {
      return Y(D) === h;
    }
    function F(D) {
      return typeof D == "object" && D !== null && D.$$typeof === r;
    }
    function G(D) {
      return Y(D) === y;
    }
    function ce(D) {
      return Y(D) === a;
    }
    function ne(D) {
      return Y(D) === N;
    }
    function ae(D) {
      return Y(D) === P;
    }
    function K(D) {
      return Y(D) === n;
    }
    function ge(D) {
      return Y(D) === u;
    }
    function Ve(D) {
      return Y(D) === s;
    }
    function Rr(D) {
      return Y(D) === R;
    }
    le.AsyncMode = S, le.ConcurrentMode = H, le.ContextConsumer = U, le.ContextProvider = Fe, le.Element = $e, le.ForwardRef = je, le.Fragment = mr, le.Lazy = er, le.Memo = Te, le.Portal = xe, le.Profiler = Ee, le.StrictMode = Be, le.Suspense = B, le.isAsyncMode = rr, le.isConcurrentMode = p, le.isContextConsumer = k, le.isContextProvider = W, le.isElement = F, le.isForwardRef = G, le.isFragment = ce, le.isLazy = ne, le.isMemo = ae, le.isPortal = K, le.isProfiler = ge, le.isStrictMode = Ve, le.isSuspense = Rr, le.isValidElementType = L, le.typeOf = Y;
  }()), le;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = pi() : e.exports = hi();
})(di);
var eo = Wn, mi = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, gi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ro = {};
ro[eo.ForwardRef] = mi;
ro[eo.Memo] = gi;
var yi = !0;
function ra(e, r, n) {
  var a = "";
  return n.split(" ").forEach(function(s) {
    e[s] !== void 0 ? r.push(e[s] + ";") : a += s + " ";
  }), a;
}
var _n = function(r, n, a) {
  var s = r.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  yi === !1) && r.registered[s] === void 0 && (r.registered[s] = n.styles);
}, Sn = function(r, n, a) {
  _n(r, n, a);
  var s = r.key + "-" + n.name;
  if (r.inserted[n.name] === void 0) {
    var u = n;
    do
      r.insert(n === u ? "." + s : "", u, r.sheet, !0), u = u.next;
    while (u !== void 0);
  }
};
function bi(e) {
  for (var r = 0, n, a = 0, s = e.length; s >= 4; ++a, s -= 4)
    n = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, r = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
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
var _i = {
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
}, wa = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Si = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Ei = /[A-Z]|^ms/g, to = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ta = function(r) {
  return r.charCodeAt(1) === 45;
}, Ra = function(r) {
  return r != null && typeof r != "boolean";
}, Nn = /* @__PURE__ */ Ja(function(e) {
  return ta(e) ? e : e.replace(Ei, "-$&").toLowerCase();
}), pn = function(r, n) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(to, function(a, s, u) {
          return or = {
            name: s,
            styles: u,
            next: or
          }, s;
        });
  }
  return _i[r] !== 1 && !ta(r) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var wi = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Ri = ["normal", "none", "initial", "inherit", "unset"], ki = pn, Ti = /^-ms-/, Ci = /-(.)/g, ka = {};
  pn = function(r, n) {
    if (r === "content" && (typeof n != "string" || Ri.indexOf(n) === -1 && !wi.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var a = ki(r, n);
    return a !== "" && !ta(r) && r.indexOf("-") !== -1 && ka[r] === void 0 && (ka[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Ti, "ms-").replace(Ci, function(s, u) {
      return u.toUpperCase();
    }) + "?")), a;
  };
}
var no = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Mt(e, r, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(no);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return or = {
          name: n.name,
          styles: n.styles,
          next: or
        }, n.name;
      if (n.styles !== void 0) {
        var a = n.next;
        if (a !== void 0)
          for (; a !== void 0; )
            or = {
              name: a.name,
              styles: a.styles,
              next: or
            }, a = a.next;
        var s = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (s += n.map), s;
      }
      return xi(e, r, n);
    }
    case "function": {
      if (e !== void 0) {
        var u = or, h = n(e);
        return or = u, Mt(e, r, h);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var v = [], b = n.replace(to, function(y, R, x) {
          var P = "animation" + v.length;
          return v.push("const " + P + " = keyframes`" + x.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + P + "}";
        });
        v.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(v, ["`" + b + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + b + "`"));
      }
      break;
  }
  if (r == null)
    return n;
  var _ = r[n];
  return _ !== void 0 ? _ : n;
}
function xi(e, r, n) {
  var a = "";
  if (Array.isArray(n))
    for (var s = 0; s < n.length; s++)
      a += Mt(e, r, n[s]) + ";";
  else
    for (var u in n) {
      var h = n[u];
      if (typeof h != "object")
        r != null && r[h] !== void 0 ? a += u + "{" + r[h] + "}" : Ra(h) && (a += Nn(u) + ":" + pn(u, h) + ";");
      else {
        if (u === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(no);
        if (Array.isArray(h) && typeof h[0] == "string" && (r == null || r[h[0]] === void 0))
          for (var v = 0; v < h.length; v++)
            Ra(h[v]) && (a += Nn(u) + ":" + pn(u, h[v]) + ";");
        else {
          var b = Mt(e, r, h);
          switch (u) {
            case "animation":
            case "animationName": {
              a += Nn(u) + ":" + b + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && u === "undefined" && console.error(Si), a += u + "{" + b + "}";
          }
        }
      }
    }
  return a;
}
var Ta = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ao;
process.env.NODE_ENV !== "production" && (ao = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var or, ut = function(r, n, a) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var s = !0, u = "";
  or = void 0;
  var h = r[0];
  h == null || h.raw === void 0 ? (s = !1, u += Mt(a, n, h)) : (process.env.NODE_ENV !== "production" && h[0] === void 0 && console.error(wa), u += h[0]);
  for (var v = 1; v < r.length; v++)
    u += Mt(a, n, r[v]), s && (process.env.NODE_ENV !== "production" && h[v] === void 0 && console.error(wa), u += h[v]);
  var b;
  process.env.NODE_ENV !== "production" && (u = u.replace(ao, function(x) {
    return b = x, "";
  })), Ta.lastIndex = 0;
  for (var _ = "", y; (y = Ta.exec(u)) !== null; )
    _ += "-" + // $FlowFixMe we know it's not null
    y[1];
  var R = bi(u) + _;
  return process.env.NODE_ENV !== "production" ? {
    name: R,
    styles: u,
    map: b,
    next: or,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: R,
    styles: u,
    next: or
  };
}, Oi = function(r) {
  return r();
}, oo = va["useInsertionEffect"] ? va["useInsertionEffect"] : !1, na = oo || Oi, Ca = oo || Z.useLayoutEffect, Pi = {}.hasOwnProperty, aa = /* @__PURE__ */ Z.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ fi({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (aa.displayName = "EmotionCacheContext");
aa.Provider;
var En = function(r) {
  return /* @__PURE__ */ Z.forwardRef(function(n, a) {
    var s = Z.useContext(aa);
    return r(n, s, a);
  });
}, dt = /* @__PURE__ */ Z.createContext({});
process.env.NODE_ENV !== "production" && (dt.displayName = "EmotionThemeContext");
var xa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Oa = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Ai = function(r) {
  var n = r.cache, a = r.serialized, s = r.isStringTag;
  return _n(n, a, s), na(function() {
    return Sn(n, a, s);
  }), null;
}, Ii = /* @__PURE__ */ En(function(e, r, n) {
  var a = e.css;
  typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
  var s = e[xa], u = [a], h = "";
  typeof e.className == "string" ? h = ra(r.registered, u, e.className) : e.className != null && (h = e.className + " ");
  var v = ut(u, void 0, Z.useContext(dt));
  if (process.env.NODE_ENV !== "production" && v.name.indexOf("-") === -1) {
    var b = e[Oa];
    b && (v = ut([v, "label:" + b + ";"]));
  }
  h += r.key + "-" + v.name;
  var _ = {};
  for (var y in e)
    Pi.call(e, y) && y !== "css" && y !== xa && (process.env.NODE_ENV === "production" || y !== Oa) && (_[y] = e[y]);
  return _.ref = n, _.className = h, /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement(Ai, {
    cache: r,
    serialized: v,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ Z.createElement(s, _));
});
process.env.NODE_ENV !== "production" && (Ii.displayName = "EmotionCssPropInternal");
var $i = {
  name: "@emotion/react",
  version: "11.10.6",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": "./macro.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.10.6",
    "@emotion/cache": "^11.10.5",
    "@emotion/serialize": "^1.1.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
    "@emotion/utils": "^1.2.0",
    "@emotion/weak-memoize": "^0.3.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.10.6",
    "@emotion/css-prettifier": "1.1.1",
    "@emotion/server": "11.10.0",
    "@emotion/styled": "11.10.6",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      }
    }
  }
}, Pa = !1, ji = /* @__PURE__ */ En(function(e, r) {
  process.env.NODE_ENV !== "production" && !Pa && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Pa = !0);
  var n = e.styles, a = ut([n], void 0, Z.useContext(dt)), s = Z.useRef();
  return Ca(function() {
    var u = r.key + "-global", h = new r.sheet.constructor({
      key: u,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), v = !1, b = document.querySelector('style[data-emotion="' + u + " " + a.name + '"]');
    return r.sheet.tags.length && (h.before = r.sheet.tags[0]), b !== null && (v = !0, b.setAttribute("data-emotion", u), h.hydrate([b])), s.current = [h, v], function() {
      h.flush();
    };
  }, [r]), Ca(function() {
    var u = s.current, h = u[0], v = u[1];
    if (v) {
      u[1] = !1;
      return;
    }
    if (a.next !== void 0 && Sn(r, a.next, !0), h.tags.length) {
      var b = h.tags[h.tags.length - 1].nextElementSibling;
      h.before = b, h.flush();
    }
    r.insert("", a, h, !1);
  }, [r, a.name]), null;
});
process.env.NODE_ENV !== "production" && (ji.displayName = "EmotionGlobal");
function Ni() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return ut(r);
}
var Mi = function() {
  var r = Ni.apply(void 0, arguments), n = "animation-" + r.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Di = function e(r) {
  for (var n = r.length, a = 0, s = ""; a < n; a++) {
    var u = r[a];
    if (u != null) {
      var h = void 0;
      switch (typeof u) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(u))
            h = e(u);
          else {
            process.env.NODE_ENV !== "production" && u.styles !== void 0 && u.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), h = "";
            for (var v in u)
              u[v] && v && (h && (h += " "), h += v);
          }
          break;
        }
        default:
          h = u;
      }
      h && (s && (s += " "), s += h);
    }
  }
  return s;
};
function Fi(e, r, n) {
  var a = [], s = ra(e, a, n);
  return a.length < 2 ? n : s + r(a);
}
var Bi = function(r) {
  var n = r.cache, a = r.serializedArr;
  return na(function() {
    for (var s = 0; s < a.length; s++)
      Sn(n, a[s], !1);
  }), null;
}, Li = /* @__PURE__ */ En(function(e, r) {
  var n = !1, a = [], s = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var _ = arguments.length, y = new Array(_), R = 0; R < _; R++)
      y[R] = arguments[R];
    var x = ut(y, r.registered);
    return a.push(x), _n(r, x, !1), r.key + "-" + x.name;
  }, u = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var _ = arguments.length, y = new Array(_), R = 0; R < _; R++)
      y[R] = arguments[R];
    return Fi(r.registered, s, Di(y));
  }, h = {
    css: s,
    cx: u,
    theme: Z.useContext(dt)
  }, v = e.children(h);
  return n = !0, /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement(Bi, {
    cache: r,
    serializedArr: a
  }), v);
});
process.env.NODE_ENV !== "production" && (Li.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Aa = !0, zi = typeof jest < "u" || typeof vi < "u";
  if (Aa && !zi) {
    var Ia = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Aa ? window : global
    ), $a = "__EMOTION_REACT_" + $i.version.split(".")[0] + "__";
    Ia[$a] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Ia[$a] = !0;
  }
}
function Wi(e, r) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`;
}
function Vi(e = {}) {
  const {
    name: r,
    strict: n = !0,
    hookName: a = "useContext",
    providerName: s = "Provider",
    errorMessage: u,
    defaultValue: h
  } = e, v = Z.createContext(h);
  v.displayName = r;
  function b() {
    var _;
    const y = Z.useContext(v);
    if (!y && n) {
      const R = new Error(
        u ?? Wi(a, s)
      );
      throw R.name = "ContextError", (_ = Error.captureStackTrace) == null || _.call(Error, R, b), R;
    }
    return y;
  }
  return [v.Provider, b, v];
}
function Yi() {
  const e = Z.useContext(
    dt
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var io = Z.createContext({});
io.displayName = "ColorModeContext";
function so() {
  const e = Z.useContext(io);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Ui() {
  const e = so(), r = Yi();
  return { ...e, theme: r };
}
var wn = (...e) => e.filter(Boolean).join(" ");
function Vr(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function Wr(e, ...r) {
  return Gi(e) ? e(...r) : e;
}
var Gi = (e) => typeof e == "function", ja = (e) => e ? "" : void 0, hn = {}, qi = {
  get exports() {
    return hn;
  },
  set exports(e) {
    hn = e;
  }
};
(function(e, r) {
  var n = 200, a = "__lodash_hash_undefined__", s = 800, u = 16, h = 9007199254740991, v = "[object Arguments]", b = "[object Array]", _ = "[object AsyncFunction]", y = "[object Boolean]", R = "[object Date]", x = "[object Error]", P = "[object Function]", N = "[object GeneratorFunction]", C = "[object Map]", $ = "[object Number]", M = "[object Null]", O = "[object Object]", L = "[object Proxy]", Y = "[object RegExp]", S = "[object Set]", H = "[object String]", U = "[object Undefined]", Fe = "[object WeakMap]", $e = "[object ArrayBuffer]", je = "[object DataView]", mr = "[object Float32Array]", er = "[object Float64Array]", Te = "[object Int8Array]", xe = "[object Int16Array]", Ee = "[object Int32Array]", Be = "[object Uint8Array]", B = "[object Uint8ClampedArray]", Le = "[object Uint16Array]", rr = "[object Uint32Array]", p = /[\\^$.*+?()[\]{}|]/g, k = /^\[object .+?Constructor\]$/, W = /^(?:0|[1-9]\d*)$/, F = {};
  F[mr] = F[er] = F[Te] = F[xe] = F[Ee] = F[Be] = F[B] = F[Le] = F[rr] = !0, F[v] = F[b] = F[$e] = F[y] = F[je] = F[R] = F[x] = F[P] = F[C] = F[$] = F[O] = F[Y] = F[S] = F[H] = F[Fe] = !1;
  var G = typeof tn == "object" && tn && tn.Object === Object && tn, ce = typeof self == "object" && self && self.Object === Object && self, ne = G || ce || Function("return this")(), ae = r && !r.nodeType && r, K = ae && !0 && e && !e.nodeType && e, ge = K && K.exports === ae, Ve = ge && G.process, Rr = function() {
    try {
      var o = K && K.require && K.require("util").types;
      return o || Ve && Ve.binding && Ve.binding("util");
    } catch {
    }
  }(), D = Rr && Rr.isTypedArray;
  function He(o, l, m) {
    switch (m.length) {
      case 0:
        return o.call(l);
      case 1:
        return o.call(l, m[0]);
      case 2:
        return o.call(l, m[0], m[1]);
      case 3:
        return o.call(l, m[0], m[1], m[2]);
    }
    return o.apply(l, m);
  }
  function ir(o, l) {
    for (var m = -1, A = Array(o); ++m < o; )
      A[m] = l(m);
    return A;
  }
  function tr(o) {
    return function(l) {
      return o(l);
    };
  }
  function vr(o, l) {
    return o == null ? void 0 : o[l];
  }
  function gr(o, l) {
    return function(m) {
      return o(l(m));
    };
  }
  var Yr = Array.prototype, yr = Function.prototype, ze = Object.prototype, nr = ne["__core-js_shared__"], ar = yr.toString, Ye = ze.hasOwnProperty, Ir = function() {
    var o = /[^.]+$/.exec(nr && nr.keys && nr.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), br = ze.toString, $r = ar.call(Object), sr = RegExp(
    "^" + ar.call(Ye).replace(p, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), kr = ge ? ne.Buffer : void 0, jr = ne.Symbol, Nr = ne.Uint8Array, cr = kr ? kr.allocUnsafe : void 0, Ur = gr(Object.getPrototypeOf, Object), Gr = Object.create, pt = ze.propertyIsEnumerable, ur = Yr.splice, Xe = jr ? jr.toStringTag : void 0, Tr = function() {
    try {
      var o = xr(Object, "defineProperty");
      return o({}, "", {}), o;
    } catch {
    }
  }(), ht = kr ? kr.isBuffer : void 0, _r = Math.max, qr = Date.now, Ke = xr(ne, "Map"), Ge = xr(Object, "create"), lr = function() {
    function o() {
    }
    return function(l) {
      if (!Sr(l))
        return {};
      if (Gr)
        return Gr(l);
      o.prototype = l;
      var m = new o();
      return o.prototype = void 0, m;
    };
  }();
  function We(o) {
    var l = -1, m = o == null ? 0 : o.length;
    for (this.clear(); ++l < m; ) {
      var A = o[l];
      this.set(A[0], A[1]);
    }
  }
  function mt() {
    this.__data__ = Ge ? Ge(null) : {}, this.size = 0;
  }
  function Hr(o) {
    var l = this.has(o) && delete this.__data__[o];
    return this.size -= l ? 1 : 0, l;
  }
  function vt(o) {
    var l = this.__data__;
    if (Ge) {
      var m = l[o];
      return m === a ? void 0 : m;
    }
    return Ye.call(l, o) ? l[o] : void 0;
  }
  function Xr(o) {
    var l = this.__data__;
    return Ge ? l[o] !== void 0 : Ye.call(l, o);
  }
  function Kr(o, l) {
    var m = this.__data__;
    return this.size += this.has(o) ? 0 : 1, m[o] = Ge && l === void 0 ? a : l, this;
  }
  We.prototype.clear = mt, We.prototype.delete = Hr, We.prototype.get = vt, We.prototype.has = Xr, We.prototype.set = Kr;
  function Oe(o) {
    var l = -1, m = o == null ? 0 : o.length;
    for (this.clear(); ++l < m; ) {
      var A = o[l];
      this.set(A[0], A[1]);
    }
  }
  function Mr() {
    this.__data__ = [], this.size = 0;
  }
  function Dr(o) {
    var l = this.__data__, m = Me(l, o);
    if (m < 0)
      return !1;
    var A = l.length - 1;
    return m == A ? l.pop() : ur.call(l, m, 1), --this.size, !0;
  }
  function gt(o) {
    var l = this.__data__, m = Me(l, o);
    return m < 0 ? void 0 : l[m][1];
  }
  function yt(o) {
    return Me(this.__data__, o) > -1;
  }
  function bt(o, l) {
    var m = this.__data__, A = Me(m, o);
    return A < 0 ? (++this.size, m.push([o, l])) : m[A][1] = l, this;
  }
  Oe.prototype.clear = Mr, Oe.prototype.delete = Dr, Oe.prototype.get = gt, Oe.prototype.has = yt, Oe.prototype.set = bt;
  function fr(o) {
    var l = -1, m = o == null ? 0 : o.length;
    for (this.clear(); ++l < m; ) {
      var A = o[l];
      this.set(A[0], A[1]);
    }
  }
  function c() {
    this.size = 0, this.__data__ = {
      hash: new We(),
      map: new (Ke || Oe)(),
      string: new We()
    };
  }
  function E(o) {
    var l = Cr(this, o).delete(o);
    return this.size -= l ? 1 : 0, l;
  }
  function T(o) {
    return Cr(this, o).get(o);
  }
  function j(o) {
    return Cr(this, o).has(o);
  }
  function re(o, l) {
    var m = Cr(this, o), A = m.size;
    return m.set(o, l), this.size += m.size == A ? 0 : 1, this;
  }
  fr.prototype.clear = c, fr.prototype.delete = E, fr.prototype.get = T, fr.prototype.has = j, fr.prototype.set = re;
  function Q(o) {
    var l = this.__data__ = new Oe(o);
    this.size = l.size;
  }
  function X() {
    this.__data__ = new Oe(), this.size = 0;
  }
  function q(o) {
    var l = this.__data__, m = l.delete(o);
    return this.size = l.size, m;
  }
  function Ce(o) {
    return this.__data__.get(o);
  }
  function me(o) {
    return this.__data__.has(o);
  }
  function ye(o, l) {
    var m = this.__data__;
    if (m instanceof Oe) {
      var A = m.__data__;
      if (!Ke || A.length < n - 1)
        return A.push([o, l]), this.size = ++m.size, this;
      m = this.__data__ = new fr(A);
    }
    return m.set(o, l), this.size = m.size, this;
  }
  Q.prototype.clear = X, Q.prototype.delete = q, Q.prototype.get = Ce, Q.prototype.has = me, Q.prototype.set = ye;
  function Ne(o, l) {
    var m = tt(o), A = !m && kt(o), ee = !m && !A && Jt(o), de = !m && !A && !ee && Ct(o), he = m || A || ee || de, t = he ? ir(o.length, String) : [], i = t.length;
    for (var d in o)
      (l || Ye.call(o, d)) && !(he && // Safari 9 has enumerable `arguments.length` in strict mode.
      (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ee && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      de && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
      qt(d, i))) && t.push(d);
    return t;
  }
  function Je(o, l, m) {
    (m !== void 0 && !Lr(o[l], m) || m === void 0 && !(l in o)) && _t(o, l, m);
  }
  function Jr(o, l, m) {
    var A = o[l];
    (!(Ye.call(o, l) && Lr(A, m)) || m === void 0 && !(l in o)) && _t(o, l, m);
  }
  function Me(o, l) {
    for (var m = o.length; m--; )
      if (Lr(o[m][0], l))
        return m;
    return -1;
  }
  function _t(o, l, m) {
    l == "__proto__" && Tr ? Tr(o, l, {
      configurable: !0,
      enumerable: !0,
      value: m,
      writable: !0
    }) : o[l] = m;
  }
  var kn = Qr();
  function Zr(o) {
    return o == null ? o === void 0 ? U : M : Xe && Xe in Object(o) ? xn(o) : Pn(o);
  }
  function Ft(o) {
    return zr(o) && Zr(o) == v;
  }
  function Fr(o) {
    if (!Sr(o) || Ht(o))
      return !1;
    var l = at(o) ? sr : k;
    return l.test(In(o));
  }
  function Bt(o) {
    return zr(o) && Tt(o.length) && !!F[Zr(o)];
  }
  function Lt(o) {
    if (!Sr(o))
      return rt(o);
    var l = Rt(o), m = [];
    for (var A in o)
      A == "constructor" && (l || !Ye.call(o, A)) || m.push(A);
    return m;
  }
  function St(o, l, m, A, ee) {
    o !== l && kn(l, function(de, he) {
      if (ee || (ee = new Q()), Sr(de))
        zt(o, l, he, m, St, A, ee);
      else {
        var t = A ? A(Br(o, he), de, he + "", o, l, ee) : void 0;
        t === void 0 && (t = de), Je(o, he, t);
      }
    }, Zt);
  }
  function zt(o, l, m, A, ee, de, he) {
    var t = Br(o, m), i = Br(l, m), d = he.get(i);
    if (d) {
      Je(o, m, d);
      return;
    }
    var g = de ? de(t, i, m + "", o, l, he) : void 0, w = g === void 0;
    if (w) {
      var z = tt(i), I = !z && Jt(i), V = !z && !I && Ct(i);
      g = i, z || I || V ? tt(t) ? g = t : Kt(t) ? g = Cn(t) : I ? (w = !1, g = Yt(i, !0)) : V ? (w = !1, g = Tn(i, !0)) : g = [] : $n(i) || kt(i) ? (g = t, kt(t) ? g = ot(t) : (!Sr(t) || at(t)) && (g = Gt(i))) : w = !1;
    }
    w && (he.set(i, g), ee(g, i, A, de, he), he.delete(i)), Je(o, m, g);
  }
  function Wt(o, l) {
    return Xt(Or(o, l, en), o + "");
  }
  var Vt = Tr ? function(o, l) {
    return Tr(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Qt(l),
      writable: !0
    });
  } : en;
  function Yt(o, l) {
    if (l)
      return o.slice();
    var m = o.length, A = cr ? cr(m) : new o.constructor(m);
    return o.copy(A), A;
  }
  function Ut(o) {
    var l = new o.constructor(o.byteLength);
    return new Nr(l).set(new Nr(o)), l;
  }
  function Tn(o, l) {
    var m = l ? Ut(o.buffer) : o.buffer;
    return new o.constructor(m, o.byteOffset, o.length);
  }
  function Cn(o, l) {
    var m = -1, A = o.length;
    for (l || (l = Array(A)); ++m < A; )
      l[m] = o[m];
    return l;
  }
  function Et(o, l, m, A) {
    var ee = !m;
    m || (m = {});
    for (var de = -1, he = l.length; ++de < he; ) {
      var t = l[de], i = A ? A(m[t], o[t], t, m, o) : void 0;
      i === void 0 && (i = o[t]), ee ? _t(m, t, i) : Jr(m, t, i);
    }
    return m;
  }
  function wt(o) {
    return Wt(function(l, m) {
      var A = -1, ee = m.length, de = ee > 1 ? m[ee - 1] : void 0, he = ee > 2 ? m[2] : void 0;
      for (de = o.length > 3 && typeof de == "function" ? (ee--, de) : void 0, he && On(m[0], m[1], he) && (de = ee < 3 ? void 0 : de, ee = 1), l = Object(l); ++A < ee; ) {
        var t = m[A];
        t && o(l, t, A, de);
      }
      return l;
    });
  }
  function Qr(o) {
    return function(l, m, A) {
      for (var ee = -1, de = Object(l), he = A(l), t = he.length; t--; ) {
        var i = he[o ? t : ++ee];
        if (m(de[i], i, de) === !1)
          break;
      }
      return l;
    };
  }
  function Cr(o, l) {
    var m = o.__data__;
    return et(l) ? m[typeof l == "string" ? "string" : "hash"] : m.map;
  }
  function xr(o, l) {
    var m = vr(o, l);
    return Fr(m) ? m : void 0;
  }
  function xn(o) {
    var l = Ye.call(o, Xe), m = o[Xe];
    try {
      o[Xe] = void 0;
      var A = !0;
    } catch {
    }
    var ee = br.call(o);
    return A && (l ? o[Xe] = m : delete o[Xe]), ee;
  }
  function Gt(o) {
    return typeof o.constructor == "function" && !Rt(o) ? lr(Ur(o)) : {};
  }
  function qt(o, l) {
    var m = typeof o;
    return l = l ?? h, !!l && (m == "number" || m != "symbol" && W.test(o)) && o > -1 && o % 1 == 0 && o < l;
  }
  function On(o, l, m) {
    if (!Sr(m))
      return !1;
    var A = typeof l;
    return (A == "number" ? nt(m) && qt(l, m.length) : A == "string" && l in m) ? Lr(m[l], o) : !1;
  }
  function et(o) {
    var l = typeof o;
    return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? o !== "__proto__" : o === null;
  }
  function Ht(o) {
    return !!Ir && Ir in o;
  }
  function Rt(o) {
    var l = o && o.constructor, m = typeof l == "function" && l.prototype || ze;
    return o === m;
  }
  function rt(o) {
    var l = [];
    if (o != null)
      for (var m in Object(o))
        l.push(m);
    return l;
  }
  function Pn(o) {
    return br.call(o);
  }
  function Or(o, l, m) {
    return l = _r(l === void 0 ? o.length - 1 : l, 0), function() {
      for (var A = arguments, ee = -1, de = _r(A.length - l, 0), he = Array(de); ++ee < de; )
        he[ee] = A[l + ee];
      ee = -1;
      for (var t = Array(l + 1); ++ee < l; )
        t[ee] = A[ee];
      return t[l] = m(he), He(o, this, t);
    };
  }
  function Br(o, l) {
    if (!(l === "constructor" && typeof o[l] == "function") && l != "__proto__")
      return o[l];
  }
  var Xt = An(Vt);
  function An(o) {
    var l = 0, m = 0;
    return function() {
      var A = qr(), ee = u - (A - m);
      if (m = A, ee > 0) {
        if (++l >= s)
          return arguments[0];
      } else
        l = 0;
      return o.apply(void 0, arguments);
    };
  }
  function In(o) {
    if (o != null) {
      try {
        return ar.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function Lr(o, l) {
    return o === l || o !== o && l !== l;
  }
  var kt = Ft(function() {
    return arguments;
  }()) ? Ft : function(o) {
    return zr(o) && Ye.call(o, "callee") && !pt.call(o, "callee");
  }, tt = Array.isArray;
  function nt(o) {
    return o != null && Tt(o.length) && !at(o);
  }
  function Kt(o) {
    return zr(o) && nt(o);
  }
  var Jt = ht || it;
  function at(o) {
    if (!Sr(o))
      return !1;
    var l = Zr(o);
    return l == P || l == N || l == _ || l == L;
  }
  function Tt(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= h;
  }
  function Sr(o) {
    var l = typeof o;
    return o != null && (l == "object" || l == "function");
  }
  function zr(o) {
    return o != null && typeof o == "object";
  }
  function $n(o) {
    if (!zr(o) || Zr(o) != O)
      return !1;
    var l = Ur(o);
    if (l === null)
      return !0;
    var m = Ye.call(l, "constructor") && l.constructor;
    return typeof m == "function" && m instanceof m && ar.call(m) == $r;
  }
  var Ct = D ? tr(D) : Bt;
  function ot(o) {
    return Et(o, Zt(o));
  }
  function Zt(o) {
    return nt(o) ? Ne(o, !0) : Lt(o);
  }
  var Pr = wt(function(o, l, m, A) {
    St(o, l, m, A);
  });
  function Qt(o) {
    return function() {
      return o;
    };
  }
  function en(o) {
    return o;
  }
  function it() {
    return !1;
  }
  e.exports = Pr;
})(qi, hn);
const wr = hn;
var Hi = (e) => /!(important)?$/.test(e), Na = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, Xi = (e, r) => (n) => {
  const a = String(r), s = Hi(a), u = Na(a), h = e ? `${e}.${u}` : u;
  let v = Vr(n.__cssMap) && h in n.__cssMap ? n.__cssMap[h].varRef : r;
  return v = Na(v), s ? `${v} !important` : v;
};
function oa(e) {
  const { scale: r, transform: n, compose: a } = e;
  return (u, h) => {
    var v;
    const b = Xi(r, u)(h);
    let _ = (v = n == null ? void 0 : n(b, h)) != null ? v : b;
    return a && (_ = a(_, h)), _;
  };
}
var an = (...e) => (r) => e.reduce((n, a) => a(n), r);
function Ze(e, r) {
  return (n) => {
    const a = { property: n, scale: e };
    return a.transform = oa({
      scale: e,
      transform: r
    }), a;
  };
}
var Ki = ({ rtl: e, ltr: r }) => (n) => n.direction === "rtl" ? e : r;
function Ji(e) {
  const { property: r, scale: n, transform: a } = e;
  return {
    scale: n,
    property: Ki(r),
    transform: n ? oa({
      scale: n,
      compose: a
    }) : a
  };
}
var co = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function Zi() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...co
  ].join(" ");
}
function Qi() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...co
  ].join(" ");
}
var es = {
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
}, rs = {
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
function ts(e) {
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
var ns = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Vn = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, as = new Set(Object.values(Vn)), Yn = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), os = (e) => e.trim();
function is(e, r) {
  if (e == null || Yn.has(e))
    return e;
  if (!(Un(e) || Yn.has(e)))
    return `url('${e}')`;
  const s = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), u = s == null ? void 0 : s[1], h = s == null ? void 0 : s[2];
  if (!u || !h)
    return e;
  const v = u.includes("-gradient") ? u : `${u}-gradient`, [b, ..._] = h.split(",").map(os).filter(Boolean);
  if ((_ == null ? void 0 : _.length) === 0)
    return e;
  const y = b in Vn ? Vn[b] : b;
  _.unshift(y);
  const R = _.map((x) => {
    if (as.has(x))
      return x;
    const P = x.indexOf(" "), [N, C] = P !== -1 ? [x.substr(0, P), x.substr(P + 1)] : [x], $ = Un(C) ? C : C && C.split(" "), M = `colors.${N}`, O = M in r.__cssMap ? r.__cssMap[M].varRef : N;
    return $ ? [
      O,
      ...Array.isArray($) ? $ : [$]
    ].join(" ") : O;
  });
  return `${v}(${R.join(", ")})`;
}
var Un = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), ss = (e, r) => is(e, r ?? {});
function cs(e) {
  return /^var\(--.+\)$/.test(e);
}
var us = (e) => {
  const r = parseFloat(e.toString()), n = e.toString().replace(String(r), "");
  return { unitless: !n, value: r, unit: n };
}, dr = (e) => (r) => `${e}(${r})`, oe = {
  filter(e) {
    return e !== "auto" ? e : es;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : rs;
  },
  ring(e) {
    return ts(oe.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? Zi() : e === "auto-gpu" ? Qi() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = us(e);
    return r || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, r) {
    const n = { left: "right", right: "left" };
    return r.direction === "rtl" ? n[e] : e;
  },
  degree(e) {
    if (cs(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: ss,
  blur: dr("blur"),
  opacity: dr("opacity"),
  brightness: dr("brightness"),
  contrast: dr("contrast"),
  dropShadow: dr("drop-shadow"),
  grayscale: dr("grayscale"),
  hueRotate: dr("hue-rotate"),
  invert: dr("invert"),
  saturate: dr("saturate"),
  sepia: dr("sepia"),
  bgImage(e) {
    return e == null || Un(e) || Yn.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var r;
    const { space: n, divide: a } = (r = ns[e]) != null ? r : {}, s = { flexDirection: e };
    return n && (s[n] = 1), a && (s[a] = 1), s;
  }
}, f = {
  borderWidths: Ze("borderWidths"),
  borderStyles: Ze("borderStyles"),
  colors: Ze("colors"),
  borders: Ze("borders"),
  gradients: Ze("gradients", oe.gradient),
  radii: Ze("radii", oe.px),
  space: Ze("space", an(oe.vh, oe.px)),
  spaceT: Ze("space", an(oe.vh, oe.px)),
  degreeT(e) {
    return { property: e, transform: oe.degree };
  },
  prop(e, r, n) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: oa({ scale: r, transform: n })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: Ze("sizes", an(oe.vh, oe.px)),
  sizesT: Ze("sizes", an(oe.vh, oe.fraction)),
  shadows: Ze("shadows"),
  logical: Ji,
  blur: Ze("blur", oe.blur)
}, un = {
  background: f.colors("background"),
  backgroundColor: f.colors("backgroundColor"),
  backgroundImage: f.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: oe.bgClip },
  bgSize: f.prop("backgroundSize"),
  bgPosition: f.prop("backgroundPosition"),
  bg: f.colors("background"),
  bgColor: f.colors("backgroundColor"),
  bgPos: f.prop("backgroundPosition"),
  bgRepeat: f.prop("backgroundRepeat"),
  bgAttachment: f.prop("backgroundAttachment"),
  bgGradient: f.gradients("backgroundImage"),
  bgClip: { transform: oe.bgClip }
};
Object.assign(un, {
  bgImage: un.backgroundImage,
  bgImg: un.backgroundImage
});
var ie = {
  border: f.borders("border"),
  borderWidth: f.borderWidths("borderWidth"),
  borderStyle: f.borderStyles("borderStyle"),
  borderColor: f.colors("borderColor"),
  borderRadius: f.radii("borderRadius"),
  borderTop: f.borders("borderTop"),
  borderBlockStart: f.borders("borderBlockStart"),
  borderTopLeftRadius: f.radii("borderTopLeftRadius"),
  borderStartStartRadius: f.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: f.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: f.radii("borderTopRightRadius"),
  borderStartEndRadius: f.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: f.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: f.borders("borderRight"),
  borderInlineEnd: f.borders("borderInlineEnd"),
  borderBottom: f.borders("borderBottom"),
  borderBlockEnd: f.borders("borderBlockEnd"),
  borderBottomLeftRadius: f.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: f.radii("borderBottomRightRadius"),
  borderLeft: f.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: f.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: f.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: f.borders(["borderLeft", "borderRight"]),
  borderInline: f.borders("borderInline"),
  borderY: f.borders(["borderTop", "borderBottom"]),
  borderBlock: f.borders("borderBlock"),
  borderTopWidth: f.borderWidths("borderTopWidth"),
  borderBlockStartWidth: f.borderWidths("borderBlockStartWidth"),
  borderTopColor: f.colors("borderTopColor"),
  borderBlockStartColor: f.colors("borderBlockStartColor"),
  borderTopStyle: f.borderStyles("borderTopStyle"),
  borderBlockStartStyle: f.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: f.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: f.borderWidths("borderBlockEndWidth"),
  borderBottomColor: f.colors("borderBottomColor"),
  borderBlockEndColor: f.colors("borderBlockEndColor"),
  borderBottomStyle: f.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: f.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: f.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: f.borderWidths("borderInlineStartWidth"),
  borderLeftColor: f.colors("borderLeftColor"),
  borderInlineStartColor: f.colors("borderInlineStartColor"),
  borderLeftStyle: f.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: f.borderStyles("borderInlineStartStyle"),
  borderRightWidth: f.borderWidths("borderRightWidth"),
  borderInlineEndWidth: f.borderWidths("borderInlineEndWidth"),
  borderRightColor: f.colors("borderRightColor"),
  borderInlineEndColor: f.colors("borderInlineEndColor"),
  borderRightStyle: f.borderStyles("borderRightStyle"),
  borderInlineEndStyle: f.borderStyles("borderInlineEndStyle"),
  borderTopRadius: f.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: f.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: f.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: f.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(ie, {
  rounded: ie.borderRadius,
  roundedTop: ie.borderTopRadius,
  roundedTopLeft: ie.borderTopLeftRadius,
  roundedTopRight: ie.borderTopRightRadius,
  roundedTopStart: ie.borderStartStartRadius,
  roundedTopEnd: ie.borderStartEndRadius,
  roundedBottom: ie.borderBottomRadius,
  roundedBottomLeft: ie.borderBottomLeftRadius,
  roundedBottomRight: ie.borderBottomRightRadius,
  roundedBottomStart: ie.borderEndStartRadius,
  roundedBottomEnd: ie.borderEndEndRadius,
  roundedLeft: ie.borderLeftRadius,
  roundedRight: ie.borderRightRadius,
  roundedStart: ie.borderInlineStartRadius,
  roundedEnd: ie.borderInlineEndRadius,
  borderStart: ie.borderInlineStart,
  borderEnd: ie.borderInlineEnd,
  borderTopStartRadius: ie.borderStartStartRadius,
  borderTopEndRadius: ie.borderStartEndRadius,
  borderBottomStartRadius: ie.borderEndStartRadius,
  borderBottomEndRadius: ie.borderEndEndRadius,
  borderStartRadius: ie.borderInlineStartRadius,
  borderEndRadius: ie.borderInlineEndRadius,
  borderStartWidth: ie.borderInlineStartWidth,
  borderEndWidth: ie.borderInlineEndWidth,
  borderStartColor: ie.borderInlineStartColor,
  borderEndColor: ie.borderInlineEndColor,
  borderStartStyle: ie.borderInlineStartStyle,
  borderEndStyle: ie.borderInlineEndStyle
});
var ls = {
  color: f.colors("color"),
  textColor: f.colors("color"),
  fill: f.colors("fill"),
  stroke: f.colors("stroke")
}, Gn = {
  boxShadow: f.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: f.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: f.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Gn, {
  shadow: Gn.boxShadow
});
var fs = {
  filter: { transform: oe.filter },
  blur: f.blur("--chakra-blur"),
  brightness: f.propT("--chakra-brightness", oe.brightness),
  contrast: f.propT("--chakra-contrast", oe.contrast),
  hueRotate: f.degreeT("--chakra-hue-rotate"),
  invert: f.propT("--chakra-invert", oe.invert),
  saturate: f.propT("--chakra-saturate", oe.saturate),
  dropShadow: f.propT("--chakra-drop-shadow", oe.dropShadow),
  backdropFilter: { transform: oe.backdropFilter },
  backdropBlur: f.blur("--chakra-backdrop-blur"),
  backdropBrightness: f.propT(
    "--chakra-backdrop-brightness",
    oe.brightness
  ),
  backdropContrast: f.propT("--chakra-backdrop-contrast", oe.contrast),
  backdropHueRotate: f.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: f.propT("--chakra-backdrop-invert", oe.invert),
  backdropSaturate: f.propT("--chakra-backdrop-saturate", oe.saturate)
}, mn = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: oe.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: f.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: f.space("gap"),
  rowGap: f.space("rowGap"),
  columnGap: f.space("columnGap")
};
Object.assign(mn, {
  flexDir: mn.flexDirection
});
var uo = {
  gridGap: f.space("gridGap"),
  gridColumnGap: f.space("gridColumnGap"),
  gridRowGap: f.space("gridRowGap"),
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
}, ds = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: oe.outline },
  outlineOffset: !0,
  outlineColor: f.colors("outlineColor")
}, Qe = {
  width: f.sizesT("width"),
  inlineSize: f.sizesT("inlineSize"),
  height: f.sizes("height"),
  blockSize: f.sizes("blockSize"),
  boxSize: f.sizes(["width", "height"]),
  minWidth: f.sizes("minWidth"),
  minInlineSize: f.sizes("minInlineSize"),
  minHeight: f.sizes("minHeight"),
  minBlockSize: f.sizes("minBlockSize"),
  maxWidth: f.sizes("maxWidth"),
  maxInlineSize: f.sizes("maxInlineSize"),
  maxHeight: f.sizes("maxHeight"),
  maxBlockSize: f.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, r) => {
      var n, a, s;
      return { [`@media screen and (min-width: ${(s = (a = (n = r.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : a.minW) != null ? s : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, r) => {
      var n, a, s;
      return { [`@media screen and (max-width: ${(s = (a = (n = r.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : a._minW) != null ? s : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: f.propT("float", oe.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Qe, {
  w: Qe.width,
  h: Qe.height,
  minW: Qe.minWidth,
  maxW: Qe.maxWidth,
  minH: Qe.minHeight,
  maxH: Qe.maxHeight,
  overscroll: Qe.overscrollBehavior,
  overscrollX: Qe.overscrollBehaviorX,
  overscrollY: Qe.overscrollBehaviorY
});
var ps = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: f.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: f.prop("listStyleImage")
};
function hs(e, r, n, a) {
  const s = typeof r == "string" ? r.split(".") : [r];
  for (a = 0; a < s.length && e; a += 1)
    e = e[s[a]];
  return e === void 0 ? n : e;
}
var ms = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (a, s, u, h) => {
    if (typeof a > "u")
      return e(a, s, u);
    r.has(a) || r.set(a, /* @__PURE__ */ new Map());
    const v = r.get(a);
    if (v.has(s))
      return v.get(s);
    const b = e(a, s, u, h);
    return v.set(s, b), b;
  };
}, vs = ms(hs), gs = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, ys = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Mn = (e, r, n) => {
  const a = {}, s = vs(e, r, {});
  for (const u in s)
    u in n && n[u] != null || (a[u] = s[u]);
  return a;
}, bs = {
  srOnly: {
    transform(e) {
      return e === !0 ? gs : e === "focusable" ? ys : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, n) => Mn(r, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, n) => Mn(r, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, r, n) => Mn(r, e, n)
  }
}, $t = {
  position: !0,
  pos: f.prop("position"),
  zIndex: f.prop("zIndex", "zIndices"),
  inset: f.spaceT("inset"),
  insetX: f.spaceT(["left", "right"]),
  insetInline: f.spaceT("insetInline"),
  insetY: f.spaceT(["top", "bottom"]),
  insetBlock: f.spaceT("insetBlock"),
  top: f.spaceT("top"),
  insetBlockStart: f.spaceT("insetBlockStart"),
  bottom: f.spaceT("bottom"),
  insetBlockEnd: f.spaceT("insetBlockEnd"),
  left: f.spaceT("left"),
  insetInlineStart: f.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: f.spaceT("right"),
  insetInlineEnd: f.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign($t, {
  insetStart: $t.insetInlineStart,
  insetEnd: $t.insetInlineEnd
});
var _s = {
  ring: { transform: oe.ring },
  ringColor: f.colors("--chakra-ring-color"),
  ringOffset: f.prop("--chakra-ring-offset-width"),
  ringOffsetColor: f.colors("--chakra-ring-offset-color"),
  ringInset: f.prop("--chakra-ring-inset")
}, ve = {
  margin: f.spaceT("margin"),
  marginTop: f.spaceT("marginTop"),
  marginBlockStart: f.spaceT("marginBlockStart"),
  marginRight: f.spaceT("marginRight"),
  marginInlineEnd: f.spaceT("marginInlineEnd"),
  marginBottom: f.spaceT("marginBottom"),
  marginBlockEnd: f.spaceT("marginBlockEnd"),
  marginLeft: f.spaceT("marginLeft"),
  marginInlineStart: f.spaceT("marginInlineStart"),
  marginX: f.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: f.spaceT("marginInline"),
  marginY: f.spaceT(["marginTop", "marginBottom"]),
  marginBlock: f.spaceT("marginBlock"),
  padding: f.space("padding"),
  paddingTop: f.space("paddingTop"),
  paddingBlockStart: f.space("paddingBlockStart"),
  paddingRight: f.space("paddingRight"),
  paddingBottom: f.space("paddingBottom"),
  paddingBlockEnd: f.space("paddingBlockEnd"),
  paddingLeft: f.space("paddingLeft"),
  paddingInlineStart: f.space("paddingInlineStart"),
  paddingInlineEnd: f.space("paddingInlineEnd"),
  paddingX: f.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: f.space("paddingInline"),
  paddingY: f.space(["paddingTop", "paddingBottom"]),
  paddingBlock: f.space("paddingBlock")
};
Object.assign(ve, {
  m: ve.margin,
  mt: ve.marginTop,
  mr: ve.marginRight,
  me: ve.marginInlineEnd,
  marginEnd: ve.marginInlineEnd,
  mb: ve.marginBottom,
  ml: ve.marginLeft,
  ms: ve.marginInlineStart,
  marginStart: ve.marginInlineStart,
  mx: ve.marginX,
  my: ve.marginY,
  p: ve.padding,
  pt: ve.paddingTop,
  py: ve.paddingY,
  px: ve.paddingX,
  pb: ve.paddingBottom,
  pl: ve.paddingLeft,
  ps: ve.paddingInlineStart,
  paddingStart: ve.paddingInlineStart,
  pr: ve.paddingRight,
  pe: ve.paddingInlineEnd,
  paddingEnd: ve.paddingInlineEnd
});
var Ss = {
  textDecorationColor: f.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: f.shadows("textShadow")
}, Es = {
  clipPath: !0,
  transform: f.propT("transform", oe.transform),
  transformOrigin: !0,
  translateX: f.spaceT("--chakra-translate-x"),
  translateY: f.spaceT("--chakra-translate-y"),
  skewX: f.degreeT("--chakra-skew-x"),
  skewY: f.degreeT("--chakra-skew-y"),
  scaleX: f.prop("--chakra-scale-x"),
  scaleY: f.prop("--chakra-scale-y"),
  scale: f.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: f.degreeT("--chakra-rotate")
}, ws = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: f.prop("transitionDuration", "transition.duration"),
  transitionProperty: f.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: f.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, Rs = {
  fontFamily: f.prop("fontFamily", "fonts"),
  fontSize: f.prop("fontSize", "fontSizes", oe.px),
  fontWeight: f.prop("fontWeight", "fontWeights"),
  lineHeight: f.prop("lineHeight", "lineHeights"),
  letterSpacing: f.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
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
}, ks = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  scrollMargin: f.spaceT("scrollMargin"),
  scrollMarginTop: f.spaceT("scrollMarginTop"),
  scrollMarginBottom: f.spaceT("scrollMarginBottom"),
  scrollMarginLeft: f.spaceT("scrollMarginLeft"),
  scrollMarginRight: f.spaceT("scrollMarginRight"),
  scrollMarginX: f.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: f.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: f.spaceT("scrollPadding"),
  scrollPaddingTop: f.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: f.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: f.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: f.spaceT("scrollPaddingRight"),
  scrollPaddingX: f.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: f.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function lo(e) {
  return Vr(e) && e.reference ? e.reference : String(e);
}
var Rn = (e, ...r) => r.map(lo).join(` ${e} `).replace(/calc/g, ""), Ma = (...e) => `calc(${Rn("+", ...e)})`, Da = (...e) => `calc(${Rn("-", ...e)})`, qn = (...e) => `calc(${Rn("*", ...e)})`, Fa = (...e) => `calc(${Rn("/", ...e)})`, Ba = (e) => {
  const r = lo(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : qn(r, -1);
}, At = Object.assign(
  (e) => ({
    add: (...r) => At(Ma(e, ...r)),
    subtract: (...r) => At(Da(e, ...r)),
    multiply: (...r) => At(qn(e, ...r)),
    divide: (...r) => At(Fa(e, ...r)),
    negate: () => At(Ba(e)),
    toString: () => e.toString()
  }),
  {
    add: Ma,
    subtract: Da,
    multiply: qn,
    divide: Fa,
    negate: Ba
  }
);
function Ts(e) {
  const r = parseFloat(e.toString()), n = e.toString().replace(String(r), "");
  return { unitless: !n, value: r, unit: n };
}
function La(e) {
  if (e == null)
    return e;
  const { unitless: r } = Ts(e);
  return r || typeof e == "number" ? `${e}px` : e;
}
function Cs(e, r) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${La(e)})`), r && n.push("and", `(max-width: ${La(r)})`), n.join(" ");
}
var Ae = {
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
}, Ar = (e) => fo((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), Er = (e) => fo((r) => e(r, "~ &"), "[data-peer]", ".peer"), fo = (e, ...r) => r.map(e).join(", "), ia = {
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
  _firstLetter: "&::first-letter",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: Ar(Ae.hover),
  _peerHover: Er(Ae.hover),
  _groupFocus: Ar(Ae.focus),
  _peerFocus: Er(Ae.focus),
  _groupFocusVisible: Ar(Ae.focusVisible),
  _peerFocusVisible: Er(Ae.focusVisible),
  _groupActive: Ar(Ae.active),
  _peerActive: Er(Ae.active),
  _groupDisabled: Ar(Ae.disabled),
  _peerDisabled: Er(Ae.disabled),
  _groupInvalid: Ar(Ae.invalid),
  _peerInvalid: Er(Ae.invalid),
  _groupChecked: Ar(Ae.checked),
  _peerChecked: Er(Ae.checked),
  _groupFocusWithin: Ar(Ae.focusWithin),
  _peerFocusWithin: Er(Ae.focusWithin),
  _peerPlaceholderShown: Er(Ae.placeholderShown),
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
}, xs = Object.keys(
  ia
);
function Os(e, r = []) {
  const n = Object.assign({}, e);
  for (const a of r)
    a in n && delete n[a];
  return n;
}
var sa = wr(
  {},
  un,
  ie,
  ls,
  mn,
  Qe,
  fs,
  _s,
  ds,
  uo,
  bs,
  $t,
  Gn,
  ve,
  ks,
  Rs,
  Ss,
  Es,
  ps,
  ws
);
Object.assign({}, ve, Qe, mn, uo, $t);
var Ps = [...Object.keys(sa), ...xs], As = { ...sa, ...ia }, Is = (e) => e in As, $s = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: a, media: s } = r.__breakpoints, u = {};
  for (const h in e) {
    let v = Wr(e[h], r);
    if (v == null)
      continue;
    if (v = Vr(v) && n(v) ? a(v) : v, !Array.isArray(v)) {
      u[h] = v;
      continue;
    }
    const b = v.slice(0, s.length).length;
    for (let _ = 0; _ < b; _ += 1) {
      const y = s == null ? void 0 : s[_];
      if (!y) {
        u[h] = v[_];
        continue;
      }
      u[y] = u[y] || {}, v[_] != null && (u[y][h] = v[_]);
    }
  }
  return u;
};
function js(e) {
  const r = [];
  let n = "", a = !1;
  for (let s = 0; s < e.length; s++) {
    const u = e[s];
    u === "(" ? (a = !0, n += u) : u === ")" ? (a = !1, n += u) : u === "," && !a ? (r.push(n), n = "") : n += u;
  }
  return n = n.trim(), n && r.push(n), r;
}
function Ns(e) {
  return /^var\(--.+\)$/.test(e);
}
var Ms = (e, r) => e.startsWith("--") && typeof r == "string" && !Ns(r), Ds = (e, r) => {
  var n, a;
  if (r == null)
    return r;
  const s = (b) => {
    var _, y;
    return (y = (_ = e.__cssMap) == null ? void 0 : _[b]) == null ? void 0 : y.varRef;
  }, u = (b) => {
    var _;
    return (_ = s(b)) != null ? _ : b;
  }, [h, v] = js(r);
  return r = (a = (n = s(h)) != null ? n : u(v)) != null ? a : u(r), r;
};
function Fs(e) {
  const { configs: r = {}, pseudos: n = {}, theme: a } = e, s = (u, h = !1) => {
    var v, b, _;
    const y = Wr(u, a), R = $s(y)(a);
    let x = {};
    for (let P in R) {
      const N = R[P];
      let C = Wr(N, a);
      P in n && (P = n[P]), Ms(P, C) && (C = Ds(a, C));
      let $ = r[P];
      if ($ === !0 && ($ = { property: P }), Vr(C)) {
        x[P] = (v = x[P]) != null ? v : {}, x[P] = wr(
          {},
          x[P],
          s(C, !0)
        );
        continue;
      }
      let M = (_ = (b = $ == null ? void 0 : $.transform) == null ? void 0 : b.call($, C, a, y)) != null ? _ : C;
      M = $ != null && $.processResult ? s(M, !0) : M;
      const O = Wr($ == null ? void 0 : $.property, a);
      if (!h && ($ != null && $.static)) {
        const L = Wr($.static, a);
        x = wr({}, x, L);
      }
      if (O && Array.isArray(O)) {
        for (const L of O)
          x[L] = M;
        continue;
      }
      if (O) {
        O === "&" && Vr(M) ? x = wr({}, x, M) : x[O] = M;
        continue;
      }
      if (Vr(M)) {
        x = wr({}, x, M);
        continue;
      }
      x[P] = M;
    }
    return x;
  };
  return s;
}
var Bs = (e) => (r) => Fs({
  theme: r,
  pseudos: ia,
  configs: sa
})(e);
function Ls(e, r) {
  if (Array.isArray(e))
    return e;
  if (Vr(e))
    return r(e);
  if (e != null)
    return [e];
}
function zs(e, r) {
  for (let n = r + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function Ws(e) {
  const r = e.__breakpoints;
  return function(a, s, u, h) {
    var v, b;
    if (!r)
      return;
    const _ = {}, y = Ls(u, r.toArrayValue);
    if (!y)
      return _;
    const R = y.length, x = R === 1, P = !!a.parts;
    for (let N = 0; N < R; N++) {
      const C = r.details[N], $ = r.details[zs(y, N)], M = Cs(C.minW, $ == null ? void 0 : $._minW), O = Wr((v = a[s]) == null ? void 0 : v[y[N]], h);
      if (O) {
        if (P) {
          (b = a.parts) == null || b.forEach((L) => {
            wr(_, {
              [L]: x ? O[L] : { [M]: O[L] }
            });
          });
          continue;
        }
        if (!P) {
          x ? wr(_, O) : _[M] = O;
          continue;
        }
        _[M] = O;
      }
    }
    return _;
  };
}
function Vs(e) {
  return (r) => {
    var n;
    const { variant: a, size: s, theme: u } = r, h = Ws(u);
    return wr(
      {},
      Wr((n = e.baseStyle) != null ? n : {}, r),
      h(e, "sizes", s, r),
      h(e, "variants", a, r)
    );
  };
}
function po(e) {
  return Os(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function Ys(e, r) {
  const n = {};
  return Object.keys(e).forEach((a) => {
    r.includes(a) || (n[a] = e[a]);
  }), n;
}
function Us(e, r, n, a) {
  const s = typeof r == "string" ? r.split(".") : [r];
  for (a = 0; a < s.length && e; a += 1)
    e = e[s[a]];
  return e === void 0 ? n : e;
}
var Gs = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (a, s, u, h) => {
    if (typeof a > "u")
      return e(a, s, u);
    r.has(a) || r.set(a, /* @__PURE__ */ new Map());
    const v = r.get(a);
    if (v.has(s))
      return v.get(s);
    const b = e(a, s, u, h);
    return v.set(s, b), b;
  };
}, qs = Gs(Us);
function ho(e, r) {
  const n = {};
  return Object.keys(e).forEach((a) => {
    const s = e[a];
    r(s, a, e) && (n[a] = s);
  }), n;
}
var mo = (e) => ho(e, (r) => r != null);
function Hs(e) {
  return typeof e == "function";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function Xs(e, ...r) {
  return Hs(e) ? e(...r) : e;
}
var Ks = typeof Element < "u", Js = typeof Map == "function", Zs = typeof Set == "function", Qs = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function ln(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var n, a, s;
    if (Array.isArray(e)) {
      if (n = e.length, n != r.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (!ln(e[a], r[a]))
          return !1;
      return !0;
    }
    var u;
    if (Js && e instanceof Map && r instanceof Map) {
      if (e.size !== r.size)
        return !1;
      for (u = e.entries(); !(a = u.next()).done; )
        if (!r.has(a.value[0]))
          return !1;
      for (u = e.entries(); !(a = u.next()).done; )
        if (!ln(a.value[1], r.get(a.value[0])))
          return !1;
      return !0;
    }
    if (Zs && e instanceof Set && r instanceof Set) {
      if (e.size !== r.size)
        return !1;
      for (u = e.entries(); !(a = u.next()).done; )
        if (!r.has(a.value[0]))
          return !1;
      return !0;
    }
    if (Qs && ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
      if (n = e.length, n != r.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (e[a] !== r[a])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof r.valueOf == "function")
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof r.toString == "function")
      return e.toString() === r.toString();
    if (s = Object.keys(e), n = s.length, n !== Object.keys(r).length)
      return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, s[a]))
        return !1;
    if (Ks && e instanceof Element)
      return !1;
    for (a = n; a-- !== 0; )
      if (!((s[a] === "_owner" || s[a] === "__v" || s[a] === "__o") && e.$$typeof) && !ln(e[s[a]], r[s[a]]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var ec = function(r, n) {
  try {
    return ln(r, n);
  } catch (a) {
    if ((a.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw a;
  }
};
function rc(e, r = {}) {
  var n;
  const { styleConfig: a, ...s } = r, { theme: u, colorMode: h } = Ui(), v = e ? qs(u, `components.${e}`) : void 0, b = a || v, _ = wr(
    { theme: u, colorMode: h },
    (n = b == null ? void 0 : b.defaultProps) != null ? n : {},
    mo(Ys(s, ["children"]))
  ), y = Z.useRef({});
  if (b) {
    const x = Vs(b)(_);
    ec(y.current, x) || (y.current = x);
  }
  return y.current;
}
function vo(e, r = {}) {
  return rc(e, r);
}
var tc = /* @__PURE__ */ new Set([
  ...Ps,
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
]), nc = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function ac(e) {
  return nc.has(e) || !tc.has(e);
}
function oc(e, ...r) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const a of r)
    if (a != null)
      for (const s in a)
        Object.prototype.hasOwnProperty.call(a, s) && (s in n && delete n[s], n[s] = a[s]);
  return n;
}
var ic = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sc = /* @__PURE__ */ Ja(
  function(e) {
    return ic.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), cc = sc, uc = function(r) {
  return r !== "theme";
}, za = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? cc : uc;
}, Wa = function(r, n, a) {
  var s;
  if (n) {
    var u = n.shouldForwardProp;
    s = r.__emotion_forwardProp && u ? function(h) {
      return r.__emotion_forwardProp(h) && u(h);
    } : u;
  }
  return typeof s != "function" && a && (s = r.__emotion_forwardProp), s;
}, Va = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, lc = function(r) {
  var n = r.cache, a = r.serialized, s = r.isStringTag;
  return _n(n, a, s), na(function() {
    return Sn(n, a, s);
  }), null;
}, fc = function e(r, n) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var a = r.__emotion_real === r, s = a && r.__emotion_base || r, u, h;
  n !== void 0 && (u = n.label, h = n.target);
  var v = Wa(r, n, a), b = v || za(s), _ = !b("as");
  return function() {
    var y = arguments, R = a && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (u !== void 0 && R.push("label:" + u + ";"), y[0] == null || y[0].raw === void 0)
      R.push.apply(R, y);
    else {
      process.env.NODE_ENV !== "production" && y[0][0] === void 0 && console.error(Va), R.push(y[0][0]);
      for (var x = y.length, P = 1; P < x; P++)
        process.env.NODE_ENV !== "production" && y[0][P] === void 0 && console.error(Va), R.push(y[P], y[0][P]);
    }
    var N = En(function(C, $, M) {
      var O = _ && C.as || s, L = "", Y = [], S = C;
      if (C.theme == null) {
        S = {};
        for (var H in C)
          S[H] = C[H];
        S.theme = Z.useContext(dt);
      }
      typeof C.className == "string" ? L = ra($.registered, Y, C.className) : C.className != null && (L = C.className + " ");
      var U = ut(R.concat(Y), $.registered, S);
      L += $.key + "-" + U.name, h !== void 0 && (L += " " + h);
      var Fe = _ && v === void 0 ? za(O) : b, $e = {};
      for (var je in C)
        _ && je === "as" || // $FlowFixMe
        Fe(je) && ($e[je] = C[je]);
      return $e.className = L, $e.ref = M, /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement(lc, {
        cache: $,
        serialized: U,
        isStringTag: typeof O == "string"
      }), /* @__PURE__ */ Z.createElement(O, $e));
    });
    return N.displayName = u !== void 0 ? u : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", N.defaultProps = r.defaultProps, N.__emotion_real = N, N.__emotion_base = s, N.__emotion_styles = R, N.__emotion_forwardProp = v, Object.defineProperty(N, "toString", {
      value: function() {
        return h === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + h;
      }
    }), N.withComponent = function(C, $) {
      return e(C, zn({}, n, $, {
        shouldForwardProp: Wa(N, $, !0)
      })).apply(void 0, R);
    }, N;
  };
}, dc = [
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
], vn = fc.bind();
dc.forEach(function(e) {
  vn[e] = vn(e);
});
var Ya, pc = (Ya = vn.default) != null ? Ya : vn, hc = ({ baseStyle: e }) => (r) => {
  const { theme: n, css: a, __css: s, sx: u, ...h } = r, v = ho(h, (R, x) => Is(x)), b = Xs(e, r), _ = oc(
    {},
    s,
    b,
    mo(v),
    u
  ), y = Bs(_)(r.theme);
  return a ? [y, a] : y;
};
function Dn(e, r) {
  const { baseStyle: n, ...a } = r ?? {};
  a.shouldForwardProp || (a.shouldForwardProp = ac);
  const s = hc({ baseStyle: n }), u = pc(
    e,
    a
  )(s);
  return Fn.forwardRef(function(b, _) {
    const { colorMode: y, forced: R } = so();
    return Fn.createElement(u, {
      ref: _,
      "data-theme": R ? y : void 0,
      ...b
    });
  });
}
function mc() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Dn, {
    apply(r, n, a) {
      return Dn(...a);
    },
    get(r, n) {
      return e.has(n) || e.set(n, Dn(n)), e.get(n);
    }
  });
}
var lt = mc();
function go(e) {
  return Z.forwardRef(e);
}
var vc = Mi({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), yo = go((e, r) => {
  const n = vo("Spinner", e), {
    label: a = "Loading...",
    thickness: s = "2px",
    speed: u = "0.45s",
    emptyColor: h = "transparent",
    className: v,
    ...b
  } = po(e), _ = wn("chakra-spinner", v), y = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: s,
    borderBottomColor: h,
    borderLeftColor: h,
    animation: `${vc} ${u} linear infinite`,
    ...n
  };
  return /* @__PURE__ */ Re.jsx(
    lt.div,
    {
      ref: r,
      __css: y,
      className: _,
      ...b,
      children: a && /* @__PURE__ */ Re.jsx(lt.span, { srOnly: !0, children: a })
    }
  );
});
yo.displayName = "Spinner";
function gc(e, r) {
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
function yc(...e) {
  return (r) => {
    e.forEach((n) => {
      gc(n, r);
    });
  };
}
function bc(...e) {
  return Z.useMemo(() => yc(...e), e);
}
var [Ec, _c] = Vi({
  strict: !1,
  name: "ButtonGroupContext"
});
function Sc(e) {
  const [r, n] = Z.useState(!e);
  return { ref: Z.useCallback((u) => {
    u && n(u.tagName === "BUTTON");
  }, []), type: r ? "button" : void 0 };
}
function Hn(e) {
  const { children: r, className: n, ...a } = e, s = Z.isValidElement(r) ? Z.cloneElement(r, {
    "aria-hidden": !0,
    focusable: !1
  }) : r, u = wn("chakra-button__icon", n);
  return /* @__PURE__ */ Re.jsx(
    lt.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...a,
      className: u,
      children: s
    }
  );
}
Hn.displayName = "ButtonIcon";
function Xn(e) {
  const {
    label: r,
    placement: n,
    spacing: a = "0.5rem",
    children: s = /* @__PURE__ */ Re.jsx(yo, { color: "currentColor", width: "1em", height: "1em" }),
    className: u,
    __css: h,
    ...v
  } = e, b = wn("chakra-button__spinner", u), _ = n === "start" ? "marginEnd" : "marginStart", y = Z.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      position: r ? "relative" : "absolute",
      [_]: r ? a : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...h
    }),
    [h, r, _, a]
  );
  return /* @__PURE__ */ Re.jsx(lt.div, { className: b, ...v, __css: y, children: s });
}
Xn.displayName = "ButtonSpinner";
var bo = go((e, r) => {
  const n = _c(), a = vo("Button", { ...n, ...e }), {
    isDisabled: s = n == null ? void 0 : n.isDisabled,
    isLoading: u,
    isActive: h,
    children: v,
    leftIcon: b,
    rightIcon: _,
    loadingText: y,
    iconSpacing: R = "0.5rem",
    type: x,
    spinner: P,
    spinnerPlacement: N = "start",
    className: C,
    as: $,
    ...M
  } = po(e), O = Z.useMemo(() => {
    const H = { ...a == null ? void 0 : a._focus, zIndex: 1 };
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
      ...!!n && { _focus: H }
    };
  }, [a, n]), { ref: L, type: Y } = Sc($), S = { rightIcon: _, leftIcon: b, iconSpacing: R, children: v };
  return /* @__PURE__ */ Re.jsxs(
    lt.button,
    {
      ref: bc(r, L),
      as: $,
      type: x ?? Y,
      "data-active": ja(h),
      "data-loading": ja(u),
      __css: O,
      className: wn("chakra-button", C),
      ...M,
      disabled: s || u,
      children: [
        u && N === "start" && /* @__PURE__ */ Re.jsx(
          Xn,
          {
            className: "chakra-button__spinner--start",
            label: y,
            placement: "start",
            spacing: R,
            children: P
          }
        ),
        u ? y || /* @__PURE__ */ Re.jsx(lt.span, { opacity: 0, children: /* @__PURE__ */ Re.jsx(Ua, { ...S }) }) : /* @__PURE__ */ Re.jsx(Ua, { ...S }),
        u && N === "end" && /* @__PURE__ */ Re.jsx(
          Xn,
          {
            className: "chakra-button__spinner--end",
            label: y,
            placement: "end",
            spacing: R,
            children: P
          }
        )
      ]
    }
  );
});
bo.displayName = "Button";
function Ua(e) {
  const { leftIcon: r, rightIcon: n, children: a, iconSpacing: s } = e;
  return /* @__PURE__ */ Re.jsxs(Re.Fragment, { children: [
    r && /* @__PURE__ */ Re.jsx(Hn, { marginEnd: s, children: r }),
    a,
    n && /* @__PURE__ */ Re.jsx(Hn, { marginStart: s, children: n })
  ] });
}
function wc({ label: e }) {
  return /* @__PURE__ */ Re.jsx(bo, { children: /* @__PURE__ */ Re.jsx(Io, { text: e }) });
}
export {
  wc as Button,
  Io as Label
};
