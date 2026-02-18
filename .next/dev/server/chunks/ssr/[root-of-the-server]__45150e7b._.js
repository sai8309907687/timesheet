module.exports = [
"[project]/Documents/react-project/timesheet/types/type.input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeInput",
    ()=>TypeInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/no-explicit-any */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const TypeInput = ({ control, name, label, value = '', rules = {}, error, className = 'w-full', type = 'text', disabled = false, onChange, onKeyDown, required = false })=>{
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setInputValue(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `form-control ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Controller"], {
                name: name,
                control: control,
                rules: rules,
                defaultValue: inputValue,
                render: ({ field })=>type === 'textarea' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "floating-label",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ...field,
                                placeholder: label || ' ',
                                disabled: disabled,
                                className: "textarea textarea-md textarea-bordered w-full",
                                onKeyDown: onKeyDown,
                                onChange: (e)=>{
                                    field.onChange(e.target.value);
                                    if (onChange) onChange(e.target.value);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, void 0),
                            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    label,
                                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-error ml-1",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                        lineNumber: 64,
                                        columnNumber: 32
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "floating-label",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ...field,
                                type: type,
                                placeholder: label || ' ',
                                disabled: disabled,
                                className: "input input-md input-bordered w-full",
                                onKeyDown: onKeyDown,
                                onChange: (e)=>{
                                    field.onChange(type === 'number' ? Number(e.target.value) : e.target.value);
                                    if (onChange) onChange(e.target.value);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, void 0),
                            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    label,
                                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-error ml-1",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                        lineNumber: 85,
                                        columnNumber: 32
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "label",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "label-text-alt text-error",
                    children: error.message
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Documents/react-project/timesheet/utils/app.http.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiUrl",
    ()=>ApiUrl,
    "MsUrl",
    ()=>MsUrl,
    "default",
    ()=>AppHttp,
    "getTenantId",
    ()=>getTenantId,
    "hasTenant",
    ()=>hasTenant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-ssr] (ecmascript)");
;
;
const API_BASE_URL = "https://apidev.dfftech.com/api";
const getTenantId = ()=>{
    const tenantId = hasTenant();
    return typeof tenantId === "string" ? tenantId : "";
};
const hasTenant = ()=>{
    const storedTenant = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TENANT_ID"], true);
    if (storedTenant) {
        return storedTenant || false;
    }
    const envTenant = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].envData('TENANT_ID');
    if (envTenant) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TENANT_ID"], envTenant, true);
        return envTenant || false;
    }
    return false;
};
(()=>{
    const envBaseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].envData('BASE_URL');
    if (envBaseUrl) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Http"].API_BASE_URL = envBaseUrl;
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Http"].API_BASE_URL = API_BASE_URL;
    }
})();
class AppHttp {
    static async Load(id, params) {
        const headers = {
            ...AppHttp.Headers(),
            ["Content-Type"]: "application/json",
            authorization: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN"], true)
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Http"].Get(`/load/${id}`, params, headers);
    }
    static Headers() {
        return {
            ["Content-Type"]: "application/json",
            "x-tenant-id": getTenantId(),
            // "x-token": process.env.TIMESHEET_API_TOKEN || "TEST+MY_PROJECT1+MKJWQZI1",
            authorization: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN"])
        };
    }
    static async Get(url, params) {
        const headers = {
            ...AppHttp.Headers(),
            ["Content-Type"]: "application/json",
            authorization: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN"], true)
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Http"].Get(url, params, headers);
    }
    static async Post(url, params) {
        const headers = {
            ...AppHttp.Headers(),
            ["Content-Type"]: "application/json",
            authorization: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN"], true)
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Http"].Post(url, params, headers);
    }
    static async Put(url, id, params) {
        const headers = {
            ...AppHttp.Headers()
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Http"].Put(url + "/" + id, params, headers);
    }
    static async Delete(url, params) {
        const headers = {
            ...AppHttp.Headers(),
            ["Content-Type"]: "application/json",
            authorization: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN"], true)
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Http"].Delete(url, params, headers);
    }
}
const MsUrl = {
    menuAccess: "/menu_access/search",
    // auth: "/astropeace-auth",
    base: "/timesheet-base",
    // horoscope: "/astropeace-horoscope",
    // language: "/astropeace-lang",
    // payments: "/astropeace-payments",
    account: "/timesheet-account",
    auth: "/timesheet-auth",
    sor: "/timesheet-sor",
    access: "/timesheet-access"
};
const ApiUrl = {
    menuAccess: "/menu_access/search",
    menuGroupsSearch: "/menu_groups/search",
    menuGroupsCreate: "/menu_groups/create",
    menuLinksSearch: "/menu_links/search",
    menuLinksCreate: "/menu_links/create",
    menuRolesSearch: "/menu_roles/search",
    menuRolesCreate: "/menu_roles/create",
    menuAccessBulkCreate: "/menu_access/bulk-create"
};
}),
"[project]/Documents/react-project/timesheet/modules/auth/common/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnabledButtons",
    ()=>EnabledButtons,
    "ForgotPasswordOtpType",
    ()=>ForgotPasswordOtpType,
    "ForgotSerice",
    ()=>ForgotSerice,
    "LoggedInUserId",
    ()=>LoggedInUserId,
    "SignUpSignal",
    ()=>SignUpSignal,
    "forgotPasswordService",
    ()=>forgotPasswordService,
    "isSinginLoading",
    ()=>isSinginLoading,
    "onSingin",
    ()=>onSingin,
    "resetPasswordService",
    ()=>resetPasswordService,
    "signUpSerice",
    ()=>signUpSerice,
    "userIdSignal",
    ()=>userIdSignal,
    "verifyOtpService",
    ()=>verifyOtpService,
    "verifySignUp",
    ()=>verifySignUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$dist$2f$signals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.http.ts [app-ssr] (ecmascript)");
;
;
;
;
const ForgotPasswordOtpType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])({});
const EnabledButtons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(false);
const LoggedInUserId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(null);
const userIdSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])("");
const ForgotSerice = async ()=>{
// const res = await AppHttp.Post(
//   AppHttp.AUTH_MS_HOST + "/auth/signUp",
//   SignUpSignal.value
// );
// return res;
};
const SignUpSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])({});
const signUpSerice = async ()=>{
// const res = await AppHttp.Post(
//   AppHttp.AUTH_MS_HOST + "/auth/signUp",
//   SignUpSignal.value
// );
// return res;
};
const verifySignUp = async (otp, id)=>{
    try {
        // Use the parameters in the API call
        const response = await fetch("/api/verify-signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                otp,
                id
            })
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};
const isSinginLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(false);
const onSingin = async (data)=>{
    try {
        isSinginLoading.value = true;
        const url = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MsUrl"].sor + "/auth/signin";
        const params = {
            ...data
        };
        const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Post(url, params);
        if (resp?.error || resp.data === null || resp.data.data === null) {
            throw {
                error: {
                    message: "Invalid credentials"
                }
            };
        }
        return resp.data;
    } catch (error) {
        const err = error;
        const messsage = err?.message || err?.error?.message || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstMessages"].WENT_WRONG;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])(messsage, "danger");
        throw error;
    } finally{
        isSinginLoading.value = false;
    }
};
const forgotPasswordService = async (userid)=>{
    const url = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MsUrl"].sor + "/auth/forgot-password";
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Post(url, {
        userid
    });
    return res.data;
};
const verifyOtpService = async (otp, otpId, profileId)=>{
    const url = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MsUrl"].sor + "/auth/verify-otp";
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Post(url, {
        otp,
        oid: otpId,
        uid: profileId
    });
    return res.data;
};
const resetPasswordService = async (payload)=>{
    const url = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MsUrl"].sor + "/auth/reset-password";
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Post(url, payload);
    console.log("ResetPasswordResponse", res);
    return res.data;
};
}),
"[project]/Documents/react-project/timesheet/components/otp-input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const OtpInput = ({ length = 6, value = "", onValueChange, description })=>{
    const inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const handleChange = (e, index)=>{
        const val = e.target.value;
        if (!/^\d*$/.test(val)) return; // Only allow numbers
        const newOtp = (value || "").padEnd(length, " ").split('');
        newOtp[index] = val.substring(val.length - 1);
        const combined = newOtp.join('').trim();
        onValueChange(combined);
        // Move to next input if value entered
        if (val && index < length - 1) {
            inputs.current[index + 1]?.focus();
        }
    };
    const handleKeyDown = (e, index)=>{
        if (e.key === 'Backspace' && !value[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };
    const handlePaste = (e)=>{
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, length).replace(/\D/g, '');
        if (pastedData) {
            onValueChange(pastedData);
            inputs.current[Math.min(pastedData.length, length - 1)]?.focus();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2",
        children: [
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 dark:text-gray-400",
                children: description
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/components/otp-input.tsx",
                lineNumber: 45,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: Array.from({
                    length
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: (el)=>{
                            inputs.current[i] = el;
                        },
                        type: "text",
                        inputMode: "numeric",
                        maxLength: 1,
                        value: value[i] || '',
                        onChange: (e)=>handleChange(e, i),
                        onKeyDown: (e)=>handleKeyDown(e, i),
                        onPaste: handlePaste,
                        className: "input input-bordered w-12 h-12 text-center text-lg px-0 rounded-lg border-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-primary transition-all font-bold text-black dark:text-white"
                    }, i, false, {
                        fileName: "[project]/Documents/react-project/timesheet/components/otp-input.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/components/otp-input.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/react-project/timesheet/components/otp-input.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = OtpInput;
}),
"[project]/Documents/react-project/timesheet/utils/app.otp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppOtp",
    ()=>AppOtp,
    "OtpLoadingSignal",
    ()=>OtpLoadingSignal,
    "OtpModalSignal",
    ()=>OtpModalSignal,
    "OtpSessionSignal",
    ()=>OtpSessionSignal,
    "ResendCountdownSignal",
    ()=>ResendCountdownSignal,
    "ResendLoadingSignal",
    ()=>ResendLoadingSignal,
    "default",
    ()=>__TURBOPACK__default__export__,
    "hideOtpModal",
    ()=>hideOtpModal,
    "showOtpModal",
    ()=>showOtpModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$dist$2f$signals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.button.tsx [app-ssr] (ecmascript)");
// import TypeIcon from '@/types/type.icon';
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.http.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$components$2f$otp$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/components/otp-input.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const OtpModalSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])({
    showModal: false,
    title: '',
    userid: ''
});
const OtpLoadingSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(false);
const ResendLoadingSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(false);
const ResendCountdownSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(0);
const OtpSessionSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(null);
/* ------------------------------------------------------------------ */ /* API FUNCTIONS */ /* ------------------------------------------------------------------ */ const sendOtpApi = async (userid)=>{
    try {
        OtpLoadingSignal.value = true;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Post(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MsUrl"].sor + '/auth/send-otp', {
            userid
        });
        return response;
    } catch (error) {
        const err = error;
        const message = err?.error?.message || 'Failed to send OTP';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])(message, 'danger');
        return null;
    } finally{
        OtpLoadingSignal.value = false;
    }
};
const verifyOtpApi = async (otp, oid, uid)=>{
    try {
        OtpLoadingSignal.value = true;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Post('/auth/verify-otp', {
            otp,
            oid,
            uid
        });
        return response;
    } catch (error) {
        console.log(error);
        return null;
    } finally{
        OtpLoadingSignal.value = false;
    }
};
const showOtpModal = (title, userid)=>{
    OtpModalSignal.value = {
        showModal: true,
        title,
        userid
    };
};
const hideOtpModal = ()=>{
    OtpModalSignal.value = {
        showModal: false,
        title: '',
        userid: ''
    };
    ResendCountdownSignal.value = 0;
    OtpSessionSignal.value = null;
};
const AppOtp = ({ onOtpCallback, onCancel })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignals"])();
    const { handleSubmit, control, reset, setValue, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            otp: ''
        }
    });
    const handleSendOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (OtpLoadingSignal.value) return;
        const response = await sendOtpApi(OtpModalSignal.value.userid);
        if (response?.data) {
            OtpSessionSignal.value = {
                oid: response.data.oid,
                uid: response.data.uid
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])(response.data.message, 'success');
            ResendCountdownSignal.value = 180; // 3 minutes countdown
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])("Failed to send OTP. Please try again.", 'danger');
        }
    }, []);
    const otpValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: 'otp'
    });
    const isSubmitDisabled = !otpValue || otpValue.length < 6 || OtpLoadingSignal.value;
    const showOtpModalValue = OtpModalSignal.value.showModal;
    const otpUserid = OtpModalSignal.value.userid;
    // Send OTP when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showOtpModalValue && otpUserid) {
            handleSendOtp();
        }
    }, [
        showOtpModalValue,
        otpUserid,
        handleSendOtp
    ]);
    const resendCountdown = ResendCountdownSignal.value;
    // Countdown timer for resend
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let interval;
        if (resendCountdown > 0) {
            interval = setInterval(()=>{
                ResendCountdownSignal.value = ResendCountdownSignal.value - 1;
            }, 1000);
        }
        return ()=>{
            if (interval) clearInterval(interval);
        };
    }, [
        resendCountdown
    ]);
    const handleResendOtp = async ()=>{
        if (ResendCountdownSignal.value > 0) return;
        ResendLoadingSignal.value = true;
        await handleSendOtp();
        ResendLoadingSignal.value = false;
    };
    const onSubmit = async (data)=>{
        if (!OtpSessionSignal.value) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])("Session expired", 'danger');
            return;
        }
        const response = await verifyOtpApi(data.otp, OtpSessionSignal.value.oid, OtpSessionSignal.value.uid);
        if (response?.data) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])(response.data.message, 'success');
            onOtpCallback?.({
                oid: response.data.oid,
                uid: response.data.uid,
                otp: data.otp
            });
            handleCloseModal();
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])("Failed to send OTP. Please try again.", 'danger');
        }
    };
    const handleCancelAction = ()=>{
        onCancel?.();
        handleCloseModal();
    };
    const handleCloseModal = ()=>{
        hideOtpModal();
        reset();
    };
    const formatTime = (seconds)=>{
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    if (!OtpModalSignal.value.showModal) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal modal-open",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-box relative bg-white dark:bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-none max-w-md p-8 rounded-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900 dark:text-white tracking-tight",
                                children: OtpModalSignal.value.title || 'OTP Verification'
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "ghost",
                                className: "btn-xs btn-circle text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
                                onPress: handleCancelAction,
                                name: "X",
                                label: ""
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-4 text-black dark:text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold text-gray-900 dark:text-white",
                                        children: OtpModalSignal.value.userid
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto leading-relaxed",
                                        children: "Please enter the OTP sent to your registered mobile number to verify your identity."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$components$2f$otp$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    length: 6,
                                    value: otpValue,
                                    onValueChange: (value)=>{
                                        setValue('otp', value);
                                        if (value.length === 6) {
                                            handleSubmit(onSubmit)();
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            errors.otp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-error text-sm text-center font-medium",
                                children: errors.otp.message
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center items-center space-x-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 dark:text-white",
                                        children: "Didn't receive the code?"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "ghost",
                                        onPress: handleResendOtp,
                                        disabled: ResendCountdownSignal.value > 0 || ResendLoadingSignal.value,
                                        className: "text-blue-600 font-semibold hover:underline disabled:text-blue-500 disabled:no-underline px-0 min-h-0 h-auto",
                                        label: ResendCountdownSignal.value > 0 ? `Resend in ${formatTime(ResendCountdownSignal.value)}` : ResendLoadingSignal.value ? 'Sending...' : 'Resend OTP'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-action flex justify-center gap-4 mt-6 p-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                action: "default",
                                variant: "outline",
                                className: "border-2 hover:text-white rounded-xl flex-1 normal-case text-base font-semibold h-12 transition-all duration-200",
                                onPress: handleCancelAction,
                                disabled: OtpLoadingSignal.value,
                                label: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                action: "primary",
                                className: "text-white border-none rounded-xl flex-1 normal-case text-base font-semibold h-12 transition-all duration-200",
                                onPress: handleSubmit(onSubmit),
                                disabled: isSubmitDisabled,
                                label: OtpLoadingSignal.value ? 'Verifying...' : 'Verify'
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop bg-black/20 backdrop-blur-[2px]",
                onClick: handleCancelAction,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "cursor-default",
                    children: "close"
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                    lineNumber: 329,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/react-project/timesheet/utils/app.otp.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AppOtp;
}),
"[project]/Documents/react-project/timesheet/utils/app.props.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProps",
    ()=>AppProps,
    "PlatformType",
    ()=>PlatformType
]);
const AppProps = {
    MESSAGE_REQUIRED: "Required",
    MESSAGE_MIN_LENGTH: "Min length required",
    MESSAGE_MAX_LENGTH: "Exceed max length",
    MESSAGE_INVALID_DATA: "Invalid data"
};
var PlatformType = /*#__PURE__*/ function(PlatformType) {
    PlatformType["IOS"] = "ios";
    PlatformType["ANDROID"] = "android";
    PlatformType["MACOS"] = "macos";
    PlatformType["WINDOWS"] = "windows";
    PlatformType["WEB"] = "web";
    return PlatformType;
}({});
}),
"[project]/Documents/react-project/timesheet/modules/auth/common/validate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForgotPasswordValidate",
    ()=>ForgotPasswordValidate,
    "LoginValidate",
    ()=>LoginValidate,
    "SignUpValidate",
    ()=>SignUpValidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.props.ts [app-ssr] (ecmascript)");
;
;
const ForgotPasswordValidate = {
    email: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        },
        pattern: {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegExp"].EMAIL,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_INVALID_DATA
        }
    },
    userid: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        },
        pattern: {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegExp"].EMAIL,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_INVALID_DATA
        }
    },
    password: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 6,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 50,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        }
    }
};
const LoginValidate = {
    email: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        },
        pattern: {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegExp"].EMAIL,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_INVALID_DATA
        }
    },
    password: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        }
    }
};
const SignUpValidate = {
    email: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        },
        pattern: {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegExp"].EMAIL,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_INVALID_DATA
        }
    },
    password: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        }
    },
    name: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        }
    },
    phone: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        }
    }
};
}),
"[project]/Documents/react-project/timesheet/layouts/auth-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthLayout",
    ()=>AuthLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const AuthLayout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full p-1 overflow-y-auto h-[calc(100vh-88px)] flex items-center justify-end m-auto right bg-white dark:bg-black bg-auth-light dark:bg-auth-dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[400px] mx-12",
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/react-project/timesheet/layouts/auth-layout.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/react-project/timesheet/layouts/auth-layout.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForgotPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$dist$2f$signals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.router.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/modules/auth/common/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$otp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.otp.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$validate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/modules/auth/common/validate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$layouts$2f$auth$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/layouts/auth-layout.tsx [app-ssr] (ecmascript)");
'use client';
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
function ForgotPassword() {
    const [step, setStep] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(1);
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignal"])(false);
    /** OTP id from AppOtp */ const otpIdSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignal"])('');
    /** React Hook Form */ const { handleSubmit, control, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            userid: '',
            password: ''
        }
    });
    /* ---------------------------------- */ /* COMMON */ /* ---------------------------------- */ const onCancel = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterChange"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppRouter"].SIGN_IN);
    };
    /* ---------------------------------- */ /* STEP 1 – SEND OTP */ /* ---------------------------------- */ const onSubmitEmail = async (data)=>{
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userIdSignal"].value = data.userid;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])('OTP sent to your email', 'success');
            setStep(2);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$otp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showOtpModal"])('Verify OTP', data.userid);
        } catch  {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])('Error sending OTP', 'danger');
        }
    };
    /* ---------------------------------- */ /* OTP CALLBACK */ /* ---------------------------------- */ const onOtpCallback = (data)=>{
        console.log('OTP verified:', data);
        otpIdSignal.value = data.oid ?? '';
        setStep(3);
    };
    /* ---------------------------------- */ /* STEP 3 – RESET PASSWORD */ /* ---------------------------------- */ const onSubmitPassword = async (data)=>{
        console.log('ResetPassword data:', data);
        isLoading.value = true;
        try {
            const payload = {
                userid: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userIdSignal"].value,
                password: btoa(data.password),
                otpId: otpIdSignal.value
            };
            console.log('ResetPassword payload:', payload);
            const resp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetPasswordService"])(payload);
            if (resp?.message === 'Password reset successful.') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])('Password reset successful', 'success');
                setStep(4);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])('Password reset failed', 'danger');
            }
        } catch  {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShowToast"])('Error resetting password', 'danger');
        } finally{
            isLoading.value = false;
        }
    };
    /* ---------------------------------- */ /* UI */ /* ---------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$layouts$2f$auth$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthLayout"], {
        children: step === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$otp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onOtpCallback: onOtpCallback,
            onCancel: ()=>setStep(1)
        }, void 0, false, {
            fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
            lineNumber: 109,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card bg-base-100 shadow-xl w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-body p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "card-title justify-center text-3xl font-bold mb-8 text-primary-custom text-center w-full",
                        children: [
                            step === 1 && 'Forgot Password',
                            step === 3 && 'Reset Password',
                            step === 4 && 'Success'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this),
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeInput"], {
                                type: "text",
                                label: "Email",
                                control: control,
                                name: "userid",
                                rules: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$validate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ForgotPasswordValidate"].userid,
                                error: errors.userid
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                                lineNumber: 125,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Back to Login",
                                        className: "text-primary-custom hover:shadow-none hover:outline-none px-0",
                                        action: "default",
                                        variant: "ghost",
                                        onPress: onCancel
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Send OTP",
                                        action: "secondary",
                                        className: "px-10 btn-pink rounded-lg",
                                        onPress: handleSubmit(onSubmitEmail)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                                lineNumber: 134,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                        lineNumber: 124,
                        columnNumber: 15
                    }, this),
                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit(onSubmitPassword),
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeInput"], {
                                type: "password",
                                label: "Password",
                                control: control,
                                name: "password",
                                rules: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$validate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ForgotPasswordValidate"].password,
                                error: errors.password
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                                lineNumber: 150,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Cancel",
                                        action: "danger",
                                        className: "px-6 rounded-lg",
                                        onPress: onCancel
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Reset Password",
                                        action: "secondary",
                                        className: "px-10 btn-pink rounded-lg",
                                        htmlType: "submit",
                                        disabled: isLoading.value
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                        lineNumber: 149,
                        columnNumber: 15
                    }, this),
                    step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-green-600 font-semibold",
                                children: "Password reset successful"
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                                lineNumber: 175,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Go to Sign In",
                                action: "secondary",
                                onPress: onCancel
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                                lineNumber: 176,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                        lineNumber: 174,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
                lineNumber: 115,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
            lineNumber: 114,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/react-project/timesheet/modules/auth/forgot-password-page.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__45150e7b._.js.map