module.exports = [
"[project]/Documents/react-project/timesheet/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Documents/react-project/timesheet/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Computed",
    ()=>w,
    "Effect",
    ()=>S,
    "Signal",
    ()=>d,
    "action",
    ()=>E,
    "batch",
    ()=>n,
    "computed",
    ()=>b,
    "createModel",
    ()=>x,
    "effect",
    ()=>m,
    "signal",
    ()=>v,
    "untracked",
    ()=>h
]);
const i = Symbol.for("preact-signals");
function t() {
    if (f > 1) {
        f--;
        return;
    }
    let i, t = !1;
    while(void 0 !== s){
        let n = s;
        s = void 0;
        e++;
        while(void 0 !== n){
            const o = n.o;
            n.o = void 0;
            n.f &= -3;
            if (!(8 & n.f) && l(n)) try {
                n.c();
            } catch (n) {
                if (!t) {
                    i = n;
                    t = !0;
                }
            }
            n = o;
        }
    }
    e = 0;
    f--;
    if (t) throw i;
}
function n(i) {
    if (f > 0) return i();
    f++;
    try {
        return i();
    } finally{
        t();
    }
}
let o, s;
function h(i) {
    const t = o;
    o = void 0;
    try {
        return i();
    } finally{
        o = t;
    }
}
let r, f = 0, e = 0, u = 0;
function c(i) {
    if (void 0 === o) return;
    let t = i.n;
    if (void 0 === t || t.t !== o) {
        t = {
            i: 0,
            S: i,
            p: o.s,
            n: void 0,
            t: o,
            e: void 0,
            x: void 0,
            r: t
        };
        if (void 0 !== o.s) o.s.n = t;
        o.s = t;
        i.n = t;
        if (32 & o.f) i.S(t);
        return t;
    } else if (-1 === t.i) {
        t.i = 0;
        if (void 0 !== t.n) {
            t.n.p = t.p;
            if (void 0 !== t.p) t.p.n = t.n;
            t.p = o.s;
            t.n = void 0;
            o.s.n = t;
            o.s = t;
        }
        return t;
    }
}
function d(i, t) {
    this.v = i;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
    this.W = null == t ? void 0 : t.watched;
    this.Z = null == t ? void 0 : t.unwatched;
    this.name = null == t ? void 0 : t.name;
}
d.prototype.brand = i;
d.prototype.h = function() {
    return !0;
};
d.prototype.S = function(i) {
    const t = this.t;
    if (t !== i && void 0 === i.e) {
        i.x = t;
        this.t = i;
        if (void 0 !== t) t.e = i;
        else h(()=>{
            var i;
            null == (i = this.W) || i.call(this);
        });
    }
};
d.prototype.U = function(i) {
    if (void 0 !== this.t) {
        const t = i.e, n = i.x;
        if (void 0 !== t) {
            t.x = n;
            i.e = void 0;
        }
        if (void 0 !== n) {
            n.e = t;
            i.x = void 0;
        }
        if (i === this.t) {
            this.t = n;
            if (void 0 === n) h(()=>{
                var i;
                null == (i = this.Z) || i.call(this);
            });
        }
    }
};
d.prototype.subscribe = function(i) {
    return m(()=>{
        const t = this.value, n = o;
        o = void 0;
        try {
            i(t);
        } finally{
            o = n;
        }
    }, {
        name: "sub"
    });
};
d.prototype.valueOf = function() {
    return this.value;
};
d.prototype.toString = function() {
    return this.value + "";
};
d.prototype.toJSON = function() {
    return this.value;
};
d.prototype.peek = function() {
    const i = o;
    o = void 0;
    try {
        return this.value;
    } finally{
        o = i;
    }
};
Object.defineProperty(d.prototype, "value", {
    get () {
        const i = c(this);
        if (void 0 !== i) i.i = this.i;
        return this.v;
    },
    set (i) {
        if (i !== this.v) {
            if (e > 100) throw new Error("Cycle detected");
            this.v = i;
            this.i++;
            u++;
            f++;
            try {
                for(let i = this.t; void 0 !== i; i = i.x)i.t.N();
            } finally{
                t();
            }
        }
    }
});
function v(i, t) {
    return new d(i, t);
}
function l(i) {
    for(let t = i.s; void 0 !== t; t = t.n)if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
    return !1;
}
function y(i) {
    for(let t = i.s; void 0 !== t; t = t.n){
        const n = t.S.n;
        if (void 0 !== n) t.r = n;
        t.S.n = t;
        t.i = -1;
        if (void 0 === t.n) {
            i.s = t;
            break;
        }
    }
}
function a(i) {
    let t, n = i.s;
    while(void 0 !== n){
        const i = n.p;
        if (-1 === n.i) {
            n.S.U(n);
            if (void 0 !== i) i.n = n.n;
            if (void 0 !== n.n) n.n.p = i;
        } else t = n;
        n.S.n = n.r;
        if (void 0 !== n.r) n.r = void 0;
        n = i;
    }
    i.s = t;
}
function w(i, t) {
    d.call(this, void 0);
    this.x = i;
    this.s = void 0;
    this.g = u - 1;
    this.f = 4;
    this.W = null == t ? void 0 : t.watched;
    this.Z = null == t ? void 0 : t.unwatched;
    this.name = null == t ? void 0 : t.name;
}
w.prototype = new d;
w.prototype.h = function() {
    this.f &= -3;
    if (1 & this.f) return !1;
    if (32 == (36 & this.f)) return !0;
    this.f &= -5;
    if (this.g === u) return !0;
    this.g = u;
    this.f |= 1;
    if (this.i > 0 && !l(this)) {
        this.f &= -2;
        return !0;
    }
    const i = o;
    try {
        y(this);
        o = this;
        const i = this.x();
        if (16 & this.f || this.v !== i || 0 === this.i) {
            this.v = i;
            this.f &= -17;
            this.i++;
        }
    } catch (i) {
        this.v = i;
        this.f |= 16;
        this.i++;
    }
    o = i;
    a(this);
    this.f &= -2;
    return !0;
};
w.prototype.S = function(i) {
    if (void 0 === this.t) {
        this.f |= 36;
        for(let i = this.s; void 0 !== i; i = i.n)i.S.S(i);
    }
    d.prototype.S.call(this, i);
};
w.prototype.U = function(i) {
    if (void 0 !== this.t) {
        d.prototype.U.call(this, i);
        if (void 0 === this.t) {
            this.f &= -33;
            for(let i = this.s; void 0 !== i; i = i.n)i.S.U(i);
        }
    }
};
w.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for(let i = this.t; void 0 !== i; i = i.x)i.t.N();
    }
};
Object.defineProperty(w.prototype, "value", {
    get () {
        if (1 & this.f) throw new Error("Cycle detected");
        const i = c(this);
        this.h();
        if (void 0 !== i) i.i = this.i;
        if (16 & this.f) throw this.v;
        return this.v;
    }
});
function b(i, t) {
    return new w(i, t);
}
function _(i) {
    const n = i.u;
    i.u = void 0;
    if ("function" == typeof n) {
        f++;
        const s = o;
        o = void 0;
        try {
            n();
        } catch (t) {
            i.f &= -2;
            i.f |= 8;
            p(i);
            throw t;
        } finally{
            o = s;
            t();
        }
    }
}
function p(i) {
    for(let t = i.s; void 0 !== t; t = t.n)t.S.U(t);
    i.x = void 0;
    i.s = void 0;
    _(i);
}
function g(i) {
    if (o !== this) throw new Error("Out-of-order effect");
    a(this);
    o = i;
    this.f &= -2;
    if (8 & this.f) p(this);
    t();
}
function S(i, t) {
    this.x = i;
    this.u = void 0;
    this.s = void 0;
    this.o = void 0;
    this.f = 32;
    this.name = null == t ? void 0 : t.name;
    if (r) r.push(this);
}
S.prototype.c = function() {
    const i = this.S();
    try {
        if (8 & this.f) return;
        if (void 0 === this.x) return;
        const t = this.x();
        if ("function" == typeof t) this.u = t;
    } finally{
        i();
    }
};
S.prototype.S = function() {
    if (1 & this.f) throw new Error("Cycle detected");
    this.f |= 1;
    this.f &= -9;
    _(this);
    y(this);
    f++;
    const i = o;
    o = this;
    return g.bind(this, i);
};
S.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 2;
        this.o = s;
        s = this;
    }
};
S.prototype.d = function() {
    this.f |= 8;
    if (!(1 & this.f)) p(this);
};
S.prototype.dispose = function() {
    this.d();
};
function m(i, t) {
    const n = new S(i, t);
    try {
        n.c();
    } catch (i) {
        n.d();
        throw i;
    }
    const o = n.d.bind(n);
    o[Symbol.dispose] = o;
    return o;
}
function E(i) {
    return function(...t) {
        return n(()=>h(()=>i.apply(this, t)));
    };
}
function x(i) {
    return function(...t) {
        let n, o;
        const s = function() {
            let i = r;
            r = [];
            return function() {
                let t = r;
                if (r && i) i = i.concat(r);
                r = i;
                return t;
            };
        }();
        try {
            o = i(...t);
        } catch (i) {
            r = void 0;
            throw i;
        } finally{
            n = s();
        }
        for(const i in o)if ("function" == typeof o[i]) o[i] = E(o[i]);
        o[Symbol.dispose] = E(function() {
            if (n) for(let i = 0; i < n.length; i++)n[i].dispose();
            n = void 0;
        });
        return o;
    };
}
;
 //# sourceMappingURL=signals-core.mjs.map
}),
"[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
            return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            });
        }, [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_useSignalsImplementation",
    ()=>k,
    "ensureFinalCleanup",
    ()=>j,
    "useComputed",
    ()=>useComputed,
    "useModel",
    ()=>N,
    "useSignal",
    ()=>useSignal,
    "useSignalEffect",
    ()=>useSignalEffect,
    "useSignals",
    ()=>C,
    "wrapJsx",
    ()=>b
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)");
;
;
;
const [a] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"].split(".").map(Number), d = [], m = Symbol.for(a >= 19 ? "react.transitional.element" : "react.element"), p = "undefined" != ("TURBOPACK compile-time value", "undefined") && !!window.__PREACT_SIGNALS_DEVTOOLS__;
function b(t) {
    if ("function" != typeof t) return t;
    else return function(e, o, ...i) {
        if ("string" == typeof e && o) for(let t in o){
            let e = o[t];
            if ("children" !== t && e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Signal"]) o[t] = e.value;
        }
        return t.call(t, e, o, ...i);
    };
}
const y = Symbol.dispose || Symbol.for("Symbol.dispose");
let g;
function h(n, t) {
    const e = t.effect.S();
    g = t;
    return v.bind(t, n, e);
}
function v(n, t) {
    t();
    g = n;
}
const w = ()=>{}, _ = {
    o: 0,
    effect: {
        s: void 0,
        c () {},
        S: ()=>w,
        d () {}
    },
    subscribe: ()=>w,
    getSnapshot: ()=>0,
    S () {},
    f () {},
    [y] () {}
}, S = Promise.prototype.then.bind(Promise.resolve());
let x;
function j() {
    if (!x) x = S(P);
}
function P() {
    var n;
    x = void 0;
    null == (n = g) || n.f();
}
const $ = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
function k(n = 0, t) {
    j();
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    if (null == e.current) if ("TURBOPACK compile-time truthy", 1) e.current = _;
    else //TURBOPACK unreachable
    ;
    const i = e.current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(i.subscribe, i.getSnapshot, i.getSnapshot);
    i.S();
    if (0 === n) $(P);
    return i;
}
Object.defineProperties(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Signal"].prototype, {
    $$typeof: {
        configurable: !0,
        value: m
    },
    type: {
        configurable: !0,
        value: function({ data: n }) {
            const t = k(1);
            try {
                return n.value;
            } finally{
                t.f();
            }
        }
    },
    props: {
        configurable: !0,
        get () {
            return {
                data: this
            };
        }
    },
    ref: {
        configurable: !0,
        value: null
    }
});
function C(n, t) {
    return k(n, t);
}
function useSignal(n, e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(n, e), d);
}
function useComputed(n, t) {
    const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(n);
    o.current = n;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computed"])(()=>o.current(), t), d);
}
function useSignalEffect(n, t) {
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(n);
    e.current = n;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(function() {
            return e.current();
        }, t), d);
}
function N(n) {
    const [t] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>n());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>t[Symbol.dispose], [
        t
    ]);
    return t;
}
;
 //# sourceMappingURL=runtime.mjs.map
}),
"[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.mjs [app-ssr] (ecmascript)"); //# sourceMappingURL=signals.mjs.map
;
;
}),
];

//# sourceMappingURL=bbb33_589451b2._.js.map