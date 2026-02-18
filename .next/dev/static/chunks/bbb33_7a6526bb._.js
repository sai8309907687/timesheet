(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>C,
    "effect",
    ()=>m,
    "signal",
    ()=>c,
    "untracked",
    ()=>o
]);
var i = Symbol.for("preact-signals");
function t() {
    if (!(s > 1)) {
        var i, t = !1;
        while(void 0 !== h){
            var n = h;
            h = void 0;
            v++;
            while(void 0 !== n){
                var r = n.o;
                n.o = void 0;
                n.f &= -3;
                if (!(8 & n.f) && a(n)) try {
                    n.c();
                } catch (n) {
                    if (!t) {
                        i = n;
                        t = !0;
                    }
                }
                n = r;
            }
        }
        v = 0;
        s--;
        if (t) throw i;
    } else s--;
}
function n(i) {
    if (s > 0) return i();
    s++;
    try {
        return i();
    } finally{
        t();
    }
}
var r = void 0;
function o(i) {
    var t = r;
    r = void 0;
    try {
        return i();
    } finally{
        r = t;
    }
}
var f, h = void 0, s = 0, v = 0, u = 0;
function e(i) {
    if (void 0 !== r) {
        var t = i.n;
        if (void 0 === t || t.t !== r) {
            t = {
                i: 0,
                S: i,
                p: r.s,
                n: void 0,
                t: r,
                e: void 0,
                x: void 0,
                r: t
            };
            if (void 0 !== r.s) r.s.n = t;
            r.s = t;
            i.n = t;
            if (32 & r.f) i.S(t);
            return t;
        } else if (-1 === t.i) {
            t.i = 0;
            if (void 0 !== t.n) {
                t.n.p = t.p;
                if (void 0 !== t.p) t.p.n = t.n;
                t.p = r.s;
                t.n = void 0;
                r.s.n = t;
                r.s = t;
            }
            return t;
        }
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
    var t = this, n = this.t;
    if (n !== i && void 0 === i.e) {
        i.x = n;
        this.t = i;
        if (void 0 !== n) n.e = i;
        else o(function() {
            var i;
            null == (i = t.W) || i.call(t);
        });
    }
};
d.prototype.U = function(i) {
    var t = this;
    if (void 0 !== this.t) {
        var n = i.e, r = i.x;
        if (void 0 !== n) {
            n.x = r;
            i.e = void 0;
        }
        if (void 0 !== r) {
            r.e = n;
            i.x = void 0;
        }
        if (i === this.t) {
            this.t = r;
            if (void 0 === r) o(function() {
                var i;
                null == (i = t.Z) || i.call(t);
            });
        }
    }
};
d.prototype.subscribe = function(i) {
    var t = this;
    return m(function() {
        var n = t.value, o = r;
        r = void 0;
        try {
            i(n);
        } finally{
            r = o;
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
    var i = r;
    r = void 0;
    try {
        return this.value;
    } finally{
        r = i;
    }
};
Object.defineProperty(d.prototype, "value", {
    get: function() {
        var i = e(this);
        if (void 0 !== i) i.i = this.i;
        return this.v;
    },
    set: function(i) {
        if (i !== this.v) {
            if (v > 100) throw new Error("Cycle detected");
            this.v = i;
            this.i++;
            u++;
            s++;
            try {
                for(var n = this.t; void 0 !== n; n = n.x)n.t.N();
            } finally{
                t();
            }
        }
    }
});
function c(i, t) {
    return new d(i, t);
}
function a(i) {
    for(var t = i.s; void 0 !== t; t = t.n)if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
    return !1;
}
function l(i) {
    for(var t = i.s; void 0 !== t; t = t.n){
        var n = t.S.n;
        if (void 0 !== n) t.r = n;
        t.S.n = t;
        t.i = -1;
        if (void 0 === t.n) {
            i.s = t;
            break;
        }
    }
}
function y(i) {
    var t = i.s, n = void 0;
    while(void 0 !== t){
        var r = t.p;
        if (-1 === t.i) {
            t.S.U(t);
            if (void 0 !== r) r.n = t.n;
            if (void 0 !== t.n) t.n.p = r;
        } else n = t;
        t.S.n = t.r;
        if (void 0 !== t.r) t.r = void 0;
        t = r;
    }
    i.s = n;
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
    if (this.i > 0 && !a(this)) {
        this.f &= -2;
        return !0;
    }
    var i = r;
    try {
        l(this);
        r = this;
        var t = this.x();
        if (16 & this.f || this.v !== t || 0 === this.i) {
            this.v = t;
            this.f &= -17;
            this.i++;
        }
    } catch (i) {
        this.v = i;
        this.f |= 16;
        this.i++;
    }
    r = i;
    y(this);
    this.f &= -2;
    return !0;
};
w.prototype.S = function(i) {
    if (void 0 === this.t) {
        this.f |= 36;
        for(var t = this.s; void 0 !== t; t = t.n)t.S.S(t);
    }
    d.prototype.S.call(this, i);
};
w.prototype.U = function(i) {
    if (void 0 !== this.t) {
        d.prototype.U.call(this, i);
        if (void 0 === this.t) {
            this.f &= -33;
            for(var t = this.s; void 0 !== t; t = t.n)t.S.U(t);
        }
    }
};
w.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for(var i = this.t; void 0 !== i; i = i.x)i.t.N();
    }
};
Object.defineProperty(w.prototype, "value", {
    get: function() {
        if (1 & this.f) throw new Error("Cycle detected");
        var i = e(this);
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
    var n = i.u;
    i.u = void 0;
    if ("function" == typeof n) {
        s++;
        var o = r;
        r = void 0;
        try {
            n();
        } catch (t) {
            i.f &= -2;
            i.f |= 8;
            p(i);
            throw t;
        } finally{
            r = o;
            t();
        }
    }
}
function p(i) {
    for(var t = i.s; void 0 !== t; t = t.n)t.S.U(t);
    i.x = void 0;
    i.s = void 0;
    _(i);
}
function g(i) {
    if (r !== this) throw new Error("Out-of-order effect");
    y(this);
    r = i;
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
    if (f) f.push(this);
}
S.prototype.c = function() {
    var i = this.S();
    try {
        if (8 & this.f) return;
        if (void 0 === this.x) return;
        var t = this.x();
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
    l(this);
    s++;
    var i = r;
    r = this;
    return g.bind(this, i);
};
S.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 2;
        this.o = h;
        h = this;
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
    var n = new S(i, t);
    try {
        n.c();
    } catch (i) {
        n.d();
        throw i;
    }
    var r = n.d.bind(n);
    r[Symbol.dispose] = r;
    return r;
}
function E(i) {
    return function() {
        var t = arguments, r = this;
        return n(function() {
            return o(function() {
                return i.apply(r, [].slice.call(t));
            });
        });
    };
}
function x() {
    var i = f;
    f = [];
    return function() {
        var t = f;
        if (f && i) i = i.concat(f);
        f = i;
        return t;
    };
}
function C(i) {
    return function() {
        var t, n, r = x();
        try {
            n = i.apply(void 0, [].slice.call(arguments));
        } catch (i) {
            f = void 0;
            throw i;
        } finally{
            t = r();
        }
        for(var o in n)if ("function" == typeof n[o]) n[o] = E(n[o]);
        n[Symbol.dispose] = E(function() {
            if (t) for(var i = 0; i < t.length; i++)t[i].dispose();
            t = void 0;
        });
        return n;
    };
}
;
 //# sourceMappingURL=signals-core.module.js.map
}),
"[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
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
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
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
    var React = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_useSignalsImplementation",
    ()=>C,
    "ensureFinalCleanup",
    ()=>P,
    "useComputed",
    ()=>useComputed,
    "useModel",
    ()=>O,
    "useSignal",
    ()=>useSignal,
    "useSignalEffect",
    ()=>useSignalEffect,
    "useSignals",
    ()=>N,
    "wrapJsx",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
;
;
;
var l = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].split(".").map(Number)[0], v = [], d = Symbol.for(l >= 19 ? "react.transitional.element" : "react.element"), m = "undefined" != typeof window && !!window.__PREACT_SIGNALS_DEVTOOLS__;
function p(t) {
    if ("function" != typeof t) return t;
    else return function(r, i) {
        if ("string" == typeof r && i) for(var e in i){
            var o = i[e];
            if ("children" !== e && o instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signal"]) i[e] = o.value;
        }
        return t.call.apply(t, [
            t,
            r,
            i
        ].concat([].slice.call(arguments, 2)));
    };
}
var b, y = Symbol.dispose || Symbol.for("Symbol.dispose");
function g(n, t) {
    var r = t.effect.S();
    b = t;
    return h.bind(t, n, r);
}
function h(n, t) {
    t();
    b = n;
}
var w, _, S = function() {}, x = ((w = {
    o: 0,
    effect: {
        s: void 0,
        c: function() {},
        S: function() {
            return S;
        },
        d: function() {}
    },
    subscribe: function() {
        return S;
    },
    getSnapshot: function() {
        return 0;
    },
    S: function() {},
    f: function() {}
})[y] = function() {}, w), j = Promise.prototype.then.bind(Promise.resolve());
function P() {
    if (!_) _ = j($);
}
function $() {
    var n;
    _ = void 0;
    null == (n = b) || n.f();
}
var k = "undefined" != typeof window ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function C(n, t) {
    if (void 0 === n) n = 0;
    P();
    var r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    if (null == r.current) if ("undefined" == typeof window) r.current = x;
    else r.current = function(n, t) {
        var r, e, o, u, f = 0, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"])(function() {
            e = this;
        }, {
            name: t || "Component"
        });
        e.c = function() {
            f = f + 1 | 0;
            if (m) {
                var n;
                null == (n = e.y) || n.call(e);
            }
            if (u) u();
        };
        return (r = {
            o: n,
            effect: e,
            subscribe: function(n) {
                u = n;
                return function() {
                    f = f + 1 | 0;
                    u = void 0;
                    c();
                };
            },
            getSnapshot: function() {
                return f;
            },
            S: function() {
                if (null != b) {
                    var n = b.o, t = this.o;
                    if (0 == n && 0 == t || 0 == n && 1 == t) {
                        b.f();
                        o = g(void 0, this);
                    } else if (1 == n && 0 == t || 2 == n && 0 == t) ;
                    else o = g(b, this);
                } else o = g(void 0, this);
            },
            f: function() {
                var n = o;
                o = void 0;
                null == n || n();
            }
        })[y] = function() {
            this.f();
        }, r;
    }(n, t);
    var e = r.current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(e.subscribe, e.getSnapshot, e.getSnapshot);
    e.S();
    if (0 === n) k($);
    return e;
}
Object.defineProperties(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signal"].prototype, {
    $$typeof: {
        configurable: !0,
        value: d
    },
    type: {
        configurable: !0,
        value: function(n) {
            var t = n.data, r = C(1);
            try {
                return t.value;
            } finally{
                r.f();
            }
        }
    },
    props: {
        configurable: !0,
        get: function() {
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
function N(n, t) {
    return C(n, t);
}
function useSignal(n, r) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(n, r);
    }, v);
}
function useComputed(n, t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(n);
    i.current = n;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computed"])(function() {
            return i.current();
        }, t);
    }, v);
}
function useSignalEffect(n, t) {
    var r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(n);
    r.current = n;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"])(function() {
            return r.current();
        }, t);
    }, v);
}
function O(n) {
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(function() {
        return n();
    })[0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return t[Symbol.dispose];
    }, [
        t
    ]);
    return t;
}
;
 //# sourceMappingURL=runtime.module.js.map
}),
"[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.module.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.module.js [app-client] (ecmascript)"); //# sourceMappingURL=signals.module.js.map
;
;
}),
]);

//# sourceMappingURL=bbb33_7a6526bb._.js.map