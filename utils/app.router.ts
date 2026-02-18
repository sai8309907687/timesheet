export const AppRouter = {
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

export const NonAuthRoutes = [
  AppRouter.DEFAULT,
  AppRouter.HOME,
  AppRouter.SIGN_IN,
  AppRouter.FORGOT_PASSWORD,
  AppRouter.RESET_PASSWORD,
  AppRouter.SETTINGS,
  AppRouter.MENU_ACCESS,
  AppRouter.MENU_MANAGEMENT,
];
