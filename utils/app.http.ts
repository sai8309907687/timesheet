import { Http } from "dff-util";
import AppStorage, { TENANT_ID, TOKEN } from "./app.storage";

const API_BASE_URL = "https://apidev.dfftech.com/api";

// const DEFAULT_TENANT_ID = "dff";

export const getTenantId = (): string => {
  const tenantId = hasTenant();
  return typeof tenantId === "string" ? tenantId : "";
};

export const hasTenant = (): string | boolean => {
  const storedTenant = AppStorage.getData(TENANT_ID, true);
  if (storedTenant) {
    return storedTenant || false;
  }
  const envTenant = AppStorage.envData('TENANT_ID');
  if (envTenant) {
    AppStorage.setData(TENANT_ID, envTenant, true);
    return envTenant || false;
  }
  return false;
};


(() => {
  const envBaseUrl = AppStorage.envData('BASE_URL');
  if (envBaseUrl) {
    Http.API_BASE_URL = envBaseUrl;
  } else {
    Http.API_BASE_URL = API_BASE_URL;
  }
})();

export default class AppHttp {
  static async Load(
    id: string,
    params: Record<string, string | number | boolean>,
  ) {
    const headers = {
      ...AppHttp.Headers(),
      ["Content-Type"]: "application/json",
      authorization: AppStorage.getData(TOKEN, true),
    };

    return await Http.Get(`/load/${id}`, params, headers);
  }

  static Headers() {
    return {
      ["Content-Type"]: "application/json",
      "x-tenant-id": getTenantId(),
      // "x-token": process.env.ANTWEB_API_TOKEN || "TEST+MY_PROJECT1+MKJWQZI1",
      authorization: AppStorage.getData(TOKEN),
    };
  }

  static async Get(url: string, params: Record<string, string | number | boolean>) {
    const headers = {
      ...AppHttp.Headers(),
      ["Content-Type"]: "application/json",
      authorization: AppStorage.getData(TOKEN, true),
    };

    return await Http.Get(url, params, headers);
  }

  static async Post(url: string, params: unknown) {
    const headers = {
      ...AppHttp.Headers(),
      ["Content-Type"]: "application/json",
      authorization: AppStorage.getData(TOKEN, true)
    };

    return await Http.Post(url, params, headers);
  }

  static async Put(url: string, id: string, params: unknown) {
    const headers = { ...AppHttp.Headers() };

    return await Http.Put(url + "/" + id, params, headers);
  }

  static async Delete(url: string, params: unknown) {
    const headers = {
      ...AppHttp.Headers(),
      ["Content-Type"]: "application/json",
      authorization: AppStorage.getData(TOKEN, true)
    };

    return await Http.Delete(url, params, headers);
  }
}

// Astropeace MS URL's
export const MsUrl = {
  menuAccess: "/menu_access/search",
  // auth: "/astropeace-auth",
  base: "/antweb-base",
  // horoscope: "/astropeace-horoscope",
  // language: "/astropeace-lang",
  // payments: "/astropeace-payments",
  sor: "/antweb-sor",
  access: "/antweb-access",
};

export const ApiUrl = {
  menuAccess: "/menu_access/search",
  menuGroupsSearch: "/menu_groups/search",
  menuGroupsCreate: "/menu_groups/create",
  menuLinksSearch: "/menu_links/search",
  menuLinksCreate: "/menu_links/create",
  menuRolesSearch: "/menu_roles/search",
  menuRolesCreate: "/menu_roles/create",
  menuAccessBulkCreate: "/menu_access/bulk-create"
  // astrologicalTimings: "/astrological-timings",
  // horoscope: "/horoscope",
  // profileSearch: "/profile/search",
  // profileEntity: "/profile/entity",
  // horoscopeSearch: "/horoscope/search",
  // zodiacSignSearch: "/zodiac-sign/search",
  // poojaService: "/pooja-services",
  // poojaSearch: "/pooja-services/search",
  // subscription: "/subscription",
  // BookingSearch: "/pooja-service-bookings/search",
  // transactionSearch: "/transaction/search",
  // activitySearch: "/activities/search"
};
