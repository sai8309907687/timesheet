(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === "object" ? document.currentScript : undefined,
  "[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "GOOGLE_ACCESS_TOKEN",
      () => GOOGLE_ACCESS_TOKEN,
      "NAV",
      () => NAV,
      "SCREEN_ACCESS",
      () => SCREEN_ACCESS,
      "SESSION_INFO",
      () => SESSION_INFO,
      "TENANT_ID",
      () => TENANT_ID,
      "THEME",
      () => THEME,
      "TOKEN",
      () => TOKEN,
      "default",
      () => __TURBOPACK__default__export__,
    ]);
    const APP_ID = "AS";
    const TOKEN = "TOKEN";
    const SESSION_INFO = "SESSION_INFO";
    const GOOGLE_ACCESS_TOKEN = "GOOGLE_ACCESS_TOKEN";
    const NAV = "NAV";
    const SCREEN_ACCESS = "SCREEN_ACCESS";
    const TENANT_ID = "TENANT_ID";
    const THEME = "THEME";
    const setData = (setName, setObject, isLocal = false) => {
      const name = APP_ID + "-" + setName;
      let data = "";
      if (setObject) {
        data =
          typeof setObject === "string" ? setObject : JSON.stringify(setObject);
      }
      if (isLocal) {
        if (("TURBOPACK compile-time truthy", 1)) {
          window.localStorage.setItem(name, data);
        }
      } else {
        if (("TURBOPACK compile-time truthy", 1)) {
          window.sessionStorage.setItem(name, data);
        }
      }
    };
    const getData = (getName, isLocal = false) => {
      getName = APP_ID + "-" + getName;
      let data = null;
      if (isLocal) {
        if (("TURBOPACK compile-time truthy", 1)) {
          data = window.localStorage.getItem(getName);
        }
      } else {
        if (("TURBOPACK compile-time truthy", 1)) {
          data = window.sessionStorage.getItem(getName);
        }
      }
      if (data) {
        data =
          data.indexOf("{") > -1 || data.indexOf("[") > -1
            ? JSON.parse(data)
            : data;
      }
      return data;
    };
    const removeData = (key, isLocal = false) => {
      key = APP_ID + "-" + key;
      if (isLocal) {
        if (("TURBOPACK compile-time truthy", 1)) {
          window.localStorage.removeItem(key);
        }
      } else {
        if (("TURBOPACK compile-time truthy", 1)) {
          window.sessionStorage.removeItem(key);
        }
      }
    };
    const clearData = () => {
      const user = getData("remember-me", true);
      if (("TURBOPACK compile-time truthy", 1)) {
        window.localStorage.clear();
        window.sessionStorage.clear();
      }
      if (user != null) {
        setData("remember-me", user, true);
      }
      return;
    };
    const envData = (key) => {
      if (("TURBOPACK compile-time truthy", 1)) {
        return (
          window?.env?.["REACT_APP_TIMESHEET_" + key.toUpperCase()] || null
        );
      }
      //TURBOPACK unreachable
    };
    const AppStorage = {
      getData,
      setData,
      removeData,
      clearData,
      envData,
    };
    const __TURBOPACK__default__export__ = AppStorage;
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/Documents/react-project/timesheet/utils/app.router.ts [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "AppRouter",
      () => AppRouter,
      "NonAuthRoutes",
      () => NonAuthRoutes,
    ]);
    const AppRouter = {
      DEFAULT: "",
      SIGN_UP: "/auth/signup",
      HOME: "/",
      SIGN_IN: "/auth/login",
      FORGOT_PASSWORD: "/auth/forgot-password",
      RESET_PASSWORD: "/auth/resetpassword",
      DASHBOARD: "/dashboard",
      PROFILE: "/profile",
      SETTINGS: "/settings",
      MENU_ACCESS: "/menu-access",
      MENU_MANAGEMENT: "/menu-management",
    };
    const NonAuthRoutes = [
      AppRouter.DEFAULT,
      AppRouter.HOME,
      AppRouter.SIGN_IN,
      AppRouter.FORGOT_PASSWORD,
      AppRouter.RESET_PASSWORD,
      AppRouter.SETTINGS,
      AppRouter.MENU_ACCESS,
      AppRouter.MENU_MANAGEMENT,
    ];
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/Documents/react-project/timesheet/utils/app.util.ts [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "capitalizeFirstLetter",
      () => capitalizeFirstLetter,
      "checkLoginUser",
      () => checkLoginUser,
      "combineDateAndTime",
      () => combineDateAndTime,
      "convertTo24HourFormat",
      () => convertTo24HourFormat,
      "debounce",
      () => debounce,
      "formatDateTime",
      () => formatDateTime,
      "monthNames",
      () => monthNames,
      "screenAccessCall",
      () => screenAccessCall,
      "screenAccessInit",
      () => screenAccessInit,
      "timeAgo",
      () => timeAgo,
      "truncateString",
      () => truncateString,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/utils/app.event.ts [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-client] (ecmascript)",
      );
    (() => {
      const e = new Error("Cannot find module '@/config/site-config'");
      e.code = "MODULE_NOT_FOUND";
      throw e;
    })();
    const formatDateTime = (timestamp, showDate = true, showTime) => {
      const newDate = new Date(timestamp);
      const months = monthNames();
      const day = String(newDate.getDate()).padStart(2, "0");
      const month = months[newDate.getMonth()];
      const year = newDate.getFullYear();
      let hours = newDate.getHours();
      const minutes = String(newDate.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      const date = showDate ? `${day} ${month} ${year}` : "";
      const time = showTime ? `${hours}:${minutes} ${ampm}` : "";
      return `${date} ${time}`;
    };
    const convertTo24HourFormat = (time) => {
      const [timeStr, modifier] = time.split(" ");
      const [hoursStr, minutesStr] = timeStr.split(":");
      let hours = Number(hoursStr);
      const minutes = Number(minutesStr);
      if (modifier === "AM") {
        if (hours === 12) hours = 0;
      } else if (modifier === "PM") {
        if (hours !== 12) hours += 12;
      }
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;
    };
    const combineDateAndTime = (dateString, timeString) => {
      if (!dateString) return null;
      const validTimeString = timeString || "00:00:00";
      const combined = new Date(`${dateString}T${validTimeString}Z`);
      return isNaN(combined.getTime()) ? null : combined;
    };
    const timeAgo = (date) => {
      const now = new Date().getTime();
      const diff = now - new Date(date).getTime();
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(diff / 3600000);
      const days = Math.floor(diff / 86400000);
      if (days > 1) return `${days} days ago`;
      if (days === 1) return "1 day ago";
      if (hours > 1) return `${hours} hours ago`;
      if (hours === 1) return "1 hour ago";
      if (minutes > 1) return `${minutes} minutes ago`;
      if (minutes === 1) return "1 minute ago";
      return "Just now";
    };
    const monthNames = () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const capitalizeFirstLetter = (str) => {
      return str
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");
    };
    const truncateString = (input, maxLength) => {
      if (input?.length > maxLength) {
        return input.substring(0, maxLength) + "...";
      }
      return input;
    };
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };
    const checkLoginUser = () => {
      const decoded =
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ].getData(
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "TOKEN"
          ],
        );
      // const current_time = new Date().getTime() / 1000;
      // || current_time > decoded.exp
      if (!decoded) {
        return false;
      } else {
        return true;
      }
    };
    let accessList = {};
    const screenAccessInit = () => {
      accessList = {};
      SiteConfig.forEach((item) => {
        if (item.children && item.children.length > 0) {
          item.children.forEach((child) => {
            if (child.href) {
              accessList[child.href] = {
                name: child.name,
                read: child.permissions?.read ?? false,
                create: child.permissions?.create ?? false,
                update: child.permissions?.update ?? false,
                delete: child.permissions?.delete ?? false,
              };
            }
          });
        } else if (item.href) {
          accessList[item.href] = {
            name: item.name,
            read: item.permissions?.read ?? false,
            create: item.permissions?.create ?? false,
            update: item.permissions?.update ?? false,
            delete: item.permissions?.delete ?? false,
          };
        }
      });
      if (("TURBOPACK compile-time truthy", 1)) {
        screenAccessCall(window.location.pathname);
      }
    };
    const screenAccessCall = (key) => {
      const access = accessList[key] || {
        name: "none",
        read: true,
        create: true,
        update: true,
        delete: true,
      };
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "ScreenAccess"
      ].value = access;
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "default"
      ].setData(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "SCREEN_ACCESS"
        ],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "ScreenAccess"
        ].value,
      );
    };
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/Documents/react-project/timesheet/utils/app.event.ts [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "CheckSession",
      () => CheckSession,
      "CloseModal",
      () => CloseModal,
      "ModalState",
      () => ModalState,
      "ProgressBar",
      () => ProgressBar,
      "RouterChange",
      () => RouterChange,
      "RouterEvent",
      () => RouterEvent,
      "ScreenAccess",
      () => ScreenAccess,
      "SessionToken",
      () => SessionToken,
      "ShowLoader",
      () => ShowLoader,
      "ShowModal",
      () => ShowModal,
      "ShowToast",
      () => ShowToast,
      "ThemeMode",
      () => ThemeMode,
      "ToastMessage",
      () => ToastMessage,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$dist$2f$signals$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.module.js [app-client] (ecmascript) <locals>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.module.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/utils/app.router.ts [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/utils/app.util.ts [app-client] (ecmascript)",
      );
    const ScreenAccess = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "signal"
    ])({});
    (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "screenAccessInit"
    ])();
    const RouterEvent = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "signal"
    ])({});
    const SessionToken = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "signal"
    ])(
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "default"
      ].getData(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "TOKEN"
        ],
      ) || null,
    );
    const ThemeMode = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "signal"
    ])("light");
    const RouterChange = (pathname, query) => {
      RouterEvent.value = {
        pathname,
        query,
      };
      if (
        pathname ==
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "AppRouter"
        ].SIGN_IN
      ) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ].removeData(
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "TOKEN"
          ],
        );
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ].removeData(
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "SESSION_INFO"
          ],
        );
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ].removeData(
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "GOOGLE_ACCESS_TOKEN"
          ],
          true,
        );
      }
    };
    _c = RouterChange;
    const ProgressBar = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "signal"
    ])(false);
    const ShowLoader = (show) => {
      ProgressBar.value = show;
    };
    _c1 = ShowLoader;
    const ToastMessage = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "signal"
    ])({
      show: false,
      message: "",
      type: "success",
      title: "success",
      placement: "top-center",
      variant: "flat",
      duration: 3000,
    });
    const ShowToast = (message, type = "warning") => {
      ToastMessage.value = {
        show: true,
        message,
        type,
      };
    };
    _c2 = ShowToast;
    const ModalState = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "signal"
    ])({
      show: false,
      title: "",
      body: "",
      primaryAction: {
        label: "",
        action: () => {},
      },
      secondaryAction: {
        label: "",
        action: () => {},
      },
    });
    const ShowModal = (modalConfig) => {
      ModalState.value = {
        show: true,
        title: modalConfig.title || "",
        body: modalConfig.body || "",
        primaryAction: modalConfig.primaryAction || {
          label: "",
          action: () => {
            if (modalConfig.primaryAction?.action) {
              modalConfig.primaryAction.action();
            }
            CloseModal();
          },
        },
        secondaryAction: modalConfig.secondaryAction || {
          label: "",
          action: () => {},
        },
      };
    };
    _c3 = ShowModal;
    const CloseModal = () => {
      ModalState.value = {
        show: false,
        title: "",
        body: "",
        primaryAction: {
          label: "",
          action: () => {},
        },
        secondaryAction: {
          label: "",
          action: () => {},
        },
      };
    };
    _c4 = CloseModal;
    const CheckSession = () => {
      SessionToken.value =
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ].getData(
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "TOKEN"
          ],
        ) || null;
    };
    _c5 = CheckSession;
    var _c, _c1, _c2, _c3, _c4, _c5;
    __turbopack_context__.k.register(_c, "RouterChange");
    __turbopack_context__.k.register(_c1, "ShowLoader");
    __turbopack_context__.k.register(_c2, "ShowToast");
    __turbopack_context__.k.register(_c3, "ShowModal");
    __turbopack_context__.k.register(_c4, "CloseModal");
    __turbopack_context__.k.register(_c5, "CheckSession");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/Documents/react-project/timesheet/components/router-listener.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["RouterListener", () => RouterListener]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/navigation.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.module.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$dist$2f$signals$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.module.js [app-client] (ecmascript) <locals>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.module.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/utils/app.event.ts [app-client] (ecmascript)",
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    const RouterListener = () => {
      _s();
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useSignals"
      ])();
      const router = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRouter"
      ])();
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(
        {
          "RouterListener.useEffect": () => {
            const dispose = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "effect"
            ])(
              {
                "RouterListener.useEffect.dispose": () => {
                  const { pathname, query } =
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "RouterEvent"
                    ].value;
                  if (pathname) {
                    // Construct URL with query params if they exist
                    let url = pathname;
                    if (query && Object.keys(query).length > 0) {
                      const searchParams = new URLSearchParams(query);
                      url = `${pathname}?${searchParams.toString()}`;
                    }
                    router.push(url);
                    // Reset the signal to avoid redundant push on re-render
                    // However, we need to be careful not to trigger another effect if we use value directly
                    // Usually, setting it to {} is safe if we check for pathname
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "RouterEvent"
                    ].peek().pathname = "";
                  }
                },
              }["RouterListener.useEffect.dispose"],
            );
            return {
              "RouterListener.useEffect": () => dispose(),
            }["RouterListener.useEffect"];
          },
        }["RouterListener.useEffect"],
        [router],
      );
      return null;
    };
    _s(RouterListener, "y4zI5JHawyuK4cgTDmGrQzxo3MA=", false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useSignals"
        ],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useRouter"
        ],
      ];
    });
    _c = RouterListener;
    var _c;
    __turbopack_context__.k.register(_c, "RouterListener");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.module.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/utils/app.event.ts [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>",
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    const ToastComponent = () => {
      _s();
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useSignals"
      ])();
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(
        {
          "ToastComponent.useEffect": () => {
            if (
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "ToastMessage"
              ].value.show
            ) {
              const timer = setTimeout(
                {
                  "ToastComponent.useEffect.timer": () => {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "ToastMessage"
                    ].value = {
                      ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "ToastMessage"
                      ].value,
                      show: false,
                    };
                  },
                }["ToastComponent.useEffect.timer"],
                3000,
              );
              return {
                "ToastComponent.useEffect": () => clearTimeout(timer),
              }["ToastComponent.useEffect"];
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
          },
        }["ToastComponent.useEffect"],
        [
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "ToastMessage"
          ].value.show,
        ],
      );
      if (
        !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "ToastMessage"
        ].value.show
      )
        return null;
      const type =
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "ToastMessage"
        ].value.type || "success";
      const alertClass =
        type === "danger"
          ? "alert-error"
          : type === "primary"
            ? "alert-info"
            : type === "warning"
              ? "alert-warning"
              : "alert-success";
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "toast toast-top toast-end z-[9999]",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: `alert ${alertClass} text-white`,
              children: [
                type === "success" &&
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__[
                      "CheckCircle"
                    ],
                    {
                      className: "w-5 h-5",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
                      lineNumber: 36,
                      columnNumber: 32,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                type === "danger" &&
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__[
                      "AlertCircle"
                    ],
                    {
                      className: "w-5 h-5",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
                      lineNumber: 37,
                      columnNumber: 31,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                (type === "primary" || type === "warning") &&
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__[
                      "Info"
                    ],
                    {
                      className: "w-5 h-5",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
                      lineNumber: 38,
                      columnNumber: 56,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "span",
                  {
                    children:
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "ToastMessage"
                      ].value.message,
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
                    lineNumber: 39,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
              ],
            },
            void 0,
            true,
            {
              fileName:
                "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
              lineNumber: 35,
              columnNumber: 7,
            },
            ("TURBOPACK compile-time value", void 0),
          ),
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
          lineNumber: 34,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    _s(ToastComponent, "dEjk7wUDWQ+RgTsajA/e1jLR1k8=", false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useSignals"
        ],
      ];
    });
    _c = ToastComponent;
    const __TURBOPACK__default__export__ = ToastComponent;
    var _c;
    __turbopack_context__.k.register(_c, "ToastComponent");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/Documents/react-project/timesheet/node_modules/next/navigation.js [app-client] (ecmascript)",
  (__turbopack_context__, module, exports) => {
    module.exports = __turbopack_context__.r(
      "[project]/Documents/react-project/timesheet/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)",
    );
  },
  "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.module.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Computed",
      () => w,
      "Effect",
      () => S,
      "Signal",
      () => d,
      "action",
      () => E,
      "batch",
      () => n,
      "computed",
      () => b,
      "createModel",
      () => C,
      "effect",
      () => m,
      "signal",
      () => c,
      "untracked",
      () => o,
    ]);
    var i = Symbol.for("preact-signals");
    function t() {
      if (!(s > 1)) {
        var i,
          t = !1;
        while (void 0 !== h) {
          var n = h;
          h = void 0;
          v++;
          while (void 0 !== n) {
            var r = n.o;
            n.o = void 0;
            n.f &= -3;
            if (!(8 & n.f) && a(n))
              try {
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
      } finally {
        t();
      }
    }
    var r = void 0;
    function o(i) {
      var t = r;
      r = void 0;
      try {
        return i();
      } finally {
        r = t;
      }
    }
    var f,
      h = void 0,
      s = 0,
      v = 0,
      u = 0;
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
            r: t,
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
    d.prototype.h = function () {
      return !0;
    };
    d.prototype.S = function (i) {
      var t = this,
        n = this.t;
      if (n !== i && void 0 === i.e) {
        i.x = n;
        this.t = i;
        if (void 0 !== n) n.e = i;
        else
          o(function () {
            var i;
            null == (i = t.W) || i.call(t);
          });
      }
    };
    d.prototype.U = function (i) {
      var t = this;
      if (void 0 !== this.t) {
        var n = i.e,
          r = i.x;
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
          if (void 0 === r)
            o(function () {
              var i;
              null == (i = t.Z) || i.call(t);
            });
        }
      }
    };
    d.prototype.subscribe = function (i) {
      var t = this;
      return m(
        function () {
          var n = t.value,
            o = r;
          r = void 0;
          try {
            i(n);
          } finally {
            r = o;
          }
        },
        {
          name: "sub",
        },
      );
    };
    d.prototype.valueOf = function () {
      return this.value;
    };
    d.prototype.toString = function () {
      return this.value + "";
    };
    d.prototype.toJSON = function () {
      return this.value;
    };
    d.prototype.peek = function () {
      var i = r;
      r = void 0;
      try {
        return this.value;
      } finally {
        r = i;
      }
    };
    Object.defineProperty(d.prototype, "value", {
      get: function () {
        var i = e(this);
        if (void 0 !== i) i.i = this.i;
        return this.v;
      },
      set: function (i) {
        if (i !== this.v) {
          if (v > 100) throw new Error("Cycle detected");
          this.v = i;
          this.i++;
          u++;
          s++;
          try {
            for (var n = this.t; void 0 !== n; n = n.x) n.t.N();
          } finally {
            t();
          }
        }
      },
    });
    function c(i, t) {
      return new d(i, t);
    }
    function a(i) {
      for (var t = i.s; void 0 !== t; t = t.n)
        if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
      return !1;
    }
    function l(i) {
      for (var t = i.s; void 0 !== t; t = t.n) {
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
      var t = i.s,
        n = void 0;
      while (void 0 !== t) {
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
    w.prototype = new d();
    w.prototype.h = function () {
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
    w.prototype.S = function (i) {
      if (void 0 === this.t) {
        this.f |= 36;
        for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t);
      }
      d.prototype.S.call(this, i);
    };
    w.prototype.U = function (i) {
      if (void 0 !== this.t) {
        d.prototype.U.call(this, i);
        if (void 0 === this.t) {
          this.f &= -33;
          for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t);
        }
      }
    };
    w.prototype.N = function () {
      if (!(2 & this.f)) {
        this.f |= 6;
        for (var i = this.t; void 0 !== i; i = i.x) i.t.N();
      }
    };
    Object.defineProperty(w.prototype, "value", {
      get: function () {
        if (1 & this.f) throw new Error("Cycle detected");
        var i = e(this);
        this.h();
        if (void 0 !== i) i.i = this.i;
        if (16 & this.f) throw this.v;
        return this.v;
      },
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
        } finally {
          r = o;
          t();
        }
      }
    }
    function p(i) {
      for (var t = i.s; void 0 !== t; t = t.n) t.S.U(t);
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
    S.prototype.c = function () {
      var i = this.S();
      try {
        if (8 & this.f) return;
        if (void 0 === this.x) return;
        var t = this.x();
        if ("function" == typeof t) this.u = t;
      } finally {
        i();
      }
    };
    S.prototype.S = function () {
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
    S.prototype.N = function () {
      if (!(2 & this.f)) {
        this.f |= 2;
        this.o = h;
        h = this;
      }
    };
    S.prototype.d = function () {
      this.f |= 8;
      if (!(1 & this.f)) p(this);
    };
    S.prototype.dispose = function () {
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
      return function () {
        var t = arguments,
          r = this;
        return n(function () {
          return o(function () {
            return i.apply(r, [].slice.call(t));
          });
        });
      };
    }
    function x() {
      var i = f;
      f = [];
      return function () {
        var t = f;
        if (f && i) i = i.concat(f);
        f = i;
        return t;
      };
    }
    function C(i) {
      return function () {
        var t,
          n,
          r = x();
        try {
          n = i.apply(void 0, [].slice.call(arguments));
        } catch (i) {
          f = void 0;
          throw i;
        } finally {
          t = r();
        }
        for (var o in n) if ("function" == typeof n[o]) n[o] = E(n[o]);
        n[Symbol.dispose] = E(function () {
          if (t) for (var i = 0; i < t.length; i++) t[i].dispose();
          t = void 0;
        });
        return n;
      };
    }
    //# sourceMappingURL=signals-core.module.js.map
  },
  "[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)",
  (__turbopack_context__, module, exports) => {
    "use strict";

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)",
      );
    /**
     * @license React
     * use-sync-external-store-shim.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ ("use strict");
    "production" !== ("TURBOPACK compile-time value", "development") &&
      (function () {
        function is(x, y) {
          return (
            (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y)
          );
        }
        function useSyncExternalStore$2(subscribe, getSnapshot) {
          didWarnOld18Alpha ||
            void 0 === React.startTransition ||
            ((didWarnOld18Alpha = !0),
            console.error(
              "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.",
            ));
          var value = getSnapshot();
          if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) ||
              (console.error(
                "The result of getSnapshot should be cached to avoid an infinite loop",
              ),
              (didWarnUncachedGetSnapshot = !0));
          }
          cachedValue = useState({
            inst: {
              value: value,
              getSnapshot: getSnapshot,
            },
          });
          var inst = cachedValue[0].inst,
            forceUpdate = cachedValue[1];
          useLayoutEffect(
            {
              "useSyncExternalStore$2.useLayoutEffect": function () {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) &&
                  forceUpdate({
                    inst: inst,
                  });
              },
            }["useSyncExternalStore$2.useLayoutEffect"],
            [subscribe, value, getSnapshot],
          );
          useEffect(
            {
              "useSyncExternalStore$2.useEffect": function () {
                checkIfSnapshotChanged(inst) &&
                  forceUpdate({
                    inst: inst,
                  });
                return subscribe(
                  {
                    "useSyncExternalStore$2.useEffect": function () {
                      checkIfSnapshotChanged(inst) &&
                        forceUpdate({
                          inst: inst,
                        });
                    },
                  }["useSyncExternalStore$2.useEffect"],
                );
              },
            }["useSyncExternalStore$2.useEffect"],
            [subscribe],
          );
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
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" ===
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var React = __turbopack_context__.r(
            "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
          ),
          objectIs = "function" === typeof Object.is ? Object.is : is,
          useState = React.useState,
          useEffect = React.useEffect,
          useLayoutEffect = React.useLayoutEffect,
          useDebugValue = React.useDebugValue,
          didWarnOld18Alpha = !1,
          didWarnUncachedGetSnapshot = !1,
          shim =
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
              ? useSyncExternalStore$1
              : useSyncExternalStore$2;
        exports.useSyncExternalStore =
          void 0 !== React.useSyncExternalStore
            ? React.useSyncExternalStore
            : shim;
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" ===
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
  },
  "[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)",
  (__turbopack_context__, module, exports) => {
    "use strict";

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)",
      );
    ("use strict");
    if (("TURBOPACK compile-time falsy", 0)) //TURBOPACK unreachable
    ;
    else {
      module.exports = __turbopack_context__.r(
        "[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)",
      );
    }
  },
  "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.module.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "_useSignalsImplementation",
      () => C,
      "ensureFinalCleanup",
      () => P,
      "useComputed",
      () => useComputed,
      "useModel",
      () => O,
      "useSignal",
      () => useSignal,
      "useSignalEffect",
      () => useSignalEffect,
      "useSignals",
      () => N,
      "wrapJsx",
      () => p,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.module.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)",
      );
    var l =
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "version"
        ]
          .split(".")
          .map(Number)[0],
      v = [],
      d = Symbol.for(l >= 19 ? "react.transitional.element" : "react.element"),
      m = "undefined" != typeof window && !!window.__PREACT_SIGNALS_DEVTOOLS__;
    function p(t) {
      if ("function" != typeof t) return t;
      else
        return function (r, i) {
          if ("string" == typeof r && i)
            for (var e in i) {
              var o = i[e];
              if (
                "children" !== e &&
                o instanceof
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "Signal"
                  ]
              )
                i[e] = o.value;
            }
          return t.call.apply(t, [t, r, i].concat([].slice.call(arguments, 2)));
        };
    }
    var b,
      y = Symbol.dispose || Symbol.for("Symbol.dispose");
    function g(n, t) {
      var r = t.effect.S();
      b = t;
      return h.bind(t, n, r);
    }
    function h(n, t) {
      t();
      b = n;
    }
    var w,
      _,
      S = function () {},
      x =
        (((w = {
          o: 0,
          effect: {
            s: void 0,
            c: function () {},
            S: function () {
              return S;
            },
            d: function () {},
          },
          subscribe: function () {
            return S;
          },
          getSnapshot: function () {
            return 0;
          },
          S: function () {},
          f: function () {},
        })[y] = function () {}),
        w),
      j = Promise.prototype.then.bind(Promise.resolve());
    function P() {
      if (!_) _ = j($);
    }
    function $() {
      var n;
      _ = void 0;
      null == (n = b) || n.f();
    }
    var k =
      "undefined" != typeof window
        ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useLayoutEffect"
          ]
        : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "useEffect"
          ];
    function C(n, t) {
      if (void 0 === n) n = 0;
      P();
      var r = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRef"
      ])();
      if (null == r.current)
        if ("undefined" == typeof window) r.current = x;
        else
          r.current = (function (n, t) {
            var r,
              e,
              o,
              u,
              f = 0,
              c = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "effect"
              ])(
                function () {
                  e = this;
                },
                {
                  name: t || "Component",
                },
              );
            e.c = function () {
              f = (f + 1) | 0;
              if (m) {
                var n;
                null == (n = e.y) || n.call(e);
              }
              if (u) u();
            };
            return (
              ((r = {
                o: n,
                effect: e,
                subscribe: function (n) {
                  u = n;
                  return function () {
                    f = (f + 1) | 0;
                    u = void 0;
                    c();
                  };
                },
                getSnapshot: function () {
                  return f;
                },
                S: function () {
                  if (null != b) {
                    var n = b.o,
                      t = this.o;
                    if ((0 == n && 0 == t) || (0 == n && 1 == t)) {
                      b.f();
                      o = g(void 0, this);
                    } else if ((1 == n && 0 == t) || (2 == n && 0 == t));
                    else o = g(b, this);
                  } else o = g(void 0, this);
                },
                f: function () {
                  var n = o;
                  o = void 0;
                  null == n || n();
                },
              })[y] = function () {
                this.f();
              }),
              r
            );
          })(n, t);
      var e = r.current;
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useSyncExternalStore"
      ])(e.subscribe, e.getSnapshot, e.getSnapshot);
      e.S();
      if (0 === n) k($);
      return e;
    }
    Object.defineProperties(
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "Signal"
      ].prototype,
      {
        $$typeof: {
          configurable: !0,
          value: d,
        },
        type: {
          configurable: !0,
          value: function (n) {
            var t = n.data,
              r = C(1);
            try {
              return t.value;
            } finally {
              r.f();
            }
          },
        },
        props: {
          configurable: !0,
          get: function () {
            return {
              data: this,
            };
          },
        },
        ref: {
          configurable: !0,
          value: null,
        },
      },
    );
    function N(n, t) {
      return C(n, t);
    }
    function useSignal(n, r) {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMemo"
      ])(function () {
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "signal"
        ])(n, r);
      }, v);
    }
    function useComputed(n, t) {
      var i = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(n);
      i.current = n;
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useMemo"
      ])(function () {
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "computed"
        ])(function () {
          return i.current();
        }, t);
      }, v);
    }
    function useSignalEffect(n, t) {
      var r = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(n);
      r.current = n;
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(function () {
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "effect"
        ])(function () {
          return r.current();
        }, t);
      }, v);
    }
    function O(n) {
      var t = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(function () {
        return n();
      })[0];
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(
        function () {
          return t[Symbol.dispose];
        },
        [t],
      );
      return t;
    }
    //# sourceMappingURL=runtime.module.js.map
  },
  "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.module.js [app-client] (ecmascript) <locals>",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.module.js [app-client] (ecmascript)",
      ); //# sourceMappingURL=signals.module.js.map
  },
  "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)",
  (__turbopack_context__, module, exports) => {
    "use strict";

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)",
      );
    /**
     * @license React
     * react-jsx-dev-runtime.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ ("use strict");
    "production" !== ("TURBOPACK compile-time value", "development") &&
      (function () {
        function getComponentNameFromType(type) {
          if (null == type) return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE
              ? null
              : type.displayName || type.name || null;
          if ("string" === typeof type) return type;
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
              return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
              return "ViewTransition";
          }
          if ("object" === typeof type)
            switch (
              ("number" === typeof type.tag &&
                console.error(
                  "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
                ),
              type.$$typeof)
            ) {
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type ||
                  ((type = innerType.displayName || innerType.name || ""),
                  (type =
                    "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
                return type;
              case REACT_MEMO_TYPE:
                return (
                  (innerType = type.displayName || null),
                  null !== innerType
                    ? innerType
                    : getComponentNameFromType(type.type) || "Memo"
                );
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {}
            }
          return null;
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
          } catch (e) {
            JSCompiler_inline_result = !0;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 =
              ("function" === typeof Symbol &&
                Symbol.toStringTag &&
                value[Symbol.toStringTag]) ||
              value.constructor.name ||
              "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0,
            );
            return testStringCoercion(value);
          }
        }
        function getTaskName(type) {
          if (type === REACT_FRAGMENT_TYPE) return "<>";
          if (
            "object" === typeof type &&
            null !== type &&
            type.$$typeof === REACT_LAZY_TYPE
          )
            return "<...>";
          try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
          } catch (x) {
            return "<...>";
          }
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function UnknownOwner() {
          return Error("react-stack-top-frame");
        }
        function hasValidKey(config) {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
          }
          return void 0 !== config.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown ||
              ((specialPropKeyWarningShown = !0),
              console.error(
                "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
                displayName,
              ));
          }
          warnAboutAccessingKey.isReactWarning = !0;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0,
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] ||
            ((didWarnAboutElementRef[componentName] = !0),
            console.error(
              "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.",
            ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, props, owner, debugStack, debugTask) {
          var refProp = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner,
          };
          null !== (void 0 !== refProp ? refProp : null)
            ? Object.defineProperty(type, "ref", {
                enumerable: !1,
                get: elementRefGetterWithDeprecationWarning,
              })
            : Object.defineProperty(type, "ref", {
                enumerable: !1,
                value: null,
              });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0,
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null,
          });
          Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack,
          });
          Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask,
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function jsxDEVImpl(
          type,
          config,
          maybeKey,
          isStaticChildren,
          debugStack,
          debugTask,
        ) {
          var children = config.children;
          if (void 0 !== children)
            if (isStaticChildren)
              if (isArrayImpl(children)) {
                for (
                  isStaticChildren = 0;
                  isStaticChildren < children.length;
                  isStaticChildren++
                )
                  validateChildKeys(children[isStaticChildren]);
                Object.freeze && Object.freeze(children);
              } else
                console.error(
                  "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
                );
            else validateChildKeys(children);
          if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function (k) {
              return "key" !== k;
            });
            isStaticChildren =
              0 < keys.length
                ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
                : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] ||
              ((keys =
                0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
              console.error(
                'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
                isStaticChildren,
                children,
                keys,
                children,
              ),
              (didWarnAboutKeySpread[children + isStaticChildren] = !0));
          }
          children = null;
          void 0 !== maybeKey &&
            (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
          hasValidKey(config) &&
            (checkKeyStringCoercion(config.key), (children = "" + config.key));
          if ("key" in config) {
            maybeKey = {};
            for (var propName in config)
              "key" !== propName && (maybeKey[propName] = config[propName]);
          } else maybeKey = config;
          children &&
            defineKeyPropWarningGetter(
              maybeKey,
              "function" === typeof type
                ? type.displayName || type.name || "Unknown"
                : type,
            );
          return ReactElement(
            type,
            children,
            maybeKey,
            getOwner(),
            debugStack,
            debugTask,
          );
        }
        function validateChildKeys(node) {
          isValidElement(node)
            ? node._store && (node._store.validated = 1)
            : "object" === typeof node &&
              null !== node &&
              node.$$typeof === REACT_LAZY_TYPE &&
              ("fulfilled" === node._payload.status
                ? isValidElement(node._payload.value) &&
                  node._payload.value._store &&
                  (node._payload.value._store.validated = 1)
                : node._store && (node._store.validated = 1));
        }
        function isValidElement(object) {
          return (
            "object" === typeof object &&
            null !== object &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        var React = __turbopack_context__.r(
            "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
          ),
          REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
          REACT_PORTAL_TYPE = Symbol.for("react.portal"),
          REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
          REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
          REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
          REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
          REACT_CONTEXT_TYPE = Symbol.for("react.context"),
          REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
          REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
          REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
          REACT_MEMO_TYPE = Symbol.for("react.memo"),
          REACT_LAZY_TYPE = Symbol.for("react.lazy"),
          REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
          REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
          REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
          ReactSharedInternals =
            React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          hasOwnProperty = Object.prototype.hasOwnProperty,
          isArrayImpl = Array.isArray,
          createTask = console.createTask
            ? console.createTask
            : function () {
                return null;
              };
        React = {
          react_stack_bottom_frame: function (callStackForError) {
            return callStackForError();
          },
        };
        var specialPropKeyWarningShown;
        var didWarnAboutElementRef = {};
        var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
          React,
          UnknownOwner,
        )();
        var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
        var didWarnAboutKeySpread = {};
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsxDEV = function (type, config, maybeKey, isStaticChildren) {
          var trackActualOwner =
            1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
          if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
          } else debugStackDEV = unknownOwnerDebugStack;
          return jsxDEVImpl(
            type,
            config,
            maybeKey,
            isStaticChildren,
            debugStackDEV,
            trackActualOwner
              ? createTask(getTaskName(type))
              : unknownOwnerDebugTask,
          );
        };
      })();
  },
  "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
  (__turbopack_context__, module, exports) => {
    "use strict";

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)",
      );
    ("use strict");
    if (("TURBOPACK compile-time falsy", 0)) //TURBOPACK unreachable
    ;
    else {
      module.exports = __turbopack_context__.r(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)",
      );
    }
  },
  "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "hasA11yProp",
      () => hasA11yProp,
      "mergeClasses",
      () => mergeClasses,
      "toCamelCase",
      () => toCamelCase,
      "toKebabCase",
      () => toKebabCase,
      "toPascalCase",
      () => toPascalCase,
    ]);
    /**
     * @license lucide-react v0.562.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const toKebabCase = (string) =>
      string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const toCamelCase = (string) =>
      string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
        p2 ? p2.toUpperCase() : p1.toLowerCase(),
      );
    const toPascalCase = (string) => {
      const camelCase = toCamelCase(string);
      return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
    };
    const mergeClasses = (...classes) =>
      classes
        .filter((className, index, array) => {
          return (
            Boolean(className) &&
            className.trim() !== "" &&
            array.indexOf(className) === index
          );
        })
        .join(" ")
        .trim();
    const hasA11yProp = (props) => {
      for (const prop in props) {
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
          return true;
        }
      }
    };
    //# sourceMappingURL=utils.js.map
  },
  "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => defaultAttributes]);
    /**
     * @license lucide-react v0.562.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ var defaultAttributes = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    //# sourceMappingURL=defaultAttributes.js.map
  },
  "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Icon]);
    /**
     * @license lucide-react v0.562.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)",
      );
    const Icon = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "forwardRef"
    ])(
      (
        {
          color = "currentColor",
          size = 24,
          strokeWidth = 2,
          absoluteStrokeWidth,
          className = "",
          children,
          iconNode,
          ...rest
        },
        ref,
      ) =>
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "createElement"
        ])(
          "svg",
          {
            ref,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "default"
            ],
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth
              ? (Number(strokeWidth) * 24) / Number(size)
              : strokeWidth,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "mergeClasses"
            ])("lucide", className),
            ...(!children &&
              !(0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "hasA11yProp"
              ])(rest) && {
                "aria-hidden": "true",
              }),
            ...rest,
          },
          [
            ...iconNode.map(([tag, attrs]) =>
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "createElement"
              ])(tag, attrs),
            ),
            ...(Array.isArray(children) ? children : [children]),
          ],
        ),
    );
    //# sourceMappingURL=Icon.js.map
  },
  "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => createLucideIcon]);
    /**
     * @license lucide-react v0.562.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)",
      );
    const createLucideIcon = (iconName, iconNode) => {
      const Component = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "forwardRef"
      ])(({ className, ...props }, ref) =>
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "createElement"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ],
          {
            ref,
            iconNode,
            className: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "mergeClasses"
            ])(
              `lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`,
              `lucide-${iconName}`,
              className,
            ),
            ...props,
          },
        ),
      );
      Component.displayName = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "toPascalCase"
      ])(iconName);
      return Component;
    };
    //# sourceMappingURL=createLucideIcon.js.map
  },
  "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "__iconNode",
      () => __iconNode,
      "default",
      () => CircleCheckBig,
    ]);
    /**
     * @license lucide-react v0.562.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)",
      );
    const __iconNode = [
      [
        "path",
        {
          d: "M21.801 10A10 10 0 1 1 17 3.335",
          key: "yps3ct",
        },
      ],
      [
        "path",
        {
          d: "m9 11 3 3L22 4",
          key: "1pflzl",
        },
      ],
    ];
    const CircleCheckBig = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "default"
    ])("circle-check-big", __iconNode);
    //# sourceMappingURL=circle-check-big.js.map
  },
  "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "CheckCircle",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ],
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)",
      );
  },
  "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "__iconNode",
      () => __iconNode,
      "default",
      () => CircleAlert,
    ]);
    /**
     * @license lucide-react v0.562.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)",
      );
    const __iconNode = [
      [
        "circle",
        {
          cx: "12",
          cy: "12",
          r: "10",
          key: "1mglay",
        },
      ],
      [
        "line",
        {
          x1: "12",
          x2: "12",
          y1: "8",
          y2: "12",
          key: "1pkeuh",
        },
      ],
      [
        "line",
        {
          x1: "12",
          x2: "12.01",
          y1: "16",
          y2: "16",
          key: "4dfq90",
        },
      ],
    ];
    const CircleAlert = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "default"
    ])("circle-alert", __iconNode);
    //# sourceMappingURL=circle-alert.js.map
  },
  "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "AlertCircle",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ],
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)",
      );
  },
  "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "__iconNode",
      () => __iconNode,
      "default",
      () => Info,
    ]);
    /**
     * @license lucide-react v0.562.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)",
      );
    const __iconNode = [
      [
        "circle",
        {
          cx: "12",
          cy: "12",
          r: "10",
          key: "1mglay",
        },
      ],
      [
        "path",
        {
          d: "M12 16v-4",
          key: "1dtifu",
        },
      ],
      [
        "path",
        {
          d: "M12 8h.01",
          key: "e9boi3",
        },
      ],
    ];
    const Info = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
      "default"
    ])("info", __iconNode);
    //# sourceMappingURL=info.js.map
  },
  "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Info",
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ],
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript)",
      );
  },
]);

//# sourceMappingURL=Documents_react-project_timesheet_45dbc118._.js.map
