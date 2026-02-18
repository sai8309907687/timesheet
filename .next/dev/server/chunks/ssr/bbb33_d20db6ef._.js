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
"[project]/Documents/react-project/timesheet/node_modules/preact/dist/preact.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Component",
    ()=>x,
    "Fragment",
    ()=>k,
    "cloneElement",
    ()=>K,
    "createContext",
    ()=>Q,
    "createElement",
    ()=>_,
    "createRef",
    ()=>b,
    "h",
    ()=>_,
    "hydrate",
    ()=>J,
    "isValidElement",
    ()=>t,
    "options",
    ()=>l,
    "render",
    ()=>G,
    "toChildArray",
    ()=>H
]);
var n, l, u, t, i, o, r, e, f, c, s, a, h, p = {}, v = [], y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d = Array.isArray;
function w(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function g(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function _(l, u, t) {
    var i, o, r, e = {};
    for(r in u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = u[r];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(r in l.defaultProps)void 0 === e[r] && (e[r] = l.defaultProps[r]);
    return m(l, e, i, o, null);
}
function m(n, t, i, o, r) {
    var e = {
        type: n,
        props: t,
        key: i,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == r ? ++u : r,
        __i: -1,
        __u: 0
    };
    return null == r && null != l.vnode && l.vnode(e), e;
}
function b() {
    return {
        current: null
    };
}
function k(n) {
    return n.children;
}
function x(n, l) {
    this.props = n, this.context = l;
}
function S(n, l) {
    if (null == l) return n.__ ? S(n.__, n.__i + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? S(n) : null;
}
function C(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return C(n);
    }
}
function M(n) {
    (!n.__d && (n.__d = !0) && i.push(n) && !$.__r++ || o != l.debounceRendering) && ((o = l.debounceRendering) || r)($);
}
function $() {
    for(var n, u, t, o, r, f, c, s = 1; i.length;)i.length > s && i.sort(e), n = i.shift(), s = i.length, n.__d && (t = void 0, o = void 0, r = (o = (u = n).__v).__e, f = [], c = [], u.__P && ((t = w({}, o)).__v = o.__v + 1, l.vnode && l.vnode(t), O(u.__P, t, o, u.__n, u.__P.namespaceURI, 32 & o.__u ? [
        r
    ] : null, f, null == r ? S(o) : r, !!(32 & o.__u), c), t.__v = o.__v, t.__.__k[t.__i] = t, N(f, t, c), o.__e = o.__ = null, t.__e != r && C(t)));
    $.__r = 0;
}
function I(n, l, u, t, i, o, r, e, f, c, s) {
    var a, h, y, d, w, g, _, m = t && t.__k || v, b = l.length;
    for(f = P(u, l, m, f, b), a = 0; a < b; a++)null != (y = u.__k[a]) && (h = -1 == y.__i ? p : m[y.__i] || p, y.__i = a, g = O(n, y, h, i, o, r, e, f, c, s), d = y.__e, y.ref && h.ref != y.ref && (h.ref && B(h.ref, null, y), s.push(y.ref, y.__c || d, y)), null == w && null != d && (w = d), (_ = !!(4 & y.__u)) || h.__k === y.__k ? f = A(y, f, n, _) : "function" == typeof y.type && void 0 !== g ? f = g : d && (f = d.nextSibling), y.__u &= -7);
    return u.__e = w, f;
}
function P(n, l, u, t, i) {
    var o, r, e, f, c, s = u.length, a = s, h = 0;
    for(n.__k = new Array(i), o = 0; o < i; o++)null != (r = l[o]) && "boolean" != typeof r && "function" != typeof r ? ("string" == typeof r || "number" == typeof r || "bigint" == typeof r || r.constructor == String ? r = n.__k[o] = m(null, r, null, null, null) : d(r) ? r = n.__k[o] = m(k, {
        children: r
    }, null, null, null) : void 0 === r.constructor && r.__b > 0 ? r = n.__k[o] = m(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : n.__k[o] = r, f = o + h, r.__ = n, r.__b = n.__b + 1, e = null, -1 != (c = r.__i = L(r, u, f, a)) && (a--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > s ? h-- : i < s && h++), "function" != typeof r.type && (r.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, r.__u |= 4))) : n.__k[o] = null;
    if (a) for(o = 0; o < s; o++)null != (e = u[o]) && 0 == (2 & e.__u) && (e.__e == t && (t = S(e)), D(e, e));
    return t;
}
function A(n, l, u, t) {
    var i, o;
    if ("function" == typeof n.type) {
        for(i = n.__k, o = 0; i && o < i.length; o++)i[o] && (i[o].__ = n, l = A(i[o], l, u, t));
        return l;
    }
    n.__e != l && (t && (l && n.type && !l.parentNode && (l = S(n)), u.insertBefore(n.__e, l || null)), l = n.__e);
    do {
        l = l && l.nextSibling;
    }while (null != l && 8 == l.nodeType)
    return l;
}
function H(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (d(n) ? n.some(function(n) {
        H(n, l);
    }) : l.push(n)), l;
}
function L(n, l, u, t) {
    var i, o, r, e = n.key, f = n.type, c = l[u], s = null != c && 0 == (2 & c.__u);
    if (null === c && null == e || s && e == c.key && f == c.type) return u;
    if (t > (s ? 1 : 0)) {
        for(i = u - 1, o = u + 1; i >= 0 || o < l.length;)if (null != (c = l[r = i >= 0 ? i-- : o++]) && 0 == (2 & c.__u) && e == c.key && f == c.type) return r;
    }
    return -1;
}
function T(n, l, u) {
    "-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || y.test(l) ? u : u + "px";
}
function j(n, l, u, t, i) {
    var o, r;
    n: if ("style" == l) if ("string" == typeof u) n.style.cssText = u;
    else {
        if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || T(n.style, l, "");
        if (u) for(l in u)t && u[l] == t[l] || T(n.style, l, u[l]);
    }
    else if ("o" == l[0] && "n" == l[1]) o = l != (l = l.replace(f, "$1")), r = l.toLowerCase(), l = r in n || "onFocusOut" == l || "onFocusIn" == l ? r.slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = c, n.addEventListener(l, o ? a : s, o)) : n.removeEventListener(l, o ? a : s, o);
    else {
        if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
    }
}
function F(n) {
    return function(u) {
        if (this.l) {
            var t = this.l[u.type + n];
            if (null == u.t) u.t = c++;
            else if (u.t < t.u) return;
            return t(l.event ? l.event(u) : u);
        }
    };
}
function O(n, u, t, i, o, r, e, f, c, s) {
    var a, h, p, v, y, _, m, b, S, C, M, $, P, A, H, L, T, j = u.type;
    if (void 0 !== u.constructor) return null;
    128 & t.__u && (c = !!(32 & t.__u), r = [
        f = u.__e = t.__e
    ]), (a = l.__b) && a(u);
    n: if ("function" == typeof j) try {
        if (b = u.props, S = "prototype" in j && j.prototype.render, C = (a = j.contextType) && i[a.__c], M = a ? C ? C.props.value : a.__ : i, t.__c ? m = (h = u.__c = t.__c).__ = h.__E : (S ? u.__c = h = new j(b, M) : (u.__c = h = new x(b, M), h.constructor = j, h.render = E), C && C.sub(h), h.state || (h.state = {}), h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), S && null == h.__s && (h.__s = h.state), S && null != j.getDerivedStateFromProps && (h.__s == h.state && (h.__s = w({}, h.__s)), w(h.__s, j.getDerivedStateFromProps(b, h.__s))), v = h.props, y = h.state, h.__v = u, p) S && null == j.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), S && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
            if (S && null == j.getDerivedStateFromProps && b !== v && null != h.componentWillReceiveProps && h.componentWillReceiveProps(b, M), u.__v == t.__v || !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(b, h.__s, M)) {
                for(u.__v != t.__v && (h.props = b, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
                    n && (n.__ = u);
                }), $ = 0; $ < h._sb.length; $++)h.__h.push(h._sb[$]);
                h._sb = [], h.__h.length && e.push(h);
                break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(b, h.__s, M), S && null != h.componentDidUpdate && h.__h.push(function() {
                h.componentDidUpdate(v, y, _);
            });
        }
        if (h.context = M, h.props = b, h.__P = n, h.__e = !1, P = l.__r, A = 0, S) {
            for(h.state = h.__s, h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]);
            h._sb = [];
        } else do {
            h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        }while (h.__d && ++A < 25)
        h.state = h.__s, null != h.getChildContext && (i = w(w({}, i), h.getChildContext())), S && !p && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(v, y)), L = a, null != a && a.type === k && null == a.key && (L = V(a.props.children)), f = I(n, d(L) ? L : [
            L
        ], u, t, i, o, r, e, f, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && e.push(h), m && (h.__E = h.__ = null);
    } catch (n) {
        if (u.__v = null, c || null != r) if (n.then) {
            for(u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;)f = f.nextSibling;
            r[r.indexOf(f)] = null, u.__e = f;
        } else {
            for(T = r.length; T--;)g(r[T]);
            z(u);
        }
        else u.__e = t.__e, u.__k = t.__k, n.then || z(u);
        l.__e(n, u, t);
    }
    else null == r && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = q(t.__e, u, t, i, o, r, e, c, s);
    return (a = l.diffed) && a(u), 128 & u.__u ? void 0 : f;
}
function z(n) {
    n && n.__c && (n.__c.__e = !0), n && n.__k && n.__k.forEach(z);
}
function N(n, u, t) {
    for(var i = 0; i < t.length; i++)B(t[i], t[++i], t[++i]);
    l.__c && l.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l.__e(n, u.__v);
        }
    });
}
function V(n) {
    return "object" != typeof n || null == n || n.__b && n.__b > 0 ? n : d(n) ? n.map(V) : w({}, n);
}
function q(u, t, i, o, r, e, f, c, s) {
    var a, h, v, y, w, _, m, b = i.props || p, k = t.props, x = t.type;
    if ("svg" == x ? r = "http://www.w3.org/2000/svg" : "math" == x ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), null != e) {
        for(a = 0; a < e.length; a++)if ((w = e[a]) && "setAttribute" in w == !!x && (x ? w.localName == x : 3 == w.nodeType)) {
            u = w, e[a] = null;
            break;
        }
    }
    if (null == u) {
        if (null == x) return document.createTextNode(k);
        u = document.createElementNS(r, x, k.is && k), c && (l.__m && l.__m(t, e), c = !1), e = null;
    }
    if (null == x) b === k || c && u.data == k || (u.data = k);
    else {
        if (e = e && n.call(u.childNodes), !c && null != e) for(b = {}, a = 0; a < u.attributes.length; a++)b[(w = u.attributes[a]).name] = w.value;
        for(a in b)if (w = b[a], "children" == a) ;
        else if ("dangerouslySetInnerHTML" == a) v = w;
        else if (!(a in k)) {
            if ("value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k) continue;
            j(u, a, null, w, r);
        }
        for(a in k)w = k[a], "children" == a ? y = w : "dangerouslySetInnerHTML" == a ? h = w : "value" == a ? _ = w : "checked" == a ? m = w : c && "function" != typeof w || b[a] === w || j(u, a, w, b[a], r);
        if (h) c || v && (h.__html == v.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
        else if (v && (u.innerHTML = ""), I("template" == t.type ? u.content : u, d(y) ? y : [
            y
        ], t, i, o, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : r, e, f, e ? e[0] : i.__k && S(i, 0), c, s), null != e) for(a = e.length; a--;)g(e[a]);
        c || (a = "value", "progress" == x && null == _ ? u.removeAttribute("value") : null != _ && (_ !== u[a] || "progress" == x && !_ || "option" == x && _ != b[a]) && j(u, a, _, b[a], r), a = "checked", null != m && m != u[a] && j(u, a, m, b[a], r));
    }
    return u;
}
function B(n, u, t) {
    try {
        if ("function" == typeof n) {
            var i = "function" == typeof n.__u;
            i && n.__u(), i && null == u || (n.__u = n(u));
        } else n.current = u;
    } catch (n) {
        l.__e(n, t);
    }
}
function D(n, u, t) {
    var i, o;
    if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || B(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            l.__e(n, u);
        }
        i.base = i.__P = null;
    }
    if (i = n.__k) for(o = 0; o < i.length; o++)i[o] && D(i[o], u, t || "function" != typeof n.type);
    t || g(n.__e), n.__c = n.__ = n.__e = void 0;
}
function E(n, l, u) {
    return this.constructor(n, u);
}
function G(u, t, i) {
    var o, r, e, f;
    t == document && (t = document.documentElement), l.__ && l.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], O(t, u = (!o && i || t).__k = _(k, null, [
        u
    ]), r || p, p, t.namespaceURI, !o && i ? [
        i
    ] : r ? null : t.firstChild ? n.call(t.childNodes) : null, e, !o && i ? i : r ? r.__e : t.firstChild, o, f), N(e, u, f);
}
function J(n, l) {
    G(n, l, J);
}
function K(l, u, t) {
    var i, o, r, e, f = w({}, l.props);
    for(r in l.type && l.type.defaultProps && (e = l.type.defaultProps), u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = void 0 === u[r] && null != e ? e[r] : u[r];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), m(l.type, f, i || l.key, o || l.ref, null);
}
function Q(n) {
    function l(n) {
        var u, t;
        return this.getChildContext || (u = new Set, (t = {})[l.__c] = this, this.getChildContext = function() {
            return t;
        }, this.componentWillUnmount = function() {
            u = null;
        }, this.shouldComponentUpdate = function(n) {
            this.props.value != n.value && u.forEach(function(n) {
                n.__e = !0, M(n);
            });
        }, this.sub = function(n) {
            u.add(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function() {
                u && u.delete(n), l && l.call(n);
            };
        }), n.children;
    }
    return l.__c = "__cC" + h++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
        return n.children(l);
    }).contextType = l, l;
}
n = v.slice, l = {
    __e: function(n, l, u, t) {
        for(var i, o, r; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u = 0, t = function(n) {
    return null != n && void 0 === n.constructor;
}, x.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n && (n = n(w({}, u), this.props)), n && w(u, n), null != n && this.__v && (l && this._sb.push(l), M(this));
}, x.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), M(this));
}, x.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(!1), a = F(!0), h = 0;
;
 //# sourceMappingURL=preact.module.js.map
}),
"[project]/Documents/react-project/timesheet/node_modules/preact/hooks/dist/hooks.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallback",
    ()=>q,
    "useContext",
    ()=>x,
    "useDebugValue",
    ()=>P,
    "useEffect",
    ()=>y,
    "useErrorBoundary",
    ()=>b,
    "useId",
    ()=>g,
    "useImperativeHandle",
    ()=>F,
    "useLayoutEffect",
    ()=>_,
    "useMemo",
    ()=>T,
    "useReducer",
    ()=>h,
    "useRef",
    ()=>A,
    "useState",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/preact/dist/preact.mjs [app-ssr] (ecmascript)");
;
var t, r, u, i, o = 0, f = [], c = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["options"], e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function p(n, t) {
    c.__h && c.__h(r, n, o || t), o = 0;
    var u = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return n >= u.__.length && u.__.push({}), u.__[n];
}
function d(n) {
    return o = 1, h(D, n);
}
function h(n, u, i) {
    var o = p(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : D(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = r, !r.__f)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return !!n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = o.__c.props !== n;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), c && c.call(this, n, t, r) || i;
        };
        r.__f = !0;
        var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
        r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function y(n, u) {
    var i = p(t++, 3);
    !c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__H.__h.push(i));
}
function _(n, u) {
    var i = p(t++, 4);
    !c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__h.push(i));
}
function A(n) {
    return o = 5, T(function() {
        return {
            current: n
        };
    }, []);
}
function F(n, t, r) {
    o = 6, _(function() {
        if ("function" == typeof n) {
            var r = n(t());
            return function() {
                n(null), r && "function" == typeof r && r();
            };
        }
        if (n) return n.current = t(), function() {
            return n.current = null;
        };
    }, null == r ? r : r.concat(n));
}
function T(n, r) {
    var u = p(t++, 7);
    return C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function q(n, t) {
    return o = 8, T(function() {
        return n;
    }, t);
}
function x(n) {
    var u = r.context[n.__c], i = p(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function P(n, t) {
    c.useDebugValue && c.useDebugValue(t ? t(n) : n);
}
function b(n) {
    var u = p(t++, 10), i = d();
    return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function g() {
    var n = p(t++, 11);
    if (!n.__) {
        for(var u = r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function j() {
    for(var n; n = f.shift();)if (n.__P && n.__H) try {
        n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
    } catch (t) {
        n.__H.__h = [], c.__e(t, n.__v);
    }
}
c.__b = function(n) {
    r = null, e && e(n);
}, c.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s && s(n, t);
}, c.__r = function(n) {
    a && a(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], t = 0)), u = r;
}, c.diffed = function(n) {
    v && v(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u), n.u = void 0;
    })), u = r = null;
}, c.__c = function(n, t) {
    t.some(function(n) {
        try {
            n.__h.forEach(z), n.__h = n.__h.filter(function(n) {
                return !n.__ || B(n);
            });
        } catch (r) {
            t.some(function(n) {
                n.__h && (n.__h = []);
            }), t = [], c.__e(r, n.__v);
        }
    }), l && l(n, t);
}, c.unmount = function(n) {
    m && m(n);
    var t, r = n.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            z(n);
        } catch (n) {
            t = n;
        }
    }), r.__H = void 0, t && c.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
    var t, r = function() {
        clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 35);
    k && (t = requestAnimationFrame(r));
}
function z(n) {
    var t = r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
    var t = r;
    n.__c = n.__(), r = t;
}
function C(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function D(n, t) {
    return "function" == typeof t ? t(n) : t;
}
;
 //# sourceMappingURL=hooks.module.js.map
}),
"[project]/Documents/react-project/timesheet/node_modules/@preact/signals/dist/signals.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComputed",
    ()=>useComputed,
    "useSignal",
    ()=>useSignal,
    "useSignalEffect",
    ()=>useSignalEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/preact/dist/preact.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/preact/hooks/dist/hooks.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.mjs [app-ssr] (ecmascript)");
;
;
;
;
let h, d, p, m = [], _ = [];
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(function() {
    h = this.N;
})();
function v(t, e) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["options"][t] = e.bind(null, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["options"][t] || (()=>{}));
}
function g(t) {
    if (p) p();
    p = t && t.S();
}
function b({ data: t }) {
    const i = useSignal(t);
    i.value = t;
    const [n, f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let t = this, n = this.__v;
        while(n = n.__)if (n.__c) {
            n.__c.__$f |= 4;
            break;
        }
        const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computed"])(()=>{
            let t = i.value.value;
            return 0 === t ? 0 : !0 === t ? "" : t || "";
        }), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computed"])(()=>!Array.isArray(o.value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(o.value)), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(function() {
            this.N = T;
            if (f.value) {
                const i = o.value;
                if (t.__v && t.__v.__e && 3 === t.__v.__e.nodeType) t.__v.__e.data = i;
            }
        }), u = this.__$u.d;
        this.__$u.d = function() {
            r();
            u.call(this);
        };
        return [
            f,
            o
        ];
    }, []);
    return n.value ? f.peek() : f.value;
}
b.displayName = "_st";
Object.defineProperties(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Signal"].prototype, {
    constructor: {
        configurable: !0,
        value: void 0
    },
    type: {
        configurable: !0,
        value: b
    },
    props: {
        configurable: !0,
        get () {
            return {
                data: this
            };
        }
    },
    __b: {
        configurable: !0,
        value: 1
    }
});
v("__b", (t, i)=>{
    if ("string" == typeof i.type) {
        let t, e = i.props;
        for(let n in e){
            if ("children" === n) continue;
            let o = e[n];
            if (o instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Signal"]) {
                if (!t) i.__np = t = {};
                t[n] = o;
                e[n] = o.peek();
            }
        }
    }
    t(i);
});
v("__r", (t, i)=>{
    if (i.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"]) {
        g();
        let t, e = i.__c;
        if (e) {
            e.__$f &= -2;
            t = e.__$u;
            if (void 0 === t) e.__$u = t = function(t) {
                let i;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(function() {
                    i = this;
                });
                i.c = ()=>{
                    e.__$f |= 1;
                    e.setState({});
                };
                return i;
            }();
        }
        d = e;
        g(t);
    }
    t(i);
});
v("__e", (t, i, e, n)=>{
    g();
    d = void 0;
    t(i, e, n);
});
v("diffed", (t, i)=>{
    g();
    d = void 0;
    let e;
    if ("string" == typeof i.type && (e = i.__e)) {
        let t = i.__np, n = i.props;
        if (t) {
            let i = e.U;
            if (i) for(let e in i){
                let n = i[e];
                if (void 0 !== n && !(e in t)) {
                    n.d();
                    i[e] = void 0;
                }
            }
            else {
                i = {};
                e.U = i;
            }
            for(let o in t){
                let f = i[o], r = t[o];
                if (void 0 === f) {
                    f = y(e, o, r, n);
                    i[o] = f;
                } else f.o(r, n);
            }
        }
    }
    t(i);
});
function y(t, i, e, n) {
    const o = i in t && void 0 === t.ownerSVGElement, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(e);
    return {
        o: (t, i)=>{
            f.value = t;
            n = i;
        },
        d: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(function() {
            this.N = T;
            const e = f.value.value;
            if (n[i] !== e) {
                n[i] = e;
                if (o) t[i] = e;
                else if (e) t.setAttribute(i, e);
                else t.removeAttribute(i);
            }
        })
    };
}
v("unmount", (t, i)=>{
    if ("string" == typeof i.type) {
        let t = i.__e;
        if (t) {
            const i = t.U;
            if (i) {
                t.U = void 0;
                for(let t in i){
                    let e = i[t];
                    if (e) e.d();
                }
            }
        }
    } else {
        let t = i.__c;
        if (t) {
            const i = t.__$u;
            if (i) {
                t.__$u = void 0;
                i.d();
            }
        }
    }
    t(i);
});
v("__h", (t, i, e, n)=>{
    if (n < 3 || 9 === n) i.__$f |= 2;
    t(i, e, n);
});
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"].prototype.shouldComponentUpdate = function(t, i) {
    const e = this.__$u, n = e && void 0 !== e.s;
    for(let t in i)return !0;
    if (this.__f || "boolean" == typeof this.u && !0 === this.u) {
        const t = 2 & this.__$f;
        if (!(n || t || 4 & this.__$f)) return !0;
        if (1 & this.__$f) return !0;
    } else {
        if (!(n || 4 & this.__$f)) return !0;
        if (3 & this.__$f) return !0;
    }
    for(let i in t)if ("__source" !== i && t[i] !== this.props[i]) return !0;
    for(let i in this.props)if (!(i in t)) return !0;
    return !1;
};
function useSignal(t, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(t, i), []);
}
function useComputed(t, i) {
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(t);
    e.current = t;
    d.__$f |= 4;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computed"])(()=>e.current(), i), []);
}
const k = "undefined" == typeof requestAnimationFrame ? setTimeout : function(t) {
    const i = ()=>{
        clearTimeout(e);
        cancelAnimationFrame(n);
        t();
    }, e = setTimeout(i, 35), n = requestAnimationFrame(i);
}, q = (t)=>{
    queueMicrotask(()=>{
        queueMicrotask(t);
    });
};
function A() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batch"])(()=>{
        let t;
        while(t = m.shift())h.call(t);
    });
}
function w() {
    if (1 === m.push(this)) (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["options"].requestAnimationFrame || k)(A);
}
function F() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batch"])(()=>{
        let t;
        while(t = _.shift())h.call(t);
    });
}
function T() {
    if (1 === _.push(this)) (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["options"].requestAnimationFrame || q)(F);
}
function useSignalEffect(t) {
    const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(t);
    i.current = t;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$preact$2f$hooks$2f$dist$2f$hooks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(function() {
            this.N = w;
            return i.current();
        }), []);
}
;
 //# sourceMappingURL=signals.mjs.map
}),
"[project]/Documents/react-project/timesheet/node_modules/i18next/dist/esm/i18next.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changeLanguage",
    ()=>changeLanguage,
    "createInstance",
    ()=>createInstance,
    "default",
    ()=>instance,
    "dir",
    ()=>dir,
    "exists",
    ()=>exists,
    "getFixedT",
    ()=>getFixedT,
    "hasLoadedNamespace",
    ()=>hasLoadedNamespace,
    "init",
    ()=>init,
    "keyFromSelector",
    ()=>keysFromSelector,
    "loadLanguages",
    ()=>loadLanguages,
    "loadNamespaces",
    ()=>loadNamespaces,
    "loadResources",
    ()=>loadResources,
    "reloadResources",
    ()=>reloadResources,
    "setDefaultNamespace",
    ()=>setDefaultNamespace,
    "t",
    ()=>t,
    "use",
    ()=>use
]);
const isString = (obj)=>typeof obj === 'string';
const defer = ()=>{
    let res;
    let rej;
    const promise = new Promise((resolve, reject)=>{
        res = resolve;
        rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
};
const makeString = (object)=>{
    if (object == null) return '';
    return '' + object;
};
const copy = (a, s, t)=>{
    a.forEach((m)=>{
        if (s[m]) t[m] = s[m];
    });
};
const lastOfPathSeparatorRegExp = /###/g;
const cleanKey = (key)=>key && key.indexOf('###') > -1 ? key.replace(lastOfPathSeparatorRegExp, '.') : key;
const canNotTraverseDeeper = (object)=>!object || isString(object);
const getLastOfPath = (object, path, Empty)=>{
    const stack = !isString(path) ? path : path.split('.');
    let stackIndex = 0;
    while(stackIndex < stack.length - 1){
        if (canNotTraverseDeeper(object)) return {};
        const key = cleanKey(stack[stackIndex]);
        if (!object[key] && Empty) object[key] = new Empty();
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            object = object[key];
        } else {
            object = {};
        }
        ++stackIndex;
    }
    if (canNotTraverseDeeper(object)) return {};
    return {
        obj: object,
        k: cleanKey(stack[stackIndex])
    };
};
const setPath = (object, path, newValue)=>{
    const { obj, k } = getLastOfPath(object, path, Object);
    if (obj !== undefined || path.length === 1) {
        obj[k] = newValue;
        return;
    }
    let e = path[path.length - 1];
    let p = path.slice(0, path.length - 1);
    let last = getLastOfPath(object, p, Object);
    while(last.obj === undefined && p.length){
        e = `${p[p.length - 1]}.${e}`;
        p = p.slice(0, p.length - 1);
        last = getLastOfPath(object, p, Object);
        if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== 'undefined') {
            last.obj = undefined;
        }
    }
    last.obj[`${last.k}.${e}`] = newValue;
};
const pushPath = (object, path, newValue, concat)=>{
    const { obj, k } = getLastOfPath(object, path, Object);
    obj[k] = obj[k] || [];
    obj[k].push(newValue);
};
const getPath = (object, path)=>{
    const { obj, k } = getLastOfPath(object, path);
    if (!obj) return undefined;
    if (!Object.prototype.hasOwnProperty.call(obj, k)) return undefined;
    return obj[k];
};
const getPathWithDefaults = (data, defaultData, key)=>{
    const value = getPath(data, key);
    if (value !== undefined) {
        return value;
    }
    return getPath(defaultData, key);
};
const deepExtend = (target, source, overwrite)=>{
    for(const prop in source){
        if (prop !== '__proto__' && prop !== 'constructor') {
            if (prop in target) {
                if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
                    if (overwrite) target[prop] = source[prop];
                } else {
                    deepExtend(target[prop], source[prop], overwrite);
                }
            } else {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};
const regexEscape = (str)=>str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var _entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
};
const escape = (data)=>{
    if (isString(data)) {
        return data.replace(/[&<>"'\/]/g, (s)=>_entityMap[s]);
    }
    return data;
};
class RegExpCache {
    constructor(capacity){
        this.capacity = capacity;
        this.regExpMap = new Map();
        this.regExpQueue = [];
    }
    getRegExp(pattern) {
        const regExpFromCache = this.regExpMap.get(pattern);
        if (regExpFromCache !== undefined) {
            return regExpFromCache;
        }
        const regExpNew = new RegExp(pattern);
        if (this.regExpQueue.length === this.capacity) {
            this.regExpMap.delete(this.regExpQueue.shift());
        }
        this.regExpMap.set(pattern, regExpNew);
        this.regExpQueue.push(pattern);
        return regExpNew;
    }
}
const chars = [
    ' ',
    ',',
    '?',
    '!',
    ';'
];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
const looksLikeObjectPath = (key, nsSeparator, keySeparator)=>{
    nsSeparator = nsSeparator || '';
    keySeparator = keySeparator || '';
    const possibleChars = chars.filter((c)=>nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
    if (possibleChars.length === 0) return true;
    const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c)=>c === '?' ? '\\?' : c).join('|')})`);
    let matched = !r.test(key);
    if (!matched) {
        const ki = key.indexOf(keySeparator);
        if (ki > 0 && !r.test(key.substring(0, ki))) {
            matched = true;
        }
    }
    return matched;
};
const deepFind = (obj, path, keySeparator = '.')=>{
    if (!obj) return undefined;
    if (obj[path]) {
        if (!Object.prototype.hasOwnProperty.call(obj, path)) return undefined;
        return obj[path];
    }
    const tokens = path.split(keySeparator);
    let current = obj;
    for(let i = 0; i < tokens.length;){
        if (!current || typeof current !== 'object') {
            return undefined;
        }
        let next;
        let nextPath = '';
        for(let j = i; j < tokens.length; ++j){
            if (j !== i) {
                nextPath += keySeparator;
            }
            nextPath += tokens[j];
            next = current[nextPath];
            if (next !== undefined) {
                if ([
                    'string',
                    'number',
                    'boolean'
                ].indexOf(typeof next) > -1 && j < tokens.length - 1) {
                    continue;
                }
                i += j - i + 1;
                break;
            }
        }
        current = next;
    }
    return current;
};
const getCleanedCode = (code)=>code?.replace('_', '-');
const consoleLogger = {
    type: 'logger',
    log (args) {
        this.output('log', args);
    },
    warn (args) {
        this.output('warn', args);
    },
    error (args) {
        this.output('error', args);
    },
    output (type, args) {
        console?.[type]?.apply?.(console, args);
    }
};
class Logger {
    constructor(concreteLogger, options = {}){
        this.init(concreteLogger, options);
    }
    init(concreteLogger, options = {}) {
        this.prefix = options.prefix || 'i18next:';
        this.logger = concreteLogger || consoleLogger;
        this.options = options;
        this.debug = options.debug;
    }
    log(...args) {
        return this.forward(args, 'log', '', true);
    }
    warn(...args) {
        return this.forward(args, 'warn', '', true);
    }
    error(...args) {
        return this.forward(args, 'error', '');
    }
    deprecate(...args) {
        return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
    forward(args, lvl, prefix, debugOnly) {
        if (debugOnly && !this.debug) return null;
        if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
        return this.logger[lvl](args);
    }
    create(moduleName) {
        return new Logger(this.logger, {
            ...{
                prefix: `${this.prefix}:${moduleName}:`
            },
            ...this.options
        });
    }
    clone(options) {
        options = options || this.options;
        options.prefix = options.prefix || this.prefix;
        return new Logger(this.logger, options);
    }
}
var baseLogger = new Logger();
class EventEmitter {
    constructor(){
        this.observers = {};
    }
    on(events, listener) {
        events.split(' ').forEach((event)=>{
            if (!this.observers[event]) this.observers[event] = new Map();
            const numListeners = this.observers[event].get(listener) || 0;
            this.observers[event].set(listener, numListeners + 1);
        });
        return this;
    }
    off(event, listener) {
        if (!this.observers[event]) return;
        if (!listener) {
            delete this.observers[event];
            return;
        }
        this.observers[event].delete(listener);
    }
    emit(event, ...args) {
        if (this.observers[event]) {
            const cloned = Array.from(this.observers[event].entries());
            cloned.forEach(([observer, numTimesAdded])=>{
                for(let i = 0; i < numTimesAdded; i++){
                    observer(...args);
                }
            });
        }
        if (this.observers['*']) {
            const cloned = Array.from(this.observers['*'].entries());
            cloned.forEach(([observer, numTimesAdded])=>{
                for(let i = 0; i < numTimesAdded; i++){
                    observer.apply(observer, [
                        event,
                        ...args
                    ]);
                }
            });
        }
    }
}
class ResourceStore extends EventEmitter {
    constructor(data, options = {
        ns: [
            'translation'
        ],
        defaultNS: 'translation'
    }){
        super();
        this.data = data || {};
        this.options = options;
        if (this.options.keySeparator === undefined) {
            this.options.keySeparator = '.';
        }
        if (this.options.ignoreJSONStructure === undefined) {
            this.options.ignoreJSONStructure = true;
        }
    }
    addNamespaces(ns) {
        if (this.options.ns.indexOf(ns) < 0) {
            this.options.ns.push(ns);
        }
    }
    removeNamespaces(ns) {
        const index = this.options.ns.indexOf(ns);
        if (index > -1) {
            this.options.ns.splice(index, 1);
        }
    }
    getResource(lng, ns, key, options = {}) {
        const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
        const ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let path;
        if (lng.indexOf('.') > -1) {
            path = lng.split('.');
        } else {
            path = [
                lng,
                ns
            ];
            if (key) {
                if (Array.isArray(key)) {
                    path.push(...key);
                } else if (isString(key) && keySeparator) {
                    path.push(...key.split(keySeparator));
                } else {
                    path.push(key);
                }
            }
        }
        const result = getPath(this.data, path);
        if (!result && !ns && !key && lng.indexOf('.') > -1) {
            lng = path[0];
            ns = path[1];
            key = path.slice(2).join('.');
        }
        if (result || !ignoreJSONStructure || !isString(key)) return result;
        return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
    }
    addResource(lng, ns, key, value, options = {
        silent: false
    }) {
        const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
        let path = [
            lng,
            ns
        ];
        if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
        if (lng.indexOf('.') > -1) {
            path = lng.split('.');
            value = ns;
            ns = path[1];
        }
        this.addNamespaces(ns);
        setPath(this.data, path, value);
        if (!options.silent) this.emit('added', lng, ns, key, value);
    }
    addResources(lng, ns, resources, options = {
        silent: false
    }) {
        for(const m in resources){
            if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
                silent: true
            });
        }
        if (!options.silent) this.emit('added', lng, ns, resources);
    }
    addResourceBundle(lng, ns, resources, deep, overwrite, options = {
        silent: false,
        skipCopy: false
    }) {
        let path = [
            lng,
            ns
        ];
        if (lng.indexOf('.') > -1) {
            path = lng.split('.');
            deep = resources;
            resources = ns;
            ns = path[1];
        }
        this.addNamespaces(ns);
        let pack = getPath(this.data, path) || {};
        if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
        if (deep) {
            deepExtend(pack, resources, overwrite);
        } else {
            pack = {
                ...pack,
                ...resources
            };
        }
        setPath(this.data, path, pack);
        if (!options.silent) this.emit('added', lng, ns, resources);
    }
    removeResourceBundle(lng, ns) {
        if (this.hasResourceBundle(lng, ns)) {
            delete this.data[lng][ns];
        }
        this.removeNamespaces(ns);
        this.emit('removed', lng, ns);
    }
    hasResourceBundle(lng, ns) {
        return this.getResource(lng, ns) !== undefined;
    }
    getResourceBundle(lng, ns) {
        if (!ns) ns = this.options.defaultNS;
        return this.getResource(lng, ns);
    }
    getDataByLanguage(lng) {
        return this.data[lng];
    }
    hasLanguageSomeTranslations(lng) {
        const data = this.getDataByLanguage(lng);
        const n = data && Object.keys(data) || [];
        return !!n.find((v)=>data[v] && Object.keys(data[v]).length > 0);
    }
    toJSON() {
        return this.data;
    }
}
var postProcessor = {
    processors: {},
    addPostProcessor (module) {
        this.processors[module.name] = module;
    },
    handle (processors, value, key, options, translator) {
        processors.forEach((processor)=>{
            value = this.processors[processor]?.process(value, key, options, translator) ?? value;
        });
        return value;
    }
};
const PATH_KEY = Symbol('i18next/PATH_KEY');
function createProxy() {
    const state = [];
    const handler = Object.create(null);
    let proxy;
    handler.get = (target, key)=>{
        proxy?.revoke?.();
        if (key === PATH_KEY) return state;
        state.push(key);
        proxy = Proxy.revocable(target, handler);
        return proxy.proxy;
    };
    return Proxy.revocable(Object.create(null), handler).proxy;
}
function keysFromSelector(selector, opts) {
    const { [PATH_KEY]: path } = selector(createProxy());
    return path.join(opts?.keySeparator ?? '.');
}
const checkedLoadedFor = {};
const shouldHandleAsObject = (res)=>!isString(res) && typeof res !== 'boolean' && typeof res !== 'number';
class Translator extends EventEmitter {
    constructor(services, options = {}){
        super();
        copy([
            'resourceStore',
            'languageUtils',
            'pluralResolver',
            'interpolator',
            'backendConnector',
            'i18nFormat',
            'utils'
        ], services, this);
        this.options = options;
        if (this.options.keySeparator === undefined) {
            this.options.keySeparator = '.';
        }
        this.logger = baseLogger.create('translator');
    }
    changeLanguage(lng) {
        if (lng) this.language = lng;
    }
    exists(key, o = {
        interpolation: {}
    }) {
        const opt = {
            ...o
        };
        if (key == null) return false;
        const resolved = this.resolve(key, opt);
        if (resolved?.res === undefined) return false;
        const isObject = shouldHandleAsObject(resolved.res);
        if (opt.returnObjects === false && isObject) {
            return false;
        }
        return true;
    }
    extractFromKey(key, opt) {
        let nsSeparator = opt.nsSeparator !== undefined ? opt.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === undefined) nsSeparator = ':';
        const keySeparator = opt.keySeparator !== undefined ? opt.keySeparator : this.options.keySeparator;
        let namespaces = opt.ns || this.options.defaultNS || [];
        const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
        const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
        if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
            const m = key.match(this.interpolator.nestingRegexp);
            if (m && m.length > 0) {
                return {
                    key,
                    namespaces: isString(namespaces) ? [
                        namespaces
                    ] : namespaces
                };
            }
            const parts = key.split(nsSeparator);
            if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
            key = parts.join(keySeparator);
        }
        return {
            key,
            namespaces: isString(namespaces) ? [
                namespaces
            ] : namespaces
        };
    }
    translate(keys, o, lastKey) {
        let opt = typeof o === 'object' ? {
            ...o
        } : o;
        if (typeof opt !== 'object' && this.options.overloadTranslationOptionHandler) {
            opt = this.options.overloadTranslationOptionHandler(arguments);
        }
        if (typeof opt === 'object') opt = {
            ...opt
        };
        if (!opt) opt = {};
        if (keys == null) return '';
        if (typeof keys === 'function') keys = keysFromSelector(keys, {
            ...this.options,
            ...opt
        });
        if (!Array.isArray(keys)) keys = [
            String(keys)
        ];
        const returnDetails = opt.returnDetails !== undefined ? opt.returnDetails : this.options.returnDetails;
        const keySeparator = opt.keySeparator !== undefined ? opt.keySeparator : this.options.keySeparator;
        const { key, namespaces } = this.extractFromKey(keys[keys.length - 1], opt);
        const namespace = namespaces[namespaces.length - 1];
        let nsSeparator = opt.nsSeparator !== undefined ? opt.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === undefined) nsSeparator = ':';
        const lng = opt.lng || this.language;
        const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (lng?.toLowerCase() === 'cimode') {
            if (appendNamespaceToCIMode) {
                if (returnDetails) {
                    return {
                        res: `${namespace}${nsSeparator}${key}`,
                        usedKey: key,
                        exactUsedKey: key,
                        usedLng: lng,
                        usedNS: namespace,
                        usedParams: this.getUsedParamsDetails(opt)
                    };
                }
                return `${namespace}${nsSeparator}${key}`;
            }
            if (returnDetails) {
                return {
                    res: key,
                    usedKey: key,
                    exactUsedKey: key,
                    usedLng: lng,
                    usedNS: namespace,
                    usedParams: this.getUsedParamsDetails(opt)
                };
            }
            return key;
        }
        const resolved = this.resolve(keys, opt);
        let res = resolved?.res;
        const resUsedKey = resolved?.usedKey || key;
        const resExactUsedKey = resolved?.exactUsedKey || key;
        const noObject = [
            '[object Number]',
            '[object Function]',
            '[object RegExp]'
        ];
        const joinArrays = opt.joinArrays !== undefined ? opt.joinArrays : this.options.joinArrays;
        const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
        const needsPluralHandling = opt.count !== undefined && !isString(opt.count);
        const hasDefaultValue = Translator.hasDefaultValue(opt);
        const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : '';
        const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, {
            ordinal: false
        }) : '';
        const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
        const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
        let resForObjHndl = res;
        if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
            resForObjHndl = defaultValue;
        }
        const handleAsObject = shouldHandleAsObject(resForObjHndl);
        const resType = Object.prototype.toString.apply(resForObjHndl);
        if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
            if (!opt.returnObjects && !this.options.returnObjects) {
                if (!this.options.returnedObjectHandler) {
                    this.logger.warn('accessing an object - but returnObjects options is not enabled!');
                }
                const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
                    ...opt,
                    ns: namespaces
                }) : `key '${key} (${this.language})' returned an object instead of string.`;
                if (returnDetails) {
                    resolved.res = r;
                    resolved.usedParams = this.getUsedParamsDetails(opt);
                    return resolved;
                }
                return r;
            }
            if (keySeparator) {
                const resTypeIsArray = Array.isArray(resForObjHndl);
                const copy = resTypeIsArray ? [] : {};
                const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
                for(const m in resForObjHndl){
                    if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
                        const deepKey = `${newKeyToUse}${keySeparator}${m}`;
                        if (hasDefaultValue && !res) {
                            copy[m] = this.translate(deepKey, {
                                ...opt,
                                defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : undefined,
                                ...{
                                    joinArrays: false,
                                    ns: namespaces
                                }
                            });
                        } else {
                            copy[m] = this.translate(deepKey, {
                                ...opt,
                                ...{
                                    joinArrays: false,
                                    ns: namespaces
                                }
                            });
                        }
                        if (copy[m] === deepKey) copy[m] = resForObjHndl[m];
                    }
                }
                res = copy;
            }
        } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
            res = res.join(joinArrays);
            if (res) res = this.extendTranslation(res, keys, opt, lastKey);
        } else {
            let usedDefault = false;
            let usedKey = false;
            if (!this.isValidLookup(res) && hasDefaultValue) {
                usedDefault = true;
                res = defaultValue;
            }
            if (!this.isValidLookup(res)) {
                usedKey = true;
                res = key;
            }
            const missingKeyNoValueFallbackToKey = opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
            const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
            const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
            if (usedKey || usedDefault || updateMissing) {
                this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
                if (keySeparator) {
                    const fk = this.resolve(key, {
                        ...opt,
                        keySeparator: false
                    });
                    if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
                }
                let lngs = [];
                const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
                if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
                    for(let i = 0; i < fallbackLngs.length; i++){
                        lngs.push(fallbackLngs[i]);
                    }
                } else if (this.options.saveMissingTo === 'all') {
                    lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
                } else {
                    lngs.push(opt.lng || this.language);
                }
                const send = (l, k, specificDefaultValue)=>{
                    const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
                    if (this.options.missingKeyHandler) {
                        this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
                    } else if (this.backendConnector?.saveMissing) {
                        this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
                    }
                    this.emit('missingKey', l, namespace, k, res);
                };
                if (this.options.saveMissing) {
                    if (this.options.saveMissingPlurals && needsPluralHandling) {
                        lngs.forEach((language)=>{
                            const suffixes = this.pluralResolver.getSuffixes(language, opt);
                            if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                                suffixes.push(`${this.options.pluralSeparator}zero`);
                            }
                            suffixes.forEach((suffix)=>{
                                send([
                                    language
                                ], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
                            });
                        });
                    } else {
                        send(lngs, key, defaultValue);
                    }
                }
            }
            res = this.extendTranslation(res, keys, opt, resolved, lastKey);
            if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
                res = `${namespace}${nsSeparator}${key}`;
            }
            if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
                res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : undefined, opt);
            }
        }
        if (returnDetails) {
            resolved.res = res;
            resolved.usedParams = this.getUsedParamsDetails(opt);
            return resolved;
        }
        return res;
    }
    extendTranslation(res, key, opt, resolved, lastKey) {
        if (this.i18nFormat?.parse) {
            res = this.i18nFormat.parse(res, {
                ...this.options.interpolation.defaultVariables,
                ...opt
            }, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
                resolved
            });
        } else if (!opt.skipInterpolation) {
            if (opt.interpolation) this.interpolator.init({
                ...opt,
                ...{
                    interpolation: {
                        ...this.options.interpolation,
                        ...opt.interpolation
                    }
                }
            });
            const skipOnVariables = isString(res) && (opt?.interpolation?.skipOnVariables !== undefined ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let nestBef;
            if (skipOnVariables) {
                const nb = res.match(this.interpolator.nestingRegexp);
                nestBef = nb && nb.length;
            }
            let data = opt.replace && !isString(opt.replace) ? opt.replace : opt;
            if (this.options.interpolation.defaultVariables) data = {
                ...this.options.interpolation.defaultVariables,
                ...data
            };
            res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
            if (skipOnVariables) {
                const na = res.match(this.interpolator.nestingRegexp);
                const nestAft = na && na.length;
                if (nestBef < nestAft) opt.nest = false;
            }
            if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
            if (opt.nest !== false) res = this.interpolator.nest(res, (...args)=>{
                if (lastKey?.[0] === args[0] && !opt.context) {
                    this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
                    return null;
                }
                return this.translate(...args, key);
            }, opt);
            if (opt.interpolation) this.interpolator.reset();
        }
        const postProcess = opt.postProcess || this.options.postProcess;
        const postProcessorNames = isString(postProcess) ? [
            postProcess
        ] : postProcess;
        if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) {
            res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
                i18nResolved: {
                    ...resolved,
                    usedParams: this.getUsedParamsDetails(opt)
                },
                ...opt
            } : opt, this);
        }
        return res;
    }
    resolve(keys, opt = {}) {
        let found;
        let usedKey;
        let exactUsedKey;
        let usedLng;
        let usedNS;
        if (isString(keys)) keys = [
            keys
        ];
        keys.forEach((k)=>{
            if (this.isValidLookup(found)) return;
            const extracted = this.extractFromKey(k, opt);
            const key = extracted.key;
            usedKey = key;
            let namespaces = extracted.namespaces;
            if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
            const needsPluralHandling = opt.count !== undefined && !isString(opt.count);
            const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
            const needsContextHandling = opt.context !== undefined && (isString(opt.context) || typeof opt.context === 'number') && opt.context !== '';
            const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
            namespaces.forEach((ns)=>{
                if (this.isValidLookup(found)) return;
                usedNS = ns;
                if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
                    checkedLoadedFor[`${codes[0]}-${ns}`] = true;
                    this.logger.warn(`key "${usedKey}" for languages "${codes.join(', ')}" won't get resolved as namespace "${usedNS}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
                }
                codes.forEach((code)=>{
                    if (this.isValidLookup(found)) return;
                    usedLng = code;
                    const finalKeys = [
                        key
                    ];
                    if (this.i18nFormat?.addLookupKeys) {
                        this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
                    } else {
                        let pluralSuffix;
                        if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
                        const zeroSuffix = `${this.options.pluralSeparator}zero`;
                        const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (needsPluralHandling) {
                            if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                            }
                            finalKeys.push(key + pluralSuffix);
                            if (needsZeroSuffixLookup) {
                                finalKeys.push(key + zeroSuffix);
                            }
                        }
                        if (needsContextHandling) {
                            const contextKey = `${key}${this.options.contextSeparator || '_'}${opt.context}`;
                            finalKeys.push(contextKey);
                            if (needsPluralHandling) {
                                if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                                    finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                                }
                                finalKeys.push(contextKey + pluralSuffix);
                                if (needsZeroSuffixLookup) {
                                    finalKeys.push(contextKey + zeroSuffix);
                                }
                            }
                        }
                    }
                    let possibleKey;
                    while(possibleKey = finalKeys.pop()){
                        if (!this.isValidLookup(found)) {
                            exactUsedKey = possibleKey;
                            found = this.getResource(code, ns, possibleKey, opt);
                        }
                    }
                });
            });
        });
        return {
            res: found,
            usedKey,
            exactUsedKey,
            usedLng,
            usedNS
        };
    }
    isValidLookup(res) {
        return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
    getResource(code, ns, key, options = {}) {
        if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options);
        return this.resourceStore.getResource(code, ns, key, options);
    }
    getUsedParamsDetails(options = {}) {
        const optionsKeys = [
            'defaultValue',
            'ordinal',
            'context',
            'replace',
            'lng',
            'lngs',
            'fallbackLng',
            'ns',
            'keySeparator',
            'nsSeparator',
            'returnObjects',
            'returnDetails',
            'joinArrays',
            'postProcess',
            'interpolation'
        ];
        const useOptionsReplaceForData = options.replace && !isString(options.replace);
        let data = useOptionsReplaceForData ? options.replace : options;
        if (useOptionsReplaceForData && typeof options.count !== 'undefined') {
            data.count = options.count;
        }
        if (this.options.interpolation.defaultVariables) {
            data = {
                ...this.options.interpolation.defaultVariables,
                ...data
            };
        }
        if (!useOptionsReplaceForData) {
            data = {
                ...data
            };
            for (const key of optionsKeys){
                delete data[key];
            }
        }
        return data;
    }
    static hasDefaultValue(options) {
        const prefix = 'defaultValue';
        for(const option in options){
            if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
                return true;
            }
        }
        return false;
    }
}
class LanguageUtil {
    constructor(options){
        this.options = options;
        this.supportedLngs = this.options.supportedLngs || false;
        this.logger = baseLogger.create('languageUtils');
    }
    getScriptPartFromCode(code) {
        code = getCleanedCode(code);
        if (!code || code.indexOf('-') < 0) return null;
        const p = code.split('-');
        if (p.length === 2) return null;
        p.pop();
        if (p[p.length - 1].toLowerCase() === 'x') return null;
        return this.formatLanguageCode(p.join('-'));
    }
    getLanguagePartFromCode(code) {
        code = getCleanedCode(code);
        if (!code || code.indexOf('-') < 0) return code;
        const p = code.split('-');
        return this.formatLanguageCode(p[0]);
    }
    formatLanguageCode(code) {
        if (isString(code) && code.indexOf('-') > -1) {
            let formattedCode;
            try {
                formattedCode = Intl.getCanonicalLocales(code)[0];
            } catch (e) {}
            if (formattedCode && this.options.lowerCaseLng) {
                formattedCode = formattedCode.toLowerCase();
            }
            if (formattedCode) return formattedCode;
            if (this.options.lowerCaseLng) {
                return code.toLowerCase();
            }
            return code;
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
    isSupportedCode(code) {
        if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
            code = this.getLanguagePartFromCode(code);
        }
        return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
    getBestMatchFromCodes(codes) {
        if (!codes) return null;
        let found;
        codes.forEach((code)=>{
            if (found) return;
            const cleanedLng = this.formatLanguageCode(code);
            if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
        });
        if (!found && this.options.supportedLngs) {
            codes.forEach((code)=>{
                if (found) return;
                const lngScOnly = this.getScriptPartFromCode(code);
                if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
                const lngOnly = this.getLanguagePartFromCode(code);
                if (this.isSupportedCode(lngOnly)) return found = lngOnly;
                found = this.options.supportedLngs.find((supportedLng)=>{
                    if (supportedLng === lngOnly) return supportedLng;
                    if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
                    if (supportedLng.indexOf('-') > 0 && lngOnly.indexOf('-') < 0 && supportedLng.substring(0, supportedLng.indexOf('-')) === lngOnly) return supportedLng;
                    if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
                });
            });
        }
        if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
        return found;
    }
    getFallbackCodes(fallbacks, code) {
        if (!fallbacks) return [];
        if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
        if (isString(fallbacks)) fallbacks = [
            fallbacks
        ];
        if (Array.isArray(fallbacks)) return fallbacks;
        if (!code) return fallbacks.default || [];
        let found = fallbacks[code];
        if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
        if (!found) found = fallbacks[this.formatLanguageCode(code)];
        if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
        if (!found) found = fallbacks.default;
        return found || [];
    }
    toResolveHierarchy(code, fallbackCode) {
        const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
        const codes = [];
        const addCode = (c)=>{
            if (!c) return;
            if (this.isSupportedCode(c)) {
                codes.push(c);
            } else {
                this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
            }
        };
        if (isString(code) && (code.indexOf('-') > -1 || code.indexOf('_') > -1)) {
            if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
            if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
            if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
        } else if (isString(code)) {
            addCode(this.formatLanguageCode(code));
        }
        fallbackCodes.forEach((fc)=>{
            if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
        });
        return codes;
    }
}
const suffixesOrder = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
};
const dummyRule = {
    select: (count)=>count === 1 ? 'one' : 'other',
    resolvedOptions: ()=>({
            pluralCategories: [
                'one',
                'other'
            ]
        })
};
class PluralResolver {
    constructor(languageUtils, options = {}){
        this.languageUtils = languageUtils;
        this.options = options;
        this.logger = baseLogger.create('pluralResolver');
        this.pluralRulesCache = {};
    }
    clearCache() {
        this.pluralRulesCache = {};
    }
    getRule(code, options = {}) {
        const cleanedCode = getCleanedCode(code === 'dev' ? 'en' : code);
        const type = options.ordinal ? 'ordinal' : 'cardinal';
        const cacheKey = JSON.stringify({
            cleanedCode,
            type
        });
        if (cacheKey in this.pluralRulesCache) {
            return this.pluralRulesCache[cacheKey];
        }
        let rule;
        try {
            rule = new Intl.PluralRules(cleanedCode, {
                type
            });
        } catch (err) {
            if (typeof Intl === 'undefined') {
                this.logger.error('No Intl support, please use an Intl polyfill!');
                return dummyRule;
            }
            if (!code.match(/-|_/)) return dummyRule;
            const lngPart = this.languageUtils.getLanguagePartFromCode(code);
            rule = this.getRule(lngPart, options);
        }
        this.pluralRulesCache[cacheKey] = rule;
        return rule;
    }
    needsPlural(code, options = {}) {
        let rule = this.getRule(code, options);
        if (!rule) rule = this.getRule('dev', options);
        return rule?.resolvedOptions().pluralCategories.length > 1;
    }
    getPluralFormsOfKey(code, key, options = {}) {
        return this.getSuffixes(code, options).map((suffix)=>`${key}${suffix}`);
    }
    getSuffixes(code, options = {}) {
        let rule = this.getRule(code, options);
        if (!rule) rule = this.getRule('dev', options);
        if (!rule) return [];
        return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2)=>suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory)=>`${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${pluralCategory}`);
    }
    getSuffix(code, count, options = {}) {
        const rule = this.getRule(code, options);
        if (rule) {
            return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${rule.select(count)}`;
        }
        this.logger.warn(`no plural rule found for: ${code}`);
        return this.getSuffix('dev', count, options);
    }
}
const deepFindWithDefaults = (data, defaultData, key, keySeparator = '.', ignoreJSONStructure = true)=>{
    let path = getPathWithDefaults(data, defaultData, key);
    if (!path && ignoreJSONStructure && isString(key)) {
        path = deepFind(data, key, keySeparator);
        if (path === undefined) path = deepFind(defaultData, key, keySeparator);
    }
    return path;
};
const regexSafe = (val)=>val.replace(/\$/g, '$$$$');
class Interpolator {
    constructor(options = {}){
        this.logger = baseLogger.create('interpolator');
        this.options = options;
        this.format = options?.interpolation?.format || ((value)=>value);
        this.init(options);
    }
    init(options = {}) {
        if (!options.interpolation) options.interpolation = {
            escapeValue: true
        };
        const { escape: escape$1, escapeValue, useRawValueToEscape, prefix, prefixEscaped, suffix, suffixEscaped, formatSeparator, unescapeSuffix, unescapePrefix, nestingPrefix, nestingPrefixEscaped, nestingSuffix, nestingSuffixEscaped, nestingOptionsSeparator, maxReplaces, alwaysFormat } = options.interpolation;
        this.escape = escape$1 !== undefined ? escape$1 : escape;
        this.escapeValue = escapeValue !== undefined ? escapeValue : true;
        this.useRawValueToEscape = useRawValueToEscape !== undefined ? useRawValueToEscape : false;
        this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || '{{';
        this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || '}}';
        this.formatSeparator = formatSeparator || ',';
        this.unescapePrefix = unescapeSuffix ? '' : unescapePrefix || '-';
        this.unescapeSuffix = this.unescapePrefix ? '' : unescapeSuffix || '';
        this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape('$t(');
        this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(')');
        this.nestingOptionsSeparator = nestingOptionsSeparator || ',';
        this.maxReplaces = maxReplaces || 1000;
        this.alwaysFormat = alwaysFormat !== undefined ? alwaysFormat : false;
        this.resetRegExp();
    }
    reset() {
        if (this.options) this.init(this.options);
    }
    resetRegExp() {
        const getOrResetRegExp = (existingRegExp, pattern)=>{
            if (existingRegExp?.source === pattern) {
                existingRegExp.lastIndex = 0;
                return existingRegExp;
            }
            return new RegExp(pattern, 'g');
        };
        this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
        this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
        this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
    }
    interpolate(str, data, lng, options) {
        let match;
        let value;
        let replaces;
        const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        const handleFormat = (key)=>{
            if (key.indexOf(this.formatSeparator) < 0) {
                const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(path, undefined, lng, {
                    ...options,
                    ...data,
                    interpolationkey: key
                }) : path;
            }
            const p = key.split(this.formatSeparator);
            const k = p.shift().trim();
            const f = p.join(this.formatSeparator).trim();
            return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
                ...options,
                ...data,
                interpolationkey: k
            });
        };
        this.resetRegExp();
        const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
        const skipOnVariables = options?.interpolation?.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        const todos = [
            {
                regex: this.regexpUnescape,
                safeValue: (val)=>regexSafe(val)
            },
            {
                regex: this.regexp,
                safeValue: (val)=>this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
            }
        ];
        todos.forEach((todo)=>{
            replaces = 0;
            while(match = todo.regex.exec(str)){
                const matchedVar = match[1].trim();
                value = handleFormat(matchedVar);
                if (value === undefined) {
                    if (typeof missingInterpolationHandler === 'function') {
                        const temp = missingInterpolationHandler(str, match, options);
                        value = isString(temp) ? temp : '';
                    } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
                        value = '';
                    } else if (skipOnVariables) {
                        value = match[0];
                        continue;
                    } else {
                        this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
                        value = '';
                    }
                } else if (!isString(value) && !this.useRawValueToEscape) {
                    value = makeString(value);
                }
                const safeValue = todo.safeValue(value);
                str = str.replace(match[0], safeValue);
                if (skipOnVariables) {
                    todo.regex.lastIndex += value.length;
                    todo.regex.lastIndex -= match[0].length;
                } else {
                    todo.regex.lastIndex = 0;
                }
                replaces++;
                if (replaces >= this.maxReplaces) {
                    break;
                }
            }
        });
        return str;
    }
    nest(str, fc, options = {}) {
        let match;
        let value;
        let clonedOptions;
        const handleHasOptions = (key, inheritedOptions)=>{
            const sep = this.nestingOptionsSeparator;
            if (key.indexOf(sep) < 0) return key;
            const c = key.split(new RegExp(`${regexEscape(sep)}[ ]*{`));
            let optionsString = `{${c[1]}`;
            key = c[0];
            optionsString = this.interpolate(optionsString, clonedOptions);
            const matchedSingleQuotes = optionsString.match(/'/g);
            const matchedDoubleQuotes = optionsString.match(/"/g);
            if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || (matchedDoubleQuotes?.length ?? 0) % 2 !== 0) {
                optionsString = optionsString.replace(/'/g, '"');
            }
            try {
                clonedOptions = JSON.parse(optionsString);
                if (inheritedOptions) clonedOptions = {
                    ...inheritedOptions,
                    ...clonedOptions
                };
            } catch (e) {
                this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
                return `${key}${sep}${optionsString}`;
            }
            if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
            return key;
        };
        while(match = this.nestingRegexp.exec(str)){
            let formatters = [];
            clonedOptions = {
                ...options
            };
            clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
            clonedOptions.applyPostProcessor = false;
            delete clonedOptions.defaultValue;
            const keyEndIndex = /{.*}/.test(match[1]) ? match[1].lastIndexOf('}') + 1 : match[1].indexOf(this.formatSeparator);
            if (keyEndIndex !== -1) {
                formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem)=>elem.trim()).filter(Boolean);
                match[1] = match[1].slice(0, keyEndIndex);
            }
            value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
            if (value && match[0] === str && !isString(value)) return value;
            if (!isString(value)) value = makeString(value);
            if (!value) {
                this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
                value = '';
            }
            if (formatters.length) {
                value = formatters.reduce((v, f)=>this.format(v, f, options.lng, {
                        ...options,
                        interpolationkey: match[1].trim()
                    }), value.trim());
            }
            str = str.replace(match[0], value);
            this.regexp.lastIndex = 0;
        }
        return str;
    }
}
const parseFormatStr = (formatStr)=>{
    let formatName = formatStr.toLowerCase().trim();
    const formatOptions = {};
    if (formatStr.indexOf('(') > -1) {
        const p = formatStr.split('(');
        formatName = p[0].toLowerCase().trim();
        const optStr = p[1].substring(0, p[1].length - 1);
        if (formatName === 'currency' && optStr.indexOf(':') < 0) {
            if (!formatOptions.currency) formatOptions.currency = optStr.trim();
        } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
            if (!formatOptions.range) formatOptions.range = optStr.trim();
        } else {
            const opts = optStr.split(';');
            opts.forEach((opt)=>{
                if (opt) {
                    const [key, ...rest] = opt.split(':');
                    const val = rest.join(':').trim().replace(/^'+|'+$/g, '');
                    const trimmedKey = key.trim();
                    if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
                    if (val === 'false') formatOptions[trimmedKey] = false;
                    if (val === 'true') formatOptions[trimmedKey] = true;
                    if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
                }
            });
        }
    }
    return {
        formatName,
        formatOptions
    };
};
const createCachedFormatter = (fn)=>{
    const cache = {};
    return (v, l, o)=>{
        let optForCache = o;
        if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
            optForCache = {
                ...optForCache,
                [o.interpolationkey]: undefined
            };
        }
        const key = l + JSON.stringify(optForCache);
        let frm = cache[key];
        if (!frm) {
            frm = fn(getCleanedCode(l), o);
            cache[key] = frm;
        }
        return frm(v);
    };
};
const createNonCachedFormatter = (fn)=>(v, l, o)=>fn(getCleanedCode(l), o)(v);
class Formatter {
    constructor(options = {}){
        this.logger = baseLogger.create('formatter');
        this.options = options;
        this.init(options);
    }
    init(services, options = {
        interpolation: {}
    }) {
        this.formatSeparator = options.interpolation.formatSeparator || ',';
        const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
        this.formats = {
            number: cf((lng, opt)=>{
                const formatter = new Intl.NumberFormat(lng, {
                    ...opt
                });
                return (val)=>formatter.format(val);
            }),
            currency: cf((lng, opt)=>{
                const formatter = new Intl.NumberFormat(lng, {
                    ...opt,
                    style: 'currency'
                });
                return (val)=>formatter.format(val);
            }),
            datetime: cf((lng, opt)=>{
                const formatter = new Intl.DateTimeFormat(lng, {
                    ...opt
                });
                return (val)=>formatter.format(val);
            }),
            relativetime: cf((lng, opt)=>{
                const formatter = new Intl.RelativeTimeFormat(lng, {
                    ...opt
                });
                return (val)=>formatter.format(val, opt.range || 'day');
            }),
            list: cf((lng, opt)=>{
                const formatter = new Intl.ListFormat(lng, {
                    ...opt
                });
                return (val)=>formatter.format(val);
            })
        };
    }
    add(name, fc) {
        this.formats[name.toLowerCase().trim()] = fc;
    }
    addCached(name, fc) {
        this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
    }
    format(value, format, lng, options = {}) {
        const formats = format.split(this.formatSeparator);
        if (formats.length > 1 && formats[0].indexOf('(') > 1 && formats[0].indexOf(')') < 0 && formats.find((f)=>f.indexOf(')') > -1)) {
            const lastIndex = formats.findIndex((f)=>f.indexOf(')') > -1);
            formats[0] = [
                formats[0],
                ...formats.splice(1, lastIndex)
            ].join(this.formatSeparator);
        }
        const result = formats.reduce((mem, f)=>{
            const { formatName, formatOptions } = parseFormatStr(f);
            if (this.formats[formatName]) {
                let formatted = mem;
                try {
                    const valOptions = options?.formatParams?.[options.interpolationkey] || {};
                    const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
                    formatted = this.formats[formatName](mem, l, {
                        ...formatOptions,
                        ...options,
                        ...valOptions
                    });
                } catch (error) {
                    this.logger.warn(error);
                }
                return formatted;
            } else {
                this.logger.warn(`there was no format function for ${formatName}`);
            }
            return mem;
        }, value);
        return result;
    }
}
const removePending = (q, name)=>{
    if (q.pending[name] !== undefined) {
        delete q.pending[name];
        q.pendingCount--;
    }
};
class Connector extends EventEmitter {
    constructor(backend, store, services, options = {}){
        super();
        this.backend = backend;
        this.store = store;
        this.services = services;
        this.languageUtils = services.languageUtils;
        this.options = options;
        this.logger = baseLogger.create('backendConnector');
        this.waitingReads = [];
        this.maxParallelReads = options.maxParallelReads || 10;
        this.readingCalls = 0;
        this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
        this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
        this.state = {};
        this.queue = [];
        this.backend?.init?.(services, options.backend, options);
    }
    queueLoad(languages, namespaces, options, callback) {
        const toLoad = {};
        const pending = {};
        const toLoadLanguages = {};
        const toLoadNamespaces = {};
        languages.forEach((lng)=>{
            let hasAllNamespaces = true;
            namespaces.forEach((ns)=>{
                const name = `${lng}|${ns}`;
                if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
                    this.state[name] = 2;
                } else if (this.state[name] < 0) ;
                else if (this.state[name] === 1) {
                    if (pending[name] === undefined) pending[name] = true;
                } else {
                    this.state[name] = 1;
                    hasAllNamespaces = false;
                    if (pending[name] === undefined) pending[name] = true;
                    if (toLoad[name] === undefined) toLoad[name] = true;
                    if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
                }
            });
            if (!hasAllNamespaces) toLoadLanguages[lng] = true;
        });
        if (Object.keys(toLoad).length || Object.keys(pending).length) {
            this.queue.push({
                pending,
                pendingCount: Object.keys(pending).length,
                loaded: {},
                errors: [],
                callback
            });
        }
        return {
            toLoad: Object.keys(toLoad),
            pending: Object.keys(pending),
            toLoadLanguages: Object.keys(toLoadLanguages),
            toLoadNamespaces: Object.keys(toLoadNamespaces)
        };
    }
    loaded(name, err, data) {
        const s = name.split('|');
        const lng = s[0];
        const ns = s[1];
        if (err) this.emit('failedLoading', lng, ns, err);
        if (!err && data) {
            this.store.addResourceBundle(lng, ns, data, undefined, undefined, {
                skipCopy: true
            });
        }
        this.state[name] = err ? -1 : 2;
        if (err && data) this.state[name] = 0;
        const loaded = {};
        this.queue.forEach((q)=>{
            pushPath(q.loaded, [
                lng
            ], ns);
            removePending(q, name);
            if (err) q.errors.push(err);
            if (q.pendingCount === 0 && !q.done) {
                Object.keys(q.loaded).forEach((l)=>{
                    if (!loaded[l]) loaded[l] = {};
                    const loadedKeys = q.loaded[l];
                    if (loadedKeys.length) {
                        loadedKeys.forEach((n)=>{
                            if (loaded[l][n] === undefined) loaded[l][n] = true;
                        });
                    }
                });
                q.done = true;
                if (q.errors.length) {
                    q.callback(q.errors);
                } else {
                    q.callback();
                }
            }
        });
        this.emit('loaded', loaded);
        this.queue = this.queue.filter((q)=>!q.done);
    }
    read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
        if (!lng.length) return callback(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng,
                ns,
                fcName,
                tried,
                wait,
                callback
            });
            return;
        }
        this.readingCalls++;
        const resolver = (err, data)=>{
            this.readingCalls--;
            if (this.waitingReads.length > 0) {
                const next = this.waitingReads.shift();
                this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
            }
            if (err && data && tried < this.maxRetries) {
                setTimeout(()=>{
                    this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
                }, wait);
                return;
            }
            callback(err, data);
        };
        const fc = this.backend[fcName].bind(this.backend);
        if (fc.length === 2) {
            try {
                const r = fc(lng, ns);
                if (r && typeof r.then === 'function') {
                    r.then((data)=>resolver(null, data)).catch(resolver);
                } else {
                    resolver(null, r);
                }
            } catch (err) {
                resolver(err);
            }
            return;
        }
        return fc(lng, ns, resolver);
    }
    prepareLoading(languages, namespaces, options = {}, callback) {
        if (!this.backend) {
            this.logger.warn('No backend was added via i18next.use. Will not load resources.');
            return callback && callback();
        }
        if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
        if (isString(namespaces)) namespaces = [
            namespaces
        ];
        const toLoad = this.queueLoad(languages, namespaces, options, callback);
        if (!toLoad.toLoad.length) {
            if (!toLoad.pending.length) callback();
            return null;
        }
        toLoad.toLoad.forEach((name)=>{
            this.loadOne(name);
        });
    }
    load(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {}, callback);
    }
    reload(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {
            reload: true
        }, callback);
    }
    loadOne(name, prefix = '') {
        const s = name.split('|');
        const lng = s[0];
        const ns = s[1];
        this.read(lng, ns, 'read', undefined, undefined, (err, data)=>{
            if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
            if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
            this.loaded(name, err, data);
        });
    }
    saveMissing(languages, namespace, key, fallbackValue, isUpdate, options = {}, clb = ()=>{}) {
        if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
            this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
            return;
        }
        if (key === undefined || key === null || key === '') return;
        if (this.backend?.create) {
            const opts = {
                ...options,
                isUpdate
            };
            const fc = this.backend.create.bind(this.backend);
            if (fc.length < 6) {
                try {
                    let r;
                    if (fc.length === 5) {
                        r = fc(languages, namespace, key, fallbackValue, opts);
                    } else {
                        r = fc(languages, namespace, key, fallbackValue);
                    }
                    if (r && typeof r.then === 'function') {
                        r.then((data)=>clb(null, data)).catch(clb);
                    } else {
                        clb(null, r);
                    }
                } catch (err) {
                    clb(err);
                }
            } else {
                fc(languages, namespace, key, fallbackValue, clb, opts);
            }
        }
        if (!languages || !languages[0]) return;
        this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
}
const get = ()=>({
        debug: false,
        initAsync: true,
        ns: [
            'translation'
        ],
        defaultNS: [
            'translation'
        ],
        fallbackLng: [
            'dev'
        ],
        fallbackNS: false,
        supportedLngs: false,
        nonExplicitSupportedLngs: false,
        load: 'all',
        preload: false,
        simplifyPluralSuffix: true,
        keySeparator: '.',
        nsSeparator: ':',
        pluralSeparator: '_',
        contextSeparator: '_',
        partialBundledLanguages: false,
        saveMissing: false,
        updateMissing: false,
        saveMissingTo: 'fallback',
        saveMissingPlurals: true,
        missingKeyHandler: false,
        missingInterpolationHandler: false,
        postProcess: false,
        postProcessPassResolved: false,
        returnNull: false,
        returnEmptyString: true,
        returnObjects: false,
        joinArrays: false,
        returnedObjectHandler: false,
        parseMissingKeyHandler: false,
        appendNamespaceToMissingKey: false,
        appendNamespaceToCIMode: false,
        overloadTranslationOptionHandler: (args)=>{
            let ret = {};
            if (typeof args[1] === 'object') ret = args[1];
            if (isString(args[1])) ret.defaultValue = args[1];
            if (isString(args[2])) ret.tDescription = args[2];
            if (typeof args[2] === 'object' || typeof args[3] === 'object') {
                const options = args[3] || args[2];
                Object.keys(options).forEach((key)=>{
                    ret[key] = options[key];
                });
            }
            return ret;
        },
        interpolation: {
            escapeValue: true,
            format: (value)=>value,
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1000,
            skipOnVariables: true
        },
        cacheInBuiltFormats: true
    });
const transformOptions = (options)=>{
    if (isString(options.ns)) options.ns = [
        options.ns
    ];
    if (isString(options.fallbackLng)) options.fallbackLng = [
        options.fallbackLng
    ];
    if (isString(options.fallbackNS)) options.fallbackNS = [
        options.fallbackNS
    ];
    if (options.supportedLngs?.indexOf?.('cimode') < 0) {
        options.supportedLngs = options.supportedLngs.concat([
            'cimode'
        ]);
    }
    if (typeof options.initImmediate === 'boolean') options.initAsync = options.initImmediate;
    return options;
};
const noop = ()=>{};
const bindMemberFunctions = (inst)=>{
    const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
    mems.forEach((mem)=>{
        if (typeof inst[mem] === 'function') {
            inst[mem] = inst[mem].bind(inst);
        }
    });
};
let supportNoticeShown = false;
const usesLocize = (inst)=>{
    if (inst?.modules?.backend?.name?.indexOf('Locize') > 0) return true;
    if (inst?.modules?.backend?.constructor?.name?.indexOf('Locize') > 0) return true;
    if (inst?.options?.backend?.backends) {
        if (inst.options.backend.backends.some((b)=>b?.name?.indexOf('Locize') > 0 || b?.constructor?.name?.indexOf('Locize') > 0)) return true;
    }
    return false;
};
class I18n extends EventEmitter {
    constructor(options = {}, callback){
        super();
        this.options = transformOptions(options);
        this.services = {};
        this.logger = baseLogger;
        this.modules = {
            external: []
        };
        bindMemberFunctions(this);
        if (callback && !this.isInitialized && !options.isClone) {
            if (!this.options.initAsync) {
                this.init(options, callback);
                return this;
            }
            setTimeout(()=>{
                this.init(options, callback);
            }, 0);
        }
    }
    init(options = {}, callback) {
        this.isInitializing = true;
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        if (options.defaultNS == null && options.ns) {
            if (isString(options.ns)) {
                options.defaultNS = options.ns;
            } else if (options.ns.indexOf('translation') < 0) {
                options.defaultNS = options.ns[0];
            }
        }
        const defOpts = get();
        this.options = {
            ...defOpts,
            ...this.options,
            ...transformOptions(options)
        };
        this.options.interpolation = {
            ...defOpts.interpolation,
            ...this.options.interpolation
        };
        if (options.keySeparator !== undefined) {
            this.options.userDefinedKeySeparator = options.keySeparator;
        }
        if (options.nsSeparator !== undefined) {
            this.options.userDefinedNsSeparator = options.nsSeparator;
        }
        if (typeof this.options.overloadTranslationOptionHandler !== 'function') {
            this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
        }
        if (this.options.showSupportNotice !== false && !usesLocize(this) && !supportNoticeShown) {
            if (typeof console !== 'undefined' && typeof console.info !== 'undefined') console.info('🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙');
            supportNoticeShown = true;
        }
        const createClassOnDemand = (ClassOrObject)=>{
            if (!ClassOrObject) return null;
            if (typeof ClassOrObject === 'function') return new ClassOrObject();
            return ClassOrObject;
        };
        if (!this.options.isClone) {
            if (this.modules.logger) {
                baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
            } else {
                baseLogger.init(null, this.options);
            }
            let formatter;
            if (this.modules.formatter) {
                formatter = this.modules.formatter;
            } else {
                formatter = Formatter;
            }
            const lu = new LanguageUtil(this.options);
            this.store = new ResourceStore(this.options.resources, this.options);
            const s = this.services;
            s.logger = baseLogger;
            s.resourceStore = this.store;
            s.languageUtils = lu;
            s.pluralResolver = new PluralResolver(lu, {
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            });
            const usingLegacyFormatFunction = this.options.interpolation.format && this.options.interpolation.format !== defOpts.interpolation.format;
            if (usingLegacyFormatFunction) {
                this.logger.deprecate(`init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting`);
            }
            if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
                s.formatter = createClassOnDemand(formatter);
                if (s.formatter.init) s.formatter.init(s, this.options);
                this.options.interpolation.format = s.formatter.format.bind(s.formatter);
            }
            s.interpolator = new Interpolator(this.options);
            s.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            };
            s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
            s.backendConnector.on('*', (event, ...args)=>{
                this.emit(event, ...args);
            });
            if (this.modules.languageDetector) {
                s.languageDetector = createClassOnDemand(this.modules.languageDetector);
                if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
            }
            if (this.modules.i18nFormat) {
                s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
                if (s.i18nFormat.init) s.i18nFormat.init(this);
            }
            this.translator = new Translator(this.services, this.options);
            this.translator.on('*', (event, ...args)=>{
                this.emit(event, ...args);
            });
            this.modules.external.forEach((m)=>{
                if (m.init) m.init(this);
            });
        }
        this.format = this.options.interpolation.format;
        if (!callback) callback = noop;
        if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
        }
        if (!this.services.languageDetector && !this.options.lng) {
            this.logger.warn('init: no languageDetector is used and no lng is defined');
        }
        const storeApi = [
            'getResource',
            'hasResourceBundle',
            'getResourceBundle',
            'getDataByLanguage'
        ];
        storeApi.forEach((fcName)=>{
            this[fcName] = (...args)=>this.store[fcName](...args);
        });
        const storeApiChained = [
            'addResource',
            'addResources',
            'addResourceBundle',
            'removeResourceBundle'
        ];
        storeApiChained.forEach((fcName)=>{
            this[fcName] = (...args)=>{
                this.store[fcName](...args);
                return this;
            };
        });
        const deferred = defer();
        const load = ()=>{
            const finish = (err, t)=>{
                this.isInitializing = false;
                if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn('init: i18next is already initialized. You should call init just once!');
                this.isInitialized = true;
                if (!this.options.isClone) this.logger.log('initialized', this.options);
                this.emit('initialized', this.options);
                deferred.resolve(t);
                callback(err, t);
            };
            if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, finish);
        };
        if (this.options.resources || !this.options.initAsync) {
            load();
        } else {
            setTimeout(load, 0);
        }
        return deferred;
    }
    loadResources(language, callback = noop) {
        let usedCallback = callback;
        const usedLng = isString(language) ? language : this.language;
        if (typeof language === 'function') usedCallback = language;
        if (!this.options.resources || this.options.partialBundledLanguages) {
            if (usedLng?.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
            const toLoad = [];
            const append = (lng)=>{
                if (!lng) return;
                if (lng === 'cimode') return;
                const lngs = this.services.languageUtils.toResolveHierarchy(lng);
                lngs.forEach((l)=>{
                    if (l === 'cimode') return;
                    if (toLoad.indexOf(l) < 0) toLoad.push(l);
                });
            };
            if (!usedLng) {
                const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                fallbacks.forEach((l)=>append(l));
            } else {
                append(usedLng);
            }
            this.options.preload?.forEach?.((l)=>append(l));
            this.services.backendConnector.load(toLoad, this.options.ns, (e)=>{
                if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
                usedCallback(e);
            });
        } else {
            usedCallback(null);
        }
    }
    reloadResources(lngs, ns, callback) {
        const deferred = defer();
        if (typeof lngs === 'function') {
            callback = lngs;
            lngs = undefined;
        }
        if (typeof ns === 'function') {
            callback = ns;
            ns = undefined;
        }
        if (!lngs) lngs = this.languages;
        if (!ns) ns = this.options.ns;
        if (!callback) callback = noop;
        this.services.backendConnector.reload(lngs, ns, (err)=>{
            deferred.resolve();
            callback(err);
        });
        return deferred;
    }
    use(module) {
        if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
        if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
        if (module.type === 'backend') {
            this.modules.backend = module;
        }
        if (module.type === 'logger' || module.log && module.warn && module.error) {
            this.modules.logger = module;
        }
        if (module.type === 'languageDetector') {
            this.modules.languageDetector = module;
        }
        if (module.type === 'i18nFormat') {
            this.modules.i18nFormat = module;
        }
        if (module.type === 'postProcessor') {
            postProcessor.addPostProcessor(module);
        }
        if (module.type === 'formatter') {
            this.modules.formatter = module;
        }
        if (module.type === '3rdParty') {
            this.modules.external.push(module);
        }
        return this;
    }
    setResolvedLanguage(l) {
        if (!l || !this.languages) return;
        if ([
            'cimode',
            'dev'
        ].indexOf(l) > -1) return;
        for(let li = 0; li < this.languages.length; li++){
            const lngInLngs = this.languages[li];
            if ([
                'cimode',
                'dev'
            ].indexOf(lngInLngs) > -1) continue;
            if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
                this.resolvedLanguage = lngInLngs;
                break;
            }
        }
        if (!this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l)) {
            this.resolvedLanguage = l;
            this.languages.unshift(l);
        }
    }
    changeLanguage(lng, callback) {
        this.isLanguageChangingTo = lng;
        const deferred = defer();
        this.emit('languageChanging', lng);
        const setLngProps = (l)=>{
            this.language = l;
            this.languages = this.services.languageUtils.toResolveHierarchy(l);
            this.resolvedLanguage = undefined;
            this.setResolvedLanguage(l);
        };
        const done = (err, l)=>{
            if (l) {
                if (this.isLanguageChangingTo === lng) {
                    setLngProps(l);
                    this.translator.changeLanguage(l);
                    this.isLanguageChangingTo = undefined;
                    this.emit('languageChanged', l);
                    this.logger.log('languageChanged', l);
                }
            } else {
                this.isLanguageChangingTo = undefined;
            }
            deferred.resolve((...args)=>this.t(...args));
            if (callback) callback(err, (...args)=>this.t(...args));
        };
        const setLng = (lngs)=>{
            if (!lng && !lngs && this.services.languageDetector) lngs = [];
            const fl = isString(lngs) ? lngs : lngs && lngs[0];
            const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString(lngs) ? [
                lngs
            ] : lngs);
            if (l) {
                if (!this.language) {
                    setLngProps(l);
                }
                if (!this.translator.language) this.translator.changeLanguage(l);
                this.services.languageDetector?.cacheUserLanguage?.(l);
            }
            this.loadResources(l, (err)=>{
                done(err, l);
            });
        };
        if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
            setLng(this.services.languageDetector.detect());
        } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
            if (this.services.languageDetector.detect.length === 0) {
                this.services.languageDetector.detect().then(setLng);
            } else {
                this.services.languageDetector.detect(setLng);
            }
        } else {
            setLng(lng);
        }
        return deferred;
    }
    getFixedT(lng, ns, keyPrefix) {
        const fixedT = (key, opts, ...rest)=>{
            let o;
            if (typeof opts !== 'object') {
                o = this.options.overloadTranslationOptionHandler([
                    key,
                    opts
                ].concat(rest));
            } else {
                o = {
                    ...opts
                };
            }
            o.lng = o.lng || fixedT.lng;
            o.lngs = o.lngs || fixedT.lngs;
            o.ns = o.ns || fixedT.ns;
            if (o.keyPrefix !== '') o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
            const keySeparator = this.options.keySeparator || '.';
            let resultKey;
            if (o.keyPrefix && Array.isArray(key)) {
                resultKey = key.map((k)=>{
                    if (typeof k === 'function') k = keysFromSelector(k, {
                        ...this.options,
                        ...opts
                    });
                    return `${o.keyPrefix}${keySeparator}${k}`;
                });
            } else {
                if (typeof key === 'function') key = keysFromSelector(key, {
                    ...this.options,
                    ...opts
                });
                resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
            }
            return this.t(resultKey, o);
        };
        if (isString(lng)) {
            fixedT.lng = lng;
        } else {
            fixedT.lngs = lng;
        }
        fixedT.ns = ns;
        fixedT.keyPrefix = keyPrefix;
        return fixedT;
    }
    t(...args) {
        return this.translator?.translate(...args);
    }
    exists(...args) {
        return this.translator?.exists(...args);
    }
    setDefaultNamespace(ns) {
        this.options.defaultNS = ns;
    }
    hasLoadedNamespace(ns, options = {}) {
        if (!this.isInitialized) {
            this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
            return false;
        }
        if (!this.languages || !this.languages.length) {
            this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
            return false;
        }
        const lng = options.lng || this.resolvedLanguage || this.languages[0];
        const fallbackLng = this.options ? this.options.fallbackLng : false;
        const lastLng = this.languages[this.languages.length - 1];
        if (lng.toLowerCase() === 'cimode') return true;
        const loadNotPending = (l, n)=>{
            const loadState = this.services.backendConnector.state[`${l}|${n}`];
            return loadState === -1 || loadState === 0 || loadState === 2;
        };
        if (options.precheck) {
            const preResult = options.precheck(this, loadNotPending);
            if (preResult !== undefined) return preResult;
        }
        if (this.hasResourceBundle(lng, ns)) return true;
        if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
        if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
        return false;
    }
    loadNamespaces(ns, callback) {
        const deferred = defer();
        if (!this.options.ns) {
            if (callback) callback();
            return Promise.resolve();
        }
        if (isString(ns)) ns = [
            ns
        ];
        ns.forEach((n)=>{
            if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
        });
        this.loadResources((err)=>{
            deferred.resolve();
            if (callback) callback(err);
        });
        return deferred;
    }
    loadLanguages(lngs, callback) {
        const deferred = defer();
        if (isString(lngs)) lngs = [
            lngs
        ];
        const preloaded = this.options.preload || [];
        const newLngs = lngs.filter((lng)=>preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
        if (!newLngs.length) {
            if (callback) callback();
            return Promise.resolve();
        }
        this.options.preload = preloaded.concat(newLngs);
        this.loadResources((err)=>{
            deferred.resolve();
            if (callback) callback(err);
        });
        return deferred;
    }
    dir(lng) {
        if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
        if (!lng) return 'rtl';
        try {
            const l = new Intl.Locale(lng);
            if (l && l.getTextInfo) {
                const ti = l.getTextInfo();
                if (ti && ti.direction) return ti.direction;
            }
        } catch (e) {}
        const rtlLngs = [
            'ar',
            'shu',
            'sqr',
            'ssh',
            'xaa',
            'yhd',
            'yud',
            'aao',
            'abh',
            'abv',
            'acm',
            'acq',
            'acw',
            'acx',
            'acy',
            'adf',
            'ads',
            'aeb',
            'aec',
            'afb',
            'ajp',
            'apc',
            'apd',
            'arb',
            'arq',
            'ars',
            'ary',
            'arz',
            'auz',
            'avl',
            'ayh',
            'ayl',
            'ayn',
            'ayp',
            'bbz',
            'pga',
            'he',
            'iw',
            'ps',
            'pbt',
            'pbu',
            'pst',
            'prp',
            'prd',
            'ug',
            'ur',
            'ydd',
            'yds',
            'yih',
            'ji',
            'yi',
            'hbo',
            'men',
            'xmn',
            'fa',
            'jpr',
            'peo',
            'pes',
            'prs',
            'dv',
            'sam',
            'ckb'
        ];
        const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
        if (lng.toLowerCase().indexOf('-latn') > 1) return 'ltr';
        return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
    }
    static createInstance(options = {}, callback) {
        const instance = new I18n(options, callback);
        instance.createInstance = I18n.createInstance;
        return instance;
    }
    cloneInstance(options = {}, callback = noop) {
        const forkResourceStore = options.forkResourceStore;
        if (forkResourceStore) delete options.forkResourceStore;
        const mergedOptions = {
            ...this.options,
            ...options,
            ...{
                isClone: true
            }
        };
        const clone = new I18n(mergedOptions);
        if (options.debug !== undefined || options.prefix !== undefined) {
            clone.logger = clone.logger.clone(options);
        }
        const membersToCopy = [
            'store',
            'services',
            'language'
        ];
        membersToCopy.forEach((m)=>{
            clone[m] = this[m];
        });
        clone.services = {
            ...this.services
        };
        clone.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        if (forkResourceStore) {
            const clonedData = Object.keys(this.store.data).reduce((prev, l)=>{
                prev[l] = {
                    ...this.store.data[l]
                };
                prev[l] = Object.keys(prev[l]).reduce((acc, n)=>{
                    acc[n] = {
                        ...prev[l][n]
                    };
                    return acc;
                }, prev[l]);
                return prev;
            }, {});
            clone.store = new ResourceStore(clonedData, mergedOptions);
            clone.services.resourceStore = clone.store;
        }
        if (options.interpolation) {
            const defOpts = get();
            const mergedInterpolation = {
                ...defOpts.interpolation,
                ...this.options.interpolation,
                ...options.interpolation
            };
            const mergedForInterpolator = {
                ...mergedOptions,
                interpolation: mergedInterpolation
            };
            clone.services.interpolator = new Interpolator(mergedForInterpolator);
        }
        clone.translator = new Translator(clone.services, mergedOptions);
        clone.translator.on('*', (event, ...args)=>{
            clone.emit(event, ...args);
        });
        clone.init(mergedOptions, callback);
        clone.translator.options = mergedOptions;
        clone.translator.backendConnector.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        return clone;
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        };
    }
}
const instance = I18n.createInstance();
const createInstance = instance.createInstance;
const dir = instance.dir;
const init = instance.init;
const loadResources = instance.loadResources;
const reloadResources = instance.reloadResources;
const use = instance.use;
const changeLanguage = instance.changeLanguage;
const getFixedT = instance.getFixedT;
const t = instance.t;
const exists = instance.exists;
const setDefaultNamespace = instance.setDefaultNamespace;
const hasLoadedNamespace = instance.hasLoadedNamespace;
const loadNamespaces = instance.loadNamespaces;
const loadLanguages = instance.loadLanguages;
;
}),
"[project]/Documents/react-project/timesheet/node_modules/void-elements/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */ module.exports = {
    "area": true,
    "base": true,
    "br": true,
    "col": true,
    "embed": true,
    "hr": true,
    "img": true,
    "input": true,
    "link": true,
    "meta": true,
    "param": true,
    "source": true,
    "track": true,
    "wbr": true
};
}),
"[project]/Documents/react-project/timesheet/node_modules/html-parse-stringify/dist/html-parse-stringify.module.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$void$2d$elements$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/void-elements/index.js [app-ssr] (ecmascript)");
;
var t = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function n(n) {
    var r = {
        type: "tag",
        name: "",
        voidElement: !1,
        attrs: {},
        children: []
    }, i = n.match(/<\/?([^\s]+?)[/\s>]/);
    if (i && (r.name = i[1], (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$void$2d$elements$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][i[1]] || "/" === n.charAt(n.length - 2)) && (r.voidElement = !0), r.name.startsWith("!--"))) {
        var s = n.indexOf("--\x3e");
        return {
            type: "comment",
            comment: -1 !== s ? n.slice(4, s) : ""
        };
    }
    for(var a = new RegExp(t), c = null; null !== (c = a.exec(n));)if (c[0].trim()) if (c[1]) {
        var o = c[1].trim(), l = [
            o,
            ""
        ];
        o.indexOf("=") > -1 && (l = o.split("=")), r.attrs[l[0]] = l[1], a.lastIndex--;
    } else c[2] && (r.attrs[c[2]] = c[3].trim().substring(1, c[3].length - 1));
    return r;
}
var r = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, i = /^\s*$/, s = Object.create(null);
function a(e, t) {
    switch(t.type){
        case "text":
            return e + t.content;
        case "tag":
            return e += "<" + t.name + (t.attrs ? function(e) {
                var t = [];
                for(var n in e)t.push(n + '="' + e[n] + '"');
                return t.length ? " " + t.join(" ") : "";
            }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(a, "") + "</" + t.name + ">";
        case "comment":
            return e + "\x3c!--" + t.comment + "--\x3e";
    }
}
var c = {
    parse: function(e, t) {
        t || (t = {}), t.components || (t.components = s);
        var a, c = [], o = [], l = -1, m = !1;
        if (0 !== e.indexOf("<")) {
            var u = e.indexOf("<");
            c.push({
                type: "text",
                content: -1 === u ? e : e.substring(0, u)
            });
        }
        return e.replace(r, function(r, s) {
            if (m) {
                if (r !== "</" + a.name + ">") return;
                m = !1;
            }
            var u, f = "/" !== r.charAt(1), h = r.startsWith("\x3c!--"), p = s + r.length, d = e.charAt(p);
            if (h) {
                var v = n(r);
                return l < 0 ? (c.push(v), c) : ((u = o[l]).children.push(v), c);
            }
            if (f && (l++, "tag" === (a = n(r)).type && t.components[a.name] && (a.type = "component", m = !0), a.voidElement || m || !d || "<" === d || a.children.push({
                type: "text",
                content: e.slice(p, e.indexOf("<", p))
            }), 0 === l && c.push(a), (u = o[l - 1]) && u.children.push(a), o[l] = a), (!f || a.voidElement) && (l > -1 && (a.voidElement || a.name === r.slice(2, -1)) && (l--, a = -1 === l ? c : o[l]), !m && "<" !== d && d)) {
                u = -1 === l ? c : o[l].children;
                var x = e.indexOf("<", p), g = e.slice(p, -1 === x ? void 0 : x);
                i.test(g) && (g = " "), (x > -1 && l + u.length >= 0 || " " !== g) && u.push({
                    type: "text",
                    content: g
                });
            }
        }), c;
    },
    stringify: function(e) {
        return e.reduce(function(e, t) {
            return e + a("", t);
        }, "");
    }
};
const __TURBOPACK__default__export__ = c;
 //# sourceMappingURL=html-parse-stringify.module.js.map
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDisplayName",
    ()=>getDisplayName,
    "hasLoadedNamespace",
    ()=>hasLoadedNamespace,
    "isObject",
    ()=>isObject,
    "isString",
    ()=>isString,
    "loadLanguages",
    ()=>loadLanguages,
    "loadNamespaces",
    ()=>loadNamespaces,
    "warn",
    ()=>warn,
    "warnOnce",
    ()=>warnOnce
]);
const warn = (i18n, code, msg, rest)=>{
    const args = [
        msg,
        {
            code,
            ...rest || {}
        }
    ];
    if (i18n?.services?.logger?.forward) {
        return i18n.services.logger.forward(args, 'warn', 'react-i18next::', true);
    }
    if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
    if (i18n?.services?.logger?.warn) {
        i18n.services.logger.warn(...args);
    } else if (console?.warn) {
        console.warn(...args);
    }
};
const alreadyWarned = {};
const warnOnce = (i18n, code, msg, rest)=>{
    if (isString(msg) && alreadyWarned[msg]) return;
    if (isString(msg)) alreadyWarned[msg] = new Date();
    warn(i18n, code, msg, rest);
};
const loadedClb = (i18n, cb)=>()=>{
        if (i18n.isInitialized) {
            cb();
        } else {
            const initialized = ()=>{
                setTimeout(()=>{
                    i18n.off('initialized', initialized);
                }, 0);
                cb();
            };
            i18n.on('initialized', initialized);
        }
    };
const loadNamespaces = (i18n, ns, cb)=>{
    i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
const loadLanguages = (i18n, lng, ns, cb)=>{
    if (isString(ns)) ns = [
        ns
    ];
    if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1) return loadNamespaces(i18n, ns, cb);
    ns.forEach((n)=>{
        if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
    });
    i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
const hasLoadedNamespace = (ns, i18n, options = {})=>{
    if (!i18n.languages || !i18n.languages.length) {
        warnOnce(i18n, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
            languages: i18n.languages
        });
        return true;
    }
    return i18n.hasLoadedNamespace(ns, {
        lng: options.lng,
        precheck: (i18nInstance, loadNotPending)=>{
            if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
        }
    });
};
const getDisplayName = (Component)=>Component.displayName || Component.name || (isString(Component) && Component.length > 0 ? Component : 'Unknown');
const isString = (obj)=>typeof obj === 'string';
const isObject = (obj)=>typeof obj === 'object' && obj !== null;
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/unescape.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unescape",
    ()=>unescape
]);
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/'
};
const unescapeHtmlEntity = (m)=>htmlEntities[m];
const unescape = (text)=>text.replace(matchHtmlEntity, unescapeHtmlEntity);
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaults",
    ()=>getDefaults,
    "setDefaults",
    ()=>setDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$unescape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/unescape.js [app-ssr] (ecmascript)");
;
let defaultOptions = {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transWrapTextNodes: '',
    transKeepBasicHtmlNodesFor: [
        'br',
        'strong',
        'i',
        'p'
    ],
    useSuspense: true,
    unescape: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$unescape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unescape"],
    transDefaultProps: undefined
};
const setDefaults = (options = {})=>{
    defaultOptions = {
        ...defaultOptions,
        ...options
    };
};
const getDefaults = ()=>defaultOptions;
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getI18n",
    ()=>getI18n,
    "setI18n",
    ()=>setI18n
]);
let i18nInstance;
const setI18n = (instance)=>{
    i18nInstance = instance;
};
const getI18n = ()=>i18nInstance;
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/TransWithoutContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trans",
    ()=>Trans,
    "nodesToString",
    ()=>nodesToString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/i18next/dist/esm/i18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$html$2d$parse$2d$stringify$2f$dist$2f$html$2d$parse$2d$stringify$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/html-parse-stringify/dist/html-parse-stringify.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$unescape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/unescape.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const hasChildren = (node, checkLength)=>{
    if (!node) return false;
    const base = node.props?.children ?? node.children;
    if (checkLength) return base.length > 0;
    return !!base;
};
const getChildren = (node)=>{
    if (!node) return [];
    const children = node.props?.children ?? node.children;
    return node.props?.i18nIsDynamicList ? getAsArray(children) : children;
};
const hasValidReactChildren = (children)=>Array.isArray(children) && children.every(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"]);
const getAsArray = (data)=>Array.isArray(data) ? data : [
        data
    ];
const mergeProps = (source, target)=>{
    const newTarget = {
        ...target
    };
    newTarget.props = {
        ...target.props,
        ...source.props
    };
    return newTarget;
};
const getValuesFromChildren = (children)=>{
    const values = {};
    if (!children) return values;
    const getData = (childs)=>{
        const childrenArray = getAsArray(childs);
        childrenArray.forEach((child)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(child)) return;
            if (hasChildren(child)) getData(getChildren(child));
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(child) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child)) Object.assign(values, child);
        });
    };
    getData(children);
    return values;
};
const nodesToString = (children, i18nOptions, i18n, i18nKey)=>{
    if (!children) return '';
    let stringNode = '';
    const childrenArray = getAsArray(children);
    const keepArray = i18nOptions?.transSupportBasicHtmlNodes ? i18nOptions.transKeepBasicHtmlNodesFor ?? [] : [];
    childrenArray.forEach((child, childIndex)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(child)) {
            stringNode += `${child}`;
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child)) {
            const { props, type } = child;
            const childPropsCount = Object.keys(props).length;
            const shouldKeepChild = keepArray.indexOf(type) > -1;
            const childChildren = props.children;
            if (!childChildren && shouldKeepChild && !childPropsCount) {
                stringNode += `<${type}/>`;
                return;
            }
            if (!childChildren && (!shouldKeepChild || childPropsCount) || props.i18nIsDynamicList) {
                stringNode += `<${childIndex}></${childIndex}>`;
                return;
            }
            if (shouldKeepChild && childPropsCount === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(childChildren)) {
                stringNode += `<${type}>${childChildren}</${type}>`;
                return;
            }
            const content = nodesToString(childChildren, i18nOptions, i18n, i18nKey);
            stringNode += `<${childIndex}>${content}</${childIndex}>`;
            return;
        }
        if (child === null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])(i18n, 'TRANS_NULL_VALUE', `Passed in a null value as child`, {
                i18nKey
            });
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(child)) {
            const { format, ...clone } = child;
            const keys = Object.keys(clone);
            if (keys.length === 1) {
                const value = format ? `${keys[0]}, ${format}` : keys[0];
                stringNode += `{{${value}}}`;
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])(i18n, 'TRANS_INVALID_OBJ', `Invalid child - Object should only have keys {{ value, format }} (format is optional).`, {
                i18nKey,
                child
            });
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])(i18n, 'TRANS_INVALID_VAR', `Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.`, {
            i18nKey,
            child
        });
    });
    return stringNode;
};
const escapeLiteralLessThan = (str, keepArray = [], knownComponentsMap = {})=>{
    if (!str) return str;
    const knownNames = Object.keys(knownComponentsMap);
    const allValidNames = [
        ...keepArray,
        ...knownNames
    ];
    let result = '';
    let i = 0;
    while(i < str.length){
        if (str[i] === '<') {
            let isValidTag = false;
            const closingMatch = str.slice(i).match(/^<\/(\d+|[a-zA-Z][a-zA-Z0-9_-]*)>/);
            if (closingMatch) {
                const tagName = closingMatch[1];
                if (/^\d+$/.test(tagName) || allValidNames.includes(tagName)) {
                    isValidTag = true;
                    result += closingMatch[0];
                    i += closingMatch[0].length;
                }
            }
            if (!isValidTag) {
                const openingMatch = str.slice(i).match(/^<(\d+|[a-zA-Z][a-zA-Z0-9_-]*)(\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*(\/)?>/);
                if (openingMatch) {
                    const tagName = openingMatch[1];
                    if (/^\d+$/.test(tagName) || allValidNames.includes(tagName)) {
                        isValidTag = true;
                        result += openingMatch[0];
                        i += openingMatch[0].length;
                    }
                }
            }
            if (!isValidTag) {
                result += '&lt;';
                i += 1;
            }
        } else {
            result += str[i];
            i += 1;
        }
    }
    return result;
};
const renderNodes = (children, knownComponentsMap, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape)=>{
    if (targetString === '') return [];
    const keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
    const emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.map((keep)=>`<${keep}`).join('|')).test(targetString);
    if (!children && !knownComponentsMap && !emptyChildrenButNeedsHandling && !shouldUnescape) return [
        targetString
    ];
    const data = knownComponentsMap ?? {};
    const getData = (childs)=>{
        const childrenArray = getAsArray(childs);
        childrenArray.forEach((child)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(child)) return;
            if (hasChildren(child)) getData(getChildren(child));
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(child) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child)) Object.assign(data, child);
        });
    };
    getData(children);
    const escapedString = escapeLiteralLessThan(targetString, keepArray, data);
    const ast = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$html$2d$parse$2d$stringify$2f$dist$2f$html$2d$parse$2d$stringify$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].parse(`<0>${escapedString}</0>`);
    const opts = {
        ...data,
        ...combinedTOpts
    };
    const renderInner = (child, node, rootReactNode)=>{
        const childs = getChildren(child);
        const mappedChildren = mapAST(childs, node.children, rootReactNode);
        return hasValidReactChildren(childs) && mappedChildren.length === 0 || child.props?.i18nIsDynamicList ? childs : mappedChildren;
    };
    const pushTranslatedJSX = (child, inner, mem, i, isVoid)=>{
        if (child.dummy) {
            child.children = inner;
            mem.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                key: i
            }, isVoid ? undefined : inner));
        } else {
            mem.push(...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map([
                child
            ], (c)=>{
                const INTERNAL_DYNAMIC_MARKER = 'data-i18n-is-dynamic-list';
                const override = {
                    key: i,
                    [INTERNAL_DYNAMIC_MARKER]: undefined
                };
                if (c && c.props) {
                    Object.keys(c.props).forEach((k)=>{
                        if (k === 'ref' || k === 'children' || k === 'i18nIsDynamicList' || k === INTERNAL_DYNAMIC_MARKER) return;
                        override[k] = c.props[k];
                    });
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(c, override, isVoid ? null : inner);
            }));
        }
    };
    const mapAST = (reactNode, astNode, rootReactNode)=>{
        const reactNodes = getAsArray(reactNode);
        const astNodes = getAsArray(astNode);
        return astNodes.reduce((mem, node, i)=>{
            const translationContent = node.children?.[0]?.content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
            if (node.type === 'tag') {
                let tmp = reactNodes[parseInt(node.name, 10)];
                if (!tmp && knownComponentsMap) tmp = knownComponentsMap[node.name];
                if (rootReactNode.length === 1 && !tmp) tmp = rootReactNode[0][node.name];
                if (!tmp) tmp = {};
                const props = {
                    ...node.attrs
                };
                if (shouldUnescape) {
                    Object.keys(props).forEach((p)=>{
                        const val = props[p];
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(val)) {
                            props[p] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$unescape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unescape"])(val);
                        }
                    });
                }
                const child = Object.keys(props).length !== 0 ? mergeProps({
                    props
                }, tmp) : tmp;
                const isElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child);
                const isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
                const isEmptyTransWithHTML = emptyChildrenButNeedsHandling && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(child) && child.dummy && !isElement;
                const isKnownComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(knownComponentsMap) && Object.hasOwnProperty.call(knownComponentsMap, node.name);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(child)) {
                    const value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
                    mem.push(value);
                } else if (hasChildren(child) || isValidTranslationWithChildren) {
                    const inner = renderInner(child, node, rootReactNode);
                    pushTranslatedJSX(child, inner, mem, i);
                } else if (isEmptyTransWithHTML) {
                    const inner = mapAST(reactNodes, node.children, rootReactNode);
                    pushTranslatedJSX(child, inner, mem, i);
                } else if (Number.isNaN(parseFloat(node.name))) {
                    if (isKnownComponent) {
                        const inner = renderInner(child, node, rootReactNode);
                        pushTranslatedJSX(child, inner, mem, i, node.voidElement);
                    } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
                        if (node.voidElement) {
                            mem.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(node.name, {
                                key: `${node.name}-${i}`
                            }));
                        } else {
                            const inner = mapAST(reactNodes, node.children, rootReactNode);
                            mem.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(node.name, {
                                key: `${node.name}-${i}`
                            }, inner));
                        }
                    } else if (node.voidElement) {
                        mem.push(`<${node.name} />`);
                    } else {
                        const inner = mapAST(reactNodes, node.children, rootReactNode);
                        mem.push(`<${node.name}>${inner}</${node.name}>`);
                    }
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(child) && !isElement) {
                    const content = node.children[0] ? translationContent : null;
                    if (content) mem.push(content);
                } else {
                    pushTranslatedJSX(child, translationContent, mem, i, node.children.length !== 1 || !translationContent);
                }
            } else if (node.type === 'text') {
                const wrapTextNodes = i18nOptions.transWrapTextNodes;
                const unescapeFn = typeof i18nOptions.unescape === 'function' ? i18nOptions.unescape : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaults"])().unescape;
                const content = shouldUnescape ? unescapeFn(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
                if (wrapTextNodes) {
                    mem.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(wrapTextNodes, {
                        key: `${node.name}-${i}`
                    }, content));
                } else {
                    mem.push(content);
                }
            }
            return mem;
        }, []);
    };
    const result = mapAST([
        {
            dummy: true,
            children: children || []
        }
    ], ast, getAsArray(children || []));
    return getChildren(result[0]);
};
const fixComponentProps = (component, index, translation)=>{
    const componentKey = component.key || index;
    const comp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(component, {
        key: componentKey
    });
    if (!comp.props || !comp.props.children || translation.indexOf(`${index}/>`) < 0 && translation.indexOf(`${index} />`) < 0) {
        return comp;
    }
    function Componentized() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, comp);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(Componentized, {
        key: componentKey
    });
};
const generateArrayComponents = (components, translation)=>components.map((c, index)=>fixComponentProps(c, index, translation));
const generateObjectComponents = (components, translation)=>{
    const componentMap = {};
    Object.keys(components).forEach((c)=>{
        Object.assign(componentMap, {
            [c]: fixComponentProps(components[c], c, translation)
        });
    });
    return componentMap;
};
const generateComponents = (components, translation, i18n, i18nKey)=>{
    if (!components) return null;
    if (Array.isArray(components)) {
        return generateArrayComponents(components, translation);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(components)) {
        return generateObjectComponents(components, translation);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])(i18n, 'TRANS_INVALID_COMPONENTS', `<Trans /> "components" prop expects an object or array`, {
        i18nKey
    });
    return null;
};
const isComponentsMap = (object)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(object)) return false;
    if (Array.isArray(object)) return false;
    return Object.keys(object).reduce((acc, key)=>acc && Number.isNaN(Number.parseFloat(key)), true);
};
function Trans({ children, count, parent, i18nKey, context, tOptions = {}, values, defaults, components, ns, i18n: i18nFromProps, t: tFromProps, shouldUnescape, ...additionalProps }) {
    const i18n = i18nFromProps || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    if (!i18n) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])(i18n, 'NO_I18NEXT_INSTANCE', `Trans: You need to pass in an i18next instance using i18nextReactModule`, {
            i18nKey
        });
        return children;
    }
    const t = tFromProps || i18n.t.bind(i18n) || ((k)=>k);
    const reactI18nextOptions = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaults"])(),
        ...i18n.options?.react
    };
    let namespaces = ns || t.ns || i18n.options?.defaultNS;
    namespaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(namespaces) ? [
        namespaces
    ] : namespaces || [
        'translation'
    ];
    const { transDefaultProps } = reactI18nextOptions;
    const mergedTOptions = transDefaultProps?.tOptions ? {
        ...transDefaultProps.tOptions,
        ...tOptions
    } : tOptions;
    const mergedShouldUnescape = shouldUnescape ?? transDefaultProps?.shouldUnescape;
    const mergedValues = transDefaultProps?.values ? {
        ...transDefaultProps.values,
        ...values
    } : values;
    const mergedComponents = transDefaultProps?.components ? {
        ...transDefaultProps.components,
        ...components
    } : components;
    const nodeAsString = nodesToString(children, reactI18nextOptions, i18n, i18nKey);
    const defaultValue = defaults || mergedTOptions?.defaultValue || nodeAsString || reactI18nextOptions.transEmptyNodeValue || (typeof i18nKey === 'function' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyFromSelector"])(i18nKey) : i18nKey);
    const { hashTransKey } = reactI18nextOptions;
    const key = i18nKey || (hashTransKey ? hashTransKey(nodeAsString || defaultValue) : nodeAsString || defaultValue);
    if (i18n.options?.interpolation?.defaultVariables) {
        values = mergedValues && Object.keys(mergedValues).length > 0 ? {
            ...mergedValues,
            ...i18n.options.interpolation.defaultVariables
        } : {
            ...i18n.options.interpolation.defaultVariables
        };
    } else {
        values = mergedValues;
    }
    const valuesFromChildren = getValuesFromChildren(children);
    if (valuesFromChildren && typeof valuesFromChildren.count === 'number' && count === undefined) {
        count = valuesFromChildren.count;
    }
    const interpolationOverride = values || count !== undefined && !i18n.options?.interpolation?.alwaysFormat || !children ? mergedTOptions.interpolation : {
        interpolation: {
            ...mergedTOptions.interpolation,
            prefix: '#$?',
            suffix: '?$#'
        }
    };
    const combinedTOpts = {
        ...mergedTOptions,
        context: context || mergedTOptions.context,
        count,
        ...values,
        ...interpolationOverride,
        defaultValue,
        ns: namespaces
    };
    let translation = key ? t(key, combinedTOpts) : defaultValue;
    if (translation === key && defaultValue) translation = defaultValue;
    const generatedComponents = generateComponents(mergedComponents, translation, i18n, i18nKey);
    let indexedChildren = generatedComponents || children;
    let componentsMap = null;
    if (isComponentsMap(generatedComponents)) {
        componentsMap = generatedComponents;
        indexedChildren = children;
    }
    const content = renderNodes(indexedChildren, componentsMap, translation, i18n, reactI18nextOptions, combinedTOpts, mergedShouldUnescape);
    const useAsParent = parent ?? reactI18nextOptions.defaultTransParent;
    return useAsParent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(useAsParent, additionalProps, content) : content;
}
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initReactI18next",
    ()=>initReactI18next
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
;
;
const initReactI18next = {
    type: '3rdParty',
    init (instance) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDefaults"])(instance.options.react);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setI18n"])(instance);
    }
};
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nContext",
    ()=>I18nContext,
    "ReportNamespaces",
    ()=>ReportNamespaces,
    "composeInitialProps",
    ()=>composeInitialProps,
    "getInitialProps",
    ()=>getInitialProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)");
;
;
;
;
;
const I18nContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
class ReportNamespaces {
    constructor(){
        this.usedNamespaces = {};
    }
    addUsedNamespaces(namespaces) {
        namespaces.forEach((ns)=>{
            if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
        });
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces);
    }
}
const composeInitialProps = (ForComponent)=>async (ctx)=>{
        const componentsInitialProps = await ForComponent.getInitialProps?.(ctx) ?? {};
        const i18nInitialProps = getInitialProps();
        return {
            ...componentsInitialProps,
            ...i18nInitialProps
        };
    };
const getInitialProps = ()=>{
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    const namespaces = i18n.reportNamespaces?.getUsedNamespaces() ?? [];
    const ret = {};
    const initialI18nStore = {};
    i18n.languages.forEach((l)=>{
        initialI18nStore[l] = {};
        namespaces.forEach((ns)=>{
            initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
        });
    });
    ret.initialI18nStore = initialI18nStore;
    ret.initialLanguage = i18n.language;
    return ret;
};
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/Trans.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trans",
    ()=>Trans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$TransWithoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/TransWithoutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
;
;
;
;
function Trans({ children, count, parent, i18nKey, context, tOptions = {}, values, defaults, components, ns, i18n: i18nFromProps, t: tFromProps, shouldUnescape, ...additionalProps }) {
    const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nContext"]) || {};
    const i18n = i18nFromProps || i18nFromContext || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    const t = tFromProps || i18n?.t.bind(i18n);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$TransWithoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trans"])({
        children,
        count,
        parent,
        i18nKey,
        context,
        tOptions,
        values,
        defaults,
        components,
        ns: ns || t?.ns || defaultNSFromContext || i18n?.options?.defaultNS,
        i18n,
        t: tFromProps,
        shouldUnescape,
        ...additionalProps
    });
}
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/TranslationParserError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TranslationParserError",
    ()=>TranslationParserError
]);
class TranslationParserError extends Error {
    constructor(message, position, translationString){
        super(message);
        this.name = 'TranslationParserError';
        this.position = position;
        this.translationString = translationString;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TranslationParserError);
        }
    }
}
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/htmlEntityDecoder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeHtmlEntities",
    ()=>decodeHtmlEntities
]);
const commonEntities = {
    '&nbsp;': '\u00A0',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'",
    '&copy;': '©',
    '&reg;': '®',
    '&trade;': '™',
    '&hellip;': '…',
    '&ndash;': '–',
    '&mdash;': '—',
    '&lsquo;': '\u2018',
    '&rsquo;': '\u2019',
    '&sbquo;': '\u201A',
    '&ldquo;': '\u201C',
    '&rdquo;': '\u201D',
    '&bdquo;': '\u201E',
    '&dagger;': '†',
    '&Dagger;': '‡',
    '&bull;': '•',
    '&prime;': '′',
    '&Prime;': '″',
    '&lsaquo;': '‹',
    '&rsaquo;': '›',
    '&sect;': '§',
    '&para;': '¶',
    '&middot;': '·',
    '&ensp;': '\u2002',
    '&emsp;': '\u2003',
    '&thinsp;': '\u2009',
    '&euro;': '€',
    '&pound;': '£',
    '&yen;': '¥',
    '&cent;': '¢',
    '&curren;': '¤',
    '&times;': '×',
    '&divide;': '÷',
    '&minus;': '−',
    '&plusmn;': '±',
    '&ne;': '≠',
    '&le;': '≤',
    '&ge;': '≥',
    '&asymp;': '≈',
    '&equiv;': '≡',
    '&infin;': '∞',
    '&int;': '∫',
    '&sum;': '∑',
    '&prod;': '∏',
    '&radic;': '√',
    '&part;': '∂',
    '&permil;': '‰',
    '&deg;': '°',
    '&micro;': 'µ',
    '&larr;': '←',
    '&uarr;': '↑',
    '&rarr;': '→',
    '&darr;': '↓',
    '&harr;': '↔',
    '&crarr;': '↵',
    '&lArr;': '⇐',
    '&uArr;': '⇑',
    '&rArr;': '⇒',
    '&dArr;': '⇓',
    '&hArr;': '⇔',
    '&alpha;': 'α',
    '&beta;': 'β',
    '&gamma;': 'γ',
    '&delta;': 'δ',
    '&epsilon;': 'ε',
    '&zeta;': 'ζ',
    '&eta;': 'η',
    '&theta;': 'θ',
    '&iota;': 'ι',
    '&kappa;': 'κ',
    '&lambda;': 'λ',
    '&mu;': 'μ',
    '&nu;': 'ν',
    '&xi;': 'ξ',
    '&omicron;': 'ο',
    '&pi;': 'π',
    '&rho;': 'ρ',
    '&sigma;': 'σ',
    '&tau;': 'τ',
    '&upsilon;': 'υ',
    '&phi;': 'φ',
    '&chi;': 'χ',
    '&psi;': 'ψ',
    '&omega;': 'ω',
    '&Alpha;': 'Α',
    '&Beta;': 'Β',
    '&Gamma;': 'Γ',
    '&Delta;': 'Δ',
    '&Epsilon;': 'Ε',
    '&Zeta;': 'Ζ',
    '&Eta;': 'Η',
    '&Theta;': 'Θ',
    '&Iota;': 'Ι',
    '&Kappa;': 'Κ',
    '&Lambda;': 'Λ',
    '&Mu;': 'Μ',
    '&Nu;': 'Ν',
    '&Xi;': 'Ξ',
    '&Omicron;': 'Ο',
    '&Pi;': 'Π',
    '&Rho;': 'Ρ',
    '&Sigma;': 'Σ',
    '&Tau;': 'Τ',
    '&Upsilon;': 'Υ',
    '&Phi;': 'Φ',
    '&Chi;': 'Χ',
    '&Psi;': 'Ψ',
    '&Omega;': 'Ω',
    '&Agrave;': 'À',
    '&Aacute;': 'Á',
    '&Acirc;': 'Â',
    '&Atilde;': 'Ã',
    '&Auml;': 'Ä',
    '&Aring;': 'Å',
    '&AElig;': 'Æ',
    '&Ccedil;': 'Ç',
    '&Egrave;': 'È',
    '&Eacute;': 'É',
    '&Ecirc;': 'Ê',
    '&Euml;': 'Ë',
    '&Igrave;': 'Ì',
    '&Iacute;': 'Í',
    '&Icirc;': 'Î',
    '&Iuml;': 'Ï',
    '&ETH;': 'Ð',
    '&Ntilde;': 'Ñ',
    '&Ograve;': 'Ò',
    '&Oacute;': 'Ó',
    '&Ocirc;': 'Ô',
    '&Otilde;': 'Õ',
    '&Ouml;': 'Ö',
    '&Oslash;': 'Ø',
    '&Ugrave;': 'Ù',
    '&Uacute;': 'Ú',
    '&Ucirc;': 'Û',
    '&Uuml;': 'Ü',
    '&Yacute;': 'Ý',
    '&THORN;': 'Þ',
    '&szlig;': 'ß',
    '&agrave;': 'à',
    '&aacute;': 'á',
    '&acirc;': 'â',
    '&atilde;': 'ã',
    '&auml;': 'ä',
    '&aring;': 'å',
    '&aelig;': 'æ',
    '&ccedil;': 'ç',
    '&egrave;': 'è',
    '&eacute;': 'é',
    '&ecirc;': 'ê',
    '&euml;': 'ë',
    '&igrave;': 'ì',
    '&iacute;': 'í',
    '&icirc;': 'î',
    '&iuml;': 'ï',
    '&eth;': 'ð',
    '&ntilde;': 'ñ',
    '&ograve;': 'ò',
    '&oacute;': 'ó',
    '&ocirc;': 'ô',
    '&otilde;': 'õ',
    '&ouml;': 'ö',
    '&oslash;': 'ø',
    '&ugrave;': 'ù',
    '&uacute;': 'ú',
    '&ucirc;': 'û',
    '&uuml;': 'ü',
    '&yacute;': 'ý',
    '&thorn;': 'þ',
    '&yuml;': 'ÿ',
    '&iexcl;': '¡',
    '&iquest;': '¿',
    '&fnof;': 'ƒ',
    '&circ;': 'ˆ',
    '&tilde;': '˜',
    '&OElig;': 'Œ',
    '&oelig;': 'œ',
    '&Scaron;': 'Š',
    '&scaron;': 'š',
    '&Yuml;': 'Ÿ',
    '&ordf;': 'ª',
    '&ordm;': 'º',
    '&macr;': '¯',
    '&acute;': '´',
    '&cedil;': '¸',
    '&sup1;': '¹',
    '&sup2;': '²',
    '&sup3;': '³',
    '&frac14;': '¼',
    '&frac12;': '½',
    '&frac34;': '¾',
    '&spades;': '♠',
    '&clubs;': '♣',
    '&hearts;': '♥',
    '&diams;': '♦',
    '&loz;': '◊',
    '&oline;': '‾',
    '&frasl;': '⁄',
    '&weierp;': '℘',
    '&image;': 'ℑ',
    '&real;': 'ℜ',
    '&alefsym;': 'ℵ'
};
const entityPattern = new RegExp(Object.keys(commonEntities).map((entity)=>entity.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
const decodeHtmlEntities = (text)=>text.replace(entityPattern, (match)=>commonEntities[match]).replace(/&#(\d+);/g, (_, num)=>String.fromCharCode(parseInt(num, 10))).replace(/&#x([0-9a-fA-F]+);/g, (_, hex)=>String.fromCharCode(parseInt(hex, 16)));
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/tokenizer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tokenize",
    ()=>tokenize
]);
const tokenize = (translation)=>{
    const tokens = [];
    let position = 0;
    let currentText = '';
    const flushText = ()=>{
        if (currentText) {
            tokens.push({
                type: 'Text',
                value: currentText,
                position: position - currentText.length
            });
            currentText = '';
        }
    };
    while(position < translation.length){
        const char = translation[position];
        if (char === '<') {
            const tagMatch = translation.slice(position).match(/^<(\d+)>/);
            if (tagMatch) {
                flushText();
                tokens.push({
                    type: 'TagOpen',
                    value: tagMatch[0],
                    position,
                    tagNumber: parseInt(tagMatch[1], 10)
                });
                position += tagMatch[0].length;
            } else {
                const closeTagMatch = translation.slice(position).match(/^<\/(\d+)>/);
                if (closeTagMatch) {
                    flushText();
                    tokens.push({
                        type: 'TagClose',
                        value: closeTagMatch[0],
                        position,
                        tagNumber: parseInt(closeTagMatch[1], 10)
                    });
                    position += closeTagMatch[0].length;
                } else {
                    currentText += char;
                    position += 1;
                }
            }
        } else {
            currentText += char;
            position += 1;
        }
    }
    flushText();
    return tokens;
};
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/renderTranslation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderTranslation",
    ()=>renderTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$TranslationParserError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/TranslationParserError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/tokenizer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$htmlEntityDecoder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/htmlEntityDecoder.js [app-ssr] (ecmascript)");
;
;
;
;
const renderDeclarationNode = (declaration, children, childDeclarations)=>{
    const { type, props = {} } = declaration;
    if (props.children && Array.isArray(props.children) && childDeclarations) {
        const { children: _childrenToRemove, ...propsWithoutChildren } = props;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(type, propsWithoutChildren, ...children);
    }
    if (children.length === 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(type, props);
    }
    if (children.length === 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(type, props, children[0]);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(type, props, ...children);
};
const renderTranslation = (translation, declarations = [])=>{
    if (!translation) {
        return [];
    }
    const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenize"])(translation);
    const result = [];
    const stack = [];
    const literalTagNumbers = new Set();
    const getCurrentDeclarations = ()=>{
        if (stack.length === 0) {
            return declarations;
        }
        const parentFrame = stack[stack.length - 1];
        if (parentFrame.declaration.props?.children && Array.isArray(parentFrame.declaration.props.children)) {
            return parentFrame.declaration.props.children;
        }
        return parentFrame.declarations;
    };
    tokens.forEach((token)=>{
        switch(token.type){
            case 'Text':
                {
                    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$htmlEntityDecoder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeHtmlEntities"])(token.value);
                    const targetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
                    targetArray.push(decoded);
                }
                break;
            case 'TagOpen':
                {
                    const { tagNumber } = token;
                    const currentDeclarations = getCurrentDeclarations();
                    const declaration = currentDeclarations[tagNumber];
                    if (!declaration) {
                        literalTagNumbers.add(tagNumber);
                        const literalText = `<${tagNumber}>`;
                        const targetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
                        targetArray.push(literalText);
                        break;
                    }
                    stack.push({
                        tagNumber,
                        children: [],
                        position: token.position,
                        declaration,
                        declarations: currentDeclarations
                    });
                }
                break;
            case 'TagClose':
                {
                    const { tagNumber } = token;
                    if (literalTagNumbers.has(tagNumber)) {
                        const literalText = `</${tagNumber}>`;
                        const literalTargetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
                        literalTargetArray.push(literalText);
                        literalTagNumbers.delete(tagNumber);
                        break;
                    }
                    if (stack.length === 0) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$TranslationParserError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TranslationParserError"](`Unexpected closing tag </${tagNumber}> at position ${token.position}`, token.position, translation);
                    }
                    const frame = stack.pop();
                    if (frame.tagNumber !== tagNumber) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$TranslationParserError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TranslationParserError"](`Mismatched tags: expected </${frame.tagNumber}> but got </${tagNumber}> at position ${token.position}`, token.position, translation);
                    }
                    const element = renderDeclarationNode(frame.declaration, frame.children, frame.declarations);
                    const elementTargetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
                    elementTargetArray.push(element);
                }
                break;
        }
    });
    if (stack.length > 0) {
        const unclosed = stack[stack.length - 1];
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$TranslationParserError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TranslationParserError"](`Unclosed tag <${unclosed.tagNumber}> at position ${unclosed.position}`, unclosed.position, translation);
    }
    return result;
};
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$TranslationParserError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/TranslationParserError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$htmlEntityDecoder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/htmlEntityDecoder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/tokenizer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$renderTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/renderTranslation.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransWithoutContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IcuTransWithoutContext",
    ()=>IcuTransWithoutContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$renderTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransUtils/renderTranslation.js [app-ssr] (ecmascript)");
;
;
;
;
function IcuTransWithoutContext({ i18nKey, defaultTranslation, content, ns, values = {}, i18n: i18nFromProps, t: tFromProps }) {
    const i18n = i18nFromProps || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    if (!i18n) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])(i18n, 'NO_I18NEXT_INSTANCE', `IcuTrans: You need to pass in an i18next instance using i18nextReactModule`, {
            i18nKey
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {}, defaultTranslation);
    }
    const t = tFromProps || i18n.t?.bind(i18n) || ((k)=>k);
    let namespaces = ns || t.ns || i18n.options?.defaultNS;
    namespaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(namespaces) ? [
        namespaces
    ] : namespaces || [
        'translation'
    ];
    let mergedValues = values;
    if (i18n.options?.interpolation?.defaultVariables) {
        mergedValues = values && Object.keys(values).length > 0 ? {
            ...values,
            ...i18n.options.interpolation.defaultVariables
        } : {
            ...i18n.options.interpolation.defaultVariables
        };
    }
    const translation = t(i18nKey, {
        defaultValue: defaultTranslation,
        ...mergedValues,
        ns: namespaces
    });
    try {
        const rendered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransUtils$2f$renderTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderTranslation"])(translation, content);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {}, ...rendered);
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])(i18n, 'ICU_TRANS_RENDER_ERROR', `IcuTrans component error for key "${i18nKey}": ${error.message}`, {
            i18nKey,
            error
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {}, translation);
    }
}
IcuTransWithoutContext.displayName = 'IcuTransWithoutContext';
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTrans.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IcuTrans",
    ()=>IcuTrans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransWithoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransWithoutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
;
;
;
function IcuTrans({ i18nKey, defaultTranslation, content, ns, values = {}, i18n: i18nFromProps, t: tFromProps }) {
    const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nContext"]) || {};
    const i18n = i18nFromProps || i18nFromContext || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    const t = tFromProps || i18n?.t.bind(i18n);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransWithoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IcuTransWithoutContext"])({
        i18nKey,
        defaultTranslation,
        content,
        ns: ns || t?.ns || defaultNSFromContext || i18n?.options?.defaultNS,
        values,
        i18n,
        t: tFromProps
    });
}
IcuTrans.displayName = 'IcuTrans';
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)");
;
;
;
;
const notReadyT = (k, optsOrDefaultValue)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(optsOrDefaultValue)) return optsOrDefaultValue;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(optsOrDefaultValue) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
    return Array.isArray(k) ? k[k.length - 1] : k;
};
const notReadySnapshot = {
    t: notReadyT,
    ready: false
};
const dummySubscribe = ()=>()=>{};
const useTranslation = (ns, props = {})=>{
    const { i18n: i18nFromProps } = props;
    const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nContext"]) || {};
    const i18n = i18nFromProps || i18nFromContext || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReportNamespaces"]();
    if (!i18n) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])(i18n, 'NO_I18NEXT_INSTANCE', 'useTranslation: You will need to pass in an i18next instance by using initReactI18next');
    }
    const i18nOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaults"])(),
            ...i18n?.options?.react,
            ...props
        }), [
        i18n,
        props
    ]);
    const { useSuspense, keyPrefix } = i18nOptions;
    const nsOrContext = ns || defaultNSFromContext || i18n?.options?.defaultNS;
    const unstableNamespaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(nsOrContext) ? [
        nsOrContext
    ] : nsOrContext || [
        'translation'
    ];
    const namespaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>unstableNamespaces, unstableNamespaces);
    i18n?.reportNamespaces?.addUsedNamespaces?.(namespaces);
    const revisionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((callback)=>{
        if (!i18n) return dummySubscribe;
        const { bindI18n, bindI18nStore } = i18nOptions;
        const wrappedCallback = ()=>{
            revisionRef.current += 1;
            callback();
        };
        if (bindI18n) i18n.on(bindI18n, wrappedCallback);
        if (bindI18nStore) i18n.store.on(bindI18nStore, wrappedCallback);
        return ()=>{
            if (bindI18n) bindI18n.split(' ').forEach((e)=>i18n.off(e, wrappedCallback));
            if (bindI18nStore) bindI18nStore.split(' ').forEach((e)=>i18n.store.off(e, wrappedCallback));
        };
    }, [
        i18n,
        i18nOptions
    ]);
    const snapshotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!i18n) {
            return notReadySnapshot;
        }
        const calculatedReady = !!(i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasLoadedNamespace"])(n, i18n, i18nOptions));
        const currentLng = props.lng || i18n.language;
        const currentRevision = revisionRef.current;
        const lastSnapshot = snapshotRef.current;
        if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) {
            return lastSnapshot;
        }
        const calculatedT = i18n.getFixedT(currentLng, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
        const newSnapshot = {
            t: calculatedT,
            ready: calculatedReady,
            lng: currentLng,
            keyPrefix,
            revision: currentRevision
        };
        snapshotRef.current = newSnapshot;
        return newSnapshot;
    }, [
        i18n,
        namespaces,
        keyPrefix,
        i18nOptions,
        props.lng
    ]);
    const [loadCount, setLoadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const { t, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, getSnapshot);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (i18n && !ready && !useSuspense) {
            const onLoaded = ()=>setLoadCount((c)=>c + 1);
            if (props.lng) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadLanguages"])(i18n, props.lng, namespaces, onLoaded);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadNamespaces"])(i18n, namespaces, onLoaded);
            }
        }
    }, [
        i18n,
        props.lng,
        namespaces,
        ready,
        useSuspense,
        loadCount
    ]);
    const finalI18n = i18n || {};
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapperLangRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const createI18nWrapper = (original)=>{
        const descriptors = Object.getOwnPropertyDescriptors(original);
        if (descriptors.__original) delete descriptors.__original;
        const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
        if (!Object.prototype.hasOwnProperty.call(wrapper, '__original')) {
            try {
                Object.defineProperty(wrapper, '__original', {
                    value: original,
                    writable: false,
                    enumerable: false,
                    configurable: false
                });
            } catch (_) {}
        }
        return wrapper;
    };
    const ret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const original = finalI18n;
        const lang = original?.language;
        let i18nWrapper = original;
        if ("TURBOPACK compile-time truthy", 1) {
            if (wrapperRef.current && wrapperRef.current.__original === original) {
                if (wrapperLangRef.current !== lang) {
                    i18nWrapper = createI18nWrapper(original);
                    wrapperRef.current = i18nWrapper;
                    wrapperLangRef.current = lang;
                } else {
                    i18nWrapper = wrapperRef.current;
                }
            } else {
                i18nWrapper = createI18nWrapper(original);
                wrapperRef.current = i18nWrapper;
                wrapperLangRef.current = lang;
            }
        }
        const arr = [
            t,
            i18nWrapper,
            ready
        ];
        arr.t = t;
        arr.i18n = i18nWrapper;
        arr.ready = ready;
        return arr;
    }, [
        t,
        finalI18n,
        ready,
        finalI18n.resolvedLanguage,
        finalI18n.language,
        finalI18n.languages
    ]);
    if (i18n && useSuspense && !ready) {
        throw new Promise((resolve)=>{
            const onLoaded = ()=>resolve();
            if (props.lng) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadLanguages"])(i18n, props.lng, namespaces, onLoaded);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadNamespaces"])(i18n, namespaces, onLoaded);
            }
        });
    }
    return ret;
};
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/withTranslation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withTranslation",
    ()=>withTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)");
;
;
;
const withTranslation = (ns, options = {})=>function Extend(WrappedComponent) {
        function I18nextWithTranslation({ forwardedRef, ...rest }) {
            const [t, i18n, ready] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])(ns, {
                ...rest,
                keyPrefix: options.keyPrefix
            });
            const passDownProps = {
                ...rest,
                t,
                i18n,
                tReady: ready
            };
            if (options.withRef && forwardedRef) {
                passDownProps.ref = forwardedRef;
            } else if (!options.withRef && forwardedRef) {
                passDownProps.forwardedRef = forwardedRef;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(WrappedComponent, passDownProps);
        }
        I18nextWithTranslation.displayName = `withI18nextTranslation(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayName"])(WrappedComponent)})`;
        I18nextWithTranslation.WrappedComponent = WrappedComponent;
        const forwardRef = (props, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(I18nextWithTranslation, Object.assign({}, props, {
                forwardedRef: ref
            }));
        return options.withRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(forwardRef) : I18nextWithTranslation;
    };
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/Translation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Translation",
    ()=>Translation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
;
const Translation = ({ ns, children, ...options })=>{
    const [t, i18n, ready] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])(ns, options);
    return children(t, {
        i18n,
        lng: i18n.language
    }, ready);
};
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/I18nextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nextProvider",
    ()=>I18nextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
;
;
function I18nextProvider({ i18n, defaultNS, children }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            i18n,
            defaultNS
        }), [
        i18n,
        defaultNS
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nContext"].Provider, {
        value
    }, children);
}
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useSSR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSSR",
    ()=>useSSR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
;
;
const useSSR = (initialI18nStore, initialLanguage, props = {})=>{
    const { i18n: i18nFromProps } = props;
    const { i18n: i18nFromContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nContext"]) || {};
    const i18n = i18nFromProps || i18nFromContext || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    if (i18n.options?.isClone) return;
    if (initialI18nStore && !i18n.initializedStoreOnce) {
        i18n.services.resourceStore.data = initialI18nStore;
        i18n.options.ns = Object.values(initialI18nStore).reduce((mem, lngResources)=>{
            Object.keys(lngResources).forEach((ns)=>{
                if (mem.indexOf(ns) < 0) mem.push(ns);
            });
            return mem;
        }, i18n.options.ns);
        i18n.initializedStoreOnce = true;
        i18n.isInitialized = true;
    }
    if (initialLanguage && !i18n.initializedLanguageOnce) {
        i18n.changeLanguage(initialLanguage);
        i18n.initializedLanguageOnce = true;
    }
};
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/withSSR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withSSR",
    ()=>withSSR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useSSR.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)");
;
;
;
;
const withSSR = ()=>function Extend(WrappedComponent) {
        function I18nextWithSSR({ initialI18nStore, initialLanguage, ...rest }) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSSR"])(initialI18nStore, initialLanguage);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(WrappedComponent, {
                ...rest
            });
        }
        I18nextWithSSR.getInitialProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["composeInitialProps"])(WrappedComponent);
        I18nextWithSSR.displayName = `withI18nextSSR(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayName"])(WrappedComponent)})`;
        I18nextWithSSR.WrappedComponent = WrappedComponent;
        return I18nextWithSSR;
    };
}),
"[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "date",
    ()=>date,
    "number",
    ()=>number,
    "plural",
    ()=>plural,
    "select",
    ()=>select,
    "selectOrdinal",
    ()=>selectOrdinal,
    "time",
    ()=>time
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$Trans$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/Trans.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$TransWithoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/TransWithoutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTrans$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTrans.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$IcuTransWithoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/IcuTransWithoutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$withTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/withTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$Translation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/Translation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$I18nextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/I18nextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$withSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/withSSR.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useSSR.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const date = ()=>'';
const time = ()=>'';
const number = ()=>'';
const select = ()=>'';
const plural = ()=>'';
const selectOrdinal = ()=>'';
}),
];

//# sourceMappingURL=bbb33_d20db6ef._.js.map