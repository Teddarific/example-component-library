;(function () {
  'use strict'
  try {
    if (typeof document != 'undefined') {
      var elementStyle = document.createElement('style')
      elementStyle.appendChild(
        document.createTextNode(
          '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Mono:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");\n\n@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;'
        )
      )
      document.head.appendChild(elementStyle)
    }
  } catch (e) {
    console.error('vite-plugin-css-injected-by-js', e)
  }
})()
import * as require$$0 from 'https://esm.sh/react@18.2.0'
import require$$0__default, {
  cloneElement,
  createContext,
  createElement,
  createRef,
  forwardRef,
  Fragment,
  isValidElement,
  useCallback,
  useContext,
  useEffect as useEffect$1,
  useLayoutEffect as useLayoutEffect$1,
  useMemo,
  useReducer,
  useRef,
  useState as useState$1,
} from 'https://esm.sh/react@18.2.0'
import {
  Fragment as Fragment$1,
  jsx,
  jsxs,
} from 'https://esm.sh/react@18.2.0/jsx-runtime'
const tailwind = ''
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
function _extends$2() {
  _extends$2 = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2]
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
function invariant$1(value, message) {
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
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = '/'
  }
  let location =
    typeof locationArg === 'string' ? parsePath(locationArg) : locationArg
  let pathname = stripBasename(location.pathname || '/', basename)
  if (pathname == null) {
    return null
  }
  let branches = flattenRoutes(routes)
  rankRouteBranches(branches)
  let matches = null
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    matches = matchRouteBranch(
      branches[i2],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    )
  }
  return matches
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = []
  }
  if (parentsMeta === void 0) {
    parentsMeta = []
  }
  if (parentPath === void 0) {
    parentPath = ''
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || '' : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route,
    }
    if (meta.relativePath.startsWith('/')) {
      invariant$1(
        meta.relativePath.startsWith(parentPath),
        'Absolute route path "' +
          meta.relativePath +
          '" nested under path ' +
          ('"' + parentPath + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      )
      meta.relativePath = meta.relativePath.slice(parentPath.length)
    }
    let path = joinPaths([parentPath, meta.relativePath])
    let routesMeta = parentsMeta.concat(meta)
    if (route.children && route.children.length > 0) {
      invariant$1(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + path + '".')
      )
      flattenRoutes(route.children, branches, routesMeta, path)
    }
    if (route.path == null && !route.index) {
      return
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta,
    })
  }
  routes.forEach((route, index) => {
    var _route$path
    if (
      route.path === '' ||
      !((_route$path = route.path) != null && _route$path.includes('?'))
    ) {
      flattenRoute(route, index)
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded)
      }
    }
  })
  return branches
}
function explodeOptionalSegments(path) {
  let segments = path.split('/')
  if (segments.length === 0) return []
  let [first, ...rest] = segments
  let isOptional = first.endsWith('?')
  let required = first.replace(/\?$/, '')
  if (rest.length === 0) {
    return isOptional ? [required, ''] : [required]
  }
  let restExploded = explodeOptionalSegments(rest.join('/'))
  let result = []
  result.push(
    ...restExploded.map((subpath) =>
      subpath === '' ? required : [required, subpath].join('/')
    )
  )
  if (isOptional) {
    result.push(...restExploded)
  }
  return result.map((exploded) =>
    path.startsWith('/') && exploded === '' ? '/' : exploded
  )
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) =>
    a2.score !== b2.score
      ? b2.score - a2.score
      : compareIndexes(
          a2.routesMeta.map((meta) => meta.childrenIndex),
          b2.routesMeta.map((meta) => meta.childrenIndex)
        )
  )
}
const paramRe = /^:\w+$/
const dynamicSegmentValue = 3
const indexRouteValue = 2
const emptySegmentValue = 1
const staticSegmentValue = 10
const splatPenalty = -2
const isSplat = (s2) => s2 === '*'
function computeScore(path, index) {
  let segments = path.split('/')
  let initialScore = segments.length
  if (segments.some(isSplat)) {
    initialScore += splatPenalty
  }
  if (index) {
    initialScore += indexRouteValue
  }
  return segments
    .filter((s2) => !isSplat(s2))
    .reduce(
      (score, segment) =>
        score +
        (paramRe.test(segment)
          ? dynamicSegmentValue
          : segment === ''
          ? emptySegmentValue
          : staticSegmentValue),
      initialScore
    )
}
function compareIndexes(a2, b2) {
  let siblings =
    a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2])
  return siblings
    ? // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a2[a2.length - 1] - b2[b2.length - 1]
    : // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
}
function matchRouteBranch(branch, pathname) {
  let { routesMeta } = branch
  let matchedParams = {}
  let matchedPathname = '/'
  let matches = []
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2]
    let end = i2 === routesMeta.length - 1
    let remainingPathname =
      matchedPathname === '/'
        ? pathname
        : pathname.slice(matchedPathname.length) || '/'
    let match = matchPath(
      {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end,
      },
      remainingPathname
    )
    if (!match) return null
    Object.assign(matchedParams, match.params)
    let route = meta.route
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(
        joinPaths([matchedPathname, match.pathnameBase])
      ),
      route,
    })
    if (match.pathnameBase !== '/') {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase])
    }
  }
  return matches
}
function matchPath(pattern, pathname) {
  if (typeof pattern === 'string') {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true,
    }
  }
  let [matcher, paramNames] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  )
  let match = pathname.match(matcher)
  if (!match) return null
  let matchedPathname = match[0]
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, '$1')
  let captureGroups = match.slice(1)
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === '*') {
      let splatValue = captureGroups[index] || ''
      pathnameBase = matchedPathname
        .slice(0, matchedPathname.length - splatValue.length)
        .replace(/(.)\/+$/, '$1')
    }
    memo[paramName] = safelyDecodeURIComponent(
      captureGroups[index] || '',
      paramName
    )
    return memo
  }, {})
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern,
  }
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false
  }
  if (end === void 0) {
    end = true
  }
  warning(
    path === '*' || !path.endsWith('*') || path.endsWith('/*'),
    'Route path "' +
      path +
      '" will be treated as if it were ' +
      ('"' + path.replace(/\*$/, '/*') + '" because the `*` character must ') +
      'always follow a `/` in the pattern. To get rid of this warning, ' +
      ('please change the route path to "' + path.replace(/\*$/, '/*') + '".')
  )
  let paramNames = []
  let regexpSource =
    '^' +
    path
      .replace(/\/*\*?$/, '')
      .replace(/^\/*/, '/')
      .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
      .replace(/\/:(\w+)/g, (_2, paramName) => {
        paramNames.push(paramName)
        return '/([^\\/]+)'
      })
  if (path.endsWith('*')) {
    paramNames.push('*')
    regexpSource +=
      path === '*' || path === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'
  } else if (end) {
    regexpSource += '\\/*$'
  } else if (path !== '' && path !== '/') {
    regexpSource += '(?:(?=\\/|$))'
  } else;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : 'i')
  return [matcher, paramNames]
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value)
  } catch (error) {
    warning(
      false,
      'The URL path "' +
        value +
        '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
        ('encoding (' + error + ').')
    )
    return value
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value)
  } catch (error) {
    warning(
      false,
      'The value for the URL param "' +
        paramName +
        '" will not be decoded because' +
        (' the string "' +
          value +
          '" is a malformed URL segment. This is probably') +
        (' due to a bad percent encoding (' + error + ').')
    )
    return value
  }
}
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
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== 'undefined') console.warn(message)
    try {
      throw new Error(message)
    } catch (e2) {}
  }
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
    (match, index) =>
      index === 0 || (match.route.path && match.route.path.length > 0)
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
    invariant$1(
      !to.pathname || !to.pathname.includes('?'),
      getInvalidPathError('?', 'pathname', 'search', to)
    )
    invariant$1(
      !to.pathname || !to.pathname.includes('#'),
      getInvalidPathError('#', 'pathname', 'hash', to)
    )
    invariant$1(
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
const normalizePathname = (pathname) =>
  pathname.replace(/\/+$/, '').replace(/^\/*/, '/')
const normalizeSearch = (search) =>
  !search || search === '?'
    ? ''
    : search.startsWith('?')
    ? search
    : '?' + search
const normalizeHash = (hash) =>
  !hash || hash === '#' ? '' : hash.startsWith('#') ? hash : '#' + hash
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
function isPolyfill(x, y2) {
  return (x === y2 && (x !== 0 || 1 / x === 1 / y2)) || (x !== x && y2 !== y2)
}
const is = typeof Object.is === 'function' ? Object.is : isPolyfill
const { useState, useEffect, useLayoutEffect, useDebugValue } = require$$0
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
'useSyncExternalStore' in require$$0
  ? ((module) => module.useSyncExternalStore)(require$$0)
  : shim
const DataRouterContext = /* @__PURE__ */ require$$0.createContext(null)
const DataRouterStateContext = /* @__PURE__ */ require$$0.createContext(null)
const NavigationContext = /* @__PURE__ */ require$$0.createContext(null)
const LocationContext = /* @__PURE__ */ require$$0.createContext(null)
const RouteContext = /* @__PURE__ */ require$$0.createContext({
  outlet: null,
  matches: [],
})
function useHref(to, _temp) {
  let { relative } = _temp === void 0 ? {} : _temp
  !useInRouterContext() ? invariant$1(false) : void 0
  let { basename, navigator: navigator2 } =
    require$$0.useContext(NavigationContext)
  let { hash, pathname, search } = useResolvedPath(to, {
    relative,
  })
  let joinedPathname = pathname
  if (basename !== '/') {
    joinedPathname =
      pathname === '/' ? basename : joinPaths([basename, pathname])
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash,
  })
}
function useInRouterContext() {
  return require$$0.useContext(LocationContext) != null
}
function useLocation() {
  !useInRouterContext() ? invariant$1(false) : void 0
  return require$$0.useContext(LocationContext).location
}
function useNavigate() {
  !useInRouterContext() ? invariant$1(false) : void 0
  let { basename, navigator: navigator2 } =
    require$$0.useContext(NavigationContext)
  let { matches } = require$$0.useContext(RouteContext)
  let { pathname: locationPathname } = useLocation()
  let routePathnamesJson = JSON.stringify(
    getPathContributingMatches(matches).map((match) => match.pathnameBase)
  )
  let activeRef = require$$0.useRef(false)
  require$$0.useEffect(() => {
    activeRef.current = true
  })
  let navigate = require$$0.useCallback(
    function (to, options) {
      if (options === void 0) {
        options = {}
      }
      if (!activeRef.current) return
      if (typeof to === 'number') {
        navigator2.go(to)
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
      ;(!!options.replace ? navigator2.replace : navigator2.push)(
        path,
        options.state,
        options
      )
    },
    [basename, navigator2, routePathnamesJson, locationPathname]
  )
  return navigate
}
function useResolvedPath(to, _temp2) {
  let { relative } = _temp2 === void 0 ? {} : _temp2
  let { matches } = require$$0.useContext(RouteContext)
  let { pathname: locationPathname } = useLocation()
  let routePathnamesJson = JSON.stringify(
    getPathContributingMatches(matches).map((match) => match.pathnameBase)
  )
  return require$$0.useMemo(
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
 * React Router DOM v6.8.2
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
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2]
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
  var key, i2
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2]
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
const ABSOLUTE_URL_REGEX$1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
const Link$1 = /* @__PURE__ */ require$$0.forwardRef(function LinkWithRef(
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
  let { basename } = require$$0.useContext(NavigationContext)
  let absoluteHref
  let isExternal = false
  if (typeof to === 'string' && ABSOLUTE_URL_REGEX$1.test(to)) {
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
    /* @__PURE__ */ require$$0.createElement(
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
const NavLink$2 = /* @__PURE__ */ require$$0.forwardRef(function NavLinkWithRef(
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
  let routerState = require$$0.useContext(DataRouterStateContext)
  let { navigator: navigator2 } = require$$0.useContext(NavigationContext)
  let toPathname = navigator2.encodeLocation
    ? navigator2.encodeLocation(path).pathname
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
  return /* @__PURE__ */ require$$0.createElement(
    Link$1,
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
  return require$$0.useCallback(
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
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2]
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
function invariant(value, message) {
  if (value === false || value === null || typeof value === 'undefined') {
    throw new Error(message)
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
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id]
  }
  try {
    let routeModule = await import(
      /* webpackIgnore: true */
      route.module
    )
    routeModulesCache[route.id] = routeModule
    return routeModule
  } catch (error) {
    window.location.reload()
    return new Promise(() => {})
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
function isHtmlLinkDescriptor(object) {
  if (object == null) return false
  if (object.href == null) {
    return (
      object.rel === 'preload' &&
      (typeof object.imageSrcSet === 'string' ||
        typeof object.imagesrcset === 'string') &&
      (typeof object.imageSizes === 'string' ||
        typeof object.imagesizes === 'string')
    )
  }
  return typeof object.rel === 'string' && typeof object.href === 'string'
}
async function getStylesheetPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(
    matches.map(async (match) => {
      let mod = await loadRouteModule(
        manifest.routes[match.route.id],
        routeModules
      )
      return mod.links ? mod.links() : []
    })
  )
  return links
    .flat(1)
    .filter(isHtmlLinkDescriptor)
    .filter((link) => link.rel === 'stylesheet' || link.rel === 'preload')
    .map((link) =>
      link.rel === 'preload'
        ? {
            ...link,
            rel: 'prefetch',
          }
        : {
            ...link,
            rel: 'prefetch',
            as: 'style',
          }
    )
}
function getNewMatchesForLinks(
  page,
  nextMatches,
  currentMatches,
  manifest,
  location,
  mode
) {
  let path = parsePathPatch(page)
  let isNew = (match, index) => {
    if (!currentMatches[index]) return true
    return match.route.id !== currentMatches[index].route.id
  }
  let matchPathChanged = (match, index) => {
    var _currentMatches$index
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      (((_currentMatches$index = currentMatches[index].route.path) === null ||
      _currentMatches$index === void 0
        ? void 0
        : _currentMatches$index.endsWith('*')) &&
        currentMatches[index].params['*'] !== match.params['*'])
    )
  }
  let newMatches =
    mode === 'data' && location.search !== path.search
      ? // this is really similar to stuff in transition.ts, maybe somebody smarter
        // than me (or in less of a hurry) can share some of it. You're the best.
        nextMatches.filter((match, index) => {
          let manifestRoute = manifest.routes[match.route.id]
          if (!manifestRoute.hasLoader) {
            return false
          }
          if (isNew(match, index) || matchPathChanged(match, index)) {
            return true
          }
          if (match.route.shouldRevalidate) {
            var _currentMatches$
            let routeChoice = match.route.shouldRevalidate({
              currentUrl: new URL(
                location.pathname + location.search + location.hash,
                window.origin
              ),
              currentParams:
                ((_currentMatches$ = currentMatches[0]) === null ||
                _currentMatches$ === void 0
                  ? void 0
                  : _currentMatches$.params) || {},
              nextUrl: new URL(page, window.origin),
              nextParams: match.params,
              defaultShouldRevalidate: true,
            })
            if (typeof routeChoice === 'boolean') {
              return routeChoice
            }
          }
          return true
        })
      : nextMatches.filter((match, index) => {
          let manifestRoute = manifest.routes[match.route.id]
          return (
            (mode === 'assets' || manifestRoute.hasLoader) &&
            (isNew(match, index) || matchPathChanged(match, index))
          )
        })
  return newMatches
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page)
  return dedupeHrefs(
    matches
      .filter((match) => manifest.routes[match.route.id].hasLoader)
      .map((match) => {
        let { pathname, search } = path
        let searchParams = new URLSearchParams(search)
        searchParams.set('_data', match.route.id)
        return `${pathname}?${searchParams}`
      })
  )
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(
    matches
      .map((match) => {
        let route = manifestPatch.routes[match.route.id]
        let hrefs = [route.module]
        if (route.imports) {
          hrefs = hrefs.concat(route.imports)
        }
        return hrefs
      })
      .flat(1)
  )
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)]
}
function parsePathPatch(href) {
  let path = parsePath(href)
  if (path.search === void 0) path.search = ''
  return path
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
function useDataRouterContext() {
  let context = require$$0.useContext(DataRouterContext)
  invariant(
    context,
    'You must render this element inside a <DataRouterContext.Provider> element'
  )
  return context
}
function useDataRouterStateContext() {
  let context = require$$0.useContext(DataRouterStateContext)
  invariant(
    context,
    'You must render this element inside a <DataRouterStateContext.Provider> element'
  )
  return context
}
const RemixContext = /* @__PURE__ */ require$$0.createContext(void 0)
RemixContext.displayName = 'Remix'
function useRemixContext() {
  let context = require$$0.useContext(RemixContext)
  invariant(context, 'You must render this element inside a <Remix> element')
  return context
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = require$$0.useState(false)
  let [shouldPrefetch, setShouldPrefetch] = require$$0.useState(false)
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } =
    theirElementProps
  require$$0.useEffect(() => {
    if (prefetch === 'render') {
      setShouldPrefetch(true)
    }
  }, [prefetch])
  let setIntent = () => {
    if (prefetch === 'intent') {
      setMaybePrefetch(true)
    }
  }
  let cancelIntent = () => {
    if (prefetch === 'intent') {
      setMaybePrefetch(false)
      setShouldPrefetch(false)
    }
  }
  require$$0.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true)
      }, 100)
      return () => {
        clearTimeout(id)
      }
    }
  }, [maybePrefetch])
  return [
    shouldPrefetch,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent),
    },
  ]
}
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
let NavLink$1 = /* @__PURE__ */ require$$0.forwardRef(
  ({ to, prefetch = 'none', ...props }, forwardedRef) => {
    let isAbsolute = typeof to === 'string' && ABSOLUTE_URL_REGEX.test(to)
    let href = useHref(to)
    let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(
      prefetch,
      props
    )
    return /* @__PURE__ */ require$$0.createElement(
      require$$0.Fragment,
      null,
      /* @__PURE__ */ require$$0.createElement(
        NavLink$2,
        _extends(
          {
            ref: forwardedRef,
            to,
          },
          props,
          prefetchHandlers
        )
      ),
      shouldPrefetch && !isAbsolute
        ? /* @__PURE__ */ require$$0.createElement(PrefetchPageLinks, {
            page: href,
          })
        : null
    )
  }
)
NavLink$1.displayName = 'NavLink'
let Link = /* @__PURE__ */ require$$0.forwardRef(
  ({ to, prefetch = 'none', ...props }, forwardedRef) => {
    let isAbsolute = typeof to === 'string' && ABSOLUTE_URL_REGEX.test(to)
    let href = useHref(to)
    let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(
      prefetch,
      props
    )
    return /* @__PURE__ */ require$$0.createElement(
      require$$0.Fragment,
      null,
      /* @__PURE__ */ require$$0.createElement(
        Link$1,
        _extends(
          {
            ref: forwardedRef,
            to,
          },
          props,
          prefetchHandlers
        )
      ),
      shouldPrefetch && !isAbsolute
        ? /* @__PURE__ */ require$$0.createElement(PrefetchPageLinks, {
            page: href,
          })
        : null
    )
  }
)
Link.displayName = 'Link'
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event)
    if (!event.defaultPrevented) {
      ourHandler(event)
    }
  }
}
function PrefetchPageLinks({ page, ...dataLinkProps }) {
  let { router } = useDataRouterContext()
  let matches = require$$0.useMemo(
    () => matchRoutes(router.routes, page),
    [router.routes, page]
  )
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`)
    return null
  }
  return /* @__PURE__ */ require$$0.createElement(
    PrefetchPageLinksImpl,
    _extends(
      {
        page,
        matches,
      },
      dataLinkProps
    )
  )
}
function usePrefetchedStylesheets(matches) {
  let { manifest, routeModules } = useRemixContext()
  let [styleLinks, setStyleLinks] = require$$0.useState([])
  require$$0.useEffect(() => {
    let interrupted = false
    getStylesheetPrefetchLinks(matches, manifest, routeModules).then(
      (links) => {
        if (!interrupted) setStyleLinks(links)
      }
    )
    return () => {
      interrupted = true
    }
  }, [matches, manifest, routeModules])
  return styleLinks
}
function PrefetchPageLinksImpl({ page, matches: nextMatches, ...linkProps }) {
  let location = useLocation()
  let { manifest } = useRemixContext()
  let { matches } = useDataRouterStateContext()
  let newMatchesForData = require$$0.useMemo(
    () =>
      getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        'data'
      ),
    [page, nextMatches, matches, manifest, location]
  )
  let newMatchesForAssets = require$$0.useMemo(
    () =>
      getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        'assets'
      ),
    [page, nextMatches, matches, manifest, location]
  )
  let dataHrefs = require$$0.useMemo(
    () => getDataLinkHrefs(page, newMatchesForData, manifest),
    [newMatchesForData, page, manifest]
  )
  let moduleHrefs = require$$0.useMemo(
    () => getModuleLinkHrefs(newMatchesForAssets, manifest),
    [newMatchesForAssets, manifest]
  )
  let styleLinks = usePrefetchedStylesheets(newMatchesForAssets)
  return /* @__PURE__ */ require$$0.createElement(
    require$$0.Fragment,
    null,
    dataHrefs.map((href) =>
      /* @__PURE__ */ require$$0.createElement(
        'link',
        _extends(
          {
            key: href,
            rel: 'prefetch',
            as: 'fetch',
            href,
          },
          linkProps
        )
      )
    ),
    moduleHrefs.map((href) =>
      /* @__PURE__ */ require$$0.createElement(
        'link',
        _extends(
          {
            key: href,
            rel: 'modulepreload',
            href,
          },
          linkProps
        )
      )
    ),
    styleLinks.map((link) =>
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ require$$0.createElement(
        'link',
        _extends(
          {
            key: link.href,
          },
          link
        )
      )
    )
  )
}
var classnamesExports = {}
var classnames$1 = {
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
    function classNames() {
      var classes = []
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var arg = arguments[i2]
        if (!arg) continue
        var argType = typeof arg
        if (argType === 'string' || argType === 'number') {
          classes.push(arg)
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg)
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
      classNames.default = classNames
      module.exports = classNames
    } else {
      window.classNames = classNames
    }
  })()
})(classnames$1)
const classnames = classnamesExports
const commonClasses$1 =
  'inline-flex items-center justify-center rounded px-3 py-1 font-bold focus:outline-none duration-500 sm:w-auto transition whitespace-nowrap'
const primaryClasses = classnames(
  commonClasses$1,
  'bg-gradient-primary hover:bg-gradient-primary-hover text-slate-1000 focus:ring-toxic-500 overflow-hidden'
)
const secondaryClasses = classnames(
  commonClasses$1,
  'bg-gradient-secondary-button transition duration-500 text-slate-1000 hover:bg-gradient-secondary-hover border-violet-500 focus:ring-violet-500 hover:border-slate-200 py-1/2 flex h-10 text-lg px-2 md:h-12  md:px-4 group mb-4 lg:mb-0 transition'
)
const secondaryOutlineClasses = classnames(
  commonClasses$1,
  'border border-violet-500 text-violet-400 !text-base focus:ring-violet-400 py-1/2 hover:border-violet-400'
)
function PrimaryButton({ children, className, ...props }) {
  return /* @__PURE__ */ jsx('button', {
    className: classnames(primaryClasses, className),
    ...props,
    children,
  })
}
function PrimaryLink({ children, className, to, ...props }) {
  return /* @__PURE__ */ jsx(Link, {
    to,
    className: classnames(primaryClasses, className),
    ...props,
    children,
  })
}
function SecondaryButton({ children, className, ...props }) {
  return /* @__PURE__ */ jsx('button', {
    className: classnames(secondaryClasses, className),
    ...props,
    children,
  })
}
function SecondaryButtonOutline({ children, className, ...props }) {
  return /* @__PURE__ */ jsx('button', {
    className: classnames(secondaryOutlineClasses, className),
    ...props,
    children,
  })
}
function SecondaryLink({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(Link, {
    ...props,
    className: classnames(secondaryClasses, className),
    children,
  })
}
function SecondaryLinkOutline({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(Link, {
    ...props,
    target: '_blank',
    className: classnames(secondaryOutlineClasses, className),
    children,
  })
}
const React$3 = require$$0__default
function CalendarIcon$1({ title, titleId, ...props }, svgRef) {
  return /* @__PURE__ */ React$3.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        ref: svgRef,
        'aria-labelledby': titleId,
      },
      props
    ),
    title
      ? /* @__PURE__ */ React$3.createElement(
          'title',
          {
            id: titleId,
          },
          title
        )
      : null,
    /* @__PURE__ */ React$3.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
    })
  )
}
const ForwardRef$3 = React$3.forwardRef(CalendarIcon$1)
var CalendarIcon_1 = ForwardRef$3
const React$2 = require$$0__default
function CheckIcon$1({ title, titleId, ...props }, svgRef) {
  return /* @__PURE__ */ React$2.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        ref: svgRef,
        'aria-labelledby': titleId,
      },
      props
    ),
    title
      ? /* @__PURE__ */ React$2.createElement(
          'title',
          {
            id: titleId,
          },
          title
        )
      : null,
    /* @__PURE__ */ React$2.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M4.5 12.75l6 6 9-13.5',
    })
  )
}
const ForwardRef$2 = React$2.forwardRef(CheckIcon$1)
var CheckIcon_1 = ForwardRef$2
const React$1 = require$$0__default
function ClipboardIcon$1({ title, titleId, ...props }, svgRef) {
  return /* @__PURE__ */ React$1.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        ref: svgRef,
        'aria-labelledby': titleId,
      },
      props
    ),
    title
      ? /* @__PURE__ */ React$1.createElement(
          'title',
          {
            id: titleId,
          },
          title
        )
      : null,
    /* @__PURE__ */ React$1.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184',
    })
  )
}
const ForwardRef$1 = React$1.forwardRef(ClipboardIcon$1)
var ClipboardIcon_1 = ForwardRef$1
const React = require$$0__default
function EnvelopeIcon$1({ title, titleId, ...props }, svgRef) {
  return /* @__PURE__ */ React.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        ref: svgRef,
        'aria-labelledby': titleId,
      },
      props
    ),
    title
      ? /* @__PURE__ */ React.createElement(
          'title',
          {
            id: titleId,
          },
          title
        )
      : null,
    /* @__PURE__ */ React.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
    })
  )
}
const ForwardRef = React.forwardRef(EnvelopeIcon$1)
var EnvelopeIcon_1 = ForwardRef
var CalendarIcon = CalendarIcon_1
var CheckIcon = CheckIcon_1
var ClipboardIcon = ClipboardIcon_1
var EnvelopeIcon = EnvelopeIcon_1
function CopyText({ children, value, className, onCopied }) {
  const onClick = useCallback(
    (event) => {
      event.preventDefault()
      event.stopPropagation()
      navigator.clipboard.writeText(value)
      if (onCopied) {
        onCopied()
      }
    },
    [value, onCopied]
  )
  return /* @__PURE__ */ jsx('div', {
    onClick,
    className: `${className}`,
    children,
  })
}
const variantStyle = {
  slate:
    'bg-slate-800 text-white rounded px-2 py-1 transition hover:text-slate-700 hover:bg-slate-700 hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
  blue: 'text-sm bg-indigo-700 rounded px-3 py-2 transition text-white hover:bg-indigo-600 active:bg-indigo-800 active:text-indigo-100 focus-visible:outline-indigo-600',
  darkTransparent:
    'bg-black/10 text-slate-900 rounded px-2 py-1 transition hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  lightTransparent:
    'bg-white/10 text-white-900 rounded px-2 py-1 transition hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  text: 'text-sm text-slate-400 transition hover:text-slate-300',
}
function CopyTextButton({ value, className, text, variant = 'blue' }) {
  const [copied, setCopied] = useState$1(false)
  const onCopied = useCallback(() => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }, [setCopied])
  return /* @__PURE__ */ jsx(CopyText, {
    className: `${className}`,
    value,
    onCopied,
    children: copied
      ? /* @__PURE__ */ jsx('div', {
          className: classnames(
            'flex items-center hover:cursor-pointer',
            variantStyle[variant]
          ),
          children: /* @__PURE__ */ jsx('p', {
            className: 'font-sans',
            children: 'Copied!',
          }),
        })
      : /* @__PURE__ */ jsxs('div', {
          className: classnames(
            'flex items-center hover:cursor-pointer',
            variantStyle[variant]
          ),
          children: [
            /* @__PURE__ */ jsx(ClipboardIcon, {
              className: 'mr-[2px] h-4 w-4',
            }),
            /* @__PURE__ */ jsx('p', {
              className: 'font-sans',
              children: 'Copy',
            }),
          ],
        }),
  })
}
const panelVariantStyle = {
  primary:
    'truncate text-indigo-300 bg-indigo-700/50 pl-3.5 pr-2 py-3 rounded border border-indigo-600 flex items-center justify-between gap-2 hover:cursor-pointer hover:bg-indigo-600/50 hover:border-indigo-600 transition',
  slate:
    'flex w-full items-center justify-between gap-2 truncate rounded bg-slate-850 py-2 pl-2.5 pr-1 transition hover:cursor-pointer hover:bg-slate-800 hover:text-slate-300',
  text: 'flex w-full items-center justify-between gap-2 truncate rounded bg-transparent py-2 pl-2.5 pr-1 transition hover:cursor-pointer hover:border-slate-700/50 hover:bg-slate-700/50',
  light:
    'truncate text-slate-300 bg-slate-900/50 pl-3.5 pr-2 py-3 rounded border border-slate-300/80 flex items-center justify-between gap-2 hover:cursor-pointer hover:text-slate-100 hover:bg-slate-900/50 hover:border-slate-200 transition',
}
function CopyTextPanel({ value, text, className, variant = 'primary' }) {
  const [copied, setCopied] = useState$1(false)
  const onCopied = useCallback(() => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }, [setCopied])
  return /* @__PURE__ */ jsx(CopyText, {
    value,
    onCopied,
    className: 'w-full',
    children: copied
      ? /* @__PURE__ */ jsxs('div', {
          className: classnames(className, panelVariantStyle[variant]),
          children: [
            /* @__PURE__ */ jsx('span', {
              className: 'truncate font-mono text-sm',
              children: text ?? value,
            }),
            /* @__PURE__ */ jsx(CheckIcon, {
              className: 'h-5 w-5 min-w-[1.25rem] text-green-500',
            }),
          ],
        })
      : /* @__PURE__ */ jsxs('div', {
          className: classnames(className, panelVariantStyle[variant]),
          children: [
            /* @__PURE__ */ jsx('span', {
              className: 'truncate font-mono text-sm',
              children: text ?? value,
            }),
            /* @__PURE__ */ jsx(ClipboardIcon, {
              className: 'h-4 w-4 min-w-[1.25rem]',
            }),
          ],
        }),
  })
}
function Container({ className, children }) {
  return /* @__PURE__ */ jsx('div', {
    className: classnames(
      'mx-auto max-w-7xl px-4 sm:px-10  lg:px-16 py-24 md:py-32',
      className
    ),
    children,
  })
}
function DiscordIconFooter(props) {
  return /* @__PURE__ */ jsx('svg', {
    className: props.className,
    width: '20',
    height: '20',
    viewBox: '2 0 24 22',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: /* @__PURE__ */ jsx('path', {
      d: 'M18.0881 7.3374C18.0116 7.27279 17.9402 7.2032 17.8637 7.14356C17.554 6.88097 17.2269 6.63856 16.8846 6.41792C16.4342 6.13677 15.9516 5.90824 15.4464 5.73702C15.0844 5.61277 14.7172 5.51835 14.35 5.40901C14.2837 5.40901 14.2786 5.38414 14.3092 5.3245C14.3398 5.26485 14.4061 5.14558 14.4469 5.05115C14.4538 5.03366 14.4667 5.0191 14.4835 5.01001C14.5003 5.00092 14.5198 4.99789 14.5387 5.00146C14.809 5.04619 15.0844 5.07601 15.3547 5.13069C15.8281 5.229 16.2896 5.3756 16.7316 5.56805C17.1998 5.76225 17.6502 5.99501 18.0779 6.26385C18.2267 6.353 18.3697 6.45094 18.5063 6.5571C18.5891 6.62989 18.6566 6.71764 18.7051 6.81552C19.1108 7.51363 19.4521 8.24546 19.7251 9.00236C20.1066 10.0234 20.3983 11.0742 20.5971 12.1435C20.7042 12.715 20.7909 13.2866 20.8674 13.8631C20.9184 14.216 20.9388 14.5788 20.9745 14.9366C20.9745 15.0559 20.9745 15.1702 21 15.2895C21 15.3164 20.9911 15.3425 20.9745 15.3641C20.462 15.9257 19.8549 16.398 19.1794 16.7606C18.5379 17.1017 17.8516 17.3558 17.1395 17.5161C16.7511 17.6096 16.3554 17.6711 15.9564 17.7H15.7116C15.701 17.7002 15.6904 17.6981 15.6807 17.6938C15.671 17.6895 15.6624 17.6831 15.6555 17.6752C15.4413 17.4068 15.2323 17.1334 15.0232 16.8551V16.8253C16.3606 16.3823 17.5548 15.6041 18.4859 14.5689C18.3788 14.6434 18.2819 14.718 18.1748 14.7826C17.8739 14.9665 17.5781 15.1504 17.267 15.3193C16.7354 15.61 16.1728 15.8433 15.5892 16.0151C14.6422 16.3069 13.6595 16.474 12.6671 16.5121H12.3713H11.8155C11.4011 16.5146 10.9871 16.4897 10.5762 16.4376C10.1887 16.3879 9.80109 16.3332 9.41351 16.2636C8.86661 16.1567 8.33068 16.002 7.81221 15.8014C7.15233 15.5479 6.523 15.2246 5.93553 14.8372L5.55306 14.5788C6.01711 15.0934 6.54864 15.5462 7.13396 15.9257C7.72153 16.3044 8.35541 16.6099 9.02084 16.8352L8.98514 16.8899L8.39358 17.6553C8.38145 17.6729 8.36453 17.6868 8.34472 17.6956C8.3249 17.7044 8.30298 17.7076 8.28138 17.705C7.93875 17.691 7.59775 17.6511 7.26145 17.5857C6.76756 17.4952 6.28289 17.3621 5.81314 17.1881C5.27458 16.9934 4.76114 16.7382 4.28323 16.4277C3.86783 16.1551 3.48621 15.8365 3.14601 15.4784C3.14601 15.4784 3.12051 15.4386 3.10011 15.4287C3.06012 15.3983 3.03012 15.3571 3.01381 15.3103C2.9975 15.2635 2.99559 15.2131 3.00831 15.1653L3.05421 14.6335C3.0899 14.2856 3.1205 13.9426 3.1664 13.5947C3.2123 13.2468 3.28879 12.7647 3.36529 12.3472C3.51174 11.5311 3.7093 10.7244 3.95685 9.93177C4.16738 9.2543 4.42116 8.59033 4.71671 7.94373C4.91624 7.50667 5.14275 7.08178 5.39497 6.6714C5.46939 6.5728 5.56514 6.49137 5.67544 6.43284C6.1388 6.11857 6.63239 5.84893 7.14925 5.62769C7.71444 5.38251 8.30641 5.20075 8.91375 5.08594L9.47981 5.00643C9.49599 5.00328 9.51279 5.00611 9.52694 5.01438C9.54108 5.02265 9.55155 5.03575 9.55631 5.05115L9.7042 5.33942C9.7297 5.38415 9.7042 5.39907 9.6685 5.40901C9.41351 5.47859 9.15854 5.54319 8.90865 5.61774C8.45618 5.75584 8.01886 5.93729 7.60313 6.15946C7.24627 6.34465 6.9052 6.5574 6.58319 6.79565C6.3588 6.9696 6.14462 7.14853 5.92533 7.32745C5.9235 7.33135 5.92255 7.33557 5.92255 7.33986C5.92255 7.34415 5.9235 7.3484 5.92533 7.35229L5.99163 7.32248C6.471 7.09882 6.95037 6.86522 7.43994 6.65647C8.00719 6.4106 8.59831 6.22081 9.20443 6.08991C9.61682 5.99062 10.0361 5.92083 10.459 5.88114C10.8414 5.84635 11.2239 5.82649 11.6013 5.80661C11.79 5.80661 11.9787 5.80661 12.1673 5.80661C12.5141 5.80661 12.866 5.8414 13.2128 5.86625C13.8437 5.91322 14.4686 6.01806 15.0793 6.17936C15.6332 6.32264 16.1739 6.51049 16.6959 6.74099L17.9606 7.33243L18.0218 7.36224L18.0881 7.3374ZM9.35232 10.5679C9.08643 10.5761 8.82881 10.66 8.6113 10.8093C8.39378 10.9586 8.2259 11.1667 8.12839 11.4079C7.98657 11.7022 7.93351 12.0296 7.97541 12.3522C8.01397 12.7406 8.19505 13.1024 8.48538 13.371C8.61754 13.5006 8.77761 13.6 8.95401 13.6619C9.13041 13.7238 9.31872 13.7467 9.50531 13.7289C9.68475 13.7178 9.85988 13.6705 10.0196 13.5901C10.1794 13.5097 10.3203 13.3979 10.4335 13.2617C10.7252 12.9245 10.8682 12.4886 10.8312 12.049C10.8196 11.7253 10.7096 11.4122 10.515 11.1494C10.3862 10.9659 10.2123 10.8166 10.0093 10.7151C9.80628 10.6135 9.58046 10.563 9.35232 10.5679ZM16.1094 12.1733C16.1148 11.8593 16.0319 11.55 15.8697 11.2787C15.7548 11.0583 15.5775 10.8747 15.3587 10.7496C15.14 10.6245 14.889 10.5632 14.6356 10.5729C14.451 10.578 14.2698 10.6219 14.1043 10.7017C13.9388 10.7815 13.793 10.8953 13.6769 11.0351C13.5285 11.203 13.4159 11.398 13.3459 11.6088C13.2758 11.8196 13.2496 12.0419 13.2689 12.2627C13.2861 12.6947 13.4787 13.1023 13.8043 13.3959C13.9417 13.5243 14.1072 13.6205 14.2883 13.6773C14.4694 13.7342 14.6614 13.7501 14.8498 13.7239C15.1962 13.6764 15.5095 13.4978 15.7218 13.2269C15.9694 12.9284 16.106 12.5571 16.1094 12.1733Z',
      fill: 'currentColor',
    }),
  })
}
function TriggerdotdevLogo(props) {
  return /* @__PURE__ */ jsxs('svg', {
    viewBox: '0 0 751 130',
    xmlns: 'http://www.w3.org/2000/svg',
    className: props.className,
    children: [
      /* @__PURE__ */ jsx('path', {
        d: 'M195.022 16.2676H135.445H137.799V32.5096H157.858V102.4H174.84V32.5096H195.022V16.2676Z',
        fill: 'url(#paint0_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M211.265 51.4587V40.8767H195.391V102.4H211.265V72.9917C211.265 60.0719 221.725 56.3805 229.97 57.3648V39.6463C222.218 39.6463 214.465 43.0916 211.265 51.4587Z',
        fill: 'url(#paint1_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M246.954 33.494C252.368 33.494 256.799 29.0644 256.799 23.7734C256.799 18.4824 252.368 13.9297 246.954 13.9297C241.662 13.9297 237.232 18.4824 237.232 23.7734C237.232 29.0644 241.662 33.494 246.954 33.494ZM239.078 102.4H254.953V40.8767H239.078V102.4Z',
        fill: 'url(#paint2_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M315.253 40.8768V48.5056C310.946 42.7224 304.301 39.1542 295.563 39.1542C278.089 39.1542 264.921 53.4275 264.921 70.6539C264.921 88.0033 278.089 102.154 295.563 102.154C304.301 102.154 310.946 98.5853 315.253 92.8021V99.4466C315.253 109.167 309.1 114.581 299.132 114.581C289.656 114.581 285.596 110.767 283.011 105.968L269.475 113.72C274.889 123.687 285.472 128.731 298.64 128.731C314.884 128.731 330.758 119.626 330.758 99.4466V40.8768H315.253ZM298.025 87.5112C288.057 87.5112 280.796 80.4975 280.796 70.6539C280.796 60.9332 288.057 53.9196 298.025 53.9196C307.992 53.9196 315.253 60.9332 315.253 70.6539C315.253 80.4975 307.992 87.5112 298.025 87.5112Z',
        fill: 'url(#paint3_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M390.936 40.8768V48.5056C386.629 42.7224 379.983 39.1542 371.246 39.1542C353.772 39.1542 340.604 53.4275 340.604 70.6539C340.604 88.0033 353.772 102.154 371.246 102.154C379.983 102.154 386.629 98.5853 390.936 92.8021V99.4466C390.936 109.167 384.783 114.581 374.815 114.581C365.339 114.581 361.278 110.767 358.694 105.968L345.157 113.72C350.572 123.687 361.155 128.731 374.322 128.731C390.566 128.731 406.441 119.626 406.441 99.4466V40.8768H390.936ZM373.707 87.5112C363.739 87.5112 356.479 80.4975 356.479 70.6539C356.479 60.9332 363.739 53.9196 373.707 53.9196C383.675 53.9196 390.936 60.9332 390.936 70.6539C390.936 80.4975 383.675 87.5112 373.707 87.5112Z',
        fill: 'url(#paint4_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M432.9 78.1597H479.293C479.663 76.0679 479.909 73.9761 479.909 71.6383C479.909 53.5505 466.987 39.1542 448.775 39.1542C429.454 39.1542 416.287 53.3044 416.287 71.6383C416.287 89.9721 429.331 104.122 450.005 104.122C461.819 104.122 471.048 99.3236 476.832 90.9564L464.034 83.5737C461.327 87.142 456.404 89.726 450.251 89.726C441.883 89.726 435.115 86.2807 432.9 78.1597ZM432.654 65.8551C434.5 57.9802 440.284 53.4274 448.775 53.4274C455.42 53.4274 462.065 56.9958 464.034 65.8551H432.654Z',
        fill: 'url(#paint5_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M505.199 51.4587V40.8767H489.324V102.4H505.199V72.9917C505.199 60.0719 515.659 56.3805 523.904 57.3648V39.6463C516.151 39.6463 508.398 43.0916 505.199 51.4587Z',
        fill: 'url(#paint6_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M529.934 103.999C535.717 103.999 540.394 99.3235 540.394 93.5404C540.394 87.7572 535.717 83.0815 529.934 83.0815C524.15 83.0815 519.473 87.7572 519.473 93.5404C519.473 99.3235 524.15 103.999 529.934 103.999Z',
        fill: 'url(#paint7_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M596.632 16.2676V48.1364C592.202 42.4763 585.679 39.1541 576.696 39.1541C560.206 39.1541 546.67 53.3044 546.67 71.6382C546.67 89.972 560.206 104.122 576.696 104.122C585.679 104.122 592.202 100.8 596.632 95.1399V102.4H612.506V16.2676L596.632 16.2676ZM579.65 88.9876C569.805 88.9876 562.544 81.9741 562.544 71.6382C562.544 61.3024 569.805 54.2887 579.65 54.2887C589.371 54.2887 596.632 61.3024 596.632 71.6382C596.632 81.9741 589.371 88.9876 579.65 88.9876Z',
        fill: 'url(#paint8_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M637.98 78.1597H684.373C684.742 76.0679 684.989 73.9761 684.989 71.6383C684.989 53.5505 672.067 39.1542 653.855 39.1542C634.534 39.1542 621.367 53.3044 621.367 71.6383C621.367 89.9721 634.411 104.122 655.085 104.122C666.899 104.122 676.128 99.3236 681.912 90.9564L669.114 83.5737C666.407 87.142 661.484 89.726 655.331 89.726C646.963 89.726 640.195 86.2807 637.98 78.1597ZM637.734 65.8551C639.58 57.9802 645.363 53.4274 653.855 53.4274C660.5 53.4274 667.145 56.9958 669.114 65.8551H637.734Z',
        fill: 'url(#paint9_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M732.859 40.8768L717.846 83.9428L702.955 40.8768H685.481L708.862 102.4H726.952L750.333 40.8768H732.859Z',
        fill: 'url(#paint10_linear_228_1439)',
      }),
      /* @__PURE__ */ jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M35.664 42.3949L59.4114 1.26865L118.264 103.194H0.558823L24.3062 62.0665L41.1046 71.7643L34.157 83.7971H84.6657L59.4114 40.0612L52.4637 52.094L35.664 42.3949Z',
        fill: 'url(#paint11_linear_228_1439)',
      }),
      /* @__PURE__ */ jsxs('defs', {
        children: [
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint0_linear_228_1439',
            x1: '329.674',
            y1: '150.079',
            x2: '329.674',
            y2: '13.9297',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#41FF54' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#E7FF52',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint1_linear_228_1439',
            x1: '329.674',
            y1: '150.079',
            x2: '329.674',
            y2: '13.9297',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#41FF54' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#E7FF52',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint2_linear_228_1439',
            x1: '329.674',
            y1: '150.079',
            x2: '329.674',
            y2: '13.9297',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#41FF54' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#E7FF52',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint3_linear_228_1439',
            x1: '329.674',
            y1: '150.079',
            x2: '329.674',
            y2: '13.9297',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#41FF54' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#E7FF52',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint4_linear_228_1439',
            x1: '329.674',
            y1: '150.079',
            x2: '329.674',
            y2: '13.9297',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#41FF54' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#E7FF52',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint5_linear_228_1439',
            x1: '329.674',
            y1: '150.079',
            x2: '329.674',
            y2: '13.9297',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#41FF54' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#E7FF52',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint6_linear_228_1439',
            x1: '329.674',
            y1: '150.079',
            x2: '329.674',
            y2: '13.9297',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#41FF54' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#E7FF52',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint7_linear_228_1439',
            x1: '634.903',
            y1: '139.717',
            x2: '651.436',
            y2: '25.9719',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#2563EB' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#A855F7',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint8_linear_228_1439',
            x1: '634.903',
            y1: '139.717',
            x2: '651.436',
            y2: '25.9719',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#2563EB' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#A855F7',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint9_linear_228_1439',
            x1: '634.903',
            y1: '139.717',
            x2: '651.436',
            y2: '25.9719',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#2563EB' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#A855F7',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint10_linear_228_1439',
            x1: '634.903',
            y1: '139.717',
            x2: '651.436',
            y2: '25.9719',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#2563EB' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#A855F7',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('linearGradient', {
            id: 'paint11_linear_228_1439',
            x1: '95.8593',
            y1: '103.194',
            x2: '94.7607',
            y2: '31.2381',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx('stop', { stopColor: '#41FF54' }),
              /* @__PURE__ */ jsx('stop', {
                offset: '1',
                stopColor: '#E7FF52',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function Footer() {
  return /* @__PURE__ */ jsx('footer', {
    className: 'bg-slate-900 pb-10 z-10 border-t border-slate-400/10 pt-12',
    children: /* @__PURE__ */ jsxs(Container, {
      children: [
        /* @__PURE__ */ jsxs('div', {
          className:
            'flex items-start grow md:flex-row flex-col justify-between px-4',
          children: [
            /* @__PURE__ */ jsx('div', {
              className: 'hidden lg:flex w-64 h-auto mr-60',
              children: /* @__PURE__ */ jsx(TriggerdotdevLogo, {}),
            }),
            /* @__PURE__ */ jsxs('div', {
              className:
                'grid grid-cols-2 sm:grid-cols-4 gap-y-12 sm:pt-2 pt-8 w-full',
              children: [
                /* @__PURE__ */ jsxs('div', {
                  className: 'grid gap-y-2 content-start',
                  children: [
                    /* @__PURE__ */ jsx('p', {
                      className:
                        'pb-4 text-slate-500 text-xs md:text-xs font-bold tracking-wider',
                      children: 'PRODUCT',
                    }),
                    /* @__PURE__ */ jsx('a', {
                      href: 'https://docs.trigger.dev',
                      'aria-label': 'Docs',
                      title: 'Docs',
                      target: '_blank',
                      className:
                        ' flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: 'Docs',
                    }),
                    /* @__PURE__ */ jsx('a', {
                      href: 'https://app.trigger.dev/templates',
                      'aria-label': 'Templates',
                      title: 'Templates',
                      className:
                        ' flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: 'Templates',
                    }),
                    /* @__PURE__ */ jsx('a', {
                      href: '/pricing',
                      'aria-label': 'Pricing',
                      title: 'Pricing',
                      className:
                        ' flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: 'Pricing',
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'grid gap-y-2 content-start',
                  children: [
                    /* @__PURE__ */ jsx('p', {
                      className:
                        'pb-4 text-slate-500 text-xs md:text-xs font-bold tracking-wider',
                      children: 'COMPANY',
                    }),
                    /* @__PURE__ */ jsx('a', {
                      href: 'https://blog.trigger.dev',
                      'aria-label': 'Blog',
                      title: 'Blog',
                      className:
                        ' flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: 'Blog',
                    }),
                    /* @__PURE__ */ jsx('a', {
                      href: '/legal/privacy',
                      'aria-label': 'Privacy',
                      target: '_blank',
                      title: 'Privacy',
                      className:
                        ' flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: 'Privacy',
                    }),
                    /* @__PURE__ */ jsx('a', {
                      href: '/legal/terms',
                      'aria-label': 'Terms',
                      target: '_blank',
                      title: 'Terms',
                      className:
                        ' flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: 'Terms',
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'grid grow gap-y-2 content-start',
                  children: [
                    /* @__PURE__ */ jsx('p', {
                      className:
                        'pb-4 text-slate-500 text-xs md:text-xs font-bold tracking-wider',
                      children: 'COMMUNITY',
                    }),
                    /* @__PURE__ */ jsxs('a', {
                      href: 'https://github.com/triggerdotdev/trigger.dev',
                      'aria-label': 'Trigger.dev GitHub',
                      target: '_blank',
                      title: 'Trigger.dev GitHub',
                      className:
                        ' flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: [
                        /* @__PURE__ */ jsx('svg', {
                          className: 'mr-2',
                          width: '16',
                          height: '16',
                          viewBox: '0 0 24 24',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: /* @__PURE__ */ jsx('path', {
                            d: 'M11.9906 1.78809C6.19453 1.78574 1.5 6.47793 1.5 12.2693C1.5 16.849 4.43672 20.742 8.52656 22.1717C9.07734 22.31 8.99297 21.9186 8.99297 21.6514V19.835C5.8125 20.2076 5.68359 18.1029 5.47031 17.7514C5.03906 17.0154 4.01953 16.8279 4.32422 16.4764C5.04844 16.1037 5.78672 16.5701 6.64219 17.8334C7.26094 18.7498 8.46797 18.5951 9.07969 18.4428C9.21328 17.892 9.49922 17.3998 9.89297 17.0178C6.59766 16.4271 5.22422 14.4162 5.22422 12.0256C5.22422 10.8654 5.60625 9.79902 6.35625 8.93887C5.87812 7.5209 6.40078 6.30684 6.47109 6.12637C7.83281 6.00449 9.24844 7.10137 9.35859 7.18809C10.132 6.97949 11.0156 6.86934 12.0047 6.86934C12.9984 6.86934 13.8844 6.98418 14.6648 7.19512C14.9297 6.99355 16.2422 6.05137 17.5078 6.16621C17.5758 6.34668 18.0867 7.53262 17.6367 8.93184C18.3961 9.79434 18.7828 10.8701 18.7828 12.0326C18.7828 14.4279 17.4 16.4412 14.0953 17.0225C14.3784 17.3008 14.6031 17.6328 14.7564 17.999C14.9098 18.3652 14.9886 18.7583 14.9883 19.1553V21.792C15.007 22.0029 14.9883 22.2115 15.3398 22.2115C19.4906 20.8123 22.4789 16.8912 22.4789 12.2717C22.4789 6.47793 17.782 1.78809 11.9906 1.78809V1.78809Z',
                            fill: 'currentColor',
                          }),
                        }),
                        'GitHub',
                      ],
                    }),
                    /* @__PURE__ */ jsxs('a', {
                      href: 'https://discord.gg/nkqV9xBYWy',
                      'aria-label': 'Discord',
                      target: '_blank',
                      title: 'Discord',
                      className:
                        ' flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: [
                        /* @__PURE__ */ jsx(DiscordIconFooter, {
                          className: 'mr-1',
                        }),
                        'Discord',
                      ],
                    }),
                    /* @__PURE__ */ jsxs('a', {
                      href: 'https://twitter.com/triggerdotdev',
                      'aria-label': 'Trigger.dev on Twitter',
                      target: '_blank',
                      className:
                        'group flex items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: [
                        /* @__PURE__ */ jsx('svg', {
                          className: 'mr-2',
                          xmlns: 'http://www.w3.org/2000/svg',
                          width: '16',
                          height: '16',
                          fill: 'none',
                          viewBox: '0 0 25 24',
                          children: /* @__PURE__ */ jsx('path', {
                            fill: 'currentColor',
                            d: 'M7.9975 21.6102C16.9943 21.6102 21.9143 14.1625 21.9143 7.7042C21.9143 7.49266 21.91 7.28207 21.9005 7.07245C22.8555 6.38257 23.6856 5.52166 24.3403 4.54162C23.4639 4.93087 22.5208 5.1929 21.5314 5.31106C22.5413 4.70599 23.3166 3.74883 23.6823 2.6078C22.7373 3.16761 21.6907 3.57449 20.5764 3.79416C19.6839 2.84418 18.4131 2.25 17.0061 2.25C14.305 2.25 12.1146 4.43878 12.1146 7.13676C12.1146 7.52028 12.1575 7.89333 12.2414 8.25117C8.1762 8.04677 4.57148 6.10196 2.159 3.14474C1.73894 3.86701 1.49672 4.70601 1.49672 5.60123C1.49672 7.29687 2.36024 8.79379 3.67336 9.66951C2.87088 9.64473 2.11704 9.42461 1.45816 9.05823C1.45744 9.07874 1.45744 9.09874 1.45744 9.12065C1.45744 11.4876 3.14344 13.4638 5.38152 13.9116C4.97052 14.0236 4.53808 14.0836 4.09176 14.0836C3.77707 14.0836 3.47048 14.0527 3.17248 13.9955C3.79518 15.9374 5.60088 17.3506 7.74168 17.3901C6.0676 18.7012 3.95872 19.4821 1.66672 19.4821C1.2724 19.4821 0.882856 19.4597 0.5 19.4144C2.66472 20.8009 5.23512 21.6099 7.99776 21.6099',
                          }),
                        }),
                        'Twitter',
                      ],
                    }),
                    /* @__PURE__ */ jsxs('a', {
                      href: 'https://www.linkedin.com/company/triggerdotdev',
                      'aria-label': 'Trigger.dev LinkedIn',
                      target: '_blank',
                      title: 'Trigger.dev LinkedIn',
                      className:
                        ' flex text-right items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: [
                        /* @__PURE__ */ jsx('svg', {
                          className: 'mr-2',
                          xmlns: 'http://www.w3.org/2000/svg',
                          width: '15',
                          height: '15',
                          fill: 'none',
                          viewBox: '0 0 25 24',
                          children: /* @__PURE__ */ jsx('path', {
                            fill: 'currentColor',
                            d: 'M20.8084 20.1082H17.2769V14.6321C17.2769 13.3262 17.2533 11.6452 15.4401 11.6452C13.6007 11.6452 13.3193 13.068 13.3193 14.537V20.1078H9.78768V8.84669H13.178V10.3856H13.2255C13.5648 9.81124 14.055 9.33871 14.6441 9.01837C15.2332 8.69804 15.8989 8.5419 16.5705 8.56658C20.1499 8.56658 20.8099 10.8978 20.8099 13.9305L20.8084 20.1082ZM5.80288 7.30737C5.39755 7.30744 5.00128 7.1885 4.66422 6.96559C4.32715 6.74267 4.06443 6.42579 3.90925 6.05503C3.75407 5.68426 3.7134 5.27625 3.7924 4.88261C3.87141 4.48896 4.06654 4.12735 4.3531 3.84351C4.63967 3.55966 5.00481 3.36633 5.40234 3.28796C5.79988 3.20959 6.21195 3.2497 6.58646 3.40322C6.96097 3.55675 7.28109 3.81678 7.50634 4.15045C7.7316 4.48411 7.85187 4.87643 7.85194 5.27777C7.85199 5.54425 7.79902 5.80814 7.69607 6.05435C7.59312 6.30057 7.44222 6.5243 7.25195 6.71276C7.06167 6.90123 6.83576 7.05074 6.58713 7.15276C6.3385 7.25479 6.07202 7.30732 5.80288 7.30737V7.30737ZM7.56867 20.1082H4.03342V8.84669H7.56867V20.1082ZM22.5691 0.00160786H2.2588C1.79782 -0.00354313 1.3536 0.172731 1.02381 0.491694C0.694018 0.810658 0.505626 1.24621 0.5 1.70266V21.8963C0.505434 22.353 0.693715 22.7888 1.0235 23.1081C1.35328 23.4274 1.79759 23.604 2.2588 23.5992H22.5691C23.0312 23.6049 23.4768 23.4288 23.8078 23.1095C24.1389 22.7902 24.3285 22.3539 24.3349 21.8963V1.7012C24.3283 1.24385 24.1386 0.8078 23.8075 0.488844C23.4764 0.169889 23.031 -0.00588157 22.5691 0.00015027',
                          }),
                        }),
                        'LinkedIn',
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'grid gap-y-2 content-start',
                  children: [
                    /* @__PURE__ */ jsx('p', {
                      className:
                        'pb-4 text-slate-500 text-xs md:text-xs font-bold tracking-wider',
                      children: 'CONTACT',
                    }),
                    /* @__PURE__ */ jsxs('a', {
                      href: 'mailto:hello@trigger.dev',
                      'aria-label': 'Send Trigger.dev an email',
                      className:
                        'group flex gap-2 items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: [
                        /* @__PURE__ */ jsx(EnvelopeIcon, {
                          className:
                            'h-4 w-4 text-slate-500 group-hover:fill-toxic-500 transition',
                        }),
                        'Get in touch',
                      ],
                    }),
                    /* @__PURE__ */ jsxs('a', {
                      href: 'https://cal.com/team/triggerdotdev/call',
                      'aria-label': 'Schedule a call with the founders',
                      target: '_blank',
                      className:
                        'group flex gap-2 items-center text-xs text-slate-500 hover:text-toxic-500 transition',
                      children: [
                        /* @__PURE__ */ jsx(CalendarIcon, {
                          className:
                            'h-4 w-4 text-slate-500 group-hover:fill-toxic-500 transition',
                        }),
                        'Schedule a call',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsxs('div', {
          className: 'flex flex-col gap-y-2 pt-12 pb-8 px-4',
          children: [
            /* @__PURE__ */ jsxs('p', {
              className: 'mt-6 text-xs text-slate-500 sm:mt-0',
              children: [
                'Copyright © ',
                /* @__PURE__ */ new Date().getFullYear(),
                ' Trigger.dev. All rights reserved.',
              ],
            }),
            /* @__PURE__ */ jsxs('p', {
              className: 'mt-2 text-xs text-slate-500 sm:mt-0',
              children: [
                'From the makers of ',
                /* @__PURE__ */ jsx('a', {
                  href: 'https://jsonhero.io',
                  className:
                    'text-slate-400 underline transition hover:underline hover:text-toxic-500',
                  target: '_blank',
                  children: 'JSON Hero',
                }),
                '.',
              ],
            }),
          ],
        }),
      ],
    }),
  })
}
function GithubIcon({ className }) {
  return /* @__PURE__ */ jsxs('svg', {
    className,
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      /* @__PURE__ */ jsx('g', {
        clipPath: 'url(#clip0_571_3822)',
        children: /* @__PURE__ */ jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M12 0C5.37017 0 0 5.50708 0 12.306C0 17.745 3.44015 22.3532 8.20626 23.9849C8.80295 24.0982 9.02394 23.7205 9.02394 23.3881C9.02394 23.0935 9.01657 22.3229 9.00921 21.2956C5.67219 22.0359 4.96501 19.6487 4.96501 19.6487C4.41989 18.2285 3.63168 17.8508 3.63168 17.8508C2.54144 17.0878 3.71271 17.1029 3.71271 17.1029C4.91344 17.1936 5.55433 18.372 5.55433 18.372C6.62247 20.2531 8.36096 19.7092 9.04604 19.3919C9.15654 18.5987 9.46593 18.0548 9.80479 17.745C7.13812 17.4353 4.33886 16.3777 4.33886 11.6638C4.33886 10.3192 4.80295 9.2238 5.57643 8.36261C5.4512 8.05288 5.03867 6.79887 5.69429 5.1067C5.69429 5.1067 6.7035 4.77432 8.99447 6.36827C9.95212 6.09632 10.9761 5.96034 12 5.95279C13.0166 5.95279 14.0479 6.09632 15.0055 6.36827C17.2965 4.77432 18.3057 5.1067 18.3057 5.1067C18.9613 6.79887 18.5488 8.05288 18.4236 8.36261C19.1897 9.2238 19.6538 10.3192 19.6538 11.6638C19.6538 16.3928 16.8471 17.4278 14.1731 17.7375C14.6004 18.1152 14.9908 18.8706 14.9908 20.0189C14.9908 21.6657 14.9761 22.9877 14.9761 23.3957C14.9761 23.728 15.1897 24.1058 15.8011 23.9849C20.5672 22.3532 24 17.745 24 12.3135C24 5.50708 18.6298 0 12 0Z',
          fill: 'currentColor',
        }),
      }),
      /* @__PURE__ */ jsx('defs', {
        children: /* @__PURE__ */ jsx('clipPath', {
          id: 'clip0_571_3822',
          children: /* @__PURE__ */ jsx('rect', {
            width: '24',
            height: '24',
            fill: 'white',
          }),
        }),
      }),
    ],
  })
}
function GithubStarsButtonStatic({ count }) {
  const rounded =
    count >= 1e3
      ? Math.floor((count / 1e3) * 10) / 10 + 'k'
      : Math.round(count / 50) * 50 + ''
  return /* @__PURE__ */ jsxs(Link, {
    to: 'https://github.com/triggerdotdev/trigger.dev',
    className:
      'group flex h-8 flex-row items-center justify-center overflow-hidden rounded border-[1px] border-slate-700 bg-slate-800 transition',
    target: '_blank',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className:
          'flex h-full items-center justify-center bg-slate-700/80 pr-2 pl-2 placeholder-blue-200 transition group-hover:bg-slate-600',
        children: [
          /* @__PURE__ */ jsx(GithubIcon, {
            className: 'flex h-4 w-4 text-slate-50 lg:mr-1',
          }),
          /* @__PURE__ */ jsx('p', {
            className:
              'ml-1 hidden text-sm font-semibold tracking-tight text-slate-300 transition group-hover:text-slate-50 lg:flex',
            children: 'Star',
          }),
        ],
      }),
      /* @__PURE__ */ jsx('div', { className: 'h-full w-[1px] bg-slate-700' }),
      /* @__PURE__ */ jsx('div', {
        className:
          'flex h-full bg-slate-800 pl-2 pr-2 transition group-hover:bg-slate-700',
        children: /* @__PURE__ */ jsx('p', {
          className:
            'text-md min-w-4 flex items-center justify-center text-sm font-semibold tracking-tight text-slate-300 transition group-hover:text-slate-50',
          children: rounded,
        }),
      }),
    ],
  })
}
function GithubStarsButtonLargeStatic({ count }) {
  const rounded =
    count >= 1e3
      ? Math.floor((count / 1e3) * 10) / 10 + 'k'
      : Math.round(count / 50) * 50 + ''
  return /* @__PURE__ */ jsxs(Link, {
    to: 'https://github.com/triggerdotdev/trigger.dev',
    className:
      'group flex flex-row items-center justify-center overflow-hidden rounded border-[1px] border-slate-700 bg-slate-800 transition',
    target: '_blank',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className:
          'flex h-full items-center justify-center bg-slate-700/80 p-3 placeholder-blue-200 transition group-hover:bg-slate-600',
        children: [
          /* @__PURE__ */ jsx(GithubIcon, {
            className: 'flex h-6 w-6 text-slate-50 lg:mr-1',
          }),
          /* @__PURE__ */ jsx('p', {
            className:
              'ml-1 text-lg font-semibold tracking-tight text-slate-100 transition group-hover:text-slate-50',
            children: 'Star us on GitHub',
          }),
        ],
      }),
      /* @__PURE__ */ jsx('div', { className: 'h-full w-[1px] bg-slate-700' }),
      /* @__PURE__ */ jsx('div', {
        className:
          'flex h-full bg-slate-800 pl-3 pr-3 transition group-hover:bg-slate-700',
        children: /* @__PURE__ */ jsx('p', {
          className:
            'text-md min-w-4 flex items-center justify-center text-lg font-semibold tracking-tight text-slate-100 transition group-hover:text-slate-50',
          children: rounded,
        }),
      }),
    ],
  })
}
var i$2 = Object.defineProperty
var d$3 = (t2, e2, n2) =>
  e2 in t2
    ? i$2(t2, e2, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: n2,
      })
    : (t2[e2] = n2)
var r$1 = (t2, e2, n2) => (
  d$3(t2, typeof e2 != 'symbol' ? e2 + '' : e2, n2), n2
)
let o$4 = class o {
  constructor() {
    r$1(this, 'current', this.detect())
    r$1(this, 'handoffState', 'pending')
    r$1(this, 'currentId', 0)
  }
  set(e2) {
    this.current !== e2 &&
      ((this.handoffState = 'pending'),
      (this.currentId = 0),
      (this.current = e2))
  }
  reset() {
    this.set(this.detect())
  }
  nextId() {
    return ++this.currentId
  }
  get isServer() {
    return this.current === 'server'
  }
  get isClient() {
    return this.current === 'client'
  }
  detect() {
    return typeof window == 'undefined' || typeof document == 'undefined'
      ? 'server'
      : 'client'
  }
  handoff() {
    this.handoffState === 'pending' && (this.handoffState = 'complete')
  }
  get isHandoffComplete() {
    return this.handoffState === 'complete'
  }
}
let s$5 = new o$4()
let l$2 = (e2, f2) => {
  s$5.isServer ? useEffect$1(e2, f2) : useLayoutEffect$1(e2, f2)
}
function s$4(e2) {
  let r2 = useRef(e2)
  return (
    l$2(() => {
      r2.current = e2
    }, [e2]),
    r2
  )
}
function t(e2) {
  typeof queueMicrotask == 'function'
    ? queueMicrotask(e2)
    : Promise.resolve()
        .then(e2)
        .catch((o3) =>
          setTimeout(() => {
            throw o3
          })
        )
}
function o$3() {
  let n2 = [],
    r2 = {
      addEventListener(e2, t2, s2, a2) {
        return (
          e2.addEventListener(t2, s2, a2),
          r2.add(() => e2.removeEventListener(t2, s2, a2))
        )
      },
      requestAnimationFrame(...e2) {
        let t2 = requestAnimationFrame(...e2)
        return r2.add(() => cancelAnimationFrame(t2))
      },
      nextFrame(...e2) {
        return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2))
      },
      setTimeout(...e2) {
        let t2 = setTimeout(...e2)
        return r2.add(() => clearTimeout(t2))
      },
      microTask(...e2) {
        let t$1 = { current: true }
        return (
          t(() => {
            t$1.current && e2[0]()
          }),
          r2.add(() => {
            t$1.current = false
          })
        )
      },
      style(e2, t2, s2) {
        let a2 = e2.style.getPropertyValue(t2)
        return (
          Object.assign(e2.style, { [t2]: s2 }),
          this.add(() => {
            Object.assign(e2.style, { [t2]: a2 })
          })
        )
      },
      group(e2) {
        let t2 = o$3()
        return e2(t2), this.add(() => t2.dispose())
      },
      add(e2) {
        return (
          n2.push(e2),
          () => {
            let t2 = n2.indexOf(e2)
            if (t2 >= 0) for (let s2 of n2.splice(t2, 1)) s2()
          }
        )
      },
      dispose() {
        for (let e2 of n2.splice(0)) e2()
      },
    }
  return r2
}
function p$1() {
  let [e2] = useState$1(o$3)
  return useEffect$1(() => () => e2.dispose(), [e2]), e2
}
let o$2 = function (t2) {
  let e2 = s$4(t2)
  return require$$0__default.useCallback((...r2) => e2.current(...r2), [e2])
}
function l$1() {
  let [e2, f2] = useState$1(s$5.isHandoffComplete)
  return (
    e2 && s$5.isHandoffComplete === false && f2(false),
    useEffect$1(() => {
      e2 !== true && f2(true)
    }, [e2]),
    useEffect$1(() => s$5.handoff(), []),
    e2
  )
}
var o$1
let I$2 =
  (o$1 = require$$0__default.useId) != null
    ? o$1
    : function () {
        let n2 = l$1(),
          [e2, u2] = require$$0__default.useState(
            n2 ? () => s$5.nextId() : null
          )
        return (
          l$2(() => {
            e2 === null && u2(s$5.nextId())
          }, [e2]),
          e2 != null ? '' + e2 : void 0
        )
      }
function u$1(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2]
    return typeof e2 == 'function' ? e2(...a2) : e2
  }
  let t2 = new Error(
    `Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      n2
    )
      .map((e2) => `"${e2}"`)
      .join(', ')}.`
  )
  throw (Error.captureStackTrace && Error.captureStackTrace(t2, u$1), t2)
}
function e$1(r2) {
  return s$5.isServer
    ? null
    : r2 instanceof Node
    ? r2.ownerDocument
    : r2 != null && r2.hasOwnProperty('current') && r2.current instanceof Node
    ? r2.current.ownerDocument
    : document
}
let f$1 = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
]
  .map((e2) => `${e2}:not([tabindex='-1'])`)
  .join(',')
var L$2 = ((r2) => (
    (r2[(r2.First = 1)] = 'First'),
    (r2[(r2.Previous = 2)] = 'Previous'),
    (r2[(r2.Next = 4)] = 'Next'),
    (r2[(r2.Last = 8)] = 'Last'),
    (r2[(r2.WrapAround = 16)] = 'WrapAround'),
    (r2[(r2.NoScroll = 32)] = 'NoScroll'),
    r2
  ))(L$2 || {}),
  N = ((o3) => (
    (o3[(o3.Error = 0)] = 'Error'),
    (o3[(o3.Overflow = 1)] = 'Overflow'),
    (o3[(o3.Success = 2)] = 'Success'),
    (o3[(o3.Underflow = 3)] = 'Underflow'),
    o3
  ))(N || {}),
  T$1 = ((n2) => (
    (n2[(n2.Previous = -1)] = 'Previous'), (n2[(n2.Next = 1)] = 'Next'), n2
  ))(T$1 || {})
function E$1(e2 = document.body) {
  return e2 == null
    ? []
    : Array.from(e2.querySelectorAll(f$1)).sort((t2, n2) =>
        Math.sign(
          (t2.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n2.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      )
}
var F$1 = ((n2) => (
  (n2[(n2.Strict = 0)] = 'Strict'), (n2[(n2.Loose = 1)] = 'Loose'), n2
))(F$1 || {})
function h$1(e2, t2 = 0) {
  var n2
  return e2 === ((n2 = e$1(e2)) == null ? void 0 : n2.body)
    ? false
    : u$1(t2, {
        [0]() {
          return e2.matches(f$1)
        },
        [1]() {
          let l2 = e2
          for (; l2 !== null; ) {
            if (l2.matches(f$1)) return true
            l2 = l2.parentElement
          }
          return false
        },
      })
}
let H = ['textarea', 'input'].join(',')
function w$1(e2) {
  var t2, n2
  return (n2 =
    (t2 = e2 == null ? void 0 : e2.matches) == null
      ? void 0
      : t2.call(e2, H)) != null
    ? n2
    : false
}
function A$1(e2, t2 = (n2) => n2) {
  return e2.slice().sort((n2, l2) => {
    let o3 = t2(n2),
      i2 = t2(l2)
    if (o3 === null || i2 === null) return 0
    let r2 = o3.compareDocumentPosition(i2)
    return r2 & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : r2 & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0
  })
}
function I$1(
  e2,
  t2,
  { sorted: n2 = true, relativeTo: l2 = null, skipElements: o3 = [] } = {}
) {
  let i2 = Array.isArray(e2)
      ? e2.length > 0
        ? e2[0].ownerDocument
        : document
      : e2.ownerDocument,
    r2 = Array.isArray(e2) ? (n2 ? A$1(e2) : e2) : E$1(e2)
  o3.length > 0 && r2.length > 1 && (r2 = r2.filter((s2) => !o3.includes(s2))),
    (l2 = l2 != null ? l2 : i2.activeElement)
  let d2 = (() => {
      if (t2 & 5) return 1
      if (t2 & 10) return -1
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
      )
    })(),
    x = (() => {
      if (t2 & 1) return 0
      if (t2 & 2) return Math.max(0, r2.indexOf(l2)) - 1
      if (t2 & 4) return Math.max(0, r2.indexOf(l2)) + 1
      if (t2 & 8) return r2.length - 1
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
      )
    })(),
    p2 = t2 & 32 ? { preventScroll: true } : {},
    c2 = 0,
    a2 = r2.length,
    u2
  do {
    if (c2 >= a2 || c2 + a2 <= 0) return 0
    let s2 = x + c2
    if (t2 & 16) s2 = (s2 + a2) % a2
    else {
      if (s2 < 0) return 3
      if (s2 >= a2) return 1
    }
    ;(u2 = r2[s2]), u2 == null || u2.focus(p2), (c2 += d2)
  } while (u2 !== i2.activeElement)
  return (
    t2 & 6 && w$1(u2) && u2.select(),
    u2.hasAttribute('tabindex') || u2.setAttribute('tabindex', '0'),
    2
  )
}
function d$2(e2, r2, n2) {
  let o3 = s$4(r2)
  useEffect$1(() => {
    function t2(u2) {
      o3.current(u2)
    }
    return (
      document.addEventListener(e2, t2, n2),
      () => document.removeEventListener(e2, t2, n2)
    )
  }, [e2, n2])
}
function L$1(m2, E2, c2 = true) {
  let i2 = useRef(false)
  useEffect$1(() => {
    requestAnimationFrame(() => {
      i2.current = c2
    })
  }, [c2])
  function f2(e2, o3) {
    if (!i2.current || e2.defaultPrevented) return
    let l2 = (function r2(t2) {
        return typeof t2 == 'function'
          ? r2(t2())
          : Array.isArray(t2) || t2 instanceof Set
          ? t2
          : [t2]
      })(m2),
      n2 = o3(e2)
    if (n2 !== null && n2.getRootNode().contains(n2)) {
      for (let r2 of l2) {
        if (r2 === null) continue
        let t2 = r2 instanceof HTMLElement ? r2 : r2.current
        if (
          (t2 != null && t2.contains(n2)) ||
          (e2.composed && e2.composedPath().includes(t2))
        )
          return
      }
      return (
        !h$1(n2, F$1.Loose) && n2.tabIndex !== -1 && e2.preventDefault(),
        E2(e2, n2)
      )
    }
  }
  let u2 = useRef(null)
  d$2(
    'mousedown',
    (e2) => {
      var o3, l2
      i2.current &&
        (u2.current =
          ((l2 = (o3 = e2.composedPath) == null ? void 0 : o3.call(e2)) == null
            ? void 0
            : l2[0]) || e2.target)
    },
    true
  ),
    d$2(
      'click',
      (e2) => {
        u2.current && (f2(e2, () => u2.current), (u2.current = null))
      },
      true
    ),
    d$2(
      'blur',
      (e2) =>
        f2(e2, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      true
    )
}
function i$1(t2) {
  var n2
  if (t2.type) return t2.type
  let e2 = (n2 = t2.as) != null ? n2 : 'button'
  if (typeof e2 == 'string' && e2.toLowerCase() === 'button') return 'button'
}
function s$3(t2, e2) {
  let [n2, u2] = useState$1(() => i$1(t2))
  return (
    l$2(() => {
      u2(i$1(t2))
    }, [t2.type, t2.as]),
    l$2(() => {
      n2 ||
        (e2.current &&
          e2.current instanceof HTMLButtonElement &&
          !e2.current.hasAttribute('type') &&
          u2('button'))
    }, [n2, e2]),
    n2
  )
}
let u = Symbol()
function T(t2, n2 = true) {
  return Object.assign(t2, { [u]: n2 })
}
function y$1(...t2) {
  let n2 = useRef(t2)
  useEffect$1(() => {
    n2.current = t2
  }, [t2])
  let c2 = o$2((e2) => {
    for (let o3 of n2.current)
      o3 != null && (typeof o3 == 'function' ? o3(e2) : (o3.current = e2))
  })
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u]))
    ? void 0
    : c2
}
function e(...n2) {
  return n2.filter(Boolean).join(' ')
}
var j = ((a2) => (
    (a2[(a2.None = 0)] = 'None'),
    (a2[(a2.RenderStrategy = 1)] = 'RenderStrategy'),
    (a2[(a2.Static = 2)] = 'Static'),
    a2
  ))(j || {}),
  w = ((e2) => (
    (e2[(e2.Unmount = 0)] = 'Unmount'), (e2[(e2.Hidden = 1)] = 'Hidden'), e2
  ))(w || {})
function D$1({
  ourProps: r2,
  theirProps: t2,
  slot: e2,
  defaultTag: a2,
  features: s2,
  visible: n2 = true,
  name: l2,
}) {
  let o3 = h(t2, r2)
  if (n2) return m(o3, e2, a2, l2)
  let f2 = s2 != null ? s2 : 0
  if (f2 & 2) {
    let { static: i2 = false, ...u2 } = o3
    if (i2) return m(u2, e2, a2, l2)
  }
  if (f2 & 1) {
    let { unmount: i2 = true, ...u2 } = o3
    return u$1(i2 ? 0 : 1, {
      [0]() {
        return null
      },
      [1]() {
        return m(
          { ...u2, hidden: true, style: { display: 'none' } },
          e2,
          a2,
          l2
        )
      },
    })
  }
  return m(o3, e2, a2, l2)
}
function m(r2, t2 = {}, e$12, a2) {
  var y2
  let {
      as: s2 = e$12,
      children: n2,
      refName: l2 = 'ref',
      ...o3
    } = g(r2, ['unmount', 'static']),
    f2 = r2.ref !== void 0 ? { [l2]: r2.ref } : {},
    i2 = typeof n2 == 'function' ? n2(t2) : n2
  'className' in o3 &&
    o3.className &&
    typeof o3.className == 'function' &&
    (o3.className = o3.className(t2))
  let u2 = {}
  if (t2) {
    let d2 = false,
      c2 = []
    for (let [p2, F2] of Object.entries(t2))
      typeof F2 == 'boolean' && (d2 = true), F2 === true && c2.push(p2)
    d2 && (u2['data-headlessui-state'] = c2.join(' '))
  }
  if (s2 === Fragment && Object.keys(P(o3)).length > 0) {
    if (!isValidElement(i2) || (Array.isArray(i2) && i2.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          '',
          `The current component <${a2} /> is rendering a "Fragment".`,
          'However we need to passthrough the following props:',
          Object.keys(o3).map((p2) => `  - ${p2}`).join(`
`),
          '',
          'You can apply a few solutions:',
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            'Render a single element as the child so that we can forward the props onto that element.',
          ].map((p2) => `  - ${p2}`).join(`
`),
        ].join(`
`)
      )
    let d2 = e((y2 = i2.props) == null ? void 0 : y2.className, o3.className),
      c2 = d2 ? { className: d2 } : {}
    return cloneElement(
      i2,
      Object.assign(
        {},
        h(i2.props, P(g(o3, ['ref']))),
        u2,
        f2,
        O(i2.ref, f2.ref),
        c2
      )
    )
  }
  return createElement(
    s2,
    Object.assign(
      {},
      g(o3, ['ref']),
      s2 !== Fragment && f2,
      s2 !== Fragment && u2
    ),
    i2
  )
}
function O(...r2) {
  return {
    ref: r2.every((t2) => t2 == null)
      ? void 0
      : (t2) => {
          for (let e2 of r2)
            e2 != null && (typeof e2 == 'function' ? e2(t2) : (e2.current = t2))
        },
  }
}
function h(...r2) {
  if (r2.length === 0) return {}
  if (r2.length === 1) return r2[0]
  let t2 = {},
    e2 = {}
  for (let s2 of r2)
    for (let n2 in s2)
      n2.startsWith('on') && typeof s2[n2] == 'function'
        ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(s2[n2]))
        : (t2[n2] = s2[n2])
  if (t2.disabled || t2['aria-disabled'])
    return Object.assign(
      t2,
      Object.fromEntries(Object.keys(e2).map((s2) => [s2, void 0]))
    )
  for (let s2 in e2)
    Object.assign(t2, {
      [s2](n2, ...l2) {
        let o3 = e2[s2]
        for (let f2 of o3) {
          if (
            (n2 instanceof Event ||
              (n2 == null ? void 0 : n2.nativeEvent) instanceof Event) &&
            n2.defaultPrevented
          )
            return
          f2(n2, ...l2)
        }
      },
    })
  return t2
}
function L(r2) {
  var t2
  return Object.assign(forwardRef(r2), {
    displayName: (t2 = r2.displayName) != null ? t2 : r2.name,
  })
}
function P(r2) {
  let t2 = Object.assign({}, r2)
  for (let e2 in t2) t2[e2] === void 0 && delete t2[e2]
  return t2
}
function g(r2, t2 = []) {
  let e2 = Object.assign({}, r2)
  for (let a2 of t2) a2 in e2 && delete e2[a2]
  return e2
}
function r(n2) {
  let e2 = n2.parentElement,
    l2 = null
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l2 = e2), (e2 = e2.parentElement)
  let t2 = (e2 == null ? void 0 : e2.getAttribute('disabled')) === ''
  return t2 && i(l2) ? false : t2
}
function i(n2) {
  if (!n2) return false
  let e2 = n2.previousElementSibling
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement) return false
    e2 = e2.previousElementSibling
  }
  return true
}
let a = 'div'
var p = ((e2) => (
  (e2[(e2.None = 1)] = 'None'),
  (e2[(e2.Focusable = 2)] = 'Focusable'),
  (e2[(e2.Hidden = 4)] = 'Hidden'),
  e2
))(p || {})
function s$2(t2, o3) {
  let { features: n2 = 1, ...e2 } = t2,
    d2 = {
      ref: o3,
      'aria-hidden': (n2 & 2) === 2 ? true : void 0,
      style: {
        position: 'fixed',
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: '0',
        ...((n2 & 4) === 4 && (n2 & 2) !== 2 && { display: 'none' }),
      },
    }
  return D$1({
    ourProps: d2,
    theirProps: e2,
    slot: {},
    defaultTag: a,
    name: 'Hidden',
  })
}
let c$1 = L(s$2)
let n$2 = createContext(null)
n$2.displayName = 'OpenClosedContext'
var d$1 = ((e2) => (
  (e2[(e2.Open = 1)] = 'Open'),
  (e2[(e2.Closed = 2)] = 'Closed'),
  (e2[(e2.Closing = 4)] = 'Closing'),
  (e2[(e2.Opening = 8)] = 'Opening'),
  e2
))(d$1 || {})
function C() {
  return useContext(n$2)
}
function c({ value: o3, children: r2 }) {
  return require$$0__default.createElement(n$2.Provider, { value: o3 }, r2)
}
var o2 = ((r2) => (
  (r2.Space = ' '),
  (r2.Enter = 'Enter'),
  (r2.Escape = 'Escape'),
  (r2.Backspace = 'Backspace'),
  (r2.Delete = 'Delete'),
  (r2.ArrowLeft = 'ArrowLeft'),
  (r2.ArrowUp = 'ArrowUp'),
  (r2.ArrowRight = 'ArrowRight'),
  (r2.ArrowDown = 'ArrowDown'),
  (r2.Home = 'Home'),
  (r2.End = 'End'),
  (r2.PageUp = 'PageUp'),
  (r2.PageDown = 'PageDown'),
  (r2.Tab = 'Tab'),
  r2
))(o2 || {})
function s$1(e2, r2, n2) {
  let o3 = s$4(r2)
  useEffect$1(() => {
    function t2(i2) {
      o3.current(i2)
    }
    return (
      window.addEventListener(e2, t2, n2),
      () => window.removeEventListener(e2, t2, n2)
    )
  }, [e2, n2])
}
var s = ((r2) => (
  (r2[(r2.Forwards = 0)] = 'Forwards'),
  (r2[(r2.Backwards = 1)] = 'Backwards'),
  r2
))(s || {})
function n$1() {
  let e2 = useRef(0)
  return (
    s$1(
      'keydown',
      (o3) => {
        o3.key === 'Tab' && (e2.current = o3.shiftKey ? 1 : 0)
      },
      true
    ),
    e2
  )
}
function f() {
  let e2 = useRef(false)
  return (
    l$2(
      () => (
        (e2.current = true),
        () => {
          e2.current = false
        }
      ),
      []
    ),
    e2
  )
}
function n(...e2) {
  return useMemo(() => e$1(...e2), [...e2])
}
function E(n2, e2, a2, t2) {
  let i2 = s$4(a2)
  useEffect$1(() => {
    n2 = n2 != null ? n2 : window
    function r2(o3) {
      i2.current(o3)
    }
    return (
      n2.addEventListener(e2, r2, t2), () => n2.removeEventListener(e2, r2, t2)
    )
  }, [n2, e2, t2])
}
var Fe$1 = ((s2) => (
    (s2[(s2.Open = 0)] = 'Open'), (s2[(s2.Closed = 1)] = 'Closed'), s2
  ))(Fe$1 || {}),
  Ie = ((t2) => (
    (t2[(t2.TogglePopover = 0)] = 'TogglePopover'),
    (t2[(t2.ClosePopover = 1)] = 'ClosePopover'),
    (t2[(t2.SetButton = 2)] = 'SetButton'),
    (t2[(t2.SetButtonId = 3)] = 'SetButtonId'),
    (t2[(t2.SetPanel = 4)] = 'SetPanel'),
    (t2[(t2.SetPanelId = 5)] = 'SetPanelId'),
    t2
  ))(Ie || {})
let xe$1 = {
    [0]: (o3) => ({
      ...o3,
      popoverState: u$1(o3.popoverState, { [0]: 1, [1]: 0 }),
    }),
    [1](o3) {
      return o3.popoverState === 1 ? o3 : { ...o3, popoverState: 1 }
    },
    [2](o3, l2) {
      return o3.button === l2.button ? o3 : { ...o3, button: l2.button }
    },
    [3](o3, l2) {
      return o3.buttonId === l2.buttonId ? o3 : { ...o3, buttonId: l2.buttonId }
    },
    [4](o3, l2) {
      return o3.panel === l2.panel ? o3 : { ...o3, panel: l2.panel }
    },
    [5](o3, l2) {
      return o3.panelId === l2.panelId ? o3 : { ...o3, panelId: l2.panelId }
    },
  },
  le = createContext(null)
le.displayName = 'PopoverContext'
function Q(o3) {
  let l2 = useContext(le)
  if (l2 === null) {
    let s2 = new Error(`<${o3} /> is missing a parent <Popover /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(s2, Q), s2)
  }
  return l2
}
let ae = createContext(null)
ae.displayName = 'PopoverAPIContext'
function pe(o3) {
  let l2 = useContext(ae)
  if (l2 === null) {
    let s2 = new Error(`<${o3} /> is missing a parent <Popover /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(s2, pe), s2)
  }
  return l2
}
let se = createContext(null)
se.displayName = 'PopoverGroupContext'
function ve() {
  return useContext(se)
}
let Z = createContext(null)
Z.displayName = 'PopoverPanelContext'
function Le() {
  return useContext(Z)
}
function Me(o3, l2) {
  return u$1(l2.type, xe$1, o3, l2)
}
let Be = 'div'
function De$1(o3, l2) {
  var B
  let s2 = useRef(null),
    R = y$1(
      l2,
      T((e2) => {
        s2.current = e2
      })
    ),
    C2 = useRef([]),
    r2 = useReducer(Me, {
      popoverState: 1,
      buttons: C2,
      button: null,
      buttonId: null,
      panel: null,
      panelId: null,
      beforePanelSentinel: createRef(),
      afterPanelSentinel: createRef(),
    }),
    [
      {
        popoverState: t2,
        button: a2,
        buttonId: v2,
        panel: f2,
        panelId: F2,
        beforePanelSentinel: T$12,
        afterPanelSentinel: d2,
      },
      i2,
    ] = r2,
    p2 = n((B = s2.current) != null ? B : a2),
    P2 = useMemo(() => {
      if (!a2 || !f2) return false
      for (let N2 of document.querySelectorAll('body > *'))
        if (
          Number(N2 == null ? void 0 : N2.contains(a2)) ^
          Number(N2 == null ? void 0 : N2.contains(f2))
        )
          return true
      let e2 = E$1(),
        n2 = e2.indexOf(a2),
        A2 = (n2 + e2.length - 1) % e2.length,
        g2 = (n2 + 1) % e2.length,
        G = e2[A2],
        Te = e2[g2]
      return !f2.contains(G) && !f2.contains(Te)
    }, [a2, f2]),
    S2 = s$4(v2),
    y2 = s$4(F2),
    x = useMemo(
      () => ({ buttonId: S2, panelId: y2, close: () => i2({ type: 1 }) }),
      [S2, y2, i2]
    ),
    O2 = ve(),
    L2 = O2 == null ? void 0 : O2.registerPopover,
    j2 = o$2(() => {
      var e2
      return (e2 = O2 == null ? void 0 : O2.isFocusWithinPopoverGroup()) != null
        ? e2
        : (p2 == null ? void 0 : p2.activeElement) &&
            ((a2 == null ? void 0 : a2.contains(p2.activeElement)) ||
              (f2 == null ? void 0 : f2.contains(p2.activeElement)))
    })
  useEffect$1(() => (L2 == null ? void 0 : L2(x)), [L2, x]),
    E(
      p2 == null ? void 0 : p2.defaultView,
      'focus',
      (e2) => {
        var n2, A2, g2, G
        t2 === 0 &&
          (j2() ||
            (a2 &&
              f2 &&
              e2.target !== window &&
              (((A2 = (n2 = T$12.current) == null ? void 0 : n2.contains) !=
                null &&
                A2.call(n2, e2.target)) ||
                ((G = (g2 = d2.current) == null ? void 0 : g2.contains) !=
                  null &&
                  G.call(g2, e2.target)) ||
                i2({ type: 1 }))))
      },
      true
    ),
    L$1(
      [a2, f2],
      (e2, n2) => {
        i2({ type: 1 }),
          h$1(n2, F$1.Loose) || (e2.preventDefault(), a2 == null || a2.focus())
      },
      t2 === 0
    )
  let M = o$2((e2) => {
      i2({ type: 1 })
      let n2 = (() =>
        e2
          ? e2 instanceof HTMLElement
            ? e2
            : 'current' in e2 && e2.current instanceof HTMLElement
            ? e2.current
            : a2
          : a2)()
      n2 == null || n2.focus()
    }),
    u2 = useMemo(() => ({ close: M, isPortalled: P2 }), [M, P2]),
    m2 = useMemo(() => ({ open: t2 === 0, close: M }), [t2, M]),
    E$2 = o3,
    c$12 = { ref: R }
  return require$$0__default.createElement(
    Z.Provider,
    { value: null },
    require$$0__default.createElement(
      le.Provider,
      { value: r2 },
      require$$0__default.createElement(
        ae.Provider,
        { value: u2 },
        require$$0__default.createElement(
          c,
          { value: u$1(t2, { [0]: d$1.Open, [1]: d$1.Closed }) },
          D$1({
            ourProps: c$12,
            theirProps: E$2,
            slot: m2,
            defaultTag: Be,
            name: 'Popover',
          })
        )
      )
    )
  )
}
let he = 'button'
function He$1(o$12, l2) {
  let s$12 = I$2(),
    { id: R = `headlessui-popover-button-${s$12}`, ...C2 } = o$12,
    [r$12, t2] = Q('Popover.Button'),
    { isPortalled: a2 } = pe('Popover.Button'),
    v2 = useRef(null),
    f2 = `headlessui-focus-sentinel-${I$2()}`,
    F2 = ve(),
    T2 = F2 == null ? void 0 : F2.closeOthers,
    i2 = Le() !== null
  useEffect$1(() => {
    if (!i2)
      return (
        t2({ type: 3, buttonId: R }),
        () => {
          t2({ type: 3, buttonId: null })
        }
      )
  }, [i2, R, t2])
  let [p$12] = useState$1(() => Symbol()),
    P2 = y$1(
      v2,
      l2,
      i2
        ? null
        : (e2) => {
            if (e2) r$12.buttons.current.push(p$12)
            else {
              let n2 = r$12.buttons.current.indexOf(p$12)
              n2 !== -1 && r$12.buttons.current.splice(n2, 1)
            }
            r$12.buttons.current.length > 1 &&
              console.warn(
                'You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported.'
              ),
              e2 && t2({ type: 2, button: e2 })
          }
    ),
    S2 = y$1(v2, l2),
    y2 = n(v2),
    x = o$2((e2) => {
      var n2, A2, g2
      if (i2) {
        if (r$12.popoverState === 1) return
        switch (e2.key) {
          case o2.Space:
          case o2.Enter:
            e2.preventDefault(),
              (A2 = (n2 = e2.target).click) == null || A2.call(n2),
              t2({ type: 1 }),
              (g2 = r$12.button) == null || g2.focus()
            break
        }
      } else
        switch (e2.key) {
          case o2.Space:
          case o2.Enter:
            e2.preventDefault(),
              e2.stopPropagation(),
              r$12.popoverState === 1 && (T2 == null || T2(r$12.buttonId)),
              t2({ type: 0 })
            break
          case o2.Escape:
            if (r$12.popoverState !== 0)
              return T2 == null ? void 0 : T2(r$12.buttonId)
            if (
              !v2.current ||
              (y2 != null &&
                y2.activeElement &&
                !v2.current.contains(y2.activeElement))
            )
              return
            e2.preventDefault(), e2.stopPropagation(), t2({ type: 1 })
            break
        }
    }),
    O2 = o$2((e2) => {
      i2 || (e2.key === o2.Space && e2.preventDefault())
    }),
    L2 = o$2((e2) => {
      var n2, A2
      r(e2.currentTarget) ||
        o$12.disabled ||
        (i2
          ? (t2({ type: 1 }), (n2 = r$12.button) == null || n2.focus())
          : (e2.preventDefault(),
            e2.stopPropagation(),
            r$12.popoverState === 1 && (T2 == null || T2(r$12.buttonId)),
            t2({ type: 0 }),
            (A2 = r$12.button) == null || A2.focus()))
    }),
    j2 = o$2((e2) => {
      e2.preventDefault(), e2.stopPropagation()
    }),
    M = r$12.popoverState === 0,
    u2 = useMemo(() => ({ open: M }), [M]),
    m2 = s$3(o$12, v2),
    E2 = i2
      ? { ref: S2, type: m2, onKeyDown: x, onClick: L2 }
      : {
          ref: P2,
          id: r$12.buttonId,
          type: m2,
          'aria-expanded': o$12.disabled ? void 0 : r$12.popoverState === 0,
          'aria-controls': r$12.panel ? r$12.panelId : void 0,
          onKeyDown: x,
          onKeyUp: O2,
          onClick: L2,
          onMouseDown: j2,
        },
    c2 = n$1(),
    B = o$2(() => {
      let e2 = r$12.panel
      if (!e2) return
      function n2() {
        u$1(c2.current, {
          [s.Forwards]: () => I$1(e2, L$2.First),
          [s.Backwards]: () => I$1(e2, L$2.Last),
        }) === N.Error &&
          I$1(
            E$1().filter((g2) => g2.dataset.headlessuiFocusGuard !== 'true'),
            u$1(c2.current, {
              [s.Forwards]: L$2.Next,
              [s.Backwards]: L$2.Previous,
            }),
            { relativeTo: r$12.button }
          )
      }
      n2()
    })
  return require$$0__default.createElement(
    require$$0__default.Fragment,
    null,
    D$1({
      ourProps: E2,
      theirProps: C2,
      slot: u2,
      defaultTag: he,
      name: 'Popover.Button',
    }),
    M &&
      !i2 &&
      a2 &&
      require$$0__default.createElement(c$1, {
        id: f2,
        features: p.Focusable,
        'data-headlessui-focus-guard': true,
        as: 'button',
        type: 'button',
        onFocus: B,
      })
  )
}
let Ge = 'div',
  _e = j.RenderStrategy | j.Static
function ke(o3, l2) {
  let s2 = I$2(),
    { id: R = `headlessui-popover-overlay-${s2}`, ...C$1 } = o3,
    [{ popoverState: r$12 }, t2] = Q('Popover.Overlay'),
    a2 = y$1(l2),
    v2 = C(),
    f2 = (() => (v2 !== null ? (v2 & d$1.Open) === d$1.Open : r$12 === 0))(),
    F2 = o$2((i2) => {
      if (r(i2.currentTarget)) return i2.preventDefault()
      t2({ type: 1 })
    }),
    T2 = useMemo(() => ({ open: r$12 === 0 }), [r$12])
  return D$1({
    ourProps: { ref: a2, id: R, 'aria-hidden': true, onClick: F2 },
    theirProps: C$1,
    slot: T2,
    defaultTag: Ge,
    features: _e,
    visible: f2,
    name: 'Popover.Overlay',
  })
}
let we = 'div',
  Ne$1 = j.RenderStrategy | j.Static
function Ue(o$12, l2) {
  let s$12 = I$2(),
    {
      id: R = `headlessui-popover-panel-${s$12}`,
      focus: C$1 = false,
      ...r2
    } = o$12,
    [t2, a2] = Q('Popover.Panel'),
    { close: v2, isPortalled: f2 } = pe('Popover.Panel'),
    F2 = `headlessui-focus-sentinel-before-${I$2()}`,
    T2 = `headlessui-focus-sentinel-after-${I$2()}`,
    d2 = useRef(null),
    i2 = y$1(d2, l2, (u2) => {
      a2({ type: 4, panel: u2 })
    }),
    p$12 = n(d2)
  l$2(
    () => (
      a2({ type: 5, panelId: R }),
      () => {
        a2({ type: 5, panelId: null })
      }
    ),
    [R, a2]
  )
  let P2 = C(),
    S2 = (() =>
      P2 !== null ? (P2 & d$1.Open) === d$1.Open : t2.popoverState === 0)(),
    y2 = o$2((u2) => {
      var m2
      switch (u2.key) {
        case o2.Escape:
          if (
            t2.popoverState !== 0 ||
            !d2.current ||
            (p$12 != null &&
              p$12.activeElement &&
              !d2.current.contains(p$12.activeElement))
          )
            return
          u2.preventDefault(),
            u2.stopPropagation(),
            a2({ type: 1 }),
            (m2 = t2.button) == null || m2.focus()
          break
      }
    })
  useEffect$1(() => {
    var u2
    o$12.static ||
      (t2.popoverState === 1 &&
        ((u2 = o$12.unmount) == null || u2) &&
        a2({ type: 4, panel: null }))
  }, [t2.popoverState, o$12.unmount, o$12.static, a2]),
    useEffect$1(() => {
      if (!C$1 || t2.popoverState !== 0 || !d2.current) return
      let u2 = p$12 == null ? void 0 : p$12.activeElement
      d2.current.contains(u2) || I$1(d2.current, L$2.First)
    }, [C$1, d2, t2.popoverState])
  let x = useMemo(() => ({ open: t2.popoverState === 0, close: v2 }), [t2, v2]),
    O2 = {
      ref: i2,
      id: R,
      onKeyDown: y2,
      onBlur:
        C$1 && t2.popoverState === 0
          ? (u2) => {
              var E2, c2, B, e2, n2
              let m2 = u2.relatedTarget
              m2 &&
                d2.current &&
                (((E2 = d2.current) != null && E2.contains(m2)) ||
                  (a2({ type: 1 }),
                  (((B =
                    (c2 = t2.beforePanelSentinel.current) == null
                      ? void 0
                      : c2.contains) != null &&
                    B.call(c2, m2)) ||
                    ((n2 =
                      (e2 = t2.afterPanelSentinel.current) == null
                        ? void 0
                        : e2.contains) != null &&
                      n2.call(e2, m2))) &&
                    m2.focus({ preventScroll: true })))
            }
          : void 0,
      tabIndex: -1,
    },
    L2 = n$1(),
    j2 = o$2(() => {
      let u2 = d2.current
      if (!u2) return
      function m2() {
        u$1(L2.current, {
          [s.Forwards]: () => {
            var c2
            I$1(u2, L$2.First) === N.Error &&
              ((c2 = t2.afterPanelSentinel.current) == null || c2.focus())
          },
          [s.Backwards]: () => {
            var E2
            ;(E2 = t2.button) == null || E2.focus({ preventScroll: true })
          },
        })
      }
      m2()
    }),
    M = o$2(() => {
      let u2 = d2.current
      if (!u2) return
      function m2() {
        u$1(L2.current, {
          [s.Forwards]: () => {
            var A2
            if (!t2.button) return
            let E2 = E$1(),
              c2 = E2.indexOf(t2.button),
              B = E2.slice(0, c2 + 1),
              n2 = [...E2.slice(c2 + 1), ...B]
            for (let g2 of n2.slice())
              if (
                g2.dataset.headlessuiFocusGuard === 'true' ||
                ((A2 = t2.panel) != null && A2.contains(g2))
              ) {
                let G = n2.indexOf(g2)
                G !== -1 && n2.splice(G, 1)
              }
            I$1(n2, L$2.First, { sorted: false })
          },
          [s.Backwards]: () => {
            var c2
            I$1(u2, L$2.Previous) === N.Error &&
              ((c2 = t2.button) == null || c2.focus())
          },
        })
      }
      m2()
    })
  return require$$0__default.createElement(
    Z.Provider,
    { value: R },
    S2 &&
      f2 &&
      require$$0__default.createElement(c$1, {
        id: F2,
        ref: t2.beforePanelSentinel,
        features: p.Focusable,
        'data-headlessui-focus-guard': true,
        as: 'button',
        type: 'button',
        onFocus: j2,
      }),
    D$1({
      ourProps: O2,
      theirProps: r2,
      slot: x,
      defaultTag: we,
      features: Ne$1,
      visible: S2,
      name: 'Popover.Panel',
    }),
    S2 &&
      f2 &&
      require$$0__default.createElement(c$1, {
        id: T2,
        ref: t2.afterPanelSentinel,
        features: p.Focusable,
        'data-headlessui-focus-guard': true,
        as: 'button',
        type: 'button',
        onFocus: M,
      })
  )
}
let Ke = 'div'
function We(o3, l2) {
  let s2 = useRef(null),
    R = y$1(s2, l2),
    [C2, r2] = useState$1([]),
    t2 = o$2((p2) => {
      r2((P2) => {
        let S2 = P2.indexOf(p2)
        if (S2 !== -1) {
          let y2 = P2.slice()
          return y2.splice(S2, 1), y2
        }
        return P2
      })
    }),
    a2 = o$2((p2) => (r2((P2) => [...P2, p2]), () => t2(p2))),
    v2 = o$2(() => {
      var S2
      let p2 = e$1(s2)
      if (!p2) return false
      let P2 = p2.activeElement
      return (S2 = s2.current) != null && S2.contains(P2)
        ? true
        : C2.some((y2) => {
            var x, O2
            return (
              ((x = p2.getElementById(y2.buttonId.current)) == null
                ? void 0
                : x.contains(P2)) ||
              ((O2 = p2.getElementById(y2.panelId.current)) == null
                ? void 0
                : O2.contains(P2))
            )
          })
    }),
    f2 = o$2((p2) => {
      for (let P2 of C2) P2.buttonId.current !== p2 && P2.close()
    }),
    F2 = useMemo(
      () => ({
        registerPopover: a2,
        unregisterPopover: t2,
        isFocusWithinPopoverGroup: v2,
        closeOthers: f2,
      }),
      [a2, t2, v2, f2]
    ),
    T2 = useMemo(() => ({}), []),
    d2 = o3,
    i2 = { ref: R }
  return require$$0__default.createElement(
    se.Provider,
    { value: F2 },
    D$1({
      ourProps: i2,
      theirProps: d2,
      slot: T2,
      defaultTag: Ke,
      name: 'Popover.Group',
    })
  )
}
let je = L(De$1),
  Ve = L(He$1),
  $e = L(ke),
  Je = L(Ue),
  Xe = L(We),
  Lt = Object.assign(je, { Button: Ve, Overlay: $e, Panel: Je, Group: Xe })
function b(g2 = 0) {
  let [t2, l2] = useState$1(g2),
    u2 = useCallback((e2) => l2((a2) => a2 | e2), [t2]),
    n2 = useCallback((e2) => Boolean(t2 & e2), [t2]),
    o3 = useCallback((e2) => l2((a2) => a2 & ~e2), [l2]),
    s2 = useCallback((e2) => l2((a2) => a2 ^ e2), [l2])
  return { flags: t2, addFlag: u2, hasFlag: n2, removeFlag: o3, toggleFlag: s2 }
}
function l(r2) {
  let e2 = { called: false }
  return (...t2) => {
    if (!e2.called) return (e2.called = true), r2(...t2)
  }
}
function d(t2, ...e2) {
  t2 && e2.length > 0 && t2.classList.add(...e2)
}
function v(t2, ...e2) {
  t2 && e2.length > 0 && t2.classList.remove(...e2)
}
function F(t2, e2) {
  let n2 = o$3()
  if (!t2) return n2.dispose
  let { transitionDuration: m2, transitionDelay: o3 } = getComputedStyle(t2),
    [u2, p2] = [m2, o3].map((a2) => {
      let [r2 = 0] = a2
        .split(',')
        .filter(Boolean)
        .map((i2) =>
          i2.includes('ms') ? parseFloat(i2) : parseFloat(i2) * 1e3
        )
        .sort((i2, f2) => f2 - i2)
      return r2
    }),
    l2 = u2 + p2
  if (l2 !== 0) {
    n2.group((r2) => {
      r2.setTimeout(() => {
        e2(), r2.dispose()
      }, l2),
        r2.addEventListener(t2, 'transitionrun', (i2) => {
          i2.target === i2.currentTarget && r2.dispose()
        })
    })
    let a2 = n2.addEventListener(t2, 'transitionend', (r2) => {
      r2.target === r2.currentTarget && (e2(), a2())
    })
  } else e2()
  return n2.add(() => e2()), n2.dispose
}
function y(t2, e2, n2, m2) {
  let o3 = n2 ? 'enter' : 'leave',
    u2 = o$3(),
    p2 = m2 !== void 0 ? l(m2) : () => {}
  o3 === 'enter' && (t2.removeAttribute('hidden'), (t2.style.display = ''))
  let l$12 = u$1(o3, { enter: () => e2.enter, leave: () => e2.leave }),
    a2 = u$1(o3, { enter: () => e2.enterTo, leave: () => e2.leaveTo }),
    r2 = u$1(o3, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom })
  return (
    v(
      t2,
      ...e2.enter,
      ...e2.enterTo,
      ...e2.enterFrom,
      ...e2.leave,
      ...e2.leaveFrom,
      ...e2.leaveTo,
      ...e2.entered
    ),
    d(t2, ...l$12, ...r2),
    u2.nextFrame(() => {
      v(t2, ...r2),
        d(t2, ...a2),
        F(t2, () => (v(t2, ...l$12), d(t2, ...e2.entered), p2()))
    }),
    u2.dispose
  )
}
function D({
  container: i2,
  direction: t2,
  classes: o3,
  onStart: s2,
  onStop: u2,
}) {
  let a2 = f(),
    c2 = p$1(),
    r2 = s$4(t2)
  l$2(() => {
    let e2 = o$3()
    c2.add(e2.dispose)
    let n2 = i2.current
    if (n2 && r2.current !== 'idle' && a2.current)
      return (
        e2.dispose(),
        s2.current(r2.current),
        e2.add(
          y(n2, o3.current, r2.current === 'enter', () => {
            e2.dispose(), u2.current(r2.current)
          })
        ),
        e2.dispose
      )
  }, [t2])
}
function S(n2 = '') {
  return n2.split(' ').filter((t2) => t2.trim().length > 1)
}
let A = createContext(null)
A.displayName = 'TransitionContext'
var Ee = ((r2) => ((r2.Visible = 'visible'), (r2.Hidden = 'hidden'), r2))(
  Ee || {}
)
function be() {
  let n2 = useContext(A)
  if (n2 === null)
    throw new Error(
      'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
    )
  return n2
}
function Se() {
  let n2 = useContext(I)
  if (n2 === null)
    throw new Error(
      'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
    )
  return n2
}
let I = createContext(null)
I.displayName = 'NestingContext'
function _(n2) {
  return 'children' in n2
    ? _(n2.children)
    : n2.current
        .filter(({ el: t2 }) => t2.current !== null)
        .filter(({ state: t2 }) => t2 === 'visible').length > 0
}
function ne(n2, t2) {
  let r2 = s$4(n2),
    o3 = useRef([]),
    y2 = f(),
    N2 = p$1(),
    p2 = o$2((s2, e2 = w.Hidden) => {
      let a2 = o3.current.findIndex(({ el: i2 }) => i2 === s2)
      a2 !== -1 &&
        (u$1(e2, {
          [w.Unmount]() {
            o3.current.splice(a2, 1)
          },
          [w.Hidden]() {
            o3.current[a2].state = 'hidden'
          },
        }),
        N2.microTask(() => {
          var i2
          !_(o3) && y2.current && ((i2 = r2.current) == null || i2.call(r2))
        }))
    }),
    x = o$2((s2) => {
      let e2 = o3.current.find(({ el: a2 }) => a2 === s2)
      return (
        e2
          ? e2.state !== 'visible' && (e2.state = 'visible')
          : o3.current.push({ el: s2, state: 'visible' }),
        () => p2(s2, w.Unmount)
      )
    }),
    m2 = useRef([]),
    c2 = useRef(Promise.resolve()),
    u2 = useRef({ enter: [], leave: [], idle: [] }),
    h2 = o$2((s2, e2, a2) => {
      m2.current.splice(0),
        t2 &&
          (t2.chains.current[e2] = t2.chains.current[e2].filter(
            ([i2]) => i2 !== s2
          )),
        t2 == null ||
          t2.chains.current[e2].push([
            s2,
            new Promise((i2) => {
              m2.current.push(i2)
            }),
          ]),
        t2 == null ||
          t2.chains.current[e2].push([
            s2,
            new Promise((i2) => {
              Promise.all(u2.current[e2].map(([l2, T2]) => T2)).then(() => i2())
            }),
          ]),
        e2 === 'enter'
          ? (c2.current = c2.current
              .then(() => (t2 == null ? void 0 : t2.wait.current))
              .then(() => a2(e2)))
          : a2(e2)
    }),
    v2 = o$2((s2, e2, a2) => {
      Promise.all(u2.current[e2].splice(0).map(([i2, l2]) => l2))
        .then(() => {
          var i2
          ;(i2 = m2.current.shift()) == null || i2()
        })
        .then(() => a2(e2))
    })
  return useMemo(
    () => ({
      children: o3,
      register: x,
      unregister: p2,
      onStart: h2,
      onStop: v2,
      wait: c2,
      chains: u2,
    }),
    [x, p2, o3, h2, v2, u2, c2]
  )
}
function xe() {}
let Pe = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave']
function re(n2) {
  var r2
  let t2 = {}
  for (let o3 of Pe) t2[o3] = (r2 = n2[o3]) != null ? r2 : xe
  return t2
}
function Re(n2) {
  let t2 = useRef(re(n2))
  return (
    useEffect$1(() => {
      t2.current = re(n2)
    }, [n2]),
    t2
  )
}
let ye = 'div',
  ie = j.RenderStrategy
function Ne(n2, t2) {
  let {
      beforeEnter: r2,
      afterEnter: o3,
      beforeLeave: y2,
      afterLeave: N2,
      enter: p2,
      enterFrom: x,
      enterTo: m2,
      entered: c$12,
      leave: u2,
      leaveFrom: h2,
      leaveTo: v2,
      ...s2
    } = n2,
    e$12 = useRef(null),
    a2 = y$1(e$12, t2),
    i2 = s2.unmount ? w.Unmount : w.Hidden,
    { show: l2, appear: T2, initial: se2 } = be(),
    [g2, M] = useState$1(l2 ? 'visible' : 'hidden'),
    z = Se(),
    { register: F2, unregister: L2 } = z,
    U = useRef(null)
  useEffect$1(() => F2(e$12), [F2, e$12]),
    useEffect$1(() => {
      if (i2 === w.Hidden && e$12.current) {
        if (l2 && g2 !== 'visible') {
          M('visible')
          return
        }
        return u$1(g2, {
          ['hidden']: () => L2(e$12),
          ['visible']: () => F2(e$12),
        })
      }
    }, [g2, e$12, F2, L2, l2, i2])
  let j2 = s$4({
      enter: S(p2),
      enterFrom: S(x),
      enterTo: S(m2),
      entered: S(c$12),
      leave: S(u2),
      leaveFrom: S(h2),
      leaveTo: S(v2),
    }),
    w$12 = Re({
      beforeEnter: r2,
      afterEnter: o3,
      beforeLeave: y2,
      afterLeave: N2,
    }),
    k = l$1()
  useEffect$1(() => {
    if (k && g2 === 'visible' && e$12.current === null)
      throw new Error(
        'Did you forget to passthrough the `ref` to the actual DOM node?'
      )
  }, [e$12, g2, k])
  let G = se2 && !T2,
    ae2 = (() =>
      !k || G || U.current === l2 ? 'idle' : l2 ? 'enter' : 'leave')(),
    H2 = b(0),
    le2 = o$2((C2) =>
      u$1(C2, {
        enter: () => {
          H2.addFlag(d$1.Opening), w$12.current.beforeEnter()
        },
        leave: () => {
          H2.addFlag(d$1.Closing), w$12.current.beforeLeave()
        },
        idle: () => {},
      })
    ),
    ue = o$2((C2) =>
      u$1(C2, {
        enter: () => {
          H2.removeFlag(d$1.Opening), w$12.current.afterEnter()
        },
        leave: () => {
          H2.removeFlag(d$1.Closing), w$12.current.afterLeave()
        },
        idle: () => {},
      })
    ),
    O2 = ne(() => {
      M('hidden'), L2(e$12)
    }, z)
  D({
    container: e$12,
    classes: j2,
    direction: ae2,
    onStart: s$4((C2) => {
      O2.onStart(e$12, C2, le2)
    }),
    onStop: s$4((C2) => {
      O2.onStop(e$12, C2, ue),
        C2 === 'leave' && !_(O2) && (M('hidden'), L2(e$12))
    }),
  }),
    useEffect$1(() => {
      G && (i2 === w.Hidden ? (U.current = null) : (U.current = l2))
    }, [l2, G, g2])
  let B = s2,
    Te = { ref: a2 }
  return (
    T2 &&
      l2 &&
      s$5.isServer &&
      (B = {
        ...B,
        className: e(
          s2.className,
          ...j2.current.enter,
          ...j2.current.enterFrom
        ),
      }),
    require$$0__default.createElement(
      I.Provider,
      { value: O2 },
      require$$0__default.createElement(
        c,
        {
          value:
            u$1(g2, { ['visible']: d$1.Open, ['hidden']: d$1.Closed }) |
            H2.flags,
        },
        D$1({
          ourProps: Te,
          theirProps: B,
          defaultTag: ye,
          features: ie,
          visible: g2 === 'visible',
          name: 'Transition.Child',
        })
      )
    )
  )
}
function He(n2, t2) {
  let { show: r2, appear: o3 = false, unmount: y2, ...N2 } = n2,
    p2 = useRef(null),
    x = y$1(p2, t2)
  l$1()
  let m2 = C()
  if (
    (r2 === void 0 && m2 !== null && (r2 = (m2 & d$1.Open) === d$1.Open),
    ![true, false].includes(r2))
  )
    throw new Error(
      'A <Transition /> is used but it is missing a `show={true | false}` prop.'
    )
  let [c2, u2] = useState$1(r2 ? 'visible' : 'hidden'),
    h2 = ne(() => {
      u2('hidden')
    }),
    [v2, s2] = useState$1(true),
    e2 = useRef([r2])
  l$2(() => {
    v2 !== false &&
      e2.current[e2.current.length - 1] !== r2 &&
      (e2.current.push(r2), s2(false))
  }, [e2, r2])
  let a2 = useMemo(() => ({ show: r2, appear: o3, initial: v2 }), [r2, o3, v2])
  useEffect$1(() => {
    if (r2) u2('visible')
    else if (!_(h2)) u2('hidden')
    else {
      let l2 = p2.current
      if (!l2) return
      let T2 = l2.getBoundingClientRect()
      T2.x === 0 &&
        T2.y === 0 &&
        T2.width === 0 &&
        T2.height === 0 &&
        u2('hidden')
    }
  }, [r2, h2])
  let i2 = { unmount: y2 }
  return require$$0__default.createElement(
    I.Provider,
    { value: h2 },
    require$$0__default.createElement(
      A.Provider,
      { value: a2 },
      D$1({
        ourProps: {
          ...i2,
          as: Fragment,
          children: require$$0__default.createElement(oe, {
            ref: x,
            ...i2,
            ...N2,
          }),
        },
        theirProps: {},
        defaultTag: Fragment,
        features: ie,
        visible: c2 === 'visible',
        name: 'Transition',
      })
    )
  )
}
function De(n2, t2) {
  let r2 = useContext(A) !== null,
    o3 = C() !== null
  return require$$0__default.createElement(
    require$$0__default.Fragment,
    null,
    !r2 && o3
      ? require$$0__default.createElement(q, { ref: t2, ...n2 })
      : require$$0__default.createElement(oe, { ref: t2, ...n2 })
  )
}
let q = L(He),
  oe = L(Ne),
  Fe = L(De),
  tt = Object.assign(q, { Child: Fe, Root: q })
function NavLink({ to, children, target, className, onClick, ...props }) {
  return /* @__PURE__ */ jsx(Link, {
    to,
    onClick,
    target,
    className: classnames(
      'whitespace-nowrap inline-block text-sm  text-slate-200 hover:text-toxic-500 transition',
      className
    ),
    ...props,
    children,
  })
}
function MobileNavLink({ to, children, className, onClick, ...props }) {
  return /* @__PURE__ */ jsx(Link, {
    to,
    ...props,
    onClick,
    className: classnames(
      'text-sm p-2 block w-full whitespace-nowrap text-slate-50 hover:text-toxic-500 transition text-center text-s bg-slate-900 rounded-lg',
      { className }
    ),
    children,
  })
}
function MobileNavIcon({ open }) {
  return /* @__PURE__ */ jsxs('svg', {
    'aria-hidden': 'true',
    className: 'h-3.5 w-3.5 overflow-visible stroke-slate-300',
    fill: 'none',
    strokeWidth: 2,
    strokeLinecap: 'round',
    children: [
      /* @__PURE__ */ jsx('path', {
        d: 'M0 1H14M0 7H14M0 13H14',
        className: classnames(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        ),
      }),
      /* @__PURE__ */ jsx('path', {
        d: 'M2 2L12 12M12 2L2 12',
        className: classnames(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        ),
      }),
    ],
  })
}
function MobileNavigation() {
  return /* @__PURE__ */ jsxs(Lt, {
    children: [
      /* @__PURE__ */ jsx(Lt.Button, {
        className:
          'bg-slate-70  relative z-10 flex h-8 w-8 items-center justify-center rounded border-none bg-opacity-50 focus:border-none [&:not(:focus-visible)]:focus:outline-none',
        'aria-label': 'Toggle Navigation',
        children: ({ open }) => /* @__PURE__ */ jsx(MobileNavIcon, { open }),
      }),
      /* @__PURE__ */ jsxs(tt.Root, {
        children: [
          /* @__PURE__ */ jsx(tt.Child, {
            as: Fragment,
            enter: 'duration-150 ease-out',
            enterFrom: 'opacity-0',
            enterTo: 'opacity-100',
            leave: 'duration-150 ease-in',
            leaveFrom: 'opacity-100',
            leaveTo: 'opacity-0',
            children: /* @__PURE__ */ jsx(Lt.Overlay, {
              className:
                'absolute inset-x-6 top-full mt-4 flex origin-top flex-col gap-2 rounded bg-slate-600 p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5',
            }),
          }),
          /* @__PURE__ */ jsx(tt.Child, {
            as: Fragment,
            enter: 'duration-150 ease-out',
            enterFrom: 'opacity-0 scale-95',
            enterTo: 'opacity-100 scale-100',
            leave: 'duration-100 ease-in',
            leaveFrom: 'opacity-100 scale-100',
            leaveTo: 'opacity-0 scale-95',
            children: /* @__PURE__ */ jsxs(Lt.Panel, {
              as: 'div',
              className:
                'absolute inset-x-6 top-full mt-4 flex origin-top flex-col gap-4 rounded bg-slate-800 p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-700',
              children: [
                /* @__PURE__ */ jsx(PrimaryLink, {
                  className: 'whitespace-nowrap text-base',
                  to: 'https://app.trigger.dev',
                  children: 'Sign up',
                }),
                /* @__PURE__ */ jsx(MobileNavLink, {
                  className: 'whitespace-nowrap text-base',
                  to: 'https://docs.trigger.dev',
                  target: '_blank',
                  children: 'Docs',
                }),
                /* @__PURE__ */ jsx(MobileNavLink, {
                  to: '/blog',
                  children: 'Blog',
                }),
                /* @__PURE__ */ jsx(MobileNavLink, {
                  className: 'whitespace-nowrap text-base',
                  to: 'https://app.trigger.dev/templates',
                  children: 'Browse templates',
                }),
                /* @__PURE__ */ jsx(MobileNavLink, {
                  to: '/pricing',
                  title: 'Pricing',
                  children: 'Pricing',
                }),
                /* @__PURE__ */ jsx(MobileNavLink, {
                  to: 'https://github.com/triggerdotdev/trigger.dev',
                  target: '_blank',
                  children: 'GitHub',
                }),
                /* @__PURE__ */ jsx(MobileNavLink, {
                  to: 'https://app.trigger.dev',
                  children: 'Login',
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  })
}
function Header() {
  return /* @__PURE__ */ jsxs(Fragment$1, {
    children: [
      /* @__PURE__ */ jsx('div', { className: '' }),
      /* @__PURE__ */ jsx('header', {
        className:
          'fixed top-0 left-0 z-50 h-20 w-full border-b-[0.1px] border-slate-1000 bg-slate-900/80 backdrop-blur-md',
        children: /* @__PURE__ */ jsxs('nav', {
          className:
            'mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-10 lg:px-16',
          children: [
            /* @__PURE__ */ jsxs('div', {
              className: 'flex items-center gap-x-4 lg:gap-x-12',
              children: [
                /* @__PURE__ */ jsx('div', {
                  className: 'flex w-[140px] items-center lg:w-[160px]',
                  children: /* @__PURE__ */ jsx(Link, {
                    to: '/',
                    children: /* @__PURE__ */ jsx('div', {
                      className: 'cursor-pointer',
                      children: /* @__PURE__ */ jsx(TriggerdotdevLogo, {
                        className: 'w-full',
                      }),
                    }),
                  }),
                }),
                /* @__PURE__ */ jsxs('div', {
                  className:
                    'hidden gap-x-4 font-semibold drop-shadow-2xl md:flex md:gap-x-6 lg:gap-x-12',
                  children: [
                    /* @__PURE__ */ jsx(NavLink, {
                      to: 'https://docs.trigger.dev/',
                      title: 'Docs',
                      'aria-label': 'Docs',
                      target: '_blank',
                      children: 'Docs',
                    }),
                    /* @__PURE__ */ jsx(NavLink, {
                      to: 'https://app.trigger.dev/templates',
                      title: 'Templates',
                      'aria-label': 'Templates',
                      children: 'Templates',
                    }),
                    /* @__PURE__ */ jsx(NavLink, {
                      to: '/blog',
                      title: 'Templates',
                      'aria-label': 'Templates',
                      children: 'Blog',
                    }),
                    /* @__PURE__ */ jsx(NavLink, {
                      to: '/pricing',
                      title: 'Pricing',
                      'aria-label': 'Pricing',
                      children: 'Pricing',
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              className:
                'flex flex-row items-center justify-center gap-x-4 lg:gap-x-6',
              children: [
                /* @__PURE__ */ jsx('a', {
                  href: 'https://discord.gg/nkqV9xBYWy',
                  'aria-label': 'Discord',
                  target: '_blank',
                  title: 'Discord',
                  className:
                    ' hidden items-center text-right text-xs text-slate-300 transition hover:text-toxic-500 md:flex',
                  rel: 'noreferrer',
                  children: /* @__PURE__ */ jsx(DiscordIconFooter, {}),
                }),
                /* @__PURE__ */ jsx('div', {
                  className: 'hidden font-semibold drop-shadow-2xl md:flex',
                  children: /* @__PURE__ */ jsx(NavLink, {
                    to: 'https://app.trigger.dev',
                    title: 'Login',
                    'aria-label': 'Login',
                    children: 'Login',
                  }),
                }),
                /* @__PURE__ */ jsxs(PrimaryLink, {
                  className: 'whitespace-nowrap',
                  to: 'https://app.trigger.dev',
                  children: [
                    /* @__PURE__ */ jsx('div', {
                      className: 'hidden sm:block',
                      children: 'Sign up',
                    }),
                    /* @__PURE__ */ jsx('div', {
                      className: 'block sm:hidden',
                      children: 'Sign up',
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx('div', {
                  className: 'hidden sm:block',
                  children: /* @__PURE__ */ jsx(GithubStarsButtonStatic, {
                    count: 3300,
                  }),
                }),
                /* @__PURE__ */ jsx('div', {
                  className: '-mr-1 md:hidden',
                  children: /* @__PURE__ */ jsx(MobileNavigation, {}),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  })
}
function MarkdownMain({ children }) {
  return /* @__PURE__ */ jsx('main', {
    className:
      'prose prose-invert flex-1 lg:prose-xl prose-h2:mt-[-7rem] prose-h2:pt-[7rem] prose-h3:mt-[-6.7rem] prose-h3:pt-[6.7rem] prose-h4:mt-[-6.5rem] prose-h4:pt-[6.5rem]',
    children,
  })
}
const borderClasses = 'p-[1px] rounded-xl '
const commonClasses = 'flex flex-col p-6 rounded-xl gap-y-4 w-full h-full'
function Panel({ children, className, variant }) {
  let panelBorder
  let panel
  switch (variant) {
    case 'dark':
      panelBorder = 'bg-border-gradient-dark'
      panel = 'bg-gradient-panel-bg-dark'
      break
    case 'dark-shiny':
      panelBorder = 'bg-border-gradient-shiny'
      panel = 'bg-gradient-panel-bg-dark'
      break
  }
  return /* @__PURE__ */ jsx('div', {
    className: classnames(borderClasses, className, panelBorder),
    children: /* @__PURE__ */ jsx('div', {
      className: classnames(commonClasses, panel),
      children,
    }),
  })
}
function OffsetTriangleTop() {
  return /* @__PURE__ */ jsx('div', {
    className: 'absolute top-0 left-0 w-full overflow-hidden',
    children: /* @__PURE__ */ jsx('svg', {
      'data-name': 'Layer 1',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 1200 120',
      preserveAspectRatio: 'none',
      className: 'relative block w-[calc(100%+1.3px)] h-20',
      children: /* @__PURE__ */ jsx('path', {
        d: 'M1200 0L0 0 892.25 114.72 1200 0z',
        fill: 'rgb(249 250 251)',
      }),
    }),
  })
}
function OffsetTriangleBottom() {
  return /* @__PURE__ */ jsx('div', {
    className: 'absolute bottom-0 left-0 w-full overflow-hidden',
    children: /* @__PURE__ */ jsx('svg', {
      'data-name': 'Layer 1',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 1200 120',
      preserveAspectRatio: 'none',
      className: 'relative block w-[calc(100%+1.3px)] h-20 rotate-180',
      children: /* @__PURE__ */ jsx('path', {
        d: 'M1200 0L0 0 892.25 114.72 1200 0z',
        fill: 'rgb(249 250 251)',
      }),
    }),
  })
}
function OffsetTriangleLeftTop() {
  return /* @__PURE__ */ jsx('div', {
    className: 'absolute top-0 left-0 w-full overflow-hidden',
    children: /* @__PURE__ */ jsx('svg', {
      'data-name': 'Layer 1',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 1200 120',
      preserveAspectRatio: 'none',
      className: 'relative block w-[calc(100%+1.3px)] h-[93px]',
      children: /* @__PURE__ */ jsx('path', {
        d: 'M1200 0L0 0 892.25 114.72 1200 0z',
        fill: 'rgb(249 250 251)',
      }),
    }),
  })
}
function OffsetCurveTop() {
  return /* @__PURE__ */ jsx('div', {
    className: 'absolute left-0 w-full overflow-hidden',
    children: /* @__PURE__ */ jsx('svg', {
      'data-name': 'Layer 1',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 1200 120',
      preserveAspectRatio: 'none',
      className: 'relative block w-[calc(119%+1.3px)] h-[77px] rotate-180',
      children: /* @__PURE__ */ jsx('path', {
        d: 'M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z',
        fill: 'rgb(249 250 251)',
      }),
    }),
  })
}
function OffsetCurveBottom() {
  return /* @__PURE__ */ jsx('div', {
    className: 'absolute bottom-0 left-0 w-full overflow-hidden',
    children: /* @__PURE__ */ jsx('svg', {
      'data-name': 'Layer 1',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 1200 120',
      preserveAspectRatio: 'none',
      className: 'relative block w-[calc(119%+1.3px)] h-[77px] rotate-180',
      children: /* @__PURE__ */ jsx('path', {
        d: 'M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z',
        fill: 'rgb(249 250 251)',
      }),
    }),
  })
}
function WaveTop() {
  return /* @__PURE__ */ jsx('div', {
    className: 'absolute -top-0.5 left-0 w-full overflow-hidden z-10',
    children: /* @__PURE__ */ jsx('svg', {
      'data-name': 'Layer 1',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 1200 120',
      preserveAspectRatio: 'none',
      className:
        'relative block w-[calc(160%+1.3px)] h-[40px] md:h-[118px] rotate-180',
      children: /* @__PURE__ */ jsx('path', {
        d: 'M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z',
        fill: '#030713',
      }),
    }),
  })
}
function WaveTopWithPadding() {
  return /* @__PURE__ */ jsxs(Fragment$1, {
    children: [
      /* @__PURE__ */ jsx('div', {
        className: 'absolute top-0 left-0 bg-midnight-1000 z-20 h-52 w-full',
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'absolute top-52 left-0 w-full overflow-hidden z-10',
        children: /* @__PURE__ */ jsx('svg', {
          'data-name': 'Layer 1',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 1200 120',
          preserveAspectRatio: 'none',
          className:
            'relative block w-[calc(160%+1.3px)] h-[40px] md:h-[118px] rotate-180',
          children: /* @__PURE__ */ jsx('path', {
            d: 'M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z',
            fill: '#030713',
          }),
        }),
      }),
    ],
  })
}
function WaveBottom() {
  return /* @__PURE__ */ jsx('div', {
    className: 'absolute bottom-0 left-0 w-full overflow-hidden',
    children: /* @__PURE__ */ jsx('svg', {
      'data-name': 'Layer 1',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 1200 120',
      preserveAspectRatio: 'none',
      className: 'relative block w-[calc(160%+1.3px)] h-[40px] md:h-[147px]',
      children: /* @__PURE__ */ jsx('path', {
        d: 'M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z',
        fill: '#030713',
      }),
    }),
  })
}
const baseClasses = 'font-sans'
const overrideClasses = 'text-slate-300'
function Paragraph({
  children,
  className = overrideClasses,
  theme,
  size = 'regular',
  ...props
}) {
  let sizeClass = 'text-base'
  switch (size) {
    case 'large':
      sizeClass = 'text-lg'
      break
    case 'small':
      sizeClass = 'text-sm'
      break
    case 'extra-small':
      sizeClass = 'text-xs'
      break
  }
  return /* @__PURE__ */ jsx('p', {
    className: classnames(
      baseClasses,
      sizeClass,
      theme === 'light' ? 'text-slate-200' : 'text-slate-400',
      className
    ),
    ...props,
    children,
  })
}
function Handwriting({ children, className, theme, ...props }) {
  return /* @__PURE__ */ jsx('p', {
    className: classnames(
      'font-handwriting py-2 text-sm lg:text-base',
      theme === 'light' ? 'text-slate-700' : 'text-slate-200',
      className
    ),
    ...props,
    children,
  })
}
function Header1({ children, className, theme, ...props }) {
  return /* @__PURE__ */ jsx('h1', {
    className: classnames(
      'font-display md:leading-12 py-4 text-left text-3xl font-bold tracking-tight md:text-6xl',
      theme === 'light' ? 'text-slate-700' : 'text-slate-300',
      className
    ),
    ...props,
    children,
  })
}
function Header2({ children, className, theme, ...props }) {
  return /* @__PURE__ */ jsx('h2', {
    className: classnames(
      'font-display text-3xl font-bold tracking-tight md:text-5xl lg:px-0',
      theme === 'light' ? 'text-slate-700' : 'text-slate-300',
      className
    ),
    ...props,
    children,
  })
}
function Header3({ children, className, theme, ...props }) {
  return /* @__PURE__ */ jsx('h2', {
    className: classnames(
      'font-display text-left text-xl font-bold tracking-tight md:text-2xl',
      theme === 'light' ? 'text-slate-700' : 'text-slate-300',
      className
    ),
    ...props,
    children,
  })
}
function Header4({ children, className, theme, ...props }) {
  return /* @__PURE__ */ jsx('h2', {
    className: classnames(
      'font-display text-left text-lg font-bold tracking-tight md:text-xl',
      theme === 'light' ? 'text-slate-700' : 'text-slate-300',
      className
    ),
    ...props,
    children,
  })
}
function ToxicText({ children, className, ...props }) {
  return /* @__PURE__ */ jsx('span', {
    style: {
      background: 'linear-gradient(to right, #E7FF52, #41FF54)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    children,
  })
}
function PurpoText({ children, className, ...props }) {
  return /* @__PURE__ */ jsx('span', {
    style: {
      background: 'linear-gradient(to right, #2563EB, #A855F7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    children,
  })
}
export {
  Container,
  CopyText,
  CopyTextButton,
  CopyTextPanel,
  Footer,
  GithubStarsButtonLargeStatic,
  GithubStarsButtonStatic,
  Handwriting,
  Header,
  Header1,
  Header2,
  Header3,
  Header4,
  MarkdownMain,
  MobileNavIcon,
  MobileNavLink,
  NavLink,
  OffsetCurveBottom,
  OffsetCurveTop,
  OffsetTriangleBottom,
  OffsetTriangleLeftTop,
  OffsetTriangleTop,
  Panel,
  Paragraph,
  PrimaryButton,
  PrimaryLink,
  PurpoText,
  SecondaryButton,
  SecondaryButtonOutline,
  SecondaryLink,
  SecondaryLinkOutline,
  ToxicText,
  TriggerdotdevLogo,
  WaveBottom,
  WaveTop,
  WaveTopWithPadding,
}
