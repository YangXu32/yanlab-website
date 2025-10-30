(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
        o(u);
    new MutationObserver(u => {
        for (const d of u)
            if (d.type === "childList")
                for (const h of d.addedNodes)
                    h.tagName === "LINK" && h.rel === "modulepreload" && o(h)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function l(u) {
        const d = {};
        return u.integrity && (d.integrity = u.integrity),
        u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
        u.crossOrigin === "use-credentials" ? d.credentials = "include" : u.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
        d
    }
    function o(u) {
        if (u.ep)
            return;
        u.ep = !0;
        const d = l(u);
        fetch(u.href, d)
    }
}
)();
function ab(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var _u = {
    exports: {}
}
  , yr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f0;
function ib() {
    if (f0)
        return yr;
    f0 = 1;
    var n = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.fragment");
    function l(o, u, d) {
        var h = null;
        if (d !== void 0 && (h = "" + d),
        u.key !== void 0 && (h = "" + u.key),
        "key"in u) {
            d = {};
            for (var p in u)
                p !== "key" && (d[p] = u[p])
        } else
            d = u;
        return u = d.ref,
        {
            $$typeof: n,
            type: o,
            key: h,
            ref: u !== void 0 ? u : null,
            props: d
        }
    }
    return yr.Fragment = i,
    yr.jsx = l,
    yr.jsxs = l,
    yr
}
var h0;
function rb() {
    return h0 || (h0 = 1,
    _u.exports = ib()),
    _u.exports
}
var c = rb()
  , Wu = {
    exports: {}
}
  , re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d0;
function lb() {
    if (d0)
        return re;
    d0 = 1;
    var n = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.portal")
      , l = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , d = Symbol.for("react.consumer")
      , h = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , m = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , b = Symbol.for("react.lazy")
      , x = Symbol.iterator;
    function A(D) {
        return D === null || typeof D != "object" ? null : (D = x && D[x] || D["@@iterator"],
        typeof D == "function" ? D : null)
    }
    var E = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , H = Object.assign
      , F = {};
    function P(D, U, k) {
        this.props = D,
        this.context = U,
        this.refs = F,
        this.updater = k || E
    }
    P.prototype.isReactComponent = {},
    P.prototype.setState = function(D, U) {
        if (typeof D != "object" && typeof D != "function" && D != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, D, U, "setState")
    }
    ,
    P.prototype.forceUpdate = function(D) {
        this.updater.enqueueForceUpdate(this, D, "forceUpdate")
    }
    ;
    function L() {}
    L.prototype = P.prototype;
    function Z(D, U, k) {
        this.props = D,
        this.context = U,
        this.refs = F,
        this.updater = k || E
    }
    var V = Z.prototype = new L;
    V.constructor = Z,
    H(V, P.prototype),
    V.isPureReactComponent = !0;
    var q = Array.isArray
      , _ = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , ae = Object.prototype.hasOwnProperty;
    function le(D, U, k, G, Q, me) {
        return k = me.ref,
        {
            $$typeof: n,
            type: D,
            key: U,
            ref: k !== void 0 ? k : null,
            props: me
        }
    }
    function K(D, U) {
        return le(D.type, U, void 0, void 0, void 0, D.props)
    }
    function ue(D) {
        return typeof D == "object" && D !== null && D.$$typeof === n
    }
    function De(D) {
        var U = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + D.replace(/[=:]/g, function(k) {
            return U[k]
        })
    }
    var Ue = /\/+/g;
    function Ve(D, U) {
        return typeof D == "object" && D !== null && D.key != null ? De("" + D.key) : U.toString(36)
    }
    function Qt() {}
    function Pt(D) {
        switch (D.status) {
        case "fulfilled":
            return D.value;
        case "rejected":
            throw D.reason;
        default:
            switch (typeof D.status == "string" ? D.then(Qt, Qt) : (D.status = "pending",
            D.then(function(U) {
                D.status === "pending" && (D.status = "fulfilled",
                D.value = U)
            }, function(U) {
                D.status === "pending" && (D.status = "rejected",
                D.reason = U)
            })),
            D.status) {
            case "fulfilled":
                return D.value;
            case "rejected":
                throw D.reason
            }
        }
        throw D
    }
    function _e(D, U, k, G, Q) {
        var me = typeof D;
        (me === "undefined" || me === "boolean") && (D = null);
        var ie = !1;
        if (D === null)
            ie = !0;
        else
            switch (me) {
            case "bigint":
            case "string":
            case "number":
                ie = !0;
                break;
            case "object":
                switch (D.$$typeof) {
                case n:
                case i:
                    ie = !0;
                    break;
                case b:
                    return ie = D._init,
                    _e(ie(D._payload), U, k, G, Q)
                }
            }
        if (ie)
            return Q = Q(D),
            ie = G === "" ? "." + Ve(D, 0) : G,
            q(Q) ? (k = "",
            ie != null && (k = ie.replace(Ue, "$&/") + "/"),
            _e(Q, U, k, "", function(An) {
                return An
            })) : Q != null && (ue(Q) && (Q = K(Q, k + (Q.key == null || D && D.key === Q.key ? "" : ("" + Q.key).replace(Ue, "$&/") + "/") + ie)),
            U.push(Q)),
            1;
        ie = 0;
        var ht = G === "" ? "." : G + ":";
        if (q(D))
            for (var Te = 0; Te < D.length; Te++)
                G = D[Te],
                me = ht + Ve(G, Te),
                ie += _e(G, U, k, me, Q);
        else if (Te = A(D),
        typeof Te == "function")
            for (D = Te.call(D),
            Te = 0; !(G = D.next()).done; )
                G = G.value,
                me = ht + Ve(G, Te++),
                ie += _e(G, U, k, me, Q);
        else if (me === "object") {
            if (typeof D.then == "function")
                return _e(Pt(D), U, k, G, Q);
            throw U = String(D),
            Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ie
    }
    function B(D, U, k) {
        if (D == null)
            return D;
        var G = []
          , Q = 0;
        return _e(D, G, "", "", function(me) {
            return U.call(k, me, Q++)
        }),
        G
    }
    function W(D) {
        if (D._status === -1) {
            var U = D._result;
            U = U(),
            U.then(function(k) {
                (D._status === 0 || D._status === -1) && (D._status = 1,
                D._result = k)
            }, function(k) {
                (D._status === 0 || D._status === -1) && (D._status = 2,
                D._result = k)
            }),
            D._status === -1 && (D._status = 0,
            D._result = U)
        }
        if (D._status === 1)
            return D._result.default;
        throw D._result
    }
    var J = typeof reportError == "function" ? reportError : function(D) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var U = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof D == "object" && D !== null && typeof D.message == "string" ? String(D.message) : String(D),
                error: D
            });
            if (!window.dispatchEvent(U))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", D);
            return
        }
        console.error(D)
    }
    ;
    function he() {}
    return re.Children = {
        map: B,
        forEach: function(D, U, k) {
            B(D, function() {
                U.apply(this, arguments)
            }, k)
        },
        count: function(D) {
            var U = 0;
            return B(D, function() {
                U++
            }),
            U
        },
        toArray: function(D) {
            return B(D, function(U) {
                return U
            }) || []
        },
        only: function(D) {
            if (!ue(D))
                throw Error("React.Children.only expected to receive a single React element child.");
            return D
        }
    },
    re.Component = P,
    re.Fragment = l,
    re.Profiler = u,
    re.PureComponent = Z,
    re.StrictMode = o,
    re.Suspense = m,
    re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _,
    re.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(D) {
            return _.H.useMemoCache(D)
        }
    },
    re.cache = function(D) {
        return function() {
            return D.apply(null, arguments)
        }
    }
    ,
    re.cloneElement = function(D, U, k) {
        if (D == null)
            throw Error("The argument must be a React element, but you passed " + D + ".");
        var G = H({}, D.props)
          , Q = D.key
          , me = void 0;
        if (U != null)
            for (ie in U.ref !== void 0 && (me = void 0),
            U.key !== void 0 && (Q = "" + U.key),
            U)
                !ae.call(U, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && U.ref === void 0 || (G[ie] = U[ie]);
        var ie = arguments.length - 2;
        if (ie === 1)
            G.children = k;
        else if (1 < ie) {
            for (var ht = Array(ie), Te = 0; Te < ie; Te++)
                ht[Te] = arguments[Te + 2];
            G.children = ht
        }
        return le(D.type, Q, void 0, void 0, me, G)
    }
    ,
    re.createContext = function(D) {
        return D = {
            $$typeof: h,
            _currentValue: D,
            _currentValue2: D,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        D.Provider = D,
        D.Consumer = {
            $$typeof: d,
            _context: D
        },
        D
    }
    ,
    re.createElement = function(D, U, k) {
        var G, Q = {}, me = null;
        if (U != null)
            for (G in U.key !== void 0 && (me = "" + U.key),
            U)
                ae.call(U, G) && G !== "key" && G !== "__self" && G !== "__source" && (Q[G] = U[G]);
        var ie = arguments.length - 2;
        if (ie === 1)
            Q.children = k;
        else if (1 < ie) {
            for (var ht = Array(ie), Te = 0; Te < ie; Te++)
                ht[Te] = arguments[Te + 2];
            Q.children = ht
        }
        if (D && D.defaultProps)
            for (G in ie = D.defaultProps,
            ie)
                Q[G] === void 0 && (Q[G] = ie[G]);
        return le(D, me, void 0, void 0, null, Q)
    }
    ,
    re.createRef = function() {
        return {
            current: null
        }
    }
    ,
    re.forwardRef = function(D) {
        return {
            $$typeof: p,
            render: D
        }
    }
    ,
    re.isValidElement = ue,
    re.lazy = function(D) {
        return {
            $$typeof: b,
            _payload: {
                _status: -1,
                _result: D
            },
            _init: W
        }
    }
    ,
    re.memo = function(D, U) {
        return {
            $$typeof: g,
            type: D,
            compare: U === void 0 ? null : U
        }
    }
    ,
    re.startTransition = function(D) {
        var U = _.T
          , k = {};
        _.T = k;
        try {
            var G = D()
              , Q = _.S;
            Q !== null && Q(k, G),
            typeof G == "object" && G !== null && typeof G.then == "function" && G.then(he, J)
        } catch (me) {
            J(me)
        } finally {
            _.T = U
        }
    }
    ,
    re.unstable_useCacheRefresh = function() {
        return _.H.useCacheRefresh()
    }
    ,
    re.use = function(D) {
        return _.H.use(D)
    }
    ,
    re.useActionState = function(D, U, k) {
        return _.H.useActionState(D, U, k)
    }
    ,
    re.useCallback = function(D, U) {
        return _.H.useCallback(D, U)
    }
    ,
    re.useContext = function(D) {
        return _.H.useContext(D)
    }
    ,
    re.useDebugValue = function() {}
    ,
    re.useDeferredValue = function(D, U) {
        return _.H.useDeferredValue(D, U)
    }
    ,
    re.useEffect = function(D, U, k) {
        var G = _.H;
        if (typeof k == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return G.useEffect(D, U)
    }
    ,
    re.useId = function() {
        return _.H.useId()
    }
    ,
    re.useImperativeHandle = function(D, U, k) {
        return _.H.useImperativeHandle(D, U, k)
    }
    ,
    re.useInsertionEffect = function(D, U) {
        return _.H.useInsertionEffect(D, U)
    }
    ,
    re.useLayoutEffect = function(D, U) {
        return _.H.useLayoutEffect(D, U)
    }
    ,
    re.useMemo = function(D, U) {
        return _.H.useMemo(D, U)
    }
    ,
    re.useOptimistic = function(D, U) {
        return _.H.useOptimistic(D, U)
    }
    ,
    re.useReducer = function(D, U, k) {
        return _.H.useReducer(D, U, k)
    }
    ,
    re.useRef = function(D) {
        return _.H.useRef(D)
    }
    ,
    re.useState = function(D) {
        return _.H.useState(D)
    }
    ,
    re.useSyncExternalStore = function(D, U, k) {
        return _.H.useSyncExternalStore(D, U, k)
    }
    ,
    re.useTransition = function() {
        return _.H.useTransition()
    }
    ,
    re.version = "19.1.1",
    re
}
var m0;
function Yc() {
    return m0 || (m0 = 1,
    Wu.exports = lb()),
    Wu.exports
}
var w = Yc();
const pn = ab(w);
var Zu = {
    exports: {}
}
  , br = {}
  , Gu = {
    exports: {}
}
  , ku = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0;
function ob() {
    return g0 || (g0 = 1,
    function(n) {
        function i(B, W) {
            var J = B.length;
            B.push(W);
            e: for (; 0 < J; ) {
                var he = J - 1 >>> 1
                  , D = B[he];
                if (0 < u(D, W))
                    B[he] = W,
                    B[J] = D,
                    J = he;
                else
                    break e
            }
        }
        function l(B) {
            return B.length === 0 ? null : B[0]
        }
        function o(B) {
            if (B.length === 0)
                return null;
            var W = B[0]
              , J = B.pop();
            if (J !== W) {
                B[0] = J;
                e: for (var he = 0, D = B.length, U = D >>> 1; he < U; ) {
                    var k = 2 * (he + 1) - 1
                      , G = B[k]
                      , Q = k + 1
                      , me = B[Q];
                    if (0 > u(G, J))
                        Q < D && 0 > u(me, G) ? (B[he] = me,
                        B[Q] = J,
                        he = Q) : (B[he] = G,
                        B[k] = J,
                        he = k);
                    else if (Q < D && 0 > u(me, J))
                        B[he] = me,
                        B[Q] = J,
                        he = Q;
                    else
                        break e
                }
            }
            return W
        }
        function u(B, W) {
            var J = B.sortIndex - W.sortIndex;
            return J !== 0 ? J : B.id - W.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            n.unstable_now = function() {
                return d.now()
            }
        } else {
            var h = Date
              , p = h.now();
            n.unstable_now = function() {
                return h.now() - p
            }
        }
        var m = []
          , g = []
          , b = 1
          , x = null
          , A = 3
          , E = !1
          , H = !1
          , F = !1
          , P = !1
          , L = typeof setTimeout == "function" ? setTimeout : null
          , Z = typeof clearTimeout == "function" ? clearTimeout : null
          , V = typeof setImmediate < "u" ? setImmediate : null;
        function q(B) {
            for (var W = l(g); W !== null; ) {
                if (W.callback === null)
                    o(g);
                else if (W.startTime <= B)
                    o(g),
                    W.sortIndex = W.expirationTime,
                    i(m, W);
                else
                    break;
                W = l(g)
            }
        }
        function _(B) {
            if (F = !1,
            q(B),
            !H)
                if (l(m) !== null)
                    H = !0,
                    ae || (ae = !0,
                    Ve());
                else {
                    var W = l(g);
                    W !== null && _e(_, W.startTime - B)
                }
        }
        var ae = !1
          , le = -1
          , K = 5
          , ue = -1;
        function De() {
            return P ? !0 : !(n.unstable_now() - ue < K)
        }
        function Ue() {
            if (P = !1,
            ae) {
                var B = n.unstable_now();
                ue = B;
                var W = !0;
                try {
                    e: {
                        H = !1,
                        F && (F = !1,
                        Z(le),
                        le = -1),
                        E = !0;
                        var J = A;
                        try {
                            t: {
                                for (q(B),
                                x = l(m); x !== null && !(x.expirationTime > B && De()); ) {
                                    var he = x.callback;
                                    if (typeof he == "function") {
                                        x.callback = null,
                                        A = x.priorityLevel;
                                        var D = he(x.expirationTime <= B);
                                        if (B = n.unstable_now(),
                                        typeof D == "function") {
                                            x.callback = D,
                                            q(B),
                                            W = !0;
                                            break t
                                        }
                                        x === l(m) && o(m),
                                        q(B)
                                    } else
                                        o(m);
                                    x = l(m)
                                }
                                if (x !== null)
                                    W = !0;
                                else {
                                    var U = l(g);
                                    U !== null && _e(_, U.startTime - B),
                                    W = !1
                                }
                            }
                            break e
                        } finally {
                            x = null,
                            A = J,
                            E = !1
                        }
                        W = void 0
                    }
                } finally {
                    W ? Ve() : ae = !1
                }
            }
        }
        var Ve;
        if (typeof V == "function")
            Ve = function() {
                V(Ue)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Qt = new MessageChannel
              , Pt = Qt.port2;
            Qt.port1.onmessage = Ue,
            Ve = function() {
                Pt.postMessage(null)
            }
        } else
            Ve = function() {
                L(Ue, 0)
            }
            ;
        function _e(B, W) {
            le = L(function() {
                B(n.unstable_now())
            }, W)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(B) {
            B.callback = null
        }
        ,
        n.unstable_forceFrameRate = function(B) {
            0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < B ? Math.floor(1e3 / B) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return A
        }
        ,
        n.unstable_next = function(B) {
            switch (A) {
            case 1:
            case 2:
            case 3:
                var W = 3;
                break;
            default:
                W = A
            }
            var J = A;
            A = W;
            try {
                return B()
            } finally {
                A = J
            }
        }
        ,
        n.unstable_requestPaint = function() {
            P = !0
        }
        ,
        n.unstable_runWithPriority = function(B, W) {
            switch (B) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                B = 3
            }
            var J = A;
            A = B;
            try {
                return W()
            } finally {
                A = J
            }
        }
        ,
        n.unstable_scheduleCallback = function(B, W, J) {
            var he = n.unstable_now();
            switch (typeof J == "object" && J !== null ? (J = J.delay,
            J = typeof J == "number" && 0 < J ? he + J : he) : J = he,
            B) {
            case 1:
                var D = -1;
                break;
            case 2:
                D = 250;
                break;
            case 5:
                D = 1073741823;
                break;
            case 4:
                D = 1e4;
                break;
            default:
                D = 5e3
            }
            return D = J + D,
            B = {
                id: b++,
                callback: W,
                priorityLevel: B,
                startTime: J,
                expirationTime: D,
                sortIndex: -1
            },
            J > he ? (B.sortIndex = J,
            i(g, B),
            l(m) === null && B === l(g) && (F ? (Z(le),
            le = -1) : F = !0,
            _e(_, J - he))) : (B.sortIndex = D,
            i(m, B),
            H || E || (H = !0,
            ae || (ae = !0,
            Ve()))),
            B
        }
        ,
        n.unstable_shouldYield = De,
        n.unstable_wrapCallback = function(B) {
            var W = A;
            return function() {
                var J = A;
                A = W;
                try {
                    return B.apply(this, arguments)
                } finally {
                    A = J
                }
            }
        }
    }(ku)),
    ku
}
var p0;
function sb() {
    return p0 || (p0 = 1,
    Gu.exports = ob()),
    Gu.exports
}
var Xu = {
    exports: {}
}
  , nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y0;
function ub() {
    if (y0)
        return nt;
    y0 = 1;
    var n = Yc();
    function i(m) {
        var g = "https://react.dev/errors/" + m;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var b = 2; b < arguments.length; b++)
                g += "&args[]=" + encodeURIComponent(arguments[b])
        }
        return "Minified React error #" + m + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function l() {}
    var o = {
        d: {
            f: l,
            r: function() {
                throw Error(i(522))
            },
            D: l,
            C: l,
            L: l,
            m: l,
            X: l,
            S: l,
            M: l
        },
        p: 0,
        findDOMNode: null
    }
      , u = Symbol.for("react.portal");
    function d(m, g, b) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: x == null ? null : "" + x,
            children: m,
            containerInfo: g,
            implementation: b
        }
    }
    var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(m, g) {
        if (m === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    nt.createPortal = function(m, g) {
        var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(i(299));
        return d(m, g, null, b)
    }
    ,
    nt.flushSync = function(m) {
        var g = h.T
          , b = o.p;
        try {
            if (h.T = null,
            o.p = 2,
            m)
                return m()
        } finally {
            h.T = g,
            o.p = b,
            o.d.f()
        }
    }
    ,
    nt.preconnect = function(m, g) {
        typeof m == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        o.d.C(m, g))
    }
    ,
    nt.prefetchDNS = function(m) {
        typeof m == "string" && o.d.D(m)
    }
    ,
    nt.preinit = function(m, g) {
        if (typeof m == "string" && g && typeof g.as == "string") {
            var b = g.as
              , x = p(b, g.crossOrigin)
              , A = typeof g.integrity == "string" ? g.integrity : void 0
              , E = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            b === "style" ? o.d.S(m, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: x,
                integrity: A,
                fetchPriority: E
            }) : b === "script" && o.d.X(m, {
                crossOrigin: x,
                integrity: A,
                fetchPriority: E,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    nt.preinitModule = function(m, g) {
        if (typeof m == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var b = p(g.as, g.crossOrigin);
                    o.d.M(m, {
                        crossOrigin: b,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && o.d.M(m)
    }
    ,
    nt.preload = function(m, g) {
        if (typeof m == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var b = g.as
              , x = p(b, g.crossOrigin);
            o.d.L(m, b, {
                crossOrigin: x,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    nt.preloadModule = function(m, g) {
        if (typeof m == "string")
            if (g) {
                var b = p(g.as, g.crossOrigin);
                o.d.m(m, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: b,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                o.d.m(m)
    }
    ,
    nt.requestFormReset = function(m) {
        o.d.r(m)
    }
    ,
    nt.unstable_batchedUpdates = function(m, g) {
        return m(g)
    }
    ,
    nt.useFormState = function(m, g, b) {
        return h.H.useFormState(m, g, b)
    }
    ,
    nt.useFormStatus = function() {
        return h.H.useHostTransitionStatus()
    }
    ,
    nt.version = "19.1.1",
    nt
}
var b0;
function cb() {
    if (b0)
        return Xu.exports;
    b0 = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (i) {
                console.error(i)
            }
    }
    return n(),
    Xu.exports = ub(),
    Xu.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v0;
function fb() {
    if (v0)
        return br;
    v0 = 1;
    var n = sb()
      , i = Yc()
      , l = cb();
    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function d(e) {
        var t = e
          , a = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (a = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? a : null
    }
    function h(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function p(e) {
        if (d(e) !== e)
            throw Error(o(188))
    }
    function m(e) {
        var t = e.alternate;
        if (!t) {
            if (t = d(e),
            t === null)
                throw Error(o(188));
            return t !== e ? null : e
        }
        for (var a = e, r = t; ; ) {
            var s = a.return;
            if (s === null)
                break;
            var f = s.alternate;
            if (f === null) {
                if (r = s.return,
                r !== null) {
                    a = r;
                    continue
                }
                break
            }
            if (s.child === f.child) {
                for (f = s.child; f; ) {
                    if (f === a)
                        return p(s),
                        e;
                    if (f === r)
                        return p(s),
                        t;
                    f = f.sibling
                }
                throw Error(o(188))
            }
            if (a.return !== r.return)
                a = s,
                r = f;
            else {
                for (var y = !1, v = s.child; v; ) {
                    if (v === a) {
                        y = !0,
                        a = s,
                        r = f;
                        break
                    }
                    if (v === r) {
                        y = !0,
                        r = s,
                        a = f;
                        break
                    }
                    v = v.sibling
                }
                if (!y) {
                    for (v = f.child; v; ) {
                        if (v === a) {
                            y = !0,
                            a = f,
                            r = s;
                            break
                        }
                        if (v === r) {
                            y = !0,
                            r = f,
                            a = s;
                            break
                        }
                        v = v.sibling
                    }
                    if (!y)
                        throw Error(o(189))
                }
            }
            if (a.alternate !== r)
                throw Error(o(190))
        }
        if (a.tag !== 3)
            throw Error(o(188));
        return a.stateNode.current === a ? e : t
    }
    function g(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = g(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var b = Object.assign
      , x = Symbol.for("react.element")
      , A = Symbol.for("react.transitional.element")
      , E = Symbol.for("react.portal")
      , H = Symbol.for("react.fragment")
      , F = Symbol.for("react.strict_mode")
      , P = Symbol.for("react.profiler")
      , L = Symbol.for("react.provider")
      , Z = Symbol.for("react.consumer")
      , V = Symbol.for("react.context")
      , q = Symbol.for("react.forward_ref")
      , _ = Symbol.for("react.suspense")
      , ae = Symbol.for("react.suspense_list")
      , le = Symbol.for("react.memo")
      , K = Symbol.for("react.lazy")
      , ue = Symbol.for("react.activity")
      , De = Symbol.for("react.memo_cache_sentinel")
      , Ue = Symbol.iterator;
    function Ve(e) {
        return e === null || typeof e != "object" ? null : (e = Ue && e[Ue] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var Qt = Symbol.for("react.client.reference");
    function Pt(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === Qt ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case H:
            return "Fragment";
        case P:
            return "Profiler";
        case F:
            return "StrictMode";
        case _:
            return "Suspense";
        case ae:
            return "SuspenseList";
        case ue:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case E:
                return "Portal";
            case V:
                return (e.displayName || "Context") + ".Provider";
            case Z:
                return (e._context.displayName || "Context") + ".Consumer";
            case q:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case le:
                return t = e.displayName || null,
                t !== null ? t : Pt(e.type) || "Memo";
            case K:
                t = e._payload,
                e = e._init;
                try {
                    return Pt(e(t))
                } catch {}
            }
        return null
    }
    var _e = Array.isArray
      , B = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , W = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , J = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , he = []
      , D = -1;
    function U(e) {
        return {
            current: e
        }
    }
    function k(e) {
        0 > D || (e.current = he[D],
        he[D] = null,
        D--)
    }
    function G(e, t) {
        D++,
        he[D] = e.current,
        e.current = t
    }
    var Q = U(null)
      , me = U(null)
      , ie = U(null)
      , ht = U(null);
    function Te(e, t) {
        switch (G(ie, t),
        G(me, e),
        G(Q, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Fm(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = Fm(t),
                e = Um(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        k(Q),
        G(Q, e)
    }
    function An() {
        k(Q),
        k(me),
        k(ie)
    }
    function No(e) {
        e.memoizedState !== null && G(ht, e);
        var t = Q.current
          , a = Um(t, e.type);
        t !== a && (G(me, e),
        G(Q, a))
    }
    function Vr(e) {
        me.current === e && (k(Q),
        k(me)),
        ht.current === e && (k(ht),
        hr._currentValue = J)
    }
    var wo = Object.prototype.hasOwnProperty
      , Mo = n.unstable_scheduleCallback
      , Ro = n.unstable_cancelCallback
      , By = n.unstable_shouldYield
      , zy = n.unstable_requestPaint
      , Ft = n.unstable_now
      , Oy = n.unstable_getCurrentPriorityLevel
      , vf = n.unstable_ImmediatePriority
      , xf = n.unstable_UserBlockingPriority
      , _r = n.unstable_NormalPriority
      , Py = n.unstable_LowPriority
      , Sf = n.unstable_IdlePriority
      , Fy = n.log
      , Uy = n.unstable_setDisableYieldValue
      , xi = null
      , dt = null;
    function Dn(e) {
        if (typeof Fy == "function" && Uy(e),
        dt && typeof dt.setStrictMode == "function")
            try {
                dt.setStrictMode(xi, e)
            } catch {}
    }
    var mt = Math.clz32 ? Math.clz32 : Wy
      , Vy = Math.log
      , _y = Math.LN2;
    function Wy(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Vy(e) / _y | 0) | 0
    }
    var Wr = 256
      , Zr = 4194304;
    function Qn(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
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
            return 64;
        case 128:
            return 128;
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
            return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function Gr(e, t, a) {
        var r = e.pendingLanes;
        if (r === 0)
            return 0;
        var s = 0
          , f = e.suspendedLanes
          , y = e.pingedLanes;
        e = e.warmLanes;
        var v = r & 134217727;
        return v !== 0 ? (r = v & ~f,
        r !== 0 ? s = Qn(r) : (y &= v,
        y !== 0 ? s = Qn(y) : a || (a = v & ~e,
        a !== 0 && (s = Qn(a))))) : (v = r & ~f,
        v !== 0 ? s = Qn(v) : y !== 0 ? s = Qn(y) : a || (a = r & ~e,
        a !== 0 && (s = Qn(a)))),
        s === 0 ? 0 : t !== 0 && t !== s && (t & f) === 0 && (f = s & -s,
        a = t & -t,
        f >= a || f === 32 && (a & 4194048) !== 0) ? t : s
    }
    function Si(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Zy(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
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
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Af() {
        var e = Wr;
        return Wr <<= 1,
        (Wr & 4194048) === 0 && (Wr = 256),
        e
    }
    function Df() {
        var e = Zr;
        return Zr <<= 1,
        (Zr & 62914560) === 0 && (Zr = 4194304),
        e
    }
    function Eo(e) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(e);
        return t
    }
    function Ai(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Gy(e, t, a, r, s, f) {
        var y = e.pendingLanes;
        e.pendingLanes = a,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= a,
        e.entangledLanes &= a,
        e.errorRecoveryDisabledLanes &= a,
        e.shellSuspendCounter = 0;
        var v = e.entanglements
          , S = e.expirationTimes
          , N = e.hiddenUpdates;
        for (a = y & ~a; 0 < a; ) {
            var Y = 31 - mt(a)
              , O = 1 << Y;
            v[Y] = 0,
            S[Y] = -1;
            var M = N[Y];
            if (M !== null)
                for (N[Y] = null,
                Y = 0; Y < M.length; Y++) {
                    var R = M[Y];
                    R !== null && (R.lane &= -536870913)
                }
            a &= ~O
        }
        r !== 0 && jf(e, r, 0),
        f !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~t))
    }
    function jf(e, t, a) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var r = 31 - mt(t);
        e.entangledLanes |= t,
        e.entanglements[r] = e.entanglements[r] | 1073741824 | a & 4194090
    }
    function Tf(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
            var r = 31 - mt(a)
              , s = 1 << r;
            s & t | e[r] & t && (e[r] |= t),
            a &= ~s
        }
    }
    function Lo(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
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
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function Ho(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Cf() {
        var e = W.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : r0(e.type))
    }
    function ky(e, t) {
        var a = W.p;
        try {
            return W.p = e,
            t()
        } finally {
            W.p = a
        }
    }
    var jn = Math.random().toString(36).slice(2)
      , et = "__reactFiber$" + jn
      , lt = "__reactProps$" + jn
      , Aa = "__reactContainer$" + jn
      , Yo = "__reactEvents$" + jn
      , Xy = "__reactListeners$" + jn
      , Jy = "__reactHandles$" + jn
      , Nf = "__reactResources$" + jn
      , Di = "__reactMarker$" + jn;
    function Bo(e) {
        delete e[et],
        delete e[lt],
        delete e[Yo],
        delete e[Xy],
        delete e[Jy]
    }
    function Da(e) {
        var t = e[et];
        if (t)
            return t;
        for (var a = e.parentNode; a; ) {
            if (t = a[Aa] || a[et]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (e = Zm(e); e !== null; ) {
                        if (a = e[et])
                            return a;
                        e = Zm(e)
                    }
                return t
            }
            e = a,
            a = e.parentNode
        }
        return null
    }
    function ja(e) {
        if (e = e[et] || e[Aa]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function ji(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(o(33))
    }
    function Ta(e) {
        var t = e[Nf];
        return t || (t = e[Nf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Ge(e) {
        e[Di] = !0
    }
    var wf = new Set
      , Mf = {};
    function $n(e, t) {
        Ca(e, t),
        Ca(e + "Capture", t)
    }
    function Ca(e, t) {
        for (Mf[e] = t,
        e = 0; e < t.length; e++)
            wf.add(t[e])
    }
    var qy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Rf = {}
      , Ef = {};
    function Iy(e) {
        return wo.call(Ef, e) ? !0 : wo.call(Rf, e) ? !1 : qy.test(e) ? Ef[e] = !0 : (Rf[e] = !0,
        !1)
    }
    function kr(e, t, a) {
        if (Iy(t))
            if (a === null)
                e.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var r = t.toLowerCase().slice(0, 5);
                    if (r !== "data-" && r !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + a)
            }
    }
    function Xr(e, t, a) {
        if (a === null)
            e.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + a)
        }
    }
    function $t(e, t, a, r) {
        if (r === null)
            e.removeAttribute(a);
        else {
            switch (typeof r) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(a);
                return
            }
            e.setAttributeNS(t, a, "" + r)
        }
    }
    var zo, Lf;
    function Na(e) {
        if (zo === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                zo = t && t[1] || "",
                Lf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + zo + e + Lf
    }
    var Oo = !1;
    function Po(e, t) {
        if (!e || Oo)
            return "";
        Oo = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var O = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(O.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(O, [])
                                } catch (R) {
                                    var M = R
                                }
                                Reflect.construct(e, [], O)
                            } else {
                                try {
                                    O.call()
                                } catch (R) {
                                    M = R
                                }
                                e.call(O.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (R) {
                                M = R
                            }
                            (O = e()) && typeof O.catch == "function" && O.catch(function() {})
                        }
                    } catch (R) {
                        if (R && M && typeof R.stack == "string")
                            return [R.stack, M.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var f = r.DetermineComponentFrameRoot()
              , y = f[0]
              , v = f[1];
            if (y && v) {
                var S = y.split(`
`)
                  , N = v.split(`
`);
                for (s = r = 0; r < S.length && !S[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                for (; s < N.length && !N[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (r === S.length || s === N.length)
                    for (r = S.length - 1,
                    s = N.length - 1; 1 <= r && 0 <= s && S[r] !== N[s]; )
                        s--;
                for (; 1 <= r && 0 <= s; r--,
                s--)
                    if (S[r] !== N[s]) {
                        if (r !== 1 || s !== 1)
                            do
                                if (r--,
                                s--,
                                0 > s || S[r] !== N[s]) {
                                    var Y = `
` + S[r].replace(" at new ", " at ");
                                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)),
                                    Y
                                }
                            while (1 <= r && 0 <= s);
                        break
                    }
            }
        } finally {
            Oo = !1,
            Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? Na(a) : ""
    }
    function Ky(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return Na(e.type);
        case 16:
            return Na("Lazy");
        case 13:
            return Na("Suspense");
        case 19:
            return Na("SuspenseList");
        case 0:
        case 15:
            return Po(e.type, !1);
        case 11:
            return Po(e.type.render, !1);
        case 1:
            return Po(e.type, !0);
        case 31:
            return Na("Activity");
        default:
            return ""
        }
    }
    function Hf(e) {
        try {
            var t = "";
            do
                t += Ky(e),
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    function At(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Yf(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Qy(e) {
        var t = Yf(e) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var s = a.get
              , f = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(y) {
                    r = "" + y,
                    f.call(this, y)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return r
                },
                setValue: function(y) {
                    r = "" + y
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Jr(e) {
        e._valueTracker || (e._valueTracker = Qy(e))
    }
    function Bf(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , r = "";
        return e && (r = Yf(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== a ? (t.setValue(e),
        !0) : !1
    }
    function qr(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var $y = /[\n"\\]/g;
    function Dt(e) {
        return e.replace($y, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Fo(e, t, a, r, s, f, y, v) {
        e.name = "",
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"),
        t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"),
        t != null ? Uo(e, y, At(t)) : a != null ? Uo(e, y, At(a)) : r != null && e.removeAttribute("value"),
        s == null && f != null && (e.defaultChecked = !!f),
        s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"),
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + At(v) : e.removeAttribute("name")
    }
    function zf(e, t, a, r, s, f, y, v) {
        if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f),
        t != null || a != null) {
            if (!(f !== "submit" && f !== "reset" || t != null))
                return;
            a = a != null ? "" + At(a) : "",
            t = t != null ? "" + At(t) : a,
            v || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        r = r ?? s,
        r = typeof r != "function" && typeof r != "symbol" && !!r,
        e.checked = v ? e.checked : !!r,
        e.defaultChecked = !!r,
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y)
    }
    function Uo(e, t, a) {
        t === "number" && qr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function wa(e, t, a, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var s = 0; s < a.length; s++)
                t["$" + a[s]] = !0;
            for (a = 0; a < e.length; a++)
                s = t.hasOwnProperty("$" + e[a].value),
                e[a].selected !== s && (e[a].selected = s),
                s && r && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + At(a),
            t = null,
            s = 0; s < e.length; s++) {
                if (e[s].value === a) {
                    e[s].selected = !0,
                    r && (e[s].defaultSelected = !0);
                    return
                }
                t !== null || e[s].disabled || (t = e[s])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Of(e, t, a) {
        if (t != null && (t = "" + At(t),
        t !== e.value && (e.value = t),
        a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + At(a) : ""
    }
    function Pf(e, t, a, r) {
        if (t == null) {
            if (r != null) {
                if (a != null)
                    throw Error(o(92));
                if (_e(r)) {
                    if (1 < r.length)
                        throw Error(o(93));
                    r = r[0]
                }
                a = r
            }
            a == null && (a = ""),
            t = a
        }
        a = At(t),
        e.defaultValue = a,
        r = e.textContent,
        r === a && r !== "" && r !== null && (e.value = r)
    }
    function Ma(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var e1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Ff(e, t, a) {
        var r = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, a) : typeof a != "number" || a === 0 || e1.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function Uf(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(o(62));
        if (e = e.style,
        a != null) {
            for (var r in a)
                !a.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
            for (var s in t)
                r = t[s],
                t.hasOwnProperty(s) && a[s] !== r && Ff(e, s, r)
        } else
            for (var f in t)
                t.hasOwnProperty(f) && Ff(e, f, t[f])
    }
    function Vo(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var t1 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , n1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ir(e) {
        return n1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var _o = null;
    function Wo(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Ra = null
      , Ea = null;
    function Vf(e) {
        var t = ja(e);
        if (t && (e = t.stateNode)) {
            var a = e[lt] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Fo(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = e; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + Dt("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var r = a[t];
                        if (r !== e && r.form === e.form) {
                            var s = r[lt] || null;
                            if (!s)
                                throw Error(o(90));
                            Fo(r, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        r = a[t],
                        r.form === e.form && Bf(r)
                }
                break e;
            case "textarea":
                Of(e, a.value, a.defaultValue);
                break e;
            case "select":
                t = a.value,
                t != null && wa(e, !!a.multiple, t, !1)
            }
        }
    }
    var Zo = !1;
    function _f(e, t, a) {
        if (Zo)
            return e(t, a);
        Zo = !0;
        try {
            var r = e(t);
            return r
        } finally {
            if (Zo = !1,
            (Ra !== null || Ea !== null) && (Bl(),
            Ra && (t = Ra,
            e = Ea,
            Ea = Ra = null,
            Vf(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Vf(e[t])
        }
    }
    function Ti(e, t) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var r = a[lt] || null;
        if (r === null)
            return null;
        a = r[t];
        e: switch (t) {
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
            (r = !r.disabled) || (e = e.type,
            r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !r;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (a && typeof a != "function")
            throw Error(o(231, t, typeof a));
        return a
    }
    var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Go = !1;
    if (en)
        try {
            var Ci = {};
            Object.defineProperty(Ci, "passive", {
                get: function() {
                    Go = !0
                }
            }),
            window.addEventListener("test", Ci, Ci),
            window.removeEventListener("test", Ci, Ci)
        } catch {
            Go = !1
        }
    var Tn = null
      , ko = null
      , Kr = null;
    function Wf() {
        if (Kr)
            return Kr;
        var e, t = ko, a = t.length, r, s = "value"in Tn ? Tn.value : Tn.textContent, f = s.length;
        for (e = 0; e < a && t[e] === s[e]; e++)
            ;
        var y = a - e;
        for (r = 1; r <= y && t[a - r] === s[f - r]; r++)
            ;
        return Kr = s.slice(e, 1 < r ? 1 - r : void 0)
    }
    function Qr(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function $r() {
        return !0
    }
    function Zf() {
        return !1
    }
    function ot(e) {
        function t(a, r, s, f, y) {
            this._reactName = a,
            this._targetInst = s,
            this.type = r,
            this.nativeEvent = f,
            this.target = y,
            this.currentTarget = null;
            for (var v in e)
                e.hasOwnProperty(v) && (a = e[v],
                this[v] = a ? a(f) : f[v]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? $r : Zf,
            this.isPropagationStopped = Zf,
            this
        }
        return b(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = $r)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = $r)
            },
            persist: function() {},
            isPersistent: $r
        }),
        t
    }
    var ea = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, el = ot(ea), Ni = b({}, ea, {
        view: 0,
        detail: 0
    }), a1 = ot(Ni), Xo, Jo, wi, tl = b({}, Ni, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Io,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== wi && (wi && e.type === "mousemove" ? (Xo = e.screenX - wi.screenX,
            Jo = e.screenY - wi.screenY) : Jo = Xo = 0,
            wi = e),
            Xo)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Jo
        }
    }), Gf = ot(tl), i1 = b({}, tl, {
        dataTransfer: 0
    }), r1 = ot(i1), l1 = b({}, Ni, {
        relatedTarget: 0
    }), qo = ot(l1), o1 = b({}, ea, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), s1 = ot(o1), u1 = b({}, ea, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), c1 = ot(u1), f1 = b({}, ea, {
        data: 0
    }), kf = ot(f1), h1 = {
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
    }, d1 = {
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
    }, m1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function g1(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = m1[e]) ? !!t[e] : !1
    }
    function Io() {
        return g1
    }
    var p1 = b({}, Ni, {
        key: function(e) {
            if (e.key) {
                var t = h1[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Qr(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? d1[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Io,
        charCode: function(e) {
            return e.type === "keypress" ? Qr(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Qr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , y1 = ot(p1)
      , b1 = b({}, tl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Xf = ot(b1)
      , v1 = b({}, Ni, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Io
    })
      , x1 = ot(v1)
      , S1 = b({}, ea, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , A1 = ot(S1)
      , D1 = b({}, tl, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , j1 = ot(D1)
      , T1 = b({}, ea, {
        newState: 0,
        oldState: 0
    })
      , C1 = ot(T1)
      , N1 = [9, 13, 27, 32]
      , Ko = en && "CompositionEvent"in window
      , Mi = null;
    en && "documentMode"in document && (Mi = document.documentMode);
    var w1 = en && "TextEvent"in window && !Mi
      , Jf = en && (!Ko || Mi && 8 < Mi && 11 >= Mi)
      , qf = " "
      , If = !1;
    function Kf(e, t) {
        switch (e) {
        case "keyup":
            return N1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Qf(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var La = !1;
    function M1(e, t) {
        switch (e) {
        case "compositionend":
            return Qf(t);
        case "keypress":
            return t.which !== 32 ? null : (If = !0,
            qf);
        case "textInput":
            return e = t.data,
            e === qf && If ? null : e;
        default:
            return null
        }
    }
    function R1(e, t) {
        if (La)
            return e === "compositionend" || !Ko && Kf(e, t) ? (e = Wf(),
            Kr = ko = Tn = null,
            La = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Jf && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var E1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function $f(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!E1[e.type] : t === "textarea"
    }
    function eh(e, t, a, r) {
        Ra ? Ea ? Ea.push(r) : Ea = [r] : Ra = r,
        t = Vl(t, "onChange"),
        0 < t.length && (a = new el("onChange","change",null,a,r),
        e.push({
            event: a,
            listeners: t
        }))
    }
    var Ri = null
      , Ei = null;
    function L1(e) {
        Ym(e, 0)
    }
    function nl(e) {
        var t = ji(e);
        if (Bf(t))
            return e
    }
    function th(e, t) {
        if (e === "change")
            return t
    }
    var nh = !1;
    if (en) {
        var Qo;
        if (en) {
            var $o = "oninput"in document;
            if (!$o) {
                var ah = document.createElement("div");
                ah.setAttribute("oninput", "return;"),
                $o = typeof ah.oninput == "function"
            }
            Qo = $o
        } else
            Qo = !1;
        nh = Qo && (!document.documentMode || 9 < document.documentMode)
    }
    function ih() {
        Ri && (Ri.detachEvent("onpropertychange", rh),
        Ei = Ri = null)
    }
    function rh(e) {
        if (e.propertyName === "value" && nl(Ei)) {
            var t = [];
            eh(t, Ei, e, Wo(e)),
            _f(L1, t)
        }
    }
    function H1(e, t, a) {
        e === "focusin" ? (ih(),
        Ri = t,
        Ei = a,
        Ri.attachEvent("onpropertychange", rh)) : e === "focusout" && ih()
    }
    function Y1(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return nl(Ei)
    }
    function B1(e, t) {
        if (e === "click")
            return nl(t)
    }
    function z1(e, t) {
        if (e === "input" || e === "change")
            return nl(t)
    }
    function O1(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var gt = typeof Object.is == "function" ? Object.is : O1;
    function Li(e, t) {
        if (gt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
          , r = Object.keys(t);
        if (a.length !== r.length)
            return !1;
        for (r = 0; r < a.length; r++) {
            var s = a[r];
            if (!wo.call(t, s) || !gt(e[s], t[s]))
                return !1
        }
        return !0
    }
    function lh(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function oh(e, t) {
        var a = lh(e);
        e = 0;
        for (var r; a; ) {
            if (a.nodeType === 3) {
                if (r = e + a.textContent.length,
                e <= t && r >= t)
                    return {
                        node: a,
                        offset: t - e
                    };
                e = r
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = lh(a)
        }
    }
    function sh(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sh(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function uh(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = qr(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = t.contentWindow;
            else
                break;
            t = qr(e.document)
        }
        return t
    }
    function es(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var P1 = en && "documentMode"in document && 11 >= document.documentMode
      , Ha = null
      , ts = null
      , Hi = null
      , ns = !1;
    function ch(e, t, a) {
        var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        ns || Ha == null || Ha !== qr(r) || (r = Ha,
        "selectionStart"in r && es(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
        r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }),
        Hi && Li(Hi, r) || (Hi = r,
        r = Vl(ts, "onSelect"),
        0 < r.length && (t = new el("onSelect","select",null,t,a),
        e.push({
            event: t,
            listeners: r
        }),
        t.target = Ha)))
    }
    function ta(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + e] = "webkit" + t,
        a["Moz" + e] = "moz" + t,
        a
    }
    var Ya = {
        animationend: ta("Animation", "AnimationEnd"),
        animationiteration: ta("Animation", "AnimationIteration"),
        animationstart: ta("Animation", "AnimationStart"),
        transitionrun: ta("Transition", "TransitionRun"),
        transitionstart: ta("Transition", "TransitionStart"),
        transitioncancel: ta("Transition", "TransitionCancel"),
        transitionend: ta("Transition", "TransitionEnd")
    }
      , as = {}
      , fh = {};
    en && (fh = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ya.animationend.animation,
    delete Ya.animationiteration.animation,
    delete Ya.animationstart.animation),
    "TransitionEvent"in window || delete Ya.transitionend.transition);
    function na(e) {
        if (as[e])
            return as[e];
        if (!Ya[e])
            return e;
        var t = Ya[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in fh)
                return as[e] = t[a];
        return e
    }
    var hh = na("animationend")
      , dh = na("animationiteration")
      , mh = na("animationstart")
      , F1 = na("transitionrun")
      , U1 = na("transitionstart")
      , V1 = na("transitioncancel")
      , gh = na("transitionend")
      , ph = new Map
      , is = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    is.push("scrollEnd");
    function Yt(e, t) {
        ph.set(e, t),
        $n(t, [e])
    }
    var yh = new WeakMap;
    function jt(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = yh.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: Hf(t)
            },
            yh.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: Hf(t)
        }
    }
    var Tt = []
      , Ba = 0
      , rs = 0;
    function al() {
        for (var e = Ba, t = rs = Ba = 0; t < e; ) {
            var a = Tt[t];
            Tt[t++] = null;
            var r = Tt[t];
            Tt[t++] = null;
            var s = Tt[t];
            Tt[t++] = null;
            var f = Tt[t];
            if (Tt[t++] = null,
            r !== null && s !== null) {
                var y = r.pending;
                y === null ? s.next = s : (s.next = y.next,
                y.next = s),
                r.pending = s
            }
            f !== 0 && bh(a, s, f)
        }
    }
    function il(e, t, a, r) {
        Tt[Ba++] = e,
        Tt[Ba++] = t,
        Tt[Ba++] = a,
        Tt[Ba++] = r,
        rs |= r,
        e.lanes |= r,
        e = e.alternate,
        e !== null && (e.lanes |= r)
    }
    function ls(e, t, a, r) {
        return il(e, t, a, r),
        rl(e)
    }
    function za(e, t) {
        return il(e, null, null, t),
        rl(e)
    }
    function bh(e, t, a) {
        e.lanes |= a;
        var r = e.alternate;
        r !== null && (r.lanes |= a);
        for (var s = !1, f = e.return; f !== null; )
            f.childLanes |= a,
            r = f.alternate,
            r !== null && (r.childLanes |= a),
            f.tag === 22 && (e = f.stateNode,
            e === null || e._visibility & 1 || (s = !0)),
            e = f,
            f = f.return;
        return e.tag === 3 ? (f = e.stateNode,
        s && t !== null && (s = 31 - mt(a),
        e = f.hiddenUpdates,
        r = e[s],
        r === null ? e[s] = [t] : r.push(t),
        t.lane = a | 536870912),
        f) : null
    }
    function rl(e) {
        if (50 < ir)
            throw ir = 0,
            hu = null,
            Error(o(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Oa = {};
    function _1(e, t, a, r) {
        this.tag = e,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function pt(e, t, a, r) {
        return new _1(e,t,a,r)
    }
    function os(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function tn(e, t) {
        var a = e.alternate;
        return a === null ? (a = pt(e.tag, t, e.key, e.mode),
        a.elementType = e.elementType,
        a.type = e.type,
        a.stateNode = e.stateNode,
        a.alternate = e,
        e.alternate = a) : (a.pendingProps = t,
        a.type = e.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = e.flags & 65011712,
        a.childLanes = e.childLanes,
        a.lanes = e.lanes,
        a.child = e.child,
        a.memoizedProps = e.memoizedProps,
        a.memoizedState = e.memoizedState,
        a.updateQueue = e.updateQueue,
        t = e.dependencies,
        a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        a.sibling = e.sibling,
        a.index = e.index,
        a.ref = e.ref,
        a.refCleanup = e.refCleanup,
        a
    }
    function vh(e, t) {
        e.flags &= 65011714;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = a.childLanes,
        e.lanes = a.lanes,
        e.child = a.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = a.memoizedProps,
        e.memoizedState = a.memoizedState,
        e.updateQueue = a.updateQueue,
        e.type = a.type,
        t = a.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function ll(e, t, a, r, s, f) {
        var y = 0;
        if (r = e,
        typeof e == "function")
            os(e) && (y = 1);
        else if (typeof e == "string")
            y = Z2(e, a, Q.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case ue:
                return e = pt(31, a, t, s),
                e.elementType = ue,
                e.lanes = f,
                e;
            case H:
                return aa(a.children, s, f, t);
            case F:
                y = 8,
                s |= 24;
                break;
            case P:
                return e = pt(12, a, t, s | 2),
                e.elementType = P,
                e.lanes = f,
                e;
            case _:
                return e = pt(13, a, t, s),
                e.elementType = _,
                e.lanes = f,
                e;
            case ae:
                return e = pt(19, a, t, s),
                e.elementType = ae,
                e.lanes = f,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case L:
                    case V:
                        y = 10;
                        break e;
                    case Z:
                        y = 9;
                        break e;
                    case q:
                        y = 11;
                        break e;
                    case le:
                        y = 14;
                        break e;
                    case K:
                        y = 16,
                        r = null;
                        break e
                    }
                y = 29,
                a = Error(o(130, e === null ? "null" : typeof e, "")),
                r = null
            }
        return t = pt(y, a, t, s),
        t.elementType = e,
        t.type = r,
        t.lanes = f,
        t
    }
    function aa(e, t, a, r) {
        return e = pt(7, e, r, t),
        e.lanes = a,
        e
    }
    function ss(e, t, a) {
        return e = pt(6, e, null, t),
        e.lanes = a,
        e
    }
    function us(e, t, a) {
        return t = pt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var Pa = []
      , Fa = 0
      , ol = null
      , sl = 0
      , Ct = []
      , Nt = 0
      , ia = null
      , nn = 1
      , an = "";
    function ra(e, t) {
        Pa[Fa++] = sl,
        Pa[Fa++] = ol,
        ol = e,
        sl = t
    }
    function xh(e, t, a) {
        Ct[Nt++] = nn,
        Ct[Nt++] = an,
        Ct[Nt++] = ia,
        ia = e;
        var r = nn;
        e = an;
        var s = 32 - mt(r) - 1;
        r &= ~(1 << s),
        a += 1;
        var f = 32 - mt(t) + s;
        if (30 < f) {
            var y = s - s % 5;
            f = (r & (1 << y) - 1).toString(32),
            r >>= y,
            s -= y,
            nn = 1 << 32 - mt(t) + s | a << s | r,
            an = f + e
        } else
            nn = 1 << f | a << s | r,
            an = e
    }
    function cs(e) {
        e.return !== null && (ra(e, 1),
        xh(e, 1, 0))
    }
    function fs(e) {
        for (; e === ol; )
            ol = Pa[--Fa],
            Pa[Fa] = null,
            sl = Pa[--Fa],
            Pa[Fa] = null;
        for (; e === ia; )
            ia = Ct[--Nt],
            Ct[Nt] = null,
            an = Ct[--Nt],
            Ct[Nt] = null,
            nn = Ct[--Nt],
            Ct[Nt] = null
    }
    var it = null
      , Ee = null
      , pe = !1
      , la = null
      , Ut = !1
      , hs = Error(o(519));
    function oa(e) {
        var t = Error(o(418, ""));
        throw zi(jt(t, e)),
        hs
    }
    function Sh(e) {
        var t = e.stateNode
          , a = e.type
          , r = e.memoizedProps;
        switch (t[et] = e,
        t[lt] = r,
        a) {
        case "dialog":
            fe("cancel", t),
            fe("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            fe("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < lr.length; a++)
                fe(lr[a], t);
            break;
        case "source":
            fe("error", t);
            break;
        case "img":
        case "image":
        case "link":
            fe("error", t),
            fe("load", t);
            break;
        case "details":
            fe("toggle", t);
            break;
        case "input":
            fe("invalid", t),
            zf(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0),
            Jr(t);
            break;
        case "select":
            fe("invalid", t);
            break;
        case "textarea":
            fe("invalid", t),
            Pf(t, r.value, r.defaultValue, r.children),
            Jr(t)
        }
        a = r.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || r.suppressHydrationWarning === !0 || Pm(t.textContent, a) ? (r.popover != null && (fe("beforetoggle", t),
        fe("toggle", t)),
        r.onScroll != null && fe("scroll", t),
        r.onScrollEnd != null && fe("scrollend", t),
        r.onClick != null && (t.onclick = _l),
        t = !0) : t = !1,
        t || oa(e)
    }
    function Ah(e) {
        for (it = e.return; it; )
            switch (it.tag) {
            case 5:
            case 13:
                Ut = !1;
                return;
            case 27:
            case 3:
                Ut = !0;
                return;
            default:
                it = it.return
            }
    }
    function Yi(e) {
        if (e !== it)
            return !1;
        if (!pe)
            return Ah(e),
            pe = !0,
            !1;
        var t = e.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type,
        a = !(a !== "form" && a !== "button") || wu(e.type, e.memoizedProps)),
        a = !a),
        a && Ee && oa(e),
        Ah(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(o(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8)
                        if (a = e.data,
                        a === "/$") {
                            if (t === 0) {
                                Ee = zt(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || t++;
                    e = e.nextSibling
                }
                Ee = null
            }
        } else
            t === 27 ? (t = Ee,
            Vn(e.type) ? (e = Lu,
            Lu = null,
            Ee = e) : Ee = t) : Ee = it ? zt(e.stateNode.nextSibling) : null;
        return !0
    }
    function Bi() {
        Ee = it = null,
        pe = !1
    }
    function Dh() {
        var e = la;
        return e !== null && (ct === null ? ct = e : ct.push.apply(ct, e),
        la = null),
        e
    }
    function zi(e) {
        la === null ? la = [e] : la.push(e)
    }
    var ds = U(null)
      , sa = null
      , rn = null;
    function Cn(e, t, a) {
        G(ds, t._currentValue),
        t._currentValue = a
    }
    function ln(e) {
        e._currentValue = ds.current,
        k(ds)
    }
    function ms(e, t, a) {
        for (; e !== null; ) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === a)
                break;
            e = e.return
        }
    }
    function gs(e, t, a, r) {
        var s = e.child;
        for (s !== null && (s.return = e); s !== null; ) {
            var f = s.dependencies;
            if (f !== null) {
                var y = s.child;
                f = f.firstContext;
                e: for (; f !== null; ) {
                    var v = f;
                    f = s;
                    for (var S = 0; S < t.length; S++)
                        if (v.context === t[S]) {
                            f.lanes |= a,
                            v = f.alternate,
                            v !== null && (v.lanes |= a),
                            ms(f.return, a, e),
                            r || (y = null);
                            break e
                        }
                    f = v.next
                }
            } else if (s.tag === 18) {
                if (y = s.return,
                y === null)
                    throw Error(o(341));
                y.lanes |= a,
                f = y.alternate,
                f !== null && (f.lanes |= a),
                ms(y, a, e),
                y = null
            } else
                y = s.child;
            if (y !== null)
                y.return = s;
            else
                for (y = s; y !== null; ) {
                    if (y === e) {
                        y = null;
                        break
                    }
                    if (s = y.sibling,
                    s !== null) {
                        s.return = y.return,
                        y = s;
                        break
                    }
                    y = y.return
                }
            s = y
        }
    }
    function Oi(e, t, a, r) {
        e = null;
        for (var s = t, f = !1; s !== null; ) {
            if (!f) {
                if ((s.flags & 524288) !== 0)
                    f = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var y = s.alternate;
                if (y === null)
                    throw Error(o(387));
                if (y = y.memoizedProps,
                y !== null) {
                    var v = s.type;
                    gt(s.pendingProps.value, y.value) || (e !== null ? e.push(v) : e = [v])
                }
            } else if (s === ht.current) {
                if (y = s.alternate,
                y === null)
                    throw Error(o(387));
                y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(hr) : e = [hr])
            }
            s = s.return
        }
        e !== null && gs(t, e, a, r),
        t.flags |= 262144
    }
    function ul(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!gt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function ua(e) {
        sa = e,
        rn = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function tt(e) {
        return jh(sa, e)
    }
    function cl(e, t) {
        return sa === null && ua(e),
        jh(e, t)
    }
    function jh(e, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
        rn === null) {
            if (e === null)
                throw Error(o(308));
            rn = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            rn = rn.next = t;
        return a
    }
    var W1 = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(a, r) {
                e.push(r)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(a) {
                return a()
            })
        }
    }
      , Z1 = n.unstable_scheduleCallback
      , G1 = n.unstable_NormalPriority
      , We = {
        $$typeof: V,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function ps() {
        return {
            controller: new W1,
            data: new Map,
            refCount: 0
        }
    }
    function Pi(e) {
        e.refCount--,
        e.refCount === 0 && Z1(G1, function() {
            e.controller.abort()
        })
    }
    var Fi = null
      , ys = 0
      , Ua = 0
      , Va = null;
    function k1(e, t) {
        if (Fi === null) {
            var a = Fi = [];
            ys = 0,
            Ua = vu(),
            Va = {
                status: "pending",
                value: void 0,
                then: function(r) {
                    a.push(r)
                }
            }
        }
        return ys++,
        t.then(Th, Th),
        t
    }
    function Th() {
        if (--ys === 0 && Fi !== null) {
            Va !== null && (Va.status = "fulfilled");
            var e = Fi;
            Fi = null,
            Ua = 0,
            Va = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function X1(e, t) {
        var a = []
          , r = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                a.push(s)
            }
        };
        return e.then(function() {
            r.status = "fulfilled",
            r.value = t;
            for (var s = 0; s < a.length; s++)
                (0,
                a[s])(t)
        }, function(s) {
            for (r.status = "rejected",
            r.reason = s,
            s = 0; s < a.length; s++)
                (0,
                a[s])(void 0)
        }),
        r
    }
    var Ch = B.S;
    B.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && k1(e, t),
        Ch !== null && Ch(e, t)
    }
    ;
    var ca = U(null);
    function bs() {
        var e = ca.current;
        return e !== null ? e : je.pooledCache
    }
    function fl(e, t) {
        t === null ? G(ca, ca.current) : G(ca, t.pool)
    }
    function Nh() {
        var e = bs();
        return e === null ? null : {
            parent: We._currentValue,
            pool: e
        }
    }
    var Ui = Error(o(460))
      , wh = Error(o(474))
      , hl = Error(o(542))
      , vs = {
        then: function() {}
    };
    function Mh(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function dl() {}
    function Rh(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(dl, dl),
        t = a),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Lh(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(dl, dl);
            else {
                if (e = je,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(o(482));
                e = t,
                e.status = "pending",
                e.then(function(r) {
                    if (t.status === "pending") {
                        var s = t;
                        s.status = "fulfilled",
                        s.value = r
                    }
                }, function(r) {
                    if (t.status === "pending") {
                        var s = t;
                        s.status = "rejected",
                        s.reason = r
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Lh(e),
                e
            }
            throw Vi = t,
            Ui
        }
    }
    var Vi = null;
    function Eh() {
        if (Vi === null)
            throw Error(o(459));
        var e = Vi;
        return Vi = null,
        e
    }
    function Lh(e) {
        if (e === Ui || e === hl)
            throw Error(o(483))
    }
    var Nn = !1;
    function xs(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Ss(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function wn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Mn(e, t, a) {
        var r = e.updateQueue;
        if (r === null)
            return null;
        if (r = r.shared,
        (ye & 2) !== 0) {
            var s = r.pending;
            return s === null ? t.next = t : (t.next = s.next,
            s.next = t),
            r.pending = t,
            t = rl(e),
            bh(e, null, a),
            t
        }
        return il(e, r, t, a),
        rl(e)
    }
    function _i(e, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes,
            a |= r,
            t.lanes = a,
            Tf(e, a)
        }
    }
    function As(e, t) {
        var a = e.updateQueue
          , r = e.alternate;
        if (r !== null && (r = r.updateQueue,
        a === r)) {
            var s = null
              , f = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var y = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    f === null ? s = f = y : f = f.next = y,
                    a = a.next
                } while (a !== null);
                f === null ? s = f = t : f = f.next = t
            } else
                s = f = t;
            a = {
                baseState: r.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: f,
                shared: r.shared,
                callbacks: r.callbacks
            },
            e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate,
        e === null ? a.firstBaseUpdate = t : e.next = t,
        a.lastBaseUpdate = t
    }
    var Ds = !1;
    function Wi() {
        if (Ds) {
            var e = Va;
            if (e !== null)
                throw e
        }
    }
    function Zi(e, t, a, r) {
        Ds = !1;
        var s = e.updateQueue;
        Nn = !1;
        var f = s.firstBaseUpdate
          , y = s.lastBaseUpdate
          , v = s.shared.pending;
        if (v !== null) {
            s.shared.pending = null;
            var S = v
              , N = S.next;
            S.next = null,
            y === null ? f = N : y.next = N,
            y = S;
            var Y = e.alternate;
            Y !== null && (Y = Y.updateQueue,
            v = Y.lastBaseUpdate,
            v !== y && (v === null ? Y.firstBaseUpdate = N : v.next = N,
            Y.lastBaseUpdate = S))
        }
        if (f !== null) {
            var O = s.baseState;
            y = 0,
            Y = N = S = null,
            v = f;
            do {
                var M = v.lane & -536870913
                  , R = M !== v.lane;
                if (R ? (de & M) === M : (r & M) === M) {
                    M !== 0 && M === Ua && (Ds = !0),
                    Y !== null && (Y = Y.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var te = e
                          , $ = v;
                        M = t;
                        var Se = a;
                        switch ($.tag) {
                        case 1:
                            if (te = $.payload,
                            typeof te == "function") {
                                O = te.call(Se, O, M);
                                break e
                            }
                            O = te;
                            break e;
                        case 3:
                            te.flags = te.flags & -65537 | 128;
                        case 0:
                            if (te = $.payload,
                            M = typeof te == "function" ? te.call(Se, O, M) : te,
                            M == null)
                                break e;
                            O = b({}, O, M);
                            break e;
                        case 2:
                            Nn = !0
                        }
                    }
                    M = v.callback,
                    M !== null && (e.flags |= 64,
                    R && (e.flags |= 8192),
                    R = s.callbacks,
                    R === null ? s.callbacks = [M] : R.push(M))
                } else
                    R = {
                        lane: M,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                    Y === null ? (N = Y = R,
                    S = O) : Y = Y.next = R,
                    y |= M;
                if (v = v.next,
                v === null) {
                    if (v = s.shared.pending,
                    v === null)
                        break;
                    R = v,
                    v = R.next,
                    R.next = null,
                    s.lastBaseUpdate = R,
                    s.shared.pending = null
                }
            } while (!0);
            Y === null && (S = O),
            s.baseState = S,
            s.firstBaseUpdate = N,
            s.lastBaseUpdate = Y,
            f === null && (s.shared.lanes = 0),
            On |= y,
            e.lanes = y,
            e.memoizedState = O
        }
    }
    function Hh(e, t) {
        if (typeof e != "function")
            throw Error(o(191, e));
        e.call(t)
    }
    function Yh(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
            e = 0; e < a.length; e++)
                Hh(a[e], t)
    }
    var _a = U(null)
      , ml = U(0);
    function Bh(e, t) {
        e = dn,
        G(ml, e),
        G(_a, t),
        dn = e | t.baseLanes
    }
    function js() {
        G(ml, dn),
        G(_a, _a.current)
    }
    function Ts() {
        dn = ml.current,
        k(_a),
        k(ml)
    }
    var Rn = 0
      , oe = null
      , ve = null
      , Oe = null
      , gl = !1
      , Wa = !1
      , fa = !1
      , pl = 0
      , Gi = 0
      , Za = null
      , J1 = 0;
    function Ye() {
        throw Error(o(321))
    }
    function Cs(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!gt(e[a], t[a]))
                return !1;
        return !0
    }
    function Ns(e, t, a, r, s, f) {
        return Rn = f,
        oe = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        B.H = e === null || e.memoizedState === null ? bd : vd,
        fa = !1,
        f = a(r, s),
        fa = !1,
        Wa && (f = Oh(t, a, r, s)),
        zh(e),
        f
    }
    function zh(e) {
        B.H = Al;
        var t = ve !== null && ve.next !== null;
        if (Rn = 0,
        Oe = ve = oe = null,
        gl = !1,
        Gi = 0,
        Za = null,
        t)
            throw Error(o(300));
        e === null || ke || (e = e.dependencies,
        e !== null && ul(e) && (ke = !0))
    }
    function Oh(e, t, a, r) {
        oe = e;
        var s = 0;
        do {
            if (Wa && (Za = null),
            Gi = 0,
            Wa = !1,
            25 <= s)
                throw Error(o(301));
            if (s += 1,
            Oe = ve = null,
            e.updateQueue != null) {
                var f = e.updateQueue;
                f.lastEffect = null,
                f.events = null,
                f.stores = null,
                f.memoCache != null && (f.memoCache.index = 0)
            }
            B.H = t2,
            f = t(a, r)
        } while (Wa);
        return f
    }
    function q1() {
        var e = B.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? ki(t) : t,
        e = e.useState()[0],
        (ve !== null ? ve.memoizedState : null) !== e && (oe.flags |= 1024),
        t
    }
    function ws() {
        var e = pl !== 0;
        return pl = 0,
        e
    }
    function Ms(e, t, a) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a
    }
    function Rs(e) {
        if (gl) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            gl = !1
        }
        Rn = 0,
        Oe = ve = oe = null,
        Wa = !1,
        Gi = pl = 0,
        Za = null
    }
    function st() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Oe === null ? oe.memoizedState = Oe = e : Oe = Oe.next = e,
        Oe
    }
    function Pe() {
        if (ve === null) {
            var e = oe.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = ve.next;
        var t = Oe === null ? oe.memoizedState : Oe.next;
        if (t !== null)
            Oe = t,
            ve = e;
        else {
            if (e === null)
                throw oe.alternate === null ? Error(o(467)) : Error(o(310));
            ve = e,
            e = {
                memoizedState: ve.memoizedState,
                baseState: ve.baseState,
                baseQueue: ve.baseQueue,
                queue: ve.queue,
                next: null
            },
            Oe === null ? oe.memoizedState = Oe = e : Oe = Oe.next = e
        }
        return Oe
    }
    function Es() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function ki(e) {
        var t = Gi;
        return Gi += 1,
        Za === null && (Za = []),
        e = Rh(Za, e, t),
        t = oe,
        (Oe === null ? t.memoizedState : Oe.next) === null && (t = t.alternate,
        B.H = t === null || t.memoizedState === null ? bd : vd),
        e
    }
    function yl(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return ki(e);
            if (e.$$typeof === V)
                return tt(e)
        }
        throw Error(o(438, String(e)))
    }
    function Ls(e) {
        var t = null
          , a = oe.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var r = oe.alternate;
            r !== null && (r = r.updateQueue,
            r !== null && (r = r.memoCache,
            r != null && (t = {
                data: r.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        a === null && (a = Es(),
        oe.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(e),
            r = 0; r < e; r++)
                a[r] = De;
        return t.index++,
        a
    }
    function on(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function bl(e) {
        var t = Pe();
        return Hs(t, ve, e)
    }
    function Hs(e, t, a) {
        var r = e.queue;
        if (r === null)
            throw Error(o(311));
        r.lastRenderedReducer = a;
        var s = e.baseQueue
          , f = r.pending;
        if (f !== null) {
            if (s !== null) {
                var y = s.next;
                s.next = f.next,
                f.next = y
            }
            t.baseQueue = s = f,
            r.pending = null
        }
        if (f = e.baseState,
        s === null)
            e.memoizedState = f;
        else {
            t = s.next;
            var v = y = null
              , S = null
              , N = t
              , Y = !1;
            do {
                var O = N.lane & -536870913;
                if (O !== N.lane ? (de & O) === O : (Rn & O) === O) {
                    var M = N.revertLane;
                    if (M === 0)
                        S !== null && (S = S.next = {
                            lane: 0,
                            revertLane: 0,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        }),
                        O === Ua && (Y = !0);
                    else if ((Rn & M) === M) {
                        N = N.next,
                        M === Ua && (Y = !0);
                        continue
                    } else
                        O = {
                            lane: 0,
                            revertLane: N.revertLane,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        },
                        S === null ? (v = S = O,
                        y = f) : S = S.next = O,
                        oe.lanes |= M,
                        On |= M;
                    O = N.action,
                    fa && a(f, O),
                    f = N.hasEagerState ? N.eagerState : a(f, O)
                } else
                    M = {
                        lane: O,
                        revertLane: N.revertLane,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    },
                    S === null ? (v = S = M,
                    y = f) : S = S.next = M,
                    oe.lanes |= O,
                    On |= O;
                N = N.next
            } while (N !== null && N !== t);
            if (S === null ? y = f : S.next = v,
            !gt(f, e.memoizedState) && (ke = !0,
            Y && (a = Va,
            a !== null)))
                throw a;
            e.memoizedState = f,
            e.baseState = y,
            e.baseQueue = S,
            r.lastRenderedState = f
        }
        return s === null && (r.lanes = 0),
        [e.memoizedState, r.dispatch]
    }
    function Ys(e) {
        var t = Pe()
          , a = t.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = e;
        var r = a.dispatch
          , s = a.pending
          , f = t.memoizedState;
        if (s !== null) {
            a.pending = null;
            var y = s = s.next;
            do
                f = e(f, y.action),
                y = y.next;
            while (y !== s);
            gt(f, t.memoizedState) || (ke = !0),
            t.memoizedState = f,
            t.baseQueue === null && (t.baseState = f),
            a.lastRenderedState = f
        }
        return [f, r]
    }
    function Ph(e, t, a) {
        var r = oe
          , s = Pe()
          , f = pe;
        if (f) {
            if (a === void 0)
                throw Error(o(407));
            a = a()
        } else
            a = t();
        var y = !gt((ve || s).memoizedState, a);
        y && (s.memoizedState = a,
        ke = !0),
        s = s.queue;
        var v = Vh.bind(null, r, s, e);
        if (Xi(2048, 8, v, [e]),
        s.getSnapshot !== t || y || Oe !== null && Oe.memoizedState.tag & 1) {
            if (r.flags |= 2048,
            Ga(9, vl(), Uh.bind(null, r, s, a, t), null),
            je === null)
                throw Error(o(349));
            f || (Rn & 124) !== 0 || Fh(r, t, a)
        }
        return a
    }
    function Fh(e, t, a) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: a
        },
        t = oe.updateQueue,
        t === null ? (t = Es(),
        oe.updateQueue = t,
        t.stores = [e]) : (a = t.stores,
        a === null ? t.stores = [e] : a.push(e))
    }
    function Uh(e, t, a, r) {
        t.value = a,
        t.getSnapshot = r,
        _h(t) && Wh(e)
    }
    function Vh(e, t, a) {
        return a(function() {
            _h(t) && Wh(e)
        })
    }
    function _h(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !gt(e, a)
        } catch {
            return !0
        }
    }
    function Wh(e) {
        var t = za(e, 2);
        t !== null && St(t, e, 2)
    }
    function Bs(e) {
        var t = st();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
            fa) {
                Dn(!0);
                try {
                    a()
                } finally {
                    Dn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: on,
            lastRenderedState: e
        },
        t
    }
    function Zh(e, t, a, r) {
        return e.baseState = a,
        Hs(e, ve, typeof r == "function" ? r : on)
    }
    function I1(e, t, a, r, s) {
        if (Sl(e))
            throw Error(o(485));
        if (e = t.action,
        e !== null) {
            var f = {
                payload: s,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(y) {
                    f.listeners.push(y)
                }
            };
            B.T !== null ? a(!0) : f.isTransition = !1,
            r(f),
            a = t.pending,
            a === null ? (f.next = t.pending = f,
            Gh(t, f)) : (f.next = a.next,
            t.pending = a.next = f)
        }
    }
    function Gh(e, t) {
        var a = t.action
          , r = t.payload
          , s = e.state;
        if (t.isTransition) {
            var f = B.T
              , y = {};
            B.T = y;
            try {
                var v = a(s, r)
                  , S = B.S;
                S !== null && S(y, v),
                kh(e, t, v)
            } catch (N) {
                zs(e, t, N)
            } finally {
                B.T = f
            }
        } else
            try {
                f = a(s, r),
                kh(e, t, f)
            } catch (N) {
                zs(e, t, N)
            }
    }
    function kh(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(r) {
            Xh(e, t, r)
        }, function(r) {
            return zs(e, t, r)
        }) : Xh(e, t, a)
    }
    function Xh(e, t, a) {
        t.status = "fulfilled",
        t.value = a,
        Jh(t),
        e.state = a,
        t = e.pending,
        t !== null && (a = t.next,
        a === t ? e.pending = null : (a = a.next,
        t.next = a,
        Gh(e, a)))
    }
    function zs(e, t, a) {
        var r = e.pending;
        if (e.pending = null,
        r !== null) {
            r = r.next;
            do
                t.status = "rejected",
                t.reason = a,
                Jh(t),
                t = t.next;
            while (t !== r)
        }
        e.action = null
    }
    function Jh(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function qh(e, t) {
        return t
    }
    function Ih(e, t) {
        if (pe) {
            var a = je.formState;
            if (a !== null) {
                e: {
                    var r = oe;
                    if (pe) {
                        if (Ee) {
                            t: {
                                for (var s = Ee, f = Ut; s.nodeType !== 8; ) {
                                    if (!f) {
                                        s = null;
                                        break t
                                    }
                                    if (s = zt(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break t
                                    }
                                }
                                f = s.data,
                                s = f === "F!" || f === "F" ? s : null
                            }
                            if (s) {
                                Ee = zt(s.nextSibling),
                                r = s.data === "F!";
                                break e
                            }
                        }
                        oa(r)
                    }
                    r = !1
                }
                r && (t = a[0])
            }
        }
        return a = st(),
        a.memoizedState = a.baseState = t,
        r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: qh,
            lastRenderedState: t
        },
        a.queue = r,
        a = gd.bind(null, oe, r),
        r.dispatch = a,
        r = Bs(!1),
        f = Vs.bind(null, oe, !1, r.queue),
        r = st(),
        s = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        r.queue = s,
        a = I1.bind(null, oe, s, f, a),
        s.dispatch = a,
        r.memoizedState = e,
        [t, a, !1]
    }
    function Kh(e) {
        var t = Pe();
        return Qh(t, ve, e)
    }
    function Qh(e, t, a) {
        if (t = Hs(e, t, qh)[0],
        e = bl(on)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var r = ki(t)
            } catch (y) {
                throw y === Ui ? hl : y
            }
        else
            r = t;
        t = Pe();
        var s = t.queue
          , f = s.dispatch;
        return a !== t.memoizedState && (oe.flags |= 2048,
        Ga(9, vl(), K1.bind(null, s, a), null)),
        [r, f, e]
    }
    function K1(e, t) {
        e.action = t
    }
    function $h(e) {
        var t = Pe()
          , a = ve;
        if (a !== null)
            return Qh(t, a, e);
        Pe(),
        t = t.memoizedState,
        a = Pe();
        var r = a.queue.dispatch;
        return a.memoizedState = e,
        [t, r, !1]
    }
    function Ga(e, t, a, r) {
        return e = {
            tag: e,
            create: a,
            deps: r,
            inst: t,
            next: null
        },
        t = oe.updateQueue,
        t === null && (t = Es(),
        oe.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = e.next = e : (r = a.next,
        a.next = e,
        e.next = r,
        t.lastEffect = e),
        e
    }
    function vl() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function ed() {
        return Pe().memoizedState
    }
    function xl(e, t, a, r) {
        var s = st();
        r = r === void 0 ? null : r,
        oe.flags |= e,
        s.memoizedState = Ga(1 | t, vl(), a, r)
    }
    function Xi(e, t, a, r) {
        var s = Pe();
        r = r === void 0 ? null : r;
        var f = s.memoizedState.inst;
        ve !== null && r !== null && Cs(r, ve.memoizedState.deps) ? s.memoizedState = Ga(t, f, a, r) : (oe.flags |= e,
        s.memoizedState = Ga(1 | t, f, a, r))
    }
    function td(e, t) {
        xl(8390656, 8, e, t)
    }
    function nd(e, t) {
        Xi(2048, 8, e, t)
    }
    function ad(e, t) {
        return Xi(4, 2, e, t)
    }
    function id(e, t) {
        return Xi(4, 4, e, t)
    }
    function rd(e, t) {
        if (typeof t == "function") {
            e = e();
            var a = t(e);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function ld(e, t, a) {
        a = a != null ? a.concat([e]) : null,
        Xi(4, 4, rd.bind(null, t, e), a)
    }
    function Os() {}
    function od(e, t) {
        var a = Pe();
        t = t === void 0 ? null : t;
        var r = a.memoizedState;
        return t !== null && Cs(t, r[1]) ? r[0] : (a.memoizedState = [e, t],
        e)
    }
    function sd(e, t) {
        var a = Pe();
        t = t === void 0 ? null : t;
        var r = a.memoizedState;
        if (t !== null && Cs(t, r[1]))
            return r[0];
        if (r = e(),
        fa) {
            Dn(!0);
            try {
                e()
            } finally {
                Dn(!1)
            }
        }
        return a.memoizedState = [r, t],
        r
    }
    function Ps(e, t, a) {
        return a === void 0 || (Rn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a,
        e = fm(),
        oe.lanes |= e,
        On |= e,
        a)
    }
    function ud(e, t, a, r) {
        return gt(a, t) ? a : _a.current !== null ? (e = Ps(e, a, r),
        gt(e, t) || (ke = !0),
        e) : (Rn & 42) === 0 ? (ke = !0,
        e.memoizedState = a) : (e = fm(),
        oe.lanes |= e,
        On |= e,
        t)
    }
    function cd(e, t, a, r, s) {
        var f = W.p;
        W.p = f !== 0 && 8 > f ? f : 8;
        var y = B.T
          , v = {};
        B.T = v,
        Vs(e, !1, t, a);
        try {
            var S = s()
              , N = B.S;
            if (N !== null && N(v, S),
            S !== null && typeof S == "object" && typeof S.then == "function") {
                var Y = X1(S, r);
                Ji(e, t, Y, xt(e))
            } else
                Ji(e, t, r, xt(e))
        } catch (O) {
            Ji(e, t, {
                then: function() {},
                status: "rejected",
                reason: O
            }, xt())
        } finally {
            W.p = f,
            B.T = y
        }
    }
    function Q1() {}
    function Fs(e, t, a, r) {
        if (e.tag !== 5)
            throw Error(o(476));
        var s = fd(e).queue;
        cd(e, s, t, J, a === null ? Q1 : function() {
            return hd(e),
            a(r)
        }
        )
    }
    function fd(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: J,
            baseState: J,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: on,
                lastRenderedState: J
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: on,
                lastRenderedState: a
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function hd(e) {
        var t = fd(e).next.queue;
        Ji(e, t, {}, xt())
    }
    function Us() {
        return tt(hr)
    }
    function dd() {
        return Pe().memoizedState
    }
    function md() {
        return Pe().memoizedState
    }
    function $1(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = xt();
                e = wn(a);
                var r = Mn(t, e, a);
                r !== null && (St(r, t, a),
                _i(r, t, a)),
                t = {
                    cache: ps()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function e2(e, t, a) {
        var r = xt();
        a = {
            lane: r,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Sl(e) ? pd(t, a) : (a = ls(e, t, a, r),
        a !== null && (St(a, e, r),
        yd(a, t, r)))
    }
    function gd(e, t, a) {
        var r = xt();
        Ji(e, t, a, r)
    }
    function Ji(e, t, a, r) {
        var s = {
            lane: r,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Sl(e))
            pd(t, s);
        else {
            var f = e.alternate;
            if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer,
            f !== null))
                try {
                    var y = t.lastRenderedState
                      , v = f(y, a);
                    if (s.hasEagerState = !0,
                    s.eagerState = v,
                    gt(v, y))
                        return il(e, t, s, 0),
                        je === null && al(),
                        !1
                } catch {} finally {}
            if (a = ls(e, t, s, r),
            a !== null)
                return St(a, e, r),
                yd(a, t, r),
                !0
        }
        return !1
    }
    function Vs(e, t, a, r) {
        if (r = {
            lane: 2,
            revertLane: vu(),
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Sl(e)) {
            if (t)
                throw Error(o(479))
        } else
            t = ls(e, a, r, 2),
            t !== null && St(t, e, 2)
    }
    function Sl(e) {
        var t = e.alternate;
        return e === oe || t !== null && t === oe
    }
    function pd(e, t) {
        Wa = gl = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        e.pending = t
    }
    function yd(e, t, a) {
        if ((a & 4194048) !== 0) {
            var r = t.lanes;
            r &= e.pendingLanes,
            a |= r,
            t.lanes = a,
            Tf(e, a)
        }
    }
    var Al = {
        readContext: tt,
        use: yl,
        useCallback: Ye,
        useContext: Ye,
        useEffect: Ye,
        useImperativeHandle: Ye,
        useLayoutEffect: Ye,
        useInsertionEffect: Ye,
        useMemo: Ye,
        useReducer: Ye,
        useRef: Ye,
        useState: Ye,
        useDebugValue: Ye,
        useDeferredValue: Ye,
        useTransition: Ye,
        useSyncExternalStore: Ye,
        useId: Ye,
        useHostTransitionStatus: Ye,
        useFormState: Ye,
        useActionState: Ye,
        useOptimistic: Ye,
        useMemoCache: Ye,
        useCacheRefresh: Ye
    }
      , bd = {
        readContext: tt,
        use: yl,
        useCallback: function(e, t) {
            return st().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: tt,
        useEffect: td,
        useImperativeHandle: function(e, t, a) {
            a = a != null ? a.concat([e]) : null,
            xl(4194308, 4, rd.bind(null, t, e), a)
        },
        useLayoutEffect: function(e, t) {
            return xl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            xl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var a = st();
            t = t === void 0 ? null : t;
            var r = e();
            if (fa) {
                Dn(!0);
                try {
                    e()
                } finally {
                    Dn(!1)
                }
            }
            return a.memoizedState = [r, t],
            r
        },
        useReducer: function(e, t, a) {
            var r = st();
            if (a !== void 0) {
                var s = a(t);
                if (fa) {
                    Dn(!0);
                    try {
                        a(t)
                    } finally {
                        Dn(!1)
                    }
                }
            } else
                s = t;
            return r.memoizedState = r.baseState = s,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: s
            },
            r.queue = e,
            e = e.dispatch = e2.bind(null, oe, e),
            [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = st();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = Bs(e);
            var t = e.queue
              , a = gd.bind(null, oe, t);
            return t.dispatch = a,
            [e.memoizedState, a]
        },
        useDebugValue: Os,
        useDeferredValue: function(e, t) {
            var a = st();
            return Ps(a, e, t)
        },
        useTransition: function() {
            var e = Bs(!1);
            return e = cd.bind(null, oe, e.queue, !0, !1),
            st().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, a) {
            var r = oe
              , s = st();
            if (pe) {
                if (a === void 0)
                    throw Error(o(407));
                a = a()
            } else {
                if (a = t(),
                je === null)
                    throw Error(o(349));
                (de & 124) !== 0 || Fh(r, t, a)
            }
            s.memoizedState = a;
            var f = {
                value: a,
                getSnapshot: t
            };
            return s.queue = f,
            td(Vh.bind(null, r, f, e), [e]),
            r.flags |= 2048,
            Ga(9, vl(), Uh.bind(null, r, f, a, t), null),
            a
        },
        useId: function() {
            var e = st()
              , t = je.identifierPrefix;
            if (pe) {
                var a = an
                  , r = nn;
                a = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + a,
                t = "«" + t + "R" + a,
                a = pl++,
                0 < a && (t += "H" + a.toString(32)),
                t += "»"
            } else
                a = J1++,
                t = "«" + t + "r" + a.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: Us,
        useFormState: Ih,
        useActionState: Ih,
        useOptimistic: function(e) {
            var t = st();
            t.memoizedState = t.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = Vs.bind(null, oe, !0, a),
            a.dispatch = t,
            [e, t]
        },
        useMemoCache: Ls,
        useCacheRefresh: function() {
            return st().memoizedState = $1.bind(null, oe)
        }
    }
      , vd = {
        readContext: tt,
        use: yl,
        useCallback: od,
        useContext: tt,
        useEffect: nd,
        useImperativeHandle: ld,
        useInsertionEffect: ad,
        useLayoutEffect: id,
        useMemo: sd,
        useReducer: bl,
        useRef: ed,
        useState: function() {
            return bl(on)
        },
        useDebugValue: Os,
        useDeferredValue: function(e, t) {
            var a = Pe();
            return ud(a, ve.memoizedState, e, t)
        },
        useTransition: function() {
            var e = bl(on)[0]
              , t = Pe().memoizedState;
            return [typeof e == "boolean" ? e : ki(e), t]
        },
        useSyncExternalStore: Ph,
        useId: dd,
        useHostTransitionStatus: Us,
        useFormState: Kh,
        useActionState: Kh,
        useOptimistic: function(e, t) {
            var a = Pe();
            return Zh(a, ve, e, t)
        },
        useMemoCache: Ls,
        useCacheRefresh: md
    }
      , t2 = {
        readContext: tt,
        use: yl,
        useCallback: od,
        useContext: tt,
        useEffect: nd,
        useImperativeHandle: ld,
        useInsertionEffect: ad,
        useLayoutEffect: id,
        useMemo: sd,
        useReducer: Ys,
        useRef: ed,
        useState: function() {
            return Ys(on)
        },
        useDebugValue: Os,
        useDeferredValue: function(e, t) {
            var a = Pe();
            return ve === null ? Ps(a, e, t) : ud(a, ve.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Ys(on)[0]
              , t = Pe().memoizedState;
            return [typeof e == "boolean" ? e : ki(e), t]
        },
        useSyncExternalStore: Ph,
        useId: dd,
        useHostTransitionStatus: Us,
        useFormState: $h,
        useActionState: $h,
        useOptimistic: function(e, t) {
            var a = Pe();
            return ve !== null ? Zh(a, ve, e, t) : (a.baseState = e,
            [e, a.queue.dispatch])
        },
        useMemoCache: Ls,
        useCacheRefresh: md
    }
      , ka = null
      , qi = 0;
    function Dl(e) {
        var t = qi;
        return qi += 1,
        ka === null && (ka = []),
        Rh(ka, e, t)
    }
    function Ii(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function jl(e, t) {
        throw t.$$typeof === x ? Error(o(525)) : (e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function xd(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Sd(e) {
        function t(T, j) {
            if (e) {
                var C = T.deletions;
                C === null ? (T.deletions = [j],
                T.flags |= 16) : C.push(j)
            }
        }
        function a(T, j) {
            if (!e)
                return null;
            for (; j !== null; )
                t(T, j),
                j = j.sibling;
            return null
        }
        function r(T) {
            for (var j = new Map; T !== null; )
                T.key !== null ? j.set(T.key, T) : j.set(T.index, T),
                T = T.sibling;
            return j
        }
        function s(T, j) {
            return T = tn(T, j),
            T.index = 0,
            T.sibling = null,
            T
        }
        function f(T, j, C) {
            return T.index = C,
            e ? (C = T.alternate,
            C !== null ? (C = C.index,
            C < j ? (T.flags |= 67108866,
            j) : C) : (T.flags |= 67108866,
            j)) : (T.flags |= 1048576,
            j)
        }
        function y(T) {
            return e && T.alternate === null && (T.flags |= 67108866),
            T
        }
        function v(T, j, C, z) {
            return j === null || j.tag !== 6 ? (j = ss(C, T.mode, z),
            j.return = T,
            j) : (j = s(j, C),
            j.return = T,
            j)
        }
        function S(T, j, C, z) {
            var X = C.type;
            return X === H ? Y(T, j, C.props.children, z, C.key) : j !== null && (j.elementType === X || typeof X == "object" && X !== null && X.$$typeof === K && xd(X) === j.type) ? (j = s(j, C.props),
            Ii(j, C),
            j.return = T,
            j) : (j = ll(C.type, C.key, C.props, null, T.mode, z),
            Ii(j, C),
            j.return = T,
            j)
        }
        function N(T, j, C, z) {
            return j === null || j.tag !== 4 || j.stateNode.containerInfo !== C.containerInfo || j.stateNode.implementation !== C.implementation ? (j = us(C, T.mode, z),
            j.return = T,
            j) : (j = s(j, C.children || []),
            j.return = T,
            j)
        }
        function Y(T, j, C, z, X) {
            return j === null || j.tag !== 7 ? (j = aa(C, T.mode, z, X),
            j.return = T,
            j) : (j = s(j, C),
            j.return = T,
            j)
        }
        function O(T, j, C) {
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
                return j = ss("" + j, T.mode, C),
                j.return = T,
                j;
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case A:
                    return C = ll(j.type, j.key, j.props, null, T.mode, C),
                    Ii(C, j),
                    C.return = T,
                    C;
                case E:
                    return j = us(j, T.mode, C),
                    j.return = T,
                    j;
                case K:
                    var z = j._init;
                    return j = z(j._payload),
                    O(T, j, C)
                }
                if (_e(j) || Ve(j))
                    return j = aa(j, T.mode, C, null),
                    j.return = T,
                    j;
                if (typeof j.then == "function")
                    return O(T, Dl(j), C);
                if (j.$$typeof === V)
                    return O(T, cl(T, j), C);
                jl(T, j)
            }
            return null
        }
        function M(T, j, C, z) {
            var X = j !== null ? j.key : null;
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
                return X !== null ? null : v(T, j, "" + C, z);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case A:
                    return C.key === X ? S(T, j, C, z) : null;
                case E:
                    return C.key === X ? N(T, j, C, z) : null;
                case K:
                    return X = C._init,
                    C = X(C._payload),
                    M(T, j, C, z)
                }
                if (_e(C) || Ve(C))
                    return X !== null ? null : Y(T, j, C, z, null);
                if (typeof C.then == "function")
                    return M(T, j, Dl(C), z);
                if (C.$$typeof === V)
                    return M(T, j, cl(T, C), z);
                jl(T, C)
            }
            return null
        }
        function R(T, j, C, z, X) {
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
                return T = T.get(C) || null,
                v(j, T, "" + z, X);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case A:
                    return T = T.get(z.key === null ? C : z.key) || null,
                    S(j, T, z, X);
                case E:
                    return T = T.get(z.key === null ? C : z.key) || null,
                    N(j, T, z, X);
                case K:
                    var se = z._init;
                    return z = se(z._payload),
                    R(T, j, C, z, X)
                }
                if (_e(z) || Ve(z))
                    return T = T.get(C) || null,
                    Y(j, T, z, X, null);
                if (typeof z.then == "function")
                    return R(T, j, C, Dl(z), X);
                if (z.$$typeof === V)
                    return R(T, j, C, cl(j, z), X);
                jl(j, z)
            }
            return null
        }
        function te(T, j, C, z) {
            for (var X = null, se = null, I = j, ee = j = 0, Je = null; I !== null && ee < C.length; ee++) {
                I.index > ee ? (Je = I,
                I = null) : Je = I.sibling;
                var ge = M(T, I, C[ee], z);
                if (ge === null) {
                    I === null && (I = Je);
                    break
                }
                e && I && ge.alternate === null && t(T, I),
                j = f(ge, j, ee),
                se === null ? X = ge : se.sibling = ge,
                se = ge,
                I = Je
            }
            if (ee === C.length)
                return a(T, I),
                pe && ra(T, ee),
                X;
            if (I === null) {
                for (; ee < C.length; ee++)
                    I = O(T, C[ee], z),
                    I !== null && (j = f(I, j, ee),
                    se === null ? X = I : se.sibling = I,
                    se = I);
                return pe && ra(T, ee),
                X
            }
            for (I = r(I); ee < C.length; ee++)
                Je = R(I, T, ee, C[ee], z),
                Je !== null && (e && Je.alternate !== null && I.delete(Je.key === null ? ee : Je.key),
                j = f(Je, j, ee),
                se === null ? X = Je : se.sibling = Je,
                se = Je);
            return e && I.forEach(function(kn) {
                return t(T, kn)
            }),
            pe && ra(T, ee),
            X
        }
        function $(T, j, C, z) {
            if (C == null)
                throw Error(o(151));
            for (var X = null, se = null, I = j, ee = j = 0, Je = null, ge = C.next(); I !== null && !ge.done; ee++,
            ge = C.next()) {
                I.index > ee ? (Je = I,
                I = null) : Je = I.sibling;
                var kn = M(T, I, ge.value, z);
                if (kn === null) {
                    I === null && (I = Je);
                    break
                }
                e && I && kn.alternate === null && t(T, I),
                j = f(kn, j, ee),
                se === null ? X = kn : se.sibling = kn,
                se = kn,
                I = Je
            }
            if (ge.done)
                return a(T, I),
                pe && ra(T, ee),
                X;
            if (I === null) {
                for (; !ge.done; ee++,
                ge = C.next())
                    ge = O(T, ge.value, z),
                    ge !== null && (j = f(ge, j, ee),
                    se === null ? X = ge : se.sibling = ge,
                    se = ge);
                return pe && ra(T, ee),
                X
            }
            for (I = r(I); !ge.done; ee++,
            ge = C.next())
                ge = R(I, T, ee, ge.value, z),
                ge !== null && (e && ge.alternate !== null && I.delete(ge.key === null ? ee : ge.key),
                j = f(ge, j, ee),
                se === null ? X = ge : se.sibling = ge,
                se = ge);
            return e && I.forEach(function(nb) {
                return t(T, nb)
            }),
            pe && ra(T, ee),
            X
        }
        function Se(T, j, C, z) {
            if (typeof C == "object" && C !== null && C.type === H && C.key === null && (C = C.props.children),
            typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case A:
                    e: {
                        for (var X = C.key; j !== null; ) {
                            if (j.key === X) {
                                if (X = C.type,
                                X === H) {
                                    if (j.tag === 7) {
                                        a(T, j.sibling),
                                        z = s(j, C.props.children),
                                        z.return = T,
                                        T = z;
                                        break e
                                    }
                                } else if (j.elementType === X || typeof X == "object" && X !== null && X.$$typeof === K && xd(X) === j.type) {
                                    a(T, j.sibling),
                                    z = s(j, C.props),
                                    Ii(z, C),
                                    z.return = T,
                                    T = z;
                                    break e
                                }
                                a(T, j);
                                break
                            } else
                                t(T, j);
                            j = j.sibling
                        }
                        C.type === H ? (z = aa(C.props.children, T.mode, z, C.key),
                        z.return = T,
                        T = z) : (z = ll(C.type, C.key, C.props, null, T.mode, z),
                        Ii(z, C),
                        z.return = T,
                        T = z)
                    }
                    return y(T);
                case E:
                    e: {
                        for (X = C.key; j !== null; ) {
                            if (j.key === X)
                                if (j.tag === 4 && j.stateNode.containerInfo === C.containerInfo && j.stateNode.implementation === C.implementation) {
                                    a(T, j.sibling),
                                    z = s(j, C.children || []),
                                    z.return = T,
                                    T = z;
                                    break e
                                } else {
                                    a(T, j);
                                    break
                                }
                            else
                                t(T, j);
                            j = j.sibling
                        }
                        z = us(C, T.mode, z),
                        z.return = T,
                        T = z
                    }
                    return y(T);
                case K:
                    return X = C._init,
                    C = X(C._payload),
                    Se(T, j, C, z)
                }
                if (_e(C))
                    return te(T, j, C, z);
                if (Ve(C)) {
                    if (X = Ve(C),
                    typeof X != "function")
                        throw Error(o(150));
                    return C = X.call(C),
                    $(T, j, C, z)
                }
                if (typeof C.then == "function")
                    return Se(T, j, Dl(C), z);
                if (C.$$typeof === V)
                    return Se(T, j, cl(T, C), z);
                jl(T, C)
            }
            return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C,
            j !== null && j.tag === 6 ? (a(T, j.sibling),
            z = s(j, C),
            z.return = T,
            T = z) : (a(T, j),
            z = ss(C, T.mode, z),
            z.return = T,
            T = z),
            y(T)) : a(T, j)
        }
        return function(T, j, C, z) {
            try {
                qi = 0;
                var X = Se(T, j, C, z);
                return ka = null,
                X
            } catch (I) {
                if (I === Ui || I === hl)
                    throw I;
                var se = pt(29, I, null, T.mode);
                return se.lanes = z,
                se.return = T,
                se
            } finally {}
        }
    }
    var Xa = Sd(!0)
      , Ad = Sd(!1)
      , wt = U(null)
      , Vt = null;
    function En(e) {
        var t = e.alternate;
        G(Ze, Ze.current & 1),
        G(wt, e),
        Vt === null && (t === null || _a.current !== null || t.memoizedState !== null) && (Vt = e)
    }
    function Dd(e) {
        if (e.tag === 22) {
            if (G(Ze, Ze.current),
            G(wt, e),
            Vt === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Vt = e)
            }
        } else
            Ln()
    }
    function Ln() {
        G(Ze, Ze.current),
        G(wt, wt.current)
    }
    function sn(e) {
        k(wt),
        Vt === e && (Vt = null),
        k(Ze)
    }
    var Ze = U(0);
    function Tl(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || Eu(a)))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    function _s(e, t, a, r) {
        t = e.memoizedState,
        a = a(r, t),
        a = a == null ? t : b({}, t, a),
        e.memoizedState = a,
        e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var Ws = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var r = xt()
              , s = wn(r);
            s.payload = t,
            a != null && (s.callback = a),
            t = Mn(e, s, r),
            t !== null && (St(t, e, r),
            _i(t, e, r))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var r = xt()
              , s = wn(r);
            s.tag = 1,
            s.payload = t,
            a != null && (s.callback = a),
            t = Mn(e, s, r),
            t !== null && (St(t, e, r),
            _i(t, e, r))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = xt()
              , r = wn(a);
            r.tag = 2,
            t != null && (r.callback = t),
            t = Mn(e, r, a),
            t !== null && (St(t, e, a),
            _i(t, e, a))
        }
    };
    function jd(e, t, a, r, s, f, y) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, f, y) : t.prototype && t.prototype.isPureReactComponent ? !Li(a, r) || !Li(s, f) : !0
    }
    function Td(e, t, a, r) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, r),
        t.state !== e && Ws.enqueueReplaceState(t, t.state, null)
    }
    function ha(e, t) {
        var a = t;
        if ("ref"in t) {
            a = {};
            for (var r in t)
                r !== "ref" && (a[r] = t[r])
        }
        if (e = e.defaultProps) {
            a === t && (a = b({}, a));
            for (var s in e)
                a[s] === void 0 && (a[s] = e[s])
        }
        return a
    }
    var Cl = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
    ;
    function Cd(e) {
        Cl(e)
    }
    function Nd(e) {
        console.error(e)
    }
    function wd(e) {
        Cl(e)
    }
    function Nl(e, t) {
        try {
            var a = e.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }
    function Md(e, t, a) {
        try {
            var r = e.onCaughtError;
            r(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function Zs(e, t, a) {
        return a = wn(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            Nl(e, t)
        }
        ,
        a
    }
    function Rd(e) {
        return e = wn(e),
        e.tag = 3,
        e
    }
    function Ed(e, t, a, r) {
        var s = a.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var f = r.value;
            e.payload = function() {
                return s(f)
            }
            ,
            e.callback = function() {
                Md(t, a, r)
            }
        }
        var y = a.stateNode;
        y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
            Md(t, a, r),
            typeof s != "function" && (Pn === null ? Pn = new Set([this]) : Pn.add(this));
            var v = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: v !== null ? v : ""
            })
        }
        )
    }
    function n2(e, t, a, r, s) {
        if (a.flags |= 32768,
        r !== null && typeof r == "object" && typeof r.then == "function") {
            if (t = a.alternate,
            t !== null && Oi(t, a, s, !0),
            a = wt.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return Vt === null ? mu() : a.alternate === null && Le === 0 && (Le = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = s,
                    r === vs ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([r]) : t.add(r),
                    pu(e, r, s)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    r === vs ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([r]) : a.add(r)),
                    pu(e, r, s)),
                    !1
                }
                throw Error(o(435, a.tag))
            }
            return pu(e, r, s),
            mu(),
            !1
        }
        if (pe)
            return t = wt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = s,
            r !== hs && (e = Error(o(422), {
                cause: r
            }),
            zi(jt(e, a)))) : (r !== hs && (t = Error(o(423), {
                cause: r
            }),
            zi(jt(t, a))),
            e = e.current.alternate,
            e.flags |= 65536,
            s &= -s,
            e.lanes |= s,
            r = jt(r, a),
            s = Zs(e.stateNode, r, s),
            As(e, s),
            Le !== 4 && (Le = 2)),
            !1;
        var f = Error(o(520), {
            cause: r
        });
        if (f = jt(f, a),
        ar === null ? ar = [f] : ar.push(f),
        Le !== 4 && (Le = 2),
        t === null)
            return !0;
        r = jt(r, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                e = s & -s,
                a.lanes |= e,
                e = Zs(a.stateNode, r, e),
                As(a, e),
                !1;
            case 1:
                if (t = a.type,
                f = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Pn === null || !Pn.has(f))))
                    return a.flags |= 65536,
                    s &= -s,
                    a.lanes |= s,
                    s = Rd(s),
                    Ed(s, e, a, r),
                    As(a, s),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Ld = Error(o(461))
      , ke = !1;
    function Ie(e, t, a, r) {
        t.child = e === null ? Ad(t, null, a, r) : Xa(t, e.child, a, r)
    }
    function Hd(e, t, a, r, s) {
        a = a.render;
        var f = t.ref;
        if ("ref"in r) {
            var y = {};
            for (var v in r)
                v !== "ref" && (y[v] = r[v])
        } else
            y = r;
        return ua(t),
        r = Ns(e, t, a, y, f, s),
        v = ws(),
        e !== null && !ke ? (Ms(e, t, s),
        un(e, t, s)) : (pe && v && cs(t),
        t.flags |= 1,
        Ie(e, t, r, s),
        t.child)
    }
    function Yd(e, t, a, r, s) {
        if (e === null) {
            var f = a.type;
            return typeof f == "function" && !os(f) && f.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = f,
            Bd(e, t, f, r, s)) : (e = ll(a.type, null, r, t, t.mode, s),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (f = e.child,
        !Qs(e, s)) {
            var y = f.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : Li,
            a(y, r) && e.ref === t.ref)
                return un(e, t, s)
        }
        return t.flags |= 1,
        e = tn(f, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Bd(e, t, a, r, s) {
        if (e !== null) {
            var f = e.memoizedProps;
            if (Li(f, r) && e.ref === t.ref)
                if (ke = !1,
                t.pendingProps = r = f,
                Qs(e, s))
                    (e.flags & 131072) !== 0 && (ke = !0);
                else
                    return t.lanes = e.lanes,
                    un(e, t, s)
        }
        return Gs(e, t, a, r, s)
    }
    function zd(e, t, a) {
        var r = t.pendingProps
          , s = r.children
          , f = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (r = f !== null ? f.baseLanes | a : a,
                e !== null) {
                    for (s = t.child = e.child,
                    f = 0; s !== null; )
                        f = f | s.lanes | s.childLanes,
                        s = s.sibling;
                    t.childLanes = f & ~r
                } else
                    t.childLanes = 0,
                    t.child = null;
                return Od(e, t, r, a)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && fl(t, f !== null ? f.cachePool : null),
                f !== null ? Bh(t, f) : js(),
                Dd(t);
            else
                return t.lanes = t.childLanes = 536870912,
                Od(e, t, f !== null ? f.baseLanes | a : a, a)
        } else
            f !== null ? (fl(t, f.cachePool),
            Bh(t, f),
            Ln(),
            t.memoizedState = null) : (e !== null && fl(t, null),
            js(),
            Ln());
        return Ie(e, t, s, a),
        t.child
    }
    function Od(e, t, a, r) {
        var s = bs();
        return s = s === null ? null : {
            parent: We._currentValue,
            pool: s
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: s
        },
        e !== null && fl(t, null),
        js(),
        Dd(t),
        e !== null && Oi(e, t, r, !0),
        null
    }
    function wl(e, t) {
        var a = t.ref;
        if (a === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(o(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }
    function Gs(e, t, a, r, s) {
        return ua(t),
        a = Ns(e, t, a, r, void 0, s),
        r = ws(),
        e !== null && !ke ? (Ms(e, t, s),
        un(e, t, s)) : (pe && r && cs(t),
        t.flags |= 1,
        Ie(e, t, a, s),
        t.child)
    }
    function Pd(e, t, a, r, s, f) {
        return ua(t),
        t.updateQueue = null,
        a = Oh(t, r, a, s),
        zh(e),
        r = ws(),
        e !== null && !ke ? (Ms(e, t, f),
        un(e, t, f)) : (pe && r && cs(t),
        t.flags |= 1,
        Ie(e, t, a, f),
        t.child)
    }
    function Fd(e, t, a, r, s) {
        if (ua(t),
        t.stateNode === null) {
            var f = Oa
              , y = a.contextType;
            typeof y == "object" && y !== null && (f = tt(y)),
            f = new a(r,f),
            t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
            f.updater = Ws,
            t.stateNode = f,
            f._reactInternals = t,
            f = t.stateNode,
            f.props = r,
            f.state = t.memoizedState,
            f.refs = {},
            xs(t),
            y = a.contextType,
            f.context = typeof y == "object" && y !== null ? tt(y) : Oa,
            f.state = t.memoizedState,
            y = a.getDerivedStateFromProps,
            typeof y == "function" && (_s(t, a, y, r),
            f.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (y = f.state,
            typeof f.componentWillMount == "function" && f.componentWillMount(),
            typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
            y !== f.state && Ws.enqueueReplaceState(f, f.state, null),
            Zi(t, r, f, s),
            Wi(),
            f.state = t.memoizedState),
            typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            r = !0
        } else if (e === null) {
            f = t.stateNode;
            var v = t.memoizedProps
              , S = ha(a, v);
            f.props = S;
            var N = f.context
              , Y = a.contextType;
            y = Oa,
            typeof Y == "object" && Y !== null && (y = tt(Y));
            var O = a.getDerivedStateFromProps;
            Y = typeof O == "function" || typeof f.getSnapshotBeforeUpdate == "function",
            v = t.pendingProps !== v,
            Y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v || N !== y) && Td(t, f, r, y),
            Nn = !1;
            var M = t.memoizedState;
            f.state = M,
            Zi(t, r, f, s),
            Wi(),
            N = t.memoizedState,
            v || M !== N || Nn ? (typeof O == "function" && (_s(t, a, O, r),
            N = t.memoizedState),
            (S = Nn || jd(t, a, S, r, M, N, y)) ? (Y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(),
            typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()),
            typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = r,
            t.memoizedState = N),
            f.props = r,
            f.state = N,
            f.context = y,
            r = S) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            r = !1)
        } else {
            f = t.stateNode,
            Ss(e, t),
            y = t.memoizedProps,
            Y = ha(a, y),
            f.props = Y,
            O = t.pendingProps,
            M = f.context,
            N = a.contextType,
            S = Oa,
            typeof N == "object" && N !== null && (S = tt(N)),
            v = a.getDerivedStateFromProps,
            (N = typeof v == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== O || M !== S) && Td(t, f, r, S),
            Nn = !1,
            M = t.memoizedState,
            f.state = M,
            Zi(t, r, f, s),
            Wi();
            var R = t.memoizedState;
            y !== O || M !== R || Nn || e !== null && e.dependencies !== null && ul(e.dependencies) ? (typeof v == "function" && (_s(t, a, v, r),
            R = t.memoizedState),
            (Y = Nn || jd(t, a, Y, r, M, R, S) || e !== null && e.dependencies !== null && ul(e.dependencies)) ? (N || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, R, S),
            typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(r, R, S)),
            typeof f.componentDidUpdate == "function" && (t.flags |= 4),
            typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = r,
            t.memoizedState = R),
            f.props = r,
            f.state = R,
            f.context = S,
            r = Y) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024),
            r = !1)
        }
        return f = r,
        wl(e, t),
        r = (t.flags & 128) !== 0,
        f || r ? (f = t.stateNode,
        a = r && typeof a.getDerivedStateFromError != "function" ? null : f.render(),
        t.flags |= 1,
        e !== null && r ? (t.child = Xa(t, e.child, null, s),
        t.child = Xa(t, null, a, s)) : Ie(e, t, a, s),
        t.memoizedState = f.state,
        e = t.child) : e = un(e, t, s),
        e
    }
    function Ud(e, t, a, r) {
        return Bi(),
        t.flags |= 256,
        Ie(e, t, a, r),
        t.child
    }
    var ks = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Xs(e) {
        return {
            baseLanes: e,
            cachePool: Nh()
        }
    }
    function Js(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
        t && (e |= Mt),
        e
    }
    function Vd(e, t, a) {
        var r = t.pendingProps, s = !1, f = (t.flags & 128) !== 0, y;
        if ((y = f) || (y = e !== null && e.memoizedState === null ? !1 : (Ze.current & 2) !== 0),
        y && (s = !0,
        t.flags &= -129),
        y = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (pe) {
                if (s ? En(t) : Ln(),
                pe) {
                    var v = Ee, S;
                    if (S = v) {
                        e: {
                            for (S = v,
                            v = Ut; S.nodeType !== 8; ) {
                                if (!v) {
                                    v = null;
                                    break e
                                }
                                if (S = zt(S.nextSibling),
                                S === null) {
                                    v = null;
                                    break e
                                }
                            }
                            v = S
                        }
                        v !== null ? (t.memoizedState = {
                            dehydrated: v,
                            treeContext: ia !== null ? {
                                id: nn,
                                overflow: an
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        S = pt(18, null, null, 0),
                        S.stateNode = v,
                        S.return = t,
                        t.child = S,
                        it = t,
                        Ee = null,
                        S = !0) : S = !1
                    }
                    S || oa(t)
                }
                if (v = t.memoizedState,
                v !== null && (v = v.dehydrated,
                v !== null))
                    return Eu(v) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                sn(t)
            }
            return v = r.children,
            r = r.fallback,
            s ? (Ln(),
            s = t.mode,
            v = Ml({
                mode: "hidden",
                children: v
            }, s),
            r = aa(r, s, a, null),
            v.return = t,
            r.return = t,
            v.sibling = r,
            t.child = v,
            s = t.child,
            s.memoizedState = Xs(a),
            s.childLanes = Js(e, y, a),
            t.memoizedState = ks,
            r) : (En(t),
            qs(t, v))
        }
        if (S = e.memoizedState,
        S !== null && (v = S.dehydrated,
        v !== null)) {
            if (f)
                t.flags & 256 ? (En(t),
                t.flags &= -257,
                t = Is(e, t, a)) : t.memoizedState !== null ? (Ln(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (Ln(),
                s = r.fallback,
                v = t.mode,
                r = Ml({
                    mode: "visible",
                    children: r.children
                }, v),
                s = aa(s, v, a, null),
                s.flags |= 2,
                r.return = t,
                s.return = t,
                r.sibling = s,
                t.child = r,
                Xa(t, e.child, null, a),
                r = t.child,
                r.memoizedState = Xs(a),
                r.childLanes = Js(e, y, a),
                t.memoizedState = ks,
                t = s);
            else if (En(t),
            Eu(v)) {
                if (y = v.nextSibling && v.nextSibling.dataset,
                y)
                    var N = y.dgst;
                y = N,
                r = Error(o(419)),
                r.stack = "",
                r.digest = y,
                zi({
                    value: r,
                    source: null,
                    stack: null
                }),
                t = Is(e, t, a)
            } else if (ke || Oi(e, t, a, !1),
            y = (a & e.childLanes) !== 0,
            ke || y) {
                if (y = je,
                y !== null && (r = a & -a,
                r = (r & 42) !== 0 ? 1 : Lo(r),
                r = (r & (y.suspendedLanes | a)) !== 0 ? 0 : r,
                r !== 0 && r !== S.retryLane))
                    throw S.retryLane = r,
                    za(e, r),
                    St(y, e, r),
                    Ld;
                v.data === "$?" || mu(),
                t = Is(e, t, a)
            } else
                v.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = S.treeContext,
                Ee = zt(v.nextSibling),
                it = t,
                pe = !0,
                la = null,
                Ut = !1,
                e !== null && (Ct[Nt++] = nn,
                Ct[Nt++] = an,
                Ct[Nt++] = ia,
                nn = e.id,
                an = e.overflow,
                ia = t),
                t = qs(t, r.children),
                t.flags |= 4096);
            return t
        }
        return s ? (Ln(),
        s = r.fallback,
        v = t.mode,
        S = e.child,
        N = S.sibling,
        r = tn(S, {
            mode: "hidden",
            children: r.children
        }),
        r.subtreeFlags = S.subtreeFlags & 65011712,
        N !== null ? s = tn(N, s) : (s = aa(s, v, a, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        v = e.child.memoizedState,
        v === null ? v = Xs(a) : (S = v.cachePool,
        S !== null ? (N = We._currentValue,
        S = S.parent !== N ? {
            parent: N,
            pool: N
        } : S) : S = Nh(),
        v = {
            baseLanes: v.baseLanes | a,
            cachePool: S
        }),
        s.memoizedState = v,
        s.childLanes = Js(e, y, a),
        t.memoizedState = ks,
        r) : (En(t),
        a = e.child,
        e = a.sibling,
        a = tn(a, {
            mode: "visible",
            children: r.children
        }),
        a.return = t,
        a.sibling = null,
        e !== null && (y = t.deletions,
        y === null ? (t.deletions = [e],
        t.flags |= 16) : y.push(e)),
        t.child = a,
        t.memoizedState = null,
        a)
    }
    function qs(e, t) {
        return t = Ml({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Ml(e, t) {
        return e = pt(22, e, null, t),
        e.lanes = 0,
        e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        e
    }
    function Is(e, t, a) {
        return Xa(t, e.child, null, a),
        e = qs(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function _d(e, t, a) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t),
        ms(e.return, t, a)
    }
    function Ks(e, t, a, r, s) {
        var f = e.memoizedState;
        f === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: a,
            tailMode: s
        } : (f.isBackwards = t,
        f.rendering = null,
        f.renderingStartTime = 0,
        f.last = r,
        f.tail = a,
        f.tailMode = s)
    }
    function Wd(e, t, a) {
        var r = t.pendingProps
          , s = r.revealOrder
          , f = r.tail;
        if (Ie(e, t, r.children, a),
        r = Ze.current,
        (r & 2) !== 0)
            r = r & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && _d(e, a, t);
                    else if (e.tag === 19)
                        _d(e, a, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            r &= 1
        }
        switch (G(Ze, r),
        s) {
        case "forwards":
            for (a = t.child,
            s = null; a !== null; )
                e = a.alternate,
                e !== null && Tl(e) === null && (s = a),
                a = a.sibling;
            a = s,
            a === null ? (s = t.child,
            t.child = null) : (s = a.sibling,
            a.sibling = null),
            Ks(t, !1, s, a, f);
            break;
        case "backwards":
            for (a = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && Tl(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = a,
                a = s,
                s = e
            }
            Ks(t, !0, a, null, f);
            break;
        case "together":
            Ks(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function un(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies),
        On |= t.lanes,
        (a & t.childLanes) === 0)
            if (e !== null) {
                if (Oi(e, t, a, !1),
                (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child,
            a = tn(e, e.pendingProps),
            t.child = a,
            a.return = t; e.sibling !== null; )
                e = e.sibling,
                a = a.sibling = tn(e, e.pendingProps),
                a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function Qs(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && ul(e)))
    }
    function a2(e, t, a) {
        switch (t.tag) {
        case 3:
            Te(t, t.stateNode.containerInfo),
            Cn(t, We, e.memoizedState.cache),
            Bi();
            break;
        case 27:
        case 5:
            No(t);
            break;
        case 4:
            Te(t, t.stateNode.containerInfo);
            break;
        case 10:
            Cn(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var r = t.memoizedState;
            if (r !== null)
                return r.dehydrated !== null ? (En(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? Vd(e, t, a) : (En(t),
                e = un(e, t, a),
                e !== null ? e.sibling : null);
            En(t);
            break;
        case 19:
            var s = (e.flags & 128) !== 0;
            if (r = (a & t.childLanes) !== 0,
            r || (Oi(e, t, a, !1),
            r = (a & t.childLanes) !== 0),
            s) {
                if (r)
                    return Wd(e, t, a);
                t.flags |= 128
            }
            if (s = t.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            G(Ze, Ze.current),
            r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            zd(e, t, a);
        case 24:
            Cn(t, We, e.memoizedState.cache)
        }
        return un(e, t, a)
    }
    function Zd(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                ke = !0;
            else {
                if (!Qs(e, a) && (t.flags & 128) === 0)
                    return ke = !1,
                    a2(e, t, a);
                ke = (e.flags & 131072) !== 0
            }
        else
            ke = !1,
            pe && (t.flags & 1048576) !== 0 && xh(t, sl, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                e = t.pendingProps;
                var r = t.elementType
                  , s = r._init;
                if (r = s(r._payload),
                t.type = r,
                typeof r == "function")
                    os(r) ? (e = ha(r, e),
                    t.tag = 1,
                    t = Fd(null, t, r, e, a)) : (t.tag = 0,
                    t = Gs(null, t, r, e, a));
                else {
                    if (r != null) {
                        if (s = r.$$typeof,
                        s === q) {
                            t.tag = 11,
                            t = Hd(null, t, r, e, a);
                            break e
                        } else if (s === le) {
                            t.tag = 14,
                            t = Yd(null, t, r, e, a);
                            break e
                        }
                    }
                    throw t = Pt(r) || r,
                    Error(o(306, t, ""))
                }
            }
            return t;
        case 0:
            return Gs(e, t, t.type, t.pendingProps, a);
        case 1:
            return r = t.type,
            s = ha(r, t.pendingProps),
            Fd(e, t, r, s, a);
        case 3:
            e: {
                if (Te(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(o(387));
                r = t.pendingProps;
                var f = t.memoizedState;
                s = f.element,
                Ss(e, t),
                Zi(t, r, null, a);
                var y = t.memoizedState;
                if (r = y.cache,
                Cn(t, We, r),
                r !== f.cache && gs(t, [We], a, !0),
                Wi(),
                r = y.element,
                f.isDehydrated)
                    if (f = {
                        element: r,
                        isDehydrated: !1,
                        cache: y.cache
                    },
                    t.updateQueue.baseState = f,
                    t.memoizedState = f,
                    t.flags & 256) {
                        t = Ud(e, t, r, a);
                        break e
                    } else if (r !== s) {
                        s = jt(Error(o(424)), t),
                        zi(s),
                        t = Ud(e, t, r, a);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (Ee = zt(e.firstChild),
                        it = t,
                        pe = !0,
                        la = null,
                        Ut = !0,
                        a = Ad(t, null, r, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (Bi(),
                    r === s) {
                        t = un(e, t, a);
                        break e
                    }
                    Ie(e, t, r, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return wl(e, t),
            e === null ? (a = Jm(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : pe || (a = t.type,
            e = t.pendingProps,
            r = Wl(ie.current).createElement(a),
            r[et] = t,
            r[lt] = e,
            Qe(r, a, e),
            Ge(r),
            t.stateNode = r) : t.memoizedState = Jm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return No(t),
            e === null && pe && (r = t.stateNode = Gm(t.type, t.pendingProps, ie.current),
            it = t,
            Ut = !0,
            s = Ee,
            Vn(t.type) ? (Lu = s,
            Ee = zt(r.firstChild)) : Ee = s),
            Ie(e, t, t.pendingProps.children, a),
            wl(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && pe && ((s = r = Ee) && (r = E2(r, t.type, t.pendingProps, Ut),
            r !== null ? (t.stateNode = r,
            it = t,
            Ee = zt(r.firstChild),
            Ut = !1,
            s = !0) : s = !1),
            s || oa(t)),
            No(t),
            s = t.type,
            f = t.pendingProps,
            y = e !== null ? e.memoizedProps : null,
            r = f.children,
            wu(s, f) ? r = null : y !== null && wu(s, y) && (t.flags |= 32),
            t.memoizedState !== null && (s = Ns(e, t, q1, null, null, a),
            hr._currentValue = s),
            wl(e, t),
            Ie(e, t, r, a),
            t.child;
        case 6:
            return e === null && pe && ((e = a = Ee) && (a = L2(a, t.pendingProps, Ut),
            a !== null ? (t.stateNode = a,
            it = t,
            Ee = null,
            e = !0) : e = !1),
            e || oa(t)),
            null;
        case 13:
            return Vd(e, t, a);
        case 4:
            return Te(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            e === null ? t.child = Xa(t, null, r, a) : Ie(e, t, r, a),
            t.child;
        case 11:
            return Hd(e, t, t.type, t.pendingProps, a);
        case 7:
            return Ie(e, t, t.pendingProps, a),
            t.child;
        case 8:
            return Ie(e, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return Ie(e, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return r = t.pendingProps,
            Cn(t, t.type, r.value),
            Ie(e, t, r.children, a),
            t.child;
        case 9:
            return s = t.type._context,
            r = t.pendingProps.children,
            ua(t),
            s = tt(s),
            r = r(s),
            t.flags |= 1,
            Ie(e, t, r, a),
            t.child;
        case 14:
            return Yd(e, t, t.type, t.pendingProps, a);
        case 15:
            return Bd(e, t, t.type, t.pendingProps, a);
        case 19:
            return Wd(e, t, a);
        case 31:
            return r = t.pendingProps,
            a = t.mode,
            r = {
                mode: r.mode,
                children: r.children
            },
            e === null ? (a = Ml(r, a),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a) : (a = tn(e.child, r),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a),
            t;
        case 22:
            return zd(e, t, a);
        case 24:
            return ua(t),
            r = tt(We),
            e === null ? (s = bs(),
            s === null && (s = je,
            f = ps(),
            s.pooledCache = f,
            f.refCount++,
            f !== null && (s.pooledCacheLanes |= a),
            s = f),
            t.memoizedState = {
                parent: r,
                cache: s
            },
            xs(t),
            Cn(t, We, s)) : ((e.lanes & a) !== 0 && (Ss(e, t),
            Zi(t, null, null, a),
            Wi()),
            s = e.memoizedState,
            f = t.memoizedState,
            s.parent !== r ? (s = {
                parent: r,
                cache: r
            },
            t.memoizedState = s,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s),
            Cn(t, We, r)) : (r = f.cache,
            Cn(t, We, r),
            r !== s.cache && gs(t, [We], a, !0))),
            Ie(e, t, t.pendingProps.children, a),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }
    function cn(e) {
        e.flags |= 4
    }
    function Gd(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !$m(t)) {
            if (t = wt.current,
            t !== null && ((de & 4194048) === de ? Vt !== null : (de & 62914560) !== de && (de & 536870912) === 0 || t !== Vt))
                throw Vi = vs,
                wh;
            e.flags |= 8192
        }
    }
    function Rl(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? Df() : 536870912,
        e.lanes |= t,
        Ka |= t)
    }
    function Ki(e, t) {
        if (!pe)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var a = null; t !== null; )
                    t.alternate !== null && (a = t),
                    t = t.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var r = null; a !== null; )
                    a.alternate !== null && (r = a),
                    a = a.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
    }
    function we(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , a = 0
          , r = 0;
        if (t)
            for (var s = e.child; s !== null; )
                a |= s.lanes | s.childLanes,
                r |= s.subtreeFlags & 65011712,
                r |= s.flags & 65011712,
                s.return = e,
                s = s.sibling;
        else
            for (s = e.child; s !== null; )
                a |= s.lanes | s.childLanes,
                r |= s.subtreeFlags,
                r |= s.flags,
                s.return = e,
                s = s.sibling;
        return e.subtreeFlags |= r,
        e.childLanes = a,
        t
    }
    function i2(e, t, a) {
        var r = t.pendingProps;
        switch (fs(t),
        t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return we(t),
            null;
        case 1:
            return we(t),
            null;
        case 3:
            return a = t.stateNode,
            r = null,
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ln(We),
            An(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (Yi(t) ? cn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Dh())),
            we(t),
            null;
        case 26:
            return a = t.memoizedState,
            e === null ? (cn(t),
            a !== null ? (we(t),
            Gd(t, a)) : (we(t),
            t.flags &= -16777217)) : a ? a !== e.memoizedState ? (cn(t),
            we(t),
            Gd(t, a)) : (we(t),
            t.flags &= -16777217) : (e.memoizedProps !== r && cn(t),
            we(t),
            t.flags &= -16777217),
            null;
        case 27:
            Vr(t),
            a = ie.current;
            var s = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== r && cn(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return we(t),
                    null
                }
                e = Q.current,
                Yi(t) ? Sh(t) : (e = Gm(s, r, a),
                t.stateNode = e,
                cn(t))
            }
            return we(t),
            null;
        case 5:
            if (Vr(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== r && cn(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return we(t),
                    null
                }
                if (e = Q.current,
                Yi(t))
                    Sh(t);
                else {
                    switch (s = Wl(ie.current),
                    e) {
                    case 1:
                        e = s.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                    case 2:
                        e = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                        break;
                    default:
                        switch (a) {
                        case "svg":
                            e = s.createElementNS("http://www.w3.org/2000/svg", a);
                            break;
                        case "math":
                            e = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                            break;
                        case "script":
                            e = s.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild);
                            break;
                        case "select":
                            e = typeof r.is == "string" ? s.createElement("select", {
                                is: r.is
                            }) : s.createElement("select"),
                            r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                            break;
                        default:
                            e = typeof r.is == "string" ? s.createElement(a, {
                                is: r.is
                            }) : s.createElement(a)
                        }
                    }
                    e[et] = t,
                    e[lt] = r;
                    e: for (s = t.child; s !== null; ) {
                        if (s.tag === 5 || s.tag === 6)
                            e.appendChild(s.stateNode);
                        else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                            s.child.return = s,
                            s = s.child;
                            continue
                        }
                        if (s === t)
                            break e;
                        for (; s.sibling === null; ) {
                            if (s.return === null || s.return === t)
                                break e;
                            s = s.return
                        }
                        s.sibling.return = s.return,
                        s = s.sibling
                    }
                    t.stateNode = e;
                    e: switch (Qe(e, a, r),
                    a) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!r.autoFocus;
                        break e;
                    case "img":
                        e = !0;
                        break e;
                    default:
                        e = !1
                    }
                    e && cn(t)
                }
            }
            return we(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== r && cn(t);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (e = ie.current,
                Yi(t)) {
                    if (e = t.stateNode,
                    a = t.memoizedProps,
                    r = null,
                    s = it,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            r = s.memoizedProps
                        }
                    e[et] = t,
                    e = !!(e.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || Pm(e.nodeValue, a)),
                    e || oa(t)
                } else
                    e = Wl(e).createTextNode(r),
                    e[et] = t,
                    t.stateNode = e
            }
            return we(t),
            null;
        case 13:
            if (r = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (s = Yi(t),
                r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s)
                            throw Error(o(318));
                        if (s = t.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(o(317));
                        s[et] = t
                    } else
                        Bi(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    we(t),
                    s = !1
                } else
                    s = Dh(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s),
                    s = !0;
                if (!s)
                    return t.flags & 256 ? (sn(t),
                    t) : (sn(t),
                    null)
            }
            if (sn(t),
            (t.flags & 128) !== 0)
                return t.lanes = a,
                t;
            if (a = r !== null,
            e = e !== null && e.memoizedState !== null,
            a) {
                r = t.child,
                s = null,
                r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (s = r.alternate.memoizedState.cachePool.pool);
                var f = null;
                r.memoizedState !== null && r.memoizedState.cachePool !== null && (f = r.memoizedState.cachePool.pool),
                f !== s && (r.flags |= 2048)
            }
            return a !== e && a && (t.child.flags |= 8192),
            Rl(t, t.updateQueue),
            we(t),
            null;
        case 4:
            return An(),
            e === null && Du(t.stateNode.containerInfo),
            we(t),
            null;
        case 10:
            return ln(t.type),
            we(t),
            null;
        case 19:
            if (k(Ze),
            s = t.memoizedState,
            s === null)
                return we(t),
                null;
            if (r = (t.flags & 128) !== 0,
            f = s.rendering,
            f === null)
                if (r)
                    Ki(s, !1);
                else {
                    if (Le !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (f = Tl(e),
                            f !== null) {
                                for (t.flags |= 128,
                                Ki(s, !1),
                                e = f.updateQueue,
                                t.updateQueue = e,
                                Rl(t, e),
                                t.subtreeFlags = 0,
                                e = a,
                                a = t.child; a !== null; )
                                    vh(a, e),
                                    a = a.sibling;
                                return G(Ze, Ze.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && Ft() > Hl && (t.flags |= 128,
                    r = !0,
                    Ki(s, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Tl(f),
                    e !== null) {
                        if (t.flags |= 128,
                        r = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Rl(t, e),
                        Ki(s, !0),
                        s.tail === null && s.tailMode === "hidden" && !f.alternate && !pe)
                            return we(t),
                            null
                    } else
                        2 * Ft() - s.renderingStartTime > Hl && a !== 536870912 && (t.flags |= 128,
                        r = !0,
                        Ki(s, !1),
                        t.lanes = 4194304);
                s.isBackwards ? (f.sibling = t.child,
                t.child = f) : (e = s.last,
                e !== null ? e.sibling = f : t.child = f,
                s.last = f)
            }
            return s.tail !== null ? (t = s.tail,
            s.rendering = t,
            s.tail = t.sibling,
            s.renderingStartTime = Ft(),
            t.sibling = null,
            e = Ze.current,
            G(Ze, r ? e & 1 | 2 : e & 1),
            t) : (we(t),
            null);
        case 22:
        case 23:
            return sn(t),
            Ts(),
            r = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
            r ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (we(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t),
            a = t.updateQueue,
            a !== null && Rl(t, a.retryQueue),
            a = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            r = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool),
            r !== a && (t.flags |= 2048),
            e !== null && k(ca),
            null;
        case 24:
            return a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            ln(We),
            we(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function r2(e, t) {
        switch (fs(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return ln(We),
            An(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Vr(t),
            null;
        case 13:
            if (sn(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                Bi()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return k(Ze),
            null;
        case 4:
            return An(),
            null;
        case 10:
            return ln(t.type),
            null;
        case 22:
        case 23:
            return sn(t),
            Ts(),
            e !== null && k(ca),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return ln(We),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function kd(e, t) {
        switch (fs(t),
        t.tag) {
        case 3:
            ln(We),
            An();
            break;
        case 26:
        case 27:
        case 5:
            Vr(t);
            break;
        case 4:
            An();
            break;
        case 13:
            sn(t);
            break;
        case 19:
            k(Ze);
            break;
        case 10:
            ln(t.type);
            break;
        case 22:
        case 23:
            sn(t),
            Ts(),
            e !== null && k(ca);
            break;
        case 24:
            ln(We)
        }
    }
    function Qi(e, t) {
        try {
            var a = t.updateQueue
              , r = a !== null ? a.lastEffect : null;
            if (r !== null) {
                var s = r.next;
                a = s;
                do {
                    if ((a.tag & e) === e) {
                        r = void 0;
                        var f = a.create
                          , y = a.inst;
                        r = f(),
                        y.destroy = r
                    }
                    a = a.next
                } while (a !== s)
            }
        } catch (v) {
            Ae(t, t.return, v)
        }
    }
    function Hn(e, t, a) {
        try {
            var r = t.updateQueue
              , s = r !== null ? r.lastEffect : null;
            if (s !== null) {
                var f = s.next;
                r = f;
                do {
                    if ((r.tag & e) === e) {
                        var y = r.inst
                          , v = y.destroy;
                        if (v !== void 0) {
                            y.destroy = void 0,
                            s = t;
                            var S = a
                              , N = v;
                            try {
                                N()
                            } catch (Y) {
                                Ae(s, S, Y)
                            }
                        }
                    }
                    r = r.next
                } while (r !== f)
            }
        } catch (Y) {
            Ae(t, t.return, Y)
        }
    }
    function Xd(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                Yh(t, a)
            } catch (r) {
                Ae(e, e.return, r)
            }
        }
    }
    function Jd(e, t, a) {
        a.props = ha(e.type, e.memoizedProps),
        a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (r) {
            Ae(e, t, r)
        }
    }
    function $i(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var r = e.stateNode;
                    break;
                case 30:
                    r = e.stateNode;
                    break;
                default:
                    r = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(r) : a.current = r
            }
        } catch (s) {
            Ae(e, t, s)
        }
    }
    function _t(e, t) {
        var a = e.ref
          , r = e.refCleanup;
        if (a !== null)
            if (typeof r == "function")
                try {
                    r()
                } catch (s) {
                    Ae(e, t, s)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (s) {
                    Ae(e, t, s)
                }
            else
                a.current = null
    }
    function qd(e) {
        var t = e.type
          , a = e.memoizedProps
          , r = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && r.focus();
                break e;
            case "img":
                a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet)
            }
        } catch (s) {
            Ae(e, e.return, s)
        }
    }
    function $s(e, t, a) {
        try {
            var r = e.stateNode;
            C2(r, e.type, a, t),
            r[lt] = t
        } catch (s) {
            Ae(e, e.return, s)
        }
    }
    function Id(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Vn(e.type) || e.tag === 4
    }
    function eu(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Id(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Vn(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function tu(e, t, a) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(e),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = _l));
        else if (r !== 4 && (r === 27 && Vn(e.type) && (a = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (tu(e, t, a),
            e = e.sibling; e !== null; )
                tu(e, t, a),
                e = e.sibling
    }
    function El(e, t, a) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (r !== 4 && (r === 27 && Vn(e.type) && (a = e.stateNode),
        e = e.child,
        e !== null))
            for (El(e, t, a),
            e = e.sibling; e !== null; )
                El(e, t, a),
                e = e.sibling
    }
    function Kd(e) {
        var t = e.stateNode
          , a = e.memoizedProps;
        try {
            for (var r = e.type, s = t.attributes; s.length; )
                t.removeAttributeNode(s[0]);
            Qe(t, r, a),
            t[et] = e,
            t[lt] = a
        } catch (f) {
            Ae(e, e.return, f)
        }
    }
    var fn = !1
      , Be = !1
      , nu = !1
      , Qd = typeof WeakSet == "function" ? WeakSet : Set
      , Xe = null;
    function l2(e, t) {
        if (e = e.containerInfo,
        Cu = ql,
        e = uh(e),
        es(e)) {
            if ("selectionStart"in e)
                var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var r = a.getSelection && a.getSelection();
                    if (r && r.rangeCount !== 0) {
                        a = r.anchorNode;
                        var s = r.anchorOffset
                          , f = r.focusNode;
                        r = r.focusOffset;
                        try {
                            a.nodeType,
                            f.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var y = 0
                          , v = -1
                          , S = -1
                          , N = 0
                          , Y = 0
                          , O = e
                          , M = null;
                        t: for (; ; ) {
                            for (var R; O !== a || s !== 0 && O.nodeType !== 3 || (v = y + s),
                            O !== f || r !== 0 && O.nodeType !== 3 || (S = y + r),
                            O.nodeType === 3 && (y += O.nodeValue.length),
                            (R = O.firstChild) !== null; )
                                M = O,
                                O = R;
                            for (; ; ) {
                                if (O === e)
                                    break t;
                                if (M === a && ++N === s && (v = y),
                                M === f && ++Y === r && (S = y),
                                (R = O.nextSibling) !== null)
                                    break;
                                O = M,
                                M = O.parentNode
                            }
                            O = R
                        }
                        a = v === -1 || S === -1 ? null : {
                            start: v,
                            end: S
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Nu = {
            focusedElem: e,
            selectionRange: a
        },
        ql = !1,
        Xe = t; Xe !== null; )
            if (t = Xe,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                Xe = e;
            else
                for (; Xe !== null; ) {
                    switch (t = Xe,
                    f = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && f !== null) {
                            e = void 0,
                            a = t,
                            s = f.memoizedProps,
                            f = f.memoizedState,
                            r = a.stateNode;
                            try {
                                var te = ha(a.type, s, a.elementType === a.type);
                                e = r.getSnapshotBeforeUpdate(te, f),
                                r.__reactInternalSnapshotBeforeUpdate = e
                            } catch ($) {
                                Ae(a, a.return, $)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            a = e.nodeType,
                            a === 9)
                                Ru(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Ru(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        Xe = e;
                        break
                    }
                    Xe = t.return
                }
    }
    function $d(e, t, a) {
        var r = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Yn(e, a),
            r & 4 && Qi(5, a);
            break;
        case 1:
            if (Yn(e, a),
            r & 4)
                if (e = a.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (y) {
                        Ae(a, a.return, y)
                    }
                else {
                    var s = ha(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (y) {
                        Ae(a, a.return, y)
                    }
                }
            r & 64 && Xd(a),
            r & 512 && $i(a, a.return);
            break;
        case 3:
            if (Yn(e, a),
            r & 64 && (e = a.updateQueue,
            e !== null)) {
                if (t = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        t = a.child.stateNode;
                        break;
                    case 1:
                        t = a.child.stateNode
                    }
                try {
                    Yh(e, t)
                } catch (y) {
                    Ae(a, a.return, y)
                }
            }
            break;
        case 27:
            t === null && r & 4 && Kd(a);
        case 26:
        case 5:
            Yn(e, a),
            t === null && r & 4 && qd(a),
            r & 512 && $i(a, a.return);
            break;
        case 12:
            Yn(e, a);
            break;
        case 13:
            Yn(e, a),
            r & 4 && nm(e, a),
            r & 64 && (e = a.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (a = g2.bind(null, a),
            H2(e, a))));
            break;
        case 22:
            if (r = a.memoizedState !== null || fn,
            !r) {
                t = t !== null && t.memoizedState !== null || Be,
                s = fn;
                var f = Be;
                fn = r,
                (Be = t) && !f ? Bn(e, a, (a.subtreeFlags & 8772) !== 0) : Yn(e, a),
                fn = s,
                Be = f
            }
            break;
        case 30:
            break;
        default:
            Yn(e, a)
        }
    }
    function em(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        em(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Bo(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Ce = null
      , ut = !1;
    function hn(e, t, a) {
        for (a = a.child; a !== null; )
            tm(e, t, a),
            a = a.sibling
    }
    function tm(e, t, a) {
        if (dt && typeof dt.onCommitFiberUnmount == "function")
            try {
                dt.onCommitFiberUnmount(xi, a)
            } catch {}
        switch (a.tag) {
        case 26:
            Be || _t(a, t),
            hn(e, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            Be || _t(a, t);
            var r = Ce
              , s = ut;
            Vn(a.type) && (Ce = a.stateNode,
            ut = !1),
            hn(e, t, a),
            sr(a.stateNode),
            Ce = r,
            ut = s;
            break;
        case 5:
            Be || _t(a, t);
        case 6:
            if (r = Ce,
            s = ut,
            Ce = null,
            hn(e, t, a),
            Ce = r,
            ut = s,
            Ce !== null)
                if (ut)
                    try {
                        (Ce.nodeType === 9 ? Ce.body : Ce.nodeName === "HTML" ? Ce.ownerDocument.body : Ce).removeChild(a.stateNode)
                    } catch (f) {
                        Ae(a, t, f)
                    }
                else
                    try {
                        Ce.removeChild(a.stateNode)
                    } catch (f) {
                        Ae(a, t, f)
                    }
            break;
        case 18:
            Ce !== null && (ut ? (e = Ce,
            Wm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
            pr(e)) : Wm(Ce, a.stateNode));
            break;
        case 4:
            r = Ce,
            s = ut,
            Ce = a.stateNode.containerInfo,
            ut = !0,
            hn(e, t, a),
            Ce = r,
            ut = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Be || Hn(2, a, t),
            Be || Hn(4, a, t),
            hn(e, t, a);
            break;
        case 1:
            Be || (_t(a, t),
            r = a.stateNode,
            typeof r.componentWillUnmount == "function" && Jd(a, t, r)),
            hn(e, t, a);
            break;
        case 21:
            hn(e, t, a);
            break;
        case 22:
            Be = (r = Be) || a.memoizedState !== null,
            hn(e, t, a),
            Be = r;
            break;
        default:
            hn(e, t, a)
        }
    }
    function nm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                pr(e)
            } catch (a) {
                Ae(t, t.return, a)
            }
    }
    function o2(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Qd),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new Qd),
            t;
        default:
            throw Error(o(435, e.tag))
        }
    }
    function au(e, t) {
        var a = o2(e);
        t.forEach(function(r) {
            var s = p2.bind(null, e, r);
            a.has(r) || (a.add(r),
            r.then(s, s))
        })
    }
    function yt(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var r = 0; r < a.length; r++) {
                var s = a[r]
                  , f = e
                  , y = t
                  , v = y;
                e: for (; v !== null; ) {
                    switch (v.tag) {
                    case 27:
                        if (Vn(v.type)) {
                            Ce = v.stateNode,
                            ut = !1;
                            break e
                        }
                        break;
                    case 5:
                        Ce = v.stateNode,
                        ut = !1;
                        break e;
                    case 3:
                    case 4:
                        Ce = v.stateNode.containerInfo,
                        ut = !0;
                        break e
                    }
                    v = v.return
                }
                if (Ce === null)
                    throw Error(o(160));
                tm(f, y, s),
                Ce = null,
                ut = !1,
                f = s.alternate,
                f !== null && (f.return = null),
                s.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                am(t, e),
                t = t.sibling
    }
    var Bt = null;
    function am(e, t) {
        var a = e.alternate
          , r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            yt(t, e),
            bt(e),
            r & 4 && (Hn(3, e, e.return),
            Qi(3, e),
            Hn(5, e, e.return));
            break;
        case 1:
            yt(t, e),
            bt(e),
            r & 512 && (Be || a === null || _t(a, a.return)),
            r & 64 && fn && (e = e.updateQueue,
            e !== null && (r = e.callbacks,
            r !== null && (a = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
            break;
        case 26:
            var s = Bt;
            if (yt(t, e),
            bt(e),
            r & 512 && (Be || a === null || _t(a, a.return)),
            r & 4) {
                var f = a !== null ? a.memoizedState : null;
                if (r = e.memoizedState,
                a === null)
                    if (r === null)
                        if (e.stateNode === null) {
                            e: {
                                r = e.type,
                                a = e.memoizedProps,
                                s = s.ownerDocument || s;
                                t: switch (r) {
                                case "title":
                                    f = s.getElementsByTagName("title")[0],
                                    (!f || f[Di] || f[et] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = s.createElement(r),
                                    s.head.insertBefore(f, s.querySelector("head > title"))),
                                    Qe(f, r, a),
                                    f[et] = e,
                                    Ge(f),
                                    r = f;
                                    break e;
                                case "link":
                                    var y = Km("link", "href", s).get(r + (a.href || ""));
                                    if (y) {
                                        for (var v = 0; v < y.length; v++)
                                            if (f = y[v],
                                            f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                y.splice(v, 1);
                                                break t
                                            }
                                    }
                                    f = s.createElement(r),
                                    Qe(f, r, a),
                                    s.head.appendChild(f);
                                    break;
                                case "meta":
                                    if (y = Km("meta", "content", s).get(r + (a.content || ""))) {
                                        for (v = 0; v < y.length; v++)
                                            if (f = y[v],
                                            f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                y.splice(v, 1);
                                                break t
                                            }
                                    }
                                    f = s.createElement(r),
                                    Qe(f, r, a),
                                    s.head.appendChild(f);
                                    break;
                                default:
                                    throw Error(o(468, r))
                                }
                                f[et] = e,
                                Ge(f),
                                r = f
                            }
                            e.stateNode = r
                        } else
                            Qm(s, e.type, e.stateNode);
                    else
                        e.stateNode = Im(s, r, e.memoizedProps);
                else
                    f !== r ? (f === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : f.count--,
                    r === null ? Qm(s, e.type, e.stateNode) : Im(s, r, e.memoizedProps)) : r === null && e.stateNode !== null && $s(e, e.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            yt(t, e),
            bt(e),
            r & 512 && (Be || a === null || _t(a, a.return)),
            a !== null && r & 4 && $s(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (yt(t, e),
            bt(e),
            r & 512 && (Be || a === null || _t(a, a.return)),
            e.flags & 32) {
                s = e.stateNode;
                try {
                    Ma(s, "")
                } catch (R) {
                    Ae(e, e.return, R)
                }
            }
            r & 4 && e.stateNode != null && (s = e.memoizedProps,
            $s(e, s, a !== null ? a.memoizedProps : s)),
            r & 1024 && (nu = !0);
            break;
        case 6:
            if (yt(t, e),
            bt(e),
            r & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                r = e.memoizedProps,
                a = e.stateNode;
                try {
                    a.nodeValue = r
                } catch (R) {
                    Ae(e, e.return, R)
                }
            }
            break;
        case 3:
            if (kl = null,
            s = Bt,
            Bt = Zl(t.containerInfo),
            yt(t, e),
            Bt = s,
            bt(e),
            r & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    pr(t.containerInfo)
                } catch (R) {
                    Ae(e, e.return, R)
                }
            nu && (nu = !1,
            im(e));
            break;
        case 4:
            r = Bt,
            Bt = Zl(e.stateNode.containerInfo),
            yt(t, e),
            bt(e),
            Bt = r;
            break;
        case 12:
            yt(t, e),
            bt(e);
            break;
        case 13:
            yt(t, e),
            bt(e),
            e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (uu = Ft()),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            au(e, r)));
            break;
        case 22:
            s = e.memoizedState !== null;
            var S = a !== null && a.memoizedState !== null
              , N = fn
              , Y = Be;
            if (fn = N || s,
            Be = Y || S,
            yt(t, e),
            Be = Y,
            fn = N,
            bt(e),
            r & 8192)
                e: for (t = e.stateNode,
                t._visibility = s ? t._visibility & -2 : t._visibility | 1,
                s && (a === null || S || fn || Be || da(e)),
                a = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            S = a = t;
                            try {
                                if (f = S.stateNode,
                                s)
                                    y = f.style,
                                    typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                                else {
                                    v = S.stateNode;
                                    var O = S.memoizedProps.style
                                      , M = O != null && O.hasOwnProperty("display") ? O.display : null;
                                    v.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim()
                                }
                            } catch (R) {
                                Ae(S, S.return, R)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            S = t;
                            try {
                                S.stateNode.nodeValue = s ? "" : S.memoizedProps
                            } catch (R) {
                                Ae(S, S.return, R)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        a === t && (a = null),
                        t = t.return
                    }
                    a === t && (a = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            r & 4 && (r = e.updateQueue,
            r !== null && (a = r.retryQueue,
            a !== null && (r.retryQueue = null,
            au(e, a))));
            break;
        case 19:
            yt(t, e),
            bt(e),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            au(e, r)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            yt(t, e),
            bt(e)
        }
    }
    function bt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, r = e.return; r !== null; ) {
                    if (Id(r)) {
                        a = r;
                        break
                    }
                    r = r.return
                }
                if (a == null)
                    throw Error(o(160));
                switch (a.tag) {
                case 27:
                    var s = a.stateNode
                      , f = eu(e);
                    El(e, f, s);
                    break;
                case 5:
                    var y = a.stateNode;
                    a.flags & 32 && (Ma(y, ""),
                    a.flags &= -33);
                    var v = eu(e);
                    El(e, v, y);
                    break;
                case 3:
                case 4:
                    var S = a.stateNode.containerInfo
                      , N = eu(e);
                    tu(e, N, S);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (Y) {
                Ae(e, e.return, Y)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function im(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                im(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function Yn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                $d(e, t.alternate, t),
                t = t.sibling
    }
    function da(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Hn(4, t, t.return),
                da(t);
                break;
            case 1:
                _t(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && Jd(t, t.return, a),
                da(t);
                break;
            case 27:
                sr(t.stateNode);
            case 26:
            case 5:
                _t(t, t.return),
                da(t);
                break;
            case 22:
                t.memoizedState === null && da(t);
                break;
            case 30:
                da(t);
                break;
            default:
                da(t)
            }
            e = e.sibling
        }
    }
    function Bn(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var r = t.alternate
              , s = e
              , f = t
              , y = f.flags;
            switch (f.tag) {
            case 0:
            case 11:
            case 15:
                Bn(s, f, a),
                Qi(4, f);
                break;
            case 1:
                if (Bn(s, f, a),
                r = f,
                s = r.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (N) {
                        Ae(r, r.return, N)
                    }
                if (r = f,
                s = r.updateQueue,
                s !== null) {
                    var v = r.stateNode;
                    try {
                        var S = s.shared.hiddenCallbacks;
                        if (S !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < S.length; s++)
                                Hh(S[s], v)
                    } catch (N) {
                        Ae(r, r.return, N)
                    }
                }
                a && y & 64 && Xd(f),
                $i(f, f.return);
                break;
            case 27:
                Kd(f);
            case 26:
            case 5:
                Bn(s, f, a),
                a && r === null && y & 4 && qd(f),
                $i(f, f.return);
                break;
            case 12:
                Bn(s, f, a);
                break;
            case 13:
                Bn(s, f, a),
                a && y & 4 && nm(s, f);
                break;
            case 22:
                f.memoizedState === null && Bn(s, f, a),
                $i(f, f.return);
                break;
            case 30:
                break;
            default:
                Bn(s, f, a)
            }
            t = t.sibling
        }
    }
    function iu(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++,
        a != null && Pi(a))
    }
    function ru(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && Pi(e))
    }
    function Wt(e, t, a, r) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                rm(e, t, a, r),
                t = t.sibling
    }
    function rm(e, t, a, r) {
        var s = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Wt(e, t, a, r),
            s & 2048 && Qi(9, t);
            break;
        case 1:
            Wt(e, t, a, r);
            break;
        case 3:
            Wt(e, t, a, r),
            s & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && Pi(e)));
            break;
        case 12:
            if (s & 2048) {
                Wt(e, t, a, r),
                e = t.stateNode;
                try {
                    var f = t.memoizedProps
                      , y = f.id
                      , v = f.onPostCommit;
                    typeof v == "function" && v(y, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (S) {
                    Ae(t, t.return, S)
                }
            } else
                Wt(e, t, a, r);
            break;
        case 13:
            Wt(e, t, a, r);
            break;
        case 23:
            break;
        case 22:
            f = t.stateNode,
            y = t.alternate,
            t.memoizedState !== null ? f._visibility & 2 ? Wt(e, t, a, r) : er(e, t) : f._visibility & 2 ? Wt(e, t, a, r) : (f._visibility |= 2,
            Ja(e, t, a, r, (t.subtreeFlags & 10256) !== 0)),
            s & 2048 && iu(y, t);
            break;
        case 24:
            Wt(e, t, a, r),
            s & 2048 && ru(t.alternate, t);
            break;
        default:
            Wt(e, t, a, r)
        }
    }
    function Ja(e, t, a, r, s) {
        for (s = s && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var f = e
              , y = t
              , v = a
              , S = r
              , N = y.flags;
            switch (y.tag) {
            case 0:
            case 11:
            case 15:
                Ja(f, y, v, S, s),
                Qi(8, y);
                break;
            case 23:
                break;
            case 22:
                var Y = y.stateNode;
                y.memoizedState !== null ? Y._visibility & 2 ? Ja(f, y, v, S, s) : er(f, y) : (Y._visibility |= 2,
                Ja(f, y, v, S, s)),
                s && N & 2048 && iu(y.alternate, y);
                break;
            case 24:
                Ja(f, y, v, S, s),
                s && N & 2048 && ru(y.alternate, y);
                break;
            default:
                Ja(f, y, v, S, s)
            }
            t = t.sibling
        }
    }
    function er(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = e
                  , r = t
                  , s = r.flags;
                switch (r.tag) {
                case 22:
                    er(a, r),
                    s & 2048 && iu(r.alternate, r);
                    break;
                case 24:
                    er(a, r),
                    s & 2048 && ru(r.alternate, r);
                    break;
                default:
                    er(a, r)
                }
                t = t.sibling
            }
    }
    var tr = 8192;
    function qa(e) {
        if (e.subtreeFlags & tr)
            for (e = e.child; e !== null; )
                lm(e),
                e = e.sibling
    }
    function lm(e) {
        switch (e.tag) {
        case 26:
            qa(e),
            e.flags & tr && e.memoizedState !== null && k2(Bt, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            qa(e);
            break;
        case 3:
        case 4:
            var t = Bt;
            Bt = Zl(e.stateNode.containerInfo),
            qa(e),
            Bt = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = tr,
            tr = 16777216,
            qa(e),
            tr = t) : qa(e));
            break;
        default:
            qa(e)
        }
    }
    function om(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function nr(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    Xe = r,
                    um(r, e)
                }
            om(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                sm(e),
                e = e.sibling
    }
    function sm(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            nr(e),
            e.flags & 2048 && Hn(9, e, e.return);
            break;
        case 3:
            nr(e);
            break;
        case 12:
            nr(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            Ll(e)) : nr(e);
            break;
        default:
            nr(e)
        }
    }
    function Ll(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    Xe = r,
                    um(r, e)
                }
            om(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                Hn(8, t, t.return),
                Ll(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                Ll(t));
                break;
            default:
                Ll(t)
            }
            e = e.sibling
        }
    }
    function um(e, t) {
        for (; Xe !== null; ) {
            var a = Xe;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Hn(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var r = a.memoizedState.cachePool.pool;
                    r != null && r.refCount++
                }
                break;
            case 24:
                Pi(a.memoizedState.cache)
            }
            if (r = a.child,
            r !== null)
                r.return = a,
                Xe = r;
            else
                e: for (a = e; Xe !== null; ) {
                    r = Xe;
                    var s = r.sibling
                      , f = r.return;
                    if (em(r),
                    r === a) {
                        Xe = null;
                        break e
                    }
                    if (s !== null) {
                        s.return = f,
                        Xe = s;
                        break e
                    }
                    Xe = f
                }
        }
    }
    var s2 = {
        getCacheForType: function(e) {
            var t = tt(We)
              , a = t.data.get(e);
            return a === void 0 && (a = e(),
            t.data.set(e, a)),
            a
        }
    }
      , u2 = typeof WeakMap == "function" ? WeakMap : Map
      , ye = 0
      , je = null
      , ce = null
      , de = 0
      , be = 0
      , vt = null
      , zn = !1
      , Ia = !1
      , lu = !1
      , dn = 0
      , Le = 0
      , On = 0
      , ma = 0
      , ou = 0
      , Mt = 0
      , Ka = 0
      , ar = null
      , ct = null
      , su = !1
      , uu = 0
      , Hl = 1 / 0
      , Yl = null
      , Pn = null
      , Ke = 0
      , Fn = null
      , Qa = null
      , $a = 0
      , cu = 0
      , fu = null
      , cm = null
      , ir = 0
      , hu = null;
    function xt() {
        if ((ye & 2) !== 0 && de !== 0)
            return de & -de;
        if (B.T !== null) {
            var e = Ua;
            return e !== 0 ? e : vu()
        }
        return Cf()
    }
    function fm() {
        Mt === 0 && (Mt = (de & 536870912) === 0 || pe ? Af() : 536870912);
        var e = wt.current;
        return e !== null && (e.flags |= 32),
        Mt
    }
    function St(e, t, a) {
        (e === je && (be === 2 || be === 9) || e.cancelPendingCommit !== null) && (ei(e, 0),
        Un(e, de, Mt, !1)),
        Ai(e, a),
        ((ye & 2) === 0 || e !== je) && (e === je && ((ye & 2) === 0 && (ma |= a),
        Le === 4 && Un(e, de, Mt, !1)),
        Zt(e))
    }
    function hm(e, t, a) {
        if ((ye & 6) !== 0)
            throw Error(o(327));
        var r = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Si(e, t)
          , s = r ? h2(e, t) : gu(e, t, !0)
          , f = r;
        do {
            if (s === 0) {
                Ia && !r && Un(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                f && !c2(a)) {
                    s = gu(e, t, !1),
                    f = !1;
                    continue
                }
                if (s === 2) {
                    if (f = t,
                    e.errorRecoveryDisabledLanes & f)
                        var y = 0;
                    else
                        y = e.pendingLanes & -536870913,
                        y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
                    if (y !== 0) {
                        t = y;
                        e: {
                            var v = e;
                            s = ar;
                            var S = v.current.memoizedState.isDehydrated;
                            if (S && (ei(v, y).flags |= 256),
                            y = gu(v, y, !1),
                            y !== 2) {
                                if (lu && !S) {
                                    v.errorRecoveryDisabledLanes |= f,
                                    ma |= f,
                                    s = 4;
                                    break e
                                }
                                f = ct,
                                ct = s,
                                f !== null && (ct === null ? ct = f : ct.push.apply(ct, f))
                            }
                            s = y
                        }
                        if (f = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    ei(e, 0),
                    Un(e, t, 0, !0);
                    break
                }
                e: {
                    switch (r = e,
                    f = s,
                    f) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Un(r, t, Mt, !zn);
                        break e;
                    case 2:
                        ct = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (s = uu + 300 - Ft(),
                    10 < s)) {
                        if (Un(r, t, Mt, !zn),
                        Gr(r, 0, !0) !== 0)
                            break e;
                        r.timeoutHandle = Vm(dm.bind(null, r, a, ct, Yl, su, t, Mt, ma, Ka, zn, f, 2, -0, 0), s);
                        break e
                    }
                    dm(r, a, ct, Yl, su, t, Mt, ma, Ka, zn, f, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Zt(e)
    }
    function dm(e, t, a, r, s, f, y, v, S, N, Y, O, M, R) {
        if (e.timeoutHandle = -1,
        O = t.subtreeFlags,
        (O & 8192 || (O & 16785408) === 16785408) && (fr = {
            stylesheets: null,
            count: 0,
            unsuspend: G2
        },
        lm(t),
        O = X2(),
        O !== null)) {
            e.cancelPendingCommit = O(xm.bind(null, e, t, f, a, r, s, y, v, S, Y, 1, M, R)),
            Un(e, f, y, !N);
            return
        }
        xm(e, t, f, a, r, s, y, v, S)
    }
    function c2(e) {
        for (var t = e; ; ) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var r = 0; r < a.length; r++) {
                    var s = a[r]
                      , f = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!gt(f(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child,
            t.subtreeFlags & 16384 && a !== null)
                a.return = t,
                t = a;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Un(e, t, a, r) {
        t &= ~ou,
        t &= ~ma,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        r && (e.warmLanes |= t),
        r = e.expirationTimes;
        for (var s = t; 0 < s; ) {
            var f = 31 - mt(s)
              , y = 1 << f;
            r[f] = -1,
            s &= ~y
        }
        a !== 0 && jf(e, a, t)
    }
    function Bl() {
        return (ye & 6) === 0 ? (rr(0),
        !1) : !0
    }
    function du() {
        if (ce !== null) {
            if (be === 0)
                var e = ce.return;
            else
                e = ce,
                rn = sa = null,
                Rs(e),
                ka = null,
                qi = 0,
                e = ce;
            for (; e !== null; )
                kd(e.alternate, e),
                e = e.return;
            ce = null
        }
    }
    function ei(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
        w2(a)),
        a = e.cancelPendingCommit,
        a !== null && (e.cancelPendingCommit = null,
        a()),
        du(),
        je = e,
        ce = a = tn(e.current, null),
        de = t,
        be = 0,
        vt = null,
        zn = !1,
        Ia = Si(e, t),
        lu = !1,
        Ka = Mt = ou = ma = On = Le = 0,
        ct = ar = null,
        su = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var r = e.entangledLanes;
        if (r !== 0)
            for (e = e.entanglements,
            r &= t; 0 < r; ) {
                var s = 31 - mt(r)
                  , f = 1 << s;
                t |= e[s],
                r &= ~f
            }
        return dn = t,
        al(),
        a
    }
    function mm(e, t) {
        oe = null,
        B.H = Al,
        t === Ui || t === hl ? (t = Eh(),
        be = 3) : t === wh ? (t = Eh(),
        be = 4) : be = t === Ld ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        vt = t,
        ce === null && (Le = 1,
        Nl(e, jt(t, e.current)))
    }
    function gm() {
        var e = B.H;
        return B.H = Al,
        e === null ? Al : e
    }
    function pm() {
        var e = B.A;
        return B.A = s2,
        e
    }
    function mu() {
        Le = 4,
        zn || (de & 4194048) !== de && wt.current !== null || (Ia = !0),
        (On & 134217727) === 0 && (ma & 134217727) === 0 || je === null || Un(je, de, Mt, !1)
    }
    function gu(e, t, a) {
        var r = ye;
        ye |= 2;
        var s = gm()
          , f = pm();
        (je !== e || de !== t) && (Yl = null,
        ei(e, t)),
        t = !1;
        var y = Le;
        e: do
            try {
                if (be !== 0 && ce !== null) {
                    var v = ce
                      , S = vt;
                    switch (be) {
                    case 8:
                        du(),
                        y = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        wt.current === null && (t = !0);
                        var N = be;
                        if (be = 0,
                        vt = null,
                        ti(e, v, S, N),
                        a && Ia) {
                            y = 0;
                            break e
                        }
                        break;
                    default:
                        N = be,
                        be = 0,
                        vt = null,
                        ti(e, v, S, N)
                    }
                }
                f2(),
                y = Le;
                break
            } catch (Y) {
                mm(e, Y)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        rn = sa = null,
        ye = r,
        B.H = s,
        B.A = f,
        ce === null && (je = null,
        de = 0,
        al()),
        y
    }
    function f2() {
        for (; ce !== null; )
            ym(ce)
    }
    function h2(e, t) {
        var a = ye;
        ye |= 2;
        var r = gm()
          , s = pm();
        je !== e || de !== t ? (Yl = null,
        Hl = Ft() + 500,
        ei(e, t)) : Ia = Si(e, t);
        e: do
            try {
                if (be !== 0 && ce !== null) {
                    t = ce;
                    var f = vt;
                    t: switch (be) {
                    case 1:
                        be = 0,
                        vt = null,
                        ti(e, t, f, 1);
                        break;
                    case 2:
                    case 9:
                        if (Mh(f)) {
                            be = 0,
                            vt = null,
                            bm(t);
                            break
                        }
                        t = function() {
                            be !== 2 && be !== 9 || je !== e || (be = 7),
                            Zt(e)
                        }
                        ,
                        f.then(t, t);
                        break e;
                    case 3:
                        be = 7;
                        break e;
                    case 4:
                        be = 5;
                        break e;
                    case 7:
                        Mh(f) ? (be = 0,
                        vt = null,
                        bm(t)) : (be = 0,
                        vt = null,
                        ti(e, t, f, 7));
                        break;
                    case 5:
                        var y = null;
                        switch (ce.tag) {
                        case 26:
                            y = ce.memoizedState;
                        case 5:
                        case 27:
                            var v = ce;
                            if (!y || $m(y)) {
                                be = 0,
                                vt = null;
                                var S = v.sibling;
                                if (S !== null)
                                    ce = S;
                                else {
                                    var N = v.return;
                                    N !== null ? (ce = N,
                                    zl(N)) : ce = null
                                }
                                break t
                            }
                        }
                        be = 0,
                        vt = null,
                        ti(e, t, f, 5);
                        break;
                    case 6:
                        be = 0,
                        vt = null,
                        ti(e, t, f, 6);
                        break;
                    case 8:
                        du(),
                        Le = 6;
                        break e;
                    default:
                        throw Error(o(462))
                    }
                }
                d2();
                break
            } catch (Y) {
                mm(e, Y)
            }
        while (!0);
        return rn = sa = null,
        B.H = r,
        B.A = s,
        ye = a,
        ce !== null ? 0 : (je = null,
        de = 0,
        al(),
        Le)
    }
    function d2() {
        for (; ce !== null && !By(); )
            ym(ce)
    }
    function ym(e) {
        var t = Zd(e.alternate, e, dn);
        e.memoizedProps = e.pendingProps,
        t === null ? zl(e) : ce = t
    }
    function bm(e) {
        var t = e
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Pd(a, t, t.pendingProps, t.type, void 0, de);
            break;
        case 11:
            t = Pd(a, t, t.pendingProps, t.type.render, t.ref, de);
            break;
        case 5:
            Rs(t);
        default:
            kd(a, t),
            t = ce = vh(t, dn),
            t = Zd(a, t, dn)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? zl(e) : ce = t
    }
    function ti(e, t, a, r) {
        rn = sa = null,
        Rs(t),
        ka = null,
        qi = 0;
        var s = t.return;
        try {
            if (n2(e, s, t, a, de)) {
                Le = 1,
                Nl(e, jt(a, e.current)),
                ce = null;
                return
            }
        } catch (f) {
            if (s !== null)
                throw ce = s,
                f;
            Le = 1,
            Nl(e, jt(a, e.current)),
            ce = null;
            return
        }
        t.flags & 32768 ? (pe || r === 1 ? e = !0 : Ia || (de & 536870912) !== 0 ? e = !1 : (zn = e = !0,
        (r === 2 || r === 9 || r === 3 || r === 6) && (r = wt.current,
        r !== null && r.tag === 13 && (r.flags |= 16384))),
        vm(t, e)) : zl(t)
    }
    function zl(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                vm(t, zn);
                return
            }
            e = t.return;
            var a = i2(t.alternate, t, dn);
            if (a !== null) {
                ce = a;
                return
            }
            if (t = t.sibling,
            t !== null) {
                ce = t;
                return
            }
            ce = t = e
        } while (t !== null);
        Le === 0 && (Le = 5)
    }
    function vm(e, t) {
        do {
            var a = r2(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767,
                ce = a;
                return
            }
            if (a = e.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                ce = e;
                return
            }
            ce = e = a
        } while (e !== null);
        Le = 6,
        ce = null
    }
    function xm(e, t, a, r, s, f, y, v, S) {
        e.cancelPendingCommit = null;
        do
            Ol();
        while (Ke !== 0);
        if ((ye & 6) !== 0)
            throw Error(o(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(o(177));
            if (f = t.lanes | t.childLanes,
            f |= rs,
            Gy(e, a, f, y, v, S),
            e === je && (ce = je = null,
            de = 0),
            Qa = t,
            Fn = e,
            $a = a,
            cu = f,
            fu = s,
            cm = r,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            y2(_r, function() {
                return Tm(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            r = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || r) {
                r = B.T,
                B.T = null,
                s = W.p,
                W.p = 2,
                y = ye,
                ye |= 4;
                try {
                    l2(e, t, a)
                } finally {
                    ye = y,
                    W.p = s,
                    B.T = r
                }
            }
            Ke = 1,
            Sm(),
            Am(),
            Dm()
        }
    }
    function Sm() {
        if (Ke === 1) {
            Ke = 0;
            var e = Fn
              , t = Qa
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = B.T,
                B.T = null;
                var r = W.p;
                W.p = 2;
                var s = ye;
                ye |= 4;
                try {
                    am(t, e);
                    var f = Nu
                      , y = uh(e.containerInfo)
                      , v = f.focusedElem
                      , S = f.selectionRange;
                    if (y !== v && v && v.ownerDocument && sh(v.ownerDocument.documentElement, v)) {
                        if (S !== null && es(v)) {
                            var N = S.start
                              , Y = S.end;
                            if (Y === void 0 && (Y = N),
                            "selectionStart"in v)
                                v.selectionStart = N,
                                v.selectionEnd = Math.min(Y, v.value.length);
                            else {
                                var O = v.ownerDocument || document
                                  , M = O && O.defaultView || window;
                                if (M.getSelection) {
                                    var R = M.getSelection()
                                      , te = v.textContent.length
                                      , $ = Math.min(S.start, te)
                                      , Se = S.end === void 0 ? $ : Math.min(S.end, te);
                                    !R.extend && $ > Se && (y = Se,
                                    Se = $,
                                    $ = y);
                                    var T = oh(v, $)
                                      , j = oh(v, Se);
                                    if (T && j && (R.rangeCount !== 1 || R.anchorNode !== T.node || R.anchorOffset !== T.offset || R.focusNode !== j.node || R.focusOffset !== j.offset)) {
                                        var C = O.createRange();
                                        C.setStart(T.node, T.offset),
                                        R.removeAllRanges(),
                                        $ > Se ? (R.addRange(C),
                                        R.extend(j.node, j.offset)) : (C.setEnd(j.node, j.offset),
                                        R.addRange(C))
                                    }
                                }
                            }
                        }
                        for (O = [],
                        R = v; R = R.parentNode; )
                            R.nodeType === 1 && O.push({
                                element: R,
                                left: R.scrollLeft,
                                top: R.scrollTop
                            });
                        for (typeof v.focus == "function" && v.focus(),
                        v = 0; v < O.length; v++) {
                            var z = O[v];
                            z.element.scrollLeft = z.left,
                            z.element.scrollTop = z.top
                        }
                    }
                    ql = !!Cu,
                    Nu = Cu = null
                } finally {
                    ye = s,
                    W.p = r,
                    B.T = a
                }
            }
            e.current = t,
            Ke = 2
        }
    }
    function Am() {
        if (Ke === 2) {
            Ke = 0;
            var e = Fn
              , t = Qa
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = B.T,
                B.T = null;
                var r = W.p;
                W.p = 2;
                var s = ye;
                ye |= 4;
                try {
                    $d(e, t.alternate, t)
                } finally {
                    ye = s,
                    W.p = r,
                    B.T = a
                }
            }
            Ke = 3
        }
    }
    function Dm() {
        if (Ke === 4 || Ke === 3) {
            Ke = 0,
            zy();
            var e = Fn
              , t = Qa
              , a = $a
              , r = cm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0,
            Qa = Fn = null,
            jm(e, e.pendingLanes));
            var s = e.pendingLanes;
            if (s === 0 && (Pn = null),
            Ho(a),
            t = t.stateNode,
            dt && typeof dt.onCommitFiberRoot == "function")
                try {
                    dt.onCommitFiberRoot(xi, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (r !== null) {
                t = B.T,
                s = W.p,
                W.p = 2,
                B.T = null;
                try {
                    for (var f = e.onRecoverableError, y = 0; y < r.length; y++) {
                        var v = r[y];
                        f(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    B.T = t,
                    W.p = s
                }
            }
            ($a & 3) !== 0 && Ol(),
            Zt(e),
            s = e.pendingLanes,
            (a & 4194090) !== 0 && (s & 42) !== 0 ? e === hu ? ir++ : (ir = 0,
            hu = e) : ir = 0,
            rr(0)
        }
    }
    function jm(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        Pi(t)))
    }
    function Ol(e) {
        return Sm(),
        Am(),
        Dm(),
        Tm()
    }
    function Tm() {
        if (Ke !== 5)
            return !1;
        var e = Fn
          , t = cu;
        cu = 0;
        var a = Ho($a)
          , r = B.T
          , s = W.p;
        try {
            W.p = 32 > a ? 32 : a,
            B.T = null,
            a = fu,
            fu = null;
            var f = Fn
              , y = $a;
            if (Ke = 0,
            Qa = Fn = null,
            $a = 0,
            (ye & 6) !== 0)
                throw Error(o(331));
            var v = ye;
            if (ye |= 4,
            sm(f.current),
            rm(f, f.current, y, a),
            ye = v,
            rr(0, !1),
            dt && typeof dt.onPostCommitFiberRoot == "function")
                try {
                    dt.onPostCommitFiberRoot(xi, f)
                } catch {}
            return !0
        } finally {
            W.p = s,
            B.T = r,
            jm(e, t)
        }
    }
    function Cm(e, t, a) {
        t = jt(a, t),
        t = Zs(e.stateNode, t, 2),
        e = Mn(e, t, 2),
        e !== null && (Ai(e, 2),
        Zt(e))
    }
    function Ae(e, t, a) {
        if (e.tag === 3)
            Cm(e, e, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Cm(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pn === null || !Pn.has(r))) {
                        e = jt(a, e),
                        a = Rd(2),
                        r = Mn(t, a, 2),
                        r !== null && (Ed(a, r, t, e),
                        Ai(r, 2),
                        Zt(r));
                        break
                    }
                }
                t = t.return
            }
    }
    function pu(e, t, a) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new u2;
            var s = new Set;
            r.set(t, s)
        } else
            s = r.get(t),
            s === void 0 && (s = new Set,
            r.set(t, s));
        s.has(a) || (lu = !0,
        s.add(a),
        e = m2.bind(null, e, t, a),
        t.then(e, e))
    }
    function m2(e, t, a) {
        var r = e.pingCache;
        r !== null && r.delete(t),
        e.pingedLanes |= e.suspendedLanes & a,
        e.warmLanes &= ~a,
        je === e && (de & a) === a && (Le === 4 || Le === 3 && (de & 62914560) === de && 300 > Ft() - uu ? (ye & 2) === 0 && ei(e, 0) : ou |= a,
        Ka === de && (Ka = 0)),
        Zt(e)
    }
    function Nm(e, t) {
        t === 0 && (t = Df()),
        e = za(e, t),
        e !== null && (Ai(e, t),
        Zt(e))
    }
    function g2(e) {
        var t = e.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        Nm(e, a)
    }
    function p2(e, t) {
        var a = 0;
        switch (e.tag) {
        case 13:
            var r = e.stateNode
              , s = e.memoizedState;
            s !== null && (a = s.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        case 22:
            r = e.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        r !== null && r.delete(t),
        Nm(e, a)
    }
    function y2(e, t) {
        return Mo(e, t)
    }
    var Pl = null
      , ni = null
      , yu = !1
      , Fl = !1
      , bu = !1
      , ga = 0;
    function Zt(e) {
        e !== ni && e.next === null && (ni === null ? Pl = ni = e : ni = ni.next = e),
        Fl = !0,
        yu || (yu = !0,
        v2())
    }
    function rr(e, t) {
        if (!bu && Fl) {
            bu = !0;
            do
                for (var a = !1, r = Pl; r !== null; ) {
                    if (e !== 0) {
                        var s = r.pendingLanes;
                        if (s === 0)
                            var f = 0;
                        else {
                            var y = r.suspendedLanes
                              , v = r.pingedLanes;
                            f = (1 << 31 - mt(42 | e) + 1) - 1,
                            f &= s & ~(y & ~v),
                            f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0
                        }
                        f !== 0 && (a = !0,
                        Em(r, f))
                    } else
                        f = de,
                        f = Gr(r, r === je ? f : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1),
                        (f & 3) === 0 || Si(r, f) || (a = !0,
                        Em(r, f));
                    r = r.next
                }
            while (a);
            bu = !1
        }
    }
    function b2() {
        wm()
    }
    function wm() {
        Fl = yu = !1;
        var e = 0;
        ga !== 0 && (N2() && (e = ga),
        ga = 0);
        for (var t = Ft(), a = null, r = Pl; r !== null; ) {
            var s = r.next
              , f = Mm(r, t);
            f === 0 ? (r.next = null,
            a === null ? Pl = s : a.next = s,
            s === null && (ni = a)) : (a = r,
            (e !== 0 || (f & 3) !== 0) && (Fl = !0)),
            r = s
        }
        rr(e)
    }
    function Mm(e, t) {
        for (var a = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
            var y = 31 - mt(f)
              , v = 1 << y
              , S = s[y];
            S === -1 ? ((v & a) === 0 || (v & r) !== 0) && (s[y] = Zy(v, t)) : S <= t && (e.expiredLanes |= v),
            f &= ~v
        }
        if (t = je,
        a = de,
        a = Gr(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        r = e.callbackNode,
        a === 0 || e === t && (be === 2 || be === 9) || e.cancelPendingCommit !== null)
            return r !== null && r !== null && Ro(r),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((a & 3) === 0 || Si(e, a)) {
            if (t = a & -a,
            t === e.callbackPriority)
                return t;
            switch (r !== null && Ro(r),
            Ho(a)) {
            case 2:
            case 8:
                a = xf;
                break;
            case 32:
                a = _r;
                break;
            case 268435456:
                a = Sf;
                break;
            default:
                a = _r
            }
            return r = Rm.bind(null, e),
            a = Mo(a, r),
            e.callbackPriority = t,
            e.callbackNode = a,
            t
        }
        return r !== null && r !== null && Ro(r),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Rm(e, t) {
        if (Ke !== 0 && Ke !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var a = e.callbackNode;
        if (Ol() && e.callbackNode !== a)
            return null;
        var r = de;
        return r = Gr(e, e === je ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        r === 0 ? null : (hm(e, r, t),
        Mm(e, Ft()),
        e.callbackNode != null && e.callbackNode === a ? Rm.bind(null, e) : null)
    }
    function Em(e, t) {
        if (Ol())
            return null;
        hm(e, t, !0)
    }
    function v2() {
        M2(function() {
            (ye & 6) !== 0 ? Mo(vf, b2) : wm()
        })
    }
    function vu() {
        return ga === 0 && (ga = Af()),
        ga
    }
    function Lm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ir("" + e)
    }
    function Hm(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
        a.value = t.value,
        e.id && a.setAttribute("form", e.id),
        t.parentNode.insertBefore(a, t),
        e = new FormData(e),
        a.parentNode.removeChild(a),
        e
    }
    function x2(e, t, a, r, s) {
        if (t === "submit" && a && a.stateNode === s) {
            var f = Lm((s[lt] || null).action)
              , y = r.submitter;
            y && (t = (t = y[lt] || null) ? Lm(t.formAction) : y.getAttribute("formAction"),
            t !== null && (f = t,
            y = null));
            var v = new el("action","action",null,r,s);
            e.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (r.defaultPrevented) {
                            if (ga !== 0) {
                                var S = y ? Hm(s, y) : new FormData(s);
                                Fs(a, {
                                    pending: !0,
                                    data: S,
                                    method: s.method,
                                    action: f
                                }, null, S)
                            }
                        } else
                            typeof f == "function" && (v.preventDefault(),
                            S = y ? Hm(s, y) : new FormData(s),
                            Fs(a, {
                                pending: !0,
                                data: S,
                                method: s.method,
                                action: f
                            }, f, S))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var xu = 0; xu < is.length; xu++) {
        var Su = is[xu]
          , S2 = Su.toLowerCase()
          , A2 = Su[0].toUpperCase() + Su.slice(1);
        Yt(S2, "on" + A2)
    }
    Yt(hh, "onAnimationEnd"),
    Yt(dh, "onAnimationIteration"),
    Yt(mh, "onAnimationStart"),
    Yt("dblclick", "onDoubleClick"),
    Yt("focusin", "onFocus"),
    Yt("focusout", "onBlur"),
    Yt(F1, "onTransitionRun"),
    Yt(U1, "onTransitionStart"),
    Yt(V1, "onTransitionCancel"),
    Yt(gh, "onTransitionEnd"),
    Ca("onMouseEnter", ["mouseout", "mouseover"]),
    Ca("onMouseLeave", ["mouseout", "mouseover"]),
    Ca("onPointerEnter", ["pointerout", "pointerover"]),
    Ca("onPointerLeave", ["pointerout", "pointerover"]),
    $n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    $n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    $n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    $n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , D2 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lr));
    function Ym(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var r = e[a]
              , s = r.event;
            r = r.listeners;
            e: {
                var f = void 0;
                if (t)
                    for (var y = r.length - 1; 0 <= y; y--) {
                        var v = r[y]
                          , S = v.instance
                          , N = v.currentTarget;
                        if (v = v.listener,
                        S !== f && s.isPropagationStopped())
                            break e;
                        f = v,
                        s.currentTarget = N;
                        try {
                            f(s)
                        } catch (Y) {
                            Cl(Y)
                        }
                        s.currentTarget = null,
                        f = S
                    }
                else
                    for (y = 0; y < r.length; y++) {
                        if (v = r[y],
                        S = v.instance,
                        N = v.currentTarget,
                        v = v.listener,
                        S !== f && s.isPropagationStopped())
                            break e;
                        f = v,
                        s.currentTarget = N;
                        try {
                            f(s)
                        } catch (Y) {
                            Cl(Y)
                        }
                        s.currentTarget = null,
                        f = S
                    }
            }
        }
    }
    function fe(e, t) {
        var a = t[Yo];
        a === void 0 && (a = t[Yo] = new Set);
        var r = e + "__bubble";
        a.has(r) || (Bm(t, e, 2, !1),
        a.add(r))
    }
    function Au(e, t, a) {
        var r = 0;
        t && (r |= 4),
        Bm(a, e, r, t)
    }
    var Ul = "_reactListening" + Math.random().toString(36).slice(2);
    function Du(e) {
        if (!e[Ul]) {
            e[Ul] = !0,
            wf.forEach(function(a) {
                a !== "selectionchange" && (D2.has(a) || Au(a, !1, e),
                Au(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ul] || (t[Ul] = !0,
            Au("selectionchange", !1, t))
        }
    }
    function Bm(e, t, a, r) {
        switch (r0(t)) {
        case 2:
            var s = I2;
            break;
        case 8:
            s = K2;
            break;
        default:
            s = Ou
        }
        a = s.bind(null, t, a, e),
        s = void 0,
        !Go || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
        r ? s !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: s
        }) : e.addEventListener(t, a, !0) : s !== void 0 ? e.addEventListener(t, a, {
            passive: s
        }) : e.addEventListener(t, a, !1)
    }
    function ju(e, t, a, r, s) {
        var f = r;
        if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
            e: for (; ; ) {
                if (r === null)
                    return;
                var y = r.tag;
                if (y === 3 || y === 4) {
                    var v = r.stateNode.containerInfo;
                    if (v === s)
                        break;
                    if (y === 4)
                        for (y = r.return; y !== null; ) {
                            var S = y.tag;
                            if ((S === 3 || S === 4) && y.stateNode.containerInfo === s)
                                return;
                            y = y.return
                        }
                    for (; v !== null; ) {
                        if (y = Da(v),
                        y === null)
                            return;
                        if (S = y.tag,
                        S === 5 || S === 6 || S === 26 || S === 27) {
                            r = f = y;
                            continue e
                        }
                        v = v.parentNode
                    }
                }
                r = r.return
            }
        _f(function() {
            var N = f
              , Y = Wo(a)
              , O = [];
            e: {
                var M = ph.get(e);
                if (M !== void 0) {
                    var R = el
                      , te = e;
                    switch (e) {
                    case "keypress":
                        if (Qr(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        R = y1;
                        break;
                    case "focusin":
                        te = "focus",
                        R = qo;
                        break;
                    case "focusout":
                        te = "blur",
                        R = qo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        R = qo;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        R = Gf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        R = r1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        R = x1;
                        break;
                    case hh:
                    case dh:
                    case mh:
                        R = s1;
                        break;
                    case gh:
                        R = A1;
                        break;
                    case "scroll":
                    case "scrollend":
                        R = a1;
                        break;
                    case "wheel":
                        R = j1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        R = c1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        R = Xf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        R = C1
                    }
                    var $ = (t & 4) !== 0
                      , Se = !$ && (e === "scroll" || e === "scrollend")
                      , T = $ ? M !== null ? M + "Capture" : null : M;
                    $ = [];
                    for (var j = N, C; j !== null; ) {
                        var z = j;
                        if (C = z.stateNode,
                        z = z.tag,
                        z !== 5 && z !== 26 && z !== 27 || C === null || T === null || (z = Ti(j, T),
                        z != null && $.push(or(j, z, C))),
                        Se)
                            break;
                        j = j.return
                    }
                    0 < $.length && (M = new R(M,te,null,a,Y),
                    O.push({
                        event: M,
                        listeners: $
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (M = e === "mouseover" || e === "pointerover",
                    R = e === "mouseout" || e === "pointerout",
                    M && a !== _o && (te = a.relatedTarget || a.fromElement) && (Da(te) || te[Aa]))
                        break e;
                    if ((R || M) && (M = Y.window === Y ? Y : (M = Y.ownerDocument) ? M.defaultView || M.parentWindow : window,
                    R ? (te = a.relatedTarget || a.toElement,
                    R = N,
                    te = te ? Da(te) : null,
                    te !== null && (Se = d(te),
                    $ = te.tag,
                    te !== Se || $ !== 5 && $ !== 27 && $ !== 6) && (te = null)) : (R = null,
                    te = N),
                    R !== te)) {
                        if ($ = Gf,
                        z = "onMouseLeave",
                        T = "onMouseEnter",
                        j = "mouse",
                        (e === "pointerout" || e === "pointerover") && ($ = Xf,
                        z = "onPointerLeave",
                        T = "onPointerEnter",
                        j = "pointer"),
                        Se = R == null ? M : ji(R),
                        C = te == null ? M : ji(te),
                        M = new $(z,j + "leave",R,a,Y),
                        M.target = Se,
                        M.relatedTarget = C,
                        z = null,
                        Da(Y) === N && ($ = new $(T,j + "enter",te,a,Y),
                        $.target = C,
                        $.relatedTarget = Se,
                        z = $),
                        Se = z,
                        R && te)
                            t: {
                                for ($ = R,
                                T = te,
                                j = 0,
                                C = $; C; C = ai(C))
                                    j++;
                                for (C = 0,
                                z = T; z; z = ai(z))
                                    C++;
                                for (; 0 < j - C; )
                                    $ = ai($),
                                    j--;
                                for (; 0 < C - j; )
                                    T = ai(T),
                                    C--;
                                for (; j--; ) {
                                    if ($ === T || T !== null && $ === T.alternate)
                                        break t;
                                    $ = ai($),
                                    T = ai(T)
                                }
                                $ = null
                            }
                        else
                            $ = null;
                        R !== null && zm(O, M, R, $, !1),
                        te !== null && Se !== null && zm(O, Se, te, $, !0)
                    }
                }
                e: {
                    if (M = N ? ji(N) : window,
                    R = M.nodeName && M.nodeName.toLowerCase(),
                    R === "select" || R === "input" && M.type === "file")
                        var X = th;
                    else if ($f(M))
                        if (nh)
                            X = z1;
                        else {
                            X = Y1;
                            var se = H1
                        }
                    else
                        R = M.nodeName,
                        !R || R.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? N && Vo(N.elementType) && (X = th) : X = B1;
                    if (X && (X = X(e, N))) {
                        eh(O, X, a, Y);
                        break e
                    }
                    se && se(e, M, N),
                    e === "focusout" && N && M.type === "number" && N.memoizedProps.value != null && Uo(M, "number", M.value)
                }
                switch (se = N ? ji(N) : window,
                e) {
                case "focusin":
                    ($f(se) || se.contentEditable === "true") && (Ha = se,
                    ts = N,
                    Hi = null);
                    break;
                case "focusout":
                    Hi = ts = Ha = null;
                    break;
                case "mousedown":
                    ns = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ns = !1,
                    ch(O, a, Y);
                    break;
                case "selectionchange":
                    if (P1)
                        break;
                case "keydown":
                case "keyup":
                    ch(O, a, Y)
                }
                var I;
                if (Ko)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ee = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ee = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ee = "onCompositionUpdate";
                            break e
                        }
                        ee = void 0
                    }
                else
                    La ? Kf(e, a) && (ee = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ee = "onCompositionStart");
                ee && (Jf && a.locale !== "ko" && (La || ee !== "onCompositionStart" ? ee === "onCompositionEnd" && La && (I = Wf()) : (Tn = Y,
                ko = "value"in Tn ? Tn.value : Tn.textContent,
                La = !0)),
                se = Vl(N, ee),
                0 < se.length && (ee = new kf(ee,e,null,a,Y),
                O.push({
                    event: ee,
                    listeners: se
                }),
                I ? ee.data = I : (I = Qf(a),
                I !== null && (ee.data = I)))),
                (I = w1 ? M1(e, a) : R1(e, a)) && (ee = Vl(N, "onBeforeInput"),
                0 < ee.length && (se = new kf("onBeforeInput","beforeinput",null,a,Y),
                O.push({
                    event: se,
                    listeners: ee
                }),
                se.data = I)),
                x2(O, e, N, a, Y)
            }
            Ym(O, t)
        })
    }
    function or(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function Vl(e, t) {
        for (var a = t + "Capture", r = []; e !== null; ) {
            var s = e
              , f = s.stateNode;
            if (s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || f === null || (s = Ti(e, a),
            s != null && r.unshift(or(e, s, f)),
            s = Ti(e, t),
            s != null && r.push(or(e, s, f))),
            e.tag === 3)
                return r;
            e = e.return
        }
        return []
    }
    function ai(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function zm(e, t, a, r, s) {
        for (var f = t._reactName, y = []; a !== null && a !== r; ) {
            var v = a
              , S = v.alternate
              , N = v.stateNode;
            if (v = v.tag,
            S !== null && S === r)
                break;
            v !== 5 && v !== 26 && v !== 27 || N === null || (S = N,
            s ? (N = Ti(a, f),
            N != null && y.unshift(or(a, N, S))) : s || (N = Ti(a, f),
            N != null && y.push(or(a, N, S)))),
            a = a.return
        }
        y.length !== 0 && e.push({
            event: t,
            listeners: y
        })
    }
    var j2 = /\r\n?/g
      , T2 = /\u0000|\uFFFD/g;
    function Om(e) {
        return (typeof e == "string" ? e : "" + e).replace(j2, `
`).replace(T2, "")
    }
    function Pm(e, t) {
        return t = Om(t),
        Om(e) === t
    }
    function _l() {}
    function xe(e, t, a, r, s, f) {
        switch (a) {
        case "children":
            typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Ma(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Ma(e, "" + r);
            break;
        case "className":
            Xr(e, "class", r);
            break;
        case "tabIndex":
            Xr(e, "tabindex", r);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Xr(e, a, r);
            break;
        case "style":
            Uf(e, r, f);
            break;
        case "data":
            if (t !== "object") {
                Xr(e, "data", r);
                break
            }
        case "src":
        case "href":
            if (r === "" && (t !== "a" || a !== "href")) {
                e.removeAttribute(a);
                break
            }
            if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
                e.removeAttribute(a);
                break
            }
            r = Ir("" + r),
            e.setAttribute(a, r);
            break;
        case "action":
        case "formAction":
            if (typeof r == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof f == "function" && (a === "formAction" ? (t !== "input" && xe(e, t, "name", s.name, s, null),
                xe(e, t, "formEncType", s.formEncType, s, null),
                xe(e, t, "formMethod", s.formMethod, s, null),
                xe(e, t, "formTarget", s.formTarget, s, null)) : (xe(e, t, "encType", s.encType, s, null),
                xe(e, t, "method", s.method, s, null),
                xe(e, t, "target", s.target, s, null)));
            if (r == null || typeof r == "symbol" || typeof r == "boolean") {
                e.removeAttribute(a);
                break
            }
            r = Ir("" + r),
            e.setAttribute(a, r);
            break;
        case "onClick":
            r != null && (e.onclick = _l);
            break;
        case "onScroll":
            r != null && fe("scroll", e);
            break;
        case "onScrollEnd":
            r != null && fe("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (r != null) {
                if (typeof r != "object" || !("__html"in r))
                    throw Error(o(61));
                if (a = r.__html,
                a != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    e.innerHTML = a
                }
            }
            break;
        case "multiple":
            e.multiple = r && typeof r != "function" && typeof r != "symbol";
            break;
        case "muted":
            e.muted = r && typeof r != "function" && typeof r != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            a = Ir("" + r),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "" + r) : e.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
            break;
        case "capture":
        case "download":
            r === !0 ? e.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, r) : e.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(a, r) : e.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(a) : e.setAttribute(a, r);
            break;
        case "popover":
            fe("beforetoggle", e),
            fe("toggle", e),
            kr(e, "popover", r);
            break;
        case "xlinkActuate":
            $t(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
        case "xlinkArcrole":
            $t(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
        case "xlinkRole":
            $t(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
        case "xlinkShow":
            $t(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
        case "xlinkTitle":
            $t(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
        case "xlinkType":
            $t(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
        case "xmlBase":
            $t(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
        case "xmlLang":
            $t(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
        case "xmlSpace":
            $t(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
        case "is":
            kr(e, "is", r);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = t1.get(a) || a,
            kr(e, a, r))
        }
    }
    function Tu(e, t, a, r, s, f) {
        switch (a) {
        case "style":
            Uf(e, r, f);
            break;
        case "dangerouslySetInnerHTML":
            if (r != null) {
                if (typeof r != "object" || !("__html"in r))
                    throw Error(o(61));
                if (a = r.__html,
                a != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    e.innerHTML = a
                }
            }
            break;
        case "children":
            typeof r == "string" ? Ma(e, r) : (typeof r == "number" || typeof r == "bigint") && Ma(e, "" + r);
            break;
        case "onScroll":
            r != null && fe("scroll", e);
            break;
        case "onScrollEnd":
            r != null && fe("scrollend", e);
            break;
        case "onClick":
            r != null && (e.onclick = _l);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Mf.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (s = a.endsWith("Capture"),
                    t = a.slice(2, s ? a.length - 7 : void 0),
                    f = e[lt] || null,
                    f = f != null ? f[a] : null,
                    typeof f == "function" && e.removeEventListener(t, f, s),
                    typeof r == "function")) {
                        typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                        e.addEventListener(t, r, s);
                        break e
                    }
                    a in e ? e[a] = r : r === !0 ? e.setAttribute(a, "") : kr(e, a, r)
                }
        }
    }
    function Qe(e, t, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            fe("error", e),
            fe("load", e);
            var r = !1, s = !1, f;
            for (f in a)
                if (a.hasOwnProperty(f)) {
                    var y = a[f];
                    if (y != null)
                        switch (f) {
                        case "src":
                            r = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            xe(e, t, f, y, a, null)
                        }
                }
            s && xe(e, t, "srcSet", a.srcSet, a, null),
            r && xe(e, t, "src", a.src, a, null);
            return;
        case "input":
            fe("invalid", e);
            var v = f = y = s = null
              , S = null
              , N = null;
            for (r in a)
                if (a.hasOwnProperty(r)) {
                    var Y = a[r];
                    if (Y != null)
                        switch (r) {
                        case "name":
                            s = Y;
                            break;
                        case "type":
                            y = Y;
                            break;
                        case "checked":
                            S = Y;
                            break;
                        case "defaultChecked":
                            N = Y;
                            break;
                        case "value":
                            f = Y;
                            break;
                        case "defaultValue":
                            v = Y;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (Y != null)
                                throw Error(o(137, t));
                            break;
                        default:
                            xe(e, t, r, Y, a, null)
                        }
                }
            zf(e, f, v, S, N, y, s, !1),
            Jr(e);
            return;
        case "select":
            fe("invalid", e),
            r = y = f = null;
            for (s in a)
                if (a.hasOwnProperty(s) && (v = a[s],
                v != null))
                    switch (s) {
                    case "value":
                        f = v;
                        break;
                    case "defaultValue":
                        y = v;
                        break;
                    case "multiple":
                        r = v;
                    default:
                        xe(e, t, s, v, a, null)
                    }
            t = f,
            a = y,
            e.multiple = !!r,
            t != null ? wa(e, !!r, t, !1) : a != null && wa(e, !!r, a, !0);
            return;
        case "textarea":
            fe("invalid", e),
            f = s = r = null;
            for (y in a)
                if (a.hasOwnProperty(y) && (v = a[y],
                v != null))
                    switch (y) {
                    case "value":
                        r = v;
                        break;
                    case "defaultValue":
                        s = v;
                        break;
                    case "children":
                        f = v;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(o(91));
                        break;
                    default:
                        xe(e, t, y, v, a, null)
                    }
            Pf(e, r, s, f),
            Jr(e);
            return;
        case "option":
            for (S in a)
                if (a.hasOwnProperty(S) && (r = a[S],
                r != null))
                    switch (S) {
                    case "selected":
                        e.selected = r && typeof r != "function" && typeof r != "symbol";
                        break;
                    default:
                        xe(e, t, S, r, a, null)
                    }
            return;
        case "dialog":
            fe("beforetoggle", e),
            fe("toggle", e),
            fe("cancel", e),
            fe("close", e);
            break;
        case "iframe":
        case "object":
            fe("load", e);
            break;
        case "video":
        case "audio":
            for (r = 0; r < lr.length; r++)
                fe(lr[r], e);
            break;
        case "image":
            fe("error", e),
            fe("load", e);
            break;
        case "details":
            fe("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            fe("error", e),
            fe("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (N in a)
                if (a.hasOwnProperty(N) && (r = a[N],
                r != null))
                    switch (N) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                    default:
                        xe(e, t, N, r, a, null)
                    }
            return;
        default:
            if (Vo(t)) {
                for (Y in a)
                    a.hasOwnProperty(Y) && (r = a[Y],
                    r !== void 0 && Tu(e, t, Y, r, a, void 0));
                return
            }
        }
        for (v in a)
            a.hasOwnProperty(v) && (r = a[v],
            r != null && xe(e, t, v, r, a, null))
    }
    function C2(e, t, a, r) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , f = null
              , y = null
              , v = null
              , S = null
              , N = null
              , Y = null;
            for (R in a) {
                var O = a[R];
                if (a.hasOwnProperty(R) && O != null)
                    switch (R) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        S = O;
                    default:
                        r.hasOwnProperty(R) || xe(e, t, R, null, r, O)
                    }
            }
            for (var M in r) {
                var R = r[M];
                if (O = a[M],
                r.hasOwnProperty(M) && (R != null || O != null))
                    switch (M) {
                    case "type":
                        f = R;
                        break;
                    case "name":
                        s = R;
                        break;
                    case "checked":
                        N = R;
                        break;
                    case "defaultChecked":
                        Y = R;
                        break;
                    case "value":
                        y = R;
                        break;
                    case "defaultValue":
                        v = R;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (R != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        R !== O && xe(e, t, M, R, r, O)
                    }
            }
            Fo(e, y, v, S, N, Y, f, s);
            return;
        case "select":
            R = y = v = M = null;
            for (f in a)
                if (S = a[f],
                a.hasOwnProperty(f) && S != null)
                    switch (f) {
                    case "value":
                        break;
                    case "multiple":
                        R = S;
                    default:
                        r.hasOwnProperty(f) || xe(e, t, f, null, r, S)
                    }
            for (s in r)
                if (f = r[s],
                S = a[s],
                r.hasOwnProperty(s) && (f != null || S != null))
                    switch (s) {
                    case "value":
                        M = f;
                        break;
                    case "defaultValue":
                        v = f;
                        break;
                    case "multiple":
                        y = f;
                    default:
                        f !== S && xe(e, t, s, f, r, S)
                    }
            t = v,
            a = y,
            r = R,
            M != null ? wa(e, !!a, M, !1) : !!r != !!a && (t != null ? wa(e, !!a, t, !0) : wa(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            R = M = null;
            for (v in a)
                if (s = a[v],
                a.hasOwnProperty(v) && s != null && !r.hasOwnProperty(v))
                    switch (v) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        xe(e, t, v, null, r, s)
                    }
            for (y in r)
                if (s = r[y],
                f = a[y],
                r.hasOwnProperty(y) && (s != null || f != null))
                    switch (y) {
                    case "value":
                        M = s;
                        break;
                    case "defaultValue":
                        R = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(o(91));
                        break;
                    default:
                        s !== f && xe(e, t, y, s, r, f)
                    }
            Of(e, M, R);
            return;
        case "option":
            for (var te in a)
                if (M = a[te],
                a.hasOwnProperty(te) && M != null && !r.hasOwnProperty(te))
                    switch (te) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        xe(e, t, te, null, r, M)
                    }
            for (S in r)
                if (M = r[S],
                R = a[S],
                r.hasOwnProperty(S) && M !== R && (M != null || R != null))
                    switch (S) {
                    case "selected":
                        e.selected = M && typeof M != "function" && typeof M != "symbol";
                        break;
                    default:
                        xe(e, t, S, M, r, R)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var $ in a)
                M = a[$],
                a.hasOwnProperty($) && M != null && !r.hasOwnProperty($) && xe(e, t, $, null, r, M);
            for (N in r)
                if (M = r[N],
                R = a[N],
                r.hasOwnProperty(N) && M !== R && (M != null || R != null))
                    switch (N) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (M != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        xe(e, t, N, M, r, R)
                    }
            return;
        default:
            if (Vo(t)) {
                for (var Se in a)
                    M = a[Se],
                    a.hasOwnProperty(Se) && M !== void 0 && !r.hasOwnProperty(Se) && Tu(e, t, Se, void 0, r, M);
                for (Y in r)
                    M = r[Y],
                    R = a[Y],
                    !r.hasOwnProperty(Y) || M === R || M === void 0 && R === void 0 || Tu(e, t, Y, M, r, R);
                return
            }
        }
        for (var T in a)
            M = a[T],
            a.hasOwnProperty(T) && M != null && !r.hasOwnProperty(T) && xe(e, t, T, null, r, M);
        for (O in r)
            M = r[O],
            R = a[O],
            !r.hasOwnProperty(O) || M === R || M == null && R == null || xe(e, t, O, M, r, R)
    }
    var Cu = null
      , Nu = null;
    function Wl(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Fm(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Um(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function wu(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Mu = null;
    function N2() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Mu ? !1 : (Mu = e,
        !0) : (Mu = null,
        !1)
    }
    var Vm = typeof setTimeout == "function" ? setTimeout : void 0
      , w2 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , _m = typeof Promise == "function" ? Promise : void 0
      , M2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof _m < "u" ? function(e) {
        return _m.resolve(null).then(e).catch(R2)
    }
    : Vm;
    function R2(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Vn(e) {
        return e === "head"
    }
    function Wm(e, t) {
        var a = t
          , r = 0
          , s = 0;
        do {
            var f = a.nextSibling;
            if (e.removeChild(a),
            f && f.nodeType === 8)
                if (a = f.data,
                a === "/$") {
                    if (0 < r && 8 > r) {
                        a = r;
                        var y = e.ownerDocument;
                        if (a & 1 && sr(y.documentElement),
                        a & 2 && sr(y.body),
                        a & 4)
                            for (a = y.head,
                            sr(a),
                            y = a.firstChild; y; ) {
                                var v = y.nextSibling
                                  , S = y.nodeName;
                                y[Di] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y),
                                y = v
                            }
                    }
                    if (s === 0) {
                        e.removeChild(f),
                        pr(t);
                        return
                    }
                    s--
                } else
                    a === "$" || a === "$?" || a === "$!" ? s++ : r = a.charCodeAt(0) - 48;
            else
                r = 0;
            a = f
        } while (a);
        pr(t)
    }
    function Ru(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Ru(a),
                Bo(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(a)
        }
    }
    function E2(e, t, a, r) {
        for (; e.nodeType === 1; ) {
            var s = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (r) {
                if (!e[Di])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (f = e.getAttribute("rel"),
                        f === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (f !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (f = e.getAttribute("src"),
                        (f !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var f = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && e.getAttribute("name") === f)
                    return e
            } else
                return e;
            if (e = zt(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function L2(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = zt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Eu(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function H2(e, t) {
        var a = e.ownerDocument;
        if (e.data !== "$?" || a.readyState === "complete")
            t();
        else {
            var r = function() {
                t(),
                a.removeEventListener("DOMContentLoaded", r)
            };
            a.addEventListener("DOMContentLoaded", r),
            e._reactRetry = r
        }
    }
    function zt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    var Lu = null;
    function Zm(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    a === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Gm(e, t, a) {
        switch (t = Wl(a),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(o(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(o(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(o(454));
            return e;
        default:
            throw Error(o(451))
        }
    }
    function sr(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        Bo(e)
    }
    var Rt = new Map
      , km = new Set;
    function Zl(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var mn = W.d;
    W.d = {
        f: Y2,
        r: B2,
        D: z2,
        C: O2,
        L: P2,
        m: F2,
        X: V2,
        S: U2,
        M: _2
    };
    function Y2() {
        var e = mn.f()
          , t = Bl();
        return e || t
    }
    function B2(e) {
        var t = ja(e);
        t !== null && t.tag === 5 && t.type === "form" ? hd(t) : mn.r(e)
    }
    var ii = typeof document > "u" ? null : document;
    function Xm(e, t, a) {
        var r = ii;
        if (r && typeof t == "string" && t) {
            var s = Dt(t);
            s = 'link[rel="' + e + '"][href="' + s + '"]',
            typeof a == "string" && (s += '[crossorigin="' + a + '"]'),
            km.has(s) || (km.add(s),
            e = {
                rel: e,
                crossOrigin: a,
                href: t
            },
            r.querySelector(s) === null && (t = r.createElement("link"),
            Qe(t, "link", e),
            Ge(t),
            r.head.appendChild(t)))
        }
    }
    function z2(e) {
        mn.D(e),
        Xm("dns-prefetch", e, null)
    }
    function O2(e, t) {
        mn.C(e, t),
        Xm("preconnect", e, t)
    }
    function P2(e, t, a) {
        mn.L(e, t, a);
        var r = ii;
        if (r && e && t) {
            var s = 'link[rel="preload"][as="' + Dt(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (s += '[imagesrcset="' + Dt(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (s += '[imagesizes="' + Dt(a.imageSizes) + '"]')) : s += '[href="' + Dt(e) + '"]';
            var f = s;
            switch (t) {
            case "style":
                f = ri(e);
                break;
            case "script":
                f = li(e)
            }
            Rt.has(f) || (e = b({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
            Rt.set(f, e),
            r.querySelector(s) !== null || t === "style" && r.querySelector(ur(f)) || t === "script" && r.querySelector(cr(f)) || (t = r.createElement("link"),
            Qe(t, "link", e),
            Ge(t),
            r.head.appendChild(t)))
        }
    }
    function F2(e, t) {
        mn.m(e, t);
        var a = ii;
        if (a && e) {
            var r = t && typeof t.as == "string" ? t.as : "script"
              , s = 'link[rel="modulepreload"][as="' + Dt(r) + '"][href="' + Dt(e) + '"]'
              , f = s;
            switch (r) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                f = li(e)
            }
            if (!Rt.has(f) && (e = b({
                rel: "modulepreload",
                href: e
            }, t),
            Rt.set(f, e),
            a.querySelector(s) === null)) {
                switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(cr(f)))
                        return
                }
                r = a.createElement("link"),
                Qe(r, "link", e),
                Ge(r),
                a.head.appendChild(r)
            }
        }
    }
    function U2(e, t, a) {
        mn.S(e, t, a);
        var r = ii;
        if (r && e) {
            var s = Ta(r).hoistableStyles
              , f = ri(e);
            t = t || "default";
            var y = s.get(f);
            if (!y) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (y = r.querySelector(ur(f)))
                    v.loading = 5;
                else {
                    e = b({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                    (a = Rt.get(f)) && Hu(e, a);
                    var S = y = r.createElement("link");
                    Ge(S),
                    Qe(S, "link", e),
                    S._p = new Promise(function(N, Y) {
                        S.onload = N,
                        S.onerror = Y
                    }
                    ),
                    S.addEventListener("load", function() {
                        v.loading |= 1
                    }),
                    S.addEventListener("error", function() {
                        v.loading |= 2
                    }),
                    v.loading |= 4,
                    Gl(y, t, r)
                }
                y = {
                    type: "stylesheet",
                    instance: y,
                    count: 1,
                    state: v
                },
                s.set(f, y)
            }
        }
    }
    function V2(e, t) {
        mn.X(e, t);
        var a = ii;
        if (a && e) {
            var r = Ta(a).hoistableScripts
              , s = li(e)
              , f = r.get(s);
            f || (f = a.querySelector(cr(s)),
            f || (e = b({
                src: e,
                async: !0
            }, t),
            (t = Rt.get(s)) && Yu(e, t),
            f = a.createElement("script"),
            Ge(f),
            Qe(f, "link", e),
            a.head.appendChild(f)),
            f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            },
            r.set(s, f))
        }
    }
    function _2(e, t) {
        mn.M(e, t);
        var a = ii;
        if (a && e) {
            var r = Ta(a).hoistableScripts
              , s = li(e)
              , f = r.get(s);
            f || (f = a.querySelector(cr(s)),
            f || (e = b({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = Rt.get(s)) && Yu(e, t),
            f = a.createElement("script"),
            Ge(f),
            Qe(f, "link", e),
            a.head.appendChild(f)),
            f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            },
            r.set(s, f))
        }
    }
    function Jm(e, t, a, r) {
        var s = (s = ie.current) ? Zl(s) : null;
        if (!s)
            throw Error(o(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = ri(a.href),
            a = Ta(s).hoistableStyles,
            r = a.get(t),
            r || (r = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, r)),
            r) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                e = ri(a.href);
                var f = Ta(s).hoistableStyles
                  , y = f.get(e);
                if (y || (s = s.ownerDocument || s,
                y = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                f.set(e, y),
                (f = s.querySelector(ur(e))) && !f._p && (y.instance = f,
                y.state.loading = 5),
                Rt.has(e) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                Rt.set(e, a),
                f || W2(s, e, a, y.state))),
                t && r === null)
                    throw Error(o(528, ""));
                return y
            }
            if (t && r !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return t = a.async,
            a = a.src,
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = li(a),
            a = Ta(s).hoistableScripts,
            r = a.get(t),
            r || (r = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, r)),
            r) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, e))
        }
    }
    function ri(e) {
        return 'href="' + Dt(e) + '"'
    }
    function ur(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function qm(e) {
        return b({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function W2(e, t, a, r) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"),
        r.preload = t,
        t.addEventListener("load", function() {
            return r.loading |= 1
        }),
        t.addEventListener("error", function() {
            return r.loading |= 2
        }),
        Qe(t, "link", a),
        Ge(t),
        e.head.appendChild(t))
    }
    function li(e) {
        return '[src="' + Dt(e) + '"]'
    }
    function cr(e) {
        return "script[async]" + e
    }
    function Im(e, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + Dt(a.href) + '"]');
                if (r)
                    return t.instance = r,
                    Ge(r),
                    r;
                var s = b({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return r = (e.ownerDocument || e).createElement("style"),
                Ge(r),
                Qe(r, "style", s),
                Gl(r, a.precedence, e),
                t.instance = r;
            case "stylesheet":
                s = ri(a.href);
                var f = e.querySelector(ur(s));
                if (f)
                    return t.state.loading |= 4,
                    t.instance = f,
                    Ge(f),
                    f;
                r = qm(a),
                (s = Rt.get(s)) && Hu(r, s),
                f = (e.ownerDocument || e).createElement("link"),
                Ge(f);
                var y = f;
                return y._p = new Promise(function(v, S) {
                    y.onload = v,
                    y.onerror = S
                }
                ),
                Qe(f, "link", r),
                t.state.loading |= 4,
                Gl(f, a.precedence, e),
                t.instance = f;
            case "script":
                return f = li(a.src),
                (s = e.querySelector(cr(f))) ? (t.instance = s,
                Ge(s),
                s) : (r = a,
                (s = Rt.get(f)) && (r = b({}, a),
                Yu(r, s)),
                e = e.ownerDocument || e,
                s = e.createElement("script"),
                Ge(s),
                Qe(s, "link", r),
                e.head.appendChild(s),
                t.instance = s);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance,
            t.state.loading |= 4,
            Gl(r, a.precedence, e));
        return t.instance
    }
    function Gl(e, t, a) {
        for (var r = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = r.length ? r[r.length - 1] : null, f = s, y = 0; y < r.length; y++) {
            var v = r[y];
            if (v.dataset.precedence === t)
                f = v;
            else if (f !== s)
                break
        }
        f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
        t.insertBefore(e, t.firstChild))
    }
    function Hu(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function Yu(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var kl = null;
    function Km(e, t, a) {
        if (kl === null) {
            var r = new Map
              , s = kl = new Map;
            s.set(a, r)
        } else
            s = kl,
            r = s.get(a),
            r || (r = new Map,
            s.set(a, r));
        if (r.has(e))
            return r;
        for (r.set(e, null),
        a = a.getElementsByTagName(e),
        s = 0; s < a.length; s++) {
            var f = a[s];
            if (!(f[Di] || f[et] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
                var y = f.getAttribute(t) || "";
                y = e + y;
                var v = r.get(y);
                v ? v.push(f) : r.set(y, [f])
            }
        }
        return r
    }
    function Qm(e, t, a) {
        e = e.ownerDocument || e,
        e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }
    function Z2(e, t, a) {
        if (a === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function $m(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var fr = null;
    function G2() {}
    function k2(e, t, a) {
        if (fr === null)
            throw Error(o(475));
        var r = fr;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var s = ri(a.href)
                  , f = e.querySelector(ur(s));
                if (f) {
                    e = f._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (r.count++,
                    r = Xl.bind(r),
                    e.then(r, r)),
                    t.state.loading |= 4,
                    t.instance = f,
                    Ge(f);
                    return
                }
                f = e.ownerDocument || e,
                a = qm(a),
                (s = Rt.get(s)) && Hu(a, s),
                f = f.createElement("link"),
                Ge(f);
                var y = f;
                y._p = new Promise(function(v, S) {
                    y.onload = v,
                    y.onerror = S
                }
                ),
                Qe(f, "link", a),
                t.instance = f
            }
            r.stylesheets === null && (r.stylesheets = new Map),
            r.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (r.count++,
            t = Xl.bind(r),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function X2() {
        if (fr === null)
            throw Error(o(475));
        var e = fr;
        return e.stylesheets && e.count === 0 && Bu(e, e.stylesheets),
        0 < e.count ? function(t) {
            var a = setTimeout(function() {
                if (e.stylesheets && Bu(e, e.stylesheets),
                e.unsuspend) {
                    var r = e.unsuspend;
                    e.unsuspend = null,
                    r()
                }
            }, 6e4);
            return e.unsuspend = t,
            function() {
                e.unsuspend = null,
                clearTimeout(a)
            }
        }
        : null
    }
    function Xl() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                Bu(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Jl = null;
    function Bu(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Jl = new Map,
        t.forEach(J2, e),
        Jl = null,
        Xl.call(e))
    }
    function J2(e, t) {
        if (!(t.state.loading & 4)) {
            var a = Jl.get(e);
            if (a)
                var r = a.get(null);
            else {
                a = new Map,
                Jl.set(e, a);
                for (var s = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < s.length; f++) {
                    var y = s[f];
                    (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y),
                    r = y)
                }
                r && a.set(null, r)
            }
            s = t.instance,
            y = s.getAttribute("data-precedence"),
            f = a.get(y) || r,
            f === r && a.set(null, s),
            a.set(y, s),
            this.count++,
            r = Xl.bind(this),
            s.addEventListener("load", r),
            s.addEventListener("error", r),
            f ? f.parentNode.insertBefore(s, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(s, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var hr = {
        $$typeof: V,
        Provider: null,
        Consumer: null,
        _currentValue: J,
        _currentValue2: J,
        _threadCount: 0
    };
    function q2(e, t, a, r, s, f, y, v) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Eo(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Eo(0),
        this.hiddenUpdates = Eo(null),
        this.identifierPrefix = r,
        this.onUncaughtError = s,
        this.onCaughtError = f,
        this.onRecoverableError = y,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = v,
        this.incompleteTransitions = new Map
    }
    function e0(e, t, a, r, s, f, y, v, S, N, Y, O) {
        return e = new q2(e,t,a,y,v,S,N,O),
        t = 1,
        f === !0 && (t |= 24),
        f = pt(3, null, null, t),
        e.current = f,
        f.stateNode = e,
        t = ps(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        f.memoizedState = {
            element: r,
            isDehydrated: a,
            cache: t
        },
        xs(f),
        e
    }
    function t0(e) {
        return e ? (e = Oa,
        e) : Oa
    }
    function n0(e, t, a, r, s, f) {
        s = t0(s),
        r.context === null ? r.context = s : r.pendingContext = s,
        r = wn(t),
        r.payload = {
            element: a
        },
        f = f === void 0 ? null : f,
        f !== null && (r.callback = f),
        a = Mn(e, r, t),
        a !== null && (St(a, e, t),
        _i(a, e, t))
    }
    function a0(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function zu(e, t) {
        a0(e, t),
        (e = e.alternate) && a0(e, t)
    }
    function i0(e) {
        if (e.tag === 13) {
            var t = za(e, 67108864);
            t !== null && St(t, e, 67108864),
            zu(e, 67108864)
        }
    }
    var ql = !0;
    function I2(e, t, a, r) {
        var s = B.T;
        B.T = null;
        var f = W.p;
        try {
            W.p = 2,
            Ou(e, t, a, r)
        } finally {
            W.p = f,
            B.T = s
        }
    }
    function K2(e, t, a, r) {
        var s = B.T;
        B.T = null;
        var f = W.p;
        try {
            W.p = 8,
            Ou(e, t, a, r)
        } finally {
            W.p = f,
            B.T = s
        }
    }
    function Ou(e, t, a, r) {
        if (ql) {
            var s = Pu(r);
            if (s === null)
                ju(e, t, r, Il, a),
                l0(e, r);
            else if ($2(s, e, t, a, r))
                r.stopPropagation();
            else if (l0(e, r),
            t & 4 && -1 < Q2.indexOf(e)) {
                for (; s !== null; ) {
                    var f = ja(s);
                    if (f !== null)
                        switch (f.tag) {
                        case 3:
                            if (f = f.stateNode,
                            f.current.memoizedState.isDehydrated) {
                                var y = Qn(f.pendingLanes);
                                if (y !== 0) {
                                    var v = f;
                                    for (v.pendingLanes |= 2,
                                    v.entangledLanes |= 2; y; ) {
                                        var S = 1 << 31 - mt(y);
                                        v.entanglements[1] |= S,
                                        y &= ~S
                                    }
                                    Zt(f),
                                    (ye & 6) === 0 && (Hl = Ft() + 500,
                                    rr(0))
                                }
                            }
                            break;
                        case 13:
                            v = za(f, 2),
                            v !== null && St(v, f, 2),
                            Bl(),
                            zu(f, 2)
                        }
                    if (f = Pu(r),
                    f === null && ju(e, t, r, Il, a),
                    f === s)
                        break;
                    s = f
                }
                s !== null && r.stopPropagation()
            } else
                ju(e, t, r, null, a)
        }
    }
    function Pu(e) {
        return e = Wo(e),
        Fu(e)
    }
    var Il = null;
    function Fu(e) {
        if (Il = null,
        e = Da(e),
        e !== null) {
            var t = d(e);
            if (t === null)
                e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = h(t),
                    e !== null)
                        return e;
                    e = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Il = e,
        null
    }
    function r0(e) {
        switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Oy()) {
            case vf:
                return 2;
            case xf:
                return 8;
            case _r:
            case Py:
                return 32;
            case Sf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Uu = !1
      , _n = null
      , Wn = null
      , Zn = null
      , dr = new Map
      , mr = new Map
      , Gn = []
      , Q2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function l0(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            _n = null;
            break;
        case "dragenter":
        case "dragleave":
            Wn = null;
            break;
        case "mouseover":
        case "mouseout":
            Zn = null;
            break;
        case "pointerover":
        case "pointerout":
            dr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            mr.delete(t.pointerId)
        }
    }
    function gr(e, t, a, r, s, f) {
        return e === null || e.nativeEvent !== f ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: r,
            nativeEvent: f,
            targetContainers: [s]
        },
        t !== null && (t = ja(t),
        t !== null && i0(t)),
        e) : (e.eventSystemFlags |= r,
        t = e.targetContainers,
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e)
    }
    function $2(e, t, a, r, s) {
        switch (t) {
        case "focusin":
            return _n = gr(_n, e, t, a, r, s),
            !0;
        case "dragenter":
            return Wn = gr(Wn, e, t, a, r, s),
            !0;
        case "mouseover":
            return Zn = gr(Zn, e, t, a, r, s),
            !0;
        case "pointerover":
            var f = s.pointerId;
            return dr.set(f, gr(dr.get(f) || null, e, t, a, r, s)),
            !0;
        case "gotpointercapture":
            return f = s.pointerId,
            mr.set(f, gr(mr.get(f) || null, e, t, a, r, s)),
            !0
        }
        return !1
    }
    function o0(e) {
        var t = Da(e.target);
        if (t !== null) {
            var a = d(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = h(a),
                    t !== null) {
                        e.blockedOn = t,
                        ky(e.priority, function() {
                            if (a.tag === 13) {
                                var r = xt();
                                r = Lo(r);
                                var s = za(a, r);
                                s !== null && St(s, a, r),
                                zu(a, r)
                            }
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Kl(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var a = Pu(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var r = new a.constructor(a.type,a);
                _o = r,
                a.target.dispatchEvent(r),
                _o = null
            } else
                return t = ja(a),
                t !== null && i0(t),
                e.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function s0(e, t, a) {
        Kl(e) && a.delete(t)
    }
    function eb() {
        Uu = !1,
        _n !== null && Kl(_n) && (_n = null),
        Wn !== null && Kl(Wn) && (Wn = null),
        Zn !== null && Kl(Zn) && (Zn = null),
        dr.forEach(s0),
        mr.forEach(s0)
    }
    function Ql(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Uu || (Uu = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, eb)))
    }
    var $l = null;
    function u0(e) {
        $l !== e && ($l = e,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            $l === e && ($l = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t]
                  , r = e[t + 1]
                  , s = e[t + 2];
                if (typeof r != "function") {
                    if (Fu(r || a) === null)
                        continue;
                    break
                }
                var f = ja(a);
                f !== null && (e.splice(t, 3),
                t -= 3,
                Fs(f, {
                    pending: !0,
                    data: s,
                    method: a.method,
                    action: r
                }, r, s))
            }
        }))
    }
    function pr(e) {
        function t(S) {
            return Ql(S, e)
        }
        _n !== null && Ql(_n, e),
        Wn !== null && Ql(Wn, e),
        Zn !== null && Ql(Zn, e),
        dr.forEach(t),
        mr.forEach(t);
        for (var a = 0; a < Gn.length; a++) {
            var r = Gn[a];
            r.blockedOn === e && (r.blockedOn = null)
        }
        for (; 0 < Gn.length && (a = Gn[0],
        a.blockedOn === null); )
            o0(a),
            a.blockedOn === null && Gn.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
        a != null)
            for (r = 0; r < a.length; r += 3) {
                var s = a[r]
                  , f = a[r + 1]
                  , y = s[lt] || null;
                if (typeof f == "function")
                    y || u0(a);
                else if (y) {
                    var v = null;
                    if (f && f.hasAttribute("formAction")) {
                        if (s = f,
                        y = f[lt] || null)
                            v = y.formAction;
                        else if (Fu(s) !== null)
                            continue
                    } else
                        v = y.action;
                    typeof v == "function" ? a[r + 1] = v : (a.splice(r, 3),
                    r -= 3),
                    u0(a)
                }
            }
    }
    function Vu(e) {
        this._internalRoot = e
    }
    eo.prototype.render = Vu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        var a = t.current
          , r = xt();
        n0(a, r, e, t, null, null)
    }
    ,
    eo.prototype.unmount = Vu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            n0(e.current, 2, null, e, null, null),
            Bl(),
            t[Aa] = null
        }
    }
    ;
    function eo(e) {
        this._internalRoot = e
    }
    eo.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Cf();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < Gn.length && t !== 0 && t < Gn[a].priority; a++)
                ;
            Gn.splice(a, 0, e),
            a === 0 && o0(e)
        }
    }
    ;
    var c0 = i.version;
    if (c0 !== "19.1.1")
        throw Error(o(527, c0, "19.1.1"));
    W.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","),
            Error(o(268, e)));
        return e = m(t),
        e = e !== null ? g(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var tb = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: B,
        reconcilerVersion: "19.1.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var to = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!to.isDisabled && to.supportsFiber)
            try {
                xi = to.inject(tb),
                dt = to
            } catch {}
    }
    return br.createRoot = function(e, t) {
        if (!u(e))
            throw Error(o(299));
        var a = !1
          , r = ""
          , s = Cd
          , f = Nd
          , y = wd
          , v = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
        t.onCaughtError !== void 0 && (f = t.onCaughtError),
        t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (v = t.unstable_transitionCallbacks)),
        t = e0(e, 1, !1, null, null, a, r, s, f, y, v, null),
        e[Aa] = t.current,
        Du(e),
        new Vu(t)
    }
    ,
    br.hydrateRoot = function(e, t, a) {
        if (!u(e))
            throw Error(o(299));
        var r = !1
          , s = ""
          , f = Cd
          , y = Nd
          , v = wd
          , S = null
          , N = null;
        return a != null && (a.unstable_strictMode === !0 && (r = !0),
        a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (f = a.onUncaughtError),
        a.onCaughtError !== void 0 && (y = a.onCaughtError),
        a.onRecoverableError !== void 0 && (v = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (S = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (N = a.formState)),
        t = e0(e, 1, !0, t, a ?? null, r, s, f, y, v, S, N),
        t.context = t0(null),
        a = t.current,
        r = xt(),
        r = Lo(r),
        s = wn(r),
        s.callback = null,
        Mn(a, s, r),
        a = r,
        t.current.lanes = a,
        Ai(t, a),
        Zt(t),
        e[Aa] = t.current,
        Du(e),
        new eo(t)
    }
    ,
    br.version = "19.1.1",
    br
}
var x0;
function hb() {
    if (x0)
        return Zu.exports;
    x0 = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (i) {
                console.error(i)
            }
    }
    return n(),
    Zu.exports = fb(),
    Zu.exports
}
var db = hb();
/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var S0 = "popstate";
function mb(n={}) {
    function i(o, u) {
        let {pathname: d, search: h, hash: p} = o.location;
        return fc("", {
            pathname: d,
            search: h,
            hash: p
        }, u.state && u.state.usr || null, u.state && u.state.key || "default")
    }
    function l(o, u) {
        return typeof u == "string" ? u : Nr(u)
    }
    return pb(i, l, null, n)
}
function Re(n, i) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(i)
}
function qt(n, i) {
    if (!n) {
        typeof console < "u" && console.warn(i);
        try {
            throw new Error(i)
        } catch {}
    }
}
function gb() {
    return Math.random().toString(36).substring(2, 10)
}
function A0(n, i) {
    return {
        usr: n.state,
        key: n.key,
        idx: i
    }
}
function fc(n, i, l=null, o) {
    return {
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: "",
        ...typeof i == "string" ? gi(i) : i,
        state: l,
        key: i && i.key || o || gb()
    }
}
function Nr({pathname: n="/", search: i="", hash: l=""}) {
    return i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i),
    l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l),
    n
}
function gi(n) {
    let i = {};
    if (n) {
        let l = n.indexOf("#");
        l >= 0 && (i.hash = n.substring(l),
        n = n.substring(0, l));
        let o = n.indexOf("?");
        o >= 0 && (i.search = n.substring(o),
        n = n.substring(0, o)),
        n && (i.pathname = n)
    }
    return i
}
function pb(n, i, l, o={}) {
    let {window: u=document.defaultView, v5Compat: d=!1} = o
      , h = u.history
      , p = "POP"
      , m = null
      , g = b();
    g == null && (g = 0,
    h.replaceState({
        ...h.state,
        idx: g
    }, ""));
    function b() {
        return (h.state || {
            idx: null
        }).idx
    }
    function x() {
        p = "POP";
        let P = b()
          , L = P == null ? null : P - g;
        g = P,
        m && m({
            action: p,
            location: F.location,
            delta: L
        })
    }
    function A(P, L) {
        p = "PUSH";
        let Z = fc(F.location, P, L);
        g = b() + 1;
        let V = A0(Z, g)
          , q = F.createHref(Z);
        try {
            h.pushState(V, "", q)
        } catch (_) {
            if (_ instanceof DOMException && _.name === "DataCloneError")
                throw _;
            u.location.assign(q)
        }
        d && m && m({
            action: p,
            location: F.location,
            delta: 1
        })
    }
    function E(P, L) {
        p = "REPLACE";
        let Z = fc(F.location, P, L);
        g = b();
        let V = A0(Z, g)
          , q = F.createHref(Z);
        h.replaceState(V, "", q),
        d && m && m({
            action: p,
            location: F.location,
            delta: 0
        })
    }
    function H(P) {
        return yb(P)
    }
    let F = {
        get action() {
            return p
        },
        get location() {
            return n(u, h)
        },
        listen(P) {
            if (m)
                throw new Error("A history only accepts one active listener");
            return u.addEventListener(S0, x),
            m = P,
            () => {
                u.removeEventListener(S0, x),
                m = null
            }
        },
        createHref(P) {
            return i(u, P)
        },
        createURL: H,
        encodeLocation(P) {
            let L = H(P);
            return {
                pathname: L.pathname,
                search: L.search,
                hash: L.hash
            }
        },
        push: A,
        replace: E,
        go(P) {
            return h.go(P)
        }
    };
    return F
}
function yb(n, i=!1) {
    let l = "http://localhost";
    typeof window < "u" && (l = window.location.origin !== "null" ? window.location.origin : window.location.href),
    Re(l, "No window.location.(origin|href) available to create URL");
    let o = typeof n == "string" ? n : Nr(n);
    return o = o.replace(/ $/, "%20"),
    !i && o.startsWith("//") && (o = l + o),
    new URL(o,l)
}
function Ug(n, i, l="/") {
    return bb(n, i, l, !1)
}
function bb(n, i, l, o) {
    let u = typeof i == "string" ? gi(i) : i
      , d = bn(u.pathname || "/", l);
    if (d == null)
        return null;
    let h = Vg(n);
    vb(h);
    let p = null;
    for (let m = 0; p == null && m < h.length; ++m) {
        let g = Rb(d);
        p = wb(h[m], g, o)
    }
    return p
}
function Vg(n, i=[], l=[], o="") {
    let u = (d, h, p) => {
        let m = {
            relativePath: p === void 0 ? d.path || "" : p,
            caseSensitive: d.caseSensitive === !0,
            childrenIndex: h,
            route: d
        };
        m.relativePath.startsWith("/") && (Re(m.relativePath.startsWith(o), `Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
        m.relativePath = m.relativePath.slice(o.length));
        let g = yn([o, m.relativePath])
          , b = l.concat(m);
        d.children && d.children.length > 0 && (Re(d.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${g}".`),
        Vg(d.children, i, b, g)),
        !(d.path == null && !d.index) && i.push({
            path: g,
            score: Cb(g, d.index),
            routesMeta: b
        })
    }
    ;
    return n.forEach( (d, h) => {
        if (d.path === "" || !d.path?.includes("?"))
            u(d, h);
        else
            for (let p of _g(d.path))
                u(d, h, p)
    }
    ),
    i
}
function _g(n) {
    let i = n.split("/");
    if (i.length === 0)
        return [];
    let[l,...o] = i
      , u = l.endsWith("?")
      , d = l.replace(/\?$/, "");
    if (o.length === 0)
        return u ? [d, ""] : [d];
    let h = _g(o.join("/"))
      , p = [];
    return p.push(...h.map(m => m === "" ? d : [d, m].join("/"))),
    u && p.push(...h),
    p.map(m => n.startsWith("/") && m === "" ? "/" : m)
}
function vb(n) {
    n.sort( (i, l) => i.score !== l.score ? l.score - i.score : Nb(i.routesMeta.map(o => o.childrenIndex), l.routesMeta.map(o => o.childrenIndex)))
}
var xb = /^:[\w-]+$/
  , Sb = 3
  , Ab = 2
  , Db = 1
  , jb = 10
  , Tb = -2
  , D0 = n => n === "*";
function Cb(n, i) {
    let l = n.split("/")
      , o = l.length;
    return l.some(D0) && (o += Tb),
    i && (o += Ab),
    l.filter(u => !D0(u)).reduce( (u, d) => u + (xb.test(d) ? Sb : d === "" ? Db : jb), o)
}
function Nb(n, i) {
    return n.length === i.length && n.slice(0, -1).every( (o, u) => o === i[u]) ? n[n.length - 1] - i[i.length - 1] : 0
}
function wb(n, i, l=!1) {
    let {routesMeta: o} = n
      , u = {}
      , d = "/"
      , h = [];
    for (let p = 0; p < o.length; ++p) {
        let m = o[p]
          , g = p === o.length - 1
          , b = d === "/" ? i : i.slice(d.length) || "/"
          , x = mo({
            path: m.relativePath,
            caseSensitive: m.caseSensitive,
            end: g
        }, b)
          , A = m.route;
        if (!x && g && l && !o[o.length - 1].route.index && (x = mo({
            path: m.relativePath,
            caseSensitive: m.caseSensitive,
            end: !1
        }, b)),
        !x)
            return null;
        Object.assign(u, x.params),
        h.push({
            params: u,
            pathname: yn([d, x.pathname]),
            pathnameBase: Yb(yn([d, x.pathnameBase])),
            route: A
        }),
        x.pathnameBase !== "/" && (d = yn([d, x.pathnameBase]))
    }
    return h
}
function mo(n, i) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let[l,o] = Mb(n.path, n.caseSensitive, n.end)
      , u = i.match(l);
    if (!u)
        return null;
    let d = u[0]
      , h = d.replace(/(.)\/+$/, "$1")
      , p = u.slice(1);
    return {
        params: o.reduce( (g, {paramName: b, isOptional: x}, A) => {
            if (b === "*") {
                let H = p[A] || "";
                h = d.slice(0, d.length - H.length).replace(/(.)\/+$/, "$1")
            }
            const E = p[A];
            return x && !E ? g[b] = void 0 : g[b] = (E || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: d,
        pathnameBase: h,
        pattern: n
    }
}
function Mb(n, i=!1, l=!0) {
    qt(n === "*" || !n.endsWith("*") || n.endsWith("/*"), `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`);
    let o = []
      , u = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, p, m) => (o.push({
        paramName: p,
        isOptional: m != null
    }),
    m ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return n.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    u += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : l ? u += "\\/*$" : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u,i ? void 0 : "i"), o]
}
function Rb(n) {
    try {
        return n.split("/").map(i => decodeURIComponent(i).replace(/\//g, "%2F")).join("/")
    } catch (i) {
        return qt(!1, `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),
        n
    }
}
function bn(n, i) {
    if (i === "/")
        return n;
    if (!n.toLowerCase().startsWith(i.toLowerCase()))
        return null;
    let l = i.endsWith("/") ? i.length - 1 : i.length
      , o = n.charAt(l);
    return o && o !== "/" ? null : n.slice(l) || "/"
}
function Eb(n, i="/") {
    let {pathname: l, search: o="", hash: u=""} = typeof n == "string" ? gi(n) : n;
    return {
        pathname: l ? l.startsWith("/") ? l : Lb(l, i) : i,
        search: Bb(o),
        hash: zb(u)
    }
}
function Lb(n, i) {
    let l = i.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(u => {
        u === ".." ? l.length > 1 && l.pop() : u !== "." && l.push(u)
    }
    ),
    l.length > 1 ? l.join("/") : "/"
}
function Ju(n, i, l, o) {
    return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Hb(n) {
    return n.filter( (i, l) => l === 0 || i.route.path && i.route.path.length > 0)
}
function Wg(n) {
    let i = Hb(n);
    return i.map( (l, o) => o === i.length - 1 ? l.pathname : l.pathnameBase)
}
function Zg(n, i, l, o=!1) {
    let u;
    typeof n == "string" ? u = gi(n) : (u = {
        ...n
    },
    Re(!u.pathname || !u.pathname.includes("?"), Ju("?", "pathname", "search", u)),
    Re(!u.pathname || !u.pathname.includes("#"), Ju("#", "pathname", "hash", u)),
    Re(!u.search || !u.search.includes("#"), Ju("#", "search", "hash", u)));
    let d = n === "" || u.pathname === "", h = d ? "/" : u.pathname, p;
    if (h == null)
        p = l;
    else {
        let x = i.length - 1;
        if (!o && h.startsWith("..")) {
            let A = h.split("/");
            for (; A[0] === ".."; )
                A.shift(),
                x -= 1;
            u.pathname = A.join("/")
        }
        p = x >= 0 ? i[x] : "/"
    }
    let m = Eb(u, p)
      , g = h && h !== "/" && h.endsWith("/")
      , b = (d || h === ".") && l.endsWith("/");
    return !m.pathname.endsWith("/") && (g || b) && (m.pathname += "/"),
    m
}
var yn = n => n.join("/").replace(/\/\/+/g, "/")
  , Yb = n => n.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Bb = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n
  , zb = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function Ob(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data"in n
}
var Gg = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Gg);
var Pb = ["GET", ...Gg];
new Set(Pb);
var pi = w.createContext(null);
pi.displayName = "DataRouter";
var Ao = w.createContext(null);
Ao.displayName = "DataRouterState";
w.createContext(!1);
var kg = w.createContext({
    isTransitioning: !1
});
kg.displayName = "ViewTransition";
var Fb = w.createContext(new Map);
Fb.displayName = "Fetchers";
var Ub = w.createContext(null);
Ub.displayName = "Await";
var It = w.createContext(null);
It.displayName = "Navigation";
var Yr = w.createContext(null);
Yr.displayName = "Location";
var Sn = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Sn.displayName = "Route";
var Bc = w.createContext(null);
Bc.displayName = "RouteError";
function Vb(n, {relative: i}={}) {
    Re(Br(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: l, navigator: o} = w.useContext(It)
      , {hash: u, pathname: d, search: h} = zr(n, {
        relative: i
    })
      , p = d;
    return l !== "/" && (p = d === "/" ? l : yn([l, d])),
    o.createHref({
        pathname: p,
        search: h,
        hash: u
    })
}
function Br() {
    return w.useContext(Yr) != null
}
function Kt() {
    return Re(Br(), "useLocation() may be used only in the context of a <Router> component."),
    w.useContext(Yr).location
}
var Xg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Jg(n) {
    w.useContext(It).static || w.useLayoutEffect(n)
}
function _b() {
    let {isDataRoute: n} = w.useContext(Sn);
    return n ? tv() : Wb()
}
function Wb() {
    Re(Br(), "useNavigate() may be used only in the context of a <Router> component.");
    let n = w.useContext(pi)
      , {basename: i, navigator: l} = w.useContext(It)
      , {matches: o} = w.useContext(Sn)
      , {pathname: u} = Kt()
      , d = JSON.stringify(Wg(o))
      , h = w.useRef(!1);
    return Jg( () => {
        h.current = !0
    }
    ),
    w.useCallback( (m, g={}) => {
        if (qt(h.current, Xg),
        !h.current)
            return;
        if (typeof m == "number") {
            l.go(m);
            return
        }
        let b = Zg(m, JSON.parse(d), u, g.relative === "path");
        n == null && i !== "/" && (b.pathname = b.pathname === "/" ? i : yn([i, b.pathname])),
        (g.replace ? l.replace : l.push)(b, g.state, g)
    }
    , [i, l, d, u, n])
}
w.createContext(null);
function zr(n, {relative: i}={}) {
    let {matches: l} = w.useContext(Sn)
      , {pathname: o} = Kt()
      , u = JSON.stringify(Wg(l));
    return w.useMemo( () => Zg(n, JSON.parse(u), o, i === "path"), [n, u, o, i])
}
function Zb(n, i) {
    return qg(n, i)
}
function qg(n, i, l, o) {
    Re(Br(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: u} = w.useContext(It)
      , {matches: d} = w.useContext(Sn)
      , h = d[d.length - 1]
      , p = h ? h.params : {}
      , m = h ? h.pathname : "/"
      , g = h ? h.pathnameBase : "/"
      , b = h && h.route;
    {
        let L = b && b.path || "";
        Ig(m, !b || L.endsWith("*") || L.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`)
    }
    let x = Kt(), A;
    if (i) {
        let L = typeof i == "string" ? gi(i) : i;
        Re(g === "/" || L.pathname?.startsWith(g), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),
        A = L
    } else
        A = x;
    let E = A.pathname || "/"
      , H = E;
    if (g !== "/") {
        let L = g.replace(/^\//, "").split("/");
        H = "/" + E.replace(/^\//, "").split("/").slice(L.length).join("/")
    }
    let F = Ug(n, {
        pathname: H
    });
    qt(b || F != null, `No routes matched location "${A.pathname}${A.search}${A.hash}" `),
    qt(F == null || F[F.length - 1].route.element !== void 0 || F[F.length - 1].route.Component !== void 0 || F[F.length - 1].route.lazy !== void 0, `Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let P = qb(F && F.map(L => Object.assign({}, L, {
        params: Object.assign({}, p, L.params),
        pathname: yn([g, u.encodeLocation ? u.encodeLocation(L.pathname).pathname : L.pathname]),
        pathnameBase: L.pathnameBase === "/" ? g : yn([g, u.encodeLocation ? u.encodeLocation(L.pathnameBase).pathname : L.pathnameBase])
    })), d, l, o);
    return i && P ? w.createElement(Yr.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...A
            },
            navigationType: "POP"
        }
    }, P) : P
}
function Gb() {
    let n = ev()
      , i = Ob(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n)
      , l = n instanceof Error ? n.stack : null
      , o = "rgba(200,200,200, 0.5)"
      , u = {
        padding: "0.5rem",
        backgroundColor: o
    }
      , d = {
        padding: "2px 4px",
        backgroundColor: o
    }
      , h = null;
    return console.error("Error handled by React Router default ErrorBoundary:", n),
    h = w.createElement(w.Fragment, null, w.createElement("p", null, "💿 Hey developer 👋"), w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", w.createElement("code", {
        style: d
    }, "ErrorBoundary"), " or", " ", w.createElement("code", {
        style: d
    }, "errorElement"), " prop on your route.")),
    w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, i), l ? w.createElement("pre", {
        style: u
    }, l) : null, h)
}
var kb = w.createElement(Gb, null)
  , Xb = class extends w.Component {
    constructor(n) {
        super(n),
        this.state = {
            location: n.location,
            revalidation: n.revalidation,
            error: n.error
        }
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    static getDerivedStateFromProps(n, i) {
        return i.location !== n.location || i.revalidation !== "idle" && n.revalidation === "idle" ? {
            error: n.error,
            location: n.location,
            revalidation: n.revalidation
        } : {
            error: n.error !== void 0 ? n.error : i.error,
            location: i.location,
            revalidation: n.revalidation || i.revalidation
        }
    }
    componentDidCatch(n, i) {
        console.error("React Router caught the following error during render", n, i)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(Sn.Provider, {
            value: this.props.routeContext
        }, w.createElement(Bc.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function Jb({routeContext: n, match: i, children: l}) {
    let o = w.useContext(pi);
    return o && o.static && o.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = i.route.id),
    w.createElement(Sn.Provider, {
        value: n
    }, l)
}
function qb(n, i=[], l=null, o=null) {
    if (n == null) {
        if (!l)
            return null;
        if (l.errors)
            n = l.matches;
        else if (i.length === 0 && !l.initialized && l.matches.length > 0)
            n = l.matches;
        else
            return null
    }
    let u = n
      , d = l?.errors;
    if (d != null) {
        let m = u.findIndex(g => g.route.id && d?.[g.route.id] !== void 0);
        Re(m >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),
        u = u.slice(0, Math.min(u.length, m + 1))
    }
    let h = !1
      , p = -1;
    if (l)
        for (let m = 0; m < u.length; m++) {
            let g = u[m];
            if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (p = m),
            g.route.id) {
                let {loaderData: b, errors: x} = l
                  , A = g.route.loader && !b.hasOwnProperty(g.route.id) && (!x || x[g.route.id] === void 0);
                if (g.route.lazy || A) {
                    h = !0,
                    p >= 0 ? u = u.slice(0, p + 1) : u = [u[0]];
                    break
                }
            }
        }
    return u.reduceRight( (m, g, b) => {
        let x, A = !1, E = null, H = null;
        l && (x = d && g.route.id ? d[g.route.id] : void 0,
        E = g.route.errorElement || kb,
        h && (p < 0 && b === 0 ? (Ig("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        A = !0,
        H = null) : p === b && (A = !0,
        H = g.route.hydrateFallbackElement || null)));
        let F = i.concat(u.slice(0, b + 1))
          , P = () => {
            let L;
            return x ? L = E : A ? L = H : g.route.Component ? L = w.createElement(g.route.Component, null) : g.route.element ? L = g.route.element : L = m,
            w.createElement(Jb, {
                match: g,
                routeContext: {
                    outlet: m,
                    matches: F,
                    isDataRoute: l != null
                },
                children: L
            })
        }
        ;
        return l && (g.route.ErrorBoundary || g.route.errorElement || b === 0) ? w.createElement(Xb, {
            location: l.location,
            revalidation: l.revalidation,
            component: E,
            error: x,
            children: P(),
            routeContext: {
                outlet: null,
                matches: F,
                isDataRoute: !0
            }
        }) : P()
    }
    , null)
}
function zc(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Ib(n) {
    let i = w.useContext(pi);
    return Re(i, zc(n)),
    i
}
function Kb(n) {
    let i = w.useContext(Ao);
    return Re(i, zc(n)),
    i
}
function Qb(n) {
    let i = w.useContext(Sn);
    return Re(i, zc(n)),
    i
}
function Oc(n) {
    let i = Qb(n)
      , l = i.matches[i.matches.length - 1];
    return Re(l.route.id, `${n} can only be used on routes that contain a unique "id"`),
    l.route.id
}
function $b() {
    return Oc("useRouteId")
}
function ev() {
    let n = w.useContext(Bc)
      , i = Kb("useRouteError")
      , l = Oc("useRouteError");
    return n !== void 0 ? n : i.errors?.[l]
}
function tv() {
    let {router: n} = Ib("useNavigate")
      , i = Oc("useNavigate")
      , l = w.useRef(!1);
    return Jg( () => {
        l.current = !0
    }
    ),
    w.useCallback(async (u, d={}) => {
        qt(l.current, Xg),
        l.current && (typeof u == "number" ? n.navigate(u) : await n.navigate(u, {
            fromRouteId: i,
            ...d
        }))
    }
    , [n, i])
}
var j0 = {};
function Ig(n, i, l) {
    !i && !j0[n] && (j0[n] = !0,
    qt(!1, l))
}
w.memo(nv);
function nv({routes: n, future: i, state: l}) {
    return qg(n, void 0, l, i)
}
function Gt(n) {
    Re(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function av({basename: n="/", children: i=null, location: l, navigationType: o="POP", navigator: u, static: d=!1}) {
    Re(!Br(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let h = n.replace(/^\/*/, "/")
      , p = w.useMemo( () => ({
        basename: h,
        navigator: u,
        static: d,
        future: {}
    }), [h, u, d]);
    typeof l == "string" && (l = gi(l));
    let {pathname: m="/", search: g="", hash: b="", state: x=null, key: A="default"} = l
      , E = w.useMemo( () => {
        let H = bn(m, h);
        return H == null ? null : {
            location: {
                pathname: H,
                search: g,
                hash: b,
                state: x,
                key: A
            },
            navigationType: o
        }
    }
    , [h, m, g, b, x, A, o]);
    return qt(E != null, `<Router basename="${h}"> is not able to match the URL "${m}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),
    E == null ? null : w.createElement(It.Provider, {
        value: p
    }, w.createElement(Yr.Provider, {
        children: i,
        value: E
    }))
}
function iv({children: n, location: i}) {
    return Zb(hc(n), i)
}
function hc(n, i=[]) {
    let l = [];
    return w.Children.forEach(n, (o, u) => {
        if (!w.isValidElement(o))
            return;
        let d = [...i, u];
        if (o.type === w.Fragment) {
            l.push.apply(l, hc(o.props.children, d));
            return
        }
        Re(o.type === Gt, `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        Re(!o.props.index || !o.props.children, "An index route cannot have child routes.");
        let h = {
            id: o.props.id || d.join("-"),
            caseSensitive: o.props.caseSensitive,
            element: o.props.element,
            Component: o.props.Component,
            index: o.props.index,
            path: o.props.path,
            loader: o.props.loader,
            action: o.props.action,
            hydrateFallbackElement: o.props.hydrateFallbackElement,
            HydrateFallback: o.props.HydrateFallback,
            errorElement: o.props.errorElement,
            ErrorBoundary: o.props.ErrorBoundary,
            hasErrorBoundary: o.props.hasErrorBoundary === !0 || o.props.ErrorBoundary != null || o.props.errorElement != null,
            shouldRevalidate: o.props.shouldRevalidate,
            handle: o.props.handle,
            lazy: o.props.lazy
        };
        o.props.children && (h.children = hc(o.props.children, d)),
        l.push(h)
    }
    ),
    l
}
var oo = "get"
  , so = "application/x-www-form-urlencoded";
function Do(n) {
    return n != null && typeof n.tagName == "string"
}
function rv(n) {
    return Do(n) && n.tagName.toLowerCase() === "button"
}
function lv(n) {
    return Do(n) && n.tagName.toLowerCase() === "form"
}
function ov(n) {
    return Do(n) && n.tagName.toLowerCase() === "input"
}
function sv(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
function uv(n, i) {
    return n.button === 0 && (!i || i === "_self") && !sv(n)
}
var no = null;
function cv() {
    if (no === null)
        try {
            new FormData(document.createElement("form"),0),
            no = !1
        } catch {
            no = !0
        }
    return no
}
var fv = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function qu(n) {
    return n != null && !fv.has(n) ? (qt(!1, `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${so}"`),
    null) : n
}
function hv(n, i) {
    let l, o, u, d, h;
    if (lv(n)) {
        let p = n.getAttribute("action");
        o = p ? bn(p, i) : null,
        l = n.getAttribute("method") || oo,
        u = qu(n.getAttribute("enctype")) || so,
        d = new FormData(n)
    } else if (rv(n) || ov(n) && (n.type === "submit" || n.type === "image")) {
        let p = n.form;
        if (p == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let m = n.getAttribute("formaction") || p.getAttribute("action");
        if (o = m ? bn(m, i) : null,
        l = n.getAttribute("formmethod") || p.getAttribute("method") || oo,
        u = qu(n.getAttribute("formenctype")) || qu(p.getAttribute("enctype")) || so,
        d = new FormData(p,n),
        !cv()) {
            let {name: g, type: b, value: x} = n;
            if (b === "image") {
                let A = g ? `${g}.` : "";
                d.append(`${A}x`, "0"),
                d.append(`${A}y`, "0")
            } else
                g && d.append(g, x)
        }
    } else {
        if (Do(n))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        l = oo,
        o = null,
        u = so,
        h = n
    }
    return d && u === "text/plain" && (h = d,
    d = void 0),
    {
        action: o,
        method: l.toLowerCase(),
        encType: u,
        formData: d,
        body: h
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Pc(n, i) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(i)
}
function dv(n, i, l) {
    let o = typeof n == "string" ? new URL(n,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : n;
    return o.pathname === "/" ? o.pathname = `_root.${l}` : i && bn(o.pathname, i) === "/" ? o.pathname = `${i.replace(/\/$/, "")}/_root.${l}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${l}`,
    o
}
async function mv(n, i) {
    if (n.id in i)
        return i[n.id];
    try {
        let l = await import(n.module);
        return i[n.id] = l,
        l
    } catch (l) {
        return console.error(`Error loading route module \`${n.module}\`, reloading page...`),
        console.error(l),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function gv(n) {
    return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string"
}
async function pv(n, i, l) {
    let o = await Promise.all(n.map(async u => {
        let d = i.routes[u.route.id];
        if (d) {
            let h = await mv(d, l);
            return h.links ? h.links() : []
        }
        return []
    }
    ));
    return xv(o.flat(1).filter(gv).filter(u => u.rel === "stylesheet" || u.rel === "preload").map(u => u.rel === "stylesheet" ? {
        ...u,
        rel: "prefetch",
        as: "style"
    } : {
        ...u,
        rel: "prefetch"
    }))
}
function T0(n, i, l, o, u, d) {
    let h = (m, g) => l[g] ? m.route.id !== l[g].route.id : !0
      , p = (m, g) => l[g].pathname !== m.pathname || l[g].route.path?.endsWith("*") && l[g].params["*"] !== m.params["*"];
    return d === "assets" ? i.filter( (m, g) => h(m, g) || p(m, g)) : d === "data" ? i.filter( (m, g) => {
        let b = o.routes[m.route.id];
        if (!b || !b.hasLoader)
            return !1;
        if (h(m, g) || p(m, g))
            return !0;
        if (m.route.shouldRevalidate) {
            let x = m.route.shouldRevalidate({
                currentUrl: new URL(u.pathname + u.search + u.hash,window.origin),
                currentParams: l[0]?.params || {},
                nextUrl: new URL(n,window.origin),
                nextParams: m.params,
                defaultShouldRevalidate: !0
            });
            if (typeof x == "boolean")
                return x
        }
        return !0
    }
    ) : []
}
function yv(n, i, {includeHydrateFallback: l}={}) {
    return bv(n.map(o => {
        let u = i.routes[o.route.id];
        if (!u)
            return [];
        let d = [u.module];
        return u.clientActionModule && (d = d.concat(u.clientActionModule)),
        u.clientLoaderModule && (d = d.concat(u.clientLoaderModule)),
        l && u.hydrateFallbackModule && (d = d.concat(u.hydrateFallbackModule)),
        u.imports && (d = d.concat(u.imports)),
        d
    }
    ).flat(1))
}
function bv(n) {
    return [...new Set(n)]
}
function vv(n) {
    let i = {}
      , l = Object.keys(n).sort();
    for (let o of l)
        i[o] = n[o];
    return i
}
function xv(n, i) {
    let l = new Set;
    return new Set(i),
    n.reduce( (o, u) => {
        let d = JSON.stringify(vv(u));
        return l.has(d) || (l.add(d),
        o.push({
            key: d,
            link: u
        })),
        o
    }
    , [])
}
function Kg() {
    let n = w.useContext(pi);
    return Pc(n, "You must render this element inside a <DataRouterContext.Provider> element"),
    n
}
function Sv() {
    let n = w.useContext(Ao);
    return Pc(n, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    n
}
var Fc = w.createContext(void 0);
Fc.displayName = "FrameworkContext";
function Qg() {
    let n = w.useContext(Fc);
    return Pc(n, "You must render this element inside a <HydratedRouter> element"),
    n
}
function Av(n, i) {
    let l = w.useContext(Fc)
      , [o,u] = w.useState(!1)
      , [d,h] = w.useState(!1)
      , {onFocus: p, onBlur: m, onMouseEnter: g, onMouseLeave: b, onTouchStart: x} = i
      , A = w.useRef(null);
    w.useEffect( () => {
        if (n === "render" && h(!0),
        n === "viewport") {
            let F = L => {
                L.forEach(Z => {
                    h(Z.isIntersecting)
                }
                )
            }
              , P = new IntersectionObserver(F,{
                threshold: .5
            });
            return A.current && P.observe(A.current),
            () => {
                P.disconnect()
            }
        }
    }
    , [n]),
    w.useEffect( () => {
        if (o) {
            let F = setTimeout( () => {
                h(!0)
            }
            , 100);
            return () => {
                clearTimeout(F)
            }
        }
    }
    , [o]);
    let E = () => {
        u(!0)
    }
      , H = () => {
        u(!1),
        h(!1)
    }
    ;
    return l ? n !== "intent" ? [d, A, {}] : [d, A, {
        onFocus: vr(p, E),
        onBlur: vr(m, H),
        onMouseEnter: vr(g, E),
        onMouseLeave: vr(b, H),
        onTouchStart: vr(x, E)
    }] : [!1, A, {}]
}
function vr(n, i) {
    return l => {
        n && n(l),
        l.defaultPrevented || i(l)
    }
}
function Dv({page: n, ...i}) {
    let {router: l} = Kg()
      , o = w.useMemo( () => Ug(l.routes, n, l.basename), [l.routes, n, l.basename]);
    return o ? w.createElement(Tv, {
        page: n,
        matches: o,
        ...i
    }) : null
}
function jv(n) {
    let {manifest: i, routeModules: l} = Qg()
      , [o,u] = w.useState([]);
    return w.useEffect( () => {
        let d = !1;
        return pv(n, i, l).then(h => {
            d || u(h)
        }
        ),
        () => {
            d = !0
        }
    }
    , [n, i, l]),
    o
}
function Tv({page: n, matches: i, ...l}) {
    let o = Kt()
      , {manifest: u, routeModules: d} = Qg()
      , {basename: h} = Kg()
      , {loaderData: p, matches: m} = Sv()
      , g = w.useMemo( () => T0(n, i, m, u, o, "data"), [n, i, m, u, o])
      , b = w.useMemo( () => T0(n, i, m, u, o, "assets"), [n, i, m, u, o])
      , x = w.useMemo( () => {
        if (n === o.pathname + o.search + o.hash)
            return [];
        let H = new Set
          , F = !1;
        if (i.forEach(L => {
            let Z = u.routes[L.route.id];
            !Z || !Z.hasLoader || (!g.some(V => V.route.id === L.route.id) && L.route.id in p && d[L.route.id]?.shouldRevalidate || Z.hasClientLoader ? F = !0 : H.add(L.route.id))
        }
        ),
        H.size === 0)
            return [];
        let P = dv(n, h, "data");
        return F && H.size > 0 && P.searchParams.set("_routes", i.filter(L => H.has(L.route.id)).map(L => L.route.id).join(",")),
        [P.pathname + P.search]
    }
    , [h, p, o, u, g, i, n, d])
      , A = w.useMemo( () => yv(b, u), [b, u])
      , E = jv(b);
    return w.createElement(w.Fragment, null, x.map(H => w.createElement("link", {
        key: H,
        rel: "prefetch",
        as: "fetch",
        href: H,
        ...l
    })), A.map(H => w.createElement("link", {
        key: H,
        rel: "modulepreload",
        href: H,
        ...l
    })), E.map( ({key: H, link: F}) => w.createElement("link", {
        key: H,
        ...F
    })))
}
function Cv(...n) {
    return i => {
        n.forEach(l => {
            typeof l == "function" ? l(i) : l != null && (l.current = i)
        }
        )
    }
}
var $g = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    $g && (window.__reactRouterVersion = "7.7.1")
} catch {}
function Nv({basename: n, children: i, window: l}) {
    let o = w.useRef();
    o.current == null && (o.current = mb({
        window: l,
        v5Compat: !0
    }));
    let u = o.current
      , [d,h] = w.useState({
        action: u.action,
        location: u.location
    })
      , p = w.useCallback(m => {
        w.startTransition( () => h(m))
    }
    , [h]);
    return w.useLayoutEffect( () => u.listen(p), [u, p]),
    w.createElement(av, {
        basename: n,
        children: i,
        location: d.location,
        navigationType: d.action,
        navigator: u
    })
}
var ep = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , gn = w.forwardRef(function({onClick: i, discover: l="render", prefetch: o="none", relative: u, reloadDocument: d, replace: h, state: p, target: m, to: g, preventScrollReset: b, viewTransition: x, ...A}, E) {
    let {basename: H} = w.useContext(It), F = typeof g == "string" && ep.test(g), P, L = !1;
    if (typeof g == "string" && F && (P = g,
    $g))
        try {
            let ue = new URL(window.location.href)
              , De = g.startsWith("//") ? new URL(ue.protocol + g) : new URL(g)
              , Ue = bn(De.pathname, H);
            De.origin === ue.origin && Ue != null ? g = Ue + De.search + De.hash : L = !0
        } catch {
            qt(!1, `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let Z = Vb(g, {
        relative: u
    })
      , [V,q,_] = Av(o, A)
      , ae = Ev(g, {
        replace: h,
        state: p,
        target: m,
        preventScrollReset: b,
        relative: u,
        viewTransition: x
    });
    function le(ue) {
        i && i(ue),
        ue.defaultPrevented || ae(ue)
    }
    let K = w.createElement("a", {
        ...A,
        ..._,
        href: P || Z,
        onClick: L || d ? i : le,
        ref: Cv(E, q),
        target: m,
        "data-discover": !F && l === "render" ? "true" : void 0
    });
    return V && !F ? w.createElement(w.Fragment, null, K, w.createElement(Dv, {
        page: Z
    })) : K
});
gn.displayName = "Link";
var wv = w.forwardRef(function({"aria-current": i="page", caseSensitive: l=!1, className: o="", end: u=!1, style: d, to: h, viewTransition: p, children: m, ...g}, b) {
    let x = zr(h, {
        relative: g.relative
    })
      , A = Kt()
      , E = w.useContext(Ao)
      , {navigator: H, basename: F} = w.useContext(It)
      , P = E != null && zv(x) && p === !0
      , L = H.encodeLocation ? H.encodeLocation(x).pathname : x.pathname
      , Z = A.pathname
      , V = E && E.navigation && E.navigation.location ? E.navigation.location.pathname : null;
    l || (Z = Z.toLowerCase(),
    V = V ? V.toLowerCase() : null,
    L = L.toLowerCase()),
    V && F && (V = bn(V, F) || V);
    const q = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
    let _ = Z === L || !u && Z.startsWith(L) && Z.charAt(q) === "/", ae = V != null && (V === L || !u && V.startsWith(L) && V.charAt(L.length) === "/"), le = {
        isActive: _,
        isPending: ae,
        isTransitioning: P
    }, K = _ ? i : void 0, ue;
    typeof o == "function" ? ue = o(le) : ue = [o, _ ? "active" : null, ae ? "pending" : null, P ? "transitioning" : null].filter(Boolean).join(" ");
    let De = typeof d == "function" ? d(le) : d;
    return w.createElement(gn, {
        ...g,
        "aria-current": K,
        className: ue,
        ref: b,
        style: De,
        to: h,
        viewTransition: p
    }, typeof m == "function" ? m(le) : m)
});
wv.displayName = "NavLink";
var Mv = w.forwardRef( ({discover: n="render", fetcherKey: i, navigate: l, reloadDocument: o, replace: u, state: d, method: h=oo, action: p, onSubmit: m, relative: g, preventScrollReset: b, viewTransition: x, ...A}, E) => {
    let H = Yv()
      , F = Bv(p, {
        relative: g
    })
      , P = h.toLowerCase() === "get" ? "get" : "post"
      , L = typeof p == "string" && ep.test(p)
      , Z = V => {
        if (m && m(V),
        V.defaultPrevented)
            return;
        V.preventDefault();
        let q = V.nativeEvent.submitter
          , _ = q?.getAttribute("formmethod") || h;
        H(q || V.currentTarget, {
            fetcherKey: i,
            method: _,
            navigate: l,
            replace: u,
            state: d,
            relative: g,
            preventScrollReset: b,
            viewTransition: x
        })
    }
    ;
    return w.createElement("form", {
        ref: E,
        method: P,
        action: F,
        onSubmit: o ? m : Z,
        ...A,
        "data-discover": !L && n === "render" ? "true" : void 0
    })
}
);
Mv.displayName = "Form";
function Rv(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function tp(n) {
    let i = w.useContext(pi);
    return Re(i, Rv(n)),
    i
}
function Ev(n, {target: i, replace: l, state: o, preventScrollReset: u, relative: d, viewTransition: h}={}) {
    let p = _b()
      , m = Kt()
      , g = zr(n, {
        relative: d
    });
    return w.useCallback(b => {
        if (uv(b, i)) {
            b.preventDefault();
            let x = l !== void 0 ? l : Nr(m) === Nr(g);
            p(n, {
                replace: x,
                state: o,
                preventScrollReset: u,
                relative: d,
                viewTransition: h
            })
        }
    }
    , [m, p, g, l, o, i, n, u, d, h])
}
var Lv = 0
  , Hv = () => `__${String(++Lv)}__`;
function Yv() {
    let {router: n} = tp("useSubmit")
      , {basename: i} = w.useContext(It)
      , l = $b();
    return w.useCallback(async (o, u={}) => {
        let {action: d, method: h, encType: p, formData: m, body: g} = hv(o, i);
        if (u.navigate === !1) {
            let b = u.fetcherKey || Hv();
            await n.fetch(b, l, u.action || d, {
                preventScrollReset: u.preventScrollReset,
                formData: m,
                body: g,
                formMethod: u.method || h,
                formEncType: u.encType || p,
                flushSync: u.flushSync
            })
        } else
            await n.navigate(u.action || d, {
                preventScrollReset: u.preventScrollReset,
                formData: m,
                body: g,
                formMethod: u.method || h,
                formEncType: u.encType || p,
                replace: u.replace,
                state: u.state,
                fromRouteId: l,
                flushSync: u.flushSync,
                viewTransition: u.viewTransition
            })
    }
    , [n, i, l])
}
function Bv(n, {relative: i}={}) {
    let {basename: l} = w.useContext(It)
      , o = w.useContext(Sn);
    Re(o, "useFormAction must be used inside a RouteContext");
    let[u] = o.matches.slice(-1)
      , d = {
        ...zr(n || ".", {
            relative: i
        })
    }
      , h = Kt();
    if (n == null) {
        d.search = h.search;
        let p = new URLSearchParams(d.search)
          , m = p.getAll("index");
        if (m.some(b => b === "")) {
            p.delete("index"),
            m.filter(x => x).forEach(x => p.append("index", x));
            let b = p.toString();
            d.search = b ? `?${b}` : ""
        }
    }
    return (!n || n === ".") && u.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    l !== "/" && (d.pathname = d.pathname === "/" ? l : yn([l, d.pathname])),
    Nr(d)
}
function zv(n, {relative: i}={}) {
    let l = w.useContext(kg);
    Re(l != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: o} = tp("useViewTransitionState")
      , u = zr(n, {
        relative: i
    });
    if (!l.isTransitioning)
        return !1;
    let d = bn(l.currentLocation.pathname, o) || l.currentLocation.pathname
      , h = bn(l.nextLocation.pathname, o) || l.nextLocation.pathname;
    return mo(u.pathname, h) != null || mo(u.pathname, d) != null
}
const np = w.createContext({});
function Ov(n) {
    const i = w.useRef(null);
    return i.current === null && (i.current = n()),
    i.current
}
const Uc = typeof window < "u"
  , Pv = Uc ? w.useLayoutEffect : w.useEffect
  , Vc = w.createContext(null);
function _c(n, i) {
    n.indexOf(i) === -1 && n.push(i)
}
function Wc(n, i) {
    const l = n.indexOf(i);
    l > -1 && n.splice(l, 1)
}
const vn = (n, i, l) => l > i ? i : l < n ? n : l;
let Zc = () => {}
;
const xn = {}
  , ap = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function ip(n) {
    return typeof n == "object" && n !== null
}
const rp = n => /^0[^.\s]+$/u.test(n);
function Gc(n) {
    let i;
    return () => (i === void 0 && (i = n()),
    i)
}
const Ht = n => n
  , Fv = (n, i) => l => i(n(l))
  , Or = (...n) => n.reduce(Fv)
  , wr = (n, i, l) => {
    const o = i - n;
    return o === 0 ? 1 : (l - n) / o
}
;
class kc {
    constructor() {
        this.subscriptions = []
    }
    add(i) {
        return _c(this.subscriptions, i),
        () => Wc(this.subscriptions, i)
    }
    notify(i, l, o) {
        const u = this.subscriptions.length;
        if (u)
            if (u === 1)
                this.subscriptions[0](i, l, o);
            else
                for (let d = 0; d < u; d++) {
                    const h = this.subscriptions[d];
                    h && h(i, l, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const kt = n => n * 1e3
  , Xt = n => n / 1e3;
function lp(n, i) {
    return i ? n * (1e3 / i) : 0
}
const op = (n, i, l) => (((1 - 3 * l + 3 * i) * n + (3 * l - 6 * i)) * n + 3 * i) * n
  , Uv = 1e-7
  , Vv = 12;
function _v(n, i, l, o, u) {
    let d, h, p = 0;
    do
        h = i + (l - i) / 2,
        d = op(h, o, u) - n,
        d > 0 ? l = h : i = h;
    while (Math.abs(d) > Uv && ++p < Vv);
    return h
}
function Pr(n, i, l, o) {
    if (n === i && l === o)
        return Ht;
    const u = d => _v(d, 0, 1, n, l);
    return d => d === 0 || d === 1 ? d : op(u(d), i, o)
}
const sp = n => i => i <= .5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2
  , up = n => i => 1 - n(1 - i)
  , cp = Pr(.33, 1.53, .69, .99)
  , Xc = up(cp)
  , fp = sp(Xc)
  , hp = n => (n *= 2) < 1 ? .5 * Xc(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
  , Jc = n => 1 - Math.sin(Math.acos(n))
  , dp = up(Jc)
  , mp = sp(Jc)
  , Wv = Pr(.42, 0, 1, 1)
  , Zv = Pr(0, 0, .58, 1)
  , gp = Pr(.42, 0, .58, 1)
  , Gv = n => Array.isArray(n) && typeof n[0] != "number"
  , pp = n => Array.isArray(n) && typeof n[0] == "number"
  , kv = {
    linear: Ht,
    easeIn: Wv,
    easeInOut: gp,
    easeOut: Zv,
    circIn: Jc,
    circInOut: mp,
    circOut: dp,
    backIn: Xc,
    backInOut: fp,
    backOut: cp,
    anticipate: hp
}
  , Xv = n => typeof n == "string"
  , C0 = n => {
    if (pp(n)) {
        Zc(n.length === 4);
        const [i,l,o,u] = n;
        return Pr(i, l, o, u)
    } else if (Xv(n))
        return kv[n];
    return n
}
  , ao = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function Jv(n, i) {
    let l = new Set
      , o = new Set
      , u = !1
      , d = !1;
    const h = new WeakSet;
    let p = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function m(b) {
        h.has(b) && (g.schedule(b),
        n()),
        b(p)
    }
    const g = {
        schedule: (b, x=!1, A=!1) => {
            const H = A && u ? l : o;
            return x && h.add(b),
            H.has(b) || H.add(b),
            b
        }
        ,
        cancel: b => {
            o.delete(b),
            h.delete(b)
        }
        ,
        process: b => {
            if (p = b,
            u) {
                d = !0;
                return
            }
            u = !0,
            [l,o] = [o, l],
            l.forEach(m),
            l.clear(),
            u = !1,
            d && (d = !1,
            g.process(b))
        }
    };
    return g
}
const qv = 40;
function yp(n, i) {
    let l = !1
      , o = !0;
    const u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , d = () => l = !0
      , h = ao.reduce( (V, q) => (V[q] = Jv(d),
    V), {})
      , {setup: p, read: m, resolveKeyframes: g, preUpdate: b, update: x, preRender: A, render: E, postRender: H} = h
      , F = () => {
        const V = xn.useManualTiming ? u.timestamp : performance.now();
        l = !1,
        xn.useManualTiming || (u.delta = o ? 1e3 / 60 : Math.max(Math.min(V - u.timestamp, qv), 1)),
        u.timestamp = V,
        u.isProcessing = !0,
        p.process(u),
        m.process(u),
        g.process(u),
        b.process(u),
        x.process(u),
        A.process(u),
        E.process(u),
        H.process(u),
        u.isProcessing = !1,
        l && i && (o = !1,
        n(F))
    }
      , P = () => {
        l = !0,
        o = !0,
        u.isProcessing || n(F)
    }
    ;
    return {
        schedule: ao.reduce( (V, q) => {
            const _ = h[q];
            return V[q] = (ae, le=!1, K=!1) => (l || P(),
            _.schedule(ae, le, K)),
            V
        }
        , {}),
        cancel: V => {
            for (let q = 0; q < ao.length; q++)
                h[ao[q]].cancel(V)
        }
        ,
        state: u,
        steps: h
    }
}
const {schedule: Ne, cancel: Jn, state: $e, steps: Iu} = yp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ht, !0);
let uo;
function Iv() {
    uo = void 0
}
const ft = {
    now: () => (uo === void 0 && ft.set($e.isProcessing || xn.useManualTiming ? $e.timestamp : performance.now()),
    uo),
    set: n => {
        uo = n,
        queueMicrotask(Iv)
    }
}
  , bp = n => i => typeof i == "string" && i.startsWith(n)
  , qc = bp("--")
  , Kv = bp("var(--")
  , Ic = n => Kv(n) ? Qv.test(n.split("/*")[0].trim()) : !1
  , Qv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , yi = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
  , Mr = {
    ...yi,
    transform: n => vn(0, 1, n)
}
  , io = {
    ...yi,
    default: 1
}
  , Ar = n => Math.round(n * 1e5) / 1e5
  , Kc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function $v(n) {
    return n == null
}
const ex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Qc = (n, i) => l => !!(typeof l == "string" && ex.test(l) && l.startsWith(n) || i && !$v(l) && Object.prototype.hasOwnProperty.call(l, i))
  , vp = (n, i, l) => o => {
    if (typeof o != "string")
        return o;
    const [u,d,h,p] = o.match(Kc);
    return {
        [n]: parseFloat(u),
        [i]: parseFloat(d),
        [l]: parseFloat(h),
        alpha: p !== void 0 ? parseFloat(p) : 1
    }
}
  , tx = n => vn(0, 255, n)
  , Ku = {
    ...yi,
    transform: n => Math.round(tx(n))
}
  , ba = {
    test: Qc("rgb", "red"),
    parse: vp("red", "green", "blue"),
    transform: ({red: n, green: i, blue: l, alpha: o=1}) => "rgba(" + Ku.transform(n) + ", " + Ku.transform(i) + ", " + Ku.transform(l) + ", " + Ar(Mr.transform(o)) + ")"
};
function nx(n) {
    let i = ""
      , l = ""
      , o = ""
      , u = "";
    return n.length > 5 ? (i = n.substring(1, 3),
    l = n.substring(3, 5),
    o = n.substring(5, 7),
    u = n.substring(7, 9)) : (i = n.substring(1, 2),
    l = n.substring(2, 3),
    o = n.substring(3, 4),
    u = n.substring(4, 5),
    i += i,
    l += l,
    o += o,
    u += u),
    {
        red: parseInt(i, 16),
        green: parseInt(l, 16),
        blue: parseInt(o, 16),
        alpha: u ? parseInt(u, 16) / 255 : 1
    }
}
const dc = {
    test: Qc("#"),
    parse: nx,
    transform: ba.transform
}
  , Fr = n => ({
    test: i => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: i => `${i}${n}`
})
  , Xn = Fr("deg")
  , Jt = Fr("%")
  , ne = Fr("px")
  , ax = Fr("vh")
  , ix = Fr("vw")
  , N0 = {
    ...Jt,
    parse: n => Jt.parse(n) / 100,
    transform: n => Jt.transform(n * 100)
}
  , oi = {
    test: Qc("hsl", "hue"),
    parse: vp("hue", "saturation", "lightness"),
    transform: ({hue: n, saturation: i, lightness: l, alpha: o=1}) => "hsla(" + Math.round(n) + ", " + Jt.transform(Ar(i)) + ", " + Jt.transform(Ar(l)) + ", " + Ar(Mr.transform(o)) + ")"
}
  , Fe = {
    test: n => ba.test(n) || dc.test(n) || oi.test(n),
    parse: n => ba.test(n) ? ba.parse(n) : oi.test(n) ? oi.parse(n) : dc.parse(n),
    transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? ba.transform(n) : oi.transform(n),
    getAnimatableNone: n => {
        const i = Fe.parse(n);
        return i.alpha = 0,
        Fe.transform(i)
    }
}
  , rx = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function lx(n) {
    return isNaN(n) && typeof n == "string" && (n.match(Kc)?.length || 0) + (n.match(rx)?.length || 0) > 0
}
const xp = "number"
  , Sp = "color"
  , ox = "var"
  , sx = "var("
  , w0 = "${}"
  , ux = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Rr(n) {
    const i = n.toString()
      , l = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , u = [];
    let d = 0;
    const p = i.replace(ux, m => (Fe.test(m) ? (o.color.push(d),
    u.push(Sp),
    l.push(Fe.parse(m))) : m.startsWith(sx) ? (o.var.push(d),
    u.push(ox),
    l.push(m)) : (o.number.push(d),
    u.push(xp),
    l.push(parseFloat(m))),
    ++d,
    w0)).split(w0);
    return {
        values: l,
        split: p,
        indexes: o,
        types: u
    }
}
function Ap(n) {
    return Rr(n).values
}
function Dp(n) {
    const {split: i, types: l} = Rr(n)
      , o = i.length;
    return u => {
        let d = "";
        for (let h = 0; h < o; h++)
            if (d += i[h],
            u[h] !== void 0) {
                const p = l[h];
                p === xp ? d += Ar(u[h]) : p === Sp ? d += Fe.transform(u[h]) : d += u[h]
            }
        return d
    }
}
const cx = n => typeof n == "number" ? 0 : Fe.test(n) ? Fe.getAnimatableNone(n) : n;
function fx(n) {
    const i = Ap(n);
    return Dp(n)(i.map(cx))
}
const qn = {
    test: lx,
    parse: Ap,
    createTransformer: Dp,
    getAnimatableNone: fx
};
function Qu(n, i, l) {
    return l < 0 && (l += 1),
    l > 1 && (l -= 1),
    l < 1 / 6 ? n + (i - n) * 6 * l : l < 1 / 2 ? i : l < 2 / 3 ? n + (i - n) * (2 / 3 - l) * 6 : n
}
function hx({hue: n, saturation: i, lightness: l, alpha: o}) {
    n /= 360,
    i /= 100,
    l /= 100;
    let u = 0
      , d = 0
      , h = 0;
    if (!i)
        u = d = h = l;
    else {
        const p = l < .5 ? l * (1 + i) : l + i - l * i
          , m = 2 * l - p;
        u = Qu(m, p, n + 1 / 3),
        d = Qu(m, p, n),
        h = Qu(m, p, n - 1 / 3)
    }
    return {
        red: Math.round(u * 255),
        green: Math.round(d * 255),
        blue: Math.round(h * 255),
        alpha: o
    }
}
function go(n, i) {
    return l => l > 0 ? i : n
}
const Me = (n, i, l) => n + (i - n) * l
  , $u = (n, i, l) => {
    const o = n * n
      , u = l * (i * i - o) + o;
    return u < 0 ? 0 : Math.sqrt(u)
}
  , dx = [dc, ba, oi]
  , mx = n => dx.find(i => i.test(n));
function M0(n) {
    const i = mx(n);
    if (!i)
        return !1;
    let l = i.parse(n);
    return i === oi && (l = hx(l)),
    l
}
const R0 = (n, i) => {
    const l = M0(n)
      , o = M0(i);
    if (!l || !o)
        return go(n, i);
    const u = {
        ...l
    };
    return d => (u.red = $u(l.red, o.red, d),
    u.green = $u(l.green, o.green, d),
    u.blue = $u(l.blue, o.blue, d),
    u.alpha = Me(l.alpha, o.alpha, d),
    ba.transform(u))
}
  , mc = new Set(["none", "hidden"]);
function gx(n, i) {
    return mc.has(n) ? l => l <= 0 ? n : i : l => l >= 1 ? i : n
}
function px(n, i) {
    return l => Me(n, i, l)
}
function $c(n) {
    return typeof n == "number" ? px : typeof n == "string" ? Ic(n) ? go : Fe.test(n) ? R0 : vx : Array.isArray(n) ? jp : typeof n == "object" ? Fe.test(n) ? R0 : yx : go
}
function jp(n, i) {
    const l = [...n]
      , o = l.length
      , u = n.map( (d, h) => $c(d)(d, i[h]));
    return d => {
        for (let h = 0; h < o; h++)
            l[h] = u[h](d);
        return l
    }
}
function yx(n, i) {
    const l = {
        ...n,
        ...i
    }
      , o = {};
    for (const u in l)
        n[u] !== void 0 && i[u] !== void 0 && (o[u] = $c(n[u])(n[u], i[u]));
    return u => {
        for (const d in o)
            l[d] = o[d](u);
        return l
    }
}
function bx(n, i) {
    const l = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let u = 0; u < i.values.length; u++) {
        const d = i.types[u]
          , h = n.indexes[d][o[d]]
          , p = n.values[h] ?? 0;
        l[u] = p,
        o[d]++
    }
    return l
}
const vx = (n, i) => {
    const l = qn.createTransformer(i)
      , o = Rr(n)
      , u = Rr(i);
    return o.indexes.var.length === u.indexes.var.length && o.indexes.color.length === u.indexes.color.length && o.indexes.number.length >= u.indexes.number.length ? mc.has(n) && !u.values.length || mc.has(i) && !o.values.length ? gx(n, i) : Or(jp(bx(o, u), u.values), l) : go(n, i)
}
;
function Tp(n, i, l) {
    return typeof n == "number" && typeof i == "number" && typeof l == "number" ? Me(n, i, l) : $c(n)(n, i)
}
const xx = n => {
    const i = ({timestamp: l}) => n(l);
    return {
        start: (l=!0) => Ne.update(i, l),
        stop: () => Jn(i),
        now: () => $e.isProcessing ? $e.timestamp : ft.now()
    }
}
  , Cp = (n, i, l=10) => {
    let o = "";
    const u = Math.max(Math.round(i / l), 2);
    for (let d = 0; d < u; d++)
        o += Math.round(n(d / (u - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , po = 2e4;
function ef(n) {
    let i = 0;
    const l = 50;
    let o = n.next(i);
    for (; !o.done && i < po; )
        i += l,
        o = n.next(i);
    return i >= po ? 1 / 0 : i
}
function Sx(n, i=100, l) {
    const o = l({
        ...n,
        keyframes: [0, i]
    })
      , u = Math.min(ef(o), po);
    return {
        type: "keyframes",
        ease: d => o.next(u * d).value / i,
        duration: Xt(u)
    }
}
const Ax = 5;
function Np(n, i, l) {
    const o = Math.max(i - Ax, 0);
    return lp(l - n(o), i - o)
}
const He = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , ec = .001;
function Dx({duration: n=He.duration, bounce: i=He.bounce, velocity: l=He.velocity, mass: o=He.mass}) {
    let u, d, h = 1 - i;
    h = vn(He.minDamping, He.maxDamping, h),
    n = vn(He.minDuration, He.maxDuration, Xt(n)),
    h < 1 ? (u = g => {
        const b = g * h
          , x = b * n
          , A = b - l
          , E = gc(g, h)
          , H = Math.exp(-x);
        return ec - A / E * H
    }
    ,
    d = g => {
        const x = g * h * n
          , A = x * l + l
          , E = Math.pow(h, 2) * Math.pow(g, 2) * n
          , H = Math.exp(-x)
          , F = gc(Math.pow(g, 2), h);
        return (-u(g) + ec > 0 ? -1 : 1) * ((A - E) * H) / F
    }
    ) : (u = g => {
        const b = Math.exp(-g * n)
          , x = (g - l) * n + 1;
        return -ec + b * x
    }
    ,
    d = g => {
        const b = Math.exp(-g * n)
          , x = (l - g) * (n * n);
        return b * x
    }
    );
    const p = 5 / n
      , m = Tx(u, d, p);
    if (n = kt(n),
    isNaN(m))
        return {
            stiffness: He.stiffness,
            damping: He.damping,
            duration: n
        };
    {
        const g = Math.pow(m, 2) * o;
        return {
            stiffness: g,
            damping: h * 2 * Math.sqrt(o * g),
            duration: n
        }
    }
}
const jx = 12;
function Tx(n, i, l) {
    let o = l;
    for (let u = 1; u < jx; u++)
        o = o - n(o) / i(o);
    return o
}
function gc(n, i) {
    return n * Math.sqrt(1 - i * i)
}
const Cx = ["duration", "bounce"]
  , Nx = ["stiffness", "damping", "mass"];
function E0(n, i) {
    return i.some(l => n[l] !== void 0)
}
function wx(n) {
    let i = {
        velocity: He.velocity,
        stiffness: He.stiffness,
        damping: He.damping,
        mass: He.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!E0(n, Nx) && E0(n, Cx))
        if (n.visualDuration) {
            const l = n.visualDuration
              , o = 2 * Math.PI / (l * 1.2)
              , u = o * o
              , d = 2 * vn(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
            i = {
                ...i,
                mass: He.mass,
                stiffness: u,
                damping: d
            }
        } else {
            const l = Dx(n);
            i = {
                ...i,
                ...l,
                mass: He.mass
            },
            i.isResolvedFromDuration = !0
        }
    return i
}
function yo(n=He.visualDuration, i=He.bounce) {
    const l = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: i
    } : n;
    let {restSpeed: o, restDelta: u} = l;
    const d = l.keyframes[0]
      , h = l.keyframes[l.keyframes.length - 1]
      , p = {
        done: !1,
        value: d
    }
      , {stiffness: m, damping: g, mass: b, duration: x, velocity: A, isResolvedFromDuration: E} = wx({
        ...l,
        velocity: -Xt(l.velocity || 0)
    })
      , H = A || 0
      , F = g / (2 * Math.sqrt(m * b))
      , P = h - d
      , L = Xt(Math.sqrt(m / b))
      , Z = Math.abs(P) < 5;
    o || (o = Z ? He.restSpeed.granular : He.restSpeed.default),
    u || (u = Z ? He.restDelta.granular : He.restDelta.default);
    let V;
    if (F < 1) {
        const _ = gc(L, F);
        V = ae => {
            const le = Math.exp(-F * L * ae);
            return h - le * ((H + F * L * P) / _ * Math.sin(_ * ae) + P * Math.cos(_ * ae))
        }
    } else if (F === 1)
        V = _ => h - Math.exp(-L * _) * (P + (H + L * P) * _);
    else {
        const _ = L * Math.sqrt(F * F - 1);
        V = ae => {
            const le = Math.exp(-F * L * ae)
              , K = Math.min(_ * ae, 300);
            return h - le * ((H + F * L * P) * Math.sinh(K) + _ * P * Math.cosh(K)) / _
        }
    }
    const q = {
        calculatedDuration: E && x || null,
        next: _ => {
            const ae = V(_);
            if (E)
                p.done = _ >= x;
            else {
                let le = _ === 0 ? H : 0;
                F < 1 && (le = _ === 0 ? kt(H) : Np(V, _, ae));
                const K = Math.abs(le) <= o
                  , ue = Math.abs(h - ae) <= u;
                p.done = K && ue
            }
            return p.value = p.done ? h : ae,
            p
        }
        ,
        toString: () => {
            const _ = Math.min(ef(q), po)
              , ae = Cp(le => q.next(_ * le).value, _, 30);
            return _ + "ms " + ae
        }
        ,
        toTransition: () => {}
    };
    return q
}
yo.applyToOptions = n => {
    const i = Sx(n, 100, yo);
    return n.ease = i.ease,
    n.duration = kt(i.duration),
    n.type = "keyframes",
    n
}
;
function pc({keyframes: n, velocity: i=0, power: l=.8, timeConstant: o=325, bounceDamping: u=10, bounceStiffness: d=500, modifyTarget: h, min: p, max: m, restDelta: g=.5, restSpeed: b}) {
    const x = n[0]
      , A = {
        done: !1,
        value: x
    }
      , E = K => p !== void 0 && K < p || m !== void 0 && K > m
      , H = K => p === void 0 ? m : m === void 0 || Math.abs(p - K) < Math.abs(m - K) ? p : m;
    let F = l * i;
    const P = x + F
      , L = h === void 0 ? P : h(P);
    L !== P && (F = L - x);
    const Z = K => -F * Math.exp(-K / o)
      , V = K => L + Z(K)
      , q = K => {
        const ue = Z(K)
          , De = V(K);
        A.done = Math.abs(ue) <= g,
        A.value = A.done ? L : De
    }
    ;
    let _, ae;
    const le = K => {
        E(A.value) && (_ = K,
        ae = yo({
            keyframes: [A.value, H(A.value)],
            velocity: Np(V, K, A.value),
            damping: u,
            stiffness: d,
            restDelta: g,
            restSpeed: b
        }))
    }
    ;
    return le(0),
    {
        calculatedDuration: null,
        next: K => {
            let ue = !1;
            return !ae && _ === void 0 && (ue = !0,
            q(K),
            le(K)),
            _ !== void 0 && K >= _ ? ae.next(K - _) : (!ue && q(K),
            A)
        }
    }
}
function Mx(n, i, l) {
    const o = []
      , u = l || xn.mix || Tp
      , d = n.length - 1;
    for (let h = 0; h < d; h++) {
        let p = u(n[h], n[h + 1]);
        if (i) {
            const m = Array.isArray(i) ? i[h] || Ht : i;
            p = Or(m, p)
        }
        o.push(p)
    }
    return o
}
function Rx(n, i, {clamp: l=!0, ease: o, mixer: u}={}) {
    const d = n.length;
    if (Zc(d === i.length),
    d === 1)
        return () => i[0];
    if (d === 2 && i[0] === i[1])
        return () => i[1];
    const h = n[0] === n[1];
    n[0] > n[d - 1] && (n = [...n].reverse(),
    i = [...i].reverse());
    const p = Mx(i, o, u)
      , m = p.length
      , g = b => {
        if (h && b < n[0])
            return i[0];
        let x = 0;
        if (m > 1)
            for (; x < n.length - 2 && !(b < n[x + 1]); x++)
                ;
        const A = wr(n[x], n[x + 1], b);
        return p[x](A)
    }
    ;
    return l ? b => g(vn(n[0], n[d - 1], b)) : g
}
function Ex(n, i) {
    const l = n[n.length - 1];
    for (let o = 1; o <= i; o++) {
        const u = wr(0, i, o);
        n.push(Me(l, 1, u))
    }
}
function Lx(n) {
    const i = [0];
    return Ex(i, n.length - 1),
    i
}
function Hx(n, i) {
    return n.map(l => l * i)
}
function Yx(n, i) {
    return n.map( () => i || gp).splice(0, n.length - 1)
}
function Dr({duration: n=300, keyframes: i, times: l, ease: o="easeInOut"}) {
    const u = Gv(o) ? o.map(C0) : C0(o)
      , d = {
        done: !1,
        value: i[0]
    }
      , h = Hx(l && l.length === i.length ? l : Lx(i), n)
      , p = Rx(h, i, {
        ease: Array.isArray(u) ? u : Yx(i, u)
    });
    return {
        calculatedDuration: n,
        next: m => (d.value = p(m),
        d.done = m >= n,
        d)
    }
}
const Bx = n => n !== null;
function tf(n, {repeat: i, repeatType: l="loop"}, o, u=1) {
    const d = n.filter(Bx)
      , p = u < 0 || i && l !== "loop" && i % 2 === 1 ? 0 : d.length - 1;
    return !p || o === void 0 ? d[p] : o
}
const zx = {
    decay: pc,
    inertia: pc,
    tween: Dr,
    keyframes: Dr,
    spring: yo
};
function wp(n) {
    typeof n.type == "string" && (n.type = zx[n.type])
}
class nf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(i => {
            this.resolve = i
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(i, l) {
        return this.finished.then(i, l)
    }
}
const Ox = n => n / 100;
class af extends nf {
    constructor(i) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            const {motionValue: l} = this.options;
            l && l.updatedAt !== ft.now() && this.tick(ft.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            this.options.onStop?.())
        }
        ,
        this.options = i,
        this.initAnimation(),
        this.play(),
        i.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: i} = this;
        wp(i);
        const {type: l=Dr, repeat: o=0, repeatDelay: u=0, repeatType: d, velocity: h=0} = i;
        let {keyframes: p} = i;
        const m = l || Dr;
        m !== Dr && typeof p[0] != "number" && (this.mixKeyframes = Or(Ox, Tp(p[0], p[1])),
        p = [0, 100]);
        const g = m({
            ...i,
            keyframes: p
        });
        d === "mirror" && (this.mirroredGenerator = m({
            ...i,
            keyframes: [...p].reverse(),
            velocity: -h
        })),
        g.calculatedDuration === null && (g.calculatedDuration = ef(g));
        const {calculatedDuration: b} = g;
        this.calculatedDuration = b,
        this.resolvedDuration = b + u,
        this.totalDuration = this.resolvedDuration * (o + 1) - u,
        this.generator = g
    }
    updateTime(i) {
        const l = Math.round(i - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = l
    }
    tick(i, l=!1) {
        const {generator: o, totalDuration: u, mixKeyframes: d, mirroredGenerator: h, resolvedDuration: p, calculatedDuration: m} = this;
        if (this.startTime === null)
            return o.next(0);
        const {delay: g=0, keyframes: b, repeat: x, repeatType: A, repeatDelay: E, type: H, onUpdate: F, finalKeyframe: P} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - u / this.speed, this.startTime)),
        l ? this.currentTime = i : this.updateTime(i);
        const L = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1)
          , Z = this.playbackSpeed >= 0 ? L < 0 : L > u;
        this.currentTime = Math.max(L, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = u);
        let V = this.currentTime
          , q = o;
        if (x) {
            const K = Math.min(this.currentTime, u) / p;
            let ue = Math.floor(K)
              , De = K % 1;
            !De && K >= 1 && (De = 1),
            De === 1 && ue--,
            ue = Math.min(ue, x + 1),
            !!(ue % 2) && (A === "reverse" ? (De = 1 - De,
            E && (De -= E / p)) : A === "mirror" && (q = h)),
            V = vn(0, 1, De) * p
        }
        const _ = Z ? {
            done: !1,
            value: b[0]
        } : q.next(V);
        d && (_.value = d(_.value));
        let {done: ae} = _;
        !Z && m !== null && (ae = this.playbackSpeed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
        const le = this.holdTime === null && (this.state === "finished" || this.state === "running" && ae);
        return le && H !== pc && (_.value = tf(b, this.options, P, this.speed)),
        F && F(_.value),
        le && this.finish(),
        _
    }
    then(i, l) {
        return this.finished.then(i, l)
    }
    get duration() {
        return Xt(this.calculatedDuration)
    }
    get time() {
        return Xt(this.currentTime)
    }
    set time(i) {
        i = kt(i),
        this.currentTime = i,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed),
        this.driver?.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(i) {
        this.updateTime(ft.now());
        const l = this.playbackSpeed !== i;
        this.playbackSpeed = i,
        l && (this.time = Xt(this.currentTime))
    }
    play() {
        if (this.isStopped)
            return;
        const {driver: i=xx, startTime: l} = this.options;
        this.driver || (this.driver = i(u => this.tick(u))),
        this.options.onPlay?.();
        const o = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = l ?? o),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(ft.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        this.options.onComplete?.()
    }
    cancel() {
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(i) {
        return this.startTime = 0,
        this.tick(i, !0)
    }
    attachTimeline(i) {
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        this.driver?.stop(),
        i.observe(this)
    }
}
function Px(n) {
    for (let i = 1; i < n.length; i++)
        n[i] ?? (n[i] = n[i - 1])
}
const va = n => n * 180 / Math.PI
  , yc = n => {
    const i = va(Math.atan2(n[1], n[0]));
    return bc(i)
}
  , Fx = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: yc,
    rotateZ: yc,
    skewX: n => va(Math.atan(n[1])),
    skewY: n => va(Math.atan(n[2])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}
  , bc = n => (n = n % 360,
n < 0 && (n += 360),
n)
  , L0 = yc
  , H0 = n => Math.sqrt(n[0] * n[0] + n[1] * n[1])
  , Y0 = n => Math.sqrt(n[4] * n[4] + n[5] * n[5])
  , Ux = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: H0,
    scaleY: Y0,
    scale: n => (H0(n) + Y0(n)) / 2,
    rotateX: n => bc(va(Math.atan2(n[6], n[5]))),
    rotateY: n => bc(va(Math.atan2(-n[2], n[0]))),
    rotateZ: L0,
    rotate: L0,
    skewX: n => va(Math.atan(n[4])),
    skewY: n => va(Math.atan(n[1])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function vc(n) {
    return n.includes("scale") ? 1 : 0
}
function xc(n, i) {
    if (!n || n === "none")
        return vc(i);
    const l = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, u;
    if (l)
        o = Ux,
        u = l;
    else {
        const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = Fx,
        u = p
    }
    if (!u)
        return vc(i);
    const d = o[i]
      , h = u[1].split(",").map(_x);
    return typeof d == "function" ? d(h) : h[d]
}
const Vx = (n, i) => {
    const {transform: l="none"} = getComputedStyle(n);
    return xc(l, i)
}
;
function _x(n) {
    return parseFloat(n.trim())
}
const bi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , vi = new Set(bi)
  , B0 = n => n === yi || n === ne
  , Wx = new Set(["x", "y", "z"])
  , Zx = bi.filter(n => !Wx.has(n));
function Gx(n) {
    const i = [];
    return Zx.forEach(l => {
        const o = n.getValue(l);
        o !== void 0 && (i.push([l, o.get()]),
        o.set(l.startsWith("scale") ? 1 : 0))
    }
    ),
    i
}
const xa = {
    width: ({x: n}, {paddingLeft: i="0", paddingRight: l="0"}) => n.max - n.min - parseFloat(i) - parseFloat(l),
    height: ({y: n}, {paddingTop: i="0", paddingBottom: l="0"}) => n.max - n.min - parseFloat(i) - parseFloat(l),
    top: (n, {top: i}) => parseFloat(i),
    left: (n, {left: i}) => parseFloat(i),
    bottom: ({y: n}, {top: i}) => parseFloat(i) + (n.max - n.min),
    right: ({x: n}, {left: i}) => parseFloat(i) + (n.max - n.min),
    x: (n, {transform: i}) => xc(i, "x"),
    y: (n, {transform: i}) => xc(i, "y")
};
xa.translateX = xa.x;
xa.translateY = xa.y;
const Sa = new Set;
let Sc = !1
  , Ac = !1
  , Dc = !1;
function Mp() {
    if (Ac) {
        const n = Array.from(Sa).filter(o => o.needsMeasurement)
          , i = new Set(n.map(o => o.element))
          , l = new Map;
        i.forEach(o => {
            const u = Gx(o);
            u.length && (l.set(o, u),
            o.render())
        }
        ),
        n.forEach(o => o.measureInitialState()),
        i.forEach(o => {
            o.render();
            const u = l.get(o);
            u && u.forEach( ([d,h]) => {
                o.getValue(d)?.set(h)
            }
            )
        }
        ),
        n.forEach(o => o.measureEndState()),
        n.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        }
        )
    }
    Ac = !1,
    Sc = !1,
    Sa.forEach(n => n.complete(Dc)),
    Sa.clear()
}
function Rp() {
    Sa.forEach(n => {
        n.readKeyframes(),
        n.needsMeasurement && (Ac = !0)
    }
    )
}
function kx() {
    Dc = !0,
    Rp(),
    Mp(),
    Dc = !1
}
class rf {
    constructor(i, l, o, u, d, h=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...i],
        this.onComplete = l,
        this.name = o,
        this.motionValue = u,
        this.element = d,
        this.isAsync = h
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Sa.add(this),
        Sc || (Sc = !0,
        Ne.read(Rp),
        Ne.resolveKeyframes(Mp))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: i, name: l, element: o, motionValue: u} = this;
        if (i[0] === null) {
            const d = u?.get()
              , h = i[i.length - 1];
            if (d !== void 0)
                i[0] = d;
            else if (o && l) {
                const p = o.readValue(l, h);
                p != null && (i[0] = p)
            }
            i[0] === void 0 && (i[0] = h),
            u && d === void 0 && u.set(i[0])
        }
        Px(i)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(i=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
        Sa.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Sa.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const Xx = n => n.startsWith("--");
function Jx(n, i, l) {
    Xx(i) ? n.style.setProperty(i, l) : n.style[i] = l
}
const qx = Gc( () => window.ScrollTimeline !== void 0)
  , Ix = {};
function Kx(n, i) {
    const l = Gc(n);
    return () => Ix[i] ?? l()
}
const Ep = Kx( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Sr = ([n,i,l,o]) => `cubic-bezier(${n}, ${i}, ${l}, ${o})`
  , z0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Sr([0, .65, .55, 1]),
    circOut: Sr([.55, 0, 1, .45]),
    backIn: Sr([.31, .01, .66, -.59]),
    backOut: Sr([.33, 1.53, .69, .99])
};
function Lp(n, i) {
    if (n)
        return typeof n == "function" ? Ep() ? Cp(n, i) : "ease-out" : pp(n) ? Sr(n) : Array.isArray(n) ? n.map(l => Lp(l, i) || z0.easeOut) : z0[n]
}
function Qx(n, i, l, {delay: o=0, duration: u=300, repeat: d=0, repeatType: h="loop", ease: p="easeOut", times: m}={}, g=void 0) {
    const b = {
        [i]: l
    };
    m && (b.offset = m);
    const x = Lp(p, u);
    Array.isArray(x) && (b.easing = x);
    const A = {
        delay: o,
        duration: u,
        easing: Array.isArray(x) ? "linear" : x,
        fill: "both",
        iterations: d + 1,
        direction: h === "reverse" ? "alternate" : "normal"
    };
    return g && (A.pseudoElement = g),
    n.animate(b, A)
}
function Hp(n) {
    return typeof n == "function" && "applyToOptions"in n
}
function $x({type: n, ...i}) {
    return Hp(n) && Ep() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300),
    i.ease ?? (i.ease = "easeOut"),
    i)
}
class eS extends nf {
    constructor(i) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !i)
            return;
        const {element: l, name: o, keyframes: u, pseudoElement: d, allowFlatten: h=!1, finalKeyframe: p, onComplete: m} = i;
        this.isPseudoElement = !!d,
        this.allowFlatten = h,
        this.options = i,
        Zc(typeof i.type != "string");
        const g = $x(i);
        this.animation = Qx(l, o, u, g, d),
        g.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !d) {
                const b = tf(u, this.options, p, this.speed);
                this.updateMotionValue ? this.updateMotionValue(b) : Jx(l, o, b),
                this.animation.cancel()
            }
            m?.(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish?.()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: i} = this;
        i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        this.isPseudoElement || this.animation.commitStyles?.()
    }
    get duration() {
        const i = this.animation.effect?.getComputedTiming?.().duration || 0;
        return Xt(Number(i))
    }
    get time() {
        return Xt(Number(this.animation.currentTime) || 0)
    }
    set time(i) {
        this.finishedTime = null,
        this.animation.currentTime = kt(i)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(i) {
        i < 0 && (this.finishedTime = null),
        this.animation.playbackRate = i
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(i) {
        this.animation.startTime = i
    }
    attachTimeline({timeline: i, observe: l}) {
        return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        }),
        this.animation.onfinish = null,
        i && qx() ? (this.animation.timeline = i,
        Ht) : l(this)
    }
}
const Yp = {
    anticipate: hp,
    backInOut: fp,
    circInOut: mp
};
function tS(n) {
    return n in Yp
}
function nS(n) {
    typeof n.ease == "string" && tS(n.ease) && (n.ease = Yp[n.ease])
}
const O0 = 10;
class aS extends eS {
    constructor(i) {
        nS(i),
        wp(i),
        super(i),
        i.startTime && (this.startTime = i.startTime),
        this.options = i
    }
    updateMotionValue(i) {
        const {motionValue: l, onUpdate: o, onComplete: u, element: d, ...h} = this.options;
        if (!l)
            return;
        if (i !== void 0) {
            l.set(i);
            return
        }
        const p = new af({
            ...h,
            autoplay: !1
        })
          , m = kt(this.finishedTime ?? this.time);
        l.setWithVelocity(p.sample(m - O0).value, p.sample(m).value, O0),
        p.stop()
    }
}
const P0 = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (qn.test(n) || n === "0") && !n.startsWith("url("));
function iS(n) {
    const i = n[0];
    if (n.length === 1)
        return !0;
    for (let l = 0; l < n.length; l++)
        if (n[l] !== i)
            return !0
}
function rS(n, i, l, o) {
    const u = n[0];
    if (u === null)
        return !1;
    if (i === "display" || i === "visibility")
        return !0;
    const d = n[n.length - 1]
      , h = P0(u, i)
      , p = P0(d, i);
    return !h || !p ? !1 : iS(n) || (l === "spring" || Hp(l)) && o
}
function jc(n) {
    n.duration = 0,
    n.type
}
const lS = new Set(["opacity", "clipPath", "filter", "transform"])
  , oS = Gc( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function sS(n) {
    const {motionValue: i, name: l, repeatDelay: o, repeatType: u, damping: d, type: h} = n;
    if (!(i?.owner?.current instanceof HTMLElement))
        return !1;
    const {onUpdate: m, transformTemplate: g} = i.owner.getProps();
    return oS() && l && lS.has(l) && (l !== "transform" || !g) && !m && !o && u !== "mirror" && d !== 0 && h !== "inertia"
}
const uS = 40;
class cS extends nf {
    constructor({autoplay: i=!0, delay: l=0, type: o="keyframes", repeat: u=0, repeatDelay: d=0, repeatType: h="loop", keyframes: p, name: m, motionValue: g, element: b, ...x}) {
        super(),
        this.stop = () => {
            this._animation && (this._animation.stop(),
            this.stopTimeline?.()),
            this.keyframeResolver?.cancel()
        }
        ,
        this.createdAt = ft.now();
        const A = {
            autoplay: i,
            delay: l,
            type: o,
            repeat: u,
            repeatDelay: d,
            repeatType: h,
            name: m,
            motionValue: g,
            element: b,
            ...x
        }
          , E = b?.KeyframeResolver || rf;
        this.keyframeResolver = new E(p, (H, F, P) => this.onKeyframesResolved(H, F, A, !P),m,g,b),
        this.keyframeResolver?.scheduleResolve()
    }
    onKeyframesResolved(i, l, o, u) {
        this.keyframeResolver = void 0;
        const {name: d, type: h, velocity: p, delay: m, isHandoff: g, onUpdate: b} = o;
        this.resolvedAt = ft.now(),
        rS(i, d, h, p) || ((xn.instantAnimations || !m) && b?.(tf(i, o, l)),
        i[0] = i[i.length - 1],
        jc(o),
        o.repeat = 0);
        const A = {
            startTime: u ? this.resolvedAt ? this.resolvedAt - this.createdAt > uS ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: l,
            ...o,
            keyframes: i
        }
          , E = !g && sS(A) ? new aS({
            ...A,
            element: A.motionValue.owner.current
        }) : new af(A);
        E.finished.then( () => this.notifyFinished()).catch(Ht),
        this.pendingTimeline && (this.stopTimeline = E.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = E
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(i, l) {
        return this.finished.finally(i).then( () => {}
        )
    }
    get animation() {
        return this._animation || (this.keyframeResolver?.resume(),
        kx()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(i) {
        this.animation.time = i
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(i) {
        this.animation.speed = i
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(i) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel()
    }
}
const fS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function hS(n) {
    const i = fS.exec(n);
    if (!i)
        return [, ];
    const [,l,o,u] = i;
    return [`--${l ?? o}`, u]
}
function Bp(n, i, l=1) {
    const [o,u] = hS(n);
    if (!o)
        return;
    const d = window.getComputedStyle(i).getPropertyValue(o);
    if (d) {
        const h = d.trim();
        return ap(h) ? parseFloat(h) : h
    }
    return Ic(u) ? Bp(u, i, l + 1) : u
}
function lf(n, i) {
    return n?.[i] ?? n?.default ?? n
}
const zp = new Set(["width", "height", "top", "left", "right", "bottom", ...bi])
  , dS = {
    test: n => n === "auto",
    parse: n => n
}
  , Op = n => i => i.test(n)
  , Pp = [yi, ne, Jt, Xn, ix, ax, dS]
  , F0 = n => Pp.find(Op(n));
function mS(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || rp(n) : !0
}
const gS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function pS(n) {
    const [i,l] = n.slice(0, -1).split("(");
    if (i === "drop-shadow")
        return n;
    const [o] = l.match(Kc) || [];
    if (!o)
        return n;
    const u = l.replace(o, "");
    let d = gS.has(i) ? 1 : 0;
    return o !== l && (d *= 100),
    i + "(" + d + u + ")"
}
const yS = /\b([a-z-]*)\(.*?\)/gu
  , Tc = {
    ...qn,
    getAnimatableNone: n => {
        const i = n.match(yS);
        return i ? i.map(pS).join(" ") : n
    }
}
  , U0 = {
    ...yi,
    transform: Math.round
}
  , bS = {
    rotate: Xn,
    rotateX: Xn,
    rotateY: Xn,
    rotateZ: Xn,
    scale: io,
    scaleX: io,
    scaleY: io,
    scaleZ: io,
    skew: Xn,
    skewX: Xn,
    skewY: Xn,
    distance: ne,
    translateX: ne,
    translateY: ne,
    translateZ: ne,
    x: ne,
    y: ne,
    z: ne,
    perspective: ne,
    transformPerspective: ne,
    opacity: Mr,
    originX: N0,
    originY: N0,
    originZ: ne
}
  , of = {
    borderWidth: ne,
    borderTopWidth: ne,
    borderRightWidth: ne,
    borderBottomWidth: ne,
    borderLeftWidth: ne,
    borderRadius: ne,
    radius: ne,
    borderTopLeftRadius: ne,
    borderTopRightRadius: ne,
    borderBottomRightRadius: ne,
    borderBottomLeftRadius: ne,
    width: ne,
    maxWidth: ne,
    height: ne,
    maxHeight: ne,
    top: ne,
    right: ne,
    bottom: ne,
    left: ne,
    padding: ne,
    paddingTop: ne,
    paddingRight: ne,
    paddingBottom: ne,
    paddingLeft: ne,
    margin: ne,
    marginTop: ne,
    marginRight: ne,
    marginBottom: ne,
    marginLeft: ne,
    backgroundPositionX: ne,
    backgroundPositionY: ne,
    ...bS,
    zIndex: U0,
    fillOpacity: Mr,
    strokeOpacity: Mr,
    numOctaves: U0
}
  , vS = {
    ...of,
    color: Fe,
    backgroundColor: Fe,
    outlineColor: Fe,
    fill: Fe,
    stroke: Fe,
    borderColor: Fe,
    borderTopColor: Fe,
    borderRightColor: Fe,
    borderBottomColor: Fe,
    borderLeftColor: Fe,
    filter: Tc,
    WebkitFilter: Tc
}
  , Fp = n => vS[n];
function Up(n, i) {
    let l = Fp(n);
    return l !== Tc && (l = qn),
    l.getAnimatableNone ? l.getAnimatableNone(i) : void 0
}
const xS = new Set(["auto", "none", "0"]);
function SS(n, i, l) {
    let o = 0, u;
    for (; o < n.length && !u; ) {
        const d = n[o];
        typeof d == "string" && !xS.has(d) && Rr(d).values.length && (u = n[o]),
        o++
    }
    if (u && l)
        for (const d of i)
            n[d] = Up(l, u)
}
class AS extends rf {
    constructor(i, l, o, u, d) {
        super(i, l, o, u, d, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: i, element: l, name: o} = this;
        if (!l || !l.current)
            return;
        super.readKeyframes();
        for (let m = 0; m < i.length; m++) {
            let g = i[m];
            if (typeof g == "string" && (g = g.trim(),
            Ic(g))) {
                const b = Bp(g, l.current);
                b !== void 0 && (i[m] = b),
                m === i.length - 1 && (this.finalKeyframe = g)
            }
        }
        if (this.resolveNoneKeyframes(),
        !zp.has(o) || i.length !== 2)
            return;
        const [u,d] = i
          , h = F0(u)
          , p = F0(d);
        if (h !== p)
            if (B0(h) && B0(p))
                for (let m = 0; m < i.length; m++) {
                    const g = i[m];
                    typeof g == "string" && (i[m] = parseFloat(g))
                }
            else
                xa[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: i, name: l} = this
          , o = [];
        for (let u = 0; u < i.length; u++)
            (i[u] === null || mS(i[u])) && o.push(u);
        o.length && SS(i, o, l)
    }
    measureInitialState() {
        const {element: i, unresolvedKeyframes: l, name: o} = this;
        if (!i || !i.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = xa[o](i.measureViewportBox(), window.getComputedStyle(i.current)),
        l[0] = this.measuredOrigin;
        const u = l[l.length - 1];
        u !== void 0 && i.getValue(o, u).jump(u, !1)
    }
    measureEndState() {
        const {element: i, name: l, unresolvedKeyframes: o} = this;
        if (!i || !i.current)
            return;
        const u = i.getValue(l);
        u && u.jump(this.measuredOrigin, !1);
        const d = o.length - 1
          , h = o[d];
        o[d] = xa[l](i.measureViewportBox(), window.getComputedStyle(i.current)),
        h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
        this.removedTransforms?.length && this.removedTransforms.forEach( ([p,m]) => {
            i.getValue(p).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function DS(n, i, l) {
    if (n instanceof EventTarget)
        return [n];
    if (typeof n == "string") {
        let o = document;
        const u = l?.[n] ?? o.querySelectorAll(n);
        return u ? Array.from(u) : []
    }
    return Array.from(n)
}
const Vp = (n, i) => i && typeof n == "number" ? i.transform(n) : n;
function jS(n) {
    return ip(n) && "offsetHeight"in n
}
const V0 = 30
  , TS = n => !isNaN(parseFloat(n));
class CS {
    constructor(i, l={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = o => {
            const u = ft.now();
            if (this.updatedAt !== u && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(o),
            this.current !== this.prev && (this.events.change?.notify(this.current),
            this.dependents))
                for (const d of this.dependents)
                    d.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(i),
        this.owner = l.owner
    }
    setCurrent(i) {
        this.current = i,
        this.updatedAt = ft.now(),
        this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = TS(this.current))
    }
    setPrevFrameValue(i=this.current) {
        this.prevFrameValue = i,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(i) {
        return this.on("change", i)
    }
    on(i, l) {
        this.events[i] || (this.events[i] = new kc);
        const o = this.events[i].add(l);
        return i === "change" ? () => {
            o(),
            Ne.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : o
    }
    clearListeners() {
        for (const i in this.events)
            this.events[i].clear()
    }
    attach(i, l) {
        this.passiveEffect = i,
        this.stopPassiveEffect = l
    }
    set(i) {
        this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
    }
    setWithVelocity(i, l, o) {
        this.set(l),
        this.prev = void 0,
        this.prevFrameValue = i,
        this.prevUpdatedAt = this.updatedAt - o
    }
    jump(i, l=!0) {
        this.updateAndNotify(i),
        this.prev = i,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        l && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change?.notify(this.current)
    }
    addDependent(i) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(i)
    }
    removeDependent(i) {
        this.dependents && this.dependents.delete(i)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const i = ft.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > V0)
            return 0;
        const l = Math.min(this.updatedAt - this.prevUpdatedAt, V0);
        return lp(parseFloat(this.current) - parseFloat(this.prevFrameValue), l)
    }
    start(i) {
        return this.stop(),
        new Promise(l => {
            this.hasAnimated = !0,
            this.animation = i(l),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function di(n, i) {
    return new CS(n,i)
}
const {schedule: sf} = yp(queueMicrotask, !1)
  , Ot = {
    x: !1,
    y: !1
};
function _p() {
    return Ot.x || Ot.y
}
function NS(n) {
    return n === "x" || n === "y" ? Ot[n] ? null : (Ot[n] = !0,
    () => {
        Ot[n] = !1
    }
    ) : Ot.x || Ot.y ? null : (Ot.x = Ot.y = !0,
    () => {
        Ot.x = Ot.y = !1
    }
    )
}
function Wp(n, i) {
    const l = DS(n)
      , o = new AbortController
      , u = {
        passive: !0,
        ...i,
        signal: o.signal
    };
    return [l, u, () => o.abort()]
}
function _0(n) {
    return !(n.pointerType === "touch" || _p())
}
function wS(n, i, l={}) {
    const [o,u,d] = Wp(n, l)
      , h = p => {
        if (!_0(p))
            return;
        const {target: m} = p
          , g = i(m, p);
        if (typeof g != "function" || !m)
            return;
        const b = x => {
            _0(x) && (g(x),
            m.removeEventListener("pointerleave", b))
        }
        ;
        m.addEventListener("pointerleave", b, u)
    }
    ;
    return o.forEach(p => {
        p.addEventListener("pointerenter", h, u)
    }
    ),
    d
}
const Zp = (n, i) => i ? n === i ? !0 : Zp(n, i.parentElement) : !1
  , uf = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1
  , MS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function RS(n) {
    return MS.has(n.tagName) || n.tabIndex !== -1
}
const co = new WeakSet;
function W0(n) {
    return i => {
        i.key === "Enter" && n(i)
    }
}
function tc(n, i) {
    n.dispatchEvent(new PointerEvent("pointer" + i,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const ES = (n, i) => {
    const l = n.currentTarget;
    if (!l)
        return;
    const o = W0( () => {
        if (co.has(l))
            return;
        tc(l, "down");
        const u = W0( () => {
            tc(l, "up")
        }
        )
          , d = () => tc(l, "cancel");
        l.addEventListener("keyup", u, i),
        l.addEventListener("blur", d, i)
    }
    );
    l.addEventListener("keydown", o, i),
    l.addEventListener("blur", () => l.removeEventListener("keydown", o), i)
}
;
function Z0(n) {
    return uf(n) && !_p()
}
function LS(n, i, l={}) {
    const [o,u,d] = Wp(n, l)
      , h = p => {
        const m = p.currentTarget;
        if (!Z0(p))
            return;
        co.add(m);
        const g = i(m, p)
          , b = (E, H) => {
            window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", A),
            co.has(m) && co.delete(m),
            Z0(E) && typeof g == "function" && g(E, {
                success: H
            })
        }
          , x = E => {
            b(E, m === window || m === document || l.useGlobalTarget || Zp(m, E.target))
        }
          , A = E => {
            b(E, !1)
        }
        ;
        window.addEventListener("pointerup", x, u),
        window.addEventListener("pointercancel", A, u)
    }
    ;
    return o.forEach(p => {
        (l.useGlobalTarget ? window : p).addEventListener("pointerdown", h, u),
        jS(p) && (p.addEventListener("focus", g => ES(g, u)),
        !RS(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0))
    }
    ),
    d
}
function Gp(n) {
    return ip(n) && "ownerSVGElement"in n
}
function HS(n) {
    return Gp(n) && n.tagName === "svg"
}
const at = n => !!(n && n.getVelocity)
  , YS = [...Pp, Fe, qn]
  , BS = n => YS.find(Op(n))
  , kp = w.createContext({
    transformPagePoint: n => n,
    isStatic: !1,
    reducedMotion: "never"
});
function zS(n=!0) {
    const i = w.useContext(Vc);
    if (i === null)
        return [!0, null];
    const {isPresent: l, onExitComplete: o, register: u} = i
      , d = w.useId();
    w.useEffect( () => {
        if (n)
            return u(d)
    }
    , [n]);
    const h = w.useCallback( () => n && o && o(d), [d, o, n]);
    return !l && o ? [!1, h] : [!0]
}
const Xp = w.createContext({
    strict: !1
})
  , G0 = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , mi = {};
for (const n in G0)
    mi[n] = {
        isEnabled: i => G0[n].some(l => !!i[l])
    };
function OS(n) {
    for (const i in n)
        mi[i] = {
            ...mi[i],
            ...n[i]
        }
}
const PS = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function bo(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || PS.has(n)
}
let Jp = n => !bo(n);
function FS(n) {
    typeof n == "function" && (Jp = i => i.startsWith("on") ? !bo(i) : n(i))
}
try {
    FS(require("@emotion/is-prop-valid").default)
} catch {}
function US(n, i, l) {
    const o = {};
    for (const u in n)
        u === "values" && typeof n.values == "object" || (Jp(u) || l === !0 && bo(u) || !i && !bo(u) || n.draggable && u.startsWith("onDrag")) && (o[u] = n[u]);
    return o
}
const jo = w.createContext({});
function To(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
function Er(n) {
    return typeof n == "string" || Array.isArray(n)
}
const cf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , ff = ["initial", ...cf];
function Co(n) {
    return To(n.animate) || ff.some(i => Er(n[i]))
}
function qp(n) {
    return !!(Co(n) || n.variants)
}
function VS(n, i) {
    if (Co(n)) {
        const {initial: l, animate: o} = n;
        return {
            initial: l === !1 || Er(l) ? l : void 0,
            animate: Er(o) ? o : void 0
        }
    }
    return n.inherit !== !1 ? i : {}
}
function _S(n) {
    const {initial: i, animate: l} = VS(n, w.useContext(jo));
    return w.useMemo( () => ({
        initial: i,
        animate: l
    }), [k0(i), k0(l)])
}
function k0(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const Lr = {};
function WS(n) {
    for (const i in n)
        Lr[i] = n[i],
        qc(i) && (Lr[i].isCSSVariable = !0)
}
function Ip(n, {layout: i, layoutId: l}) {
    return vi.has(n) || n.startsWith("origin") || (i || l !== void 0) && (!!Lr[n] || n === "opacity")
}
const ZS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , GS = bi.length;
function kS(n, i, l) {
    let o = ""
      , u = !0;
    for (let d = 0; d < GS; d++) {
        const h = bi[d]
          , p = n[h];
        if (p === void 0)
            continue;
        let m = !0;
        if (typeof p == "number" ? m = p === (h.startsWith("scale") ? 1 : 0) : m = parseFloat(p) === 0,
        !m || l) {
            const g = Vp(p, of[h]);
            if (!m) {
                u = !1;
                const b = ZS[h] || h;
                o += `${b}(${g}) `
            }
            l && (i[h] = g)
        }
    }
    return o = o.trim(),
    l ? o = l(i, u ? "" : o) : u && (o = "none"),
    o
}
function hf(n, i, l) {
    const {style: o, vars: u, transformOrigin: d} = n;
    let h = !1
      , p = !1;
    for (const m in i) {
        const g = i[m];
        if (vi.has(m)) {
            h = !0;
            continue
        } else if (qc(m)) {
            u[m] = g;
            continue
        } else {
            const b = Vp(g, of[m]);
            m.startsWith("origin") ? (p = !0,
            d[m] = b) : o[m] = b
        }
    }
    if (i.transform || (h || l ? o.transform = kS(i, n.transform, l) : o.transform && (o.transform = "none")),
    p) {
        const {originX: m="50%", originY: g="50%", originZ: b=0} = d;
        o.transformOrigin = `${m} ${g} ${b}`
    }
}
const df = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Kp(n, i, l) {
    for (const o in i)
        !at(i[o]) && !Ip(o, l) && (n[o] = i[o])
}
function XS({transformTemplate: n}, i) {
    return w.useMemo( () => {
        const l = df();
        return hf(l, i, n),
        Object.assign({}, l.vars, l.style)
    }
    , [i])
}
function JS(n, i) {
    const l = n.style || {}
      , o = {};
    return Kp(o, l, n),
    Object.assign(o, XS(n, i)),
    o
}
function qS(n, i) {
    const l = {}
      , o = JS(n, i);
    return n.drag && n.dragListener !== !1 && (l.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (l.tabIndex = 0),
    l.style = o,
    l
}
const IS = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , KS = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function QS(n, i, l=1, o=0, u=!0) {
    n.pathLength = 1;
    const d = u ? IS : KS;
    n[d.offset] = ne.transform(-o);
    const h = ne.transform(i)
      , p = ne.transform(l);
    n[d.array] = `${h} ${p}`
}
function Qp(n, {attrX: i, attrY: l, attrScale: o, pathLength: u, pathSpacing: d=1, pathOffset: h=0, ...p}, m, g, b) {
    if (hf(n, p, g),
    m) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style,
    n.style = {};
    const {attrs: x, style: A} = n;
    x.transform && (A.transform = x.transform,
    delete x.transform),
    (A.transform || x.transformOrigin) && (A.transformOrigin = x.transformOrigin ?? "50% 50%",
    delete x.transformOrigin),
    A.transform && (A.transformBox = b?.transformBox ?? "fill-box",
    delete x.transformBox),
    i !== void 0 && (x.x = i),
    l !== void 0 && (x.y = l),
    o !== void 0 && (x.scale = o),
    u !== void 0 && QS(x, u, d, h, !1)
}
const $p = () => ({
    ...df(),
    attrs: {}
})
  , ey = n => typeof n == "string" && n.toLowerCase() === "svg";
function $S(n, i, l, o) {
    const u = w.useMemo( () => {
        const d = $p();
        return Qp(d, i, ey(o), n.transformTemplate, n.style),
        {
            ...d.attrs,
            style: {
                ...d.style
            }
        }
    }
    , [i]);
    if (n.style) {
        const d = {};
        Kp(d, n.style, n),
        u.style = {
            ...d,
            ...u.style
        }
    }
    return u
}
const eA = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function mf(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(eA.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
function tA(n, i, l, {latestValues: o}, u, d=!1) {
    const p = (mf(n) ? $S : qS)(i, o, u, n)
      , m = US(i, typeof n == "string", d)
      , g = n !== w.Fragment ? {
        ...m,
        ...p,
        ref: l
    } : {}
      , {children: b} = i
      , x = w.useMemo( () => at(b) ? b.get() : b, [b]);
    return w.createElement(n, {
        ...g,
        children: x
    })
}
function X0(n) {
    const i = [{}, {}];
    return n?.values.forEach( (l, o) => {
        i[0][o] = l.get(),
        i[1][o] = l.getVelocity()
    }
    ),
    i
}
function gf(n, i, l, o) {
    if (typeof i == "function") {
        const [u,d] = X0(o);
        i = i(l !== void 0 ? l : n.custom, u, d)
    }
    if (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function") {
        const [u,d] = X0(o);
        i = i(l !== void 0 ? l : n.custom, u, d)
    }
    return i
}
function fo(n) {
    return at(n) ? n.get() : n
}
function nA({scrapeMotionValuesFromProps: n, createRenderState: i}, l, o, u) {
    return {
        latestValues: aA(l, o, u, n),
        renderState: i()
    }
}
function aA(n, i, l, o) {
    const u = {}
      , d = o(n, {});
    for (const A in d)
        u[A] = fo(d[A]);
    let {initial: h, animate: p} = n;
    const m = Co(n)
      , g = qp(n);
    i && g && !m && n.inherit !== !1 && (h === void 0 && (h = i.initial),
    p === void 0 && (p = i.animate));
    let b = l ? l.initial === !1 : !1;
    b = b || h === !1;
    const x = b ? p : h;
    if (x && typeof x != "boolean" && !To(x)) {
        const A = Array.isArray(x) ? x : [x];
        for (let E = 0; E < A.length; E++) {
            const H = gf(n, A[E]);
            if (H) {
                const {transitionEnd: F, transition: P, ...L} = H;
                for (const Z in L) {
                    let V = L[Z];
                    if (Array.isArray(V)) {
                        const q = b ? V.length - 1 : 0;
                        V = V[q]
                    }
                    V !== null && (u[Z] = V)
                }
                for (const Z in F)
                    u[Z] = F[Z]
            }
        }
    }
    return u
}
const ty = n => (i, l) => {
    const o = w.useContext(jo)
      , u = w.useContext(Vc)
      , d = () => nA(n, i, o, u);
    return l ? d() : Ov(d)
}
;
function pf(n, i, l) {
    const {style: o} = n
      , u = {};
    for (const d in o)
        (at(o[d]) || i.style && at(i.style[d]) || Ip(d, n) || l?.getValue(d)?.liveStyle !== void 0) && (u[d] = o[d]);
    return u
}
const iA = ty({
    scrapeMotionValuesFromProps: pf,
    createRenderState: df
});
function ny(n, i, l) {
    const o = pf(n, i, l);
    for (const u in n)
        if (at(n[u]) || at(i[u])) {
            const d = bi.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
            o[d] = n[u]
        }
    return o
}
const rA = ty({
    scrapeMotionValuesFromProps: ny,
    createRenderState: $p
})
  , lA = Symbol.for("motionComponentSymbol");
function si(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function oA(n, i, l) {
    return w.useCallback(o => {
        o && n.onMount && n.onMount(o),
        i && (o ? i.mount(o) : i.unmount()),
        l && (typeof l == "function" ? l(o) : si(l) && (l.current = o))
    }
    , [i])
}
const yf = n => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , sA = "framerAppearId"
  , ay = "data-" + yf(sA)
  , iy = w.createContext({});
function uA(n, i, l, o, u) {
    const {visualElement: d} = w.useContext(jo)
      , h = w.useContext(Xp)
      , p = w.useContext(Vc)
      , m = w.useContext(kp).reducedMotion
      , g = w.useRef(null);
    o = o || h.renderer,
    !g.current && o && (g.current = o(n, {
        visualState: i,
        parent: d,
        props: l,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: m
    }));
    const b = g.current
      , x = w.useContext(iy);
    b && !b.projection && u && (b.type === "html" || b.type === "svg") && cA(g.current, l, u, x);
    const A = w.useRef(!1);
    w.useInsertionEffect( () => {
        b && A.current && b.update(l, p)
    }
    );
    const E = l[ay]
      , H = w.useRef(!!E && !window.MotionHandoffIsComplete?.(E) && window.MotionHasOptimisedAnimation?.(E));
    return Pv( () => {
        b && (A.current = !0,
        window.MotionIsMounted = !0,
        b.updateFeatures(),
        b.scheduleRenderMicrotask(),
        H.current && b.animationState && b.animationState.animateChanges())
    }
    ),
    w.useEffect( () => {
        b && (!H.current && b.animationState && b.animationState.animateChanges(),
        H.current && (queueMicrotask( () => {
            window.MotionHandoffMarkAsComplete?.(E)
        }
        ),
        H.current = !1),
        b.enteringChildren = void 0)
    }
    ),
    b
}
function cA(n, i, l, o) {
    const {layoutId: u, layout: d, drag: h, dragConstraints: p, layoutScroll: m, layoutRoot: g, layoutCrossfade: b} = i;
    n.projection = new l(n.latestValues,i["data-framer-portal-id"] ? void 0 : ry(n.parent)),
    n.projection.setOptions({
        layoutId: u,
        layout: d,
        alwaysMeasureLayout: !!h || p && si(p),
        visualElement: n,
        animationType: typeof d == "string" ? d : "both",
        initialPromotionConfig: o,
        crossfade: b,
        layoutScroll: m,
        layoutRoot: g
    })
}
function ry(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : ry(n.parent)
}
function nc(n, {forwardMotionProps: i=!1}={}, l, o) {
    l && OS(l);
    const u = mf(n) ? rA : iA;
    function d(p, m) {
        let g;
        const b = {
            ...w.useContext(kp),
            ...p,
            layoutId: fA(p)
        }
          , {isStatic: x} = b
          , A = _S(p)
          , E = u(p, x);
        if (!x && Uc) {
            hA();
            const H = dA(b);
            g = H.MeasureLayout,
            A.visualElement = uA(n, E, b, o, H.ProjectionNode)
        }
        return c.jsxs(jo.Provider, {
            value: A,
            children: [g && A.visualElement ? c.jsx(g, {
                visualElement: A.visualElement,
                ...b
            }) : null, tA(n, p, oA(E, A.visualElement, m), E, x, i)]
        })
    }
    d.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
    const h = w.forwardRef(d);
    return h[lA] = n,
    h
}
function fA({layoutId: n}) {
    const i = w.useContext(np).id;
    return i && n !== void 0 ? i + "-" + n : n
}
function hA(n, i) {
    w.useContext(Xp).strict
}
function dA(n) {
    const {drag: i, layout: l} = mi;
    if (!i && !l)
        return {};
    const o = {
        ...i,
        ...l
    };
    return {
        MeasureLayout: i?.isEnabled(n) || l?.isEnabled(n) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
function mA(n, i) {
    if (typeof Proxy > "u")
        return nc;
    const l = new Map
      , o = (d, h) => nc(d, h, n, i)
      , u = (d, h) => o(d, h);
    return new Proxy(u,{
        get: (d, h) => h === "create" ? o : (l.has(h) || l.set(h, nc(h, void 0, n, i)),
        l.get(h))
    })
}
function ly({top: n, left: i, right: l, bottom: o}) {
    return {
        x: {
            min: i,
            max: l
        },
        y: {
            min: n,
            max: o
        }
    }
}
function gA({x: n, y: i}) {
    return {
        top: i.min,
        right: n.max,
        bottom: i.max,
        left: n.min
    }
}
function pA(n, i) {
    if (!i)
        return n;
    const l = i({
        x: n.left,
        y: n.top
    })
      , o = i({
        x: n.right,
        y: n.bottom
    });
    return {
        top: l.y,
        left: l.x,
        bottom: o.y,
        right: o.x
    }
}
function ac(n) {
    return n === void 0 || n === 1
}
function Cc({scale: n, scaleX: i, scaleY: l}) {
    return !ac(n) || !ac(i) || !ac(l)
}
function ya(n) {
    return Cc(n) || oy(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function oy(n) {
    return J0(n.x) || J0(n.y)
}
function J0(n) {
    return n && n !== "0%"
}
function vo(n, i, l) {
    const o = n - l
      , u = i * o;
    return l + u
}
function q0(n, i, l, o, u) {
    return u !== void 0 && (n = vo(n, u, o)),
    vo(n, l, o) + i
}
function Nc(n, i=0, l=1, o, u) {
    n.min = q0(n.min, i, l, o, u),
    n.max = q0(n.max, i, l, o, u)
}
function sy(n, {x: i, y: l}) {
    Nc(n.x, i.translate, i.scale, i.originPoint),
    Nc(n.y, l.translate, l.scale, l.originPoint)
}
const I0 = .999999999999
  , K0 = 1.0000000000001;
function yA(n, i, l, o=!1) {
    const u = l.length;
    if (!u)
        return;
    i.x = i.y = 1;
    let d, h;
    for (let p = 0; p < u; p++) {
        d = l[p],
        h = d.projectionDelta;
        const {visualElement: m} = d.options;
        m && m.props.style && m.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && ci(n, {
            x: -d.scroll.offset.x,
            y: -d.scroll.offset.y
        }),
        h && (i.x *= h.x.scale,
        i.y *= h.y.scale,
        sy(n, h)),
        o && ya(d.latestValues) && ci(n, d.latestValues))
    }
    i.x < K0 && i.x > I0 && (i.x = 1),
    i.y < K0 && i.y > I0 && (i.y = 1)
}
function ui(n, i) {
    n.min = n.min + i,
    n.max = n.max + i
}
function Q0(n, i, l, o, u=.5) {
    const d = Me(n.min, n.max, u);
    Nc(n, i, l, d, o)
}
function ci(n, i) {
    Q0(n.x, i.x, i.scaleX, i.scale, i.originX),
    Q0(n.y, i.y, i.scaleY, i.scale, i.originY)
}
function uy(n, i) {
    return ly(pA(n.getBoundingClientRect(), i))
}
function bA(n, i, l) {
    const o = uy(n, l)
      , {scroll: u} = i;
    return u && (ui(o.x, u.offset.x),
    ui(o.y, u.offset.y)),
    o
}
const $0 = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , fi = () => ({
    x: $0(),
    y: $0()
})
  , eg = () => ({
    min: 0,
    max: 0
})
  , ze = () => ({
    x: eg(),
    y: eg()
})
  , wc = {
    current: null
}
  , cy = {
    current: !1
};
function vA() {
    if (cy.current = !0,
    !!Uc)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
              , i = () => wc.current = n.matches;
            n.addEventListener("change", i),
            i()
        } else
            wc.current = !1
}
const xA = new WeakMap;
function SA(n, i, l) {
    for (const o in i) {
        const u = i[o]
          , d = l[o];
        if (at(u))
            n.addValue(o, u);
        else if (at(d))
            n.addValue(o, di(u, {
                owner: n
            }));
        else if (d !== u)
            if (n.hasValue(o)) {
                const h = n.getValue(o);
                h.liveStyle === !0 ? h.jump(u) : h.hasAnimated || h.set(u)
            } else {
                const h = n.getStaticValue(o);
                n.addValue(o, di(h !== void 0 ? h : u, {
                    owner: n
                }))
            }
    }
    for (const o in l)
        i[o] === void 0 && n.removeValue(o);
    return i
}
const tg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class AA {
    scrapeMotionValuesFromProps(i, l, o) {
        return {}
    }
    constructor({parent: i, props: l, presenceContext: o, reducedMotionConfig: u, blockInitialAnimation: d, visualState: h}, p={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = rf,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const A = ft.now();
            this.renderScheduledAt < A && (this.renderScheduledAt = A,
            Ne.render(this.render, !1, !0))
        }
        ;
        const {latestValues: m, renderState: g} = h;
        this.latestValues = m,
        this.baseTarget = {
            ...m
        },
        this.initialValues = l.initial ? {
            ...m
        } : {},
        this.renderState = g,
        this.parent = i,
        this.props = l,
        this.presenceContext = o,
        this.depth = i ? i.depth + 1 : 0,
        this.reducedMotionConfig = u,
        this.options = p,
        this.blockInitialAnimation = !!d,
        this.isControllingVariants = Co(l),
        this.isVariantNode = qp(l),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(i && i.current);
        const {willChange: b, ...x} = this.scrapeMotionValuesFromProps(l, {}, this);
        for (const A in x) {
            const E = x[A];
            m[A] !== void 0 && at(E) && E.set(m[A])
        }
    }
    mount(i) {
        this.current = i,
        xA.set(i, this),
        this.projection && !this.projection.instance && this.projection.mount(i),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (l, o) => this.bindToMotionValue(o, l)),
        cy.current || vA(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : wc.current,
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        Jn(this.notifyUpdate),
        Jn(this.render),
        this.valueSubscriptions.forEach(i => i()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this);
        for (const i in this.events)
            this.events[i].clear();
        for (const i in this.features) {
            const l = this.features[i];
            l && (l.unmount(),
            l.isMounted = !1)
        }
        this.current = null
    }
    addChild(i) {
        this.children.add(i),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(i)
    }
    removeChild(i) {
        this.children.delete(i),
        this.enteringChildren && this.enteringChildren.delete(i)
    }
    bindToMotionValue(i, l) {
        this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
        const o = vi.has(i);
        o && this.onBindTransform && this.onBindTransform();
        const u = l.on("change", h => {
            this.latestValues[i] = h,
            this.props.onUpdate && Ne.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let d;
        window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, i, l)),
        this.valueSubscriptions.set(i, () => {
            u(),
            d && d(),
            l.owner && l.stop()
        }
        )
    }
    sortNodePosition(i) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
    }
    updateFeatures() {
        let i = "animation";
        for (i in mi) {
            const l = mi[i];
            if (!l)
                continue;
            const {isEnabled: o, Feature: u} = l;
            if (!this.features[i] && u && o(this.props) && (this.features[i] = new u(this)),
            this.features[i]) {
                const d = this.features[i];
                d.isMounted ? d.update() : (d.mount(),
                d.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ze()
    }
    getStaticValue(i) {
        return this.latestValues[i]
    }
    setStaticValue(i, l) {
        this.latestValues[i] = l
    }
    update(i, l) {
        (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = i,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = l;
        for (let o = 0; o < tg.length; o++) {
            const u = tg[o];
            this.propEventSubscriptions[u] && (this.propEventSubscriptions[u](),
            delete this.propEventSubscriptions[u]);
            const d = "on" + u
              , h = i[d];
            h && (this.propEventSubscriptions[u] = this.on(u, h))
        }
        this.prevMotionValues = SA(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(i) {
        return this.props.variants ? this.props.variants[i] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(i) {
        const l = this.getClosestVariantNode();
        if (l)
            return l.variantChildren && l.variantChildren.add(i),
            () => l.variantChildren.delete(i)
    }
    addValue(i, l) {
        const o = this.values.get(i);
        l !== o && (o && this.removeValue(i),
        this.bindToMotionValue(i, l),
        this.values.set(i, l),
        this.latestValues[i] = l.get())
    }
    removeValue(i) {
        this.values.delete(i);
        const l = this.valueSubscriptions.get(i);
        l && (l(),
        this.valueSubscriptions.delete(i)),
        delete this.latestValues[i],
        this.removeValueFromRenderState(i, this.renderState)
    }
    hasValue(i) {
        return this.values.has(i)
    }
    getValue(i, l) {
        if (this.props.values && this.props.values[i])
            return this.props.values[i];
        let o = this.values.get(i);
        return o === void 0 && l !== void 0 && (o = di(l === null ? void 0 : l, {
            owner: this
        }),
        this.addValue(i, o)),
        o
    }
    readValue(i, l) {
        let o = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
        return o != null && (typeof o == "string" && (ap(o) || rp(o)) ? o = parseFloat(o) : !BS(o) && qn.test(l) && (o = Up(i, l)),
        this.setBaseTarget(i, at(o) ? o.get() : o)),
        at(o) ? o.get() : o
    }
    setBaseTarget(i, l) {
        this.baseTarget[i] = l
    }
    getBaseTarget(i) {
        const {initial: l} = this.props;
        let o;
        if (typeof l == "string" || typeof l == "object") {
            const d = gf(this.props, l, this.presenceContext?.custom);
            d && (o = d[i])
        }
        if (l && o !== void 0)
            return o;
        const u = this.getBaseTargetFromProps(this.props, i);
        return u !== void 0 && !at(u) ? u : this.initialValues[i] !== void 0 && o === void 0 ? void 0 : this.baseTarget[i]
    }
    on(i, l) {
        return this.events[i] || (this.events[i] = new kc),
        this.events[i].add(l)
    }
    notify(i, ...l) {
        this.events[i] && this.events[i].notify(...l)
    }
    scheduleRenderMicrotask() {
        sf.render(this.render)
    }
}
class fy extends AA {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = AS
    }
    sortInstanceNodePosition(i, l) {
        return i.compareDocumentPosition(l) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(i, l) {
        return i.style ? i.style[l] : void 0
    }
    removeValueFromRenderState(i, {vars: l, style: o}) {
        delete l[i],
        delete o[i]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: i} = this.props;
        at(i) && (this.childSubscription = i.on("change", l => {
            this.current && (this.current.textContent = `${l}`)
        }
        ))
    }
}
function hy(n, {style: i, vars: l}, o, u) {
    const d = n.style;
    let h;
    for (h in i)
        d[h] = i[h];
    u?.applyProjectionStyles(d, o);
    for (h in l)
        d.setProperty(h, l[h])
}
function DA(n) {
    return window.getComputedStyle(n)
}
class jA extends fy {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = hy
    }
    readValueFromInstance(i, l) {
        if (vi.has(l))
            return this.projection?.isProjecting ? vc(l) : Vx(i, l);
        {
            const o = DA(i)
              , u = (qc(l) ? o.getPropertyValue(l) : o[l]) || 0;
            return typeof u == "string" ? u.trim() : u
        }
    }
    measureInstanceViewportBox(i, {transformPagePoint: l}) {
        return uy(i, l)
    }
    build(i, l, o) {
        hf(i, l, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(i, l, o) {
        return pf(i, l, o)
    }
}
const dy = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function TA(n, i, l, o) {
    hy(n, i, void 0, o);
    for (const u in i.attrs)
        n.setAttribute(dy.has(u) ? u : yf(u), i.attrs[u])
}
class CA extends fy {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ze
    }
    getBaseTargetFromProps(i, l) {
        return i[l]
    }
    readValueFromInstance(i, l) {
        if (vi.has(l)) {
            const o = Fp(l);
            return o && o.default || 0
        }
        return l = dy.has(l) ? l : yf(l),
        i.getAttribute(l)
    }
    scrapeMotionValuesFromProps(i, l, o) {
        return ny(i, l, o)
    }
    build(i, l, o) {
        Qp(i, l, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(i, l, o, u) {
        TA(i, l, o, u)
    }
    mount(i) {
        this.isSVGTag = ey(i.tagName),
        super.mount(i)
    }
}
const NA = (n, i) => mf(n) ? new CA(i) : new jA(i,{
    allowProjection: n !== w.Fragment
});
function hi(n, i, l) {
    const o = n.getProps();
    return gf(o, i, l !== void 0 ? l : o.custom, n)
}
const Mc = n => Array.isArray(n);
function wA(n, i, l) {
    n.hasValue(i) ? n.getValue(i).set(l) : n.addValue(i, di(l))
}
function MA(n) {
    return Mc(n) ? n[n.length - 1] || 0 : n
}
function RA(n, i) {
    const l = hi(n, i);
    let {transitionEnd: o={}, transition: u={}, ...d} = l || {};
    d = {
        ...d,
        ...o
    };
    for (const h in d) {
        const p = MA(d[h]);
        wA(n, h, p)
    }
}
function EA(n) {
    return !!(at(n) && n.add)
}
function Rc(n, i) {
    const l = n.getValue("willChange");
    if (EA(l))
        return l.add(i);
    if (!l && xn.WillChange) {
        const o = new xn.WillChange("auto");
        n.addValue("willChange", o),
        o.add(i)
    }
}
function my(n) {
    return n.props[ay]
}
const LA = n => n !== null;
function HA(n, {repeat: i, repeatType: l="loop"}, o) {
    const u = n.filter(LA)
      , d = i && l !== "loop" && i % 2 === 1 ? 0 : u.length - 1;
    return u[d]
}
const YA = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , BA = n => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , zA = {
    type: "keyframes",
    duration: .8
}
  , OA = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , PA = (n, {keyframes: i}) => i.length > 2 ? zA : vi.has(n) ? n.startsWith("scale") ? BA(i[1]) : YA : OA;
function FA({when: n, delay: i, delayChildren: l, staggerChildren: o, staggerDirection: u, repeat: d, repeatType: h, repeatDelay: p, from: m, elapsed: g, ...b}) {
    return !!Object.keys(b).length
}
const bf = (n, i, l, o={}, u, d) => h => {
    const p = lf(o, n) || {}
      , m = p.delay || o.delay || 0;
    let {elapsed: g=0} = o;
    g = g - kt(m);
    const b = {
        keyframes: Array.isArray(l) ? l : [null, l],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...p,
        delay: -g,
        onUpdate: A => {
            i.set(A),
            p.onUpdate && p.onUpdate(A)
        }
        ,
        onComplete: () => {
            h(),
            p.onComplete && p.onComplete()
        }
        ,
        name: n,
        motionValue: i,
        element: d ? void 0 : u
    };
    FA(p) || Object.assign(b, PA(n, b)),
    b.duration && (b.duration = kt(b.duration)),
    b.repeatDelay && (b.repeatDelay = kt(b.repeatDelay)),
    b.from !== void 0 && (b.keyframes[0] = b.from);
    let x = !1;
    if ((b.type === !1 || b.duration === 0 && !b.repeatDelay) && (jc(b),
    b.delay === 0 && (x = !0)),
    (xn.instantAnimations || xn.skipAnimations) && (x = !0,
    jc(b),
    b.delay = 0),
    b.allowFlatten = !p.type && !p.ease,
    x && !d && i.get() !== void 0) {
        const A = HA(b.keyframes, p);
        if (A !== void 0) {
            Ne.update( () => {
                b.onUpdate(A),
                b.onComplete()
            }
            );
            return
        }
    }
    return p.isSync ? new af(b) : new cS(b)
}
;
function UA({protectedKeys: n, needsAnimating: i}, l) {
    const o = n.hasOwnProperty(l) && i[l] !== !0;
    return i[l] = !1,
    o
}
function gy(n, i, {delay: l=0, transitionOverride: o, type: u}={}) {
    let {transition: d=n.getDefaultTransition(), transitionEnd: h, ...p} = i;
    o && (d = o);
    const m = []
      , g = u && n.animationState && n.animationState.getState()[u];
    for (const b in p) {
        const x = n.getValue(b, n.latestValues[b] ?? null)
          , A = p[b];
        if (A === void 0 || g && UA(g, b))
            continue;
        const E = {
            delay: l,
            ...lf(d || {}, b)
        }
          , H = x.get();
        if (H !== void 0 && !x.isAnimating && !Array.isArray(A) && A === H && !E.velocity)
            continue;
        let F = !1;
        if (window.MotionHandoffAnimation) {
            const L = my(n);
            if (L) {
                const Z = window.MotionHandoffAnimation(L, b, Ne);
                Z !== null && (E.startTime = Z,
                F = !0)
            }
        }
        Rc(n, b),
        x.start(bf(b, x, A, n.shouldReduceMotion && zp.has(b) ? {
            type: !1
        } : E, n, F));
        const P = x.animation;
        P && m.push(P)
    }
    return h && Promise.all(m).then( () => {
        Ne.update( () => {
            h && RA(n, h)
        }
        )
    }
    ),
    m
}
function py(n, i, l, o=0, u=1) {
    const d = Array.from(n).sort( (g, b) => g.sortNodePosition(b)).indexOf(i)
      , h = n.size
      , p = (h - 1) * o;
    return typeof l == "function" ? l(d, h) : u === 1 ? d * o : p - d * o
}
function Ec(n, i, l={}) {
    const o = hi(n, i, l.type === "exit" ? n.presenceContext?.custom : void 0);
    let {transition: u=n.getDefaultTransition() || {}} = o || {};
    l.transitionOverride && (u = l.transitionOverride);
    const d = o ? () => Promise.all(gy(n, o, l)) : () => Promise.resolve()
      , h = n.variantChildren && n.variantChildren.size ? (m=0) => {
        const {delayChildren: g=0, staggerChildren: b, staggerDirection: x} = u;
        return VA(n, i, m, g, b, x, l)
    }
    : () => Promise.resolve()
      , {when: p} = u;
    if (p) {
        const [m,g] = p === "beforeChildren" ? [d, h] : [h, d];
        return m().then( () => g())
    } else
        return Promise.all([d(), h(l.delay)])
}
function VA(n, i, l=0, o=0, u=0, d=1, h) {
    const p = [];
    for (const m of n.variantChildren)
        m.notify("AnimationStart", i),
        p.push(Ec(m, i, {
            ...h,
            delay: l + (typeof o == "function" ? 0 : o) + py(n.variantChildren, m, o, u, d)
        }).then( () => m.notify("AnimationComplete", i)));
    return Promise.all(p)
}
function _A(n, i, l={}) {
    n.notify("AnimationStart", i);
    let o;
    if (Array.isArray(i)) {
        const u = i.map(d => Ec(n, d, l));
        o = Promise.all(u)
    } else if (typeof i == "string")
        o = Ec(n, i, l);
    else {
        const u = typeof i == "function" ? hi(n, i, l.custom) : i;
        o = Promise.all(gy(n, u, l))
    }
    return o.then( () => {
        n.notify("AnimationComplete", i)
    }
    )
}
function yy(n, i) {
    if (!Array.isArray(i))
        return !1;
    const l = i.length;
    if (l !== n.length)
        return !1;
    for (let o = 0; o < l; o++)
        if (i[o] !== n[o])
            return !1;
    return !0
}
const WA = ff.length;
function by(n) {
    if (!n)
        return;
    if (!n.isControllingVariants) {
        const l = n.parent ? by(n.parent) || {} : {};
        return n.props.initial !== void 0 && (l.initial = n.props.initial),
        l
    }
    const i = {};
    for (let l = 0; l < WA; l++) {
        const o = ff[l]
          , u = n.props[o];
        (Er(u) || u === !1) && (i[o] = u)
    }
    return i
}
const ZA = [...cf].reverse()
  , GA = cf.length;
function kA(n) {
    return i => Promise.all(i.map( ({animation: l, options: o}) => _A(n, l, o)))
}
function XA(n) {
    let i = kA(n)
      , l = ng()
      , o = !0;
    const u = m => (g, b) => {
        const x = hi(n, b, m === "exit" ? n.presenceContext?.custom : void 0);
        if (x) {
            const {transition: A, transitionEnd: E, ...H} = x;
            g = {
                ...g,
                ...H,
                ...E
            }
        }
        return g
    }
    ;
    function d(m) {
        i = m(n)
    }
    function h(m) {
        const {props: g} = n
          , b = by(n.parent) || {}
          , x = []
          , A = new Set;
        let E = {}
          , H = 1 / 0;
        for (let P = 0; P < GA; P++) {
            const L = ZA[P]
              , Z = l[L]
              , V = g[L] !== void 0 ? g[L] : b[L]
              , q = Er(V)
              , _ = L === m ? Z.isActive : null;
            _ === !1 && (H = P);
            let ae = V === b[L] && V !== g[L] && q;
            if (ae && o && n.manuallyAnimateOnMount && (ae = !1),
            Z.protectedKeys = {
                ...E
            },
            !Z.isActive && _ === null || !V && !Z.prevProp || To(V) || typeof V == "boolean")
                continue;
            const le = JA(Z.prevProp, V);
            let K = le || L === m && Z.isActive && !ae && q || P > H && q
              , ue = !1;
            const De = Array.isArray(V) ? V : [V];
            let Ue = De.reduce(u(L), {});
            _ === !1 && (Ue = {});
            const {prevResolvedValues: Ve={}} = Z
              , Qt = {
                ...Ve,
                ...Ue
            }
              , Pt = W => {
                K = !0,
                A.has(W) && (ue = !0,
                A.delete(W)),
                Z.needsAnimating[W] = !0;
                const J = n.getValue(W);
                J && (J.liveStyle = !1)
            }
            ;
            for (const W in Qt) {
                const J = Ue[W]
                  , he = Ve[W];
                if (E.hasOwnProperty(W))
                    continue;
                let D = !1;
                Mc(J) && Mc(he) ? D = !yy(J, he) : D = J !== he,
                D ? J != null ? Pt(W) : A.add(W) : J !== void 0 && A.has(W) ? Pt(W) : Z.protectedKeys[W] = !0
            }
            Z.prevProp = V,
            Z.prevResolvedValues = Ue,
            Z.isActive && (E = {
                ...E,
                ...Ue
            }),
            o && n.blockInitialAnimation && (K = !1);
            const _e = ae && le;
            K && (!_e || ue) && x.push(...De.map(W => {
                const J = {
                    type: L
                };
                if (typeof W == "string" && o && !_e && n.manuallyAnimateOnMount && n.parent) {
                    const {parent: he} = n
                      , D = hi(he, W);
                    if (he.enteringChildren && D) {
                        const {delayChildren: U} = D.transition || {};
                        J.delay = py(he.enteringChildren, n, U)
                    }
                }
                return {
                    animation: W,
                    options: J
                }
            }
            ))
        }
        if (A.size) {
            const P = {};
            if (typeof g.initial != "boolean") {
                const L = hi(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
                L && L.transition && (P.transition = L.transition)
            }
            A.forEach(L => {
                const Z = n.getBaseTarget(L)
                  , V = n.getValue(L);
                V && (V.liveStyle = !0),
                P[L] = Z ?? null
            }
            ),
            x.push({
                animation: P
            })
        }
        let F = !!x.length;
        return o && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (F = !1),
        o = !1,
        F ? i(x) : Promise.resolve()
    }
    function p(m, g) {
        if (l[m].isActive === g)
            return Promise.resolve();
        n.variantChildren?.forEach(x => x.animationState?.setActive(m, g)),
        l[m].isActive = g;
        const b = h(m);
        for (const x in l)
            l[x].protectedKeys = {};
        return b
    }
    return {
        animateChanges: h,
        setActive: p,
        setAnimateFunction: d,
        getState: () => l,
        reset: () => {
            l = ng(),
            o = !0
        }
    }
}
function JA(n, i) {
    return typeof i == "string" ? i !== n : Array.isArray(i) ? !yy(i, n) : !1
}
function pa(n=!1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function ng() {
    return {
        animate: pa(!0),
        whileInView: pa(),
        whileHover: pa(),
        whileTap: pa(),
        whileDrag: pa(),
        whileFocus: pa(),
        exit: pa()
    }
}
class In {
    constructor(i) {
        this.isMounted = !1,
        this.node = i
    }
    update() {}
}
class qA extends In {
    constructor(i) {
        super(i),
        i.animationState || (i.animationState = XA(i))
    }
    updateAnimationControlsSubscription() {
        const {animate: i} = this.node.getProps();
        To(i) && (this.unmountControls = i.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: i} = this.node.getProps()
          , {animate: l} = this.node.prevProps || {};
        i !== l && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(),
        this.unmountControls?.()
    }
}
let IA = 0;
class KA extends In {
    constructor() {
        super(...arguments),
        this.id = IA++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: i, onExitComplete: l} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || i === o)
            return;
        const u = this.node.animationState.setActive("exit", !i);
        l && !i && u.then( () => {
            l(this.id)
        }
        )
    }
    mount() {
        const {register: i, onExitComplete: l} = this.node.presenceContext || {};
        l && l(this.id),
        i && (this.unmount = i(this.id))
    }
    unmount() {}
}
const QA = {
    animation: {
        Feature: qA
    },
    exit: {
        Feature: KA
    }
};
function Hr(n, i, l, o={
    passive: !0
}) {
    return n.addEventListener(i, l, o),
    () => n.removeEventListener(i, l)
}
function Ur(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const $A = n => i => uf(i) && n(i, Ur(i));
function jr(n, i, l, o) {
    return Hr(n, i, $A(l), o)
}
const vy = 1e-4
  , e4 = 1 - vy
  , t4 = 1 + vy
  , xy = .01
  , n4 = 0 - xy
  , a4 = 0 + xy;
function rt(n) {
    return n.max - n.min
}
function i4(n, i, l) {
    return Math.abs(n - i) <= l
}
function ag(n, i, l, o=.5) {
    n.origin = o,
    n.originPoint = Me(i.min, i.max, n.origin),
    n.scale = rt(l) / rt(i),
    n.translate = Me(l.min, l.max, n.origin) - n.originPoint,
    (n.scale >= e4 && n.scale <= t4 || isNaN(n.scale)) && (n.scale = 1),
    (n.translate >= n4 && n.translate <= a4 || isNaN(n.translate)) && (n.translate = 0)
}
function Tr(n, i, l, o) {
    ag(n.x, i.x, l.x, o ? o.originX : void 0),
    ag(n.y, i.y, l.y, o ? o.originY : void 0)
}
function ig(n, i, l) {
    n.min = l.min + i.min,
    n.max = n.min + rt(i)
}
function r4(n, i, l) {
    ig(n.x, i.x, l.x),
    ig(n.y, i.y, l.y)
}
function rg(n, i, l) {
    n.min = i.min - l.min,
    n.max = n.min + rt(i)
}
function Cr(n, i, l) {
    rg(n.x, i.x, l.x),
    rg(n.y, i.y, l.y)
}
function Lt(n) {
    return [n("x"), n("y")]
}
const Sy = ({current: n}) => n ? n.ownerDocument.defaultView : null
  , lg = (n, i) => Math.abs(n - i);
function l4(n, i) {
    const l = lg(n.x, i.x)
      , o = lg(n.y, i.y);
    return Math.sqrt(l ** 2 + o ** 2)
}
class Ay {
    constructor(i, l, {transformPagePoint: o, contextWindow: u=window, dragSnapToOrigin: d=!1, distanceThreshold: h=3}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const A = rc(this.lastMoveEventInfo, this.history)
              , E = this.startEvent !== null
              , H = l4(A.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!E && !H)
                return;
            const {point: F} = A
              , {timestamp: P} = $e;
            this.history.push({
                ...F,
                timestamp: P
            });
            const {onStart: L, onMove: Z} = this.handlers;
            E || (L && L(this.lastMoveEvent, A),
            this.startEvent = this.lastMoveEvent),
            Z && Z(this.lastMoveEvent, A)
        }
        ,
        this.handlePointerMove = (A, E) => {
            this.lastMoveEvent = A,
            this.lastMoveEventInfo = ic(E, this.transformPagePoint),
            Ne.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (A, E) => {
            this.end();
            const {onEnd: H, onSessionEnd: F, resumeAnimation: P} = this.handlers;
            if (this.dragSnapToOrigin && P && P(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const L = rc(A.type === "pointercancel" ? this.lastMoveEventInfo : ic(E, this.transformPagePoint), this.history);
            this.startEvent && H && H(A, L),
            F && F(A, L)
        }
        ,
        !uf(i))
            return;
        this.dragSnapToOrigin = d,
        this.handlers = l,
        this.transformPagePoint = o,
        this.distanceThreshold = h,
        this.contextWindow = u || window;
        const p = Ur(i)
          , m = ic(p, this.transformPagePoint)
          , {point: g} = m
          , {timestamp: b} = $e;
        this.history = [{
            ...g,
            timestamp: b
        }];
        const {onSessionStart: x} = l;
        x && x(i, rc(m, this.history)),
        this.removeListeners = Or(jr(this.contextWindow, "pointermove", this.handlePointerMove), jr(this.contextWindow, "pointerup", this.handlePointerUp), jr(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(i) {
        this.handlers = i
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Jn(this.updatePoint)
    }
}
function ic(n, i) {
    return i ? {
        point: i(n.point)
    } : n
}
function og(n, i) {
    return {
        x: n.x - i.x,
        y: n.y - i.y
    }
}
function rc({point: n}, i) {
    return {
        point: n,
        delta: og(n, Dy(i)),
        offset: og(n, o4(i)),
        velocity: s4(i, .1)
    }
}
function o4(n) {
    return n[0]
}
function Dy(n) {
    return n[n.length - 1]
}
function s4(n, i) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let l = n.length - 1
      , o = null;
    const u = Dy(n);
    for (; l >= 0 && (o = n[l],
    !(u.timestamp - o.timestamp > kt(i))); )
        l--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    const d = Xt(u.timestamp - o.timestamp);
    if (d === 0)
        return {
            x: 0,
            y: 0
        };
    const h = {
        x: (u.x - o.x) / d,
        y: (u.y - o.y) / d
    };
    return h.x === 1 / 0 && (h.x = 0),
    h.y === 1 / 0 && (h.y = 0),
    h
}
function u4(n, {min: i, max: l}, o) {
    return i !== void 0 && n < i ? n = o ? Me(i, n, o.min) : Math.max(n, i) : l !== void 0 && n > l && (n = o ? Me(l, n, o.max) : Math.min(n, l)),
    n
}
function sg(n, i, l) {
    return {
        min: i !== void 0 ? n.min + i : void 0,
        max: l !== void 0 ? n.max + l - (n.max - n.min) : void 0
    }
}
function c4(n, {top: i, left: l, bottom: o, right: u}) {
    return {
        x: sg(n.x, l, u),
        y: sg(n.y, i, o)
    }
}
function ug(n, i) {
    let l = i.min - n.min
      , o = i.max - n.max;
    return i.max - i.min < n.max - n.min && ([l,o] = [o, l]),
    {
        min: l,
        max: o
    }
}
function f4(n, i) {
    return {
        x: ug(n.x, i.x),
        y: ug(n.y, i.y)
    }
}
function h4(n, i) {
    let l = .5;
    const o = rt(n)
      , u = rt(i);
    return u > o ? l = wr(i.min, i.max - o, n.min) : o > u && (l = wr(n.min, n.max - u, i.min)),
    vn(0, 1, l)
}
function d4(n, i) {
    const l = {};
    return i.min !== void 0 && (l.min = i.min - n.min),
    i.max !== void 0 && (l.max = i.max - n.min),
    l
}
const Lc = .35;
function m4(n=Lc) {
    return n === !1 ? n = 0 : n === !0 && (n = Lc),
    {
        x: cg(n, "left", "right"),
        y: cg(n, "top", "bottom")
    }
}
function cg(n, i, l) {
    return {
        min: fg(n, i),
        max: fg(n, l)
    }
}
function fg(n, i) {
    return typeof n == "number" ? n : n[i] || 0
}
const g4 = new WeakMap;
class p4 {
    constructor(i) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ze(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = i
    }
    start(i, {snapToCursor: l=!1, distanceThreshold: o}={}) {
        const {presenceContext: u} = this.visualElement;
        if (u && u.isPresent === !1)
            return;
        const d = x => {
            const {dragSnapToOrigin: A} = this.getProps();
            A ? this.pauseAnimation() : this.stopAnimation(),
            l && this.snapToCursor(Ur(x).point)
        }
          , h = (x, A) => {
            const {drag: E, dragPropagation: H, onDragStart: F} = this.getProps();
            if (E && !H && (this.openDragLock && this.openDragLock(),
            this.openDragLock = NS(E),
            !this.openDragLock))
                return;
            this.latestPointerEvent = x,
            this.latestPanInfo = A,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Lt(L => {
                let Z = this.getAxisMotionValue(L).get() || 0;
                if (Jt.test(Z)) {
                    const {projection: V} = this.visualElement;
                    if (V && V.layout) {
                        const q = V.layout.layoutBox[L];
                        q && (Z = rt(q) * (parseFloat(Z) / 100))
                    }
                }
                this.originPoint[L] = Z
            }
            ),
            F && Ne.postRender( () => F(x, A)),
            Rc(this.visualElement, "transform");
            const {animationState: P} = this.visualElement;
            P && P.setActive("whileDrag", !0)
        }
          , p = (x, A) => {
            this.latestPointerEvent = x,
            this.latestPanInfo = A;
            const {dragPropagation: E, dragDirectionLock: H, onDirectionLock: F, onDrag: P} = this.getProps();
            if (!E && !this.openDragLock)
                return;
            const {offset: L} = A;
            if (H && this.currentDirection === null) {
                this.currentDirection = y4(L),
                this.currentDirection !== null && F && F(this.currentDirection);
                return
            }
            this.updateAxis("x", A.point, L),
            this.updateAxis("y", A.point, L),
            this.visualElement.render(),
            P && P(x, A)
        }
          , m = (x, A) => {
            this.latestPointerEvent = x,
            this.latestPanInfo = A,
            this.stop(x, A),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , g = () => Lt(x => this.getAnimationState(x) === "paused" && this.getAxisMotionValue(x).animation?.play())
          , {dragSnapToOrigin: b} = this.getProps();
        this.panSession = new Ay(i,{
            onSessionStart: d,
            onStart: h,
            onMove: p,
            onSessionEnd: m,
            resumeAnimation: g
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: b,
            distanceThreshold: o,
            contextWindow: Sy(this.visualElement)
        })
    }
    stop(i, l) {
        const o = i || this.latestPointerEvent
          , u = l || this.latestPanInfo
          , d = this.isDragging;
        if (this.cancel(),
        !d || !u || !o)
            return;
        const {velocity: h} = u;
        this.startAnimation(h);
        const {onDragEnd: p} = this.getProps();
        p && Ne.postRender( () => p(o, u))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: i, animationState: l} = this.visualElement;
        i && (i.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: o} = this.getProps();
        !o && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        l && l.setActive("whileDrag", !1)
    }
    updateAxis(i, l, o) {
        const {drag: u} = this.getProps();
        if (!o || !ro(i, u, this.currentDirection))
            return;
        const d = this.getAxisMotionValue(i);
        let h = this.originPoint[i] + o[i];
        this.constraints && this.constraints[i] && (h = u4(h, this.constraints[i], this.elastic[i])),
        d.set(h)
    }
    resolveConstraints() {
        const {dragConstraints: i, dragElastic: l} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
          , u = this.constraints;
        i && si(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && o ? this.constraints = c4(o.layoutBox, i) : this.constraints = !1,
        this.elastic = m4(l),
        u !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Lt(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = d4(o.layoutBox[d], this.constraints[d]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: i, onMeasureDragConstraints: l} = this.getProps();
        if (!i || !si(i))
            return !1;
        const o = i.current
          , {projection: u} = this.visualElement;
        if (!u || !u.layout)
            return !1;
        const d = bA(o, u.root, this.visualElement.getTransformPagePoint());
        let h = f4(u.layout.layoutBox, d);
        if (l) {
            const p = l(gA(h));
            this.hasMutatedConstraints = !!p,
            p && (h = ly(p))
        }
        return h
    }
    startAnimation(i) {
        const {drag: l, dragMomentum: o, dragElastic: u, dragTransition: d, dragSnapToOrigin: h, onDragTransitionEnd: p} = this.getProps()
          , m = this.constraints || {}
          , g = Lt(b => {
            if (!ro(b, l, this.currentDirection))
                return;
            let x = m && m[b] || {};
            h && (x = {
                min: 0,
                max: 0
            });
            const A = u ? 200 : 1e6
              , E = u ? 40 : 1e7
              , H = {
                type: "inertia",
                velocity: o ? i[b] : 0,
                bounceStiffness: A,
                bounceDamping: E,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...d,
                ...x
            };
            return this.startAxisValueAnimation(b, H)
        }
        );
        return Promise.all(g).then(p)
    }
    startAxisValueAnimation(i, l) {
        const o = this.getAxisMotionValue(i);
        return Rc(this.visualElement, i),
        o.start(bf(i, o, 0, l, this.visualElement, !1))
    }
    stopAnimation() {
        Lt(i => this.getAxisMotionValue(i).stop())
    }
    pauseAnimation() {
        Lt(i => this.getAxisMotionValue(i).animation?.pause())
    }
    getAnimationState(i) {
        return this.getAxisMotionValue(i).animation?.state
    }
    getAxisMotionValue(i) {
        const l = `_drag${i.toUpperCase()}`
          , o = this.visualElement.getProps()
          , u = o[l];
        return u || this.visualElement.getValue(i, (o.initial ? o.initial[i] : void 0) || 0)
    }
    snapToCursor(i) {
        Lt(l => {
            const {drag: o} = this.getProps();
            if (!ro(l, o, this.currentDirection))
                return;
            const {projection: u} = this.visualElement
              , d = this.getAxisMotionValue(l);
            if (u && u.layout) {
                const {min: h, max: p} = u.layout.layoutBox[l];
                d.set(i[l] - Me(h, p, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: i, dragConstraints: l} = this.getProps()
          , {projection: o} = this.visualElement;
        if (!si(l) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const u = {
            x: 0,
            y: 0
        };
        Lt(h => {
            const p = this.getAxisMotionValue(h);
            if (p && this.constraints !== !1) {
                const m = p.get();
                u[h] = h4({
                    min: m,
                    max: m
                }, this.constraints[h])
            }
        }
        );
        const {transformTemplate: d} = this.visualElement.getProps();
        this.visualElement.current.style.transform = d ? d({}, "") : "none",
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        Lt(h => {
            if (!ro(h, i, null))
                return;
            const p = this.getAxisMotionValue(h)
              , {min: m, max: g} = this.constraints[h];
            p.set(Me(m, g, u[h]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        g4.set(this.visualElement, this);
        const i = this.visualElement.current
          , l = jr(i, "pointerdown", m => {
            const {drag: g, dragListener: b=!0} = this.getProps();
            g && b && this.start(m)
        }
        )
          , o = () => {
            const {dragConstraints: m} = this.getProps();
            si(m) && m.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: u} = this.visualElement
          , d = u.addEventListener("measure", o);
        u && !u.layout && (u.root && u.root.updateScroll(),
        u.updateLayout()),
        Ne.read(o);
        const h = Hr(window, "resize", () => this.scalePositionWithinConstraints())
          , p = u.addEventListener("didUpdate", ({delta: m, hasLayoutChanged: g}) => {
            this.isDragging && g && (Lt(b => {
                const x = this.getAxisMotionValue(b);
                x && (this.originPoint[b] += m[b].translate,
                x.set(x.get() + m[b].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            h(),
            l(),
            d(),
            p && p()
        }
    }
    getProps() {
        const i = this.visualElement.getProps()
          , {drag: l=!1, dragDirectionLock: o=!1, dragPropagation: u=!1, dragConstraints: d=!1, dragElastic: h=Lc, dragMomentum: p=!0} = i;
        return {
            ...i,
            drag: l,
            dragDirectionLock: o,
            dragPropagation: u,
            dragConstraints: d,
            dragElastic: h,
            dragMomentum: p
        }
    }
}
function ro(n, i, l) {
    return (i === !0 || i === n) && (l === null || l === n)
}
function y4(n, i=10) {
    let l = null;
    return Math.abs(n.y) > i ? l = "y" : Math.abs(n.x) > i && (l = "x"),
    l
}
class b4 extends In {
    constructor(i) {
        super(i),
        this.removeGroupControls = Ht,
        this.removeListeners = Ht,
        this.controls = new p4(i)
    }
    mount() {
        const {dragControls: i} = this.node.getProps();
        i && (this.removeGroupControls = i.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Ht
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const hg = n => (i, l) => {
    n && Ne.postRender( () => n(i, l))
}
;
class v4 extends In {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Ht
    }
    onPointerDown(i) {
        this.session = new Ay(i,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Sy(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: i, onPanStart: l, onPan: o, onPanEnd: u} = this.node.getProps();
        return {
            onSessionStart: hg(i),
            onStart: hg(l),
            onMove: o,
            onEnd: (d, h) => {
                delete this.session,
                u && Ne.postRender( () => u(d, h))
            }
        }
    }
    mount() {
        this.removePointerDownListener = jr(this.node.current, "pointerdown", i => this.onPointerDown(i))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const ho = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function dg(n, i) {
    return i.max === i.min ? 0 : n / (i.max - i.min) * 100
}
const xr = {
    correct: (n, i) => {
        if (!i.target)
            return n;
        if (typeof n == "string")
            if (ne.test(n))
                n = parseFloat(n);
            else
                return n;
        const l = dg(n, i.target.x)
          , o = dg(n, i.target.y);
        return `${l}% ${o}%`
    }
}
  , x4 = {
    correct: (n, {treeScale: i, projectionDelta: l}) => {
        const o = n
          , u = qn.parse(n);
        if (u.length > 5)
            return o;
        const d = qn.createTransformer(n)
          , h = typeof u[0] != "number" ? 1 : 0
          , p = l.x.scale * i.x
          , m = l.y.scale * i.y;
        u[0 + h] /= p,
        u[1 + h] /= m;
        const g = Me(p, m, .5);
        return typeof u[2 + h] == "number" && (u[2 + h] /= g),
        typeof u[3 + h] == "number" && (u[3 + h] /= g),
        d(u)
    }
};
let lc = !1;
class S4 extends w.Component {
    componentDidMount() {
        const {visualElement: i, layoutGroup: l, switchLayoutGroup: o, layoutId: u} = this.props
          , {projection: d} = i;
        WS(A4),
        d && (l.group && l.group.add(d),
        o && o.register && u && o.register(d),
        lc && d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        d.setOptions({
            ...d.options,
            onExitComplete: () => this.safeToRemove()
        })),
        ho.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(i) {
        const {layoutDependency: l, visualElement: o, drag: u, isPresent: d} = this.props
          , {projection: h} = o;
        return h && (h.isPresent = d,
        lc = !0,
        u || i.layoutDependency !== l || l === void 0 || i.isPresent !== d ? h.willUpdate() : this.safeToRemove(),
        i.isPresent !== d && (d ? h.promote() : h.relegate() || Ne.postRender( () => {
            const p = h.getStack();
            (!p || !p.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: i} = this.props.visualElement;
        i && (i.root.didUpdate(),
        sf.postRender( () => {
            !i.currentAnimation && i.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: i, layoutGroup: l, switchLayoutGroup: o} = this.props
          , {projection: u} = i;
        lc = !0,
        u && (u.scheduleCheckAfterUnmount(),
        l && l.group && l.group.remove(u),
        o && o.deregister && o.deregister(u))
    }
    safeToRemove() {
        const {safeToRemove: i} = this.props;
        i && i()
    }
    render() {
        return null
    }
}
function jy(n) {
    const [i,l] = zS()
      , o = w.useContext(np);
    return c.jsx(S4, {
        ...n,
        layoutGroup: o,
        switchLayoutGroup: w.useContext(iy),
        isPresent: i,
        safeToRemove: l
    })
}
const A4 = {
    borderRadius: {
        ...xr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: xr,
    borderTopRightRadius: xr,
    borderBottomLeftRadius: xr,
    borderBottomRightRadius: xr,
    boxShadow: x4
};
function D4(n, i, l) {
    const o = at(n) ? n : di(n);
    return o.start(bf("", o, i, l)),
    o.animation
}
const j4 = (n, i) => n.depth - i.depth;
class T4 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(i) {
        _c(this.children, i),
        this.isDirty = !0
    }
    remove(i) {
        Wc(this.children, i),
        this.isDirty = !0
    }
    forEach(i) {
        this.isDirty && this.children.sort(j4),
        this.isDirty = !1,
        this.children.forEach(i)
    }
}
function C4(n, i) {
    const l = ft.now()
      , o = ({timestamp: u}) => {
        const d = u - l;
        d >= i && (Jn(o),
        n(d - i))
    }
    ;
    return Ne.setup(o, !0),
    () => Jn(o)
}
const Ty = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , N4 = Ty.length
  , mg = n => typeof n == "string" ? parseFloat(n) : n
  , gg = n => typeof n == "number" || ne.test(n);
function w4(n, i, l, o, u, d) {
    u ? (n.opacity = Me(0, l.opacity ?? 1, M4(o)),
    n.opacityExit = Me(i.opacity ?? 1, 0, R4(o))) : d && (n.opacity = Me(i.opacity ?? 1, l.opacity ?? 1, o));
    for (let h = 0; h < N4; h++) {
        const p = `border${Ty[h]}Radius`;
        let m = pg(i, p)
          , g = pg(l, p);
        if (m === void 0 && g === void 0)
            continue;
        m || (m = 0),
        g || (g = 0),
        m === 0 || g === 0 || gg(m) === gg(g) ? (n[p] = Math.max(Me(mg(m), mg(g), o), 0),
        (Jt.test(g) || Jt.test(m)) && (n[p] += "%")) : n[p] = g
    }
    (i.rotate || l.rotate) && (n.rotate = Me(i.rotate || 0, l.rotate || 0, o))
}
function pg(n, i) {
    return n[i] !== void 0 ? n[i] : n.borderRadius
}
const M4 = Cy(0, .5, dp)
  , R4 = Cy(.5, .95, Ht);
function Cy(n, i, l) {
    return o => o < n ? 0 : o > i ? 1 : l(wr(n, i, o))
}
function yg(n, i) {
    n.min = i.min,
    n.max = i.max
}
function Et(n, i) {
    yg(n.x, i.x),
    yg(n.y, i.y)
}
function bg(n, i) {
    n.translate = i.translate,
    n.scale = i.scale,
    n.originPoint = i.originPoint,
    n.origin = i.origin
}
function vg(n, i, l, o, u) {
    return n -= i,
    n = vo(n, 1 / l, o),
    u !== void 0 && (n = vo(n, 1 / u, o)),
    n
}
function E4(n, i=0, l=1, o=.5, u, d=n, h=n) {
    if (Jt.test(i) && (i = parseFloat(i),
    i = Me(h.min, h.max, i / 100) - h.min),
    typeof i != "number")
        return;
    let p = Me(d.min, d.max, o);
    n === d && (p -= i),
    n.min = vg(n.min, i, l, p, u),
    n.max = vg(n.max, i, l, p, u)
}
function xg(n, i, [l,o,u], d, h) {
    E4(n, i[l], i[o], i[u], i.scale, d, h)
}
const L4 = ["x", "scaleX", "originX"]
  , H4 = ["y", "scaleY", "originY"];
function Sg(n, i, l, o) {
    xg(n.x, i, L4, l ? l.x : void 0, o ? o.x : void 0),
    xg(n.y, i, H4, l ? l.y : void 0, o ? o.y : void 0)
}
function Ag(n) {
    return n.translate === 0 && n.scale === 1
}
function Ny(n) {
    return Ag(n.x) && Ag(n.y)
}
function Dg(n, i) {
    return n.min === i.min && n.max === i.max
}
function Y4(n, i) {
    return Dg(n.x, i.x) && Dg(n.y, i.y)
}
function jg(n, i) {
    return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max)
}
function wy(n, i) {
    return jg(n.x, i.x) && jg(n.y, i.y)
}
function Tg(n) {
    return rt(n.x) / rt(n.y)
}
function Cg(n, i) {
    return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint
}
class B4 {
    constructor() {
        this.members = []
    }
    add(i) {
        _c(this.members, i),
        i.scheduleRender()
    }
    remove(i) {
        if (Wc(this.members, i),
        i === this.prevLead && (this.prevLead = void 0),
        i === this.lead) {
            const l = this.members[this.members.length - 1];
            l && this.promote(l)
        }
    }
    relegate(i) {
        const l = this.members.findIndex(u => i === u);
        if (l === 0)
            return !1;
        let o;
        for (let u = l; u >= 0; u--) {
            const d = this.members[u];
            if (d.isPresent !== !1) {
                o = d;
                break
            }
        }
        return o ? (this.promote(o),
        !0) : !1
    }
    promote(i, l) {
        const o = this.lead;
        if (i !== o && (this.prevLead = o,
        this.lead = i,
        i.show(),
        o)) {
            o.instance && o.scheduleRender(),
            i.scheduleRender(),
            i.resumeFrom = o,
            l && (i.resumeFrom.preserveOpacity = !0),
            o.snapshot && (i.snapshot = o.snapshot,
            i.snapshot.latestValues = o.animationValues || o.latestValues),
            i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
            const {crossfade: u} = i.options;
            u === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(i => {
            const {options: l, resumingFrom: o} = i;
            l.onExitComplete && l.onExitComplete(),
            o && o.options.onExitComplete && o.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(i => {
            i.instance && i.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function z4(n, i, l) {
    let o = "";
    const u = n.x.translate / i.x
      , d = n.y.translate / i.y
      , h = l?.z || 0;
    if ((u || d || h) && (o = `translate3d(${u}px, ${d}px, ${h}px) `),
    (i.x !== 1 || i.y !== 1) && (o += `scale(${1 / i.x}, ${1 / i.y}) `),
    l) {
        const {transformPerspective: g, rotate: b, rotateX: x, rotateY: A, skewX: E, skewY: H} = l;
        g && (o = `perspective(${g}px) ${o}`),
        b && (o += `rotate(${b}deg) `),
        x && (o += `rotateX(${x}deg) `),
        A && (o += `rotateY(${A}deg) `),
        E && (o += `skewX(${E}deg) `),
        H && (o += `skewY(${H}deg) `)
    }
    const p = n.x.scale * i.x
      , m = n.y.scale * i.y;
    return (p !== 1 || m !== 1) && (o += `scale(${p}, ${m})`),
    o || "none"
}
const oc = ["", "X", "Y", "Z"]
  , O4 = 1e3;
let P4 = 0;
function sc(n, i, l, o) {
    const {latestValues: u} = i;
    u[n] && (l[n] = u[n],
    i.setStaticValue(n, 0),
    o && (o[n] = 0))
}
function My(n) {
    if (n.hasCheckedOptimisedAppear = !0,
    n.root === n)
        return;
    const {visualElement: i} = n.options;
    if (!i)
        return;
    const l = my(i);
    if (window.MotionHasOptimisedAnimation(l, "transform")) {
        const {layout: u, layoutId: d} = n.options;
        window.MotionCancelOptimisedAnimation(l, "transform", Ne, !(u || d))
    }
    const {parent: o} = n;
    o && !o.hasCheckedOptimisedAppear && My(o)
}
function Ry({attachResizeListener: n, defaultParent: i, measureScroll: l, checkIsScrollRoot: o, resetTransform: u}) {
    return class {
        constructor(h={}, p=i?.()) {
            this.id = P4++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(V4),
                this.nodes.forEach(G4),
                this.nodes.forEach(k4),
                this.nodes.forEach(_4)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = h,
            this.root = p ? p.root || p : this,
            this.path = p ? [...p.path, p] : [],
            this.parent = p,
            this.depth = p ? p.depth + 1 : 0;
            for (let m = 0; m < this.path.length; m++)
                this.path[m].shouldResetTransform = !0;
            this.root === this && (this.nodes = new T4)
        }
        addEventListener(h, p) {
            return this.eventHandlers.has(h) || this.eventHandlers.set(h, new kc),
            this.eventHandlers.get(h).add(p)
        }
        notifyListeners(h, ...p) {
            const m = this.eventHandlers.get(h);
            m && m.notify(...p)
        }
        hasListeners(h) {
            return this.eventHandlers.has(h)
        }
        mount(h) {
            if (this.instance)
                return;
            this.isSVG = Gp(h) && !HS(h),
            this.instance = h;
            const {layoutId: p, layout: m, visualElement: g} = this.options;
            if (g && !g.current && g.mount(h),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
            n) {
                let b, x = 0;
                const A = () => this.root.updateBlockedByResize = !1;
                Ne.read( () => {
                    x = window.innerWidth
                }
                ),
                n(h, () => {
                    const E = window.innerWidth;
                    E !== x && (x = E,
                    this.root.updateBlockedByResize = !0,
                    b && b(),
                    b = C4(A, 250),
                    ho.hasAnimatedSinceResize && (ho.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Mg)))
                }
                )
            }
            p && this.root.registerSharedNode(p, this),
            this.options.animate !== !1 && g && (p || m) && this.addEventListener("didUpdate", ({delta: b, hasLayoutChanged: x, hasRelativeLayoutChanged: A, layout: E}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const H = this.options.transition || g.getDefaultTransition() || K4
                  , {onLayoutAnimationStart: F, onLayoutAnimationComplete: P} = g.getProps()
                  , L = !this.targetLayout || !wy(this.targetLayout, E)
                  , Z = !x && A;
                if (this.options.layoutRoot || this.resumeFrom || Z || x && (L || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const V = {
                        ...lf(H, "layout"),
                        onPlay: F,
                        onComplete: P
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (V.delay = 0,
                    V.type = !1),
                    this.startAnimation(V),
                    this.setAnimationOrigin(b, Z)
                } else
                    x || Mg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = E
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const h = this.getStack();
            h && h.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Jn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(X4),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: h} = this.options;
            return h && h.getProps().transformTemplate
        }
        willUpdate(h=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && My(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let b = 0; b < this.path.length; b++) {
                const x = this.path[b];
                x.shouldResetTransform = !0,
                x.updateScroll("snapshot"),
                x.options.layoutRoot && x.willUpdate(!1)
            }
            const {layoutId: p, layout: m} = this.options;
            if (p === void 0 && !m)
                return;
            const g = this.getTransformTemplate();
            this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            h && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Ng);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(wg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(Z4),
            this.nodes.forEach(F4),
            this.nodes.forEach(U4)) : this.nodes.forEach(wg),
            this.clearAllSnapshots();
            const p = ft.now();
            $e.delta = vn(0, 1e3 / 60, p - $e.timestamp),
            $e.timestamp = p,
            $e.isProcessing = !0,
            Iu.update.process($e),
            Iu.preRender.process($e),
            Iu.render.process($e),
            $e.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            sf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(W4),
            this.sharedNodes.forEach(J4)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ne.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ne.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !rt(this.snapshot.measuredBox.x) && !rt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let m = 0; m < this.path.length; m++)
                    this.path[m].updateScroll();
            const h = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ze(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: p} = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0)
        }
        updateScroll(h="measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (p = !1),
            p && this.instance) {
                const m = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: h,
                    isRoot: m,
                    offset: l(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : m
                }
            }
        }
        resetTransform() {
            if (!u)
                return;
            const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , p = this.projectionDelta && !Ny(this.projectionDelta)
              , m = this.getTransformTemplate()
              , g = m ? m(this.latestValues, "") : void 0
              , b = g !== this.prevTransformTemplateValue;
            h && this.instance && (p || ya(this.latestValues) || b) && (u(this.instance, g),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(h=!0) {
            const p = this.measurePageBox();
            let m = this.removeElementScroll(p);
            return h && (m = this.removeTransform(m)),
            Q4(m),
            {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: m,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: h} = this.options;
            if (!h)
                return ze();
            const p = h.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some($4))) {
                const {scroll: g} = this.root;
                g && (ui(p.x, g.offset.x),
                ui(p.y, g.offset.y))
            }
            return p
        }
        removeElementScroll(h) {
            const p = ze();
            if (Et(p, h),
            this.scroll?.wasRoot)
                return p;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m]
                  , {scroll: b, options: x} = g;
                g !== this.root && b && x.layoutScroll && (b.wasRoot && Et(p, h),
                ui(p.x, b.offset.x),
                ui(p.y, b.offset.y))
            }
            return p
        }
        applyTransform(h, p=!1) {
            const m = ze();
            Et(m, h);
            for (let g = 0; g < this.path.length; g++) {
                const b = this.path[g];
                !p && b.options.layoutScroll && b.scroll && b !== b.root && ci(m, {
                    x: -b.scroll.offset.x,
                    y: -b.scroll.offset.y
                }),
                ya(b.latestValues) && ci(m, b.latestValues)
            }
            return ya(this.latestValues) && ci(m, this.latestValues),
            m
        }
        removeTransform(h) {
            const p = ze();
            Et(p, h);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                if (!g.instance || !ya(g.latestValues))
                    continue;
                Cc(g.latestValues) && g.updateSnapshot();
                const b = ze()
                  , x = g.measurePageBox();
                Et(b, x),
                Sg(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, b)
            }
            return ya(this.latestValues) && Sg(p, this.latestValues),
            p
        }
        setTargetDelta(h) {
            this.targetDelta = h,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(h) {
            this.options = {
                ...this.options,
                ...h,
                crossfade: h.crossfade !== void 0 ? h.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== $e.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(h=!1) {
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== p;
            if (!(h || m && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: b, layoutId: x} = this.options;
            if (!(!this.layout || !(b || x))) {
                if (this.resolvedRelativeTargetAt = $e.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const A = this.getClosestProjectingParent();
                    A && A.layout && this.animationProgress !== 1 ? (this.relativeParent = A,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ze(),
                    this.relativeTargetOrigin = ze(),
                    Cr(this.relativeTargetOrigin, this.layout.layoutBox, A.layout.layoutBox),
                    Et(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ze(),
                this.targetWithTransforms = ze()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                r4(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Et(this.target, this.layout.layoutBox),
                sy(this.target, this.targetDelta)) : Et(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const A = this.getClosestProjectingParent();
                    A && !!A.resumingFrom == !!this.resumingFrom && !A.options.layoutScroll && A.target && this.animationProgress !== 1 ? (this.relativeParent = A,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ze(),
                    this.relativeTargetOrigin = ze(),
                    Cr(this.relativeTargetOrigin, this.target, A.target),
                    Et(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Cc(this.parent.latestValues) || oy(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            const h = this.getLead()
              , p = !!this.resumingFrom || this !== h;
            let m = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1),
            p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === $e.timestamp && (m = !1),
            m)
                return;
            const {layout: g, layoutId: b} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || b))
                return;
            Et(this.layoutCorrected, this.layout.layoutBox);
            const x = this.treeScale.x
              , A = this.treeScale.y;
            yA(this.layoutCorrected, this.treeScale, this.path, p),
            h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox,
            h.targetWithTransforms = ze());
            const {target: E} = h;
            if (!E) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (bg(this.prevProjectionDelta.x, this.projectionDelta.x),
            bg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Tr(this.projectionDelta, this.layoutCorrected, E, this.latestValues),
            (this.treeScale.x !== x || this.treeScale.y !== A || !Cg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Cg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", E))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(h=!0) {
            if (this.options.visualElement?.scheduleRender(),
            h) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = fi(),
            this.projectionDelta = fi(),
            this.projectionDeltaWithTransform = fi()
        }
        setAnimationOrigin(h, p=!1) {
            const m = this.snapshot
              , g = m ? m.latestValues : {}
              , b = {
                ...this.latestValues
            }
              , x = fi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !p;
            const A = ze()
              , E = m ? m.source : void 0
              , H = this.layout ? this.layout.source : void 0
              , F = E !== H
              , P = this.getStack()
              , L = !P || P.members.length <= 1
              , Z = !!(F && !L && this.options.crossfade === !0 && !this.path.some(I4));
            this.animationProgress = 0;
            let V;
            this.mixTargetDelta = q => {
                const _ = q / 1e3;
                Rg(x.x, h.x, _),
                Rg(x.y, h.y, _),
                this.setTargetDelta(x),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Cr(A, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                q4(this.relativeTarget, this.relativeTargetOrigin, A, _),
                V && Y4(this.relativeTarget, V) && (this.isProjectionDirty = !1),
                V || (V = ze()),
                Et(V, this.relativeTarget)),
                F && (this.animationValues = b,
                w4(b, g, this.latestValues, _, Z, L)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = _
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(h) {
            this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation && (Jn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ne.update( () => {
                ho.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = di(0)),
                this.currentAnimation = D4(this.motionValue, [0, 1e3], {
                    ...h,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: p => {
                        this.mixTargetDelta(p),
                        h.onUpdate && h.onUpdate(p)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        h.onComplete && h.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const h = this.getStack();
            h && h.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(O4),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const h = this.getLead();
            let {targetWithTransforms: p, target: m, layout: g, latestValues: b} = h;
            if (!(!p || !m || !g)) {
                if (this !== h && this.layout && g && Ey(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    m = this.target || ze();
                    const x = rt(this.layout.layoutBox.x);
                    m.x.min = h.target.x.min,
                    m.x.max = m.x.min + x;
                    const A = rt(this.layout.layoutBox.y);
                    m.y.min = h.target.y.min,
                    m.y.max = m.y.min + A
                }
                Et(p, m),
                ci(p, b),
                Tr(this.projectionDeltaWithTransform, this.layoutCorrected, p, b)
            }
        }
        registerSharedNode(h, p) {
            this.sharedNodes.has(h) || this.sharedNodes.set(h, new B4),
            this.sharedNodes.get(h).add(p);
            const g = p.options.initialPromotionConfig;
            p.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(p) : void 0
            })
        }
        isLead() {
            const h = this.getStack();
            return h ? h.lead === this : !0
        }
        getLead() {
            const {layoutId: h} = this.options;
            return h ? this.getStack()?.lead || this : this
        }
        getPrevLead() {
            const {layoutId: h} = this.options;
            return h ? this.getStack()?.prevLead : void 0
        }
        getStack() {
            const {layoutId: h} = this.options;
            if (h)
                return this.root.sharedNodes.get(h)
        }
        promote({needsReset: h, transition: p, preserveFollowOpacity: m}={}) {
            const g = this.getStack();
            g && g.promote(this, m),
            h && (this.projectionDelta = void 0,
            this.needsReset = !0),
            p && this.setOptions({
                transition: p
            })
        }
        relegate() {
            const h = this.getStack();
            return h ? h.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: h} = this.options;
            if (!h)
                return;
            let p = !1;
            const {latestValues: m} = h;
            if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (p = !0),
            !p)
                return;
            const g = {};
            m.z && sc("z", h, g, this.animationValues);
            for (let b = 0; b < oc.length; b++)
                sc(`rotate${oc[b]}`, h, g, this.animationValues),
                sc(`skew${oc[b]}`, h, g, this.animationValues);
            h.render();
            for (const b in g)
                h.setStaticValue(b, g[b]),
                this.animationValues && (this.animationValues[b] = g[b]);
            h.scheduleRender()
        }
        applyProjectionStyles(h, p) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                h.visibility = "hidden";
                return
            }
            const m = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                h.visibility = "",
                h.opacity = "",
                h.pointerEvents = fo(p?.pointerEvents) || "",
                h.transform = m ? m(this.latestValues, "") : "none";
                return
            }
            const g = this.getLead();
            if (!this.projectionDelta || !this.layout || !g.target) {
                this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                h.pointerEvents = fo(p?.pointerEvents) || ""),
                this.hasProjected && !ya(this.latestValues) && (h.transform = m ? m({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            h.visibility = "";
            const b = g.animationValues || g.latestValues;
            this.applyTransformsToTarget();
            let x = z4(this.projectionDeltaWithTransform, this.treeScale, b);
            m && (x = m(b, x)),
            h.transform = x;
            const {x: A, y: E} = this.projectionDelta;
            h.transformOrigin = `${A.origin * 100}% ${E.origin * 100}% 0`,
            g.animationValues ? h.opacity = g === this ? b.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : b.opacityExit : h.opacity = g === this ? b.opacity !== void 0 ? b.opacity : "" : b.opacityExit !== void 0 ? b.opacityExit : 0;
            for (const H in Lr) {
                if (b[H] === void 0)
                    continue;
                const {correct: F, applyTo: P, isCSSVariable: L} = Lr[H]
                  , Z = x === "none" ? b[H] : F(b[H], g);
                if (P) {
                    const V = P.length;
                    for (let q = 0; q < V; q++)
                        h[P[q]] = Z
                } else
                    L ? this.options.visualElement.renderState.vars[H] = Z : h[H] = Z
            }
            this.options.layoutId && (h.pointerEvents = g === this ? fo(p?.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(h => h.currentAnimation?.stop()),
            this.root.nodes.forEach(Ng),
            this.root.sharedNodes.clear()
        }
    }
}
function F4(n) {
    n.updateLayout()
}
function U4(n) {
    const i = n.resumeFrom?.snapshot || n.snapshot;
    if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
        const {layoutBox: l, measuredBox: o} = n.layout
          , {animationType: u} = n.options
          , d = i.source !== n.layout.source;
        u === "size" ? Lt(b => {
            const x = d ? i.measuredBox[b] : i.layoutBox[b]
              , A = rt(x);
            x.min = l[b].min,
            x.max = x.min + A
        }
        ) : Ey(u, i.layoutBox, l) && Lt(b => {
            const x = d ? i.measuredBox[b] : i.layoutBox[b]
              , A = rt(l[b]);
            x.max = x.min + A,
            n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
            n.relativeTarget[b].max = n.relativeTarget[b].min + A)
        }
        );
        const h = fi();
        Tr(h, l, i.layoutBox);
        const p = fi();
        d ? Tr(p, n.applyTransform(o, !0), i.measuredBox) : Tr(p, l, i.layoutBox);
        const m = !Ny(h);
        let g = !1;
        if (!n.resumeFrom) {
            const b = n.getClosestProjectingParent();
            if (b && !b.resumeFrom) {
                const {snapshot: x, layout: A} = b;
                if (x && A) {
                    const E = ze();
                    Cr(E, i.layoutBox, x.layoutBox);
                    const H = ze();
                    Cr(H, l, A.layoutBox),
                    wy(E, H) || (g = !0),
                    b.options.layoutRoot && (n.relativeTarget = H,
                    n.relativeTargetOrigin = E,
                    n.relativeParent = b)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: l,
            snapshot: i,
            delta: p,
            layoutDelta: h,
            hasLayoutChanged: m,
            hasRelativeLayoutChanged: g
        })
    } else if (n.isLead()) {
        const {onExitComplete: l} = n.options;
        l && l()
    }
    n.options.transition = void 0
}
function V4(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function _4(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function W4(n) {
    n.clearSnapshot()
}
function Ng(n) {
    n.clearMeasurements()
}
function wg(n) {
    n.isLayoutDirty = !1
}
function Z4(n) {
    const {visualElement: i} = n.options;
    i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform()
}
function Mg(n) {
    n.finishAnimation(),
    n.targetDelta = n.relativeTarget = n.target = void 0,
    n.isProjectionDirty = !0
}
function G4(n) {
    n.resolveTargetDelta()
}
function k4(n) {
    n.calcProjection()
}
function X4(n) {
    n.resetSkewAndRotation()
}
function J4(n) {
    n.removeLeadSnapshot()
}
function Rg(n, i, l) {
    n.translate = Me(i.translate, 0, l),
    n.scale = Me(i.scale, 1, l),
    n.origin = i.origin,
    n.originPoint = i.originPoint
}
function Eg(n, i, l, o) {
    n.min = Me(i.min, l.min, o),
    n.max = Me(i.max, l.max, o)
}
function q4(n, i, l, o) {
    Eg(n.x, i.x, l.x, o),
    Eg(n.y, i.y, l.y, o)
}
function I4(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const K4 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Lg = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n)
  , Hg = Lg("applewebkit/") && !Lg("chrome/") ? Math.round : Ht;
function Yg(n) {
    n.min = Hg(n.min),
    n.max = Hg(n.max)
}
function Q4(n) {
    Yg(n.x),
    Yg(n.y)
}
function Ey(n, i, l) {
    return n === "position" || n === "preserve-aspect" && !i4(Tg(i), Tg(l), .2)
}
function $4(n) {
    return n !== n.root && n.scroll?.wasRoot
}
const eD = Ry({
    attachResizeListener: (n, i) => Hr(n, "resize", i),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , uc = {
    current: void 0
}
  , Ly = Ry({
    measureScroll: n => ({
        x: n.scrollLeft,
        y: n.scrollTop
    }),
    defaultParent: () => {
        if (!uc.current) {
            const n = new eD({});
            n.mount(window),
            n.setOptions({
                layoutScroll: !0
            }),
            uc.current = n
        }
        return uc.current
    }
    ,
    resetTransform: (n, i) => {
        n.style.transform = i !== void 0 ? i : "none"
    }
    ,
    checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
})
  , tD = {
    pan: {
        Feature: v4
    },
    drag: {
        Feature: b4,
        ProjectionNode: Ly,
        MeasureLayout: jy
    }
};
function Bg(n, i, l) {
    const {props: o} = n;
    n.animationState && o.whileHover && n.animationState.setActive("whileHover", l === "Start");
    const u = "onHover" + l
      , d = o[u];
    d && Ne.postRender( () => d(i, Ur(i)))
}
class nD extends In {
    mount() {
        const {current: i} = this.node;
        i && (this.unmount = wS(i, (l, o) => (Bg(this.node, o, "Start"),
        u => Bg(this.node, u, "End"))))
    }
    unmount() {}
}
class aD extends In {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let i = !1;
        try {
            i = this.node.current.matches(":focus-visible")
        } catch {
            i = !0
        }
        !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Or(Hr(this.node.current, "focus", () => this.onFocus()), Hr(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function zg(n, i, l) {
    const {props: o} = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled)
        return;
    n.animationState && o.whileTap && n.animationState.setActive("whileTap", l === "Start");
    const u = "onTap" + (l === "End" ? "" : l)
      , d = o[u];
    d && Ne.postRender( () => d(i, Ur(i)))
}
class iD extends In {
    mount() {
        const {current: i} = this.node;
        i && (this.unmount = LS(i, (l, o) => (zg(this.node, o, "Start"),
        (u, {success: d}) => zg(this.node, u, d ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Hc = new WeakMap
  , cc = new WeakMap
  , rD = n => {
    const i = Hc.get(n.target);
    i && i(n)
}
  , lD = n => {
    n.forEach(rD)
}
;
function oD({root: n, ...i}) {
    const l = n || document;
    cc.has(l) || cc.set(l, {});
    const o = cc.get(l)
      , u = JSON.stringify(i);
    return o[u] || (o[u] = new IntersectionObserver(lD,{
        root: n,
        ...i
    })),
    o[u]
}
function sD(n, i, l) {
    const o = oD(i);
    return Hc.set(n, l),
    o.observe(n),
    () => {
        Hc.delete(n),
        o.unobserve(n)
    }
}
const uD = {
    some: 0,
    all: 1
};
class cD extends In {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: i={}} = this.node.getProps()
          , {root: l, margin: o, amount: u="some", once: d} = i
          , h = {
            root: l ? l.current : void 0,
            rootMargin: o,
            threshold: typeof u == "number" ? u : uD[u]
        }
          , p = m => {
            const {isIntersecting: g} = m;
            if (this.isInView === g || (this.isInView = g,
            d && !g && this.hasEnteredView))
                return;
            g && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", g);
            const {onViewportEnter: b, onViewportLeave: x} = this.node.getProps()
              , A = g ? b : x;
            A && A(m)
        }
        ;
        return sD(this.node.current, h, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: i, prevProps: l} = this.node;
        ["amount", "margin", "root"].some(fD(i, l)) && this.startObserver()
    }
    unmount() {}
}
function fD({viewport: n={}}, {viewport: i={}}={}) {
    return l => n[l] !== i[l]
}
const hD = {
    inView: {
        Feature: cD
    },
    tap: {
        Feature: iD
    },
    focus: {
        Feature: aD
    },
    hover: {
        Feature: nD
    }
}
  , dD = {
    layout: {
        ProjectionNode: Ly,
        MeasureLayout: jy
    }
}
  , mD = {
    ...QA,
    ...hD,
    ...tD,
    ...dD
}
  , qe = mA(mD, NA);
var Hy = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , Og = pn.createContext && pn.createContext(Hy)
  , gD = ["attr", "size", "title"];
function pD(n, i) {
    if (n == null)
        return {};
    var l = yD(n, i), o, u;
    if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(n);
        for (u = 0; u < d.length; u++)
            o = d[u],
            !(i.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(n, o) && (l[o] = n[o])
    }
    return l
}
function yD(n, i) {
    if (n == null)
        return {};
    var l = {};
    for (var o in n)
        if (Object.prototype.hasOwnProperty.call(n, o)) {
            if (i.indexOf(o) >= 0)
                continue;
            l[o] = n[o]
        }
    return l
}
function xo() {
    return xo = Object.assign ? Object.assign.bind() : function(n) {
        for (var i = 1; i < arguments.length; i++) {
            var l = arguments[i];
            for (var o in l)
                Object.prototype.hasOwnProperty.call(l, o) && (n[o] = l[o])
        }
        return n
    }
    ,
    xo.apply(this, arguments)
}
function Pg(n, i) {
    var l = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(n);
        i && (o = o.filter(function(u) {
            return Object.getOwnPropertyDescriptor(n, u).enumerable
        })),
        l.push.apply(l, o)
    }
    return l
}
function So(n) {
    for (var i = 1; i < arguments.length; i++) {
        var l = arguments[i] != null ? arguments[i] : {};
        i % 2 ? Pg(Object(l), !0).forEach(function(o) {
            bD(n, o, l[o])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : Pg(Object(l)).forEach(function(o) {
            Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(l, o))
        })
    }
    return n
}
function bD(n, i, l) {
    return i = vD(i),
    i in n ? Object.defineProperty(n, i, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[i] = l,
    n
}
function vD(n) {
    var i = xD(n, "string");
    return typeof i == "symbol" ? i : i + ""
}
function xD(n, i) {
    if (typeof n != "object" || !n)
        return n;
    var l = n[Symbol.toPrimitive];
    if (l !== void 0) {
        var o = l.call(n, i);
        if (typeof o != "object")
            return o;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (i === "string" ? String : Number)(n)
}
function Yy(n) {
    return n && n.map( (i, l) => pn.createElement(i.tag, So({
        key: l
    }, i.attr), Yy(i.child)))
}
function Kn(n) {
    return i => pn.createElement(SD, xo({
        attr: So({}, n.attr)
    }, i), Yy(n.child))
}
function SD(n) {
    var i = l => {
        var {attr: o, size: u, title: d} = n, h = pD(n, gD), p = u || l.size || "1em", m;
        return l.className && (m = l.className),
        n.className && (m = (m ? m + " " : "") + n.className),
        pn.createElement("svg", xo({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, l.attr, o, h, {
            className: m,
            style: So(So({
                color: n.color || l.color
            }, l.style), n.style),
            height: p,
            width: p,
            xmlns: "http://www.w3.org/2000/svg"
        }), d && pn.createElement("title", null, d), n.children)
    }
    ;
    return Og !== void 0 ? pn.createElement(Og.Consumer, null, l => i(l)) : i(Hy)
}
function AD(n) {
    return Kn({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M223.99908,224a32,32,0,1,0,32.00782,32A32.06431,32.06431,0,0,0,223.99908,224Zm214.172-96c-10.877-19.5-40.50979-50.75-116.27544-41.875C300.39168,34.875,267.63386,0,223.99908,0s-76.39066,34.875-97.89653,86.125C50.3369,77.375,20.706,108.5,9.82907,128-6.54984,157.375-5.17484,201.125,34.958,256-5.17484,310.875-6.54984,354.625,9.82907,384c29.13087,52.375,101.64652,43.625,116.27348,41.875C147.60842,477.125,180.36429,512,223.99908,512s76.3926-34.875,97.89652-86.125c14.62891,1.75,87.14456,10.5,116.27544-41.875C454.55,354.625,453.175,310.875,413.04017,256,453.175,201.125,454.55,157.375,438.171,128ZM63.33886,352c-4-7.25-.125-24.75,15.00391-48.25,6.87695,6.5,14.12891,12.875,21.88087,19.125,1.625,13.75,4,27.125,6.75,40.125C82.34472,363.875,67.09081,358.625,63.33886,352Zm36.88478-162.875c-7.752,6.25-15.00392,12.625-21.88087,19.125-15.12891-23.5-19.00392-41-15.00391-48.25,3.377-6.125,16.37891-11.5,37.88478-11.5,1.75,0,3.875.375,5.75.375C104.09864,162.25,101.84864,175.625,100.22364,189.125ZM223.99908,64c9.50195,0,22.25586,13.5,33.88282,37.25-11.252,3.75-22.50391,8-33.88282,12.875-11.377-4.875-22.62892-9.125-33.88283-12.875C201.74516,77.5,214.49712,64,223.99908,64Zm0,384c-9.502,0-22.25392-13.5-33.88283-37.25,11.25391-3.75,22.50587-8,33.88283-12.875C235.378,402.75,246.62994,407,257.8819,410.75,246.25494,434.5,233.501,448,223.99908,448Zm0-112a80,80,0,1,1,80-80A80.00023,80.00023,0,0,1,223.99908,336ZM384.6593,352c-3.625,6.625-19.00392,11.875-43.63479,11,2.752-13,5.127-26.375,6.752-40.125,7.75195-6.25,15.00391-12.625,21.87891-19.125C384.7843,327.25,388.6593,344.75,384.6593,352ZM369.65538,208.25c-6.875-6.5-14.127-12.875-21.87891-19.125-1.625-13.5-3.875-26.875-6.752-40.25,1.875,0,4.002-.375,5.752-.375,21.50391,0,34.50782,5.375,37.88283,11.5C388.6593,167.25,384.7843,184.75,369.65538,208.25Z"
            },
            child: []
        }]
    })(n)
}
function DD(n) {
    return Kn({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            },
            child: []
        }]
    })(n)
}
function jD(n) {
    return Kn({
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M.1 494.1c-1.1 9.5 6.3 17.8 15.9 17.8l32.3.1c8.1 0 14.9-5.9 16-13.9.7-4.9 1.8-11.1 3.4-18.1H380c1.6 6.9 2.9 13.2 3.5 18.1 1.1 8 7.9 14 16 13.9l32.3-.1c9.6 0 17.1-8.3 15.9-17.8-4.6-37.9-25.6-129-118.9-207.7-17.6 12.4-37.1 24.2-58.5 35.4 6.2 4.6 11.4 9.4 17 14.2H159.7c21.3-18.1 47-35.6 78.7-51.4C410.5 199.1 442.1 65.8 447.9 17.9 449 8.4 441.6.1 432 .1L399.6 0c-8.1 0-14.9 5.9-16 13.9-.7 4.9-1.8 11.1-3.4 18.1H67.8c-1.6-7-2.7-13.1-3.4-18.1-1.1-8-7.9-14-16-13.9L16.1.1C6.5.1-1 8.4.1 17.9 5.3 60.8 31.4 171.8 160 256 31.5 340.2 5.3 451.2.1 494.1zM224 219.6c-25.1-13.7-46.4-28.4-64.3-43.6h128.5c-17.8 15.2-39.1 30-64.2 43.6zM355.1 96c-5.8 10.4-12.8 21.1-21 32H114c-8.3-10.9-15.3-21.6-21-32h262.1zM92.9 416c5.8-10.4 12.8-21.1 21-32h219.4c8.3 10.9 15.4 21.6 21.2 32H92.9z"
            },
            child: []
        }]
    })(n)
}
function TD(n) {
    return Kn({
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
            },
            child: []
        }]
    })(n)
}
function CD(n) {
    return Kn({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32zm304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.88-86.12-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48 0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48zm-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z"
            },
            child: []
        }]
    })(n)
}
function ND(n) {
    return Kn({
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"
            },
            child: []
        }]
    })(n)
}
function wD(n) {
    return Kn({
        attr: {
            viewBox: "0 0 352 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            },
            child: []
        }]
    })(n)
}
function MD(n) {
    return Kn({
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"
            },
            child: []
        }]
    })(n)
}
const RD = () => {
    const n = Kt()
      , [i,l] = w.useState(!1)
      , o = [{
        path: "/research",
        label: "Research"
    }, {
        label: "People",
        dropdown: [{
            path: "/team/pi-yan",
            label: "PI Yan"
        }, {
            path: "/team/our-team",
            label: "Our Team"
        }]
    }, {
        path: "/news",
        label: "News"
    }, {
        path: "/publications",
        label: "Publications"
    }, {
        path: "/resources",
        label: "Resources"
    }, {
        path: "/contact",
        label: "Contact"
    }];
    return c.jsxs("nav", {
        style: {
            background: "#8C1D40",
            borderBottom: "none",
            padding: "0.85rem 0",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1e3
        },
        children: [c.jsxs("div", {
            style: {
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            },
            children: [c.jsx(gn, {
                to: "/",
                style: {
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem"
                },
                children: c.jsx("div", {
                    children: c.jsx("div", {
                        style: {
                            fontSize: "1.9305rem",
                            fontWeight: "800",
                            color: "#fff",
                            letterSpacing: "-0.01em"
                        },
                        children: "Yan Lab"
                    })
                })
            }), c.jsx("div", {
                style: {
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                    position: "relative"
                },
                className: "desktop-nav",
                children: o.map( (u, d) => u.dropdown ? c.jsxs("div", {
                    className: "nav-dropdown",
                    style: {
                        position: "relative"
                    },
                    children: [c.jsx("span", {
                        style: {
                            color: "#fff",
                            fontWeight: "500",
                            fontSize: "1.2227rem",
                            cursor: "pointer",
                            padding: "0.5rem 0",
                            fontFamily: "Inter, Arial, sans-serif",
                            borderBottom: "none"
                        },
                        tabIndex: 0,
                        children: u.label
                    }), c.jsx("div", {
                        className: "dropdown-content",
                        style: {
                            display: "none",
                            position: "absolute",
                            top: "2.2rem",
                            left: 0,
                            background: "#8D1C3F",
                            borderRadius: 0,
                            boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                            minWidth: "160px",
                            width: "180px",
                            zIndex: 1e3,
                            padding: "0.15rem 0"
                        },
                        children: u.dropdown.map(h => c.jsx(gn, {
                            to: h.path,
                            style: {
                                display: "block",
                                color: "#fff",
                                textDecoration: "none",
                                padding: "0.45rem 1.1rem",
                                fontWeight: n.pathname === h.path ? "700" : "500",
                                background: "transparent",
                                border: "none",
                                fontSize: "1.08rem",
                                fontFamily: "Inter, Arial, sans-serif",
                                transition: "all 0.18s",
                                textAlign: "left",
                                marginBottom: 0,
                                boxSizing: "border-box",
                                outline: "none"
                            },
                            onMouseOver: p => p.currentTarget.style.textDecoration = "none",
                            onMouseOut: p => p.currentTarget.style.textDecoration = "none",
                            children: h.label
                        }, h.path))
                    }), c.jsx("style", {
                        children: `
                  .nav-dropdown:hover .dropdown-content, .nav-dropdown:focus-within .dropdown-content {
                    display: block !important;
                  }
                  .dropdown-content a:hover, .dropdown-content a:focus {
                    color: #8C1D40 !important;
                    text-decoration: none !important;
                    background: #F7C800 !important;
                  }
                `
                    })]
                }, u.label) : c.jsxs("div", {
                    style: {
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%"
                    },
                    children: [c.jsx(gn, {
                        to: u.path,
                        style: {
                            textDecoration: "none",
                            color: "#fff",
                            fontWeight: n.pathname === u.path ? "600" : "500",
                            fontSize: "1.2227rem",
                            transition: "color 0.2s ease",
                            padding: "0.5rem 0",
                            fontFamily: "Arial, sans-serif",
                            position: "relative",
                            zIndex: 2
                        },
                        children: u.label
                    }), n.pathname === u.path && c.jsx("div", {
                        style: {
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            bottom: "-1px",
                            width: 120,
                            height: 10,
                            background: "#FFC627",
                            borderRadius: 0,
                            zIndex: 3
                        }
                    })]
                }, u.path))
            }), c.jsx("button", {
                onClick: () => l(!i),
                style: {
                    display: "none",
                    background: "none",
                    border: "none",
                    fontSize: "1.2375rem",
                    color: "#fff",
                    cursor: "pointer"
                },
                className: "mobile-menu-btn",
                children: i ? c.jsx(wD, {}) : c.jsx(DD, {})
            })]
        }), i && c.jsx(qe.div, {
            initial: {
                opacity: 0,
                y: -10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            style: {
                background: "#8C1D40",
                borderTop: "1px solid #fff",
                padding: "1rem 0"
            },
            className: "mobile-nav",
            children: c.jsx("div", {
                style: {
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 2rem"
                },
                children: o.map(u => u.dropdown ? c.jsxs("div", {
                    style: {
                        marginBottom: "0.5rem"
                    },
                    children: [c.jsx("div", {
                        style: {
                            color: "#fff !important",
                            fontWeight: "600",
                            fontSize: "1.2rem",
                            marginBottom: "0.25rem",
                            fontFamily: "Inter, Arial, sans-serif"
                        },
                        children: u.label
                    }), u.dropdown.map(d => c.jsx(gn, {
                        to: d.path,
                        onClick: () => l(!1),
                        style: {
                            display: "block !important",
                            textDecoration: "none !important",
                            color: "#fff !important",
                            fontWeight: n.pathname === d.path ? "600" : "500",
                            padding: "0.75rem 1.5rem",
                            borderBottom: "1px solid rgba(255,255,255,0.3)",
                            fontSize: "1.1rem",
                            fontFamily: "Inter, Arial, sans-serif",
                            background: n.pathname === d.path ? "#FFC627" : "transparent",
                            borderRadius: "0.3rem",
                            marginBottom: "0.2rem",
                            minHeight: "40px",
                            lineHeight: "1.4"
                        },
                        children: d.label
                    }, d.path))]
                }, u.label) : c.jsx(gn, {
                    to: u.path,
                    onClick: () => l(!1),
                    style: {
                        display: "block !important",
                        textDecoration: "none !important",
                        color: "#fff !important",
                        fontWeight: n.pathname === u.path ? "600" : "500",
                        padding: "0.9rem 0",
                        borderBottom: "1px solid rgba(255,255,255,0.3)",
                        fontSize: "1.1rem",
                        fontFamily: "Inter, Arial, sans-serif",
                        background: n.pathname === u.path ? "#FFC627" : "transparent",
                        minHeight: "40px",
                        lineHeight: "1.4"
                    },
                    children: u.label
                }, u.path))
            })
        }), c.jsx("style", {
            children: `
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: block !important;
            background: #8C1D40 !important;
          }
          .mobile-nav a {
            color: #fff !important;
            font-size: 1.1rem !important;
            font-weight: 500 !important;
            padding: 0.9rem 0 !important;
            display: block !important;
            text-decoration: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.3) !important;
            font-family: 'Inter', Arial, sans-serif !important;
          }
          .mobile-nav a:hover {
            background: rgba(255,255,255,0.1) !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
        }
      `
        })]
    })
}
  , ED = () => {
    const n = Kt();
    return w.useLayoutEffect( () => {
        if ("scrollRestoration"in window.history)
            try {
                window.history.scrollRestoration = "manual"
            } catch {}
    }
    , []),
    w.useLayoutEffect( () => {
        n.hash || window.scrollTo(0, 0)
    }
    , [n.pathname]),
    w.useEffect( () => {
        if (n.hash) {
            const i = n.hash.replace("#", "");
            requestAnimationFrame( () => {
                const l = document.getElementById(i);
                l && l.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
            )
        } else
            requestAnimationFrame( () => window.scrollTo(0, 0)),
            setTimeout( () => window.scrollTo(0, 0), 50)
    }
    , [n.pathname, n.hash]),
    null
}
  , LD = {
    "/": "Yan Lab",
    "/research": "Research - Yan Lab",
    "/team/pi-yan": "PI Yan - Yan Lab",
    "/team/our-team": "Our Team - Yan Lab",
    "/news": "News - Yan Lab",
    "/publications": "Publications - Yan Lab",
    "/resources": "Resources - Yan Lab",
    "/contact": "Contacts - Yan Lab"
}
  , HD = () => {
    const n = Kt();
    return w.useEffect( () => {
        const i = n.pathname.replace(/\/$/, "")
          , l = LD[i || "/"] || "Yan Lab";
        document.title !== l && (document.title = l)
    }
    , [n.pathname]),
    null
}
  , YD = () => c.jsxs("div", {
    style: {
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        background: "#fff"
    },
    children: [c.jsxs("div", {
        style: {
            display: "flex",
            width: "100%",
            height: "400px",
            marginBottom: 0,
            marginTop: "64px",
            overflow: "hidden"
        },
        children: [c.jsxs("div", {
            style: {
                flex: 1,
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: "6vw",
                color: "#22223b",
                height: "100%"
            },
            children: [c.jsx("div", {
                style: {
                    width: "220px",
                    height: "6px",
                    background: "#FFC627",
                    marginBottom: "2rem",
                    marginTop: "0",
                    borderRadius: 0,
                    opacity: .9
                }
            }), c.jsx("div", {
                style: {
                    fontSize: "2.2rem",
                    fontWeight: 400,
                    marginBottom: "1.2rem",
                    color: "#000",
                    fontFamily: "Georgia, serif",
                    lineHeight: 1.1
                },
                children: "The Yan Research Group"
            }), c.jsx("div", {
                style: {
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#444",
                    maxWidth: "90%",
                    marginBottom: "2rem",
                    fontFamily: "Inter, Arial, sans-serif",
                    lineHeight: 1.5
                },
                children: "Nucleic Acid Biodesign and Biologics Lab using Nature's Design Rules as Inspiration to Expand the Frontiers of Biomedicine, Material Science and Nanotechnology"
            })]
        }), c.jsx("div", {
            style: {
                flex: 1,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginRight: 0,
                height: "100%"
            },
            children: c.jsx("img", {
                src: "/cancer.jpg",
                alt: "Cancer",
                style: {
                    width: "110%",
                    height: "105%",
                    objectFit: "cover",
                    marginRight: "-5%",
                    transform: "translate(0, 4%)"
                }
            })
        })]
    }), c.jsxs("section", {
        style: {
            width: "100%",
            background: "#fff",
            padding: "3.5rem 0 6.5rem 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        children: [c.jsx("h2", {
            style: {
                textAlign: "center",
                fontFamily: "Georgia, serif",
                fontSize: "2rem",
                color: "#3a2d4d",
                marginBottom: "2.5rem",
                fontWeight: 400
            },
            children: "Featured Publications"
        }), c.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "3.5rem",
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto 2.5rem auto",
                flexWrap: "wrap"
            },
            children: [c.jsxs("div", {
                style: {
                    flex: 1,
                    minWidth: 260,
                    maxWidth: 400,
                    textAlign: "center",
                    color: "#888",
                    fontSize: "1.1rem",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 400
                },
                children: [c.jsx("div", {
                    style: {
                        marginBottom: "1.2rem",
                        fontSize: "1.1rem"
                    },
                    children: "“DNA Origami with Complex Curvatures in Three-Dimensional Space”"
                }), c.jsx("div", {
                    style: {
                        fontStyle: "italic",
                        color: "#888",
                        fontSize: "1.1rem",
                        marginBottom: "0.2rem"
                    },
                    children: "Science"
                }), c.jsx("div", {
                    style: {
                        color: "#888",
                        fontSize: "1.1rem"
                    },
                    children: "2011"
                })]
            }), c.jsxs("div", {
                style: {
                    flex: 1,
                    minWidth: 260,
                    maxWidth: 400,
                    textAlign: "center",
                    color: "#888",
                    fontSize: "1.1rem",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 400
                },
                children: [c.jsx("div", {
                    style: {
                        marginBottom: "1.2rem",
                        fontSize: "1.1rem"
                    },
                    children: "“Complex wireframe DNA origami nanostructures with multi-arm junction vertices”"
                }), c.jsx("div", {
                    style: {
                        fontStyle: "italic",
                        color: "#888",
                        fontSize: "1.1rem",
                        marginBottom: "0.2rem"
                    },
                    children: "Nature Nanotechnology"
                }), c.jsx("div", {
                    style: {
                        color: "#888",
                        fontSize: "1.1rem"
                    },
                    children: "2015"
                })]
            }), c.jsxs("div", {
                style: {
                    flex: 1,
                    minWidth: 260,
                    maxWidth: 400,
                    textAlign: "center",
                    color: "#888",
                    fontSize: "1.1rem",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 400
                },
                children: [c.jsx("div", {
                    style: {
                        marginBottom: "1.2rem",
                        fontSize: "1.1rem"
                    },
                    children: "“DNA-templated spatially controlled proteolysis targeting chimera for CyclinD1-CDK4/6 complex protein degradation”"
                }), c.jsx("div", {
                    style: {
                        fontStyle: "italic",
                        color: "#888",
                        fontSize: "1.1rem",
                        marginBottom: "0.2rem"
                    },
                    children: "JACS"
                }), c.jsx("div", {
                    style: {
                        color: "#888",
                        fontSize: "1.1rem"
                    },
                    children: "2025"
                })]
            })]
        }), c.jsx("div", {
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "2.5rem"
            },
            children: c.jsx("a", {
                href: "/publications",
                style: {
                    display: "inline",
                    textAlign: "center",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "1.58rem",
                    fontFamily: "Arial, sans-serif",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    background: "none",
                    padding: 0,
                    border: "none",
                    boxShadow: "none",
                    margin: 0
                },
                children: "See all publications"
            })
        }), c.jsxs("section", {
            style: {
                width: "100%",
                background: "#fff",
                padding: "3.5rem 0 0 0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "3.5rem",
                maxWidth: "1600px",
                margin: "0 auto 0 auto",
                boxSizing: "border-box"
            },
            children: [c.jsxs("div", {
                style: {
                    flex: 1,
                    minWidth: 320,
                    maxWidth: 700,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingLeft: "6vw"
                },
                children: [c.jsx("div", {
                    style: {
                        width: "fit-content",
                        minWidth: "120px",
                        height: "8px",
                        background: "#FFC627",
                        marginBottom: "2rem",
                        marginTop: "0",
                        borderRadius: 0,
                        opacity: .9,
                        paddingLeft: 0,
                        paddingRight: 0,
                        alignSelf: "flex-start"
                    },
                    children: c.jsx("span", {
                        style: {
                            display: "inline-block",
                            width: "100%",
                            minWidth: "220px",
                            maxWidth: "100%",
                            height: "8px"
                        }
                    })
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Georgia, serif",
                        fontSize: "2.2rem",
                        color: "#000",
                        fontWeight: 400,
                        marginBottom: "1.2rem",
                        lineHeight: 1.1
                    },
                    children: "Meet our People"
                }), c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.1rem",
                        color: "#444",
                        fontWeight: 400,
                        maxWidth: "90%",
                        marginBottom: "2rem",
                        lineHeight: 1.5
                    },
                    children: ["Learn more about our group members ", c.jsx("a", {
                        href: "http://localhost:5173/team/our-team",
                        style: {
                            color: "#6c3fc5",
                            textDecoration: "underline",
                            fontWeight: 500
                        },
                        children: "here"
                    }), "."]
                })]
            }), c.jsx("div", {
                style: {
                    flex: 1.2,
                    minWidth: 280,
                    maxWidth: 720,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    borderRadius: 0,
                    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.07)",
                    background: "#fff"
                },
                children: c.jsx("img", {
                    src: "/group.jpg",
                    alt: "Yan Lab Group",
                    style: {
                        width: "80%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: 0
                    }
                })
            })]
        })]
    }), c.jsx("footer", {
        style: {
            width: "100%",
            position: "static",
            left: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "1rem",
            letterSpacing: "0.02em",
            zIndex: 10,
            padding: 0
        },
        children: c.jsx("div", {
            style: {
                width: "100%",
                background: "#111",
                color: "#fff",
                padding: "0.5rem 0 0.3rem 0",
                fontFamily: "Inter, Arial, sans-serif",
                marginTop: 0
            },
            children: c.jsx("div", {
                style: {
                    maxWidth: "700px",
                    margin: "0 auto",
                    fontFamily: "Arial, sans-serif"
                },
                children: c.jsxs("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.08rem",
                        fontFamily: "Arial, sans-serif",
                        color: "#fff",
                        fontSize: "1.0189rem",
                        fontWeight: 400,
                        letterSpacing: "0.01em"
                    },
                    children: [c.jsx("span", {
                        style: {
                            fontSize: "1.0189rem"
                        },
                        children: "Biodesign Center for Molecular Design and Biomimetics"
                    }), c.jsx("span", {
                        style: {
                            fontSize: "1.0189rem"
                        },
                        children: "1001 S McAllister Ave, Tempe, Az, 85287"
                    }), c.jsx("span", {
                        style: {
                            fontSize: "1.0189rem"
                        },
                        children: "Phone: 480.727.8570 / Fax: 480.965.2747"
                    }), c.jsx("span", {
                        style: {
                            fontSize: "1.0189rem"
                        },
                        children: "Email: hao.yan@asu.edu"
                    }), c.jsxs("span", {
                        style: {
                            fontWeight: 500,
                            marginTop: "0.18rem",
                            fontSize: "1.0189rem"
                        },
                        children: ["Copyright ", c.jsx("span", {
                            style: {
                                fontSize: "1.2rem",
                                verticalAlign: "middle",
                                marginRight: "0.18rem"
                            },
                            children: "©"
                        }), " 2025 Hao Yan"]
                    }), c.jsx("span", {
                        style: {
                            fontWeight: 500,
                            fontSize: "1.0189rem"
                        },
                        children: "Created by Deeksha"
                    })]
                })
            })
        })
    })]
})
  , lo = ({image: n, title: i, description: l, reverse: o, imageStyle: u}) => c.jsxs("section", {
    className: `section-block${o ? " reverse" : ""}`,
    children: [c.jsx("div", {
        className: "section-block-image",
        children: c.jsx("img", {
            src: n,
            alt: i,
            style: u
        })
    }), c.jsxs("div", {
        className: "section-block-text",
        children: [c.jsx("h3", {
            style: {
                fontFamily: "Arial, sans-serif",
                fontSize: "1.76rem",
                fontWeight: 700,
                color: "#22223b",
                lineHeight: 1.1,
                marginBottom: "1.2rem"
            },
            children: i
        }), c.jsx("p", {
            children: l
        })]
    })]
})
  , BD = () => {
    const n = [{
        icon: jD,
        title: "Design",
        description: "Rational design and engineering of DNA nanostructures with precise structural control and programmable functionality. Our research focuses on creating sophisticated molecular architectures using computational modeling and experimental validation.",
        color: "#667eea",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        detailedDescription: "Our research team creates structures from DNA and RNA as targeted medicines for the treatment of cancer. To do this, we study and control the fundamental self-assembly properties of DNA, polymers and supramolecular materials."
    }, {
        icon: ND,
        title: "Assembly",
        description: "Investigating the fundamental principles of molecular self-assembly to create complex hierarchical structures. Our work focuses on understanding and controlling the assembly pathways of DNA nanostructures for precise architectural control.",
        color: "#10b981",
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        fontSize: "1.6rem"
    }, {
        icon: AD,
        title: "Functionalization",
        description: "Incorporating functional elements and responsive capabilities into DNA nanostructures for therapeutic and diagnostic applications. We develop smart materials that can respond to environmental stimuli.",
        color: "#f093fb",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        detailedDescription: "Using only a minimal set of DNA strands, we build unique 3D structures for applications such as drug delivery and the organization of other materials. This strategy allows us to make complex constructs that will be useful for translation to clinical applications."
    }, {
        icon: CD,
        title: "Interface",
        description: "Developing interfaces between DNA nanostructures and biological systems for enhanced biocompatibility and functionality. We explore how DNA can be used to modify and organize biological systems.",
        color: "#4facfe",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        detailedDescription: "In the Sleiman lab, we work towards combining DNA with many other materials, including organic molecules, polymers, metal ions, and inorganic nanomaterials, to explore how DNA can be used to modify and organize these moieties. We make sequence-defined polymers with DNA, and study their ability to act as cancer therapies."
    }];
    return c.jsx("main", {
        className: "research-main-container",
        style: {
            background: "#fff",
            fontFamily: "Inter, Arial, sans-serif",
            color: "#232946"
        },
        children: c.jsx("div", {
            className: "research-content-wrapper fade-in",
            style: {
                borderRadius: 0,
                background: "#fff",
                fontFamily: "Inter, Arial, sans-serif",
                color: "#232946"
            },
            children: c.jsxs("section", {
                className: "page-content",
                style: {
                    fontFamily: "Inter, Arial, sans-serif",
                    color: "#232946"
                },
                children: [c.jsx(qe.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    style: {
                        textAlign: "left"
                    }
                }), c.jsx(qe.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    children: c.jsx("p", {
                        style: {
                            fontSize: "1.05rem",
                            lineHeight: "1.5",
                            color: "#232946",
                            margin: 0,
                            textAlign: "justify",
                            width: "100%",
                            maxWidth: "none",
                            fontFamily: "Inter, Arial, sans-serif",
                            fontWeight: 400
                        },
                        children: "The Yan Lab focuses on the rational design and engineering of DNA nanostructures for applications in biotechnology, medicine, and materials science. We develop innovative approaches to create programmable molecular systems that can sense, compute, and respond to their environment. Our interdisciplinary research combines principles from chemistry, biology, physics, and engineering to push the boundaries of what's possible at the molecular scale."
                    })
                }), c.jsxs(qe.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .8,
                        delay: .4
                    },
                    style: {
                        textAlign: "center",
                        margin: "4rem 0 2.5rem 0"
                    },
                    children: [c.jsx("h2", {
                        style: {
                            fontSize: "2.2rem",
                            fontWeight: 700,
                            color: "#232323",
                            marginBottom: "1.2rem",
                            fontFamily: "Arial, sans-serif",
                            lineHeight: 1.1,
                            display: "inline-block",
                            background: "#FFC627",
                            padding: "0.132em 0.44em",
                            borderRadius: "2px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                        },
                        children: "Research Directions"
                    }), c.jsx("div", {
                        style: {
                            width: "100%",
                            height: "1px",
                            background: "transparent",
                            margin: "2rem auto 0 auto"
                        }
                    })]
                }), c.jsxs("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "1000px",
                        margin: "0 auto"
                    },
                    children: [c.jsx(lo, {
                        image: "/design.jpg",
                        title: n[0].title,
                        description: c.jsx("span", {
                            style: {
                                fontSize: "1.05rem",
                                color: "#232946",
                                lineHeight: "1.5",
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: "Our research focuses on designing programmable DNA nanostructures by encoding structural and functional instructions directly into DNA sequences, leveraging predictable base-pairing and versatile junctions to create precise, tunable architectures. From early demonstrations of DNA as a scaffold for ordered lattices and 3D crystals to engineering assemblies with atomic-level precision, we have shown how DNA can organize matter and host molecules for structural studies. We pioneered complex DNA and RNA origami, folding long strands into intricate 2D and 3D shapes for applications in dynamic devices and biomedical platforms, and collaborated with computer scientists to develop automated design tools that streamline the creation of reconfigurable nanostructures, programmable patterns, and molecular computing devices. Together, these efforts have built an integrated design ecosystemfrom simple DNA tiles to sophisticated crystalline latticesthat advances nanoscale control of matter and paves the way for future breakthroughs in nanotechnology, computation, and medicine."
                        })
                    }), c.jsx("div", {
                        style: {
                            width: "100%",
                            height: "1.5px",
                            background: "#e5e7eb",
                            margin: "2.5rem 0",
                            borderRadius: "1px"
                        }
                    }), c.jsx(lo, {
                        image: "/assembly.jpg",
                        title: n[1].title,
                        description: c.jsxs("span", {
                            style: {
                                fontSize: "1.05rem",
                                color: "#232946",
                                lineHeight: "1.5",
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: ["We investigate how nucleic acid nanostructures form, evolve, and organize themselves over space and time, uncovering the thermodynamic and kinetic principles that govern their self-assembly. By characterizing nucleation rates, growth dynamics, and energy landscapes using AFM imaging, kinetic modeling, and crystallographic analysis, we have shown how subtle sequence variations in DNA junctions influence lattice symmetry, crystal resolution, and hierarchical assembly pathways. These mechanistic insights inform the rational design of scalable, programmable DNA architectures capable of spatio-temporal control, algorithmic growth, and environmentally triggered responses, bridging molecular-level understanding with emergent material behavior to emulate the precision and sophistication of natural morphogenesis.", c.jsx("br", {}), c.jsx("br", {})]
                        }),
                        reverse: !0,
                        className: "assembly-publications"
                    }), c.jsx("div", {
                        style: {
                            width: "100%",
                            height: "1.5px",
                            background: "#e5e7eb",
                            margin: "2.5rem 0",
                            borderRadius: "1px"
                        }
                    }), c.jsx(lo, {
                        image: "/function.jpg",
                        title: n[2].title,
                        description: c.jsx("span", {
                            style: {
                                fontSize: "1.05rem",
                                color: "#232946",
                                lineHeight: "1.5",
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: "We explore DNA nanostructures as programmable scaffolds for organizing functional molecular and nanoscale components with nanometer precision. By directing the site-specific placement of inorganic nanoparticles, chromophores, enzymes, and biomolecules, our work has enabled the creation of multifunctional assemblies for sensing, actuation, signal processing, and energy transduction. Early studies established DNA-directed methods for templating gold nanoparticles, quantum dots, and other chemically conjugated materials to build hybrid nanostructures with applications in plasmonics, nanoelectronics, and catalysis. In parallel, we engineered light-harvesting and excitonic energy transfer systems inspired by photosynthetic complexes, positioning chromophores on DNA frameworks to study directional energy migration and tunable excitonic coupling for emerging quantum photonic devices. Additionally, we developed DNA-based multivalent ligand displays and enzyme cascades to probe spatial effects in biomolecular recognition and to enhance catalytic efficiency through substrate channeling. These integrated efforts demonstrate how DNA nanotechnology can bridge inorganic, photonic, and biological domains to create spatially precise hybrid systems with broad implications for synthetic biology, molecular computing, and advanced materials."
                        }),
                        imageStyle: {
                            maxWidth: 220,
                            width: "100%",
                            height: "auto",
                            minWidth: 160
                        },
                        textStyle: {
                            maxWidth: 600
                        }
                    }), c.jsx("div", {
                        style: {
                            width: "100%",
                            height: "1.5px",
                            background: "#e5e7eb",
                            margin: "2.5rem 0",
                            borderRadius: "1px"
                        }
                    }), c.jsx(lo, {
                        image: "/interface.jpg",
                        title: n[3].title,
                        description: c.jsxs("span", {
                            style: {
                                fontSize: "1.05rem",
                                color: "#232946",
                                lineHeight: "1.5",
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: ["Our research develops DNA and RNA nanostructures as programmable interfaces with both inorganic materials and biological systems. While early work focused on hybrid systems to study physical phenomena such as plasmonic coupling and chiral behavior, we see the greatest potential in integrating nucleic acid nanotechnology with living systems. By leveraging the programmability and biocompatibility of DNA and RNA, we design nanodevices that operate inside cells and synthetic environments with precision and autonomy. This includes therapeutic platforms such as DNA nanorobots for targeted drug delivery, RNA origami vaccines that stimulate robust immune responses, and nanostructures that enable direct cytoplasmic delivery of molecular payloads. Beyond medicine, we have engineered DNA-based protein transport channels and autonomous nanorobots for synthetic cells, creating systems that sense, respond, and perform functional tasks in biological contexts. Together, these efforts highlight how nucleic acid nanotechnology can serve as a powerful bridge between molecular design and living systems, advancing both synthetic biology and biomedical innovation.", c.jsx("br", {}), c.jsx("br", {})]
                        }),
                        reverse: !0
                    })]
                }), c.jsxs(qe.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: 1.6
                    },
                    style: {
                        textAlign: "center",
                        margin: "4rem 0"
                    },
                    children: [c.jsx("h2", {
                        style: {
                            fontSize: "2.2rem",
                            fontWeight: 700,
                            color: "#232323",
                            marginBottom: "1.2rem",
                            fontFamily: "Arial, sans-serif",
                            lineHeight: 1.1,
                            display: "inline-block",
                            background: "#FFC627",
                            padding: "0.132em 0.44em",
                            borderRadius: "2px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                        },
                        children: "Funding Agencies"
                    }), c.jsxs("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "2.5rem",
                            maxWidth: "900px",
                            margin: "0 auto",
                            alignItems: "center",
                            borderTop: "2px solid #e5e7eb",
                            borderBottom: "2px solid #e5e7eb",
                            padding: "2.5rem 0"
                        },
                        children: [c.jsxs("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                minHeight: "120px"
                            },
                            children: [c.jsx("img", {
                                src: "/nih.png",
                                alt: "National Institutes of Health",
                                style: {
                                    maxHeight: "80px",
                                    maxWidth: "100%"
                                }
                            }), c.jsx("div", {
                                style: {
                                    marginTop: "0.75rem",
                                    fontSize: "1.05rem",
                                    color: "#232946",
                                    fontWeight: 400,
                                    textAlign: "center",
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: "National Institutes of Health"
                            })]
                        }), c.jsxs("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                minHeight: "120px"
                            },
                            children: [c.jsx("img", {
                                src: "/nsf.png",
                                alt: "National Science Foundation",
                                style: {
                                    maxHeight: "80px",
                                    maxWidth: "100%"
                                }
                            }), c.jsx("div", {
                                style: {
                                    marginTop: "0.75rem",
                                    fontSize: "1.05rem",
                                    color: "#232946",
                                    fontWeight: 400,
                                    textAlign: "center",
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: "National Science Foundation"
                            })]
                        }), c.jsxs("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                minHeight: "120px"
                            },
                            children: [c.jsx("img", {
                                src: "/flinn.png",
                                alt: "Flinn Foundation",
                                style: {
                                    maxHeight: "80px",
                                    maxWidth: "100%"
                                }
                            }), c.jsx("div", {
                                style: {
                                    marginTop: "0.75rem",
                                    fontSize: "1.05rem",
                                    color: "#232946",
                                    fontWeight: 400,
                                    textAlign: "center",
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: "Flinn Foundation"
                            })]
                        })]
                    })]
                })]
            })
        })
    })
}
  , zD = () => c.jsx("main", {
    className: "people-main-container",
    style: {
        background: "#fff",
        marginTop: "1rem",
        minHeight: "60vh"
    },
    children: c.jsxs("div", {
        className: "people-content-wrapper fade-in",
        style: {
            borderRadius: 0,
            background: "#fff",
            textAlign: "center",
            padding: "3rem 1rem"
        },
        children: [c.jsx("h2", {
            style: {
                fontSize: "2rem",
                fontWeight: 700,
                color: "#232946",
                marginBottom: "2rem",
                letterSpacing: "-1px",
                fontFamily: "Inter, Arial, sans-serif"
            },
            children: "People"
        }), c.jsx("p", {
            style: {
                fontSize: "1.1rem",
                marginBottom: "2rem",
                color: "#475569"
            },
            children: "Please select a section below:"
        }), c.jsxs("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap"
            },
            children: [c.jsx(gn, {
                to: "/people/pi-yan",
                style: {
                    background: "#3b82f6",
                    color: "#fff",
                    padding: "1rem 2.5rem",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(59,130,246,0.08)"
                },
                children: "PI Yan"
            }), c.jsx(gn, {
                to: "/people/our-team",
                style: {
                    background: "#64748b",
                    color: "#fff",
                    padding: "1rem 2.5rem",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(100,116,139,0.08)"
                },
                children: "Our Team"
            })]
        })]
    })
})
  , OD = () => c.jsx("main", {
    className: "resources-main-container",
    style: {
        background: "#fff",
        fontFamily: "Inter, Arial, sans-serif",
        color: "#232946"
    },
    children: c.jsx("div", {
        className: "resources-content-wrapper fade-in",
        style: {
            borderRadius: 0,
            background: "#fff",
            fontFamily: "Inter, Arial, sans-serif",
            color: "#232946",
            paddingLeft: "2.5rem"
        },
        children: c.jsx("section", {
            className: "page-content",
            style: {
                fontFamily: "Inter, Arial, sans-serif",
                color: "#232946"
            },
            children: c.jsxs(qe.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: [c.jsx("h1", {
                    style: {
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "#232946",
                        marginBottom: "1.5rem",
                        letterSpacing: "-1px",
                        fontFamily: "Inter, Arial, sans-serif",
                        textAlign: "center"
                    },
                    children: "Prof. Hao Yan, Ph.D."
                }), c.jsxs("div", {
                    style: {
                        maxWidth: 1e3,
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "2.5rem",
                        flexWrap: "wrap"
                    },
                    children: [c.jsxs("div", {
                        style: {
                            flex: "0 0 auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        children: [c.jsx("img", {
                            src: "/hyan.jpg",
                            alt: "Dr. Hao Yan",
                            style: {
                                width: 320,
                                height: 480,
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius: 0,
                                boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                                marginBottom: "1.5rem"
                            }
                        }), c.jsx("a", {
                            href: "/haoyan.pdf",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "fit-content",
                                minWidth: 176,
                                padding: "0 2rem",
                                height: 56,
                                background: "#F7C800",
                                color: "#232323",
                                fontWeight: 700,
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontSize: "1.8rem",
                                letterSpacing: "0.01em",
                                borderRadius: 0,
                                marginTop: 19,
                                marginBottom: 0,
                                textDecoration: "none",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                                transition: "background 0.2s",
                                textAlign: "center",
                                cursor: "pointer"
                            },
                            children: "YAN CV"
                        })]
                    }), c.jsxs("div", {
                        style: {
                            flex: "1 1 0",
                            minWidth: 280,
                            maxWidth: 600,
                            fontFamily: "Inter, Arial, sans-serif",
                            color: "#232946",
                            fontSize: "1.08rem",
                            lineHeight: 1.7,
                            fontWeight: 400,
                            textAlign: "justify"
                        },
                        children: [c.jsx("p", {
                            style: {
                                marginBottom: "1.2rem",
                                textAlign: "justify",
                                fontSize: "1.1rem",
                                fontStyle: "normal",
                                color: "#888",
                                fontWeight: 400,
                                lineHeight: 1.7
                            },
                            children: c.jsxs("span", {
                                style: {
                                    fontWeight: 400
                                },
                                children: ["Dr. Hao Yan is the ", c.jsx("b", {
                                    children: "Regents Professor"
                                }), ", ", c.jsx("b", {
                                    children: "Milton D. Glick Distinguished Professor"
                                }), " and ", c.jsx("b", {
                                    children: "Director of the Biodesign Center for Molecular Design and Biomimetics"
                                }), " at Arizona State University, a world leader in molecular engineering, biomimetic chemistry, and nanotechnology innovation."]
                            })
                        }), c.jsx("p", {
                            style: {
                                marginBottom: "1.2rem",
                                textAlign: "justify"
                            },
                            children: "He is a renowned chemist and nanotechnology innovator, best known for his pioneering advances in structural DNA and RNA nanotechnology, DNA-programmed molecular machines, and programmable bio-inspired materials. Yan’s research group has developed interdisciplinary approaches to design self-assembling molecular building blocks, enabling major biomedical, energy, and technological breakthroughs. He received his B.S. from Shandong University (1993) and Ph.D. from New York University (2001), worked at Duke University as a Research Assistant Professor (2004) and joined ASU in 2004, where he became a full professor in 2008 with early tenure."
                        }), c.jsx("p", {
                            style: {
                                marginBottom: "1.2rem",
                                textAlign: "justify"
                            },
                            children: "Yan has authored over 240 high-impact research papers and holds numerous patents related to programmable molecular systems and bioengineering. As a leader and educator, he has mentored more than 70 graduate students and postdocs, among which over 30 now hold faculty and many hold senior industry positions worldwide. Yan is elected to multiple prestigious academies and has received the Feynman Prize, Humboldt Research Award, and Rozenberg Tulip Award, along with more than 20 major international honors. Currently, he serves as Associate Editor for Science Advances and ACS Applied Bio Materials. Yan continues to advance the frontiers of programmable materials and medicine, inspire the next generation, and translate discoveries into startup innovations and global research leadership."
                        })]
                    })]
                })]
            })
        })
    })
})
  , PD = () => {
    const i = [{
        name: "Dr. Hao Yan",
        title: "Principal Investigator",
        subtitle: "Milton D. Glick Distinguished Professor",
        department: "School of Molecular Sciences and School of Medicine",
        office: "BDA 124B",
        phone: "(480) 727-8570",
        email: "hao.yan@asu.edu",
        image: "hyan_3.jpg",
        awards: ["Foresight Institute Feynman Prize in Nanotechnology", "Rozenberg Tulip Award in DNA Computing", "Humboldt Research Award"],
        description: "Dr. Hao Yan is the Regents Professor and Milton D. Glick Distinguished Professor and Director of the Biodesign Center for Molecular Design and Biomimetics. He received his B.S. from Shandong University (1993) and Ph.D. from New York University (2001), worked at Duke University as a Research Assistant Professor (2004) and joined ASU in 2004, where he became a full professor in 2008 with early tenure."
    }, {
        name: "Chad R Simmons",
        title: "Academic Professional",
        email: "chad.simmons@asu.edu",
        focus: "Biomacromolecular Crystallographer",
        image: "chad.jpg"
    }, {
        name: "Dr. Yang Xu",
        title: "Assistant Research Professor",
        email: "yangxu3@asu.edu",
        focus: "Biomolecular Therapeutics and Diagnostics",
        image: "yangxu.jpg"
    }, {
        name: "Dr Kun Dai",
        title: "Assistant Research Scientist",
        email: "",
        focus: "Nucleic Acid Biologics",
        image: "kun.jpg"
    }]
      , l = [{
        name: "Deeksha Satyabola",
        level: "5th Year PhD Candidate",
        email: "ddeeksha@asu.edu",
        research: "DNA Photonic Systems",
        image: "deeksha.jpg"
    }, {
        name: "Abhay Prasad",
        level: "5th Year PhD Candidate",
        email: "aprasa36@asu.edu",
        research: "Chemical Biology and PROTACs",
        image: "abhay.jpg"
    }, {
        name: "Rong Zheng",
        level: "4th Year PhD Candidate",
        email: "rzheng22@asu.edu",
        research: "Molecular Biology and PROTACs",
        image: "rong.jpg"
    }, {
        name: "Lanshen Zhao",
        level: "4th Year PhD Candidate",
        email: "lzhao89@asu.edu",
        research: "Diaganostics and Cancer Therapy",
        image: "lanshen.jpg"
    }, {
        name: "Xinyi Tu",
        level: "4th Year PhD Candidate",
        email: "xinyitu@asu.edu",
        research: "RNA/DNA nanotechnology for Cancer Therapy",
        image: "xinyi.jpg"
    }, {
        name: "Thong Diep",
        level: "4th Year PhD Candidate",
        email: "tdiep2@asu.edu",
        research: "Finite size DNA lattice",
        image: "thong.jpg"
    }, {
        name: "Aleksandra Petrova",
        level: "3rd Year PhD Candidate",
        email: "aleksandra@asu.edu",
        research: "RNA Nanomedicine",
        image: "Aleksandra.jpg"
    }, {
        name: "Gengshi Wu",
        level: "3rd Year PhD Candidate",
        email: "gengshi@asu.edu",
        research: "RNA Nanotechnology Design and Assembly",
        image: "gengshi.jpg"
    }, {
        name: "Yichen Yan",
        level: "2nd Year PhD Candidate",
        email: "yichen@asu.edu",
        research: "Nucleic Acid Biology",
        image: "yichen.jpg"
    }, {
        name: "Xiang Gu",
        level: "1st Year PhD Candidate",
        email: "xianggu2@asu.edu",
        research: "DNA Nanotechnology",
        image: "Xiang.jpg"
    }, {
        name: "Lihui Wang",
        level: "1st Year PhD Candidate",
        email: "lwang411@asu.edu",
        research: "DNA Nanotechnology",
        image: "lihui.jpg"
    }]
      , o = [...i, ...l];
    return c.jsx("main", {
        className: "resources-main-container",
        style: {
            background: "#fff",
            fontFamily: "Inter, Arial, sans-serif",
            color: "#232946"
        },
        children: c.jsxs("div", {
            className: "resources-content-wrapper fade-in",
            style: {
                borderRadius: 0,
                background: "#fff",
                fontFamily: "Inter, Arial, sans-serif",
                color: "#232946"
            },
            children: [c.jsxs("section", {
                className: "page-content",
                style: {
                    fontFamily: "Inter, Arial, sans-serif",
                    color: "#232946"
                },
                children: [c.jsx(qe.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    children: c.jsx("h1", {
                        style: {
                            fontSize: "2.5rem",
                            fontWeight: 700,
                            color: "#232946",
                            marginBottom: "1.5rem",
                            letterSpacing: "-1px",
                            fontFamily: "Inter, Arial, sans-serif",
                            textAlign: "center"
                        },
                        children: "Current Team"
                    })
                }), c.jsx(qe.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    children: c.jsx("div", {
                        className: "grid-container",
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                            justifyItems: "center",
                            alignItems: "flex-start",
                            gap: "3.5rem",
                            maxWidth: "900px",
                            margin: "0 auto",
                            justifyContent: "center"
                        },
                        children: o.map( (u, d) => c.jsxs("div", {
                            className: "grid-item",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: "3.5rem"
                            },
                            children: [c.jsx("div", {
                                style: {
                                    width: "259px",
                                    height: "259px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    margin: "0 auto 0.5rem auto",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                                    display: "block"
                                },
                                children: c.jsx("img", {
                                    src: `/${u.image}`,
                                    alt: u.name,
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center top",
                                        display: "block",
                                        margin: "0 auto"
                                    }
                                })
                            }), c.jsx("h3", {
                                style: {
                                    fontSize: "1.2rem",
                                    fontWeight: "600",
                                    marginBottom: "0.125rem",
                                    textAlign: "center",
                                    color: "#232946",
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: u.name
                            }), u.name === "Dr. Hao Yan" ? c.jsxs(c.Fragment, {
                                children: [c.jsx("p", {
                                    style: {
                                        color: "#232946",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 400,
                                        lineHeight: 1.3,
                                        marginBottom: "0.125rem",
                                        textAlign: "center"
                                    },
                                    children: "Principal Investigator"
                                }), c.jsx("p", {
                                    style: {
                                        color: "#64748b",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 400,
                                        lineHeight: 1.3,
                                        marginBottom: "0.125rem",
                                        textAlign: "center"
                                    },
                                    children: "Biomolecular Designer and Programmer"
                                }), c.jsx("a", {
                                    href: `mailto:${u.email}`,
                                    style: {
                                        color: "#232946",
                                        textDecoration: "none",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 400,
                                        lineHeight: 1.3,
                                        display: "block",
                                        textAlign: "center",
                                        marginBottom: "0.125rem"
                                    },
                                    children: "Email"
                                })]
                            }) : u.focus ? c.jsxs(c.Fragment, {
                                children: [c.jsx("p", {
                                    style: {
                                        color: "#232946",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 400,
                                        lineHeight: 1.3,
                                        marginBottom: "0.125rem",
                                        textAlign: "center"
                                    },
                                    children: u.title
                                }), c.jsx("p", {
                                    style: {
                                        color: (u.name === "Kun Dai",
                                        "#64748b"),
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 400,
                                        lineHeight: 1.3,
                                        marginBottom: "0.25rem",
                                        textAlign: "center"
                                    },
                                    children: u.focus
                                }), c.jsx("a", {
                                    href: `mailto:${u.email}`,
                                    style: {
                                        color: "#232946",
                                        textDecoration: "none",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 400,
                                        lineHeight: 1.3,
                                        display: "block",
                                        textAlign: "center"
                                    },
                                    children: "Email"
                                })]
                            }) : c.jsxs(c.Fragment, {
                                children: [c.jsx("p", {
                                    style: {
                                        color: "#232946",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 400,
                                        lineHeight: 1.3,
                                        marginBottom: "0.125rem",
                                        textAlign: "center",
                                        fontStyle: "italic"
                                    },
                                    children: u.level
                                }), c.jsx("p", {
                                    style: {
                                        color: "#64748b",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 400,
                                        lineHeight: 1.3,
                                        marginBottom: "0.25rem",
                                        textAlign: "center"
                                    },
                                    children: u.research
                                }), c.jsx("a", {
                                    href: `mailto:${u.email}`,
                                    style: {
                                        color: "#232946",
                                        textDecoration: "none",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 400,
                                        lineHeight: 1.3,
                                        display: "block",
                                        textAlign: "center"
                                    },
                                    children: "Email"
                                })]
                            })]
                        }, d))
                    })
                })]
            }), c.jsxs("section", {
                className: "alumni-section",
                style: {
                    marginTop: "4rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%"
                },
                children: [c.jsx("h2", {
                    style: {
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "#232946",
                        marginBottom: "1.5rem",
                        letterSpacing: "-1px",
                        fontFamily: "Inter, Arial, sans-serif",
                        textAlign: "center",
                        width: "100%"
                    },
                    children: "GROUP ALUMNI"
                }), c.jsxs("div", {
                    style: {
                        margin: "2rem 0 0 0",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%"
                    },
                    children: [c.jsx("div", {
                        style: {
                            fontWeight: 600,
                            fontSize: "1.5rem",
                            color: "#232946",
                            marginBottom: "0.5rem",
                            textAlign: "center"
                        },
                        children: "Graduate Students"
                    }), c.jsxs("div", {
                        style: {
                            marginBottom: "2rem",
                            display: "inline-block",
                            textAlign: "left"
                        },
                        children: [c.jsx("b", {
                            children: "1. Lu Yu (Graduate student, Fall 2019)"
                        }), c.jsx("br", {}), "Postdoc, University of Washington", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "2. Liangxiao Chen (Graduate student, Fall 2019)"
                        }), c.jsx("br", {}), "Postdoc, Harvard University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "3. Leeza Abraham (Graduate student, Fall 2018)"
                        }), c.jsx("br", {}), "Senior Scientist, Exodigm Biosciences", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "4. Yue Tang (Graduate student, Fall 2018)"
                        }), c.jsx("br", {}), "Associate Professor, School of Medicine, Shandong University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "5. Hao Liu (Graduate student, Fall 2018)"
                        }), c.jsx("br", {}), "Postdoc, Biodesign Institute, Arizona State University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "6. Xu Zhou (Graduate student, Fall 2016)"
                        }), c.jsx("br", {}), "Associate Professor, College of Chemistry, Nanjing University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "7. Raghu Narayanan (Graduate student, Fall 2015)"
                        }), c.jsx("br", {}), "Postdoc, University of California, San Francisco", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "8. Swarup Dey (Graduate student, Fall 2015)"
                        }), c.jsx("br", {}), "Principal Scientist, Regeneron", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "9. Fan Hong (Graduate student, Fall 2014)"
                        }), c.jsx("br", {}), "Assistant Professor, Department of Chemistry, University of Florida", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "10. Yu Zhou (Graduate student, Fall 2013)"
                        }), c.jsx("br", {}), "Postdoc ASO, Center for NeuroGenetics, University of Florida", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "11. Angela Edwards (Graduate student, Fall 2012)"
                        }), c.jsx("br", {}), "Senior Biologist II, Power Engineers", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "12. Saswata Banerjee (Graduate student, Fall 2012)"
                        }), c.jsx("br", {}), "Senior Content Specialist, Aurigene Pharmaceutical Services Limited", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "13. Yuhe Yang (Graduate student, Fall 2011)"
                        }), c.jsx("br", {}), "Professor, National Center for Nanoscience and Nanotechnology, China", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "14. Shuoxing Jiang (Graduate student, Fall 2011)"
                        }), c.jsx("br", {}), "Associate Professor, College of Engineering and Applied Sciences, Nanjing University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "15. Fei Zhang (Graduate student, Fall 2010)"
                        }), c.jsx("br", {}), "Associate Professor, Department of Chemistry, Rutgers University Newark", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "16. Anirban Samanta (Graduate student, Fall 2009)"
                        }), c.jsx("br", {}), "Assistant Professor, Ramakrishna Mission Vidyamandira", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "17. Dongran Han (Graduate student, Fall 2009)"
                        }), c.jsx("br", {}), "Professor, Beijing University of Chinese Medicine", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "18. Palash Dutta (Graduate student, Fall 2009)"
                        }), c.jsx("br", {}), "Staff Scientist at Bruker Spatial Genomics", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "19. Wei Li (Graduate student, Fall 2009)"
                        }), c.jsx("br", {}), "Director of Chemistry at esBiolab", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "20. Xiaowei Liu (Graduate student, Fall 2008)"
                        }), c.jsx("br", {}), "LGG Fellow at Montefiore", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "21. Suchetan Pal (Graduate student, Fall 2008)"
                        }), c.jsx("br", {}), "Assistant Professor, Department of Chemistry, IIT-Bhilai", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "22. Minghui Liu (Graduate student, Fall 2008)"
                        }), c.jsx("br", {}), "Assistant Research Professor, Biodesign Institute, Arizona State University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "23. XiXi Wei (Graduate student, Fall 2008)"
                        }), c.jsx("br", {}), "Senior Research Scientist, Caris Life", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "24. Zhao Zhao (Graduate student, Fall 2008)"
                        }), c.jsx("br", {}), "Chief Technology Officer, Neocura", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "25. Zhe Li (Graduate student, Fall 2007)"
                        }), c.jsx("br", {}), "Professor and Vice Dean, College of Engineering and Applied Sciences, Nanjing University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "26. Jeanette Nangreave (Graduate student, Fall 2007)"
                        }), c.jsx("br", {}), "Teaching Professor, Arizona State University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "27. Jaswinder Sharma (Graduate student, Spring 2005)"
                        }), c.jsx("br", {}), "Senior R&D Staff and Leader, Energy Storage and Conversion Manufacturing Group, Oak Ridge National Lab", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "28. Chenxiang Lin (Graduate student, Spring 2005)"
                        }), c.jsx("br", {}), "Associate Professor, Yale University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "29. Yonggang Ke (Graduate student, Spring 2005)"
                        }), c.jsx("br", {}), "Associate Professor, Emory-Georgia Tech joint Wallace H. Coulter Department of Biomedical Engineering", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "30. Sherri Rinker (Graduate student, Fall 2004)"
                        }), c.jsx("br", {}), "Director at B2S Life Sciences", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "31. Rahul Chhabra (Graduate student, Fall 2004)"
                        }), c.jsx("br", {}), "Family Physician, Forest Lane Medical", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "32. Kyle Lund (Graduate student, Fall 2004)"
                        }), c.jsx("br", {}), "Medical Director, Clinical Pathology, Landstuhl Regional Medical Center", c.jsx("br", {}), c.jsx("br", {})]
                    }), c.jsx("div", {
                        style: {
                            fontWeight: 600,
                            fontSize: "1.5rem",
                            color: "#232946",
                            marginBottom: "0.5rem",
                            textAlign: "center"
                        },
                        children: "Postdoctoral Fellows"
                    }), c.jsxs("div", {
                        style: {
                            marginBottom: "2rem",
                            display: "inline-block",
                            textAlign: "left"
                        },
                        children: [c.jsx("b", {
                            children: "33. Dr. Junping Zhang (Postdoctoral Fellow, 2005-2006)"
                        }), c.jsx("br", {}), "Principal Scientist, Carestream Health–Advanced Materials", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "34. Dr. Qiangbin Wang (Postdoctoral Fellow, 2006-2008)"
                        }), c.jsx("br", {}), "Professor and Director, Suzhou Institute of Nanotech and Nano-bionics, CAS", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "35. Dr. Xiaoju Guan (Postdoctoral Fellow, 2002-2004)"
                        }), c.jsx("br", {}), "Principal Scientist, GSK", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "36. Dr. Zhengtao Deng (Postdoctoral Fellow, 2009-2012)"
                        }), c.jsx("br", {}), "Professor, College of Engineering and Applied Sciences, Nanjing University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "37. Dr. Reji Varghese (Postdoctoral Fellow, 2010-2011)"
                        }), c.jsx("br", {}), "Professor, Department of Chemistry, Indian Institute of Science Education and Research Thiruvananthapuram", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "38. Dr. Yang Yang (Postdoctoral Fellow, 2010-2012)"
                        }), c.jsx("br", {}), "Professor, Shanghai Jiao Tong University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "39. Dr. Jinglin Fu (Postdoctoral Fellow, 2010-2013)"
                        }), c.jsx("br", {}), "Professor and Department Chair, Department of Chemistry, Rutgers University, Camden", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "40. Dr. Alessio Andreoni (Postdoctoral Fellow, 2013-2016)"
                        }), c.jsx("br", {}), "Senior Research Scientist at Max Planck Florida Institute for Neuroscience", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "41. Dr. Ryan Nangreave (Postdoctoral Fellow, 2012-2013)"
                        }), c.jsx("br", {}), "Assistant Teaching Professor, Arizona State University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "42. Dr. Sarah Henry (Postdoctoral Fellow, 2013-2015)"
                        }), c.jsx("br", {}), "Center for Data Science and AI Manager, University of Glasgow", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "43. Dr. Xiaodong Qi (Postdoctoral Fellow, 2016-2022)"
                        }), c.jsx("br", {}), "Staff Scientist, Element Biosciences", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "44. Dr. Zhilei Ge (Postdoctoral Fellow, 2011-2013)"
                        }), c.jsx("br", {}), "Associate Professor, College of Chemistry and Chemical Engineering, Shanghai Jiao Tong University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "45. Dr. Xiaowei Liu (Postdoctoral Fellow, 2013-2015)"
                        }), c.jsx("br", {}), "LGG Fellow at Montefiore", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "46. Dr. Nour Eddine Fahmi (Postdoctoral Fellow, 2016-2020)"
                        }), c.jsx("br", {}), "Senior Advisor, Eli Lilly and Company", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "47. Dr. Xiang Lan (Postdoctoral Fellow, 2016-2018)"
                        }), c.jsx("br", {}), "Professor, Donghua University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "48. Dr. Zhi Zhao (Postdoctoral Fellow, 2018-2019)"
                        }), c.jsx("br", {}), "Professor, Beijing University of Technology", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "49. Dr. Guangbo Yao (Postdoctoral Fellow, 2017-2020)"
                        }), c.jsx("br", {}), "Associate Professor, Shanghai Jiao Tong University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "50. Dr. Yinan Zhang (Postdoctoral Fellow, 2017-2019)"
                        }), c.jsx("br", {}), "Associate Professor, Tongji University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "51. Dr. Cheng Zhang (Postdoctoral Fellow, 2011-2013)"
                        }), c.jsx("br", {}), "Associate Professor, Peking University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "52. Dr. Yang Xu (Postdoctoral Fellow, 2011-2012)"
                        }), c.jsx("br", {}), "Assistant Research Professor, Biodesign Institute, Arizona State University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "53. Dr. Jing Yang (Postdoctoral Fellow, 2011-2013)"
                        }), c.jsx("br", {}), "Professor, Northern University of Electrical Engineering, China", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "54. Bryan Wei (Postdoctoral Fellow, 2008-2009)"
                        }), c.jsx("br", {}), "Professor, Tsinghua University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "55. Yuanchen Dong (Postdoctoral Fellow, 2013-2014)"
                        }), c.jsx("br", {}), "Professor, Beijing Institute of Chemistry, CAS", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "56. Guoliang Ke (Postdoctoral Fellow, 2014-2015)"
                        }), c.jsx("br", {}), "Professor, Department of Chemistry, Hunan University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "57. Dr. Yen-Ting Lai (Postdoctoral Fellow, 2014-2015)"
                        }), c.jsx("br", {}), "Director, Moderna", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "58. Dr. Andre Pinheiro (Postdoctoral Fellow, 2009-2012)"
                        }), c.jsx("br", {}), "VP-Head Patient Value & Access EUCAN at Takeda", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "59. Dr. Nicholas Stephanopoulos (Postdoctoral Fellow, 2008)"
                        }), c.jsx("br", {}), "Associate Professor, School of Molecular Sciences, Arizona State University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "60. Dr. Bo Ning (Postdoctoral Fellow, 2017-2019)"
                        }), c.jsx("br", {}), "Assistant Professor, School of Medicine, Tulane University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "61. Lan Liu (Postdoctoral Fellow, 2018-2020)"
                        }), c.jsx("br", {}), "Assistant Professor, Department of Chemistry, Hunan University", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "62. Kasper Jahn (Postdoctoral Fellow, 2008-2009)"
                        }), c.jsx("br", {}), "Executive Director, Head of Strategy Office hos Novo Holdings", c.jsx("br", {}), c.jsx("br", {}), c.jsx("b", {
                            children: "63. Casper Anderson (Postdoctoral Fellow, 2007-2008)"
                        }), c.jsx("br", {}), "QC Lead, Topsoe", c.jsx("br", {}), c.jsx("br", {})]
                    })]
                })]
            })]
        })
    })
}
  , FD = [{
    number: "249",
    authors: "X. Jing, N. Kronebert, A. Peil, B. Renz, L. Ding, T. Heil, K. Hipp, P. A. van Aken, H. Yan, N. Liu*",
    title: "DNA Moire Superlattices",
    journal: "Nature Nanotechnology In press (2025)."
}, {
    number: "248",
    authors: "R. Zheng#, A. Prasad#*, D. Satyabola, Y. Xu, H. Yan*",
    title: "DNA-templated spatially controlled proteolysis targeting chimera for CyclinD1-CDK4/6 complex protein degradation",
    journal: "J. Am. Chem. Soc. DOI: 10.1021/jacs.5c04918 (2025)."
}, {
    number: "247",
    authors: "H. Liu, N. Liu*, H. Yan*",
    title: "Programming Precise Nanoparticle Patterns",
    journal: "Nature Materials. DOI: 10.1038/s41563-025-02262-2 (2025)."
}, {
    number: "246",
    authors: "T. Yip, X. Tu, X. Qi, H. Yan*, Y. Chang*",
    title: "Adjuvanted RNA Origami-A Tunable Peptide Assembly Platform for Constructing Cancer Nanovaccines",
    journal: "Vaccines, 13 (6), 560 (2025)."
}]
  , UD = [{
    number: "245",
    authors: "L. Yu#, L. Chen#, D. Satyabola, A. Prasad, H. Yan*",
    title: "NucleoCraft: The art of stimuli-responsive precision in DNA and RNA bioengineering",
    journal: "BME Frontiers. DOI: 10.34133/bmef.00 (2024)."
}, {
    number: "244",
    authors: "D. Satyabola, A. Prasad, H. Yan*, X. Zhou*",
    title: "Bioinspired photonic systems directed by designer DNA nanostructures",
    journal: "ACS Applied Optical Materials. DOI: 10.1021/acsaom.4c00103 (2024)."
}, {
    number: "243",
    authors: "P. Zhan, J. Yang, L. Ding, X. Jing, K. Hipp, S. Nussberger, H. Yan, N. Liu*",
    title: "3D DNA origami pincers that multitask on giant unilamellar vesicle Experiments",
    journal: "Science Advances. 10, eadn8903 (2024)."
}, {
    number: "242",
    authors: "H. Liu, M. Matthies, J. Russo, L. Rovigatti, R. Narayanan, T. Diep, D. McKeen, O. Gang, N. Stephanopoulos, F. Sciortino, H. Yan, F. Romano, P. Sulc*",
    title: "Inverse Design of a Pyrochlore Lattice of DNA Origami Through Model-driven Experiments",
    journal: "Science. 384, 776-781 (2024)."
}, {
    number: "241",
    authors: "S. Fan, S. Wang, L. Ding, T. Speck, H. Yan*, S. Nussberger*, N. Liu*",
    title: "Shape Matters: Autonomously Self-organized DNA Nanorobots as Masseur and Gatekeeper for Synthetic Cells",
    journal: "Nature Materials. 24, 278-286 (2025)."
}, {
    number: "240",
    authors: "C. Zhang*, R. Wu, F. Sun, Y. Lin, Y. Zhang, Y. Liang, Y. Chen., L. Liu, Q. Ouyang*, L. Qian*, H. Yan*.",
    title: "Parallel DNA Storage by Programming and Printing Epigenetic Bits",
    journal: "Nature. 634, 824-832 (2024)."
}, {
    number: "239",
    authors: "Y. Gao, Y. Sha, Y. Liu, J. Chen, M. Li, S. Gao, Q. Li, X. Zuo, C. Chen, T. Zhang, K. Wang, P. Wang, G. Chen, X. Liu*, H. Yan*, C. Fan*",
    title: "Massively Parallel sub-10-nanometer lithography of Graphene with DNA-silica Composite Masked Material Manufacturing",
    journal: "Nature Nanotechnology. submitted (2024)."
}, {
    number: "238",
    authors: "G. B. M. Wisna, D. Sukhareva, J. Zhao, D. Satyabola, H. Yan*, R. F. Hariadi*",
    title: "DNA Origami Cryptography in 2D and 3D Space with Improved Detection and Fast Readout Enabled by HighSpeed DNA-PAINT and Unsupervised Clustering",
    journal: "Nature Communications. submitted (2024)."
}, {
    number: "237",
    authors: "Y. Xuǂ, R. Zhengǂ, A. Prasadǂ, M. Liu, X. Zhou, R. Porter, M. Sample, E. Poppleton,J. Procyk, H. Liu, H. Lee, H. Yan*, P. Sulc*, N. Stephanopoulos*",
    title: "High-affinity binding to the SARS-CoV-2 spike trimer by a multivalent protein-DNA synthetic antibody",
    journal: "J. Am. Chem. Soc. submitted (2024)."
}, {
    number: "236",
    authors: "Y. Wang, H. Wang, Y. Li, C. Yang, Y. Tang, X. Lu, J. Fan, W. Tang, Y. Shang, H. Yan*, J. Liu*, B. Ding*",
    title: "Chemically Conjugated Branched Staples for Super-DNA Origami",
    journal: "J. Am. Chem. Soc. in press (2024)."
}, {
    number: "235",
    authors: "T. Yip, X. Qi, H. Yan*, Y. Chang*",
    title: "RNA Origami Functions as a Self-adjuvanted Nanovaccine Platform for Cancer Immunotherapy",
    journal: "ACS Nano. in revision (2024)."
}]
  , VD = [{
    number: "234",
    authors: "C. Simmons, H. Skyler, P. Sulc, N. Stephanopoulos*, H. Yan*",
    title: "Self-assembling DNA Crystal Hosted Minor Groove Binders and Their Structure Determination with Crystallography",
    journal: "J. Am. Chem. Soc. 145, 48, 26075–26085 (2023)."
}, {
    number: "233",
    authors: "R.P. Narayanan, A. Prasad, A. Buchberger, L. Zhou, J. Bernal-Chanchavac, T. MacCulloch, N.E. Fahmi, H. Yan, F. Zhang, M.J. Webber*, N. Stephanopoulos*",
    title: "Supramolecular polymerization of DNA nanostructures using high-affinity host-guest interactions",
    journal: "Small 230785 (2023)."
}, {
    number: "232",
    authors: "L. Yu, H. Yan*",
    title: "DNA-based Computation for Multiple Biomarkers.",
    journal: "Nature Biomedical Engineering 7, 1535-1536 (2023)."
}, {
    number: "231",
    authors: "L. Yu, Y. Xu, M. Al-Amin, S. Jiang, M. Sample, A. Prasad, N. Stephanopoulos, P. Sulc, H. Yan*",
    title: "CytoDirect: a Nucleic Acid Nanodevice for Specific and Efficient Delivery of Functional Payloads to the Cytoplasm",
    journal: "J. Am. Chem. Soc. 145, 50, 27336–27347 (2023)."
}, {
    number: "230",
    authors: "J. Yang, K. Jahnke, L. Xin, X. Jing, P. Zhan, A. Peil, A. Griffo, M. Skugor, D. Yang, S. Fan, K. Gopfrich*, H. Yan*, P. Wang*, N. Liu*",
    title: "Modulating Lipid Membrane Morphology by Dynamic DNA Origami Networks",
    journal: "Nano Letters 23, 6330-6336 (2023)."
}, {
    number: "229",
    authors: "K. Dai, C. Gong, Y. Xu, F. Ding, X. Qi, X. Tu, L. Yu, X. Liu, J. Li, C. Fan, H. Yan*, G. Yao*",
    title: "Single-Stranded RNA Origami-based Epigenetic Immunomodulation",
    journal: "Nano Letters 23, 7188-7196 (2023)."
}, {
    number: "228",
    authors: "K. Dai, Y. Xu, Y. Yang, J. Shen, X. Liu, X. Tu, L. Yu, X. Qi, J. Li, L. Wang, X. Zuo, Y. Liu*, H. Yan*, C. Fan*, G. Yao*",
    title: "Edge Length-Programmed Single-Stranded RNA Origami for Predictive Innate Immune Activation and Therapy",
    journal: "J. Am. Chem. Soc. 145, 17112-17124 (2023)."
}, {
    number: "227",
    authors: "Y. Tang, H. Liu, Q. Wang, X. Qi, L. Yu, P. Sulc, F. Zhang, H. Yan*, S. Jiang*",
    title: "DNA Origami Tessellations",
    journal: "J. Am. Chem. Soc. 145, 25, 13858-13868 (2023)."
}]
  , _D = [{
    number: "226",
    authors: "D. Fu', R. Pradeep', A. Prasad', F. Zhang, D. Williams, J. Schreck, H. Yan* and J. Reif*.",
    title: "Automated design of 3D DNA origami with non-rasterized 2D curvature",
    journal: "Science Advances 8, eade445, (2022)."
}, {
    number: "225",
    authors: "X. Zhou', D. Satyabola', H. Liu, S. Jiang, X. Qi, L. Yu, S. Lin, Y. Liu, N.W. Woodbury*, H. Yan*.",
    title: "Two-Dimensional Excitonic Networks Directed by DNA Templates as an Efficient Model Light-Harvesting and Energy Transfer System",
    journal: "Angew. Chem. Int. Ed. 61, e2022112, (2022)."
}, {
    number: "224",
    authors: "R. Pradeep', J. Procyk', P. Nandi, A. Prasad, Y. Xu, E. Poppleton, D. Williams, F. Zhang, H. Yan, P. Chiu*, N. Stephanopoulos*, and P. Sulc*",
    title: "Coarse-Grained Simulations for the Characterization and Optimization of Hybrid Protein-DNA Nanostructures",
    journal: "ACS Nano 16, 14086-14096, (2022)."
}, {
    number: "223",
    authors: "L. Ma, Y. Liu, C. Han, A. Movsesyan, P. Li, H. Li, P. Tang, Y. Yuan, S. Jiang, W. Ni, H. Yan, A. Govorov, Z. Wang, X. Lan*",
    title: "DNA-Assembled Chiral Satellite-Core Nanoparticle Superstructures: Two-State Chiral Interactions from Dynamic and Static Conformations",
    journal: "Nano Letters 22, 4784−4791, (2022)."
}, {
    number: "222",
    authors: "K. Chen, F. Xu, Y. Hu, H. Yan*, L. Pan*",
    title: "DNA Kirigami Driven by Polymerase-Triggered Strand Displacemen",
    journal: "Small 18, 2201478, (2022)."
}, {
    number: "221",
    authors: "X. Zhou, H. Liu, F. Djutanta, D. Satyabola, S. Jiang, X. Qi, L. Yu, S. Lin, R.F. Hariadi, Y. Liu, N.W. Woodbury*, H. Yan*.",
    title: "DNA-Templated Programmable Excitonic Wires for Micron-Scale Exciton Transport",
    journal: "Chem. 8, 2442-2459, (2022)."
}, {
    number: "220",
    authors: "X. Zhou, S. Lin, H. Yan*",
    title: "Interfacing DNA nanotechnology and biomimetic photonic complex: advances and prospects in energy and biomedicine",
    journal: "J. Nanobiotechnology 20, 257, (2022)."
}, {
    number: "219",
    authors: "C. Simmons', T. MacCulloch', M. Krepl, M. Matthies, A. Buchberger, I. Crawford, J. Sponer, P. Sulc, N. Stephanopoulos*, H. Yan*.",
    title: "The influence of Holliday junction sequence and dynamics on DNA crystal self-assembly",
    journal: "Nat. Commun. 13, 3112, (2022)."
}, {
    number: "218",
    authors: "L. Liu, F. Hong, H. Liu, X. Zhou, S. Jiang, P. Sulc, J. Jiang*, H. Yan*",
    title: "A localized DNA Finite State Machine with Temporal Resolution",
    journal: "Science Advances 8, eabm9530, (2022)."
}, {
    number: "217",
    authors: "J. Bohlin', E. Poppleton', M. Matthies', J. Procyk', A. Mallya, H. Yan, P. Sulc*",
    title: "Design and simulation of DNA, RNA, and hybrid protein-nucleic acid nanostructures with OxView",
    journal: "Nature Protocols 17, 1762–1788, (2022)."
}, {
    number: "216",
    authors: "C. Zhang*, X. Ma, X. Zheng, Y. Ke, K. Chen, D. Liu, Z. Lu, J. Yang*, H. Yan*",
    title: "Programmable Allosteric DNA Regulations for Molecular Networks and Nanomachines",
    journal: "Science Advances 8, eabl4589, (2022)."
}, {
    number: "215",
    authors: "S. Dey', A. Dorey', L. Abraham', Y. Xing, I. Zhang, F. Zhang, S. Howorka*, H. Yan*",
    title: "A Reversibly Gated Protein-Transporting Membrane Channel Made of DNA",
    journal: "Nat. Commun. 13, 2271, (2022)."
}]
  , WD = [{
    number: "214",
    authors: "H. Liu, F. Hong, F. Smith, J. Goertz, T. Ouldridge, M. Stevens, H. Yan, P. Sulc*",
    title: "Kinetics of RNA and RNA:DNA hybrid strand displacement",
    journal: "ACS Synth. Biol. 10, 3066-3073, (2021)."
}, {
    number: "213",
    authors: "Y. Liu, L. Ma, S. Jiang, C. Han, P. Tang, H. Yang, X. Duan, N. Liu*, H. Yan*, X. Lan*",
    title: "DNA Programmable Self-Assembly of Planar, Thin-Layered Chiral Nanoparticle Superstructures with Complex Two-Dimensional Patterns",
    journal: "ACS Nano 15, 16664-16672, (2021)."
}, {
    number: "212",
    authors: "T. Yuan, Y. Shao, X. Zhou, Q. Liu, Z. Zhu, B. Zhou, Y. Dong, N. Stephanopoulos, S. Gui*, H. Yan*, D. Liu*",
    title: "Highly Permeable DNA Supramolecular Hydrogel Promotes Neurogenesis and Functional Recovery after Completely Transected Spinal Cord Injury",
    journal: "Advanced Materials 33, 2102428, (2021)."
}, {
    number: "211",
    authors: "Y. Zhang, Z. Qu, . Jiang, Y. Liu, R. Narayanan, D. Williams, X. Zuo, L. Wang, H. Yan, H. Liu* & C. Fan",
    title: "Prescribing Silver Chirality with DNA Origami",
    journal: "J. Am. Chem. Soc 143, 8639-8646, (2021)."
}, {
    number: "210",
    authors: "S. Jiang, N. Pal, F. Hong, N. E. Fahmi, H. Hu, M. Vrbanac, H. Yan*, N. G. Walter*, Y. Liu*",
    title: "Regulating DNA Self-Assembly Dynamics with Controlled Nucleation",
    journal: "ACS Nano 15, 5384-5396, (2021)."
}, {
    number: "209",
    authors: "S. Dey, C. Fan*, K. V. Gothelf*, J. Li*, C. Lin*, L. Liu, N. Liu*, M. A. D. Nijenhuis, B. Sacca*, F. C. Simmel*, H. Yan* & P. Zhan",
    title: "DNA Origami",
    journal: "Nat. Rev. Methods Primers 1, 13, (2021)."
}]
  , ZD = [{
    number: "208",
    authors: "S. Jiang, Z. Ge, S. Mou, H. Yan*, C. Fan*",
    title: "Designer DNA Nanostructures for Therapeutics",
    journal: "Chem 7, 1156-1179, (2020)."
}, {
    number: "207",
    authors: "G. Yao', F. Zhang', F. Wang', T. Peng, H. Liu, E. Poppleton, P. Sulc, S. Jiang, L. Liu, C. Gong, X. Jing, X. Liu, L. Wang, Y. Liu, C. Fan*, H. Yan*",
    title: "Meta-DNA Structures",
    journal: "Nat. Chem. 12, 1067-1075, (2020)."
}, {
    number: "206",
    authors: "C.R. Simmons', T. MacCulloch', F. Zhang, Y. Liu, N. Stephanopoulos & H. Yan",
    title: "A Self-Assembled Rhombohedral DNA Crystal Scaffold with Tunable Cavity Sizes and High Resolution Structural Detail",
    journal: "Angew. Chem. Int. Ed. 59, 18619-18626, (2020)."
}, {
    number: "205",
    authors: "S. Jiang, F. Zhang, H. Yan",
    title: "Complex assemblies and crystals guided by DNA",
    journal: "Nat. Mater. 19, 694-700, (2020)."
}, {
    number: "204",
    authors: "J. Georges, X. Qi, X. Liu, Y. Zhou, E. C. Woolf, A. Valeri, Z. Al-Atrache, E. Belykh, B. Feuerstein, M. Preul, A. C. Scheck, M. Reiser, T. Anderson, J. Gopez, D. Appelt, S. Yocom, J. Eschbacher, H. Yan, P. Nakaji",
    title: "A Fluorescent Aptamer Provides Rapid and Specific Ex Vivo Diagnosis of Central Nervous System Lymphoma from Rodent Xenograft Biopsies",
    journal: "J. Neurosurg. 134, 1728-1737, (2020)."
}, {
    number: "203",
    authors: "J. Li', J. Dai', S. Jiang', M. Xie', T. Zhai, L. Guo, S. Cao, S. Xing, Z. Qu, Y. Zhao, F. Wang, Y. Yang, L. Liu, X. Zuo, L. Wang*, H. Yan*, C. Fan*",
    title: "Encoding quantized fluorescence states with fractal DNA frameworks",
    journal: "Nat. Commun. 11, 2185, (2020)."
}, {
    number: "202",
    authors: "X. Qi, X. Liu, L. Matiski, R. Rodriguez Del Villar, T. Yip, F. Zhang, S. Sokalingam, S. Jiang, L. Liu, H. Yan, Y. Chang",
    title: "RNA Origami Nanostructures for Potent and Safe Anti-Cancer Immunotherapy",
    journal: "ACS Nano 14, 4727-4740, (2020)."
}, {
    number: "201",
    authors: "F. Hong, D. Ma, K, Wu, L.A. Mina, R.C. Luiten, Y. Liu, H. Yan*, A.A. Green*",
    title: "Precise and Programmable Detection of Mutations Using Ultraspecific Riboregulators",
    journal: "Cell 180, 1018-1032, (2020)."
}, {
    number: "200",
    authors: "G. Yao, J. Li, Q. Li, X. Chen, X. Liu, F. Wang, Z. Qu, Z. Ge, R.P. Narayanan, D. Williams, H. Pei, X. Zuo, L. Wang, H. Yan, B.L. Feringa*, C. Fan*",
    title: "Programming nanoparticle valence bonds with single-stranded DNA encoders",
    journal: "Nature Materials 19, 781-788, (2020)."
}]
  , GD = [{
    number: "199",
    authors: "C. Zhang*, Z. Wang, Y. Liu, J. Yang, X. Zhang, Y. Li, L. Pan, Y. Ke*, H. Yan*",
    title: "Nicking-Assisted Reactant Recycle to Implement Entropy-Driven DNA Circuit",
    journal: "J. Am. Chem. Soc. 141, 17189-17197, (2019)."
}, {
    number: "198",
    authors: "Z. Zhao, C. Wang, H. Yan,* Y. Liu*",
    title: "Soft Robotics Programmed with Double Crosslinking DNA Hydrogels",
    journal: "Advanced Functional Materials 1905911, (2019)."
}, {
    number: "197",
    authors: "X. Jing, F. Zhang, P. Pan, X. Dai, J. Li, L. Wang, H. Yan, C. Fan",
    title: "Solidifying framework nucleic acids with silica",
    journal: "Nature Protocols 14, 2416-2436, (2019)."
}, {
    number: "196",
    authors: "X. Wang, A. Chandrasekaran, R. Arun, Z. Shen, Y. Ohayon, T. Wang, M. Kizer, R. Sha, C. Mao, H. Yan, X. Zhang, S. Liao, B. Ding, B. Chakraboty, N. Jonoska, D. Niu, H. Gu, J. Chao, X. Gao, Y. Li, T. Ciengshin, N. Seeman",
    title: "Paranemic Crossover DNA: There and Back Again",
    journal: "Chemical Reviews 119, 6273-6289, (2019)."
}, {
    number: "195",
    authors: "Y. Zhou, X. Qi, Y. Liu, F. Zhang, H. Yan",
    title: "DNA Nanoscaffold-Assisted Selection of Femtomolar Bivalent Aptamers for Human-Thrombin with Potent Anticoagulant Activity",
    journal: "ChemBioChem 20, 2494-2503 (2019)."
}, {
    number: "194",
    authors: "S. Mandal', X. Zhou', S. Lin, H. Yan, N. Woodbury",
    title: "Directed Energy Transfer through DNA-Templated J-aggregates",
    journal: "Bioconjugate Chemistry 30, 1870-1879, (2019)."
}, {
    number: "193",
    authors: "X. Zhou', S. Mandal', S. Jiang, S. Lin, J. Yang, Y. Liu, D. Whitten, N. Woodbury, H. Yan",
    title: "Efficient Long-rnage, Directional Energy Transfer through DNA-Templated Dye Aggregates",
    journal: "J. Am. Chem. Soc. 141, 8473-8481, (2019)."
}, {
    number: "192",
    authors: "L. Xin, M. Lu, S. Both, M. Pfeifer, M. Urban, C. Zhou, H. Yan, T. Weiss, N. Liu, K. Lindfors",
    title: "Watching a Single Fluorofphore Molecule Walk into a Plasmonic Hotspot",
    journal: "ACS Photonics 6, 985-993, (2019)."
}, {
    number: "191",
    authors: "Y. Xu, S. Jiang, C. Simmons, R. Narayanan, F. Zhang, A. Aziz, H. Yan, N. Stephanopoulos*",
    title: "Tunable Nanoscale Cages from Self-Assembling DNA and Protein Building Blocks",
    journal: "ACS Nano 13, 3545-3554, (2019)."
}, {
    number: "190",
    authors: "H. Jun, F. Zhang, T. Shepherd, S. Ratanalert, X. Qi, H. Yan, M. Bathe*",
    title: "Autonomously designed free-form 2D DNA origami",
    journal: "Science Advances 5, eaav0655, (2019)."
}, {
    number: "189",
    authors: "Z. Ge, J. Fu, M. Liu, S. Jiang, A. Andreoni, X. Zuo, Y. Liu, H. Yan*, C. Fan*",
    title: "Constructing Submonolayer DNA Origami Scaffold on Gold Electrode for Wiring of Redox Enzymatic Cascade Pathways",
    journal: "ACS Appl. Mater. Interfaces 11, 13881-13887 (2019)."
}, {
    number: "188",
    authors: "Z. Ge, Z. Su, C. R. Simmons, J. Li, S. Jiang, W. Li, Y. Yang, Y. Liu*, W. Chiu, C. Fan*, H. Yan*",
    title: "Redox Engineering of Cytochrome c using DNA Nanostructure-Based Charged Encapsulation and Spatial Control",
    journal: "ACS Appl. Mater. Interfaces 11, 13874-13880 (2019)."
}]
  , kD = [{
    number: "187",
    authors: "F. Hong, S. Jiang, X. Lan, R. Narayanan, P. Sulc, F. Zhang*, Y. Liu*, H. Yan*",
    title: "Layered-Crossover Tiles with Precisely Tunable Angles for 2D and 3D DNA Crystal Engineering",
    journal: "J. Am. Chem. Soc. 140, 14670-14676, (2018)."
}, {
    number: "186",
    authors: "X. Qi', F. Zhang'*, Z. Su', S. Jiang, D. Han, B. Ding, Y. Liu, W. Chiu, P. Yin, H. Yan*",
    title: "Programing Molecular Topologies from Single-stranded Nucleic Acids",
    journal: "Nature Commun. 9, 4579, (2018)."
}, {
    number: "185",
    authors: "D. Jiang', Z. Ge', H. Im, C. England, D. Ni, J. Hu, L. Zhang, C. Kutyreff, Y. Yan, Y. Liu, S. Cho, J. Engle, J. Shi, P. Huang, C. Fan*, H. Yan*, W. Cai*",
    title: "DNA-origami nanostructures can exhibit preferential renal uptake and alleviate acute kidney injury",
    journal: "Nature Biomed. Eng. 2, 865-877, (2018)."
}, {
    number: "184",
    authors: "X. Lan*, T. Liu, Z. Wang, A. Govorov*, H. Yan, Y. Liu*",
    title: "DNA-Guided Plasmonic Helix with Switchable Chirality",
    journal: "J. Am. Chem. Soc. 140, 11763-11770, (2018)."
}, {
    number: "183",
    authors: "F. Zhang', C. Simmons', J. Gates, Y. Liu, H. Yan*",
    title: "Self-Assembly of a 3D DNA Crystal Structure with Rationally Designed Six-Fold Symmetry",
    journal: "Angew Chem Int Ed. 57, 12504-12507, (2018)."
}, {
    number: "182",
    authors: "X. Liu', F. Zhang', X. Jing', M. Pan, P. Liu, W. Li, B. Zhu, J. Li, H. Chen, L. Wang, J. Lin, Y. Liu, D. Zhao, H. Yan* and C. Fan*",
    title: "Complex silica composite nanomaterials templated with DNA origami",
    journal: "Nature 559, 593-598, (2018)."
}, {
    number: "181",
    authors: "J. Li, A. Johnson-Buck, Y. Yang, W. Shih, H. Yan, N. Walter*",
    title: "Exploring the speed limit of toehold exchange with a cartwheeling DNA acrobat",
    journal: "Nature Nanotechnol. 13, 723-729, (2018)."
}, {
    number: "180",
    authors: "S. Li, Q. Jiang, S. Liu, Y. Zhang, Y. Tian, C. Song, J. Wang, Y. Zou, G. J. Anderson, J. Han, Y. Chang, Y. Liu, C. Zhang, L. Chen, G. Zhou, G. Nie*, H. Yan*, B. Ding*, Y. Zhao*",
    title: "A DNA nanorobot functions as a cancer therapeutic in response to a molecular trigger in vivo",
    journal: "Nature Biotechnology 36, 258-264, (2018)."
}, {
    number: "179",
    authors: "E. Boulais, N. Sawaya, R. Veneziano, A. Andreoni, J. Banal, T. Kondo, S. Mandal, S. Lin, G. Schlau-Cohen, N. Woodbury, H. Yan*, A. Aspuru-Guzik*, M. Bathe*",
    title: "Programmed coherent coupling in a synthetic DNA-based excitonic circuit",
    journal: "Nature Materals 17, 159-166, (2018)."
}]
  , XD = [{
    number: "178",
    authors: "Y. R. Yang, J. Fu, S. Wootten, X. Qi, M. Liu, H. Yan, Y. Liu*",
    title: "2D Enzyme Cascade Network with Efficient Substrate Channeling by Swinging Arms",
    journal: "ChemBioChem. DOI: 10.1002/cbic.201700613 (2017)."
}, {
    number: "177",
    authors: "D. Han', X. Qi', C. Myhrvold, B. Wang, M. Dai, S. Jiang, M. Bates, Y. Liu, B. An*, F. Zhang*, H. Yan* and P. Yin*",
    title: "Single-stranded DNA and RNA Origami",
    journal: "Science 358, eaao2648, (2017)."
}, {
    number: "176",
    authors: "F. Zhang, H. Yan*",
    title: "DNA self-assembly scaled up",
    journal: "Nature 552, 34-35, (2017)."
}, {
    number: "175",
    authors: "A. Carey, H. Zhang, M. Liu, D. Sharaf, N. Akram, H. Yan, S. Lin, N. Woodbury*, D. Seo*",
    title: "Enhancing Photocurrent Generation in Photosynthetic Reaction Center-based Photoelectrochemical Cells with Biomimetic DNA Antenna",
    journal: "ChemSusChem 10, 4457-4460, (2017)."
}, {
    number: "174",
    authors: "S. Jiang, F. Hong, H. Hu, H. Yan*, Y. Liu*",
    title: "Understanding the Elementary Steps in DNA Tile-Based Self-Assembly",
    journal: "ACS Nano. 11, 9370-9381, (2017)."
}, {
    number: "173",
    authors: "J. Li, A. A. Green, H. Yan, C. Fan",
    title: "Engineering nucleic acid structures for programmable molecular circuitry and intracellular biocomputation",
    journal: "Nature Chem. 9, 1056-1067, (2017)."
}, {
    number: "172",
    authors: "C. Simmons, F. Zhang, T. MacCulloch, N. Fahmi, N. Stephanopoulos, Y. Liu, N. Seeman, H. Yan",
    title: "Tuning the Cavity Size and Chirality of Self-Assembling 3D DNA Crystals.",
    journal: "J. Am. Chem. Soc. 139, 11254-11260, (2017)."
}, {
    number: "171",
    authors: "D. Mieritz, X. Li, A. Volosin, M. Liu, H. Yan, N. Walter, D. Seo",
    title: "Tracking Single DNA Nanodevices in Herarchically Meso-Macroporous Antimony-Doped Tin Oxide Demonstrates Finite Confinement",
    journal: "Langmuir 33, 6410-6418, (2017)."
}, {
    number: "170",
    authors: "F. Hong, F. Zhang, Y. Liu*, H. Yan*",
    title: "DNA Origami:Scaffolds for Creating Higher Order Structures",
    journal: "Chem. Rev. 117, 12584-12640, (2017)."
}, {
    number: "169",
    authors: "H. Zhang, A. Carey, K. Jeon, M. Liu, T. Murell, J. Locsin, S. Lin, H. Yan, N. Woodbury, D. Seo",
    title: "A Highly Stable and Scalable Photosynthetic Reaction Center-Graphene Hybrid Electrode System for Biomimetic Solar Energy Transduction",
    journal: "J. Mater. Chem. A. 5, 6038-6041, (2017)."
}, {
    number: "168",
    authors: "F. Zhang, F. Hong, H. Yan*",
    title: "DNA Origami Tiles: Nanoscale Mazes",
    journal: "Nature Nanotechnol.12, 189-190, (2017)."
}, {
    number: "167",
    authors: "Y. Dong, Y. Yang, Y. Zhang, D. Wang, X. Wei, S. Banerjee, Y. Liu, Z. Yang, H. Yan*, D. Liu*",
    title: "Cuboid Vesicles Formed by Frame-guided Assembly on DNA Origami Scaffolds",
    journal: "Angew Chem Int Ed. 156, 1586-1589, (2017)."
}, {
    number: "166",
    authors: "A. Andreoni, S. Lin, H. Liu, R. E. Blankenship, H. Yan, N. Woodbury",
    title: "Orange Carotenoid Protein as a Control Element in an Antenna System based on a DNA Nanostructure",
    journal: "Nano Letters 17, 1174-1180, (2017)."
}]
  , JD = [{
    number: "165",
    authors: "F. Hong, S. Jiang, T. Wang, Y. Liu*, H. Yan*",
    title: "3D Framework DNA origami with Layered Crossovers",
    journal: "Angew Chem Int Ed. 128, 13024-13027, (2016)."
}, {
    number: "164",
    authors: "A. Carey, H. Zhang, D. Mieritz, A. Volosin, A. Gardiner, R. Cogdell, H. Yan, D. Seo, S. lin, N. Woodbury*",
    title: "Photocurrent generation by photosynthetic purple bacterial reaction centers interfaced with a porous antimony-doped tin oxide (ATO) electrode",
    journal: "ACS Appl. Matter. Interfaces 8, 25104-25110, (2016)."
}, {
    number: "163",
    authors: "J. Fu*, Y. Yang, S. Dhakal, Z. Zhao, M. Liu, T. Zhang, N. Walter, H. Yan",
    title: "Assembly of Multi-Enzyme Complexes on DNA Nanostructures",
    journal: "Nature Protocols 11, 2243-2273, (2016)."
}, {
    number: "162",
    authors: "C. Simmons, F. Zhang, J. Birktoft, X. Qi, D. Han, Y. Liu, R. Sha, H. Abdallah, C. Hernandez, Y. Ohayon, N. Seeman*, H. Yan*",
    title: "Construction and Structure Determination of a Three-dimensional DNA Crystal",
    journal: "J. Am. Chem. Soc. 138, 10047-10054, (2016)."
}, {
    number: "161",
    authors: "R. Veneziano, S. Ratanalert, K. Zhang, F. Zhang, H. Yan, W. Chiu, M. Bathe*",
    title: "Designer nanoscale DNA assemblies programmed from the top down",
    journal: "Science 10.1126/science.aaf4388 (2016)."
}, {
    number: "160",
    authors: "F. Zhang*, S. Jiang, W. Li, A. Hunt, Y. Liu*, H. Yan*",
    title: "Self-assembly of Complex DNA Tessellations using low symmetry multi-arm DNA tiles",
    journal: "Angew Chem Int Ed. 55, 8860-8863, (2016)."
}, {
    number: "159",
    authors: "G. Ke, M. Liu, S. Jiang, X. Qi, Y. R. Yang, S. Wootten, F. Zhang, Z. Zhu, Y. Liu*, C. J. Yang*, H. Yan*",
    title: "Directional Regulation of Enzyme Pathways via the Control of Substrate Channeling on a DNA Origami Scaffold",
    journal: "Angew Chem Int Ed. 55, 7483-7486, (2016)."
}, {
    number: "158",
    authors: "M. Liu, J. Fu, X. Qi, S. Wootten, N. Woodbury, Y. Liu*, H. Yan*",
    title: "A three-enzyme pathway with an optimized geometric arrangement to facilitate substrate transfer",
    journal: "ChemBioChem 17, 1097-1101, (2016)."
}, {
    number: "157",
    authors: "W. Li, F. Zhang, H. Yan*, Y. Liu*",
    title: "DNA Based Arithmetic Function: Half Adder Based on DNA Strand Displacement",
    journal: "Nanoscale 8, 3775-3784, (2016)."
}, {
    number: "156",
    authors: "Z. Zhao, J. Fu, S. Dhakal, A. Johnson-Buck, M. Liu, T. Zhang, N. Woodbury, Y. Liu, N. Walter, H. Yan*",
    title: "Nano-caged Enzymes with Enhanced Catalytic Activity and Increased Stability against Protease Digestion",
    journal: "Nature Commun. 7, 10619 (2016)."
}, {
    number: "155",
    authors: "S. Dhakal, M. R. Adendorff, M. Liu, H. Yan*, M. Bathe*, N. G. Walter*",
    title: "Rational design of DNA-actuated enzyme nanoreactors guided by single molecule analysis",
    journal: "Nanoscale 8, 3125-3137, (2016)."
}, {
    number: "154",
    authors: "C. Zhang, J. Yang, S. Jiang, Y. Liu*, H. Yan*",
    title: "DNAzyme-based Logic Gate-mediated DNA Self-assembly",
    journal: "Nano Letters 16, 736-741, (2016)."
}]
  , qD = [{
    number: "153",
    authors: "H. Yan, Y. Zhang",
    title: "DNA/RNA-Based Nanostructures for Cancer Nanomedicine",
    journal: "Section III: Novel Nanometerials for Diagnosis and Therapy, CaNanoPlan 14-19, (2015)."
}, {
    number: "152",
    authors: "F. Zhang, S. Jiang, S. Wu, Y. Li, C. Mao, Y. Liu*, H. Yan*",
    title: "Complex wireframe DNA origami nanostructures with multi-arm junction vertices",
    journal: "Nature Nanotechnol. 10, 779-784, (2015)."
}, {
    number: "151",
    authors: "Y. Yang, Y. Liu, H. Yan*",
    title: "DNA nanostructures as programmable biomolecular scaffolds",
    journal: "Bioconjugate Chemistry 26, 1381-1395, (2015)."
}, {
    number: "150",
    authors: "J. F. Georges, X. Liu, J. Eschbacher, J. Nichols, M. A. Mooney, A. Joy, R. F. Spetzler, B. G. Feuerstein, M. C. Preu, T. Anderson, H. Yan, P. Nakaji*",
    title: "Use of a Conformational Switching Aptamer for Rapid and Specific Ex Vivo Identification of Central Nervous System Lymphoma in a Xenograft Model.",
    journal: "PloS one 10(4), (2015)."
}, {
    number: "149",
    authors: "A. Samanta, S. Banerjee, Y. Liu*",
    title: "DNA nanotechnology for nanophotonic applications",
    journal: "Nanoscale 7, 2210-2220, (2015)."
}]
  , ID = [{
    number: "133",
    authors: "A. Samanta, Z. Deng, H. Yan, Y. Liu*",
    title: "A perspective on Functionalizing Colloidal Quantum Dots with DNA",
    journal: "Nano Research 6, 853-870, (2013)."
}, {
    number: "132",
    authors: "D. Han, S. Jiang, A. Samanta, Y. Liu, H. Yan*",
    title: "Unidirectional Scaffold-Strand Arrangement in DNA Origami",
    journal: "Angew Chem Int Ed. 52, 9031-9034, (2013)."
}, {
    number: "131",
    authors: "Q. Mei, R. H. Johnson, X. Wei, F. Su, Y. Liu, L. Kelbauskas, S. Lindsay, D. R. Meldrum, H. Yan",
    title: "On-chip isotachophoresis separation of functional DNA origami capture nanoarrays from cell lysate",
    journal: "Nano Research 6, 712-719, (2013)."
}, {
    number: "130",
    authors: "M. Liu, J. Fu*, C. Hejesen, Y. Yang, N. W. Woodbury, K. Gothelf, Y. Liu, H. Yan*",
    title: "A DNA Tweezer-Actuated Enzyme Nanoreactor",
    journal: "Nature Comm. 4:2127 (2013)."
}, {
    number: "129",
    authors: "S. Pal, P. Dutta, H. Wang, Z. Deng, S. Zou, H. Yan, Y. Liu*",
    title: "Quantum Efficiency Modification of Organic Fluorophores Using Gold Nanoparticles on DNA Origami Scaffolds",
    journal: "J. Phys. Chem. C 117, 12735-12744, (2013)."
}, {
    number: "128",
    authors: "W. Li*, Y. Yang, H. Yan, Y. Liu*",
    title: "3-Input Majority Logic Gate and Multiple Input Logic Circuit Based on DNA Strand Displacement",
    journal: "Nano Letters 13, 2980-2988, (2013)."
}, {
    number: "127",
    authors: "A. Johnson-Buck, J. Nangreave, S. Jiang, H. Yan, N. Walter*",
    title: "Multifactorial Modulation of Binding and Dissociation Kinetics on Two-Dimensional DNA Nanostructures",
    journal: "Nano Letters 13, 2754-2759, (2013)."
}, {
    number: "126",
    authors: "F. Zhang, Y. Liu*, H. Yan*",
    title: "Complex Archimedean Tiling Self-assembled from DNA Nanostructures",
    journal: "J. Am. Chem. Soc. 135, 7458-7461, (2013)."
}, {
    number: "125",
    authors: "X. Wei, J. Nangreave, S. Jiang, H. Yan, Y. Liu*",
    title: "Mapping the Thermal Behavior of DNA Origami Nanostructures",
    journal: "J. Am. Chem. Soc. 135, 6165-6176, (2013)."
}, {
    number: "124",
    authors: "J. Flory, S. Shinde, S. Lin, Y. Liu, H. Yan, G. Ghirlanda, P. Fromme*",
    title: "PNA-peptide Assembly in a 3D DNA Nanocage at Room Temperature",
    journal: "J. Am. Chem. Soc. 135, 6985-6993, (2013)."
}, {
    number: "123",
    authors: "Y. Yang, Z. Zhao, F. Zhang, J. Nangreave, Y. Liu*, H. Yan*",
    title: "Self-assembly of DNA Rings from Scaffold Free DNA Tiles",
    journal: "Nano letters 13, 1862-1866, (2013)."
}, {
    number: "122",
    authors: "Z. Deng, S. Pal, A. Samanta, H. Yan, Y. Liu*",
    title: "DNA Functionalization of Colloidal II-VI Semiconductor Nanowires",
    journal: "Chemical Sciences 3, 2234-2240, (2013)."
}, {
    number: "121",
    authors: "X. Liu, Y. Liu*, H. Yan*",
    title: "Functionalized DNA Nanostructures for Nanomedicine",
    journal: "Israel Journal of Chemistry, Special Issue on Supramolecular Chemistry for Materials and Medicine, Invited review, 53, 555-566 (2013)."
}, {
    number: "120",
    authors: "O. Schulz, Z. Zhao, A. Ward, M. Koenig, F. Koberling, Y. Liu, J. Enderlein, H. Yan*, R. Ros*",
    title: "Tip Induced Fluorescence Quenching for Nanometer Optical and Topographical Resolution",
    journal: "Optical Nanoscopy, 2:1, (2013)."
}, {
    number: "119",
    authors: "D. Han*, S. Pal, Y. Yang, S. Jiang, J. Nangreave, Y. Liu*, H. Yan*",
    title: "DNA Gridiron Nanostructures Based on Four-Arm Junctions",
    journal: "Science, 339, 1412-1415, (2013)."
}, {
    number: "118",
    authors: "A. Johnson-Buck, J. Nangreave, D. Kim, M. Bathe, H. Yan, N. Walter*",
    title: "Super-Resolution Fingerprinting Detects Chemical Reactions and Idiosyncrasies of Single DNA Pegboards",
    journal: "Nano Letters, 13, 728-733 (2013)."
}, {
    number: "117",
    authors: "Z. Zhao, Y. Liu*, H. Yan*",
    title: "DNA Origami Templated Self-assembly of Discrete Length Single Wall Carbon Nanotubes",
    journal: "Org. Biomol. Chem., 11, 596-598 (2013)."
}]
  , KD = [{
    number: "116",
    authors: "Z. Deng, A. Samanta, J. Nangreave, H. Yan*, Y. Liu*",
    title: "Robust DNA Functionalized Core/Shell Quantum Dots with Fluorescent Emission Spanning from UV-Vis to Near IR and Compatible with DNA Directed Self-Assembly",
    journal: "J. Am. Chem. Soc., 134, 17424-17427 (2012)."
}, {
    number: "115",
    authors: "Y. Yang, D. Han, J. Nangreave, Y. Liu*, H. Yan*",
    title: "DNA Origami with Double-Stranded DNA As a Unified Scaffold",
    journal: "ACS Nano, 6, 8209-8215 (2012)."
}, {
    number: "114",
    authors: "N. Lu, H. Pei, Z. Ge, C. R. Simmons, H. Yan*, C. Fan*",
    title: "Charge Transport within A Three-Dimensional DNA nanostructure Framework",
    journal: "J. Am. Chem. Soc., 134, 13148-13151 (2012)."
}, {
    number: "113",
    authors: "Q. Jiang, C. Song, J. Nangreave, X. Liu, L. Lin, D. Qiu, Z. Wang, G. Zou, X. Liang, H. Yan*, B. Ding*",
    title: "DNA Origami as a Carrier for Circumvention of Drug Resistance",
    journal: "J. Am. Chem. Soc., 134, 13396-13403 (2012)."
}, {
    number: "112",
    authors: "X. Liu, Y. Xu, T. Yu, C. Craig, Y. Liu, H. Yan*, Y. Chang*",
    title: "A DNA Nanostructure Platform for Directed Assembly of Synthetic Vaccines",
    journal: "Nano Letters, 12, 4254-4259 (2012)."
}, {
    number: "111",
    authors: "Z. Deng*, D. Cao, J. He, S. Lin, S. M. Lindsay, Y. Liu*",
    title: "Solution Synthesis of Ultrathin Single-Crystalline SnS Nanoribbons for Photodetectors via Phase Transition and Surface Processing",
    journal: "ACS Nano, 6, 6197-6207 (2012)."
}, {
    number: "110",
    authors: "A. Samanta, Z. Deng, Y. Liu*",
    title: "Aqueous Synthesis of Glutathione-Capped CdTe/CdS/ZnS and CdTe/CdSe/ZnS Core/Shell/Shell Nanocrystal Heterostructures",
    journal: "Langmuir, 28, 8205-8215 (2012)."
}, {
    number: "109",
    authors: "J. Fu, M. Liu, Y. Liu*, H. Yan*",
    title: "Spatially-Interactive Biomolecular Networks Organized by Nucleic Acid Nanostructures",
    journal: "Acc. Chem. Res. 45, 1215-1226 (2012)."
}, {
    number: "108",
    authors: "F. Zhang, J. Nangreave, Y. Liu*, H. Yan*",
    title: "Reconfigurable DNA Origami to Generate Quasi-Fractal Patterns",
    journal: "Nano Letters, 12, 3290-3295 (2012)."
}, {
    number: "107",
    authors: "A. V. Pinheiro, J. Nangreave, S. Jiang, H. Yan, Y. Liu*",
    title: "Steric Crowding and the Kinetics of DNA Hybridization within a DNA Nanostructure System",
    journal: "ACS Nano, 6, 5521-5530 (2012)."
}, {
    number: "106",
    authors: "J. Fu, H. Yan*",
    title: "Controlled Drug Release by a Nanorobot",
    journal: "Nature Biotechnol. 30, 407-408 (2012)."
}, {
    number: "105",
    authors: "J. Fu, M. Liu, Y. Liu, N. W. Woodbury*, H. Yan*",
    title: "Interenzyme Substrate Diffusion for an Enzyme Cascade Organized on Spatially Addressable DNA Nanostructures",
    journal: "J. Am. Chem. Soc. 134, 5516-5519 (2012)."
}, {
    number: "104",
    authors: "Z. Li, L. Wang, H. Yan, Y. Liu*",
    title: "Effect of DNA Hairpin Loops on the Twist of Planar DNA Origami Tiles",
    journal: "Langmuir, 28, 1959-1965 (2012)."
}]
  , QD = [{
    number: "103",
    authors: "A. V. Pinheiro, D. Han, W. M. Shih*, H. Yan*",
    title: "Challenges and opportunities for structural DNA nanotechnology",
    journal: "Nature Nanotechnol. 6, 763-772 (2011)."
}, {
    number: "102",
    authors: "S. Pal, Z. Deng, H. Wang, S. Zou, Y. Liu*, H. Yan*",
    title: "DNA Directed Self-Assembly of Anisotropic Plasmonic Nanostructures",
    journal: "J. Am. Chem. Soc. 133, 17606-17609 (2011)."
}, {
    number: "101",
    authors: "P. Dutta, R. Varghese, J. Nangreave, S. Lin, H. Yan, Y. Liu*",
    title: "DNA Directed Artificial Light Harvesting Antenna",
    journal: "J. Am. Chem. Soc. 133, 11985-11993 (2011)."
}, {
    number: "100",
    authors: "C. R. Simmons, D. Schmitt, X. Wei, D. Han, A. M. Volosin, D. M. Ladd, D. Seo, Y. Liu, H. Yan*",
    title: "Size-Selective Incorporation of DNA Nanocages into Nanoporous Antimony-doped Tin Oxide Materials",
    journal: "ACS Nano, 5, 6060-6068 (2011)."
}, {
    number: "99",
    authors: "Z. Zhao, Y. Liu, H. Yan*",
    title: "Organizing DNA Origami Tiles Into Larger Structures Using Pre-formed Scaffold Frames",
    journal: "Nano Letters, 11, 2997-3002 (2011)."
}, {
    number: "98",
    authors: "T. Torring, N. V. Voigt, J. Nangreave, H. Yan*, K. Gothelf*",
    title: "DNA Origami: A quantum leap for self-assembly of complex structures",
    journal: "Chem. Soc. Rev, 40, 5636-5646 (2011)."
}, {
    number: "97",
    authors: "X. Liu, H. Yan, Y. Liu*, Y. Chang*",
    title: "Targeted Cell-Cell Interactions by DNA Nanoscaffold-Templated Multivalent Bi-specific Aptamers",
    journal: "Small, 7, 1673-1682 (2011)."
}, {
    number: "96",
    authors: "D. Han*, S. Pal, J. Nangreave, Z. Deng, Y. Liu*, H. Yan*",
    title: "DNA Origami with Complex Curvatures in Three-dimensional Space",
    journal: "Science, 332, 342-346 (2011)."
}, {
    number: "95",
    authors: "S. Pal, R. Varghese, H. Yan*, Y. Liu*",
    title: "Site Specific Synthesis and in-situ Immobilization of Fluorescent Silver Nanoclusters on DNA Nanoscaffolds Using Tollens Reaction",
    journal: "Angew Chem Int Ed, 50, 4176-4179 (2011)."
}, {
    number: "94",
    authors: "Z. Deng, L. Tong, S. Lin, M. Flores, J. Cheng, H. Yan, Y. Liu*",
    title: "High Quality Manganese-Doped Zinc Sulfide Quantum Rods with Tunable Dual-Color and Multi-Photon Emissions",
    journal: "J. Am. Chem. Soc, 133, 5389-5396 (2011)."
}, {
    number: "93",
    authors: "J. Nangreave, H. Yan, Y. Liu*",
    title: "DNA Nanostructures as Models for Evaluating the Role of Enthalpy and Entropy in Polyvalent Binding",
    journal: "J. Am. Chem. Soc, 133, 4490-4497 (2011)."
}, {
    number: "92",
    authors: "Q. Mei, X. Wei, F. Su, Y. Liu, C. Youngbull, R. Johnson, S. Lindsay, H. Yan*, D. Meldrum*",
    title: "Stability of DNA Origami Nanoarrays in Cell Lysate",
    journal: "Nano Letters, 11, 1477-1482 (2011)."
}, {
    number: "91",
    authors: "Z. Zhao, Y. Liu*, H. Yan*",
    title: "Encapsulation of Gold Nanoparticles in a DNA Origami Cage",
    journal: "Angew Chem Int Ed, 50, 2041-2044 (2011)."
}]
  , $D = [{
    number: "90",
    authors: "B. Ding, H. Wu, W. Xu, Z. Zhao, Y. Liu, H. Yu*, H. Yan*",
    title: "Interconnecting Gold Islands with DNA Origami Nanotubes",
    journal: "Nano Lett. 10, 5065-5069 (2010)."
}, {
    number: "89",
    authors: "D. Han, S. Pal, Y. Liu*, H. Yan*",
    title: "Folding and Cutting DNA into Reconfigurable Topological Nanostructures",
    journal: "Nature Nanotechnol. 5, 712-717 (2010)."
}, {
    number: "88",
    authors: "Z. Deng, H. Yan, Y. Liu*",
    title: "Controlled Colloidal Growth of Ultra-Thin Single-Crystal ZnS Nanowires with Magic-Size Diameter",
    journal: "Angew. Chem. Int. Ed. 49, 8695-8698 (2010)."
}, {
    number: "87",
    authors: "Z. Li, M. Liu, L. Wang, J. Nangreave, H. Yan, Y. Liu*",
    title: "Molecular Behavior of DNA Origami in Higher Order Self-assembly",
    journal: "J. Am. Chem. Soc. 138, 13545-13552 (2010)."
}, {
    number: "86",
    authors: "H. Pei, N. Lu, Y. Wen, S. Song, Y. Liu, H. Yan*, C. Fan*",
    title: "A DNA Nanostructure-based Biomolecular Probe Carrier Platform for Electrochemical Biosensing",
    journal: "Advanced Materials, 22, 4754-4758 (2010)."
}, {
    number: "85",
    authors: "J. Nangreave, D. Han, Y. Liu, H. Yan*",
    title: "DNA Origami: A History and Current Perspective",
    journal: "Curr Opin Chem Biol 14, 608-615 (2010)."
}, {
    number: "84",
    authors: "N. Stephanopoulos, M. Liu, G. Tong, Z. Li, Y. Liu, H. Yan*, M. Francis*",
    title: "Immobilization and One-Dimensional Arrangement of Virus Capsids With Nanoscale Precision Using DNA Origami",
    journal: "Nano Lett. 10, 2714-2720 (2010)."
}, {
    number: "83",
    authors: "Z. Deng*, O. Schulz, S. Lin, B. Ding, X. Liu, X. Wei, R. Ros, H. Yan, Y. Liu*",
    title: "Aqueous Synthesis of Zinc-Blende CdTe/CdS Magic-Core/Thick-Shell Tetrahedral Shaped Nanocrystals with Emission Tunable to Near-Infrared",
    journal: "J. Am. Chem. Soc. 132, 5592-5593 (2010)."
}, {
    number: "82",
    authors: "K. Lund, A. J. Manzo, N. Dabby, N. Michelotti, A. Johnson-Buck, J. Nangreave, S. Taylor, R. Pei, M. N. Stojanovic*, N. G. Walter*, E. Winfree*, H. Yan*",
    title: "Molecular Robots Guided by Prescriptive Landscapes",
    journal: "Nature 465, 206-210 (2010)."
}, {
    number: "81",
    authors: "S. Pal, Z. Deng, B. Ding, H. Yan*, Y. Liu*",
    title: "DNA Origami Directed Self-assembly of Discrete Silver Nanoparticle Architectures",
    journal: "Angew. Chem. Int. Ed. 49, 2700-2704 (2010)."
}, {
    number: "80",
    authors: "B. Ding*, Z. Deng, H. Yan, S. Cabrini, R. Zuckermann, J. Bokor*",
    title: "Gold Nanoparticles Self-similar Chain Structure Organized by DNA Origami",
    journal: "J. Am. Chem. Soc. 132, 3248-3249 (2010)."
}, {
    number: "79",
    authors: "R. Chhabra, J. Sharma, Y. Liu, S. Rinker, H. Yan*",
    title: "DNA Self-assembly for Nanomedicine",
    journal: "Advanced Drug Delivery Reviews 62, 617-625 (2010)."
}, {
    number: "78",
    authors: "Z. Zhao, H. Yan*, Y. Liu*",
    title: "A Route to Scale up DNA Origami using DNA Tiles as Folding Staples",
    journal: "Angew. Chem. Int. Ed. 49, 1414-1417 (2010)."
}, {
    number: "77",
    authors: "Q. Wang*, H. Wang, C. Lin, J. Sharma, S. Zou*, Y. Liu*",
    title: "Photonic Interactions between Quantum Dots and Gold Nanoparticles in Discrete Nanostructures through DNA Directed Self-Assembly",
    journal: "Chem. Commun. 46, 240-242 (2010)."
}]
  , e3 = [{
    number: "76",
    authors: "Z. Deng*, H. Yan, Y. Liu*",
    title: "Band Gap Engineering of Quaternary Alloyed ZnCdSSe Quantum Dots via a Facile Phosphine-Free Colloidal Method",
    journal: "J. Am. Chem. Soc. 131, 17744-17745 (2009)."
}, {
    number: "75",
    authors: "R. Chhabra, J. Sharma, H. Wang, S. Zou, S. Lin, H. Yan, S. Lindsay*, Y. Liu*",
    title: "Distance-dependent interactions between gold nanoparticles and fluorescent molecules with DNA as tunable spacers",
    journal: "Nanotechnology 20, 485201 (2009)."
}, {
    number: "74",
    authors: "Y. Ke, S. M. Douglas, M. Liu, J. Sharma, A. Cheng, A. Leung, Y. Liu, W. M. Shih*, H. Yan*",
    title: "Multilayer DNA Origami Packed on a Square Lattice",
    journal: "J. Am. Chem. Soc. 131, 15903-15908 (2009)."
}, {
    number: "73",
    authors: "L. A. Stearns, R. Chhabra, J. Sharma, Y. Liu, W. T. Petuskey, H. Yan*, J. C. Chaput*",
    title: "Template-Directed Nucleation and Growth of Inorganic Nanoparticles on DNA Scaffolds",
    journal: "Angew. Chem. Int. Ed. 45, 8494-8496 (2009)."
}, {
    number: "72",
    authors: "S. Pal, H. Yan, Y. Liu*",
    title: "Stable Silver Nanoparticle-DNA Conjugates for Directed Self-assembly of Core-Satellite Silver-Gold Nanoclusters",
    journal: "Chem. Commun. 6059-6061 (2009)."
}, {
    number: "71",
    authors: "Z. Li, B. Wei, J. Nangreave, C. Lin, Y. Liu, Y. Mi*, H. Yan*",
    title: "A Replicable Tetrahedral Nanostructure Self-Assembled from a Single DNA Strand",
    journal: "J. Am. Chem. Soc. 131, 13093-13098 (2009)."
}, {
    number: "70",
    authors: "Y. Liu, H. Yan*",
    title: "Designer Curvature",
    journal: "Science 325, 685-686 (2009)."
}, {
    number: "69",
    authors: "Y. Liu, H. Yan*",
    title: "Coordinating Corners",
    journal: "Nature Chemistry 1, 339-340 (2009)."
}, {
    number: "68",
    authors: "C. S. Andersen, M. M. Knudsen, R. Chhabra, Y. Liu, H. Yan*, K. V. Gothelf*",
    title: "Distance Dependent Interhelical Couplings of Organic Rods Incorporated in DNA 4-Helix Bundles",
    journal: "Bioconjugate Chem. 20, 1538-1546 (2009)."
}, {
    number: "67",
    authors: "J. Nangreave, H. Yan*, Y. Liu*",
    title: "Studies of Thermal Stability of Multivalent DNA Hybridization in a Nanostructured System",
    journal: "Biophys. J. 97, 563-571 (2009)."
}, {
    number: "66",
    authors: "A. E. Gerdon, S.-S. Oh, W. Hsieh, Y. Ke, H. Yan*, H. T. Soh*",
    title: "Controlled Delivery of DNA Origami on Patterned Surface",
    journal: "Small 5, 1942-1946 (2009)."
}, {
    number: "65",
    authors: "Y. Ke, J. Sharma, M. Liu, K. Jahn, Y. Liu*, H. Yan*",
    title: "Scaffolded DNA Origami of a DNA Tetrahedron Molecular Container",
    journal: "Nano. Lett. 9, 2445-2447 (2009)."
}, {
    number: "64",
    authors: "C. Lin, H. Yan*",
    title: "DNA Nanotechnology: A Cascade of Activity",
    journal: "Nature Nanotechnol. 4, 211-212 (2009). Invited News & Views article."
}, {
    number: "63",
    authors: "C. Lin, Y. Liu, H. Yan*",
    title: "Designer DNA Nanoarchitectures",
    journal: "Biochemistry 48, 1663-1674 (2009)."
}, {
    number: "62",
    authors: "J. Sharma, R. Chhabra, A. Cheng, J. Brownell, Y. Liu*, H. Yan*",
    title: "Control of Self-Assembly of DNA Tubules Through Integration of Gold Nanoparticles",
    journal: "Science 323, 112-116 (2009)."
}, {
    number: "61",
    authors: "C. Lin, Y. Ke, Z. Liu, J. Wang, Y. Liu*, H. Yan*",
    title: "Designer Nanoarchitectures Self-assembled from Mirror Image DNA",
    journal: "Nano Lett. 9, 433-436 (2009)."
}]
  , t3 = [{
    number: "60",
    authors: "C. Lin, S. Rinker, X. Wang, Y. Liu, N. C. Seeman*, H. Yan*",
    title: "In-vivo Cloning of DNA Nanostructures",
    journal: "Proc. Natl. Acad. Sci. U.S.A. 105, 17626-17635 (2008)."
}, {
    number: "59",
    authors: "Z. Li, Y. Ke, C. Lin, H. Yan*, Y. Liu*",
    title: "Subtractive Assembly of DNA Nanoarchitectures Driven by Fuel Strand Displacement",
    journal: "Chem. Commun. 4318-4320 (2008)."
}, {
    number: "58",
    authors: "C. Lin, J. Nangreave, Z. Li, H. Yan*, Y. Liu*",
    title: "Signal Amplification on a DNA Tile based Biosensor with Enhanced Sensitivity",
    journal: "Nanomedicine 3, 521-528 (2008)."
}, {
    number: "57",
    authors: "Y. Xu, Q. Wang, P. He, Q. Dong, F. Liu, Y. Liu, L. Lin, H. Yan*, X. Zhao*",
    title: "Cell Nucleus Penetration by Quantum Dots Induced by Nuclear Staining Organic Fluorophore and UV-Irradiation",
    journal: "Advanced Materials 20, 3468-3473 (2008)."
}, {
    number: "56",
    authors: "J. Sharma, R. Chhabra, C. S. Anderson, K. V. Gothelf, H. Yan*, Y. Liu*",
    title: "Toward Reliable Gold Nanoparticle Patterning on Self-assembled DNA Nanoscaffold",
    journal: "J. Am. Chem. Soc. 130, 7820-2821 (2008)."
}, {
    number: "55",
    authors: "C. S. Anderson, H. Yan, K. V. Gothelf*",
    title: "Bridging One Helical Turn in dsDNA by Templated Dimerization of Molecular Rods",
    journal: "Angew. Chem. Int. Ed. 47, 5569-5572 (2008)."
}, {
    number: "54",
    authors: "J. Sharma, Y. Ke, C. Lin, R. Chhabra, Q. Wang, J. Nangreave, Y. Liu*, H. Yan*",
    title: "DNA Tile Directed Self-assembly of Quantum Dots into Two-dimensional Nanopatterns",
    journal: "Angew. Chem. Int. Ed. 47, 5157-5159 (2008)."
}, {
    number: "53",
    authors: "S. Rinker, Y. Ke, Y. Liu*, H. Yan*",
    title: "Self-assembled DNA Nanostructures for distance dependent multivalent ligand-protein binding",
    journal: "Nature Nanotechnol. 3, 418-422 (2008)."
}, {
    number: "52",
    authors: "Y. Ke, S. Lindsay, Y. Chang, Y. Liu, H. Yan*",
    title: "Self-assembled Water-soluble Nucleic Acid Probe Tiles for Label Free RNA Detection",
    journal: "Science 319, 180-183 (2008)."
}, {
    number: "51",
    authors: "J. Sharma, R. Chhabra, H. Yan, Y. Liu*",
    title: "A Facile In situ Generation of Dithiocarbamate Ligands for Stable Gold Nanoparticle-Oligonucleotide Conjugates",
    journal: "Chem. Commun. 18, 2140-2142 (2008)."
}, {
    number: "50",
    authors: "Q. Wang, Y. Liu, Y. Ke, H. Yan*",
    title: "Quantum Dots Bioconjugation During Core-Shell Synthesis",
    journal: "Angew. Chem. Int. Ed. 47, 316-319 (2008)."
}]
  , n3 = [{
    number: "49",
    authors: "C. Lin, X. Wang, Y. Liu, N. C. Seeman, H. Yan*",
    title: "Rolling Circle Enzymatic Replication of a Complex Multi-crossover DNA Nanostructure",
    journal: "J. Am. Chem. Soc. 129, 14475-14481 (2007)."
}, {
    number: "48",
    authors: "R. Chhabra, J. Sharma, Y. Ke, Y. Liu, S. Rinker, S. Lindsay, H. Yan*",
    title: "Spatially Addressable Multi-protein Nanoarrays Templated by Aptamer Tagged DNA Nanoarchitectures",
    journal: "J. Am. Chem. Soc. 129, 10304-10305 (2007)."
}, {
    number: "47",
    authors: "Q. Wang, Y. Liu, C. Lin, H. Yan*",
    title: "Lay-by-layer Growth of Superparamagnetic and fluorecently barcoded Nanospheres",
    journal: "Nanotechnology 18, 40, 405026 (2007)."
}, {
    number: "46",
    authors: "C. Lin, Y. Ke, Y. Liu, M. Mertig, J. Gu, H. Yan*",
    title: "Functional DNA Nanotube Arrays: Bottom-up Meets Top-down",
    journal: "Angew. Chem. Int. Ed. 46, 6089-6092 (2007)."
}, {
    number: "45",
    authors: "Q. Wang, Y. Liu, H. Yan*",
    title: "Mechanism of a Self-templating Synthesis of Monodispersed Hollow Silica Nanospheres with Tunable Size and Shell Thickness",
    journal: "Chem. Commun. 2339-2341 (2007)."
}, {
    number: "44",
    authors: "Q. Wang, Y. Xu, X. Zhao, Y. Chang, Y. Liu, L. Jiang, J. Sharma, D.-K. Seo*, H. Yan*",
    title: "A Facile One-step In situ Functionalization of Quantum Dots with Preserved Photoluminescence for Bioconjugation",
    journal: "J. Am. Chem. Soc.129, 6380-6381 (2007)."
}, {
    number: "43",
    authors: "B. Williams, K. Lund, Y. Liu, H. Yan*, J. Chaput*",
    title: "Self-assembled Peptide Nanoarrays: An Approach to Studying Protein-protein Interactions",
    journal: "Angew. Chem. Int. Ed. 46, 3051-3054 (2007)."
}, {
    number: "42",
    authors: "C. Lin, Y. Liu, H. Yan*",
    title: "Self-assembled Combinatorial Encoding Nanoarrays for Multiplexed Biosensing",
    journal: "Nano Lett. 7, 507-512 (2007)."
}, {
    number: "41",
    authors: "J. Sharma, R. Chhabra, H. Yan, Y. Liu*",
    title: "pH-driven Conformational Switch of i-motif DNA for Reversible Assembly of Gold Nanoparticles",
    journal: "Chem. Commun. 477-479 (2007)."
}]
  , a3 = [{
    number: "40",
    authors: "C. Lin, M. Xie, J. Chen, Y. Liu, H. Yan*",
    title: "Rolling Circle Amplification of a DNA Nano-junction",
    journal: "Angew. Chem. Int. Ed. 45, 7537-7539 (2006)."
}, {
    number: "39",
    authors: "C. Lin, E. Katilius*, Y. Liu, J. Zhang, H. Yan*",
    title: "Self-assembled Signaling Aptamer Nanoarrays for Protein Detection",
    journal: "Angew. Chem. Int. Ed. 45, 5296-5301 (2006)."
}, {
    number: "38",
    authors: "C. Lin, Y. Liu, S. Rinker, H. Yan*",
    title: "DNA Tile Based Self-assembly: Building Complex Nano-architectures",
    journal: "ChemPhysChem 7, 1641-1647 (2006)."
}, {
    number: "37",
    authors: "K. Lund, Y. Liu, H. Yan*",
    title: "Combinatorial Self-Assembly of DNA Nanostructures",
    journal: "Organic and Biomolecular Chemistry 4, 3402-3403 (2006)."
}, {
    number: "36",
    authors: "S. Rinker, Y. Liu, H. Yan*",
    title: "Two Dimensional LNA/DNA arrays: Estimating the Helicity of LNA/DNA Hybrid Duplex",
    journal: "Chem. Commun. 2675-2677 (2006)."
}, {
    number: "35",
    authors: "R. Chhabra, J. Sharma, Y. Liu, H. Yan*",
    title: "Addressable Molecular Tweezers for DNA Templated Coupling Reactions",
    journal: "Nano Lett. 6, 978-983 (2006)."
}, {
    number: "34",
    authors: "L. Lin, H. Wang, Y. Liu, H. Yan, S. Lindsay*",
    title: "Recognition Imaging with a DNA Aptamer",
    journal: "Biophysical J. 90, 4236-4238 (2006)."
}, {
    number: "33",
    authors: "K. Lund, B. Williams, Y. Ke, Y. Liu, H. Yan*",
    title: "DNA Nanotechnology: a rapidly evolving field",
    journal: "Current Nanoscience 2, 113-122 (2006)."
}, {
    number: "32",
    authors: "Y. Ke, Y. Liu, J. Zhang, H. Yan*",
    title: "A Study of DNA Tube Formation Mechanisms Using 4-, 8- and 12-Helix DNA Nanostructures",
    journal: "J. Am. Chem. Soc. 128, 4414-4421 (2006)."
}, {
    number: "31",
    authors: "J. Zhang, Y, Liu, Y. Ke, H. Yan*",
    title: "Periodic Square-like Gold Nanoparticle Arrays Templated by a DNA Nanogrids on a Surface",
    journal: "Nano Lett. 6, 248-251 (2006)."
}, {
    number: "30",
    authors: "H. Yan*, B. Xu",
    title: "Towards Rapid DNA Sequencing: Detecting Single-Stranded DNA with a Solid-State Nanopore",
    journal: "Small 2, 310-312 (2006)."
}, {
    number: "29",
    authors: "J. Sharma, R. Chhabra, Y. Liu, Y. Ke, H. Yan*",
    title: "DNA Templated Self-assembly of Two-Dimensional and Periodical Gold Nanoparticle Arrays",
    journal: "Angew. Chem. Int. Ed. 45, 730-735 (2006)."
}]
  , i3 = [{
    number: "28",
    authors: "K. Lund, Y. Liu, S. Lindsay, H. Yan*",
    title: "Self-assembling Molecular Pegboard",
    journal: "J. Am. Chem. Soc. 127, 17606-17607 (2005)."
}, {
    number: "27",
    authors: "Y. Liu, Y. Ke, H. Yan*",
    title: "Self-assembly of Symmetric Finite Size DNA Nanoarrays",
    journal: "J. Am. Chem. Soc. 127, 17140-17141 (2005)."
}, {
    number: "26",
    authors: "Y. Liu, C. Lin, H. Li, H. Yan*",
    title: "Aptamer Directed Self-assembly of Proteins on a DNA Nanostructure",
    journal: "Angew. Chem. Int. Ed. 44, 4333 (2005)."
}, {
    number: "25",
    authors: "S. H. Park, P. Yin, Y. Liu, J. Reif, T. H. LaBean, H. Yan*",
    title: "Programmable DNA Self-assemblies for Nanoscale Organization of Ligands and Proteins",
    journal: "Nano Lett. 5, 729 (2005)."
}, {
    number: "24",
    authors: "S. H. Park, R. Barish, H. Li, J. H. Reif, G. Finkelstein, H. Yan*, T. H. LaBean*",
    title: "Three Helix Bundle DNA Tiles Self-assemble into 2D Lattice or 1D Templates for Silver Nanowires",
    journal: "Nano Lett. 5, 693 (2005)."
}, {
    number: "23",
    authors: "Y. Liu, H. Yan*",
    title: "Modular Self-assembly of DNA Lattice with Tunable Periodicity",
    journal: "Small 1, 327-330 (2005)."
}, {
    number: "22",
    authors: "J. H. Reif*, T. H. LaBean, S. Sahu, H. Yan, P. Yin",
    title: "Design, Simulation, and Experimental Demonstration of Self-assembled DNA Nanostructures and Motors",
    journal: "UPP2004, LNCS 3566, Springer-Verlag Berlin Heidelberg, pp. 173-187 (2005)."
}, {
    number: "21",
    authors: "N. C. Seeman*, B. Ding, S. Liao, T. Wang, W. B. Sherman, P. E. Constantinou, J. Kopatsch, C. Mao, R. Sha, F. Liu, H. Yan, P. S. Lukeman",
    title: "Experiments in Structural DNA Nanotechnology: Arrays and Devices",
    journal: "Proc. SPIE; Nanofabrication: Technologies, Devices and Applications 5592, 71-81 (2005)."
}, {
    number: "20",
    authors: "Sha, R., Zhang, X., Liao, S., Constantinou, P. E., Ding, B., Wang, T., Garibotti, A. V., Zhong, H., Israel, L. B., Wang, X., Wu, G., Chakraborty, B., Chen, J., Zhang, Y., Mao, C., Yan, H., Kopatsch, J., Zheng, J., Lukeman, P. S., Sherman, W. B., Seeman, N. C.*",
    title: "Motifs and Methods in Structural DNA Nanotechnology",
    journal: "Proc. Intl. Conf. Nanomaterials, NANO 2005, V. Rajendran, pp. 3-10 (2005)."
}]
  , r3 = [{
    number: "19",
    authors: "H. Yan*",
    title: "Nucleic Acid Technology",
    journal: "Science, 306, 2048-2049 (2004)."
}, {
    number: "18",
    authors: "S. H. Park, H. Yan, J.H. Reif, T. H. LaBean, G. Finkelstein*",
    title: "Electronic Nanostructures Templated on Self-assembled DNA Scaffolds",
    journal: "Nanotechnology 15, S525-S527 (2004)."
}, {
    number: "17",
    authors: "H. Yan*, P. Yin, S. H. Park, H. Li, L. Feng, X. Guan, D. Liu, J. H. Reif, T. H. LaBean",
    title: "Self-Assembled DNA Structures for Nanoconstruction",
    journal: "AIP Proceedings 725 (DNA-Based Molecular Electronics), 43-52 (2004)."
}, {
    number: "16",
    authors: "P. Yin, H. Yan*, X.J. Guan, A.J. Turberfield*, J. H. Reif*",
    title: "An Autonomous Unidirectional DNA Walker",
    journal: "Angew. Chem. Int. Ed. 43, 4906-4911 (2004)."
}, {
    number: "15",
    authors: "H. Li, S. H. Park, J. H. Reif, T. H. LaBean, H. Yan*",
    title: "DNA Templated Self-Assembly Of Protein And Nanoparticle Linear Arrays",
    journal: "J. Am. Chem. Soc. 126, 418 (2004)."
}, {
    number: "14",
    authors: "Z. Shen, H. Yan, T. Wang, N. C. Seeman*",
    title: "Paranemic Crossover DNA: A Generalized Holliday Structure with Applications in Nanotechnology",
    journal: "J. Am. Chem. Soc. 126, 1666 (2004)."
}]
  , l3 = [{
    number: "13",
    authors: "H. Yan*, L. Feng, T. H. LaBean, J. H. Reif*",
    title: "Parallel Molecular Computation of Pair-wise Exclusive-Or (XOR) Using DNA String Tile Self-Assembly",
    journal: "J. Am. Chem. Soc. 125, 14246 (2003)."
}, {
    number: "12",
    authors: "H. Yan*, S. H. Park, G. Finkelstein, J. H. Reif, T. H. LaBean*",
    title: "DNA Templated Self-assembly of Protein Arrays and Highly Conductive Nanowires",
    journal: "Science, 301, 1882 (2003)."
}, {
    number: "11",
    authors: "L. Feng, S. H. Park, J. H. Reif, H. Yan*",
    title: "A Two-State DNA Lattice Switched By DNA Nanoactuator",
    journal: "Angew. Chem. Int. Ed. 42, 4342 (2003)."
}, {
    number: "10",
    authors: "H. Yan, T. H. LaBean, L. Feng, J. H. Reif*",
    title: "Directed Nucleation Assembly of DNA Tile Complexes for Barcode Patterned Lattices",
    journal: "Proc. Natl. Acad. Sci. U.S.A. 100, 8103 (2003)."
}, {
    number: "9",
    authors: "H. Yan, N. C. Seeman*",
    title: "Edge-Sharing DNA Triangles And One-Dimensional Self-Assembly",
    journal: "J. Supramol. Chem., 1, 229-237 (2003)."
}]
  , o3 = [{
    number: "8",
    authors: "X. Zhang, H. Yan, Z. Shen, N. C. Seeman*",
    title: "Paranemic Cohesion of Topologically-Closed DNA Molecules",
    journal: "J. Am. Chem. Soc. 124, 12940-12941 (2002)."
}, {
    number: "7",
    authors: "H. Yan, X. Yang, Z. Shen, N. C. Seeman*",
    title: "A Robust Sequence-dependent Rotary DNA Device",
    journal: "Nature, 415, 62-65 (2002)."
}, {
    number: "6",
    authors: "T. H. LaBean, H. Yan, J. Kopatsch, F. Liu, E. Winfree, J. H. Reif, N. C. Seeman*",
    title: "The Construction, Analysis, Ligation and Self-assembly of DNA Triple Crossover Molecules",
    journal: "J. Am. Chem. Soc. 122, 1848-1860 (2000)."
}, {
    number: "5",
    authors: "N. C. Seeman, H. Wang, X. Yang, F. Liu, C. Mao, W. Sun, L. Wenzler, Z. Shen, R. Sha, H. Yan, M.H. Wong, P. Sa-Ardyen, B. Liu, H. Qiu, X. Li, J. Qi, S.M. Du, Y. Zhang, J.E. Mueller, T.-J. Fu, Y. Wang, J. Chen",
    title: "New Motifs in DNA Nanotechnology",
    journal: "Nanotechnology 9, 257-273 (1998)."
}, {
    number: "4",
    authors: "Y. Ma, Q. Wang*, H. Yan, X. Ji, Q. Qiu",
    title: "Zeolite-Catalyzed Esterification. 1. Synthesis Of Acetates, Benzoates And Phthalates",
    journal: "Appl. Catal. 139, 51-57 (1996)."
}, {
    number: "3",
    authors: "Q. Wang*, Y. Ma, X. Ji, H. Yan, Q. Qiu",
    title: "Zeolite-Catalyzed Friedel-Crafts Acylation Of Aromatics. 1. Synthesis Of 4-Acyl Anisole With A HY Catalyst",
    journal: "Chin. Chem. Lett. 7, 99-102 (1996)."
}, {
    number: "2",
    authors: "Q. Wang*, Y. Ma, X. Ji, H. Yan, Q. Qiu",
    title: "Regioselective Acylation Of Anisole With Carboxylic-Acid Over HZSM-5 Catalyst",
    journal: "J. Chem. Soc. Chem. Comm. 22, 2307-2308 (1995)."
}]
  , s3 = [{
    number: "148",
    authors: "K. Pan, D. N. Kim, F. Zhang, M. Adendorff, H. Yan*, M. Bathe*",
    title: "Lattice-free prediction of three-dimensional structure of programmed DNA assemblies.",
    journal: "Nature Commun. 5, 5078, (2014)."
}, {
    number: "147",
    authors: "P. Dutta, S. Levenberg, A. Loskutov, D. Jun, R. Saer, J. Beatty, S. Lin, Y. Liu*, N. Woodbury*, H. Yan*",
    title: "A DNA-Directed Light-Harvesting/Reaction Center System",
    journal: "J. Am. Chem. Soc. 136, 16618-16625 (2014)."
}, {
    number: "146",
    authors: "A. Samanta, Y. Zhou, S. Zou, H. Yan, Y. Liu*",
    title: "Fluorescence Quenching of Quantum Dots by Gold Nanoparticles: a Potential Long Range Spectroscopic Ruler",
    journal: "Nano Letters 14, 5052-5057, (2014)."
}, {
    number: "145",
    authors: "F. Zhang, J. Nangreave, Y. Liu, H. Yan*",
    title: "Structural DNA Nanotechnology: State of the Art and Future Perspective",
    journal: "J. Am. Chem. Soc. 136, 11198-11211, (2014)."
}, {
    number: "144",
    authors: "D. Wang, S. Capehart, S. Pal, M. Liu, L. Zhang, J. Schuck, Y. Liu, H. Yan, M. Francis, J. De Yoreo*",
    title: "Hierarchical Assembly of Plasmonic Nanostructures using Virus Capsid Scaffolds on DNA Origami Templates",
    journal: "ACS Nano 8, 7896-7904, (2014)."
}, {
    number: "143",
    authors: "X. Wei, J. Nangreave, Y. Liu*",
    title: "Uncovering the Self-Assembly of DNA Nanostructures by Thermodynamics and Kinetics",
    journal: "Accounts Chem. Res. 47, 1861-1870, (2014)."
}, {
    number: "142",
    authors: "J. Flory, C. Simmons, S. Lin, T. Jonhson, A. Andreoni, J. Zook, G. Chirlanda, Y. Liu, H. Yan, and P. Fromme*",
    title: "Low Temperature Assembly of Functional 3D DNA-PNA-Protein Complexes",
    journal: "J. Am. Chem. Soc. 136, 8283-8295, (2014)."
}, {
    number: "141",
    authors: "A. Johnson-Buck, S. Jiang, H. Yan, and N. G. Walter*",
    title: "DNA-Cholesterol Barges as Programmable Membrane-Exploring Agents",
    journal: "ACS Nano 8, 5641-5649, (2014)."
}, {
    number: "140",
    authors: "L. Liang, J. Li, Q. Li, Q. Huang, J. Shi, H. Yan, and C. Fan*",
    title: "Single-particle Tracking and Modulation of Cell Entry Pathways of a Tetrahedral DNA Nanostructure in Live Cells",
    journal: "Angew Chem Int Ed. 126, 7879-7884, (2014)."
}, {
    number: "139",
    authors: "J. Fu*, Y. R. Yang, A. Johnson-Buck, Y. Liu, N. G. Walter, N. W. Woodbury, and H. Yan*",
    title: "Multi-enzyme Complexes on DNA Scaffolds Capable of Substrate Channeling with an Artificial Swinging Arm",
    journal: "Nature Nanotechnol. 9, 531-536, (2014)."
}, {
    number: "138",
    authors: "S. Jiang, H. Yan, and Y. Liu*",
    title: "Kinetics of DNA Tile Dimerization",
    journal: "ACS Nano. 8, 5826-5832, (2014)."
}, {
    number: "137",
    authors: "P. K. Dutta, S. Lin, A. Loskutov, S. Levenberg, R. Saer, J. T. Beatty, Y. Liu, H. Yan,* N. Woodbury*",
    title: "An Engineered System to Enhance and Control the Absorption Cross-section of Photosynthetic Reaction Center",
    journal: "J. Am. Chem. Soc. 136, 4599-4604, (2014)."
}, {
    number: "136",
    authors: "W. Li, Y. Yang, S. Jiang, H. Yan, Y. Liu*",
    title: "Controlled Nucleation and Growth of DNA Tile Arrays within Prescribed DNA Origami Frames and Their Dynamics",
    journal: "J. Am. Chem. Soc. 136, 3724-3727, (2014)."
}, {
    number: "135",
    authors: "A. Samanta, Z. Deng, Y. Liu*",
    title: "Infrared Emitting Quantum Dots: DNA Conjugation and DNA Origami Directed Self-Assembly",
    journal: "Nano Scale 6, 4486-4490, (2014)."
}]
  , u3 = () => c.jsx("div", {
    className: "publications-page",
    children: c.jsxs("div", {
        className: "publications-container",
        style: {
            maxWidth: "900px",
            margin: "96px auto 48px auto",
            background: "rgba(255,255,255,0.65)",
            borderRadius: "0",
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
            padding: "0 32px 48px 32px",
            backdropFilter: "blur(6px)"
        },
        children: [c.jsxs("div", {
            className: "publications-hero",
            style: {
                padding: "48px 0 0 0",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem",
                flexDirection: "column"
            },
            children: [c.jsxs("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.2rem",
                    width: "100%"
                },
                children: [c.jsx("h1", {
                    style: {
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "#232946",
                        marginBottom: "0.5rem",
                        letterSpacing: "-1px",
                        fontFamily: "Inter, Arial, sans-serif"
                    },
                    children: "Publications"
                }), c.jsxs("select", {
                    style: {
                        fontSize: "1.2rem",
                        padding: "0.3rem 1.2rem",
                        borderRadius: "6px",
                        border: "1px solid #232946",
                        marginLeft: "0.5rem",
                        background: "#fff",
                        color: "#232946",
                        fontWeight: 500,
                        cursor: "pointer"
                    },
                    onChange: n => {
                        const i = n.target.value
                          , l = document.getElementById(`publications-${i}`);
                        l && l.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }
                    ,
                    defaultValue: "",
                    children: [c.jsx("option", {
                        value: "",
                        disabled: !0,
                        children: "Select Year"
                    }), Array.from({
                        length: 23
                    }, (n, i) => 2025 - i).map(n => c.jsx("option", {
                        value: n,
                        children: n
                    }, n)), c.jsx("option", {
                        value: "2002Before",
                        children: "2002 and Before"
                    })]
                })]
            }), c.jsx("div", {
                style: {
                    width: "100%",
                    overflow: "hidden",
                    margin: "0 auto",
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                    display: "flex",
                    justifyContent: "center"
                },
                children: c.jsx("div", {
                    id: "covers-carousel",
                    style: {
                        display: "flex",
                        gap: "1.2rem",
                        animation: "carousel-move 36s linear infinite"
                    },
                    children: [...Array(2)].flatMap( () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]).map(n => c.jsx("img", {
                        src: `/cover-${n}.jpg`,
                        alt: `Cover ${n}`,
                        style: {
                            height: "3in",
                            width: "auto",
                            borderRadius: "0px",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.12)"
                        }
                    }, n + Math.random()))
                })
            }), c.jsx("style", {
                children: `
          @keyframes carousel-move {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          #covers-carousel {
            width: max-content;
          }
        `
            })]
        }), c.jsxs("div", {
            className: "publications-list",
            style: {
                marginTop: "32px"
            },
            children: [c.jsx("h2", {
                id: "publications-2025",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2025"
            }), FD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        let i = n.journal.replace(/"/g, "");
                        i = i.replace(/DOI:\s*10\.[^ )]+(\s*)?/gi, ""),
                        i = i.replace(/DOI:\s*10\.1002\/cbic\.201700613(\s*)?/gi, ""),
                        i = i.replace(/DOI:\s*/gi, "");
                        const l = i.match(/^([A-Za-z .]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i;
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2024",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2024"
            }), UD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2023",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2023"
            }), VD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2022",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2022"
            }), _D.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2021",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2021"
            }), WD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2020",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2020"
            }), ZD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2019",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2019"
            }), GD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2018",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2018"
            }), kD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2017",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2017"
            }), XD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2016",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2016"
            }), JD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2015",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2015"
            }), qD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2014",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2014"
            }), s3.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2013",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2013"
            }), ID.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2012",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2012"
            }), KD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2011",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2011"
            }), QD.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2010",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2010"
            }), $D.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2009",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2009"
            }), e3.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2008",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2008"
            }), t3.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2007",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2007"
            }), n3.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2006",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2006"
            }), a3.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2005",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2005"
            }), i3.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2004",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2004"
            }), r3.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2003",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2003"
            }), l3.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number)), c.jsx("h2", {
                id: "publications-2002Before",
                style: {
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#232946",
                    margin: "32px 0 16px 0",
                    fontFamily: "Inter, Arial, sans-serif"
                },
                children: "2002 and Before"
            }), o3.map(n => c.jsxs("div", {
                style: {
                    marginBottom: "18px"
                },
                children: [c.jsxs("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        fontSize: "1.05rem",
                        color: "#232946",
                        fontWeight: 400,
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: [c.jsxs("span", {
                        style: {
                            fontWeight: 700
                        },
                        children: [n.number, "."]
                    }), " ", n.authors]
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "2px",
                        lineHeight: 1.5
                    },
                    children: n.title
                }), c.jsx("div", {
                    style: {
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#232946",
                        fontWeight: 400,
                        fontSize: "1.05rem",
                        marginBottom: "0px",
                        lineHeight: 1.5
                    },
                    children: ( () => {
                        const i = n.journal.replace(/"/g, "")
                          , l = i.match(/^([^,.]+)/)
                          , o = l ? l[1] : ""
                          , u = o ? i.slice(o.length) : i
                          , d = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i
                          , h = u.match(d);
                        if (h) {
                            const p = h[1] ? h[1] : ""
                              , m = h[2] ? h[2] : h[0].replace(/^DOI:\s*/, "")
                              , g = `https://doi.org/${m}`
                              , b = h.index || 0
                              , x = b + h[0].length;
                            return c.jsxs("span", {
                                children: [c.jsx("span", {
                                    style: {
                                        fontWeight: 700
                                    },
                                    children: o
                                }), u.slice(0, b), p, c.jsx("a", {
                                    href: g,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        color: "#4a90e2",
                                        textDecoration: "none",
                                        fontWeight: 400
                                    },
                                    children: m
                                }), u.slice(x)]
                            })
                        }
                        return c.jsxs("span", {
                            children: [c.jsx("span", {
                                style: {
                                    fontWeight: 700
                                },
                                children: o
                            }), u]
                        })
                    }
                    )()
                })]
            }, n.number))]
        })]
    })
})
  , c3 = () => {
    const n = [{
        date: "2025-10-31",
        type: "defense",
        title: "Dr. Deeksha Satyabola Successfully Defends Ph.D. Thesis",
        description: "Deeksha Satyabola successfully defended his Ph.D. thesis. Congratulations, Dr. Deeksha. She is moving to Johnson & Johnson as a Post doctoral fellow. Best wishes!",
        color: "#10b981"
    }, {
        date: "2025-02-01",
        type: "award",
        title: "Prof. Hao Yan Bestowed as Regents Professor",
        description: "Prof. Hao Yan has been bestowed as the Regents Professor, highest faculty honor awarded at Arizona State University. Many Congratulations!",
        color: "#f59e0b"
    }, {
        date: "2024-11-01",
        type: "defense",
        title: "Dr. Liangxiao Chen Successfully Defends Ph.D. Thesis",
        description: "Liangxiao Chen successfully defended his Ph.D. thesis. Congratulations, Dr. Chen! He is moving to Wyss Institute at Harvard as a Post doctoral fellow. Best wishes!",
        color: "#10b981"
    }, {
        date: "2024-07-01",
        type: "award",
        title: "Prof. Hao Yan Elected Foreign Member of European Academy of Sciences",
        description: "Dr. Hao Yan has been Elected Foreign Member by the European Academy of Sciences, 2024. Many congratulations, Prof. Yan!",
        color: "#f59e0b"
    }, {
        date: "2024-05-15",
        type: "defense",
        title: "Dr. Lu Yu Successfully Defends Ph.D. Thesis",
        description: "Lu Yu successfully defended her Ph.D. thesis. Congratulations, Dr. Yu! She is moving to UWash as a Post doctoral fellow. You will do great!",
        color: "#10b981"
    }, {
        date: "2024-05-01",
        type: "award",
        title: "Outstanding Graduate Research Assistant Awards",
        description: "Lu Yu and Abhay Prasad are awarded the Outstanding Graduate Research Assistant in School of Molecular Sciences. Congratulations, Lu and Abhay! Keep shining!",
        color: "#ef4444"
    }, {
        date: "2023-12-01",
        type: "award",
        title: "Humboldt Research Award",
        description: "Dr. Hao Yan was awarded the Humboldt Research Award by Alexander von Humboldt Foundation, 2023. Big news, Huge Congratulations! from the lab",
        color: "#f59e0b"
    }, {
        date: "2023-10-01",
        type: "award",
        title: "World's Top 2% Scientists List",
        description: "Dr. Hao Yan was named to the World's Top 2% Scientists' list ranked by Stanford University for the 4th consecutive years. Great news, Congratulations Prof. Yan!",
        color: "#f59e0b"
    }, {
        date: "2023-05-01",
        type: "defense",
        title: "Dr. Leeza Abraham Successfully Defends Ph.D. Thesis",
        description: "Leeza has successfully defended her Ph.D. thesis. Congratulations, Dr. Abraham! Leeza will use her expertise to work in Exodigm Biosciences, Inc. (Dr. Hao and Rizal's start-up). Good luck for your future work!",
        color: "#10b981"
    }, {
        date: "2023-04-15",
        type: "defense",
        title: "Dr. Yue Tang Successfully Defends Ph.D. Thesis",
        description: "Yue has successfully defended his Ph.D. thesis. Congratulations, Dr. Tang! Yue is moving to Shandong University as a faculty starting in August, 2023. Best wishes.",
        color: "#10b981"
    }, {
        date: "2023-04-10",
        type: "defense",
        title: "Dr. Hao Liu Successfully Defends Ph.D. Thesis",
        description: "Hao Liu has successfully defended his Ph.D. thesis. Congratulations, Dr. Liu! Hao will be a Post-Doc in Dr. Petr Sulc group at ASU. Wishing you all the best.",
        color: "#10b981"
    }, {
        date: "2023-04-08",
        type: "award",
        title: "Best Poster Award at FNANO23",
        description: "Hao Liu was awarded the best poster awarded in the Foundations of Nanosciences (FNANO23) in Snowbird, Utah. Good job, Hao!",
        color: "#ef4444"
    }, {
        date: "2023-04-05",
        type: "award",
        title: "Outstanding Teaching Assistant Award",
        description: "Leeza Abraham was awarded the Outstanding Teaching Assistant in School of Molecular Sciences. Congratulations, Leeza!",
        color: "#ef4444"
    }, {
        date: "2023-04-03",
        type: "award",
        title: "Outstanding Graduate Research Assistant Award",
        description: "Hao Liu was awarded the Outstanding Graduate Research Assistant in School of Molecular Sciences. Congratulations, Hao!",
        color: "#ef4444"
    }, {
        date: "2023-04-01",
        type: "award",
        title: "Le Roy Eyring Fellowship",
        description: "Deeksha was awarded the Le Roy Eyring Fellowship by the School of Molecular Sciences. Congratulations, Deeksha!",
        color: "#ef4444"
    }, {
        date: "2023-03-01",
        type: "award",
        title: "College of Fellows of American Institute for Medical and Biological Engineering",
        description: "Dr. Hao Yan was elected to the College of Fellows of the American Institute for Medical and Biological Engineering. Many congratulations, Prof. Yan!",
        color: "#f59e0b"
    }, {
        date: "2022-12-01",
        type: "award",
        title: "Fellow of National Academy of Inventors",
        description: "Prof. Yan was elected as Fellow of the National Academy of Inventors. Congratulations, Prof. Yan!",
        color: "#f59e0b"
    }, {
        date: "2022-10-01",
        type: "award",
        title: "Web of Science 2022 Highly Cited Researcher",
        description: "Prof. Yan was recognized as Web of Science 2022 Highly Cited Researcher in Cross-Field. Congratulations, Prof. Yan!",
        color: "#f59e0b"
    }, {
        date: "2022-07-01",
        type: "defense",
        title: "Dr. Erik Poppleton Successfully Defends Ph.D. Thesis",
        description: "Erik has successfully defended his Ph.D. thesis. Congratulations, Dr. Poppleton! Erik is moving to Max Planck Institute for Medical Research as a Postdoc Fellow.",
        color: "#10b981"
    }, {
        date: "2022-01-15",
        type: "appointment",
        title: "Dr. Xiaodong Qi Joins Element Biosciences",
        description: "Xiaodong is moving to Element Biosciences as a Research Scientist. Congratulations, Dr. Qi and thank you for serving as a bio-master and all the efforts of managing the lab!",
        color: "#8b5cf6"
    }, {
        date: "2022-01-01",
        type: "appointment",
        title: "Dr. Xu Zhou Joins University of Wisconsin",
        description: "Xu is moving to University of Wisconsin, Madison as a Postdoc Fellow. Good luck Xu and we wish you all the best in your future endeavors!",
        color: "#8b5cf6"
    }, {
        date: "2021-09-01",
        type: "appointment",
        title: "Dr. Renee Yang Starts Tenure Track Position",
        description: "Congratulations to Renee, our former Ph.D. student who will start her tenure track position in The National Center for Nanoscience and Technology this Fall. Congratulations, Dr. Renee Yang!",
        color: "#8b5cf6"
    }, {
        date: "2021-08-01",
        type: "appointment",
        title: "Dr. Guangbao Yao Starts Tenure Track Position",
        description: "Congratulations to Guangbao, our former Postdoc who will start his tenure track position in Shanghai Jiaotong University this Fall. Congratulations, Dr. Guangbao Yao!",
        color: "#8b5cf6"
    }, {
        date: "2021-07-01",
        type: "appointment",
        title: "Dr. Shuoxing Jiang Starts Tenure Track Position",
        description: "Shuoxing will start his tenure track position in Nanjing University this Fall. Congratulations, Dr. Shuoxing Jiang and thank you for all the hard work you have put in and outstanding contribution to the Yan lab!",
        color: "#8b5cf6"
    }, {
        date: "2021-04-15",
        type: "defense",
        title: "Dr. Swarup Dey Successfully Defends Ph.D. Thesis",
        description: "Swarup has successfully defended his Ph.D. theses. Congratulations, Dr. Dey! Swarup is moving to Harvard University as a Postdoc Fellow.",
        color: "#10b981"
    }, {
        date: "2021-04-10",
        type: "defense",
        title: "Dr. Raghu Narayanan Successfully Defends Ph.D. Thesis",
        description: "Raghu has successfully defended his Ph.D. theses. Congratulations, Dr. Narayanan! is moving to UCSF as a Postdoc Fellow.",
        color: "#10b981"
    }, {
        date: "2021-04-05",
        type: "defense",
        title: "Dr. Xu Zhou Successfully Defends Ph.D. Thesis",
        description: "Xu has successfully defended his Ph.D. theses. Congratulations, Dr. Zhou!",
        color: "#10b981"
    }, {
        date: "2021-03-01",
        type: "award",
        title: "Outstanding Graduate Research Assistant Award",
        description: "Xu Zhou was awarded the Outstanding Graduate Research Assistant in School of Molecular Sciences. Congratulations, Xu!",
        color: "#ef4444"
    }, {
        date: "2021-02-01",
        type: "appointment",
        title: "Associate Editor for Science Advances",
        description: "Prof. Hao Yan began to serve as Associate Editor for Science Advances.",
        color: "#3b82f6"
    }, {
        date: "2021-01-01",
        type: "appointment",
        title: "Associate Editor for ACS Applied Biomaterials",
        description: "Prof. Hao Yan began to serve as Associate Editor for ACS Applied Biomaterials.",
        color: "#3b82f6"
    }, {
        date: "2020-12-01",
        type: "award",
        title: "2020 Foresight Institute Feynman Prize",
        description: "Prof. Hao Yan received the 2020 Foresight Institute Feynman Prize for his significant contributions to the science of using nucleic acids as designer molecular building blocks for programmable molecular self-assembly. Congratulations, Prof. Yan!",
        color: "#f59e0b"
    }, {
        date: "2020-07-01",
        type: "award",
        title: "School of Molecular Sciences Innovation Award",
        description: "Swarup Dey has been awarded the 2020 School of Molecular Sciences Innovation Award. Congratulations, Swarup!",
        color: "#ef4444"
    }, {
        date: "2019-12-01",
        type: "award",
        title: "Multiple Prestigious Awards and Recognition",
        description: "Prof. Hao Yan is elected as the Fellow of American Association for the Advancement of Science (AAAS), Fast Company's 100 Most Creative People in Business 2019, and Web of Science 2018 & 2019 Highly Cited Researcher in Cross-Field. Congratulations, Prof. Yan!",
        color: "#f59e0b"
    }, {
        date: "2019-05-15",
        type: "publication",
        title: "JACS Front Cover Publication",
        description: "Xu Zhou's paper on DNA templated excitonic energy transfer graced the front cover of JACS. Congratulations, Xu and all the co-authors.",
        color: "#3b82f6"
    }, {
        date: "2019-05-01",
        type: "conference",
        title: "Biodesign Center Symposium Success",
        description: "Biodesign Center for Molecular Design and Biomimetics has a successful 2nd annual center symposium. Go CMDB!",
        color: "#10b981"
    }, {
        date: "2019-04-15",
        type: "defense",
        title: "Dr. Fan Hong Successfully Defends Ph.D. Thesis",
        description: "Fan has successfully defended his Ph.D theses. Congratulations, Dr. Fan Hong is moving to Harvard University as a Postdoc Fellow.",
        color: "#10b981"
    }, {
        date: "2019-04-10",
        type: "defense",
        title: "Dr. Yu Zhou Successfully Defends Ph.D. Thesis",
        description: "Yu has successfully defended his Ph.D theses. Congratulations, Dr. Yu Zhou is will become a Postdoc Fellow in Prof. Alexander Green's lab.",
        color: "#10b981"
    }, {
        date: "2019-03-01",
        type: "appointment",
        title: "Dr. Fei Zhang Starts Tenure Track Position",
        description: "Fei will start her tenure track position in Rutgers University, Newark this Fall. Congratulations, Dr. Fei Zhang and thank you for what you have done in the Yan lab as a master of nucleic acid designer.",
        color: "#8b5cf6"
    }, {
        date: "2018-08-01",
        type: "appointment",
        title: "Dr. Suchetan Pal Becomes Assistant Professor",
        description: "Congratulations to Dr. Suchetan Pal, our former Ph.D. student who becomes an assistant professor in IIT Bhilai and will start a new academic journey in India.",
        color: "#8b5cf6"
    }, {
        date: "2018-04-15",
        type: "award",
        title: "Dirks Prize for Molecular Programming",
        description: "Given by the International Society for Nanoscale Science, Computation and Engineering, the Dirks Prize will recognize exceptional early-career achievement by a researcher working in any area of molecular programming, whether theory, experiment, computation, or a combination thereof. Congratulations to Fei who is the 2018 recipient and invited by ISNSCE to present a Prize Lecture at FNANO.",
        color: "#f59e0b"
    }, {
        date: "2018-04-01",
        type: "defense",
        title: "Dr. Saswata Banerjee Successfully Defends Ph.D. Thesis",
        description: "Saswata has successfully defended his Ph.D theses. Congratulations, Dr. Banerjee! Saswata is moving to Columbia University as a Postdoc Fellow.",
        color: "#10b981"
    }, {
        date: "2016-04-15",
        type: "defense",
        title: "Dr. Shuoxing Jiang Successfully Defends Ph.D. Thesis",
        description: "Shuoxing has successfully defended his Ph.D theses. Congratulations, Dr. Jiang!",
        color: "#10b981"
    }, {
        date: "2016-04-01",
        type: "defense",
        title: "Dr. Renee Yang Successfully Defends Ph.D. Thesis",
        description: "Renee has successfully defended her Ph.D theses. Congratulations, Dr. Yang!",
        color: "#10b981"
    }, {
        date: "2015-04-01",
        type: "defense",
        title: "Dr. Fei Zhang Successfully Defends Ph.D. Thesis",
        description: "Fei has successfully defended her Ph.D theses. Congratulations, Dr. Zhang!",
        color: "#10b981"
    }, {
        date: "2014-11-01",
        type: "award",
        title: "ASU NanoDevils Win Gold Medal at BIOMOD",
        description: "Our ASU NanoDevils team won the Gold medal for their project and the Second place in the category of the Best Youtube Videos at this year's BIOMOD competition held at Harvard University. Congratulations ASU NanoDevils!",
        color: "#f59e0b"
    }, {
        date: "2014-08-01",
        type: "appointment",
        title: "Dr. Zhengtao Deng Selected for 1000 Young Talent Program",
        description: "Congratulations to Dr. Zhengtao Deng, our former research assistant professor who was selected in the '1000 young talent search' program of China and started his independent lab in Nanjing University, starting in 09/2014.",
        color: "#8b5cf6"
    }, {
        date: "2014-06-01",
        type: "defense",
        title: "Dr. Palash Dutta Successfully Defends Ph.D. Thesis",
        description: "Palash has successfully defended his Ph.D theses. Congratulations, Dr. Dutta! Palash is moving to Georgia Tech and Emory University as a Postdoc Fellow.",
        color: "#10b981"
    }, {
        date: "2014-05-01",
        type: "publication",
        title: "DNA Nanotechnology Video",
        description: "Here is the link to the DNA Nanotechnology video they filmed here last month.",
        color: "#3b82f6"
    }, {
        date: "2014-04-15",
        type: "defense",
        title: "Dr. Xixi Wei Successfully Defends Ph.D. Thesis",
        description: "Xixi has successfully defended her Ph.D theses. Congratulations, Dr. Wei! Xixi will start her career in Caris Life Sciences as a Research Scientist.",
        color: "#10b981"
    }, {
        date: "2014-04-01",
        type: "defense",
        title: "Dr. Anirban Samanta and Dr. Wei Li Successfully Defend Ph.D. Theses",
        description: "Anirban and Wei have successfully defended their Ph.D theses. Congratulations, Dr. Samanta and Dr. Li! Anirban is moving to Naval Research Laboratory as a Postdoc Fellow. Wei is moving to Caltech as a Postdoc Fellow.",
        color: "#10b981"
    }, {
        date: "2013-12-15",
        type: "appointment",
        title: "Dr. Yonggang Ke Starts Assistant Professor Position",
        description: "Our former graduate student Dr. Yonggang Ke will start his independent career as a tenure track Assistant Professor in the joint Wallace H. Coulter Department of Biomedical Engineering at Georgia Tech and Emory University. Congratulations, Yonggang.",
        color: "#8b5cf6"
    }, {
        date: "2013-12-10",
        type: "appointment",
        title: "Dr. Bryan Wei Starts Professor Position",
        description: "Our former exchange graduate student Dr. Bryan Wei will start his independent career as a Professor in Tsinghua University. Congratulations, Bryan.",
        color: "#8b5cf6"
    }, {
        date: "2013-12-05",
        type: "appointment",
        title: "Dr. Ryan Nangreave Joins ASU Lake Havasu",
        description: "Our postdoc Dr. Ryan Nangreave will start his position as a Teaching Professor at ASU Lake Havasu campus. Congratulations, Ryan.",
        color: "#8b5cf6"
    }, {
        date: "2013-09-15",
        type: "appointment",
        title: "Prof. Hao Yan Appointed Director of Center for Molecular Design and Biomimicry",
        description: "ASU appoints Dr. Hao Yan as director of Center for Molecular Design and Biomimicry.",
        color: "#8b5cf6"
    }, {
        date: "2013-09-10",
        type: "award",
        title: "Rozenberg Tulip Award",
        description: "Each year, the Rozenberg Tulip Award is given by the International Society for Nanoscale Science, Computation and Engineering for outstanding achievements in the field of Biomolecular Computing and Molecular Programming. Congratulations to Hao Yan and Yan Liu who are the 2013 recipients.",
        color: "#f59e0b"
    }, {
        date: "2013-09-01",
        type: "award",
        title: "Best Poster Award at DNA19",
        description: "Congratulations to Wei for winning the best poster award at DNA19 conference.",
        color: "#ef4444"
    }, {
        date: "2013-05-01",
        type: "appointment",
        title: "Dr. Dongran Han Moves to Harvard Medical School",
        description: "Dongran is going to Harvard medical school for a postdoc position. Congratulations, Dr. Han!",
        color: "#8b5cf6"
    }, {
        date: "2013-04-20",
        type: "appointment",
        title: "Dr. Liu Earns Tenure and Promotion",
        description: "Congratulations to Dr. Liu for earning tenure and promotion to associate professor!",
        color: "#8b5cf6"
    }, {
        date: "2013-04-15",
        type: "award",
        title: "Departmental Awards",
        description: "Congratulations to Minghui for winning the Departmental Outstanding Graduate Assistant Award; congratulations to Angela and Saswata for the Certificate in Recognition for Excellence as a Teaching Assistant.",
        color: "#ef4444"
    }, {
        date: "2013-04-10",
        type: "defense",
        title: "Dr. Minghui Liu Successfully Defends Ph.D. Thesis",
        description: "Minghui has successfully defended her Ph.D thesis. Congratulations, Dr. Liu!",
        color: "#10b981"
    }, {
        date: "2013-04-05",
        type: "defense",
        title: "Dr. Zhao Successfully Defends Ph.D. Thesis",
        description: "Zhao has successfully defended his Ph.D thesis. He is going to Harvard medical school for a postdoc position. Congratulations, Dr. Zhao!",
        color: "#10b981"
    }, {
        date: "2013-04-01",
        type: "appointment",
        title: "Dr. Jinglin Fu Starts Assistant Professor Position",
        description: "Jinglin will start his independent career as tenure track Assistant Professor at Rutgers University, Camden in Fall 2013. Congratulations, Dr. Fu.",
        color: "#8b5cf6"
    }, {
        date: "2012-11-15",
        type: "appointment",
        title: "Yang Moves to Yale",
        description: "Yang moved to Yale for a postdoc position. Congratulations, Yang.",
        color: "#8b5cf6"
    }, {
        date: "2012-11-10",
        type: "defense",
        title: "Dr. Dongran Han Successfully Defends Ph.D. Thesis",
        description: "Dongran has successfully defended his Ph.D thesis. Congratulations, Dr. Han!",
        color: "#10b981"
    }, {
        date: "2012-11-01",
        type: "defense",
        title: "Dr. Xiaowei Liu and Dr. Suchetan Pal Successfully Defend Ph.D. Theses",
        description: "Xiaowei and Suchetan have successfully defended their Ph.D theses. Congratulations, Dr. Liu and Dr. Pal!",
        color: "#10b981"
    }, {
        date: "2012-09-15",
        type: "award",
        title: "NIH Director's Transformative R01 Award",
        description: "In collaboration with Prof. Milan Stojanovic at Columbia University. Dr. Yan received the 2012 NIH Director's Transformative R01 Award. The project is titled 'Theranostic Nano-objects: Basic Principles and Initial Applications'.",
        color: "#f59e0b"
    }, {
        date: "2012-09-01",
        type: "appointment",
        title: "Zhengtao Moves to MIT",
        description: "Zhengtao moved to MIT for a Research Associate position. Congratulations, Zhengtao.",
        color: "#8b5cf6"
    }, {
        date: "2012-08-15",
        type: "appointment",
        title: "Dr. Jaswinder Sharma Starts Staff Scientist Position",
        description: "Our former graduate student Dr. Jaswinder Sharma will start his independent career as tenure track Staff Scientist at Oak Ridge National Laboratory. Congratulations.",
        color: "#8b5cf6"
    }, {
        date: "2012-08-01",
        type: "appointment",
        title: "Dr. Chengxiang Lin Starts Assistant Professor Position",
        description: "Our former graduate student Dr. Chengxiang Lin will start his independent career a tenure track Assistant Professor in the Department of Cell Biology at Yale University. Congratulations, Chenxiang.",
        color: "#8b5cf6"
    }, {
        date: "2012-05-01",
        type: "award",
        title: "Department of Defense MURI Award",
        description: "Prof. Hao Yan receives prestigious $6.25 million multi-disciplinary research award from Department of Defense. This MURI research team draws on expertise across several scientific fields and includes fellow ASU co-investigators Neal Woodbury and Don Seo; Mark Bathe, of the Massachusetts Institute of Technology; William Shih, Harvard Medical School; and Nils Walter, University of Michigan.",
        color: "#f59e0b"
    }, {
        date: "2012-04-01",
        type: "defense",
        title: "Dr. Zhe Li Successfully Defends Ph.D. Thesis",
        description: "Zhe has successfully defended her Ph.D thesis. She is going to Yale for a postdoc position. Congratulations, Dr. Li!",
        color: "#10b981"
    }, {
        date: "2012-01-01",
        type: "appointment",
        title: "Milton D. Glick Distinguished Professor Appointment",
        description: "Dr. Hao Yan is appointed as Milton D. Glick Distinguished Professor in Chemistry and Biochemistry, starting from Jan. 01, 2012. Congratulations are in order!",
        color: "#f59e0b"
    }, {
        date: "2011-11-15",
        type: "publication",
        title: "Chemical Society Reviews Theme Issue",
        description: "Chemical Society Reviews published a theme issue 'Advances in DNA-based nanotechnology', with a DNA origami jet featuring as the cover art. An article 'DNA origami: a quantum leap for self-assembly of complex structures', coauthored by Gothelf and Yan group, is published in this issue.",
        color: "#3b82f6"
    }, {
        date: "2011-11-01",
        type: "defense",
        title: "Dr. Jeanette Nangreave Successfully Defends Ph.D. Thesis",
        description: "Jeanette has successfully defended her Ph.D thesis. She will become a Assistant Research Scientist/Lab Manager for the Yan lab. Congratulations, Dr. Nangreave!",
        color: "#10b981"
    }, {
        date: "2011-04-01",
        type: "publication",
        title: "Science Cover Story - DNA Origami with Complex Curvatures",
        description: "Our paper 'DNA Origami with Complex Curvatures in Three-dimensional Space' featured as Science cover story. Congratulations to the authors: Dongran, Suchetan, Jeanette, and Zhengtao!",
        color: "#3b82f6"
    }, {
        date: "2010-09-01",
        type: "appointment",
        title: "Reji Gets Assistant Professorship",
        description: "Congratulations to Reji for getting an Assistant Professorship from the Indian Institute of Science Education and Research. Reji will start his new position in January 2011.",
        color: "#8b5cf6"
    }, {
        date: "2010-08-01",
        type: "appointment",
        title: "Baoquan Becomes Professor",
        description: "Congratulations to Baoquan for becoming a Professor in the National Center for Nanosciences and Technology, Chinese Academy of Sciences, in Beijing. He was also selected for the 100-talent program in the Chinese Academy of Sciences. Baoquan will start his new position in November 2010.",
        color: "#8b5cf6"
    }, {
        date: "2010-04-01",
        type: "award",
        title: "Best Poster Award at FNANO",
        description: "Congratulations to Dongran for winning the best poster award at FNANO meeting.",
        color: "#ef4444"
    }, {
        date: "2009-09-01",
        type: "student",
        title: "New Students Join the Group",
        description: "New students joined the group: Dongran Han, Anirban Samanta, Wei Li, Palash Dutta, Ashok Kumar, Welcome!",
        color: "#10b981"
    }, {
        date: "2009-04-15",
        type: "defense",
        title: "Multiple Ph.D. Defenses",
        description: "Congratulations to Jas, Yonggang and Chenxiang for their successful Ph.D. defenses. Jas is moving to Los Alamos National Laboratory for a postdoc position. Yonggang and Chenxiang are both going to Dana-Farber Cancer Institute & Harvard Medical School for postdoc positions.",
        color: "#10b981"
    }, {
        date: "2009-03-01",
        type: "defense",
        title: "Dr. Rahul Chhabra Successfully Defends Ph.D. Thesis",
        description: "Rahul has successfully defended his Ph.D dissertation. Congratulations, Dr. Chhabra! Dr. Chhabra is moving to U. of Alberta for a postdoc position.",
        color: "#10b981"
    }, {
        date: "2008-11-01",
        type: "defense",
        title: "Dr. Kyle Lund Successfully Defends Ph.D. Thesis",
        description: "Kyle has successfully defended his Ph.D dissertation. Congratulations, Dr. Lund! Kyle is going to US Army to lead a research team.",
        color: "#10b981"
    }, {
        date: "2008-10-01",
        type: "defense",
        title: "Dr. Sherri Rinker Successfully Defends Ph.D. Thesis",
        description: "Sherri has successfully defended her Ph.D dissertation. Congratulations to Dr. Rinker, the first Ph.D. produced from the Yan Lab! Sherri is going to Indiana University Medical School for a NIH postdoc fellow position.",
        color: "#10b981"
    }, {
        date: "2008-05-01",
        type: "appointment",
        title: "Qiangbin Becomes Professor",
        description: "Congratulations to Qiangbin for becoming a Professor in the Suzhou Institute of Nano-tech and Nano-bionics, Chinese Academy of Sciences. He will start his new position in July 2008.",
        color: "#8b5cf6"
    }]
      , i = l => new Date(l).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return c.jsx("main", {
        className: "news-main-container",
        style: {
            background: "#fff",
            fontFamily: "Inter, Arial, sans-serif",
            color: "#232946"
        },
        children: c.jsx("div", {
            className: "news-content-wrapper fade-in",
            style: {
                borderRadius: 0,
                background: "#fff",
                fontFamily: "Inter, Arial, sans-serif",
                color: "#232946"
            },
            children: c.jsxs("section", {
                className: "page-content",
                style: {
                    fontFamily: "Inter, Arial, sans-serif",
                    color: "#232946"
                },
                children: [c.jsx(qe.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    }
                }), c.jsx(qe.h2, {
                    className: "section-title",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    style: {
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "#232946",
                        marginTop: "0.5rem",
                        marginBottom: "0.5rem",
                        letterSpacing: "-1px",
                        fontFamily: "Inter, Arial, sans-serif"
                    },
                    children: "News"
                }), c.jsx(qe.div, {
                    style: {
                        maxWidth: "900px",
                        margin: "0 auto"
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .8,
                        delay: .4
                    },
                    children: n.map( (l, o) => c.jsxs(pn.Fragment, {
                        children: [c.jsxs(qe.div, {
                            style: {
                                display: "block",
                                textAlign: "left",
                                marginBottom: "2rem",
                                background: "none",
                                border: "none",
                                boxShadow: "none",
                                padding: 0,
                                position: "relative"
                            },
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .5,
                                delay: .6 + o * .1
                            },
                            children: [c.jsx("div", {
                                style: {
                                    marginBottom: "0.75rem",
                                    color: "#232946",
                                    fontSize: "1.05rem",
                                    fontWeight: 400,
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: i(l.date)
                            }), c.jsx("h3", {
                                style: {
                                    fontSize: "1.3rem",
                                    fontWeight: 600,
                                    marginBottom: "0.5rem",
                                    color: "#232946",
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: l.title
                            }), c.jsx("p", {
                                style: {
                                    color: "#232946",
                                    lineHeight: "1.5",
                                    fontSize: "1.05rem",
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: l.description
                            }), c.jsxs("span", {
                                style: {
                                    position: "absolute",
                                    top: "1.5rem",
                                    right: 0,
                                    color: l.color,
                                    fontSize: "1.3rem",
                                    fontWeight: "600",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: [l.type === "award" && c.jsx(MD, {
                                    style: {
                                        color: l.color,
                                        fontSize: "1.3rem"
                                    }
                                }), l.type === "defense" && c.jsx(TD, {
                                    style: {
                                        color: l.color,
                                        fontSize: "1.3rem"
                                    }
                                }), l.type !== "award" && l.type !== "defense" && c.jsx("span", {
                                    style: {
                                        textTransform: "capitalize",
                                        fontSize: "0.78375rem",
                                        color: l.color
                                    },
                                    children: l.type
                                })]
                            })]
                        }), l.title === "Prof. Hao Yan Bestowed as Regents Professor" && c.jsx("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "2.5rem"
                            },
                            children: c.jsx("iframe", {
                                width: "560",
                                height: "315",
                                src: "https://www.youtube.com/embed/_TOzkOIhEKE",
                                title: "Hao Yan Named Regents Professor at ASU",
                                frameBorder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                allowFullScreen: !0,
                                style: {
                                    borderRadius: "8px",
                                    boxShadow: "0 12px 48px rgba(0,0,0,0.15)",
                                    maxWidth: "100%"
                                }
                            })
                        })]
                    }, o))
                }), c.jsx(qe.div, {
                    style: {
                        marginTop: "2rem"
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .8,
                        delay: 1
                    },
                    children: c.jsx("p", {
                        style: {
                            color: "#232946",
                            fontSize: "1.05rem",
                            fontWeight: 400,
                            fontFamily: "Inter, Arial, sans-serif"
                        },
                        children: "Looking for older news? Contact us for our complete news archive."
                    })
                })]
            })
        })
    })
}
  , f3 = [{
    name: "caDNAno",
    link: "http://cadnano.org/"
}, {
    name: "MagicDNA",
    link: "https://github.com/cmhuang2011/MagicDNA"
}, {
    name: "Oligo Analyzer",
    link: "http://www.idtdna.com/Scitools/Scitools.aspx"
}, {
    name: "NUPACK",
    link: "http://nupack.org/"
}, {
    name: "TALOS",
    link: "https://talos-dna-origami.org/about/"
}, {
    name: "PERDIX",
    link: "https://perdix-dna-origami.org/"
}, {
    name: "DNAxis",
    link: "https://caddna.cs.duke.edu/"
}]
  , h3 = [{
    name: "oxDNA",
    link: "https://dna.physics.ox.ac.uk/index.php?title=Main_Page"
}, {
    name: "CanDo",
    link: "https://cando-dna-origami.org/about/#ref_11"
}]
  , d3 = [{
    name: "oxView",
    link: "https://sulcgroup.github.io/oxdna-viewer/"
}, {
    name: "ChimeraX",
    link: "https://www.rbvi.ucsf.edu/chimerax/"
}, {
    name: "Fluorescence SpectraViewer",
    link: "http://www.invitrogen.com/site/us/en/home/support/Research-Tools/Fluorescence-SpectraViewer.html"
}]
  , Fg = [{
    name: "Tiamat (Windows)",
    link: "/Tiamat.exe",
    desc: "Graphical user interface program for the design of DNA nanostructures and sequences.",
    download: !0
}, {
    name: "Tiamat User Manual",
    link: "http://link.springer.com/chapter/10.1007%2F978-3-642-03076-5_8",
    desc: "User manual for Tiamat."
}, {
    name: "Tiamat 2.exe",
    link: "/Tiamat 2.exe",
    desc: "New version of Tiamat with RNA design, user-defined constraints, and oxDNA-friendly export.",
    download: !0
}, {
    name: "Double crossover (DAE) tile (.dna)",
    link: "/DX.dna",
    desc: "DNA model file.",
    download: !0
}, {
    name: "4x4 tile (.dna)",
    link: "/4x4.dna",
    desc: "DNA model file.",
    download: !0
}, {
    name: "Four-helix tile (.dna)",
    link: "/4 HT.dna",
    desc: "DNA model file.",
    download: !0
}, {
    name: "Tetrahedron (.dna)",
    link: "/tetrahedron.dna",
    desc: "DNA model file.",
    download: !0
}, {
    name: "Rectangular origami (.dna)",
    link: "/origami.dna",
    desc: "DNA model file.",
    download: !0
}, {
    name: "4x4 tile animation (.asf)",
    link: "/4x4.asf",
    desc: "Cartoon animation using Tiamat.",
    download: !0
}, {
    name: "Three-helix bundle animation (.asf)",
    link: "/3 helix bundle.asf",
    desc: "Cartoon animation using Tiamat.",
    download: !0
}, {
    name: "Tetrahedron animation (.asf)",
    link: "/tetrahedron.asf",
    desc: "Cartoon animation using Tiamat.",
    download: !0
}]
  , m3 = () => c.jsx("main", {
    className: "resources-main-container",
    style: {
        background: "#fff",
        fontFamily: "Inter, Arial, sans-serif",
        color: "#232946"
    },
    children: c.jsx("div", {
        className: "resources-content-wrapper fade-in",
        style: {
            borderRadius: 0,
            background: "#fff",
            fontFamily: "Inter, Arial, sans-serif",
            color: "#232946",
            paddingLeft: "2.5rem"
        },
        children: c.jsxs("section", {
            className: "page-content",
            style: {
                fontFamily: "Inter, Arial, sans-serif",
                color: "#232946"
            },
            children: [c.jsx(qe.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: c.jsx("h1", {
                    className: "page-title",
                    style: {
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "#232946",
                        marginBottom: "0.5rem",
                        letterSpacing: "-1px",
                        fontFamily: "Inter, Arial, sans-serif"
                    },
                    children: "Resources"
                })
            }), c.jsxs("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2.5rem",
                    alignItems: "start",
                    marginTop: "2.5rem",
                    marginBottom: "2.5rem",
                    width: "100%"
                },
                children: [c.jsxs(qe.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    style: {
                        textAlign: "left"
                    },
                    children: [c.jsx("h2", {
                        className: "section-title",
                        style: {
                            fontSize: "1.5625rem",
                            fontWeight: 700,
                            color: "#232946",
                            marginBottom: "0.5rem",
                            letterSpacing: "-1px",
                            fontFamily: "Inter, Arial, sans-serif",
                            textAlign: "left"
                        },
                        children: "Downloads"
                    }), c.jsx("ul", {
                        style: {
                            lineHeight: 2,
                            listStyleType: "none",
                            paddingLeft: 0,
                            fontFamily: "Inter, Arial, sans-serif",
                            color: "#232946",
                            fontSize: "1.05rem",
                            textAlign: "left"
                        },
                        children: Fg.map( (n, i) => {
                            const l = ["Double crossover (DAE) tile (.dna)", "4x4 tile (.dna)", "Four-helix tile (.dna)", "Tetrahedron (.dna)", "Rectangular origami (.dna)", "4x4 tile animation (.asf)", "Three-helix bundle animation (.asf)", "Tetrahedron animation (.asf)"]
                              , o = Fg.findIndex(h => l.includes(h.name))
                              , u = i === o;
                            l.includes(n.name);
                            const d = n.download ? {
                                download: n.download === !0 ? "" : n.download
                            } : {
                                target: "_blank",
                                rel: "noopener noreferrer"
                            };
                            return c.jsxs(pn.Fragment, {
                                children: [u && c.jsx("li", {
                                    style: {
                                        margin: "1.2rem 0 0.5rem 0",
                                        textAlign: "left",
                                        lineHeight: 1.2
                                    },
                                    children: c.jsx("span", {
                                        style: {
                                            fontWeight: 700,
                                            color: "#232946",
                                            fontFamily: "Inter, Arial, sans-serif"
                                        },
                                        children: "Example files"
                                    })
                                }), c.jsx("li", {
                                    style: {
                                        marginBottom: "1.1rem",
                                        textAlign: "left",
                                        lineHeight: 1.2
                                    },
                                    children: c.jsxs("span", {
                                        style: {
                                            display: "inline-block"
                                        },
                                        children: [c.jsx("a", {
                                            href: n.link,
                                            ...d,
                                            style: {
                                                fontWeight: 400,
                                                color: "#1a0dab",
                                                fontFamily: "Inter, Arial, sans-serif",
                                                textDecoration: "none",
                                                marginBottom: 0
                                            },
                                            children: n.name
                                        }), n.desc && c.jsxs("span", {
                                            style: {
                                                marginLeft: 6,
                                                color: "#232946",
                                                fontFamily: "Inter, Arial, sans-serif",
                                                fontWeight: 400,
                                                marginBottom: 0
                                            },
                                            children: ["- ", n.desc]
                                        })]
                                    })
                                })]
                            }, n.name)
                        }
                        )
                    })]
                }), c.jsxs(qe.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .4
                    },
                    style: {
                        textAlign: "left",
                        marginLeft: "4.5rem"
                    },
                    children: [c.jsx("h2", {
                        className: "section-title",
                        style: {
                            fontSize: "1.5625rem",
                            fontWeight: 700,
                            color: "#232946",
                            marginBottom: "0.5rem",
                            letterSpacing: "-1px",
                            fontFamily: "Inter, Arial, sans-serif",
                            textAlign: "left"
                        },
                        children: "Scientific Tools"
                    }), c.jsxs("ul", {
                        style: {
                            lineHeight: 2,
                            listStyleType: "none",
                            paddingLeft: 0,
                            fontFamily: "Inter, Arial, sans-serif",
                            color: "#232946",
                            fontSize: "1.05rem",
                            textAlign: "left"
                        },
                        children: [c.jsx("li", {
                            style: {
                                margin: "1.2rem 0 0.5rem 0",
                                textAlign: "left",
                                lineHeight: 1.2
                            },
                            children: c.jsx("span", {
                                style: {
                                    fontWeight: 700,
                                    color: "#232946",
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: "Design tools"
                            })
                        }), f3.map(n => c.jsx("li", {
                            style: {
                                marginBottom: "1.1rem",
                                textAlign: "left",
                                lineHeight: 1.2
                            },
                            children: c.jsx("span", {
                                style: {
                                    display: "inline-block"
                                },
                                children: c.jsx("a", {
                                    href: n.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        fontWeight: 400,
                                        color: "#1a0dab",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        textDecoration: "none",
                                        marginBottom: 0
                                    },
                                    children: n.name
                                })
                            })
                        }, n.name)), c.jsx("li", {
                            style: {
                                margin: "1.2rem 0 0.5rem 0",
                                textAlign: "left",
                                lineHeight: 1.2
                            },
                            children: c.jsx("span", {
                                style: {
                                    fontWeight: 700,
                                    color: "#232946",
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: "Simulation tools"
                            })
                        }), h3.map(n => c.jsx("li", {
                            style: {
                                marginBottom: "1.1rem",
                                textAlign: "left",
                                lineHeight: 1.2
                            },
                            children: c.jsx("span", {
                                style: {
                                    display: "inline-block"
                                },
                                children: c.jsx("a", {
                                    href: n.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        fontWeight: 400,
                                        color: "#1a0dab",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        textDecoration: "none",
                                        marginBottom: 0
                                    },
                                    children: n.name
                                })
                            })
                        }, n.name)), c.jsx("li", {
                            style: {
                                margin: "1.2rem 0 0.5rem 0",
                                textAlign: "left",
                                lineHeight: 1.2
                            },
                            children: c.jsx("span", {
                                style: {
                                    fontWeight: 700,
                                    color: "#232946",
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: "Visualization tools"
                            })
                        }), d3.map(n => c.jsx("li", {
                            style: {
                                marginBottom: "1.1rem",
                                textAlign: "left",
                                lineHeight: 1.2
                            },
                            children: c.jsx("span", {
                                style: {
                                    display: "inline-block"
                                },
                                children: c.jsx("a", {
                                    href: n.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        fontWeight: 400,
                                        color: "#1a0dab",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        textDecoration: "none",
                                        marginBottom: 0
                                    },
                                    children: n.name
                                })
                            })
                        }, n.name))]
                    })]
                })]
            }), c.jsx("div", {
                style: {
                    maxWidth: "100%",
                    margin: "0 auto",
                    paddingLeft: 0,
                    paddingRight: 0
                },
                children: c.jsxs(qe.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .6
                    },
                    style: {
                        textAlign: "left",
                        marginTop: "2.5rem"
                    },
                    children: [c.jsx("h2", {
                        className: "section-title",
                        style: {
                            fontSize: "1.5625rem",
                            fontWeight: 700,
                            color: "#232946",
                            marginBottom: "0.5rem",
                            letterSpacing: "-1px",
                            fontFamily: "Inter, Arial, sans-serif",
                            textAlign: "left"
                        },
                        children: "ASU Resources"
                    }), c.jsx("h3", {
                        style: {
                            fontSize: "1.2rem",
                            fontWeight: 600,
                            marginTop: "1.2rem"
                        },
                        children: "Biodesign Resources"
                    }), c.jsxs("ul", {
                        style: {
                            lineHeight: 2,
                            listStyleType: "none",
                            paddingLeft: 0,
                            fontSize: "1.05rem"
                        },
                        children: [c.jsxs("li", {
                            children: [c.jsx("a", {
                                href: "https://biodesign.asu.edu/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#1a0dab",
                                    textDecoration: "none"
                                },
                                children: "Biodesign Institute"
                            }), " – Nature-inspired science & innovation"]
                        }), c.jsxs("li", {
                            children: [c.jsx("a", {
                                href: "https://biodesign.asu.edu/molecular-design-and-biomimetics/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#1a0dab",
                                    textDecoration: "none"
                                },
                                children: "Biodesign Center for Molecular Design and Biomimetics"
                            }), " – Our Center"]
                        }), c.jsxs("li", {
                            children: [c.jsx("a", {
                                href: "https://www.youtube.com/@ASUBiodesign/videos",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#1a0dab",
                                    textDecoration: "none"
                                },
                                children: "ASU Biodesign YouTube"
                            }), " – Media & outreach"]
                        })]
                    }), c.jsx("h3", {
                        style: {
                            fontSize: "1.2rem",
                            fontWeight: 600,
                            marginTop: "1.2rem"
                        },
                        children: "SMS Resources"
                    }), c.jsxs("ul", {
                        style: {
                            lineHeight: 2,
                            listStyleType: "none",
                            paddingLeft: 0,
                            fontSize: "1.05rem"
                        },
                        children: [c.jsxs("li", {
                            children: [c.jsx("a", {
                                href: "https://sms.asu.edu/?utm_source=chatgpt.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#1a0dab",
                                    textDecoration: "none"
                                },
                                children: "SMS Home"
                            }), " – Main portal"]
                        }), c.jsxs("li", {
                            children: [c.jsx("a", {
                                href: "https://sms.asu.edu/node/1681?utm_source=chatgpt.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#1a0dab",
                                    textDecoration: "none"
                                },
                                children: "SMS Resources Directory"
                            }), " – Tools & forms"]
                        }), c.jsxs("li", {
                            children: [c.jsx("a", {
                                href: "https://sms.asu.edu/Research?utm_source=chatgpt.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#1a0dab",
                                    textDecoration: "none"
                                },
                                children: "Research in SMS"
                            }), " – Labs & themes"]
                        }), c.jsxs("li", {
                            children: [c.jsx("a", {
                                href: "http://sms.asu.edu/Research/Facilities-and-Instrumentation?utm_source=chatgpt.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#1a0dab",
                                    textDecoration: "none"
                                },
                                children: "Facilities & Instrumentation"
                            }), " – Shared equipment"]
                        }), c.jsxs("li", {
                            children: [c.jsx("a", {
                                href: "https://sms.asu.edu/About/Contact-Us?utm_source=chatgpt.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#1a0dab",
                                    textDecoration: "none"
                                },
                                children: "Contact SMS"
                            }), " – Admin & offices"]
                        })]
                    })]
                })
            })]
        })
    })
})
  , g3 = () => c.jsx("main", {
    className: "home-main-container",
    style: {
        fontFamily: "Inter, Arial, sans-serif",
        color: "#232946"
    },
    children: c.jsxs("div", {
        className: "home-content-wrapper fade-in",
        style: {
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(6px)",
            borderRadius: 0,
            fontFamily: "Inter, Arial, sans-serif",
            color: "#232946"
        },
        children: [c.jsxs("section", {
            className: "page-content",
            children: [c.jsx("div", {
                style: {
                    width: "100%",
                    marginBottom: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "120px"
                },
                children: c.jsx("h1", {
                    style: {
                        fontSize: "2.5rem",
                        color: "#232946",
                        margin: 0,
                        fontWeight: 700,
                        letterSpacing: "-1px",
                        fontFamily: "Inter, Arial, sans-serif"
                    },
                    children: "Contact Us"
                })
            }), c.jsx(qe.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: .2
                },
                style: {
                    marginBottom: "2rem"
                },
                children: c.jsxs("div", {
                    style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "2.5rem",
                        flexWrap: "wrap",
                        width: "100%"
                    },
                    children: [c.jsxs("div", {
                        style: {
                            minWidth: 280,
                            maxWidth: 350,
                            textAlign: "left",
                            flex: "1 1 320px",
                            fontFamily: "Inter, Arial, sans-serif",
                            color: "#232946"
                        },
                        children: [c.jsx("h2", {
                            style: {
                                color: "#232946",
                                marginBottom: "0.5rem",
                                textAlign: "left",
                                fontWeight: 400,
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: "Biodesign Center for Molecular Design and Biomimetics"
                        }), c.jsx("p", {
                            style: {
                                margin: "6px 0",
                                color: "#232946",
                                fontSize: "1.05rem",
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: "1001 S McAllister Ave,"
                        }), c.jsx("p", {
                            style: {
                                margin: "6px 0",
                                color: "#232946",
                                fontSize: "1.05rem",
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: "Arizona State University,"
                        }), c.jsx("p", {
                            style: {
                                margin: "6px 0",
                                color: "#232946",
                                fontSize: "1.05rem",
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: "Tempe, Az, 85287"
                        }), c.jsx("p", {
                            style: {
                                margin: "14px 0 6px 0",
                                color: "#232946",
                                fontSize: "1.05rem",
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: "Phone: 480.727.8570 / Fax: 480.965.2747"
                        }), c.jsxs("p", {
                            style: {
                                margin: "14px 0 6px 0",
                                color: "#232946",
                                fontSize: "1.05rem",
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: ["Email: ", c.jsx("a", {
                                href: "mailto:hao.yan@asu.edu",
                                style: {
                                    color: "#3b82f6",
                                    textDecoration: "underline",
                                    fontFamily: "Inter, Arial, sans-serif"
                                },
                                children: "hao.yan@asu.edu"
                            })]
                        })]
                    }), c.jsxs("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            flex: "1 1 350px",
                            minWidth: 280,
                            maxWidth: 400
                        },
                        children: [c.jsx("iframe", {
                            title: "Biodesign Institute, Building A115 Location",
                            src: "https://www.google.com/maps?q=Biodesign+Institute,+Building+A115,+Arizona+State+University&output=embed",
                            width: "350",
                            height: "300",
                            style: {
                                border: 0,
                                borderRadius: 0,
                                marginBottom: "0.5rem",
                                width: "100%",
                                maxWidth: 400
                            },
                            allowFullScreen: "",
                            loading: "lazy",
                            referrerPolicy: "no-referrer-when-downgrade"
                        }), c.jsx("a", {
                            href: "https://www.google.com/maps/place/Biodesign+Institute,+Building+A115,+Arizona+State+University/@33.4212049,-111.9313337,17z",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                color: "#3b82f6",
                                fontWeight: 500,
                                textDecoration: "underline",
                                fontSize: "1.05rem",
                                marginBottom: "1.5rem",
                                fontFamily: "Inter, Arial, sans-serif"
                            },
                            children: "View on Google Maps"
                        })]
                    })]
                })
            })]
        }), c.jsx("section", {
            style: {
                marginTop: "0",
                padding: "0",
                borderTop: "1px solid #e0e7ef",
                display: "flex",
                justifyContent: "center"
            },
            children: c.jsx("div", {
                style: {
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(60,60,90,0.04)",
                    padding: "1.5rem 2rem 1.5rem 2rem",
                    maxWidth: 1e3,
                    width: "100%",
                    margin: "0 auto"
                },
                children: c.jsxs("p", {
                    style: {
                        color: "#232946",
                        fontSize: "1.05rem",
                        fontFamily: "Inter, Arial, sans-serif",
                        fontWeight: 400,
                        margin: 0,
                        textAlign: "justify",
                        textAlignLast: "center",
                        letterSpacing: "0.01em",
                        lineHeight: 1.5
                    },
                    children: ["We are always seeking to recruit highly motivated individuals who are interested in joining our team. Whether you are an undergraduate or graduate student, postdoctoral researcher, or visiting scholar interested in joining our team, please send your application materials including your CV with a list of references and cover letter describing your background and interests to: ", c.jsx("a", {
                        href: "mailto:Hao.Yan@asu.edu",
                        style: {
                            color: "#3b82f6",
                            textDecoration: "underline",
                            fontWeight: 500,
                            fontFamily: "Inter, Arial, sans-serif"
                        },
                        children: "Hao.Yan@asu.edu"
                    })]
                })
            })
        }), c.jsx("div", {
            style: {
                paddingBottom: "60px"
            }
        })]
    })
});
function p3() {
    return c.jsxs("div", {
        className: "app-wrapper",
        children: [c.jsx(ED, {}), c.jsx(HD, {}), c.jsx("div", {
            className: "navbar-container",
            children: c.jsx(RD, {})
        }), c.jsxs(iv, {
            children: [c.jsx(Gt, {
                path: "/",
                element: c.jsx(YD, {})
            }), c.jsx(Gt, {
                path: "/research",
                element: c.jsx(BD, {})
            }), c.jsx(Gt, {
                path: "/team",
                element: c.jsx(zD, {})
            }), c.jsx(Gt, {
                path: "/team/pi-yan",
                element: c.jsx(OD, {})
            }), c.jsx(Gt, {
                path: "/team/our-team",
                element: c.jsx(PD, {})
            }), c.jsx(Gt, {
                path: "/publications",
                element: c.jsx(u3, {})
            }), c.jsx(Gt, {
                path: "/news",
                element: c.jsx(c3, {})
            }), c.jsx(Gt, {
                path: "/resources",
                element: c.jsx(m3, {})
            }), c.jsx(Gt, {
                path: "/contact",
                element: c.jsx(g3, {})
            })]
        })]
    })
}
function y3() {
    return c.jsx(Nv, {
        children: c.jsx(p3, {})
    })
}
db.createRoot(document.getElementById("root")).render(c.jsx(w.StrictMode, {
    children: c.jsx(y3, {})
}));

