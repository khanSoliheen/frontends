/**
 * @module @shopware/nuxt3
 */
import {
  defineNuxtModule,
  addPluginTemplate,
  createResolver,
} from "@nuxt/kit";
import { addCustomTab } from "@nuxt/devtools-kit";

export default defineNuxtModule<ShopwareNuxtOptions>({
  meta: {
    name: "@shopware/nuxt3",
    configKey: "shopware",
  },
  async setup(moduleConfig) {
    const resolver = createResolver(import.meta.url);

    const shopwareEndpoint =
      moduleConfig.shopwareEndpoint ??
      "https://demo-frontends.shopware.store/store-api/";
    const accessToken =
      moduleConfig.shopwareAccessToken ?? "SWSCBHFSNTVMAWNZDNFKSHLAYW";

    addPluginTemplate({
      filename: "shopware.plugin.mjs",
      src: resolver.resolve("../plugin.ts"),
      options: {
        shopwareEndpoint: shopwareEndpoint,
        shopwareAccessToken: accessToken,
        shopwareApiClient: {
          timeout: moduleConfig.apiClientConfig?.timeout ?? "10000",
        },
      },
    });

    // TODO: define template only when file is not present in root directory
    // addTypeTemplate({
    //   filename: "shopware.d.ts",
    //   src: resolve(__dirname, "../shopware.d.ts"),
    // });

    addCustomTab({
      name: "shopware-frontends",
      title: "Shopware Frontends",
      icon: "fa6-brands:shopware",
      view: {
        type: "iframe",
        src: "https://frontends.shopware.com/",
      },
    });
  },
});

export type ShopwareNuxtOptions = {
  /**
   * Endpoint for your shopware backend.
   *
   * Default demo store: "https://demo-frontends.swstage.store/"
   */
  shopwareEndpoint: string;
  shopwareAccessToken: string;
  devStorefrontUrl?: string;
  apiClientConfig?: {
    timeout?: number | string;
  };
  /**
   * Use user context in SSR mode. Warning: with wrong edge caching it can cause serving another user's data.
   * Use when edge caching is configured properly.
   *
   * @default false
   */
  useUserContextInSSR?: boolean;
};

declare module "@nuxt/schema" {
  interface NuxtConfig {
    shopware?: ShopwareNuxtOptions;
  }
  interface NuxtOptions {
    shopware?: ShopwareNuxtOptions;
  }

  interface PublicRuntimeConfig {
    shopware: ShopwareNuxtOptions;
  }
}
