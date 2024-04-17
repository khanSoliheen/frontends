type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
type OneOf<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
    ? OneOf<[XOR<A, B>, ...Rest]>
    : never;
type GenericRecord =
  | never
  | null
  | string
  | string[]
  | number
  | { [key: string]: GenericRecord };
export type components = {
  schemas: Schemas;
};
export type Schemas = {
  AbstractDynamicPageOpenedPayload: {
    /** @default true */
    opened?: boolean;
    /** The type of the current dynamic page */
    type: string;
  };
  AccountNewsletterRecipientResult: {
    // TODO: [OpenAPI][AccountNewsletterRecipientResult] - update type definition
    apiAlias: "account_newsletter_recipient";
    status: "undefined" | "notSet" | "direct" | "optIn" | "optOut";
  };
  AclRole: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AdvancedSearchAction: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AdvancedSearchActionSearchTerm: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AdvancedSearchBoosting: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AdvancedSearchConfig: {
    /** Format: date-time */
    createdAt: string;
    hitCount?: {
      category?: {
        /** Format: int64 */
        maxSearchCount?: number;
        /** Format: int64 */
        maxSuggestCount?: number;
      };
      product?: {
        /** Format: int64 */
        maxSearchCount?: number;
        /** Format: int64 */
        maxSuggestCount?: number;
      };
      product_manufacturer?: {
        /** Format: int64 */
        maxSearchCount?: number;
        /** Format: int64 */
        maxSuggestCount?: number;
      };
    };
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AdvancedSearchConfigField: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AdvancedSearchEntityStream: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AdvancedSearchEntityStreamFilter: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AdvancedSearchSynonym: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  App: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  AppActionButton: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  AppAdministrationSnippet: {
    appId: string;
    /** Format: date-time */
    createdAt: string;
    id?: string;
    localeId: string;
    /** Format: date-time */
    updatedAt?: string;
    value: string;
  };
  AppCmsBlock: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  AppFlowAction: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  AppFlowEvent: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AppPaymentMethod: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AppScriptCondition: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  AppShippingMethod: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  AppTemplate: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ApprovalRule: {
    active?: boolean;
    businessPartnerCustomerId?: string;
    conditions?: {
      type?: string;
      value?: string;
    }[];
    description?: string;
    /** Format: uuid */
    id?: string;
    name?: string;
    priority?: number;
  };
  ArrayStruct: components["schemas"]["Struct"];
  AttendeeProductCollectionLastSeenResponse: {
    collection?: {
      lastSeen?: string[];
    };
  };
  AttendeeProductCollectionResponse: {
    collection?:
      | {
          liked?: string[];
        }
      | {
          disliked?: string[];
        };
  };
  AttendeeRespondInvitationResponse: {
    /**
     * The invitation status that client responded to
     * @enum {string}
     */
    answer?: "accepted" | "maybe" | "declined";
    appointment?: {
      /**
       * Format: date-time
       * The time the client can access the appointment
       */
      accessibleFrom?: string;
      /**
       * Format: date-time
       * The time the appointment will be closed, the client can not access
       */
      accessibleTo?: string;
      /** The appointment id */
      id?: string;
      /** The appointment status */
      status?: ("started" | "ended") | null;
    };
  };
  B2bBusinessPartner: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  B2bComponentsApprovalRule: {
    affectedRole?: components["schemas"]["B2bComponentsRole"];
    affectedRoleId?: string;
    /** Format: date-time */
    createdAt: string;
    id?: string;
    reviewerRole?: components["schemas"]["B2bComponentsRole"];
    reviewerRoleId?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  B2bComponentsPendingOrder: {
    addresses?: components["schemas"]["B2bComponentsPendingOrderAddress"][];
    /** Format: float */
    amountNet?: number;
    /** Format: float */
    amountTotal?: number;
    approvalRule?: components["schemas"]["B2bComponentsApprovalRule"];
    approvalRuleId: string;
    billingAddress?: components["schemas"]["B2bComponentsPendingOrderAddress"];
    billingAddressId: string;
    country?: components["schemas"]["Country"];
    countryId: string;
    /** Format: date-time */
    createdAt: string;
    currency?: components["schemas"]["Currency"];
    currencyId: string;
    customer?: components["schemas"]["Customer"];
    customerId: string;
    decidedBy?: components["schemas"]["B2bEmployee"];
    decidedById?: string;
    employee?: components["schemas"]["B2bEmployee"];
    employeeId: string;
    id?: string;
    language?: components["schemas"]["Language"];
    languageId: string;
    /** Format: float */
    originalPrice?: number;
    paymentMethod?: components["schemas"]["PaymentMethod"];
    paymentMethodId: string;
    price?: {
      calculatedTaxes?: GenericRecord;
      /** Format: float */
      netPrice: number;
      /** Format: float */
      positionPrice: number;
      /** Format: float */
      rawTotal: number;
      taxRules?: GenericRecord;
      taxStatus: string;
      /** Format: float */
      totalPrice: number;
    };
    reason?: string;
    salesChannelId: string;
    shippingMethod?: components["schemas"]["ShippingMethod"];
    shippingMethodId: string;
    stateId: string;
    stateMachineState?: components["schemas"]["StateMachineState"];
    taxStatus?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  B2bComponentsPendingOrderAddress: {
    additionalAddressLine1?: string;
    additionalAddressLine2?: string;
    city: string;
    company?: string;
    country?: components["schemas"]["Country"];
    countryId: string;
    countryState?: components["schemas"]["CountryState"];
    countryStateId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    department?: string;
    firstName: string;
    id?: string;
    lastName: string;
    pendingOrder?: components["schemas"]["B2bComponentsPendingOrder"];
    phoneNumber?: string;
    salutation?: components["schemas"]["Salutation"];
    street: string;
    title?: string;
    /** Format: date-time */
    updatedAt?: string;
    vatId?: string;
    zipcode?: string;
  };
  B2bComponentsRole: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    permissions?: GenericRecord[];
    /** Format: date-time */
    updatedAt?: string;
  };
  B2bEmployee: {
    active?: boolean;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    email: string;
    firstName: string;
    id?: string;
    language?: components["schemas"]["Language"];
    languageId: string;
    lastName: string;
    role?: components["schemas"]["B2bComponentsRole"];
    /** Format: date-time */
    updatedAt?: string;
  };
  B2bOrderEmployee: {
    /** Format: date-time */
    createdAt: string;
    firstName: string;
    id?: string;
    lastName: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  B2bPermission: {
    /** Format: date-time */
    createdAt: string;
    dependencies?: string[];
    group: string;
    id?: string;
    name: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CalculatedPrice: {
    apiAlias: "calculated_price";
    unitPrice: number;
    quantity: number;
    totalPrice: number;
    calculatedTaxes: GenericRecord[];
    taxRules: GenericRecord[];
    referencePrice?: {
      price: number;
      referenceUnit: number;
      unitName: string;
    };
    hasRange?: boolean;
    listPrice: {
      price: number;
      discount: number;
      percentage: number;
      apiAlias: string;
    } | null;
    regulationPrice: null | {
      price: number;
    };
    variantId?: string;
  };
  Cart: components["schemas"]["ArrayStruct"] & {
    /** An affiliate tracking code */
    affiliateCode?: string;
    /** A campaign tracking code */
    campaignCode?: string;
    /** A comment that can be added to the cart. */
    customerComment?: string;
    deliveries?: components["schemas"]["OrderDelivery"][]; // TODO: [OpenAPI][Cart] - `deliveries` is missing in schema
    /** A list of all cart errors, such as insufficient stocks, invalid addresses or vouchers. */
    errors: // TODO: [OpenAPI][Cart] - define errors properly, `key` and `message` should be required fields. `Errors` should be required field as well. Problem is that sometimes it's an array, and sometimes map object
    | []
      // | {
      //     key: string;
      //     code: string;
      //     details: string;
      //     level?: string;
      //     message: string;
      //   }[]
      | Record<
          string,
          {
            code: number;
            key: string;
            level: number;
            message: string;
            messageKey: string;
          }
        >;
    /** All items within the cart */
    lineItems?: components["schemas"]["LineItem"][];
    modified?: boolean;
    /** Name of the cart - for example `guest-cart` */
    name?: string;
    price?: {
      /**
       * Format: float
       * Net price of the cart
       */
      netPrice?: number;
      /**
       * Format: float
       * Price for all line items in the cart
       */
      positionPrice?: number;
      /** Tax calculation for the cart. One of `gross`, `net` or `tax-free` */
      taxStatus?: string;
      /**
       * Format: float
       * Total price of the cart, including shipping costs, discounts and taxes
       */
      totalPrice?: number;
    };
    /** Context token identifying the cart and the user session */
    token?: string;
    /** A list of all payment transactions associated with the current cart. */
    transactions?: {
      paymentMethodId?: string;
    }[];
  };
  CartItems: components["schemas"]["ArrayStruct"] & {
    items?: components["schemas"]["LineItem"][];
  };
  Category: {
    apiAlias: "category"; // TODO: [OpenAPI][Category] - define apiAlias properly
    active?: boolean;
    afterCategoryId?: string;
    afterCategoryVersionId?: string;
    breadcrumb: string[]; // TODO: [OpenAPI][Category] - define breadcrumb properly
    /** Format: int64 */
    childCount: number; // TODO: [OpenAPI][Category] childCount field should be defined as required
    children: components["schemas"]["Category"][]; // TODO: [OpenAPI][Category] - define children as required array
    cmsPage?: components["schemas"]["CmsPage"];
    cmsPageId?: string;
    /** Runtime field, cannot be used as part of the criteria. */
    cmsPageIdSwitched?: boolean;
    cmsPageVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    customEntityTypeId?: string;
    customFields?: GenericRecord;
    description?: string;
    displayNestedProducts: boolean;
    externalLink?: string;
    id: string; // TODO: [OpenAPI][Category] - define id as required field
    internalLink?: string;
    keywords?: string;
    /** Format: int64 */
    level?: number;
    linkNewTab?: boolean;
    linkType?: string;
    media?: components["schemas"]["Media"];
    mediaId?: string;
    metaDescription?: string;
    metaTitle?: string;
    name: string;
    parent?: components["schemas"]["Category"];
    parentId?: string;
    parentVersionId?: string;
    path?: string;
    productAssignmentType: string;
    seoUrls?: components["schemas"]["SeoUrl"][];
    tags?: components["schemas"]["Tag"][];
    translated?: {
      afterCategoryId?: string;
      afterCategoryVersionId?: string;
      breadcrumb?: string[]; // TODO: [OpenAPI][Category] - define breadcrumb properly
      cmsPageId?: string;
      cmsPageVersionId?: string;
      customEntityTypeId?: string;
      description?: string;
      externalLink?: string;
      internalLink?: string;
      keywords?: string;
      linkType?: string;
      mediaId?: string;
      metaDescription?: string;
      metaTitle?: string;
      name?: string;
      parentId?: string;
      parentVersionId?: string;
      path?: string;
      productAssignmentType?: string;
      type?: string;
      versionId?: string;
    };
    type: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
    visible?: boolean;
    /**
     * Format: int64
     * Runtime field, cannot be used as part of the criteria.
     */
    visibleChildCount?: number;
  };
  CategoryJsonApi: components["schemas"]["resource"] & {
    active?: boolean;
    afterCategoryId?: string;
    afterCategoryVersionId?: string;
    breadcrumb?: readonly GenericRecord[];
    /** Format: int64 */
    childCount?: number;
    cmsPageId?: string;
    /** Runtime field, cannot be used as part of the criteria. */
    cmsPageIdSwitched?: boolean;
    cmsPageVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    customEntityTypeId?: string;
    customFields?: GenericRecord;
    description?: string;
    displayNestedProducts: boolean;
    externalLink?: string;
    id?: string;
    internalLink?: string;
    keywords?: string;
    /** Format: int64 */
    level?: number;
    linkNewTab?: boolean;
    linkType?: string;
    mediaId?: string;
    metaDescription?: string;
    metaTitle?: string;
    name: string;
    parentId?: string;
    parentVersionId?: string;
    path?: string;
    productAssignmentType: string;
    relationships?: {
      children?: {
        data?: {
          /** @example 268184c12df027f536154d099d497b31 */
          id?: string;
          /** @example category */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /category/3adbdb3ac060038aa0e6e6c138ef9873/children
           */
          related?: string;
        };
      };
      cmsPage?: {
        data?: {
          /** @example 7b1460918b1abb93311108f3dc021c9b */
          id?: string;
          /** @example cms_page */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /category/3adbdb3ac060038aa0e6e6c138ef9873/cmsPage
           */
          related?: string;
        };
      };
      media?: {
        data?: {
          /** @example 62933a2951ef01f4eafd9bdf4d3cd2f0 */
          id?: string;
          /** @example media */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /category/3adbdb3ac060038aa0e6e6c138ef9873/media
           */
          related?: string;
        };
      };
      parent?: {
        data?: {
          /** @example d0e45878043844ffc41aac437e86b602 */
          id?: string;
          /** @example category */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /category/3adbdb3ac060038aa0e6e6c138ef9873/parent
           */
          related?: string;
        };
      };
      seoUrls?: {
        data?: {
          /** @example 5321b5a71127b8b98cdd4b068ad56c4c */
          id?: string;
          /** @example seo_url */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /category/3adbdb3ac060038aa0e6e6c138ef9873/seoUrls
           */
          related?: string;
        };
      };
      tags?: {
        data?: {
          /** @example d57ac45256849d9b13e2422d91580fb9 */
          id?: string;
          /** @example tag */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /category/3adbdb3ac060038aa0e6e6c138ef9873/tags
           */
          related?: string;
        };
      };
    };
    translated?: {
      afterCategoryId?: string;
      afterCategoryVersionId?: string;
      cmsPageId?: string;
      cmsPageVersionId?: string;
      customEntityTypeId?: string;
      description?: string;
      externalLink?: string;
      internalLink?: string;
      keywords?: string;
      linkType?: string;
      mediaId?: string;
      metaDescription?: string;
      metaTitle?: string;
      name?: string;
      parentId?: string;
      parentVersionId?: string;
      path?: string;
      productAssignmentType?: string;
      type?: string;
      versionId?: string;
    };
    type: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
    visible?: boolean;
    /**
     * Format: int64
     * Runtime field, cannot be used as part of the criteria.
     */
    visibleChildCount?: number;
  };
  ClientPresentationStateResponse: {
    stateForAll?: components["schemas"]["StateForAll"];
    stateForClients?: components["schemas"]["StateForClients"];
    stateForMe?: components["schemas"]["StateForMe"];
  };
  CmsBlock: {
    apiAlias: "cms_block"; // TODO: [OpenAPI][CmsBlock] - define apiAlias properly
    backgroundColor?: string;
    backgroundMedia?: components["schemas"]["Media"];
    backgroundMediaId?: string;
    backgroundMediaMode?: string;
    cmsSectionVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    cssClass?: string;
    customFields?: GenericRecord;
    extensions?: {
      swagCmsExtensionsBlockRule?: {
        data?: {
          /** @example c426e9e5d9031b933f89682d49bb02b1 */
          id?: string;
          /** @example swag_cms_extensions_block_rule */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /cms-block/9c16ffe823ddccc710bfb336c2ef30b6/swagCmsExtensionsBlockRule
           */
          related?: string;
        };
      };
      swagCmsExtensionsQuickview?: {
        data?: {
          /** @example fae098a43df8714eda5249176ffcf26c */
          id?: string;
          /** @example swag_cms_extensions_quickview */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /cms-block/9c16ffe823ddccc710bfb336c2ef30b6/swagCmsExtensionsQuickview
           */
          related?: string;
        };
      };
    };
    id?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    name?: string;
    /** Format: int64 */
    position: number;
    sectionId: string;
    sectionPosition?: string;
    slots: components["schemas"]["CmsSlot"][]; // TODO: [OpenAPI][CmsBlock] - define slots as required array
    type: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
    visibility?: {
      desktop?: boolean;
      mobile?: boolean;
      tablet?: boolean;
    };
  };
  CmsPage: {
    config?: {
      backgroundColor?: string;
    };
    /** Format: date-time */
    createdAt: string;
    cssClass?: string;
    customFields?: GenericRecord;
    entity?: string;
    extensions?: {
      swagCmsExtensionsScrollNavigationPageSettings?: {
        data?: {
          /** @example 8b835206d09f3dec1b733f6a78c7ba33 */
          id?: string;
          /** @example swag_cms_extensions_scroll_navigation_page_settings */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /cms-page/64bf107168bcd03626208c1764ce6890/swagCmsExtensionsScrollNavigationPageSettings
           */
          related?: string;
        };
      };
    };
    id?: string;
    landingPages?: components["schemas"]["LandingPage"][];
    name?: string;
    previewMedia?: components["schemas"]["Media"];
    previewMediaId?: string;
    sections?: components["schemas"]["CmsSection"][];
    translated?: {
      cssClass?: string;
      entity?: string;
      name?: string;
      previewMediaId?: string;
      type?: string;
      versionId?: string;
    };
    type: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  CmsPageActivity: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CmsPageDraft: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CmsSection: {
    apiAlias: "cms_section"; // TODO: [OpenAPI][CmsSection] - define apiAlias properly
    backgroundColor?: string;
    backgroundMedia?: components["schemas"]["Media"];
    backgroundMediaId?: string;
    backgroundMediaMode?: string;
    blocks: components["schemas"]["CmsBlock"][]; // TODO: [OpenAPI][CmsSection] - define blocks as required array
    cmsPageVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    cssClass?: string;
    customFields?: GenericRecord;
    extensions?: {
      swagCmsExtensionsScrollNavigation?: {
        data?: {
          /** @example 425b8d6ec722d74191c6d39370af19dc */
          id?: string;
          /** @example swag_cms_extensions_scroll_navigation */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /cms-section/d08def49fa8924d6f4a32bdb448d5fba/swagCmsExtensionsScrollNavigation
           */
          related?: string;
        };
      };
    };
    id?: string;
    mobileBehavior?: string;
    name?: string;
    page?: components["schemas"]["CmsPage"];
    pageId: string;
    /** Format: int64 */
    position: number;
    sizingMode?: string;
    type: string;
    /** Format: date-time */
    updatedAt?: string;
    visibility?: {
      desktop?: boolean;
      mobile?: boolean;
      tablet?: boolean;
    };
  };
  CmsSlot: {
    block?: components["schemas"]["CmsBlock"];
    blockId: string;
    cmsBlockVersionId?: string;
    config?: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    data?: GenericRecord;
    fieldConfig?: GenericRecord;
    id?: string;
    locked?: boolean;
    slot: string;
    translated?: {
      blockId?: string;
      cmsBlockVersionId?: string;
      slot?: string;
      type?: string;
      versionId?: string;
    };
    type: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  Country: {
    active?: boolean;
    addressFormat: GenericRecord;
    advancedPostalCodePattern?: string;
    checkAdvancedPostalCodePattern?: boolean;
    checkPostalCodePattern?: boolean;
    checkVatIdPattern?: boolean;
    companyTax?: {
      /** Format: float */
      amount: number;
      currencyId: string;
      enabled: boolean;
    };
    /** Format: date-time */
    createdAt: string;
    customerTax?: {
      /** Format: float */
      amount: number;
      currencyId: string;
      enabled: boolean;
    };
    customFields?: GenericRecord;
    defaultPostalCodePattern?: string;
    displayStateInRegistration?: boolean;
    forceStateInRegistration?: boolean;
    id?: string;
    iso?: string;
    iso3?: string;
    name: string;
    /** Format: int64 */
    position?: number;
    postalCodeRequired?: boolean;
    shippingAvailable?: boolean;
    states?: components["schemas"]["CountryState"][];
    translated?: {
      advancedPostalCodePattern?: string;
      defaultPostalCodePattern?: string;
      iso?: string;
      iso3?: string;
      name?: string;
      vatIdPattern?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    vatIdPattern?: string;
    vatIdRequired?: boolean;
  };
  CountryJsonApi: components["schemas"]["resource"] & {
    active?: boolean;
    addressFormat: GenericRecord;
    advancedPostalCodePattern?: string;
    checkAdvancedPostalCodePattern?: boolean;
    checkPostalCodePattern?: boolean;
    checkVatIdPattern?: boolean;
    companyTax?: {
      /** Format: float */
      amount: number;
      currencyId: string;
      enabled: boolean;
    };
    /** Format: date-time */
    createdAt: string;
    customerTax?: {
      /** Format: float */
      amount: number;
      currencyId: string;
      enabled: boolean;
    };
    customFields?: GenericRecord;
    defaultPostalCodePattern?: string;
    displayStateInRegistration?: boolean;
    forceStateInRegistration?: boolean;
    id?: string;
    iso?: string;
    iso3?: string;
    name: string;
    /** Format: int64 */
    position?: number;
    postalCodeRequired?: boolean;
    relationships?: {
      states?: {
        data?: {
          /** @example 34d955a0df5f7af9c9b4e4dccb3c3564 */
          id?: string;
          /** @example country_state */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /country/59716c97497eb9694541f7c3d37b1a4d/states
           */
          related?: string;
        };
      };
    };
    shippingAvailable?: boolean;
    translated?: {
      advancedPostalCodePattern?: string;
      defaultPostalCodePattern?: string;
      iso?: string;
      iso3?: string;
      name?: string;
      vatIdPattern?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    vatIdPattern?: string;
    vatIdRequired?: boolean;
  };
  CountryState: {
    active?: boolean;
    countryId: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    /** Format: int64 */
    position?: number;
    shortCode: string;
    translated?: {
      countryId?: string;
      name?: string;
      shortCode?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  CountryStateJsonApi: components["schemas"]["resource"] & {
    active?: boolean;
    countryId: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    /** Format: int64 */
    position?: number;
    shortCode: string;
    translated?: {
      countryId?: string;
      name?: string;
      shortCode?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  CreateInteractionRequestBody: {
    /**
     * The time in seconds how long the interaction should be stored in the database
     * @default -1
     */
    lifeTimeInSeconds?: number;
    name: components["schemas"]["InteractionName"];
    payload?: GenericRecord;
    /**
     * The time when the interaction was triggered
     * @default now
     */
    triggeredAt?: string;
  };
  Criteria: {
    /** Used to perform aggregations on the search result. For more information, see [Search Queries > Aggregations](https://shopware.stoplight.io/docs/store-api/docs/concepts/search-queries.md#aggregations) */
    aggregations?: {
      /** The field you want to aggregate over. */
      field: string;
      /** Give your aggregation an identifier, so you can find it easier */
      name: string;
      /** The type of aggregation */
      type: string;
      /** Used to perform aggregations on the search result. For more information, see [Search Queries > Aggregations](https://shopware.stoplight.io/docs/store-api/docs/concepts/search-queries.md#aggregations) */
      aggregation?: {
        /** The field you want to aggregate over. */
        field: string;
        /** Give your aggregation an identifier, so you can find it easier */
        name: string;
        /** The type of aggregation */
        type: string;
      };
    }[];
    includes?: GenericRecord; // TODO: [OpenAPI][Criteria] - define includes properly
    /** Used to fetch associations which are not fetched by default. */
    associations?: GenericRecord;
    /** Fields which should be returned in the search result. */
    fields?: string[];
    /** List of filters to restrict the search result. For more information, see [Search Queries > Filter](https://shopware.stoplight.io/docs/store-api/docs/concepts/search-queries.md#filter) */
    filter?: {
      // TODO: [OpenAPI][Criteria] - there can be different filters, for example `equalsAny` can have array as value
      field: string;
      type: string;
      value?: string | string[] | boolean;
      parameters?: {
        gte?: string;
        lte?: string;
      };
    }[];
    /** Perform groupings over certain fields */
    grouping?: string[];
    /** Number of items per result page */
    limit?: number;
    /** Search result page */
    page?: number;
    /** Filters that applied without affecting aggregations. For more information, see [Search Queries > Post Filter](https://shopware.stoplight.io/docs/store-api/docs/concepts/search-queries.md#post-filter) */
    "post-filter"?: {
      field: string;
      type: string;
      value: string;
    }[];
    /** Sorting in the search result. */
    sort?: {
      field: string;
      naturalSorting?: boolean;
      order?: string;
    }[];
    /**
     * Whether the total for the total number of hits should be determined for the search query. none = disabled total count, exact = calculate exact total amount (slow), next-pages = calculate only for next page (fast)
     * @default none
     * @enum {string}
     */
    "total-count-mode"?: "none" | "exact" | "next-pages";
  };
  CrossSellingElementCollection: {
    // TODO: [OpenAPI][CrossSellingElementCollection] - define CrossSellingElement instead of collection
    crossSelling: {
      // TODO: [OpenAPI][CrossSellingElementCollection] - define crossSelling as required
      active?: boolean;
      /** Format: int32 */
      limit?: number;
      name?: string;
      /** Format: int32 */
      position?: number;
      productId?: string;
      productStreamId?: string;
      sortBy?: string;
      sortDirection?: string;
      type?: string;
    };
    products: components["schemas"]["Product"][]; // TODO: [OpenAPI][CrossSellingElementCollection] - define products array as required
    /** Format: int32 */
    total?: number;
  }[];
  Currency: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    /** Format: float */
    factor: number;
    id?: string;
    isoCode: string;
    /** Runtime field, cannot be used as part of the criteria. */
    isSystemDefault?: boolean;
    itemRounding: {
      /** Format: int64 */
      decimals?: number;
      /** Format: float */
      interval?: number;
      roundForNet?: boolean;
    };
    name: string;
    /** Format: int64 */
    position?: number;
    shortName: string;
    symbol: string;
    /** Format: float */
    taxFreeFrom?: number;
    totalRounding: {
      /** Format: int64 */
      decimals?: number;
      /** Format: float */
      interval?: number;
      roundForNet?: boolean;
    };
    translated?: {
      isoCode?: string;
      name?: string;
      shortName?: string;
      symbol?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  CurrencyCountryRounding: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CurrencyJsonApi: components["schemas"]["resource"] & {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    /** Format: float */
    factor: number;
    id?: string;
    isoCode: string;
    /** Runtime field, cannot be used as part of the criteria. */
    isSystemDefault?: boolean;
    itemRounding: {
      /** Format: int64 */
      decimals?: number;
      /** Format: float */
      interval?: number;
      roundForNet?: boolean;
    };
    name: string;
    /** Format: int64 */
    position?: number;
    shortName: string;
    symbol: string;
    /** Format: float */
    taxFreeFrom?: number;
    totalRounding: {
      /** Format: int64 */
      decimals?: number;
      /** Format: float */
      interval?: number;
      roundForNet?: boolean;
    };
    translated?: {
      isoCode?: string;
      name?: string;
      shortName?: string;
      symbol?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  CustomEntity: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CustomField: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CustomFieldSet: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CustomFieldSetRelation: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CustomPrice: {
    /** Format: date-time */
    createdAt: string;
    customer?: components["schemas"]["Customer"];
    customerGroup?: components["schemas"]["CustomerGroup"];
    customerGroupId?: string;
    customerId?: string;
    id?: string;
    price: GenericRecord;
    product?: components["schemas"]["Product"];
    productId: string;
    productVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Customer: {
    accountType: string;
    active?: boolean;
    activeBillingAddress: components["schemas"]["CustomerAddress"]; // TODO: [OpenAPI][Customer] - define activeBillingAddress as required
    activeShippingAddress: components["schemas"]["CustomerAddress"]; // TODO: [OpenAPI][Customer] - define activeShippingAddress as required
    addresses?: components["schemas"]["CustomerAddress"][];
    affiliateCode?: string;
    birthday?: string;
    campaignCode?: string;
    company?: string;
    /** Format: date-time */
    createdAt: string;
    createdById?: string;
    customerNumber: string;
    customFields?: GenericRecord;
    defaultBillingAddress?: components["schemas"]["CustomerAddress"];
    defaultBillingAddressId: string;
    defaultPaymentMethod?: components["schemas"]["PaymentMethod"];
    defaultPaymentMethodId: string;
    defaultShippingAddress?: components["schemas"]["CustomerAddress"];
    defaultShippingAddressId: string;
    /** Format: date-time */
    doubleOptInConfirmDate?: string;
    /** Format: date-time */
    doubleOptInEmailSentDate?: string;
    doubleOptInRegistration?: boolean;
    email: string;
    extensions?: {
      specificFeatures?: {
        data?: {
          /** @example 5cfb6fcb7542e25892e1a35cd6a06c54 */
          id?: string;
          /** @example customer_specific_features */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /customer/ce26601dac0dea138b7295f02b7620a7/specificFeatures
           */
          related?: string;
        };
      };
    };
    /** Format: date-time */
    firstLogin?: string;
    firstName: string;
    group?: components["schemas"]["CustomerGroup"];
    groupId: string;
    guest?: boolean;
    hash?: string;
    id?: string;
    language?: components["schemas"]["Language"];
    languageId: string;
    /** Format: date-time */
    lastLogin?: string;
    lastName: string;
    /** Format: date-time */
    lastOrderDate?: string;
    lastPaymentMethod?: components["schemas"]["PaymentMethod"];
    lastPaymentMethodId?: string;
    /** Format: int64 */
    orderCount?: number;
    /** Format: float */
    orderTotalAmount?: number;
    /** Format: int64 */
    reviewCount?: number;
    salesChannelId: string;
    salutation?: components["schemas"]["Salutation"];
    salutationId?: string;
    tagIds?: readonly string[];
    tags?: components["schemas"]["Tag"][];
    title?: string;
    /** Format: date-time */
    updatedAt?: string;
    updatedById?: string;
    vatIds?: string[];
  };
  CustomerAddress: {
    additionalAddressLine1?: string;
    additionalAddressLine2?: string;
    city: string;
    company?: string;
    country?: components["schemas"]["Country"];
    countryId: string;
    countryState?: components["schemas"]["CountryState"];
    countryStateId?: string;
    /** Format: date-time */
    createdAt: string;
    customerId: string;
    customFields?: GenericRecord;
    department?: string;
    firstName: string;
    id: string; // TODO: [OpenAPI][CustomerAddress] - make `id` required
    lastName: string;
    phoneNumber?: string;
    salutation?: components["schemas"]["Salutation"];
    salutationId?: string;
    street: string;
    title?: string;
    /** Format: date-time */
    updatedAt?: string;
    zipcode?: string;
  };
  CustomerGroup: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    displayGross?: boolean;
    id?: string;
    name: string;
    registrationActive?: boolean;
    registrationIntroduction?: string;
    registrationOnlyCompanyRegistration?: boolean;
    registrationSeoMetaDescription?: string;
    registrationTitle?: string;
    // TODO: [OpenAPI][CustomerGroup] - make `translated` required
    translated: {
      name?: string;
      registrationIntroduction?: string;
      registrationSeoMetaDescription?: string;
      registrationTitle?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  CustomerRecovery: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CustomerSpecificFeatures: {
    /** Format: date-time */
    createdAt: string;
    customer?: components["schemas"]["Customer"];
    customerId: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CustomerTag: {
    customerId: string;
    id?: string;
    tag?: components["schemas"]["Tag"];
    tagId: string;
  };
  CustomerWishlist: {
    /** Format: date-time */
    createdAt: string;
    customerId: string;
    customFields?: GenericRecord;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  CustomerWishlistProduct: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    productId: string;
    productVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  DeliveryTime: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    /** Format: int64 */
    max: number;
    /** Format: int64 */
    min: number;
    name: string;
    translated?: {
      name?: string;
      unit?: string;
    };
    unit: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Document: {
    // TODO: [OpenAPI][Document] - define config properly
    config: {
      name: string;
      title: string;
    };
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    deepLinkCode: string;
    dependentDocuments?: components["schemas"]["Document"][];
    documentMediaFile?: components["schemas"]["Media"];
    documentMediaFileId?: string;
    documentNumber?: string;
    documentType?: components["schemas"]["DocumentType"];
    documentTypeId: string;
    fileType: string;
    id: string; // TODO: [OpenAPI][Document] - make `id` required
    order?: components["schemas"]["Order"];
    orderId: string;
    orderVersionId?: string;
    referencedDocument?: components["schemas"]["Document"];
    referencedDocumentId?: string;
    sent?: boolean;
    static?: boolean;
    /** Format: date-time */
    updatedAt?: string;
  };
  DocumentBaseConfig: {
    config?: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    documentNumber?: string;
    documentTypeId: string;
    filenamePrefix?: string;
    filenameSuffix?: string;
    global: boolean;
    id?: string;
    logo?: components["schemas"]["Media"];
    logoId?: string;
    name: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  DocumentBaseConfigSalesChannel: {
    /** Format: date-time */
    createdAt: string;
    documentBaseConfigId: string;
    documentTypeId?: string;
    id?: string;
    salesChannelId?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  DocumentType: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    technicalName: string;
    translated?: {
      name?: string;
      technicalName?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  DynamicPageOpenedPayload: components["schemas"]["AbstractDynamicPageOpenedPayload"];
  DynamicProductListingPageOpenedPayload: WithRequired<
    {
      /** Current page position in the pagination */
      page: number;
    } & components["schemas"]["AbstractDynamicPageOpenedPayload"],
    "page"
  >;
  DynamicProductPageOpenedPayload: WithRequired<
    {
      /** the id from the product which is shown on the dynamic page */
      productId: string;
    } & components["schemas"]["AbstractDynamicPageOpenedPayload"],
    "productId"
  >;
  EmptyPayload: Record<string, never>;
  EntitySearchResult: components["schemas"]["ArrayStruct"] & {
    /** Contains aggregated data. A simple example is the determination of the average price from a product search query. */
    aggregations?: GenericRecord[];
    entity?: string;
    /** The actual limit. This is used for pagination and goes together with the page. */
    limit?: number;
    /** The actual page. This can be used for pagination. */
    page?: number;
    /** The total number of found entities */
    total?: number;
  };
  FindProductVariantRouteResponse: {
    foundCombination?: {
      options?: string[];
      variantId?: string;
    };
  };
  Flow: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  FlowSequence: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  FlowTemplate: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  GuideHoveredPayload: {
    $hoveredElementId?: string | null;
  };
  GuidedShoppingAppointment: {
    /** Format: date-time */
    accessibleFrom?: string;
    /** Format: date-time */
    accessibleTo?: string;
    active?: boolean;
    attendeeRuleIds?: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    createdById: string;
    customFields?: GenericRecord;
    default?: boolean;
    /** Format: date-time */
    endedAt?: string;
    guidedShoppingPresentationVersionId?: string;
    guideUserId?: string;
    id?: string;
    isPreview?: boolean;
    name: string;
    presentationId?: string;
    salesChannelDomainId: string;
    /** Format: date-time */
    startedAt?: string;
    /** Format: date-time */
    updatedAt?: string;
    updatedById?: string;
    videoAudioSettings?: string;
    videoChat?: components["schemas"]["GuidedShoppingAppointmentVideoChat"];
  };
  GuidedShoppingAppointmentAttendee: {
    /** Format: date-time */
    attendeeSubmittedAt?: string;
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    joinedAt?: string;
    /** Format: date-time */
    lastActive?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  GuidedShoppingAppointmentVideoChat: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name?: string;
    startAsBroadcast?: boolean;
    /** Format: date-time */
    updatedAt?: string;
    url?: string;
  };
  GuidedShoppingAttendeeProductCollection: {
    attendeeId: string;
    /** Format: date-time */
    createdAt: string;
    id?: string;
    productId: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  GuidedShoppingInteraction: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  GuidedShoppingPresentation: {
    active?: boolean;
    appointments?: components["schemas"]["GuidedShoppingAppointment"][];
    cmsPages?: components["schemas"]["GuidedShoppingPresentationCmsPage"][];
    /** Format: date-time */
    createdAt: string;
    createdById: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    parent?: components["schemas"]["GuidedShoppingPresentation"];
    parentId?: string;
    parentVersionId?: string;
    translated?: {
      createdById?: string;
      name?: string;
      parentId?: string;
      parentVersionId?: string;
      updatedById?: string;
      versionId?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    updatedById?: string;
    versionId?: string;
  };
  GuidedShoppingPresentationCmsPage: {
    cmsPage?: components["schemas"]["CmsPage"];
    cmsPageId: string;
    cmsPageVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    guidedShoppingPresentationVersionId?: string;
    id?: string;
    isInstantListing?: boolean;
    pickedProductIds?: GenericRecord;
    /** Format: int64 */
    position?: number;
    presentationId: string;
    productId?: string;
    productStreamId?: string;
    productVersionId?: string;
    title?: string;
    translated?: {
      cmsPageId?: string;
      cmsPageVersionId?: string;
      guidedShoppingPresentationVersionId?: string;
      presentationId?: string;
      productId?: string;
      productStreamId?: string;
      productVersionId?: string;
      title?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  ImportExportFile: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ImportExportLog: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ImportExportProfile: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  Integration: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  InteractionName:
    | "product.viewed"
    | "dynamicPage.opened"
    | "dynamicProductPage.opened"
    | "dynamicPage.closed"
    | "page.viewed"
    | "attendee.product.collection.liked"
    | "attendee.product.collection.disliked"
    | "attendee.product.collection.removed"
    | "remote.checkout.accepted"
    | "remote.checkout.declined"
    | "keep.alive"
    | "quickview.opened"
    | "quickview.closed"
    | "dynamicProductListingPage.opened"
    | "dynamicProductListingPage.loadedMore"
    | "remote.checkout.denied"
    | "guide.hovered"
    | "broadcastMode.toggled";
  JoinAppointmentResponse: {
    /** The created Id for the attendee */
    attendeeId?: string;
    /** The appointment id */
    id?: string;
    /** To see if it's a preview appointment */
    isPreview?: boolean;
    /** The JWT mercure token to subscribe for updates */
    JWTMercurePublisherToken?: string | null;
    /** The JWT mercure token to publish updates */
    JWTMercureSubscriberToken?: string | null;
    /** The mercure hub url to connect for subscribing and updating */
    mercureHubPublicUrl?: string | null;
    /** The topic to which the attendee/guide can send updates */
    mercurePublisherTopic?: string | null;
    /** The topics to which the attendee/guide can subscribe for */
    mercureSubscriberTopics?: string[];
    /** The new context token will be used in the header (sw-context-token) for calling the other routes */
    newContextToken?: string;
    /**
     * The type of the appointment
     * @enum {string}
     */
    presentationGuideMode?: "self" | "guided";
    /** The id of the current sales channel */
    salesChannelId?: string;
  };
  LandingPage: {
    apiAlias: "landing_page"; // TODO: [OpenAPI][LandingPage] - add `apiAlias` definition to schema
    active?: boolean;
    cmsPage?: components["schemas"]["CmsPage"];
    cmsPageId?: string;
    cmsPageVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    keywords?: string;
    metaDescription?: string;
    metaTitle?: string;
    name: string;
    seoUrls?: components["schemas"]["SeoUrl"][];
    slotConfig?: GenericRecord;
    translated?: {
      cmsPageId?: string;
      cmsPageVersionId?: string;
      keywords?: string;
      metaDescription?: string;
      metaTitle?: string;
      name?: string;
      url?: string;
      versionId?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    url: string;
    versionId?: string;
  };
  LandingPageJsonApi: components["schemas"]["resource"] & {
    active?: boolean;
    cmsPageId?: string;
    cmsPageVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    keywords?: string;
    metaDescription?: string;
    metaTitle?: string;
    name: string;
    relationships?: {
      cmsPage?: {
        data?: {
          /** @example 7b1460918b1abb93311108f3dc021c9b */
          id?: string;
          /** @example cms_page */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /landing-page/815c27537bec3b60c50a2ae4d2ce875d/cmsPage
           */
          related?: string;
        };
      };
      seoUrls?: {
        data?: {
          /** @example 5321b5a71127b8b98cdd4b068ad56c4c */
          id?: string;
          /** @example seo_url */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /landing-page/815c27537bec3b60c50a2ae4d2ce875d/seoUrls
           */
          related?: string;
        };
      };
    };
    slotConfig?: GenericRecord;
    translated?: {
      cmsPageId?: string;
      cmsPageVersionId?: string;
      keywords?: string;
      metaDescription?: string;
      metaTitle?: string;
      name?: string;
      url?: string;
      versionId?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    url: string;
    versionId?: string;
  };
  Language: {
    children?: components["schemas"]["Language"][];
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    locale?: components["schemas"]["Locale"];
    localeId: string;
    name: string;
    parent?: components["schemas"]["Language"];
    parentId?: string;
    translationCode?: components["schemas"]["Locale"];
    translationCodeId?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  LanguageJsonApi: components["schemas"]["resource"] & {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    localeId: string;
    name: string;
    parentId?: string;
    relationships?: {
      children?: {
        data?: {
          /** @example 268184c12df027f536154d099d497b31 */
          id?: string;
          /** @example language */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /language/4994a8ffeba4ac3140beb89e8d41f174/children
           */
          related?: string;
        };
      };
      locale?: {
        data?: {
          /** @example fb216d9e8791e63c8d12bdc420956839 */
          id?: string;
          /** @example locale */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /language/4994a8ffeba4ac3140beb89e8d41f174/locale
           */
          related?: string;
        };
      };
      parent?: {
        data?: {
          /** @example d0e45878043844ffc41aac437e86b602 */
          id?: string;
          /** @example language */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /language/4994a8ffeba4ac3140beb89e8d41f174/parent
           */
          related?: string;
        };
      };
      translationCode?: {
        data?: {
          /** @example 6ef2035242b8fcb7b61c3a41850e60b3 */
          id?: string;
          /** @example locale */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /language/4994a8ffeba4ac3140beb89e8d41f174/translationCode
           */
          related?: string;
        };
      };
    };
    translationCodeId?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  LineItem: {
    description?: string;
    good?: boolean;
    id: string; // TODO: [OpenAPI][LineItem] - make `id` required
    cover?: components["schemas"]["ProductMedia"]; // TODO: [OpenAPI][LineItem] - add `cover` definition to schema
    deliveryInformation: {
      // TODO: [OpenAPI][LineItem] - define `deliveryInformation` object and find out what's inside (`cart_delivery_information` entity)
      stock: number;
    };
    label?: string;
    modified?: boolean;
    /** Format: int32 */
    quantity: number; // TODO: [OpenAPI][LineItem] - make `quantity` required
    payload: {
      // TODO: [OpenAPI][LineItem] - add `payload` definition to schema (find out what's inside)
      options: Array<{
        group: string;
        option: string;
        translated: {
          [key: string]: string;
        };
      }>;
      name?: string;
    };
    price: {
      // TODO: [OpenAPI][LineItem] - define price object, also UNIFY price objects across responses
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    referencedId?: string;
    removable?: boolean;
    stackable?: boolean;
    states: string[]; // TODO: [OpenAPI][LineItem] - add definition of `states` array, also union type of possible states
    type: "product" | "promotion" | "custom" | "credit"; // TODO: [OpenAPI][LineItem] - define type as required and string union type -> see also #456
  };
  Locale: {
    code: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    territory: string;
    translated?: {
      code?: string;
      name?: string;
      territory?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  LogEntry: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  MailHeaderFooter: {
    /** Format: date-time */
    createdAt: string;
    description?: string;
    footerHtml?: string;
    footerPlain?: string;
    headerHtml?: string;
    headerPlain?: string;
    id?: string;
    name: string;
    systemDefault?: boolean;
    translated?: {
      description?: string;
      footerHtml?: string;
      footerPlain?: string;
      headerHtml?: string;
      headerPlain?: string;
      name?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  MailTemplate: {
    contentHtml: string;
    contentPlain: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    mailTemplateType?: components["schemas"]["MailTemplateType"];
    media?: components["schemas"]["MailTemplateMedia"][];
    senderName?: string;
    systemDefault?: boolean;
    translated?: {
      contentHtml?: string;
      contentPlain?: string;
      senderName?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  MailTemplateMedia: {
    id?: string;
    languageId: string;
    mailTemplateId: string;
    media?: components["schemas"]["Media"];
    mediaId: string;
    /** Format: int64 */
    position?: number;
  };
  MailTemplateType: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    technicalName: string;
    translated?: {
      name?: string;
      technicalName?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  MainCategory: {
    categoryId: string;
    categoryVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    id?: string;
    productId: string;
    productVersionId?: string;
    salesChannelId: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  MainCategoryJsonApi: components["schemas"]["resource"] & {
    categoryId: string;
    categoryVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    id?: string;
    productId: string;
    productVersionId?: string;
    salesChannelId: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Media: {
    alt?: string;
    config?: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    extensions?: {
      mediaAiTag?: {
        data?: {
          /** @example 3c88197809d464216a8c40a8db191b38 */
          id?: string;
          /** @example media_ai_tag */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /media/3b563524fdb17b4a86590470d40bef74/mediaAiTag
           */
          related?: string;
        };
      };
    };
    fileExtension: string; // TODO: [OpenAPI][Media] fileExtension field should be defined as required
    fileName: string; // TODO: [OpenAPI][Media] fileName field should be defined as required
    /** Format: int64 */
    fileSize?: number;
    /** Runtime field, cannot be used as part of the criteria. */
    hasFile?: boolean;
    id?: string;
    // TODO: [OpenAPI][Media] metaData field should be defined properly
    metaData?: {
      /** Format: int64 */
      height?: number;
      /** Format: int64 */
      width?: number;
    };
    mimeType?: string;
    path?: string;
    private?: boolean;
    thumbnails?: components["schemas"]["MediaThumbnail"][];
    title?: string;
    translated?: {
      alt?: string;
      fileExtension?: string;
      fileName?: string;
      mimeType?: string;
      path?: string;
      title?: string;
      uploadedAt?: string;
      url?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    /** Format: date-time */
    uploadedAt?: string;
    /** Runtime field, cannot be used as part of the criteria. */
    url: string; // TODO: [OpenAPI][Media] url field should be defined as required
  };
  MediaAiTag: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    media?: components["schemas"]["Media"];
    tags?: GenericRecord[];
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  MediaDefaultFolder: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  MediaFolder: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  MediaFolderConfiguration: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  MediaTag: {
    id?: string;
    media?: components["schemas"]["Media"];
    mediaId: string;
    tag?: components["schemas"]["Tag"];
    tagId: string;
  };
  MediaThumbnail: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    /** Format: int64 */
    height: number;
    id?: string;
    mediaId: string;
    path?: string;
    /** Format: date-time */
    updatedAt?: string;
    /** Runtime field, cannot be used as part of the criteria. */
    url: string; // TODO: [OpenAPI][MediaThumbnail] url should be defined as required
    /** Format: int64 */
    width: number;
  };
  MediaThumbnailSize: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    /** Format: int64 */
    height: number;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
    /** Format: int64 */
    width: number;
  };
  NaturalLanguageSearchTermResponse: {
    /** @enum {string} */
    apiAlias: "product_natural_language_search_term";
    reason: string;
    term: string;
  }[];
  NavigationRouteResponse: components["schemas"]["Category"][];
  NavigationType: // TODO: [OpenAPI][NavigationType] - add `NavigationType` definition to schema
  "main-navigation" | "footer-navigation" | "service-navigation";
  NewsletterRecipient: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  NewsletterRecipientJsonApi: components["schemas"]["resource"] & {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Notification: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  NumberRange: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  NumberRangeSalesChannel: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  NumberRangeState: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  NumberRangeType: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  Order: {
    addresses?: components["schemas"]["OrderAddress"][];
    affiliateCode?: string;
    /** Format: float */
    amountNet?: number;
    /** Format: float */
    amountTotal?: number;
    billingAddress?: components["schemas"]["OrderAddress"];
    billingAddressId: string;
    billingAddressVersionId?: string;
    campaignCode?: string;
    /** Format: date-time */
    createdAt: string;
    createdById?: string;
    currency?: components["schemas"]["Currency"];
    /** Format: float */
    currencyFactor: number;
    currencyId: string;
    customerComment?: string;
    customFields?: GenericRecord;
    deepLinkCode?: string;
    deliveries?: components["schemas"]["OrderDelivery"][];
    documents: components["schemas"]["Document"][]; // TODO: [OpenAPI][Order] - documents should be defined as required
    extensions?: {
      returns?: {
        data?: {
          /** @example 7fff84525c6516919851a9005373f87e */
          id?: string;
          /** @example order_return */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /order/a240fa27925a635b08dc28c9e4f9216d/returns
           */
          related?: string;
        };
      };
      subscription?: {
        data?: {
          /** @example b48b13e73a6ac2a86dc54425dd24d9ff */
          id?: string;
          /** @example subscription */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /order/a240fa27925a635b08dc28c9e4f9216d/subscription
           */
          related?: string;
        };
      };
    };
    id: string; // TODO: [OpenAPI][Order] id field should be defined as required
    language?: components["schemas"]["Language"];
    languageId: string;
    lineItems?: components["schemas"]["OrderLineItem"][];
    orderCustomer?: components["schemas"]["OrderCustomer"];
    orderDate: string; // TODO: [OpenAPI][Order] orderDate field should be defined as required
    /** Format: date-time */
    orderDateTime: string;
    orderNumber?: string;
    /** Format: float */
    positionPrice?: number;
    price?: {
      calculatedTaxes?: GenericRecord;
      /** Format: float */
      netPrice: number;
      /** Format: float */
      positionPrice: number;
      /** Format: float */
      rawTotal: number;
      taxRules?: GenericRecord;
      taxStatus: string;
      /** Format: float */
      totalPrice: number;
    };
    salesChannelId: string;
    shippingCosts?: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    /** Format: float */
    shippingTotal?: number;
    source?: string;
    stateMachineState: components["schemas"]["StateMachineState"]; // TODO: [OpenAPI][Order] stateMachineState field should be defined as required
    tags?: components["schemas"]["Tag"][];
    taxStatus?: string;
    transactions?: components["schemas"]["OrderTransaction"][];
    /** Format: date-time */
    updatedAt?: string;
    updatedById?: string;
    versionId?: string;
  };
  OrderAddress: {
    additionalAddressLine1?: string;
    additionalAddressLine2?: string;
    city: string;
    company?: string;
    country?: components["schemas"]["Country"];
    countryId: string;
    countryState?: components["schemas"]["CountryState"];
    countryStateId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    department?: string;
    firstName: string;
    id: string; // TODO: [OpenAPI][OrderAddress] id field should be defined as required
    lastName: string;
    phoneNumber?: string;
    salutation?: components["schemas"]["Salutation"];
    street: string;
    title?: string;
    /** Format: date-time */
    updatedAt?: string;
    vatId?: string;
    versionId?: string;
    zipcode?: string;
  };
  OrderCustomer: {
    company?: string;
    /** Format: date-time */
    createdAt: string;
    customerNumber?: string;
    customFields?: GenericRecord;
    email: string;
    firstName: string;
    id?: string;
    lastName: string;
    salutation?: components["schemas"]["Salutation"];
    salutationId?: string;
    title?: string;
    /** Format: date-time */
    updatedAt?: string;
    vatIds?: string[];
    versionId?: string;
  };
  OrderDelivery: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    orderId: string;
    orderVersionId?: string;
    positions?: components["schemas"]["OrderDeliveryPosition"][];
    shippingCosts?: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    /** Format: date-time */
    shippingDateEarliest: string;
    /** Format: date-time */
    shippingDateLatest: string;
    shippingMethod?: components["schemas"]["ShippingMethod"];
    shippingMethodId: string;
    shippingOrderAddress?: components["schemas"]["OrderAddress"];
    shippingOrderAddressId: string;
    shippingOrderAddressVersionId?: string;
    stateId: string;
    stateMachineState?: components["schemas"]["StateMachineState"];
    trackingCodes: string[];
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  OrderDeliveryPosition: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    orderDeliveryId: string;
    orderDeliveryVersionId?: string;
    orderLineItemId: string;
    orderLineItemVersionId?: string;
    price?: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    /** Format: int64 */
    quantity?: number;
    /** Format: float */
    totalPrice?: number;
    /** Format: float */
    unitPrice?: number;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  OrderLineItem: {
    children: components["schemas"]["OrderLineItem"][];
    cover?: components["schemas"]["Media"];
    coverId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    description?: string;
    downloads?: components["schemas"]["OrderLineItemDownload"][];
    extensions?: {
      returns?: {
        data?: {
          /** @example 7fff84525c6516919851a9005373f87e */
          id?: string;
          /** @example order_return_line_item */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /order-line-item/40b401ac0b29ac5c5c8ffce649fdef62/returns
           */
          related?: string;
        };
      };
      state?: {
        data?: {
          /** @example 9ed39e2ea931586b6a985a6942ef573e */
          id?: string;
          /** @example state_machine_state */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /order-line-item/40b401ac0b29ac5c5c8ffce649fdef62/state
           */
          related?: string;
        };
      };
    };
    good?: boolean;
    id?: string;
    identifier: string;
    label: string;
    orderDeliveryPositions?: components["schemas"]["OrderDeliveryPosition"][];
    orderId: string;
    orderVersionId?: string;
    parent?: components["schemas"]["OrderLineItem"];
    parentId?: string;
    parentVersionId?: string;
    payload: components["schemas"]["Product"]; // TODO: [OpenAPI][OrderLineItem] define possible payloads for order line items
    /** Format: int64 */
    position: number;
    priceDefinition?: GenericRecord;
    productId?: string;
    productVersionId?: string;
    /** Format: int64 */
    quantity: number;
    referencedId?: string;
    removable?: boolean;
    stackable?: boolean;
    states: string[];
    /** Format: float */
    totalPrice?: number;
    type?: string;
    /** Format: float */
    unitPrice?: number;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  OrderLineItemDownload: {
    accessGranted: boolean;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id: string; // TODO: [OpenAPI][OrderLineItemDownload] id should be defined as required
    media: components["schemas"]["Media"]; // TODO: [OpenAPI][OrderLineItemDownload] media should be defined as required
    mediaId: string;
    orderLineItem?: components["schemas"]["OrderLineItem"];
    orderLineItemId: string;
    orderLineItemVersionId?: string;
    /** Format: int64 */
    position: number;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  OrderProductWarehouse: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  OrderReturn: {
    /** Format: float */
    amountNet?: number;
    /** Format: float */
    amountTotal?: number;
    /** Format: date-time */
    createdAt: string;
    createdById?: string;
    id?: string;
    lineItems?: components["schemas"]["OrderReturnLineItem"][];
    orderId: string;
    orderVersionId?: string;
    price?: {
      calculatedTaxes?: GenericRecord;
      /** Format: float */
      netPrice: number;
      /** Format: float */
      positionPrice: number;
      /** Format: float */
      rawTotal: number;
      taxRules?: GenericRecord;
      taxStatus: string;
      /** Format: float */
      totalPrice: number;
    };
    /** Format: date-time */
    requestedAt: string;
    returnNumber: string;
    shippingCosts?: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    state?: components["schemas"]["StateMachineState"];
    stateId: string;
    /** Format: date-time */
    updatedAt?: string;
    updatedById?: string;
    versionId?: string;
  };
  OrderReturnLineItem: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    orderLineItemId: string;
    orderLineItemVersionId?: string;
    orderReturnId: string;
    orderReturnVersionId?: string;
    /** Format: int64 */
    quantity: number;
    reason?: components["schemas"]["OrderReturnLineItemReason"];
    reasonId: string;
    /** Format: float */
    refundAmount?: number;
    /** Format: int64 */
    restockQuantity?: number;
    state?: components["schemas"]["StateMachineState"];
    stateId: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  OrderReturnLineItemReason: {
    content: string;
    /** Format: date-time */
    createdAt: string;
    id?: string;
    reasonKey: string;
    translated?: {
      content?: string;
      reasonKey?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  OrderRouteResponse: {
    // TODO: [OpenAPI][OrderRouteResponse] - `orders` field should be required
    orders: {
      // TODO: [OpenAPI][OrderRouteResponse] orders field should be defined properly
      elements: components["schemas"]["Order"][];
    } & components["schemas"]["EntitySearchResult"];
    /** The key-value pairs contain the uuid of the order as key and a boolean as value, indicating that the payment method can still be changed. */
    paymentChangeable?: GenericRecord;
  };
  OrderTag: {
    id?: string;
    order?: components["schemas"]["Order"];
    orderId: string;
    orderVersionId?: string;
    tag?: components["schemas"]["Tag"];
    tagId: string;
  };
  OrderTransaction: {
    amount: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    captures?: components["schemas"]["OrderTransactionCapture"][];
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    orderId: string;
    orderVersionId?: string;
    paymentMethod?: components["schemas"]["PaymentMethod"];
    paymentMethodId: string;
    stateId: string;
    stateMachineState?: components["schemas"]["StateMachineState"];
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  OrderTransactionCapture: {
    amount: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    externalReference?: string;
    id?: string;
    orderTransactionId: string;
    orderTransactionVersionId?: string;
    refunds?: components["schemas"]["OrderTransactionCaptureRefund"][];
    stateId: string;
    stateMachineState?: components["schemas"]["StateMachineState"];
    transaction?: components["schemas"]["OrderTransaction"];
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  OrderTransactionCaptureRefund: {
    amount: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    captureId: string;
    captureVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    externalReference?: string;
    id?: string;
    positions?: components["schemas"]["OrderTransactionCaptureRefundPosition"][];
    reason?: string;
    stateId: string;
    stateMachineState?: components["schemas"]["StateMachineState"];
    transactionCapture?: components["schemas"]["OrderTransactionCapture"];
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  OrderTransactionCaptureRefundPosition: {
    amount: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    externalReference?: string;
    id?: string;
    orderLineItem?: components["schemas"]["OrderLineItem"];
    orderLineItemId: string;
    orderLineItemVersionId?: string;
    orderTransactionCaptureRefund?: components["schemas"]["OrderTransactionCaptureRefund"];
    /** Format: int64 */
    quantity?: number;
    reason?: string;
    refundId: string;
    refundVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  OrderWarehouseGroup: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  PageViewedPayload: {
    /** the id from the page which was viewed */
    pageId: string;
    /** the id from the section within the page which was viewed */
    sectionId: string;
  };
  PaymentMethod: {
    active?: boolean;
    afterOrderEnabled?: boolean;
    /** Runtime field, cannot be used as part of the criteria. */
    asynchronous?: boolean;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    description?: string;
    distinguishableName?: string;
    id: string; // TODO: [OpenAPI][PaymentMethod] id should be defined as required
    media?: components["schemas"]["Media"];
    mediaId?: string;
    name: string;
    /** Format: int64 */
    position?: number;
    /** Runtime field, cannot be used as part of the criteria. */
    prepared?: boolean;
    /** Runtime field, cannot be used as part of the criteria. */
    recurring?: boolean;
    /** Runtime field, cannot be used as part of the criteria. */
    refundable?: boolean;
    /** Runtime field, cannot be used as part of the criteria. */
    shortName?: string;
    /** Runtime field, cannot be used as part of the criteria. */
    synchronous?: boolean;
    technicalName?: string;
    translated?: {
      description?: string;
      distinguishableName?: string;
      mediaId?: string;
      name?: string;
      shortName?: string;
      technicalName?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  PaymentMethodJsonApi: components["schemas"]["resource"] & {
    active?: boolean;
    afterOrderEnabled?: boolean;
    /** Runtime field, cannot be used as part of the criteria. */
    asynchronous?: boolean;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    description?: string;
    distinguishableName?: string;
    id?: string;
    mediaId?: string;
    name: string;
    /** Format: int64 */
    position?: number;
    /** Runtime field, cannot be used as part of the criteria. */
    prepared?: boolean;
    /** Runtime field, cannot be used as part of the criteria. */
    recurring?: boolean;
    /** Runtime field, cannot be used as part of the criteria. */
    refundable?: boolean;
    relationships?: {
      media?: {
        data?: {
          /** @example 62933a2951ef01f4eafd9bdf4d3cd2f0 */
          id?: string;
          /** @example media */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /payment-method/da8da1569e6bef3249a7064261df833f/media
           */
          related?: string;
        };
      };
    };
    /** Runtime field, cannot be used as part of the criteria. */
    shortName?: string;
    /** Runtime field, cannot be used as part of the criteria. */
    synchronous?: boolean;
    technicalName?: string;
    translated?: {
      description?: string;
      distinguishableName?: string;
      mediaId?: string;
      name?: string;
      shortName?: string;
      technicalName?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  PendingOrder: {
    amountNet?: number | null;
    amountTotal?: number | null;
    approvalRuleId?: string;
    billingAddress?: GenericRecord;
    cartPayload?: GenericRecord | string;
    country?: GenericRecord;
    countryId?: string;
    currency?: GenericRecord;
    currencyId?: string;
    customerId?: string;
    decidedById?: string;
    employeeId?: string;
    /** Format: uuid */
    id?: string;
    itemRounding?: GenericRecord;
    language?: GenericRecord;
    languageId?: string;
    lineItemCount?: number;
    number?: string;
    originalPrice?: number | null;
    paymentMethodId?: string;
    price?: GenericRecord;
    reason?: string;
    salesChannel?: GenericRecord;
    salesChannelId?: string;
    shippingMethodId?: string;
    stateId?: string;
    taxStatus?: string;
    totalRounding?: GenericRecord;
  };
  Plugin: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  PresentationCmsPage: {
    cmsPage?: components["schemas"]["CmsPage"];
    /** The CMS page id the presentation using */
    cmsPageId?: string;
    /** The CMS page version id the presentation using */
    cmsPageVersionId?: string;
    /** Format: date-time */
    createdAt?: string;
    customFields?: GenericRecord | null;
    guidedShoppingPresentationVersionId?: string;
    /** The presentation cms page id */
    id?: string;
    /** True if this slide is an instant listing */
    isInstantListing?: boolean;
    /** The product id is assigned to presentation if it's product listing or instant listing */
    pickedProductIds?: string[] | null;
    /** The position of slide */
    position?: number;
    /** The presentation using this presentation cms page */
    presentationId?: string;
    /** The product id is assigned to presentation if it's product detail */
    productId?: string | null;
    /** The product stream id is assigned to presentation if it's product listing */
    productStreamId?: string | null;
    /** The title of presentation cms page */
    title?: string | null;
    translated?: {
      cmsPageId?: string;
      cmsPageVersionId?: string;
      guidedShoppingPresentationVersionId?: string;
      presentationId?: string;
    };
    updatedAt?: string | null;
  };
  PresentationSlideData: OneOf<
    [
      {
        configurator?: components["schemas"]["PropertyGroup"][];
        product?: components["schemas"]["Product"];
      },
      {
        category?: components["schemas"]["Category"];
      },
      null,
    ]
  >;
  PresentationStructure: {
    cmsPageResults?: {
      cmsPage?: components["schemas"]["CmsPage"];
      /** The presentation id */
      resourceIdentifier?: string;
      /**
       * The type of presentation page
       * @default frontend.presentation.page
       */
      resourceType?: string;
    }[];
    navigation?: {
      /** The CMS page id */
      cmsPageId?: string;
      /** The presentation CMS page id */
      groupId?: string;
      /** The slide name */
      groupName?: string;
      /** The section id */
      id?: string;
      /** The slide position */
      index?: number;
      /** The section name */
      name?: string | null;
      /** @default [] */
      notes?: components["schemas"]["CmsSlot"][];
    }[];
  };
  Product: {
    apiAlias: "product"; // TODO: [OpenAPI][Product] apiAlias field should be defined in schema as string literal
    active?: boolean;
    available?: boolean;
    /** Format: int64 */
    availableStock?: number;
    calculatedCheapestPrice?: Schemas["CalculatedPrice"]; // TODO: [OpenAPI][Product] calculatedCheapestPrice field should be defined exactly what it is
    /**
     * Format: int64
     * Runtime field, cannot be used as part of the criteria.
     */
    calculatedMaxPurchase?: number;
    // TODO: [OpenAPI][Product] calculatedPrice field should be defined properly
    calculatedPrice?: Schemas["CalculatedPrice"];
    calculatedPrices?: Schemas["CalculatedPrice"][]; // TODO: [OpenAPI][Product] calculatedPrices field should be defined as an array and required!
    canonicalProduct?: components["schemas"]["Product"];
    canonicalProductId?: string;
    categories?: components["schemas"]["Category"][];
    categoriesRo?: components["schemas"]["Category"][];
    categoryIds?: readonly string[];
    categoryTree?: readonly string[];
    /** Format: int64 */
    childCount?: number;
    children?: components["schemas"]["Product"][];
    cmsPage?: components["schemas"]["CmsPage"];
    cmsPageId?: string;
    cmsPageVersionId?: string;
    configuratorSettings?: components["schemas"]["ProductConfiguratorSetting"][];
    cover?: components["schemas"]["ProductMedia"];
    coverId?: string;
    /** Format: date-time */
    createdAt: string;
    crossSellings?: components["schemas"]["ProductCrossSelling"][];
    customFields?: GenericRecord;
    deliveryTime?: components["schemas"]["DeliveryTime"];
    deliveryTimeId?: string;
    description?: string;
    displayGroup?: string;
    downloads?: components["schemas"]["ProductDownload"][];
    ean?: string;
    extensions?: {
      reviewSummaries?: {
        data?: {
          /** @example c9c718522e64ffa5effb26cef94f4849 */
          id?: string;
          /** @example product_review_summary */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/reviewSummaries
           */
          related?: string;
        };
      };
      swagCustomizedProductsTemplate?: {
        data?: {
          /** @example 6e9fad30dd3cb84748a01bb8152f4769 */
          id?: string;
          /** @example swag_customized_products_template */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/swagCustomizedProductsTemplate
           */
          related?: string;
        };
      };
    };
    /** Format: float */
    height?: number;
    id: string; // TODO: [OpenAPI][Product] id field should be required in schema
    isCloseout?: boolean;
    /** Runtime field, cannot be used as part of the criteria. */
    isNew?: boolean;
    keywords?: string;
    /** Format: float */
    length?: number;
    mainCategories?: components["schemas"]["MainCategory"][];
    manufacturer?: components["schemas"]["ProductManufacturer"];
    manufacturerId?: string;
    manufacturerNumber?: string;
    markAsTopseller?: boolean;
    /** Format: int64 */
    maxPurchase?: number;
    media?: components["schemas"]["ProductMedia"][];
    metaDescription?: string;
    metaTitle?: string;
    /** Format: int64 */
    minPurchase?: number;
    name: string;
    optionIds?: readonly string[];
    options?: components["schemas"]["PropertyGroupOption"][];
    packUnit?: string;
    packUnitPlural?: string;
    parent?: components["schemas"]["Product"];
    parentId?: string;
    parentVersionId?: string;
    productManufacturerVersionId?: string;
    productMediaVersionId?: string;
    productNumber: string;
    productReviews?: components["schemas"]["ProductReview"][];
    properties?: components["schemas"]["PropertyGroupOption"][];
    propertyIds?: readonly string[];
    /** Format: int64 */
    purchaseSteps?: number;
    /** Format: float */
    purchaseUnit?: number;
    /** Format: float */
    ratingAverage?: number;
    /** Format: float */
    referenceUnit?: number;
    /** Format: date-time */
    releaseDate?: string;
    /** Format: int64 */
    restockTime?: number;
    /** Format: int64 */
    sales?: number;
    seoCategory: components["schemas"]["Category"]; // TODO: [OpenAPI][Product] seoCategory field should be defined as required
    seoUrls?: components["schemas"]["SeoUrl"][];
    shippingFree?: boolean;
    sortedProperties?: GenericRecord;
    states?: readonly string[];
    /** Format: int64 */
    stock: number;
    streamIds?: readonly string[];
    streams?: components["schemas"]["ProductStream"][];
    tagIds?: readonly string[];
    tags?: components["schemas"]["Tag"][];
    tax?: components["schemas"]["Tax"];
    taxId: string;
    translated?: {
      canonicalProductId?: string;
      cmsPageId?: string;
      cmsPageVersionId?: string;
      coverId?: string;
      deliveryTimeId?: string;
      description?: string;
      displayGroup?: string;
      ean?: string;
      keywords?: string;
      manufacturerId?: string;
      manufacturerNumber?: string;
      metaDescription?: string;
      metaTitle?: string;
      name?: string;
      packUnit?: string;
      packUnitPlural?: string;
      parentId?: string;
      parentVersionId?: string;
      productManufacturerVersionId?: string;
      productMediaVersionId?: string;
      productNumber?: string;
      releaseDate?: string;
      taxId?: string;
      unitId?: string;
      versionId?: string;
    };
    unit?: components["schemas"]["Unit"];
    unitId?: string;
    /** Format: date-time */
    updatedAt?: string;
    // TODO: [OpenAPI][Product] variantListingConfig field should be defined in schema
    variantListingConfig?: {
      displayParent: boolean;
    };
    versionId?: string;
    /** Format: float */
    weight?: number;
    /** Format: float */
    width?: number;
  };
  ProductConfiguratorSetting: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    media?: components["schemas"]["Media"];
    mediaId?: string;
    option?: components["schemas"]["PropertyGroupOption"];
    optionId: string;
    /** Format: int64 */
    position?: number;
    productId: string;
    productVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  ProductCrossSelling: {
    active?: boolean;
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: int64 */
    limit?: number;
    name: string;
    /** Format: int64 */
    position: number;
    sortBy?: string;
    sortDirection?: string;
    translated?: {
      name?: string;
      sortBy?: string;
      sortDirection?: string;
      type?: string;
    };
    type: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductCrossSellingAssignedProducts: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductDetailResponse: {
    /** List of property groups with their corresponding options and information on how to display them. */
    configurator?: components["schemas"]["PropertyGroup"][];
    product: components["schemas"]["Product"]; // TODO: [OpenAPI][ProductDetailResponse] product field should be defined as required
  };
  ProductDownload: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    media?: components["schemas"]["Media"];
    mediaId: string;
    /** Format: int64 */
    position?: number;
    product?: components["schemas"]["Product"];
    productId: string;
    productVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  ProductExport: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductFeatureSet: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductJsonApi: components["schemas"]["resource"] & {
    active?: boolean;
    available?: boolean;
    /** Format: int64 */
    availableStock?: number;
    calculatedCheapestPrice?: GenericRecord;
    /**
     * Format: int64
     * Runtime field, cannot be used as part of the criteria.
     */
    calculatedMaxPurchase?: number;
    calculatedPrice?: GenericRecord;
    calculatedPrices?: GenericRecord[];
    canonicalProductId?: string;
    categoryIds?: readonly string[];
    categoryTree?: readonly string[];
    /** Format: int64 */
    childCount?: number;
    cmsPageId?: string;
    cmsPageVersionId?: string;
    coverId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    deliveryTimeId?: string;
    description?: string;
    displayGroup?: string;
    ean?: string;
    extensions?: {
      reviewSummaries?: {
        data?: {
          /** @example c9c718522e64ffa5effb26cef94f4849 */
          id?: string;
          /** @example product_review_summary */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/reviewSummaries
           */
          related?: string;
        };
      };
      swagCustomizedProductsTemplate?: {
        data?: {
          /** @example 6e9fad30dd3cb84748a01bb8152f4769 */
          id?: string;
          /** @example swag_customized_products_template */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/swagCustomizedProductsTemplate
           */
          related?: string;
        };
      };
    };
    /** Format: float */
    height?: number;
    id?: string;
    isCloseout?: boolean;
    /** Runtime field, cannot be used as part of the criteria. */
    isNew?: boolean;
    keywords?: string;
    /** Format: float */
    length?: number;
    manufacturerId?: string;
    manufacturerNumber?: string;
    markAsTopseller?: boolean;
    /** Format: int64 */
    maxPurchase?: number;
    metaDescription?: string;
    metaTitle?: string;
    /** Format: int64 */
    minPurchase?: number;
    name: string;
    optionIds?: readonly string[];
    packUnit?: string;
    packUnitPlural?: string;
    parentId?: string;
    parentVersionId?: string;
    productManufacturerVersionId?: string;
    productMediaVersionId?: string;
    productNumber: string;
    propertyIds?: readonly string[];
    /** Format: int64 */
    purchaseSteps?: number;
    /** Format: float */
    purchaseUnit?: number;
    /** Format: float */
    ratingAverage?: number;
    /** Format: float */
    referenceUnit?: number;
    relationships?: {
      canonicalProduct?: {
        data?: {
          /** @example 023995a50b56c0de077323e958b2bbcd */
          id?: string;
          /** @example product */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/canonicalProduct
           */
          related?: string;
        };
      };
      categories?: {
        data?: {
          /** @example b0b5ccb4a195a07fd3eed14affb8695f */
          id?: string;
          /** @example category */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/categories
           */
          related?: string;
        };
      };
      categoriesRo?: {
        data?: {
          /** @example 7f0702d3a90d965b8c9158c451f43fdb */
          id?: string;
          /** @example category */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/categoriesRo
           */
          related?: string;
        };
      };
      children?: {
        data?: {
          /** @example 268184c12df027f536154d099d497b31 */
          id?: string;
          /** @example product */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/children
           */
          related?: string;
        };
      };
      cmsPage?: {
        data?: {
          /** @example 7b1460918b1abb93311108f3dc021c9b */
          id?: string;
          /** @example cms_page */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/cmsPage
           */
          related?: string;
        };
      };
      configuratorSettings?: {
        data?: {
          /** @example c0827fee13725d41f1fd7e292243f5aa */
          id?: string;
          /** @example product_configurator_setting */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/configuratorSettings
           */
          related?: string;
        };
      };
      cover?: {
        data?: {
          /** @example 41d0e299ca1abeb2094852da042165c7 */
          id?: string;
          /** @example product_media */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/cover
           */
          related?: string;
        };
      };
      crossSellings?: {
        data?: {
          /** @example 89936e14544d1b403cecef938101b6b0 */
          id?: string;
          /** @example product_cross_selling */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/crossSellings
           */
          related?: string;
        };
      };
      deliveryTime?: {
        data?: {
          /** @example 8c888ae25a7bd42057370e31f7e01044 */
          id?: string;
          /** @example delivery_time */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/deliveryTime
           */
          related?: string;
        };
      };
      downloads?: {
        data?: {
          /** @example d07d50a751bc6ddf12bf3af0efee9b45 */
          id?: string;
          /** @example product_download */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/downloads
           */
          related?: string;
        };
      };
      mainCategories?: {
        data?: {
          /** @example 1fb731fc4139cbb575429e28846f0c39 */
          id?: string;
          /** @example main_category */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/mainCategories
           */
          related?: string;
        };
      };
      manufacturer?: {
        data?: {
          /** @example c2904bca62b22443d6cf5e9d89cab204 */
          id?: string;
          /** @example product_manufacturer */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/manufacturer
           */
          related?: string;
        };
      };
      media?: {
        data?: {
          /** @example 62933a2951ef01f4eafd9bdf4d3cd2f0 */
          id?: string;
          /** @example product_media */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/media
           */
          related?: string;
        };
      };
      options?: {
        data?: {
          /** @example 93da65a9fd0004d9477aeac024e08e15 */
          id?: string;
          /** @example property_group_option */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/options
           */
          related?: string;
        };
      };
      parent?: {
        data?: {
          /** @example d0e45878043844ffc41aac437e86b602 */
          id?: string;
          /** @example product */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/parent
           */
          related?: string;
        };
      };
      productReviews?: {
        data?: {
          /** @example 01e78541ea343ed72424a5222796a4cd */
          id?: string;
          /** @example product_review */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/productReviews
           */
          related?: string;
        };
      };
      properties?: {
        data?: {
          /** @example 74693d2fc58b46bd06410f278e39aa71 */
          id?: string;
          /** @example property_group_option */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/properties
           */
          related?: string;
        };
      };
      seoCategory?: {
        data?: {
          /** @example 9354d004d12e03d35ad8292bf0bb234d */
          id?: string;
          /** @example category */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/seoCategory
           */
          related?: string;
        };
      };
      seoUrls?: {
        data?: {
          /** @example 5321b5a71127b8b98cdd4b068ad56c4c */
          id?: string;
          /** @example seo_url */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/seoUrls
           */
          related?: string;
        };
      };
      streams?: {
        data?: {
          /** @example 2f6f4768f1c2d7c8f1f54823723f1a70 */
          id?: string;
          /** @example product_stream */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/streams
           */
          related?: string;
        };
      };
      tags?: {
        data?: {
          /** @example d57ac45256849d9b13e2422d91580fb9 */
          id?: string;
          /** @example tag */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/tags
           */
          related?: string;
        };
      };
      tax?: {
        data?: {
          /** @example 06565e5611f23fdf8cc43e5077b92b54 */
          id?: string;
          /** @example tax */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/tax
           */
          related?: string;
        };
      };
      unit?: {
        data?: {
          /** @example 3e34bdebd9bd5edda27e8728904a2552 */
          id?: string;
          /** @example unit */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /product/deb10517653c255364175796ace3553f/unit
           */
          related?: string;
        };
      };
    };
    /** Format: date-time */
    releaseDate?: string;
    /** Format: int64 */
    restockTime?: number;
    /** Format: int64 */
    sales?: number;
    shippingFree?: boolean;
    sortedProperties?: GenericRecord;
    states?: readonly string[];
    /** Format: int64 */
    stock: number;
    streamIds?: readonly string[];
    tagIds?: readonly string[];
    taxId: string;
    translated?: {
      canonicalProductId?: string;
      cmsPageId?: string;
      cmsPageVersionId?: string;
      coverId?: string;
      deliveryTimeId?: string;
      description?: string;
      displayGroup?: string;
      ean?: string;
      keywords?: string;
      manufacturerId?: string;
      manufacturerNumber?: string;
      metaDescription?: string;
      metaTitle?: string;
      name?: string;
      packUnit?: string;
      packUnitPlural?: string;
      parentId?: string;
      parentVersionId?: string;
      productManufacturerVersionId?: string;
      productMediaVersionId?: string;
      productNumber?: string;
      releaseDate?: string;
      taxId?: string;
      unitId?: string;
      versionId?: string;
    };
    unitId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
    /** Format: float */
    weight?: number;
    /** Format: float */
    width?: number;
  };
  ProductKeywordDictionary: {
    id?: string;
    keyword: string;
    languageId: string;
  };
  ProductListingCriteria: components["schemas"]["Criteria"] & {
    /** Number of items per result page. If not set, the limit will be set according to the default products per page, defined in the system settings. */
    limit?: number;
    /** Filter by manufacturers. List of manufacturer identifiers separated by a `|`. */
    manufacturer?: string;
    /**
     * Enables/disabled filtering by manufacturer. If set to false, the `manufacturer` filter will be ignored. Also the `aggregations[manufacturer]` key will be removed from the response.
     * @default true
     */
    "manufacturer-filter"?: boolean;
    /**
     * Filters by a maximum product price. Has to be higher than the `min-price` filter.
     * @default 0
     */
    "max-price"?: number;
    /**
     * Filters by a minimum product price. Has to be lower than the `max-price` filter.
     * @default 0
     */
    "min-price"?: number;
    /** Specifies the sorting of the products by `availableSortings`. If not set, the default sorting will be set according to the shop settings. The available sorting options are sent within the response under the `availableSortings` key. In order to sort by a field, consider using the `sort` parameter from the listing criteria. Do not use both parameters together, as it might lead to unexpected results. */
    order?: string;
    /**
     * Search result page
     * @default 1
     */
    p?: number;
    /**
     * Enables/disabled filtering by price. If set to false, the `min-price` and `max-price` filter will be ignored. Also the `aggregations[price]` key will be removed from the response.
     * @default true
     */
    "price-filter"?: boolean;
    /** Filters products by their properties. List of property identifiers separated by a `|`. */
    properties?: string;
    /**
     * Enables/disabled filtering by properties products. If set to false, the `properties` filter will be ignored. Also the `aggregations[properties]` key will be removed from the response.
     * @default true
     */
    "property-filter"?: boolean;
    /** A whitelist of property identifiers which can be used for filtering. List of property identifiers separated by a `|`. The `property-filter` must be `true`, otherwise the whitelist has no effect. */
    "property-whitelist"?: string;
    /** Filter products with a minimum average rating. */
    rating?: number;
    /**
     * Enables/disabled filtering by rating. If set to false, the `rating` filter will be ignored. Also the `aggregations[rating]` key will be removed from the response.
     * @default true
     */
    "rating-filter"?: boolean;
    /** By sending the parameter `reduce-aggregations` , the post-filters that were applied by the customer, are also applied to the aggregations. This has the consequence that only values are returned in the aggregations that would lead to further filter results. This parameter is a flag, the value has no effect. */
    "reduce-aggregations"?: string | null;
    /**
     * Filters products that are marked as shipping-free.
     * @default false
     */
    "shipping-free"?: boolean;
    /**
     * Enables/disabled filtering by shipping-free products. If set to false, the `shipping-free` filter will be ignored. Also the `aggregations[shipping-free]` key will be removed from the response.
     * @default true
     */
    "shipping-free-filter"?: boolean;
  };
  ProductListingFlags: {
    /** Resets all aggregations in the criteria. This parameter is a flag, the value has no effect. */
    "no-aggregations"?: string | null;
    /** If this flag is set, no products are fetched. Sorting and associations are also ignored. This parameter is a flag, the value has no effect. */
    "only-aggregations"?: string | null;
  };
  ProductListingResult: components["schemas"]["EntitySearchResult"] & {
    /** Contains the available sorting. These can be used to show a sorting select-box in the product listing. */
    availableSortings?: Array<{
      // TODO: [OpenAPI][ProductListingResult] availableSortings field should be defined properly
      label: string;
      translated: {
        label: string;
      };
      key: string;
      priority: number;
      apiAlias: "product_sorting";
    }>;
    /** Contains the state of the filters. These can be used to create listing filters. */
    currentFilters: {
      // TODO: [OpenAPI][ProductListingResult] currentFilters field should be required
      manufacturer?: string[]; // TODO: [OpenAPI][ProductListingResult] currentFilters.manufacturer field should be defined properly
      navigationId?: string;
      price?: {
        max?: number;
        min?: number;
      };
      properties?: string[]; // TODO: [OpenAPI][ProductListingResult] currentFilters.properties field should be defined properly
      rating?: number;
      "shipping-free"?: boolean;
      search: string; // TODO: [OpenAPI][ProductListingResult] search field should be defined properly
    };
    elements: components["schemas"]["Product"][]; // TODO: [OpenAPI][ProductListingResult] elements field should be defined as required
    sorting?: string;
  };
  ProductManufacturer: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    description?: string;
    id?: string;
    link?: string;
    media?: components["schemas"]["Media"];
    mediaId?: string;
    name: string;
    translated?: {
      description?: string;
      link?: string;
      mediaId?: string;
      name?: string;
      versionId?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  ProductMedia: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    media?: components["schemas"]["Media"];
    mediaId: string;
    /** Format: int64 */
    position?: number;
    productId: string;
    productVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
    thumbnails?: Array<components["schemas"]["MediaThumbnail"]>; // TODO: [OpenAPI][Product] thumbnails field should be defined in ProductMedia
  };
  ProductPayload: {
    /** the id from the product which is used in the interaction */
    productId: string;
  };
  ProductPrice: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductReview: {
    comment?: string;
    content: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    customerId?: string; // TODO: [OpenAPI][ProductReview] customerId field should be defined
    externalUser?: string; // TODO: [OpenAPI][ProductReview] externalUser field should be defined
    id: string; // TODO: [OpenAPI][ProductReview] id field should be defined as required
    languageId: string;
    /** Format: float */
    points: number; // TODO: [OpenAPI][ProductReview] points field should be defined as required
    productId: string;
    productVersionId?: string;
    salesChannelId: string;
    status?: boolean;
    title: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductReviewSummary: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    product?: components["schemas"]["Product"];
    productId: string;
    salesChannel?: components["schemas"]["SalesChannel"];
    salesChannelId: string;
    summary?: string;
    translated?: {
      productId?: string;
      salesChannelId?: string;
      summary?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    visible?: boolean;
  };
  ProductSearchConfig: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductSearchConfigField: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductSearchKeyword: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductSorting: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    key: string;
    label: string;
    /** Format: int64 */
    priority: number;
    translated?: {
      key?: string;
      label?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductStream: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    description?: string;
    id?: string;
    name: string;
    translated?: {
      description?: string;
      name?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductStreamFilter: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductVisibility: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ProductWarehouse: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Promotion: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  PromotionDiscount: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  PromotionDiscountPrices: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  PromotionIndividualCode: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  PromotionSalesChannel: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  PromotionSetgroup: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  PropertyGroup: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    description?: string;
    displayType: string;
    filterable?: boolean;
    id?: string;
    name: string;
    options?: components["schemas"]["PropertyGroupOption"][];
    /** Format: int64 */
    position?: number;
    sortingType: string;
    translated?: {
      description?: string;
      displayType?: string;
      name?: string;
      sortingType?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    visibleOnProductDetailPage?: boolean;
  };
  PropertyGroupOption: {
    colorHexCode?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    group: {
      // components["schemas"]["PropertyGroup"]; // TODO: [OpenAPI][PropertyGroupOption] group field should be defined and required
      name: string;
    };
    groupId: string;
    id: string; // TODO: [OpenAPI][PropertyGroupOption] id field should be required in schema
    media?: components["schemas"]["Media"];
    mediaId?: string;
    name: string;
    option: string; // TODO: [OpenAPI][PropertyGroupOption] option field should be defined; defined as string (?)
    /** Format: int64 */
    position?: number;
    translated?: {
      colorHexCode?: string;
      groupId?: string;
      mediaId?: string;
      name?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  Quote: {
    /** Format: float */
    amountNet?: number;
    /** Format: float */
    amountTotal?: number;
    comments?: components["schemas"]["QuoteComment"][];
    /** Format: date-time */
    createdAt: string;
    createdById?: string;
    currency?: components["schemas"]["Currency"];
    currencyId: string;
    customerId: string;
    customFields?: GenericRecord;
    deliveries?: components["schemas"]["QuoteDelivery"][];
    discount?: {
      type?: string;
      /** Format: float */
      value?: number;
    };
    documents?: components["schemas"]["QuoteDocument"][];
    /** Format: date-time */
    expirationDate?: string;
    id?: string;
    language?: components["schemas"]["Language"];
    languageId: string;
    lineItems?: components["schemas"]["QuoteLineItem"][];
    orderId?: string;
    orderVersionId?: string;
    /** Format: float */
    originalPrice?: number;
    price?: {
      calculatedTaxes?: GenericRecord;
      /** Format: float */
      netPrice: number;
      /** Format: float */
      positionPrice: number;
      /** Format: float */
      rawTotal: number;
      taxRules?: GenericRecord;
      taxStatus: string;
      /** Format: float */
      totalPrice: number;
    };
    quoteNumber?: string;
    salesChannelId: string;
    /** Format: date-time */
    sentAt?: string;
    shippingCosts?: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    stateId: string;
    stateMachineState?: components["schemas"]["StateMachineState"];
    /** Format: float */
    subtotalNet?: number;
    taxStatus?: string;
    /** Format: float */
    totalDiscount?: number;
    transactions?: components["schemas"]["QuoteTransaction"][];
    /** Format: date-time */
    updatedAt?: string;
    updatedById?: string;
    userId?: string;
    versionId?: string;
  };
  QuoteComment: {
    comment: string;
    /** Format: date-time */
    createdAt: string;
    createdById?: string;
    customer?: components["schemas"]["Customer"];
    customerId?: string;
    id?: string;
    quoteId: string;
    quoteVersionId?: string;
    /** Format: date-time */
    seenAt?: string;
    stateId?: string;
    stateMachineState?: components["schemas"]["StateMachineState"];
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  QuoteDelivery: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    positions?: components["schemas"]["QuoteDeliveryPosition"][];
    quoteId: string;
    quoteVersionId?: string;
    shippingCosts?: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    /** Format: date-time */
    shippingDateEarliest: string;
    /** Format: date-time */
    shippingDateLatest: string;
    shippingMethod?: components["schemas"]["ShippingMethod"];
    shippingMethodId: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  QuoteDeliveryPosition: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    price?: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    /** Format: int64 */
    quantity?: number;
    quoteDeliveryId: string;
    quoteDeliveryVersionId?: string;
    quoteLineItemId: string;
    quoteLineItemVersionId?: string;
    /** Format: float */
    totalPrice?: number;
    /** Format: float */
    unitPrice?: number;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  QuoteDocument: {
    active?: boolean;
    config: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    deepLinkCode: string;
    documentMediaFile?: components["schemas"]["Media"];
    documentMediaFileId?: string;
    documentNumber?: string;
    documentType?: components["schemas"]["DocumentType"];
    documentTypeId: string;
    fileType: string;
    id?: string;
    quote?: components["schemas"]["Quote"];
    quoteId: string;
    quoteVersionId?: string;
    sent?: boolean;
    static?: boolean;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  QuoteEmployee: {
    /** Format: date-time */
    createdAt: string;
    firstName: string;
    id?: string;
    lastName: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  QuoteLineItem: {
    children: components["schemas"]["QuoteLineItem"][];
    cover?: components["schemas"]["Media"];
    coverId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    description?: string;
    discount?: {
      type?: string;
      /** Format: int64 */
      value?: number;
    };
    good?: boolean;
    id?: string;
    identifier: string;
    label: string;
    parent?: components["schemas"]["QuoteLineItem"];
    parentId?: string;
    parentVersionId?: string;
    payload?: GenericRecord;
    /** Format: int64 */
    position: number;
    priceDefinition?: GenericRecord;
    productId?: string;
    productPrice?: GenericRecord;
    productVersionId?: string;
    purchasePrice?: GenericRecord;
    /** Format: int64 */
    quantity: number;
    quoteId: string;
    quoteVersionId?: string;
    referencedId?: string;
    removable?: boolean;
    stackable?: boolean;
    states: string[];
    /** Format: float */
    totalPrice?: number;
    type?: string;
    /** Format: float */
    unitPrice?: number;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  QuoteTransaction: {
    amount: {
      calculatedTaxes?: GenericRecord;
      listPrice?: {
        /** Format: float */
        discount?: number;
        /** Format: float */
        percentage?: number;
        /** Format: float */
        price?: number;
      };
      /** Format: int64 */
      quantity: number;
      referencePrice?: GenericRecord;
      regulationPrice?: {
        /** Format: float */
        price?: number;
      };
      taxRules?: GenericRecord;
      /** Format: float */
      totalPrice: number;
      /** Format: float */
      unitPrice: number;
    };
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    paymentMethod?: components["schemas"]["PaymentMethod"];
    paymentMethodId: string;
    quoteId: string;
    quoteVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  Rule: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    description?: string;
    extensions?: {
      warehouseGroup?: {
        data?: {
          /** @example 1768e3071b62161d415e0c24332055ed */
          id?: string;
          /** @example warehouse_group */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /rule/ab7a485ebe75b6dd7243ad719f23c7de/warehouseGroup
           */
          related?: string;
        };
      };
    };
    id?: string;
    name: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  RuleCondition: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SaasAppStorefrontConfig: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SaasSbpUserData: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SaasStorefrontDemoToken: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SaasUserLoginToken: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SalesChannel: {
    active?: boolean;
    configuration?: GenericRecord;
    country?: components["schemas"]["Country"];
    countryId: string;
    /** Format: date-time */
    createdAt: string;
    currency?: components["schemas"]["Currency"];
    currencyId: string;
    customerGroupId: string;
    customFields?: GenericRecord;
    domains?: components["schemas"]["SalesChannelDomain"][];
    footerCategory?: components["schemas"]["Category"];
    footerCategoryId?: string;
    footerCategoryVersionId?: string;
    hreflangActive?: boolean;
    hreflangDefaultDomain?: components["schemas"]["SalesChannelDomain"];
    hreflangDefaultDomainId?: string;
    id?: string;
    language?: components["schemas"]["Language"];
    languageId: string;
    mailHeaderFooterId?: string;
    maintenance?: boolean;
    name: string;
    navigationCategory?: components["schemas"]["Category"];
    /** Format: int64 */
    navigationCategoryDepth?: number;
    navigationCategoryId: string;
    navigationCategoryVersionId?: string;
    paymentMethod?: components["schemas"]["PaymentMethod"];
    paymentMethodId: string;
    serviceCategory?: components["schemas"]["Category"];
    serviceCategoryId?: string;
    serviceCategoryVersionId?: string;
    shippingMethod?: components["schemas"]["ShippingMethod"];
    shippingMethodId: string;
    shortName?: string;
    taxCalculationType?: string;
    translated?: {
      countryId?: string;
      currencyId?: string;
      customerGroupId?: string;
      footerCategoryId?: string;
      footerCategoryVersionId?: string;
      hreflangDefaultDomainId?: string;
      languageId?: string;
      mailHeaderFooterId?: string;
      name?: string;
      navigationCategoryId?: string;
      navigationCategoryVersionId?: string;
      paymentMethodId?: string;
      serviceCategoryId?: string;
      serviceCategoryVersionId?: string;
      shippingMethodId?: string;
      shortName?: string;
      taxCalculationType?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  SalesChannelAnalytics: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SalesChannelContext: components["schemas"]["ArrayStruct"] & {
    /** Core context with general configuration values and state */
    context?: {
      currencyFactor?: number;
      currencyId?: string;
      /** Format: int32 */
      currencyPrecision?: number;
      languageIdChain?: string[]; // TODO: [OpenAPI][SalesChannelContext] languageIdChain field should be defined properly in context
      scope?: string;
      source?: string;
      taxState?: string;
      useCache?: boolean;
      versionId?: string;
    };
    /** Currency associated with the current user */
    currency?: components["schemas"]["Currency"]; // TODO: [OpenAPI][SalesChannelContext] currency field should be defined reusing Currency schema
    // currency?: {
    //   /** Format: int32 */
    //   decimalPrecision?: number;
    //   factor?: number;
    //   isoCode?: string;
    //   isSystemDefault?: boolean;
    //   name?: string;
    //   /** Format: int32 */
    //   position?: number;
    //   shortName?: string;
    //   symbol?: string;
    // };
    /** Customer group of the current user */
    currentCustomerGroup?: {
      displayGross?: boolean;
      name?: string;
    };
    customer?: components["schemas"]["Customer"]; // TODO: [OpenAPI][SalesChannelContext] customer field should be defined reusing Customer schema
    // customer?: {
    //   active?: boolean;
    //   affiliateCode?: string;
    //   /** Format: int32 */
    //   autoIncrement?: number;
    //   /** Format: date-time */
    //   birthday?: string;
    //   campaignCode?: string;
    //   company?: string;
    //   customerNumber?: string;
    //   defaultBillingAddressId?: string;
    //   defaultPaymentMethodId?: string;
    //   defaultShippingAddressId?: string;
    //   /** Format: date-time */
    //   doubleOptInConfirmDate?: string;
    //   /** Format: date-time */
    //   doubleOptInEmailSentDate?: string;
    //   doubleOptInRegistration?: boolean;
    //   email?: string;
    //   /** Format: date-time */
    //   firstLogin?: string;
    //   firstName?: string;
    //   groupId?: string;
    //   guest?: boolean;
    //   hash?: string;
    //   languageId?: string;
    //   /** Format: date-time */
    //   lastLogin?: string;
    //   lastName?: string;
    //   /** Format: date-time */
    //   lastOrderDate?: string;
    //   lastPaymentMethodId?: string;
    //   legacyEncoder?: string;
    //   legacyPassword?: string;
    //   newsletter?: boolean;
    //   /** Format: int32 */
    //   orderCount?: number;
    //   password?: string;
    //   remoteAddress?: string;
    //   salesChannelId?: string;
    //   salutationId?: string;
    //   title?: string;
    // };
    /** Fallback group if the default customer group is not applicable */
    fallbackCustomerGroup?: {
      displayGross?: boolean;
      name?: string;
    };
    /** Selected payment method */
    paymentMethod?: components["schemas"]["PaymentMethod"]; // TODO: [OpenAPI][SalesChannelContext] paymentMethod field should be defined properly reusing PaymentMethod schema
    // paymentMethod?: {
    //   active?: boolean;
    //   availabilityRuleId?: string;
    //   description?: string;
    //   formattedHandlerIdentifier?: string;
    //   handlerIdentifier?: string;
    //   mediaId?: string;
    //   name?: string;
    //   pluginId?: string;
    //   /** Format: int32 */
    //   position?: number;
    // };
    /** Information about the current sales channel */
    salesChannel?: {
      accessKey?: string;
      active?: boolean;
      analyticsId?: string;
      countryId?: string;
      currencyId?: string;
      customerGroupId?: string;
      footerCategoryId?: string;
      hreflangActive?: boolean;
      hreflangDefaultDomainId?: string;
      languageId?: string;
      mailHeaderFooterId?: string;
      maintenance?: boolean;
      maintenanceIpWhitelist?: string;
      name?: string;
      /** Format: int32 */
      navigationCategoryDepth?: number;
      navigationCategoryId?: string;
      paymentMethodId?: string;
      serviceCategoryId?: string;
      shippingMethodId?: string;
      shortName?: string;
      typeId?: string;
    };
    shippingLocation?: {
      // TODO: [OpenAPI][SalesChannelContext] shippingLocation field should be defined properly
      apiAlias: "cart_delivery_shipping_location";
      country: components["schemas"]["Country"];
      address: components["schemas"]["CustomerAddress"];
    };
    /** Selected shipping method */
    shippingMethod?: components["schemas"]["ShippingMethod"]; // TODO: [OpenAPI][SalesChannelContext] shippingMethod field should be defined properly reusing ShippingMethod schema
    // shippingMethod?: {
    //   active?: boolean;
    //   availabilityRuleId?: string;
    //   deliveryTimeId?: string;
    //   description?: string;
    //   mediaId?: string;
    //   name?: string;
    //   trackingUrl?: string;
    // };
    /** Currently active tax rules and/or rates */
    taxRules?: {
      name?: string;
      /** Format: float */
      taxRate?: number;
    }[];
    /** Context the user session */
    token?: string;
  };
  SalesChannelDomain: {
    /** Format: date-time */
    createdAt: string;
    currency?: components["schemas"]["Currency"];
    currencyId: string;
    customFields?: GenericRecord;
    hreflangUseOnlyLocale?: boolean;
    id?: string;
    language?: components["schemas"]["Language"];
    languageId: string;
    salesChannelDefaultHreflang?: components["schemas"]["SalesChannel"];
    salesChannelId: string;
    snippetSetId: string;
    /** Format: date-time */
    updatedAt?: string;
    url: string;
  };
  SalesChannelType: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  Salutation: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    displayName: string;
    id?: string;
    letterName: string;
    salutationKey: string;
    translated?: {
      displayName?: string;
      letterName?: string;
      salutationKey?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  SalutationJsonApi: components["schemas"]["resource"] & {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    displayName: string;
    id?: string;
    letterName: string;
    salutationKey: string;
    translated?: {
      displayName?: string;
      letterName?: string;
      salutationKey?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  ScheduledTask: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Script: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SearchByImageSearchTermResponse: {
    /** @enum {string} */
    apiAlias: "product_image_upload_search_term";
    extensions?: GenericRecord[];
    term: string;
  }[];
  SeoUrl: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    /** Runtime field, cannot be used as part of the criteria. */
    error?: string;
    foreignKey: string;
    id?: string;
    isCanonical?: boolean;
    isDeleted?: boolean;
    isModified?: boolean;
    languageId: string;
    pathInfo: string;
    routeName: // TODO: [OpenAPI][SeoUrl] routeName field should be defined as union type
    | "frontend.navigation.page"
      | "frontend.landing.page"
      | "frontend.detail.page";
    salesChannelId?: string;
    seoPathInfo: string;
    /** Format: date-time */
    updatedAt?: string;
    /** Runtime field, cannot be used as part of the criteria. */
    url?: string;
  };
  SeoUrlJsonApi: components["schemas"]["resource"] & {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    foreignKey: string;
    id?: string;
    isCanonical?: boolean;
    isDeleted?: boolean;
    isModified?: boolean;
    /** Runtime field, cannot be used as part of the criteria. */
    isValid?: boolean;
    languageId: string;
    pathInfo: string;
    routeName: string;
    salesChannelId?: string;
    seoPathInfo: string;
    /** Format: date-time */
    updatedAt?: string;
    /** Runtime field, cannot be used as part of the criteria. */
    url?: string;
  };
  SeoUrlTemplate: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    isValid?: boolean;
    salesChannelId?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  ShippingMethod: {
    active?: boolean;
    availabilityRule?: components["schemas"]["Rule"];
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    deliveryTime?: components["schemas"]["DeliveryTime"];
    deliveryTimeId: string;
    description?: string;
    id: string; // TODO: [OpenAPI][ShippingMethod] id field should be required in schema
    media?: components["schemas"]["Media"];
    mediaId?: string;
    name: string;
    /** Format: int64 */
    position?: number;
    prices?: components["schemas"]["ShippingMethodPrice"][];
    tags?: components["schemas"]["Tag"][];
    tax?: components["schemas"]["Tax"];
    taxType: string;
    technicalName?: string;
    trackingUrl?: string;
    translated?: {
      deliveryTimeId?: string;
      description?: string;
      mediaId?: string;
      name?: string;
      taxType?: string;
      technicalName?: string;
      trackingUrl?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  ShippingMethodJsonApi: components["schemas"]["resource"] & {
    active?: boolean;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    deliveryTimeId: string;
    description?: string;
    id?: string;
    mediaId?: string;
    name: string;
    /** Format: int64 */
    position?: number;
    relationships?: {
      availabilityRule?: {
        data?: {
          /** @example 9fbb7961d1cb158094924c679e1b302c */
          id?: string;
          /** @example rule */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /shipping-method/d72e7a227a27328b28342b32fc66b6bf/availabilityRule
           */
          related?: string;
        };
      };
      deliveryTime?: {
        data?: {
          /** @example 8c888ae25a7bd42057370e31f7e01044 */
          id?: string;
          /** @example delivery_time */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /shipping-method/d72e7a227a27328b28342b32fc66b6bf/deliveryTime
           */
          related?: string;
        };
      };
      media?: {
        data?: {
          /** @example 62933a2951ef01f4eafd9bdf4d3cd2f0 */
          id?: string;
          /** @example media */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /shipping-method/d72e7a227a27328b28342b32fc66b6bf/media
           */
          related?: string;
        };
      };
      prices?: {
        data?: {
          /** @example afae32efe0f84fece3f96b377b768b33 */
          id?: string;
          /** @example shipping_method_price */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /shipping-method/d72e7a227a27328b28342b32fc66b6bf/prices
           */
          related?: string;
        };
      };
      tags?: {
        data?: {
          /** @example d57ac45256849d9b13e2422d91580fb9 */
          id?: string;
          /** @example tag */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /shipping-method/d72e7a227a27328b28342b32fc66b6bf/tags
           */
          related?: string;
        };
      };
      tax?: {
        data?: {
          /** @example 06565e5611f23fdf8cc43e5077b92b54 */
          id?: string;
          /** @example tax */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /shipping-method/d72e7a227a27328b28342b32fc66b6bf/tax
           */
          related?: string;
        };
      };
    };
    taxType: string;
    technicalName?: string;
    trackingUrl?: string;
    translated?: {
      deliveryTimeId?: string;
      description?: string;
      mediaId?: string;
      name?: string;
      taxType?: string;
      technicalName?: string;
      trackingUrl?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  ShippingMethodPageRouteResponse: {
    active?: boolean;
    availabilityRule?: {
      description?: string;
      invalid?: boolean;
      name?: string;
      /** Format: int32 */
      priority?: number;
    };
    availabilityRuleId?: string;
    deliveryTime?: {
      /** Format: int32 */
      max?: number;
      /** Format: int32 */
      min?: number;
      name?: string;
      unit?: string;
    };
    deliveryTimeId?: string;
    description?: string;
    media?: {
      alt?: string;
      fileExtension?: string;
      fileName?: string;
      /** Format: int32 */
      fileSize?: number;
      mediaFolderId?: string;
      mediaTypeRaw?: string;
      metaDataRaw?: string;
      mimeType?: string;
      private?: boolean;
      thumbnailsRo?: string;
      title?: string;
      /** Format: date-time */
      uploadedAt?: string;
      url?: string;
      userId?: string;
    };
    mediaId?: string;
    name?: string;
    orderDeliveries?: {
      orderId?: string;
      /** Format: date-time */
      shippingDateEarliest?: string;
      /** Format: date-time */
      shippingDateLatest?: string;
      shippingMethodId?: string;
      shippingOrderAddressId?: string;
      stateId?: string;
    }[];
    prices?: {
      /** Format: int32 */
      calculation?: number;
      calculationRuleId?: string;
      currencyId?: string;
      /** Format: float */
      price?: number;
      /** Format: float */
      quantityEnd?: number;
      /** Format: float */
      quantityStart?: number;
      ruleId?: string;
      shippingMethodId?: string;
    }[];
    salesChannelDefaultAssignments?: {
      accessKey?: string;
      active?: boolean;
      countryId?: string;
      currencyId?: string;
      customerGroupId?: string;
      footerCategoryId?: string;
      hreflangActive?: boolean;
      hreflangDefaultDomainId?: string;
      languageId?: string;
      mailHeaderFooterId?: string;
      maintenance?: boolean;
      maintenanceIpWhitelist?: string;
      name?: string;
      /** Format: int32 */
      navigationCategoryDepth?: number;
      navigationCategoryId?: string;
      paymentMethodId?: string;
      serviceCategoryId?: string;
      shippingMethodId?: string;
      shortName?: string;
      typeId?: string;
    }[];
    salesChannels?: {
      accessKey?: string;
      active?: boolean;
      countryId?: string;
      currencyId?: string;
      customerGroupId?: string;
      footerCategoryId?: string;
      hreflangActive?: boolean;
      hreflangDefaultDomainId?: string;
      languageId?: string;
      mailHeaderFooterId?: string;
      maintenance?: boolean;
      maintenanceIpWhitelist?: string;
      name?: string;
      /** Format: int32 */
      navigationCategoryDepth?: number;
      navigationCategoryId?: string;
      paymentMethodId?: string;
      serviceCategoryId?: string;
      shippingMethodId?: string;
      shortName?: string;
      typeId?: string;
    }[];
    tags?: {
      name?: string;
    }[];
    translations?: {
      description?: string;
      name?: string;
      shippingMethodId?: string;
    }[];
  }[];
  ShippingMethodPrice: {
    /** Format: int64 */
    calculation?: number;
    calculationRuleId?: string;
    /** Format: date-time */
    createdAt: string;
    currencyPrice?: GenericRecord;
    customFields?: GenericRecord;
    id?: string;
    /** Format: float */
    quantityEnd?: number;
    /** Format: float */
    quantityStart?: number;
    ruleId?: string;
    shippingMethodId: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Sitemap: components["schemas"]["ArrayStruct"] & {
    /** Format: date-time */
    created: string; // TODO: [OpenAPI][Sitemap] created field should be defined as required
    filename: string; // TODO: [OpenAPI][Sitemap] filename field should be defined as required
  };
  Snippet: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    setId: string;
    translationKey: string;
    /** Format: date-time */
    updatedAt?: string;
    value: string;
  };
  SnippetSet: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    iso: string;
    name: string;
    snippets?: components["schemas"]["Snippet"][];
    /** Format: date-time */
    updatedAt?: string;
  };
  StateForAll: {
    accessibleFrom?: string | null;
    accessibleTo?: string | null;
    /** @default false */
    allowUserActionsForGuide?: boolean;
    /** @enum {string} */
    appointmentMode?: "guided" | "self";
    attendeeRestrictionType?: ("open" | "customer" | "rules") | null;
    /** @default false */
    broadcastMode?: boolean;
    currentDynamicPage?: components["schemas"]["DynamicPageOpenedPayload"];
    currentGuideProductId?: string | null;
    currentPageId?: string | null;
    currentSectionId?: string | null;
    /** @default 0 */
    currentSlideAlias?: number;
    /** @default false */
    ended?: boolean;
    endedAt?: string | null;
    /** @default [] */
    extensions?: unknown[];
    lastActiveGuideSection?: string | null;
    productDetailDefaultPageId?: string | null;
    productListingDefaultPageId?: string | null;
    quickviewPageId?: string | null;
    /** @default false */
    running?: boolean;
    /** @default false */
    started?: boolean;
    startedAt?: string | null;
    /**
     * @default none
     * @enum {string}
     */
    videoAudioSettings?: "both" | "none" | "audio-only";
    /** @default */
    videoRoomUrl?: string;
  };
  StateForClients: {
    /** @default [] */
    extensions?: unknown[];
    hoveredElementId?: string | null;
    videoClientToken?: string | null;
  };
  StateForMe: {
    attendeeName?: string | null;
    attendeeSubmittedAt?: string | null;
    /** @default [] */
    extensions?: unknown[];
    /** @default null */
    guideCartPermissionsGranted?: boolean;
  };
  StateMachine: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    states?: components["schemas"]["StateMachineState"][];
    transitions?: components["schemas"]["StateMachineTransition"][];
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  StateMachineHistory: {
    /** Format: date-time */
    createdAt: string;
    fromStateMachineState?: components["schemas"]["StateMachineState"];
    id?: string;
    toStateMachineState?: components["schemas"]["StateMachineState"];
    /** Format: date-time */
    updatedAt?: string;
  };
  StateMachineState: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    technicalName: string;
    translated?: {
      name?: string;
      technicalName?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  StateMachineTransition: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Struct: {
    /** Alias which can be used to restrict response fields. For more information see [includes](https://shopware.stoplight.io/docs/store-api/docs/concepts/search-queries.md#includes-apialias). */
    apiAlias?: string;
  };
  Subscription: {
    addresses?: components["schemas"]["SubscriptionAddress"][];
    billingAddress?: components["schemas"]["SubscriptionAddress"];
    billingAddressId: string;
    convertedOrder: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    cronInterval: string;
    currency?: components["schemas"]["Currency"];
    currencyId: string;
    customFields?: GenericRecord;
    dateInterval: string;
    id?: string;
    /** Format: int64 */
    initialExecutionCount: number;
    language?: components["schemas"]["Language"];
    languageId: string;
    /** Format: date-time */
    nextSchedule: string;
    orders?: components["schemas"]["Order"][];
    paymentMethod?: components["schemas"]["PaymentMethod"];
    paymentMethodId: string;
    /** Format: int64 */
    remainingExecutionCount: number;
    salesChannelId: string;
    shippingAddress?: components["schemas"]["SubscriptionAddress"];
    shippingAddressId: string;
    shippingMethod?: components["schemas"]["ShippingMethod"];
    shippingMethodId: string;
    stateMachineState?: components["schemas"]["StateMachineState"];
    subscriptionCustomer?: components["schemas"]["SubscriptionCustomer"];
    subscriptionInterval?: components["schemas"]["SubscriptionInterval"];
    subscriptionIntervalId?: string;
    subscriptionIntervalName: string;
    subscriptionNumber: string;
    subscriptionPlan?: components["schemas"]["SubscriptionPlan"];
    subscriptionPlanId?: string;
    subscriptionPlanName: string;
    tags?: components["schemas"]["Tag"][];
    /** Format: date-time */
    updatedAt?: string;
  };
  SubscriptionAddress: {
    additionalAddressLine1?: string;
    additionalAddressLine2?: string;
    billingSubscription?: components["schemas"]["Subscription"];
    city: string;
    company?: string;
    country?: components["schemas"]["Country"];
    countryId: string;
    countryState?: components["schemas"]["CountryState"];
    countryStateId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    department?: string;
    firstName: string;
    id?: string;
    lastName: string;
    phoneNumber?: string;
    salutation?: components["schemas"]["Salutation"];
    salutationId?: string;
    shippingSubscription?: components["schemas"]["Subscription"];
    street: string;
    subscription?: components["schemas"]["Subscription"];
    subscriptionId: string;
    title?: string;
    /** Format: date-time */
    updatedAt?: string;
    vatId?: string;
    zipcode?: string;
  };
  SubscriptionCustomer: {
    company?: string;
    /** Format: date-time */
    createdAt: string;
    customerId?: string;
    customerNumber?: string;
    customFields?: GenericRecord;
    email: string;
    firstName: string;
    id?: string;
    lastName: string;
    salutation?: components["schemas"]["Salutation"];
    salutationId: string;
    title?: string;
    /** Format: date-time */
    updatedAt?: string;
    vatIds?: string[];
  };
  SubscriptionInterval: {
    active: boolean;
    availabilityRuleId?: string;
    /** Format: date-time */
    createdAt: string;
    cronInterval: string;
    dateInterval: string;
    id?: string;
    name: string;
    subscriptions?: components["schemas"]["Subscription"][];
    translated?: {
      availabilityRuleId?: string;
      cronInterval?: string;
      dateInterval?: string;
      name?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  SubscriptionPlan: {
    active: boolean;
    activeStorefrontLabel: boolean;
    availabilityRuleId?: string;
    /** Format: date-time */
    createdAt: string;
    description?: string;
    /** Format: float */
    discountPercentage?: number;
    discountPrice?: GenericRecord;
    id?: string;
    label?: string;
    /** Format: int64 */
    minimumExecutionCount?: number;
    name: string;
    subscriptions?: components["schemas"]["Subscription"][];
    translated?: {
      availabilityRuleId?: string;
      description?: string;
      label?: string;
      name?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  SubscriptionPlanIntervalMapping: {
    id?: string;
    subscriptionInterval?: components["schemas"]["SubscriptionInterval"];
    subscriptionIntervalId: string;
    subscriptionPlan?: components["schemas"]["SubscriptionPlan"];
    subscriptionPlanId: string;
  };
  SubscriptionPlanJsonApi: components["schemas"]["resource"] & {
    active: boolean;
    activeStorefrontLabel: boolean;
    availabilityRuleId?: string;
    /** Format: date-time */
    createdAt: string;
    description?: string;
    /** Format: float */
    discountPercentage?: number;
    discountPrice?: GenericRecord;
    id?: string;
    label?: string;
    /** Format: int64 */
    minimumExecutionCount?: number;
    name: string;
    relationships?: {
      subscriptions?: {
        data?: {
          /** @example 2d5d14f95af035cbd8437948de61f94c */
          id?: string;
          /** @example subscription */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /subscription-plan/5e63f9057837020694081b9412211bfb/subscriptions
           */
          related?: string;
        };
      };
    };
    translated?: {
      availabilityRuleId?: string;
      description?: string;
      label?: string;
      name?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  SubscriptionPlanProductMapping: {
    id?: string;
    product?: components["schemas"]["Product"];
    productId: string;
    productVersionId?: string;
    subscriptionPlan?: components["schemas"]["SubscriptionPlan"];
    subscriptionPlanId: string;
  };
  SubscriptionTagMapping: {
    id?: string;
    subscription?: components["schemas"]["Subscription"];
    subscriptionId: string;
    tag?: components["schemas"]["Tag"];
    tagId: string;
  };
  SuccessResponse: {
    success?: boolean;
  };
  SwagCmsExtensionsBlockRule: {
    cmsBlock?: components["schemas"]["CmsBlock"];
    cmsBlockId: string;
    cmsBlockVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    id?: string;
    inverted?: boolean;
    /** Format: date-time */
    updatedAt?: string;
    visibilityRule?: components["schemas"]["Rule"];
    visibilityRuleId?: string;
  };
  SwagCmsExtensionsForm: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagCmsExtensionsFormGroup: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagCmsExtensionsFormGroupField: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagCmsExtensionsQuickview: {
    active?: boolean;
    cmsBlock?: components["schemas"]["CmsBlock"];
    cmsBlockId?: string;
    cmsBlockVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagCmsExtensionsScrollNavigation: {
    active?: boolean;
    cmsSection?: components["schemas"]["CmsSection"];
    cmsSectionId?: string;
    cmsSectionVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    displayName?: string;
    id?: string;
    translated?: {
      cmsSectionId?: string;
      cmsSectionVersionId?: string;
      displayName?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagCmsExtensionsScrollNavigationPageSettings: {
    active: boolean;
    bouncy: boolean;
    cmsPage?: components["schemas"]["CmsPage"];
    cmsPageId?: string;
    cmsPageVersionId?: string;
    /** Format: date-time */
    createdAt: string;
    /** Format: int64 */
    duration: number;
    easing: string;
    /** Format: int64 */
    easingDegree: number;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagCustomizedProductsTemplate: {
    active?: boolean;
    configurations?: components["schemas"]["SwagCustomizedProductsTemplateConfiguration"][];
    confirmInput?: boolean;
    /** Format: date-time */
    createdAt: string;
    decisionTree?: GenericRecord;
    description?: string;
    displayName: string;
    exclusions?: components["schemas"]["SwagCustomizedProductsTemplateExclusion"][];
    id?: string;
    internalName: string;
    media?: components["schemas"]["Media"];
    mediaId?: string;
    options?: components["schemas"]["SwagCustomizedProductsTemplateOption"][];
    optionsAutoCollapse?: boolean;
    parentVersionId?: string;
    products?: components["schemas"]["Product"][];
    stepByStep?: boolean;
    translated?: {
      description?: string;
      displayName?: string;
      internalName?: string;
      mediaId?: string;
      parentVersionId?: string;
      versionId?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  SwagCustomizedProductsTemplateConfiguration: {
    configuration: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    hash: string;
    id?: string;
    template?: components["schemas"]["SwagCustomizedProductsTemplate"];
    templateConfigurationShares?: components["schemas"]["SwagCustomizedProductsTemplateConfigurationShare"][];
    templateId: string;
    templateVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  SwagCustomizedProductsTemplateConfigurationJsonApi: components["schemas"]["resource"] & {
    configuration: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    hash: string;
    id?: string;
    relationships?: {
      template?: {
        data?: {
          /** @example 66f6181bcb4cff4cd38fbc804a036db6 */
          id?: string;
          /** @example swag_customized_products_template */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-configuration/ab78fa5f6df63876a7c6575bdf517fe2/template
           */
          related?: string;
        };
      };
      templateConfigurationShares?: {
        data?: {
          /** @example 81a31c81fde24f296e176502d32baa6d */
          id?: string;
          /** @example swag_customized_products_template_configuration_share */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-configuration/ab78fa5f6df63876a7c6575bdf517fe2/templateConfigurationShares
           */
          related?: string;
        };
      };
    };
    templateId: string;
    templateVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  SwagCustomizedProductsTemplateConfigurationShare: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagCustomizedProductsTemplateExclusion: {
    conditions?: components["schemas"]["SwagCustomizedProductsTemplateExclusionCondition"][];
    /** Format: date-time */
    createdAt: string;
    id?: string;
    name: string;
    template?: components["schemas"]["SwagCustomizedProductsTemplate"];
    templateId: string;
    templateVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  SwagCustomizedProductsTemplateExclusionCondition: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    templateExclusion?: components["schemas"]["SwagCustomizedProductsTemplateExclusion"];
    templateExclusionId: string;
    templateExclusionOperator?: components["schemas"]["SwagCustomizedProductsTemplateExclusionOperator"];
    templateExclusionOperatorId: string;
    templateExclusionVersionId?: string;
    templateOption?: components["schemas"]["SwagCustomizedProductsTemplateOption"];
    templateOptionId: string;
    templateOptionValues?: components["schemas"]["SwagCustomizedProductsTemplateOptionValue"][];
    templateOptionVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  SwagCustomizedProductsTemplateExclusionOperator: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    label: string;
    operator: string;
    templateExclusionConditions?: components["schemas"]["SwagCustomizedProductsTemplateExclusionCondition"][];
    templateOptionType: string;
    translated?: {
      label?: string;
      operator?: string;
      templateOptionType?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagCustomizedProductsTemplateJsonApi: components["schemas"]["resource"] & {
    active?: boolean;
    confirmInput?: boolean;
    /** Format: date-time */
    createdAt: string;
    decisionTree?: GenericRecord;
    description?: string;
    displayName: string;
    id?: string;
    internalName: string;
    mediaId?: string;
    optionsAutoCollapse?: boolean;
    parentVersionId?: string;
    relationships?: {
      configurations?: {
        data?: {
          /** @example 86f23519571eb918e8812e1979d55409 */
          id?: string;
          /** @example swag_customized_products_template_configuration */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template/4751e4cb483e992aa073494b9cfa9be6/configurations
           */
          related?: string;
        };
      };
      exclusions?: {
        data?: {
          /** @example c6fc0a7508c1a1fe9e233e81d31133b8 */
          id?: string;
          /** @example swag_customized_products_template_exclusion */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template/4751e4cb483e992aa073494b9cfa9be6/exclusions
           */
          related?: string;
        };
      };
      media?: {
        data?: {
          /** @example 62933a2951ef01f4eafd9bdf4d3cd2f0 */
          id?: string;
          /** @example media */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template/4751e4cb483e992aa073494b9cfa9be6/media
           */
          related?: string;
        };
      };
      options?: {
        data?: {
          /** @example 93da65a9fd0004d9477aeac024e08e15 */
          id?: string;
          /** @example swag_customized_products_template_option */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template/4751e4cb483e992aa073494b9cfa9be6/options
           */
          related?: string;
        };
      };
      products?: {
        data?: {
          /** @example 86024cad1e83101d97359d7351051156 */
          id?: string;
          /** @example product */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template/4751e4cb483e992aa073494b9cfa9be6/products
           */
          related?: string;
        };
      };
    };
    stepByStep?: boolean;
    translated?: {
      description?: string;
      displayName?: string;
      internalName?: string;
      mediaId?: string;
      parentVersionId?: string;
      versionId?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  SwagCustomizedProductsTemplateOption: {
    advancedSurcharge?: boolean;
    calculatedPrice?: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    description?: string;
    displayName: string;
    id?: string;
    itemNumber?: string;
    oneTimeSurcharge?: boolean;
    /** Format: float */
    percentageSurcharge?: number;
    placeholder?: string;
    /** Format: int64 */
    position?: number;
    price?: GenericRecord;
    prices?: components["schemas"]["SwagCustomizedProductsTemplateOptionPrice"][];
    relativeSurcharge?: boolean;
    required?: boolean;
    tax?: components["schemas"]["Tax"];
    taxId?: string;
    template?: components["schemas"]["SwagCustomizedProductsTemplate"];
    templateExclusionConditions?: components["schemas"]["SwagCustomizedProductsTemplateExclusionCondition"][];
    templateId: string;
    templateVersionId?: string;
    translated?: {
      description?: string;
      displayName?: string;
      itemNumber?: string;
      placeholder?: string;
      taxId?: string;
      templateId?: string;
      templateVersionId?: string;
      type?: string;
    };
    type: string;
    typeProperties?: GenericRecord;
    /** Format: date-time */
    updatedAt?: string;
    values?: components["schemas"]["SwagCustomizedProductsTemplateOptionValue"][];
  };
  SwagCustomizedProductsTemplateOptionJsonApi: components["schemas"]["resource"] & {
    advancedSurcharge?: boolean;
    calculatedPrice?: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    description?: string;
    displayName: string;
    id?: string;
    itemNumber?: string;
    oneTimeSurcharge?: boolean;
    /** Format: float */
    percentageSurcharge?: number;
    placeholder?: string;
    /** Format: int64 */
    position?: number;
    price?: GenericRecord;
    relationships?: {
      prices?: {
        data?: {
          /** @example afae32efe0f84fece3f96b377b768b33 */
          id?: string;
          /** @example swag_customized_products_template_option_price */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-option/6342f0c20b443cb5408ec0fc12430bcb/prices
           */
          related?: string;
        };
      };
      tax?: {
        data?: {
          /** @example 06565e5611f23fdf8cc43e5077b92b54 */
          id?: string;
          /** @example tax */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-option/6342f0c20b443cb5408ec0fc12430bcb/tax
           */
          related?: string;
        };
      };
      template?: {
        data?: {
          /** @example 66f6181bcb4cff4cd38fbc804a036db6 */
          id?: string;
          /** @example swag_customized_products_template */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-option/6342f0c20b443cb5408ec0fc12430bcb/template
           */
          related?: string;
        };
      };
      templateExclusionConditions?: {
        data?: {
          /** @example 57e853a74b92e339ec2e302b015e60f3 */
          id?: string;
          /** @example swag_customized_products_template_exclusion_condition */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-option/6342f0c20b443cb5408ec0fc12430bcb/templateExclusionConditions
           */
          related?: string;
        };
      };
      values?: {
        data?: {
          /** @example f09cc7ee3a9a93273f4b80601cafb00c */
          id?: string;
          /** @example swag_customized_products_template_option_value */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-option/6342f0c20b443cb5408ec0fc12430bcb/values
           */
          related?: string;
        };
      };
    };
    relativeSurcharge?: boolean;
    required?: boolean;
    taxId?: string;
    templateId: string;
    templateVersionId?: string;
    translated?: {
      description?: string;
      displayName?: string;
      itemNumber?: string;
      placeholder?: string;
      taxId?: string;
      templateId?: string;
      templateVersionId?: string;
      type?: string;
    };
    type: string;
    typeProperties?: GenericRecord;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagCustomizedProductsTemplateOptionPrice: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: float */
    percentageSurcharge?: number;
    price?: GenericRecord;
    rule?: components["schemas"]["Rule"];
    ruleId?: string;
    templateOption?: components["schemas"]["SwagCustomizedProductsTemplateOption"];
    templateOptionId: string;
    templateOptionVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  SwagCustomizedProductsTemplateOptionValue: {
    advancedSurcharge?: boolean;
    /** Format: date-time */
    createdAt: string;
    default?: boolean;
    displayName: string;
    id?: string;
    itemNumber?: string;
    oneTimeSurcharge?: boolean;
    /** Format: float */
    percentageSurcharge?: number;
    /** Format: int64 */
    position: number;
    price?: GenericRecord;
    prices?: components["schemas"]["SwagCustomizedProductsTemplateOptionValuePrice"][];
    relativeSurcharge?: boolean;
    tax?: components["schemas"]["Tax"];
    taxId?: string;
    templateExclusionConditions?: components["schemas"]["SwagCustomizedProductsTemplateExclusionCondition"][];
    templateOption?: components["schemas"]["SwagCustomizedProductsTemplateOption"];
    templateOptionId: string;
    templateOptionVersionId?: string;
    translated?: {
      displayName?: string;
      itemNumber?: string;
      taxId?: string;
      templateOptionId?: string;
      templateOptionVersionId?: string;
      versionId?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    value?: GenericRecord;
    versionId?: string;
  };
  SwagCustomizedProductsTemplateOptionValueJsonApi: components["schemas"]["resource"] & {
    advancedSurcharge?: boolean;
    /** Format: date-time */
    createdAt: string;
    default?: boolean;
    displayName: string;
    id?: string;
    itemNumber?: string;
    oneTimeSurcharge?: boolean;
    /** Format: float */
    percentageSurcharge?: number;
    /** Format: int64 */
    position: number;
    price?: GenericRecord;
    relationships?: {
      prices?: {
        data?: {
          /** @example afae32efe0f84fece3f96b377b768b33 */
          id?: string;
          /** @example swag_customized_products_template_option_value_price */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-option-value/b57f26a8362182be3e67a815927b7f37/prices
           */
          related?: string;
        };
      };
      tax?: {
        data?: {
          /** @example 06565e5611f23fdf8cc43e5077b92b54 */
          id?: string;
          /** @example tax */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-option-value/b57f26a8362182be3e67a815927b7f37/tax
           */
          related?: string;
        };
      };
      templateExclusionConditions?: {
        data?: {
          /** @example 57e853a74b92e339ec2e302b015e60f3 */
          id?: string;
          /** @example swag_customized_products_template_exclusion_condition */
          type?: string;
        }[];
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-option-value/b57f26a8362182be3e67a815927b7f37/templateExclusionConditions
           */
          related?: string;
        };
      };
      templateOption?: {
        data?: {
          /** @example 6891a002a90a39e71e67c4fc148db8df */
          id?: string;
          /** @example swag_customized_products_template_option */
          type?: string;
        };
        links?: {
          /**
           * Format: uri-reference
           * @example /swag-customized-products-template-option-value/b57f26a8362182be3e67a815927b7f37/templateOption
           */
          related?: string;
        };
      };
    };
    relativeSurcharge?: boolean;
    taxId?: string;
    templateOptionId: string;
    templateOptionVersionId?: string;
    translated?: {
      displayName?: string;
      itemNumber?: string;
      taxId?: string;
      templateOptionId?: string;
      templateOptionVersionId?: string;
      versionId?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
    value?: GenericRecord;
    versionId?: string;
  };
  SwagCustomizedProductsTemplateOptionValuePrice: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: float */
    percentageSurcharge?: number;
    price?: GenericRecord;
    rule?: components["schemas"]["Rule"];
    ruleId?: string;
    templateOptionValue?: components["schemas"]["SwagCustomizedProductsTemplateOptionValue"];
    templateOptionValueId: string;
    templateOptionValueVersionId?: string;
    /** Format: date-time */
    updatedAt?: string;
    versionId?: string;
  };
  SwagDelayAction: {
    /** Format: date-time */
    createdAt: string;
    customerId?: string;
    id?: string;
    orderId?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagDynamicAccessLandingPageRule: {
    id?: string;
    landingPage?: components["schemas"]["LandingPage"];
    landingPageId: string;
    landingPageVersionId?: string;
    rule?: components["schemas"]["Rule"];
    ruleId: string;
  };
  SwagDynamicAccessProductRule: {
    id?: string;
    product?: components["schemas"]["Product"];
    productId: string;
    productVersionId?: string;
    rule?: components["schemas"]["Rule"];
    ruleId: string;
  };
  SwagLanguagePackLanguage: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagMigrationConnection: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagMigrationData: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagMigrationGeneralSetting: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagMigrationLogging: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagMigrationMapping: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagMigrationMediaFile: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagMigrationRun: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagPaypalPosSalesChannel: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagPaypalPosSalesChannelRun: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagPaypalPosSalesChannelRunLog: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagSocialShoppingCustomer: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagSocialShoppingOrder: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagSocialShoppingProductError: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SwagSocialShoppingSalesChannel: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  SystemConfig: {
    configurationKey: string;
    configurationValue: {
      _value?: GenericRecord;
    };
    /** Format: date-time */
    createdAt: string;
    id?: string;
    salesChannel?: components["schemas"]["SalesChannel"];
    salesChannelId?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Tag: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    name: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Tax: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    /**
     * Format: int64
     * Added since version: 6.4.0.0.
     */
    position: number;
    /** Format: float */
    taxRate: number;
    /** Format: date-time */
    updatedAt?: string;
  };
  TaxProvider: {
    active?: boolean;
    appId?: string;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    /** Format: int64 */
    priority: number;
    processUrl?: string;
    translated?: {
      appId?: string;
      name?: string;
      processUrl?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  TaxRule: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  TaxRuleType: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    translated?: Record<string, never>;
    /** Format: date-time */
    updatedAt?: string;
  };
  Theme: {
    active: boolean;
    author: string;
    baseConfig?: GenericRecord;
    configValues?: GenericRecord;
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    description?: string;
    helpTexts?: GenericRecord;
    id?: string;
    labels?: GenericRecord;
    media?: components["schemas"]["Media"][];
    name: string;
    parentThemeId?: string;
    previewMediaId?: string;
    technicalName?: string;
    translated?: {
      author?: string;
      description?: string;
      name?: string;
      parentThemeId?: string;
      previewMediaId?: string;
      technicalName?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  ToggleBroadcastModePayload: {
    /** Status if the mode is toggled to active or inactive */
    active: boolean;
  };
  Unit: {
    /** Format: date-time */
    createdAt: string;
    customFields?: GenericRecord;
    id?: string;
    name: string;
    shortCode: string;
    translated?: {
      name?: string;
      shortCode?: string;
    };
    /** Format: date-time */
    updatedAt?: string;
  };
  UpdateAttendeeRequestBody: {
    /** Name of the attendee */
    attendeeName: string;
    /** The first time the attendee submit the update form */
    attendeeSubmitted: boolean;
    /** The permission for guide cart actions */
    guideCartPermissionsGranted: boolean;
    /** Id of the attendee in the video chat tool */
    videoUserId: string;
  };
  User: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  UserAccessKey: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  UserConfig: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  UserRecovery: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Warehouse: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  WarehouseGroup: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  Webhook: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  WebhookEventLog: {
    /** Format: date-time */
    createdAt: string;
    id?: string;
    /** Format: date-time */
    updatedAt?: string;
  };
  WishlistLoadRouteResponse: {
    products: components["schemas"]["ProductListingResult"]; // TODO: [OpenAPI][WishlistLoadRouteResponse] - products is listing result, not array
    wishlist?: {
      customerId?: string;
      salesChannelId?: string;
    };
  };
  attributes: GenericRecord;
  data: components["schemas"]["resource"] | components["schemas"]["resource"][];
  error: {
    /** An application-specific error code, expressed as a string value. */
    code?: string;
    /** A human-readable description of the problem. */
    description?: string;
    /** A human-readable explanation specific to this occurrence of the problem. */
    detail?: string;
    /** A unique identifier for this particular occurrence of the problem. */
    id?: string;
    links?: components["schemas"]["links"];
    meta?: components["schemas"]["meta"];
    source?: {
      /** A string indicating which query parameter caused the error. */
      parameter?: string;
      /** A JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, or "/data/attributes/title" for a specific attribute]. */
      pointer?: string;
    };
    /** The HTTP status code applicable to this problem, expressed as a string value. */
    status?: string;
    /** A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization. */
    title?: string;
  };
  failure: {
    errors: components["schemas"]["error"][];
    links?: components["schemas"]["links"];
    meta?: components["schemas"]["meta"];
  };
  info: {
    jsonapi?: components["schemas"]["jsonapi"];
    links?: components["schemas"]["links"];
    meta: components["schemas"]["meta"];
  };
  jsonapi: {
    meta?: components["schemas"]["meta"];
    version?: string;
  };
  link: OneOf<
    [
      string,
      {
        /**
         * Format: uri-reference
         * A string containing the link's URL.
         */
        href: string;
        meta?: components["schemas"]["meta"];
      },
    ]
  >;
  linkage: {
    id: string;
    meta?: components["schemas"]["meta"];
    type: string;
  };
  links: GenericRecord;
  meta: GenericRecord;
  pagination: {
    /**
     * Format: uri-reference
     * The first page of data
     */
    first?: string;
    /**
     * Format: uri-reference
     * The last page of data
     */
    last?: string;
    /**
     * Format: uri-reference
     * The next page of data
     */
    next?: string;
    /**
     * Format: uri-reference
     * The previous page of data
     */
    prev?: string;
  };
  relationshipLinks: {
    related?: components["schemas"]["link"];
    self?: GenericRecord[] & components["schemas"]["link"];
    [key: string]: unknown;
  };
  relationshipToMany: components["schemas"]["linkage"][];
  relationshipToOne: components["schemas"]["linkage"];
  relationships: unknown;
  resource: {
    attributes?: components["schemas"]["attributes"];
    id: string;
    links?: components["schemas"]["links"];
    meta?: components["schemas"]["meta"];
    relationships?: components["schemas"]["relationships"];
    type: string;
  };
  success: {
    data: components["schemas"]["data"];
    /** To reduce the number of HTTP requests, servers **MAY** allow responses that include related resources along with the requested primary resources. Such responses are called "compound documents". */
    included?: components["schemas"]["resource"][];
    /** Link members related to the primary data. */
    links?: components["schemas"]["links"] &
      components["schemas"]["pagination"];
    meta?: components["schemas"]["meta"];
  };
};
export type operations = {
  "createCustomerAddress post /account/address": {
    contentType?: "application/json";
    accept?: "application/json";
    body: Omit<
      // TODO: [OpenAPI][createCustomerAddress] - omit id while creating address
      components["schemas"]["CustomerAddress"],
      "id" | "createdAt"
    >;
    response: components["schemas"]["CustomerAddress"];
    responseCode: 200;
  };
  "deleteCustomerAddress delete /account/address/{addressId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** ID of the address to be deleted. */
      addressId: string;
    };
    response: never;
    responseCode: 204;
  };
  "updateCustomerAddress patch /account/address/{addressId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Address ID */
      addressId: string;
    };
    body: components["schemas"]["CustomerAddress"];
    response: components["schemas"]["CustomerAddress"];
    responseCode: 200;
  };
  "defaultBillingAddress patch /account/address/default-billing/{addressId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Address ID */
      addressId: string;
    };
    response: never;
    responseCode: 200;
  };
  "defaultShippingAddress patch /account/address/default-shipping/{addressId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Address ID */
      addressId: string;
    };
    response: never;
    responseCode: 200;
  };
  "changeEmail post /account/change-email": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** New email address. Has to be unique amongst all customers */
      email: string;
      /** Confirmation of the new email address. */
      emailConfirmation: string;
      /** Customer's current password */
      password: string;
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "changeLanguage post /account/change-language": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** New languageId */
      language?: string;
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "changePassword post /account/change-password": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** New Password for the customer */
      newPassword: string;
      /** Confirmation of the new password */
      newPasswordConfirm: string;
      /** Current password of the customer */
      password: string;
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "changePaymentMethod post /account/change-payment-method/{paymentMethodId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the desired default payment method */
      paymentMethodId: string;
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "changeProfile post /account/change-profile": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Birthday day */
      birthdayDay?: number;
      /** Birthday month */
      birthdayMonth?: number;
      /** Birthday year */
      birthdayYear?: number;
      /** Company of the customer. Only required when `accountType` is `business`. */
      company?: string;
      /** Customer first name. Value will be reused for shipping and billing address if not provided explicitly. */
      firstName: string;
      /** Customer last name. Value will be reused for shipping and billing address if not provided explicitly. */
      lastName: string;
      /** Id of the salutation for the customer account. Fetch options using `salutation` endpoint. */
      salutationId: string;
      /** (Academic) title of the customer */
      title?: string;
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "readCustomer post /account/customer": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: components["schemas"]["Customer"];
    responseCode: 200;
  };
  "deleteCustomer delete /account/customer": {
    contentType?: "application/json";
    accept?: "application/json";
    response: never;
    responseCode: 204;
  };
  "getCustomerRecoveryIsExpired post /account/customer-recovery-is-expired": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Parameter from the link in the confirmation mail sent in Step 1 */
      hash: string;
    };
    response: components["schemas"]["ArrayStruct"];
    responseCode: 200;
  };
  "listAddress post /account/list-address": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      // TODO: [OpenAPI][listAddress] add proper response type as EntitySearchResult
      elements: components["schemas"]["CustomerAddress"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "loginCustomer post /account/login": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Password */
      password: string;
      /** Email */
      username: string;
    };
    response: {
      /**
       * @deprecated
       * Deprecated since v6.6.0.0. Please retrieve the context token from the response header instead.
       */
      contextToken?: string;
      /** Define the URL which browser will be redirected to */
      redirectUrl?: string;
    };
    responseCode: 200;
  };
  "logoutCustomer post /account/logout": {
    contentType?: "application/json";
    accept?: "application/json";
    response: {
      /**
       * @deprecated
       * Deprecated since v6.6.0.0. Please retrieve the context token from the response header instead.
       */
      contextToken?: string;
      /** Define the URL which browser will be redirected to */
      redirectUrl?: string;
    };
    responseCode: 200;
  };
  "readNewsletterRecipient post /account/newsletter-recipient": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      // TODO: [OpenAPI][readNewsletterRecipient] return type is not array
      "application/json": components["schemas"]["AccountNewsletterRecipientResult"];
    };
    responseCode: 200;
  };
  "sendRecoveryMail post /account/recovery-password": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** E-Mail address to identify the customer */
      email: string;
      /** URL of the storefront to use for the generated reset link. It has to be a domain that is configured in the sales channel domain settings. */
      storefrontUrl: string;
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "recoveryPassword post /account/recovery-password-confirm": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Parameter from the link in the confirmation mail sent in Step 1 */
      hash: string;
      /** New password for the customer */
      newPassword: string;
      /** Confirmation of the new password */
      newPasswordConfirm: string;
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "register post /account/register": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Flag indicating accepted data protection */
      acceptedDataProtection: boolean;
      /**
       * Account type of the customer which can be either `private` or `business`.
       * @default private
       */
      accountType?: string;
      /** Field can be used to store an affiliate tracking code */
      affiliateCode?: string;
      billingAddress: Omit<
        components["schemas"]["CustomerAddress"],
        "createdAt" | "id" | "customerId" | "firstName" | "lastName"
      >; // TODO: [OpenAPI][register] - omit id, createdAt, customerId, firstName, lastName while creating address (or better to reverse and pick required fields)
      /** Birthday day */
      birthdayDay?: number;
      /** Birthday month */
      birthdayMonth?: number;
      /** Birthday year */
      birthdayYear?: number;
      /** Field can be used to store a campaign tracking code */
      campaignCode?: string;
      /** Email of the customer. Has to be unique, unless `guest` is `true` */
      email: string;
      /** Customer first name. Value will be reused for shipping and billing address if not provided explicitly. */
      firstName: string;
      /**
       * If set, will create a guest customer. Guest customers can re-use an email address and don't need a password.
       * @default false
       */
      guest?: boolean;
      /** Customer last name. Value will be reused for shipping and billing address if not provided explicitly. */
      lastName: string;
      /** Password for the customer. Required, unless `guest` is `true` */
      password: string;
      /** Id of the salutation for the customer account. Fetch options using `salutation` endpoint. */
      salutationId: string;
      shippingAddress?: components["schemas"]["CustomerAddress"];
      /** URL of the storefront for that registration. Used in confirmation emails. Has to be one of the configured domains of the sales channel. */
      storefrontUrl: string;
      /** (Academic) title of the customer */
      title?: string;
    };
    response: components["schemas"]["Customer"];
    responseCode: 200;
  };
  "registerConfirm post /account/register-confirm": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Email hash from the email received */
      em: string;
      /** Hash from the email received */
      hash: string;
    };
    response: never;
    responseCode: 200;
  };
  "generateJWTAppSystemAppServer post /app-system/{name}/generate-token": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Name of the app */
      name: string;
    };
    body: GenericRecord;
    response: {
      /** Format: date-time */
      expires?: string;
      shopId?: string;
      token?: string;
    };
    responseCode: 200;
  };
  "readCategoryList post /category": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["Category"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readCategory post /category/{navigationId}": {
    contentType?: "application/json";
    accept?: "application/json";
    header?: {
      /** Instructs Shopware to try and resolve SEO URLs for the given navigation item */
      "sw-include-seo-urls"?: boolean; // TODO: [OpenAPI][readCategory] - add header to the parameters
    };
    query?: {
      /** Resolves only the given slot identifiers. The identifiers have to be seperated by a '|' character */
      slots?: string;
    };
    path: {
      /** Identifier of the category to be fetched */
      navigationId: string;
    };
    body: components["schemas"]["Criteria"] &
      components["schemas"]["ProductListingCriteria"];
    response: components["schemas"]["Category"];
    responseCode: 200;
  };
  "readCart get /checkout/cart": {
    contentType?: "application/json";
    accept?: "application/json";
    response: components["schemas"]["Cart"];
    responseCode: 200;
  };
  "deleteCart delete /checkout/cart": {
    contentType?: "application/json";
    accept?: "application/json";
    response: components["schemas"]["SuccessResponse"];
    responseCode: 204;
  };
  "addLineItem post /checkout/cart/line-item": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      // TODO: [OpenAPI][addLineItem] - add proper request body type with required fields
      items: Array<{
        id?: string; // TODO: [OpenAPI][addLineItem] - check if this is used at all?
        referencedId: string;
        quantity?: number;
        type: "product" | "promotion" | "custom" | "credit"; // TODO: [OpenAPI][addLineItem] - add proper type -> see also #456
      }>;
    };
    response: components["schemas"]["Cart"];
    responseCode: 200;
  };
  "removeLineItemDeprecated delete /checkout/cart/line-item": {
    contentType?: "application/json";
    accept?: "application/json";
    query: {
      /** A list of product identifiers. */
      ids: string[];
    };
    response: components["schemas"]["Cart"];
    responseCode: 200;
  };
  "updateLineItem patch /checkout/cart/line-item": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      // TODO: [OpenAPI][updateLineItem] - add proper request body type with required fields
      items: Array<{
        id: string;
        quantity: number;
      }>;
    };
    response: components["schemas"]["Cart"];
    responseCode: 200;
  };
  "removeLineItem post /checkout/cart/line-item/delete": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** A list of product identifiers. */
      ids: [string, ...string[]];
    };
    response: components["schemas"]["Cart"];
    responseCode: 200;
  };
  "createOrder post /checkout/order": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** The affiliate code can be used to track which referrer the customer came through. An example could be `Price-comparison-company-XY`. */
      affiliateCode?: string;
      /** The campaign code is used to track which action the customer came from. An example could be `Summer-Deals` */
      campaignCode?: string;
      /** Adds a comment from the customer to the order. */
      customerComment?: string;
    };
    response: components["schemas"]["Order"];
    responseCode: 200;
  };
  "readCms post /cms/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the CMS page to be resolved */
      id: string;
    };
    body: {
      /** Resolves only the given slot identifiers. The identifiers have to be seperated by a `|` character. */
      slots?: string;
    } & components["schemas"]["ProductListingCriteria"];
    response: components["schemas"]["CmsPage"];
    responseCode: 200;
  };
  "sendContactMail post /contact-form": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Type of the content management page */
      cmsPageType?: string;
      /** The message of the contact form */
      comment: string;
      /** Email address */
      email: string;
      /** Entity name for slot config */
      entityName?: string;
      /** Firstname. This field may be required depending on the system settings. */
      firstName?: string;
      /** Lastname. This field may be required depending on the system settings. */
      lastName?: string;
      /**
       * Identifier of the navigation page. Can be used to override the configuration.
       * Take a look at the settings of a category containing a concact form in the administration.
       */
      navigationId?: string;
      /** Phone. This field may be required depending on the system settings. */
      phone?: string;
      /** Identifier of the salutation. Use `/api/salutation` endpoint to fetch possible values. */
      salutationId: string;
      /** Identifier of the cms element */
      slotId?: string;
      /** The subject of the contact form. */
      subject: string;
    };
    response: never;
    responseCode: 200;
  };
  "readContext get /context": {
    contentType?: "application/json";
    accept?: "application/json";
    response: components["schemas"]["SalesChannelContext"];
    responseCode: 200;
  };
  "updateContext patch /context":
    | {
        contentType?: "application/json";
        accept?: "application/json";
        body: {
          /** Billing Address */
          billingAddressId?: string;
          /** Country */
          countryId?: string;
          /** Country State */
          countryStateId?: string;
          /** Currency */
          currencyId?: string;
          /** Language */
          languageId?: string;
          /** Payment Method */
          paymentMethodId?: string;
          /** Shipping Address */
          shippingAddressId?: string;
          /** Shipping Method */
          shippingMethodId?: string;
        };
        response: {
          /**
           * @deprecated
           * Deprecated since v6.6.0.0. Please retrieve the context token from the response header instead.
           */
          contextToken?: string;
          /** Define the URL which browser will be redirected to */
          redirectUrl?: string;
        };
        responseCode: 200;
      }
    | {
        contentType?: "application/json";
        accept?: "application/json";
        body: {
          /** Billing Address */
          billingAddressId?: string;
          /** Country */
          countryId?: string;
          /** Country State */
          countryStateId?: string;
          /** Currency */
          currencyId?: string;
          /** Language */
          languageId?: string;
          /** Payment Method */
          paymentMethodId?: string;
          /** Shipping Address */
          shippingAddressId?: string;
          /** Shipping Method */
          shippingMethodId?: string;
        };
        response: components["schemas"]["CrossSellingElementCollection"];
        responseCode: 201;
      }
    | {
        contentType?: "application/json";
        accept: "application/xml";
        body: {
          /** Billing Address */
          billingAddressId?: string;
          /** Country */
          countryId?: string;
          /** Country State */
          countryStateId?: string;
          /** Currency */
          currencyId?: string;
          /** Language */
          languageId?: string;
          /** Payment Method */
          paymentMethodId?: string;
          /** Shipping Address */
          shippingAddressId?: string;
          /** Shipping Method */
          shippingMethodId?: string;
        };
        response: components["schemas"]["PaymentMethod"];
        responseCode: 201;
      }
    | {
        contentType: "application/xml";
        accept?: "application/json";
        body: {
          /** Currency */
          currencyXmlId?: string;
        };
        response: {
          /**
           * @deprecated
           * Deprecated since v6.6.0.0. Please retrieve the context token from the response header instead.
           */
          contextToken?: string;
          /** Define the URL which browser will be redirected to */
          redirectUrl?: string;
        };
        responseCode: 200;
      }
    | {
        contentType: "application/xml";
        accept?: "application/json";
        body: {
          /** Currency */
          currencyXmlId?: string;
        };
        response: components["schemas"]["CrossSellingElementCollection"];
        responseCode: 201;
      }
    | {
        contentType: "application/xml";
        accept: "application/xml";
        body: {
          /** Currency */
          currencyXmlId?: string;
        };
        response: components["schemas"]["PaymentMethod"];
        responseCode: 201;
      };
  "readCountry post /country": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["Country"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readCountryState post /country-state/{countryId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      countryId: string;
    };
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["CountryState"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readCurrency post /currency": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["Currency"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "getCustomerGroupRegistrationInfo get /customer-group-registration/config/{customerGroupId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Customer group id */
      customerGroupId: string;
    };
    response: components["schemas"]["CustomerGroup"];
    responseCode: 200;
  };
  "readCustomerWishlist post /customer/wishlist": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: components["schemas"]["WishlistLoadRouteResponse"];
    responseCode: 200;
  };
  "addProductOnWishlist post /customer/wishlist/add/{productId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the product to be added. */
      productId: string;
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "deleteProductOnWishlist delete /customer/wishlist/delete/{productId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** The identifier of the product to be removed from the wishlist. */
      productId: string;
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "mergeProductOnWishlist post /customer/wishlist/merge": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** List product id */
      productIds?: string[];
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "download post /document/download/{documentId}/{deepLinkCode}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      documentId: string;
      deepLinkCode: string;
    };
    body: components["schemas"]["Criteria"];
    response: components["schemas"]["Document"];
    responseCode: 200;
  };
  "guidedShoppingLoadAllProductIds post /guided-shopping/all-product-ids": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      ids?: string[];
      total?: number;
    };
    responseCode: 200;
  };
  "attendeeRespondInvitation patch /guided-shopping/appointment/{appointmentId}/attendee/respond-invitation": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** The appointment id you respond to */
      appointmentId: string;
    };
    body: {
      /**
       * The status you respond to
       * @enum {string}
       */
      invitationStatus?: "accepted" | "maybe" | "declined";
      /** The token will be attached to the invitation response link in the invitation mail */
      token: string;
    };
    response: components["schemas"]["AttendeeRespondInvitationResponse"];
    responseCode: 200;
  };
  "getCalendarFile post /guided-shopping/appointment/{appointmentId}/download-ics": {
    contentType?: "application/json";
    accept: "text/calendar";
    pathParams: {
      /** The appointment id you want to get the calendar file */
      appointmentId: string;
    };
    body: {
      /** The token will be attached to the invitation response link in the invitation mail */
      token: string;
    };
    response: unknown;
    responseCode: 200;
  };
  "joinAppointmentAsClient post /guided-shopping/appointment/{presentationPath}/join-as-client": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Presentation path */
      presentationPath: string;
    };
    response: components["schemas"]["JoinAppointmentResponse"];
    responseCode: 200;
  };
  "updateAttendee patch /guided-shopping/appointment/attendee": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["UpdateAttendeeRequestBody"];
    response: never;
    responseCode: 204;
  };
  "getAttendeeProductCollection get /guided-shopping/appointment/collection/{alias}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** The alias of collection you want to get */
      alias: "liked" | "disliked";
    };
    response: components["schemas"]["AttendeeProductCollectionResponse"];
    responseCode: 200;
  };
  "attendeeProductCollectionAddProduct post /guided-shopping/appointment/collection/{alias}/{productId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** The alias of collection you want to add */
      alias: "liked" | "disliked";
      /** The product id you want to add */
      productId: string;
    };
    response: never;
    responseCode: 204;
  };
  "attendeeProductCollectionRemoveProduct delete /guided-shopping/appointment/collection/{alias}/{productId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** The alias of collection you want to remove */
      alias: "liked" | "disliked";
      /** The product id you want to remove */
      productId: string;
    };
    response: never;
    responseCode: 204;
  };
  "getLastSeenProducts get /guided-shopping/appointment/collection/last-seen": {
    contentType?: "application/json";
    accept?: "application/json";
    response: components["schemas"]["AttendeeProductCollectionLastSeenResponse"];
    responseCode: 200;
  };
  "getPresentationStructure get /guided-shopping/appointment/presentation": {
    contentType?: "application/json";
    accept?: "application/json";
    response: components["schemas"]["PresentationStructure"];
    responseCode: 200;
  };
  "getSlideData get /guided-shopping/appointment/presentation/{presentationCmsPageId}/slide/{sectionId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Presentation CMS page id for which the data is requested */
      presentationCmsPageId: string;
      /** CMS section id for which the data is requested */
      sectionId: string;
    };
    response: components["schemas"]["PresentationSlideData"];
    responseCode: 200;
  };
  "getClientPresentationState get /guided-shopping/appointment/presentation/state": {
    contentType?: "application/json";
    accept?: "application/json";
    response: components["schemas"]["ClientPresentationStateResponse"];
    responseCode: 200;
  };
  "addInteraction post /guided-shopping/interaction": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["CreateInteractionRequestBody"];
    response: never;
    responseCode: 200;
  };
  "guidedShoppingProductListing post /guided-shopping/product-listing": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"] & {
      /**
       * Load interaction (like & dislike) to product of attendee. It will be added into product extensions named interaction
       * @default false
       */
      interaction?: boolean;
    };
    response: {
      elements?: components["schemas"]["Product"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "resolveQuickviewPage get /guided-shopping/quickview/{productId}/{cmsPageLayoutId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** The product id */
      productId: string;
      /** The cms page id using as product quick view */
      cmsPageLayoutId: string;
    };
    response: {
      cmsPage?: components["schemas"]["CmsPage"];
      configurator?: components["schemas"]["PropertyGroup"][];
      product?: components["schemas"]["Product"];
    };
    responseCode: 200;
  };
  "handlePaymentMethod post /handle-payment": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** URL to which the client should be redirected after erroneous payment */
      errorUrl?: string;
      /** URL to which the client should be redirected after successful payment */
      finishUrl?: string;
      /** Identifier of an order */
      orderId: string;
    };
    response: {
      redirectUrl: string; // TODO: [OpenAPI][handlePaymentMethod] add proper response type
    };
    responseCode: 200;
  };
  "readLandingPage post /landing-page/{landingPageId}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the landing page. */
      landingPageId: string;
    };
    body: components["schemas"]["Criteria"] &
      ({
        /** Resolves only the given slot identifiers. The identifiers have to be seperated by a `|` character. */
        slots?: string;
      } & components["schemas"]["ProductListingCriteria"]);
    response: components["schemas"]["LandingPage"];
    responseCode: 200;
  };
  "readLanguages post /language": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      elements: components["schemas"]["Language"][]; // TODO: [OpenAPI][readLanguages] add elements property as required
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readNavigation post /navigation/{activeId}/{rootId}": {
    contentType?: "application/json";
    accept?: "application/json";
    path: {
      /** Identifier of the active category in the navigation tree (if not used, just set to the same as rootId). */
      // TODO: [OpenAPI][readNavigation] add union type in definition
      activeId: Schemas["NavigationType"] | string;
      /** Identifier of the root category for your desired navigation tree. You can use it to fetch sub-trees of your navigation tree. */
      // TODO: [OpenAPI][readNavigation] add union type in definition
      rootId: Schemas["NavigationType"] | string;
    };
    body: components["schemas"]["Criteria"] & {
      /** Return the categories as a tree or as a flat list. */
      buildTree?: GenericRecord[];
      /**
       * Format: int32
       * Determines the depth of fetched navigation levels.
       */
      depth?: number;
    };
    response: components["schemas"]["NavigationRouteResponse"];
    responseCode: 200;
  };
  "confirmNewsletter post /newsletter/confirm": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Email hash parameter from the link in the confirmation mail */
      em: string;
      /** Hash parameter from link the in the confirmation mail */
      hash: string;
    };
    response: never;
    responseCode: 200;
  };
  "subscribeToNewsletter post /newsletter/subscribe": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** City */
      city?: string;
      /** Custom field data that should be added to the subscription. */
      customFields?: string;
      /** Email address that will receive the confirmation and the newsletter. */
      email: string;
      /** First name */
      firstName?: string;
      /** Identifier of the language. */
      languageId?: string;
      /** Last name */
      lastName?: string;
      /** Defines what should be done. */
      option: string;
      /** Identifier of the salutation. */
      salutationId?: string;
      /** Url of the storefront of the shop. This will be used for generating the link to the /newsletter/confirm inside the confirm email. */
      storefrontUrl: string;
      /** Street */
      street?: string;
      /** Zip code */
      tags?: string;
      /** Zip code */
      zipCode?: string;
    };
    response: never;
    responseCode: 200;
  };
  "unsubscribeToNewsletter post /newsletter/unsubscribe": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Email address that should be removed from the mailing lists. */
      email: string;
    };
    response: never;
    responseCode: 200;
  };
  "readOrder post /order": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"] & {
      /** Check if the payment method of the order is still changeable. */
      checkPromotion?: boolean;
    };
    response: components["schemas"]["OrderRouteResponse"];
    responseCode: 200;
  };
  "orderDownloadFile get /order/download/{orderId}/{downloadId}": {
    contentType?: "application/json";
    accept: "application/octet-stream";
    response: Blob; // TODO: [OpenAPI][orderDownloadFile] add proper response type
    responseCode: 200;
  };
  "orderSetPayment post /order/payment": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** The identifier of the order. */
      orderId: string;
      /** The identifier of the paymentMethod to be set */
      paymentMethodId: string;
    };
    response: components["schemas"]["SuccessResponse"];
    responseCode: 200;
  };
  "cancelOrder post /order/state/cancel": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** The identifier of the order to be canceled. */
      orderId: string; // TODO: [OpenAPI][cancelOrder] add orderId as required field
    };
    response: components["schemas"]["StateMachineState"];
    responseCode: 200;
  };
  "readPaymentMethod post /payment-method": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"] & {
      /** List only available */
      onlyAvailable?: boolean;
    };
    response: {
      /** aggregation result */
      aggregations?: GenericRecord;
      elements?: components["schemas"]["PaymentMethod"][];
      /** Total amount */
      total?: number;
    };
    responseCode: 200;
  };
  "readProduct post /product": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"] & {
      ids?: string[]; // TODO: [OpenAPI][readProduct]: add `ids` as field to criteria - (is required?)
    };
    response: {
      elements: components["schemas"]["Product"][]; // TODO: [OpenAPI][readProduct]: add elements property as required
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readProductExport get /product-export/{accessKey}/{fileName}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Access Key */
      accessKey: string;
      /** File Name */
      fileName: string;
    };
    response: never;
    responseCode: 200;
  };
  "readProductListing post /product-listing/{categoryId}": {
    contentType?: "application/json";
    accept?: "application/json";
    header?: {
      "sw-include-seo-urls"?: boolean; // TODO: [OpenAPI][readProductListing] - add sw-include-seo-urls to header parameters
    };
    path: {
      /** Identifier of a category. */
      categoryId: string;
    };
    body: components["schemas"]["ProductListingCriteria"] &
      components["schemas"]["ProductListingFlags"];
    response: components["schemas"]["ProductListingResult"];
    responseCode: 200;
  };
  "readProductDetail post /product/{productId}": {
    contentType?: "application/json";
    accept?: "application/json";
    path: {
      /** Product ID */
      productId: string; // TODO: [OpenAPI][readProductDetails]: add cmsAssociations to product detail parameters
    };
    response: components["schemas"]["ProductDetailResponse"];
    responseCode: 200;
  };
  "readProductCrossSellings post /product/{productId}/cross-selling": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Product ID */
      productId: string;
    };
    response: components["schemas"]["CrossSellingElementCollection"];
    responseCode: 200;
  };
  "searchProductVariantIds post /product/{productId}/find-variant": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Product ID */
      productId: string;
    };
    body: {
      /** The options parameter for the variant to find. */
      options: string[];
      /** The id of the option group that has been switched. */
      switchedGroup?: string;
    };
    response: components["schemas"]["FindProductVariantRouteResponse"];
    responseCode: 200;
  };
  "saveProductReview post /product/{productId}/review": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the product which is reviewed. */
      productId: string;
    };
    body: {
      /** The content of review. */
      content: string;
      /** The email address of the review author. If not set, the email of the customer is chosen. */
      email?: string;
      /** The name of the review author. If not set, the first name of the customer is chosen. */
      name?: string;
      /**
       * Format: double
       * The review rating for the product.
       */
      points: number;
      /** The title of the review. */
      title: string;
    };
    response: never;
    responseCode: 200;
  };
  "readProductReviews post /product/{productId}/reviews": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the product. */
      productId: string;
    };
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["ProductReview"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readSalutation post /salutation": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["Salutation"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "postScriptStoreApiRoute post /script/{hook}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Dynamic hook which used to build the hook name */
      hook: string;
    };
    response: never;
    responseCode: 200;
  };
  "searchPage post /search": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Using the search parameter, the server performs a text search on all records based on their data model and weighting as defined in the entity definition using the SearchRanking flag. */
      search: string;
    } & components["schemas"]["ProductListingCriteria"] &
      components["schemas"]["ProductListingFlags"];
    response: components["schemas"]["ProductListingResult"];
    responseCode: 200;
  };
  "searchSuggest post /search-suggest": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Using the search parameter, the server performs a text search on all records based on their data model and weighting as defined in the entity definition using the SearchRanking flag. */
      search: string;
    } & components["schemas"]["ProductListingFlags"];
    response: components["schemas"]["ProductListingResult"];
    responseCode: 200;
  };
  "readSeoUrl post /seo-url": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      elements: components["schemas"]["SeoUrl"][]; // TODO: [OpenAPI][readSeoUrl]: response should be `EntitySearchResult` and elements should be required
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readShippingMethod post /shipping-method": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      /** aggregation result */
      aggregations?: GenericRecord;
      elements: components["schemas"]["ShippingMethod"][]; // TODO: [OpenAPI][readShippingMethod]: response should be `EntitySearchResult` and elements should be required
      /** Total amount */
      total?: number;
    };
    responseCode: 200;
  };
  "readSitemap get /sitemap": {
    contentType?: "application/json";
    accept?: "application/json";
    response: components["schemas"]["Sitemap"][];
    responseCode: 200;
  };
  "readApprovalRules get /store-api/approval-rule": {
    contentType?: "application/json";
    accept?: "application/json";
    query: {
      /** Page number */
      p?: number;
      /** Number of items per page */
      limit?: number;
    };
    response: {
      elements?: components["schemas"]["ApprovalRule"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "listApprovalRules post /store-api/approval-rule": {
    contentType?: "application/json";
    accept?: "application/json";
    query: {
      /** Page number */
      p?: number;
      /** Number of items per page */
      limit?: number;
    };
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["ApprovalRule"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readApprovalRule get /store-api/approval-rule/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the approval rule to be fetched */
      id: string;
    };
    response: components["schemas"]["ApprovalRule"];
    responseCode: 200;
  };
  "updateApprovalRule patch /store-api/approval-rule/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the approval rule to be updated */
      id: string;
    };
    body: {
      /** Active status of the approval rule */
      active?: boolean;
      /** ID of the role that can approve the rule */
      approvalRuleApprove?: string;
      /** List of rules */
      approvalRuleCondition?: {
        /** Type of the rule */
        type?: string;
        /** Value */
        value?: string;
      };
      /** Name of the approval rule */
      approvalRuleName?: string;
      /** ID of the role that is affected by the rule */
      approvalRuleRole?: string;
      /** Description of the approval rule */
      description?: string;
      /** Priority of the approval rule */
      priority?: number;
    };
    response: components["schemas"]["ApprovalRule"];
    responseCode: 200;
  };
  "createApprovalRule post /store-api/approval-rule/create": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Active status of the approval rule */
      active?: boolean;
      /** ID of the role that can approve the rule */
      approvalRuleApprove?: string;
      /** List of rules */
      approvalRuleCondition?: {
        /** Type of the rule */
        type?: string;
        /** Value */
        value?: string;
      };
      /** Name of the approval rule */
      approvalRuleName?: string;
      /** ID of the role that is affected by the rule */
      approvalRuleRole?: string;
      /** Description of the approval rule */
      description?: string;
      /** Priority of the approval rule */
      priority?: number;
    };
    response: components["schemas"]["ApprovalRule"];
    responseCode: 200;
  };
  "readEmployees post /store-api/employee": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["B2bEmployee"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readEmployee post /store-api/employee/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the employee to be fetched */
      id: string;
    };
    response: components["schemas"]["B2bEmployee"];
    responseCode: 200;
  };
  "deleteEmployee delete /store-api/employee/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the employee to be deleted */
      id: string;
    };
    response: never;
    responseCode: 204;
  };
  "updateEmployee patch /store-api/employee/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the employee to be updated */
      id: string;
    };
    body: {
      /** New email of the employee */
      email?: string;
      /** New first name of the employee */
      firstName?: string;
      /** New last name of the employee */
      lastName?: string;
      /** New id of the role of the employee */
      roleId?: string;
    };
    response: components["schemas"]["B2bEmployee"];
    responseCode: 200;
  };
  "createEmployee post /store-api/employee/create": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Email of the new employee */
      email?: string;
      /** First name of the new employee */
      firstName?: string;
      /** Last name of the new employee */
      lastName?: string;
      /** Id of the role of the new employee */
      roleId?: string;
    };
    response: components["schemas"]["B2bEmployee"];
    responseCode: 200;
  };
  "reinviteEmployee post /store-api/employee/reinvite/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the employee to be reinvited */
      id: string;
    };
    body: {
      /** URL of the storefront domain */
      storefrontUrl?: string;
    };
    response: components["schemas"]["B2bEmployee"];
    responseCode: 200;
  };
  "fetchPendingOrder post /store-api/pending-order/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the pending order to be fetched */
      id: string;
    };
    response: components["schemas"]["PendingOrder"];
    responseCode: 200;
  };
  "approvePendingOrder post /store-api/pending-order/{id}/approve": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the pending order to be approved */
      id: string;
    };
    body: {
      /** Message content */
      comment?: string;
    };
    response: never;
    responseCode: 204;
  };
  "createOrderFromPendingOrder post /store-api/pending-order/{id}/checkout/order": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the pending order to be used to create a order */
      id: string;
    };
    body: {
      /** Message content */
      customerComment?: string;
    };
    response: components["schemas"]["Order"];
    responseCode: 200;
  };
  "declinePendingOrder post /store-api/pending-order/{id}/decline": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the pending order to be declined */
      id: string;
    };
    body: {
      /** Message content */
      comment?: string;
    };
    response: never;
    responseCode: 204;
  };
  "requestOrderApproval post /store-api/pending-order/request": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Message content */
      comment?: string;
    };
    response: components["schemas"]["PendingOrder"];
    responseCode: 200;
  };
  "searchByImageSearchTerm post /store-api/product/image-upload-search/search-term": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /**
       * Format: binary
       * Base-64 encoded image
       */
      file?: string;
    };
    response: components["schemas"]["SearchByImageSearchTermResponse"];
    responseCode: 200;
  };
  "naturalLanguageSearchTerm post /store-api/product/natural-language/search-term": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /**
       * Natural language query
       * @example I'm looking for a present for my wife
       */
      query?: string;
    };
    response: components["schemas"]["NaturalLanguageSearchTermResponse"];
    responseCode: 200;
  };
  "switchPaymentOrShippingMethod post /store-api/quote/{id}/configure": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the quote to be reinvited */
      id: string;
    };
    body: {
      /** Id of the payment method */
      paymentMethodId?: string;
      /** Id of the shipping method */
      shippingMethodId?: string;
    };
    response: never;
    responseCode: 204;
  };
  "declineQuote post /store-api/quote/{id}/decline": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the quote to be reinvited */
      id: string;
    };
    body: {
      /** Message content */
      comment?: string;
    };
    response: never;
    responseCode: 204;
  };
  "requestChangeQuote post /store-api/quote/{id}/request-change": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the quote to be reinvited */
      id: string;
    };
    body: {
      /** Message content */
      comment?: string;
    };
    response: never;
    responseCode: 204;
  };
  "readQuote post /store-api/quote/detail/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the quote to be fetched */
      id: string;
    };
    response: components["schemas"]["Quote"];
    responseCode: 200;
  };
  "createOrderFromQuote post /store-api/quote/order/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the quote to be reinvited */
      id: string;
    };
    body: {
      /** Message content */
      customerComment?: string;
    };
    response: components["schemas"]["Order"];
    responseCode: 200;
  };
  "requestQuote post /store-api/quote/request": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Message content */
      comment?: string;
    };
    response: components["schemas"]["Quote"];
    responseCode: 200;
  };
  "readQuotes post /store-api/quotes": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["Quote"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readRoles get /store-api/role": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["B2bComponentsRole"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readRolesPOST post /store-api/role": {
    contentType?: "application/json";
    accept?: "application/json";
    body: components["schemas"]["Criteria"];
    response: {
      elements?: components["schemas"]["B2bComponentsRole"][];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
  "readRole get /store-api/role/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the role to be fetched */
      id: string;
    };
    response: components["schemas"]["B2bComponentsRole"];
    responseCode: 200;
  };
  "deleteRole delete /store-api/role/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the role to be fetched */
      id: string;
    };
    response: never;
    responseCode: 204;
  };
  "updateRole patch /store-api/role/{id}": {
    contentType?: "application/json";
    accept?: "application/json";
    pathParams: {
      /** Identifier of the role to be updated */
      id: string;
    };
    body: {
      /** Ability to set the role as default */
      isDefaultRole?: boolean;
      /** New name of the role */
      name?: string;
      /** New permissions of the role */
      permissions?: string[];
    };
    response: components["schemas"]["B2bComponentsRole"];
    responseCode: 200;
  };
  "createRole post /store-api/role/create": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Ability to set the new role as default */
      isDefaultRole?: boolean;
      /** Name of the new role */
      name?: string;
      /** Permissions of the new role */
      permissions?: string[];
    };
    response: components["schemas"]["B2bComponentsRole"];
    responseCode: 200;
  };
  "updateDefaultRoleId post /store-api/role/default": {
    contentType?: "application/json";
    accept?: "application/json";
    body: {
      /** Id of the roleId to be set as default */
      id?: string;
    };
    response: never;
    responseCode: 204;
  };
  "readPermissions get /store-api/role/permissions": {
    contentType?: "application/json";
    accept?: "application/json";
    response: {
      elements?: {
        permissionDependencies?: string[];
        permissionGroupName?: string;
        permissionName?: string;
      }[];
    } & components["schemas"]["EntitySearchResult"];
    responseCode: 200;
  };
};
