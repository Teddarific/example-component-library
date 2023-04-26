function _mergeNamespaces(n2, m2) {
  for (var i2 = 0; i2 < m2.length; i2++) {
    const e2 = m2[i2];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports() {
    return jsxRuntimeExports;
  },
  set exports(v2) {
    jsxRuntimeExports = v2;
  }
};
var reactJsxRuntime_production_min = {};
var reactExports = {};
var react = {
  get exports() {
    return reactExports;
  },
  set exports(v2) {
    reactExports = v2;
  }
};
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$8 = Symbol.for("react.element"), n$8 = Symbol.for("react.portal"), p$8 = Symbol.for("react.fragment"), q$6 = Symbol.for("react.strict_mode"), r$6 = Symbol.for("react.profiler"), t$6 = Symbol.for("react.provider"), u$6 = Symbol.for("react.context"), v$6 = Symbol.for("react.forward_ref"), w$6 = Symbol.for("react.suspense"), x$4 = Symbol.for("react.memo"), y$5 = Symbol.for("react.lazy"), z$5 = Symbol.iterator;
function A$6(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = z$5 && a2[z$5] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var B$4 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$4 = Object.assign, D$5 = {};
function E$4(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$5;
  this.updater = e2 || B$4;
}
E$4.prototype.isReactComponent = {};
E$4.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$4.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$6() {
}
F$6.prototype = E$4.prototype;
function G$3(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$5;
  this.updater = e2 || B$4;
}
var H$5 = G$3.prototype = new F$6();
H$5.constructor = G$3;
C$4(H$5, E$4.prototype);
H$5.isPureReactComponent = true;
var I$6 = Array.isArray, J$2 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$5 = { key: true, ref: true, __self: true, __source: true };
function M$2(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      J$2.call(b2, d2) && !L$5.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d2 in g2 = a2.defaultProps, g2)
      void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$8, type: a2, key: k2, ref: h2, props: c2, _owner: K$2.current };
}
function N$3(a2, b2) {
  return { $$typeof: l$8, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$3(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$8;
}
function escape$1(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$3 = /\/+/g;
function Q$2(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape$1("" + a2.key) : b2.toString(36);
}
function R$2(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2)
    a2 = null;
  var h2 = false;
  if (null === a2)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$8:
          case n$8:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$2(h2, 0) : d2, I$6(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$3, "$&/") + "/"), R$2(c2, b2, e2, "", function(a3) {
      return a3;
    })) : null != c2 && (O$3(c2) && (c2 = N$3(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$3, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$6(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q$2(k2, g2);
      h2 += R$2(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$6(a2), "function" === typeof f2)
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$2(k2, b2, e2, f2, c2);
  else if ("object" === k2)
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$4(a2, b2, e2) {
  if (null == a2)
    return a2;
  var d2 = [], c2 = 0;
  R$2(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$4(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a2._status || -1 === a2._status)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (0 === a2._status || -1 === a2._status)
        a2._status = 2, a2._result = b3;
    });
    -1 === a2._status && (a2._status = 0, a2._result = b2);
  }
  if (1 === a2._status)
    return a2._result.default;
  throw a2._result;
}
var U$4 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$4, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
react_production_min.Children = { map: S$4, forEach: function(a2, b2, e2) {
  S$4(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$4(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$4(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$3(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$4;
react_production_min.Fragment = p$8;
react_production_min.Profiler = r$6;
react_production_min.PureComponent = G$3;
react_production_min.StrictMode = q$6;
react_production_min.Suspense = w$6;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (null === a2 || void 0 === a2)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$4({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      J$2.call(b2, f2) && !L$5.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$8, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$6, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$6, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a2) {
  var b2 = M$2.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$6, render: a2 };
};
react_production_min.isValidElement = O$3;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$5, _payload: { _status: -1, _result: a2 }, _init: T$4 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$4, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$2.transition;
  V$2.transition = {};
  try {
    a2();
  } finally {
    V$2.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a2, b2) {
  return U$4.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$4.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$4.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$4.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$4.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$4.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$4.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$4.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$4.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$4.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$4.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$4.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$4.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$4.current.useTransition();
};
react_production_min.version = "18.2.0";
(function(module) {
  {
    module.exports = react_production_min;
  }
})(react);
const React$j = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const React$k = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React$j
}, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$7 = reactExports, k$4 = Symbol.for("react.element"), l$7 = Symbol.for("react.fragment"), m$6 = Object.prototype.hasOwnProperty, n$7 = f$7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$7 = { key: true, ref: true, __self: true, __source: true };
function q$5(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (h2 = a2.ref);
  for (b2 in a2)
    m$6.call(a2, b2) && !p$7.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: k$4, type: c2, key: e2, ref: h2, props: d2, _owner: n$7.current };
}
reactJsxRuntime_production_min.Fragment = l$7;
reactJsxRuntime_production_min.jsx = q$5;
reactJsxRuntime_production_min.jsxs = q$5;
(function(module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
})(jsxRuntime);
const Fragment = jsxRuntimeExports.Fragment;
const jsx = jsxRuntimeExports.jsx;
const jsxs = jsxRuntimeExports.jsxs;
var classnamesExports = {};
var classnames = {
  get exports() {
    return classnamesExports;
  },
  set exports(v2) {
    classnamesExports = v2;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var arg = arguments[i2];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
const classNames = classnamesExports;
function twJoin() {
  var index2 = 0;
  var argument;
  var resolvedValue;
  var string = "";
  while (index2 < arguments.length) {
    if (argument = arguments[index2++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === "string") {
    return mix;
  }
  var resolvedValue;
  var string = "";
  for (var k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if (resolvedValue = toValue(mix[k2])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
  var classMap = createClassMap(config);
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId) {
    return config.conflictingClassGroups[classGroupId] || [];
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  var _classPartObject$vali;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_classPartObject$vali = classPartObject.validators.find(function(_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })) == null ? void 0 : _classPartObject$vali.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  var theme = config.theme, prefix = config.prefix;
  var classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function(_ref2) {
    var classGroupId = _ref2[0], classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function(classDefinition) {
    if (typeof classDefinition === "string") {
      var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(function(_ref3) {
      var key = _ref3[0], classGroup2 = _ref3[1];
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(function(_ref4) {
    var classGroupId = _ref4[0], classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function(classDefinition) {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
          var key = _ref5[0], value = _ref5[1];
          return [prefix + key, value];
        }));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get2() {
        return void 0;
      },
      set: function set() {
      }
    };
  }
  var cacheSize = 0;
  var cache2 = /* @__PURE__ */ new Map();
  var previousCache = /* @__PURE__ */ new Map();
  function update(key, value) {
    cache2.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache2;
      cache2 = /* @__PURE__ */ new Map();
    }
  }
  return {
    get: function get2(key) {
      var value = cache2.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache2.has(key)) {
        cache2.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
var IMPORTANT_MODIFIER = "!";
function createSplitModifiers(config) {
  var separator = config.separator || ":";
  return function splitModifiers(className) {
    var bracketDepth = 0;
    var modifiers = [];
    var modifierStart = 0;
    for (var index2 = 0; index2 < className.length; index2++) {
      var _char = className[index2];
      if (bracketDepth === 0 && _char === separator[0]) {
        if (separator.length === 1 || className.slice(index2, index2 + separator.length) === separator) {
          modifiers.push(className.slice(modifierStart, index2));
          modifierStart = index2 + separator.length;
        }
      }
      if (_char === "[") {
        bracketDepth++;
      } else if (_char === "]") {
        bracketDepth--;
      }
    }
    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName
    };
  };
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function(modifier) {
    var isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return _extends$3({
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config)
  }, createClassUtils(config));
}
var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  var classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function(originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName;
    var classGroupId = getClassGroupId(baseClassName);
    if (!classGroupId) {
      return {
        isTailwindClass: false,
        originalClassName
      };
    }
    var variantModifier = sortModifiers(modifiers).join(":");
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName
    };
  }).reverse().filter(function(parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }
    var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId;
    var classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId).forEach(function(group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function(parsed) {
    return parsed.originalClassName;
  }).join(" ");
}
function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }
  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0], restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function(previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  var themeGetter = function themeGetter2(theme) {
    return theme[key] || [];
  };
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/;
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, "size", isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, "url", isUrl);
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isNumber(value) {
  return !Number.isNaN(Number(value));
}
function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, "number", isIntegerOnly);
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isAny() {
  return true;
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith("url(");
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function getDefaultConfig() {
  var colors = fromTheme("colors");
  var spacing = fromTheme("spacing");
  var blur = fromTheme("blur");
  var brightness = fromTheme("brightness");
  var borderColor = fromTheme("borderColor");
  var borderRadius = fromTheme("borderRadius");
  var borderSpacing = fromTheme("borderSpacing");
  var borderWidth = fromTheme("borderWidth");
  var contrast = fromTheme("contrast");
  var grayscale = fromTheme("grayscale");
  var hueRotate = fromTheme("hueRotate");
  var invert = fromTheme("invert");
  var gap = fromTheme("gap");
  var gradientColorStops = fromTheme("gradientColorStops");
  var inset = fromTheme("inset");
  var margin = fromTheme("margin");
  var opacity = fromTheme("opacity");
  var padding = fromTheme("padding");
  var saturate = fromTheme("saturate");
  var scale = fromTheme("scale");
  var sepia = fromTheme("sepia");
  var skew = fromTheme("skew");
  var space = fromTheme("space");
  var translate = fromTheme("translate");
  var getOverscroll = function getOverscroll2() {
    return ["auto", "contain", "none"];
  };
  var getOverflow = function getOverflow2() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  };
  var getSpacingWithAuto = function getSpacingWithAuto2() {
    return ["auto", spacing];
  };
  var getLengthWithEmpty = function getLengthWithEmpty2() {
    return ["", isLength];
  };
  var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary2() {
    return ["auto", isNumber, isArbitraryValue];
  };
  var getPositions = function getPositions2() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  };
  var getLineStyles = function getLineStyles2() {
    return ["solid", "dashed", "dotted", "double", "none"];
  };
  var getBlendModes = function getBlendModes2() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  };
  var getAlign = function getAlign2() {
    return ["start", "end", "center", "between", "around", "evenly"];
  };
  var getZeroAndEmpty = function getZeroAndEmpty2() {
    return ["", "0", isArbitraryValue];
  };
  var getBreaks = function getBreaks2() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  };
  var getNumber = function getNumber2() {
    return [isNumber, isArbitraryNumber];
  };
  var getNumberAndArbitrary = function getNumberAndArbitrary2() {
    return [isNumber, isArbitraryValue];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ["none", "", isTshirtSize, isArbitraryLength],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryLength],
      borderSpacing: [spacing],
      borderWidth: getLengthWithEmpty(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: [spacing],
      gradientColorStops: [colors],
      inset: getSpacingWithAuto(),
      margin: getSpacingWithAuto(),
      opacity: getNumber(),
      padding: [spacing],
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: [spacing],
      translate: [spacing]
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [spacing]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: getAlign()
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: [].concat(getAlign(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(getAlign(), ["baseline", "stretch"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryLength]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [spacing, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", isLength]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [spacing, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryLength]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(getLineStyles(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: [spacing]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryLength]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ["normal", "words", "all", "keep"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryUrl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(getLineStyles(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(getLineStyles())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmpty()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Beldn Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": [spacing]
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": [spacing]
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": [spacing]
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": [spacing]
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": [spacing]
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": [spacing]
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": [spacing]
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": [spacing]
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": [spacing]
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": [spacing]
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": [spacing]
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": [spacing]
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": [spacing]
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": [spacing]
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    }
  };
}
function mergeConfigs$1(baseConfig, configExtension) {
  for (var key in configExtension) {
    mergePropertyRecursively(baseConfig, key, configExtension[key]);
  }
  return baseConfig;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var overrideTypes = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function mergePropertyRecursively(baseObject, mergeKey, mergeValue) {
  if (!hasOwnProperty.call(baseObject, mergeKey) || overrideTypes.has(typeof mergeValue) || mergeValue === null) {
    baseObject[mergeKey] = mergeValue;
    return;
  }
  if (Array.isArray(mergeValue) && Array.isArray(baseObject[mergeKey])) {
    baseObject[mergeKey] = baseObject[mergeKey].concat(mergeValue);
    return;
  }
  if (typeof mergeValue === "object" && typeof baseObject[mergeKey] === "object") {
    if (baseObject[mergeKey] === null) {
      baseObject[mergeKey] = mergeValue;
      return;
    }
    for (var nextKey in mergeValue) {
      mergePropertyRecursively(baseObject[mergeKey], nextKey, mergeValue[nextKey]);
    }
  }
}
function extendTailwindMerge(configExtension) {
  for (var _len = arguments.length, createConfig = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    createConfig[_key - 1] = arguments[_key];
  }
  return typeof configExtension === "function" ? createTailwindMerge.apply(void 0, [getDefaultConfig, configExtension].concat(createConfig)) : createTailwindMerge.apply(void 0, [function() {
    return mergeConfigs$1(getDefaultConfig(), configExtension);
  }].concat(createConfig));
}
const mergeClasses = extendTailwindMerge({
  prefix: "tw-"
});
const Button = reactExports.forwardRef((props, ref) => {
  const { onClick, className, children, ...remaining } = props;
  const buttonStyle = mergeClasses(
    "tw-text-primary-text tw-bg-primary hover:tw-bg-primary-hover",
    "tw-py-1 tw-px-4 tw-cursor-pointer tw-font-bold tw-shadow-none tw-rounded-md tw-tracking-[1px] tw-transition tw-select-none",
    props.className
  );
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: buttonStyle,
      type: "button",
      ref,
      onClick: props.onClick,
      ...remaining,
      children: props.children
    }
  );
});
const LinkButton = reactExports.forwardRef((props, ref) => {
  const { href, className, children, ...remaining } = props;
  const buttonStyle = mergeClasses(
    "tw-text-primary-text tw-bg-primary hover:tw-bg-primary-hover",
    "tw-py-1 tw-px-4 tw-cursor-pointer tw-font-bold tw-shadow-none tw-rounded-md tw-tracking-[1px] tw-transition tw-select-none",
    props.className
  );
  return /* @__PURE__ */ jsx(
    "a",
    {
      className: buttonStyle,
      ref,
      href: props.href,
      ...remaining,
      children: props.children
    }
  );
});
const FormButton = (props) => {
  const buttonStyle = classNames(
    "tw-text-primary-text tw-bg-primary hover:tw-bg-primary-hover",
    "tw-py-1 tw-px-4 tw-cursor-pointer tw-font-bold tw-shadow-none tw-rounded-md tw-tracking-[1px] tw-transition tw-select-none",
    props.className
  );
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: buttonStyle,
      type: "submit",
      children: props.children
    }
  );
};
const BackButton = (props) => {
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: classNames("tw-cursor-pointer tw-select-none tw-text-sm tw-font-[500] hover:tw-text-slate-600 tw-w-fit", props.className), onClick, children: [
    String.fromCharCode(8592),
    " Back"
  ] });
};
const NavButton = (props) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classNames("tw-bg-primary tw-text-white tw-rounded-md tw-block tw-px-4 tw-py-2 tw-text-sm tw-cursor-pointer tw-font-bold tw-text-center tw-transition-colors hover:tw-bg-primary-hover tw-border tw-border-solid tw-border-primary-hover", props.className),
      to: props.to,
      children: props.children
    }
  );
};
const DivButton = (props) => {
  return /* @__PURE__ */ jsx("div", { className: props.className, tabIndex: 0, onClick: props.onClick, onKeyDown: (event) => {
    if (event.key === "Enter")
      props.onClick();
  }, children: props.children });
};
const React$i = reactExports;
function ArrowPathIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$i.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$i.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$i.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
  }));
}
const ForwardRef$i = React$i.forwardRef(ArrowPathIcon$1);
var ArrowPathIcon_1 = ForwardRef$i;
const React$h = reactExports;
function ArrowRightOnRectangleIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$h.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$h.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$h.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
  }));
}
const ForwardRef$h = React$h.forwardRef(ArrowRightOnRectangleIcon$1);
var ArrowRightOnRectangleIcon_1 = ForwardRef$h;
const React$g = reactExports;
function ArrowRightIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$g.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$g.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$g.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
  }));
}
const ForwardRef$g = React$g.forwardRef(ArrowRightIcon$1);
var ArrowRightIcon_1 = ForwardRef$g;
const React$f = reactExports;
function ArrowTopRightOnSquareIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$f.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$f.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$f.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
  }));
}
const ForwardRef$f = React$f.forwardRef(ArrowTopRightOnSquareIcon$1);
var ArrowTopRightOnSquareIcon_1 = ForwardRef$f;
const React$e = reactExports;
function BellIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$e.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$e.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$e.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
  }));
}
const ForwardRef$e = React$e.forwardRef(BellIcon$1);
var BellIcon_1 = ForwardRef$e;
const React$d = reactExports;
function CheckIcon$3({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$d.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$d.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 12.75l6 6 9-13.5"
  }));
}
const ForwardRef$d = React$d.forwardRef(CheckIcon$3);
var CheckIcon_1$1 = ForwardRef$d;
const React$c = reactExports;
function ChevronRightIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$c.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$c.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$c.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
  }));
}
const ForwardRef$c = React$c.forwardRef(ChevronRightIcon$1);
var ChevronRightIcon_1 = ForwardRef$c;
const React$b = reactExports;
function CircleStackIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$b.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
  }));
}
const ForwardRef$b = React$b.forwardRef(CircleStackIcon$1);
var CircleStackIcon_1 = ForwardRef$b;
const React$a = reactExports;
function CubeIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$a.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$a.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
  }));
}
const ForwardRef$a = React$a.forwardRef(CubeIcon$1);
var CubeIcon_1 = ForwardRef$a;
const React$9 = reactExports;
function EyeSlashIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$9.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$9.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$9.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
  }));
}
const ForwardRef$9 = React$9.forwardRef(EyeSlashIcon$1);
var EyeSlashIcon_1 = ForwardRef$9;
const React$8 = reactExports;
function EyeIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$8.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$8.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$8.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
  }), /* @__PURE__ */ React$8.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}
const ForwardRef$8 = React$8.forwardRef(EyeIcon$1);
var EyeIcon_1 = ForwardRef$8;
const React$7 = reactExports;
function HomeIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$7.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$7.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$7.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
  }));
}
const ForwardRef$7 = React$7.forwardRef(HomeIcon$1);
var HomeIcon_1 = ForwardRef$7;
const React$6 = reactExports;
function KeyIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$6.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$6.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$6.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
  }));
}
const ForwardRef$6 = React$6.forwardRef(KeyIcon$1);
var KeyIcon_1 = ForwardRef$6;
const React$5 = reactExports;
function MapIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$5.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$5.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$5.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
  }));
}
const ForwardRef$5 = React$5.forwardRef(MapIcon$1);
var MapIcon_1 = ForwardRef$5;
const React$4 = reactExports;
function Square2StackIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$4.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
  }));
}
const ForwardRef$4 = React$4.forwardRef(Square2StackIcon$1);
var Square2StackIcon_1 = ForwardRef$4;
const React$3 = reactExports;
function UserPlusIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
  }));
}
const ForwardRef$3 = React$3.forwardRef(UserPlusIcon$1);
var UserPlusIcon_1 = ForwardRef$3;
const React$2 = reactExports;
function XMarkIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
const ForwardRef$2 = React$2.forwardRef(XMarkIcon$1);
var XMarkIcon_1 = ForwardRef$2;
var ArrowPathIcon = ArrowPathIcon_1;
var ArrowRightOnRectangleIcon = ArrowRightOnRectangleIcon_1;
var ArrowRightIcon = ArrowRightIcon_1;
var ArrowTopRightOnSquareIcon = ArrowTopRightOnSquareIcon_1;
var BellIcon = BellIcon_1;
var CheckIcon$2 = CheckIcon_1$1;
var ChevronRightIcon = ChevronRightIcon_1;
var CircleStackIcon = CircleStackIcon_1;
var CubeIcon = CubeIcon_1;
var EyeSlashIcon = EyeSlashIcon_1;
var EyeIcon = EyeIcon_1;
var HomeIcon = HomeIcon_1;
var KeyIcon = KeyIcon_1;
var MapIcon = MapIcon_1;
var Square2StackIcon = Square2StackIcon_1;
var UserPlusIcon = UserPlusIcon_1;
var XMarkIcon = XMarkIcon_1;
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return reactExports.useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ reactExports.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = reactExports.useMemo(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
        value
      }, children);
    }
    function useContext(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = reactExports.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return reactExports.useMemo(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = reactExports.useCallback((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = reactExports.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = reactExports.useRef(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = reactExports.useRef({
    value,
    previous: value
  });
  return reactExports.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}
const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size, setSize] = reactExports.useState(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size;
}
var reactDomExports = {};
var reactDom = {
  get exports() {
    return reactDomExports;
  },
  set exports(v2) {
    reactDomExports = v2;
  }
};
var reactDom_production_min = {};
var schedulerExports = {};
var scheduler = {
  get exports() {
    return schedulerExports;
  },
  set exports(v2) {
    schedulerExports = v2;
  }
};
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a2) {
    return 0 === a2.length ? null : a2[0];
  }
  function k2(a2) {
    if (0 === a2.length)
      return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a:
        for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x = a2[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x, C2) ? (a2[d2] = x, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x, c2))
            a2[d2] = x, a2[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback)
        k2(t2);
      else if (b2.startTime <= a2)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a2);
      }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
(function(module) {
  {
    module.exports = scheduler_production_min;
  }
})(scheduler);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$6(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    da.add(b2[a2]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function pa(a2, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function qa(a2, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function v$5(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$4 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$4[a2] = new v$5(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$4[b2] = new v$5(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$4[a2] = new v$5(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$4[a2] = new v$5(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$4[a2] = new v$5(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$4[a2] = new v$5(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$4[a2] = new v$5(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$4[a2] = new v$5(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$4[a2] = new v$5(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    ra,
    sa
  );
  z$4[b2] = new v$5(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$4[b2] = new v$5(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$4[b2] = new v$5(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$4[a2] = new v$5(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$4.xlinkHref = new v$5("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$4[a2] = new v$5(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta(a2, b2, c2, d2) {
  var e2 = z$4.hasOwnProperty(b2) ? z$4[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
    qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = Ja && a2[Ja] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var A$5 = Object.assign, La;
function Ma(a2) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
  return "\n" + La + a2;
}
var Na = false;
function Oa(a2, b2) {
  if (!a2 || Na)
    return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
}
function Pa(a2) {
  switch (a2.tag) {
    case 5:
      return Ma(a2.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa(a2.type, false), a2;
    case 11:
      return a2 = Oa(a2.type.render, false), a2;
    case 1:
      return a2 = Oa(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa(a2) {
  if (null == a2)
    return null;
  if ("function" === typeof a2)
    return a2.displayName || a2.name || null;
  if ("string" === typeof a2)
    return a2;
  switch (a2) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a2)
    switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
      case Ha:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Ra(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2)
        return b2.displayName || b2.name || null;
      if ("string" === typeof b2)
        return b2;
  }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2)
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return A$5({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a2, b2) {
  b2 = b2.checked;
  null != b2 && ta(a2, "checked", b2, false);
}
function bb(a2, b2) {
  ab(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a2.value || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function db(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function cb(a2, b2, c2) {
  if ("number" !== b2 || Xa(a2.ownerDocument) !== a2)
    null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(p$6(91));
  return A$5({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(p$6(92));
      if (eb(c2)) {
        if (1 < c2.length)
          throw Error(p$6(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d2 && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb, nb = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function ob(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b2] = pb[a2];
  });
});
function rb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
}
function sb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var tb = A$5({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a2, b2) {
  if (b2) {
    if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(p$6(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(p$6(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$6(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(p$6(62));
  }
}
function vb(a2, b2) {
  if (-1 === a2.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb)
      throw Error(p$6(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b2, c2) {
  if (Ib)
    return a2(b2, c2);
  Ib = true;
  try {
    return Gb(a2, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(p$6(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
  Ob = true;
  Pb = a2;
} };
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$6(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2)
    throw Error(p$6(188));
}
function Yb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Vb(a2);
    if (null === b2)
      throw Error(p$6(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Xb(e2), a2;
        if (f2 === d2)
          return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$6(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$6(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$6(190));
  }
  if (3 !== c2.tag)
    throw Error(p$6(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Zb(a2) {
  a2 = Yb(a2);
  return null !== a2 ? $b(a2) : null;
}
function $b(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2;
  for (a2 = a2.child; null !== a2; ) {
    var b2 = $b(a2);
    if (null !== b2)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$3 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a2) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
    } catch (b2) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a2) {
  a2 >>>= 0;
  return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2)
    return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else
    g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2)
    return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (0 !== b2)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function vc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2))
        e2[g2] = vc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function Ac(a2, b2, c2) {
  a2.pendingLanes |= b2;
  536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - oc(b2);
  a2[b2] = c2;
}
function Bc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C$3 = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a2, b2, c2, d2, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2)
    return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function Uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b2 = Wc(a2.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a2.blockedOn = b2;
          Ic(a2.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (null !== a2.blockedOn)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null === c2) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else
      return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a2, b2, c2) {
  Xc(a2) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b2(b3) {
    return ad(b3, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a2);
  null !== Mc && ad(Mc, a2);
  null !== Nc && ad(Nc, a2);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++)
    d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
    Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a2, b2, c2, d2) {
  var e2 = C$3, f2 = cd.transition;
  cd.transition = null;
  try {
    C$3 = 1, fd(a2, b2, c2, d2);
  } finally {
    C$3 = e2, cd.transition = f2;
  }
}
function gd(a2, b2, c2, d2) {
  var e2 = C$3, f2 = cd.transition;
  cd.transition = null;
  try {
    C$3 = 4, fd(a2, b2, c2, d2);
  } finally {
    C$3 = e2, cd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a2, b2, c2, d2);
    if (null === e2)
      hd(a2, b2, d2, id, c2), Sc(a2, d2);
    else if (Uc(e2, a2, b2, c2, d2))
      d2.stopPropagation();
    else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a2, b2, c2, d2);
        null === f2 && hd(a2, b2, d2, id, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else
      hd(a2, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a2, b2, c2, d2) {
  id = null;
  a2 = xb(d2);
  a2 = Wc(a2);
  if (null !== a2)
    if (b2 = Vb(a2), null === b2)
      a2 = null;
    else if (c2 = b2.tag, 13 === c2) {
      a2 = Wb(b2);
      if (null !== a2)
        return a2;
      a2 = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$5(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$5({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$5({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = A$5({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$5({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$5({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$5({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$5({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A$5({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$5({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$5({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$5({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$5({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$2 = ia && "CompositionEvent" in window, be$3 = null;
ia && "documentMode" in document && (be$3 = document.documentMode);
var ce$2 = ia && "TextEvent" in window && !be$3, de$2 = ia && (!ae$2 || be$3 && 8 < be$3 && 11 >= be$3), ee$1 = String.fromCharCode(32), fe$2 = false;
function ge$2(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$1(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie$2 = false;
function je$3(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he$1(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe$2 = true;
      return ee$1;
    case "textInput":
      return a2 = b2.data, a2 === ee$1 && fe$2 ? null : a2;
    default:
      return null;
  }
}
function ke$2(a2, b2) {
  if (ie$2)
    return "compositionend" === a2 || !ae$2 && ge$2(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie$2 = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$2 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le$2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me$2(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le$2[a2.type] : "textarea" === b2 ? true : false;
}
function ne$2(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe$2(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe$2 = null, qe$3 = null;
function re$3(a2) {
  se$1(a2, 0);
}
function te$1(a2) {
  var b2 = ue$1(a2);
  if (Wa(b2))
    return a2;
}
function ve$2(a2, b2) {
  if ("change" === a2)
    return b2;
}
var we$2 = false;
if (ia) {
  var xe$3;
  if (ia) {
    var ye$3 = "oninput" in document;
    if (!ye$3) {
      var ze$2 = document.createElement("div");
      ze$2.setAttribute("oninput", "return;");
      ye$3 = "function" === typeof ze$2.oninput;
    }
    xe$3 = ye$3;
  } else
    xe$3 = false;
  we$2 = xe$3 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$2() {
  pe$2 && (pe$2.detachEvent("onpropertychange", Be$3), qe$3 = pe$2 = null);
}
function Be$3(a2) {
  if ("value" === a2.propertyName && te$1(qe$3)) {
    var b2 = [];
    ne$2(b2, qe$3, a2, xb(a2));
    Jb(re$3, b2);
  }
}
function Ce$1(a2, b2, c2) {
  "focusin" === a2 ? (Ae$2(), pe$2 = b2, qe$3 = c2, pe$2.attachEvent("onpropertychange", Be$3)) : "focusout" === a2 && Ae$2();
}
function De$2(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
    return te$1(qe$3);
}
function Ee$3(a2, b2) {
  if ("click" === a2)
    return te$1(b2);
}
function Fe$1(a2, b2) {
  if ("input" === a2 || "change" === a2)
    return te$1(b2);
}
function Ge$2(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He$4 = "function" === typeof Object.is ? Object.is : Ge$2;
function Ie$2(a2, b2) {
  if (He$4(a2, b2))
    return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He$4(a2[e2], b2[e2]))
      return false;
  }
  return true;
}
function Je$2(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Ke$3(a2, b2) {
  var c2 = Je$2(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je$2(c2);
  }
}
function Le$1(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le$1(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$1() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Ne$3(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
function Oe$1(a2) {
  var b2 = Me$1(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le$1(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne$3(c2)) {
      if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke$3(c2, f2);
        var g2 = Ke$3(
          c2,
          d2
        );
        e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; )
      1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe$3 = ia && "documentMode" in document && 11 >= document.documentMode, Qe$2 = null, Re$3 = null, Se$3 = null, Te$2 = false;
function Ue$3(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te$2 || null == Qe$2 || Qe$2 !== Xa(d2) || (d2 = Qe$2, "selectionStart" in d2 && Ne$3(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$3 && Ie$2(Se$3, d2) || (Se$3 = d2, d2 = oe$2(Re$3, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe$2)));
}
function Ve$1(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var We$2 = { animationend: Ve$1("Animation", "AnimationEnd"), animationiteration: Ve$1("Animation", "AnimationIteration"), animationstart: Ve$1("Animation", "AnimationStart"), transitionend: Ve$1("Transition", "TransitionEnd") }, Xe$2 = {}, Ye$2 = {};
ia && (Ye$2 = document.createElement("div").style, "AnimationEvent" in window || (delete We$2.animationend.animation, delete We$2.animationiteration.animation, delete We$2.animationstart.animation), "TransitionEvent" in window || delete We$2.transitionend.transition);
function Ze$2(a2) {
  if (Xe$2[a2])
    return Xe$2[a2];
  if (!We$2[a2])
    return a2;
  var b2 = We$2[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Ye$2)
      return Xe$2[a2] = b2[c2];
  return a2;
}
var $e$2 = Ze$2("animationend"), af = Ze$2("animationiteration"), bf = Ze$2("animationstart"), cf = Ze$2("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b2) {
  df.set(a2, b2);
  fa(b2, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$2, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Ub(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se$1(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D$4(a2, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
}
function qf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a2, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
    });
    var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a2, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function hd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = Wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a2);
      if (void 0 !== h3) {
        var k3 = td, n2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$2:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x && (F2 = Kb(w2, x), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2)
              t2 = Td, F2 = "onPointerLeave", x = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue$1(k3);
            u2 = null == n2 ? h3 : ue$1(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x = vf(x), u2--;
                for (; w2--; ) {
                  if (t2 === x || null !== x && t2 === x.alternate)
                    break b;
                  t2 = vf(t2);
                  x = vf(x);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue$1(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve$2;
        else if (me$2(h3))
          if (we$2)
            na = Fe$1;
          else {
            na = De$2;
            var xa = Ce$1;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$3);
        if (na && (na = na(a2, d3))) {
          ne$2(g3, na, c2, e3);
          break a;
        }
        xa && xa(a2, h3, d3);
        "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue$1(d3) : window;
      switch (a2) {
        case "focusin":
          if (me$2(xa) || "true" === xa.contentEditable)
            Qe$2 = xa, Re$3 = d3, Se$3 = null;
          break;
        case "focusout":
          Se$3 = Re$3 = Qe$2 = null;
          break;
        case "mousedown":
          Te$2 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$2 = false;
          Ue$3(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe$3)
            break;
        case "keydown":
        case "keyup":
          Ue$3(g3, c2, e3);
      }
      var $a;
      if (ae$2)
        b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie$2 ? ge$2(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de$2 && "ko" !== c2.locale && (ie$2 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$2 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$2 = true)), xa = oe$2(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$1(c2), null !== $a && (ba.data = $a))));
      if ($a = ce$2 ? je$3(a2, c2) : ke$2(a2, c2))
        d3 = oe$2(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se$1(g3, b2);
  });
}
function tf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe$2(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function vf(a2) {
  if (null === a2)
    return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function wf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a2.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b2, c2) {
  b2 = zf(b2);
  if (zf(a2) !== b2 && c2)
    throw Error(p$6(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a2, b2) {
  return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && 8 === e2.nodeType)
      if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a2.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else
        "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2)
      break;
    if (8 === b2) {
      b2 = a2.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2)
        break;
      if ("/$" === b2)
        return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a2;
        b2--;
      } else
        "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b2 = a2[Of];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a2 = Mf(a2); null !== a2; ) {
          if (c2 = a2[Of])
            return c2;
          a2 = Mf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue$1(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2.stateNode;
  throw Error(p$6(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a2) {
  return { current: a2 };
}
function E$3(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$2(a2, b2) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b2;
}
var Vf = {}, H$4 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Vf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function $f() {
  E$3(Wf);
  E$3(H$4);
}
function ag(a2, b2, c2) {
  if (H$4.current !== Vf)
    throw Error(p$6(168));
  G$2(H$4, b2);
  G$2(Wf, c2);
}
function bg(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$6(108, Ra(a2) || "Unknown", e2));
  return A$5({}, c2, d2);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$4.current;
  G$2(H$4, a2);
  G$2(Wf, Wf.current);
  return true;
}
function dg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(p$6(169));
  c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E$3(Wf), E$3(H$4), G$2(H$4, a2)) : E$3(Wf);
  G$2(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a2) {
  null === eg ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a2 = 0, b2 = C$3;
    try {
      var c2 = eg;
      for (C$3 = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
    } finally {
      C$3 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a2, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b2;
}
function ug(a2, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d2 = rg;
  a2 = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a2;
  } else
    rg = 1 << f2 | c2 << e2 | d2, sg = a2;
}
function vg(a2) {
  null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$5 = false, zg = null;
function Ag(a2, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function Cg(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
}
function Eg(a2) {
  if (I$5) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a2, b2)) {
        if (Dg(a2))
          throw Error(p$6(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$5 = false, xg = a2);
      }
    } else {
      if (Dg(a2))
        throw Error(p$6(418));
      a2.flags = a2.flags & -4097 | 2;
      I$5 = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
    a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg)
    return false;
  if (!I$5)
    return Fg(a2), I$5 = true, false;
  var b2;
  (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a2))
      throw Hg(), Error(p$6(418));
    for (; b2; )
      Ag(a2, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2)
      throw Error(p$6(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; )
    a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$5 = false;
}
function Jg(a2) {
  null === zg ? zg = [a2] : zg.push(a2);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$5({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a2) {
  var b2 = Mg.current;
  E$3(Mg);
  a2._currentValue = b2;
}
function Sg(a2, b2, c2) {
  for (; null !== a2; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2)
      break;
    a2 = a2.return;
  }
}
function Tg(a2, b2) {
  Ng = a2;
  Pg = Og = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (Ug = true), a2.firstContext = null);
}
function Vg(a2) {
  var b2 = a2._currentValue;
  if (Pg !== a2)
    if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$6(308));
      Og = a2;
      Ng.dependencies = { lanes: 0, firstContext: a2 };
    } else
      Og = Og.next = a2;
  return b2;
}
var Wg = null;
function Xg(a2) {
  null === Wg ? Wg = [a2] : Wg.push(a2);
}
function Yg(a2, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return Zg(a2, d2);
}
function Zg(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; )
    a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var $g = false;
function ah(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function ch(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function dh(a2, b2, c2) {
  var d2 = a2.updateQueue;
  if (null === d2)
    return null;
  d2 = d2.shared;
  if (0 !== (K$1 & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return Zg(a2, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return Zg(a2, c2);
}
function eh(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
function fh(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function gh(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a2.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A$5({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g2;
    a2.lanes = g2;
    a2.memoizedState = q2;
  }
}
function ih(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(p$6(191, e2));
        e2.call(d2);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$5({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var nh = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = L$4(), e2 = lh(a2), f2 = ch(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a2, f2, e2);
  null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = L$4(), e2 = lh(a2), f2 = ch(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a2, f2, e2);
  null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = L$4(), d2 = lh(a2), e2 = ch(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = dh(a2, e2, d2);
  null !== b2 && (mh(b2, a2, d2, c2), eh(b2, a2, d2));
} };
function oh(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$2(c2, d2) || !Ie$2(e2, f2) : true;
}
function ph(a2, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H$4.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = nh;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function qh(a2, b2, c2, d2) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && nh.enqueueReplaceState(b2, b2.state, null);
}
function rh(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = jh;
  ah(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H$4.current, e2.context = Yf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a2, c2, e2, d2), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
}
function sh(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(p$6(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$6(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        b3 === jh && (b3 = e2.refs = {});
        null === a3 ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a2)
      throw Error(p$6(284));
    if (!c2._owner)
      throw Error(p$6(290, a2));
  }
  return a2;
}
function th(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$6(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function uh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function vh(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = wh(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = xh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya)
      return m2(a3, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = sh(a3, b3, c3), d3.return = a3, d3;
    d3 = yh(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = sh(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = zh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Ah(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function q2(a3, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
      return b3 = xh("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = yh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = sh(a3, null, b3), c3.return = a3, c3;
        case wa:
          return b3 = zh(b3, a3.mode, c3), b3.return = a3, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a3, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3))
        return b3 = Ah(b3, a3.mode, c3, null), b3.return = a3, b3;
      th(a3, b3);
    }
    return null;
  }
  function r2(a3, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a3,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3))
        return null !== e3 ? null : m2(a3, b3, c3, d3, null);
      th(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case wa:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3))
        return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
      th(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x = u2, u2 = null) : x = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x;
    }
    if (w2 === h3.length)
      return c2(e3, u2), I$5 && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$5 && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++)
      x = y2(u2, e3, w2, h3[w2], k3), null !== x && (a2 && null !== x.alternate && u2.delete(null === x.key ? w2 : x.key), g3 = f2(x, g3, w2), null === m3 ? l3 = x : m3.sibling = x, m3 = x);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$5 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3)
      throw Error(p$6(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(p$6(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x = m3, m3 = null) : x = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x);
        break;
      }
      a2 && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x;
    }
    if (n3.done)
      return c2(
        e3,
        m3
      ), I$5 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$5 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$5 && tg(e3, w2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = sh(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else
                b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Ah(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = sh(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = zh(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ha:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a3, d3, f3, h3);
      if (Ka(f3))
        return t2(a3, d3, f3, h3);
      th(a3, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = xh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a2) {
  if (a2 === Dh)
    throw Error(p$6(174));
  return a2;
}
function Ih(a2, b2) {
  G$2(Gh, b2);
  G$2(Fh, a2);
  G$2(Eh, Dh);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
  }
  E$3(Eh);
  G$2(Eh, b2);
}
function Jh() {
  E$3(Eh);
  E$3(Fh);
  E$3(Gh);
}
function Kh(a2) {
  Hh(Gh.current);
  var b2 = Hh(Eh.current);
  var c2 = lb(b2, a2.type);
  b2 !== c2 && (G$2(Fh, a2), G$2(Eh, c2));
}
function Lh(a2) {
  Fh.current === a2 && (E$3(Eh), E$3(Fh));
}
var M$1 = Uf(0);
function Mh(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a2 = 0; a2 < Nh.length; a2++)
    Nh[a2]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N$2 = null, O$2 = null, P$2 = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q$1() {
  throw Error(p$6(321));
}
function Wh(a2, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!He$4(a2[c2], b2[c2]))
      return false;
  return true;
}
function Xh(a2, b2, c2, d2, e2, f2) {
  Rh = f2;
  N$2 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
  a2 = c2(d2, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$6(301));
      f2 += 1;
      P$2 = O$2 = null;
      b2.updateQueue = null;
      Ph.current = $h;
      a2 = c2(d2, e2);
    } while (Th);
  }
  Ph.current = ai;
  b2 = null !== O$2 && null !== O$2.next;
  Rh = 0;
  P$2 = O$2 = N$2 = null;
  Sh = false;
  if (b2)
    throw Error(p$6(300));
  return a2;
}
function bi() {
  var a2 = 0 !== Uh;
  Uh = 0;
  return a2;
}
function ci() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P$2 ? N$2.memoizedState = P$2 = a2 : P$2 = P$2.next = a2;
  return P$2;
}
function di() {
  if (null === O$2) {
    var a2 = N$2.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else
    a2 = O$2.next;
  var b2 = null === P$2 ? N$2.memoizedState : P$2.next;
  if (null !== b2)
    P$2 = b2, O$2 = a2;
  else {
    if (null === a2)
      throw Error(p$6(310));
    O$2 = a2;
    a2 = { memoizedState: O$2.memoizedState, baseState: O$2.baseState, baseQueue: O$2.baseQueue, queue: O$2.queue, next: null };
    null === P$2 ? N$2.memoizedState = P$2 = a2 : P$2 = P$2.next = a2;
  }
  return P$2;
}
function ei(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function fi(a2) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$6(311));
  c2.lastRenderedReducer = a2;
  var d2 = O$2, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        N$2.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He$4(d2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (null !== a2) {
    e2 = a2;
    do
      f2 = e2.lane, N$2.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else
    null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function gi(a2) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$6(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He$4(f2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function hi() {
}
function ii(a2, b2) {
  var c2 = N$2, d2 = di(), e2 = b2(), f2 = !He$4(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, Ug = true);
  d2 = d2.queue;
  ji(ki.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || null !== P$2 && P$2.memoizedState.tag & 1) {
    c2.flags |= 2048;
    li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === R$1)
      throw Error(p$6(349));
    0 !== (Rh & 30) || ni(c2, b2, e2);
  }
  return e2;
}
function ni(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = N$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$2.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
}
function mi(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  oi(b2) && pi(a2);
}
function ki(a2, b2, c2) {
  return c2(function() {
    oi(b2) && pi(a2);
  });
}
function oi(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !He$4(a2, c2);
  } catch (d2) {
    return true;
  }
}
function pi(a2) {
  var b2 = Zg(a2, 1);
  null !== b2 && mh(b2, a2, 1, -1);
}
function qi(a2) {
  var b2 = ci();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ri.bind(null, N$2, a2);
  return [b2.memoizedState, a2];
}
function li(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = N$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function si() {
  return di().memoizedState;
}
function ti(a2, b2, c2, d2) {
  var e2 = ci();
  N$2.flags |= a2;
  e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function ui(a2, b2, c2, d2) {
  var e2 = di();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== O$2) {
    var g2 = O$2.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Wh(d2, g2.deps)) {
      e2.memoizedState = li(b2, c2, f2, d2);
      return;
    }
  }
  N$2.flags |= a2;
  e2.memoizedState = li(1 | b2, c2, f2, d2);
}
function vi(a2, b2) {
  return ti(8390656, 8, a2, b2);
}
function ji(a2, b2) {
  return ui(2048, 8, a2, b2);
}
function wi(a2, b2) {
  return ui(4, 2, a2, b2);
}
function xi(a2, b2) {
  return ui(4, 4, a2, b2);
}
function yi(a2, b2) {
  if ("function" === typeof b2)
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function zi(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ui(4, 4, yi.bind(null, b2, a2), c2);
}
function Ai() {
}
function Bi(a2, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function Ci(a2, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function Di(a2, b2, c2) {
  if (0 === (Rh & 21))
    return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
  He$4(c2, b2) || (c2 = yc(), N$2.lanes |= c2, hh |= c2, a2.baseState = true);
  return b2;
}
function Ei(a2, b2) {
  var c2 = C$3;
  C$3 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Qh.transition;
  Qh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C$3 = c2, Qh.transition = d2;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a2, b2, c2) {
  var d2 = lh(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a2))
    Ii(b2, c2);
  else if (c2 = Yg(a2, b2, c2, d2), null !== c2) {
    var e2 = L$4();
    mh(c2, a2, d2, e2);
    Ji(c2, b2, d2);
  }
}
function ri(a2, b2, c2) {
  var d2 = lh(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a2))
    Ii(b2, e2);
  else {
    var f2 = a2.alternate;
    if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He$4(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c2 = Yg(a2, b2, e2, d2);
    null !== c2 && (e2 = L$4(), mh(c2, a2, d2, e2), Ji(c2, b2, d2));
  }
}
function Hi(a2) {
  var b2 = a2.alternate;
  return a2 === N$2 || null !== b2 && b2 === N$2;
}
function Ii(a2, b2) {
  Th = Sh = true;
  var c2 = a2.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Ji(a2, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
var ai = { readContext: Vg, useCallback: Q$1, useContext: Q$1, useEffect: Q$1, useImperativeHandle: Q$1, useInsertionEffect: Q$1, useLayoutEffect: Q$1, useMemo: Q$1, useReducer: Q$1, useRef: Q$1, useState: Q$1, useDebugValue: Q$1, useDeferredValue: Q$1, useTransition: Q$1, useMutableSource: Q$1, useSyncExternalStore: Q$1, useId: Q$1, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a2, b2) {
  ci().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b2, a2),
    c2
  );
}, useLayoutEffect: function(a2, b2) {
  return ti(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ti(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = ci();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = ci();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = Gi.bind(null, N$2, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = ci();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
  return ci().memoizedState = a2;
}, useTransition: function() {
  var a2 = qi(false), b2 = a2[0];
  a2 = Ei.bind(null, a2[1]);
  ci().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = N$2, e2 = ci();
  if (I$5) {
    if (void 0 === c2)
      throw Error(p$6(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === R$1)
      throw Error(p$6(349));
    0 !== (Rh & 30) || ni(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d2,
    f2,
    a2
  ), [a2]);
  d2.flags |= 2048;
  li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = ci(), b2 = R$1.identifierPrefix;
  if (I$5) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Uh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a2) {
    var b2 = di();
    return Di(b2, O$2.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = fi(ei)[0], b2 = di().memoizedState;
    return [a2, b2];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a2) {
  var b2 = di();
  return null === O$2 ? b2.memoizedState = a2 : Di(b2, O$2.memoizedState, a2);
}, useTransition: function() {
  var a2 = gi(ei)[0], b2 = di().memoizedState;
  return [a2, b2];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2, digest: null };
}
function Li(a2, b2, c2) {
  return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Mi(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a2, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Pi || (Pi = true, Qi = d2);
    Mi(a2, b2);
  };
  return c2;
}
function Ri(a2, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Mi(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Mi(a2, b2);
    "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Ti(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (null === d2) {
    d2 = a2.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ui.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Vi(a2) {
  do {
    var b2;
    if (b2 = 13 === a2.tag)
      b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (null !== a2);
  return null;
}
function Wi(a2, b2, c2, d2, e2) {
  if (0 === (a2.mode & 1))
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a2, b2, c2, d2) {
  b2.child = null === a2 ? Ch(b2, null, c2, d2) : Bh(b2, a2.child, c2, d2);
}
function Zi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  Tg(b2, e2);
  d2 = Xh(a2, b2, c2, d2, f2, e2);
  c2 = bi();
  if (null !== a2 && !Ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
  I$5 && c2 && vg(b2);
  b2.flags |= 1;
  Yi(a2, b2, d2, e2);
  return b2.child;
}
function aj(a2, b2, c2, d2, e2) {
  if (null === a2) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = f2, cj(a2, b2, f2, d2, e2);
    a2 = yh(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if (0 === (a2.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie$2;
    if (c2(g2, d2) && a2.ref === b2.ref)
      return $i(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = wh(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function cj(a2, b2, c2, d2, e2) {
  if (null !== a2) {
    var f2 = a2.memoizedProps;
    if (Ie$2(f2, d2) && a2.ref === b2.ref)
      if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2))
        0 !== (a2.flags & 131072) && (Ug = true);
      else
        return b2.lanes = a2.lanes, $i(a2, b2, e2);
  }
  return dj(a2, b2, c2, d2, e2);
}
function ej(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d2.mode)
    if (0 === (b2.mode & 1))
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$2(fj, gj), gj |= c2;
    else {
      if (0 === (c2 & 1073741824))
        return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$2(fj, gj), gj |= a2, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G$2(fj, gj);
      gj |= d2;
    }
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$2(fj, gj), gj |= d2;
  Yi(a2, b2, e2, c2);
  return b2.child;
}
function hj(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function dj(a2, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$4.current;
  f2 = Yf(b2, f2);
  Tg(b2, e2);
  c2 = Xh(a2, b2, c2, d2, f2, e2);
  d2 = bi();
  if (null !== a2 && !Ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
  I$5 && d2 && vg(b2);
  b2.flags |= 1;
  Yi(a2, b2, c2, e2);
  return b2.child;
}
function ij(a2, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else
    f2 = false;
  Tg(b2, e2);
  if (null === b2.stateNode)
    jj(a2, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
  else if (null === a2) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H$4.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
    $g = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    bh(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H$4.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
    $g = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return kj(a2, b2, c2, d2, f2, e2);
}
function kj(a2, b2, c2, d2, e2, f2) {
  hj(a2, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2)
    return e2 && dg(b2, c2, false), $i(a2, b2, f2);
  d2 = b2.stateNode;
  Xi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a2 && g2 ? (b2.child = Bh(b2, a2.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function lj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
  Ih(a2, b2.containerInfo);
}
function mj(a2, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Yi(a2, b2, c2, d2);
  return b2.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function pj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = M$1.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (null === a2 || null !== a2.memoizedState)
    e2 |= 1;
  G$2(M$1, e2 & 1);
  if (null === a2) {
    Eg(b2);
    a2 = b2.memoizedState;
    if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
      return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a2 = Ah(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a2) : rj(b2, g2);
  }
  e2 = a2.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a2, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a2.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a2.child.memoizedState;
    g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a2.childLanes & ~c2;
    b2.memoizedState = nj;
    return d2;
  }
  f2 = a2.child;
  a2 = f2.sibling;
  d2 = wh(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function rj(a2, b2) {
  b2 = qj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function tj(a2, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Bh(b2, a2.child, null, c2);
  a2 = rj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function sj(a2, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256)
      return b2.flags &= -257, d2 = Li(Error(p$6(422))), tj(a2, b2, g2, d2);
    if (null !== b2.memoizedState)
      return b2.child = a2.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Ah(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Bh(b2, a2.child, null, g2);
    b2.child.memoizedState = oj(g2);
    b2.memoizedState = nj;
    return f2;
  }
  if (0 === (b2.mode & 1))
    return tj(a2, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2)
      var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$6(419));
    d2 = Li(f2, d2, void 0);
    return tj(a2, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a2.childLanes);
  if (Ug || h2) {
    d2 = R$1;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a2, e2), mh(d2, a2, e2, -1));
    }
    uj();
    d2 = Li(Error(p$6(421)));
    return tj(a2, b2, g2, d2);
  }
  if ("$?" === e2.data)
    return b2.flags |= 128, b2.child = a2.child, b2 = vj.bind(null, a2), e2._reactRetry = b2, null;
  a2 = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$5 = true;
  zg = null;
  null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
  b2 = rj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function wj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  null !== d2 && (d2.lanes |= b2);
  Sg(a2.return, b2, c2);
}
function xj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function yj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Yi(a2, b2, d2.children, c2);
  d2 = M$1.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a2 && 0 !== (a2.flags & 128))
      a:
        for (a2 = b2.child; null !== a2; ) {
          if (13 === a2.tag)
            null !== a2.memoizedState && wj(a2, c2, b2);
          else if (19 === a2.tag)
            wj(a2, c2, b2);
          else if (null !== a2.child) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; null === a2.sibling; ) {
            if (null === a2.return || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  G$2(M$1, d2);
  if (0 === (b2.mode & 1))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        xj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a2 = e2.alternate;
          if (null !== a2 && null === Mh(a2)) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        xj(b2, true, c2, null, f2);
        break;
      case "together":
        xj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function jj(a2, b2) {
  0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function $i(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  hh |= b2.lanes;
  if (0 === (c2 & b2.childLanes))
    return null;
  if (null !== a2 && b2.child !== a2.child)
    throw Error(p$6(153));
  if (null !== b2.child) {
    a2 = b2.child;
    c2 = wh(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a2.sibling; )
      a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function zj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      lj(b2);
      Ig();
      break;
    case 5:
      Kh(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      Ih(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$2(Mg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated)
          return G$2(M$1, M$1.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes))
          return pj(a2, b2, c2);
        G$2(M$1, M$1.current & 1);
        a2 = $i(a2, b2, c2);
        return null !== a2 ? a2.sibling : null;
      }
      G$2(M$1, M$1.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a2.flags & 128)) {
        if (d2)
          return yj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$2(M$1, M$1.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, ej(a2, b2, c2);
  }
  return $i(a2, b2, c2);
}
var Aj, Bj, Cj, Dj;
Aj = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Bj = function() {
};
Cj = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a2, e2);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$5({}, e2, { value: void 0 });
        d2 = A$5({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(
              l2,
              c2
            )), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$4("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Dj = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Ej(a2, b2) {
  if (!I$5)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function S$3(a2) {
  var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a2.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Fj(a2, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$3(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$3(b2), null;
    case 3:
      d2 = b2.stateNode;
      Jh();
      E$3(Wf);
      E$3(H$4);
      Oh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a2 || null === a2.child)
        Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a2, b2);
      S$3(b2);
      return null;
    case 5:
      Lh(b2);
      var e2 = Hh(Gh.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode)
        Cj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(p$6(166));
          S$3(b2);
          return null;
        }
        a2 = Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a2 = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$4("cancel", d2);
              D$4("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$4("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D$4(lf[e2], d2);
              break;
            case "source":
              D$4("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$4(
                "error",
                d2
              );
              D$4("load", d2);
              break;
            case "details":
              D$4("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D$4("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$4("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$4("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a2
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$4("scroll", d2);
            }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Of] = b2;
          a2[Pf] = d2;
          Aj(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$4("cancel", a2);
                D$4("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$4("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D$4(lf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D$4("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$4(
                  "error",
                  a2
                );
                D$4("load", a2);
                e2 = d2;
                break;
              case "details":
                D$4("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Za(a2, d2);
                e2 = Ya(a2, d2);
                D$4("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$5({}, d2, { value: void 0 });
                D$4("invalid", a2);
                break;
              case "textarea":
                hb(a2, d2);
                e2 = gb(a2, d2);
                D$4("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$4("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Va(a2);
                db(a2, d2, false);
                break;
              case "textarea":
                Va(a2);
                jb(a2);
                break;
              case "option":
                null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a2,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a2.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$3(b2);
      return null;
    case 6:
      if (a2 && null != b2.stateNode)
        Dj(a2, b2, a2.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(p$6(166));
        c2 = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = xg, null !== a2)
              switch (a2.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  break;
                case 5:
                  true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$3(b2);
      return null;
    case 13:
      E$3(M$1);
      d2 = b2.memoizedState;
      if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
        if (I$5 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
          Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a2) {
            if (!f2)
              throw Error(p$6(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$6(317));
            f2[Of] = b2;
          } else
            Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$3(b2);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (M$1.current & 1) ? 0 === T$3 && (T$3 = 3) : uj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$3(b2);
      return null;
    case 4:
      return Jh(), Bj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$3(b2), null;
    case 10:
      return Rg(b2.type._context), S$3(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$3(b2), null;
    case 19:
      E$3(M$1);
      f2 = b2.memoizedState;
      if (null === f2)
        return S$3(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2)
        if (d2)
          Ej(f2, false);
        else {
          if (0 !== T$3 || null !== a2 && 0 !== (a2.flags & 128))
            for (a2 = b2.child; null !== a2; ) {
              g2 = Mh(a2);
              if (null !== g2) {
                b2.flags |= 128;
                Ej(f2, false);
                d2 = g2.updateQueue;
                null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                G$2(M$1, M$1.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          null !== f2.tail && B$3() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a2 = Mh(g2), null !== a2) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$5)
              return S$3(b2), null;
          } else
            2 * B$3() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$3(), b2.sibling = null, c2 = M$1.current, G$2(M$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$3(b2);
      return null;
    case 22:
    case 23:
      return Ij(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S$3(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$3(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$6(156, b2.tag));
}
function Jj(a2, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return Jh(), E$3(Wf), E$3(H$4), Oh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Lh(b2), null;
    case 13:
      E$3(M$1);
      a2 = b2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        if (null === b2.alternate)
          throw Error(p$6(340));
        Ig();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$3(M$1), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b2.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U$3 = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
function Mj(a2, b2) {
  var c2 = a2.ref;
  if (null !== c2)
    if ("function" === typeof c2)
      try {
        c2(null);
      } catch (d2) {
        W$1(a2, b2, d2);
      }
    else
      c2.current = null;
}
function Nj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$1(a2, b2, d2);
  }
}
var Oj = false;
function Pj(a2, b2) {
  Cf = dd;
  a2 = Me$1();
  if (Ne$3(a2)) {
    if ("selectionStart" in a2)
      var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else
      a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a2)
                  break b;
                r2 === c2 && ++l2 === e2 && (h2 = g2);
                r2 === f2 && ++m2 === d2 && (k2 = g2);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Df = { focusedElem: a2, selectionRange: c2 };
  dd = false;
  for (V$1 = b2; null !== V$1; )
    if (b2 = V$1, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2)
      a2.return = b2, V$1 = a2;
    else
      for (; null !== V$1; ) {
        b2 = V$1;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x = b2.stateNode, w2 = x.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                  x.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$6(163));
            }
        } catch (F2) {
          W$1(b2, b2.return, F2);
        }
        a2 = b2.sibling;
        if (null !== a2) {
          a2.return = b2.return;
          V$1 = a2;
          break;
        }
        V$1 = b2.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Rj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Sj(a2) {
  var b2 = a2.ref;
  if (null !== b2) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    "function" === typeof b2 ? b2(a2) : b2.current = a2;
  }
}
function Tj(a2) {
  var b2 = a2.alternate;
  null !== b2 && (a2.alternate = null, Tj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Uj(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function Vj(a2) {
  a:
    for (; ; ) {
      for (; null === a2.sibling; ) {
        if (null === a2.return || Uj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
        if (a2.flags & 2)
          continue a;
        if (null === a2.child || 4 === a2.tag)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Wj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2)
    a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      Wj(a2, b2, c2), a2 = a2.sibling;
}
function Xj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2)
    a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (Xj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      Xj(a2, b2, c2), a2 = a2.sibling;
}
var X$1 = null, Yj = false;
function Zj(a2, b2, c2) {
  for (c2 = c2.child; null !== c2; )
    ak(a2, b2, c2), c2 = c2.sibling;
}
function ak(a2, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      U$3 || Mj(c2, b2);
    case 6:
      var d2 = X$1, e2 = Yj;
      X$1 = null;
      Zj(a2, b2, c2);
      X$1 = d2;
      Yj = e2;
      null !== X$1 && (Yj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$1.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$1 && (Yj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$1, c2.stateNode));
      break;
    case 4:
      d2 = X$1;
      e2 = Yj;
      X$1 = c2.stateNode.containerInfo;
      Yj = true;
      Zj(a2, b2, c2);
      X$1 = d2;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$3 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Zj(a2, b2, c2);
      break;
    case 1:
      if (!U$3 && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W$1(c2, b2, h2);
        }
      Zj(a2, b2, c2);
      break;
    case 21:
      Zj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$3 = (d2 = U$3) || null !== c2.memoizedState, Zj(a2, b2, c2), U$3 = d2) : Zj(a2, b2, c2);
      break;
    default:
      Zj(a2, b2, c2);
  }
}
function bk(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Lj());
    b2.forEach(function(b3) {
      var d2 = ck.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function dk(a2, b2) {
  var c2 = b2.deletions;
  if (null !== c2)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X$1 = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X$1 = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X$1 = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X$1)
          throw Error(p$6(160));
        ak(f2, g2, e2);
        X$1 = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W$1(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; null !== b2; )
      ek(b2, a2), b2 = b2.sibling;
}
function ek(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4) {
        try {
          Qj(3, a2, a2.return), Rj(3, a2);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
        try {
          Qj(5, a2, a2.return);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 1:
      dk(b2, a2);
      fk(a2);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      break;
    case 5:
      dk(b2, a2);
      fk(a2);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
        var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W$1(a2, a2.return, t2);
          }
      }
      break;
    case 6:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4) {
        if (null === a2.stateNode)
          throw Error(p$6(162));
        e2 = a2.stateNode;
        f2 = a2.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 3:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
        try {
          bd(b2.containerInfo);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      break;
    case 4:
      dk(b2, a2);
      fk(a2);
      break;
    case 13:
      dk(b2, a2);
      fk(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B$3()));
      d2 & 4 && bk(a2);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a2.mode & 1 ? (U$3 = (l2 = U$3) || m2, dk(b2, a2), U$3 = l2) : dk(b2, a2);
      fk(a2);
      if (d2 & 8192) {
        l2 = null !== a2.memoizedState;
        if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1))
          for (V$1 = a2, m2 = a2.child; null !== m2; ) {
            for (q2 = V$1 = m2; null !== V$1; ) {
              r2 = V$1;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W$1(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V$1 = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a2; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W$1(a2, a2.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W$1(a2, a2.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a2)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b2, a2);
      fk(a2);
      d2 & 4 && bk(a2);
      break;
    case 21:
      break;
    default:
      dk(
        b2,
        a2
      ), fk(a2);
  }
}
function fk(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; null !== c2; ) {
          if (Uj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$6(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Vj(a2);
          Xj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Vj(a2);
          Wj(a2, h2, g2);
          break;
        default:
          throw Error(p$6(161));
      }
    } catch (k2) {
      W$1(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function ik(a2, b2, c2) {
  V$1 = a2;
  jk(a2);
}
function jk(a2, b2, c2) {
  for (var d2 = 0 !== (a2.mode & 1); null !== V$1; ) {
    var e2 = V$1, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Kj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$3;
        h2 = Kj;
        var l2 = U$3;
        Kj = g2;
        if ((U$3 = k2) && !l2)
          for (V$1 = e2; null !== V$1; )
            g2 = V$1, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V$1 = k2) : kk(e2);
        for (; null !== f2; )
          V$1 = f2, jk(f2), f2 = f2.sibling;
        V$1 = e2;
        Kj = h2;
        U$3 = l2;
      }
      lk(a2);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$1 = f2) : lk(a2);
  }
}
function lk(a2) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772))
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U$3 || Rj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U$3)
                if (null === c2)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              null !== f2 && ih(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                ih(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$6(163));
          }
        U$3 || b2.flags & 512 && Sj(b2);
      } catch (r2) {
        W$1(b2, b2.return, r2);
      }
    }
    if (b2 === a2) {
      V$1 = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$1 = c2;
      break;
    }
    V$1 = b2.return;
  }
}
function hk(a2) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (b2 === a2) {
      V$1 = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$1 = c2;
      break;
    }
    V$1 = b2.return;
  }
}
function kk(a2) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Rj(4, b2);
          } catch (k2) {
            W$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$1(b2, b2.return, k2);
    }
    if (b2 === a2) {
      V$1 = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V$1 = h2;
      break;
    }
    V$1 = b2.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K$1 = 0, R$1 = null, Y$1 = null, Z$1 = 0, gj = 0, fj = Uf(0), T$3 = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L$4() {
  return 0 !== (K$1 & 6) ? B$3() : -1 !== Bk ? Bk : Bk = B$3();
}
function lh(a2) {
  if (0 === (a2.mode & 1))
    return 1;
  if (0 !== (K$1 & 2) && 0 !== Z$1)
    return Z$1 & -Z$1;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a2 = C$3;
  if (0 !== a2)
    return a2;
  a2 = window.event;
  a2 = void 0 === a2 ? 16 : jd(a2.type);
  return a2;
}
function mh(a2, b2, c2, d2) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$6(185));
  Ac(a2, c2, d2);
  if (0 === (K$1 & 2) || a2 !== R$1)
    a2 === R$1 && (0 === (K$1 & 2) && (rk |= c2), 4 === T$3 && Dk(a2, Z$1)), Ek(a2, d2), 1 === c2 && 0 === K$1 && 0 === (b2.mode & 1) && (Hj = B$3() + 500, fg && jg());
}
function Ek(a2, b2) {
  var c2 = a2.callbackNode;
  wc(a2, b2);
  var d2 = uc(a2, a2 === R$1 ? Z$1 : 0);
  if (0 === d2)
    null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2)
      0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
        0 === (K$1 & 6) && jg();
      }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Gk(c2, Hk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Hk(a2, b2) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K$1 & 6))
    throw Error(p$6(327));
  var c2 = a2.callbackNode;
  if (Ik() && a2.callbackNode !== c2)
    return null;
  var d2 = uc(a2, a2 === R$1 ? Z$1 : 0);
  if (0 === d2)
    return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2)
    b2 = Jk(a2, d2);
  else {
    b2 = d2;
    var e2 = K$1;
    K$1 |= 2;
    var f2 = Kk();
    if (R$1 !== a2 || Z$1 !== b2)
      vk = null, Hj = B$3() + 500, Lk(a2, b2);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a2, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K$1 = e2;
    null !== Y$1 ? b2 = 0 : (R$1 = null, Z$1 = 0, b2 = T$3);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Ok(a2, e2)));
    if (1 === b2)
      throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B$3()), c2;
    if (6 === b2)
      Dk(a2, d2);
    else {
      e2 = a2.current.alternate;
      if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Ok(a2, f2))), 1 === b2))
        throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B$3()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$6(345));
        case 2:
          Qk(a2, uk, vk);
          break;
        case 3:
          Dk(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B$3(), 10 < b2)) {
            if (0 !== uc(a2, 0))
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              L$4();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b2);
            break;
          }
          Qk(a2, uk, vk);
          break;
        case 4:
          Dk(a2, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$3() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d2);
            break;
          }
          Qk(a2, uk, vk);
          break;
        case 5:
          Qk(a2, uk, vk);
          break;
        default:
          throw Error(p$6(329));
      }
    }
  }
  Ek(a2, B$3());
  return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
}
function Ok(a2, b2) {
  var c2 = tk;
  a2.current.memoizedState.isDehydrated && (Lk(a2, b2).flags |= 256);
  a2 = Jk(a2, b2);
  2 !== a2 && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
  return a2;
}
function Gj(a2) {
  null === uk ? uk = a2 : uk.push.apply(uk, a2);
}
function Pk(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He$4(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a2)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Dk(a2, b2) {
  b2 &= ~sk;
  b2 &= ~rk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Fk(a2) {
  if (0 !== (K$1 & 6))
    throw Error(p$6(327));
  Ik();
  var b2 = uc(a2, 0);
  if (0 === (b2 & 1))
    return Ek(a2, B$3()), null;
  var c2 = Jk(a2, b2);
  if (0 !== a2.tag && 2 === c2) {
    var d2 = xc(a2);
    0 !== d2 && (b2 = d2, c2 = Ok(a2, d2));
  }
  if (1 === c2)
    throw c2 = qk, Lk(a2, 0), Dk(a2, b2), Ek(a2, B$3()), c2;
  if (6 === c2)
    throw Error(p$6(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Qk(a2, uk, vk);
  Ek(a2, B$3());
  return null;
}
function Rk(a2, b2) {
  var c2 = K$1;
  K$1 |= 1;
  try {
    return a2(b2);
  } finally {
    K$1 = c2, 0 === K$1 && (Hj = B$3() + 500, fg && jg());
  }
}
function Sk(a2) {
  null !== xk && 0 === xk.tag && 0 === (K$1 & 6) && Ik();
  var b2 = K$1;
  K$1 |= 1;
  var c2 = pk.transition, d2 = C$3;
  try {
    if (pk.transition = null, C$3 = 1, a2)
      return a2();
  } finally {
    C$3 = d2, pk.transition = c2, K$1 = b2, 0 === (K$1 & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E$3(fj);
}
function Lk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
  if (null !== Y$1)
    for (c2 = Y$1.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          Jh();
          E$3(Wf);
          E$3(H$4);
          Oh();
          break;
        case 5:
          Lh(d2);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E$3(M$1);
          break;
        case 19:
          E$3(M$1);
          break;
        case 10:
          Rg(d2.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c2 = c2.return;
    }
  R$1 = a2;
  Y$1 = a2 = wh(a2.current, null);
  Z$1 = gj = b2;
  T$3 = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b2 = 0; b2 < Wg.length; b2++)
      if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    Wg = null;
  }
  return a2;
}
function Nk(a2, b2) {
  do {
    var c2 = Y$1;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d2 = N$2.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Sh = false;
      }
      Rh = 0;
      P$2 = O$2 = N$2 = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c2 || null === c2.return) {
        T$3 = 1;
        qk = b2;
        Y$1 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$1;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Ti(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Ti(f2, l2, b2);
              uj();
              break a;
            }
            k2 = Error(p$6(426));
          }
        } else if (I$5 && h2.mode & 1) {
          var J2 = Vi(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g2, h2, f2, b2);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T$3 && (T$3 = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x = Oi(f2, k2, b2);
              fh(f2, x);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Ri(f2, h2, b2);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c2);
    } catch (na) {
      b2 = na;
      Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a2 = nk.current;
  nk.current = ai;
  return null === a2 ? ai : a2;
}
function uj() {
  if (0 === T$3 || 3 === T$3 || 2 === T$3)
    T$3 = 4;
  null === R$1 || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R$1, Z$1);
}
function Jk(a2, b2) {
  var c2 = K$1;
  K$1 |= 2;
  var d2 = Kk();
  if (R$1 !== a2 || Z$1 !== b2)
    vk = null, Lk(a2, b2);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a2, e2);
    }
  while (1);
  Qg();
  K$1 = c2;
  nk.current = d2;
  if (null !== Y$1)
    throw Error(p$6(261));
  R$1 = null;
  Z$1 = 0;
  return T$3;
}
function Uk() {
  for (; null !== Y$1; )
    Vk(Y$1);
}
function Mk() {
  for (; null !== Y$1 && !cc(); )
    Vk(Y$1);
}
function Vk(a2) {
  var b2 = Wk(a2.alternate, a2, gj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Tk(a2) : Y$1 = b2;
  ok.current = null;
}
function Tk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Fj(c2, b2, gj), null !== c2) {
        Y$1 = c2;
        return;
      }
    } else {
      c2 = Jj(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y$1 = c2;
        return;
      }
      if (null !== a2)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T$3 = 6;
        Y$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$1 = b2;
      return;
    }
    Y$1 = b2 = a2;
  } while (null !== b2);
  0 === T$3 && (T$3 = 5);
}
function Qk(a2, b2, c2) {
  var d2 = C$3, e2 = pk.transition;
  try {
    pk.transition = null, C$3 = 1, Xk(a2, b2, c2, d2);
  } finally {
    pk.transition = e2, C$3 = d2;
  }
  return null;
}
function Xk(a2, b2, c2, d2) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K$1 & 6))
    throw Error(p$6(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (null === c2)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(p$6(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a2, f2);
  a2 === R$1 && (Y$1 = R$1 = null, Z$1 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g2 = C$3;
    C$3 = 1;
    var h2 = K$1;
    K$1 |= 4;
    ok.current = null;
    Pj(a2, c2);
    ek(c2, a2);
    Oe$1(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c2;
    ik(c2);
    dc();
    K$1 = h2;
    C$3 = g2;
    pk.transition = f2;
  } else
    a2.current = c2;
  wk && (wk = false, xk = a2, yk = e2);
  f2 = a2.pendingLanes;
  0 === f2 && (Si = null);
  mc(c2.stateNode);
  Ek(a2, B$3());
  if (null !== b2)
    for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a2 = Qi, Qi = null, a2;
  0 !== (yk & 1) && 0 !== a2.tag && Ik();
  f2 = a2.pendingLanes;
  0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a2 = Dc(yk), b2 = pk.transition, c2 = C$3;
    try {
      pk.transition = null;
      C$3 = 16 > a2 ? 16 : a2;
      if (null === xk)
        var d2 = false;
      else {
        a2 = xk;
        xk = null;
        yk = 0;
        if (0 !== (K$1 & 6))
          throw Error(p$6(331));
        var e2 = K$1;
        K$1 |= 4;
        for (V$1 = a2.current; null !== V$1; ) {
          var f2 = V$1, g2 = f2.child;
          if (0 !== (V$1.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V$1 = l2; null !== V$1; ) {
                  var m2 = V$1;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V$1 = q2;
                  else
                    for (; null !== V$1; ) {
                      m2 = V$1;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V$1 = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V$1 = r2;
                        break;
                      }
                      V$1 = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V$1 = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
            g2.return = f2, V$1 = g2;
          else
            b:
              for (; null !== V$1; ) {
                f2 = V$1;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x = f2.sibling;
                if (null !== x) {
                  x.return = f2.return;
                  V$1 = x;
                  break b;
                }
                V$1 = f2.return;
              }
        }
        var w2 = a2.current;
        for (V$1 = w2; null !== V$1; ) {
          g2 = V$1;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
            u2.return = g2, V$1 = u2;
          else
            b:
              for (g2 = w2; null !== V$1; ) {
                h2 = V$1;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W$1(h2, h2.return, na);
                  }
                if (h2 === g2) {
                  V$1 = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V$1 = F2;
                  break b;
                }
                V$1 = h2.return;
              }
        }
        K$1 = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C$3 = c2, pk.transition = b2;
    }
  }
  return false;
}
function Yk(a2, b2, c2) {
  b2 = Ki(c2, b2);
  b2 = Oi(a2, b2, 1);
  a2 = dh(a2, b2, 1);
  b2 = L$4();
  null !== a2 && (Ac(a2, 1, b2), Ek(a2, b2));
}
function W$1(a2, b2, c2) {
  if (3 === a2.tag)
    Yk(a2, a2, c2);
  else
    for (; null !== b2; ) {
      if (3 === b2.tag) {
        Yk(b2, a2, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
          a2 = Ki(c2, a2);
          a2 = Ri(b2, a2, 1);
          b2 = dh(b2, a2, 1);
          a2 = L$4();
          null !== b2 && (Ac(b2, 1, a2), Ek(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ui(a2, b2, c2) {
  var d2 = a2.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = L$4();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  R$1 === a2 && (Z$1 & c2) === c2 && (4 === T$3 || 3 === T$3 && (Z$1 & 130023424) === Z$1 && 500 > B$3() - gk ? Lk(a2, 0) : sk |= c2);
  Ek(a2, b2);
}
function Zk(a2, b2) {
  0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = L$4();
  a2 = Zg(a2, b2);
  null !== a2 && (Ac(a2, b2, c2), Ek(a2, c2));
}
function vj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Zk(a2, c2);
}
function ck(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$6(314));
  }
  null !== d2 && d2.delete(b2);
  Zk(a2, c2);
}
var Wk;
Wk = function(a2, b2, c2) {
  if (null !== a2)
    if (a2.memoizedProps !== b2.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128))
        return Ug = false, zj(a2, b2, c2);
      Ug = 0 !== (a2.flags & 131072) ? true : false;
    }
  else
    Ug = false, I$5 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      jj(a2, b2);
      a2 = b2.pendingProps;
      var e2 = Yf(b2, H$4.current);
      Tg(b2, c2);
      e2 = Xh(null, b2, d2, a2, e2, c2);
      var f2 = bi();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a2, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$5 && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        jj(a2, b2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = $k(d2);
        a2 = Lg(d2, a2);
        switch (e2) {
          case 0:
            b2 = dj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = ij(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = Zi(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = aj(null, b2, d2, Lg(d2.type, a2), c2);
            break a;
        }
        throw Error(p$6(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a2, b2, d2, e2, c2);
    case 3:
      a: {
        lj(b2);
        if (null === a2)
          throw Error(p$6(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        bh(a2, b2);
        gh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ki(Error(p$6(423)), b2);
            b2 = mj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ki(Error(p$6(424)), b2);
            b2 = mj(a2, b2, d2, c2, e2);
            break a;
          } else
            for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$5 = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = $i(a2, b2, c2);
            break a;
          }
          Yi(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Kh(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a2, b2), Yi(a2, b2, g2, c2), b2.child;
    case 6:
      return null === a2 && Eg(b2), null;
    case 13:
      return pj(a2, b2, c2);
    case 4:
      return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Bh(b2, null, d2, c2) : Yi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a2, b2, d2, e2, c2);
    case 7:
      return Yi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$2(Mg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2)
          if (He$4(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = $i(a2, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d2) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c2);
                    Sg(
                      f2.return,
                      c2,
                      b2
                    );
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2)
                  throw Error(p$6(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                null !== h2 && (h2.lanes |= c2);
                Sg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (null !== g2)
                g2.return = f2;
              else
                for (g2 = f2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        Yi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a2, b2, d2, e2, c2);
    case 15:
      return cj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a2, c2);
    case 19:
      return yj(a2, b2, c2);
    case 22:
      return ej(a2, b2, c2);
  }
  throw Error(p$6(156, b2.tag));
};
function Gk(a2, b2) {
  return ac(a2, b2);
}
function al(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b2, c2, d2) {
  return new al(a2, b2, c2, d2);
}
function bj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function $k(a2) {
  if ("function" === typeof a2)
    return bj(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Da)
      return 11;
    if (a2 === Ga)
      return 14;
  }
  return 2;
}
function wh(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function yh(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if ("function" === typeof a2)
    bj(a2) && (g2 = 1);
  else if ("string" === typeof a2)
    g2 = 5;
  else
    a:
      switch (a2) {
        case ya:
          return Ah(c2.children, e2, f2, b2);
        case za:
          g2 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
        case Ea:
          return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
        case Fa:
          return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
        case Ia:
          return qj(c2, e2, f2, b2);
        default:
          if ("object" === typeof a2 && null !== a2)
            switch (a2.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$6(130, null == a2 ? a2 : typeof a2, ""));
      }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Ah(a2, b2, c2, d2) {
  a2 = Bg(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function qj(a2, b2, c2, d2) {
  a2 = Bg(22, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  a2.stateNode = { isHidden: false };
  return a2;
}
function xh(a2, b2, c2) {
  a2 = Bg(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function zh(a2, b2, c2) {
  b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function bl(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new bl(a2, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a2;
}
function dl(a2, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function el(a2) {
  if (!a2)
    return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || 1 !== a2.tag)
      throw Error(p$6(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$6(171));
  }
  if (1 === a2.tag) {
    var c2 = a2.type;
    if (Zf(c2))
      return bg(a2, c2, b2);
  }
  return b2;
}
function fl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = cl(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = el(null);
  c2 = a2.current;
  d2 = L$4();
  e2 = lh(c2);
  f2 = ch(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  dh(c2, f2, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d2);
  Ek(a2, d2);
  return a2;
}
function gl(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = L$4(), g2 = lh(e2);
  c2 = el(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = ch(f2, g2);
  b2.payload = { element: a2 };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a2 = dh(e2, b2, g2);
  null !== a2 && (mh(a2, e2, g2, f2), eh(a2, e2, g2));
  return g2;
}
function hl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function il(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function jl(a2, b2) {
  il(a2, b2);
  (a2 = a2.alternate) && il(a2, b2);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a2) {
  console.error(a2);
};
function ml(a2) {
  this._internalRoot = a2;
}
nl.prototype.render = ml.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (null === b2)
    throw Error(p$6(409));
  gl(a2, b2, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (null !== a2) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Sk(function() {
      gl(null, a2, null, null);
    });
    b2[uf] = null;
  }
};
function nl(a2) {
  this._internalRoot = a2;
}
nl.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Hc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
      ;
    Qc.splice(c2, 0, a2);
    0 === c2 && Vc(a2);
  }
};
function ol(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
}
function pl(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function ql() {
}
function rl(a2, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a3 = hl(g2);
        f2.call(a3);
      };
    }
    var g2 = fl(b2, d2, a2, 0, null, false, false, "", ql);
    a2._reactRootContainer = g2;
    a2[uf] = g2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Sk();
    return g2;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a3 = hl(k2);
      h2.call(a3);
    };
  }
  var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
  a2._reactRootContainer = k2;
  a2[uf] = k2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  Sk(function() {
    gl(b2, k2, c2, d2);
  });
  return k2;
}
function sl(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = hl(g2);
        h2.call(a3);
      };
    }
    gl(b2, g2, a2, e2);
  } else
    g2 = rl(c2, b2, a2, e2, d2);
  return hl(g2);
}
Ec = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B$3()), 0 === (K$1 & 6) && (Hj = B$3() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b3 = Zg(a2, 1);
        if (null !== b3) {
          var c3 = L$4();
          mh(b3, a2, 1, c3);
        }
      }), jl(a2, 1);
  }
};
Fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = Zg(a2, 134217728);
    if (null !== b2) {
      var c2 = L$4();
      mh(b2, a2, 134217728, c2);
    }
    jl(a2, 134217728);
  }
};
Gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = lh(a2), c2 = Zg(a2, b2);
    if (null !== c2) {
      var d2 = L$4();
      mh(c2, a2, b2, d2);
    }
    jl(a2, b2);
  }
};
Hc = function() {
  return C$3;
};
Ic = function(a2, b2) {
  var c2 = C$3;
  try {
    return C$3 = a2, b2();
  } finally {
    C$3 = c2;
  }
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      bb(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(p$6(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue$1, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b2))
    throw Error(p$6(200));
  return dl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!ol(a2))
    throw Error(p$6(299));
  var c2 = false, d2 = "", e2 = ll;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = cl(a2, 1, false, null, null, c2, false, d2, e2);
  a2[uf] = b2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  return new ml(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2)
    return null;
  if (1 === a2.nodeType)
    return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render)
      throw Error(p$6(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$6(268, a2));
  }
  a2 = Zb(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Sk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!pl(b2))
    throw Error(p$6(200));
  return sl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!ol(a2))
    throw Error(p$6(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = fl(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a2[uf] = b2.current;
  sf(a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++)
      c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
        c2,
        e2
      );
  return new nl(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!pl(b2))
    throw Error(p$6(200));
  return sl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!pl(a2))
    throw Error(p$6(40));
  return a2._reactRootContainer ? (Sk(function() {
    sl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!pl(c2))
    throw Error(p$6(200));
  if (null == a2 || void 0 === a2._reactInternals)
    throw Error(p$6(38));
  return sl(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
})(reactDom);
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : reactExports.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ reactExports.cloneElement(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = reactExports.useState();
  const stylesRef = reactExports.useRef({});
  const prevPresentRef = reactExports.useRef(present);
  const prevAnimationNameRef = reactExports.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  reactExports.useEffect(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          reactDomExports.flushSync(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: reactExports.useCallback((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}
const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = reactExports.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (reactExports.Children.count(newElement) > 1)
          return reactExports.Children.only(null);
        return /* @__PURE__ */ reactExports.isValidElement(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$var$SlotClone, _extends$2({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ reactExports.isValidElement(newElement) ? /* @__PURE__ */ reactExports.cloneElement(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$var$SlotClone, _extends$2({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
const $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ reactExports.isValidElement(children))
    return /* @__PURE__ */ reactExports.cloneElement(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
    });
  return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ reactExports.isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}
const $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node2 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    reactExports.useEffect(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ reactExports.createElement(Comp, _extends$2({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node2.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node2
  };
}, {});
const $e698a72e93240346$var$CHECKBOX_NAME = "Checkbox";
const [$e698a72e93240346$var$createCheckboxContext, $e698a72e93240346$export$b566c4ff5488ea01] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($e698a72e93240346$var$CHECKBOX_NAME);
const [$e698a72e93240346$var$CheckboxProvider, $e698a72e93240346$var$useCheckboxContext] = $e698a72e93240346$var$createCheckboxContext($e698a72e93240346$var$CHECKBOX_NAME);
const $e698a72e93240346$export$48513f6b9f8ce62d = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCheckbox, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...checkboxProps } = props;
  const [button, setButton] = reactExports.useState(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  const initialCheckedStateRef = reactExports.useRef(checked);
  reactExports.useEffect(() => {
    const form = button === null || button === void 0 ? void 0 : button.form;
    if (form) {
      const reset = () => setChecked(initialCheckedStateRef.current);
      form.addEventListener("reset", reset);
      return () => form.removeEventListener("reset", reset);
    }
  }, [
    button,
    setChecked
  ]);
  return /* @__PURE__ */ reactExports.createElement($e698a72e93240346$var$CheckboxProvider, {
    scope: __scopeCheckbox,
    state: checked,
    disabled
  }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$2({
    type: "button",
    role: "checkbox",
    "aria-checked": $e698a72e93240346$var$isIndeterminate(checked) ? "mixed" : checked,
    "aria-required": required,
    "data-state": $e698a72e93240346$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, checkboxProps, {
    ref: composedRefs,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => $e698a72e93240346$var$isIndeterminate(prevChecked) ? true : !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ reactExports.createElement($e698a72e93240346$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
const $e698a72e93240346$var$INDICATOR_NAME = "CheckboxIndicator";
const $e698a72e93240346$export$59aad738f51d1c05 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
  const context = $e698a72e93240346$var$useCheckboxContext($e698a72e93240346$var$INDICATOR_NAME, __scopeCheckbox);
  return /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $e698a72e93240346$var$isIndeterminate(context.state) || context.state === true
  }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$2({
    "data-state": $e698a72e93240346$var$getState(context.state),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      pointerEvents: "none",
      ...props.style
    }
  })));
});
const $e698a72e93240346$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = reactExports.useRef(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  reactExports.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      input.indeterminate = $e698a72e93240346$var$isIndeterminate(checked);
      setChecked.call(input, $e698a72e93240346$var$isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ reactExports.createElement("input", _extends$2({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: $e698a72e93240346$var$isIndeterminate(checked) ? false : checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $e698a72e93240346$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $e698a72e93240346$var$getState(checked) {
  return $e698a72e93240346$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
const $e698a72e93240346$export$be92b6f5f03c0fe9 = $e698a72e93240346$export$48513f6b9f8ce62d;
const $e698a72e93240346$export$adb584737d712b70 = $e698a72e93240346$export$59aad738f51d1c05;
const Checkbox = ({ className, checked, disabled, onCheckedChange }) => {
  return /* @__PURE__ */ jsx($e698a72e93240346$export$be92b6f5f03c0fe9, { disabled, checked, onCheckedChange, className: mergeClasses("tw-bg-white tw-border-[1.2px] tw-border-slate-800 tw-rounded", checked && "tw-bg-slate-100", disabled && "tw-bg-gray-100 tw-border-gray-300", className), children: /* @__PURE__ */ jsx($e698a72e93240346$export$adb584737d712b70, { children: /* @__PURE__ */ jsx(CheckIcon$2, { className: "tw-p-0.5 tw-stroke-[2]" }) }) });
};
var i$5 = Object.defineProperty;
var d$6 = (t2, e2, n2) => e2 in t2 ? i$5(t2, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[e2] = n2;
var r$5 = (t2, e2, n2) => (d$6(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
let o$5 = class o {
  constructor() {
    r$5(this, "current", this.detect());
    r$5(this, "handoffState", "pending");
    r$5(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
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
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
let s$5 = new o$5();
let l$6 = (e2, f2) => {
  s$5.isServer ? reactExports.useEffect(e2, f2) : reactExports.useLayoutEffect(e2, f2);
};
function s$4(e2) {
  let r2 = reactExports.useRef(e2);
  return l$6(() => {
    r2.current = e2;
  }, [e2]), r2;
}
function i$4(e2, o3) {
  let [u2, t2] = reactExports.useState(e2), r2 = s$4(e2);
  return l$6(() => t2(r2.current), [r2, t2, ...o3]), u2;
}
function t$5(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}
function o$4() {
  let n2 = [], r2 = { addEventListener(e2, t2, s2, a2) {
    return e2.addEventListener(t2, s2, a2), r2.add(() => e2.removeEventListener(t2, s2, a2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$5(() => {
      t2.current && e2[0]();
    }), r2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, s2) {
    let a2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: s2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: a2 });
    });
  }, group(e2) {
    let t2 = o$4();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return n2.push(e2), () => {
      let t2 = n2.indexOf(e2);
      if (t2 >= 0)
        for (let s2 of n2.splice(t2, 1))
          s2();
    };
  }, dispose() {
    for (let e2 of n2.splice(0))
      e2();
  } };
  return r2;
}
function p$5() {
  let [e2] = reactExports.useState(o$4);
  return reactExports.useEffect(() => () => e2.dispose(), [e2]), e2;
}
let o$3 = function(t2) {
  let e2 = s$4(t2);
  return React$j.useCallback((...r2) => e2.current(...r2), [e2]);
};
function l$5() {
  let [e2, f2] = reactExports.useState(s$5.isHandoffComplete);
  return e2 && s$5.isHandoffComplete === false && f2(false), reactExports.useEffect(() => {
    e2 !== true && f2(true);
  }, [e2]), reactExports.useEffect(() => s$5.handoff(), []), e2;
}
var o$2;
let I$4 = (o$2 = React$j.useId) != null ? o$2 : function() {
  let n2 = l$5(), [e2, u2] = React$j.useState(n2 ? () => s$5.nextId() : null);
  return l$6(() => {
    e2 === null && u2(s$5.nextId());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};
function u$5(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$5), t2;
}
function e$5(r2) {
  return s$5.isServer ? null : r2 instanceof Node ? r2.ownerDocument : r2 != null && r2.hasOwnProperty("current") && r2.current instanceof Node ? r2.current.ownerDocument : document;
}
let f$6 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var L$3 = ((r2) => (r2[r2.First = 1] = "First", r2[r2.Previous = 2] = "Previous", r2[r2.Next = 4] = "Next", r2[r2.Last = 8] = "Last", r2[r2.WrapAround = 16] = "WrapAround", r2[r2.NoScroll = 32] = "NoScroll", r2))(L$3 || {}), N$1 = ((o3) => (o3[o3.Error = 0] = "Error", o3[o3.Overflow = 1] = "Overflow", o3[o3.Success = 2] = "Success", o3[o3.Underflow = 3] = "Underflow", o3))(N$1 || {}), T$2 = ((n2) => (n2[n2.Previous = -1] = "Previous", n2[n2.Next = 1] = "Next", n2))(T$2 || {});
function E$2(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(f$6)).sort((t2, n2) => Math.sign((t2.tabIndex || Number.MAX_SAFE_INTEGER) - (n2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var F$5 = ((n2) => (n2[n2.Strict = 0] = "Strict", n2[n2.Loose = 1] = "Loose", n2))(F$5 || {});
function h$4(e2, t2 = 0) {
  var n2;
  return e2 === ((n2 = e$5(e2)) == null ? void 0 : n2.body) ? false : u$5(t2, { [0]() {
    return e2.matches(f$6);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(f$6))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
function g$4(e2) {
  let t2 = e$5(e2);
  o$4().nextFrame(() => {
    t2 && !h$4(t2.activeElement, 0) && S$2(e2);
  });
}
function S$2(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$3 = ["textarea", "input"].join(",");
function w$5(e2) {
  var t2, n2;
  return (n2 = (t2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : t2.call(e2, H$3)) != null ? n2 : false;
}
function A$4(e2, t2 = (n2) => n2) {
  return e2.slice().sort((n2, l2) => {
    let o3 = t2(n2), i2 = t2(l2);
    if (o3 === null || i2 === null)
      return 0;
    let r2 = o3.compareDocumentPosition(i2);
    return r2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v$4(e2, t2) {
  return I$3(E$2(), t2, { relativeTo: e2 });
}
function I$3(e2, t2, { sorted: n2 = true, relativeTo: l2 = null, skipElements: o3 = [] } = {}) {
  let i2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, r2 = Array.isArray(e2) ? n2 ? A$4(e2) : e2 : E$2(e2);
  o3.length > 0 && r2.length > 1 && (r2 = r2.filter((s2) => !o3.includes(s2))), l2 = l2 != null ? l2 : i2.activeElement;
  let d2 = (() => {
    if (t2 & 5)
      return 1;
    if (t2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x = (() => {
    if (t2 & 1)
      return 0;
    if (t2 & 2)
      return Math.max(0, r2.indexOf(l2)) - 1;
    if (t2 & 4)
      return Math.max(0, r2.indexOf(l2)) + 1;
    if (t2 & 8)
      return r2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = t2 & 32 ? { preventScroll: true } : {}, c2 = 0, a2 = r2.length, u2;
  do {
    if (c2 >= a2 || c2 + a2 <= 0)
      return 0;
    let s2 = x + c2;
    if (t2 & 16)
      s2 = (s2 + a2) % a2;
    else {
      if (s2 < 0)
        return 3;
      if (s2 >= a2)
        return 1;
    }
    u2 = r2[s2], u2 == null || u2.focus(p2), c2 += d2;
  } while (u2 !== i2.activeElement);
  return t2 & 6 && w$5(u2) && u2.select(), u2.hasAttribute("tabindex") || u2.setAttribute("tabindex", "0"), 2;
}
function d$5(e2, r2, n2) {
  let o3 = s$4(r2);
  reactExports.useEffect(() => {
    function t2(u2) {
      o3.current(u2);
    }
    return document.addEventListener(e2, t2, n2), () => document.removeEventListener(e2, t2, n2);
  }, [e2, n2]);
}
function L$2(m2, E2, c2 = true) {
  let i2 = reactExports.useRef(false);
  reactExports.useEffect(() => {
    requestAnimationFrame(() => {
      i2.current = c2;
    });
  }, [c2]);
  function f2(e2, o3) {
    if (!i2.current || e2.defaultPrevented)
      return;
    let l2 = function r2(t2) {
      return typeof t2 == "function" ? r2(t2()) : Array.isArray(t2) || t2 instanceof Set ? t2 : [t2];
    }(m2), n2 = o3(e2);
    if (n2 !== null && n2.getRootNode().contains(n2)) {
      for (let r2 of l2) {
        if (r2 === null)
          continue;
        let t2 = r2 instanceof HTMLElement ? r2 : r2.current;
        if (t2 != null && t2.contains(n2) || e2.composed && e2.composedPath().includes(t2))
          return;
      }
      return !h$4(n2, F$5.Loose) && n2.tabIndex !== -1 && e2.preventDefault(), E2(e2, n2);
    }
  }
  let u2 = reactExports.useRef(null);
  d$5("mousedown", (e2) => {
    var o3, l2;
    i2.current && (u2.current = ((l2 = (o3 = e2.composedPath) == null ? void 0 : o3.call(e2)) == null ? void 0 : l2[0]) || e2.target);
  }, true), d$5("click", (e2) => {
    u2.current && (f2(e2, () => u2.current), u2.current = null);
  }, true), d$5("blur", (e2) => f2(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
function i$3(t2) {
  var n2;
  if (t2.type)
    return t2.type;
  let e2 = (n2 = t2.as) != null ? n2 : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function s$3(t2, e2) {
  let [n2, u2] = reactExports.useState(() => i$3(t2));
  return l$6(() => {
    u2(i$3(t2));
  }, [t2.type, t2.as]), l$6(() => {
    n2 || e2.current && e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u2("button");
  }, [n2, e2]), n2;
}
let u$4 = Symbol();
function y$4(...t2) {
  let n2 = reactExports.useRef(t2);
  reactExports.useEffect(() => {
    n2.current = t2;
  }, [t2]);
  let c2 = o$3((e2) => {
    for (let o3 of n2.current)
      o3 != null && (typeof o3 == "function" ? o3(e2) : o3.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u$4])) ? void 0 : c2;
}
function F$4({ container: e2, accept: t2, walk: r2, enabled: c2 = true }) {
  let o3 = reactExports.useRef(t2), l2 = reactExports.useRef(r2);
  reactExports.useEffect(() => {
    o3.current = t2, l2.current = r2;
  }, [t2, r2]), l$6(() => {
    if (!e2 || !c2)
      return;
    let n2 = e$5(e2);
    if (!n2)
      return;
    let f2 = o3.current, p2 = l2.current, d2 = Object.assign((i2) => f2(i2), { acceptNode: f2 }), u2 = n2.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, d2, false);
    for (; u2.nextNode(); )
      p2(u2.currentNode);
  }, [e2, c2, o3, l2]);
}
function f$5(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a$2 = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a$2 || {});
function x$3(r2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let l2 = n2.resolveActiveIndex(), s2 = l2 != null ? l2 : -1, d2 = (() => {
    switch (r2.focus) {
      case 0:
        return t2.findIndex((e2) => !n2.resolveDisabled(e2));
      case 1: {
        let e2 = t2.slice().reverse().findIndex((i2, c2, u2) => s2 !== -1 && u2.length - c2 - 1 >= s2 ? false : !n2.resolveDisabled(i2));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 2:
        return t2.findIndex((e2, i2) => i2 <= s2 ? false : !n2.resolveDisabled(e2));
      case 3: {
        let e2 = t2.slice().reverse().findIndex((i2) => !n2.resolveDisabled(i2));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 4:
        return t2.findIndex((e2) => n2.resolveId(e2) === r2.id);
      case 5:
        return null;
      default:
        f$5(r2);
    }
  })();
  return d2 === -1 ? l2 : d2;
}
function e$4(...n2) {
  return n2.filter(Boolean).join(" ");
}
var j$1 = ((a2) => (a2[a2.None = 0] = "None", a2[a2.RenderStrategy = 1] = "RenderStrategy", a2[a2.Static = 2] = "Static", a2))(j$1 || {}), w$4 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(w$4 || {});
function D$3({ ourProps: r2, theirProps: t2, slot: e2, defaultTag: a2, features: s2, visible: n2 = true, name: l2 }) {
  let o3 = h$3(t2, r2);
  if (n2)
    return m$5(o3, e2, a2, l2);
  let f2 = s2 != null ? s2 : 0;
  if (f2 & 2) {
    let { static: i2 = false, ...u2 } = o3;
    if (i2)
      return m$5(u2, e2, a2, l2);
  }
  if (f2 & 1) {
    let { unmount: i2 = true, ...u2 } = o3;
    return u$5(i2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m$5({ ...u2, hidden: true, style: { display: "none" } }, e2, a2, l2);
    } });
  }
  return m$5(o3, e2, a2, l2);
}
function m$5(r2, t2 = {}, e2, a2) {
  var y2;
  let { as: s2 = e2, children: n2, refName: l2 = "ref", ...o3 } = g$3(r2, ["unmount", "static"]), f2 = r2.ref !== void 0 ? { [l2]: r2.ref } : {}, i2 = typeof n2 == "function" ? n2(t2) : n2;
  "className" in o3 && o3.className && typeof o3.className == "function" && (o3.className = o3.className(t2));
  let u2 = {};
  if (t2) {
    let d2 = false, c2 = [];
    for (let [p2, F2] of Object.entries(t2))
      typeof F2 == "boolean" && (d2 = true), F2 === true && c2.push(p2);
    d2 && (u2["data-headlessui-state"] = c2.join(" "));
  }
  if (s2 === reactExports.Fragment && Object.keys(P$1(o3)).length > 0) {
    if (!reactExports.isValidElement(i2) || Array.isArray(i2) && i2.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o3).map((p2) => `  - ${p2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p2) => `  - ${p2}`).join(`
`)].join(`
`));
    let d2 = e$4((y2 = i2.props) == null ? void 0 : y2.className, o3.className), c2 = d2 ? { className: d2 } : {};
    return reactExports.cloneElement(i2, Object.assign({}, h$3(i2.props, P$1(g$3(o3, ["ref"]))), u2, f2, O$1(i2.ref, f2.ref), c2));
  }
  return reactExports.createElement(s2, Object.assign({}, g$3(o3, ["ref"]), s2 !== reactExports.Fragment && f2, s2 !== reactExports.Fragment && u2), i2);
}
function O$1(...r2) {
  return { ref: r2.every((t2) => t2 == null) ? void 0 : (t2) => {
    for (let e2 of r2)
      e2 != null && (typeof e2 == "function" ? e2(t2) : e2.current = t2);
  } };
}
function h$3(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let s2 of r2)
    for (let n2 in s2)
      n2.startsWith("on") && typeof s2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(s2[n2])) : t2[n2] = s2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((s2) => [s2, void 0])));
  for (let s2 in e2)
    Object.assign(t2, { [s2](n2, ...l2) {
      let o3 = e2[s2];
      for (let f2 of o3) {
        if ((n2 instanceof Event || (n2 == null ? void 0 : n2.nativeEvent) instanceof Event) && n2.defaultPrevented)
          return;
        f2(n2, ...l2);
      }
    } });
  return t2;
}
function L$1(r2) {
  var t2;
  return Object.assign(reactExports.forwardRef(r2), { displayName: (t2 = r2.displayName) != null ? t2 : r2.name });
}
function P$1(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function g$3(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let a2 of t2)
    a2 in e2 && delete e2[a2];
  return e2;
}
function r$4(n2) {
  let e2 = n2.parentElement, l2 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l2 = e2), e2 = e2.parentElement;
  let t2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t2 && i$2(l2) ? false : t2;
}
function i$2(n2) {
  if (!n2)
    return false;
  let e2 = n2.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement)
      return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}
function e$3(n2 = {}, r2 = null, t2 = []) {
  for (let [i2, o3] of Object.entries(n2))
    f$4(t2, s$2(r2, i2), o3);
  return t2;
}
function s$2(n2, r2) {
  return n2 ? n2 + "[" + r2 + "]" : r2;
}
function f$4(n2, r2, t2) {
  if (Array.isArray(t2))
    for (let [i2, o3] of t2.entries())
      f$4(n2, s$2(r2, i2.toString()), o3);
  else
    t2 instanceof Date ? n2.push([r2, t2.toISOString()]) : typeof t2 == "boolean" ? n2.push([r2, t2 ? "1" : "0"]) : typeof t2 == "string" ? n2.push([r2, t2]) : typeof t2 == "number" ? n2.push([r2, `${t2}`]) : t2 == null ? n2.push([r2, ""]) : e$3(t2, r2, n2);
}
let a$1 = "div";
var p$4 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(p$4 || {});
function s$1(t2, o3) {
  let { features: n2 = 1, ...e2 } = t2, d2 = { ref: o3, "aria-hidden": (n2 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n2 & 4) === 4 && (n2 & 2) !== 2 && { display: "none" } } };
  return D$3({ ourProps: d2, theirProps: e2, slot: {}, defaultTag: a$1, name: "Hidden" });
}
let c$4 = L$1(s$1);
let n$6 = reactExports.createContext(null);
n$6.displayName = "OpenClosedContext";
var d$4 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(d$4 || {});
function C$2() {
  return reactExports.useContext(n$6);
}
function c$3({ value: o3, children: r2 }) {
  return React$j.createElement(n$6.Provider, { value: o3 }, r2);
}
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
function T$1(l2, r2, c2) {
  let [i2, s2] = reactExports.useState(c2), e2 = l2 !== void 0, t2 = reactExports.useRef(e2), u2 = reactExports.useRef(false), d2 = reactExports.useRef(false);
  return e2 && !t2.current && !u2.current ? (u2.current = true, t2.current = e2, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e2 && t2.current && !d2.current && (d2.current = true, t2.current = e2, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e2 ? l2 : i2, o$3((n2) => (e2 || s2(n2), r2 == null ? void 0 : r2(n2)))];
}
function m$4(u2, t2) {
  let e2 = reactExports.useRef([]), r2 = o$3(u2);
  reactExports.useEffect(() => {
    let o3 = [...e2.current];
    for (let [n2, a2] of t2.entries())
      if (e2.current[n2] !== a2) {
        let l2 = r2(t2, o3);
        return e2.current = t2, l2;
      }
  }, [r2, ...t2]);
}
function t$4(e2) {
  return [e2.screenX, e2.screenY];
}
function u$3() {
  let e2 = reactExports.useRef([-1, -1]);
  return { wasMoved(r2) {
    let n2 = t$4(r2);
    return e2.current[0] === n2[0] && e2.current[1] === n2[1] ? false : (e2.current = n2, true);
  }, update(r2) {
    e2.current = t$4(r2);
  } };
}
function t$3() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i$1() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n$5() {
  return t$3() || i$1();
}
var Be$2 = ((e2) => (e2[e2.Open = 0] = "Open", e2[e2.Closed = 1] = "Closed", e2))(Be$2 || {}), ke$1 = ((e2) => (e2[e2.Single = 0] = "Single", e2[e2.Multi = 1] = "Multi", e2))(ke$1 || {}), we$1 = ((e2) => (e2[e2.Pointer = 0] = "Pointer", e2[e2.Other = 1] = "Other", e2))(we$1 || {}), Ue$2 = ((n2) => (n2[n2.OpenCombobox = 0] = "OpenCombobox", n2[n2.CloseCombobox = 1] = "CloseCombobox", n2[n2.GoToOption = 2] = "GoToOption", n2[n2.RegisterOption = 3] = "RegisterOption", n2[n2.UnregisterOption = 4] = "UnregisterOption", n2[n2.RegisterLabel = 5] = "RegisterLabel", n2))(Ue$2 || {});
function re$2(t2, l2 = (e2) => e2) {
  let e2 = t2.activeOptionIndex !== null ? t2.options[t2.activeOptionIndex] : null, r2 = A$4(l2(t2.options.slice()), (s2) => s2.dataRef.current.domRef.current), i2 = e2 ? r2.indexOf(e2) : null;
  return i2 === -1 && (i2 = null), { options: r2, activeOptionIndex: i2 };
}
let He$3 = { [1](t2) {
  var l2;
  return (l2 = t2.dataRef.current) != null && l2.disabled || t2.comboboxState === 1 ? t2 : { ...t2, activeOptionIndex: null, comboboxState: 1 };
}, [0](t2) {
  var e2;
  if ((e2 = t2.dataRef.current) != null && e2.disabled || t2.comboboxState === 0)
    return t2;
  let l2 = t2.activeOptionIndex;
  if (t2.dataRef.current) {
    let { isSelected: r2 } = t2.dataRef.current, i2 = t2.options.findIndex((s2) => r2(s2.dataRef.current.value));
    i2 !== -1 && (l2 = i2);
  }
  return { ...t2, comboboxState: 0, activeOptionIndex: l2 };
}, [2](t2, l2) {
  var i2, s2, n2, d2;
  if ((i2 = t2.dataRef.current) != null && i2.disabled || (s2 = t2.dataRef.current) != null && s2.optionsRef.current && !((n2 = t2.dataRef.current) != null && n2.optionsPropsRef.current.static) && t2.comboboxState === 1)
    return t2;
  let e2 = re$2(t2);
  if (e2.activeOptionIndex === null) {
    let o3 = e2.options.findIndex((u2) => !u2.dataRef.current.disabled);
    o3 !== -1 && (e2.activeOptionIndex = o3);
  }
  let r2 = x$3(l2, { resolveItems: () => e2.options, resolveActiveIndex: () => e2.activeOptionIndex, resolveId: (o3) => o3.id, resolveDisabled: (o3) => o3.dataRef.current.disabled });
  return { ...t2, ...e2, activeOptionIndex: r2, activationTrigger: (d2 = l2.trigger) != null ? d2 : 1 };
}, [3]: (t2, l2) => {
  var s2, n2;
  let e2 = { id: l2.id, dataRef: l2.dataRef }, r2 = re$2(t2, (d2) => [...d2, e2]);
  t2.activeOptionIndex === null && (s2 = t2.dataRef.current) != null && s2.isSelected(l2.dataRef.current.value) && (r2.activeOptionIndex = r2.options.indexOf(e2));
  let i2 = { ...t2, ...r2, activationTrigger: 1 };
  return (n2 = t2.dataRef.current) != null && n2.__demoMode && t2.dataRef.current.value === void 0 && (i2.activeOptionIndex = 0), i2;
}, [4]: (t2, l2) => {
  let e2 = re$2(t2, (r2) => {
    let i2 = r2.findIndex((s2) => s2.id === l2.id);
    return i2 !== -1 && r2.splice(i2, 1), r2;
  });
  return { ...t2, ...e2, activationTrigger: 1 };
}, [5]: (t2, l2) => ({ ...t2, labelId: l2.id }) }, ae$1 = reactExports.createContext(null);
ae$1.displayName = "ComboboxActionsContext";
function $$2(t2) {
  let l2 = reactExports.useContext(ae$1);
  if (l2 === null) {
    let e2 = new Error(`<${t2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e2, $$2), e2;
  }
  return l2;
}
let le$1 = reactExports.createContext(null);
le$1.displayName = "ComboboxDataContext";
function H$2(t2) {
  let l2 = reactExports.useContext(le$1);
  if (l2 === null) {
    let e2 = new Error(`<${t2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e2, H$2), e2;
  }
  return l2;
}
function Ne$2(t2, l2) {
  return u$5(l2.type, He$3, t2, l2);
}
let Ge$1 = reactExports.Fragment;
function Xe$1(t2, l2) {
  let { value: e2, defaultValue: r2, onChange: i2, name: s2, by: n2 = (p2, T2) => p2 === T2, disabled: d2 = false, __demoMode: o3 = false, nullable: u2 = false, multiple: P2 = false, ...f2 } = t2, [O2 = P2 ? [] : void 0, m2] = T$1(e2, i2, r2), [g2, c2] = reactExports.useReducer(Ne$2, { dataRef: reactExports.createRef(), comboboxState: o3 ? 0 : 1, options: [], activeOptionIndex: null, activationTrigger: 1, labelId: null }), C2 = reactExports.useRef(false), N2 = reactExports.useRef({ static: false, hold: false }), F2 = reactExports.useRef(null), _2 = reactExports.useRef(null), h2 = reactExports.useRef(null), B2 = reactExports.useRef(null), V2 = o$3(typeof n2 == "string" ? (p2, T2) => {
    let v2 = n2;
    return (p2 == null ? void 0 : p2[v2]) === (T2 == null ? void 0 : T2[v2]);
  } : n2), G2 = reactExports.useCallback((p2) => u$5(b2.mode, { [1]: () => O2.some((T2) => V2(T2, p2)), [0]: () => V2(O2, p2) }), [O2]), b2 = reactExports.useMemo(() => ({ ...g2, optionsPropsRef: N2, labelRef: F2, inputRef: _2, buttonRef: h2, optionsRef: B2, value: O2, defaultValue: r2, disabled: d2, mode: P2 ? 1 : 0, get activeOptionIndex() {
    if (C2.current && g2.activeOptionIndex === null && g2.options.length > 0) {
      let p2 = g2.options.findIndex((T2) => !T2.dataRef.current.disabled);
      if (p2 !== -1)
        return p2;
    }
    return g2.activeOptionIndex;
  }, compare: V2, isSelected: G2, nullable: u2, __demoMode: o3 }), [O2, r2, d2, P2, u2, o3, g2]), L2 = reactExports.useRef(b2.activeOptionIndex !== null ? b2.options[b2.activeOptionIndex] : null);
  reactExports.useEffect(() => {
    let p2 = b2.activeOptionIndex !== null ? b2.options[b2.activeOptionIndex] : null;
    L2.current !== p2 && (L2.current = p2);
  }), l$6(() => {
    g2.dataRef.current = b2;
  }, [b2]), L$2([b2.buttonRef, b2.inputRef, b2.optionsRef], () => oe2.closeCombobox(), b2.comboboxState === 0);
  let y2 = reactExports.useMemo(() => ({ open: b2.comboboxState === 0, disabled: d2, activeIndex: b2.activeOptionIndex, activeOption: b2.activeOptionIndex === null ? null : b2.options[b2.activeOptionIndex].dataRef.current.value, value: O2 }), [b2, d2, O2]), a2 = o$3((p2) => {
    let T2 = b2.options.find((v2) => v2.id === p2);
    T2 && j2(T2.dataRef.current.value);
  }), I2 = o$3(() => {
    if (b2.activeOptionIndex !== null) {
      let { dataRef: p2, id: T2 } = b2.options[b2.activeOptionIndex];
      j2(p2.current.value), oe2.goToOption(a$2.Specific, T2);
    }
  }), S2 = o$3(() => {
    c2({ type: 0 }), C2.current = true;
  }), X2 = o$3(() => {
    c2({ type: 1 }), C2.current = false;
  }), q2 = o$3((p2, T2, v2) => (C2.current = false, p2 === a$2.Specific ? c2({ type: 2, focus: a$2.Specific, id: T2, trigger: v2 }) : c2({ type: 2, focus: p2, trigger: v2 }))), Q2 = o$3((p2, T2) => (c2({ type: 3, id: p2, dataRef: T2 }), () => {
    var v2;
    ((v2 = L2.current) == null ? void 0 : v2.id) === p2 && (C2.current = true), c2({ type: 4, id: p2 });
  })), Y2 = o$3((p2) => (c2({ type: 5, id: p2 }), () => c2({ type: 5, id: null }))), j2 = o$3((p2) => u$5(b2.mode, { [0]() {
    return m2 == null ? void 0 : m2(p2);
  }, [1]() {
    let T2 = b2.value.slice(), v2 = T2.findIndex((J2) => V2(J2, p2));
    return v2 === -1 ? T2.push(p2) : T2.splice(v2, 1), m2 == null ? void 0 : m2(T2);
  } })), oe2 = reactExports.useMemo(() => ({ onChange: j2, registerOption: Q2, registerLabel: Y2, goToOption: q2, closeCombobox: X2, openCombobox: S2, selectActiveOption: I2, selectOption: a2 }), []), ce2 = l2 === null ? {} : { ref: l2 }, Z2 = reactExports.useRef(null), Te2 = p$5();
  return reactExports.useEffect(() => {
    Z2.current && r2 !== void 0 && Te2.addEventListener(Z2.current, "reset", () => {
      j2(r2);
    });
  }, [Z2, j2]), React$j.createElement(ae$1.Provider, { value: oe2 }, React$j.createElement(le$1.Provider, { value: b2 }, React$j.createElement(c$3, { value: u$5(b2.comboboxState, { [0]: d$4.Open, [1]: d$4.Closed }) }, s2 != null && O2 != null && e$3({ [s2]: O2 }).map(([p2, T2], v2) => React$j.createElement(c$4, { features: p$4.Hidden, ref: v2 === 0 ? (J2) => {
    var ie2;
    Z2.current = (ie2 = J2 == null ? void 0 : J2.closest("form")) != null ? ie2 : null;
  } : void 0, ...P$1({ key: p2, as: "input", type: "hidden", hidden: true, readOnly: true, name: p2, value: T2 }) })), D$3({ ourProps: ce2, theirProps: f2, slot: y2, defaultTag: Ge$1, name: "Combobox" }))));
}
let je$2 = "input";
function Je$1(t2, l2) {
  var G2, b2, L2, y2;
  let e2 = I$4(), { id: r2 = `headlessui-combobox-input-${e2}`, onChange: i2, displayValue: s2, type: n2 = "text", ...d2 } = t2, o3 = H$2("Combobox.Input"), u2 = $$2("Combobox.Input"), P2 = y$4(o3.inputRef, l2), f2 = reactExports.useRef(false), O2 = p$5(), m2 = function() {
    var a2;
    return typeof s2 == "function" && o3.value !== void 0 ? (a2 = s2(o3.value)) != null ? a2 : "" : typeof o3.value == "string" ? o3.value : "";
  }();
  m$4(([a2, I2], [S2, X2]) => {
    f2.current || o3.inputRef.current && (X2 === 0 && I2 === 1 || a2 !== S2) && (o3.inputRef.current.value = a2);
  }, [m2, o3.comboboxState]), m$4(([a2], [I2]) => {
    if (a2 === 0 && I2 === 1) {
      let S2 = o3.inputRef.current;
      if (!S2)
        return;
      let X2 = S2.value, { selectionStart: q2, selectionEnd: Q2, selectionDirection: Y2 } = S2;
      S2.value = "", S2.value = X2, Y2 !== null ? S2.setSelectionRange(q2, Q2, Y2) : S2.setSelectionRange(q2, Q2);
    }
  }, [o3.comboboxState]);
  let g2 = reactExports.useRef(false), c2 = o$3(() => {
    g2.current = true;
  }), C2 = o$3(() => {
    setTimeout(() => {
      g2.current = false;
    });
  }), N2 = o$3((a2) => {
    switch (f2.current = true, a2.key) {
      case o$1.Backspace:
      case o$1.Delete:
        if (o3.mode !== 0 || !o3.nullable)
          return;
        let I2 = a2.currentTarget;
        O2.requestAnimationFrame(() => {
          I2.value === "" && (u2.onChange(null), o3.optionsRef.current && (o3.optionsRef.current.scrollTop = 0), u2.goToOption(a$2.Nothing));
        });
        break;
      case o$1.Enter:
        if (f2.current = false, o3.comboboxState !== 0 || g2.current)
          return;
        if (a2.preventDefault(), a2.stopPropagation(), o3.activeOptionIndex === null) {
          u2.closeCombobox();
          return;
        }
        u2.selectActiveOption(), o3.mode === 0 && u2.closeCombobox();
        break;
      case o$1.ArrowDown:
        return f2.current = false, a2.preventDefault(), a2.stopPropagation(), u$5(o3.comboboxState, { [0]: () => {
          u2.goToOption(a$2.Next);
        }, [1]: () => {
          u2.openCombobox();
        } });
      case o$1.ArrowUp:
        return f2.current = false, a2.preventDefault(), a2.stopPropagation(), u$5(o3.comboboxState, { [0]: () => {
          u2.goToOption(a$2.Previous);
        }, [1]: () => {
          u2.openCombobox(), O2.nextFrame(() => {
            o3.value || u2.goToOption(a$2.Last);
          });
        } });
      case o$1.Home:
        if (a2.shiftKey)
          break;
        return f2.current = false, a2.preventDefault(), a2.stopPropagation(), u2.goToOption(a$2.First);
      case o$1.PageUp:
        return f2.current = false, a2.preventDefault(), a2.stopPropagation(), u2.goToOption(a$2.First);
      case o$1.End:
        if (a2.shiftKey)
          break;
        return f2.current = false, a2.preventDefault(), a2.stopPropagation(), u2.goToOption(a$2.Last);
      case o$1.PageDown:
        return f2.current = false, a2.preventDefault(), a2.stopPropagation(), u2.goToOption(a$2.Last);
      case o$1.Escape:
        return f2.current = false, o3.comboboxState !== 0 ? void 0 : (a2.preventDefault(), o3.optionsRef.current && !o3.optionsPropsRef.current.static && a2.stopPropagation(), u2.closeCombobox());
      case o$1.Tab:
        if (f2.current = false, o3.comboboxState !== 0)
          return;
        o3.mode === 0 && u2.selectActiveOption(), u2.closeCombobox();
        break;
    }
  }), F2 = o$3((a2) => {
    u2.openCombobox(), i2 == null || i2(a2);
  }), _2 = o$3(() => {
    f2.current = false;
  }), h2 = i$4(() => {
    if (o3.labelId)
      return [o3.labelId].join(" ");
  }, [o3.labelId]), B2 = reactExports.useMemo(() => ({ open: o3.comboboxState === 0, disabled: o3.disabled }), [o3]), V2 = { ref: P2, id: r2, role: "combobox", type: n2, "aria-controls": (G2 = o3.optionsRef.current) == null ? void 0 : G2.id, "aria-expanded": o3.disabled ? void 0 : o3.comboboxState === 0, "aria-activedescendant": o3.activeOptionIndex === null || (b2 = o3.options[o3.activeOptionIndex]) == null ? void 0 : b2.id, "aria-labelledby": h2, "aria-autocomplete": "list", defaultValue: (y2 = (L2 = t2.defaultValue) != null ? L2 : o3.defaultValue !== void 0 ? s2 == null ? void 0 : s2(o3.defaultValue) : null) != null ? y2 : o3.defaultValue, disabled: o3.disabled, onCompositionStart: c2, onCompositionEnd: C2, onKeyDown: N2, onChange: F2, onBlur: _2 };
  return D$3({ ourProps: V2, theirProps: d2, slot: B2, defaultTag: je$2, name: "Combobox.Input" });
}
let Ke$2 = "button";
function We$1(t2, l2) {
  var g2;
  let e2 = H$2("Combobox.Button"), r2 = $$2("Combobox.Button"), i2 = y$4(e2.buttonRef, l2), s2 = I$4(), { id: n2 = `headlessui-combobox-button-${s2}`, ...d2 } = t2, o3 = p$5(), u2 = o$3((c2) => {
    switch (c2.key) {
      case o$1.ArrowDown:
        return c2.preventDefault(), c2.stopPropagation(), e2.comboboxState === 1 && r2.openCombobox(), o3.nextFrame(() => {
          var C2;
          return (C2 = e2.inputRef.current) == null ? void 0 : C2.focus({ preventScroll: true });
        });
      case o$1.ArrowUp:
        return c2.preventDefault(), c2.stopPropagation(), e2.comboboxState === 1 && (r2.openCombobox(), o3.nextFrame(() => {
          e2.value || r2.goToOption(a$2.Last);
        })), o3.nextFrame(() => {
          var C2;
          return (C2 = e2.inputRef.current) == null ? void 0 : C2.focus({ preventScroll: true });
        });
      case o$1.Escape:
        return e2.comboboxState !== 0 ? void 0 : (c2.preventDefault(), e2.optionsRef.current && !e2.optionsPropsRef.current.static && c2.stopPropagation(), r2.closeCombobox(), o3.nextFrame(() => {
          var C2;
          return (C2 = e2.inputRef.current) == null ? void 0 : C2.focus({ preventScroll: true });
        }));
      default:
        return;
    }
  }), P2 = o$3((c2) => {
    if (r$4(c2.currentTarget))
      return c2.preventDefault();
    e2.comboboxState === 0 ? r2.closeCombobox() : (c2.preventDefault(), r2.openCombobox()), o3.nextFrame(() => {
      var C2;
      return (C2 = e2.inputRef.current) == null ? void 0 : C2.focus({ preventScroll: true });
    });
  }), f2 = i$4(() => {
    if (e2.labelId)
      return [e2.labelId, n2].join(" ");
  }, [e2.labelId, n2]), O2 = reactExports.useMemo(() => ({ open: e2.comboboxState === 0, disabled: e2.disabled, value: e2.value }), [e2]), m2 = { ref: i2, id: n2, type: s$3(t2, e2.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (g2 = e2.optionsRef.current) == null ? void 0 : g2.id, "aria-expanded": e2.disabled ? void 0 : e2.comboboxState === 0, "aria-labelledby": f2, disabled: e2.disabled, onClick: P2, onKeyDown: u2 };
  return D$3({ ourProps: m2, theirProps: d2, slot: O2, defaultTag: Ke$2, name: "Combobox.Button" });
}
let $e$1 = "label";
function qe$2(t2, l2) {
  let e2 = I$4(), { id: r2 = `headlessui-combobox-label-${e2}`, ...i2 } = t2, s2 = H$2("Combobox.Label"), n2 = $$2("Combobox.Label"), d2 = y$4(s2.labelRef, l2);
  l$6(() => n2.registerLabel(r2), [r2]);
  let o3 = o$3(() => {
    var f2;
    return (f2 = s2.inputRef.current) == null ? void 0 : f2.focus({ preventScroll: true });
  }), u2 = reactExports.useMemo(() => ({ open: s2.comboboxState === 0, disabled: s2.disabled }), [s2]);
  return D$3({ ourProps: { ref: d2, id: r2, onClick: o3 }, theirProps: i2, slot: u2, defaultTag: $e$1, name: "Combobox.Label" });
}
let Qe$1 = "ul", Ye$1 = j$1.RenderStrategy | j$1.Static;
function Ze$1(t2, l2) {
  let e2 = I$4(), { id: r2 = `headlessui-combobox-options-${e2}`, hold: i2 = false, ...s2 } = t2, n2 = H$2("Combobox.Options"), d2 = y$4(n2.optionsRef, l2), o3 = C$2(), u2 = (() => o3 !== null ? (o3 & d$4.Open) === d$4.Open : n2.comboboxState === 0)();
  l$6(() => {
    var m2;
    n2.optionsPropsRef.current.static = (m2 = t2.static) != null ? m2 : false;
  }, [n2.optionsPropsRef, t2.static]), l$6(() => {
    n2.optionsPropsRef.current.hold = i2;
  }, [n2.optionsPropsRef, i2]), F$4({ container: n2.optionsRef.current, enabled: n2.comboboxState === 0, accept(m2) {
    return m2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : m2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(m2) {
    m2.setAttribute("role", "none");
  } });
  let P2 = i$4(() => {
    var m2, g2;
    return (g2 = n2.labelId) != null ? g2 : (m2 = n2.buttonRef.current) == null ? void 0 : m2.id;
  }, [n2.labelId, n2.buttonRef.current]), f2 = reactExports.useMemo(() => ({ open: n2.comboboxState === 0 }), [n2]), O2 = { "aria-labelledby": P2, role: "listbox", "aria-multiselectable": n2.mode === 1 ? true : void 0, id: r2, ref: d2 };
  return D$3({ ourProps: O2, theirProps: s2, slot: f2, defaultTag: Qe$1, features: Ye$1, visible: u2, name: "Combobox.Options" });
}
let ze$1 = "li";
function eo(t2, l2) {
  var b2, L2;
  let e2 = I$4(), { id: r2 = `headlessui-combobox-option-${e2}`, disabled: i2 = false, value: s2, ...n2 } = t2, d2 = H$2("Combobox.Option"), o3 = $$2("Combobox.Option"), u2 = d2.activeOptionIndex !== null ? d2.options[d2.activeOptionIndex].id === r2 : false, P2 = d2.isSelected(s2), f2 = reactExports.useRef(null), O2 = s$4({ disabled: i2, value: s2, domRef: f2, textValue: (L2 = (b2 = f2.current) == null ? void 0 : b2.textContent) == null ? void 0 : L2.toLowerCase() }), m2 = y$4(l2, f2), g2 = o$3(() => o3.selectOption(r2));
  l$6(() => o3.registerOption(r2, O2), [O2, r2]);
  let c2 = reactExports.useRef(!d2.__demoMode);
  l$6(() => {
    if (!d2.__demoMode)
      return;
    let y2 = o$4();
    return y2.requestAnimationFrame(() => {
      c2.current = true;
    }), y2.dispose;
  }, []), l$6(() => {
    if (d2.comboboxState !== 0 || !u2 || !c2.current || d2.activationTrigger === 0)
      return;
    let y2 = o$4();
    return y2.requestAnimationFrame(() => {
      var a2, I2;
      (I2 = (a2 = f2.current) == null ? void 0 : a2.scrollIntoView) == null || I2.call(a2, { block: "nearest" });
    }), y2.dispose;
  }, [f2, u2, d2.comboboxState, d2.activationTrigger, d2.activeOptionIndex]);
  let C2 = o$3((y2) => {
    if (i2)
      return y2.preventDefault();
    g2(), d2.mode === 0 && o3.closeCombobox(), n$5() || requestAnimationFrame(() => {
      var a2;
      return (a2 = d2.inputRef.current) == null ? void 0 : a2.focus();
    });
  }), N2 = o$3(() => {
    if (i2)
      return o3.goToOption(a$2.Nothing);
    o3.goToOption(a$2.Specific, r2);
  }), F2 = u$3(), _2 = o$3((y2) => F2.update(y2)), h2 = o$3((y2) => {
    F2.wasMoved(y2) && (i2 || u2 || o3.goToOption(a$2.Specific, r2, 0));
  }), B2 = o$3((y2) => {
    F2.wasMoved(y2) && (i2 || u2 && (d2.optionsPropsRef.current.hold || o3.goToOption(a$2.Nothing)));
  }), V2 = reactExports.useMemo(() => ({ active: u2, selected: P2, disabled: i2 }), [u2, P2, i2]);
  return D$3({ ourProps: { id: r2, ref: m2, role: "option", tabIndex: i2 === true ? void 0 : -1, "aria-disabled": i2 === true ? true : void 0, "aria-selected": P2, disabled: void 0, onClick: C2, onFocus: N2, onPointerEnter: _2, onMouseEnter: _2, onPointerMove: h2, onMouseMove: h2, onPointerLeave: B2, onMouseLeave: B2 }, theirProps: n2, slot: V2, defaultTag: ze$1, name: "Combobox.Option" });
}
let oo = L$1(Xe$1), to = L$1(We$1), no = L$1(Je$1), ro = L$1(qe$2), ao = L$1(Ze$1), lo = L$1(eo), Ko = Object.assign(oo, { Input: no, Button: to, Label: ro, Options: ao, Option: lo });
function f$3() {
  let e2 = reactExports.useRef(false);
  return l$6(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}
function n$4(...e2) {
  return reactExports.useMemo(() => e$5(...e2), [...e2]);
}
var _e$1 = ((o3) => (o3[o3.Open = 0] = "Open", o3[o3.Closed = 1] = "Closed", o3))(_e$1 || {}), Ue$1 = ((o3) => (o3[o3.Single = 0] = "Single", o3[o3.Multi = 1] = "Multi", o3))(Ue$1 || {}), Be$1 = ((o3) => (o3[o3.Pointer = 0] = "Pointer", o3[o3.Other = 1] = "Other", o3))(Be$1 || {}), He$2 = ((i2) => (i2[i2.OpenListbox = 0] = "OpenListbox", i2[i2.CloseListbox = 1] = "CloseListbox", i2[i2.GoToOption = 2] = "GoToOption", i2[i2.Search = 3] = "Search", i2[i2.ClearSearch = 4] = "ClearSearch", i2[i2.RegisterOption = 5] = "RegisterOption", i2[i2.UnregisterOption = 6] = "UnregisterOption", i2[i2.RegisterLabel = 7] = "RegisterLabel", i2))(He$2 || {});
function $$1(e2, r2 = (o3) => o3) {
  let o3 = e2.activeOptionIndex !== null ? e2.options[e2.activeOptionIndex] : null, n2 = A$4(r2(e2.options.slice()), (t2) => t2.dataRef.current.domRef.current), a2 = o3 ? n2.indexOf(o3) : null;
  return a2 === -1 && (a2 = null), { options: n2, activeOptionIndex: a2 };
}
let Ge = { [1](e2) {
  return e2.dataRef.current.disabled || e2.listboxState === 1 ? e2 : { ...e2, activeOptionIndex: null, listboxState: 1 };
}, [0](e2) {
  if (e2.dataRef.current.disabled || e2.listboxState === 0)
    return e2;
  let r2 = e2.activeOptionIndex, { isSelected: o3 } = e2.dataRef.current, n2 = e2.options.findIndex((a2) => o3(a2.dataRef.current.value));
  return n2 !== -1 && (r2 = n2), { ...e2, listboxState: 0, activeOptionIndex: r2 };
}, [2](e2, r2) {
  var a2;
  if (e2.dataRef.current.disabled || e2.listboxState === 1)
    return e2;
  let o3 = $$1(e2), n2 = x$3(r2, { resolveItems: () => o3.options, resolveActiveIndex: () => o3.activeOptionIndex, resolveId: (t2) => t2.id, resolveDisabled: (t2) => t2.dataRef.current.disabled });
  return { ...e2, ...o3, searchQuery: "", activeOptionIndex: n2, activationTrigger: (a2 = r2.trigger) != null ? a2 : 1 };
}, [3]: (e2, r2) => {
  if (e2.dataRef.current.disabled || e2.listboxState === 1)
    return e2;
  let n2 = e2.searchQuery !== "" ? 0 : 1, a2 = e2.searchQuery + r2.value.toLowerCase(), u2 = (e2.activeOptionIndex !== null ? e2.options.slice(e2.activeOptionIndex + n2).concat(e2.options.slice(0, e2.activeOptionIndex + n2)) : e2.options).find((i2) => {
    var b2;
    return !i2.dataRef.current.disabled && ((b2 = i2.dataRef.current.textValue) == null ? void 0 : b2.startsWith(a2));
  }), c2 = u2 ? e2.options.indexOf(u2) : -1;
  return c2 === -1 || c2 === e2.activeOptionIndex ? { ...e2, searchQuery: a2 } : { ...e2, searchQuery: a2, activeOptionIndex: c2, activationTrigger: 1 };
}, [4](e2) {
  return e2.dataRef.current.disabled || e2.listboxState === 1 || e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "" };
}, [5]: (e2, r2) => {
  let o3 = { id: r2.id, dataRef: r2.dataRef }, n2 = $$1(e2, (a2) => [...a2, o3]);
  return e2.activeOptionIndex === null && e2.dataRef.current.isSelected(r2.dataRef.current.value) && (n2.activeOptionIndex = n2.options.indexOf(o3)), { ...e2, ...n2 };
}, [6]: (e2, r2) => {
  let o3 = $$1(e2, (n2) => {
    let a2 = n2.findIndex((t2) => t2.id === r2.id);
    return a2 !== -1 && n2.splice(a2, 1), n2;
  });
  return { ...e2, ...o3, activationTrigger: 1 };
}, [7]: (e2, r2) => ({ ...e2, labelId: r2.id }) }, z$3 = reactExports.createContext(null);
z$3.displayName = "ListboxActionsContext";
function U$2(e2) {
  let r2 = reactExports.useContext(z$3);
  if (r2 === null) {
    let o3 = new Error(`<${e2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, U$2), o3;
  }
  return r2;
}
let J$1 = reactExports.createContext(null);
J$1.displayName = "ListboxDataContext";
function B$2(e2) {
  let r2 = reactExports.useContext(J$1);
  if (r2 === null) {
    let o3 = new Error(`<${e2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, B$2), o3;
  }
  return r2;
}
function Ne$1(e2, r2) {
  return u$5(r2.type, Ge, e2, r2);
}
let je$1 = reactExports.Fragment;
function Ve(e2, r2) {
  let { value: o3, defaultValue: n2, name: a2, onChange: t2, by: u2 = (s2, f2) => s2 === f2, disabled: c2 = false, horizontal: i2 = false, multiple: b2 = false, ...A2 } = e2;
  const m2 = i2 ? "horizontal" : "vertical";
  let P2 = y$4(r2), [g2 = b2 ? [] : void 0, v2] = T$1(o3, t2, n2), [S2, p2] = reactExports.useReducer(Ne$1, { dataRef: reactExports.createRef(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), l2 = reactExports.useRef({ static: false, hold: false }), x = reactExports.useRef(null), E2 = reactExports.useRef(null), W2 = reactExports.useRef(null), C2 = o$3(typeof u2 == "string" ? (s2, f2) => {
    let O2 = u2;
    return (s2 == null ? void 0 : s2[O2]) === (f2 == null ? void 0 : f2[O2]);
  } : u2), L2 = reactExports.useCallback((s2) => u$5(d2.mode, { [1]: () => g2.some((f2) => C2(f2, s2)), [0]: () => C2(g2, s2) }), [g2]), d2 = reactExports.useMemo(() => ({ ...S2, value: g2, disabled: c2, mode: b2 ? 1 : 0, orientation: m2, compare: C2, isSelected: L2, optionsPropsRef: l2, labelRef: x, buttonRef: E2, optionsRef: W2 }), [g2, c2, b2, S2]);
  l$6(() => {
    S2.dataRef.current = d2;
  }, [d2]), L$2([d2.buttonRef, d2.optionsRef], (s2, f2) => {
    var O2;
    p2({ type: 1 }), h$4(f2, F$5.Loose) || (s2.preventDefault(), (O2 = d2.buttonRef.current) == null || O2.focus());
  }, d2.listboxState === 0);
  let H2 = reactExports.useMemo(() => ({ open: d2.listboxState === 0, disabled: c2, value: g2 }), [d2, c2, g2]), ne2 = o$3((s2) => {
    let f2 = d2.options.find((O2) => O2.id === s2);
    f2 && F2(f2.dataRef.current.value);
  }), ie2 = o$3(() => {
    if (d2.activeOptionIndex !== null) {
      let { dataRef: s2, id: f2 } = d2.options[d2.activeOptionIndex];
      F2(s2.current.value), p2({ type: 2, focus: a$2.Specific, id: f2 });
    }
  }), re2 = o$3(() => p2({ type: 0 })), ae2 = o$3(() => p2({ type: 1 })), le2 = o$3((s2, f2, O2) => s2 === a$2.Specific ? p2({ type: 2, focus: a$2.Specific, id: f2, trigger: O2 }) : p2({ type: 2, focus: s2, trigger: O2 })), se2 = o$3((s2, f2) => (p2({ type: 5, id: s2, dataRef: f2 }), () => p2({ type: 6, id: s2 }))), pe2 = o$3((s2) => (p2({ type: 7, id: s2 }), () => p2({ type: 7, id: null }))), F2 = o$3((s2) => u$5(d2.mode, { [0]() {
    return v2 == null ? void 0 : v2(s2);
  }, [1]() {
    let f2 = d2.value.slice(), O2 = f2.findIndex((M2) => C2(M2, s2));
    return O2 === -1 ? f2.push(s2) : f2.splice(O2, 1), v2 == null ? void 0 : v2(f2);
  } })), ue2 = o$3((s2) => p2({ type: 3, value: s2 })), de2 = o$3(() => p2({ type: 4 })), ce2 = reactExports.useMemo(() => ({ onChange: F2, registerOption: se2, registerLabel: pe2, goToOption: le2, closeListbox: ae2, openListbox: re2, selectActiveOption: ie2, selectOption: ne2, search: ue2, clearSearch: de2 }), []), fe2 = { ref: P2 }, G2 = reactExports.useRef(null), Te2 = p$5();
  return reactExports.useEffect(() => {
    G2.current && n2 !== void 0 && Te2.addEventListener(G2.current, "reset", () => {
      F2(n2);
    });
  }, [G2, F2]), React$j.createElement(z$3.Provider, { value: ce2 }, React$j.createElement(J$1.Provider, { value: d2 }, React$j.createElement(c$3, { value: u$5(d2.listboxState, { [0]: d$4.Open, [1]: d$4.Closed }) }, a2 != null && g2 != null && e$3({ [a2]: g2 }).map(([s2, f2], O2) => React$j.createElement(c$4, { features: p$4.Hidden, ref: O2 === 0 ? (M2) => {
    var q2;
    G2.current = (q2 = M2 == null ? void 0 : M2.closest("form")) != null ? q2 : null;
  } : void 0, ...P$1({ key: s2, as: "input", type: "hidden", hidden: true, readOnly: true, name: s2, value: f2 }) })), D$3({ ourProps: fe2, theirProps: A2, slot: H2, defaultTag: je$1, name: "Listbox" }))));
}
let Ke$1 = "button";
function Qe(e2, r2) {
  var S2;
  let o3 = I$4(), { id: n2 = `headlessui-listbox-button-${o3}`, ...a2 } = e2, t2 = B$2("Listbox.Button"), u2 = U$2("Listbox.Button"), c2 = y$4(t2.buttonRef, r2), i2 = p$5(), b2 = o$3((p2) => {
    switch (p2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        p2.preventDefault(), u2.openListbox(), i2.nextFrame(() => {
          t2.value || u2.goToOption(a$2.First);
        });
        break;
      case o$1.ArrowUp:
        p2.preventDefault(), u2.openListbox(), i2.nextFrame(() => {
          t2.value || u2.goToOption(a$2.Last);
        });
        break;
    }
  }), A2 = o$3((p2) => {
    switch (p2.key) {
      case o$1.Space:
        p2.preventDefault();
        break;
    }
  }), m2 = o$3((p2) => {
    if (r$4(p2.currentTarget))
      return p2.preventDefault();
    t2.listboxState === 0 ? (u2.closeListbox(), i2.nextFrame(() => {
      var l2;
      return (l2 = t2.buttonRef.current) == null ? void 0 : l2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), u2.openListbox());
  }), P2 = i$4(() => {
    if (t2.labelId)
      return [t2.labelId, n2].join(" ");
  }, [t2.labelId, n2]), g2 = reactExports.useMemo(() => ({ open: t2.listboxState === 0, disabled: t2.disabled, value: t2.value }), [t2]), v2 = { ref: c2, id: n2, type: s$3(e2, t2.buttonRef), "aria-haspopup": "listbox", "aria-controls": (S2 = t2.optionsRef.current) == null ? void 0 : S2.id, "aria-expanded": t2.disabled ? void 0 : t2.listboxState === 0, "aria-labelledby": P2, disabled: t2.disabled, onKeyDown: b2, onKeyUp: A2, onClick: m2 };
  return D$3({ ourProps: v2, theirProps: a2, slot: g2, defaultTag: Ke$1, name: "Listbox.Button" });
}
let We = "label";
function Xe(e2, r2) {
  let o3 = I$4(), { id: n2 = `headlessui-listbox-label-${o3}`, ...a2 } = e2, t2 = B$2("Listbox.Label"), u2 = U$2("Listbox.Label"), c2 = y$4(t2.labelRef, r2);
  l$6(() => u2.registerLabel(n2), [n2]);
  let i2 = o$3(() => {
    var m2;
    return (m2 = t2.buttonRef.current) == null ? void 0 : m2.focus({ preventScroll: true });
  }), b2 = reactExports.useMemo(() => ({ open: t2.listboxState === 0, disabled: t2.disabled }), [t2]);
  return D$3({ ourProps: { ref: c2, id: n2, onClick: i2 }, theirProps: a2, slot: b2, defaultTag: We, name: "Listbox.Label" });
}
let $e = "ul", ze = j$1.RenderStrategy | j$1.Static;
function Je(e2, r2) {
  var p2;
  let o3 = I$4(), { id: n2 = `headlessui-listbox-options-${o3}`, ...a2 } = e2, t2 = B$2("Listbox.Options"), u2 = U$2("Listbox.Options"), c2 = y$4(t2.optionsRef, r2), i2 = p$5(), b2 = p$5(), A2 = C$2(), m2 = (() => A2 !== null ? (A2 & d$4.Open) === d$4.Open : t2.listboxState === 0)();
  reactExports.useEffect(() => {
    var x;
    let l2 = t2.optionsRef.current;
    l2 && t2.listboxState === 0 && l2 !== ((x = e$5(l2)) == null ? void 0 : x.activeElement) && l2.focus({ preventScroll: true });
  }, [t2.listboxState, t2.optionsRef]);
  let P2 = o$3((l2) => {
    switch (b2.dispose(), l2.key) {
      case o$1.Space:
        if (t2.searchQuery !== "")
          return l2.preventDefault(), l2.stopPropagation(), u2.search(l2.key);
      case o$1.Enter:
        if (l2.preventDefault(), l2.stopPropagation(), t2.activeOptionIndex !== null) {
          let { dataRef: x } = t2.options[t2.activeOptionIndex];
          u2.onChange(x.current.value);
        }
        t2.mode === 0 && (u2.closeListbox(), o$4().nextFrame(() => {
          var x;
          return (x = t2.buttonRef.current) == null ? void 0 : x.focus({ preventScroll: true });
        }));
        break;
      case u$5(t2.orientation, { vertical: o$1.ArrowDown, horizontal: o$1.ArrowRight }):
        return l2.preventDefault(), l2.stopPropagation(), u2.goToOption(a$2.Next);
      case u$5(t2.orientation, { vertical: o$1.ArrowUp, horizontal: o$1.ArrowLeft }):
        return l2.preventDefault(), l2.stopPropagation(), u2.goToOption(a$2.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return l2.preventDefault(), l2.stopPropagation(), u2.goToOption(a$2.First);
      case o$1.End:
      case o$1.PageDown:
        return l2.preventDefault(), l2.stopPropagation(), u2.goToOption(a$2.Last);
      case o$1.Escape:
        return l2.preventDefault(), l2.stopPropagation(), u2.closeListbox(), i2.nextFrame(() => {
          var x;
          return (x = t2.buttonRef.current) == null ? void 0 : x.focus({ preventScroll: true });
        });
      case o$1.Tab:
        l2.preventDefault(), l2.stopPropagation();
        break;
      default:
        l2.key.length === 1 && (u2.search(l2.key), b2.setTimeout(() => u2.clearSearch(), 350));
        break;
    }
  }), g2 = i$4(() => {
    var l2, x, E2;
    return (E2 = (l2 = t2.labelRef.current) == null ? void 0 : l2.id) != null ? E2 : (x = t2.buttonRef.current) == null ? void 0 : x.id;
  }, [t2.labelRef.current, t2.buttonRef.current]), v2 = reactExports.useMemo(() => ({ open: t2.listboxState === 0 }), [t2]), S2 = { "aria-activedescendant": t2.activeOptionIndex === null || (p2 = t2.options[t2.activeOptionIndex]) == null ? void 0 : p2.id, "aria-multiselectable": t2.mode === 1 ? true : void 0, "aria-labelledby": g2, "aria-orientation": t2.orientation, id: n2, onKeyDown: P2, role: "listbox", tabIndex: 0, ref: c2 };
  return D$3({ ourProps: S2, theirProps: a2, slot: v2, defaultTag: $e, features: ze, visible: m2, name: "Listbox.Options" });
}
let qe$1 = "li";
function Ye(e2, r2) {
  let o3 = I$4(), { id: n2 = `headlessui-listbox-option-${o3}`, disabled: a2 = false, value: t2, ...u2 } = e2, c2 = B$2("Listbox.Option"), i2 = U$2("Listbox.Option"), b2 = c2.activeOptionIndex !== null ? c2.options[c2.activeOptionIndex].id === n2 : false, A2 = c2.isSelected(t2), m2 = reactExports.useRef(null), P2 = s$4({ disabled: a2, value: t2, domRef: m2, get textValue() {
    var L2, d2;
    return (d2 = (L2 = m2.current) == null ? void 0 : L2.textContent) == null ? void 0 : d2.toLowerCase();
  } }), g2 = y$4(r2, m2);
  l$6(() => {
    if (c2.listboxState !== 0 || !b2 || c2.activationTrigger === 0)
      return;
    let L2 = o$4();
    return L2.requestAnimationFrame(() => {
      var d2, H2;
      (H2 = (d2 = m2.current) == null ? void 0 : d2.scrollIntoView) == null || H2.call(d2, { block: "nearest" });
    }), L2.dispose;
  }, [m2, b2, c2.listboxState, c2.activationTrigger, c2.activeOptionIndex]), l$6(() => i2.registerOption(n2, P2), [P2, n2]);
  let v2 = o$3((L2) => {
    if (a2)
      return L2.preventDefault();
    i2.onChange(t2), c2.mode === 0 && (i2.closeListbox(), o$4().nextFrame(() => {
      var d2;
      return (d2 = c2.buttonRef.current) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }), S2 = o$3(() => {
    if (a2)
      return i2.goToOption(a$2.Nothing);
    i2.goToOption(a$2.Specific, n2);
  }), p2 = u$3(), l2 = o$3((L2) => p2.update(L2)), x = o$3((L2) => {
    p2.wasMoved(L2) && (a2 || b2 || i2.goToOption(a$2.Specific, n2, 0));
  }), E2 = o$3((L2) => {
    p2.wasMoved(L2) && (a2 || b2 && i2.goToOption(a$2.Nothing));
  }), W2 = reactExports.useMemo(() => ({ active: b2, selected: A2, disabled: a2 }), [b2, A2, a2]);
  return D$3({ ourProps: { id: n2, ref: g2, role: "option", tabIndex: a2 === true ? void 0 : -1, "aria-disabled": a2 === true ? true : void 0, "aria-selected": A2, disabled: void 0, onClick: v2, onFocus: S2, onPointerEnter: l2, onMouseEnter: l2, onPointerMove: x, onMouseMove: x, onPointerLeave: E2, onMouseLeave: E2 }, theirProps: u2, slot: W2, defaultTag: qe$1, name: "Listbox.Option" });
}
let Ze = L$1(Ve), et = L$1(Qe), tt$1 = L$1(Xe), ot$1 = L$1(Je), nt = L$1(Ye), Bt = Object.assign(Ze, { Button: et, Label: tt$1, Options: ot$1, Option: nt });
var pe$1 = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(pe$1 || {}), ce$1 = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(ce$1 || {}), me$1 = ((a2) => (a2[a2.OpenMenu = 0] = "OpenMenu", a2[a2.CloseMenu = 1] = "CloseMenu", a2[a2.GoToItem = 2] = "GoToItem", a2[a2.Search = 3] = "Search", a2[a2.ClearSearch = 4] = "ClearSearch", a2[a2.RegisterItem = 5] = "RegisterItem", a2[a2.UnregisterItem = 6] = "UnregisterItem", a2))(me$1 || {});
function w$3(e2, u2 = (r2) => r2) {
  let r2 = e2.activeItemIndex !== null ? e2.items[e2.activeItemIndex] : null, i2 = A$4(u2(e2.items.slice()), (t2) => t2.dataRef.current.domRef.current), s2 = r2 ? i2.indexOf(r2) : null;
  return s2 === -1 && (s2 = null), { items: i2, activeItemIndex: s2 };
}
let de$1 = { [1](e2) {
  return e2.menuState === 1 ? e2 : { ...e2, activeItemIndex: null, menuState: 1 };
}, [0](e2) {
  return e2.menuState === 0 ? e2 : { ...e2, menuState: 0 };
}, [2]: (e2, u2) => {
  var s2;
  let r2 = w$3(e2), i2 = x$3(u2, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (t2) => t2.id, resolveDisabled: (t2) => t2.dataRef.current.disabled });
  return { ...e2, ...r2, searchQuery: "", activeItemIndex: i2, activationTrigger: (s2 = u2.trigger) != null ? s2 : 1 };
}, [3]: (e2, u2) => {
  let i2 = e2.searchQuery !== "" ? 0 : 1, s2 = e2.searchQuery + u2.value.toLowerCase(), o3 = (e2.activeItemIndex !== null ? e2.items.slice(e2.activeItemIndex + i2).concat(e2.items.slice(0, e2.activeItemIndex + i2)) : e2.items).find((l2) => {
    var m2;
    return ((m2 = l2.dataRef.current.textValue) == null ? void 0 : m2.startsWith(s2)) && !l2.dataRef.current.disabled;
  }), a2 = o3 ? e2.items.indexOf(o3) : -1;
  return a2 === -1 || a2 === e2.activeItemIndex ? { ...e2, searchQuery: s2 } : { ...e2, searchQuery: s2, activeItemIndex: a2, activationTrigger: 1 };
}, [4](e2) {
  return e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e2, u2) => {
  let r2 = w$3(e2, (i2) => [...i2, { id: u2.id, dataRef: u2.dataRef }]);
  return { ...e2, ...r2 };
}, [6]: (e2, u2) => {
  let r2 = w$3(e2, (i2) => {
    let s2 = i2.findIndex((t2) => t2.id === u2.id);
    return s2 !== -1 && i2.splice(s2, 1), i2;
  });
  return { ...e2, ...r2, activationTrigger: 1 };
} }, U$1 = reactExports.createContext(null);
U$1.displayName = "MenuContext";
function F$3(e2) {
  let u2 = reactExports.useContext(U$1);
  if (u2 === null) {
    let r2 = new Error(`<${e2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, F$3), r2;
  }
  return u2;
}
function fe$1(e2, u2) {
  return u$5(u2.type, de$1, e2, u2);
}
let Te$1 = reactExports.Fragment;
function ye$2(e2, u2) {
  let r2 = reactExports.useReducer(fe$1, { menuState: 1, buttonRef: reactExports.createRef(), itemsRef: reactExports.createRef(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: i2, itemsRef: s2, buttonRef: t2 }, o3] = r2, a2 = y$4(u2);
  L$2([t2, s2], (g2, A2) => {
    var I2;
    o3({ type: 1 }), h$4(A2, F$5.Loose) || (g2.preventDefault(), (I2 = t2.current) == null || I2.focus());
  }, i2 === 0);
  let l2 = o$3(() => {
    o3({ type: 1 });
  }), m2 = reactExports.useMemo(() => ({ open: i2 === 0, close: l2 }), [i2, l2]), M2 = e2, f2 = { ref: a2 };
  return React$j.createElement(U$1.Provider, { value: r2 }, React$j.createElement(c$3, { value: u$5(i2, { [0]: d$4.Open, [1]: d$4.Closed }) }, D$3({ ourProps: f2, theirProps: M2, slot: m2, defaultTag: Te$1, name: "Menu" })));
}
let Ie$1 = "button";
function Me(e2, u2) {
  var I2;
  let r2 = I$4(), { id: i2 = `headlessui-menu-button-${r2}`, ...s2 } = e2, [t2, o3] = F$3("Menu.Button"), a2 = y$4(t2.buttonRef, u2), l2 = p$5(), m2 = o$3((p2) => {
    switch (p2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        p2.preventDefault(), p2.stopPropagation(), o3({ type: 0 }), l2.nextFrame(() => o3({ type: 2, focus: a$2.First }));
        break;
      case o$1.ArrowUp:
        p2.preventDefault(), p2.stopPropagation(), o3({ type: 0 }), l2.nextFrame(() => o3({ type: 2, focus: a$2.Last }));
        break;
    }
  }), M2 = o$3((p2) => {
    switch (p2.key) {
      case o$1.Space:
        p2.preventDefault();
        break;
    }
  }), f2 = o$3((p2) => {
    if (r$4(p2.currentTarget))
      return p2.preventDefault();
    e2.disabled || (t2.menuState === 0 ? (o3({ type: 1 }), l2.nextFrame(() => {
      var R2;
      return (R2 = t2.buttonRef.current) == null ? void 0 : R2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), o3({ type: 0 })));
  }), g2 = reactExports.useMemo(() => ({ open: t2.menuState === 0 }), [t2]), A2 = { ref: a2, id: i2, type: s$3(e2, t2.buttonRef), "aria-haspopup": "menu", "aria-controls": (I2 = t2.itemsRef.current) == null ? void 0 : I2.id, "aria-expanded": e2.disabled ? void 0 : t2.menuState === 0, onKeyDown: m2, onKeyUp: M2, onClick: f2 };
  return D$3({ ourProps: A2, theirProps: s2, slot: g2, defaultTag: Ie$1, name: "Menu.Button" });
}
let ge$1 = "div", Re$2 = j$1.RenderStrategy | j$1.Static;
function Ae$1(e2, u2) {
  var R2, E2;
  let r2 = I$4(), { id: i2 = `headlessui-menu-items-${r2}`, ...s2 } = e2, [t2, o3] = F$3("Menu.Items"), a2 = y$4(t2.itemsRef, u2), l2 = n$4(t2.itemsRef), m2 = p$5(), M2 = C$2(), f2 = (() => M2 !== null ? (M2 & d$4.Open) === d$4.Open : t2.menuState === 0)();
  reactExports.useEffect(() => {
    let n2 = t2.itemsRef.current;
    n2 && t2.menuState === 0 && n2 !== (l2 == null ? void 0 : l2.activeElement) && n2.focus({ preventScroll: true });
  }, [t2.menuState, t2.itemsRef, l2]), F$4({ container: t2.itemsRef.current, enabled: t2.menuState === 0, accept(n2) {
    return n2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n2) {
    n2.setAttribute("role", "none");
  } });
  let g2 = o$3((n2) => {
    var S2, O2;
    switch (m2.dispose(), n2.key) {
      case o$1.Space:
        if (t2.searchQuery !== "")
          return n2.preventDefault(), n2.stopPropagation(), o3({ type: 3, value: n2.key });
      case o$1.Enter:
        if (n2.preventDefault(), n2.stopPropagation(), o3({ type: 1 }), t2.activeItemIndex !== null) {
          let { dataRef: c2 } = t2.items[t2.activeItemIndex];
          (O2 = (S2 = c2.current) == null ? void 0 : S2.domRef.current) == null || O2.click();
        }
        g$4(t2.buttonRef.current);
        break;
      case o$1.ArrowDown:
        return n2.preventDefault(), n2.stopPropagation(), o3({ type: 2, focus: a$2.Next });
      case o$1.ArrowUp:
        return n2.preventDefault(), n2.stopPropagation(), o3({ type: 2, focus: a$2.Previous });
      case o$1.Home:
      case o$1.PageUp:
        return n2.preventDefault(), n2.stopPropagation(), o3({ type: 2, focus: a$2.First });
      case o$1.End:
      case o$1.PageDown:
        return n2.preventDefault(), n2.stopPropagation(), o3({ type: 2, focus: a$2.Last });
      case o$1.Escape:
        n2.preventDefault(), n2.stopPropagation(), o3({ type: 1 }), o$4().nextFrame(() => {
          var c2;
          return (c2 = t2.buttonRef.current) == null ? void 0 : c2.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        n2.preventDefault(), n2.stopPropagation(), o3({ type: 1 }), o$4().nextFrame(() => {
          v$4(t2.buttonRef.current, n2.shiftKey ? L$3.Previous : L$3.Next);
        });
        break;
      default:
        n2.key.length === 1 && (o3({ type: 3, value: n2.key }), m2.setTimeout(() => o3({ type: 4 }), 350));
        break;
    }
  }), A2 = o$3((n2) => {
    switch (n2.key) {
      case o$1.Space:
        n2.preventDefault();
        break;
    }
  }), I2 = reactExports.useMemo(() => ({ open: t2.menuState === 0 }), [t2]), p2 = { "aria-activedescendant": t2.activeItemIndex === null || (R2 = t2.items[t2.activeItemIndex]) == null ? void 0 : R2.id, "aria-labelledby": (E2 = t2.buttonRef.current) == null ? void 0 : E2.id, id: i2, onKeyDown: g2, onKeyUp: A2, role: "menu", tabIndex: 0, ref: a2 };
  return D$3({ ourProps: p2, theirProps: s2, slot: I2, defaultTag: ge$1, features: Re$2, visible: f2, name: "Menu.Items" });
}
let be$2 = reactExports.Fragment;
function Ee$2(e2, u2) {
  let r2 = I$4(), { id: i2 = `headlessui-menu-item-${r2}`, disabled: s2 = false, ...t2 } = e2, [o3, a2] = F$3("Menu.Item"), l2 = o3.activeItemIndex !== null ? o3.items[o3.activeItemIndex].id === i2 : false, m2 = reactExports.useRef(null), M2 = y$4(u2, m2);
  l$6(() => {
    if (o3.menuState !== 0 || !l2 || o3.activationTrigger === 0)
      return;
    let c2 = o$4();
    return c2.requestAnimationFrame(() => {
      var b2, _2;
      (_2 = (b2 = m2.current) == null ? void 0 : b2.scrollIntoView) == null || _2.call(b2, { block: "nearest" });
    }), c2.dispose;
  }, [m2, l2, o3.menuState, o3.activationTrigger, o3.activeItemIndex]);
  let f2 = reactExports.useRef({ disabled: s2, domRef: m2 });
  l$6(() => {
    f2.current.disabled = s2;
  }, [f2, s2]), l$6(() => {
    var c2, b2;
    f2.current.textValue = (b2 = (c2 = m2.current) == null ? void 0 : c2.textContent) == null ? void 0 : b2.toLowerCase();
  }, [f2, m2]), l$6(() => (a2({ type: 5, id: i2, dataRef: f2 }), () => a2({ type: 6, id: i2 })), [f2, i2]);
  let g2 = o$3(() => {
    a2({ type: 1 });
  }), A2 = o$3((c2) => {
    if (s2)
      return c2.preventDefault();
    a2({ type: 1 }), g$4(o3.buttonRef.current);
  }), I2 = o$3(() => {
    if (s2)
      return a2({ type: 2, focus: a$2.Nothing });
    a2({ type: 2, focus: a$2.Specific, id: i2 });
  }), p2 = u$3(), R2 = o$3((c2) => p2.update(c2)), E2 = o$3((c2) => {
    p2.wasMoved(c2) && (s2 || l2 || a2({ type: 2, focus: a$2.Specific, id: i2, trigger: 0 }));
  }), n2 = o$3((c2) => {
    p2.wasMoved(c2) && (s2 || l2 && a2({ type: 2, focus: a$2.Nothing }));
  }), S2 = reactExports.useMemo(() => ({ active: l2, disabled: s2, close: g2 }), [l2, s2, g2]);
  return D$3({ ourProps: { id: i2, ref: M2, role: "menuitem", tabIndex: s2 === true ? void 0 : -1, "aria-disabled": s2 === true ? true : void 0, disabled: void 0, onClick: A2, onFocus: I2, onPointerEnter: R2, onMouseEnter: R2, onPointerMove: E2, onMouseMove: E2, onPointerLeave: n2, onMouseLeave: n2 }, theirProps: t2, slot: S2, defaultTag: be$2, name: "Menu.Item" });
}
let Se$2 = L$1(ye$2), Pe$2 = L$1(Me), ve$1 = L$1(Ae$1), xe$2 = L$1(Ee$2), ot = Object.assign(Se$2, { Button: Pe$2, Items: ve$1, Item: xe$2 });
function b$3(g2 = 0) {
  let [t2, l2] = reactExports.useState(g2), u2 = reactExports.useCallback((e2) => l2((a2) => a2 | e2), [t2]), n2 = reactExports.useCallback((e2) => Boolean(t2 & e2), [t2]), o3 = reactExports.useCallback((e2) => l2((a2) => a2 & ~e2), [l2]), s2 = reactExports.useCallback((e2) => l2((a2) => a2 ^ e2), [l2]);
  return { flags: t2, addFlag: u2, hasFlag: n2, removeFlag: o3, toggleFlag: s2 };
}
function l$4(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r2(...t2);
  };
}
function d$3(t2, ...e2) {
  t2 && e2.length > 0 && t2.classList.add(...e2);
}
function v$3(t2, ...e2) {
  t2 && e2.length > 0 && t2.classList.remove(...e2);
}
function F$2(t2, e2) {
  let n2 = o$4();
  if (!t2)
    return n2.dispose;
  let { transitionDuration: m2, transitionDelay: o3 } = getComputedStyle(t2), [u2, p2] = [m2, o3].map((a2) => {
    let [r2 = 0] = a2.split(",").filter(Boolean).map((i2) => i2.includes("ms") ? parseFloat(i2) : parseFloat(i2) * 1e3).sort((i2, f2) => f2 - i2);
    return r2;
  }), l2 = u2 + p2;
  if (l2 !== 0) {
    n2.group((r2) => {
      r2.setTimeout(() => {
        e2(), r2.dispose();
      }, l2), r2.addEventListener(t2, "transitionrun", (i2) => {
        i2.target === i2.currentTarget && r2.dispose();
      });
    });
    let a2 = n2.addEventListener(t2, "transitionend", (r2) => {
      r2.target === r2.currentTarget && (e2(), a2());
    });
  } else
    e2();
  return n2.add(() => e2()), n2.dispose;
}
function y$3(t2, e2, n2, m2) {
  let o3 = n2 ? "enter" : "leave", u2 = o$4(), p2 = m2 !== void 0 ? l$4(m2) : () => {
  };
  o3 === "enter" && (t2.removeAttribute("hidden"), t2.style.display = "");
  let l2 = u$5(o3, { enter: () => e2.enter, leave: () => e2.leave }), a2 = u$5(o3, { enter: () => e2.enterTo, leave: () => e2.leaveTo }), r2 = u$5(o3, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom });
  return v$3(t2, ...e2.enter, ...e2.enterTo, ...e2.enterFrom, ...e2.leave, ...e2.leaveFrom, ...e2.leaveTo, ...e2.entered), d$3(t2, ...l2, ...r2), u2.nextFrame(() => {
    v$3(t2, ...r2), d$3(t2, ...a2), F$2(t2, () => (v$3(t2, ...l2), d$3(t2, ...e2.entered), p2()));
  }), u2.dispose;
}
function D$2({ container: i2, direction: t2, classes: o3, onStart: s2, onStop: u2 }) {
  let a2 = f$3(), c2 = p$5(), r2 = s$4(t2);
  l$6(() => {
    let e2 = o$4();
    c2.add(e2.dispose);
    let n2 = i2.current;
    if (n2 && r2.current !== "idle" && a2.current)
      return e2.dispose(), s2.current(r2.current), e2.add(y$3(n2, o3.current, r2.current === "enter", () => {
        e2.dispose(), u2.current(r2.current);
      })), e2.dispose;
  }, [t2]);
}
function S$1(n2 = "") {
  return n2.split(" ").filter((t2) => t2.trim().length > 1);
}
let A$3 = reactExports.createContext(null);
A$3.displayName = "TransitionContext";
var Ee$1 = ((r2) => (r2.Visible = "visible", r2.Hidden = "hidden", r2))(Ee$1 || {});
function be$1() {
  let n2 = reactExports.useContext(A$3);
  if (n2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n2;
}
function Se$1() {
  let n2 = reactExports.useContext(I$2);
  if (n2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n2;
}
let I$2 = reactExports.createContext(null);
I$2.displayName = "NestingContext";
function _$1(n2) {
  return "children" in n2 ? _$1(n2.children) : n2.current.filter(({ el: t2 }) => t2.current !== null).filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function ne$1(n2, t2) {
  let r2 = s$4(n2), o3 = reactExports.useRef([]), y2 = f$3(), N2 = p$5(), p2 = o$3((s2, e2 = w$4.Hidden) => {
    let a2 = o3.current.findIndex(({ el: i2 }) => i2 === s2);
    a2 !== -1 && (u$5(e2, { [w$4.Unmount]() {
      o3.current.splice(a2, 1);
    }, [w$4.Hidden]() {
      o3.current[a2].state = "hidden";
    } }), N2.microTask(() => {
      var i2;
      !_$1(o3) && y2.current && ((i2 = r2.current) == null || i2.call(r2));
    }));
  }), x = o$3((s2) => {
    let e2 = o3.current.find(({ el: a2 }) => a2 === s2);
    return e2 ? e2.state !== "visible" && (e2.state = "visible") : o3.current.push({ el: s2, state: "visible" }), () => p2(s2, w$4.Unmount);
  }), m2 = reactExports.useRef([]), c2 = reactExports.useRef(Promise.resolve()), u2 = reactExports.useRef({ enter: [], leave: [], idle: [] }), h2 = o$3((s2, e2, a2) => {
    m2.current.splice(0), t2 && (t2.chains.current[e2] = t2.chains.current[e2].filter(([i2]) => i2 !== s2)), t2 == null || t2.chains.current[e2].push([s2, new Promise((i2) => {
      m2.current.push(i2);
    })]), t2 == null || t2.chains.current[e2].push([s2, new Promise((i2) => {
      Promise.all(u2.current[e2].map(([l2, T2]) => T2)).then(() => i2());
    })]), e2 === "enter" ? c2.current = c2.current.then(() => t2 == null ? void 0 : t2.wait.current).then(() => a2(e2)) : a2(e2);
  }), v2 = o$3((s2, e2, a2) => {
    Promise.all(u2.current[e2].splice(0).map(([i2, l2]) => l2)).then(() => {
      var i2;
      (i2 = m2.current.shift()) == null || i2();
    }).then(() => a2(e2));
  });
  return reactExports.useMemo(() => ({ children: o3, register: x, unregister: p2, onStart: h2, onStop: v2, wait: c2, chains: u2 }), [x, p2, o3, h2, v2, u2, c2]);
}
function xe$1() {
}
let Pe$1 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function re$1(n2) {
  var r2;
  let t2 = {};
  for (let o3 of Pe$1)
    t2[o3] = (r2 = n2[o3]) != null ? r2 : xe$1;
  return t2;
}
function Re$1(n2) {
  let t2 = reactExports.useRef(re$1(n2));
  return reactExports.useEffect(() => {
    t2.current = re$1(n2);
  }, [n2]), t2;
}
let ye$1 = "div", ie$1 = j$1.RenderStrategy;
function Ne(n2, t2) {
  let { beforeEnter: r2, afterEnter: o3, beforeLeave: y2, afterLeave: N2, enter: p2, enterFrom: x, enterTo: m2, entered: c2, leave: u2, leaveFrom: h2, leaveTo: v2, ...s2 } = n2, e2 = reactExports.useRef(null), a2 = y$4(e2, t2), i2 = s2.unmount ? w$4.Unmount : w$4.Hidden, { show: l2, appear: T2, initial: se2 } = be$1(), [g2, M2] = reactExports.useState(l2 ? "visible" : "hidden"), z2 = Se$1(), { register: F2, unregister: L2 } = z2, U2 = reactExports.useRef(null);
  reactExports.useEffect(() => F2(e2), [F2, e2]), reactExports.useEffect(() => {
    if (i2 === w$4.Hidden && e2.current) {
      if (l2 && g2 !== "visible") {
        M2("visible");
        return;
      }
      return u$5(g2, { ["hidden"]: () => L2(e2), ["visible"]: () => F2(e2) });
    }
  }, [g2, e2, F2, L2, l2, i2]);
  let j2 = s$4({ enter: S$1(p2), enterFrom: S$1(x), enterTo: S$1(m2), entered: S$1(c2), leave: S$1(u2), leaveFrom: S$1(h2), leaveTo: S$1(v2) }), w2 = Re$1({ beforeEnter: r2, afterEnter: o3, beforeLeave: y2, afterLeave: N2 }), k2 = l$5();
  reactExports.useEffect(() => {
    if (k2 && g2 === "visible" && e2.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e2, g2, k2]);
  let G2 = se2 && !T2, ae2 = (() => !k2 || G2 || U2.current === l2 ? "idle" : l2 ? "enter" : "leave")(), H2 = b$3(0), le2 = o$3((C2) => u$5(C2, { enter: () => {
    H2.addFlag(d$4.Opening), w2.current.beforeEnter();
  }, leave: () => {
    H2.addFlag(d$4.Closing), w2.current.beforeLeave();
  }, idle: () => {
  } })), ue2 = o$3((C2) => u$5(C2, { enter: () => {
    H2.removeFlag(d$4.Opening), w2.current.afterEnter();
  }, leave: () => {
    H2.removeFlag(d$4.Closing), w2.current.afterLeave();
  }, idle: () => {
  } })), O2 = ne$1(() => {
    M2("hidden"), L2(e2);
  }, z2);
  D$2({ container: e2, classes: j2, direction: ae2, onStart: s$4((C2) => {
    O2.onStart(e2, C2, le2);
  }), onStop: s$4((C2) => {
    O2.onStop(e2, C2, ue2), C2 === "leave" && !_$1(O2) && (M2("hidden"), L2(e2));
  }) }), reactExports.useEffect(() => {
    G2 && (i2 === w$4.Hidden ? U2.current = null : U2.current = l2);
  }, [l2, G2, g2]);
  let B2 = s2, Te2 = { ref: a2 };
  return T2 && l2 && s$5.isServer && (B2 = { ...B2, className: e$4(s2.className, ...j2.current.enter, ...j2.current.enterFrom) }), React$j.createElement(I$2.Provider, { value: O2 }, React$j.createElement(c$3, { value: u$5(g2, { ["visible"]: d$4.Open, ["hidden"]: d$4.Closed }) | H2.flags }, D$3({ ourProps: Te2, theirProps: B2, defaultTag: ye$1, features: ie$1, visible: g2 === "visible", name: "Transition.Child" })));
}
function He$1(n2, t2) {
  let { show: r2, appear: o3 = false, unmount: y2, ...N2 } = n2, p2 = reactExports.useRef(null), x = y$4(p2, t2);
  l$5();
  let m2 = C$2();
  if (r2 === void 0 && m2 !== null && (r2 = (m2 & d$4.Open) === d$4.Open), ![true, false].includes(r2))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c2, u2] = reactExports.useState(r2 ? "visible" : "hidden"), h2 = ne$1(() => {
    u2("hidden");
  }), [v2, s2] = reactExports.useState(true), e2 = reactExports.useRef([r2]);
  l$6(() => {
    v2 !== false && e2.current[e2.current.length - 1] !== r2 && (e2.current.push(r2), s2(false));
  }, [e2, r2]);
  let a2 = reactExports.useMemo(() => ({ show: r2, appear: o3, initial: v2 }), [r2, o3, v2]);
  reactExports.useEffect(() => {
    if (r2)
      u2("visible");
    else if (!_$1(h2))
      u2("hidden");
    else {
      let l2 = p2.current;
      if (!l2)
        return;
      let T2 = l2.getBoundingClientRect();
      T2.x === 0 && T2.y === 0 && T2.width === 0 && T2.height === 0 && u2("hidden");
    }
  }, [r2, h2]);
  let i2 = { unmount: y2 };
  return React$j.createElement(I$2.Provider, { value: h2 }, React$j.createElement(A$3.Provider, { value: a2 }, D$3({ ourProps: { ...i2, as: reactExports.Fragment, children: React$j.createElement(oe$1, { ref: x, ...i2, ...N2 }) }, theirProps: {}, defaultTag: reactExports.Fragment, features: ie$1, visible: c2 === "visible", name: "Transition" })));
}
function De$1(n2, t2) {
  let r2 = reactExports.useContext(A$3) !== null, o3 = C$2() !== null;
  return React$j.createElement(React$j.Fragment, null, !r2 && o3 ? React$j.createElement(q$4, { ref: t2, ...n2 }) : React$j.createElement(oe$1, { ref: t2, ...n2 }));
}
let q$4 = L$1(He$1), oe$1 = L$1(Ne), Fe = L$1(De$1), tt = Object.assign(q$4, { Child: Fe, Root: q$4 });
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash: hash2 = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash2 && hash2 !== "#")
    pathname += hash2.charAt(0) === "#" ? hash2 : "#" + hash2;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to2, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash: hash2 = ""
  } = typeof to2 === "string" ? parsePath(to2) : to2;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash2)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index2) => index2 === 0 || match.route.path && match.route.path.length > 0);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to2;
  if (typeof toArg === "string") {
    to2 = parsePath(toArg);
  } else {
    to2 = _extends$1({}, toArg);
    invariant(!to2.pathname || !to2.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to2));
    invariant(!to2.pathname || !to2.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to2));
    invariant(!to2.search || !to2.search.includes("#"), getInvalidPathError("#", "search", "hash", to2));
  }
  let isEmptyPath = toArg === "" || to2.pathname === "";
  let toPathname = isEmptyPath ? "/" : to2.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to2.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to2, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash2) => !hash2 || hash2 === "#" ? "" : hash2.startsWith("#") ? hash2 : "#" + hash2;
/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function isPolyfill(x, y2) {
  return x === y2 && (x !== 0 || 1 / x === 1 / y2) || x !== x && y2 !== y2;
}
const is = typeof Object.is === "function" ? Object.is : isPolyfill;
const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React$k;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  const value = getSnapshot();
  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim$1 = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React$k ? ((module) => module.useSyncExternalStore)(React$k) : shim$1;
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: []
});
function useHref(to2, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    hash: hash2,
    pathname,
    search
  } = useResolvedPath(to2, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash: hash2
  });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  let activeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to2, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to2 === "number") {
      navigator2.go(to2);
      return;
    }
    let path = resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
function useResolvedPath(to2, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  return reactExports.useMemo(() => resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to2, routePathnamesJson, locationPathname, relative]);
}
var DataRouterHook$1;
(function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
const isBrowser$2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to: to2,
    preventScrollReset
  } = _ref4, rest = _objectWithoutPropertiesLoose$1(_ref4, _excluded);
  let {
    basename
  } = reactExports.useContext(NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to2 === "string" && ABSOLUTE_URL_REGEX.test(to2)) {
    absoluteHref = to2;
    if (isBrowser$2) {
      let currentUrl = new URL(window.location.href);
      let targetUrl = to2.startsWith("//") ? new URL(currentUrl.protocol + to2) : new URL(to2);
      let path = stripBasename(targetUrl.pathname, basename);
      if (targetUrl.origin === currentUrl.origin && path != null) {
        to2 = path + targetUrl.search + targetUrl.hash;
      } else {
        isExternal = true;
      }
    }
  }
  let href = useHref(to2, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to2, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
const NavLink = /* @__PURE__ */ reactExports.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end: end2 = false,
    style: styleProp,
    to: to2,
    children
  } = _ref5, rest = _objectWithoutPropertiesLoose$1(_ref5, _excluded2);
  let path = useResolvedPath(to2, {
    relative: rest.relative
  });
  let location2 = useLocation();
  let routerState = reactExports.useContext(DataRouterStateContext);
  let {
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location2.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end2 && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end2 && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /* @__PURE__ */ reactExports.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to: to2
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook2["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to2, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location2 = useLocation();
  let path = useResolvedPath(to2, {
    relative
  });
  return reactExports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location2) === createPath(path);
      navigate(to2, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location2, navigate, path, replaceProp, state, target, to2, preventScrollReset, relative]);
}
const Loading = (props) => {
  if (props.light) {
    return /* @__PURE__ */ jsxs("svg", { className: mergeClasses("tw-m-auto tw-animate-spin tw-h-5 tw-w-5 tw-text-slate-100", props.className), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ jsx("circle", { className: "tw-opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
      /* @__PURE__ */ jsx("path", { className: "tw-opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
    ] });
  }
  return /* @__PURE__ */ jsxs("svg", { className: mergeClasses("tw-m-auto tw-animate-spin tw-h-5 tw-w-5 tw-text-slate-900", props.className), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ jsx("circle", { className: "tw-opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
    /* @__PURE__ */ jsx("path", { className: "tw-opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
  ] });
};
const DotsLoading = (props) => {
  const dotStyle = "tw-w-[5px] tw-h-[5px] tw-bg-slate-500 tw-rounded tw-animate-dot-flashing";
  return /* @__PURE__ */ jsxs("div", { className: mergeClasses("tw-flex tw-gap-0.5", props.className), children: [
    /* @__PURE__ */ jsx("div", { className: classNames(dotStyle, "[animation-delay:0s]") }),
    /* @__PURE__ */ jsx("div", { className: classNames(dotStyle, "[animation-delay:0.25s]") }),
    /* @__PURE__ */ jsx("div", { className: classNames(dotStyle, "[animation-delay:0.5s]") })
  ] });
};
var t$2 = "4.5.4";
const n$3 = ({ apiKey: e2 }) => {
  !function(t2, n2) {
    var r2 = t2.amplitude || { _q: [], _iq: {} }, o3 = n2.createElement("script");
    o3.type = "text/javascript", o3.integrity = "sha384-+EO59vL/X7v6VE2s6/F4HxfHlK0nDUVWKVg8K9oUlvffAeeaShVBmbORTC2D3UF+", o3.crossOrigin = "anonymous", o3.async = true, o3.src = "https://cdn.amplitude.com/libs/amplitude-8.17.0-min.gz.js", o3.onload = function() {
      t2.amplitude.runQueuedFunctions || console.log("[Amplitude] Error: could not load SDK"), amplitude.getInstance().init(e2);
    };
    var i2 = n2.getElementsByTagName("script")[0];
    function s2(e3, t3) {
      e3.prototype[t3] = function() {
        return this._q.push([t3].concat(Array.prototype.slice.call(arguments, 0))), this;
      };
    }
    i2.parentNode.insertBefore(o3, i2);
    for (var a2 = function() {
      return this._q = [], this;
    }, l2 = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset", "preInsert", "postInsert", "remove"], c2 = 0; c2 < l2.length; c2++)
      s2(a2, l2[c2]);
    r2.Identify = a2;
    for (var d2 = function() {
      return this._q = [], this;
    }, u2 = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"], p2 = 0; p2 < u2.length; p2++)
      s2(d2, u2[p2]);
    r2.Revenue = d2;
    var h2 = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "enableTracking", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId", "groupIdentify", "onInit", "logEventWithTimestamp", "logEventWithGroups", "setSessionId", "resetSessionId"];
    function g2(e3) {
      function t3(t4) {
        e3[t4] = function() {
          e3._q.push([t4].concat(Array.prototype.slice.call(arguments, 0)));
        };
      }
      for (var n3 = 0; n3 < h2.length; n3++)
        t3(h2[n3]);
    }
    g2(r2), r2.getInstance = function(e3) {
      return e3 = (e3 && 0 !== e3.length ? e3 : "$default_instance").toLowerCase(), Object.prototype.hasOwnProperty.call(r2._iq, e3) || (r2._iq[e3] = { _q: [] }, g2(r2._iq[e3])), r2._iq[e3];
    }, t2.amplitude = r2;
  }(window, document);
}, r$3 = "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
function o2(e2) {
  if (!e2 || !e2.outerHTML)
    return "";
  let t2 = "";
  for (; e2.parentElement; ) {
    let n2 = e2.localName;
    if (!n2)
      break;
    n2 = n2.toLowerCase();
    let r2 = e2.parentElement, o3 = [];
    if (r2.children && r2.children.length > 0)
      for (let e3 = 0; e3 < r2.children.length; e3++) {
        let t3 = r2.children[e3];
        t3.localName && t3.localName.toLowerCase && t3.localName.toLowerCase() === n2 && o3.push(t3);
      }
    o3.length > 1 && (n2 += ":eq(" + o3.indexOf(e2) + ")"), t2 = n2 + (t2 ? ">" + t2 : ""), e2 = r2;
  }
  return t2;
}
function i(e2) {
  return "[object Object]" === Object.prototype.toString.call(e2);
}
function s(e2, t2) {
  if (0 === t2)
    return true;
  const n2 = Object.keys(e2);
  for (const r2 of n2)
    if (i(e2[r2]) && s(e2[r2], t2 - 1))
      return true;
  return false;
}
function a(e2, t2) {
  const n2 = { numOfKeysLimit: 50, depthOfLimit: 4 };
  Object.assign(n2, t2);
  const r2 = [], a2 = [];
  return JSON.stringify(e2, function(e3, t3) {
    if (r2.length > 0) {
      const n3 = r2.indexOf(this);
      ~n3 ? r2.splice(n3 + 1) : r2.push(this), ~n3 ? a2.splice(n3, 1 / 0, e3) : a2.push(e3), ~r2.indexOf(t3) && (t3 = r2[0] === t3 ? "[Circular ~]" : "[Circular ~." + a2.slice(0, r2.indexOf(t3)).join(".") + "]");
    } else
      r2.push(t3);
    if (null == t3)
      return t3;
    if (function(e4) {
      return !!(i(e4) && Object.keys(e4).length > n2.numOfKeysLimit || "function" == typeof e4) || (e4 instanceof Event && false === e4.isTrusted ? 1 === Object.keys(e4).length : !(!i(e4) || !s(e4, n2.depthOfLimit)));
    }(t3))
      return function(e4) {
        let t4 = e4.toString();
        return n2.stringLengthLimit && t4.length > n2.stringLengthLimit && (t4 = `${t4.slice(0, n2.stringLengthLimit)}...`), t4;
      }(t3);
    if (t3 instanceof Event) {
      const e4 = {};
      for (const n3 in t3) {
        const r3 = t3[n3];
        Array.isArray(r3) ? e4[n3] = o2(r3.length ? r3[0] : null) : e4[n3] = r3;
      }
      return e4;
    }
    return t3 instanceof Node ? t3 instanceof HTMLElement ? t3 ? t3.outerHTML : "" : t3.nodeName : t3 instanceof Error ? t3.name + ": " + t3.message : t3;
  });
}
var l$3, c$2, d$2, u$2, p$3, g$2 = { exports: {} };
function f$2() {
  return l$3 || (l$3 = 1, g$2.exports = function() {
    function e2(e3) {
      return !isNaN(parseFloat(e3)) && isFinite(e3);
    }
    function t2(e3) {
      return e3.charAt(0).toUpperCase() + e3.substring(1);
    }
    function n2(e3) {
      return function() {
        return this[e3];
      };
    }
    var r2 = ["isConstructor", "isEval", "isNative", "isToplevel"], o3 = ["columnNumber", "lineNumber"], i2 = ["fileName", "functionName", "source"], s2 = ["args"], a2 = ["evalOrigin"], l2 = r2.concat(o3, i2, s2, a2);
    function c2(e3) {
      if (e3)
        for (var n3 = 0; n3 < l2.length; n3++)
          void 0 !== e3[l2[n3]] && this["set" + t2(l2[n3])](e3[l2[n3]]);
    }
    c2.prototype = { getArgs: function() {
      return this.args;
    }, setArgs: function(e3) {
      if ("[object Array]" !== Object.prototype.toString.call(e3))
        throw new TypeError("Args must be an Array");
      this.args = e3;
    }, getEvalOrigin: function() {
      return this.evalOrigin;
    }, setEvalOrigin: function(e3) {
      if (e3 instanceof c2)
        this.evalOrigin = e3;
      else {
        if (!(e3 instanceof Object))
          throw new TypeError("Eval Origin must be an Object or StackFrame");
        this.evalOrigin = new c2(e3);
      }
    }, toString: function() {
      var e3 = this.getFileName() || "", t3 = this.getLineNumber() || "", n3 = this.getColumnNumber() || "", r3 = this.getFunctionName() || "";
      return this.getIsEval() ? e3 ? "[eval] (" + e3 + ":" + t3 + ":" + n3 + ")" : "[eval]:" + t3 + ":" + n3 : r3 ? r3 + " (" + e3 + ":" + t3 + ":" + n3 + ")" : e3 + ":" + t3 + ":" + n3;
    } }, c2.fromString = function(e3) {
      var t3 = e3.indexOf("("), n3 = e3.lastIndexOf(")"), r3 = e3.substring(0, t3), o4 = e3.substring(t3 + 1, n3).split(","), i3 = e3.substring(n3 + 1);
      if (0 === i3.indexOf("@"))
        var s3 = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i3, ""), a3 = s3[1], l3 = s3[2], d3 = s3[3];
      return new c2({ functionName: r3, args: o4 || void 0, fileName: a3, lineNumber: l3 || void 0, columnNumber: d3 || void 0 });
    };
    for (var d2 = 0; d2 < r2.length; d2++)
      c2.prototype["get" + t2(r2[d2])] = n2(r2[d2]), c2.prototype["set" + t2(r2[d2])] = function(e3) {
        return function(t3) {
          this[e3] = Boolean(t3);
        };
      }(r2[d2]);
    for (var u2 = 0; u2 < o3.length; u2++)
      c2.prototype["get" + t2(o3[u2])] = n2(o3[u2]), c2.prototype["set" + t2(o3[u2])] = function(t3) {
        return function(n3) {
          if (!e2(n3))
            throw new TypeError(t3 + " must be a Number");
          this[t3] = Number(n3);
        };
      }(o3[u2]);
    for (var p2 = 0; p2 < i2.length; p2++)
      c2.prototype["get" + t2(i2[p2])] = n2(i2[p2]), c2.prototype["set" + t2(i2[p2])] = function(e3) {
        return function(t3) {
          this[e3] = String(t3);
        };
      }(i2[p2]);
    return c2;
  }()), g$2.exports;
}
var m$3 = (c$2 = f$2(), d$2 = /(^|@)\S+:\d+/, u$2 = /^\s*at .*(\S+:\d+|\(native\))/m, p$3 = /^(eval@)?(\[native code])?$/, { parse: function(e2) {
  if (void 0 !== e2.stacktrace || void 0 !== e2["opera#sourceloc"])
    return this.parseOpera(e2);
  if (e2.stack && e2.stack.match(u$2))
    return this.parseV8OrIE(e2);
  if (e2.stack)
    return this.parseFFOrSafari(e2);
  throw new Error("Cannot parse given Error object");
}, extractLocation: function(e2) {
  if (-1 === e2.indexOf(":"))
    return [e2];
  var t2 = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e2.replace(/[()]/g, ""));
  return [t2[1], t2[2] || void 0, t2[3] || void 0];
}, parseV8OrIE: function(e2) {
  return e2.stack.split("\n").filter(function(e3) {
    return !!e3.match(u$2);
  }, this).map(function(e3) {
    e3.indexOf("(eval ") > -1 && (e3 = e3.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
    var t2 = e3.replace(/^\s+/, "").replace(/\(eval code/g, "("), n2 = t2.match(/ (\((.+):(\d+):(\d+)\)$)/), r2 = (t2 = n2 ? t2.replace(n2[0], "") : t2).split(/\s+/).slice(1), o3 = this.extractLocation(n2 ? n2[1] : r2.pop()), i2 = r2.join(" ") || void 0, s2 = ["eval", "<anonymous>"].indexOf(o3[0]) > -1 ? void 0 : o3[0];
    return new c$2({ functionName: i2, fileName: s2, lineNumber: o3[1], columnNumber: o3[2], source: e3 });
  }, this);
}, parseFFOrSafari: function(e2) {
  return e2.stack.split("\n").filter(function(e3) {
    return !e3.match(p$3);
  }, this).map(function(e3) {
    if (e3.indexOf(" > eval") > -1 && (e3 = e3.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === e3.indexOf("@") && -1 === e3.indexOf(":"))
      return new c$2({ functionName: e3 });
    var t2 = /((.*".+"[^@]*)?[^@]*)(?:@)/, n2 = e3.match(t2), r2 = n2 && n2[1] ? n2[1] : void 0, o3 = this.extractLocation(e3.replace(t2, ""));
    return new c$2({ functionName: r2, fileName: o3[0], lineNumber: o3[1], columnNumber: o3[2], source: e3 });
  }, this);
}, parseOpera: function(e2) {
  return !e2.stacktrace || e2.message.indexOf("\n") > -1 && e2.message.split("\n").length > e2.stacktrace.split("\n").length ? this.parseOpera9(e2) : e2.stack ? this.parseOpera11(e2) : this.parseOpera10(e2);
}, parseOpera9: function(e2) {
  for (var t2 = /Line (\d+).*script (?:in )?(\S+)/i, n2 = e2.message.split("\n"), r2 = [], o3 = 2, i2 = n2.length; o3 < i2; o3 += 2) {
    var s2 = t2.exec(n2[o3]);
    s2 && r2.push(new c$2({ fileName: s2[2], lineNumber: s2[1], source: n2[o3] }));
  }
  return r2;
}, parseOpera10: function(e2) {
  for (var t2 = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n2 = e2.stacktrace.split("\n"), r2 = [], o3 = 0, i2 = n2.length; o3 < i2; o3 += 2) {
    var s2 = t2.exec(n2[o3]);
    s2 && r2.push(new c$2({ functionName: s2[3] || void 0, fileName: s2[2], lineNumber: s2[1], source: n2[o3] }));
  }
  return r2;
}, parseOpera11: function(e2) {
  return e2.stack.split("\n").filter(function(e3) {
    return !!e3.match(d$2) && !e3.match(/^Error created at/);
  }, this).map(function(e3) {
    var t2, n2 = e3.split("@"), r2 = this.extractLocation(n2.pop()), o3 = n2.shift() || "", i2 = o3.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
    o3.match(/\(([^)]*)\)/) && (t2 = o3.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
    var s2 = void 0 === t2 || "[arguments not available]" === t2 ? void 0 : t2.split(",");
    return new c$2({ functionName: i2, args: s2, fileName: r2[0], lineNumber: r2[1], columnNumber: r2[2], source: e3 });
  }, this);
} });
function w$2(e2, t2) {
  const n2 = t2.logger;
  if (!n2)
    return () => {
    };
  let r2;
  r2 = "string" == typeof n2 ? window[n2] : n2;
  const o3 = [];
  if (t2.level.includes("error") && window) {
    const n3 = (n4) => {
      const { message: r3, error: o4 } = n4;
      let i3 = [];
      o4 && (i3 = m$3.parse(o4));
      const s2 = [a(r3, t2.stringifyOptions)];
      e2({ type: "Error", trace: i3.slice(1), time: Date.now(), value: s2 });
    };
    window.addEventListener("error", n3), o3.push(() => {
      window && window.removeEventListener("error", n3);
    });
  }
  for (const e3 of t2.level)
    o3.push(i2(r2, e3));
  return () => {
    o3.forEach((e3) => e3());
  };
  function i2(n3, r3) {
    return n3[r3] ? function(e3, t3, n4) {
      try {
        if (!(t3 in e3))
          return () => {
          };
        const r4 = e3[t3], o4 = n4(r4);
        return "function" == typeof o4 && (o4.prototype = o4.prototype || {}, Object.defineProperties(o4, { __rrweb_original__: { enumerable: false, value: r4 } })), e3[t3] = o4, () => {
          e3[t3] = r4;
        };
      } catch (e4) {
        return () => {
        };
      }
    }(n3, r3, (n4) => (...o4) => {
      n4.apply(this, o4);
      try {
        const n5 = m$3.parse(new Error()), i3 = o4.map((e3) => a(e3, t2.stringifyOptions));
        e2({ type: r3, trace: n5.slice(1), value: i3, time: Date.now() });
      } catch (e3) {
        n4("highlight logger error:", e3, ...o4);
      }
    }) : () => {
    };
  }
}
var y$2 = { exports: {} };
!function(e2, t2) {
  function n2(e3, t3) {
    var n3 = [], r2 = [];
    return null == t3 && (t3 = function(e4, t4) {
      return n3[0] === t4 ? "[Circular ~]" : "[Circular ~." + r2.slice(0, n3.indexOf(t4)).join(".") + "]";
    }), function(o3, i2) {
      if (n3.length > 0) {
        var s2 = n3.indexOf(this);
        ~s2 ? n3.splice(s2 + 1) : n3.push(this), ~s2 ? r2.splice(s2, 1 / 0, o3) : r2.push(o3), ~n3.indexOf(i2) && (i2 = t3.call(this, o3, i2));
      } else
        n3.push(i2);
      return null == e3 ? i2 : e3.call(this, o3, i2);
    };
  }
  t2 = y$2.exports = function(e3, t3, r2, o3) {
    return JSON.stringify(e3, n2(t3, o3), r2);
  }, t2.getSerialize = n2;
}(0, y$2.exports);
var v$2 = y$2.exports;
const b$2 = (e2) => {
  var t2;
  if (0 === e2.length)
    return e2;
  const n2 = e2[0];
  return "console.error" === n2.functionName && (null == (t2 = n2.fileName) ? void 0 : t2.includes("highlight.run")) ? e2.slice(1) : e2;
}, k$3 = ["assert", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"];
var O, R = ((O = R || {}).DeviceMemory = "DeviceMemory", O.ViewportHeight = "ViewportHeight", O.ViewportWidth = "ViewportWidth", O.ViewportArea = "ViewportArea", O), S = ((e2) => (e2.Device = "Device", e2.WebVital = "WebVital", e2.Frontend = "Frontend", e2.Backend = "Backend", e2))(S || {});
const N = ['["\\"Script error.\\""]', '[{"isTrusted":true}]', '["{}"]', '[""]', '["\\"\\""]'], E$1 = ["websocket error", '\\"ResizeObserver loop'];
var _ = Object.defineProperty, T = Object.defineProperties, x$2 = Object.getOwnPropertyDescriptors, L = Object.getOwnPropertySymbols, j = Object.prototype.hasOwnProperty, I$1 = Object.prototype.propertyIsEnumerable, C$1 = (e2, t2, n2) => t2 in e2 ? _(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2, H$1 = (e2, t2) => {
  for (var n2 in t2 || (t2 = {}))
    j.call(t2, n2) && C$1(e2, n2, t2[n2]);
  if (L)
    for (var n2 of L(t2))
      I$1.call(t2, n2) && C$1(e2, n2, t2[n2]);
  return e2;
}, P = (e2, t2) => T(e2, x$2(t2));
const D$1 = (e2, t2, n2) => {
  const r2 = U(t2, e2.headers, n2);
  return P(H$1({}, e2), { headers: r2 });
}, A$2 = (e2, t2, n2) => {
  const r2 = U(t2, e2.headers, n2);
  return P(H$1({}, e2), { headers: r2 });
}, U = (e2, t2, n2) => {
  var r2, o3;
  const i2 = H$1({}, t2);
  return n2 ? (null == (r2 = Object.keys(i2)) || r2.forEach((e3) => {
    [...n2].includes(null == e3 ? void 0 : e3.toLowerCase()) || (i2[e3] = "[REDACTED]");
  }), i2) : (null == (o3 = Object.keys(i2)) || o3.forEach((t3) => {
    [...B$1, ...e2].includes(null == t3 ? void 0 : t3.toLowerCase()) && (i2[t3] = "[REDACTED]");
  }), i2);
}, B$1 = ["authorization", "cookie", "proxy-authorization", "token"], q$3 = ["https://www.googleapis.com/identitytoolkit", "https://securetoken.googleapis.com"];
const K = "X-Highlight-Request", M = (e2) => {
  let t2 = e2;
  return !e2.startsWith("https://") && !e2.startsWith("http://") && (t2 = `${window.location.origin}${t2}`), t2.replace(/\/+$/, "");
}, F$1 = (e2, t2, n2) => {
  e2.sort((e3, t3) => e3.responseEnd - t3.responseEnd);
  const r2 = e2.reduce((e3, t3) => {
    const r3 = M(t3.name);
    return t3.initiatorType === n2 ? e3[n2][r3] = [...e3[n2][r3] || [], t3] : e3.others[r3] = [...e3.others[r3] || [], t3], e3;
  }, { xmlhttprequest: {}, others: {}, fetch: {} });
  let o3 = {};
  o3 = t2.reduce((e3, t3) => {
    const n3 = M(t3.request.url);
    return e3[n3] = [...e3[n3] || [], t3], e3;
  }, o3);
  for (let e3 in r2[n2]) {
    const t3 = r2[n2][e3], i2 = o3[e3];
    if (!i2)
      continue;
    const s2 = Math.max(t3.length - i2.length, 0);
    for (let e4 = s2; e4 < t3.length; e4++)
      t3[e4] && (t3[e4].requestResponsePair = i2[e4 - s2]);
  }
  e2 = [];
  for (let t3 in r2)
    for (let n3 in r2[t3])
      e2 = e2.concat(r2[t3][n3]);
  return e2.sort((e3, t3) => e3.fetchStart - t3.fetchStart).map((e3) => (e3.toJSON = function() {
    return { initiatorType: this.initiatorType, startTime: this.startTime, responseEnd: this.responseEnd, name: this.name, transferSize: this.transferSize, encodedBodySize: this.encodedBodySize };
  }, e3));
}, V = (e2, t2, n2) => !((e3, t3) => e3.toLocaleLowerCase().includes("highlight.run") || e3.toLocaleLowerCase().includes("highlight.run") || e3.toLocaleLowerCase().includes(t3))(e2, t2) || z$2(e2, n2), z$2 = (e2, t2) => {
  var n2;
  let r2 = [];
  true === t2 ? (r2 = ["localhost", /^\//], null != (n2 = null == window ? void 0 : window.location) && n2.host && r2.push(window.location.host)) : t2 instanceof Array && (r2 = t2);
  let o3 = false;
  return r2.forEach((t3) => {
    e2.match(t3) && (o3 = true);
  }), o3;
};
const W = () => function(e2) {
  for (var t2 = "", n2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r2 = n2.length, o3 = 0; o3 < e2; o3++)
    t2 += n2.charAt(Math.floor(Math.random() * r2));
  return t2;
}(10), $ = (e2, t2) => e2 + "/" + t2;
var J = (e2, t2, n2) => new Promise((r2, o3) => {
  var i2 = (e3) => {
    try {
      a2(n2.next(e3));
    } catch (e4) {
      o3(e4);
    }
  }, s2 = (e3) => {
    try {
      a2(n2.throw(e3));
    } catch (e4) {
      o3(e4);
    }
  }, a2 = (e3) => e3.done ? r2(e3.value) : Promise.resolve(e3.value).then(i2, s2);
  a2((n2 = n2.apply(e2, t2)).next());
});
const G$1 = (e2, t2, n2, r2, o3, i2) => {
  const s2 = XMLHttpRequest.prototype, a2 = s2.open, l2 = s2.send, c2 = s2.setRequestHeader;
  return s2.open = function(e3, t3) {
    return this._method = e3, this._url = t3, this._requestHeaders = {}, this._shouldRecordHeaderAndBody = !r2.some((e4) => t3.toLowerCase().includes(e4)), a2.apply(this, arguments);
  }, s2.setRequestHeader = function(e3, t3) {
    return this._requestHeaders[e3] = t3, c2.apply(this, arguments);
  }, s2.send = function(r3) {
    if (!V(this._url, t2, n2))
      return l2.apply(this, arguments);
    const s3 = W();
    z$2(this._url, n2) && this.setRequestHeader(K, $(o3, s3));
    const a3 = this._shouldRecordHeaderAndBody, c3 = { id: s3, url: this._url, verb: this._method, headers: a3 ? this._requestHeaders : {}, body: void 0 };
    if (a3 && r3) {
      const e3 = Y(r3, c3.url);
      e3 && (c3.body = X(e3, i2));
    }
    return this.addEventListener("load", function() {
      return J(this, null, function* () {
        const t3 = { status: this.status, headers: {}, body: void 0 };
        if (a3) {
          if (r3) {
            const e4 = Y(r3, c3.url);
            e4 && (c3.body = X(e4, i2));
          }
          const e3 = this.getAllResponseHeaders().trim().split(/[\r\n]+/), n3 = {};
          if (e3.forEach(function(e4) {
            const t4 = e4.split(": "), r4 = t4.shift();
            n3[r4] = t4.join(": ");
          }), t3.headers = n3, "" === this.responseType || "text" === this.responseType)
            t3.body = X(this.responseText, i2), t3.size = 8 * this.responseText.length;
          else if ("blob" === this.responseType) {
            const e4 = this.response, n4 = yield e4.text();
            t3.body = X(n4, i2), t3.size = e4.size;
          } else
            try {
              t3.body = X(this.response, i2);
            } catch (e4) {
            }
        }
        e2({ request: c3, response: t3, urlBlocked: !a3 });
      });
    }), this.addEventListener("error", function() {
      return J(this, null, function* () {
        const t3 = { status: this.status, headers: void 0, body: void 0 };
        e2({ request: c3, response: t3, urlBlocked: false });
      });
    }), l2.apply(this, arguments);
  }, () => {
    s2.open = a2, s2.send = l2, s2.setRequestHeader = c2;
  };
}, Y = (e2, t2) => {
  if ("string" == typeof e2) {
    if (!(null == t2 ? void 0 : t2.includes("localhost")) && !(null == t2 ? void 0 : t2.includes("highlight.run")) || !e2.includes("pushPayload"))
      return e2;
  } else if ("object" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2)
    return e2.toString();
  return null;
}, X = (e2, t2) => {
  if (!t2 || !e2)
    return e2;
  try {
    const n2 = JSON.parse(e2);
    return Object.keys(n2).forEach((e3) => {
      t2.includes(e3.toLocaleLowerCase()) || (n2[e3] = "[REDACTED]");
    }), JSON.stringify(n2);
  } catch (e3) {
  }
  return e2;
};
var Q = Object.defineProperty, Z = Object.defineProperties, ee = Object.getOwnPropertyDescriptors, te = Object.getOwnPropertySymbols, ne = Object.prototype.hasOwnProperty, re = Object.prototype.propertyIsEnumerable, oe = (e2, t2, n2) => t2 in e2 ? Q(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2, ie = (e2, t2) => {
  for (var n2 in t2 || (t2 = {}))
    ne.call(t2, n2) && oe(e2, n2, t2[n2]);
  if (te)
    for (var n2 of te(t2))
      re.call(t2, n2) && oe(e2, n2, t2[n2]);
  return e2;
}, se = (e2, t2) => Z(e2, ee(t2));
const ae = (e2, t2, n2, r2, o3, i2) => {
  const s2 = window._fetchProxy;
  return window._fetchProxy = function(a2, l2) {
    const { method: c2, url: d2 } = le(a2, l2);
    if (!V(d2, t2, n2))
      return s2.call(this, a2, l2);
    const u2 = W();
    if (z$2(d2, n2)) {
      l2 = l2 || {};
      let e3 = new Headers(l2.headers);
      e3.set(K, $(o3, u2)), l2.headers = Object.fromEntries(e3.entries());
    }
    const p2 = { id: u2, headers: {}, body: void 0, url: d2, verb: c2 }, h2 = !r2.some((e3) => d2.toLowerCase().includes(e3));
    h2 && (p2.headers = Object.fromEntries(new Headers(null == l2 ? void 0 : l2.headers).entries()), p2.body = X(null == l2 ? void 0 : l2.body, i2));
    let g2 = s2.call(this, a2, l2);
    return ce(g2, p2, e2, h2, i2), g2;
  }, () => {
    window._fetchProxy = s2;
  };
}, le = (e2, t2) => {
  const n2 = t2 && t2.method || "object" == typeof e2 && "method" in e2 && e2.method || "GET";
  let r2;
  return r2 = "object" == typeof e2 ? "url" in e2 && e2.url ? e2.url : e2.toString() : e2, { method: n2, url: r2 };
}, ce = (e2, t2, n2, r2, o3) => {
  e2.then((e3) => ((e4, t3, n3) => new Promise((r3, o4) => {
    var i2 = (e5) => {
      try {
        a2(n3.next(e5));
      } catch (e6) {
        o4(e6);
      }
    }, s2 = (e5) => {
      try {
        a2(n3.throw(e5));
      } catch (e6) {
        o4(e6);
      }
    }, a2 = (e5) => e5.done ? r3(e5.value) : Promise.resolve(e5.value).then(i2, s2);
    a2((n3 = n3.apply(e4, t3)).next());
  }))(void 0, null, function* () {
    let i2 = { body: void 0, headers: void 0, status: 0, size: 0 }, s2 = false;
    if ("stack" in e3 || e3 instanceof Error)
      i2 = se(ie({}, i2), { body: e3.message, status: 0, size: void 0 }), s2 = true;
    else if ("status" in e3) {
      if (i2 = se(ie({}, i2), { status: e3.status }), r2) {
        let t3;
        try {
          const n3 = e3.clone().body;
          if (n3) {
            let e4, r3 = n3.getReader(), i3 = new TextDecoder(), s3 = "";
            for (; !(e4 = yield r3.read()).done; ) {
              let t4 = e4.value;
              s3 += i3.decode(t4);
            }
            t3 = s3, t3 = X(t3, o3);
          } else
            t3 = "";
        } catch (e4) {
          t3 = `Unable to clone response: ${e4}`;
        }
        i2.body = t3, i2.headers = e3.headers, i2.size = 8 * t3.length;
      }
      s2 = true;
    }
    s2 && n2({ request: t2, response: i2, urlBlocked: !r2 });
  })).catch(() => {
  });
};
var de = Object.defineProperty, ue = Object.getOwnPropertySymbols, pe = Object.prototype.hasOwnProperty, he = Object.prototype.propertyIsEnumerable, ge = (e2, t2, n2) => t2 in e2 ? de(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2;
const fe = (e2, t2, n2) => {
  var r2 = e2, { request: o3, response: i2 } = r2, s2 = ((e3, t3) => {
    var n3 = {};
    for (var r3 in e3)
      pe.call(e3, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e3[r3]);
    if (null != e3 && ue)
      for (var r3 of ue(e3))
        t3.indexOf(r3) < 0 && he.call(e3, r3) && (n3[r3] = e3[r3]);
    return n3;
  })(r2, ["request", "response"]);
  return ((e3, t3) => {
    for (var n3 in t3 || (t3 = {}))
      pe.call(t3, n3) && ge(e3, n3, t3[n3]);
    if (ue)
      for (var n3 of ue(t3))
        he.call(t3, n3) && ge(e3, n3, t3[n3]);
    return e3;
  })({ request: D$1(o3, t2, n2), response: A$2(i2, t2, n2) }, s2);
};
var me = Object.defineProperty, we = Object.defineProperties, ye = Object.getOwnPropertyDescriptors, ve = Object.getOwnPropertySymbols, be = Object.prototype.hasOwnProperty, ke = Object.prototype.propertyIsEnumerable, Oe = (e2, t2, n2) => t2 in e2 ? me(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2;
class Re {
  constructor(e2) {
    this.hasNetworkRecording = true, this.options = e2, this.disableConsoleRecording = "localhost" === window.location.hostname || !!e2.disableConsoleRecording, this.consoleMethodsToRecord = e2.consoleMethodsToRecord || [...k$3], this.listeners = [], this.errors = [], this.messages = [];
  }
  isListening() {
    return this.listeners.length > 0;
  }
  startListening() {
    if (this.isListening())
      return;
    const e2 = this;
    this.disableConsoleRecording || this.listeners.push(w$2((t2) => {
      var n2, r2, o3;
      if (("Error" === t2.type || "error" === t2.type) && t2.value && t2.trace) {
        const i2 = v$2(t2.value);
        if (N.includes(i2) || E$1.some((e3) => i2.includes(e3)))
          return;
        e2.errors.push({ event: i2, type: "console.error", url: window.location.href, source: null != (n2 = t2.trace[0]) && n2.fileName ? t2.trace[0].fileName : "", lineNumber: null != (r2 = t2.trace[0]) && r2.lineNumber ? t2.trace[0].lineNumber : 0, columnNumber: null != (o3 = t2.trace[0]) && o3.columnNumber ? t2.trace[0].columnNumber : 0, stackTrace: t2.trace, timestamp: new Date().toISOString() });
      } else
        e2.messages.push(t2);
    }, { level: this.consoleMethodsToRecord, logger: "console", stringifyOptions: { depthOfLimit: 10, numOfKeysLimit: 100, stringLengthLimit: 1e3 } })), this.listeners.push(((e3) => {
      const t2 = window.onerror;
      return window.onerror = (t3, n2, r2, o3, i2) => {
        var s2, a2, l2, c2;
        if (i2) {
          let r3 = [];
          try {
            r3 = m$3.parse(i2);
          } catch (e4) {
          }
          const o4 = b$2(r3);
          e3({ event: v$2(t3), type: "window.onerror", url: window.location.href, source: n2 || "", lineNumber: null != (s2 = o4[0]) && s2.lineNumber ? null == (a2 = o4[0]) ? void 0 : a2.lineNumber : 0, columnNumber: null != (l2 = o4[0]) && l2.columnNumber ? null == (c2 = o4[0]) ? void 0 : c2.columnNumber : 0, stackTrace: o4, timestamp: new Date().toISOString() });
        }
      }, () => {
        window.onerror = t2;
      };
    })((t2) => e2.errors.push(t2))), Re.setupNetworkListener(this, this.options);
  }
  stopListening() {
    this.listeners.forEach((e2) => e2()), this.listeners = [];
  }
  static setupNetworkListener(e2, t2) {
    var n2, r2, o3, i2, s2, a2, l2, c2;
    e2._backendUrl = (null == t2 ? void 0 : t2.backendUrl) || "https://pub.highlight.run", e2.xhrNetworkContents = [], e2.fetchNetworkContents = [], e2.networkHeadersToRedact = [], e2.urlBlocklist = [], e2.tracingOrigins = t2.tracingOrigins || [], void 0 !== (null == t2 ? void 0 : t2.disableNetworkRecording) ? (e2.disableNetworkRecording = null == t2 ? void 0 : t2.disableNetworkRecording, e2.enableRecordingNetworkContents = false, e2.networkHeadersToRedact = [], e2.urlBlocklist = [], e2.networkBodyKeysToRecord = [], e2.networkBodyKeysToRecord = []) : "boolean" == typeof (null == t2 ? void 0 : t2.networkRecording) ? (e2.disableNetworkRecording = !t2.networkRecording, e2.enableRecordingNetworkContents = false, e2.networkHeadersToRedact = [], e2.urlBlocklist = []) : (void 0 !== (null == (n2 = t2.networkRecording) ? void 0 : n2.enabled) ? e2.disableNetworkRecording = !t2.networkRecording.enabled : e2.disableNetworkRecording = false, e2.enableRecordingNetworkContents = (null == (r2 = t2.networkRecording) ? void 0 : r2.recordHeadersAndBody) || false, e2.networkHeadersToRedact = (null == (i2 = null == (o3 = t2.networkRecording) ? void 0 : o3.networkHeadersToRedact) ? void 0 : i2.map((e3) => e3.toLowerCase())) || [], e2.urlBlocklist = (null == (a2 = null == (s2 = t2.networkRecording) ? void 0 : s2.urlBlocklist) ? void 0 : a2.map((e3) => e3.toLowerCase())) || [], e2.urlBlocklist = [...e2.urlBlocklist, ...q$3], e2.networkHeaderKeysToRecord = null == (l2 = t2.networkRecording) ? void 0 : l2.headerKeysToRecord, e2.networkHeaderKeysToRecord && (e2.networkHeadersToRedact = [], e2.networkHeaderKeysToRecord = e2.networkHeaderKeysToRecord.map((e3) => e3.toLocaleLowerCase())), e2.networkBodyKeysToRecord = null == (c2 = t2.networkRecording) ? void 0 : c2.bodyKeysToRecord, e2.networkBodyKeysToRecord && (e2.networkBodyKeysToRecord = e2.networkBodyKeysToRecord.map((e3) => e3.toLocaleLowerCase()))), !e2.disableNetworkRecording && e2.enableRecordingNetworkContents && e2.listeners.push((({ xhrCallback: e3, fetchCallback: t3, headersToRedact: n3, backendUrl: r3, tracingOrigins: o4, urlBlocklist: i3, sessionSecureID: s3, bodyKeysToRecord: a3, headerKeysToRecord: l3 }) => {
      const c3 = G$1((t4) => {
        e3(fe(t4, n3, l3));
      }, r3, o4, i3, s3, a3), d2 = ae((e4) => {
        t3(fe(e4, n3, l3));
      }, r3, o4, i3, s3, a3);
      return () => {
        c3(), d2();
      };
    })({ xhrCallback: (t3) => {
      e2.xhrNetworkContents.push(t3);
    }, fetchCallback: (t3) => {
      e2.fetchNetworkContents.push(t3);
    }, headersToRedact: e2.networkHeadersToRedact, backendUrl: e2._backendUrl, tracingOrigins: e2.tracingOrigins, urlBlocklist: e2.urlBlocklist, sessionSecureID: t2.sessionSecureID, headerKeysToRecord: e2.networkHeaderKeysToRecord, bodyKeysToRecord: e2.networkBodyKeysToRecord }));
  }
  static getRecordedNetworkResources(e2, t2) {
    var n2;
    let r2 = [];
    if (!e2.disableNetworkRecording) {
      const o3 = (null == (n2 = null == window ? void 0 : window.performance) ? void 0 : n2.timeOrigin) || 0;
      r2 = performance.getEntriesByType("resource");
      const i2 = 2 * (t2 - o3);
      r2 = r2.filter((t3) => V(t3.name, e2._backendUrl, e2.tracingOrigins)).map((e3) => ((e4, t3) => we(e4, ye(t3)))(((e4, t3) => {
        for (var n3 in t3 || (t3 = {}))
          be.call(t3, n3) && Oe(e4, n3, t3[n3]);
        if (ve)
          for (var n3 of ve(t3))
            ke.call(t3, n3) && Oe(e4, n3, t3[n3]);
        return e4;
      })({}, e3.toJSON()), { offsetStartTime: e3.startTime - i2, offsetResponseEnd: e3.responseEnd - i2, offsetFetchStart: e3.fetchStart - i2 })), e2.enableRecordingNetworkContents && (r2 = F$1(r2, e2.xhrNetworkContents, "xmlhttprequest"), r2 = F$1(r2, e2.fetchNetworkContents, "fetch"));
    }
    return r2;
  }
  static clearRecordedNetworkResources(e2) {
    e2.disableNetworkRecording || (e2.xhrNetworkContents = [], e2.fetchNetworkContents = [], performance.clearResourceTimings());
  }
}
var Se = ((e2) => (e2.RECORDING_START_TIME = "highlightRecordingStartTime", e2.SEGMENT_LAST_SENT_HASH_KEY = "HIGHLIGHT_SEGMENT_LAST_SENT_HASH_KEY", e2.SESSION_DATA = "sessionData", e2.SESSION_SECURE_ID = "sessionSecureID", e2.USER_IDENTIFIER = "highlightIdentifier", e2.USER_OBJECT = "highlightUserObject", e2.PAYLOAD_ID = "payloadId", e2))(Se || {});
var Ee = Object.defineProperty, _e = Object.defineProperties, Te = Object.getOwnPropertyDescriptors, xe = Object.getOwnPropertySymbols, Le = Object.prototype.hasOwnProperty, je = Object.prototype.propertyIsEnumerable, Ie = (e2, t2, n2) => t2 in e2 ? Ee(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2, Ce = (e2, t2) => {
  for (var n2 in t2 || (t2 = {}))
    Le.call(t2, n2) && Ie(e2, n2, t2[n2]);
  if (xe)
    for (var n2 of xe(t2))
      je.call(t2, n2) && Ie(e2, n2, t2[n2]);
  return e2;
}, He = (e2, t2) => _e(e2, Te(t2));
"undefined" == typeof window || "undefined" == typeof document || (window._originalFetch = window.fetch, window._fetchProxy = (e2, t2) => window._originalFetch(e2, t2), window._highlightFetchPatch = (e2, t2) => window._fetchProxy.call(window || global, e2, t2), window.fetch = window._highlightFetchPatch);
var Pe = ((e2) => (e2.Device = "Device", e2.WebVital = "WebVital", e2.Frontend = "Frontend", e2.Backend = "Backend", e2))(Pe || {});
const De = (e2, t2) => {
  console.warn(`Highlight Warning: (${e2}): `, t2);
};
var Ae, Ue, Be, qe = false;
const Ke = { options: void 0, init: (e2, o3) => {
  var i2, s2, a2, l2;
  try {
    if (Ke.options = o3, "undefined" == typeof window || "undefined" == typeof document)
      return;
    if (!e2)
      return void console.info("Highlight is not initializing because projectID was passed undefined.");
    if (qe)
      return;
    qe = true, Ae = document.createElement("script");
    var c2 = null != o3 && o3.scriptUrl ? o3.scriptUrl : "https://static.highlight.run/index.js";
    Ae.setAttribute("src", c2 + "?" + new Date().getMilliseconds()), Ae.setAttribute("type", "text/javascript"), document.getElementsByTagName("head")[0].appendChild(Ae);
    let d2 = (() => {
      let e3 = JSON.parse(window.sessionStorage.getItem(Se.SESSION_DATA) || "{}");
      if (e3 && e3.lastPushTime && Date.now() - e3.lastPushTime < 55e3)
        return e3;
    })(), u2 = (() => {
      var e3;
      const t2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var n2 = "";
      const r2 = "undefined" != typeof window && (null == (e3 = window.crypto) ? void 0 : e3.getRandomValues), o4 = new Uint32Array(28);
      r2 && window.crypto.getRandomValues(o4);
      for (let e4 = 0; e4 < 28; e4++)
        n2 += t2.charAt(r2 ? o4[e4] % t2.length : Math.floor(Math.random() * t2.length));
      return n2;
    })();
    null != d2 && d2.sessionSecureID && (u2 = d2.sessionSecureID);
    const p2 = { organizationID: e2, debug: null == o3 ? void 0 : o3.debug, backendUrl: null == o3 ? void 0 : o3.backendUrl, tracingOrigins: null == o3 ? void 0 : o3.tracingOrigins, disableNetworkRecording: null == o3 ? void 0 : o3.disableNetworkRecording, networkRecording: null == o3 ? void 0 : o3.networkRecording, disableConsoleRecording: null == o3 ? void 0 : o3.disableConsoleRecording, consoleMethodsToRecord: null == o3 ? void 0 : o3.consoleMethodsToRecord, enableSegmentIntegration: null == o3 ? void 0 : o3.enableSegmentIntegration, enableStrictPrivacy: (null == o3 ? void 0 : o3.enableStrictPrivacy) || false, enableCanvasRecording: null == o3 ? void 0 : o3.enableCanvasRecording, enablePerformanceRecording: null == o3 ? void 0 : o3.enablePerformanceRecording, samplingStrategy: null == o3 ? void 0 : o3.samplingStrategy, inlineImages: (null == o3 ? void 0 : o3.inlineImages) || false, inlineStylesheet: (null == o3 ? void 0 : o3.inlineStylesheet) || false, firstloadVersion: t$2, environment: (null == o3 ? void 0 : o3.environment) || "production", appVersion: null == o3 ? void 0 : o3.version, sessionShortcut: null == o3 ? void 0 : o3.sessionShortcut, feedbackWidget: null == o3 ? void 0 : o3.feedbackWidget, sessionSecureID: u2 };
    Be = new Re(p2), null != o3 && o3.manualStart || Be.startListening(), Ae.addEventListener("load", () => {
      const e3 = () => {
        Ue = new window.Highlight(p2, Be), null != o3 && o3.manualStart || Ue.initialize();
      };
      if ("Highlight" in window)
        e3();
      else {
        const t2 = setInterval(() => {
          "Highlight" in window && (e3(), clearInterval(t2));
        }, 500);
      }
    }), null != (s2 = null == (i2 = null == o3 ? void 0 : o3.integrations) ? void 0 : i2.mixpanel) && s2.projectToken && (({ projectToken: e3 }) => {
      var t2, n2, o4;
      document, (t2 = window.mixpanel || []).__SV || (window.mixpanel = t2, t2._i = [], t2.init = function(e4, r2, i4) {
        function s3(e5, t3) {
          var n3 = t3.split(".");
          2 == n3.length && (e5 = e5[n3[0]], t3 = n3[1]), e5[t3] = function() {
            e5.push([t3].concat(Array.prototype.slice.call(arguments, 0)));
          };
        }
        var a3 = t2;
        for (void 0 !== i4 ? a3 = t2[i4] = [] : i4 = "mixpanel", a3.people = a3.people || [], a3.toString = function(e5) {
          var t3 = "mixpanel";
          return "mixpanel" !== i4 && (t3 += "." + i4), e5 || (t3 += " (stub)"), t3;
        }, a3.people.toString = function() {
          return a3.toString(1) + ".people (stub)";
        }, n2 = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" "), o4 = 0; o4 < n2.length; o4++)
          s3(a3, n2[o4]);
        var l3 = "set set_once union unset remove delete".split(" ");
        a3.get_group = function() {
          function e5(e6) {
            t3[e6] = function() {
              call2_args = arguments, call2 = [e6].concat(Array.prototype.slice.call(call2_args, 0)), a3.push([n3, call2]);
            };
          }
          for (var t3 = {}, n3 = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), r3 = 0; r3 < l3.length; r3++)
            e5(l3[r3]);
          return t3;
        }, t2._i.push([e4, r2, i4]);
      }, t2.__SV = 1.2);
      const i3 = document.createElement("script");
      i3.src = r$3, document.head.appendChild(i3), i3.addEventListener("load", () => {
        var t3;
        null == (t3 = window.mixpanel) || t3.init(e3);
      });
    })(o3.integrations.mixpanel), null != (l2 = null == (a2 = null == o3 ? void 0 : o3.integrations) ? void 0 : a2.amplitude) && l2.apiKey && n$3(o3.integrations.amplitude);
  } catch (e3) {
    De("init", e3);
  }
}, addSessionFeedback: ({ verbatim: e2, userName: t2, userEmail: n2, timestampOverride: r2 }) => {
  try {
    Ke.onHighlightReady(() => Ue.addSessionFeedback({ verbatim: e2, timestamp: r2 || new Date().toISOString(), user_email: n2, user_name: t2 }));
  } catch (e3) {
    De("error", e3);
  }
}, toggleSessionFeedbackModal: () => {
  try {
    Ke.onHighlightReady(() => Ue.toggleFeedbackWidgetVisibility());
  } catch (e2) {
    De("error", e2);
  }
}, consumeError: (e2, t2, n2) => {
  try {
    Ke.onHighlightReady(() => Ue.consumeCustomError(e2, t2, JSON.stringify(n2)));
  } catch (e3) {
    De("error", e3);
  }
}, error: (e2, t2) => {
  try {
    Ke.onHighlightReady(() => Ue.pushCustomError(e2, JSON.stringify(t2)));
  } catch (e3) {
    De("error", e3);
  }
}, track: (e2, t2 = {}) => {
  var n2, r2, o3, i2, s2, a2;
  try {
    Ke.onHighlightReady(() => Ue.addProperties(He(Ce({}, t2), { event: e2 })));
    const l2 = null == Ue ? void 0 : Ue.getCurrentSessionURL();
    null != (n2 = window.mixpanel) && n2.track && window.mixpanel.track(e2, He(Ce({}, t2), { highlightSessionURL: l2 })), !(null == (i2 = null == (o3 = null == (r2 = Ke.options) ? void 0 : r2.integrations) ? void 0 : o3.mixpanel) || !i2.projectToken) && !(null != (s2 = null == window ? void 0 : window.mixpanel) && s2.track) && console.warn("Mixpanel not loaded, but Highlight is configured to use it. This is usually caused by Mixpanel being blocked by the user's browser."), null != (a2 = window.amplitude) && a2.getInstance && window.amplitude.getInstance().logEvent(e2, He(Ce({}, t2), { highlightSessionURL: l2 })), window.Intercom && window.Intercom("trackEvent", e2, t2);
  } catch (e3) {
    De("track", e3);
  }
}, start: (e2) => {
  try {
    if ("Recording" === (null == Ue ? void 0 : Ue.state))
      return void (null != e2 && e2.silent || console.warn("You cannot called `start()` again. The session is already being recorded."));
    Be.startListening();
    var t2 = setInterval(function() {
      Ue && (clearInterval(t2), Ue.initialize());
    }, 200);
  } catch (e3) {
    De("start", e3);
  }
}, stop: () => {
  try {
    Ke.onHighlightReady(() => Ue.stopRecording(true));
  } catch (e2) {
    De("stop", e2);
  }
}, identify: (e2, t2 = {}) => {
  var n2, r2;
  try {
    Ke.onHighlightReady(() => Ue.identify(e2, t2));
  } catch (e3) {
    De("identify", e3);
  }
  if (null != (n2 = window.mixpanel) && n2.identify && window.mixpanel.identify(e2), null != (r2 = window.amplitude) && r2.getInstance && (window.amplitude.getInstance().setUserId(e2), Object.keys(t2).length > 0)) {
    const e3 = Object.keys(t2).reduce((e4, n3) => (e4.set(n3, t2[n3]), e4), new window.amplitude.Identify());
    window.amplitude.getInstance().identify(e3);
  }
}, metrics: (e2) => {
  try {
    Ke.onHighlightReady(() => Ue.recordMetric(e2.map((e3) => He(Ce({}, e3), { category: "Frontend" }))));
  } catch (e3) {
    De("metrics", e3);
  }
}, getSessionURL: () => new Promise((e2, t2) => {
  Ke.onHighlightReady(() => {
    const n2 = Ue.getCurrentSessionURL();
    n2 ? e2(n2) : t2(new Error("Unable to get session URL"));
  });
}), getSessionDetails: () => new Promise((e2, t2) => {
  Ke.onHighlightReady(() => {
    const n2 = Ue.getCurrentSessionURL();
    if (n2) {
      const t3 = Ue.getCurrentSessionTimestamp(), r2 = new Date().getTime(), o3 = new URL(n2), i2 = new URL(n2);
      i2.searchParams.set("ts", ((r2 - t3) / 1e3).toString()), e2({ url: o3.toString(), urlWithTimestamp: i2.toString() });
    } else
      t2(new Error("Could not get session URL"));
  });
}), onHighlightReady: (e2) => {
  try {
    if (Ue && Ue.ready)
      e2();
    else
      var t2 = setInterval(function() {
        Ue && Ue.ready && (clearInterval(t2), e2());
      }, 200);
  } catch (e3) {
    De("onHighlightReady", e3);
  }
} };
"undefined" != typeof window && (window.H = Ke), (() => {
  var e2, t2;
  "undefined" != typeof chrome && (null == (e2 = null == chrome ? void 0 : chrome.runtime) ? void 0 : e2.onMessage) && (null == (t2 = null == chrome ? void 0 : chrome.runtime) || t2.onMessage.addListener((e3, t3, n2) => {
    const r2 = e3.action;
    switch (console.log(`[highlight] received '${r2}' event from extension.`), r2) {
      case "init": {
        const e4 = "http://localhost:8080/dist/index.js";
        console.log("url", e4), Ke.init(1, { debug: true, scriptUrl: e4 }), Ke.getSessionURL().then((e5) => {
          n2({ url: e5 });
        });
        break;
      }
      case "stop":
        Ke.stop(), n2({ success: true });
    }
    return true;
  }));
})();
var rudderSdkJsExports = {};
var rudderSdkJs = {
  get exports() {
    return rudderSdkJsExports;
  },
  set exports(v2) {
    rudderSdkJsExports = v2;
  }
};
(function(module, exports) {
  !function(e2, t2) {
    t2(exports);
  }(commonjsGlobal, function(e2) {
    function t2(e3, t3) {
      var n3 = Object.keys(e3);
      if (Object.getOwnPropertySymbols) {
        var r3 = Object.getOwnPropertySymbols(e3);
        t3 && (r3 = r3.filter(function(t4) {
          return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
        })), n3.push.apply(n3, r3);
      }
      return n3;
    }
    function n2(e3) {
      for (var n3 = 1; n3 < arguments.length; n3++) {
        var r3 = null != arguments[n3] ? arguments[n3] : {};
        n3 % 2 ? t2(Object(r3), true).forEach(function(t3) {
          a2(e3, t3, r3[t3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r3)) : t2(Object(r3)).forEach(function(t3) {
          Object.defineProperty(e3, t3, Object.getOwnPropertyDescriptor(r3, t3));
        });
      }
      return e3;
    }
    function r2(e3) {
      return r2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
        return typeof e4;
      } : function(e4) {
        return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
      }, r2(e3);
    }
    function i2(e3, t3) {
      if (!(e3 instanceof t3))
        throw new TypeError("Cannot call a class as a function");
    }
    function o3(e3, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e3, h2(r3.key), r3);
      }
    }
    function s2(e3, t3, n3) {
      return t3 && o3(e3.prototype, t3), n3 && o3(e3, n3), Object.defineProperty(e3, "prototype", { writable: false }), e3;
    }
    function a2(e3, t3, n3) {
      return (t3 = h2(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
    }
    function u2() {
      return u2 = Object.assign ? Object.assign.bind() : function(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n3 = arguments[t3];
          for (var r3 in n3)
            Object.prototype.hasOwnProperty.call(n3, r3) && (e3[r3] = n3[r3]);
        }
        return e3;
      }, u2.apply(this, arguments);
    }
    function c2(e3) {
      return function(e4) {
        if (Array.isArray(e4))
          return f2(e4);
      }(e3) || function(e4) {
        if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"])
          return Array.from(e4);
      }(e3) || l2(e3) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function l2(e3, t3) {
      if (e3) {
        if ("string" == typeof e3)
          return f2(e3, t3);
        var n3 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? f2(e3, t3) : void 0;
      }
    }
    function f2(e3, t3) {
      (null == t3 || t3 > e3.length) && (t3 = e3.length);
      for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
        r3[n3] = e3[n3];
      return r3;
    }
    function h2(e3) {
      var t3 = function(e4, t4) {
        if ("object" != typeof e4 || null === e4)
          return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r3 = n3.call(e4, t4 || "default");
          if ("object" != typeof r3)
            return r3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e4);
      }(e3, "string");
      return "symbol" == typeof t3 ? t3 : String(t3);
    }
    function d2(e3) {
      if (e3.__esModule)
        return e3;
      var t3 = e3.default;
      if ("function" == typeof t3) {
        var n3 = function e4() {
          if (this instanceof e4) {
            var n4 = [null];
            n4.push.apply(n4, arguments);
            var r3 = Function.bind.apply(t3, n4);
            return new r3();
          }
          return t3.apply(this, arguments);
        };
        n3.prototype = t3.prototype;
      } else
        n3 = {};
      return Object.defineProperty(n3, "__esModule", { value: true }), Object.keys(e3).forEach(function(t4) {
        var r3 = Object.getOwnPropertyDescriptor(e3, t4);
        Object.defineProperty(n3, t4, r3.get ? r3 : { enumerable: true, get: function() {
          return e3[t4];
        } });
      }), n3;
    }
    var p2 = {};
    !function(e3) {
      function t3(e4) {
        if (e4)
          return function(e5) {
            for (var n3 in t3.prototype)
              e5[n3] = t3.prototype[n3];
            return e5;
          }(e4);
      }
      e3.exports = t3, t3.prototype.on = t3.prototype.addEventListener = function(e4, t4) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e4] = this._callbacks["$" + e4] || []).push(t4), this;
      }, t3.prototype.once = function(e4, t4) {
        function n3() {
          this.off(e4, n3), t4.apply(this, arguments);
        }
        return n3.fn = t4, this.on(e4, n3), this;
      }, t3.prototype.off = t3.prototype.removeListener = t3.prototype.removeAllListeners = t3.prototype.removeEventListener = function(e4, t4) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
          return this._callbacks = {}, this;
        var n3, r3 = this._callbacks["$" + e4];
        if (!r3)
          return this;
        if (1 == arguments.length)
          return delete this._callbacks["$" + e4], this;
        for (var i3 = 0; i3 < r3.length; i3++)
          if ((n3 = r3[i3]) === t4 || n3.fn === t4) {
            r3.splice(i3, 1);
            break;
          }
        return 0 === r3.length && delete this._callbacks["$" + e4], this;
      }, t3.prototype.emit = function(e4) {
        this._callbacks = this._callbacks || {};
        for (var t4 = new Array(arguments.length - 1), n3 = this._callbacks["$" + e4], r3 = 1; r3 < arguments.length; r3++)
          t4[r3 - 1] = arguments[r3];
        if (n3) {
          r3 = 0;
          for (var i3 = (n3 = n3.slice(0)).length; r3 < i3; ++r3)
            n3[r3].apply(this, t4);
        }
        return this;
      }, t3.prototype.listeners = function(e4) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e4] || [];
      }, t3.prototype.hasListeners = function(e4) {
        return !!this.listeners(e4).length;
      };
    }({ get exports() {
      return p2;
    }, set exports(e3) {
      p2 = e3;
    } });
    var g2 = p2, y2 = {};
    !function(e3, t3) {
      (t3 = e3.exports = function(e4) {
        return e4.trim ? e4.trim() : t3.right(t3.left(e4));
      }).left = function(e4) {
        return e4.trimLeft ? e4.trimLeft() : e4.replace(/^\s\s*/, "");
      }, t3.right = function(e4) {
        if (e4.trimRight)
          return e4.trimRight();
        for (var t4 = /\s/, n3 = e4.length; t4.test(e4.charAt(--n3)); )
          ;
        return e4.slice(0, n3 + 1);
      };
    }({ get exports() {
      return y2;
    }, set exports(e3) {
      y2 = e3;
    } }, y2);
    var v2 = y2, m2 = /(\w+)\[(\d+)\]/, I2 = function(e3) {
      try {
        return decodeURIComponent(e3.replace(/\+/g, " "));
      } catch (t3) {
        return e3;
      }
    }, A2 = function(e3) {
      if ("string" != typeof e3)
        return {};
      if ("" == (e3 = v2(e3)))
        return {};
      "?" == e3.charAt(0) && (e3 = e3.slice(1));
      for (var t3 = {}, n3 = e3.split("&"), r3 = 0; r3 < n3.length; r3++) {
        var i3, o4 = n3[r3].split("="), s3 = I2(o4[0]);
        (i3 = m2.exec(s3)) ? (t3[i3[1]] = t3[i3[1]] || [], t3[i3[1]][i3[2]] = I2(o4[1])) : t3[o4[0]] = null == o4[1] ? "" : I2(o4[1]);
      }
      return t3;
    };
    function b2(e3) {
      return null != e3 && "object" === r2(e3) && true === e3["@@functional/placeholder"];
    }
    function k2(e3) {
      return function t3(n3) {
        return 0 === arguments.length || b2(n3) ? t3 : e3.apply(this, arguments);
      };
    }
    function E2(e3) {
      return function t3(n3, r3) {
        switch (arguments.length) {
          case 0:
            return t3;
          case 1:
            return b2(n3) ? t3 : k2(function(t4) {
              return e3(n3, t4);
            });
          default:
            return b2(n3) && b2(r3) ? t3 : b2(n3) ? k2(function(t4) {
              return e3(t4, r3);
            }) : b2(r3) ? k2(function(t4) {
              return e3(n3, t4);
            }) : e3(n3, r3);
        }
      };
    }
    function S2(e3) {
      return function t3(n3, r3, i3) {
        switch (arguments.length) {
          case 0:
            return t3;
          case 1:
            return b2(n3) ? t3 : E2(function(t4, r4) {
              return e3(n3, t4, r4);
            });
          case 2:
            return b2(n3) && b2(r3) ? t3 : b2(n3) ? E2(function(t4, n4) {
              return e3(t4, r3, n4);
            }) : b2(r3) ? E2(function(t4, r4) {
              return e3(n3, t4, r4);
            }) : k2(function(t4) {
              return e3(n3, r3, t4);
            });
          default:
            return b2(n3) && b2(r3) && b2(i3) ? t3 : b2(n3) && b2(r3) ? E2(function(t4, n4) {
              return e3(t4, n4, i3);
            }) : b2(n3) && b2(i3) ? E2(function(t4, n4) {
              return e3(t4, r3, n4);
            }) : b2(r3) && b2(i3) ? E2(function(t4, r4) {
              return e3(n3, t4, r4);
            }) : b2(n3) ? k2(function(t4) {
              return e3(t4, r3, i3);
            }) : b2(r3) ? k2(function(t4) {
              return e3(n3, t4, i3);
            }) : b2(i3) ? k2(function(t4) {
              return e3(n3, r3, t4);
            }) : e3(n3, r3, i3);
        }
      };
    }
    function C2(e3, t3) {
      return Object.prototype.hasOwnProperty.call(t3, e3);
    }
    var w2 = k2(function(e3) {
      return null === e3 ? "Null" : void 0 === e3 ? "Undefined" : Object.prototype.toString.call(e3).slice(8, -1);
    });
    function O2(e3, t3, n3, r3) {
      var i3 = function(i4) {
        for (var o4 = t3.length, s3 = 0; s3 < o4; ) {
          if (e3 === t3[s3])
            return n3[s3];
          s3 += 1;
        }
        for (var a3 in t3[s3] = e3, n3[s3] = i4, e3)
          e3.hasOwnProperty(a3) && (i4[a3] = r3 ? O2(e3[a3], t3, n3, true) : e3[a3]);
        return i4;
      };
      switch (w2(e3)) {
        case "Object":
          return i3(Object.create(Object.getPrototypeOf(e3)));
        case "Array":
          return i3([]);
        case "Date":
          return new Date(e3.valueOf());
        case "RegExp":
          return function(e4) {
            return new RegExp(e4.source, (e4.global ? "g" : "") + (e4.ignoreCase ? "i" : "") + (e4.multiline ? "m" : "") + (e4.sticky ? "y" : "") + (e4.unicode ? "u" : ""));
          }(e3);
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          return e3.slice();
        default:
          return e3;
      }
    }
    var _2 = k2(function(e3) {
      return null != e3 && "function" == typeof e3.clone ? e3.clone() : O2(e3, [], [], true);
    });
    function T2(e3) {
      return "[object Object]" === Object.prototype.toString.call(e3);
    }
    var R2 = S2(function(e3, t3, n3) {
      var r3, i3 = {};
      for (r3 in t3)
        C2(r3, t3) && (i3[r3] = C2(r3, n3) ? e3(r3, t3[r3], n3[r3]) : t3[r3]);
      for (r3 in n3)
        C2(r3, n3) && !C2(r3, i3) && (i3[r3] = n3[r3]);
      return i3;
    }), P2 = S2(function e3(t3, n3, r3) {
      return R2(function(n4, r4, i3) {
        return T2(r4) && T2(i3) ? e3(t3, r4, i3) : t3(n4, r4, i3);
      }, n3, r3);
    }), x = S2(function(e3, t3, n3) {
      return P2(function(t4, n4, r3) {
        return e3(n4, r3);
      }, t3, n3);
    }), L2 = {};
    !function(e3) {
      function t3(e4) {
        switch (e4) {
          case "http:":
            return 80;
          case "https:":
            return 443;
          default:
            return location.port;
        }
      }
      e3.parse = function(e4) {
        var n3 = document.createElement("a");
        return n3.href = e4, { href: n3.href, host: n3.host || location.host, port: "0" === n3.port || "" === n3.port ? t3(n3.protocol) : n3.port, hash: n3.hash, hostname: n3.hostname || location.hostname, pathname: "/" != n3.pathname.charAt(0) ? "/" + n3.pathname : n3.pathname, protocol: n3.protocol && ":" != n3.protocol ? n3.protocol : location.protocol, search: n3.search, query: n3.search.slice(1) };
      }, e3.isAbsolute = function(e4) {
        return 0 == e4.indexOf("//") || !!~e4.indexOf("://");
      }, e3.isRelative = function(t4) {
        return !e3.isAbsolute(t4);
      }, e3.isCrossDomain = function(t4) {
        t4 = e3.parse(t4);
        var n3 = e3.parse(window.location.href);
        return t4.hostname !== n3.hostname || t4.port !== n3.port || t4.protocol !== n3.protocol;
      };
    }(L2);
    var M2 = function(e3) {
      return null != e3 && "object" === r2(e3) && false === Array.isArray(e3);
    }, D2 = function(e3, t3, n3) {
      if (M2(n3) || (n3 = { default: n3 }), !F2(e3))
        return void 0 !== n3.default ? n3.default : e3;
      "number" == typeof t3 && (t3 = String(t3));
      var r3 = Array.isArray(t3), i3 = "string" == typeof t3, o4 = n3.separator || ".", s3 = n3.joinChar || ("string" == typeof o4 ? o4 : ".");
      if (!i3 && !r3)
        return e3;
      if (i3 && t3 in e3)
        return B2(t3, e3, n3) ? e3[t3] : n3.default;
      var a3 = r3 ? t3 : function(e4, t4, n4) {
        if ("function" == typeof n4.split)
          return n4.split(e4);
        return e4.split(t4);
      }(t3, o4, n3), u3 = a3.length, c3 = 0;
      do {
        var l3 = a3[c3];
        for ("number" == typeof l3 && (l3 = String(l3)); l3 && "\\" === l3.slice(-1); )
          l3 = N2([l3.slice(0, -1), a3[++c3] || ""], s3, n3);
        if (l3 in e3) {
          if (!B2(l3, e3, n3))
            return n3.default;
          e3 = e3[l3];
        } else {
          for (var f3 = false, h3 = c3 + 1; h3 < u3; )
            if (f3 = (l3 = N2([l3, a3[h3++]], s3, n3)) in e3) {
              if (!B2(l3, e3, n3))
                return n3.default;
              e3 = e3[l3], c3 = h3 - 1;
              break;
            }
          if (!f3)
            return n3.default;
        }
      } while (++c3 < u3 && F2(e3));
      return c3 === u3 ? e3 : n3.default;
    };
    function N2(e3, t3, n3) {
      return "function" == typeof n3.join ? n3.join(e3) : e3[0] + t3 + e3[1];
    }
    function B2(e3, t3, n3) {
      return "function" != typeof n3.isValid || n3.isValid(e3, t3);
    }
    function F2(e3) {
      return M2(e3) || Array.isArray(e3) || "function" == typeof e3;
    }
    for (var U2, j2 = 256, G2 = []; j2--; )
      G2[j2] = (j2 + 256).toString(16).substring(1);
    for (var z2, H2 = [], K2 = 0; K2 < 256; K2++)
      H2[K2] = (K2 + 256).toString(16).substring(1);
    function Q2() {
      var e3;
      (!z2 || K2 + 16 > 4096) && (e3 = 4096, z2 = crypto.getRandomValues(new Uint8Array(e3)), K2 = 0);
      for (var t3, n3 = 0, r3 = ""; n3 < 16; n3++)
        t3 = z2[K2 + n3], r3 += 6 == n3 ? H2[15 & t3 | 64] : 8 == n3 ? H2[63 & t3 | 128] : H2[t3], 1 & n3 && n3 > 1 && n3 < 11 && (r3 += "-");
      return K2 += 16, r3;
    }
    var q2, V2, W2, Y2, X2, J2, $2, Z2, ee2, te2, ne2, re2, ie2, oe2, se2, ae2, ue2, ce2, le2, fe2, he2, de2, pe2, ge2, ye2, ve2, me2, Ie2, Ae2, be2, ke2, Ee2, Se2, Ce2, we2, Oe2, _e2, Te2, Re2, Pe2, xe2, Le2, Me2, De2, Ne2, Be2, Fe2, Ue2, je2, Ge2, ze2, He2, Ke2, Qe2, qe2, Ve2, We2, Ye2, Xe2, Je2, $e2, Ze2, et2, tt2, nt2, rt, it, ot2, st, at, ut, ct, lt, ft = 4, ht = function(e3) {
      switch (e3.toUpperCase()) {
        case "INFO":
          ft = 1;
          break;
        case "DEBUG":
          ft = 2;
          break;
        case "WARN":
          ft = 3;
          break;
        default:
          ft = 4;
      }
    }, dt = function() {
      var e3;
      ft <= 1 && (e3 = console).info.apply(e3, arguments);
    }, pt = function() {
      var e3;
      ft <= 2 && (e3 = console).log.apply(e3, arguments);
    }, gt = function() {
      var e3;
      ft <= 3 && (e3 = console).warn.apply(e3, arguments);
    }, yt = function() {
      var e3;
      ft <= 4 && (e3 = console).error.apply(e3, arguments);
    }, vt = "ADOBE_ANALYTICS", mt = (q2 = { "Adobe Analytics": vt, ADOBEANALYTICS: vt, "ADOBE ANALYTICS": vt }, a2(q2, vt, vt), a2(q2, "AdobeAnalytics", vt), a2(q2, "adobeanalytics", vt), a2(q2, "adobe analytics", vt), a2(q2, "Adobe analytics", vt), a2(q2, "adobe Analytics", vt), q2), It = "AM", At = (V2 = {}, a2(V2, It, It), a2(V2, "AMPLITUDE", It), a2(V2, "Amplitude", It), a2(V2, "am", It), V2), bt = "APPCUES", kt = (W2 = {}, a2(W2, bt, bt), a2(W2, "Appcues", bt), a2(W2, "App Cues", bt), a2(W2, "appcues", bt), W2), Et = "BINGADS", St = (Y2 = {}, a2(Y2, Et, Et), a2(Y2, "BingAds", Et), a2(Y2, "bingads", Et), a2(Y2, "Bing Ads", Et), a2(Y2, "Bing ads", Et), a2(Y2, "bing Ads", Et), a2(Y2, "bing ads", Et), Y2), Ct = "BRAZE", wt = (X2 = {}, a2(X2, Ct, Ct), a2(X2, "Braze", Ct), a2(X2, "braze", Ct), X2), Ot = "BUGSNAG", _t = (J2 = {}, a2(J2, Ot, Ot), a2(J2, "bugsnag", Ot), a2(J2, "Bugsnag", Ot), J2), Tt = "CHARTBEAT", Rt = ($2 = {}, a2($2, Tt, Tt), a2($2, "Chartbeat", Tt), a2($2, "chartbeat", Tt), a2($2, "Chart Beat", Tt), a2($2, "chart beat", Tt), $2), Pt = "CLEVERTAP", xt = (Z2 = {}, a2(Z2, Pt, Pt), a2(Z2, "Clevertap", Pt), a2(Z2, "clevertap", Pt), Z2), Lt = "COMSCORE", Mt = (ee2 = {}, a2(ee2, Lt, Lt), a2(ee2, "Comscore", Lt), a2(ee2, "Com Score", Lt), a2(ee2, "com Score", Lt), a2(ee2, "com score", Lt), a2(ee2, "Com score", Lt), ee2), Dt = "CRITEO", Nt = (te2 = {}, a2(te2, Dt, Dt), a2(te2, "Criteo", Dt), a2(te2, "criteo", Dt), te2), Bt2 = "CUSTOMERIO", Ft = (ne2 = {}, a2(ne2, Bt2, Bt2), a2(ne2, "Customerio", Bt2), a2(ne2, "Customer.io", Bt2), a2(ne2, "CUSTOMER.IO", Bt2), a2(ne2, "customer.io", Bt2), ne2), Ut = "DRIP", jt = (re2 = {}, a2(re2, Ut, Ut), a2(re2, "Drip", Ut), a2(re2, "drip", Ut), re2), Gt = "FACEBOOK_PIXEL", zt = (ie2 = {}, a2(ie2, Gt, Gt), a2(ie2, "FB Pixel", Gt), a2(ie2, "Facebook Pixel", Gt), a2(ie2, "facebook pixel", Gt), a2(ie2, "fbpixel", Gt), a2(ie2, "FBPIXEL", Gt), a2(ie2, "FB_PIXEL", Gt), ie2), Ht = "FULLSTORY", Kt = (oe2 = {}, a2(oe2, Ht, Ht), a2(oe2, "Fullstory", Ht), a2(oe2, "FullStory", Ht), a2(oe2, "full Story", Ht), a2(oe2, "Full Story", Ht), a2(oe2, "Full story", Ht), a2(oe2, "full story", Ht), a2(oe2, "fullstory", Ht), oe2), Qt = "GA", qt = (a2(se2 = {}, Qt, Qt), a2(se2, "Google Analytics", Qt), a2(se2, "GoogleAnalytics", Qt), a2(se2, "GOOGLE ANALYTICS", Qt), a2(se2, "google analytics", Qt), se2), Vt = "GA4", Wt = (a2(ae2 = {}, Vt, Vt), a2(ae2, "Google Analytics 4", Vt), a2(ae2, "Google analytics 4", Vt), a2(ae2, "google analytics 4", Vt), a2(ae2, "Google Analytics4", Vt), a2(ae2, "Google analytics4", Vt), a2(ae2, "google analytics4", Vt), a2(ae2, "GoogleAnalytics4", Vt), ae2), Yt = "GOOGLEADS", Xt = (a2(ue2 = {}, Yt, Yt), a2(ue2, "Google Ads", Yt), a2(ue2, "GoogleAds", Yt), a2(ue2, "GOOGLE ADS", Yt), a2(ue2, "google ads", Yt), a2(ue2, "googleads", Yt), ue2), Jt = "GOOGLE_OPTIMIZE", $t = (a2(ce2 = {}, Jt, Jt), a2(ce2, "Google Optimize", Jt), a2(ce2, "GoogleOptimize", Jt), a2(ce2, "Googleoptimize", Jt), a2(ce2, "GOOGLEOPTIMIZE", Jt), a2(ce2, "google optimize", Jt), a2(ce2, "Google optimize", Jt), a2(ce2, "GOOGLE OPTIMIZE", Jt), ce2), Zt = "GTM", en = (a2(le2 = {}, Zt, Zt), a2(le2, "Google Tag Manager", Zt), a2(le2, "google tag manager", Zt), a2(le2, "googletag manager", Zt), a2(le2, "googletagmanager", Zt), le2), tn = "HEAP", nn = (a2(fe2 = {}, tn, tn), a2(fe2, "Heap", tn), a2(fe2, "heap", tn), a2(fe2, "Heap.io", tn), fe2), rn = "HOTJAR", on = (a2(he2 = {}, rn, rn), a2(he2, "Hotjar", rn), a2(he2, "hotjar", rn), a2(he2, "Hot Jar", rn), a2(he2, "hot jar", rn), he2), sn = "HS", an = (a2(de2 = {}, sn, sn), a2(de2, "Hubspot", sn), a2(de2, "HUBSPOT", sn), a2(de2, "hub spot", sn), a2(de2, "Hub Spot", sn), a2(de2, "Hub spot", sn), de2), un = "INTERCOM", cn = (a2(pe2 = {}, un, un), a2(pe2, "Intercom", un), a2(pe2, "intercom", un), pe2), ln = "KEEN", fn3 = (a2(ge2 = {}, ln, ln), a2(ge2, "Keen", ln), a2(ge2, "Keen.io", ln), a2(ge2, "keen", ln), a2(ge2, "keen.io", ln), ge2), hn = "KISSMETRICS", dn = (a2(ye2 = {}, hn, hn), a2(ye2, "Kissmetrics", hn), a2(ye2, "kissmetrics", hn), ye2), pn = "KLAVIYO", gn = (a2(ve2 = {}, pn, pn), a2(ve2, "Klaviyo", pn), a2(ve2, "klaviyo", pn), ve2), yn = "LAUNCHDARKLY", vn = (a2(me2 = {}, yn, yn), a2(me2, "LaunchDarkly", yn), a2(me2, "Launch_Darkly", yn), a2(me2, "Launch Darkly", yn), a2(me2, "launchDarkly", yn), a2(me2, "launch darkly", yn), me2), mn = "LINKEDIN_INSIGHT_TAG", In = (a2(Ie2 = {}, mn, mn), a2(Ie2, "LinkedIn Insight Tag", mn), a2(Ie2, "LinkedIn insight tag", mn), a2(Ie2, "linkedIn insight tag", mn), a2(Ie2, "Linkedin_insight_tag", mn), a2(Ie2, "LinkedinInsighttag", mn), a2(Ie2, "LinkedinInsightTag", mn), a2(Ie2, "LinkedInInsightTag", mn), a2(Ie2, "Linkedininsighttag", mn), a2(Ie2, "LINKEDININSIGHTTAG", mn), a2(Ie2, "linkedininsighttag", mn), Ie2), An = "LOTAME", bn = (a2(Ae2 = {}, An, An), a2(Ae2, "Lotame", An), a2(Ae2, "lotame", An), Ae2), kn = "LYTICS", En = (a2(be2 = {}, kn, kn), a2(be2, "Lytics", kn), a2(be2, "lytics", kn), be2), Sn = "MP", Cn = (a2(ke2 = {}, Sn, Sn), a2(ke2, "MIXPANEL", Sn), a2(ke2, "Mixpanel", Sn), a2(ke2, "MIX PANEL", Sn), a2(ke2, "Mix panel", Sn), a2(ke2, "Mix Panel", Sn), ke2), wn = "MOENGAGE", On = (a2(Ee2 = {}, wn, wn), a2(Ee2, "MoEngage", wn), a2(Ee2, "moengage", wn), a2(Ee2, "Moengage", wn), a2(Ee2, "Mo Engage", wn), a2(Ee2, "mo engage", wn), a2(Ee2, "Mo engage", wn), Ee2), _n = "OPTIMIZELY", Tn = (a2(Se2 = {}, _n, _n), a2(Se2, "Optimizely", _n), a2(Se2, "optimizely", _n), Se2), Rn = "PENDO", Pn = (a2(Ce2 = {}, Rn, Rn), a2(Ce2, "Pendo", Rn), a2(Ce2, "pendo", Rn), Ce2), xn = "PINTEREST_TAG", Ln = (a2(we2 = {}, xn, xn), a2(we2, "PinterestTag", xn), a2(we2, "Pinterest_Tag", xn), a2(we2, "PINTERESTTAG", xn), a2(we2, "pinterest", xn), a2(we2, "PinterestAds", xn), a2(we2, "Pinterest_Ads", xn), a2(we2, "Pinterest", xn), a2(we2, "Pinterest Tag", xn), a2(we2, "Pinterest tag", xn), a2(we2, "PINTEREST TAG", xn), a2(we2, "pinterest tag", xn), a2(we2, "Pinterest Ads", xn), a2(we2, "Pinterest ads", xn), we2), Mn = "POST_AFFILIATE_PRO", Dn = (a2(Oe2 = {}, Mn, Mn), a2(Oe2, "PostAffiliatePro", Mn), a2(Oe2, "Post_affiliate_pro", Mn), a2(Oe2, "Post Affiliate Pro", Mn), a2(Oe2, "Post affiliate pro", Mn), a2(Oe2, "post affiliate pro", Mn), a2(Oe2, "postaffiliatepro", Mn), a2(Oe2, "POSTAFFILIATEPRO", Mn), Oe2), Nn = "POSTHOG", Bn = (a2(_e2 = {}, Nn, Nn), a2(_e2, "PostHog", Nn), a2(_e2, "Posthog", Nn), a2(_e2, "posthog", Nn), a2(_e2, "Post Hog", Nn), a2(_e2, "Post hog", Nn), a2(_e2, "post hog", Nn), _e2), Fn = "PROFITWELL", Un = (a2(Te2 = {}, Fn, Fn), a2(Te2, "ProfitWell", Fn), a2(Te2, "profitwell", Fn), a2(Te2, "Profitwell", Fn), a2(Te2, "Profit Well", Fn), a2(Te2, "profit well", Fn), a2(Te2, "Profit well", Fn), Te2), jn = "QUALTRICS", Gn = (a2(Re2 = {}, jn, jn), a2(Re2, "Qualtrics", jn), a2(Re2, "qualtrics", jn), Re2), zn = "QUANTUMMETRIC", Hn = (a2(Pe2 = {}, zn, zn), a2(Pe2, "Quantum Metric", zn), a2(Pe2, "quantum Metric", zn), a2(Pe2, "quantum metric", zn), a2(Pe2, "QuantumMetric", zn), a2(Pe2, "quantumMetric", zn), a2(Pe2, "quantummetric", zn), a2(Pe2, "Quantum_Metric", zn), Pe2), Kn = "REDDIT_PIXEL", Qn = (a2(xe2 = {}, Kn, Kn), a2(xe2, "Reddit_Pixel", Kn), a2(xe2, "RedditPixel", Kn), a2(xe2, "REDDITPIXEL", Kn), a2(xe2, "redditpixel", Kn), a2(xe2, "Reddit Pixel", Kn), a2(xe2, "REDDIT PIXEL", Kn), a2(xe2, "reddit pixel", Kn), xe2), qn = "SENTRY", Vn = (a2(Le2 = {}, qn, qn), a2(Le2, "sentry", qn), a2(Le2, "Sentry", qn), Le2), Wn = "SNAP_PIXEL", Yn = (a2(Me2 = {}, Wn, Wn), a2(Me2, "Snap_Pixel", Wn), a2(Me2, "SnapPixel", Wn), a2(Me2, "SNAPPIXEL", Wn), a2(Me2, "snappixel", Wn), a2(Me2, "Snap Pixel", Wn), a2(Me2, "SNAP PIXEL", Wn), a2(Me2, "snap pixel", Wn), Me2), Xn = "TVSQUARED", Jn = (a2(De2 = {}, Xn, Xn), a2(De2, "TVSquared", Xn), a2(De2, "tvsquared", Xn), a2(De2, "tvSquared", Xn), a2(De2, "TvSquared", Xn), a2(De2, "Tvsquared", Xn), a2(De2, "TV Squared", Xn), a2(De2, "tv squared", Xn), a2(De2, "tv Squared", Xn), De2), $n = "VWO", Zn = (a2(Ne2 = {}, $n, $n), a2(Ne2, "VisualWebsiteOptimizer", $n), a2(Ne2, "Visualwebsiteoptimizer", $n), a2(Ne2, "visualwebsiteoptimizer", $n), a2(Ne2, "vwo", $n), a2(Ne2, "Visual Website Optimizer", $n), a2(Ne2, "Visual website optimizer", $n), a2(Ne2, "visual website optimizer", $n), Ne2), er = "GA360", tr = (a2(Be2 = {}, er, er), a2(Be2, "Google Analytics 360", er), a2(Be2, "Google analytics 360", er), a2(Be2, "google analytics 360", er), a2(Be2, "Google Analytics360", er), a2(Be2, "Google analytics360", er), a2(Be2, "google analytics360", er), a2(Be2, "GoogleAnalytics360", er), a2(Be2, "GA 360", er), Be2), nr = "ADROLL", rr = (a2(Fe2 = {}, nr, nr), a2(Fe2, "Adroll", nr), a2(Fe2, "Ad roll", nr), a2(Fe2, "ad roll", nr), a2(Fe2, "adroll", nr), Fe2), ir = "DCM_FLOODLIGHT", or = (a2(Ue2 = {}, ir, ir), a2(Ue2, "DCM Floodlight", ir), a2(Ue2, "dcm floodlight", ir), a2(Ue2, "Dcm Floodlight", ir), a2(Ue2, "DCMFloodlight", ir), a2(Ue2, "dcmfloodlight", ir), a2(Ue2, "DcmFloodlight", ir), a2(Ue2, "dcm_floodlight", ir), a2(Ue2, "DCM_Floodlight", ir), Ue2), sr = "MATOMO", ar = (a2(je2 = {}, sr, sr), a2(je2, "Matomo", sr), a2(je2, "matomo", sr), je2), ur = "VERO", cr = (a2(Ge2 = {}, ur, ur), a2(Ge2, "Vero", ur), a2(Ge2, "vero", ur), Ge2), lr = "MOUSEFLOW", fr = (a2(ze2 = {}, lr, lr), a2(ze2, "Mouseflow", lr), a2(ze2, "mouseflow", lr), a2(ze2, "mouseFlow", lr), a2(ze2, "MouseFlow", lr), a2(ze2, "Mouse flow", lr), a2(ze2, "mouse flow", lr), a2(ze2, "mouse Flow", lr), a2(ze2, "Mouse Flow", lr), ze2), hr = "ROCKERBOX", dr = (a2(He2 = {}, hr, hr), a2(He2, "Rockerbox", hr), a2(He2, "rockerbox", hr), a2(He2, "RockerBox", hr), a2(He2, "Rocker box", hr), a2(He2, "rocker box", hr), a2(He2, "Rocker Box", hr), He2), pr = "CONVERTFLOW", gr = (a2(Ke2 = {}, pr, pr), a2(Ke2, "Convertflow", pr), a2(Ke2, "convertflow", pr), a2(Ke2, "convertFlow", pr), a2(Ke2, "ConvertFlow", pr), a2(Ke2, "Convert flow", pr), a2(Ke2, "convert flow", pr), a2(Ke2, "convert Flow", pr), a2(Ke2, "Convert Flow", pr), a2(Ke2, "CONVERT FLOW", pr), Ke2), yr = "SNAPENGAGE", vr = (a2(Qe2 = {}, yr, yr), a2(Qe2, "SnapEngage", yr), a2(Qe2, "Snap_Engage", yr), a2(Qe2, "snapengage", yr), a2(Qe2, "SNAP ENGAGE", yr), a2(Qe2, "Snap Engage", yr), a2(Qe2, "snap engage", yr), Qe2), mr = "LIVECHAT", Ir = (a2(qe2 = {}, mr, mr), a2(qe2, "LiveChat", mr), a2(qe2, "Live_Chat", mr), a2(qe2, "livechat", mr), a2(qe2, "LIVE CHAT", mr), a2(qe2, "Live Chat", mr), a2(qe2, "live chat", mr), qe2), Ar = "SHYNET", br = (a2(Ve2 = {}, Ar, Ar), a2(Ve2, "shynet", Ar), a2(Ve2, "ShyNet", Ar), a2(Ve2, "shyNet", Ar), a2(Ve2, "Shynet", Ar), a2(Ve2, "shy net", Ar), a2(Ve2, "Shy Net", Ar), a2(Ve2, "shy Net", Ar), a2(Ve2, "Shy net", Ar), Ve2), kr = "WOOPRA", Er = (a2(We2 = {}, kr, kr), a2(We2, "Woopra", kr), a2(We2, "woopra", kr), We2), Sr = "ROLLBAR", Cr = (a2(Ye2 = {}, Sr, Sr), a2(Ye2, "RollBar", Sr), a2(Ye2, "Roll_Bar", Sr), a2(Ye2, "rollbar", Sr), a2(Ye2, "Rollbar", Sr), a2(Ye2, "ROLL BAR", Sr), a2(Ye2, "Roll Bar", Sr), a2(Ye2, "roll bar", Sr), Ye2), wr = "QUORA_PIXEL", Or = (a2(Xe2 = {}, wr, wr), a2(Xe2, "Quora Pixel", wr), a2(Xe2, "Quora pixel", wr), a2(Xe2, "QUORA PIXEL", wr), a2(Xe2, "QuoraPixel", wr), a2(Xe2, "Quorapixel", wr), a2(Xe2, "QUORAPIXEL", wr), a2(Xe2, "Quora_Pixel", wr), a2(Xe2, "quora_pixel", wr), a2(Xe2, "Quora", wr), Xe2), _r = "JUNE", Tr = (a2(Je2 = {}, _r, _r), a2(Je2, "June", _r), a2(Je2, "june", _r), Je2), Rr = "ENGAGE", Pr = (a2($e2 = {}, Rr, Rr), a2($e2, "Engage", Rr), a2($e2, "engage", Rr), $e2), xr = "ITERABLE", Lr = (a2(Ze2 = {}, xr, xr), a2(Ze2, "Iterable", xr), a2(Ze2, "iterable", xr), Ze2), Mr = "YANDEX_METRICA", Dr = (a2(et2 = {}, Mr, Mr), a2(et2, "Yandexmetrica", Mr), a2(et2, "yandexmetrica", Mr), a2(et2, "yandexMetrica", Mr), a2(et2, "YandexMetrica", Mr), et2), Nr = "REFINER", Br = (a2(tt2 = {}, Nr, Nr), a2(tt2, "Refiner", Nr), a2(tt2, "refiner", Nr), tt2), Fr = "QUALAROO", Ur = (a2(nt2 = {}, Fr, Fr), a2(nt2, "Qualaroo", Fr), a2(nt2, "qualaroo", Fr), nt2), jr = "PODSIGHTS", Gr = (a2(rt = {}, jr, jr), a2(rt, "Podsights", jr), a2(rt, "PodSights", jr), a2(rt, "pod Sights", jr), a2(rt, "Pod Sights", jr), a2(rt, "pod sights", jr), a2(rt, "POD SIGHTS", jr), a2(rt, "Pod sights", jr), rt), zr = "AXEPTIO", Hr = (a2(it = {}, zr, zr), a2(it, "Axeptio", zr), a2(it, "axeptio", zr), it), Kr = "SATISMETER", Qr = (a2(ot2 = {}, Kr, Kr), a2(ot2, "Satismeter", Kr), a2(ot2, "SatisMeter", Kr), a2(ot2, "SATISMETER", Kr), ot2), qr = "MICROSOFT_CLARITY", Vr = (a2(st = {}, qr, qr), a2(st, "Microsoft Clarity", qr), a2(st, "Microsoft clarity", qr), a2(st, "microsoft clarity", qr), a2(st, "Microsoft_clarity", qr), a2(st, "MicrosoftClarity", qr), a2(st, "MICROSOFTCLARITY", qr), a2(st, "microsoftclarity", qr), a2(st, "microsoftClarity", qr), st), Wr = "SENDINBLUE", Yr = (a2(at = {}, Wr, Wr), a2(at, "Sendinblue", Wr), a2(at, "sendinblue", Wr), a2(at, "SendinBlue", Wr), at), Xr = "OLARK", Jr = (a2(ut = {}, Xr, Xr), a2(ut, "Olark", Xr), a2(ut, "olark", Xr), ut), $r = "LEMNISK", Zr = (a2(ct = {}, $r, $r), a2(ct, "LEMNISK_MARKETING_AUTOMATION", $r), a2(ct, "Lemnisk Marketing Automation", $r), a2(ct, "LemniskMarketingAutomation", $r), a2(ct, "lemniskmarketingautomation", $r), a2(ct, "lemniskMarketingAutomation", $r), a2(ct, "lemnisk", $r), a2(ct, "Lemnisk", $r), ct), ei2 = n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2(n2({ All: "All" }, mt), At), kt), St), wt), _t), Rt), xt), Mt), Nt), Ft), jt), zt), Kt), qt), Wt), tr), Xt), $t), en), nn), on), an), cn), fn3), dn), gn), vn), In), bn), En), Cn), On), Tn), Pn), Ln), Dn), Bn), Un), Gn), Hn), Qn), Vn), Yn), Jn), Zn), rr), or), ar), cr), fr), gr), vr), Ir), br), Er), Cr), Or), Tr), Pr), Lr), dr), Dr), Br), Ur), Gr), Hr), Qr), Vr), Yr), Jr), Zr), ti2 = { All: "All", GA: "Google Analytics", GOOGLEADS: "Google Ads", BRAZE: "Braze", CHARTBEAT: "Chartbeat", COMSCORE: "Comscore", CUSTOMERIO: "Customer IO", DCM_Floodlight: "DCM Floodlight", FACEBOOK_PIXEL: "Facebook Pixel", GTM: "Google Tag Manager", HOTJAR: "Hotjar", HS: "HubSpot", INTERCOM: "Intercom", KEEN: "Keen", KISSMETRICS: "Kiss Metrics", LOTAME: "Lotame", VWO: "VWO", OPTIMIZELY: "Optimizely Web", FULLSTORY: "Fullstory", TVSQUARED: "TVSquared", GA4: "Google Analytics 4", MOENGAGE: "MoEngage", AM: "Amplitude", PENDO: "Pendo", LYTICS: "Lytics", APPCUES: "Appcues", POSTHOG: "PostHog", PROFITWELL: "ProfitWell", KLAVIYO: "Klaviyo", CLEVERTAP: "CleverTap", BINGADS: "Bing Ads", PINTEREST_TAG: "Pinterest Tag", SNAP_PIXEL: "Snap Pixel", LINKEDIN_INSIGHT_TAG: "Linkedin Insight Tag", REDDIT_PIXEL: "Reddit Pixel", DRIP: "Drip", HEAP: "Heap.io", CRITEO: "Criteo", MP: "Mixpanel", QUALTRICS: "Qualtrics", SENTRY: "Sentry", GOOGLE_OPTIMIZE: "Google Optimize", POST_AFFILIATE_PRO: "Post Affiliate Pro", LAUNCHDARKLY: "LaunchDarkly", GA360: "Google Analytics 360", ADROLL: "Adroll", VERO: "Vero", MATOMO: "Matomo", MOUSEFLOW: "Mouseflow", ROCKERBOX: "Rockerbox", CONVERTFLOW: "ConvertFlow", SNAPENGAGE: "SnapEngage", LIVECHAT: "LiveChat", SHYNET: "Shynet", WOOPRA: "Woopra", ROLLBAR: "RollBar", QUORA_PIXEL: "Quora Pixel", JUNE: "June", ENGAGE: "Engage", ITERABLE: "Iterable", YANDEX_METRICA: "Yandex.Metrica", REFINER: "Refiner", QUALAROO: "Qualaroo", PODSIGHTS: "Podsights", AXEPTIO: "Axeptio", SATISMETER: "Satismeter", MICROSOFT_CLARITY: "Microsoft Clarity", SENDINBLUE: "Sendinblue", OLARK: "Olark", LEMNISK: "Lemnisk" }, ni2 = ["anonymous_id", "id", "sent_at", "received_at", "timestamp", "original_timestamp", "event_text", "event"], ri2 = "https://api.rudderlabs.com/sourceConfig/?p=npm&v=2.27.0", ii2 = "v1.1", oi2 = "js-integrations", si2 = "".concat("https://cdn.rudderlabs.com", "/").concat(ii2, "/").concat(oi2), ai2 = 1e4, ui2 = 1e3, ci2 = "_RS", li2 = "bugsnag", fi2 = [li2], hi2 = ["Lax", "None", "Strict"], di2 = ["US", "EU"], pi2 = ["oneTrust"], gi2 = ["library", "consentManagement"], yi2 = ["none", "default", "full"], vi2 = {}, mi2 = {}, Ii2 = { get exports() {
      return mi2;
    }, set exports(e3) {
      mi2 = e3;
    } };
    function Ai2() {
      return lt || (lt = 1, function(e3, t3) {
        var n3;
        e3.exports = (n3 = n3 || function(e4, t4) {
          var n4 = Object.create || function() {
            function e5() {
            }
            return function(t5) {
              var n5;
              return e5.prototype = t5, n5 = new e5(), e5.prototype = null, n5;
            };
          }(), r3 = {}, i3 = r3.lib = {}, o4 = i3.Base = { extend: function(e5) {
            var t5 = n4(this);
            return e5 && t5.mixIn(e5), t5.hasOwnProperty("init") && this.init !== t5.init || (t5.init = function() {
              t5.$super.init.apply(this, arguments);
            }), t5.init.prototype = t5, t5.$super = this, t5;
          }, create: function() {
            var e5 = this.extend();
            return e5.init.apply(e5, arguments), e5;
          }, init: function() {
          }, mixIn: function(e5) {
            for (var t5 in e5)
              e5.hasOwnProperty(t5) && (this[t5] = e5[t5]);
            e5.hasOwnProperty("toString") && (this.toString = e5.toString);
          }, clone: function() {
            return this.init.prototype.extend(this);
          } }, s3 = i3.WordArray = o4.extend({ init: function(e5, n5) {
            e5 = this.words = e5 || [], this.sigBytes = n5 != t4 ? n5 : 4 * e5.length;
          }, toString: function(e5) {
            return (e5 || u3).stringify(this);
          }, concat: function(e5) {
            var t5 = this.words, n5 = e5.words, r4 = this.sigBytes, i4 = e5.sigBytes;
            if (this.clamp(), r4 % 4)
              for (var o5 = 0; o5 < i4; o5++) {
                var s4 = n5[o5 >>> 2] >>> 24 - o5 % 4 * 8 & 255;
                t5[r4 + o5 >>> 2] |= s4 << 24 - (r4 + o5) % 4 * 8;
              }
            else
              for (o5 = 0; o5 < i4; o5 += 4)
                t5[r4 + o5 >>> 2] = n5[o5 >>> 2];
            return this.sigBytes += i4, this;
          }, clamp: function() {
            var t5 = this.words, n5 = this.sigBytes;
            t5[n5 >>> 2] &= 4294967295 << 32 - n5 % 4 * 8, t5.length = e4.ceil(n5 / 4);
          }, clone: function() {
            var e5 = o4.clone.call(this);
            return e5.words = this.words.slice(0), e5;
          }, random: function(t5) {
            for (var n5, r4 = [], i4 = function(t6) {
              var n6 = 987654321, r5 = 4294967295;
              return function() {
                var i5 = ((n6 = 36969 * (65535 & n6) + (n6 >> 16) & r5) << 16) + (t6 = 18e3 * (65535 & t6) + (t6 >> 16) & r5) & r5;
                return i5 /= 4294967296, (i5 += 0.5) * (e4.random() > 0.5 ? 1 : -1);
              };
            }, o5 = 0; o5 < t5; o5 += 4) {
              var a4 = i4(4294967296 * (n5 || e4.random()));
              n5 = 987654071 * a4(), r4.push(4294967296 * a4() | 0);
            }
            return new s3.init(r4, t5);
          } }), a3 = r3.enc = {}, u3 = a3.Hex = { stringify: function(e5) {
            for (var t5 = e5.words, n5 = e5.sigBytes, r4 = [], i4 = 0; i4 < n5; i4++) {
              var o5 = t5[i4 >>> 2] >>> 24 - i4 % 4 * 8 & 255;
              r4.push((o5 >>> 4).toString(16)), r4.push((15 & o5).toString(16));
            }
            return r4.join("");
          }, parse: function(e5) {
            for (var t5 = e5.length, n5 = [], r4 = 0; r4 < t5; r4 += 2)
              n5[r4 >>> 3] |= parseInt(e5.substr(r4, 2), 16) << 24 - r4 % 8 * 4;
            return new s3.init(n5, t5 / 2);
          } }, c3 = a3.Latin1 = { stringify: function(e5) {
            for (var t5 = e5.words, n5 = e5.sigBytes, r4 = [], i4 = 0; i4 < n5; i4++) {
              var o5 = t5[i4 >>> 2] >>> 24 - i4 % 4 * 8 & 255;
              r4.push(String.fromCharCode(o5));
            }
            return r4.join("");
          }, parse: function(e5) {
            for (var t5 = e5.length, n5 = [], r4 = 0; r4 < t5; r4++)
              n5[r4 >>> 2] |= (255 & e5.charCodeAt(r4)) << 24 - r4 % 4 * 8;
            return new s3.init(n5, t5);
          } }, l3 = a3.Utf8 = { stringify: function(e5) {
            try {
              return decodeURIComponent(escape(c3.stringify(e5)));
            } catch (e6) {
              throw new Error("Malformed UTF-8 data");
            }
          }, parse: function(e5) {
            return c3.parse(unescape(encodeURIComponent(e5)));
          } }, f3 = i3.BufferedBlockAlgorithm = o4.extend({ reset: function() {
            this._data = new s3.init(), this._nDataBytes = 0;
          }, _append: function(e5) {
            "string" == typeof e5 && (e5 = l3.parse(e5)), this._data.concat(e5), this._nDataBytes += e5.sigBytes;
          }, _process: function(t5) {
            var n5 = this._data, r4 = n5.words, i4 = n5.sigBytes, o5 = this.blockSize, a4 = i4 / (4 * o5), u4 = (a4 = t5 ? e4.ceil(a4) : e4.max((0 | a4) - this._minBufferSize, 0)) * o5, c4 = e4.min(4 * u4, i4);
            if (u4) {
              for (var l4 = 0; l4 < u4; l4 += o5)
                this._doProcessBlock(r4, l4);
              var f4 = r4.splice(0, u4);
              n5.sigBytes -= c4;
            }
            return new s3.init(f4, c4);
          }, clone: function() {
            var e5 = o4.clone.call(this);
            return e5._data = this._data.clone(), e5;
          }, _minBufferSize: 0 });
          i3.Hasher = f3.extend({ cfg: o4.extend(), init: function(e5) {
            this.cfg = this.cfg.extend(e5), this.reset();
          }, reset: function() {
            f3.reset.call(this), this._doReset();
          }, update: function(e5) {
            return this._append(e5), this._process(), this;
          }, finalize: function(e5) {
            return e5 && this._append(e5), this._doFinalize();
          }, blockSize: 16, _createHelper: function(e5) {
            return function(t5, n5) {
              return new e5.init(n5).finalize(t5);
            };
          }, _createHmacHelper: function(e5) {
            return function(t5, n5) {
              return new h3.HMAC.init(e5, n5).finalize(t5);
            };
          } });
          var h3 = r3.algo = {};
          return r3;
        }(Math), n3);
      }(Ii2)), mi2;
    }
    var bi2, ki2 = {}, Ei2 = { get exports() {
      return ki2;
    }, set exports(e3) {
      ki2 = e3;
    } };
    function Si2() {
      return bi2 || (bi2 = 1, function(e3, t3) {
        var n3;
        e3.exports = (n3 = Ai2(), function() {
          var e4 = n3, t4 = e4.lib.WordArray;
          function r3(e5, n4, r4) {
            for (var i3 = [], o4 = 0, s3 = 0; s3 < n4; s3++)
              if (s3 % 4) {
                var a3 = r4[e5.charCodeAt(s3 - 1)] << s3 % 4 * 2, u3 = r4[e5.charCodeAt(s3)] >>> 6 - s3 % 4 * 2;
                i3[o4 >>> 2] |= (a3 | u3) << 24 - o4 % 4 * 8, o4++;
              }
            return t4.create(i3, o4);
          }
          e4.enc.Base64 = { stringify: function(e5) {
            var t5 = e5.words, n4 = e5.sigBytes, r4 = this._map;
            e5.clamp();
            for (var i3 = [], o4 = 0; o4 < n4; o4 += 3)
              for (var s3 = (t5[o4 >>> 2] >>> 24 - o4 % 4 * 8 & 255) << 16 | (t5[o4 + 1 >>> 2] >>> 24 - (o4 + 1) % 4 * 8 & 255) << 8 | t5[o4 + 2 >>> 2] >>> 24 - (o4 + 2) % 4 * 8 & 255, a3 = 0; a3 < 4 && o4 + 0.75 * a3 < n4; a3++)
                i3.push(r4.charAt(s3 >>> 6 * (3 - a3) & 63));
            var u3 = r4.charAt(64);
            if (u3)
              for (; i3.length % 4; )
                i3.push(u3);
            return i3.join("");
          }, parse: function(e5) {
            var t5 = e5.length, n4 = this._map, i3 = this._reverseMap;
            if (!i3) {
              i3 = this._reverseMap = [];
              for (var o4 = 0; o4 < n4.length; o4++)
                i3[n4.charCodeAt(o4)] = o4;
            }
            var s3 = n4.charAt(64);
            if (s3) {
              var a3 = e5.indexOf(s3);
              -1 !== a3 && (t5 = a3);
            }
            return r3(e5, t5, i3);
          }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
        }(), n3.enc.Base64);
      }(Ei2)), ki2;
    }
    var Ci2, wi2 = {}, Oi2 = { get exports() {
      return wi2;
    }, set exports(e3) {
      wi2 = e3;
    } };
    function _i() {
      return Ci2 || (Ci2 = 1, function(e3, t3) {
        var n3;
        e3.exports = (n3 = Ai2(), function(e4) {
          var t4 = n3, r3 = t4.lib, i3 = r3.WordArray, o4 = r3.Hasher, s3 = t4.algo, a3 = [];
          !function() {
            for (var t5 = 0; t5 < 64; t5++)
              a3[t5] = 4294967296 * e4.abs(e4.sin(t5 + 1)) | 0;
          }();
          var u3 = s3.MD5 = o4.extend({ _doReset: function() {
            this._hash = new i3.init([1732584193, 4023233417, 2562383102, 271733878]);
          }, _doProcessBlock: function(e5, t5) {
            for (var n4 = 0; n4 < 16; n4++) {
              var r4 = t5 + n4, i4 = e5[r4];
              e5[r4] = 16711935 & (i4 << 8 | i4 >>> 24) | 4278255360 & (i4 << 24 | i4 >>> 8);
            }
            var o5 = this._hash.words, s4 = e5[t5 + 0], u4 = e5[t5 + 1], d3 = e5[t5 + 2], p3 = e5[t5 + 3], g3 = e5[t5 + 4], y3 = e5[t5 + 5], v3 = e5[t5 + 6], m3 = e5[t5 + 7], I3 = e5[t5 + 8], A3 = e5[t5 + 9], b3 = e5[t5 + 10], k3 = e5[t5 + 11], E3 = e5[t5 + 12], S3 = e5[t5 + 13], C3 = e5[t5 + 14], w3 = e5[t5 + 15], O3 = o5[0], _3 = o5[1], T3 = o5[2], R3 = o5[3];
            O3 = c3(O3, _3, T3, R3, s4, 7, a3[0]), R3 = c3(R3, O3, _3, T3, u4, 12, a3[1]), T3 = c3(T3, R3, O3, _3, d3, 17, a3[2]), _3 = c3(_3, T3, R3, O3, p3, 22, a3[3]), O3 = c3(O3, _3, T3, R3, g3, 7, a3[4]), R3 = c3(R3, O3, _3, T3, y3, 12, a3[5]), T3 = c3(T3, R3, O3, _3, v3, 17, a3[6]), _3 = c3(_3, T3, R3, O3, m3, 22, a3[7]), O3 = c3(O3, _3, T3, R3, I3, 7, a3[8]), R3 = c3(R3, O3, _3, T3, A3, 12, a3[9]), T3 = c3(T3, R3, O3, _3, b3, 17, a3[10]), _3 = c3(_3, T3, R3, O3, k3, 22, a3[11]), O3 = c3(O3, _3, T3, R3, E3, 7, a3[12]), R3 = c3(R3, O3, _3, T3, S3, 12, a3[13]), T3 = c3(T3, R3, O3, _3, C3, 17, a3[14]), O3 = l3(O3, _3 = c3(_3, T3, R3, O3, w3, 22, a3[15]), T3, R3, u4, 5, a3[16]), R3 = l3(R3, O3, _3, T3, v3, 9, a3[17]), T3 = l3(T3, R3, O3, _3, k3, 14, a3[18]), _3 = l3(_3, T3, R3, O3, s4, 20, a3[19]), O3 = l3(O3, _3, T3, R3, y3, 5, a3[20]), R3 = l3(R3, O3, _3, T3, b3, 9, a3[21]), T3 = l3(T3, R3, O3, _3, w3, 14, a3[22]), _3 = l3(_3, T3, R3, O3, g3, 20, a3[23]), O3 = l3(O3, _3, T3, R3, A3, 5, a3[24]), R3 = l3(R3, O3, _3, T3, C3, 9, a3[25]), T3 = l3(T3, R3, O3, _3, p3, 14, a3[26]), _3 = l3(_3, T3, R3, O3, I3, 20, a3[27]), O3 = l3(O3, _3, T3, R3, S3, 5, a3[28]), R3 = l3(R3, O3, _3, T3, d3, 9, a3[29]), T3 = l3(T3, R3, O3, _3, m3, 14, a3[30]), O3 = f3(O3, _3 = l3(_3, T3, R3, O3, E3, 20, a3[31]), T3, R3, y3, 4, a3[32]), R3 = f3(R3, O3, _3, T3, I3, 11, a3[33]), T3 = f3(T3, R3, O3, _3, k3, 16, a3[34]), _3 = f3(_3, T3, R3, O3, C3, 23, a3[35]), O3 = f3(O3, _3, T3, R3, u4, 4, a3[36]), R3 = f3(R3, O3, _3, T3, g3, 11, a3[37]), T3 = f3(T3, R3, O3, _3, m3, 16, a3[38]), _3 = f3(_3, T3, R3, O3, b3, 23, a3[39]), O3 = f3(O3, _3, T3, R3, S3, 4, a3[40]), R3 = f3(R3, O3, _3, T3, s4, 11, a3[41]), T3 = f3(T3, R3, O3, _3, p3, 16, a3[42]), _3 = f3(_3, T3, R3, O3, v3, 23, a3[43]), O3 = f3(O3, _3, T3, R3, A3, 4, a3[44]), R3 = f3(R3, O3, _3, T3, E3, 11, a3[45]), T3 = f3(T3, R3, O3, _3, w3, 16, a3[46]), O3 = h3(O3, _3 = f3(_3, T3, R3, O3, d3, 23, a3[47]), T3, R3, s4, 6, a3[48]), R3 = h3(R3, O3, _3, T3, m3, 10, a3[49]), T3 = h3(T3, R3, O3, _3, C3, 15, a3[50]), _3 = h3(_3, T3, R3, O3, y3, 21, a3[51]), O3 = h3(O3, _3, T3, R3, E3, 6, a3[52]), R3 = h3(R3, O3, _3, T3, p3, 10, a3[53]), T3 = h3(T3, R3, O3, _3, b3, 15, a3[54]), _3 = h3(_3, T3, R3, O3, u4, 21, a3[55]), O3 = h3(O3, _3, T3, R3, I3, 6, a3[56]), R3 = h3(R3, O3, _3, T3, w3, 10, a3[57]), T3 = h3(T3, R3, O3, _3, v3, 15, a3[58]), _3 = h3(_3, T3, R3, O3, S3, 21, a3[59]), O3 = h3(O3, _3, T3, R3, g3, 6, a3[60]), R3 = h3(R3, O3, _3, T3, k3, 10, a3[61]), T3 = h3(T3, R3, O3, _3, d3, 15, a3[62]), _3 = h3(_3, T3, R3, O3, A3, 21, a3[63]), o5[0] = o5[0] + O3 | 0, o5[1] = o5[1] + _3 | 0, o5[2] = o5[2] + T3 | 0, o5[3] = o5[3] + R3 | 0;
          }, _doFinalize: function() {
            var t5 = this._data, n4 = t5.words, r4 = 8 * this._nDataBytes, i4 = 8 * t5.sigBytes;
            n4[i4 >>> 5] |= 128 << 24 - i4 % 32;
            var o5 = e4.floor(r4 / 4294967296), s4 = r4;
            n4[15 + (i4 + 64 >>> 9 << 4)] = 16711935 & (o5 << 8 | o5 >>> 24) | 4278255360 & (o5 << 24 | o5 >>> 8), n4[14 + (i4 + 64 >>> 9 << 4)] = 16711935 & (s4 << 8 | s4 >>> 24) | 4278255360 & (s4 << 24 | s4 >>> 8), t5.sigBytes = 4 * (n4.length + 1), this._process();
            for (var a4 = this._hash, u4 = a4.words, c4 = 0; c4 < 4; c4++) {
              var l4 = u4[c4];
              u4[c4] = 16711935 & (l4 << 8 | l4 >>> 24) | 4278255360 & (l4 << 24 | l4 >>> 8);
            }
            return a4;
          }, clone: function() {
            var e5 = o4.clone.call(this);
            return e5._hash = this._hash.clone(), e5;
          } });
          function c3(e5, t5, n4, r4, i4, o5, s4) {
            var a4 = e5 + (t5 & n4 | ~t5 & r4) + i4 + s4;
            return (a4 << o5 | a4 >>> 32 - o5) + t5;
          }
          function l3(e5, t5, n4, r4, i4, o5, s4) {
            var a4 = e5 + (t5 & r4 | n4 & ~r4) + i4 + s4;
            return (a4 << o5 | a4 >>> 32 - o5) + t5;
          }
          function f3(e5, t5, n4, r4, i4, o5, s4) {
            var a4 = e5 + (t5 ^ n4 ^ r4) + i4 + s4;
            return (a4 << o5 | a4 >>> 32 - o5) + t5;
          }
          function h3(e5, t5, n4, r4, i4, o5, s4) {
            var a4 = e5 + (n4 ^ (t5 | ~r4)) + i4 + s4;
            return (a4 << o5 | a4 >>> 32 - o5) + t5;
          }
          t4.MD5 = o4._createHelper(u3), t4.HmacMD5 = o4._createHmacHelper(u3);
        }(Math), n3.MD5);
      }(Oi2)), wi2;
    }
    var Ti2, Ri2 = {}, Pi2 = { get exports() {
      return Ri2;
    }, set exports(e3) {
      Ri2 = e3;
    } }, xi2 = {}, Li2 = { get exports() {
      return xi2;
    }, set exports(e3) {
      xi2 = e3;
    } };
    function Mi2() {
      return Ti2 || (Ti2 = 1, function(e3, t3) {
        var n3, r3, i3, o4, s3, a3, u3, c3;
        e3.exports = (c3 = Ai2(), r3 = (n3 = c3).lib, i3 = r3.WordArray, o4 = r3.Hasher, s3 = n3.algo, a3 = [], u3 = s3.SHA1 = o4.extend({ _doReset: function() {
          this._hash = new i3.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        }, _doProcessBlock: function(e4, t4) {
          for (var n4 = this._hash.words, r4 = n4[0], i4 = n4[1], o5 = n4[2], s4 = n4[3], u4 = n4[4], c4 = 0; c4 < 80; c4++) {
            if (c4 < 16)
              a3[c4] = 0 | e4[t4 + c4];
            else {
              var l3 = a3[c4 - 3] ^ a3[c4 - 8] ^ a3[c4 - 14] ^ a3[c4 - 16];
              a3[c4] = l3 << 1 | l3 >>> 31;
            }
            var f3 = (r4 << 5 | r4 >>> 27) + u4 + a3[c4];
            f3 += c4 < 20 ? 1518500249 + (i4 & o5 | ~i4 & s4) : c4 < 40 ? 1859775393 + (i4 ^ o5 ^ s4) : c4 < 60 ? (i4 & o5 | i4 & s4 | o5 & s4) - 1894007588 : (i4 ^ o5 ^ s4) - 899497514, u4 = s4, s4 = o5, o5 = i4 << 30 | i4 >>> 2, i4 = r4, r4 = f3;
          }
          n4[0] = n4[0] + r4 | 0, n4[1] = n4[1] + i4 | 0, n4[2] = n4[2] + o5 | 0, n4[3] = n4[3] + s4 | 0, n4[4] = n4[4] + u4 | 0;
        }, _doFinalize: function() {
          var e4 = this._data, t4 = e4.words, n4 = 8 * this._nDataBytes, r4 = 8 * e4.sigBytes;
          return t4[r4 >>> 5] |= 128 << 24 - r4 % 32, t4[14 + (r4 + 64 >>> 9 << 4)] = Math.floor(n4 / 4294967296), t4[15 + (r4 + 64 >>> 9 << 4)] = n4, e4.sigBytes = 4 * t4.length, this._process(), this._hash;
        }, clone: function() {
          var e4 = o4.clone.call(this);
          return e4._hash = this._hash.clone(), e4;
        } }), n3.SHA1 = o4._createHelper(u3), n3.HmacSHA1 = o4._createHmacHelper(u3), c3.SHA1);
      }(Li2)), xi2;
    }
    var Di2, Ni2, Bi2 = {}, Fi2 = { get exports() {
      return Bi2;
    }, set exports(e3) {
      Bi2 = e3;
    } };
    function Ui2() {
      return Ni2 || (Ni2 = 1, function(e3, t3) {
        var n3, r3, i3, o4, s3, a3, u3, c3;
        e3.exports = (c3 = Ai2(), Mi2(), Di2 || (Di2 = 1, function(e4, t4) {
          var n4;
          e4.exports = (n4 = Ai2(), void function() {
            var e5 = n4, t5 = e5.lib.Base, r4 = e5.enc.Utf8;
            e5.algo.HMAC = t5.extend({ init: function(e6, t6) {
              e6 = this._hasher = new e6.init(), "string" == typeof t6 && (t6 = r4.parse(t6));
              var n5 = e6.blockSize, i4 = 4 * n5;
              t6.sigBytes > i4 && (t6 = e6.finalize(t6)), t6.clamp();
              for (var o5 = this._oKey = t6.clone(), s4 = this._iKey = t6.clone(), a4 = o5.words, u4 = s4.words, c4 = 0; c4 < n5; c4++)
                a4[c4] ^= 1549556828, u4[c4] ^= 909522486;
              o5.sigBytes = s4.sigBytes = i4, this.reset();
            }, reset: function() {
              var e6 = this._hasher;
              e6.reset(), e6.update(this._iKey);
            }, update: function(e6) {
              return this._hasher.update(e6), this;
            }, finalize: function(e6) {
              var t6 = this._hasher, n5 = t6.finalize(e6);
              return t6.reset(), t6.finalize(this._oKey.clone().concat(n5));
            } });
          }());
        }(Fi2)), r3 = (n3 = c3).lib, i3 = r3.Base, o4 = r3.WordArray, s3 = n3.algo, a3 = s3.MD5, u3 = s3.EvpKDF = i3.extend({ cfg: i3.extend({ keySize: 4, hasher: a3, iterations: 1 }), init: function(e4) {
          this.cfg = this.cfg.extend(e4);
        }, compute: function(e4, t4) {
          for (var n4 = this.cfg, r4 = n4.hasher.create(), i4 = o4.create(), s4 = i4.words, a4 = n4.keySize, u4 = n4.iterations; s4.length < a4; ) {
            c4 && r4.update(c4);
            var c4 = r4.update(e4).finalize(t4);
            r4.reset();
            for (var l3 = 1; l3 < u4; l3++)
              c4 = r4.finalize(c4), r4.reset();
            i4.concat(c4);
          }
          return i4.sigBytes = 4 * a4, i4;
        } }), n3.EvpKDF = function(e4, t4, n4) {
          return u3.create(n4).compute(e4, t4);
        }, c3.EvpKDF);
      }(Pi2)), Ri2;
    }
    var ji2, Gi2 = {}, zi2 = { get exports() {
      return Gi2;
    }, set exports(e3) {
      Gi2 = e3;
    } };
    !function(e3, t3) {
      var n3;
      e3.exports = (n3 = Ai2(), Si2(), _i(), Ui2(), ji2 || (ji2 = 1, function(e4, t4) {
        var n4;
        e4.exports = (n4 = Ai2(), Ui2(), void (n4.lib.Cipher || function(e5) {
          var t5 = n4, r3 = t5.lib, i3 = r3.Base, o4 = r3.WordArray, s3 = r3.BufferedBlockAlgorithm, a3 = t5.enc;
          a3.Utf8;
          var u3 = a3.Base64, c3 = t5.algo.EvpKDF, l3 = r3.Cipher = s3.extend({ cfg: i3.extend(), createEncryptor: function(e6, t6) {
            return this.create(this._ENC_XFORM_MODE, e6, t6);
          }, createDecryptor: function(e6, t6) {
            return this.create(this._DEC_XFORM_MODE, e6, t6);
          }, init: function(e6, t6, n5) {
            this.cfg = this.cfg.extend(n5), this._xformMode = e6, this._key = t6, this.reset();
          }, reset: function() {
            s3.reset.call(this), this._doReset();
          }, process: function(e6) {
            return this._append(e6), this._process();
          }, finalize: function(e6) {
            return e6 && this._append(e6), this._doFinalize();
          }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function() {
            function e6(e7) {
              return "string" == typeof e7 ? I3 : v3;
            }
            return function(t6) {
              return { encrypt: function(n5, r4, i4) {
                return e6(r4).encrypt(t6, n5, r4, i4);
              }, decrypt: function(n5, r4, i4) {
                return e6(r4).decrypt(t6, n5, r4, i4);
              } };
            };
          }() });
          r3.StreamCipher = l3.extend({ _doFinalize: function() {
            return this._process(true);
          }, blockSize: 1 });
          var f3 = t5.mode = {}, h3 = r3.BlockCipherMode = i3.extend({ createEncryptor: function(e6, t6) {
            return this.Encryptor.create(e6, t6);
          }, createDecryptor: function(e6, t6) {
            return this.Decryptor.create(e6, t6);
          }, init: function(e6, t6) {
            this._cipher = e6, this._iv = t6;
          } }), d3 = f3.CBC = function() {
            var t6 = h3.extend();
            function n5(t7, n6, r4) {
              var i4 = this._iv;
              if (i4) {
                var o5 = i4;
                this._iv = e5;
              } else
                o5 = this._prevBlock;
              for (var s4 = 0; s4 < r4; s4++)
                t7[n6 + s4] ^= o5[s4];
            }
            return t6.Encryptor = t6.extend({ processBlock: function(e6, t7) {
              var r4 = this._cipher, i4 = r4.blockSize;
              n5.call(this, e6, t7, i4), r4.encryptBlock(e6, t7), this._prevBlock = e6.slice(t7, t7 + i4);
            } }), t6.Decryptor = t6.extend({ processBlock: function(e6, t7) {
              var r4 = this._cipher, i4 = r4.blockSize, o5 = e6.slice(t7, t7 + i4);
              r4.decryptBlock(e6, t7), n5.call(this, e6, t7, i4), this._prevBlock = o5;
            } }), t6;
          }(), p3 = (t5.pad = {}).Pkcs7 = { pad: function(e6, t6) {
            for (var n5 = 4 * t6, r4 = n5 - e6.sigBytes % n5, i4 = r4 << 24 | r4 << 16 | r4 << 8 | r4, s4 = [], a4 = 0; a4 < r4; a4 += 4)
              s4.push(i4);
            var u4 = o4.create(s4, r4);
            e6.concat(u4);
          }, unpad: function(e6) {
            var t6 = 255 & e6.words[e6.sigBytes - 1 >>> 2];
            e6.sigBytes -= t6;
          } };
          r3.BlockCipher = l3.extend({ cfg: l3.cfg.extend({ mode: d3, padding: p3 }), reset: function() {
            l3.reset.call(this);
            var e6 = this.cfg, t6 = e6.iv, n5 = e6.mode;
            if (this._xformMode == this._ENC_XFORM_MODE)
              var r4 = n5.createEncryptor;
            else
              r4 = n5.createDecryptor, this._minBufferSize = 1;
            this._mode && this._mode.__creator == r4 ? this._mode.init(this, t6 && t6.words) : (this._mode = r4.call(n5, this, t6 && t6.words), this._mode.__creator = r4);
          }, _doProcessBlock: function(e6, t6) {
            this._mode.processBlock(e6, t6);
          }, _doFinalize: function() {
            var e6 = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              e6.pad(this._data, this.blockSize);
              var t6 = this._process(true);
            } else
              t6 = this._process(true), e6.unpad(t6);
            return t6;
          }, blockSize: 4 });
          var g3 = r3.CipherParams = i3.extend({ init: function(e6) {
            this.mixIn(e6);
          }, toString: function(e6) {
            return (e6 || this.formatter).stringify(this);
          } }), y3 = (t5.format = {}).OpenSSL = { stringify: function(e6) {
            var t6 = e6.ciphertext, n5 = e6.salt;
            if (n5)
              var r4 = o4.create([1398893684, 1701076831]).concat(n5).concat(t6);
            else
              r4 = t6;
            return r4.toString(u3);
          }, parse: function(e6) {
            var t6 = u3.parse(e6), n5 = t6.words;
            if (1398893684 == n5[0] && 1701076831 == n5[1]) {
              var r4 = o4.create(n5.slice(2, 4));
              n5.splice(0, 4), t6.sigBytes -= 16;
            }
            return g3.create({ ciphertext: t6, salt: r4 });
          } }, v3 = r3.SerializableCipher = i3.extend({ cfg: i3.extend({ format: y3 }), encrypt: function(e6, t6, n5, r4) {
            r4 = this.cfg.extend(r4);
            var i4 = e6.createEncryptor(n5, r4), o5 = i4.finalize(t6), s4 = i4.cfg;
            return g3.create({ ciphertext: o5, key: n5, iv: s4.iv, algorithm: e6, mode: s4.mode, padding: s4.padding, blockSize: e6.blockSize, formatter: r4.format });
          }, decrypt: function(e6, t6, n5, r4) {
            return r4 = this.cfg.extend(r4), t6 = this._parse(t6, r4.format), e6.createDecryptor(n5, r4).finalize(t6.ciphertext);
          }, _parse: function(e6, t6) {
            return "string" == typeof e6 ? t6.parse(e6, this) : e6;
          } }), m3 = (t5.kdf = {}).OpenSSL = { execute: function(e6, t6, n5, r4) {
            r4 || (r4 = o4.random(8));
            var i4 = c3.create({ keySize: t6 + n5 }).compute(e6, r4), s4 = o4.create(i4.words.slice(t6), 4 * n5);
            return i4.sigBytes = 4 * t6, g3.create({ key: i4, iv: s4, salt: r4 });
          } }, I3 = r3.PasswordBasedCipher = v3.extend({ cfg: v3.cfg.extend({ kdf: m3 }), encrypt: function(e6, t6, n5, r4) {
            var i4 = (r4 = this.cfg.extend(r4)).kdf.execute(n5, e6.keySize, e6.ivSize);
            r4.iv = i4.iv;
            var o5 = v3.encrypt.call(this, e6, t6, i4.key, r4);
            return o5.mixIn(i4), o5;
          }, decrypt: function(e6, t6, n5, r4) {
            r4 = this.cfg.extend(r4), t6 = this._parse(t6, r4.format);
            var i4 = r4.kdf.execute(n5, e6.keySize, e6.ivSize, t6.salt);
            return r4.iv = i4.iv, v3.decrypt.call(this, e6, t6, i4.key, r4);
          } });
        }()));
      }(zi2)), function() {
        var e4 = n3, t4 = e4.lib.BlockCipher, r3 = e4.algo, i3 = [], o4 = [], s3 = [], a3 = [], u3 = [], c3 = [], l3 = [], f3 = [], h3 = [], d3 = [];
        !function() {
          for (var e5 = [], t5 = 0; t5 < 256; t5++)
            e5[t5] = t5 < 128 ? t5 << 1 : t5 << 1 ^ 283;
          var n4 = 0, r4 = 0;
          for (t5 = 0; t5 < 256; t5++) {
            var p4 = r4 ^ r4 << 1 ^ r4 << 2 ^ r4 << 3 ^ r4 << 4;
            p4 = p4 >>> 8 ^ 255 & p4 ^ 99, i3[n4] = p4, o4[p4] = n4;
            var g4 = e5[n4], y3 = e5[g4], v3 = e5[y3], m3 = 257 * e5[p4] ^ 16843008 * p4;
            s3[n4] = m3 << 24 | m3 >>> 8, a3[n4] = m3 << 16 | m3 >>> 16, u3[n4] = m3 << 8 | m3 >>> 24, c3[n4] = m3, m3 = 16843009 * v3 ^ 65537 * y3 ^ 257 * g4 ^ 16843008 * n4, l3[p4] = m3 << 24 | m3 >>> 8, f3[p4] = m3 << 16 | m3 >>> 16, h3[p4] = m3 << 8 | m3 >>> 24, d3[p4] = m3, n4 ? (n4 = g4 ^ e5[e5[e5[v3 ^ g4]]], r4 ^= e5[e5[r4]]) : n4 = r4 = 1;
          }
        }();
        var p3 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], g3 = r3.AES = t4.extend({ _doReset: function() {
          if (!this._nRounds || this._keyPriorReset !== this._key) {
            for (var e5 = this._keyPriorReset = this._key, t5 = e5.words, n4 = e5.sigBytes / 4, r4 = 4 * ((this._nRounds = n4 + 6) + 1), o5 = this._keySchedule = [], s4 = 0; s4 < r4; s4++)
              if (s4 < n4)
                o5[s4] = t5[s4];
              else {
                var a4 = o5[s4 - 1];
                s4 % n4 ? n4 > 6 && s4 % n4 == 4 && (a4 = i3[a4 >>> 24] << 24 | i3[a4 >>> 16 & 255] << 16 | i3[a4 >>> 8 & 255] << 8 | i3[255 & a4]) : (a4 = i3[(a4 = a4 << 8 | a4 >>> 24) >>> 24] << 24 | i3[a4 >>> 16 & 255] << 16 | i3[a4 >>> 8 & 255] << 8 | i3[255 & a4], a4 ^= p3[s4 / n4 | 0] << 24), o5[s4] = o5[s4 - n4] ^ a4;
              }
            for (var u4 = this._invKeySchedule = [], c4 = 0; c4 < r4; c4++)
              s4 = r4 - c4, a4 = c4 % 4 ? o5[s4] : o5[s4 - 4], u4[c4] = c4 < 4 || s4 <= 4 ? a4 : l3[i3[a4 >>> 24]] ^ f3[i3[a4 >>> 16 & 255]] ^ h3[i3[a4 >>> 8 & 255]] ^ d3[i3[255 & a4]];
          }
        }, encryptBlock: function(e5, t5) {
          this._doCryptBlock(e5, t5, this._keySchedule, s3, a3, u3, c3, i3);
        }, decryptBlock: function(e5, t5) {
          var n4 = e5[t5 + 1];
          e5[t5 + 1] = e5[t5 + 3], e5[t5 + 3] = n4, this._doCryptBlock(e5, t5, this._invKeySchedule, l3, f3, h3, d3, o4), n4 = e5[t5 + 1], e5[t5 + 1] = e5[t5 + 3], e5[t5 + 3] = n4;
        }, _doCryptBlock: function(e5, t5, n4, r4, i4, o5, s4, a4) {
          for (var u4 = this._nRounds, c4 = e5[t5] ^ n4[0], l4 = e5[t5 + 1] ^ n4[1], f4 = e5[t5 + 2] ^ n4[2], h4 = e5[t5 + 3] ^ n4[3], d4 = 4, p4 = 1; p4 < u4; p4++) {
            var g4 = r4[c4 >>> 24] ^ i4[l4 >>> 16 & 255] ^ o5[f4 >>> 8 & 255] ^ s4[255 & h4] ^ n4[d4++], y3 = r4[l4 >>> 24] ^ i4[f4 >>> 16 & 255] ^ o5[h4 >>> 8 & 255] ^ s4[255 & c4] ^ n4[d4++], v3 = r4[f4 >>> 24] ^ i4[h4 >>> 16 & 255] ^ o5[c4 >>> 8 & 255] ^ s4[255 & l4] ^ n4[d4++], m3 = r4[h4 >>> 24] ^ i4[c4 >>> 16 & 255] ^ o5[l4 >>> 8 & 255] ^ s4[255 & f4] ^ n4[d4++];
            c4 = g4, l4 = y3, f4 = v3, h4 = m3;
          }
          g4 = (a4[c4 >>> 24] << 24 | a4[l4 >>> 16 & 255] << 16 | a4[f4 >>> 8 & 255] << 8 | a4[255 & h4]) ^ n4[d4++], y3 = (a4[l4 >>> 24] << 24 | a4[f4 >>> 16 & 255] << 16 | a4[h4 >>> 8 & 255] << 8 | a4[255 & c4]) ^ n4[d4++], v3 = (a4[f4 >>> 24] << 24 | a4[h4 >>> 16 & 255] << 16 | a4[c4 >>> 8 & 255] << 8 | a4[255 & l4]) ^ n4[d4++], m3 = (a4[h4 >>> 24] << 24 | a4[c4 >>> 16 & 255] << 16 | a4[l4 >>> 8 & 255] << 8 | a4[255 & f4]) ^ n4[d4++], e5[t5] = g4, e5[t5 + 1] = y3, e5[t5 + 2] = v3, e5[t5 + 3] = m3;
        }, keySize: 8 });
        e4.AES = t4._createHelper(g3);
      }(), n3.AES);
    }({ get exports() {
      return vi2;
    }, set exports(e3) {
      vi2 = e3;
    } });
    var Hi2 = vi2, Ki2 = {};
    !function(e3, t3) {
      e3.exports = Ai2().enc.Utf8;
    }({ get exports() {
      return Ki2;
    }, set exports(e3) {
      Ki2 = e3;
    } });
    var Qi2 = Ki2, qi2 = "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
    function Vi2() {
      throw new Error("setTimeout has not been defined");
    }
    function Wi2() {
      throw new Error("clearTimeout has not been defined");
    }
    var Yi2 = Vi2, Xi2 = Wi2;
    function Ji2(e3) {
      if (Yi2 === setTimeout)
        return setTimeout(e3, 0);
      if ((Yi2 === Vi2 || !Yi2) && setTimeout)
        return Yi2 = setTimeout, setTimeout(e3, 0);
      try {
        return Yi2(e3, 0);
      } catch (t3) {
        try {
          return Yi2.call(null, e3, 0);
        } catch (t4) {
          return Yi2.call(this, e3, 0);
        }
      }
    }
    "function" == typeof qi2.setTimeout && (Yi2 = setTimeout), "function" == typeof qi2.clearTimeout && (Xi2 = clearTimeout);
    var $i2, Zi2 = [], eo2 = false, to2 = -1;
    function no2() {
      eo2 && $i2 && (eo2 = false, $i2.length ? Zi2 = $i2.concat(Zi2) : to2 = -1, Zi2.length && ro2());
    }
    function ro2() {
      if (!eo2) {
        var e3 = Ji2(no2);
        eo2 = true;
        for (var t3 = Zi2.length; t3; ) {
          for ($i2 = Zi2, Zi2 = []; ++to2 < t3; )
            $i2 && $i2[to2].run();
          to2 = -1, t3 = Zi2.length;
        }
        $i2 = null, eo2 = false, function(e4) {
          if (Xi2 === clearTimeout)
            return clearTimeout(e4);
          if ((Xi2 === Wi2 || !Xi2) && clearTimeout)
            return Xi2 = clearTimeout, clearTimeout(e4);
          try {
            Xi2(e4);
          } catch (t4) {
            try {
              return Xi2.call(null, e4);
            } catch (t5) {
              return Xi2.call(this, e4);
            }
          }
        }(e3);
      }
    }
    function io(e3, t3) {
      this.fun = e3, this.array = t3;
    }
    io.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    function oo2() {
    }
    var so = oo2, ao2 = oo2, uo = oo2, co = oo2, lo2 = oo2, fo = oo2, ho = oo2;
    var po = qi2.performance || {}, go = po.now || po.mozNow || po.msNow || po.oNow || po.webkitNow || function() {
      return new Date().getTime();
    };
    var yo = new Date();
    var vo, mo, Io = { nextTick: function(e3) {
      var t3 = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n3 = 1; n3 < arguments.length; n3++)
          t3[n3 - 1] = arguments[n3];
      Zi2.push(new io(e3, t3)), 1 !== Zi2.length || eo2 || Ji2(ro2);
    }, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: so, addListener: ao2, once: uo, off: co, removeListener: lo2, removeAllListeners: fo, emit: ho, binding: function(e3) {
      throw new Error("process.binding is not supported");
    }, cwd: function() {
      return "/";
    }, chdir: function(e3) {
      throw new Error("process.chdir is not supported");
    }, umask: function() {
      return 0;
    }, hrtime: function(e3) {
      var t3 = 1e-3 * go.call(po), n3 = Math.floor(t3), r3 = Math.floor(t3 % 1 * 1e9);
      return e3 && (n3 -= e3[0], (r3 -= e3[1]) < 0 && (n3--, r3 += 1e9)), [n3, r3];
    }, platform: "browser", release: {}, config: {}, uptime: function() {
      return (new Date() - yo) / 1e3;
    } }, Ao = {};
    function bo() {
      if (mo)
        return vo;
      mo = 1;
      var e3 = 1e3, t3 = 60 * e3, n3 = 60 * t3, i3 = 24 * n3, o4 = 7 * i3, s3 = 365.25 * i3;
      function a3(e4, t4, n4, r3) {
        var i4 = t4 >= 1.5 * n4;
        return Math.round(e4 / n4) + " " + r3 + (i4 ? "s" : "");
      }
      return vo = function(u3, c3) {
        c3 = c3 || {};
        var l3 = r2(u3);
        if ("string" === l3 && u3.length > 0)
          return function(r3) {
            if ((r3 = String(r3)).length > 100)
              return;
            var a4 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r3);
            if (!a4)
              return;
            var u4 = parseFloat(a4[1]);
            switch ((a4[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return u4 * s3;
              case "weeks":
              case "week":
              case "w":
                return u4 * o4;
              case "days":
              case "day":
              case "d":
                return u4 * i3;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return u4 * n3;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return u4 * t3;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return u4 * e3;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return u4;
              default:
                return;
            }
          }(u3);
        if ("number" === l3 && isFinite(u3))
          return c3.long ? function(r3) {
            var o5 = Math.abs(r3);
            if (o5 >= i3)
              return a3(r3, o5, i3, "day");
            if (o5 >= n3)
              return a3(r3, o5, n3, "hour");
            if (o5 >= t3)
              return a3(r3, o5, t3, "minute");
            if (o5 >= e3)
              return a3(r3, o5, e3, "second");
            return r3 + " ms";
          }(u3) : function(r3) {
            var o5 = Math.abs(r3);
            if (o5 >= i3)
              return Math.round(r3 / i3) + "d";
            if (o5 >= n3)
              return Math.round(r3 / n3) + "h";
            if (o5 >= t3)
              return Math.round(r3 / t3) + "m";
            if (o5 >= e3)
              return Math.round(r3 / e3) + "s";
            return r3 + "ms";
          }(u3);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(u3));
      }, vo;
    }
    var ko = function(e3) {
      function t3(e4) {
        var r4, i3, o4, s3 = null;
        function a3() {
          for (var e5 = arguments.length, n4 = new Array(e5), i4 = 0; i4 < e5; i4++)
            n4[i4] = arguments[i4];
          if (a3.enabled) {
            var o5 = a3, s4 = Number(new Date()), u3 = s4 - (r4 || s4);
            o5.diff = u3, o5.prev = r4, o5.curr = s4, r4 = s4, n4[0] = t3.coerce(n4[0]), "string" != typeof n4[0] && n4.unshift("%O");
            var c3 = 0;
            n4[0] = n4[0].replace(/%([a-zA-Z%])/g, function(e6, r5) {
              if ("%%" === e6)
                return "%";
              c3++;
              var i5 = t3.formatters[r5];
              if ("function" == typeof i5) {
                var s5 = n4[c3];
                e6 = i5.call(o5, s5), n4.splice(c3, 1), c3--;
              }
              return e6;
            }), t3.formatArgs.call(o5, n4);
            var l3 = o5.log || t3.log;
            l3.apply(o5, n4);
          }
        }
        return a3.namespace = e4, a3.useColors = t3.useColors(), a3.color = t3.selectColor(e4), a3.extend = n3, a3.destroy = t3.destroy, Object.defineProperty(a3, "enabled", { enumerable: true, configurable: false, get: function() {
          return null !== s3 ? s3 : (i3 !== t3.namespaces && (i3 = t3.namespaces, o4 = t3.enabled(e4)), o4);
        }, set: function(e5) {
          s3 = e5;
        } }), "function" == typeof t3.init && t3.init(a3), a3;
      }
      function n3(e4, n4) {
        var r4 = t3(this.namespace + (void 0 === n4 ? ":" : n4) + e4);
        return r4.log = this.log, r4;
      }
      function r3(e4) {
        return e4.toString().substring(2, e4.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      return t3.debug = t3, t3.default = t3, t3.coerce = function(e4) {
        if (e4 instanceof Error)
          return e4.stack || e4.message;
        return e4;
      }, t3.disable = function() {
        var e4 = [].concat(c2(t3.names.map(r3)), c2(t3.skips.map(r3).map(function(e5) {
          return "-" + e5;
        }))).join(",");
        return t3.enable(""), e4;
      }, t3.enable = function(e4) {
        var n4;
        t3.save(e4), t3.namespaces = e4, t3.names = [], t3.skips = [];
        var r4 = ("string" == typeof e4 ? e4 : "").split(/[\s,]+/), i3 = r4.length;
        for (n4 = 0; n4 < i3; n4++)
          r4[n4] && ("-" === (e4 = r4[n4].replace(/\*/g, ".*?"))[0] ? t3.skips.push(new RegExp("^" + e4.slice(1) + "$")) : t3.names.push(new RegExp("^" + e4 + "$")));
      }, t3.enabled = function(e4) {
        if ("*" === e4[e4.length - 1])
          return true;
        var n4, r4;
        for (n4 = 0, r4 = t3.skips.length; n4 < r4; n4++)
          if (t3.skips[n4].test(e4))
            return false;
        for (n4 = 0, r4 = t3.names.length; n4 < r4; n4++)
          if (t3.names[n4].test(e4))
            return true;
        return false;
      }, t3.humanize = bo(), t3.destroy = function() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }, Object.keys(e3).forEach(function(n4) {
        t3[n4] = e3[n4];
      }), t3.names = [], t3.skips = [], t3.formatters = {}, t3.selectColor = function(e4) {
        for (var n4 = 0, r4 = 0; r4 < e4.length; r4++)
          n4 = (n4 << 5) - n4 + e4.charCodeAt(r4), n4 |= 0;
        return t3.colors[Math.abs(n4) % t3.colors.length];
      }, t3.enable(t3.load()), t3;
    };
    !function(e3, t3) {
      var n3;
      t3.formatArgs = function(t4) {
        if (t4[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t4[0] + (this.useColors ? "%c " : " ") + "+" + e3.exports.humanize(this.diff), !this.useColors)
          return;
        var n4 = "color: " + this.color;
        t4.splice(1, 0, n4, "color: inherit");
        var r3 = 0, i3 = 0;
        t4[0].replace(/%[a-zA-Z%]/g, function(e4) {
          "%%" !== e4 && (r3++, "%c" === e4 && (i3 = r3));
        }), t4.splice(i3, 0, n4);
      }, t3.save = function(e4) {
        try {
          e4 ? t3.storage.setItem("debug", e4) : t3.storage.removeItem("debug");
        } catch (e5) {
        }
      }, t3.load = function() {
        var e4;
        try {
          e4 = t3.storage.getItem("debug");
        } catch (e5) {
        }
        !e4 && void 0 !== Io && "env" in Io && (e4 = Io.env.DEBUG);
        return e4;
      }, t3.useColors = function() {
        if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
          return true;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
          return false;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }, t3.storage = function() {
        try {
          return localStorage;
        } catch (e4) {
        }
      }(), t3.destroy = (n3 = false, function() {
        n3 || (n3 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      }), t3.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t3.log = console.debug || console.log || function() {
      }, e3.exports = ko(t3), e3.exports.formatters.j = function(e4) {
        try {
          return JSON.stringify(e4);
        } catch (e5) {
          return "[UnexpectedJSONParseError]: " + e5.message;
        }
      };
    }({ get exports() {
      return Ao;
    }, set exports(e3) {
      Ao = e3;
    } }, Ao);
    var Eo = Ao("cookie"), So = function(e3, t3, n3) {
      switch (arguments.length) {
        case 3:
        case 2:
          return Co(e3, t3, n3);
        case 1:
          return Oo(e3);
        default:
          return wo();
      }
    };
    function Co(e3, t3, n3) {
      n3 = n3 || {};
      var r3 = _o(e3) + "=" + _o(t3);
      null == t3 && (n3.maxage = -1), n3.maxage && (n3.expires = new Date(+new Date() + n3.maxage)), n3.path && (r3 += "; path=" + n3.path), n3.domain && (r3 += "; domain=" + n3.domain), n3.expires && (r3 += "; expires=" + n3.expires.toUTCString()), n3.samesite && (r3 += "; samesite=" + n3.samesite), n3.secure && (r3 += "; secure"), document.cookie = r3;
    }
    function wo() {
      var e3;
      try {
        e3 = document.cookie;
      } catch (e4) {
        return "undefined" != typeof console && "function" == typeof console.error && console.error(e4.stack || e4), {};
      }
      return function(e4) {
        var t3, n3 = {}, r3 = e4.split(/ *; */);
        if ("" == r3[0])
          return n3;
        for (var i3 = 0; i3 < r3.length; ++i3)
          n3[To((t3 = r3[i3].split("="))[0])] = To(t3[1]);
        return n3;
      }(e3);
    }
    function Oo(e3) {
      return wo()[e3];
    }
    function _o(e3) {
      try {
        return encodeURIComponent(e3);
      } catch (t3) {
        Eo("error `encode(%o)` - %o", e3, t3);
      }
    }
    function To(e3) {
      try {
        return decodeURIComponent(e3);
      } catch (t3) {
        Eo("error `decode(%o)` - %o", e3, t3);
      }
    }
    var Ro = {}, Po = { get exports() {
      return Ro;
    }, set exports(e3) {
      Ro = e3;
    } }, xo = Math.max, Lo = function(e3, t3) {
      var n3 = t3 ? t3.length : 0;
      if (!n3)
        return [];
      for (var r3 = xo(Number(e3) || 0, 0), i3 = xo(n3 - r3, 0), o4 = new Array(i3), s3 = 0; s3 < i3; s3 += 1)
        o4[s3] = t3[s3 + r3];
      return o4;
    }, Mo = Math.max, Do = function(e3) {
      if (null == e3 || !e3.length)
        return [];
      for (var t3 = new Array(Mo(e3.length - 2, 0)), n3 = 1; n3 < e3.length; n3 += 1)
        t3[n3 - 1] = e3[n3];
      return t3;
    }, No = Lo, Bo = Do, Fo = Object.prototype.hasOwnProperty, Uo = Object.prototype.toString, jo = function(e3) {
      return Boolean(e3) && "object" === r2(e3);
    }, Go = function(e3) {
      return Boolean(e3) && "[object Object]" === Uo.call(e3);
    }, zo = function(e3, t3, n3, r3) {
      return Fo.call(t3, r3) && void 0 === e3[r3] && (e3[r3] = n3), t3;
    }, Ho = function(e3, t3, n3, r3) {
      return Fo.call(t3, r3) && (Go(e3[r3]) && Go(n3) ? e3[r3] = Qo(e3[r3], n3) : void 0 === e3[r3] && (e3[r3] = n3)), t3;
    }, Ko2 = function(e3, t3) {
      if (!jo(t3))
        return t3;
      e3 = e3 || zo;
      for (var n3 = No(2, arguments), r3 = 0; r3 < n3.length; r3 += 1)
        for (var i3 in n3[r3])
          e3(t3, n3[r3], n3[r3][i3], i3);
      return t3;
    }, Qo = function(e3) {
      return Ko2.apply(null, [Ho, e3].concat(Bo(arguments)));
    };
    Po.exports = function(e3) {
      return Ko2.apply(null, [null, e3].concat(Bo(arguments)));
    }, Ro.deep = Qo;
    var qo = {}, Vo = { get exports() {
      return qo;
    }, set exports(e3) {
      qo = e3;
    } }, Wo = Ao("cookie"), Yo = function(e3, t3, n3) {
      switch (arguments.length) {
        case 3:
        case 2:
          return Xo(e3, t3, n3);
        case 1:
          return $o(e3);
        default:
          return Jo();
      }
    };
    function Xo(e3, t3, n3) {
      n3 = n3 || {};
      var r3 = Zo(e3) + "=" + Zo(t3);
      null == t3 && (n3.maxage = -1), n3.maxage && (n3.expires = new Date(+new Date() + n3.maxage)), n3.path && (r3 += "; path=" + n3.path), n3.domain && (r3 += "; domain=" + n3.domain), n3.expires && (r3 += "; expires=" + n3.expires.toUTCString()), n3.secure && (r3 += "; secure"), document.cookie = r3;
    }
    function Jo() {
      var e3;
      try {
        e3 = document.cookie;
      } catch (e4) {
        return "undefined" != typeof console && "function" == typeof console.error && console.error(e4.stack || e4), {};
      }
      return function(e4) {
        var t3, n3 = {}, r3 = e4.split(/ *; */);
        if ("" == r3[0])
          return n3;
        for (var i3 = 0; i3 < r3.length; ++i3)
          n3[es((t3 = r3[i3].split("="))[0])] = es(t3[1]);
        return n3;
      }(e3);
    }
    function $o(e3) {
      return Jo()[e3];
    }
    function Zo(e3) {
      try {
        return encodeURIComponent(e3);
      } catch (t3) {
        Wo("error `encode(%o)` - %o", e3, t3);
      }
    }
    function es(e3) {
      try {
        return decodeURIComponent(e3);
      } catch (t3) {
        Wo("error `decode(%o)` - %o", e3, t3);
      }
    }
    !function(e3, t3) {
      var n3 = L2.parse, r3 = Yo;
      function i3(e4) {
        for (var n4 = t3.cookie, r4 = t3.levels(e4), i4 = 0; i4 < r4.length; ++i4) {
          var o4 = "__tld__", s3 = r4[i4], a3 = { domain: "." + s3 };
          if (n4(o4, 1, a3), n4(o4))
            return n4(o4, null, a3), s3;
        }
        return "";
      }
      i3.levels = function(e4) {
        var t4 = n3(e4).hostname.split("."), r4 = t4[t4.length - 1], i4 = [];
        if (4 === t4.length && r4 === parseInt(r4, 10))
          return i4;
        if (t4.length <= 1)
          return i4;
        for (var o4 = t4.length - 2; o4 >= 0; --o4)
          i4.push(t4.slice(o4).join("."));
        return i4;
      }, i3.cookie = r3, t3 = e3.exports = i3;
    }(Vo, qo);
    var ts = qo, ns = function() {
      function e3(t3) {
        i2(this, e3), this.cOpts = {}, this.options(t3), this.isSupportAvailable = this.checkSupportAvailability();
      }
      return s2(e3, [{ key: "options", value: function() {
        var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (0 === arguments.length)
          return this.cOpts;
        var t3 = ".".concat(ts(window.location.href));
        return "." === t3 && (t3 = null), this.cOpts = Ro(e4, { maxage: 31536e6, path: "/", domain: t3, samesite: "Lax" }), this.cOpts;
      } }, { key: "set", value: function(e4, t3) {
        try {
          return So(e4, t3, _2(this.cOpts)), true;
        } catch (e5) {
          return yt(e5), false;
        }
      } }, { key: "get", value: function(e4) {
        return So(e4);
      } }, { key: "remove", value: function(e4) {
        try {
          return So(e4, null, _2(this.cOpts)), true;
        } catch (e5) {
          return false;
        }
      } }, { key: "checkSupportAvailability", value: function() {
        var e4 = "test_rudder_cookie";
        return this.set(e4, true), !!this.get(e4) && (this.remove(e4), true);
      } }]), e3;
    }(), rs = new ns({}), is2 = {};
    !function(e3, t3) {
      e3.exports = function() {
        var e4 = window.localStorage;
        function t4(e5) {
          return e5 = JSON.stringify(e5), !!/^\{[\s\S]*\}$/.test(e5);
        }
        function n3(e5) {
          return void 0 === e5 || "function" == typeof e5 ? e5 + "" : JSON.stringify(e5);
        }
        function r3(e5) {
          if ("string" == typeof e5)
            try {
              return JSON.parse(e5);
            } catch (t5) {
              return e5;
            }
        }
        function i3(e5) {
          return "[object Function]" === {}.toString.call(e5);
        }
        function o4(e5) {
          return "[object Array]" === Object.prototype.toString.call(e5);
        }
        function s3(e5) {
          var t5 = "_Is_Incognit", n4 = "yes";
          try {
            e5.setItem(t5, n4);
          } catch (t6) {
            if ("QuotaExceededError" === t6.name) {
              var r4 = function() {
              };
              e5.__proto__ = { setItem: r4, getItem: r4, removeItem: r4, clear: r4 };
            }
          } finally {
            e5.getItem(t5) === n4 && e5.removeItem(t5);
          }
          return e5;
        }
        function a3() {
          if (!(this instanceof a3))
            return new a3();
        }
        e4 = s3(e4), a3.prototype = { set: function(r4, i4) {
          if (r4 && !t4(r4))
            e4.setItem(r4, n3(i4));
          else if (t4(r4))
            for (var o5 in r4)
              this.set(o5, r4[o5]);
          return this;
        }, get: function(t5) {
          if (!t5) {
            var n4 = {};
            return this.forEach(function(e5, t6) {
              return n4[e5] = t6;
            }), n4;
          }
          if ("?" === t5.charAt(0))
            return this.has(t5.substr(1));
          var i4 = arguments;
          if (i4.length > 1) {
            for (var o5 = {}, s4 = 0, a4 = i4.length; s4 < a4; s4++) {
              var u4 = r3(e4.getItem(i4[s4]));
              this.has(i4[s4]) && (o5[i4[s4]] = u4);
            }
            return o5;
          }
          return r3(e4.getItem(t5));
        }, clear: function() {
          return e4.clear(), this;
        }, remove: function(t5) {
          var n4 = this.get(t5);
          return e4.removeItem(t5), n4;
        }, has: function(e5) {
          return {}.hasOwnProperty.call(this.get(), e5);
        }, keys: function() {
          var e5 = [];
          return this.forEach(function(t5) {
            e5.push(t5);
          }), e5;
        }, forEach: function(t5) {
          for (var n4 = 0, r4 = e4.length; n4 < r4; n4++) {
            var i4 = e4.key(n4);
            t5(i4, this.get(i4));
          }
          return this;
        }, search: function(e5) {
          for (var t5 = this.keys(), n4 = {}, r4 = 0, i4 = t5.length; r4 < i4; r4++)
            t5[r4].indexOf(e5) > -1 && (n4[t5[r4]] = this.get(t5[r4]));
          return n4;
        } };
        var u3 = null;
        function c3(e5, n4) {
          var r4 = arguments, s4 = null;
          if (u3 || (u3 = a3()), 0 === r4.length)
            return u3.get();
          if (1 === r4.length) {
            if ("string" == typeof e5)
              return u3.get(e5);
            if (t4(e5))
              return u3.set(e5);
          }
          if (2 === r4.length && "string" == typeof e5) {
            if (!n4)
              return u3.remove(e5);
            if (n4 && "string" == typeof n4)
              return u3.set(e5, n4);
            n4 && i3(n4) && (s4 = null, s4 = n4(e5, u3.get(e5)), c3.set(e5, s4));
          }
          if (2 === r4.length && o4(e5) && i3(n4))
            for (var l4 = 0, f3 = e5.length; l4 < f3; l4++)
              s4 = n4(e5[l4], u3.get(e5[l4])), c3.set(e5[l4], s4);
          return c3;
        }
        for (var l3 in a3.prototype)
          c3[l3] = a3.prototype[l3];
        return c3;
      }();
    }({ get exports() {
      return is2;
    }, set exports(e3) {
      is2 = e3;
    } });
    var os = is2, ss = function() {
      function e3(t3) {
        i2(this, e3), this.sOpts = {}, this.enabled = this.checkSupportAvailability(), this.options(t3);
      }
      return s2(e3, [{ key: "options", value: function() {
        var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return 0 === arguments.length || (Ro(e4, { enabled: true }), this.enabled = e4.enabled && this.enabled, this.sOpts = e4), this.sOpts;
      } }, { key: "set", value: function(e4, t3) {
        return os.set(e4, t3);
      } }, { key: "get", value: function(e4) {
        return os.get(e4);
      } }, { key: "remove", value: function(e4) {
        return os.remove(e4);
      } }, { key: "checkSupportAvailability", value: function() {
        var e4 = "test_rudder_ls";
        return this.set(e4, true), !!this.get(e4) && (this.remove(e4), true);
      } }]), e3;
    }(), as = new ss({}), us = "rl_user_id", cs = "rl_trait", ls = "rl_anonymous_id", fs = "rl_group_id", hs = "rl_group_trait", ds = "rl_page_init_referrer", ps = "rl_page_init_referring_domain", gs = "rl_session", ys = "RudderEncrypt:", vs = "Rudder", ms = { segment: "ajs_anonymous_id" };
    function Is(e3) {
      try {
        return e3 ? JSON.parse(e3) : null;
      } catch (t3) {
        return yt(t3), e3 || null;
      }
    }
    function As(e3) {
      return e3.replace(/^\s+|\s+$/gm, "");
    }
    function bs(e3) {
      return !e3 || "string" == typeof e3 && "" === As(e3) ? e3 : e3.substring(0, ys.length) === ys ? Hi2.decrypt(e3.substring(ys.length), vs).toString(Qi2) : e3;
    }
    var ks = function() {
      function e3() {
        i2(this, e3), rs.isSupportAvailable ? this.storage = rs : (as.enabled && (this.storage = as), this.storage || yt("No storage is available :: initializing the SDK without storage"));
      }
      return s2(e3, [{ key: "options", value: function() {
        var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.storage.options(e4);
      } }, { key: "setItem", value: function(e4, t3) {
        this.storage.set(e4, function(e5) {
          return "" === As(e5) ? e5 : "".concat(ys).concat(Hi2.encrypt(e5, vs).toString());
        }(function(e5) {
          return JSON.stringify(e5);
        }(t3)));
      } }, { key: "setStringItem", value: function(e4, t3) {
        "string" == typeof t3 ? this.setItem(e4, t3) : yt("[Storage] ".concat(e4, " should be string"));
      } }, { key: "setUserId", value: function(e4) {
        this.setStringItem(us, e4);
      } }, { key: "setUserTraits", value: function(e4) {
        this.setItem(cs, e4);
      } }, { key: "setGroupId", value: function(e4) {
        this.setStringItem(fs, e4);
      } }, { key: "setGroupTraits", value: function(e4) {
        this.setItem(hs, e4);
      } }, { key: "setAnonymousId", value: function(e4) {
        this.setStringItem(ls, e4);
      } }, { key: "setInitialReferrer", value: function(e4) {
        this.setItem(ds, e4);
      } }, { key: "setInitialReferringDomain", value: function(e4) {
        this.setItem(ps, e4);
      } }, { key: "setSessionInfo", value: function(e4) {
        this.setItem(gs, e4);
      } }, { key: "getItem", value: function(e4) {
        return Is(bs(this.storage.get(e4)));
      } }, { key: "getUserId", value: function() {
        return this.getItem(us);
      } }, { key: "getUserTraits", value: function() {
        return this.getItem(cs);
      } }, { key: "getGroupId", value: function() {
        return this.getItem(fs);
      } }, { key: "getGroupTraits", value: function() {
        return this.getItem(hs);
      } }, { key: "fetchExternalAnonymousId", value: function(e4) {
        var t3, n3 = e4.toLowerCase();
        return Object.keys(ms).includes(n3) && "segment" === n3 ? (as.enabled && (t3 = as.get(ms[n3])), !t3 && rs.isSupportAvailable && (t3 = rs.get(ms[n3])), t3) : t3;
      } }, { key: "getAnonymousId", value: function(e4) {
        var t3 = Is(bs(this.storage.get(ls)));
        if (t3)
          return t3;
        var n3 = D2(e4, "autoCapture.source");
        if (true === D2(e4, "autoCapture.enabled") && "string" == typeof n3) {
          var r3 = this.fetchExternalAnonymousId(n3);
          if (r3)
            return r3;
        }
        return t3;
      } }, { key: "getInitialReferrer", value: function() {
        return this.getItem(ds);
      } }, { key: "getInitialReferringDomain", value: function() {
        return this.getItem(ps);
      } }, { key: "getSessionInfo", value: function() {
        return this.getItem(gs);
      } }, { key: "removeItem", value: function(e4) {
        return this.storage.remove(e4);
      } }, { key: "removeSessionInfo", value: function() {
        this.removeItem(gs);
      } }, { key: "clear", value: function(e4) {
        this.storage.remove(us), this.storage.remove(cs), this.storage.remove(fs), this.storage.remove(hs), e4 && this.storage.remove(ls);
      } }]), e3;
    }(), Es = new ks(), Ss = "RS_JS_SDK", Cs = function(e3, t3) {
      var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r3 = document.getElementById(e3);
      if (!r3) {
        var i3 = document.createElement("script");
        i3.src = t3, i3.async = void 0 === n3.async || n3.async, i3.type = "text/javascript", i3.id = e3, true !== n3.skipDatasetAttributes && (i3.setAttribute("data-loader", Ss), void 0 !== n3.isNonNativeSDK && i3.setAttribute("data-isNonNativeSDK", n3.isNonNativeSDK));
        var o4 = document.getElementsByTagName("head");
        if (0 !== o4.length)
          o4[0].insertBefore(i3, o4[0].firstChild);
        else {
          var s3 = document.getElementsByTagName("script")[0];
          s3.parentNode.insertBefore(i3, s3);
        }
      }
    };
    function ws(e3) {
      window.rsBugsnagClient && window.rsBugsnagClient.leaveBreadcrumb(e3);
    }
    function Os(e3) {
      window.rsBugsnagClient && window.rsBugsnagClient.notify(e3);
    }
    function _s(e3, t3, n3) {
      var r3;
      try {
        r3 = function(e4, t4, n4) {
          var r4;
          try {
            r4 = "string" == typeof e4 ? e4 : e4 instanceof Error || e4.message ? e4.message : JSON.stringify(e4);
          } catch (e5) {
            r4 = "";
          }
          if (e4 instanceof Event) {
            if (e4.target && "script" !== e4.target.localName)
              return "";
            if (e4.target.dataset && (e4.target.dataset.loader !== Ss || "true" !== e4.target.dataset.isNonNativeSDK))
              return "";
            if (r4 = "error in script loading:: src::  ".concat(e4.target.src, " id:: ").concat(e4.target.id), "ad-block" === e4.target.id)
              return n4.page("RudderJS-Initiated", "ad-block page request", { path: "/ad-blocked", title: r4 }, n4.sendAdblockPageOptions), "";
          }
          return "[handleError]::".concat(t4 || "", ' "').concat(r4, '"');
        }(e3, t3, n3);
      } catch (t4) {
        yt("[handleError] Exception:: ", t4), yt("[handleError] Original error:: ", JSON.stringify(e3)), Os(t4);
      }
      if (r3) {
        yt(r3);
        var i3 = e3;
        e3 instanceof Error || (i3 = new Error(r3)), Os(i3);
      }
    }
    function Ts(e3, t3) {
      if (null != t3)
        return t3;
    }
    function Rs(e3) {
      return e3 && e3.endsWith("/") ? e3.replace(/\/+$/, "") : e3;
    }
    function Ps() {
      return window.crypto && "function" == typeof window.crypto.getRandomValues ? Q2() : function() {
        var e3, t3 = 0, n3 = "";
        if (!U2 || j2 + 16 > 256) {
          for (U2 = Array(t3 = 256); t3--; )
            U2[t3] = 256 * Math.random() | 0;
          t3 = j2 = 0;
        }
        for (; t3 < 16; t3++)
          e3 = U2[j2 + t3], n3 += 6 == t3 ? G2[15 & e3 | 64] : 8 == t3 ? G2[63 & e3 | 128] : G2[e3], 1 & t3 && t3 > 1 && t3 < 11 && (n3 += "-");
        return j2++, n3;
      }();
    }
    function xs() {
      return new Date().toISOString();
    }
    function Ls() {
      var e3 = Ns(), t3 = e3 ? L2.parse(e3).pathname : window.location.pathname, n3 = window.location.search, r3 = document.title, i3 = function(e4) {
        var t4 = Ns(), n4 = t4 ? t4.indexOf("?") > -1 ? t4 : t4 + e4 : window.location.href, r4 = n4.indexOf("#");
        return r4 > -1 ? n4.slice(0, r4) : n4;
      }(n3), o4 = window.location.href, s3 = Ms();
      return { path: t3, referrer: s3, referring_domain: Ds(s3), search: n3, title: r3, url: i3, tab_url: o4, initial_referrer: Es.getInitialReferrer(), initial_referring_domain: Es.getInitialReferringDomain() };
    }
    function Ms() {
      return document.referrer || "$direct";
    }
    function Ds(e3) {
      var t3 = e3.split("/");
      return t3.length >= 3 ? t3[2] : "";
    }
    function Ns() {
      for (var e3, t3 = document.getElementsByTagName("link"), n3 = 0; e3 = t3[n3]; n3++)
        if ("canonical" === e3.getAttribute("rel"))
          return e3.getAttribute("href");
    }
    function Bs(e3, t3) {
      Object.keys(e3).forEach(function(n3) {
        e3.hasOwnProperty(n3) && (t3[n3] && (e3[t3[n3]] = e3[n3]), "All" != n3 && null != t3[n3] && t3[n3] != n3 && delete e3[n3]);
      });
    }
    function Fs(e3) {
      Bs(e3, ei2);
    }
    function Us(e3, t3) {
      var n3 = [];
      if (!t3 || 0 === t3.length)
        return n3;
      var i3 = true;
      void 0 !== e3.All && (i3 = e3.All);
      var o4 = [];
      return "string" == typeof t3[0] ? t3.forEach(function(e4) {
        o4.push({ intgName: e4, intObj: e4 });
      }) : "object" === r2(t3[0]) && t3.forEach(function(e4) {
        o4.push({ intgName: e4.name, intObj: e4 });
      }), o4.forEach(function(t4) {
        var r3 = t4.intgName, o5 = t4.intObj;
        if (i3) {
          var s3 = true;
          null != e3[r3] && 0 == e3[r3] && (s3 = false), s3 && n3.push(o5);
        } else
          null != e3[r3] && 1 == e3[r3] && n3.push(o5);
      }), n3;
    }
    for (var js, Gs = function() {
      for (var e3, t3 = document.getElementsByTagName("script"), n3 = false, r3 = 0; r3 < t3.length; r3 += 1) {
        var i3 = Rs(t3[r3].getAttribute("src"));
        if (i3) {
          var o4 = i3.match(/^.*rudder-analytics(-staging)?(\.min)?\.js$/);
          if (o4) {
            e3 = i3, n3 = void 0 !== o4[1];
            break;
          }
        }
      }
      return { sdkURL: e3, isStaging: n3 };
    }, zs = function(e3) {
      return "string" == typeof e3 || null == e3 ? e3 : JSON.stringify(e3);
    }, Hs = function(e3) {
      return !(!e3 || "string" != typeof e3 || 0 === e3.trim().length);
    }, Ks = function(e3, t3, n3) {
      try {
        var r3 = e3.source.dataplanes || {};
        if (Object.keys(r3).length) {
          var i3 = function(e4) {
            var t4 = e4 ? e4.residencyServer : void 0;
            if (t4)
              return "string" == typeof t4 && di2.includes(t4.toUpperCase()) ? t4.toUpperCase() : void yt("Invalid residencyServer input");
          }(n3), o4 = r3[i3] || r3.US;
          if (o4) {
            var s3 = function(e4) {
              if (Array.isArray(e4) && e4.length) {
                var t4 = e4.find(function(e5) {
                  return true === e5.default;
                });
                if (t4 && Hs(t4.url))
                  return t4.url;
              }
            }(o4);
            if (s3)
              return s3;
          }
        }
        if (Hs(t3))
          return t3;
        throw Error("Unable to load the SDK due to invalid data plane url");
      } catch (e4) {
        throw Error(e4);
      }
    }, Qs = s2(function e3() {
      i2(this, e3), this.name = "RudderLabs JavaScript SDK", this.namespace = "com.rudderlabs.javascript", this.version = "2.27.0";
    }), qs = s2(function e3() {
      i2(this, e3), this.name = "RudderLabs JavaScript SDK", this.version = "2.27.0";
    }), Vs = s2(function e3() {
      i2(this, e3), this.name = "", this.version = "";
    }), Ws = s2(function e3() {
      i2(this, e3), this.density = 0, this.width = 0, this.height = 0, this.innerWidth = 0, this.innerHeight = 0;
    }), Ys = s2(function e3() {
      var t3;
      i2(this, e3), this.app = new Qs(), this.traits = null, this.library = new qs(), this.userAgent = function() {
        if ("undefined" == typeof navigator)
          return null;
        var e4 = navigator.userAgent, t4 = navigator.brave;
        if (t4 && Object.getPrototypeOf(t4).isBrave) {
          var n3 = e4.match(/(chrome)\/([\w.]+)/i);
          n3 && (e4 = "".concat(e4, " Brave/").concat(n3[2]));
        }
        return e4;
      }(), this.device = null, this.network = null, this.os = new Vs(), this.locale = "undefined" == typeof navigator ? null : navigator.language || navigator.browserLanguage, this.screen = (t3 = new Ws(), "undefined" == typeof window || (t3.width = window.screen.width, t3.height = window.screen.height, t3.density = window.devicePixelRatio, t3.innerWidth = window.innerWidth, t3.innerHeight = window.innerHeight), t3);
    }), Xs = function() {
      function e3() {
        i2(this, e3), this.channel = "web", this.context = new Ys(), this.type = null, this.messageId = Ps(), this.originalTimestamp = new Date().toISOString(), this.anonymousId = null, this.userId = null, this.event = null, this.properties = {}, this.integrations = {}, this.integrations.All = true;
      }
      return s2(e3, [{ key: "getProperty", value: function(e4) {
        return this.properties[e4];
      } }, { key: "addProperty", value: function(e4, t3) {
        this.properties[e4] = t3;
      } }]), e3;
    }(), Js = function() {
      function e3() {
        i2(this, e3), this.message = new Xs();
      }
      return s2(e3, [{ key: "setType", value: function(e4) {
        this.message.type = e4;
      } }, { key: "setProperty", value: function(e4) {
        this.message.properties = e4;
      } }, { key: "setUserProperty", value: function(e4) {
        this.message.user_properties = e4;
      } }, { key: "setUserId", value: function(e4) {
        this.message.userId = e4;
      } }, { key: "setEventName", value: function(e4) {
        this.message.event = e4;
      } }, { key: "getElementContent", value: function() {
        return this.message;
      } }]), e3;
    }(), $s = function() {
      function e3() {
        i2(this, e3), this.rudderProperty = null, this.rudderUserProperty = null, this.event = null, this.userId = null, this.type = null;
      }
      return s2(e3, [{ key: "setType", value: function(e4) {
        return this.type = e4, this;
      } }, { key: "build", value: function() {
        var e4 = new Js();
        return e4.setUserId(this.userId), e4.setType(this.type), e4.setEventName(this.event), e4.setProperty(this.rudderProperty), e4.setUserProperty(this.rudderUserProperty), e4;
      } }]), e3;
    }(), Zs = {}, ea2 = 256, ta2 = []; ea2--; )
      ta2[ea2] = (ea2 + 256).toString(16).substring(1);
    Zs.v4 = function() {
      var e3, t3 = 0, n3 = "";
      if (!js || ea2 + 16 > 256) {
        for (js = Array(t3 = 256); t3--; )
          js[t3] = 256 * Math.random() | 0;
        t3 = ea2 = 0;
      }
      for (; t3 < 16; t3++)
        e3 = js[ea2 + t3], n3 += 6 == t3 ? ta2[15 & e3 | 64] : 8 == t3 ? ta2[63 & e3 | 128] : ta2[e3], 1 & t3 && t3 > 1 && t3 < 11 && (n3 += "-");
      return ea2++, n3;
    };
    var na, ra2 = {}, ia2 = Object.prototype.hasOwnProperty, oa2 = String.prototype.charAt, sa2 = Object.prototype.toString, aa2 = function(e3, t3) {
      return oa2.call(e3, t3);
    }, ua2 = function(e3, t3) {
      return ia2.call(e3, t3);
    }, ca2 = function(e3, t3) {
      t3 = t3 || ua2;
      for (var n3 = [], r3 = 0, i3 = e3.length; r3 < i3; r3 += 1)
        t3(e3, r3) && n3.push(String(r3));
      return n3;
    }, la2 = function(e3) {
      return null == e3 ? [] : (t3 = e3, "[object String]" === sa2.call(t3) ? ca2(e3, aa2) : function(e4) {
        return null != e4 && "function" != typeof e4 && "number" == typeof e4.length;
      }(e3) ? ca2(e3, ua2) : function(e4, t4) {
        t4 = t4 || ua2;
        var n3 = [];
        for (var r3 in e4)
          t4(e4, r3) && n3.push(String(r3));
        return n3;
      }(e3));
      var t3;
    }, fa2 = new Uint8Array(16);
    function ha2() {
      if (!na && !(na = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return na(fa2);
    }
    var da2 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    function pa2(e3) {
      return "string" == typeof e3 && da2.test(e3);
    }
    for (var ga, ya2, va2 = [], ma2 = 0; ma2 < 256; ++ma2)
      va2.push((ma2 + 256).toString(16).substr(1));
    function Ia2(e3) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = (va2[e3[t3 + 0]] + va2[e3[t3 + 1]] + va2[e3[t3 + 2]] + va2[e3[t3 + 3]] + "-" + va2[e3[t3 + 4]] + va2[e3[t3 + 5]] + "-" + va2[e3[t3 + 6]] + va2[e3[t3 + 7]] + "-" + va2[e3[t3 + 8]] + va2[e3[t3 + 9]] + "-" + va2[e3[t3 + 10]] + va2[e3[t3 + 11]] + va2[e3[t3 + 12]] + va2[e3[t3 + 13]] + va2[e3[t3 + 14]] + va2[e3[t3 + 15]]).toLowerCase();
      if (!pa2(n3))
        throw TypeError("Stringified UUID is invalid");
      return n3;
    }
    var Aa2 = 0, ba = 0;
    function ka2(e3) {
      if (!pa2(e3))
        throw TypeError("Invalid UUID");
      var t3, n3 = new Uint8Array(16);
      return n3[0] = (t3 = parseInt(e3.slice(0, 8), 16)) >>> 24, n3[1] = t3 >>> 16 & 255, n3[2] = t3 >>> 8 & 255, n3[3] = 255 & t3, n3[4] = (t3 = parseInt(e3.slice(9, 13), 16)) >>> 8, n3[5] = 255 & t3, n3[6] = (t3 = parseInt(e3.slice(14, 18), 16)) >>> 8, n3[7] = 255 & t3, n3[8] = (t3 = parseInt(e3.slice(19, 23), 16)) >>> 8, n3[9] = 255 & t3, n3[10] = (t3 = parseInt(e3.slice(24, 36), 16)) / 1099511627776 & 255, n3[11] = t3 / 4294967296 & 255, n3[12] = t3 >>> 24 & 255, n3[13] = t3 >>> 16 & 255, n3[14] = t3 >>> 8 & 255, n3[15] = 255 & t3, n3;
    }
    function Ea2(e3, t3, n3) {
      function r3(e4, r4, i3, o4) {
        if ("string" == typeof e4 && (e4 = function(e5) {
          e5 = unescape(encodeURIComponent(e5));
          for (var t4 = [], n4 = 0; n4 < e5.length; ++n4)
            t4.push(e5.charCodeAt(n4));
          return t4;
        }(e4)), "string" == typeof r4 && (r4 = ka2(r4)), 16 !== r4.length)
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var s3 = new Uint8Array(16 + e4.length);
        if (s3.set(r4), s3.set(e4, r4.length), (s3 = n3(s3))[6] = 15 & s3[6] | t3, s3[8] = 63 & s3[8] | 128, i3) {
          o4 = o4 || 0;
          for (var a3 = 0; a3 < 16; ++a3)
            i3[o4 + a3] = s3[a3];
          return i3;
        }
        return Ia2(s3);
      }
      try {
        r3.name = e3;
      } catch (e4) {
      }
      return r3.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r3.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r3;
    }
    function Sa2(e3) {
      return 14 + (e3 + 64 >>> 9 << 4) + 1;
    }
    function Ca2(e3, t3) {
      var n3 = (65535 & e3) + (65535 & t3);
      return (e3 >> 16) + (t3 >> 16) + (n3 >> 16) << 16 | 65535 & n3;
    }
    function wa2(e3, t3, n3, r3, i3, o4) {
      return Ca2((s3 = Ca2(Ca2(t3, e3), Ca2(r3, o4))) << (a3 = i3) | s3 >>> 32 - a3, n3);
      var s3, a3;
    }
    function Oa2(e3, t3, n3, r3, i3, o4, s3) {
      return wa2(t3 & n3 | ~t3 & r3, e3, t3, i3, o4, s3);
    }
    function _a(e3, t3, n3, r3, i3, o4, s3) {
      return wa2(t3 & r3 | n3 & ~r3, e3, t3, i3, o4, s3);
    }
    function Ta2(e3, t3, n3, r3, i3, o4, s3) {
      return wa2(t3 ^ n3 ^ r3, e3, t3, i3, o4, s3);
    }
    function Ra2(e3, t3, n3, r3, i3, o4, s3) {
      return wa2(n3 ^ (t3 | ~r3), e3, t3, i3, o4, s3);
    }
    var Pa2 = Ea2("v3", 48, function(e3) {
      if ("string" == typeof e3) {
        var t3 = unescape(encodeURIComponent(e3));
        e3 = new Uint8Array(t3.length);
        for (var n3 = 0; n3 < t3.length; ++n3)
          e3[n3] = t3.charCodeAt(n3);
      }
      return function(e4) {
        for (var t4 = [], n4 = 32 * e4.length, r3 = "0123456789abcdef", i3 = 0; i3 < n4; i3 += 8) {
          var o4 = e4[i3 >> 5] >>> i3 % 32 & 255, s3 = parseInt(r3.charAt(o4 >>> 4 & 15) + r3.charAt(15 & o4), 16);
          t4.push(s3);
        }
        return t4;
      }(function(e4, t4) {
        e4[t4 >> 5] |= 128 << t4 % 32, e4[Sa2(t4) - 1] = t4;
        for (var n4 = 1732584193, r3 = -271733879, i3 = -1732584194, o4 = 271733878, s3 = 0; s3 < e4.length; s3 += 16) {
          var a3 = n4, u3 = r3, c3 = i3, l3 = o4;
          n4 = Oa2(n4, r3, i3, o4, e4[s3], 7, -680876936), o4 = Oa2(o4, n4, r3, i3, e4[s3 + 1], 12, -389564586), i3 = Oa2(i3, o4, n4, r3, e4[s3 + 2], 17, 606105819), r3 = Oa2(r3, i3, o4, n4, e4[s3 + 3], 22, -1044525330), n4 = Oa2(n4, r3, i3, o4, e4[s3 + 4], 7, -176418897), o4 = Oa2(o4, n4, r3, i3, e4[s3 + 5], 12, 1200080426), i3 = Oa2(i3, o4, n4, r3, e4[s3 + 6], 17, -1473231341), r3 = Oa2(r3, i3, o4, n4, e4[s3 + 7], 22, -45705983), n4 = Oa2(n4, r3, i3, o4, e4[s3 + 8], 7, 1770035416), o4 = Oa2(o4, n4, r3, i3, e4[s3 + 9], 12, -1958414417), i3 = Oa2(i3, o4, n4, r3, e4[s3 + 10], 17, -42063), r3 = Oa2(r3, i3, o4, n4, e4[s3 + 11], 22, -1990404162), n4 = Oa2(n4, r3, i3, o4, e4[s3 + 12], 7, 1804603682), o4 = Oa2(o4, n4, r3, i3, e4[s3 + 13], 12, -40341101), i3 = Oa2(i3, o4, n4, r3, e4[s3 + 14], 17, -1502002290), n4 = _a(n4, r3 = Oa2(r3, i3, o4, n4, e4[s3 + 15], 22, 1236535329), i3, o4, e4[s3 + 1], 5, -165796510), o4 = _a(o4, n4, r3, i3, e4[s3 + 6], 9, -1069501632), i3 = _a(i3, o4, n4, r3, e4[s3 + 11], 14, 643717713), r3 = _a(r3, i3, o4, n4, e4[s3], 20, -373897302), n4 = _a(n4, r3, i3, o4, e4[s3 + 5], 5, -701558691), o4 = _a(o4, n4, r3, i3, e4[s3 + 10], 9, 38016083), i3 = _a(i3, o4, n4, r3, e4[s3 + 15], 14, -660478335), r3 = _a(r3, i3, o4, n4, e4[s3 + 4], 20, -405537848), n4 = _a(n4, r3, i3, o4, e4[s3 + 9], 5, 568446438), o4 = _a(o4, n4, r3, i3, e4[s3 + 14], 9, -1019803690), i3 = _a(i3, o4, n4, r3, e4[s3 + 3], 14, -187363961), r3 = _a(r3, i3, o4, n4, e4[s3 + 8], 20, 1163531501), n4 = _a(n4, r3, i3, o4, e4[s3 + 13], 5, -1444681467), o4 = _a(o4, n4, r3, i3, e4[s3 + 2], 9, -51403784), i3 = _a(i3, o4, n4, r3, e4[s3 + 7], 14, 1735328473), n4 = Ta2(n4, r3 = _a(r3, i3, o4, n4, e4[s3 + 12], 20, -1926607734), i3, o4, e4[s3 + 5], 4, -378558), o4 = Ta2(o4, n4, r3, i3, e4[s3 + 8], 11, -2022574463), i3 = Ta2(i3, o4, n4, r3, e4[s3 + 11], 16, 1839030562), r3 = Ta2(r3, i3, o4, n4, e4[s3 + 14], 23, -35309556), n4 = Ta2(n4, r3, i3, o4, e4[s3 + 1], 4, -1530992060), o4 = Ta2(o4, n4, r3, i3, e4[s3 + 4], 11, 1272893353), i3 = Ta2(i3, o4, n4, r3, e4[s3 + 7], 16, -155497632), r3 = Ta2(r3, i3, o4, n4, e4[s3 + 10], 23, -1094730640), n4 = Ta2(n4, r3, i3, o4, e4[s3 + 13], 4, 681279174), o4 = Ta2(o4, n4, r3, i3, e4[s3], 11, -358537222), i3 = Ta2(i3, o4, n4, r3, e4[s3 + 3], 16, -722521979), r3 = Ta2(r3, i3, o4, n4, e4[s3 + 6], 23, 76029189), n4 = Ta2(n4, r3, i3, o4, e4[s3 + 9], 4, -640364487), o4 = Ta2(o4, n4, r3, i3, e4[s3 + 12], 11, -421815835), i3 = Ta2(i3, o4, n4, r3, e4[s3 + 15], 16, 530742520), n4 = Ra2(n4, r3 = Ta2(r3, i3, o4, n4, e4[s3 + 2], 23, -995338651), i3, o4, e4[s3], 6, -198630844), o4 = Ra2(o4, n4, r3, i3, e4[s3 + 7], 10, 1126891415), i3 = Ra2(i3, o4, n4, r3, e4[s3 + 14], 15, -1416354905), r3 = Ra2(r3, i3, o4, n4, e4[s3 + 5], 21, -57434055), n4 = Ra2(n4, r3, i3, o4, e4[s3 + 12], 6, 1700485571), o4 = Ra2(o4, n4, r3, i3, e4[s3 + 3], 10, -1894986606), i3 = Ra2(i3, o4, n4, r3, e4[s3 + 10], 15, -1051523), r3 = Ra2(r3, i3, o4, n4, e4[s3 + 1], 21, -2054922799), n4 = Ra2(n4, r3, i3, o4, e4[s3 + 8], 6, 1873313359), o4 = Ra2(o4, n4, r3, i3, e4[s3 + 15], 10, -30611744), i3 = Ra2(i3, o4, n4, r3, e4[s3 + 6], 15, -1560198380), r3 = Ra2(r3, i3, o4, n4, e4[s3 + 13], 21, 1309151649), n4 = Ra2(n4, r3, i3, o4, e4[s3 + 4], 6, -145523070), o4 = Ra2(o4, n4, r3, i3, e4[s3 + 11], 10, -1120210379), i3 = Ra2(i3, o4, n4, r3, e4[s3 + 2], 15, 718787259), r3 = Ra2(r3, i3, o4, n4, e4[s3 + 9], 21, -343485551), n4 = Ca2(n4, a3), r3 = Ca2(r3, u3), i3 = Ca2(i3, c3), o4 = Ca2(o4, l3);
        }
        return [n4, r3, i3, o4];
      }(function(e4) {
        if (0 === e4.length)
          return [];
        for (var t4 = 8 * e4.length, n4 = new Uint32Array(Sa2(t4)), r3 = 0; r3 < t4; r3 += 8)
          n4[r3 >> 5] |= (255 & e4[r3 / 8]) << r3 % 32;
        return n4;
      }(e3), 8 * e3.length));
    }), xa = Pa2;
    function La2(e3, t3, n3, r3) {
      switch (e3) {
        case 0:
          return t3 & n3 ^ ~t3 & r3;
        case 1:
        case 3:
          return t3 ^ n3 ^ r3;
        case 2:
          return t3 & n3 ^ t3 & r3 ^ n3 & r3;
      }
    }
    function Ma2(e3, t3) {
      return e3 << t3 | e3 >>> 32 - t3;
    }
    var Da2 = Ea2("v5", 80, function(e3) {
      var t3 = [1518500249, 1859775393, 2400959708, 3395469782], n3 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" == typeof e3) {
        var r3 = unescape(encodeURIComponent(e3));
        e3 = [];
        for (var i3 = 0; i3 < r3.length; ++i3)
          e3.push(r3.charCodeAt(i3));
      } else
        Array.isArray(e3) || (e3 = Array.prototype.slice.call(e3));
      e3.push(128);
      for (var o4 = e3.length / 4 + 2, s3 = Math.ceil(o4 / 16), a3 = new Array(s3), u3 = 0; u3 < s3; ++u3) {
        for (var c3 = new Uint32Array(16), l3 = 0; l3 < 16; ++l3)
          c3[l3] = e3[64 * u3 + 4 * l3] << 24 | e3[64 * u3 + 4 * l3 + 1] << 16 | e3[64 * u3 + 4 * l3 + 2] << 8 | e3[64 * u3 + 4 * l3 + 3];
        a3[u3] = c3;
      }
      a3[s3 - 1][14] = 8 * (e3.length - 1) / Math.pow(2, 32), a3[s3 - 1][14] = Math.floor(a3[s3 - 1][14]), a3[s3 - 1][15] = 8 * (e3.length - 1) & 4294967295;
      for (var f3 = 0; f3 < s3; ++f3) {
        for (var h3 = new Uint32Array(80), d3 = 0; d3 < 16; ++d3)
          h3[d3] = a3[f3][d3];
        for (var p3 = 16; p3 < 80; ++p3)
          h3[p3] = Ma2(h3[p3 - 3] ^ h3[p3 - 8] ^ h3[p3 - 14] ^ h3[p3 - 16], 1);
        for (var g3 = n3[0], y3 = n3[1], v3 = n3[2], m3 = n3[3], I3 = n3[4], A3 = 0; A3 < 80; ++A3) {
          var b3 = Math.floor(A3 / 20), k3 = Ma2(g3, 5) + La2(b3, y3, v3, m3) + I3 + t3[b3] + h3[A3] >>> 0;
          I3 = m3, m3 = v3, v3 = Ma2(y3, 30) >>> 0, y3 = g3, g3 = k3;
        }
        n3[0] = n3[0] + g3 >>> 0, n3[1] = n3[1] + y3 >>> 0, n3[2] = n3[2] + v3 >>> 0, n3[3] = n3[3] + m3 >>> 0, n3[4] = n3[4] + I3 >>> 0;
      }
      return [n3[0] >> 24 & 255, n3[0] >> 16 & 255, n3[0] >> 8 & 255, 255 & n3[0], n3[1] >> 24 & 255, n3[1] >> 16 & 255, n3[1] >> 8 & 255, 255 & n3[1], n3[2] >> 24 & 255, n3[2] >> 16 & 255, n3[2] >> 8 & 255, 255 & n3[2], n3[3] >> 24 & 255, n3[3] >> 16 & 255, n3[3] >> 8 & 255, 255 & n3[3], n3[4] >> 24 & 255, n3[4] >> 16 & 255, n3[4] >> 8 & 255, 255 & n3[4]];
    }), Na2 = Da2;
    var Ba2 = Object.freeze({ __proto__: null, v1: function(e3, t3, n3) {
      var r3 = t3 && n3 || 0, i3 = t3 || new Array(16), o4 = (e3 = e3 || {}).node || ga, s3 = void 0 !== e3.clockseq ? e3.clockseq : ya2;
      if (null == o4 || null == s3) {
        var a3 = e3.random || (e3.rng || ha2)();
        null == o4 && (o4 = ga = [1 | a3[0], a3[1], a3[2], a3[3], a3[4], a3[5]]), null == s3 && (s3 = ya2 = 16383 & (a3[6] << 8 | a3[7]));
      }
      var u3 = void 0 !== e3.msecs ? e3.msecs : Date.now(), c3 = void 0 !== e3.nsecs ? e3.nsecs : ba + 1, l3 = u3 - Aa2 + (c3 - ba) / 1e4;
      if (l3 < 0 && void 0 === e3.clockseq && (s3 = s3 + 1 & 16383), (l3 < 0 || u3 > Aa2) && void 0 === e3.nsecs && (c3 = 0), c3 >= 1e4)
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      Aa2 = u3, ba = c3, ya2 = s3;
      var f3 = (1e4 * (268435455 & (u3 += 122192928e5)) + c3) % 4294967296;
      i3[r3++] = f3 >>> 24 & 255, i3[r3++] = f3 >>> 16 & 255, i3[r3++] = f3 >>> 8 & 255, i3[r3++] = 255 & f3;
      var h3 = u3 / 4294967296 * 1e4 & 268435455;
      i3[r3++] = h3 >>> 8 & 255, i3[r3++] = 255 & h3, i3[r3++] = h3 >>> 24 & 15 | 16, i3[r3++] = h3 >>> 16 & 255, i3[r3++] = s3 >>> 8 | 128, i3[r3++] = 255 & s3;
      for (var d3 = 0; d3 < 6; ++d3)
        i3[r3 + d3] = o4[d3];
      return t3 || Ia2(i3);
    }, v3: xa, v4: function(e3, t3, n3) {
      var r3 = (e3 = e3 || {}).random || (e3.rng || ha2)();
      if (r3[6] = 15 & r3[6] | 64, r3[8] = 63 & r3[8] | 128, t3) {
        n3 = n3 || 0;
        for (var i3 = 0; i3 < 16; ++i3)
          t3[n3 + i3] = r3[i3];
        return t3;
      }
      return Ia2(r3);
    }, v5: Na2, NIL: "00000000-0000-0000-0000-000000000000", version: function(e3) {
      if (!pa2(e3))
        throw TypeError("Invalid UUID");
      return parseInt(e3.substr(14, 1), 16);
    }, validate: pa2, stringify: Ia2, parse: ka2 }), Fa2 = la2, Ua2 = d2(Ba2).v4, ja2 = { _data: {}, length: 0, setItem: function(e3, t3) {
      return this._data[e3] = t3, this.length = Fa2(this._data).length, t3;
    }, getItem: function(e3) {
      return e3 in this._data ? this._data[e3] : null;
    }, removeItem: function(e3) {
      return e3 in this._data && delete this._data[e3], this.length = Fa2(this._data).length, null;
    }, clear: function() {
      this._data = {}, this.length = 0;
    }, key: function(e3) {
      return Fa2(this._data)[e3];
    } };
    ra2.defaultEngine = function() {
      try {
        if (!window.localStorage)
          return false;
        var e3 = Ua2();
        window.localStorage.setItem(e3, "test_value");
        var t3 = window.localStorage.getItem(e3);
        return window.localStorage.removeItem(e3), "test_value" === t3;
      } catch (e4) {
        return false;
      }
    }() ? window.localStorage : ja2, ra2.inMemoryEngine = ja2;
    var Ga2 = la2, za2 = Object.prototype.toString, Ha2 = "function" == typeof Array.isArray ? Array.isArray : function(e3) {
      return "[object Array]" === za2.call(e3);
    }, Ka2 = function(e3) {
      return null != e3 && (Ha2(e3) || "function" !== e3 && function(e4) {
        var t3 = r2(e4);
        return "number" === t3 || "object" === t3 && "[object Number]" === za2.call(e4);
      }(e3.length));
    }, Qa2 = function(e3, t3) {
      for (var n3 = 0; n3 < t3.length && false !== e3(t3[n3], n3, t3); n3 += 1)
        ;
    }, qa2 = function(e3, t3) {
      for (var n3 = Ga2(t3), r3 = 0; r3 < n3.length && false !== e3(t3[n3[r3]], n3[r3], t3); r3 += 1)
        ;
    }, Va2 = function(e3, t3) {
      return (Ka2(t3) ? Qa2 : qa2).call(this, e3, t3);
    }, Wa2 = ra2.defaultEngine, Ya2 = ra2.inMemoryEngine, Xa2 = Va2, Ja2 = la2, $a = JSON;
    function Za2(e3, t3, n3, r3) {
      this.id = t3, this.name = e3, this.keys = n3 || {}, this.engine = r3 || Wa2, this.originalEngine = this.engine;
    }
    Za2.prototype.set = function(e3, t3) {
      var n3 = this._createValidKey(e3);
      if (n3)
        try {
          this.engine.setItem(n3, $a.stringify(t3));
        } catch (n4) {
          (function(e4) {
            var t4 = false;
            if (e4.code)
              switch (e4.code) {
                case 22:
                  t4 = true;
                  break;
                case 1014:
                  "NS_ERROR_DOM_QUOTA_REACHED" === e4.name && (t4 = true);
              }
            else
              -2147024882 === e4.number && (t4 = true);
            return t4;
          })(n4) && (this._swapEngine(), this.set(e3, t3));
        }
    }, Za2.prototype.get = function(e3) {
      try {
        var t3 = this.engine.getItem(this._createValidKey(e3));
        return null === t3 ? null : $a.parse(t3);
      } catch (e4) {
        return null;
      }
    }, Za2.prototype.getOriginalEngine = function() {
      return this.originalEngine;
    }, Za2.prototype.remove = function(e3) {
      this.engine.removeItem(this._createValidKey(e3));
    }, Za2.prototype._createValidKey = function(e3) {
      var t3, n3 = this.name, r3 = this.id;
      return Ja2(this.keys).length ? (Xa2(function(i3) {
        i3 === e3 && (t3 = [n3, r3, e3].join("."));
      }, this.keys), t3) : [n3, r3, e3].join(".");
    }, Za2.prototype._swapEngine = function() {
      var e3 = this;
      Xa2(function(t3) {
        var n3 = e3.get(t3);
        Ya2.setItem([e3.name, e3.id, t3].join("."), n3), e3.remove(t3);
      }, this.keys), this.engine = Ya2;
    };
    var eu = Za2;
    var tu = Va2, nu = { setTimeout: function(e3, t3) {
      return window.setTimeout(e3, t3);
    }, clearTimeout: function(e3) {
      return window.clearTimeout(e3);
    }, Date: window.Date }, ru = nu, iu = { ASAP: 1, RESCHEDULE: 2, ABANDON: 3 };
    function ou() {
      this.tasks = {}, this.nextId = 1;
    }
    ou.prototype.now = function() {
      return +new ru.Date();
    }, ou.prototype.run = function(e3, t3, n3) {
      var r3 = this.nextId++;
      return this.tasks[r3] = ru.setTimeout(this._handle(r3, e3, t3, n3 || iu.ASAP), t3), r3;
    }, ou.prototype.cancel = function(e3) {
      this.tasks[e3] && (ru.clearTimeout(this.tasks[e3]), delete this.tasks[e3]);
    }, ou.prototype.cancelAll = function() {
      tu(ru.clearTimeout, this.tasks), this.tasks = {};
    }, ou.prototype._handle = function(e3, t3, n3, r3) {
      var i3 = this, o4 = i3.now();
      return function() {
        if (delete i3.tasks[e3], !(r3 >= iu.RESCHEDULE && o4 + 2 * n3 < i3.now()))
          return t3();
        r3 === iu.RESCHEDULE && i3.run(t3, n3, r3);
      };
    }, ou.setClock = function(e3) {
      ru = e3;
    }, ou.resetClock = function() {
      ru = nu;
    }, ou.Modes = iu;
    var su = ou, au = Zs.v4, uu = eu, cu = Va2, lu = su, fu = Ao("localstorage-retry");
    function hu(e3, t3) {
      return function() {
        return e3.apply(t3, arguments);
      };
    }
    function du(e3, t3, n3) {
      "function" == typeof t3 && (n3 = t3), this.name = e3, this.id = au(), this.fn = n3, this.maxItems = t3.maxItems || 1 / 0, this.maxAttempts = t3.maxAttempts || 1 / 0, this.backoff = { MIN_RETRY_DELAY: t3.minRetryDelay || 1e3, MAX_RETRY_DELAY: t3.maxRetryDelay || 3e4, FACTOR: t3.backoffFactor || 2, JITTER: t3.backoffJitter || 0 }, this.timeouts = { ACK_TIMER: 1e3, RECLAIM_TIMER: 3e3, RECLAIM_TIMEOUT: 1e4, RECLAIM_WAIT: 500 }, this.keys = { IN_PROGRESS: "inProgress", QUEUE: "queue", RECLAIM_START: "reclaimStart", RECLAIM_END: "reclaimEnd", ACK: "ack" }, this._schedule = new lu(), this._processId = 0, this._store = new uu(this.name, this.id, this.keys), this._store.set(this.keys.IN_PROGRESS, {}), this._store.set(this.keys.QUEUE, []), this._ack = hu(this._ack, this), this._checkReclaim = hu(this._checkReclaim, this), this._processHead = hu(this._processHead, this), this._running = false;
    }
    p2(du.prototype), du.prototype.start = function() {
      this._running && this.stop(), this._running = true, this._ack(), this._checkReclaim(), this._processHead();
    }, du.prototype.stop = function() {
      this._schedule.cancelAll(), this._running = false;
    }, du.prototype.shouldRetry = function(e3, t3) {
      return !(t3 > this.maxAttempts);
    }, du.prototype.getDelay = function(e3) {
      var t3 = this.backoff.MIN_RETRY_DELAY * Math.pow(this.backoff.FACTOR, e3);
      if (this.backoff.JITTER) {
        var n3 = Math.random(), r3 = Math.floor(n3 * this.backoff.JITTER * t3);
        Math.floor(10 * n3) < 5 ? t3 -= r3 : t3 += r3;
      }
      return Number(Math.min(t3, this.backoff.MAX_RETRY_DELAY).toPrecision(1));
    }, du.prototype.addItem = function(e3) {
      this._enqueue({ item: e3, attemptNumber: 0, time: this._schedule.now(), id: au() });
    }, du.prototype.requeue = function(e3, t3, n3, r3) {
      this.shouldRetry(e3, t3, n3) ? this._enqueue({ item: e3, attemptNumber: t3, time: this._schedule.now() + this.getDelay(t3), id: r3 || au() }) : this.emit("discard", e3, t3);
    }, du.prototype._enqueue = function(e3) {
      var t3 = this._store.get(this.keys.QUEUE) || [];
      (t3 = t3.slice(-(this.maxItems - 1))).push(e3), t3 = t3.sort(function(e4, t4) {
        return e4.time - t4.time;
      }), this._store.set(this.keys.QUEUE, t3), this._running && this._processHead();
    }, du.prototype._processHead = function() {
      var e3 = this, t3 = this._store;
      this._schedule.cancel(this._processId);
      var n3 = t3.get(this.keys.QUEUE) || [], r3 = t3.get(this.keys.IN_PROGRESS) || {}, i3 = this._schedule.now(), o4 = [];
      function s3(n4, r4) {
        o4.push({ item: n4.item, done: function(i4, o5) {
          var s4 = t3.get(e3.keys.IN_PROGRESS) || {};
          delete s4[r4], t3.set(e3.keys.IN_PROGRESS, s4), e3.emit("processed", i4, o5, n4.item), i4 && e3.requeue(n4.item, n4.attemptNumber + 1, i4, n4.id);
        } });
      }
      for (var a3 = Object.keys(r3).length; n3.length && n3[0].time <= i3 && a3++ < e3.maxItems; ) {
        var u3 = n3.shift(), c3 = au();
        r3[c3] = { item: u3.item, attemptNumber: u3.attemptNumber, time: e3._schedule.now() }, s3(u3, c3);
      }
      t3.set(this.keys.QUEUE, n3), t3.set(this.keys.IN_PROGRESS, r3), cu(function(t4) {
        try {
          e3.fn(t4.item, t4.done);
        } catch (e4) {
          fu("Process function threw error: " + e4);
        }
      }, o4), n3 = t3.get(this.keys.QUEUE) || [], this._schedule.cancel(this._processId), n3.length > 0 && (this._processId = this._schedule.run(this._processHead, n3[0].time - i3, lu.Modes.ASAP));
    }, du.prototype._ack = function() {
      this._store.set(this.keys.ACK, this._schedule.now()), this._store.set(this.keys.RECLAIM_START, null), this._store.set(this.keys.RECLAIM_END, null), this._schedule.run(this._ack, this.timeouts.ACK_TIMER, lu.Modes.ASAP);
    }, du.prototype._checkReclaim = function() {
      var e3 = this;
      cu(function(t3) {
        t3.id !== e3.id && (e3._schedule.now() - t3.get(e3.keys.ACK) < e3.timeouts.RECLAIM_TIMEOUT || function(t4) {
          t4.set(e3.keys.RECLAIM_START, e3.id), t4.set(e3.keys.ACK, e3._schedule.now()), e3._schedule.run(function() {
            t4.get(e3.keys.RECLAIM_START) === e3.id && (t4.set(e3.keys.RECLAIM_END, e3.id), e3._schedule.run(function() {
              t4.get(e3.keys.RECLAIM_END) === e3.id && t4.get(e3.keys.RECLAIM_START) === e3.id && e3._reclaim(t4.id);
            }, e3.timeouts.RECLAIM_WAIT, lu.Modes.ABANDON));
          }, e3.timeouts.RECLAIM_WAIT, lu.Modes.ABANDON);
        }(t3));
      }, function(t3) {
        for (var n3 = [], r3 = e3._store.getOriginalEngine(), i3 = 0; i3 < r3.length; i3++) {
          var o4 = r3.key(i3).split(".");
          3 === o4.length && (o4[0] === t3 && "ack" === o4[2] && n3.push(new uu(t3, o4[1], e3.keys)));
        }
        return n3;
      }(this.name)), this._schedule.run(this._checkReclaim, this.timeouts.RECLAIM_TIMER, lu.Modes.RESCHEDULE);
    }, du.prototype._reclaim = function(e3) {
      var t3 = this, n3 = new uu(this.name, e3, this.keys), r3 = { queue: this._store.get(this.keys.QUEUE) || [] }, i3 = { inProgress: n3.get(this.keys.IN_PROGRESS) || {}, queue: n3.get(this.keys.QUEUE) || [] }, o4 = [], s3 = function(e4, n4) {
        cu(function(e5) {
          var i4 = e5.id || au();
          o4.indexOf(i4) >= 0 ? t3.emit("duplication", e5.item, e5.attemptNumber) : (r3.queue.push({ item: e5.item, attemptNumber: e5.attemptNumber + n4, time: t3._schedule.now(), id: i4 }), o4.push(i4));
        }, e4);
      };
      s3(i3.queue, 0), s3(i3.inProgress, 1), r3.queue = r3.queue.sort(function(e4, t4) {
        return e4.time - t4.time;
      }), this._store.set(this.keys.QUEUE, r3.queue), n3.remove(this.keys.IN_PROGRESS), n3.remove(this.keys.QUEUE), n3.remove(this.keys.RECLAIM_START), n3.remove(this.keys.RECLAIM_END), n3.remove(this.keys.ACK), this._processHead();
    };
    var pu = du, gu = { maxRetryDelay: 36e4, minRetryDelay: 1e3, backoffFactor: 2, maxAttempts: 10, maxItems: 100 }, yu = function() {
      function e3() {
        i2(this, e3), this.url = "", this.writeKey = "";
      }
      return s2(e3, [{ key: "init", value: function(e4, t3, n3) {
        this.url = t3, this.writeKey = e4, n3 && u2(gu, n3), this.payloadQueue = new pu("rudder", gu, function(e5, t4) {
          e5.message.sentAt = xs(), this.processQueueElement(e5.url, e5.headers, e5.message, 1e4, function(e6, n4) {
            if (e6)
              return t4(e6);
            t4(null, n4);
          });
        }.bind(this)), this.payloadQueue.start();
      } }, { key: "processQueueElement", value: function(e4, t3, n3, r3, i3) {
        try {
          var o4 = new XMLHttpRequest();
          for (var s3 in o4.open("POST", e4, true), t3)
            o4.setRequestHeader(s3, t3[s3]);
          o4.timeout = r3, o4.ontimeout = i3, o4.onerror = i3, o4.onreadystatechange = function() {
            4 === o4.readyState && (429 === o4.status || o4.status >= 500 && o4.status < 600 ? (_s(new Error("request failed with status: ".concat(o4.status).concat(o4.statusText, " for url: ").concat(e4))), i3(new Error("request failed with status: ".concat(o4.status).concat(o4.statusText, " for url: ").concat(e4)))) : i3(null, o4.status));
          }, o4.send(JSON.stringify(n3, Ts));
        } catch (e5) {
          i3(e5);
        }
      } }, { key: "enqueue", value: function(e4, t3) {
        var n3 = { "Content-Type": "application/json", Authorization: "Basic ".concat(btoa("".concat(this.writeKey, ":"))), AnonymousId: btoa(e4.anonymousId) };
        this.payloadQueue.addItem({ url: "".concat(this.url, "/v1/").concat(t3), headers: n3, message: e4 });
      } }]), e3;
    }(), vu = "queue", mu = 64e3, Iu = function() {
      function e3() {
        i2(this, e3), this.storage = as, this.maxItems = 10, this.flushQueueTimeOut = void 0, this.timeOutActive = false, this.flushQueueTimeOutInterval = 6e5, this.url = "", this.writekey = "", this.queueName = "".concat(vu, ".").concat(Date.now()), this.send = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
      }
      return s2(e3, [{ key: "sendQueueDataForBeacon", value: function() {
        this.sendDataFromQueueAndDestroyQueue();
      } }, { key: "init", value: function(e4, t3, n3) {
        this.url = t3, this.writekey = e4, n3.maxItems && (this.maxItems = n3.maxItems), n3.flushQueueInterval && (this.flushQueueTimeOutInterval = n3.flushQueueInterval);
        var r3 = this.sendQueueDataForBeacon.bind(this);
        window.addEventListener("unload", r3);
      } }, { key: "getQueue", value: function() {
        return this.storage.get(this.queueName);
      } }, { key: "setQueue", value: function(e4) {
        this.storage.set(this.queueName, e4);
      } }, { key: "enqueue", value: function(e4) {
        var t3 = this.getQueue() || [];
        (t3 = t3.slice(-(this.maxItems - 1))).push(e4);
        var n3 = t3.slice(0), r3 = { batch: n3 };
        JSON.stringify(r3, Ts).length > mu && (n3 = t3.slice(0, t3.length - 1), this.flushQueue(n3), (t3 = this.getQueue()).push(e4)), this.setQueue(t3), this.setTimer(), t3.length === this.maxItems && this.flushQueue(n3);
      } }, { key: "sendDataFromQueueAndDestroyQueue", value: function() {
        this.sendDataFromQueue(), this.storage.remove(this.queueName);
      } }, { key: "sendDataFromQueue", value: function() {
        var e4 = this.getQueue();
        if (e4 && e4.length > 0) {
          var t3 = e4.slice(0, e4.length);
          this.flushQueue(t3);
        }
      } }, { key: "flushQueue", value: function(e4) {
        e4.forEach(function(e5) {
          e5.sentAt = new Date().toISOString();
        });
        var t3 = { batch: e4 }, n3 = JSON.stringify(t3, Ts), r3 = new Blob([n3], { type: "text/plain" });
        try {
          this.send("".concat(this.url, "?writeKey=").concat(this.writekey), r3) || _s(new Error("Unable to queue data to browser's beacon queue"));
        } catch (e5) {
          _s(e5);
        }
        this.setQueue([]), this.clearTimer();
      } }, { key: "setTimer", value: function() {
        this.timeOutActive || (this.flushQueueTimeOut = setTimeout(this.sendDataFromQueue.bind(this), this.flushQueueTimeOutInterval), this.timeOutActive = true);
      } }, { key: "clearTimer", value: function() {
        this.timeOutActive && (clearTimeout(this.flushQueueTimeOut), this.timeOutActive = false);
      } }]), e3;
    }(), Au = function() {
      function e3() {
        i2(this, e3), this.queue = void 0;
      }
      return s2(e3, [{ key: "initialize", value: function(e4, t3, n3) {
        var i3 = {}, o4 = Rs(t3);
        n3 && n3.useBeacon && navigator.sendBeacon ? (n3 && n3.beaconQueueOptions && null != n3.beaconQueueOptions && "object" === r2(n3.beaconQueueOptions) && (i3 = n3.beaconQueueOptions), o4 = "".concat(o4, "/beacon/v1/batch"), this.queue = new Iu()) : (n3 && n3.useBeacon && dt("[EventRepository] sendBeacon feature not available in this browser :: fallback to XHR"), n3 && n3.queueOptions && null != n3.queueOptions && "object" === r2(n3.queueOptions) && (i3 = n3.queueOptions), this.queue = new yu()), this.queue.init(e4, o4, i3);
      } }, { key: "enqueue", value: function(e4, t3) {
        var n3 = e4.getElementContent();
        n3.originalTimestamp = n3.originalTimestamp || xs(), n3.sentAt = xs(), JSON.stringify(n3, Ts).length > 32e3 && yt("[EventRepository] enqueue:: message length greater 32 Kb ", n3), this.queue.enqueue(n3, t3);
      } }]), e3;
    }(), bu = new Au(), ku = function() {
      return navigator && navigator.language;
    }, Eu = function() {
      return navigator && navigator.userAgent;
    };
    function Su(e3) {
      return decodeURIComponent(atob(e3).split("").map(function(e4) {
        return "%".concat("00".concat(e4.charCodeAt(0).toString(16)).slice(-2));
      }).join(""));
    }
    function Cu() {
      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Su(e3 = e3.endsWith("..") ? e3.substr(0, e3.length - 2) : e3);
    }
    var wu = /^[a-zA-Z0-9\-_.]+$/, Ou = "*";
    function _u(e3, t3, n3, r3) {
      var i3 = function(e4, t4) {
        return [e4, new Date().getTimezoneOffset(), t4].join(Ou);
      }(n3, r3), o4 = t3 || 0, s3 = function(e4) {
        for (var t4 = function() {
          for (var e5, t5 = [], n5 = 0; n5 < 256; n5++) {
            e5 = n5;
            for (var r5 = 0; r5 < 8; r5++)
              e5 = 1 & e5 ? 3988292384 ^ e5 >>> 1 : e5 >>> 1;
            t5[n5] = e5;
          }
          return t5;
        }(), n4 = -1, r4 = 0; r4 < e4.length; r4++)
          n4 = n4 >>> 8 ^ t4[255 & (n4 ^ e4.charCodeAt(r4))];
        return (-1 ^ n4) >>> 0;
      }([i3, Math.floor(Date.now() / 6e4) - o4, e3].join(Ou));
      return s3.toString(36);
    }
    function Tu(e3) {
      var t3 = function(e4) {
        var t4 = e4.split(Ou), n4 = t4.length % 2 == 0;
        return t4.length < 4 || !n4 || 1 !== Number(t4.shift()) ? null : { checksum: t4.shift(), serializedIds: t4.join(Ou) };
      }(e3);
      if (!t3)
        return null;
      var n3 = t3.checksum, r3 = t3.serializedIds;
      return function(e4, t4) {
        for (var n4 = Eu(), r4 = ku(), i3 = 0; i3 <= 1; i3 += 1)
          if (_u(e4, i3, n4, r4) === t4)
            return true;
        return false;
      }(r3, n3) ? function(e4) {
        for (var t4 = {}, n4 = e4.split(Ou), r4 = 0; r4 < n4.length; r4 += 2) {
          var i3 = n4[r4];
          if (wu.test(i3)) {
            var o4 = Cu(n4[r4 + 1]);
            t4[i3] = o4;
          }
        }
        return t4;
      }(r3) : null;
    }
    var Ru = { HS: "HubSpot", GA: "GA", HOTJAR: "Hotjar", GOOGLEADS: "GoogleAds", VWO: "VWO", GTM: "GoogleTagManager", BRAZE: "Braze", INTERCOM: "INTERCOM", KEEN: "Keen", KISSMETRICS: "Kissmetrics", CUSTOMERIO: "CustomerIO", CHARTBEAT: "Chartbeat", COMSCORE: "Comscore", FACEBOOK_PIXEL: "FacebookPixel", LOTAME: "Lotame", OPTIMIZELY: "Optimizely", BUGSNAG: "Bugsnag", FULLSTORY: "Fullstory", TVSQUARED: "TVSquared", GA4: "GA4", MOENGAGE: "MoEngage", AM: "Amplitude", PENDO: "Pendo", LYTICS: "Lytics", APPCUES: "Appcues", POSTHOG: "Posthog", KLAVIYO: "Klaviyo", CLEVERTAP: "Clevertap", BINGADS: "BingAds", PINTEREST_TAG: "PinterestTag", ADOBE_ANALYTICS: "AdobeAnalytics", LINKEDIN_INSIGHT_TAG: "LinkedInInsightTag", REDDIT_PIXEL: "RedditPixel", DRIP: "Drip", HEAP: "Heap", CRITEO: "Criteo", MP: "Mixpanel", QUALTRICS: "Qualtrics", PROFITWELL: "ProfitWell", SENTRY: "Sentry", QUANTUMMETRIC: "QuantumMetric", SNAP_PIXEL: "SnapPixel", POST_AFFILIATE_PRO: "PostAffiliatePro", GOOGLE_OPTIMIZE: "GoogleOptimize", LAUNCHDARKLY: "LaunchDarkly", GA360: "GA360", ADROLL: "Adroll", DCM_FLOODLIGHT: "DCMFloodlight", MATOMO: "Matomo", VERO: "Vero", MOUSEFLOW: "Mouseflow", ROCKERBOX: "Rockerbox", CONVERTFLOW: "ConvertFlow", SNAPENGAGE: "SnapEngage", LIVECHAT: "LiveChat", SHYNET: "Shynet", WOOPRA: "Woopra", ROLLBAR: "RollBar", QUORA_PIXEL: "QuoraPixel", JUNE: "June", ENGAGE: "Engage", ITERABLE: "Iterable", YANDEX_METRICA: "YandexMetrica", REFINER: "Refiner", QUALAROO: "Qualaroo", PODSIGHTS: "Podsights", AXEPTIO: "Axeptio", SATISMETER: "Satismeter", MICROSOFT_CLARITY: "MicrosoftClarity", SENDINBLUE: "Sendinblue", OLARK: "Olark", LEMNISK: "Lemnisk" }, Pu = function() {
      function e3() {
        var t3 = this;
        if (i2(this, e3), !window.OneTrust || !window.OnetrustActiveGroups)
          throw new Error("OneTrust resources are not accessible. Thus all the destinations will be loaded");
        this.userSetConsentGroupIds = window.OnetrustActiveGroups.split(",").filter(function(e4) {
          return e4;
        });
        var n3 = window.OneTrust.GetDomainData().Groups;
        this.userSetConsentGroupNames = [], this.userDeniedConsentGroupIds = [], n3.forEach(function(e4) {
          var n4 = e4.CustomGroupId, r3 = e4.GroupName;
          t3.userSetConsentGroupIds.includes(n4) ? t3.userSetConsentGroupNames.push(r3.toUpperCase().trim()) : t3.userDeniedConsentGroupIds.push(n4);
        }), this.userSetConsentGroupIds = this.userSetConsentGroupIds.map(function(e4) {
          return e4.toUpperCase();
        });
      }
      return s2(e3, [{ key: "isEnabled", value: function(e4) {
        var t3 = this;
        try {
          var n3 = e4.oneTrustCookieCategories;
          if (!n3)
            return true;
          var r3 = n3.map(function(e5) {
            return e5.oneTrustCookieCategory;
          }).filter(function(e5) {
            return e5;
          });
          return r3.every(function(e5) {
            return t3.userSetConsentGroupIds.includes(e5.toUpperCase().trim()) || t3.userSetConsentGroupNames.includes(e5.toUpperCase().trim());
          });
        } catch (e5) {
          return yt("Error during onetrust cookie consent management ".concat(e5)), true;
        }
      } }, { key: "getDeniedList", value: function() {
        return this.userDeniedConsentGroupIds;
      } }]), e3;
    }(), xu = function() {
      function e3() {
        i2(this, e3);
      }
      return s2(e3, null, [{ key: "initialize", value: function(e4) {
        var t3;
        return null != e4 && null !== (t3 = e4.oneTrust) && void 0 !== t3 && t3.enabled ? new Pu() : null;
      } }]), e3;
    }(), Lu = { SDK: { name: "JS", installType: "npm" } }, Mu = "{{RS_BUGSNAG_API_KEY}}", Du = ["rudder-analytics.min.js"].concat(c2(Object.keys(Ru).map(function(e3) {
      return "".concat(Ru[e3], ".min.js");
    })));
    function Nu(e3) {
      if (void 0 !== window.Bugsnag) {
        if (null === Mu.match(/{{.+}}/)) {
          var t3 = window.location.hostname;
          window.rsBugsnagClient = window.Bugsnag.start({ apiKey: Mu, appVersion: "2.27.0", metadata: Lu, onError: function(t4) {
            try {
              var n3 = D2(t4, "errors.0.stacktrace.0.file");
              if (!n3 || "string" != typeof n3)
                return false;
              var r3 = n3.substring(n3.lastIndexOf("/") + 1);
              if (!Du.includes(r3))
                return false;
              t4.addMetadata("source", { sourceId: e3 });
              var i3 = t4.errors[0].errorMessage;
              return t4.context = i3, i3.includes("error in script loading") && (t4.context = "Script load failures"), t4.severity = "error", true;
            } catch (e4) {
              return false;
            }
          }, autoTrackSessions: false, collectUserIp: false, enabledBreadcrumbTypes: ["error", "log", "user"], maxEvents: 100, releaseStage: t3 && ["localhost", "127.0.0.1", "[::1]"].includes(t3) ? "development" : "production" });
        }
      }
    }
    var Bu = new (function() {
      function e3() {
        i2(this, e3), this.storage = Es, this.timeout = 18e5, this.sessionInfo = this.storage.getSessionInfo() || { autoTrack: true };
      }
      return s2(e3, [{ key: "initialize", value: function(e4) {
        try {
          var t3;
          if (this.sessionInfo.autoTrack = !(false === (null == e4 || null === (t3 = e4.sessions) || void 0 === t3 ? void 0 : t3.autoTrack) || this.sessionInfo.manualTrack), null != e4 && e4.sessions && !isNaN(e4.sessions.timeout)) {
            var n3 = e4.sessions.timeout;
            0 === n3 && (gt("[Session]:: Provided timeout value 0 will disable the auto session tracking feature."), this.sessionInfo.autoTrack = false), n3 > 0 && n3 < 1e4 && gt('[Session]:: It is not advised to set "timeout" less than 10 seconds'), this.timeout = n3;
          }
          this.sessionInfo.autoTrack ? this.startAutoTracking() : false !== this.sessionInfo.autoTrack || this.sessionInfo.manualTrack || this.end();
        } catch (e5) {
          _s(e5);
        }
      } }, { key: "isValidSession", value: function(e4) {
        return e4 <= this.sessionInfo.expiresAt;
      } }, { key: "generateSessionId", value: function() {
        return Date.now();
      } }, { key: "startAutoTracking", value: function() {
        var e4 = Date.now();
        this.isValidSession(e4) || (this.sessionInfo = {}, this.sessionInfo.id = e4, this.sessionInfo.expiresAt = e4 + this.timeout, this.sessionInfo.sessionStart = true, this.sessionInfo.autoTrack = true), this.storage.setSessionInfo(this.sessionInfo);
      } }, { key: "validateSessionId", value: function(e4) {
        if ("number" == typeof e4 && e4 % 1 == 0) {
          var t3;
          if (!(((t3 = e4) ? t3.toString().length : 0) < 10))
            return e4;
          yt('[Session]:: "sessionId" should at least be "'.concat(10, '" digits long'));
        } else
          yt('[Session]:: "sessionId" should only be a positive integer');
      } }, { key: "start", value: function(e4) {
        var t3 = e4 ? this.validateSessionId(e4) : this.generateSessionId();
        this.sessionInfo = { id: t3 || this.generateSessionId(), sessionStart: true, manualTrack: true }, this.storage.setSessionInfo(this.sessionInfo);
      } }, { key: "getSessionId", value: function() {
        return this.sessionInfo.autoTrack && this.isValidSession(Date.now()) || this.sessionInfo.manualTrack ? this.sessionInfo.id : null;
      } }, { key: "end", value: function() {
        this.sessionInfo = {}, this.storage.removeSessionInfo();
      } }, { key: "getSessionInfo", value: function() {
        var e4 = {};
        if (this.sessionInfo.autoTrack || this.sessionInfo.manualTrack) {
          if (this.sessionInfo.autoTrack) {
            var t3 = Date.now();
            this.isValidSession(t3) ? this.sessionInfo.expiresAt = t3 + this.timeout : this.startAutoTracking();
          }
          this.sessionInfo.sessionStart && (e4.sessionStart = true, this.sessionInfo.sessionStart = false), e4.sessionId = this.sessionInfo.id, this.storage.setSessionInfo(this.sessionInfo);
        }
        return e4;
      } }, { key: "reset", value: function() {
        var e4 = this.sessionInfo, t3 = e4.manualTrack;
        e4.autoTrack ? (this.sessionInfo = {}, this.startAutoTracking()) : t3 && this.start();
      } }]), e3;
    }())(), Fu = function(e3, t3) {
      if (!Array.isArray(e3) || !Array.isArray(t3))
        return _2(t3);
      var n3 = _2(e3);
      return t3.forEach(function(e4, t4) {
        n3[t4] = Uu(n3[t4], e4);
      }), n3;
    }, Uu = function(e3, t3) {
      return x(Fu, e3, t3);
    }, ju = ["integrations", "anonymousId", "originalTimestamp"], Gu = function() {
      function e3() {
        i2(this, e3), this.initialized = false, this.clientIntegrations = [], this.loadOnlyIntegrations = {}, this.clientIntegrationObjects = void 0, this.successfullyLoadedIntegration = [], this.failedToBeLoadedIntegration = [], this.toBeProcessedArray = [], this.toBeProcessedByIntegrationArray = [], this.storage = Es, this.eventRepository = bu, this.sendAdblockPage = false, this.sendAdblockPageOptions = {}, this.clientSuppliedCallbacks = {}, this.readyCallbacks = [], this.methodToCallbackMapping = { syncPixel: "syncPixelCallback" }, this.loaded = false, this.loadIntegration = true, this.integrationsData = {}, this.dynamicallyLoadedIntegrations = {}, this.destSDKBaseURL = si2, this.cookieConsentOptions = {}, this.logLevel = void 0, this.clientIntegrationsReady = false, this.uSession = Bu, this.version = "2.27.0", this.lockIntegrationsVersion = false, this.deniedConsentIds = [];
      }
      return s2(e3, [{ key: "initializeUser", value: function(e4) {
        this.userId = this.storage.getUserId() || "", this.storage.setUserId(this.userId), this.userTraits = this.storage.getUserTraits() || {}, this.storage.setUserTraits(this.userTraits), this.groupId = this.storage.getGroupId() || "", this.storage.setGroupId(this.groupId), this.groupTraits = this.storage.getGroupTraits() || {}, this.storage.setGroupTraits(this.groupTraits), this.anonymousId = this.getAnonymousId(e4), this.storage.setAnonymousId(this.anonymousId);
      } }, { key: "setInitialPageProperties", value: function() {
        if (null == this.storage.getInitialReferrer() && null == this.storage.getInitialReferringDomain()) {
          var e4 = Ms();
          this.storage.setInitialReferrer(e4), this.storage.setInitialReferringDomain(Ds(e4));
        }
      } }, { key: "allModulesInitialized", value: function() {
        var e4 = this, t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Promise(function(n3) {
          e4.clientIntegrations.every(function(t4) {
            return null != e4.dynamicallyLoadedIntegrations["".concat(Ru[t4.name]).concat(ci2)];
          }) || t3 >= 2e4 ? n3(e4) : e4.pause(ui2).then(function() {
            return e4.allModulesInitialized(t3 + ui2).then(n3);
          });
        });
      } }, { key: "executeReadyCallback", value: function() {
        this.readyCallbacks.forEach(function(e4) {
          return e4();
        });
      } }, { key: "integrationSDKLoaded", value: function(e4, t3) {
        try {
          return window.hasOwnProperty(e4) && window[e4][t3] && void 0 !== window[e4][t3].prototype.constructor;
        } catch (e5) {
          return _s(e5), false;
        }
      } }, { key: "processResponse", value: function(e4, t3) {
        var n3, i3 = this;
        try {
          var o4 = t3;
          try {
            if ("string" == typeof t3 && (o4 = JSON.parse(t3)), !o4 || "object" !== r2(o4) || Array.isArray(o4))
              throw new Error("Invalid source configuration");
          } catch (e5) {
            return void _s(e5);
          }
          if (true === D2(o4.source.config, "statsCollection.errorReports.enabled")) {
            var s3 = D2(o4.source.config, "statsCollection.errorReports.provider") || li2;
            fi2.includes(s3) || yt("Invalid error reporting provider value"), "bugsnag" === s3 && (n3 = "bugsnag", window.hasOwnProperty(n3) || Cs(n3, "https://d2wy8f7a9ursnm.cloudfront.net/v7/bugsnag.min.js", { isNonNativeSDK: "true" }), function(e5) {
              if (!window.hasOwnProperty("rsBugsnagClient"))
                if (void 0 !== window.Bugsnag)
                  Nu(e5);
                else {
                  var t4 = setInterval(function() {
                    void 0 !== window.Bugsnag && (clearInterval(t4), Nu(e5));
                  }, 100);
                  setTimeout(function() {
                    clearInterval(t4);
                  }, ai2);
                }
            }(o4.source.id));
          }
          if (this.serverUrl = Ks(o4, this.serverUrl, this.options), this.eventRepository.initialize(this.writeKey, this.serverUrl, this.options), this.loaded = true, this.options && "function" == typeof this.options.onLoaded && this.options.onLoaded(this), function(e5) {
            if (e5.toBeProcessedArray.length > 0)
              for (; e5.toBeProcessedArray.length > 0; ) {
                var t4 = c2(e5.toBeProcessedArray[0]);
                e5.toBeProcessedArray.shift();
                var n4 = t4[0];
                t4.shift(), e5[n4].apply(e5, c2(t4));
              }
          }(this), o4.source.destinations.forEach(function(e5) {
            e5.enabled && this.clientIntegrations.push({ name: e5.destinationDefinition.name, config: e5.config });
          }, this), this.clientIntegrations = Us(this.loadOnlyIntegrations, this.clientIntegrations), Object.keys(this.cookieConsentOptions).length > 0)
            try {
              var a3 = xu.initialize(this.cookieConsentOptions);
              this.deniedConsentIds = a3 && a3.getDeniedList(), this.clientIntegrations = this.clientIntegrations.filter(function(e5) {
                return !a3 || a3 && a3.isEnabled(e5.config);
              });
            } catch (e5) {
              _s(e5);
            }
          var u3 = "";
          Gs().isStaging && (u3 = "-staging"), ws("Starting device-mode initialization"), this.clientIntegrations.forEach(function(e5) {
            var t4 = Ru[e5.name], n4 = "".concat(t4).concat(ci2), r3 = "".concat(i3.destSDKBaseURL, "/").concat(t4).concat(u3, ".min.js");
            window.hasOwnProperty(n4) || Cs(n4, r3, { isNonNativeSDK: true });
            var o5 = i3, s4 = setInterval(function() {
              if (o5.integrationSDKLoaded(n4, t4)) {
                var r4, i4 = window[n4];
                clearInterval(s4);
                try {
                  ws("[Analytics] processResponse :: trying to initialize integration name:: ".concat(n4)), (r4 = new i4[t4](e5.config, o5)).init(), o5.isInitialized(r4).then(function() {
                    o5.dynamicallyLoadedIntegrations[n4] = i4[t4];
                  });
                } catch (e6) {
                  _s(e6, "[Analytics] 'integration.init()' failed :: ".concat(n4, " :: ").concat(e6.message)), o5.failedToBeLoadedIntegration.push(r4);
                }
              }
            }, 100);
            setTimeout(function() {
              clearInterval(s4);
            }, ai2);
          });
          var l3 = this;
          this.allModulesInitialized().then(function() {
            if (!l3.clientIntegrations || 0 === l3.clientIntegrations.length)
              return i3.clientIntegrationsReady = true, i3.executeReadyCallback(), void (i3.toBeProcessedByIntegrationArray = []);
            l3.replayEvents(l3);
          });
        } catch (e5) {
          _s(e5);
        }
      } }, { key: "replayEvents", value: function(e4) {
        var t3, n3, r3;
        ws("Started replaying buffered events"), e4.clientIntegrationObjects = [], e4.clientIntegrationObjects = e4.successfullyLoadedIntegration, e4.clientIntegrationObjects.every(function(e5) {
          return !e5.isReady || e5.isReady();
        }) && (this.integrationsData = (t3 = this.integrationsData, n3 = e4.clientIntegrationObjects, r3 = _2(t3), n3.forEach(function(e5) {
          if (e5.getDataForIntegrationsObject)
            try {
              r3 = Uu(r3, e5.getDataForIntegrationsObject());
            } catch (e6) {
              pt("[Analytics: prepareDataForIntegrationsObj]", e6);
            }
        }), r3), e4.clientIntegrationsReady = true, e4.executeReadyCallback()), e4.toBeProcessedByIntegrationArray.forEach(function(t4) {
          var n4 = t4[0];
          t4.shift(), Object.keys(t4[0].message.integrations).length > 0 && Fs(t4[0].message.integrations);
          var r4, i3 = function(e5, t5) {
            var n5 = "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
            if (!n5) {
              if (Array.isArray(e5) || (n5 = l2(e5)) || t5 && e5 && "number" == typeof e5.length) {
                n5 && (e5 = n5);
                var r5 = 0, i4 = function() {
                };
                return { s: i4, n: function() {
                  return r5 >= e5.length ? { done: true } : { done: false, value: e5[r5++] };
                }, e: function(e6) {
                  throw e6;
                }, f: i4 };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var o5, s4 = true, a3 = false;
            return { s: function() {
              n5 = n5.call(e5);
            }, n: function() {
              var e6 = n5.next();
              return s4 = e6.done, e6;
            }, e: function(e6) {
              a3 = true, o5 = e6;
            }, f: function() {
              try {
                s4 || null == n5.return || n5.return();
              } finally {
                if (a3)
                  throw o5;
              }
            } };
          }(Us(t4[0].message.integrations, e4.clientIntegrationObjects));
          try {
            for (i3.s(); !(r4 = i3.n()).done; ) {
              var o4 = r4.value;
              try {
                if ((!o4.isFailed || !o4.isFailed()) && o4[n4]) {
                  if (!e4.IsEventBlackListed(t4[0].message.event, o4.name)) {
                    var s3 = _2(t4);
                    o4[n4].apply(o4, c2(s3));
                  }
                }
              } catch (e5) {
                _s(e5);
              }
            }
          } catch (e5) {
            i3.e(e5);
          } finally {
            i3.f();
          }
        }), e4.toBeProcessedByIntegrationArray = [];
      } }, { key: "pause", value: function(e4) {
        return new Promise(function(t3) {
          setTimeout(t3, e4);
        });
      } }, { key: "isInitialized", value: function(e4) {
        var t3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Promise(function(r3) {
          e4.isLoaded() ? (t3.successfullyLoadedIntegration.push(e4), r3(t3)) : n3 >= ai2 ? (t3.failedToBeLoadedIntegration.push(e4), r3(t3)) : t3.pause(ui2).then(function() {
            return t3.isInitialized(e4, n3 + ui2).then(r3);
          });
        });
      } }, { key: "page", value: function(e4, t3, n3, i3, o4) {
        if (ws("Page event"), this.loaded) {
          "function" == typeof i3 && (o4 = i3, i3 = null), "function" == typeof n3 && (o4 = n3, i3 = n3 = null), "function" == typeof t3 && (o4 = t3, i3 = n3 = t3 = null), "function" == typeof e4 && (o4 = e4, i3 = n3 = t3 = e4 = null), "object" === r2(e4) && null != e4 && null != e4 && (i3 = t3, n3 = e4, t3 = e4 = null), "object" === r2(t3) && null != t3 && null != t3 && (i3 = n3, n3 = t3, t3 = null), "string" == typeof e4 && "string" != typeof t3 && (t3 = e4, e4 = null), this.sendAdblockPage && "RudderJS-Initiated" != e4 && this.sendSampleRequest();
          var s3 = new $s().setType("page").build();
          n3 || (n3 = {}), t3 && (s3.message.name = n3.name = t3), e4 && (s3.message.category = n3.category = e4), s3.message.properties = this.getPageProperties(n3), this.processAndSendDataToDestinations("page", s3, i3, o4);
        } else
          this.toBeProcessedArray.push(["page"].concat(Array.prototype.slice.call(arguments)));
      } }, { key: "track", value: function(e4, t3, n3, r3) {
        if (ws("Track event"), this.loaded) {
          "function" == typeof n3 && (r3 = n3, n3 = null), "function" == typeof t3 && (r3 = t3, n3 = null, t3 = null);
          var i3 = new $s().setType("track").build();
          e4 && i3.setEventName(e4), i3.setProperty(t3 || {}), this.processAndSendDataToDestinations("track", i3, n3, r3);
        } else
          this.toBeProcessedArray.push(["track"].concat(Array.prototype.slice.call(arguments)));
      } }, { key: "identify", value: function(e4, t3, n3, i3) {
        if (ws("Identify event"), this.loaded) {
          if ("function" == typeof n3 && (i3 = n3, n3 = null), "function" == typeof t3 && (i3 = t3, n3 = null, t3 = null), "object" === r2(e4) && (n3 = t3, t3 = e4, e4 = this.userId), e4 && this.userId && e4 !== this.userId && this.reset(), this.userId = zs(e4), this.storage.setUserId(this.userId), t3) {
            for (var o4 in t3)
              this.userTraits[o4] = t3[o4];
            this.storage.setUserTraits(this.userTraits);
          }
          var s3 = new $s().setType("identify").build();
          this.processAndSendDataToDestinations("identify", s3, n3, i3);
        } else
          this.toBeProcessedArray.push(["identify"].concat(Array.prototype.slice.call(arguments)));
      } }, { key: "alias", value: function(e4, t3, n3, i3) {
        if (ws("Alias event"), this.loaded) {
          "function" == typeof n3 && (i3 = n3, n3 = null), "function" == typeof t3 && (i3 = t3, n3 = null, t3 = null), "function" == typeof e4 && (i3 = e4, n3 = null, t3 = null, e4 = null), "object" === r2(t3) && (n3 = t3, t3 = null), "object" === r2(e4) && (n3 = e4, t3 = null, e4 = null);
          var o4 = new $s().setType("alias").build();
          o4.message.previousId = zs(t3) || (this.userId ? this.userId : this.getAnonymousId()), o4.message.userId = zs(e4), this.processAndSendDataToDestinations("alias", o4, n3, i3);
        } else
          this.toBeProcessedArray.push(["alias"].concat(Array.prototype.slice.call(arguments)));
      } }, { key: "group", value: function(e4, t3, n3, i3) {
        if (ws("Group event"), this.loaded) {
          if (0 !== arguments.length) {
            "function" == typeof n3 && (i3 = n3, n3 = null), "function" == typeof t3 && (i3 = t3, n3 = null, t3 = null), "object" === r2(e4) && (n3 = t3, t3 = e4, e4 = this.groupId), "function" == typeof e4 && (i3 = e4, n3 = null, t3 = null, e4 = this.groupId), this.groupId = zs(e4), this.storage.setGroupId(this.groupId);
            var o4 = new $s().setType("group").build();
            if (t3)
              for (var s3 in t3)
                this.groupTraits[s3] = t3[s3];
            else
              this.groupTraits = {};
            this.storage.setGroupTraits(this.groupTraits), this.processAndSendDataToDestinations("group", o4, n3, i3);
          }
        } else
          this.toBeProcessedArray.push(["group"].concat(Array.prototype.slice.call(arguments)));
      } }, { key: "IsEventBlackListed", value: function(e4, t3) {
        if (!e4 || "string" != typeof e4)
          return false;
        var n3 = ei2[t3], r3 = this.clientIntegrations.find(function(e5) {
          return e5.name === n3;
        }).config, i3 = r3.blacklistedEvents, o4 = r3.whitelistedEvents, s3 = r3.eventFilteringOption;
        if (!s3)
          return false;
        var a3 = e4.trim().toUpperCase();
        switch (s3) {
          case "disable":
          default:
            return false;
          case "blacklistedEvents":
            return !!Array.isArray(i3) && i3.some(function(e5) {
              return e5.eventName.trim().toUpperCase() === a3;
            });
          case "whitelistedEvents":
            return !Array.isArray(o4) || !o4.some(function(e5) {
              return e5.eventName.trim().toUpperCase() === a3;
            });
        }
      } }, { key: "processAndSendDataToDestinations", value: function(e4, t3, r3, i3) {
        var o4, s3, a3 = this;
        try {
          this.anonymousId || this.setAnonymousId(), ws("Started sending data to destinations"), t3.message.context.traits = n2({}, this.userTraits), t3.message.anonymousId = this.anonymousId, t3.message.userId = t3.message.userId ? t3.message.userId : this.userId, "group" == e4 && (this.groupId && (t3.message.groupId = this.groupId), this.groupTraits && (t3.message.traits = n2({}, this.groupTraits)));
          try {
            var u3 = this.uSession.getSessionInfo(), c3 = u3.sessionId, l3 = u3.sessionStart;
            t3.message.context.sessionId = c3, l3 && (t3.message.context.sessionStart = true);
          } catch (e5) {
            _s(e5);
          }
          o4 = this.cookieConsentOptions, s3 = false, Object.keys(o4).forEach(function(e5) {
            pi2.includes(e5) && "boolean" == typeof o4[e5].enabled && true === o4[e5].enabled && (s3 = true);
          }), s3 && (t3.message.context.consentManagement = { deniedConsentIds: this.deniedConsentIds }), this.processOptionsParam(t3, r3), function(e5, t4) {
            var n3 = e5.properties, r4 = e5.traits;
            n3 && Object.keys(n3).forEach(function(e6) {
              ni2.indexOf(e6.toLowerCase()) >= 0 && yt("Warning! : Reserved keyword used in properties--> ".concat(e6, " with ").concat(t4, " call"));
            }), r4 && Object.keys(r4).forEach(function(e6) {
              ni2.indexOf(e6.toLowerCase()) >= 0 && yt("Warning! : Reserved keyword used in traits--> ".concat(e6, " with ").concat(t4, " call"));
            });
            var i4 = e5.context.traits;
            i4 && Object.keys(i4).forEach(function(e6) {
              ni2.indexOf(e6.toLowerCase()) >= 0 && yt("Warning! : Reserved keyword used in traits --> ".concat(e6, " with ").concat(t4, " call"));
            });
          }(t3.message, e4);
          var f3 = t3.message.integrations || { All: true };
          Fs(f3), t3.message.integrations = f3;
          try {
            t3.message.context["ua-ch"] = this.uach;
          } catch (e5) {
            _s(e5);
          }
          if (this.clientIntegrationObjects)
            Us(f3, this.clientIntegrationObjects).forEach(function(n3) {
              try {
                if ((!n3.isFailed || !n3.isFailed()) && n3[e4]) {
                  if (!a3.IsEventBlackListed(t3.message.event, n3.name)) {
                    var r4 = _2(t3);
                    n3[e4](r4);
                  }
                }
              } catch (e5) {
                _s(e5, "[sendToNative]:: [Destination: ".concat(n3.name, "]:: "));
              }
            });
          else
            this.toBeProcessedByIntegrationArray.push([e4, t3]);
          Bs(t3.message.integrations, ti2), t3.message.integrations = function(e5, t4) {
            var n3 = _2(e5), r4 = Object.keys(t4).filter(function(e6) {
              return !(true === t4[e6] && n3[e6]);
            }).reduce(function(e6, n4) {
              return e6[n4] = t4[n4], e6;
            }, {});
            return Uu(n3, r4);
          }(this.integrationsData, f3), this.eventRepository.enqueue(t3, e4), i3 && i3(t3);
        } catch (e5) {
          _s(e5);
        }
      } }, { key: "utm", value: function(e4) {
        var t3;
        "?" === e4.charAt(0) && (e4 = e4.substring(1)), e4 = e4.replace(/\?/g, "&");
        var n3 = A2(e4), r3 = {};
        for (var i3 in n3)
          Object.prototype.hasOwnProperty.call(n3, i3) && "utm_" === i3.substr(0, 4) && ("campaign" === (t3 = i3.substr(4)) && (t3 = "name"), r3[t3] = n3[i3]);
        return r3;
      } }, { key: "addCampaignInfo", value: function(e4) {
        var t3 = e4.message.context;
        if (t3 && "object" === r2(t3)) {
          var n3 = Ls().search;
          e4.message.context.campaign = this.utm(n3);
        }
      } }, { key: "processOptionsParam", value: function(e4, t3) {
        var i3 = e4.message, o4 = i3.type, s3 = i3.properties;
        this.addCampaignInfo(e4), e4.message.context.page = this.getContextPageProperties("page" === o4 ? s3 : void 0), function(e5) {
          var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          "object" === r2(t4) && null !== t4 && Object.keys(t4).forEach(function(n3) {
            ju.includes(n3) && (e5[n3] = t4[n3]);
          });
        }(e4.message, t3), e4.message.context = function(e5) {
          var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i4 = e5.context;
          return "object" !== r2(t4) || null === t4 || Object.keys(t4).forEach(function(e6) {
            if (!ju.includes(e6) && !gi2.includes(e6))
              if ("context" !== e6)
                i4 = Uu(i4, a2({}, e6, t4[e6]));
              else if ("object" === r2(t4[e6]) && null !== t4[e6]) {
                var o5 = {};
                Object.keys(t4[e6]).forEach(function(n3) {
                  gi2.includes(n3) || (o5[n3] = t4[e6][n3]);
                }), i4 = Uu(i4, n2({}, o5));
              } else
                yt("[Analytics: processOptionsParam] context passed in options ".concat(e6, " is not object."));
          }), i4;
        }(e4.message, t3);
      } }, { key: "getPageProperties", value: function(e4, t3) {
        var n3 = Ls(), r3 = t3 && t3.page || {};
        for (var i3 in n3)
          void 0 === e4[i3] && (e4[i3] = r3[i3] || n3[i3]);
        return e4;
      } }, { key: "getContextPageProperties", value: function(e4) {
        var t3 = Ls(), n3 = {};
        for (var r3 in t3)
          n3[r3] = e4 && e4[r3] ? e4[r3] : t3[r3];
        return n3;
      } }, { key: "reset", value: function(e4) {
        ws("reset API :: flag: ".concat(e4)), this.loaded ? (e4 && (this.anonymousId = ""), this.userId = "", this.userTraits = {}, this.groupId = "", this.groupTraits = {}, this.uSession.reset(), this.storage.clear(e4)) : this.toBeProcessedArray.push(["reset", e4]);
      } }, { key: "getAnonymousId", value: function(e4) {
        return this.anonymousId = this.storage.getAnonymousId(e4), this.anonymousId || this.setAnonymousId(), this.anonymousId;
      } }, { key: "getUserId", value: function() {
        return this.userId;
      } }, { key: "getSessionId", value: function() {
        return this.uSession.getSessionId();
      } }, { key: "getUserTraits", value: function() {
        return this.userTraits;
      } }, { key: "getGroupId", value: function() {
        return this.groupId;
      } }, { key: "getGroupTraits", value: function() {
        return this.groupTraits;
      } }, { key: "setAnonymousId", value: function(e4, t3) {
        var n3 = t3 ? Tu(t3) : null, r3 = n3 ? n3.rs_amp_id : null;
        this.anonymousId = e4 || r3 || Ps(), this.storage.setAnonymousId(this.anonymousId);
      } }, { key: "isValidWriteKey", value: function(e4) {
        return e4 && "string" == typeof e4 && e4.trim().length > 0;
      } }, { key: "isValidServerUrl", value: function(e4) {
        return e4 && "string" == typeof e4 && e4.trim().length > 0;
      } }, { key: "isDatasetAvailable", value: function() {
        var e4 = document.createElement("div");
        return e4.setAttribute("data-a-b", "c"), !!e4.dataset && "c" === e4.dataset.aB;
      } }, { key: "loadAfterPolyfill", value: function(e4, t3, i3) {
        var o4 = this;
        if ("object" === r2(t3) && null !== t3 && (i3 = t3, t3 = null), i3 && i3.logLevel && (this.logLevel = i3.logLevel, ht(i3.logLevel)), !this.isValidWriteKey(e4))
          throw Error("Unable to load the SDK due to invalid writeKey");
        if (!this.storage || 0 === Object.keys(this.storage).length)
          throw Error("Cannot proceed as no storage is available");
        i3 && i3.cookieConsentManager && (this.cookieConsentOptions = _2(i3.cookieConsentManager)), this.writeKey = e4, this.serverUrl = t3, this.options = i3;
        var s3 = {};
        if (i3 && i3.setCookieDomain && (s3 = n2(n2({}, s3), {}, { domain: i3.setCookieDomain })), i3 && "boolean" == typeof i3.secureCookie && (s3 = n2(n2({}, s3), {}, { secure: i3.secureCookie })), i3 && hi2.includes(i3.sameSiteCookie) && (s3 = n2(n2({}, s3), {}, { samesite: i3.sameSiteCookie })), this.storage.options(s3), i3 && "string" == typeof i3.uaChTrackLevel && yi2.includes(i3.uaChTrackLevel) && (this.uaChTrackLevel = i3.uaChTrackLevel), navigator.userAgentData && function(e5) {
          var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
          "none" === t4 && e5(void 0), "default" === t4 && e5(navigator.userAgentData), "full" === t4 && navigator.userAgentData.getHighEntropyValues(["architecture", "bitness", "brands", "mobile", "model", "platform", "platformVersion", "uaFullVersion", "fullVersionList", "wow64"]).then(function(t5) {
            e5(t5);
          });
        }(function(e5) {
          o4.uach = e5;
        }, this.uaChTrackLevel), i3 && i3.integrations && (u2(this.loadOnlyIntegrations, i3.integrations), Fs(this.loadOnlyIntegrations)), i3 && i3.sendAdblockPage && (this.sendAdblockPage = true), i3 && i3.sendAdblockPageOptions && "object" === r2(i3.sendAdblockPageOptions) && (this.sendAdblockPageOptions = i3.sendAdblockPageOptions), this.uSession.initialize(i3), i3 && i3.clientSuppliedCallbacks) {
          var a3 = {};
          Object.keys(this.methodToCallbackMapping).forEach(function(e5) {
            o4.methodToCallbackMapping.hasOwnProperty(e5) && i3.clientSuppliedCallbacks[o4.methodToCallbackMapping[e5]] && (a3[e5] = i3.clientSuppliedCallbacks[o4.methodToCallbackMapping[e5]]);
          }), u2(this.clientSuppliedCallbacks, a3), this.registerCallbacks(true);
        }
        if (i3 && null != i3.loadIntegration && (this.loadIntegration = !!i3.loadIntegration), i3 && void 0 !== i3.lockIntegrationsVersion && (this.lockIntegrationsVersion = true === i3.lockIntegrationsVersion), this.eventRepository.initialize(e4, t3, i3), this.initializeUser(i3 ? i3.anonymousIdOptions : void 0), this.setInitialPageProperties(), this.destSDKBaseURL = function(e5, t4, n3) {
          var r3 = "";
          if (n3) {
            if (!(r3 = Rs(n3))) {
              var i4 = "CDN base URL for integrations is not valid";
              throw _s({ message: "[Analytics] load:: ".concat(i4) }), Error("Failed to load Rudder SDK: ".concat(i4));
            }
            return r3;
          }
          var o5 = Gs().sdkURL;
          return r3 = o5 ? o5.split("/").slice(0, -1).concat(oi2).join("/") : si2, t4 && (r3 = r3.replace(ii2, e5)), r3;
        }(this.version, this.lockIntegrationsVersion, i3 && i3.destSDKBaseURL), i3 && i3.getSourceConfig)
          if ("function" != typeof i3.getSourceConfig)
            _s(new Error('option "getSourceConfig" must be a function'));
          else {
            var c3 = i3.getSourceConfig();
            c3 instanceof Promise ? c3.then(function(e5) {
              return o4.processResponse(200, e5);
            }).catch(_s) : this.processResponse(200, c3);
          }
        else {
          var l3 = function(e5) {
            return ri2.concat(ri2.includes("?") ? "&" : "?").concat(e5 ? "writeKey=".concat(e5) : "");
          }(e4);
          i3 && i3.configUrl && (l3 = function(e5, t4) {
            var n3 = e5;
            -1 === n3.indexOf("sourceConfig") && (n3 = "".concat(Rs(n3), "/sourceConfig/")), n3 = "/" === n3.slice(-1) ? n3 : "".concat(n3, "/");
            var r3 = t4.split("?")[1], i4 = n3.split("?");
            return i4.length > 1 && i4[1] !== r3 ? "".concat(i4[0], "?").concat(r3) : "".concat(n3, "?").concat(r3);
          }(i3.configUrl, l3));
          try {
            !function(e5, t4, n3, r3) {
              var i4 = r3.bind(e5), o5 = new XMLHttpRequest();
              o5.open("GET", t4, true), o5.setRequestHeader("Authorization", "Basic ".concat(btoa("".concat(n3, ":")))), o5.onload = function() {
                var e6 = o5.status;
                200 == e6 ? i4(200, o5.responseText) : (_s(new Error("request failed with status: ".concat(o5.status, " for url: ").concat(t4))), i4(e6));
              }, o5.send();
            }(this, l3, e4, this.processResponse);
          } catch (e5) {
            _s(e5);
          }
        }
      } }, { key: "load", value: function(e4, t3, n3) {
        if (!this.loaded)
          if (!(!n3 || "boolean" != typeof n3.polyfillIfRequired || n3.polyfillIfRequired) || String.prototype.endsWith && String.prototype.startsWith && String.prototype.includes && Array.prototype.find && Array.prototype.includes && Promise && Object.entries && Object.values && String.prototype.replaceAll && this.isDatasetAvailable())
            this.loadAfterPolyfill(e4, t3, n3);
          else {
            var r3 = "polyfill";
            Cs(r3, "https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.find%2CArray.prototype.includes%2CPromise%2CString.prototype.endsWith%2CString.prototype.includes%2CString.prototype.startsWith%2CObject.entries%2CObject.values%2CElement.prototype.dataset%2CString.prototype.replaceAll", { skipDatasetAttributes: true });
            var i3 = this, o4 = setInterval(function() {
              (window.hasOwnProperty(r3) || null !== document.getElementById(r3)) && (clearInterval(o4), i3.loadAfterPolyfill(e4, t3, n3));
            }, 100);
            setTimeout(function() {
              clearInterval(o4);
            }, ai2);
          }
      } }, { key: "ready", value: function(e4) {
        this.loaded ? "function" != typeof e4 ? yt("ready callback is not a function") : this.clientIntegrationsReady ? e4() : this.readyCallbacks.push(e4) : this.toBeProcessedArray.push(["ready", e4]);
      } }, { key: "initializeCallbacks", value: function() {
        var e4 = this;
        Object.keys(this.methodToCallbackMapping).forEach(function(t3) {
          e4.methodToCallbackMapping.hasOwnProperty(t3) && e4.on(t3, function() {
          });
        });
      } }, { key: "registerCallbacks", value: function(e4) {
        var t3 = this;
        e4 || Object.keys(this.methodToCallbackMapping).forEach(function(e5) {
          t3.methodToCallbackMapping.hasOwnProperty(e5) && window.rudderanalytics && "function" == typeof window.rudderanalytics[t3.methodToCallbackMapping[e5]] && (t3.clientSuppliedCallbacks[e5] = window.rudderanalytics[t3.methodToCallbackMapping[e5]]);
        }), Object.keys(this.clientSuppliedCallbacks).forEach(function(e5) {
          t3.clientSuppliedCallbacks.hasOwnProperty(e5) && t3.on(e5, t3.clientSuppliedCallbacks[e5]);
        });
      } }, { key: "sendSampleRequest", value: function() {
        Cs("ad-block", "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
      } }, { key: "startSession", value: function(e4) {
        this.uSession.start(e4);
      } }, { key: "endSession", value: function() {
        this.uSession.end();
      } }]), e3;
    }(), zu = new Gu();
    g2(zu), window.addEventListener("error", function(e3) {
      _s(e3, void 0, zu);
    }, true), zu.initializeCallbacks(), zu.registerCallbacks(false);
    var Hu, Ku = "load", Qu = window.rudderanalytics, qu = Array.isArray(Qu);
    if (qu)
      for (var Vu = 0; Vu < Qu.length; ) {
        if (Qu[Vu] && Qu[Vu][0] === Ku) {
          Hu = Qu[Vu], Qu.splice(Vu, 1);
          break;
        }
        Vu += 1;
      }
    !function(e3) {
      var t3 = "ajs_trait_", n3 = "ajs_prop_";
      function r3(e4, t4) {
        var n4 = {};
        return Object.keys(e4).forEach(function(r4) {
          r4.startsWith(t4) && (n4[r4.substr(t4.length)] = e4[r4]);
        }), n4;
      }
      var i3 = A2(e3);
      i3.ajs_aid && zu.toBeProcessedArray.push(["setAnonymousId", i3.ajs_aid]), i3.ajs_uid && zu.toBeProcessedArray.push(["identify", i3.ajs_uid, r3(i3, t3)]), i3.ajs_event && zu.toBeProcessedArray.push(["track", i3.ajs_event, r3(i3, n3)]);
    }(window.location.search), qu && Qu.forEach(function(e3) {
      return zu.toBeProcessedArray.push(e3);
    }), Hu && Hu.length > 0 && (Hu.shift(), zu.load.apply(zu, c2(Hu)));
    var Wu = zu.ready.bind(zu), Yu = zu.identify.bind(zu), Xu = zu.page.bind(zu), Ju = zu.track.bind(zu), $u = zu.alias.bind(zu), Zu = zu.group.bind(zu), ec2 = zu.reset.bind(zu), tc2 = zu.load.bind(zu), nc2 = zu.initialized = true, rc2 = zu.getUserId.bind(zu), ic2 = zu.getSessionId.bind(zu), oc2 = zu.getUserTraits.bind(zu), sc2 = zu.getAnonymousId.bind(zu), ac2 = zu.setAnonymousId.bind(zu), uc2 = zu.getGroupId.bind(zu), cc2 = zu.getGroupTraits.bind(zu), lc2 = zu.startSession.bind(zu), fc2 = zu.endSession.bind(zu);
    e2.alias = $u, e2.endSession = fc2, e2.getAnonymousId = sc2, e2.getGroupId = uc2, e2.getGroupTraits = cc2, e2.getSessionId = ic2, e2.getUserId = rc2, e2.getUserTraits = oc2, e2.group = Zu, e2.identify = Yu, e2.initialized = nc2, e2.load = tc2, e2.page = Xu, e2.ready = Wu, e2.reset = ec2, e2.setAnonymousId = ac2, e2.startSession = lc2, e2.track = Ju, Object.defineProperty(e2, "__esModule", { value: true });
  });
})(rudderSdkJs, rudderSdkJsExports);
var ReactReduxContext = /* @__PURE__ */ React$j.createContext(null);
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify: function notify() {
  },
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}
var useIsomorphicLayoutEffect$3 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
var reactIsExports$1 = {};
var reactIs$2 = {
  get exports() {
    return reactIsExports$1;
  },
  set exports(v2) {
    reactIsExports$1 = v2;
  }
};
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = "function" === typeof Symbol && Symbol.for, c$1 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$2 = b$1 ? Symbol.for("react.fragment") : 60107, f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$2 = b$1 ? Symbol.for("react.provider") : 60109, k$2 = b$1 ? Symbol.for("react.context") : 60110, l$2 = b$1 ? Symbol.for("react.async_mode") : 60111, m$2 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$2 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$2 = b$1 ? Symbol.for("react.suspense") : 60113, q$2 = b$1 ? Symbol.for("react.suspense_list") : 60120, r$2 = b$1 ? Symbol.for("react.memo") : 60115, t$1 = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w$1 = b$1 ? Symbol.for("react.fundamental") : 60117, x$1 = b$1 ? Symbol.for("react.responder") : 60118, y$1 = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$1:
        switch (a2 = a2.type, a2) {
          case l$2:
          case m$2:
          case e$2:
          case g$1:
          case f$1:
          case p$2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$2:
              case n$2:
              case t$1:
              case r$2:
              case h$2:
                return a2;
              default:
                return u2;
            }
        }
      case d$1:
        return u2;
    }
  }
}
function A$1(a2) {
  return z$1(a2) === m$2;
}
reactIs_production_min$1.AsyncMode = l$2;
reactIs_production_min$1.ConcurrentMode = m$2;
reactIs_production_min$1.ContextConsumer = k$2;
reactIs_production_min$1.ContextProvider = h$2;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$2;
reactIs_production_min$1.Fragment = e$2;
reactIs_production_min$1.Lazy = t$1;
reactIs_production_min$1.Memo = r$2;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$1;
reactIs_production_min$1.StrictMode = f$1;
reactIs_production_min$1.Suspense = p$2;
reactIs_production_min$1.isAsyncMode = function(a2) {
  return A$1(a2) || z$1(a2) === l$2;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a2) {
  return z$1(a2) === k$2;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return z$1(a2) === h$2;
};
reactIs_production_min$1.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return z$1(a2) === n$2;
};
reactIs_production_min$1.isFragment = function(a2) {
  return z$1(a2) === e$2;
};
reactIs_production_min$1.isLazy = function(a2) {
  return z$1(a2) === t$1;
};
reactIs_production_min$1.isMemo = function(a2) {
  return z$1(a2) === r$2;
};
reactIs_production_min$1.isPortal = function(a2) {
  return z$1(a2) === d$1;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return z$1(a2) === g$1;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return z$1(a2) === f$1;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return z$1(a2) === p$2;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === e$2 || a2 === m$2 || a2 === g$1 || a2 === f$1 || a2 === p$2 || a2 === q$2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t$1 || a2.$$typeof === r$2 || a2.$$typeof === h$2 || a2.$$typeof === k$2 || a2.$$typeof === n$2 || a2.$$typeof === w$1 || a2.$$typeof === x$1 || a2.$$typeof === y$1 || a2.$$typeof === v$1);
};
reactIs_production_min$1.typeOf = z$1;
(function(module) {
  {
    module.exports = reactIs_production_min$1;
  }
})(reactIs$2);
var reactIs$1 = reactIsExports$1;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
var reactIsExports = {};
var reactIs = {
  get exports() {
    return reactIsExports;
  },
  set exports(v2) {
    reactIsExports = v2;
  }
};
var reactIs_production_min = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 60103, c = 60106, d = 60107, e$1 = 60108, f = 60114, g = 60109, h$1 = 60110, k$1 = 60112, l$1 = 60113, m$1 = 60120, n$1 = 60115, p$1 = 60116, q$1 = 60121, r$1 = 60122, u$1 = 60117, v = 60129, w = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e$1 = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h$1 = x("react.context");
  k$1 = x("react.forward_ref");
  l$1 = x("react.suspense");
  m$1 = x("react.suspense_list");
  n$1 = x("react.memo");
  p$1 = x("react.lazy");
  q$1 = x("react.block");
  r$1 = x("react.server.block");
  u$1 = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
function y(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var t2 = a2.$$typeof;
    switch (t2) {
      case b:
        switch (a2 = a2.type, a2) {
          case d:
          case f:
          case e$1:
          case l$1:
          case m$1:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case h$1:
              case k$1:
              case p$1:
              case n$1:
              case g:
                return a2;
              default:
                return t2;
            }
        }
      case c:
        return t2;
    }
  }
}
var z = g, A = b, B = k$1, C = d, D = p$1, E = n$1, F = c, G = f, H = e$1, I = l$1;
reactIs_production_min.ContextConsumer = h$1;
reactIs_production_min.ContextProvider = z;
reactIs_production_min.Element = A;
reactIs_production_min.ForwardRef = B;
reactIs_production_min.Fragment = C;
reactIs_production_min.Lazy = D;
reactIs_production_min.Memo = E;
reactIs_production_min.Portal = F;
reactIs_production_min.Profiler = G;
reactIs_production_min.StrictMode = H;
reactIs_production_min.Suspense = I;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return y(a2) === h$1;
};
reactIs_production_min.isContextProvider = function(a2) {
  return y(a2) === g;
};
reactIs_production_min.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a2) {
  return y(a2) === k$1;
};
reactIs_production_min.isFragment = function(a2) {
  return y(a2) === d;
};
reactIs_production_min.isLazy = function(a2) {
  return y(a2) === p$1;
};
reactIs_production_min.isMemo = function(a2) {
  return y(a2) === n$1;
};
reactIs_production_min.isPortal = function(a2) {
  return y(a2) === c;
};
reactIs_production_min.isProfiler = function(a2) {
  return y(a2) === f;
};
reactIs_production_min.isStrictMode = function(a2) {
  return y(a2) === e$1;
};
reactIs_production_min.isSuspense = function(a2) {
  return y(a2) === l$1;
};
reactIs_production_min.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === d || a2 === f || a2 === v || a2 === e$1 || a2 === l$1 || a2 === m$1 || a2 === w || "object" === typeof a2 && null !== a2 && (a2.$$typeof === p$1 || a2.$$typeof === n$1 || a2.$$typeof === g || a2.$$typeof === h$1 || a2.$$typeof === k$1 || a2.$$typeof === u$1 || a2.$$typeof === q$1 || a2[0] === r$1) ? true : false;
};
reactIs_production_min.typeOf = y;
(function(module) {
  {
    module.exports = reactIs_production_min;
  }
})(reactIs);
function useReduxContext() {
  var contextValue = reactExports.useContext(ReactReduxContext);
  return contextValue;
}
function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function() {
    return reactExports.useContext(context);
  };
  return function useStore2() {
    var _useReduxContext = useReduxContext$1(), store = _useReduxContext.store;
    return store;
  };
}
var useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch2() {
    var store = useStore$1();
    return store.dispatch;
  };
}
var useDispatch$1 = /* @__PURE__ */ createDispatchHook();
var refEquality = function refEquality2(a2, b2) {
  return a2 === b2;
};
function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = reactExports.useReducer(function(s2) {
    return s2 + 1;
  }, 0), forceRender = _useReducer[1];
  var subscription = reactExports.useMemo(function() {
    return createSubscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = reactExports.useRef();
  var latestSelector = reactExports.useRef();
  var latestStoreState = reactExports.useRef();
  var latestSelectedState = reactExports.useRef();
  var storeState = store.getState();
  var selectedState;
  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      var newSelectedState = selector(storeState);
      if (latestSelectedState.current === void 0 || !equalityFn(newSelectedState, latestSelectedState.current)) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }
    throw err;
  }
  useIsomorphicLayoutEffect$3(function() {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = void 0;
  });
  useIsomorphicLayoutEffect$3(function() {
    function checkForUpdates() {
      try {
        var newStoreState = store.getState();
        if (newStoreState === latestStoreState.current) {
          return;
        }
        var _newSelectedState = latestSelector.current(newStoreState);
        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
          return;
        }
        latestSelectedState.current = _newSelectedState;
        latestStoreState.current = newStoreState;
      } catch (err) {
        latestSubscriptionCallbackError.current = err;
      }
      forceRender();
    }
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function() {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function() {
    return reactExports.useContext(context);
  };
  return function useSelector2(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }
    var _useReduxContext = useReduxContext$1(), store = _useReduxContext.store, contextSub = _useReduxContext.subscription;
    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    reactExports.useDebugValue(selectedState);
    return selectedState;
  };
}
setBatch(reactDomExports.unstable_batchedUpdates);
const useDispatch = () => useDispatch$1();
const useSelector = createSelectorHook();
function lexer(str) {
  var tokens = [];
  var i2 = 0;
  while (i2 < str.length) {
    var char = str[i2];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i2, value: str[i2++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i2++, value: str[i2++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i2, value: str[i2++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i2, value: str[i2++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j2 = i2 + 1;
      while (j2 < str.length) {
        var code = str.charCodeAt(j2);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j2++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i2));
      tokens.push({ type: "NAME", index: i2, value: name });
      i2 = j2;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j2 = i2 + 1;
      if (str[j2] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j2));
      }
      while (j2 < str.length) {
        if (str[j2] === "\\") {
          pattern += str[j2++] + str[j2++];
          continue;
        }
        if (str[j2] === ")") {
          count--;
          if (count === 0) {
            j2++;
            break;
          }
        } else if (str[j2] === "(") {
          count++;
          if (str[j2 + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j2));
          }
        }
        pattern += str[j2++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i2));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i2));
      tokens.push({ type: "PATTERN", index: i2, value: pattern });
      i2 = j2;
      continue;
    }
    tokens.push({ type: "CHAR", index: i2, value: str[i2++] });
  }
  tokens.push({ type: "END", index: i2, value: "" });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i2 = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i2 < tokens.length && tokens[i2].type === type)
      return tokens[i2++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i2], nextType = _a2.type, index2 = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index2, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i2 < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a = options.encode, encode = _a === void 0 ? function(x) {
    return x;
  } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path = "";
    for (var i2 = 0; i2 < tokens.length; i2++) {
      var token = tokens[i2];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j2 = 0; j2 < value.length; j2++) {
          var segment = encode(value[j2], token);
          if (validate && !matches[i2].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i2].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
const ROOT_DOMAIN = "https://api.fabra.io";
async function sendLinkTokenRequest(endpoint, linkToken, payload) {
  return sendRequest(endpoint, payload, [["X-LINK-TOKEN", linkToken]]);
}
async function sendRequest(endpoint, payload, extraHeaders) {
  const toPath = compile(endpoint.path);
  const path = toPath(payload);
  const url = new URL(ROOT_DOMAIN + path);
  if (endpoint.queryParams && payload) {
    endpoint.queryParams.forEach((queryParam) => {
      const queryParamValue = payload[queryParam];
      if (queryParamValue) {
        url.searchParams.append(queryParam, queryParamValue);
      }
    });
  }
  const extraHeadersList = extraHeaders ? extraHeaders : [];
  const headers = new Headers([["Content-Type", "application/json"], ["X-TIME-ZONE", Intl.DateTimeFormat().resolvedOptions().timeZone], ...extraHeadersList]);
  let options = {
    method: endpoint.method,
    headers,
    credentials: "include"
  };
  if (["POST", "PATCH", "PUT"].includes(endpoint.method)) {
    options.body = JSON.stringify(payload);
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorMessage = response.statusText ? response.statusText : await response.text();
    throw new Error(errorMessage);
  }
  if (endpoint.track) {
    rudderSdkJsExports.track(`${endpoint.name}`);
  }
  if (endpoint.noJson) {
    return response.text();
  }
  return response.json().catch(() => null);
}
const GetDestinations = {
  name: "Destinations Fetched",
  method: "GET",
  path: "/destinations"
};
const GetDestination = {
  name: "Destination Fetched",
  method: "GET",
  path: "/destination/:destinationID"
};
const GetObjects = {
  name: "Objects Fetched",
  method: "GET",
  path: "/objects"
};
const GetSync = {
  name: "Sync Fetched",
  method: "GET",
  path: "/sync/:syncID",
  track: true
};
const GetNamespaces = {
  name: "Namespaces Fetched",
  method: "GET",
  path: "/connection/namespaces",
  queryParams: ["connectionID"]
};
const GetTables = {
  name: "Tables Fetched",
  method: "GET",
  path: "/connection/tables",
  queryParams: ["connectionID", "namespace"]
};
const GetSchema = {
  name: "Schema Fetched",
  method: "GET",
  path: "/connection/schema",
  queryParams: ["connectionID", "namespace", "tableName", "customJoin"]
};
const LinkGetSources = {
  name: "Sources Fetched",
  method: "GET",
  path: "/link/sources"
};
const LinkGetNamespaces = {
  name: "Namespaces Fetched",
  method: "GET",
  path: "/link/namespaces",
  queryParams: ["sourceID"]
};
const LinkGetTables = {
  name: "Tables Fetched",
  method: "GET",
  path: "/link/tables",
  queryParams: ["sourceID", "namespace"]
};
const LinkGetSchema = {
  name: "Schema Fetched",
  method: "GET",
  path: "/link/schema",
  queryParams: ["sourceID", "namespace", "tableName", "customJoin"]
};
const Logout = {
  name: "Logout",
  method: "DELETE",
  path: "/logout",
  track: true
};
const GetFieldValues = {
  name: "Field Values Fetched",
  method: "GET",
  path: "/connection/field_values",
  queryParams: ["connectionID", "namespace", "tableName", "fieldName"],
  track: true
};
var FieldType = /* @__PURE__ */ ((FieldType2) => {
  FieldType2["String"] = "STRING";
  FieldType2["Integer"] = "INTEGER";
  FieldType2["Number"] = "NUMBER";
  FieldType2["TimestampTz"] = "TIMESTAMP_TZ";
  FieldType2["TimestampNtz"] = "TIMESTAMP_NTZ";
  FieldType2["TimeTz"] = "TIME_TZ";
  FieldType2["TimeNtz"] = "TIME_NTZ";
  FieldType2["Date"] = "DATE";
  FieldType2["Datetime"] = "DATETIME";
  FieldType2["Boolean"] = "BOOLEAN";
  FieldType2["Array"] = "ARRAY";
  FieldType2["Json"] = "JSON";
  return FieldType2;
})(FieldType || {});
function useLogout() {
  const dispatch = useDispatch();
  rudderSdkJsExports.reset();
  return reactExports.useCallback(async () => {
    await sendRequest(Logout);
    dispatch({
      type: "login.logout"
    });
  }, [dispatch]);
}
var shimExports = {};
var shim = {
  get exports() {
    return shimExports;
  },
  set exports(v2) {
    shimExports = v2;
  }
};
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e = reactExports;
function h(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var k = "function" === typeof Object.is ? Object.is : h, l = e.useState, m = e.useEffect, n = e.useLayoutEffect, p = e.useDebugValue;
function q(a2, b2) {
  var d2 = b2(), f2 = l({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m(function() {
    r(c2) && g2({ inst: c2 });
    return a2(function() {
      r(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p(d2);
  return d2;
}
function r(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k(a2, d2);
  } catch (f2) {
    return true;
  }
}
function t(a2, b2) {
  return b2();
}
var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;
(function(module) {
  {
    module.exports = useSyncExternalStoreShim_production_min;
  }
})(shim);
const SWRGlobalState = /* @__PURE__ */ new WeakMap();
const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const noop = () => {
};
const UNDEFINED = (
  /*#__NOINLINE__*/
  noop()
);
const OBJECT = Object;
const isUndefined = (v2) => v2 === UNDEFINED;
const isFunction = (v2) => typeof v2 == "function";
const mergeObjects = (a2, b2) => ({
  ...a2,
  ...b2
});
const STR_UNDEFINED = "undefined";
const isWindowDefined = typeof window != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
const hasRequestAnimationFrame = () => isWindowDefined && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
const createCacheHelper = (cache2, key) => {
  const state = SWRGlobalState.get(cache2);
  return [
    // Getter
    () => cache2.get(key) || EMPTY_CACHE,
    // Setter
    (info) => {
      if (!isUndefined(key)) {
        const prev = cache2.get(key);
        if (!(key in INITIAL_CACHE)) {
          INITIAL_CACHE[key] = prev;
        }
        state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
      }
    },
    // Subscriber
    state[6],
    // Get server cache snapshot
    () => {
      if (!isUndefined(key)) {
        if (key in INITIAL_CACHE)
          return INITIAL_CACHE[key];
      }
      return cache2.get(key) || EMPTY_CACHE;
    }
  ];
};
const table = /* @__PURE__ */ new WeakMap();
let counter = 0;
const stableHash = (arg) => {
  const type = typeof arg;
  const constructor = arg && arg.constructor;
  const isDate = constructor == Date;
  let result;
  let index2;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index2 = 0; index2 < arg.length; index2++) {
        result += stableHash(arg[index2]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      const keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index2 = keys.pop())) {
        if (!isUndefined(arg[index2])) {
          result += index2 + ":" + stableHash(arg[index2]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
let online = true;
const isOnline = () => online;
const [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  noop,
  noop
];
const isVisible = () => {
  const visibilityState = isDocumentDefined && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
const initFocus = (callback) => {
  if (isDocumentDefined) {
    document.addEventListener("visibilitychange", callback);
  }
  onWindowEvent("focus", callback);
  return () => {
    if (isDocumentDefined) {
      document.removeEventListener("visibilitychange", callback);
    }
    offWindowEvent("focus", callback);
  };
};
const initReconnect = (callback) => {
  const onOnline = () => {
    online = true;
    callback();
  };
  const onOffline = () => {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return () => {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
const preset = {
  isOnline,
  isVisible
};
const defaultConfigOptions = {
  initFocus,
  initReconnect
};
const IS_REACT_LEGACY = !React$j.useId;
const IS_SERVER = !isWindowDefined || "Deno" in window;
const rAF = (f2) => hasRequestAnimationFrame() ? window["requestAnimationFrame"](f2) : setTimeout(f2, 1);
const useIsomorphicLayoutEffect$2 = IS_SERVER ? reactExports.useEffect : reactExports.useLayoutEffect;
const navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
const slowConnection = !IS_SERVER && navigatorConnection && ([
  "slow-2g",
  "2g"
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
const serialize = (key) => {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  const args = key;
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  return [
    key,
    args
  ];
};
let __timestamp = 0;
const getTimestamp = () => ++__timestamp;
const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
const ERROR_REVALIDATE_EVENT = 3;
var constants = {
  __proto__: null,
  FOCUS_EVENT,
  RECONNECT_EVENT,
  MUTATE_EVENT,
  ERROR_REVALIDATE_EVENT
};
async function internalMutate(...args) {
  const [cache2, _key, _data, _opts] = args;
  const options = mergeObjects({
    populateCache: true,
    throwOnError: true
  }, typeof _opts === "boolean" ? {
    revalidate: _opts
  } : _opts || {});
  let populateCache = options.populateCache;
  const rollbackOnErrorOption = options.rollbackOnError;
  let optimisticData = options.optimisticData;
  const revalidate = options.revalidate !== false;
  const rollbackOnError = (error) => {
    return typeof rollbackOnErrorOption === "function" ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
  };
  const throwOnError = options.throwOnError;
  if (isFunction(_key)) {
    const keyFilter = _key;
    const matchedKeys = [];
    const it = cache2.keys();
    for (let keyIt = it.next(); !keyIt.done; keyIt = it.next()) {
      const key = keyIt.value;
      if (
        // Skip the special useSWRInfinite and useSWRSubscription keys.
        !/^\$(inf|sub)\$/.test(key) && keyFilter(cache2.get(key)._k)
      ) {
        matchedKeys.push(key);
      }
    }
    return Promise.all(matchedKeys.map(mutateByKey));
  }
  return mutateByKey(_key);
  async function mutateByKey(_k) {
    const [key] = serialize(_k);
    if (!key)
      return;
    const [get2, set] = createCacheHelper(cache2, key);
    const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
    const revalidators = EVENT_REVALIDATORS[key];
    const startRevalidate = () => {
      if (revalidate) {
        delete FETCH[key];
        if (revalidators && revalidators[0]) {
          return revalidators[0](MUTATE_EVENT).then(() => get2().data);
        }
      }
      return get2().data;
    };
    if (args.length < 3) {
      return startRevalidate();
    }
    let data = _data;
    let error;
    const beforeMutationTs = getTimestamp();
    MUTATION[key] = [
      beforeMutationTs,
      0
    ];
    const hasOptimisticData = !isUndefined(optimisticData);
    const state = get2();
    const displayedData = state.data;
    const currentData = state._c;
    const committedData = isUndefined(currentData) ? displayedData : currentData;
    if (hasOptimisticData) {
      optimisticData = isFunction(optimisticData) ? optimisticData(committedData) : optimisticData;
      set({
        data: optimisticData,
        _c: committedData
      });
    }
    if (isFunction(data)) {
      try {
        data = data(committedData);
      } catch (err) {
        error = err;
      }
    }
    if (data && isFunction(data.then)) {
      data = await data.catch((err) => {
        error = err;
      });
      if (beforeMutationTs !== MUTATION[key][0]) {
        if (error)
          throw error;
        return data;
      } else if (error && hasOptimisticData && rollbackOnError(error)) {
        populateCache = true;
        data = committedData;
        set({
          data,
          _c: UNDEFINED
        });
      }
    }
    if (populateCache) {
      if (!error) {
        if (isFunction(populateCache)) {
          data = populateCache(data, committedData);
        }
        set({
          data,
          _c: UNDEFINED
        });
      }
    }
    MUTATION[key][1] = getTimestamp();
    const res = await startRevalidate();
    set({
      _c: UNDEFINED
    });
    if (error) {
      if (throwOnError)
        throw error;
      return;
    }
    return populateCache ? res : data;
  }
}
const revalidateAllKeys = (revalidators, type) => {
  for (const key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
const initCache = (provider, options) => {
  if (!SWRGlobalState.has(provider)) {
    const opts = mergeObjects(defaultConfigOptions, options);
    const EVENT_REVALIDATORS = {};
    const mutate2 = internalMutate.bind(UNDEFINED, provider);
    let unmount = noop;
    const subscriptions = {};
    const subscribe = (key, callback) => {
      const subs = subscriptions[key] || [];
      subscriptions[key] = subs;
      subs.push(callback);
      return () => subs.splice(subs.indexOf(callback), 1);
    };
    const setter = (key, value, prev) => {
      provider.set(key, value);
      const subs = subscriptions[key];
      if (subs) {
        for (const fn3 of subs) {
          fn3(value, prev);
        }
      }
    };
    const initProvider = () => {
      if (!SWRGlobalState.has(provider)) {
        SWRGlobalState.set(provider, [
          EVENT_REVALIDATORS,
          {},
          {},
          {},
          mutate2,
          setter,
          subscribe
        ]);
        if (!IS_SERVER) {
          const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
          const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
          unmount = () => {
            releaseFocus && releaseFocus();
            releaseReconnect && releaseReconnect();
            SWRGlobalState.delete(provider);
          };
        }
      }
    };
    initProvider();
    return [
      provider,
      mutate2,
      initProvider,
      unmount
    ];
  }
  return [
    provider,
    SWRGlobalState.get(provider)[4]
  ];
};
const onErrorRetry = (_2, __, config, revalidate, opts) => {
  const maxRetryCount = config.errorRetryCount;
  const currentRetryCount = opts.retryCount;
  const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
const compare = (currentData, newData) => stableHash(currentData) == stableHash(newData);
const [cache, mutate] = initCache(/* @__PURE__ */ new Map());
const defaultConfig = mergeObjects(
  {
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: slowConnection ? 5e3 : 3e3,
    // providers
    compare,
    isPaused: () => false,
    cache,
    mutate,
    fallback: {}
  },
  // use web preset by default
  preset
);
const mergeConfigs = (a2, b2) => {
  const v2 = mergeObjects(a2, b2);
  if (b2) {
    const { use: u1, fallback: f1 } = a2;
    const { use: u2, fallback: f2 } = b2;
    if (u1 && u2) {
      v2.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v2.fallback = mergeObjects(f1, f2);
    }
  }
  return v2;
};
const SWRConfigContext = reactExports.createContext({});
const enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = () => {
  if (enableDevtools) {
    window.__SWR_DEVTOOLS_REACT__ = React$j;
  }
};
const normalize = (args) => {
  return isFunction(args[1]) ? [
    args[0],
    args[1],
    args[2] || {}
  ] : [
    args[0],
    null,
    (args[1] === null ? args[2] : args[1]) || {}
  ];
};
const useSWRConfig = () => {
  return mergeObjects(defaultConfig, reactExports.useContext(SWRConfigContext));
};
const middleware = (useSWRNext) => (key_, fetcher_, config) => {
  const fetcher = fetcher_ && ((...args) => {
    const key = serialize(key_)[0];
    const [, , , PRELOAD] = SWRGlobalState.get(cache);
    const req = PRELOAD[key];
    if (req) {
      delete PRELOAD[key];
      return req;
    }
    return fetcher_(...args);
  });
  return useSWRNext(key_, fetcher, config);
};
const BUILT_IN_MIDDLEWARE = use.concat(middleware);
const withArgs = (hook) => {
  return function useSWRArgs(...args) {
    const fallbackConfig = useSWRConfig();
    const [key, fn3, _config] = normalize(args);
    const config = mergeConfigs(fallbackConfig, _config);
    let next = hook;
    const { use: use2 } = config;
    const middleware2 = (use2 || []).concat(BUILT_IN_MIDDLEWARE);
    for (let i2 = middleware2.length; i2--; ) {
      next = middleware2[i2](next);
    }
    return next(key, fn3 || config.fetcher || null, config);
  };
};
const subscribeCallback = (key, callbacks, callback) => {
  const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return () => {
    const index2 = keyedRevalidators.indexOf(callback);
    if (index2 >= 0) {
      keyedRevalidators[index2] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
setupDevTools();
const WITH_DEDUPE = {
  dedupe: true
};
const useSWRHandler = (_key, fetcher, config) => {
  const { cache: cache2, compare: compare2, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
  const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
  const [key, fnArg] = serialize(_key);
  const initialMountedRef = reactExports.useRef(false);
  const unmountedRef = reactExports.useRef(false);
  const keyRef = reactExports.useRef(key);
  const fetcherRef = reactExports.useRef(fetcher);
  const configRef = reactExports.useRef(config);
  const getConfig = () => configRef.current;
  const isActive = () => getConfig().isVisible() && getConfig().isOnline();
  const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache2, key);
  const stateDependencies = reactExports.useRef({}).current;
  const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  const isEqual2 = (prev, current) => {
    let equal2 = true;
    for (const _2 in stateDependencies) {
      const t2 = _2;
      if (t2 === "data") {
        if (!compare2(current[t2], prev[t2])) {
          if (isUndefined(prev[t2])) {
            if (!compare2(current[t2], returnedData)) {
              equal2 = false;
            }
          } else {
            equal2 = false;
          }
        }
      } else {
        if (current[t2] !== prev[t2]) {
          equal2 = false;
        }
      }
    }
    return equal2;
  };
  const getSnapshot = reactExports.useMemo(() => {
    const shouldStartRequest = (() => {
      if (!key)
        return false;
      if (!fetcher)
        return false;
      if (!isUndefined(revalidateOnMount))
        return revalidateOnMount;
      if (getConfig().isPaused())
        return false;
      if (suspense)
        return false;
      if (!isUndefined(revalidateIfStale))
        return revalidateIfStale;
      return true;
    })();
    const getSelectedCache = (state) => {
      const snapshot = mergeObjects(state);
      delete snapshot._k;
      if (!shouldStartRequest) {
        return snapshot;
      }
      return {
        isValidating: true,
        isLoading: true,
        ...snapshot
      };
    };
    const cachedData2 = getCache();
    const initialData = getInitialCache();
    const clientSnapshot = getSelectedCache(cachedData2);
    const serverSnapshot = cachedData2 === initialData ? clientSnapshot : getSelectedCache(initialData);
    let memorizedSnapshot = clientSnapshot;
    return [
      () => {
        const newSnapshot = getSelectedCache(getCache());
        return isEqual2(newSnapshot, memorizedSnapshot) ? memorizedSnapshot : memorizedSnapshot = newSnapshot;
      },
      () => serverSnapshot
    ];
  }, [
    cache2,
    key
  ]);
  const cached = shimExports.useSyncExternalStore(reactExports.useCallback(
    (callback) => subscribeCache(key, (current, prev) => {
      if (!isEqual2(prev, current))
        callback();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      cache2,
      key
    ]
  ), getSnapshot[0], getSnapshot[1]);
  const isInitialMount = !initialMountedRef.current;
  const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
  const cachedData = cached.data;
  const data = isUndefined(cachedData) ? fallback : cachedData;
  const error = cached.error;
  const laggyDataRef = reactExports.useRef(data);
  const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
  const shouldDoInitialRevalidation = (() => {
    if (hasRevalidator && !isUndefined(error))
      return false;
    if (isInitialMount && !isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused())
      return false;
    if (suspense)
      return isUndefined(data) ? false : revalidateIfStale;
    return isUndefined(data) || revalidateIfStale;
  })();
  const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
  const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
  const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
  const revalidate = reactExports.useCallback(
    async (revalidateOpts) => {
      const currentFetcher = fetcherRef.current;
      if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
        return false;
      }
      let newData;
      let startAt;
      let loading = true;
      const opts = revalidateOpts || {};
      const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
      const callbackSafeguard = () => {
        if (IS_REACT_LEGACY) {
          return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
        }
        return key === keyRef.current;
      };
      const finalState = {
        isValidating: false,
        isLoading: false
      };
      const finishRequestAndUpdateState = () => {
        setCache(finalState);
      };
      const cleanupState = () => {
        const requestInfo = FETCH[key];
        if (requestInfo && requestInfo[1] === startAt) {
          delete FETCH[key];
        }
      };
      const initialState = {
        isValidating: true
      };
      if (isUndefined(getCache().data)) {
        initialState.isLoading = true;
      }
      try {
        if (shouldStartNewRequest) {
          setCache(initialState);
          if (config.loadingTimeout && isUndefined(getCache().data)) {
            setTimeout(() => {
              if (loading && callbackSafeguard()) {
                getConfig().onLoadingSlow(key, config);
              }
            }, config.loadingTimeout);
          }
          FETCH[key] = [
            currentFetcher(fnArg),
            getTimestamp()
          ];
        }
        [newData, startAt] = FETCH[key];
        newData = await newData;
        if (shouldStartNewRequest) {
          setTimeout(cleanupState, config.dedupingInterval);
        }
        if (!FETCH[key] || FETCH[key][1] !== startAt) {
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onDiscarded(key);
            }
          }
          return false;
        }
        finalState.error = UNDEFINED;
        const mutationInfo = MUTATION[key];
        if (!isUndefined(mutationInfo) && // case 1
        (startAt <= mutationInfo[0] || // case 2
        startAt <= mutationInfo[1] || // case 3
        mutationInfo[1] === 0)) {
          finishRequestAndUpdateState();
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onDiscarded(key);
            }
          }
          return false;
        }
        const cacheData = getCache().data;
        finalState.data = compare2(cacheData, newData) ? cacheData : newData;
        if (shouldStartNewRequest) {
          if (callbackSafeguard()) {
            getConfig().onSuccess(newData, key, config);
          }
        }
      } catch (err) {
        cleanupState();
        const currentConfig = getConfig();
        const { shouldRetryOnError } = currentConfig;
        if (!currentConfig.isPaused()) {
          finalState.error = err;
          if (shouldStartNewRequest && callbackSafeguard()) {
            currentConfig.onError(err, key, currentConfig);
            if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
              if (isActive()) {
                currentConfig.onErrorRetry(err, key, currentConfig, (_opts) => {
                  const revalidators = EVENT_REVALIDATORS[key];
                  if (revalidators && revalidators[0]) {
                    revalidators[0](constants.ERROR_REVALIDATE_EVENT, _opts);
                  }
                }, {
                  retryCount: (opts.retryCount || 0) + 1,
                  dedupe: true
                });
              }
            }
          }
        }
      }
      loading = false;
      finishRequestAndUpdateState();
      return true;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      key,
      cache2
    ]
  );
  const boundMutate = reactExports.useCallback(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...args) => {
      return internalMutate(cache2, keyRef.current, ...args);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useIsomorphicLayoutEffect$2(() => {
    fetcherRef.current = fetcher;
    configRef.current = config;
    if (!isUndefined(cachedData)) {
      laggyDataRef.current = cachedData;
    }
  });
  useIsomorphicLayoutEffect$2(() => {
    if (!key)
      return;
    const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    let nextFocusRevalidatedAt = 0;
    const onRevalidate = (type, opts = {}) => {
      if (type == constants.FOCUS_EVENT) {
        const now = Date.now();
        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == constants.RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == constants.MUTATE_EVENT) {
        return revalidate();
      } else if (type == constants.ERROR_REVALIDATE_EVENT) {
        return revalidate(opts);
      }
      return;
    };
    const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    setCache({
      _k: fnArg
    });
    if (shouldDoInitialRevalidation) {
      if (isUndefined(data) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return () => {
      unmountedRef.current = true;
      unsubEvents();
    };
  }, [
    key
  ]);
  useIsomorphicLayoutEffect$2(() => {
    let timer;
    function next() {
      const interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [
    refreshInterval,
    refreshWhenHidden,
    refreshWhenOffline,
    key
  ]);
  reactExports.useDebugValue(returnedData);
  if (suspense && isUndefined(data) && key) {
    if (!IS_REACT_LEGACY && IS_SERVER) {
      throw new Error("Fallback data is required when using suspense in SSR.");
    }
    fetcherRef.current = fetcher;
    configRef.current = config;
    unmountedRef.current = false;
    throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return returnedData;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    },
    get isLoading() {
      stateDependencies.isLoading = true;
      return isLoading;
    }
  };
};
var useSWR = withArgs(useSWRHandler);
function useSchema(connectionID, namespace, tableName, customJoin) {
  const fetcher = (request) => sendRequest(GetSchema, request);
  const shouldFetch = connectionID && (namespace && tableName || customJoin);
  const { data, error, isLoading, isValidating } = useSWR(shouldFetch ? { GetSchema, connectionID, namespace, tableName, customJoin } : null, fetcher);
  return { schema: data == null ? void 0 : data.schema, error, loading: isLoading || isValidating };
}
function useDestinations() {
  const fetcher = () => sendRequest(GetDestinations);
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR({ GetDestinations }, fetcher);
  return { destinations: data == null ? void 0 : data.destinations, mutate: mutate2, error, loading: isLoading || isValidating };
}
function useDestination(destinationID) {
  const shouldFetch = destinationID;
  const fetcher = (payload) => sendRequest(GetDestination, payload);
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR(shouldFetch ? { GetDestination, destinationID } : null, fetcher);
  return { destination: data == null ? void 0 : data.destination, mutate: mutate2, error, loading: isLoading || isValidating };
}
function useObjects(linkToken) {
  let fetchFn;
  if (linkToken) {
    fetchFn = () => sendLinkTokenRequest(GetObjects, linkToken);
  } else {
    fetchFn = () => sendRequest(GetObjects);
  }
  const fetcher = fetchFn;
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR({ GetObjects }, fetcher);
  return { objects: data == null ? void 0 : data.objects, mutate: mutate2, error, loading: isLoading || isValidating };
}
function useNamespaces(connectionID) {
  const fetcher = (payload) => sendRequest(GetNamespaces, payload);
  const shouldFetch = connectionID;
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR(shouldFetch ? { GetNamespaces, connectionID } : null, fetcher);
  return { namespaces: data == null ? void 0 : data.namespaces, mutate: mutate2, error, loading: isLoading || isValidating };
}
function useTables(connectionID, namespace) {
  const fetcher = (payload) => sendRequest(GetTables, payload);
  const shouldFetch = connectionID && namespace;
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR(shouldFetch ? { GetTables, connectionID, namespace } : null, fetcher);
  return { tables: data == null ? void 0 : data.tables, mutate: mutate2, error, loading: isLoading || isValidating };
}
function useSync(syncID) {
  const shouldFetch = syncID;
  const fetcher = (payload) => sendRequest(GetSync, payload);
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR(shouldFetch ? { GetSync, syncID } : null, fetcher);
  return { sync: data, mutate: mutate2, error, loading: isLoading || isValidating };
}
function useLinkNamespaces(sourceID, linkToken) {
  const fetcher = (payload) => sendLinkTokenRequest(LinkGetNamespaces, linkToken, payload);
  const shouldFetch = sourceID;
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR(shouldFetch ? { LinkGetNamespaces, sourceID } : null, fetcher);
  return { namespaces: data == null ? void 0 : data.namespaces, mutate: mutate2, error, loading: isLoading || isValidating };
}
function useLinkTables(sourceID, namespace, linkToken) {
  const fetcher = (payload) => sendLinkTokenRequest(LinkGetTables, linkToken, payload);
  const shouldFetch = sourceID && namespace;
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR(shouldFetch ? { LinkGetTables, sourceID, namespace } : null, fetcher);
  return { tables: data == null ? void 0 : data.tables, mutate: mutate2, error, loading: isLoading || isValidating };
}
function useLinkSchema(sourceID, namespace, tableName, linkToken) {
  const fetcher = (payload) => sendLinkTokenRequest(LinkGetSchema, linkToken, payload);
  const shouldFetch = sourceID && namespace && tableName;
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR(shouldFetch ? { LinkGetSchema, sourceID, namespace, tableName } : null, fetcher);
  return { schema: data == null ? void 0 : data.schema, mutate: mutate2, error, loading: isLoading || isValidating };
}
function useLinkSources(linkToken) {
  const fetcher = () => sendLinkTokenRequest(LinkGetSources, linkToken);
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR({ LinkGetSources }, fetcher);
  return { sources: data == null ? void 0 : data.sources, mutate: mutate2, error, loading: isLoading || isValidating };
}
function useFieldValues(connectionID, namespace, tableName, fieldName) {
  const fetcher = (payload) => sendRequest(GetFieldValues, payload);
  const shouldFetch = connectionID && namespace && tableName && fieldName;
  const { data, mutate: mutate2, error, isLoading, isValidating } = useSWR(shouldFetch ? { GetFieldValues, connectionID, namespace, tableName, fieldName } : null, fetcher);
  return { fieldValues: data == null ? void 0 : data.field_values, mutate: mutate2, error, loading: isLoading || isValidating };
}
const toTitleCase = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
};
const Header = () => {
  const location2 = useLocation();
  const isAuthenticated = useSelector((state) => state.login.authenticated);
  const organization = useSelector((state) => state.login.organization);
  if (!isAuthenticated || !organization) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "tw-flex tw-box-border tw-min-h-[64px] tw-h-16 tw-px-10 tw-py-3 tw-items-center tw-border-b tw-border-solid tw-border-slate-200 tw-bg-white", children: [
    /* @__PURE__ */ jsx(Breadcrumbs, { pathname: location2.pathname }),
    /* @__PURE__ */ jsx(ProfileDropdown, {})
  ] }) });
};
const Breadcrumbs = (props) => {
  const pathTokens = props.pathname.split("/");
  switch (pathTokens[1]) {
    case "apikey":
      return /* @__PURE__ */ jsx(PageBreadcrumbs, { title: "API Keys", pathname: props.pathname });
    case "sync":
      return /* @__PURE__ */ jsx(SyncBreadcrumbs, { id: pathTokens[2], pathname: props.pathname });
    case "destination":
      return /* @__PURE__ */ jsx(DestinationBreadcrumbs, { id: pathTokens[2], pathname: props.pathname });
    default:
      return /* @__PURE__ */ jsx(PageBreadcrumbs, { title: toTitleCase(pathTokens[1]), pathname: props.pathname });
  }
};
const SyncBreadcrumbs = (props) => {
  const { sync } = useSync(Number(props.id));
  const title = sync == null ? void 0 : sync.sync.display_name;
  const crumbs = [{ title: "Syncs", path: "/syncs" }, { title, path: props.pathname }];
  document.title = title + " | Fabra";
  return /* @__PURE__ */ jsx(BreadcrumbsLayout, { crumbs });
};
const DestinationBreadcrumbs = (props) => {
  const { destination } = useDestination(Number(props.id));
  const title = destination == null ? void 0 : destination.display_name;
  const crumbs = [{ title: "Destinations", path: "/destinations" }, { title, path: props.pathname }];
  document.title = title + " | Fabra";
  return /* @__PURE__ */ jsx(BreadcrumbsLayout, { crumbs });
};
const PageBreadcrumbs = (props) => {
  let crumbs = [];
  if (props.title) {
    crumbs.push({ title: props.title, path: props.pathname });
    document.title = props.title + " | Fabra";
  } else {
    document.title = "Fabra";
  }
  return /* @__PURE__ */ jsx(BreadcrumbsLayout, { crumbs });
};
const BreadcrumbsLayout = (props) => {
  return /* @__PURE__ */ jsxs("div", { className: "tw-flex tw-flex-row tw-items-center", children: [
    /* @__PURE__ */ jsx(NavLink, { className: "tw-text-sm tw-font-medium tw-select-none tw-text-slate-900 hover:tw-text-slate-600", to: "/", children: "Home" }),
    props.crumbs.map((crumb, index2) => /* @__PURE__ */ jsxs("div", { className: "tw-flex tw-flex-row tw-items-center", children: [
      /* @__PURE__ */ jsx(ChevronRightIcon, { className: "tw-h-3 tw-mx-3" }),
      /* @__PURE__ */ jsx(NavLink, { className: "tw-text-sm tw-font-medium tw-select-none tw-text-slate-900 tw-truncate hover:tw-text-slate-600", to: crumb.path, children: crumb.title ? crumb.title : /* @__PURE__ */ jsx(Loading, { className: "tw-h-4 tw-w-4" }) })
    ] }, index2))
  ] });
};
const ProfileDropdown = () => {
  const user = useSelector((state) => state.login.user);
  const logout = useLogout();
  const menuItem = "tw-flex tw-items-center tw-py-2 tw-pl-2 tw-text-sm tw-cursor-pointer tw-select-none tw-rounded";
  return /* @__PURE__ */ jsx("div", { className: "tw-flex tw-flex-col tw-justify-center tw-ml-auto", children: /* @__PURE__ */ jsxs(ot, { as: "div", children: [
    /* @__PURE__ */ jsx(ot.Button, { className: "tw-bg-orange-400 tw-text-white tw-rounded-full tw-w-7 tw-h-7 tw-cursor-pointer tw-select-none", children: user.name.charAt(0) }),
    /* @__PURE__ */ jsx(
      tt,
      {
        as: reactExports.Fragment,
        enter: "tw-transition tw-ease-out tw-duration-100",
        enterFrom: "tw-transform tw-opacity-0 tw-scale-95",
        enterTo: "tw-transform tw-opacity-100 tw-scale-100",
        leave: "tw-transition tw-ease-in tw-duration-75",
        leaveFrom: "tw-transform tw-opacity-100 tw-scale-97",
        leaveTo: "tw-transform tw-opacity-0 tw-scale-95",
        children: /* @__PURE__ */ jsxs(ot.Items, { className: "tw-absolute tw-origin-top-right tw-z-10 tw-divide-y tw-right-5 tw-mt-2 tw-mr-2 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-slate-900 tw-ring-opacity-5 focus:tw-outline-none tw-w-80", children: [
          /* @__PURE__ */ jsxs("div", { className: "tw-m-2", children: [
            /* @__PURE__ */ jsx("p", { className: "tw-px-1 tw-pt-2 tw-pb-1 tw-text-xs tw-uppercase", children: "Signed in as" }),
            /* @__PURE__ */ jsx(ot.Item, { children: ({ active }) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: classNames(
                  active ? "tw-bg-slate-200 tw-text-slate-900" : "tw-text-slate-700",
                  menuItem,
                  "tw-pl-2"
                ),
                children: [
                  /* @__PURE__ */ jsx("div", { className: "tw-bg-slate-400 tw-text-white tw-rounded-full tw-w-7 tw-h-7 tw-select-none tw-flex tw-items-center tw-justify-center tw-mr-3", children: user.name.charAt(0) }),
                  /* @__PURE__ */ jsxs("div", { className: "tw-flex tw-flex-col", children: [
                    /* @__PURE__ */ jsx("p", { className: "tw-truncate tw-text-sm tw-font-semibold tw-text-slate-900", children: user == null ? void 0 : user.name }),
                    /* @__PURE__ */ jsx("p", { className: "tw-truncate tw-text-sm tw-font-medium tw-text-slate-900", children: user == null ? void 0 : user.email })
                  ] })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "tw-m-2 tw-pt-2", children: /* @__PURE__ */ jsx(ot.Item, { children: ({ active }) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: classNames(
                active ? "tw-bg-slate-200 tw-text-slate-900" : "tw-text-slate-700",
                menuItem
              ),
              onClick: logout,
              children: [
                /* @__PURE__ */ jsx(ArrowRightOnRectangleIcon, { className: "tw-h-4 tw-inline tw-mr-2 tw-stroke-2" }),
                "Logout"
              ]
            }
          ) }) })
        ] })
      }
    )
  ] }) });
};
const DAY_IN_MILLIS = 1e3 * 60 * 60 * 24;
const UpgradeBanner = () => {
  const isAuthenticated = useSelector((state) => state.login.authenticated);
  const organization = useSelector((state) => state.login.organization);
  if (!isAuthenticated || !organization) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  if (!organization.free_trial_end) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  const freeTrialEnd = Date.parse(organization.free_trial_end);
  const now = Date.now();
  const daysUntilTrialEnds = Math.round((freeTrialEnd - now) / DAY_IN_MILLIS);
  return /* @__PURE__ */ jsxs("a", { className: "tw-flex tw-cursor-pointer tw-h-10 tw-justify-center tw-items-center tw-border-b tw-border-solid tw-text-white tw-bg-slate-900 hover:tw-bg-slate-800 tw-transition-colors tw-group", href: "https://calendly.com/fabra-io/onboarding?month=2023-04", target: "_blank", rel: "noreferrer", children: [
    "⏱️ ",
    daysUntilTrialEnds,
    " days left in your free trial. Reach out to upgrade ",
    /* @__PURE__ */ jsx(ArrowRightIcon, { className: "tw-relative tw-h-4 tw-left-1 tw-mt-[1px] group-hover:tw-left-2 tw-transition-all" })
  ] });
};
const GithubIcon = (props) => {
  return /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ jsx("g", { "clip-path": "url(#clip0_201_2)", children: /* @__PURE__ */ jsx("path", { d: "M9.99105 0.206056C4.47098 0.203827 0 4.67257 0 10.1882C0 14.5498 2.79688 18.2574 6.69196 19.619C7.21651 19.7507 7.13616 19.378 7.13616 19.1235V17.3936C4.10714 17.7484 3.98437 15.744 3.78125 15.4092C3.37053 14.7083 2.39955 14.5298 2.68973 14.1949C3.37947 13.84 4.08259 14.2841 4.89732 15.4873C5.48661 16.36 6.63616 16.2127 7.21875 16.0677C7.34598 15.5431 7.6183 15.0743 7.99333 14.7105C4.85491 14.148 3.54688 12.2328 3.54688 9.95605C3.54688 8.85119 3.91071 7.83547 4.625 7.01632C4.16964 5.66587 4.66741 4.50963 4.73437 4.33775C6.03125 4.22168 7.37947 5.26632 7.48437 5.34891C8.22095 5.15026 9.06248 5.04534 10.0045 5.04534C10.9509 5.04534 11.7947 5.15471 12.5379 5.35561C12.7902 5.16365 14.0402 4.26632 15.2455 4.37569C15.3103 4.54757 15.7969 5.67704 15.3683 7.00963C16.0915 7.83109 16.4598 8.85557 16.4598 9.96271C16.4598 12.244 15.1429 14.1614 11.9955 14.715C12.2651 14.9801 12.4791 15.2962 12.6251 15.645C12.7712 15.9938 12.8463 16.3681 12.846 16.7462V19.2574C12.8638 19.4583 12.846 19.6569 13.1808 19.6569C17.1339 18.3243 19.9799 14.59 19.9799 10.1904C19.9799 4.67257 15.5067 0.206056 9.99105 0.206056Z", fill: "white" }) }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_201_2", children: /* @__PURE__ */ jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
  ] });
};
const GoogleIcon = (props) => {
  return /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ jsxs("g", { "clip-path": "url(#clip0_202_2)", children: [
      /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M19.6 10.2271C19.6 9.518 19.5363 8.83619 19.4182 8.18164H10V12.0498H15.3818C15.15 13.2998 14.4454 14.3589 13.3863 15.0681V17.5771H16.6182C18.5091 15.8362 19.6 13.2725 19.6 10.2271Z", fill: "#4285F4" }),
      /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 20C12.7 20 14.9637 19.1046 16.6182 17.5772L13.3863 15.0681C12.4909 15.6681 11.3454 16.0227 10 16.0227C7.39545 16.0227 5.19091 14.2636 4.40454 11.9H1.06364V14.4909C2.70909 17.759 6.09091 20 10 20Z", fill: "#34A853" }),
      /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4.40454 11.9001C4.20454 11.3001 4.09091 10.6592 4.09091 10.0001C4.09091 9.34098 4.20454 8.70007 4.40454 8.10007V5.50916H1.06364C0.386363 6.85916 0 8.38643 0 10.0001C0 11.6137 0.386363 13.141 1.06364 14.491L4.40454 11.9001Z", fill: "#FBBC05" }),
      /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 3.97728C11.4682 3.97728 12.7863 4.48182 13.8228 5.47272L16.6909 2.60454C14.9591 0.990909 12.6954 0 10 0C6.09091 0 2.70909 2.24091 1.06364 5.50909L4.40454 8.1C5.19091 5.73637 7.39545 3.97728 10 3.97728Z", fill: "#EA4335" })
    ] }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_202_2", children: /* @__PURE__ */ jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
  ] });
};
const GoogleWhiteIcon = (props) => {
  return /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ jsxs("g", { "clip-path": "url(#clip0_203_2)", children: [
      /* @__PURE__ */ jsx("path", { d: "M19.6 10.2272C19.6 9.51813 19.5364 8.83631 19.4182 8.18176H10V12.0499H15.3818C15.15 13.2999 14.4455 14.359 13.3864 15.0681V17.5772H16.6182C18.5091 15.8363 19.6 13.2727 19.6 10.2272Z", fill: "white" }),
      /* @__PURE__ */ jsx("path", { d: "M10 20C12.7 20 14.9636 19.1046 16.6182 17.5773L13.3864 15.0682C12.4909 15.6682 11.3455 16.0228 10 16.0228C7.39545 16.0228 5.19091 14.2637 4.40455 11.9H1.06364V14.4909C2.70909 17.7591 6.09091 20 10 20Z", fill: "white" }),
      /* @__PURE__ */ jsx("path", { d: "M4.40455 11.8999C4.20455 11.2999 4.09091 10.659 4.09091 9.99994C4.09091 9.34085 4.20455 8.69994 4.40455 8.09994V5.50903H1.06364C0.386364 6.85903 0 8.38631 0 9.99994C0 11.6136 0.386364 13.1409 1.06364 14.4909L4.40455 11.8999Z", fill: "white" }),
      /* @__PURE__ */ jsx("path", { d: "M10 3.97727C11.4682 3.97727 12.7864 4.48182 13.8227 5.47273L16.6909 2.60455C14.9591 0.990909 12.6955 0 10 0C6.09091 0 2.70909 2.24091 1.06364 5.50909L4.40455 8.1C5.19091 5.73636 7.39545 3.97727 10 3.97727Z", fill: "white" })
    ] }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_203_2", children: /* @__PURE__ */ jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
  ] });
};
const SaveIcon = (props) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", className: props.className, ...props, children: /* @__PURE__ */ jsx("path", { d: "M42 13.85V39q0 1.2-.9 2.1-.9.9-2.1.9H9q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h25.15Zm-3 1.35L32.8 9H9v30h30ZM24 35.75q2.15 0 3.675-1.525T29.2 30.55q0-2.15-1.525-3.675T24 25.35q-2.15 0-3.675 1.525T18.8 30.55q0 2.15 1.525 3.675T24 35.75ZM11.65 18.8h17.9v-7.15h-17.9ZM9 15.2V39 9Z" }) });
};
const DashboardIcon = (props) => {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: props.className, ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M4.66666 3.75C4.16066 3.75 3.75 4.28651 3.75 4.94756V11.0684C3.75 11.386 3.84658 11.6906 4.01848 11.9152C4.19039 12.1398 4.42355 12.266 4.66666 12.266H9.55553C10.0615 12.266 10.4722 11.7295 10.4722 11.0684V4.94756C10.4722 4.28651 10.0615 3.75 9.55553 3.75H4.66666Z", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M4.66666 15.4595C4.16066 15.4595 3.75 15.996 3.75 16.657V19.0522C3.75 19.3698 3.84658 19.6741 4.01848 19.8987C4.19039 20.1233 4.42355 20.2497 4.66666 20.2497H9.55553C10.0615 20.2497 10.4722 19.7132 10.4722 19.0522V16.657C10.4722 15.996 10.0615 15.4595 9.55553 15.4595H4.66666Z", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M14.4445 20.25C13.9385 20.25 13.5278 19.7135 13.5278 19.0524V12.9316C13.5278 12.614 13.6244 12.3094 13.7963 12.0848C13.9682 11.8602 14.2014 11.734 14.4445 11.734H19.3333C19.8393 11.734 20.25 12.2705 20.25 12.9316V19.0524C20.25 19.7135 19.8393 20.25 19.3333 20.25H14.4445Z", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M14.4445 8.54052C13.9385 8.54052 13.5278 8.00401 13.5278 7.34296V4.94783C13.5278 4.63022 13.6244 4.32587 13.7963 4.10128C13.9682 3.8767 14.2014 3.75027 14.4445 3.75027H19.3333C19.8393 3.75027 20.25 4.28678 20.25 4.94783V7.34296C20.25 8.00401 19.8393 8.54052 19.3333 8.54052H14.4445Z", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
};
const QuestionCircleIcon = (props) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: props.className, ...props, children: /* @__PURE__ */ jsx("path", { xmlns: "http://www.w3.org/2000/svg", d: "M9.97924 8.21256C10.9846 7.33251 12.616 7.33251 13.6214 8.21256C14.6276 9.09261 14.6276 10.5196 13.6214 11.3996C13.4471 11.5533 13.2522 11.6795 13.0461 11.7791C12.4065 12.0891 11.8012 12.6369 11.8012 13.3478V13.9917M20.5 12C20.5 13.1162 20.2801 14.2215 19.853 15.2528C19.4258 16.2841 18.7997 17.2211 18.0104 18.0104C17.2211 18.7997 16.2841 19.4258 15.2528 19.853C14.2215 20.2801 13.1162 20.5 12 20.5C10.8838 20.5 9.77846 20.2801 8.74719 19.853C7.71592 19.4258 6.77889 18.7997 5.98959 18.0104C5.20029 17.2211 4.57419 16.2841 4.14702 15.2528C3.71986 14.2215 3.5 13.1162 3.5 12C3.5 9.74566 4.39553 7.58365 5.98959 5.98959C7.58365 4.39553 9.74566 3.5 12 3.5C14.2543 3.5 16.4163 4.39553 18.0104 5.98959C19.6045 7.58365 20.5 9.74566 20.5 12ZM11.8003 16.5675H11.8072V16.5743H11.8003V16.5675Z", strokeLinecap: "round", strokeLinejoin: "round" }) });
};
const BoxLeftIcon = (props) => {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: props.className, ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M15.5014 15.0013L12.5002 12L15.5014 8.99878", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M8.49856 8.99878V15.0013", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M2.99622 16.0016V7.9983C2.99622 5.23572 5.23572 2.99622 7.9983 2.99622H16.0016C18.7642 2.99622 21.0037 5.23572 21.0037 7.9983V16.0016C21.0037 18.7642 18.7642 21.0037 16.0016 21.0037H7.9983C5.23572 21.0037 2.99622 18.7642 2.99622 16.0016Z", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
};
const BoxRightIcon = (props) => {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: props.className, ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M8.4986 15.0013L11.4998 12L8.4986 8.99878", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M15.5014 8.99878V15.0013", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M21.0038 16.0016V7.9983C21.0038 5.23572 18.7643 2.99622 16.0017 2.99622H7.9984C5.2358 2.99622 2.9963 5.23572 2.9963 7.9983V16.0016C2.9963 18.7642 5.2358 21.0037 7.9984 21.0037H16.0017C18.7643 21.0037 21.0038 18.7642 21.0038 16.0016Z", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
};
const CursorRayIcon = (props) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: props.className, ...props, children: /* @__PURE__ */ jsx("path", { xmlns: "http://www.w3.org/2000/svg", d: "M14.7988 5.85343L14.0729 6.59986M10.3256 4L10.339 4.9784M5.85318 5.85343L6.59871 6.57855M4 10.3264L5.04138 10.3107M5.85318 14.8003L6.59871 14.0743M19.892 19.8944L17.1373 17.1382M10.6952 10.6962L13.9945 20.5L16.7204 16.7224L20.5 14.0223L10.6952 10.6962Z", strokeLinecap: "round", strokeLinejoin: "round" }) });
};
const RightArrow = ({ className }) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className, viewBox: "0 0 17 17", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M12.25 8.25L16 12M16 12L12.25 15.75M16 12H1V-4.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
};
const InfoIcon = React$j.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: props.className, ...props, viewBox: "0 0 24 24", fill: "none", ref, children: /* @__PURE__ */ jsx("path", { d: "M12.0003 23.4279C5.68828 23.4279 0.571716 18.3115 0.571716 11.9994C0.571716 5.68743 5.68828 0.570862 12.0003 0.570862C18.3124 0.570862 23.4288 5.68743 23.4288 11.9994C23.4288 18.3115 18.3124 23.4279 12.0003 23.4279ZM12.0003 21.1423C14.4251 21.1423 16.7507 20.179 18.4653 18.4644C20.1799 16.7498 21.1432 14.4243 21.1432 11.9994C21.1432 9.5746 20.1799 7.24907 18.4653 5.53446C16.7507 3.81983 14.4251 2.85657 12.0003 2.85657C9.57544 2.85657 7.24993 3.81983 5.53532 5.53446C3.82069 7.24907 2.85743 9.5746 2.85743 11.9994C2.85743 14.4243 3.82069 16.7498 5.53532 18.4644C7.24993 20.179 9.57544 21.1423 12.0003 21.1423ZM10.8574 6.28515H13.1431V8.57085H10.8574V6.28515ZM10.8574 10.8566H13.1431V17.7137H10.8574V10.8566Z" }) });
});
const LongRightArrow = ({ className }) => {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 47 4", className, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M47 2 44.5.557v2.886L47 2ZM0 2.25h44.75v-.5H0v.5Z" }) });
};
const AddDatabase = ({ className }) => {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", className, children: [
    /* @__PURE__ */ jsx("path", { d: "M6.43,5 C9.98119094,5 13,3.83708138 13,2.5 C13,1.16291862 9.98119094,0 6.43,0 C2.87880906,0 0,1.16291862 0,2.5 C0,3.83708138 2.87880906,5 6.43,5 Z" }),
    /* @__PURE__ */ jsx("path", { d: "M6.494,9.919 C10.055,9.919 12.941,8.937 12.941,7.723 L12.941,4.377 C12.941,5.049 10.009,6.051 6.494,6.051 C2.979,6.051 0.047,5.049 0.047,4.377 L0.047,7.723 C0.047,8.937 2.934,9.919 6.494,9.919 L6.494,9.919 Z" }),
    /* @__PURE__ */ jsx("rect", { x: "10", y: "13", width: "5", height: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M0.0160000001,9.444 L0.0160000001,12.713 C0.0160000001,13.901 2.903,14.859 6.463,14.859 C7.332,14.859 8.16,14.8 8.918,14.697 L8.918,11.958 L10.958,11.958 L10.958,10.52 C9.789,10.841 8.198,11.081 6.463,11.081 C2.947,11.08 0.0160000001,10.1 0.0160000001,9.444 L0.0160000001,9.444 Z" }),
    /* @__PURE__ */ jsx("rect", { x: "12", y: "11", width: "1", height: "5" })
  ] });
};
const React$1 = reactExports;
function CheckIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React$1.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React$1.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React$1.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$1 = React$1.forwardRef(CheckIcon$1);
var CheckIcon_1 = ForwardRef$1;
const React = reactExports;
function ChevronUpDownIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ChevronUpDownIcon$1);
var ChevronUpDownIcon_1 = ForwardRef;
var CheckIcon = CheckIcon_1;
var ChevronUpDownIcon = ChevronUpDownIcon_1;
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect$1 = typeof window !== "undefined" && window.document && window.document.createElement ? reactExports.useLayoutEffect : reactExports.useEffect;
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement$1(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement$1(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x + width,
    bottom: y2 + height,
    left: x,
    x,
    y: y2
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement$1(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement$1(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y2 = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y: y2
  }) : {
    x,
    y: y2
  };
  x = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y: y2
  }) : {
    x,
    y: y2
  };
  x = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y2 + "px)" : "translate3d(" + x + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement$1(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement$1(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement$1(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement$1(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement$1(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement$1(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement$1(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement$1(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
const hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement$1(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement$1(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce$1(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement$1(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect3 = _ref3.effect;
        if (typeof effect3 === "function") {
          var cleanupFn = effect3({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a2, b2) {
  if (a2 === b2)
    return true;
  if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
    if (a2.constructor !== b2.constructor)
      return false;
    var length, i2, keys;
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (!equal(a2[i2], b2[i2]))
          return false;
      return true;
    }
    var it;
    if (hasMap && a2 instanceof Map && b2 instanceof Map) {
      if (a2.size !== b2.size)
        return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!b2.has(i2.value[0]))
          return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!equal(i2.value[1], b2.get(i2.value[0])))
          return false;
      return true;
    }
    if (hasSet && a2 instanceof Set && b2 instanceof Set) {
      if (a2.size !== b2.size)
        return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!b2.has(i2.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (a2[i2] !== b2[i2])
          return false;
      return true;
    }
    if (a2.constructor === RegExp)
      return a2.source === b2.source && a2.flags === b2.flags;
    if (a2.valueOf !== Object.prototype.valueOf)
      return a2.valueOf() === b2.valueOf();
    if (a2.toString !== Object.prototype.toString)
      return a2.toString() === b2.toString();
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b2).length)
      return false;
    for (i2 = length; i2-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys[i2]))
        return false;
    if (hasElementType && a2 instanceof Element)
      return false;
    for (i2 = length; i2-- !== 0; ) {
      if ((keys[i2] === "_owner" || keys[i2] === "__v" || keys[i2] === "__o") && a2.$$typeof) {
        continue;
      }
      if (!equal(a2[keys[i2]], b2[keys[i2]]))
        return false;
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
}
var reactFastCompare = function isEqual(a2, b2) {
  try {
    return equal(a2, b2);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = reactExports.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = reactExports.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = reactExports.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn3(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        reactDomExports.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = reactExports.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if (reactFastCompare(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = reactExports.useRef();
  useIsomorphicLayoutEffect$1(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect$1(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};
const Input = (props) => {
  const { id: id2, value, placeholder, setValue, className, textarea, type, label, ...other } = props;
  const [focused, setFocused] = reactExports.useState(false);
  let classes = ["tw-border tw-border-solid tw-border-slate-300 tw-rounded-md tw-py-2.5 tw-px-3 tw-w-full tw-box-border focus:tw-border-slate-700 tw-outline-none", !props.disabled && "hover:tw-border-slate-400", props.className];
  const onKeydown = (event) => {
    event.stopPropagation();
    if (event.key === "Escape") {
      event.currentTarget.blur();
    }
  };
  const showLabel = props.label !== void 0 && (focused || props.value !== void 0 && (props.value !== "string" || props.value.length > 0));
  return /* @__PURE__ */ jsxs("div", { className: mergeClasses("tw-relative", props.label && "tw-mt-4"), children: [
    /* @__PURE__ */ jsx(
      tt,
      {
        show: showLabel,
        enter: "tw-transition tw-ease tw-duration-200 tw-transform",
        enterFrom: "tw-translate-y-4 tw-opacity-10",
        enterTo: "tw-translate-y-0",
        leave: "tw-transition tw-ease tw-duration-200 tw-transform",
        leaveFrom: "tw-translate-y-0",
        leaveTo: "tw-translate-y-4 tw-opacity-10",
        children: /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "name",
            className: "tw-absolute -tw-top-2 tw-left-2 -tw-mt-px tw-inline-block tw-bg-white tw-px-1 tw-text-xs tw-font-medium tw-text-gray-900",
            children: props.label
          }
        )
      }
    ),
    props.textarea ? /* @__PURE__ */ jsx(
      "textarea",
      {
        id: props.id,
        name: props.id,
        autoComplete: props.id,
        placeholder: focused ? void 0 : props.placeholder,
        className: mergeClasses(classes),
        onKeyDown: onKeydown,
        onFocus: () => {
          setFocused(true);
        },
        onChange: (e2) => props.setValue(e2.target.value),
        onBlur: () => {
          setFocused(false);
        },
        value: props.value ? props.value : ""
      }
    ) : /* @__PURE__ */ jsx(
      "input",
      {
        type: props.type ? props.type : "text",
        id: props.id,
        name: props.id,
        autoComplete: props.id,
        placeholder: focused ? void 0 : props.placeholder,
        className: mergeClasses(classes),
        onKeyDown: onKeydown,
        onFocus: () => {
          setFocused(true);
        },
        onChange: (e2) => {
          e2.target.type === "number" ? props.setValue(parseInt(e2.target.value)) : props.setValue(e2.target.value);
        },
        onBlur: () => {
          setFocused(false);
        },
        value: props.value ? props.value : "",
        ...other
      }
    )
  ] });
};
const ValidatedInput = (props) => {
  const { id: id2, value, placeholder, setValue, className, textarea, type, label, ...other } = props;
  const [isValid, setIsValid] = reactExports.useState(true);
  const [focused, setFocused] = reactExports.useState(false);
  let classes = ["tw-border tw-border-solid tw-border-slate-300 tw-rounded-md tw-py-2.5 tw-px-3 tw-w-full tw-box-border hover:tw-border-primary-hover focus:tw-border-primary tw-outline-none", className];
  if (!isValid) {
    classes.push("tw-border-red-600");
  }
  const onKeydown = (event) => {
    event.stopPropagation();
    if (event.key === "Escape") {
      event.currentTarget.blur();
    }
  };
  const validateNotEmpty = (value2) => {
    if (typeof value2 === "number") {
      return true;
    }
    const valid = value2 !== void 0 && value2.length > 0;
    setIsValid(valid);
    return valid;
  };
  const showLabel = label !== void 0 && (focused || value !== void 0 && (value !== "string" || value.length > 0));
  return /* @__PURE__ */ jsxs("div", { className: mergeClasses("tw-relative", label && "tw-mt-4"), children: [
    /* @__PURE__ */ jsx(
      tt,
      {
        show: showLabel,
        enter: "tw-transition tw-ease tw-duration-200 tw-transform",
        enterFrom: "tw-translate-y-4 tw-opacity-10",
        enterTo: "tw-translate-y-0",
        leave: "tw-transition tw-ease tw-duration-200 tw-transform",
        leaveFrom: "tw-translate-y-0",
        leaveTo: "tw-translate-y-4 tw-opacity-10",
        children: /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "name",
            className: "tw-absolute -tw-top-2 tw-left-2 -tw-mt-px tw-inline-block tw-bg-white tw-px-1 tw-text-xs tw-font-medium tw-text-primary",
            children: label
          }
        )
      }
    ),
    textarea ? /* @__PURE__ */ jsx(
      "textarea",
      {
        id: id2,
        name: id2,
        autoComplete: id2,
        placeholder: focused ? void 0 : placeholder,
        className: mergeClasses(classes),
        onKeyDown: onKeydown,
        onFocus: () => {
          setIsValid(true);
          setFocused(true);
        },
        onChange: (e2) => setValue(e2.target.value),
        onBlur: () => {
          validateNotEmpty(value);
          setFocused(false);
        },
        value: value ? value : ""
      }
    ) : /* @__PURE__ */ jsx(
      "input",
      {
        type: type ? type : "text",
        name: id2,
        autoComplete: id2,
        placeholder: focused ? void 0 : placeholder,
        className: mergeClasses(classes),
        onKeyDown: onKeydown,
        onFocus: () => {
          setIsValid(true);
          setFocused(true);
        },
        onChange: (e2) => {
          e2.target.type === "number" ? props.setValue(parseInt(e2.target.value)) : props.setValue(e2.target.value);
        },
        onBlur: () => {
          validateNotEmpty(value);
          setFocused(false);
        },
        value: value ? value : "",
        ...other
      }
    )
  ] });
};
const ValidatedDropdownInput = (props) => {
  const [isValid, setIsValid] = reactExports.useState(true);
  const [focused, setFocused] = reactExports.useState(false);
  const [referenceElement, setReferenceElement] = reactExports.useState(null);
  const [popperElement, setPopperElement] = reactExports.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    strategy: "fixed",
    modifiers: [sameWidth]
  });
  const validateNotUndefined = (value2) => {
    const valid = value2 !== void 0;
    setIsValid(valid);
    return valid;
  };
  const getElementForDisplay = props.getElementForDisplay ? props.getElementForDisplay : (value2) => value2;
  const getElementForDropdown = props.getElementForDropdown ? props.getElementForDropdown : getElementForDisplay;
  const showLabel = props.label !== void 0 && (focused || props.selected !== void 0);
  const value = props.selected === void 0 ? null : props.selected;
  return /* @__PURE__ */ jsx(Bt, { as: "div", className: "tw-flex tw-w-fit", by: props.by, value, onChange: (value2) => {
    props.setSelected(value2);
    setIsValid(true);
  }, children: /* @__PURE__ */ jsxs("div", { className: "tw-relative tw-w-fit", children: [
    /* @__PURE__ */ jsx(
      tt,
      {
        show: showLabel,
        enter: "tw-transition tw-ease tw-duration-200 tw-transform",
        enterFrom: "tw-translate-y-4 tw-opacity-10",
        enterTo: "tw-translate-y-0",
        leave: "tw-transition tw-ease tw-duration-200 tw-transform",
        leaveFrom: "tw-translate-y-0",
        leaveTo: "tw-translate-y-4 tw-opacity-10",
        children: /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "name",
            className: "tw-absolute tw-top-3 tw-left-2 -tw-mt-px tw-inline-block tw-bg-white tw-px-1 tw-text-xs tw-font-medium tw-text-primary",
            children: props.label
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      Bt.Button,
      {
        ref: setReferenceElement,
        className: mergeClasses("tw-flex tw-justify-center tw-items-center tw-w-96 tw-mt-5 tw-rounded-md tw-py-2.5 tw-px-3 tw-text-left tw-border tw-border-solid tw-border-slate-300 hover:tw-border-primary-hover aria-expanded:tw-border-primary", props.className, props.validated && !isValid && "tw-border-red-600"),
        children: [
          /* @__PURE__ */ jsx("div", { className: mergeClasses("tw-inline-block tw-w-[calc(100%-20px)] tw-truncate tw-overflow-none", !props.selected && "tw-text-slate-400"), children: value ? getElementForDisplay(props.selected) : props.placeholder }),
          !props.noCaret && /* @__PURE__ */ jsx("span", { className: "tw-pointer-events-none pr-2", children: /* @__PURE__ */ jsx(
            ChevronUpDownIcon,
            {
              className: "tw-inline tw-float-right tw-h-5 tw-w-5 tw-text-slate-400",
              "aria-hidden": "true"
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "tw-relative tw-z-10", ref: setPopperElement, style: styles.popper, ...attributes.popper, children: /* @__PURE__ */ jsx(
      tt,
      {
        as: reactExports.Fragment,
        enter: "tw-transition tw-ease-out tw-duration-100",
        enterFrom: "tw-transform tw-opacity-0 tw-scale-95",
        enterTo: "tw-transform tw-opacity-100 tw-scale-100",
        leave: "tw-transition tw-ease-in tw-duration-100",
        leaveFrom: "tw-transform tw-opacity-100 tw-scale-100",
        leaveTo: "tw-transform tw-opacity-0 tw-scale-95",
        beforeEnter: () => setFocused(true),
        afterLeave: () => {
          validateNotUndefined(props.selected);
          setFocused(false);
        },
        children: /* @__PURE__ */ jsx(Bt.Options, { className: mergeClasses("tw-absolute tw-z-20 tw-mt-1 tw-max-h-60 tw-min-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-slate-900 tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm", props.dropdownHeight), children: /* @__PURE__ */ jsx(DropdownOptions, { loading: props.loading, options: props.options, noOptionsString: props.noOptionsString, getElementForDisplay: getElementForDropdown }) })
      }
    ) })
  ] }) });
};
const DropdownOptions = (props) => {
  if (props.loading) {
    return /* @__PURE__ */ jsx("div", { className: "tw-p-2", children: /* @__PURE__ */ jsx(Loading, { className: "tw-m-auto tw-block" }) });
  }
  if (props.options && props.options.length > 0) {
    return /* @__PURE__ */ jsx(Fragment, { children: props.options.map((option, index2) => /* @__PURE__ */ jsx(Bt.Option, { value: option, className: ({ active, selected }) => `tw-relative tw-cursor-pointer tw-select-none tw-py-2.5 tw-pl-4 tw-pr-4 ${active || selected ? "tw-bg-slate-100 tw-text-slate-900" : "tw-text-slate-900"}`, children: ({ selected }) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: `tw-block tw-truncate ${selected ? "tw-font-medium" : "tw-font-normal"}`, children: props.getElementForDisplay(option) }),
      selected ? /* @__PURE__ */ jsx("span", { className: "tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3 tw-text-slate-600", children: /* @__PURE__ */ jsx(CheckIcon, { className: "tw-h-5 tw-w-5", "aria-hidden": "true" }) }) : null
    ] }) }, index2)) });
  } else {
    return /* @__PURE__ */ jsx("div", { className: "tw-p-2 tw-pl-4 tw-select-none", children: props.noOptionsString });
  }
};
const ValidatedComboInput = (props) => {
  const [isValid, setIsValid] = reactExports.useState(true);
  const [query, setQuery] = reactExports.useState("");
  const [focused, setFocused] = reactExports.useState(false);
  const buttonRef = reactExports.useRef(null);
  const [referenceElement, setReferenceElement] = reactExports.useState(null);
  const [popperElement, setPopperElement] = reactExports.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    strategy: "fixed",
    modifiers: [sameWidth]
  });
  const getFilteredOptions = () => {
    if (query === "") {
      return props.options;
    }
    if (props.options) {
      return props.options.filter((option) => {
        const displayValue = props.getElementForDisplay ? props.getElementForDisplay(option) : option;
        if (typeof displayValue === "string") {
          return displayValue.toLowerCase().includes(query.toLowerCase());
        } else {
          return true;
        }
      });
    }
    return [];
  };
  const filteredOptions = getFilteredOptions();
  const getElementForDisplay = props.getElementForDisplay ? props.getElementForDisplay : (value2) => value2;
  const showLabel = props.label !== void 0 && (focused || props.selected !== void 0);
  const validateNotUndefined = (value2) => {
    const valid = value2 !== void 0;
    setIsValid(valid);
    return valid;
  };
  const value = props.selected === void 0 ? null : props.selected;
  return /* @__PURE__ */ jsx(Ko, { as: "div", className: "tw-flex tw-w-fit", by: props.by, value, onChange: (value2) => {
    props.setSelected(value2);
    setIsValid(true);
  }, children: /* @__PURE__ */ jsxs("div", { className: "tw-relative tw-w-fit", children: [
    /* @__PURE__ */ jsx(
      tt,
      {
        show: showLabel,
        enter: "tw-transition tw-ease tw-duration-200 tw-transform",
        enterFrom: "tw-translate-y-4 tw-opacity-10",
        enterTo: "tw-translate-y-0",
        leave: "tw-transition tw-ease tw-duration-200 tw-transform",
        leaveFrom: "tw-translate-y-0",
        leaveTo: "tw-translate-y-4 tw-opacity-10",
        children: /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "name",
            className: "tw-absolute tw-top-3 tw-left-2 -tw-mt-px tw-inline-block tw-bg-white tw-px-1 tw-text-xs tw-font-medium tw-text-primary",
            children: props.label
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { ref: setReferenceElement, className: mergeClasses("tw-flex tw-w-96 tw-mt-5 tw-rounded-md tw-bg-white tw-py-2.5 tw-px-3 tw-text-left tw-border tw-border-solid tw-border-slate-300 hover:tw-border-primary-hover focus-within:!tw-border-primary tw-transition tw-duration-100", props.className, props.validated && !isValid && "tw-border-red-600"), children: [
      /* @__PURE__ */ jsx(
        Ko.Input,
        {
          className: "tw-inline tw-bg-transparent tw-w-[calc(100%-20px)] tw-border-none tw-text-sm tw-leading-5 tw-text-slate-900 tw-outline-none tw-text-ellipsis tw-cursor-pointer focus:tw-cursor-text",
          displayValue: (selected) => selected ? getElementForDisplay(selected) : "",
          onChange: (event) => setQuery(event.target.value),
          placeholder: props.placeholder,
          onClick: () => {
            var _a;
            return (_a = buttonRef.current) == null ? void 0 : _a.click();
          }
        }
      ),
      /* @__PURE__ */ jsx(Ko.Button, { className: "tw-inline-block tw-h-full", ref: buttonRef, children: /* @__PURE__ */ jsx("span", { className: "tw-pointer-events-none pr-2", children: /* @__PURE__ */ jsx(
        ChevronUpDownIcon,
        {
          className: "tw-inline tw-float-right tw-h-5 tw-w-5 tw-text-slate-400",
          "aria-hidden": "true"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "tw-relative tw-z-10", ref: setPopperElement, style: styles.popper, ...attributes.popper, children: /* @__PURE__ */ jsx(
      tt,
      {
        as: reactExports.Fragment,
        enter: "tw-transition tw-ease-out tw-duration-100",
        enterFrom: "tw-transform tw-opacity-0 tw-scale-95",
        enterTo: "tw-transform tw-opacity-100 tw-scale-100",
        leave: "tw-transition tw-ease-in tw-duration-100",
        leaveFrom: "tw-transform tw-opacity-100 tw-scale-100",
        leaveTo: "tw-transform tw-opacity-0 tw-scale-95",
        beforeEnter: () => setFocused(true),
        afterLeave: () => {
          validateNotUndefined(props.selected);
          setQuery("");
          setFocused(false);
        },
        children: /* @__PURE__ */ jsx(Ko.Options, { className: mergeClasses("tw-absolute tw-z-20 tw-mt-1 tw-min-w-full tw-max-h-60 tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-slate-900 tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm", props.dropdownHeight), children: /* @__PURE__ */ jsx(ComboOptions, { loading: props.loading, options: filteredOptions, noOptionsString: props.noOptionsString, getElementForDisplay, query, allowCustom: props.allowCustom }) })
      }
    ) })
  ] }) });
};
const ComboOptions = (props) => {
  if (props.loading) {
    return /* @__PURE__ */ jsx("div", { className: "tw-p-2", children: /* @__PURE__ */ jsx(Loading, { className: "tw-m-auto tw-block" }) });
  }
  if (props.options && props.options.length > 0) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      props.allowCustom && props.query.length > 0 && /* @__PURE__ */ jsxs(Ko.Option, { value: props.query, className: ({ active, selected }) => `tw-relative tw-cursor-pointer tw-select-none tw-py-2.5 tw-pl-4 tw-pr-4 ${active || selected ? "tw-bg-slate-100 tw-text-slate-900" : "tw-text-slate-900"}`, children: [
        'Custom: "',
        props.query,
        '"'
      ] }),
      props.options.map((option, index2) => /* @__PURE__ */ jsx(Ko.Option, { value: option, className: ({ active, selected }) => `tw-relative tw-cursor-pointer tw-select-none tw-py-2.5 tw-pl-4 tw-pr-4 ${active || selected ? "tw-bg-slate-100 tw-text-slate-900" : "tw-text-slate-900"}`, children: ({ selected }) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: `tw-block tw-truncate ${selected ? "tw-font-medium" : "tw-font-normal"}`, children: props.getElementForDisplay(option) }),
        selected ? /* @__PURE__ */ jsx("span", { className: "tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3 tw-text-slate-600", children: /* @__PURE__ */ jsx(CheckIcon, { className: "tw-h-5 tw-w-5", "aria-hidden": "true" }) }) : null
      ] }) }, index2))
    ] });
  } else {
    return /* @__PURE__ */ jsx(Fragment, { children: props.allowCustom ? props.allowCustom && props.query.length > 0 && /* @__PURE__ */ jsxs(Ko.Option, { value: props.query, className: ({ active, selected }) => `tw-relative tw-cursor-pointer tw-select-none tw-py-2.5 tw-pl-4 tw-pr-4 ${active || selected ? "tw-bg-slate-100 tw-text-slate-900" : "tw-text-slate-900"}`, children: [
      'Custom: "',
      props.query,
      '"'
    ] }) : /* @__PURE__ */ jsx("div", { className: "tw-p-2 tw-pl-4 tw-select-none", children: props.noOptionsString }) });
  }
};
const sameWidth = {
  name: "sameWidth",
  enabled: true,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }) => {
    state.elements.popper.style.width = `${state.elements.reference.getBoundingClientRect().width}px`;
  }
};
const logo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGZpbGw9ImJsYWNrIi8+CiAgPHBhdGggZD0iTTE2MC4yMDMgMTUwQzE2MC4yMDMgMTQzLjIxNCAxNjAuMjAzIDEzNi45MjcgMTYwLjIwMyAxMzAuNDE0QzIzMS4yOTQgMTMwLjQxNCAzMDEuODY1IDEzMC40MTQgMzcyLjY5OSAxMzAuNDE0QzM3Mi42OTkgMTcwLjc0NiAzNzIuNjk5IDIxMC44MzcgMzcyLjY5OSAyNTIuMTYxQzM2Ny41OTcgMjUyLjE2MSAzNjIuNjc0IDI1Mi4xMzggMzU3Ljc1MSAyNTIuMTY1QzMzNi40NDEgMjUyLjI4MyAzMTUuNTQxIDI1MC4xMjQgMjk3LjEzMSAyMzguMjEyQzI3Ny41MzQgMjI1LjUzMSAyNzAuNzUxIDIwNi42MjUgMjcyLjc2NyAxODQuMDY4QzI3NC4xMTcgMTY4Ljk2MiAyODAuNTY5IDE1Ni40OCAyOTIuNTQ4IDE0Ni45MjhDMjkzLjUwMyAxNDYuMTY3IDI5My41MzggMTQ0LjI1MSAyOTQuMDAxIDE0Mi44NzFDMjkyLjYwMiAxNDIuNDY3IDI5MS4wNjIgMTQxLjQ2MiAyODkuODI1IDE0MS43NTFDMjczLjE0NiAxNDUuNjU0IDI2MC44NzkgMTU1LjE1MiAyNTMuNDMyIDE3MC43NDZDMjM5Ljc4OSAxOTkuMzE4IDI0Ni41NDkgMjM0LjI3NSAyNjkuNjY1IDI1My45MDhDMjgxLjEgMjYzLjYyMSAyOTQuNTY5IDI2Ny4zNzEgMzA5LjM1NyAyNjcuMjg2QzMyNC41IDI2Ny4xOTkgMzM5LjY0MyAyNjcuMjY3IDM1NS4wNjYgMjY3LjI2N0MzNTUuMDY2IDI3My42NjEgMzU1LjA2NiAyNzkuNzQ0IDM1NS4wNjYgMjg2LjIwM0MzNDAuMDE3IDI4Ni4yMDMgMzI1LjIwNiAyODYuMTg5IDMxMC4zOTYgMjg2LjIwOEMzMDEuNDUgMjg2LjIyIDI5Mi44MDkgMjg3LjY5OCAyODUuMzQ1IDI5Mi45NUMyNzAuMDc2IDMwMy42OTQgMjYyLjcyNSAzMTguOTU5IDI2Mi4xMjEgMzM3LjIxMUMyNjEuNTI2IDM1NS4xOTEgMjYxLjk5MSAzNzMuMjA2IDI2MS45OTEgMzkxLjIwNkMyNjEuOTkxIDM5Mi44NDIgMjYxLjk5MSAzOTQuNDc5IDI2MS45OTEgMzk2LjM2OEMyMjguMDU0IDM5Ni4zNjggMTk0LjQ2MSAzOTYuMzY4IDE2MC4yMDMgMzk2LjM2OEMxNjAuMjAzIDMxNC4zMzUgMTYwLjIwMyAyMzIuNDE4IDE2MC4yMDMgMTUwWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";
const LogoLoading = () => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: logo,
      className: "\n        tw-m-auto\n        tw-w-36\n        tw-h-36\n        tw-justify-center\n        tw-items-center\n        tw-rounded\n        tw-flex\n        tw-my-auto\n        tw-select-none\n        tw-animate-fade-in\n        tw-animate-shimmer\n        [mask:linear-gradient(-60deg,#000_30%,#0005,#000_70%)_right/500%_100%]\n        ",
      alt: "fabra logo"
    }
  );
};
const Modal = (props) => {
  reactExports.useEffect(() => {
    const escFunction = (event) => {
      if (event.key === "Escape") {
        if (props.close) {
          props.close();
        }
        document.removeEventListener("keydown", escFunction);
      }
    };
    document.addEventListener("keydown", escFunction);
  });
  const showHideClassName = props.show ? "tw-block" : "tw-hidden";
  return /* @__PURE__ */ jsx("div", { className: classNames("tw-fixed tw-z-50", showHideClassName), onClick: props.clickToEscape ? props.close : void 0, children: /* @__PURE__ */ jsxs("section", { className: "tw-fixed tw-bg-white tw-flex tw-flex-col tw-top-[40%] tw-bottom-[50%] tw-translate-x-1/2 tw-translate-y-1/2 tw-rounded-lg tw-shadow-md", onClick: (e2) => e2.stopPropagation(), children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex" }, children: [
      /* @__PURE__ */ jsx("div", { className: classNames("tw-inline tw-m-6 tw-mb-2 tw-select-none", props.titleStyle), children: props.title }),
      /* @__PURE__ */ jsx("button", { className: "tw-inline tw-m-6 tw-ml-auto tw-mb-2 tw-bg-transparent tw-border-none tw-cursor-pointer tw-p-0", onClick: props.close, children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M5.1875 15.6875L4.3125 14.8125L9.125 10L4.3125 5.1875L5.1875 4.3125L10 9.125L14.8125 4.3125L15.6875 5.1875L10.875 10L15.6875 14.8125L14.8125 15.6875L10 10.875L5.1875 15.6875Z", fill: "black" }) }) })
    ] }),
    props.children
  ] }) });
};
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index2, defaultValue) {
  if (Array.isArray(value)) {
    var v2 = value[index2];
    return v2 == null ? Array.isArray(defaultValue) ? defaultValue[index2] : defaultValue : v2;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce(fn3, ms) {
  if (ms === 0) {
    return fn3;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn3(arg);
    }, ms);
  };
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index2) {
    return arr.indexOf(item) === index2;
  });
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el2) {
    if (el2) {
      el2.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el2) {
    if (el2) {
      el2.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser$1 = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser$1 ? (
  // @ts-ignore
  !!window.msCrypto
) : false;
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e2) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id2 = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id2,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    // methods
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id3 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id3 : id3);
      } else {
        var nextValue = currentValue && currentValue.replace(id3, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el2) {
      return actualContains(el2, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn3(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i2) {
      return i2 !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
Object.assign({}, applyStyles$1, {
  effect: function effect2(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
tippy.setDefaultProps({
  render
});
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
function preserveRef(ref, node) {
  if (ref) {
    if (typeof ref === "function") {
      ref(node);
    }
    if ({}.hasOwnProperty.call(ref, "current")) {
      ref.current = node;
    }
  }
}
function ssrSafeCreateDiv() {
  return isBrowser && document.createElement("div");
}
function toDataAttributes(attrs) {
  var dataAttrs = {
    "data-placement": attrs.placement
  };
  if (attrs.referenceHidden) {
    dataAttrs["data-reference-hidden"] = "";
  }
  if (attrs.escaped) {
    dataAttrs["data-escaped"] = "";
  }
  return dataAttrs;
}
function deepEqual(x, y2) {
  if (x === y2) {
    return true;
  } else if (typeof x === "object" && x != null && typeof y2 === "object" && y2 != null) {
    if (Object.keys(x).length !== Object.keys(y2).length) {
      return false;
    }
    for (var prop in x) {
      if (y2.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y2[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
function uniqueByShape(arr) {
  var output = [];
  arr.forEach(function(item) {
    if (!output.find(function(outputItem) {
      return deepEqual(item, outputItem);
    })) {
      output.push(item);
    }
  });
  return output;
}
function deepPreserveProps(instanceProps, componentProps) {
  var _instanceProps$popper, _componentProps$poppe;
  return Object.assign({}, componentProps, {
    popperOptions: Object.assign({}, instanceProps.popperOptions, componentProps.popperOptions, {
      modifiers: uniqueByShape([].concat(((_instanceProps$popper = instanceProps.popperOptions) == null ? void 0 : _instanceProps$popper.modifiers) || [], ((_componentProps$poppe = componentProps.popperOptions) == null ? void 0 : _componentProps$poppe.modifiers) || []))
    })
  });
}
var useIsomorphicLayoutEffect = isBrowser ? reactExports.useLayoutEffect : reactExports.useEffect;
function useMutableBox(initialValue) {
  var ref = reactExports.useRef();
  if (!ref.current) {
    ref.current = typeof initialValue === "function" ? initialValue() : initialValue;
  }
  return ref.current;
}
function updateClassName(box, action, classNames2) {
  classNames2.split(/\s+/).forEach(function(name) {
    if (name) {
      box.classList[action](name);
    }
  });
}
var classNamePlugin = {
  name: "className",
  defaultValue: "",
  fn: function fn2(instance) {
    var box = instance.popper.firstElementChild;
    var isDefaultRenderFn = function isDefaultRenderFn2() {
      var _instance$props$rende;
      return !!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
    };
    function add() {
      if (instance.props.className && !isDefaultRenderFn()) {
        return;
      }
      updateClassName(box, "add", instance.props.className);
    }
    function remove() {
      if (isDefaultRenderFn()) {
        updateClassName(box, "remove", instance.props.className);
      }
    }
    return {
      onCreate: add,
      onBeforeUpdate: remove,
      onAfterUpdate: add
    };
  }
};
function TippyGenerator(tippy2) {
  function Tippy2(_ref) {
    var children = _ref.children, content = _ref.content, visible = _ref.visible, singleton = _ref.singleton, render2 = _ref.render, reference2 = _ref.reference, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, _ref$ignoreAttributes = _ref.ignoreAttributes, ignoreAttributes = _ref$ignoreAttributes === void 0 ? true : _ref$ignoreAttributes;
    _ref.__source;
    _ref.__self;
    var restOfNativeProps = _objectWithoutPropertiesLoose(_ref, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"]);
    var isControlledMode = visible !== void 0;
    var isSingletonMode = singleton !== void 0;
    var _useState = reactExports.useState(false), mounted = _useState[0], setMounted = _useState[1];
    var _useState2 = reactExports.useState({}), attrs = _useState2[0], setAttrs = _useState2[1];
    var _useState3 = reactExports.useState(), singletonContent = _useState3[0], setSingletonContent = _useState3[1];
    var mutableBox = useMutableBox(function() {
      return {
        container: ssrSafeCreateDiv(),
        renders: 1
      };
    });
    var props = Object.assign({
      ignoreAttributes
    }, restOfNativeProps, {
      content: mutableBox.container
    });
    if (isControlledMode) {
      props.trigger = "manual";
      props.hideOnClick = false;
    }
    if (isSingletonMode) {
      disabled = true;
    }
    var computedProps = props;
    var plugins = props.plugins || [];
    if (render2) {
      computedProps = Object.assign({}, props, {
        plugins: isSingletonMode && singleton.data != null ? [].concat(plugins, [{
          fn: function fn3() {
            return {
              onTrigger: function onTrigger2(instance, event) {
                var node = singleton.data.children.find(function(_ref2) {
                  var instance2 = _ref2.instance;
                  return instance2.reference === event.currentTarget;
                });
                instance.state.$$activeSingletonInstance = node.instance;
                setSingletonContent(node.content);
              }
            };
          }
        }]) : plugins,
        render: function render3() {
          return {
            popper: mutableBox.container
          };
        }
      });
    }
    var deps = [reference2].concat(children ? [children.type] : []);
    useIsomorphicLayoutEffect(function() {
      var element = reference2;
      if (reference2 && reference2.hasOwnProperty("current")) {
        element = reference2.current;
      }
      var instance = tippy2(element || mutableBox.ref || ssrSafeCreateDiv(), Object.assign({}, computedProps, {
        plugins: [classNamePlugin].concat(props.plugins || [])
      }));
      mutableBox.instance = instance;
      if (disabled) {
        instance.disable();
      }
      if (visible) {
        instance.show();
      }
      if (isSingletonMode) {
        singleton.hook({
          instance,
          content,
          props: computedProps,
          setSingletonContent
        });
      }
      setMounted(true);
      return function() {
        instance.destroy();
        singleton == null ? void 0 : singleton.cleanup(instance);
      };
    }, deps);
    useIsomorphicLayoutEffect(function() {
      var _instance$popperInsta;
      if (mutableBox.renders === 1) {
        mutableBox.renders++;
        return;
      }
      var instance = mutableBox.instance;
      instance.setProps(deepPreserveProps(instance.props, computedProps));
      (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.forceUpdate();
      if (disabled) {
        instance.disable();
      } else {
        instance.enable();
      }
      if (isControlledMode) {
        if (visible) {
          instance.show();
        } else {
          instance.hide();
        }
      }
      if (isSingletonMode) {
        singleton.hook({
          instance,
          content,
          props: computedProps,
          setSingletonContent
        });
      }
    });
    useIsomorphicLayoutEffect(function() {
      var _instance$props$poppe;
      if (!render2) {
        return;
      }
      var instance = mutableBox.instance;
      instance.setProps({
        popperOptions: Object.assign({}, instance.props.popperOptions, {
          modifiers: [].concat((((_instance$props$poppe = instance.props.popperOptions) == null ? void 0 : _instance$props$poppe.modifiers) || []).filter(function(_ref3) {
            var name = _ref3.name;
            return name !== "$$tippyReact";
          }), [{
            name: "$$tippyReact",
            enabled: true,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function fn3(_ref4) {
              var _state$modifiersData;
              var state = _ref4.state;
              var hideData = (_state$modifiersData = state.modifiersData) == null ? void 0 : _state$modifiersData.hide;
              if (attrs.placement !== state.placement || attrs.referenceHidden !== (hideData == null ? void 0 : hideData.isReferenceHidden) || attrs.escaped !== (hideData == null ? void 0 : hideData.hasPopperEscaped)) {
                setAttrs({
                  placement: state.placement,
                  referenceHidden: hideData == null ? void 0 : hideData.isReferenceHidden,
                  escaped: hideData == null ? void 0 : hideData.hasPopperEscaped
                });
              }
              state.attributes.popper = {};
            }
          }])
        })
      });
    }, [attrs.placement, attrs.referenceHidden, attrs.escaped].concat(deps));
    return /* @__PURE__ */ React$j.createElement(React$j.Fragment, null, children ? /* @__PURE__ */ reactExports.cloneElement(children, {
      ref: function ref(node) {
        mutableBox.ref = node;
        preserveRef(children.ref, node);
      }
    }) : null, mounted && /* @__PURE__ */ reactDomExports.createPortal(render2 ? render2(toDataAttributes(attrs), singletonContent, mutableBox.instance) : content, mutableBox.container));
  }
  return Tippy2;
}
var forwardRef = function(Tippy2, defaultProps2) {
  return /* @__PURE__ */ reactExports.forwardRef(function TippyWrapper(_ref, _ref2) {
    var children = _ref.children, props = _objectWithoutPropertiesLoose(_ref, ["children"]);
    return (
      // If I spread them separately here, Babel adds the _extends ponyfill for
      // some reason
      /* @__PURE__ */ React$j.createElement(Tippy2, Object.assign({}, defaultProps2, props), children ? /* @__PURE__ */ reactExports.cloneElement(children, {
        ref: function ref(node) {
          preserveRef(_ref2, node);
          preserveRef(children.ref, node);
        }
      }) : null)
    );
  });
};
var index = /* @__PURE__ */ forwardRef(/* @__PURE__ */ TippyGenerator(tippy));
const Tippy = index;
const Tooltip = (props) => {
  const { label, ...other } = props;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Tippy, { content: props.label, delay: 0, duration: 100, ...other, children: props.children }) });
};
const NavigationBar = () => {
  const isAuthenticated = useSelector((state) => state.login.authenticated);
  const organization = useSelector((state) => state.login.organization);
  if (!isAuthenticated || !organization) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  const route = "tw-inline-block tw-pt-[0.5px] tw-ml-2.5 tw-font-medium";
  const routeContainer = "tw-relative tw-flex tw-flex-row tw-h-9 tw-box-border tw-cursor-pointer tw-items-center tw-text-slate-800 tw-mt-0.5 tw-mb-0.5 tw-mx-2 tw-rounded-md tw-select-none";
  const navLink = "tw-w-full tw-h-full tw-pl-3 tw-rounded-md tw-flex tw-flex-row tw-items-center hover:tw-bg-slate-200";
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "tw-min-w-[240px] tw-w-60 tw-h-full tw-flex tw-flex-col tw-box-border tw-border-r tw-border-solid tw-border-slate-200 tw-bg-white", children: [
    /* @__PURE__ */ jsxs(NavLink, { className: "tw-py-4 tw-px-4 tw-flex tw-flex-row tw-h-16 tw-box-border tw-cursor-pointer tw-w-full tw-mb-4", to: "/", children: [
      /* @__PURE__ */ jsx("img", { src: logo, className: "tw-h-6 tw-w-6 tw-justify-center tw-items-center tw-rounded tw-flex tw-my-auto tw-select-none", alt: "fabra logo" }),
      /* @__PURE__ */ jsx("div", { className: "tw-my-auto tw-ml-2.5 tw-max-w-[150px] tw-whitespace-nowrap tw-overflow-hidden tw-select-none tw-font-bold tw-font-[Montserrat] tw-text-2xl", children: "fabra" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "tw-mx-4 tw-mb-2 tw-uppercase tw-text-xs tw-text-slate-500 tw-font-medium", children: "Overview" }),
    /* @__PURE__ */ jsx("div", { className: routeContainer, children: /* @__PURE__ */ jsxs(NavLink, { className: ({ isActive }) => classNames(navLink, isActive && "tw-bg-slate-200"), to: "/", children: [
      /* @__PURE__ */ jsx(HomeIcon, { className: "tw-h-4", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("div", { className: route, children: "Home" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: routeContainer, children: /* @__PURE__ */ jsxs(NavLink, { className: ({ isActive }) => classNames(navLink, isActive && "tw-bg-slate-200"), to: "/syncs", children: [
      /* @__PURE__ */ jsx(ArrowPathIcon, { className: "tw-h-4", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("div", { className: route, children: "Syncs" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: routeContainer, children: /* @__PURE__ */ jsx(Tooltip, { label: "Coming soon!", children: /* @__PURE__ */ jsxs("div", { className: navLink, children: [
      /* @__PURE__ */ jsx(BellIcon, { className: "tw-h-4", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("div", { className: route, children: "Notifications" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "tw-my-5 tw-px-4", children: /* @__PURE__ */ jsx("div", { className: "tw-border-b tw-border-solid tw-border-slate-300" }) }),
    /* @__PURE__ */ jsx("div", { className: "tw-mx-4 tw-my-2 tw-uppercase tw-text-xs tw-text-slate-500 tw-font-medium", children: "Develop" }),
    /* @__PURE__ */ jsx("div", { className: routeContainer, children: /* @__PURE__ */ jsxs(NavLink, { className: ({ isActive }) => classNames(navLink, isActive && "tw-bg-slate-200"), to: "/apikey", children: [
      /* @__PURE__ */ jsx(KeyIcon, { className: "tw-h-4", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("div", { className: route, children: "API Keys" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: routeContainer, children: /* @__PURE__ */ jsxs(NavLink, { className: ({ isActive }) => classNames(navLink, isActive && "tw-bg-slate-200"), to: "/destinations", children: [
      /* @__PURE__ */ jsx(CircleStackIcon, { className: "tw-h-4", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("div", { className: route, children: "Destinations" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: routeContainer, children: /* @__PURE__ */ jsxs(NavLink, { className: ({ isActive }) => classNames(navLink, isActive && "tw-bg-slate-200"), to: "/objects", children: [
      /* @__PURE__ */ jsx(CubeIcon, { className: "tw-h-4", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("div", { className: route, children: "Objects" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: routeContainer, children: /* @__PURE__ */ jsxs("a", { className: navLink, href: "https://docs.fabra.io/", target: "_blank", rel: "noreferrer", children: [
      /* @__PURE__ */ jsx(MapIcon, { className: "tw-h-4", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("div", { className: route, children: "Documentation" }),
      /* @__PURE__ */ jsx(ArrowTopRightOnSquareIcon, { className: "tw-h-4 tw-ml-auto tw-mr-3" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { id: "bottomSection", className: "tw-mt-auto tw-mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "tw-mx-4 tw-mb-2 tw-uppercase tw-text-xs tw-text-slate-500 tw-font-medium", children: "Account" }),
      /* @__PURE__ */ jsx("div", { className: routeContainer, children: /* @__PURE__ */ jsxs(NavLink, { className: ({ isActive }) => classNames(navLink, isActive && "tw-bg-slate-200"), to: "/team", children: [
        /* @__PURE__ */ jsx(UserPlusIcon, { className: "tw-h-4 tw-ml-[1px] -tw-mr-[0.5px]", strokeWidth: "2" }),
        /* @__PURE__ */ jsx("div", { className: route, children: "Team" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: routeContainer, children: /* @__PURE__ */ jsxs("a", { className: navLink, href: "mailto:nick@fabra.io?subject=Help with Fabra", children: [
        /* @__PURE__ */ jsx(QuestionCircleIcon, { className: "tw-h-[18px] tw-mt-[1px]", strokeWidth: "2" }),
        /* @__PURE__ */ jsx("div", { className: route, children: "Help" })
      ] }) })
    ] })
  ] }) });
};
const Notification = ({ show, setShow }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      "aria-live": "assertive",
      className: "tw-pointer-events-none tw-fixed tw-inset-0 tw-flex tw-items-end tw-px-4 tw-py-6 sm:tw-items-start sm:tw-p-6",
      children: /* @__PURE__ */ jsx("div", { className: "tw-flex tw-w-full tw-flex-col tw-items-center tw-space-y-4 sm:tw-items-end", children: /* @__PURE__ */ jsx(
        tt,
        {
          show,
          as: reactExports.Fragment,
          enter: "tw-transform tw-ease-out tw-duration-300 tw-transition",
          enterFrom: "tw-translate-y-2 tw-opacity-0 sm:tw-translate-y-0 sm:tw-translate-x-2",
          enterTo: "tw-translate-y-0 tw-opacity-100 sm:tw-translate-x-0",
          leave: "tw-transition tw-ease-in tw-duration-100",
          leaveFrom: "tw-opacity-100",
          leaveTo: "tw-opacity-0",
          children: /* @__PURE__ */ jsx("div", { className: "tw-pointer-events-auto tw-w-full tw-max-w-sm tw-overflow-hidden tw-rounded-lg tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-slate-900 tw-ring-opacity-5", children: /* @__PURE__ */ jsx("div", { className: "tw-p-4", children: /* @__PURE__ */ jsxs("div", { className: "tw-flex tw-items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "tw-flex tw-w-0 tw-flex-1 tw-justify-between", children: [
              /* @__PURE__ */ jsx("p", { className: "tw-w-0 tw-flex-1 tw-text-sm tw-font-medium tw-text-slate-900", children: "Discussion archived" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "tw-ml-3 tw-flex-shrink-0 tw-rounded-md tw-bg-white tw-text-sm tw-font-medium tw-text-indigo-600 hover:tw-text-indigo-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2",
                  children: "Undo"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "tw-ml-4 tw-flex tw-flex-shrink-0", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: "tw-inline-flex tw-rounded-md tw-bg-white tw-text-slate-400 hover:tw-text-slate-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2",
                onClick: () => {
                  setShow(false);
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "tw-sr-only", children: "Close" }),
                  /* @__PURE__ */ jsx(XMarkIcon, { className: "tw-h-5 tw-w-5", "aria-hidden": "true" })
                ]
              }
            ) })
          ] }) }) })
        }
      ) })
    }
  ) });
};
const PrivateKey = ({ keyValue }) => {
  const [visible, setVisible] = reactExports.useState(false);
  const [copyText, setCopyText] = reactExports.useState("Copy");
  const copy = () => {
    navigator.clipboard.writeText(keyValue ? keyValue : "");
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy"), 1200);
  };
  return /* @__PURE__ */ jsx("div", { className: "tw-border tw-border-solid tw-border-slate-300 tw-rounded-lg tw-max-w-lg tw-overflow-x-auto tw-overscroll-contain tw-p-2 tw-bg-white", children: visible ? /* @__PURE__ */ jsxs("div", { className: "tw-flex tw-items-center", children: [
    /* @__PURE__ */ jsx(EyeSlashIcon, { className: "tw-h-4 tw-ml-1 tw-mr-2 tw-cursor-pointer", onClick: () => setVisible(false) }),
    keyValue,
    /* @__PURE__ */ jsx(Tooltip, { label: copyText, placement: "top", hideOnClick: false, children: /* @__PURE__ */ jsx(Square2StackIcon, { className: "tw-h-4 tw-ml-auto tw-mr-1 tw-cursor-pointer tw-outline-none", onClick: copy }) })
  ] }) : /* @__PURE__ */ jsxs("div", { className: "tw-flex tw-items-center", children: [
    /* @__PURE__ */ jsx(EyeIcon, { className: "tw-h-4 tw-cursor-pointer tw-ml-1 tw-mr-2", onClick: () => setVisible(true) }),
    "•••••••••••••••••••••••••••••••••••••••••••••••••••",
    /* @__PURE__ */ jsx(Tooltip, { label: copyText, placement: "top", hideOnClick: false, children: /* @__PURE__ */ jsx(Square2StackIcon, { className: "tw-h-4 tw-ml-auto tw-mr-1 tw-cursor-pointer tw-outline-none", onClick: copy }) })
  ] }) });
};
const QueryResultsTable = (props) => {
  return /* @__PURE__ */ jsx("div", { className: "tw-rounded-md tw-overflow-auto tw-max-h-full tw-flow-root", style: { contain: "paint" }, children: /* @__PURE__ */ jsxs("table", { children: [
    /* @__PURE__ */ jsx(ResultsSchema, { schema: props.schema }),
    /* @__PURE__ */ jsx("tbody", { className: "tw-py-2", children: props.results.map((resultRow, index2) => {
      return /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: classNames("tw-px-3 tw-py-2 tw-text-right tw-bg-gray-100 tw-tabular-nums"), children: /* @__PURE__ */ jsx("div", { className: "tw-h-5 tw-whitespace-nowrap", children: index2 + 1 }) }, -1),
        resultRow.map((resultValue, valueIndex) => {
          return /* @__PURE__ */ jsx("td", { className: classNames("tw-pl-3 tw-pr-5 tw-py-2 tw-text-left last:tw-w-full focus:tw-bg-blue-300"), children: /* @__PURE__ */ jsx("div", { className: "tw-h-5 tw-whitespace-nowrap", children: resultValue ? JSON.stringify(resultValue) : /* @__PURE__ */ jsx("span", { className: "tw-text-gray-400", children: "null" }) }) }, valueIndex);
        })
      ] }, index2);
    }) })
  ] }) });
};
const ResultsSchema = ({ schema }) => {
  return /* @__PURE__ */ jsx("thead", { className: "tw-sticky tw-top-0", children: /* @__PURE__ */ jsxs("tr", { children: [
    /* @__PURE__ */ jsx("th", { scope: "col", className: "tw-pl-3 tw-pr-5 tw-py-2 tw-bg-gray-100" }, -1),
    schema.map((fieldSchema, index2) => {
      return /* @__PURE__ */ jsx("th", { scope: "col", className: "tw-pl-3 tw-pr-5 tw-py-3 tw-text-left tw-bg-gray-100 ", children: /* @__PURE__ */ jsx("div", { className: "tw-whitespace-nowrap", children: fieldSchema.name }) }, index2);
    })
  ] }) });
};
const MemoizedResultsTable = React$j.memo(QueryResultsTable);
const DestinationSelector = (props) => {
  const { destinations, loading } = useDestinations();
  const label = props.label ? props.label : "Destination";
  return /* @__PURE__ */ jsx(
    ValidatedDropdownInput,
    {
      className: props.className,
      selected: props.destination,
      setSelected: props.setDestination,
      getElementForDisplay: (destination) => destination.display_name,
      options: destinations,
      loading,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No destinations available!",
      placeholder: props.placeholder ? props.placeholder : "Choose destination",
      label: props.showLabel ? label : void 0,
      validated: props.validated
    }
  );
};
const NamespaceSelector = (props) => {
  var _a;
  const { namespaces, loading } = useNamespaces((_a = props.connection) == null ? void 0 : _a.id);
  const label = props.label ? props.label : "Namespace";
  return /* @__PURE__ */ jsx(
    ValidatedComboInput,
    {
      className: props.className,
      selected: props.namespace,
      setSelected: props.setNamespace,
      options: namespaces,
      loading,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No namespaces available!",
      placeholder: props.placeholder ? props.placeholder : "Choose namespace",
      label: props.showLabel ? label : void 0,
      validated: props.validated
    }
  );
};
const TableSelector = (props) => {
  var _a;
  const { tables, loading } = useTables((_a = props.connection) == null ? void 0 : _a.id, props.namespace);
  const label = props.label ? props.label : "Table";
  return /* @__PURE__ */ jsx(
    ValidatedComboInput,
    {
      className: props.className,
      selected: props.tableName,
      setSelected: props.setTableName,
      options: tables,
      loading,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No tables available!",
      placeholder: props.placeholder ? props.placeholder : "Choose table",
      label: props.showLabel ? label : void 0,
      validated: props.validated
    }
  );
};
const SourceSelector = (props) => {
  const { sources, loading } = useLinkSources(props.linkToken);
  return /* @__PURE__ */ jsx(
    ValidatedDropdownInput,
    {
      className: props.className,
      selected: props.source,
      setSelected: props.setSource,
      getElementForDisplay: (source) => source.display_name,
      options: sources,
      loading,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No sources available!",
      placeholder: props.placeholder ? props.placeholder : "Choose source",
      label: "Source",
      validated: props.validated,
      dropdownHeight: props.dropdownHeight
    }
  );
};
const SourceNamespaceSelector = (props) => {
  var _a;
  const { namespaces, loading } = useLinkNamespaces((_a = props.source) == null ? void 0 : _a.id, props.linkToken);
  return /* @__PURE__ */ jsx(
    ValidatedComboInput,
    {
      className: props.className,
      selected: props.namespace,
      setSelected: props.setNamespace,
      options: namespaces,
      loading,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No namespaces available!",
      placeholder: props.placeholder ? props.placeholder : "Choose namespace",
      label: "Namespace",
      validated: props.validated,
      dropdownHeight: props.dropdownHeight
    }
  );
};
const SourceTableSelector = (props) => {
  var _a;
  const { tables, loading } = useLinkTables((_a = props.source) == null ? void 0 : _a.id, props.namespace, props.linkToken);
  return /* @__PURE__ */ jsx(
    ValidatedComboInput,
    {
      className: props.className,
      selected: props.tableName,
      setSelected: props.setTableName,
      options: tables,
      loading,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No tables available!",
      placeholder: props.placeholder ? props.placeholder : "Choose table",
      label: "Table",
      validated: props.validated,
      dropdownHeight: props.dropdownHeight
    }
  );
};
const ObjectSelector = (props) => {
  const { objects, loading } = useObjects(props.linkToken);
  return /* @__PURE__ */ jsx(
    ValidatedDropdownInput,
    {
      className: props.className,
      selected: props.object,
      setSelected: props.setObject,
      getElementForDisplay: (object) => object.display_name,
      options: objects,
      loading,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No objects available!",
      placeholder: props.placeholder ? props.placeholder : "Choose object",
      label: props.label ? props.label : "Object",
      validated: props.validated
    }
  );
};
const LinkFieldSelector = (props) => {
  var _a;
  const { schema, loading } = useLinkSchema((_a = props.source) == null ? void 0 : _a.id, props.namespace, props.tableName, props.linkToken);
  return /* @__PURE__ */ jsx(
    ValidatedComboInput,
    {
      className: props.className,
      options: schema,
      selected: props.field,
      setSelected: props.setField,
      getElementForDisplay: (value) => value.name,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No field available!",
      placeholder: props.placeholder ? props.placeholder : "Choose field",
      label: props.label,
      loading,
      validated: props.validated
    }
  );
};
const FieldSelector = (props) => {
  var _a;
  const { schema, loading } = useSchema((_a = props.connection) == null ? void 0 : _a.id, props.namespace, props.tableName);
  const fields = props.predefinedFields ? props.predefinedFields : schema;
  const label = props.label ? props.label : "Field";
  return /* @__PURE__ */ jsx(
    ValidatedComboInput,
    {
      className: props.className,
      options: fields,
      selected: props.field,
      setSelected: props.setField,
      getElementForDisplay: (value) => value.name,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No field available!",
      placeholder: props.placeholder ? props.placeholder : "Choose field",
      label: props.showLabel ? label : void 0,
      loading,
      validated: props.validated
    }
  );
};
const FieldValueSelector = (props) => {
  var _a, _b;
  const { fieldValues, loading } = useFieldValues((_a = props.connection) == null ? void 0 : _a.id, props.namespace, props.tableName, (_b = props.field) == null ? void 0 : _b.name);
  return /* @__PURE__ */ jsx(
    ValidatedComboInput,
    {
      className: props.className,
      selected: props.fieldValue,
      setSelected: props.setFieldValue,
      options: fieldValues,
      getElementForDisplay: (propertyValue) => propertyValue ? propertyValue : "<empty>",
      loading,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No field values available!",
      placeholder: props.placeholder ? props.placeholder : "Choose field value",
      validated: props.validated,
      allowCustom: true
    }
  );
};
const FieldTypeSelector = (props) => {
  const fieldTypes = Object.values(FieldType);
  return /* @__PURE__ */ jsx(
    ValidatedComboInput,
    {
      className: props.className,
      selected: props.type,
      setSelected: props.setFieldType,
      options: fieldTypes,
      getElementForDisplay: (propertyValue) => propertyValue ? propertyValue : "<empty>",
      loading: false,
      noOptionsString: props.noOptionsString ? props.noOptionsString : "No field types available!",
      placeholder: props.placeholder ? props.placeholder : "Choose field type",
      validated: props.validated
    }
  );
};
const DateRangeSelector = (props) => {
  return /* @__PURE__ */ jsx(
    ValidatedDropdownInput,
    {
      className: props.className,
      selected: props.dateRange,
      setSelected: props.setDateRange,
      options: ["Today", "Last 7 days", "Last 14 days", "Last 30 days", "Last 60 days", "Last 90 days", "Last 365 days", "Year to date", "All time"],
      loading: false,
      noOptionsString: "",
      placeholder: props.placeholder ? props.placeholder : "Choose date range",
      validated: props.validated
    }
  );
};
const ExpandingTextarea = (props) => {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "0px";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [props.value]);
  return /* @__PURE__ */ jsx("textarea", { ...props, ref });
};
export {
  AddDatabase,
  BackButton,
  BoxLeftIcon,
  BoxRightIcon,
  Button,
  Checkbox,
  CursorRayIcon,
  DashboardIcon,
  DateRangeSelector,
  DestinationSelector,
  DivButton,
  DotsLoading,
  ExpandingTextarea,
  FieldSelector,
  FieldTypeSelector,
  FieldValueSelector,
  FormButton,
  GithubIcon,
  GoogleIcon,
  GoogleWhiteIcon,
  Header,
  InfoIcon,
  Input,
  LinkButton,
  LinkFieldSelector,
  Loading,
  LogoLoading,
  LongRightArrow,
  MemoizedResultsTable,
  Modal,
  NamespaceSelector,
  NavButton,
  NavigationBar,
  Notification,
  ObjectSelector,
  PrivateKey,
  QuestionCircleIcon,
  RightArrow,
  SaveIcon,
  SourceNamespaceSelector,
  SourceSelector,
  SourceTableSelector,
  TableSelector,
  Tooltip,
  UpgradeBanner,
  ValidatedComboInput,
  ValidatedDropdownInput,
  ValidatedInput
};
