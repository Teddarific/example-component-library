function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i]
    if (typeof e !== 'string' && !Array.isArray(e)) {
      for (const k2 in e) {
        if (k2 !== 'default' && !(k2 in n2)) {
          const d = Object.getOwnPropertyDescriptor(e, k2)
          if (d) {
            Object.defineProperty(
              n2,
              k2,
              d.get
                ? d
                : {
                    enumerable: true,
                    get: () => e[k2],
                  }
            )
          }
        }
      }
    }
  }
  return Object.freeze(
    Object.defineProperty(n2, Symbol.toStringTag, { value: 'Module' })
  )
}
function getDefaultExportFromCjs(x2) {
  return x2 &&
    x2.__esModule &&
    Object.prototype.hasOwnProperty.call(x2, 'default')
    ? x2['default']
    : x2
}
var jsxRuntimeExports = {}
var jsxRuntime = {
  get exports() {
    return jsxRuntimeExports
  },
  set exports(v2) {
    jsxRuntimeExports = v2
  },
}
var reactJsxRuntime_production_min = {}
var reactExports = {}
var react = {
  get exports() {
    return reactExports
  },
  set exports(v2) {
    reactExports = v2
  },
}
var react_production_min = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for('react.element'),
  n$1 = Symbol.for('react.portal'),
  p$1 = Symbol.for('react.fragment'),
  q$1 = Symbol.for('react.strict_mode'),
  r = Symbol.for('react.profiler'),
  t = Symbol.for('react.provider'),
  u = Symbol.for('react.context'),
  v = Symbol.for('react.forward_ref'),
  w = Symbol.for('react.suspense'),
  x = Symbol.for('react.memo'),
  y = Symbol.for('react.lazy'),
  z = Symbol.iterator
function A(a) {
  if (null === a || 'object' !== typeof a) return null
  a = (z && a[z]) || a['@@iterator']
  return 'function' === typeof a ? a : null
}
var B = {
    isMounted: function () {
      return false
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  C = Object.assign,
  D = {}
function E(a, b, e) {
  this.props = a
  this.context = b
  this.refs = D
  this.updater = e || B
}
E.prototype.isReactComponent = {}
E.prototype.setState = function (a, b) {
  if ('object' !== typeof a && 'function' !== typeof a && null != a)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, a, b, 'setState')
}
E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, 'forceUpdate')
}
function F() {}
F.prototype = E.prototype
function G(a, b, e) {
  this.props = a
  this.context = b
  this.refs = D
  this.updater = e || B
}
var H = (G.prototype = new F())
H.constructor = G
C(H, E.prototype)
H.isPureReactComponent = true
var I = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K = { current: null },
  L = { key: true, ref: true, __self: true, __source: true }
function M(a, b, e) {
  var d,
    c = {},
    k2 = null,
    h = null
  if (null != b)
    for (d in (void 0 !== b.ref && (h = b.ref),
    void 0 !== b.key && (k2 = '' + b.key),
    b))
      J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d])
  var g = arguments.length - 2
  if (1 === g) c.children = e
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2]
    c.children = f2
  }
  if (a && a.defaultProps)
    for (d in ((g = a.defaultProps), g)) void 0 === c[d] && (c[d] = g[d])
  return {
    $$typeof: l$1,
    type: a,
    key: k2,
    ref: h,
    props: c,
    _owner: K.current,
  }
}
function N(a, b) {
  return {
    $$typeof: l$1,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner,
  }
}
function O(a) {
  return 'object' === typeof a && null !== a && a.$$typeof === l$1
}
function escape(a) {
  var b = { '=': '=0', ':': '=2' }
  return (
    '$' +
    a.replace(/[=:]/g, function (a2) {
      return b[a2]
    })
  )
}
var P = /\/+/g
function Q(a, b) {
  return 'object' === typeof a && null !== a && null != a.key
    ? escape('' + a.key)
    : b.toString(36)
}
function R(a, b, e, d, c) {
  var k2 = typeof a
  if ('undefined' === k2 || 'boolean' === k2) a = null
  var h = false
  if (null === a) h = true
  else
    switch (k2) {
      case 'string':
      case 'number':
        h = true
        break
      case 'object':
        switch (a.$$typeof) {
          case l$1:
          case n$1:
            h = true
        }
    }
  if (h)
    return (
      (h = a),
      (c = c(h)),
      (a = '' === d ? '.' + Q(h, 0) : d),
      I(c)
        ? ((e = ''),
          null != a && (e = a.replace(P, '$&/') + '/'),
          R(c, b, e, '', function (a2) {
            return a2
          }))
        : null != c &&
          (O(c) &&
            (c = N(
              c,
              e +
                (!c.key || (h && h.key === c.key)
                  ? ''
                  : ('' + c.key).replace(P, '$&/') + '/') +
                a
            )),
          b.push(c)),
      1
    )
  h = 0
  d = '' === d ? '.' : d + ':'
  if (I(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g]
      var f2 = d + Q(k2, g)
      h += R(k2, b, e, f2, c)
    }
  else if (((f2 = A(a)), 'function' === typeof f2))
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      (k2 = k2.value), (f2 = d + Q(k2, g++)), (h += R(k2, b, e, f2, c))
  else if ('object' === k2)
    throw (
      ((b = String(a)),
      Error(
        'Objects are not valid as a React child (found: ' +
          ('[object Object]' === b
            ? 'object with keys {' + Object.keys(a).join(', ') + '}'
            : b) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return h
}
function S(a, b, e) {
  if (null == a) return a
  var d = [],
    c = 0
  R(a, d, '', '', function (a2) {
    return b.call(e, a2, c++)
  })
  return d
}
function T(a) {
  if (-1 === a._status) {
    var b = a._result
    b = b()
    b.then(
      function (b2) {
        if (0 === a._status || -1 === a._status)
          (a._status = 1), (a._result = b2)
      },
      function (b2) {
        if (0 === a._status || -1 === a._status)
          (a._status = 2), (a._result = b2)
      }
    )
    ;-1 === a._status && ((a._status = 0), (a._result = b))
  }
  if (1 === a._status) return a._result.default
  throw a._result
}
var U = { current: null },
  V = { transition: null },
  W = {
    ReactCurrentDispatcher: U,
    ReactCurrentBatchConfig: V,
    ReactCurrentOwner: K,
  }
react_production_min.Children = {
  map: S,
  forEach: function (a, b, e) {
    S(
      a,
      function () {
        b.apply(this, arguments)
      },
      e
    )
  },
  count: function (a) {
    var b = 0
    S(a, function () {
      b++
    })
    return b
  },
  toArray: function (a) {
    return (
      S(a, function (a2) {
        return a2
      }) || []
    )
  },
  only: function (a) {
    if (!O(a))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return a
  },
}
react_production_min.Component = E
react_production_min.Fragment = p$1
react_production_min.Profiler = r
react_production_min.PureComponent = G
react_production_min.StrictMode = q$1
react_production_min.Suspense = w
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W
react_production_min.cloneElement = function (a, b, e) {
  if (null === a || void 0 === a)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        a +
        '.'
    )
  var d = C({}, a.props),
    c = a.key,
    k2 = a.ref,
    h = a._owner
  if (null != b) {
    void 0 !== b.ref && ((k2 = b.ref), (h = K.current))
    void 0 !== b.key && (c = '' + b.key)
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps
    for (f2 in b)
      J.call(b, f2) &&
        !L.hasOwnProperty(f2) &&
        (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2])
  }
  var f2 = arguments.length - 2
  if (1 === f2) d.children = e
  else if (1 < f2) {
    g = Array(f2)
    for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2]
    d.children = g
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h }
}
react_production_min.createContext = function (a) {
  a = {
    $$typeof: u,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null,
  }
  a.Provider = { $$typeof: t, _context: a }
  return (a.Consumer = a)
}
react_production_min.createElement = M
react_production_min.createFactory = function (a) {
  var b = M.bind(null, a)
  b.type = a
  return b
}
react_production_min.createRef = function () {
  return { current: null }
}
react_production_min.forwardRef = function (a) {
  return { $$typeof: v, render: a }
}
react_production_min.isValidElement = O
react_production_min.lazy = function (a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T }
}
react_production_min.memo = function (a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b }
}
react_production_min.startTransition = function (a) {
  var b = V.transition
  V.transition = {}
  try {
    a()
  } finally {
    V.transition = b
  }
}
react_production_min.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
react_production_min.useCallback = function (a, b) {
  return U.current.useCallback(a, b)
}
react_production_min.useContext = function (a) {
  return U.current.useContext(a)
}
react_production_min.useDebugValue = function () {}
react_production_min.useDeferredValue = function (a) {
  return U.current.useDeferredValue(a)
}
react_production_min.useEffect = function (a, b) {
  return U.current.useEffect(a, b)
}
react_production_min.useId = function () {
  return U.current.useId()
}
react_production_min.useImperativeHandle = function (a, b, e) {
  return U.current.useImperativeHandle(a, b, e)
}
react_production_min.useInsertionEffect = function (a, b) {
  return U.current.useInsertionEffect(a, b)
}
react_production_min.useLayoutEffect = function (a, b) {
  return U.current.useLayoutEffect(a, b)
}
react_production_min.useMemo = function (a, b) {
  return U.current.useMemo(a, b)
}
react_production_min.useReducer = function (a, b, e) {
  return U.current.useReducer(a, b, e)
}
react_production_min.useRef = function (a) {
  return U.current.useRef(a)
}
react_production_min.useState = function (a) {
  return U.current.useState(a)
}
react_production_min.useSyncExternalStore = function (a, b, e) {
  return U.current.useSyncExternalStore(a, b, e)
}
react_production_min.useTransition = function () {
  return U.current.useTransition()
}
react_production_min.version = '18.2.0'
;(function (module) {
  {
    module.exports = react_production_min
  }
})(react)
const index = /* @__PURE__ */ getDefaultExportFromCjs(reactExports)
const React = /* @__PURE__ */ _mergeNamespaces(
  {
    __proto__: null,
    default: index,
  },
  [reactExports]
)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports,
  k = Symbol.for('react.element'),
  l = Symbol.for('react.fragment'),
  m = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p = { key: true, ref: true, __self: true, __source: true }
function q(c, a, g) {
  var b,
    d = {},
    e = null,
    h = null
  void 0 !== g && (e = '' + g)
  void 0 !== a.key && (e = '' + a.key)
  void 0 !== a.ref && (h = a.ref)
  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b])
  if (c && c.defaultProps)
    for (b in ((a = c.defaultProps), a)) void 0 === d[b] && (d[b] = a[b])
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current }
}
reactJsxRuntime_production_min.Fragment = l
reactJsxRuntime_production_min.jsx = q
reactJsxRuntime_production_min.jsxs = q
;(function (module) {
  {
    module.exports = reactJsxRuntime_production_min
  }
})(jsxRuntime)
const jsx = jsxRuntimeExports.jsx
const jsxs = jsxRuntimeExports.jsxs
var classnamesExports = {}
var classnames = {
  get exports() {
    return classnamesExports
  },
  set exports(v2) {
    classnamesExports = v2
  },
}
/*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
  */
;(function (module) {
  ;(function () {
    var hasOwn = {}.hasOwnProperty
    function classNames2() {
      var classes = []
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i]
        if (!arg) continue
        var argType = typeof arg
        if (argType === 'string' || argType === 'number') {
          classes.push(arg)
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg)
            if (inner) {
              classes.push(inner)
            }
          }
        } else if (argType === 'object') {
          if (
            arg.toString !== Object.prototype.toString &&
            !arg.toString.toString().includes('[native code]')
          ) {
            classes.push(arg.toString())
            continue
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key)
            }
          }
        }
      }
      return classes.join(' ')
    }
    if (module.exports) {
      classNames2.default = classNames2
      module.exports = classNames2
    } else {
      window.classNames = classNames2
    }
  })()
})(classnames)
const classNames = classnamesExports
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
function _extends$2() {
  _extends$2 = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      }
  return _extends$2.apply(this, arguments)
}
var Action
;(function (Action2) {
  Action2['Pop'] = 'POP'
  Action2['Push'] = 'PUSH'
  Action2['Replace'] = 'REPLACE'
})(Action || (Action = {}))
function invariant(value, message) {
  if (value === false || value === null || typeof value === 'undefined') {
    throw new Error(message)
  }
}
function createPath(_ref) {
  let { pathname = '/', search = '', hash = '' } = _ref
  if (search && search !== '?')
    pathname += search.charAt(0) === '?' ? search : '?' + search
  if (hash && hash !== '#')
    pathname += hash.charAt(0) === '#' ? hash : '#' + hash
  return pathname
}
function parsePath(path) {
  let parsedPath = {}
  if (path) {
    let hashIndex = path.indexOf('#')
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex)
      path = path.substr(0, hashIndex)
    }
    let searchIndex = path.indexOf('?')
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex)
      path = path.substr(0, searchIndex)
    }
    if (path) {
      parsedPath.pathname = path
    }
  }
  return parsedPath
}
var ResultType
;(function (ResultType2) {
  ResultType2['data'] = 'data'
  ResultType2['deferred'] = 'deferred'
  ResultType2['redirect'] = 'redirect'
  ResultType2['error'] = 'error'
})(ResultType || (ResultType = {}))
function stripBasename(pathname, basename) {
  if (basename === '/') return pathname
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null
  }
  let startIndex = basename.endsWith('/')
    ? basename.length - 1
    : basename.length
  let nextChar = pathname.charAt(startIndex)
  if (nextChar && nextChar !== '/') {
    return null
  }
  return pathname.slice(startIndex) || '/'
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = '/'
  }
  let {
    pathname: toPathname,
    search = '',
    hash = '',
  } = typeof to === 'string' ? parsePath(to) : to
  let pathname = toPathname
    ? toPathname.startsWith('/')
      ? toPathname
      : resolvePathname(toPathname, fromPathname)
    : fromPathname
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash),
  }
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, '').split('/')
  let relativeSegments = relativePath.split('/')
  relativeSegments.forEach((segment) => {
    if (segment === '..') {
      if (segments.length > 1) segments.pop()
    } else if (segment !== '.') {
      segments.push(segment)
    }
  })
  return segments.length > 1 ? segments.join('/') : '/'
}
function getInvalidPathError(char, field, dest, path) {
  return (
    "Cannot include a '" +
    char +
    "' character in a manually specified " +
    ('`to.' +
      field +
      '` field [' +
      JSON.stringify(path) +
      '].  Please separate it out to the ') +
    ('`to.' +
      dest +
      '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function getPathContributingMatches(matches) {
  return matches.filter(
    (match, index2) =>
      index2 === 0 || (match.route.path && match.route.path.length > 0)
  )
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false
  }
  let to
  if (typeof toArg === 'string') {
    to = parsePath(toArg)
  } else {
    to = _extends$2({}, toArg)
    invariant(
      !to.pathname || !to.pathname.includes('?'),
      getInvalidPathError('?', 'pathname', 'search', to)
    )
    invariant(
      !to.pathname || !to.pathname.includes('#'),
      getInvalidPathError('#', 'pathname', 'hash', to)
    )
    invariant(
      !to.search || !to.search.includes('#'),
      getInvalidPathError('#', 'search', 'hash', to)
    )
  }
  let isEmptyPath = toArg === '' || to.pathname === ''
  let toPathname = isEmptyPath ? '/' : to.pathname
  let from
  if (isPathRelative || toPathname == null) {
    from = locationPathname
  } else {
    let routePathnameIndex = routePathnames.length - 1
    if (toPathname.startsWith('..')) {
      let toSegments = toPathname.split('/')
      while (toSegments[0] === '..') {
        toSegments.shift()
        routePathnameIndex -= 1
      }
      to.pathname = toSegments.join('/')
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : '/'
  }
  let path = resolvePath(to, from)
  let hasExplicitTrailingSlash =
    toPathname && toPathname !== '/' && toPathname.endsWith('/')
  let hasCurrentTrailingSlash =
    (isEmptyPath || toPathname === '.') && locationPathname.endsWith('/')
  if (
    !path.pathname.endsWith('/') &&
    (hasExplicitTrailingSlash || hasCurrentTrailingSlash)
  ) {
    path.pathname += '/'
  }
  return path
}
const joinPaths = (paths) => paths.join('/').replace(/\/\/+/g, '/')
const normalizeSearch = (search) =>
  !search || search === '?'
    ? ''
    : search.startsWith('?')
    ? search
    : '?' + search
const normalizeHash = (hash) =>
  !hash || hash === '#' ? '' : hash.startsWith('#') ? hash : '#' + hash
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
function isPolyfill(x2, y2) {
  return (
    (x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2)) || (x2 !== x2 && y2 !== y2)
  )
}
const is = typeof Object.is === 'function' ? Object.is : isPolyfill
const { useState, useEffect, useLayoutEffect, useDebugValue } = React
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  const value = getSnapshot()
  const [{ inst }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot,
    },
  })
  useLayoutEffect(() => {
    inst.value = value
    inst.getSnapshot = getSnapshot
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst,
      })
    }
  }, [subscribe, value, getSnapshot])
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst,
      })
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst,
        })
      }
    }
    return subscribe(handleStoreChange)
  }, [subscribe])
  useDebugValue(value)
  return value
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot
  const prevValue = inst.value
  try {
    const nextValue = latestGetSnapshot()
    return !is(prevValue, nextValue)
  } catch (error) {
    return true
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot()
}
const canUseDOM = !!(
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
)
const isServerEnvironment = !canUseDOM
const shim = isServerEnvironment
  ? useSyncExternalStore$1
  : useSyncExternalStore$2
'useSyncExternalStore' in React
  ? ((module) => module.useSyncExternalStore)(React)
  : shim
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null)
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null)
const LocationContext = /* @__PURE__ */ reactExports.createContext(null)
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: [],
})
function useHref(to, _temp) {
  let { relative } = _temp === void 0 ? {} : _temp
  !useInRouterContext() ? invariant(false) : void 0
  let { basename, navigator } = reactExports.useContext(NavigationContext)
  let { hash, pathname, search } = useResolvedPath(to, {
    relative,
  })
  let joinedPathname = pathname
  if (basename !== '/') {
    joinedPathname =
      pathname === '/' ? basename : joinPaths([basename, pathname])
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash,
  })
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0
  return reactExports.useContext(LocationContext).location
}
function useNavigate() {
  !useInRouterContext() ? invariant(false) : void 0
  let { basename, navigator } = reactExports.useContext(NavigationContext)
  let { matches } = reactExports.useContext(RouteContext)
  let { pathname: locationPathname } = useLocation()
  let routePathnamesJson = JSON.stringify(
    getPathContributingMatches(matches).map((match) => match.pathnameBase)
  )
  let activeRef = reactExports.useRef(false)
  reactExports.useEffect(() => {
    activeRef.current = true
  })
  let navigate = reactExports.useCallback(
    function (to, options) {
      if (options === void 0) {
        options = {}
      }
      if (!activeRef.current) return
      if (typeof to === 'number') {
        navigator.go(to)
        return
      }
      let path = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === 'path'
      )
      if (basename !== '/') {
        path.pathname =
          path.pathname === '/'
            ? basename
            : joinPaths([basename, path.pathname])
      }
      ;(!!options.replace ? navigator.replace : navigator.push)(
        path,
        options.state,
        options
      )
    },
    [basename, navigator, routePathnamesJson, locationPathname]
  )
  return navigate
}
function useResolvedPath(to, _temp2) {
  let { relative } = _temp2 === void 0 ? {} : _temp2
  let { matches } = reactExports.useContext(RouteContext)
  let { pathname: locationPathname } = useLocation()
  let routePathnamesJson = JSON.stringify(
    getPathContributingMatches(matches).map((match) => match.pathnameBase)
  )
  return reactExports.useMemo(
    () =>
      resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === 'path'
      ),
    [to, routePathnamesJson, locationPathname, relative]
  )
}
var DataRouterHook$1
;(function (DataRouterHook2) {
  DataRouterHook2['UseBlocker'] = 'useBlocker'
  DataRouterHook2['UseRevalidator'] = 'useRevalidator'
})(DataRouterHook$1 || (DataRouterHook$1 = {}))
var DataRouterStateHook$1
;(function (DataRouterStateHook2) {
  DataRouterStateHook2['UseBlocker'] = 'useBlocker'
  DataRouterStateHook2['UseLoaderData'] = 'useLoaderData'
  DataRouterStateHook2['UseActionData'] = 'useActionData'
  DataRouterStateHook2['UseRouteError'] = 'useRouteError'
  DataRouterStateHook2['UseNavigation'] = 'useNavigation'
  DataRouterStateHook2['UseRouteLoaderData'] = 'useRouteLoaderData'
  DataRouterStateHook2['UseMatches'] = 'useMatches'
  DataRouterStateHook2['UseRevalidator'] = 'useRevalidator'
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}))
var AwaitRenderStatus
;(function (AwaitRenderStatus2) {
  AwaitRenderStatus2[(AwaitRenderStatus2['pending'] = 0)] = 'pending'
  AwaitRenderStatus2[(AwaitRenderStatus2['success'] = 1)] = 'success'
  AwaitRenderStatus2[(AwaitRenderStatus2['error'] = 2)] = 'error'
})(AwaitRenderStatus || (AwaitRenderStatus = {}))
new Promise(() => {})
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
function _extends$1() {
  _extends$1 = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      }
  return _extends$1.apply(this, arguments)
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {}
  var target = {}
  var sourceKeys = Object.keys(source)
  var key, i
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i]
    if (excluded.indexOf(key) >= 0) continue
    target[key] = source[key]
  }
  return target
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}
function shouldProcessLinkClick(event, target) {
  return (
    event.button === 0 && // Ignore everything but left clicks
    (!target || target === '_self') && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event)
  )
}
const _excluded = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  _excluded2 = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'children',
  ]
const isBrowser =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(
  _ref4,
  ref
) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset,
    } = _ref4,
    rest = _objectWithoutPropertiesLoose(_ref4, _excluded)
  let { basename } = reactExports.useContext(NavigationContext)
  let absoluteHref
  let isExternal = false
  if (typeof to === 'string' && ABSOLUTE_URL_REGEX.test(to)) {
    absoluteHref = to
    if (isBrowser) {
      let currentUrl = new URL(window.location.href)
      let targetUrl = to.startsWith('//')
        ? new URL(currentUrl.protocol + to)
        : new URL(to)
      let path = stripBasename(targetUrl.pathname, basename)
      if (targetUrl.origin === currentUrl.origin && path != null) {
        to = path + targetUrl.search + targetUrl.hash
      } else {
        isExternal = true
      }
    }
  }
  let href = useHref(to, {
    relative,
  })
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
  })
  function handleClick(event) {
    if (onClick) onClick(event)
    if (!event.defaultPrevented) {
      internalOnClick(event)
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement(
      'a',
      _extends$1({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref,
        target,
      })
    )
  )
})
const NavLink = /* @__PURE__ */ reactExports.forwardRef(function NavLinkWithRef(
  _ref5,
  ref
) {
  let {
      'aria-current': ariaCurrentProp = 'page',
      caseSensitive = false,
      className: classNameProp = '',
      end = false,
      style: styleProp,
      to,
      children,
    } = _ref5,
    rest = _objectWithoutPropertiesLoose(_ref5, _excluded2)
  let path = useResolvedPath(to, {
    relative: rest.relative,
  })
  let location = useLocation()
  let routerState = reactExports.useContext(DataRouterStateContext)
  let { navigator } = reactExports.useContext(NavigationContext)
  let toPathname = navigator.encodeLocation
    ? navigator.encodeLocation(path).pathname
    : path.pathname
  let locationPathname = location.pathname
  let nextLocationPathname =
    routerState && routerState.navigation && routerState.navigation.location
      ? routerState.navigation.location.pathname
      : null
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase()
    nextLocationPathname = nextLocationPathname
      ? nextLocationPathname.toLowerCase()
      : null
    toPathname = toPathname.toLowerCase()
  }
  let isActive =
    locationPathname === toPathname ||
    (!end &&
      locationPathname.startsWith(toPathname) &&
      locationPathname.charAt(toPathname.length) === '/')
  let isPending =
    nextLocationPathname != null &&
    (nextLocationPathname === toPathname ||
      (!end &&
        nextLocationPathname.startsWith(toPathname) &&
        nextLocationPathname.charAt(toPathname.length) === '/'))
  let ariaCurrent = isActive ? ariaCurrentProp : void 0
  let className
  if (typeof classNameProp === 'function') {
    className = classNameProp({
      isActive,
      isPending,
    })
  } else {
    className = [
      classNameProp,
      isActive ? 'active' : null,
      isPending ? 'pending' : null,
    ]
      .filter(Boolean)
      .join(' ')
  }
  let style =
    typeof styleProp === 'function'
      ? styleProp({
          isActive,
          isPending,
        })
      : styleProp
  return /* @__PURE__ */ reactExports.createElement(
    Link,
    _extends$1({}, rest, {
      'aria-current': ariaCurrent,
      className,
      ref,
      style,
      to,
    }),
    typeof children === 'function'
      ? children({
          isActive,
          isPending,
        })
      : children
  )
})
var DataRouterHook
;(function (DataRouterHook2) {
  DataRouterHook2['UseScrollRestoration'] = 'useScrollRestoration'
  DataRouterHook2['UseSubmitImpl'] = 'useSubmitImpl'
  DataRouterHook2['UseFetcher'] = 'useFetcher'
})(DataRouterHook || (DataRouterHook = {}))
var DataRouterStateHook
;(function (DataRouterStateHook2) {
  DataRouterStateHook2['UseFetchers'] = 'useFetchers'
  DataRouterStateHook2['UseScrollRestoration'] = 'useScrollRestoration'
})(DataRouterStateHook || (DataRouterStateHook = {}))
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
  } = _temp === void 0 ? {} : _temp
  let navigate = useNavigate()
  let location = useLocation()
  let path = useResolvedPath(to, {
    relative,
  })
  return reactExports.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault()
        let replace =
          replaceProp !== void 0
            ? replaceProp
            : createPath(location) === createPath(path)
        navigate(to, {
          replace,
          state,
          preventScrollReset,
          relative,
        })
      }
    },
    [
      location,
      navigate,
      path,
      replaceProp,
      state,
      target,
      to,
      preventScrollReset,
      relative,
    ]
  )
}
function twJoin() {
  var index2 = 0
  var argument
  var resolvedValue
  var string = ''
  while (index2 < arguments.length) {
    if ((argument = arguments[index2++])) {
      if ((resolvedValue = toValue(argument))) {
        string && (string += ' ')
        string += resolvedValue
      }
    }
  }
  return string
}
function toValue(mix) {
  if (typeof mix === 'string') {
    return mix
  }
  var resolvedValue
  var string = ''
  for (var k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if ((resolvedValue = toValue(mix[k2]))) {
        string && (string += ' ')
        string += resolvedValue
      }
    }
  }
  return string
}
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      }
  return _extends.apply(this, arguments)
}
var CLASS_PART_SEPARATOR = '-'
function createClassUtils(config) {
  var classMap = createClassMap(config)
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR)
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift()
    }
    return (
      getGroupRecursive(classParts, classMap) ||
      getGroupIdForArbitraryProperty(className)
    )
  }
  function getConflictingClassGroupIds(classGroupId) {
    return config.conflictingClassGroups[classGroupId] || []
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds,
  }
}
function getGroupRecursive(classParts, classPartObject) {
  var _classPartObject$vali
  if (classParts.length === 0) {
    return classPartObject.classGroupId
  }
  var currentClassPart = classParts[0]
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart)
  var classGroupFromNextClassPart = nextClassPartObject
    ? getGroupRecursive(classParts.slice(1), nextClassPartObject)
    : void 0
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart
  }
  if (classPartObject.validators.length === 0) {
    return void 0
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR)
  return (_classPartObject$vali = classPartObject.validators.find(function (
    _ref
  ) {
    var validator = _ref.validator
    return validator(classRest)
  })) == null
    ? void 0
    : _classPartObject$vali.classGroupId
}
var arbitraryPropertyRegex = /^\[(.+)\]$/
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1]
    var property =
      arbitraryPropertyClassName == null
        ? void 0
        : arbitraryPropertyClassName.substring(
            0,
            arbitraryPropertyClassName.indexOf(':')
          )
    if (property) {
      return 'arbitrary..' + property
    }
  }
}
function createClassMap(config) {
  var theme = config.theme,
    prefix = config.prefix
  var classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: [],
  }
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(
    Object.entries(config.classGroups),
    prefix
  )
  prefixedClassGroupEntries.forEach(function (_ref2) {
    var classGroupId = _ref2[0],
      classGroup = _ref2[1]
    processClassesRecursively(classGroup, classMap, classGroupId, theme)
  })
  return classMap
}
function processClassesRecursively(
  classGroup,
  classPartObject,
  classGroupId,
  theme
) {
  classGroup.forEach(function (classDefinition) {
    if (typeof classDefinition === 'string') {
      var classPartObjectToEdit =
        classDefinition === ''
          ? classPartObject
          : getPart(classPartObject, classDefinition)
      classPartObjectToEdit.classGroupId = classGroupId
      return
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(
          classDefinition(theme),
          classPartObject,
          classGroupId,
          theme
        )
        return
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId,
      })
      return
    }
    Object.entries(classDefinition).forEach(function (_ref3) {
      var key = _ref3[0],
        classGroup2 = _ref3[1]
      processClassesRecursively(
        classGroup2,
        getPart(classPartObject, key),
        classGroupId,
        theme
      )
    })
  })
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject
  path.split(CLASS_PART_SEPARATOR).forEach(function (pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: [],
      })
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart)
  })
  return currentClassPartObject
}
function isThemeGetter(func) {
  return func.isThemeGetter
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries
  }
  return classGroupEntries.map(function (_ref4) {
    var classGroupId = _ref4[0],
      classGroup = _ref4[1]
    var prefixedClassGroup = classGroup.map(function (classDefinition) {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(
          Object.entries(classDefinition).map(function (_ref5) {
            var key = _ref5[0],
              value = _ref5[1]
            return [prefix + key, value]
          })
        )
      }
      return classDefinition
    })
    return [classGroupId, prefixedClassGroup]
  })
}
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return void 0
      },
      set: function set() {},
    }
  }
  var cacheSize = 0
  var cache = /* @__PURE__ */ new Map()
  var previousCache = /* @__PURE__ */ new Map()
  function update(key, value) {
    cache.set(key, value)
    cacheSize++
    if (cacheSize > maxCacheSize) {
      cacheSize = 0
      previousCache = cache
      cache = /* @__PURE__ */ new Map()
    }
  }
  return {
    get: function get(key) {
      var value = cache.get(key)
      if (value !== void 0) {
        return value
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value)
        return value
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value)
      } else {
        update(key, value)
      }
    },
  }
}
var IMPORTANT_MODIFIER = '!'
function createSplitModifiers(config) {
  var separator = config.separator || ':'
  return function splitModifiers(className) {
    var bracketDepth = 0
    var modifiers = []
    var modifierStart = 0
    for (var index2 = 0; index2 < className.length; index2++) {
      var _char = className[index2]
      if (bracketDepth === 0 && _char === separator[0]) {
        if (
          separator.length === 1 ||
          className.slice(index2, index2 + separator.length) === separator
        ) {
          modifiers.push(className.slice(modifierStart, index2))
          modifierStart = index2 + separator.length
        }
      }
      if (_char === '[') {
        bracketDepth++
      } else if (_char === ']') {
        bracketDepth--
      }
    }
    var baseClassNameWithImportantModifier =
      modifiers.length === 0 ? className : className.substring(modifierStart)
    var hasImportantModifier =
      baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)
    var baseClassName = hasImportantModifier
      ? baseClassNameWithImportantModifier.substring(1)
      : baseClassNameWithImportantModifier
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
    }
  }
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers
  }
  var sortedModifiers = []
  var unsortedModifiers = []
  modifiers.forEach(function (modifier) {
    var isArbitraryVariant = modifier[0] === '['
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(
        sortedModifiers,
        unsortedModifiers.sort().concat([modifier])
      )
      unsortedModifiers = []
    } else {
      unsortedModifiers.push(modifier)
    }
  })
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort())
  return sortedModifiers
}
function createConfigUtils(config) {
  return _extends(
    {
      cache: createLruCache(config.cacheSize),
      splitModifiers: createSplitModifiers(config),
    },
    createClassUtils(config)
  )
}
var SPLIT_CLASSES_REGEX = /\s+/
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers,
    getClassGroupId = configUtils.getClassGroupId,
    getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds
  var classGroupsInConflict = /* @__PURE__ */ new Set()
  return classList
    .trim()
    .split(SPLIT_CLASSES_REGEX)
    .map(function (originalClassName) {
      var _splitModifiers = splitModifiers(originalClassName),
        modifiers = _splitModifiers.modifiers,
        hasImportantModifier = _splitModifiers.hasImportantModifier,
        baseClassName = _splitModifiers.baseClassName
      var classGroupId = getClassGroupId(baseClassName)
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName,
        }
      }
      var variantModifier = sortModifiers(modifiers).join(':')
      var modifierId = hasImportantModifier
        ? variantModifier + IMPORTANT_MODIFIER
        : variantModifier
      return {
        isTailwindClass: true,
        modifierId,
        classGroupId,
        originalClassName,
      }
    })
    .reverse()
    .filter(function (parsed) {
      if (!parsed.isTailwindClass) {
        return true
      }
      var modifierId = parsed.modifierId,
        classGroupId = parsed.classGroupId
      var classId = modifierId + classGroupId
      if (classGroupsInConflict.has(classId)) {
        return false
      }
      classGroupsInConflict.add(classId)
      getConflictingClassGroupIds(classGroupId).forEach(function (group) {
        return classGroupsInConflict.add(modifierId + group)
      })
      return true
    })
    .reverse()
    .map(function (parsed) {
      return parsed.originalClassName
    })
    .join(' ')
}
function createTailwindMerge() {
  for (
    var _len = arguments.length, createConfig = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    createConfig[_key] = arguments[_key]
  }
  var configUtils
  var cacheGet
  var cacheSet
  var functionToCall = initTailwindMerge
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0],
      restCreateConfig = createConfig.slice(1)
    var config = restCreateConfig.reduce(function (
      previousConfig,
      createConfigCurrent
    ) {
      return createConfigCurrent(previousConfig)
    },
    firstCreateConfig())
    configUtils = createConfigUtils(config)
    cacheGet = configUtils.cache.get
    cacheSet = configUtils.cache.set
    functionToCall = tailwindMerge
    return tailwindMerge(classList)
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList)
    if (cachedResult) {
      return cachedResult
    }
    var result = mergeClassList(classList, configUtils)
    cacheSet(classList, result)
    return result
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments))
  }
}
function fromTheme(key) {
  var themeGetter = function themeGetter2(theme) {
    return theme[key] || []
  }
  themeGetter.isThemeGetter = true
  return themeGetter
}
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i
var fractionRegex = /^\d+\/\d+$/
var stringLengths = /* @__PURE__ */ new Set(['px', 'full', 'screen'])
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
var lengthUnitRegex =
  /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
function isLength(value) {
  return (
    isNumber(value) ||
    stringLengths.has(value) ||
    fractionRegex.test(value) ||
    isArbitraryLength(value)
  )
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, 'length', isLengthOnly)
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, 'size', isNever)
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, 'position', isNever)
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, 'url', isUrl)
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, 'number', isNumber)
}
function isNumber(value) {
  return !Number.isNaN(Number(value))
}
function isInteger(value) {
  return (
    isIntegerOnly(value) || getIsArbitraryValue(value, 'number', isIntegerOnly)
  )
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value)
}
function isAny() {
  return true
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value)
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, '', isShadow)
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value)
  if (result) {
    if (result[1]) {
      return result[1] === label
    }
    return testValue(result[2])
  }
  return false
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value)
}
function isNever() {
  return false
}
function isUrl(value) {
  return value.startsWith('url(')
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value))
}
function isShadow(value) {
  return shadowRegex.test(value)
}
function getDefaultConfig() {
  var colors = fromTheme('colors')
  var spacing = fromTheme('spacing')
  var blur = fromTheme('blur')
  var brightness = fromTheme('brightness')
  var borderColor = fromTheme('borderColor')
  var borderRadius = fromTheme('borderRadius')
  var borderSpacing = fromTheme('borderSpacing')
  var borderWidth = fromTheme('borderWidth')
  var contrast = fromTheme('contrast')
  var grayscale = fromTheme('grayscale')
  var hueRotate = fromTheme('hueRotate')
  var invert = fromTheme('invert')
  var gap = fromTheme('gap')
  var gradientColorStops = fromTheme('gradientColorStops')
  var inset = fromTheme('inset')
  var margin = fromTheme('margin')
  var opacity = fromTheme('opacity')
  var padding = fromTheme('padding')
  var saturate = fromTheme('saturate')
  var scale = fromTheme('scale')
  var sepia = fromTheme('sepia')
  var skew = fromTheme('skew')
  var space = fromTheme('space')
  var translate = fromTheme('translate')
  var getOverscroll = function getOverscroll2() {
    return ['auto', 'contain', 'none']
  }
  var getOverflow = function getOverflow2() {
    return ['auto', 'hidden', 'clip', 'visible', 'scroll']
  }
  var getSpacingWithAuto = function getSpacingWithAuto2() {
    return ['auto', spacing]
  }
  var getLengthWithEmpty = function getLengthWithEmpty2() {
    return ['', isLength]
  }
  var getNumberWithAutoAndArbitrary =
    function getNumberWithAutoAndArbitrary2() {
      return ['auto', isNumber, isArbitraryValue]
    }
  var getPositions = function getPositions2() {
    return [
      'bottom',
      'center',
      'left',
      'left-bottom',
      'left-top',
      'right',
      'right-bottom',
      'right-top',
      'top',
    ]
  }
  var getLineStyles = function getLineStyles2() {
    return ['solid', 'dashed', 'dotted', 'double', 'none']
  }
  var getBlendModes = function getBlendModes2() {
    return [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
      'plus-lighter',
    ]
  }
  var getAlign = function getAlign2() {
    return ['start', 'end', 'center', 'between', 'around', 'evenly']
  }
  var getZeroAndEmpty = function getZeroAndEmpty2() {
    return ['', '0', isArbitraryValue]
  }
  var getBreaks = function getBreaks2() {
    return [
      'auto',
      'avoid',
      'all',
      'avoid-page',
      'page',
      'left',
      'right',
      'column',
    ]
  }
  var getNumber = function getNumber2() {
    return [isNumber, isArbitraryNumber]
  }
  var getNumberAndArbitrary = function getNumberAndArbitrary2() {
    return [isNumber, isArbitraryValue]
  }
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ['none', '', isTshirtSize, isArbitraryLength],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryLength],
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
      translate: [spacing],
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [
        {
          aspect: ['auto', 'square', 'video', isArbitraryValue],
        },
      ],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [
        {
          columns: [isTshirtSize],
        },
      ],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [
        {
          'break-after': getBreaks(),
        },
      ],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [
        {
          'break-before': getBreaks(),
        },
      ],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [
        {
          'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
        },
      ],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [
        {
          'box-decoration': ['slice', 'clone'],
        },
      ],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [
        {
          box: ['border', 'content'],
        },
      ],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: [
        'block',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'table',
        'inline-table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
        'flow-root',
        'grid',
        'inline-grid',
        'contents',
        'list-item',
        'hidden',
      ],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [
        {
          float: ['right', 'left', 'none'],
        },
      ],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [
        {
          clear: ['left', 'right', 'both', 'none'],
        },
      ],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [
        {
          object: ['contain', 'cover', 'fill', 'none', 'scale-down'],
        },
      ],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [
        {
          object: [].concat(getPositions(), [isArbitraryValue]),
        },
      ],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [
        {
          overflow: getOverflow(),
        },
      ],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [
        {
          'overflow-x': getOverflow(),
        },
      ],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [
        {
          'overflow-y': getOverflow(),
        },
      ],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [
        {
          overscroll: getOverscroll(),
        },
      ],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [
        {
          'overscroll-x': getOverscroll(),
        },
      ],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [
        {
          'overscroll-y': getOverscroll(),
        },
      ],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [
        {
          inset: [inset],
        },
      ],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [
        {
          'inset-x': [inset],
        },
      ],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [
        {
          'inset-y': [inset],
        },
      ],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [
        {
          top: [inset],
        },
      ],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [
        {
          right: [inset],
        },
      ],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [
        {
          bottom: [inset],
        },
      ],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [
        {
          left: [inset],
        },
      ],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [
        {
          z: ['auto', isInteger],
        },
      ],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [
        {
          basis: [spacing],
        },
      ],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [
        {
          flex: ['row', 'row-reverse', 'col', 'col-reverse'],
        },
      ],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [
        {
          flex: ['wrap', 'wrap-reverse', 'nowrap'],
        },
      ],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [
        {
          flex: ['1', 'auto', 'initial', 'none', isArbitraryValue],
        },
      ],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [
        {
          grow: getZeroAndEmpty(),
        },
      ],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [
        {
          shrink: getZeroAndEmpty(),
        },
      ],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [
        {
          order: ['first', 'last', 'none', isInteger],
        },
      ],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [
        {
          'grid-cols': [isAny],
        },
      ],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [
        {
          col: [
            'auto',
            {
              span: [isInteger],
            },
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [
        {
          'col-start': getNumberWithAutoAndArbitrary(),
        },
      ],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [
        {
          'col-end': getNumberWithAutoAndArbitrary(),
        },
      ],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [
        {
          'grid-rows': [isAny],
        },
      ],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [
        {
          row: [
            'auto',
            {
              span: [isInteger],
            },
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [
        {
          'row-start': getNumberWithAutoAndArbitrary(),
        },
      ],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [
        {
          'row-end': getNumberWithAutoAndArbitrary(),
        },
      ],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [
        {
          'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'],
        },
      ],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [
        {
          'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue],
        },
      ],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [
        {
          'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue],
        },
      ],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [
        {
          gap: [gap],
        },
      ],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [
        {
          'gap-x': [gap],
        },
      ],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [
        {
          'gap-y': [gap],
        },
      ],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [
        {
          justify: getAlign(),
        },
      ],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [
        {
          'justify-items': ['start', 'end', 'center', 'stretch'],
        },
      ],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [
        {
          'justify-self': ['auto', 'start', 'end', 'center', 'stretch'],
        },
      ],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [
        {
          content: [].concat(getAlign(), ['baseline']),
        },
      ],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [
        {
          items: ['start', 'end', 'center', 'baseline', 'stretch'],
        },
      ],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [
        {
          self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
        },
      ],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [
        {
          'place-content': [].concat(getAlign(), ['baseline', 'stretch']),
        },
      ],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [
        {
          'place-items': ['start', 'end', 'center', 'baseline', 'stretch'],
        },
      ],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [
        {
          'place-self': ['auto', 'start', 'end', 'center', 'stretch'],
        },
      ],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [
        {
          p: [padding],
        },
      ],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [
        {
          px: [padding],
        },
      ],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [
        {
          py: [padding],
        },
      ],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [
        {
          pt: [padding],
        },
      ],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [
        {
          pr: [padding],
        },
      ],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [
        {
          pb: [padding],
        },
      ],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [
        {
          pl: [padding],
        },
      ],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [
        {
          m: [margin],
        },
      ],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [
        {
          mx: [margin],
        },
      ],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [
        {
          my: [margin],
        },
      ],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [
        {
          mt: [margin],
        },
      ],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [
        {
          mr: [margin],
        },
      ],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [
        {
          mb: [margin],
        },
      ],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [
        {
          ml: [margin],
        },
      ],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [
        {
          'space-x': [space],
        },
      ],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [
        {
          'space-y': [space],
        },
      ],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [
        {
          w: ['auto', 'min', 'max', 'fit', spacing],
        },
      ],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [
        {
          'min-w': ['min', 'max', 'fit', isLength],
        },
      ],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [
        {
          'max-w': [
            '0',
            'none',
            'full',
            'min',
            'max',
            'fit',
            'prose',
            {
              screen: [isTshirtSize],
            },
            isTshirtSize,
            isArbitraryLength,
          ],
        },
      ],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [
        {
          h: [spacing, 'auto', 'min', 'max', 'fit'],
        },
      ],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [
        {
          'min-h': ['min', 'max', 'fit', isLength],
        },
      ],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [
        {
          'max-h': [spacing, 'min', 'max', 'fit'],
        },
      ],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [
        {
          text: ['base', isTshirtSize, isArbitraryLength],
        },
      ],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [
        {
          font: [
            'thin',
            'extralight',
            'light',
            'normal',
            'medium',
            'semibold',
            'bold',
            'extrabold',
            'black',
            isArbitraryNumber,
          ],
        },
      ],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [
        {
          font: [isAny],
        },
      ],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [
        {
          tracking: [
            'tighter',
            'tight',
            'normal',
            'wide',
            'wider',
            'widest',
            isArbitraryLength,
          ],
        },
      ],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [
        {
          leading: [
            'none',
            'tight',
            'snug',
            'normal',
            'relaxed',
            'loose',
            isLength,
          ],
        },
      ],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [
        {
          list: ['none', 'disc', 'decimal', isArbitraryValue],
        },
      ],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [
        {
          list: ['inside', 'outside'],
        },
      ],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [
        {
          placeholder: [colors],
        },
      ],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [
        {
          'placeholder-opacity': [opacity],
        },
      ],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [
        {
          text: ['left', 'center', 'right', 'justify', 'start', 'end'],
        },
      ],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [
        {
          text: [colors],
        },
      ],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [
        {
          'text-opacity': [opacity],
        },
      ],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': [
        'underline',
        'overline',
        'line-through',
        'no-underline',
      ],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [
        {
          decoration: [].concat(getLineStyles(), ['wavy']),
        },
      ],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [
        {
          decoration: ['auto', 'from-font', isLength],
        },
      ],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [
        {
          'underline-offset': ['auto', isLength],
        },
      ],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [
        {
          decoration: [colors],
        },
      ],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [
        {
          indent: [spacing],
        },
      ],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [
        {
          align: [
            'baseline',
            'top',
            'middle',
            'bottom',
            'text-top',
            'text-bottom',
            'sub',
            'super',
            isArbitraryLength,
          ],
        },
      ],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [
        {
          whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
        },
      ],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [
        {
          break: ['normal', 'words', 'all', 'keep'],
        },
      ],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [
        {
          content: ['none', isArbitraryValue],
        },
      ],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [
        {
          bg: ['fixed', 'local', 'scroll'],
        },
      ],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [
        {
          'bg-clip': ['border', 'padding', 'content', 'text'],
        },
      ],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [
        {
          'bg-opacity': [opacity],
        },
      ],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [
        {
          'bg-origin': ['border', 'padding', 'content'],
        },
      ],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [
        {
          bg: [].concat(getPositions(), [isArbitraryPosition]),
        },
      ],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [
        {
          bg: [
            'no-repeat',
            {
              repeat: ['', 'x', 'y', 'round', 'space'],
            },
          ],
        },
      ],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [
        {
          bg: ['auto', 'cover', 'contain', isArbitrarySize],
        },
      ],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [
        {
          bg: [
            'none',
            {
              'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'],
            },
            isArbitraryUrl,
          ],
        },
      ],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [
        {
          bg: [colors],
        },
      ],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [
        {
          from: [gradientColorStops],
        },
      ],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [
        {
          via: [gradientColorStops],
        },
      ],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [
        {
          to: [gradientColorStops],
        },
      ],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [
        {
          rounded: [borderRadius],
        },
      ],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [
        {
          'rounded-t': [borderRadius],
        },
      ],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [
        {
          'rounded-r': [borderRadius],
        },
      ],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [
        {
          'rounded-b': [borderRadius],
        },
      ],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [
        {
          'rounded-l': [borderRadius],
        },
      ],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [
        {
          'rounded-tl': [borderRadius],
        },
      ],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [
        {
          'rounded-tr': [borderRadius],
        },
      ],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [
        {
          'rounded-br': [borderRadius],
        },
      ],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [
        {
          'rounded-bl': [borderRadius],
        },
      ],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [
        {
          border: [borderWidth],
        },
      ],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [
        {
          'border-x': [borderWidth],
        },
      ],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [
        {
          'border-y': [borderWidth],
        },
      ],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [
        {
          'border-t': [borderWidth],
        },
      ],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [
        {
          'border-r': [borderWidth],
        },
      ],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [
        {
          'border-b': [borderWidth],
        },
      ],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [
        {
          'border-l': [borderWidth],
        },
      ],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [
        {
          'border-opacity': [opacity],
        },
      ],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [
        {
          border: [].concat(getLineStyles(), ['hidden']),
        },
      ],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [
        {
          'divide-x': [borderWidth],
        },
      ],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [
        {
          'divide-y': [borderWidth],
        },
      ],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [
        {
          'divide-opacity': [opacity],
        },
      ],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [
        {
          divide: getLineStyles(),
        },
      ],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [
        {
          border: [borderColor],
        },
      ],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [
        {
          'border-x': [borderColor],
        },
      ],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [
        {
          'border-y': [borderColor],
        },
      ],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [
        {
          'border-t': [borderColor],
        },
      ],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [
        {
          'border-r': [borderColor],
        },
      ],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [
        {
          'border-b': [borderColor],
        },
      ],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [
        {
          'border-l': [borderColor],
        },
      ],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [
        {
          divide: [borderColor],
        },
      ],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [
        {
          outline: [''].concat(getLineStyles()),
        },
      ],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [
        {
          'outline-offset': [isLength],
        },
      ],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [
        {
          outline: [isLength],
        },
      ],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [
        {
          outline: [colors],
        },
      ],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [
        {
          ring: getLengthWithEmpty(),
        },
      ],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [
        {
          ring: [colors],
        },
      ],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [
        {
          'ring-opacity': [opacity],
        },
      ],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [
        {
          'ring-offset': [isLength],
        },
      ],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [
        {
          'ring-offset': [colors],
        },
      ],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [
        {
          shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow],
        },
      ],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [
        {
          shadow: [isAny],
        },
      ],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [
        {
          opacity: [opacity],
        },
      ],
      /**
       * Mix Beldn Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [
        {
          'mix-blend': getBlendModes(),
        },
      ],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [
        {
          'bg-blend': getBlendModes(),
        },
      ],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [
        {
          filter: ['', 'none'],
        },
      ],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [
        {
          blur: [blur],
        },
      ],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [
        {
          brightness: [brightness],
        },
      ],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [
        {
          contrast: [contrast],
        },
      ],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [
        {
          'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue],
        },
      ],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [
        {
          grayscale: [grayscale],
        },
      ],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [
        {
          'hue-rotate': [hueRotate],
        },
      ],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [
        {
          invert: [invert],
        },
      ],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [
        {
          saturate: [saturate],
        },
      ],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [
        {
          sepia: [sepia],
        },
      ],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [
        {
          'backdrop-filter': ['', 'none'],
        },
      ],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [
        {
          'backdrop-blur': [blur],
        },
      ],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [
        {
          'backdrop-brightness': [brightness],
        },
      ],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [
        {
          'backdrop-contrast': [contrast],
        },
      ],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [
        {
          'backdrop-grayscale': [grayscale],
        },
      ],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [
        {
          'backdrop-hue-rotate': [hueRotate],
        },
      ],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [
        {
          'backdrop-invert': [invert],
        },
      ],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [
        {
          'backdrop-opacity': [opacity],
        },
      ],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [
        {
          'backdrop-saturate': [saturate],
        },
      ],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [
        {
          'backdrop-sepia': [sepia],
        },
      ],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [
        {
          border: ['collapse', 'separate'],
        },
      ],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [
        {
          'border-spacing': [borderSpacing],
        },
      ],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [
        {
          'border-spacing-x': [borderSpacing],
        },
      ],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [
        {
          'border-spacing-y': [borderSpacing],
        },
      ],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [
        {
          table: ['auto', 'fixed'],
        },
      ],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [
        {
          transition: [
            'none',
            'all',
            '',
            'colors',
            'opacity',
            'shadow',
            'transform',
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [
        {
          duration: getNumberAndArbitrary(),
        },
      ],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [
        {
          ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue],
        },
      ],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [
        {
          delay: getNumberAndArbitrary(),
        },
      ],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [
        {
          animate: [
            'none',
            'spin',
            'ping',
            'pulse',
            'bounce',
            isArbitraryValue,
          ],
        },
      ],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [
        {
          transform: ['', 'gpu', 'none'],
        },
      ],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [
        {
          scale: [scale],
        },
      ],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [
        {
          'scale-x': [scale],
        },
      ],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [
        {
          'scale-y': [scale],
        },
      ],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [
        {
          rotate: [isInteger, isArbitraryValue],
        },
      ],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [
        {
          'translate-x': [translate],
        },
      ],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [
        {
          'translate-y': [translate],
        },
      ],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [
        {
          'skew-x': [skew],
        },
      ],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [
        {
          'skew-y': [skew],
        },
      ],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [
        {
          origin: [
            'center',
            'top',
            'top-right',
            'right',
            'bottom-right',
            'bottom',
            'bottom-left',
            'left',
            'top-left',
            isArbitraryValue,
          ],
        },
      ],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [
        {
          accent: ['auto', colors],
        },
      ],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ['appearance-none'],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [
        {
          cursor: [
            'auto',
            'default',
            'pointer',
            'wait',
            'text',
            'move',
            'help',
            'not-allowed',
            'none',
            'context-menu',
            'progress',
            'cell',
            'crosshair',
            'vertical-text',
            'alias',
            'copy',
            'no-drop',
            'grab',
            'grabbing',
            'all-scroll',
            'col-resize',
            'row-resize',
            'n-resize',
            'e-resize',
            's-resize',
            'w-resize',
            'ne-resize',
            'nw-resize',
            'se-resize',
            'sw-resize',
            'ew-resize',
            'ns-resize',
            'nesw-resize',
            'nwse-resize',
            'zoom-in',
            'zoom-out',
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [
        {
          caret: [colors],
        },
      ],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [
        {
          'pointer-events': ['none', 'auto'],
        },
      ],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [
        {
          resize: ['none', 'y', 'x', ''],
        },
      ],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [
        {
          scroll: ['auto', 'smooth'],
        },
      ],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [
        {
          'scroll-m': [spacing],
        },
      ],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [
        {
          'scroll-mx': [spacing],
        },
      ],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [
        {
          'scroll-my': [spacing],
        },
      ],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [
        {
          'scroll-mt': [spacing],
        },
      ],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [
        {
          'scroll-mr': [spacing],
        },
      ],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [
        {
          'scroll-mb': [spacing],
        },
      ],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [
        {
          'scroll-ml': [spacing],
        },
      ],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [
        {
          'scroll-p': [spacing],
        },
      ],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [
        {
          'scroll-px': [spacing],
        },
      ],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [
        {
          'scroll-py': [spacing],
        },
      ],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [
        {
          'scroll-pt': [spacing],
        },
      ],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [
        {
          'scroll-pr': [spacing],
        },
      ],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [
        {
          'scroll-pb': [spacing],
        },
      ],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [
        {
          'scroll-pl': [spacing],
        },
      ],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [
        {
          snap: ['start', 'end', 'center', 'align-none'],
        },
      ],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [
        {
          snap: ['normal', 'always'],
        },
      ],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [
        {
          snap: ['none', 'x', 'y', 'both'],
        },
      ],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [
        {
          snap: ['mandatory', 'proximity'],
        },
      ],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [
        {
          touch: [
            'auto',
            'none',
            'pinch-zoom',
            'manipulation',
            {
              pan: ['x', 'left', 'right', 'y', 'up', 'down'],
            },
          ],
        },
      ],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [
        {
          select: ['none', 'text', 'all', 'auto'],
        },
      ],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [
        {
          'will-change': [
            'auto',
            'scroll',
            'contents',
            'transform',
            isArbitraryValue,
          ],
        },
      ],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [
        {
          fill: [colors, 'none'],
        },
      ],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [
        {
          stroke: [isLength, isArbitraryNumber],
        },
      ],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [
        {
          stroke: [colors, 'none'],
        },
      ],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      'font-size': ['leading'],
      'fvn-normal': [
        'fvn-ordinal',
        'fvn-slashed-zero',
        'fvn-figure',
        'fvn-spacing',
        'fvn-fraction',
      ],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      rounded: [
        'rounded-t',
        'rounded-r',
        'rounded-b',
        'rounded-l',
        'rounded-tl',
        'rounded-tr',
        'rounded-br',
        'rounded-bl',
      ],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': [
        'border-color-t',
        'border-color-r',
        'border-color-b',
        'border-color-l',
      ],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': [
        'scroll-mx',
        'scroll-my',
        'scroll-mt',
        'scroll-mr',
        'scroll-mb',
        'scroll-ml',
      ],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': [
        'scroll-px',
        'scroll-py',
        'scroll-pt',
        'scroll-pr',
        'scroll-pb',
        'scroll-pl',
      ],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
    },
  }
}
function mergeConfigs(baseConfig, configExtension) {
  for (var key in configExtension) {
    mergePropertyRecursively(baseConfig, key, configExtension[key])
  }
  return baseConfig
}
var hasOwnProperty = Object.prototype.hasOwnProperty
var overrideTypes = /* @__PURE__ */ new Set(['string', 'number', 'boolean'])
function mergePropertyRecursively(baseObject, mergeKey, mergeValue) {
  if (
    !hasOwnProperty.call(baseObject, mergeKey) ||
    overrideTypes.has(typeof mergeValue) ||
    mergeValue === null
  ) {
    baseObject[mergeKey] = mergeValue
    return
  }
  if (Array.isArray(mergeValue) && Array.isArray(baseObject[mergeKey])) {
    baseObject[mergeKey] = baseObject[mergeKey].concat(mergeValue)
    return
  }
  if (
    typeof mergeValue === 'object' &&
    typeof baseObject[mergeKey] === 'object'
  ) {
    if (baseObject[mergeKey] === null) {
      baseObject[mergeKey] = mergeValue
      return
    }
    for (var nextKey in mergeValue) {
      mergePropertyRecursively(
        baseObject[mergeKey],
        nextKey,
        mergeValue[nextKey]
      )
    }
  }
}
function extendTailwindMerge(configExtension) {
  for (
    var _len = arguments.length,
      createConfig = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    createConfig[_key - 1] = arguments[_key]
  }
  return typeof configExtension === 'function'
    ? createTailwindMerge.apply(
        void 0,
        [getDefaultConfig, configExtension].concat(createConfig)
      )
    : createTailwindMerge.apply(
        void 0,
        [
          function () {
            return mergeConfigs(getDefaultConfig(), configExtension)
          },
        ].concat(createConfig)
      )
}
const mergeClasses = extendTailwindMerge({
  prefix: 'tw-',
})
const Button = reactExports.forwardRef((props, ref) => {
  const { onClick, className, children, ...remaining } = props
  const buttonStyle = mergeClasses(
    'tw-text-primary-text tw-bg-primary hover:tw-bg-primary-hover',
    'tw-py-1 tw-px-4 tw-cursor-pointer tw-font-bold tw-shadow-none tw-rounded-md tw-tracking-[1px] tw-transition tw-select-none',
    props.className
  )
  return /* @__PURE__ */ jsx('button', {
    className: buttonStyle,
    type: 'button',
    ref,
    onClick: props.onClick,
    ...remaining,
    children: props.children,
  })
})
const LinkButton = reactExports.forwardRef((props, ref) => {
  const { href, className, children, ...remaining } = props
  const buttonStyle = mergeClasses(
    'tw-text-primary-text tw-bg-primary hover:tw-bg-primary-hover',
    'tw-py-1 tw-px-4 tw-cursor-pointer tw-font-bold tw-shadow-none tw-rounded-md tw-tracking-[1px] tw-transition tw-select-none',
    props.className
  )
  return /* @__PURE__ */ jsx('a', {
    className: buttonStyle,
    ref,
    href: props.href,
    ...remaining,
    children: props.children,
  })
})
const FormButton = (props) => {
  const buttonStyle = classNames(
    'tw-text-primary-text tw-bg-primary hover:tw-bg-primary-hover',
    'tw-py-1 tw-px-4 tw-cursor-pointer tw-font-bold tw-shadow-none tw-rounded-md tw-tracking-[1px] tw-transition tw-select-none',
    props.className
  )
  return /* @__PURE__ */ jsx('button', {
    className: buttonStyle,
    type: 'submit',
    children: props.children,
  })
}
const BackButton = (props) => {
  const navigate = useNavigate()
  const onClick = () => {
    if (props.onClick) {
      props.onClick()
    } else {
      navigate(-1)
    }
  }
  return /* @__PURE__ */ jsxs('div', {
    className: classNames(
      'tw-cursor-pointer tw-select-none tw-text-sm tw-font-[500] hover:tw-text-slate-600 tw-w-fit',
      props.className
    ),
    onClick,
    children: [String.fromCharCode(8592), ' Back'],
  })
}
const NavButton = (props) => {
  return /* @__PURE__ */ jsx(NavLink, {
    className: classNames(
      'tw-bg-primary tw-text-white tw-rounded-md tw-block tw-px-4 tw-py-2 tw-text-sm tw-cursor-pointer tw-font-bold tw-text-center tw-transition-colors hover:tw-bg-primary-hover tw-border tw-border-solid tw-border-primary-hover',
      props.className
    ),
    to: props.to,
    children: props.children,
  })
}
const DivButton = (props) => {
  return /* @__PURE__ */ jsx('div', {
    className: props.className,
    tabIndex: 0,
    onClick: props.onClick,
    onKeyDown: (event) => {
      if (event.key === 'Enter') props.onClick()
    },
    children: props.children,
  })
}
export { BackButton, Button, DivButton, FormButton, LinkButton, NavButton }
