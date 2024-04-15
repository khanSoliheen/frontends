/**
 * This file is auto-generated. Do not make direct changes to the file.
 * Instead override it in your shopware.d.ts file.
 *
 * Shopware API version: 6.5.8.0
 *
 */

/** WithRequired type helpers */
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/** OneOf type helpers */
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

export type paths = {
  "/account/address": {
    /**
     * Create a new address for a customer
     * Creates a new address for a customer.
     */
    post: operations["createCustomerAddress"];
  };
  "/account/address/{addressId}": {
    /**
     * Delete an address of a customer
     * Delete an address of customer.
     *
     *     Only addresses which are not set as default addresses for shipping or billing can be deleted. You can check the current default addresses of your customer using the profile information endpoint and change them using the default address endpoint.
     *
     *     **A customer must have at least one address (which can be used for shipping and billing).**
     *
     *     An automatic fallback is not applied.
     */
    delete: operations["deleteCustomerAddress"];
    /**
     * Modify an address of a customer
     * Modifies an existing address of a customer.
     */
    patch: operations["updateCustomerAddress"];
  };
  "/account/address/default-billing/{addressId}": {
    /**
     * Change a customer's default billing address
     * Updates the default (preselected) billing addresses of a customer.
     */
    patch: operations["defaultBillingAddress"];
  };
  "/account/address/default-shipping/{addressId}": {
    /**
     * Change a customer's default shipping address
     * Updates the default (preselected) shipping addresses of a customer.
     */
    patch: operations["defaultShippingAddress"];
  };
  "/account/change-email": {
    /**
     * Change the customer's email address
     * Changes a customer's email address to a new email address, using their current password as a validation.
     */
    post: operations["changeEmail"];
  };
  "/account/change-language": {
    /**
     * Change the customer's language.
     * Changes the language of the logged in customer
     */
    post: operations["changeLanguage"];
  };
  "/account/change-password": {
    /**
     * Change the customer's password
     * Changes a customer's password using their current password as a validation.
     */
    post: operations["changePassword"];
  };
  "/account/change-payment-method/{paymentMethodId}": {
    /**
     * Change the customer's default payment method
     * Changes a customer's default (preselected) payment method.
     */
    post: operations["changePaymentMethod"];
  };
  "/account/change-profile": {
    /**
     * Change the customer's information
     * Make changes to a customer's account, like changing their name, salutation or title.
     */
    post: operations["changeProfile"];
  };
  "/account/customer": {
    /**
     * Get information about current customer
     * Returns information about the current customer.
     */
    post: operations["readCustomer"];
    /**
     * Delete the customer's profile
     * Deletes a customer profile along with their addresses, wishlists and associated data. Created orders and their payment/shipping information (addresses) and reviews are not deleted.
     */
    delete: operations["deleteCustomer"];
  };
  "/account/customer-recovery-is-expired": {
    /**
     * Checks if the customer recovery entry for a given hash is expired.
     * This can be used to validate a provided hash has a valid and not expired customer recovery hash.
     */
    post: operations["getCustomerRecoveryIsExpired"];
  };
  "/account/list-address": {
    /**
     * Fetch addresses of a customer
     * Lists all addresses of the current customer and allows filtering them based on a criteria.
     */
    post: operations["listAddress"];
  };
  "/account/login": {
    /**
     * Log in a customer
     * Logs in customers given their credentials.
     */
    post: operations["loginCustomer"];
  };
  "/account/logout": {
    /**
     * Log out a customer
     * Logs out a customer.
     */
    post: operations["logoutCustomer"];
  };
  "/account/newsletter-recipient": {
    /**
     * Fetch newsletter recipients
     * Perform a filtered search for newsletter recipients.
     */
    post: operations["readNewsletterRecipient"];
  };
  "/account/recovery-password": {
    /**
     * Send a password recovery mail
     * This operation is Step 1 of the password reset flow. Make sure to implement Step 2 "Reset password with recovery credentials" in order to allow for the complete flow in your application. Sends a recovery mail containing a link with credentials that allows a customer to reset their password.
     */
    post: operations["sendRecoveryMail"];
  };
  "/account/recovery-password-confirm": {
    /**
     * Reset a password with recovery credentials
     * This operation is Step 2 of the password reset flow. It is required to conduct Step 1 "Send a password recovery mail" in order to obtain the required credentials for this step.Resets a customer's password using credentials from a password recovery mail as a validation.
     */
    post: operations["recoveryPassword"];
  };
  "/account/register": {
    /**
     * Register a customer
     * Registers a customer. Used both for normal customers and guest customers.See the Guide "Register a customer" for more information on customer registration.
     */
    post: operations["register"];
  };
  "/account/register-confirm": {
    /**
     * Confirm a customer registration
     * Confirms a customer registration when double opt-in is activated.
     *
     * Learn more about double opt-in registration in our guide "Register a customer".
     */
    post: operations["registerConfirm"];
  };
  "/app-system/{name}/generate-token": {
    /**
     * Generate JWT token for app system backend
     * Generate JWT token for authenticated communication with the app server
     */
    post: operations["generateJWTAppSystemAppServer"];
  };
  "/category": {
    /**
     * Fetch a list of categories
     * Perform a filtered search for categories.
     */
    post: operations["readCategoryList"];
  };
  "/category/{navigationId}": {
    /**
     * Fetch a single category
     * This endpoint returns information about the category, as well as a fully resolved (hydrated with mapping values) CMS page, if one is assigned to the category. You can pass slots which should be resolved exclusively.
     */
    post: operations["readCategory"];
  };
  "/checkout/cart": {
    /**
     * Fetch or create a cart
     * Used to fetch the current cart or for creating a new one.
     */
    get: operations["readCart"];
    /**
     * Delete a cart
     * This route deletes the cart of the customer.
     */
    delete: operations["deleteCart"];
  };
  "/checkout/cart/line-item": {
    /**
     * Add items to the cart
     * This route adds items to the cart. An item can be a product or promotion for example. They are referenced by the `referencedId`-parameter.
     *
     * Example: [Working with the cart - Guide](https://developer.shopware.com/docs/guides/integrations-api/store-api-guide/work-with-the-cart#adding-new-items-to-the-cart)
     */
    post: operations["addLineItem"];
    /**
     * Remove items from the cart
     * @deprecated
     * DEPRECATED: use removeLineItem instead. This route removes items from the cart and recalculates it.
     *
     * Example: [Working with the cart - Guide](https://developer.shopware.com/docs/guides/integrations-api/store-api-guide/work-with-the-cart#deleting-items-in-the-cart)
     */
    delete: operations["removeLineItemDeprecated"];
    /**
     * Update items in the cart
     * This route updates items in the cart. A typical example is updating the quantity of an item.
     *
     * Example: [Working with the cart - Guide](https://developer.shopware.com/docs/guides/integrations-api/store-api-guide/work-with-the-cart#updating-items-in-the-cart)
     */
    patch: operations["updateLineItem"];
  };
  "/checkout/cart/line-item/delete": {
    /**
     * Remove items from the cart
     * This route removes items from the cart and recalculates it.
     *
     * Example: [Working with the cart - Guide](https://developer.shopware.com/docs/guides/integrations-api/store-api-guide/work-with-the-cart#deleting-items-in-the-cart)
     */
    post: operations["removeLineItem"];
  };
  "/checkout/order": {
    /**
     * Create an order from a cart
     * Creates a new order from the current cart and deletes the cart.
     *
     * If you are using the [prepared payment flow](https://developer.shopware.com/docs/concepts/commerce/checkout-concept/payments#2.1-prepare-payment-optional), this endpoint also receives additional transaction details. The exact name of the parameters depends on the implementation of the corresponding *payment handler*.
     */
    post: operations["createOrder"];
  };
  "/cms/{id}": {
    /**
     * Fetch and resolve a CMS page
     * Loads a content management page by its identifier and resolve the slot data. This could be media files, product listing and so on.
     *
     * **Important notice**
     *
     * The criteria passed with this route also affects the listing, if there is one within the cms page.
     */
    post: operations["readCms"];
  };
  "/contact-form": {
    /**
     * Submit a contact form message
     * Used for submitting contact forms. Be aware that there can be more required fields, depending on the system settings.
     */
    post: operations["sendContactMail"];
  };
  "/context": {
    /**
     * Fetch the current context
     * Fetches the current context. This includes for example the `customerGroup`, `currency`, `taxRules` and many more.
     */
    get: operations["readContext"];
    /**
     * Modify the current context
     * Used for switching the context. A typical example would be changing the language or changing the currency.
     */
    patch: operations["updateContext"];
  };
  "/country": {
    /**
     * Fetch countries
     * Perform a filtered search for countries
     */
    post: operations["readCountry"];
  };
  "/country-state/{countryId}": {
    /**
     * Fetch the states of a country
     * Perform a filtered search the states for a country
     */
    post: operations["readCountryState"];
  };
  "/currency": {
    /**
     * Fetch currencies
     * Perform a filtered search for currencies.
     */
    post: operations["readCurrency"];
  };
  "/customer-group-registration/config/{customerGroupId}": {
    /** Fetch registration settings for customer group */
    get: operations["getCustomerGroupRegistrationInfo"];
  };
  "/customer/wishlist": {
    /**
     * Fetch a wishlist
     * Fetch a customer's wishlist. Products on the wishlist can be filtered using a criteria object.
     *
     *     **Important constraints**
     *
     *     * Anonymous (not logged-in) customers can not have wishlists.
     *     * The wishlist feature has to be activated.
     */
    post: operations["readCustomerWishlist"];
  };
  "/customer/wishlist/add/{productId}": {
    /**
     * Add a product to a wishlist
     * Adds a product to a customers wishlist.
     *
     *     **Important constraints**
     *
     *     * Anonymous (not logged-in) customers can not have wishlists.
     *     * The wishlist feature has to be activated.
     */
    post: operations["addProductOnWishlist"];
  };
  "/customer/wishlist/delete/{productId}": {
    /**
     * Remove a product from a wishlist
     * Removes a product from a customer's wishlist.
     *
     *     **Important constraints**
     *
     *     * Anonymous (not logged-in) customers can not have wishlists.
     *     * The wishlist feature has to be activated.
     */
    delete: operations["deleteProductOnWishlist"];
  };
  "/customer/wishlist/merge": {
    /**
     * Create a wishlist for a customer
     * Create a new wishlist for a logged in customer or extend the existing wishlist given a set of products.
     *
     *     **Important constraints**
     *
     *     * Anonymous (not logged-in) customers can not have wishlists.
     *     * A customer can only have a single wishlist.
     *     * The wishlist feature has to be activated.
     */
    post: operations["mergeProductOnWishlist"];
  };
  "/document/download/{documentId}/{deepLinkCode}": {
    /**
     * Download generated document
     * Returns blob file of a generated document to download.
     */
    post: operations["download"];
  };
  "/guided-shopping/all-product-ids": {
    /**
     * Fetch product ids by criteria
     * Fetches product ids for a given criteria.
     */
    post: operations["guidedShoppingLoadAllProductIds"];
  };
  "/guided-shopping/appointment/{appointmentId}/attendee/respond-invitation": {
    /**
     * Respond the appointment invitation
     * Returns the appointment invitation status
     */
    patch: operations["attendeeRespondInvitation"];
  };
  "/guided-shopping/appointment/{appointmentId}/download-ics": {
    /**
     * Get the ics file to import to your calendar
     * Returns the calendar file
     */
    post: operations["getCalendarFile"];
  };
  "/guided-shopping/appointment/{presentationPath}/join-as-client": {
    /**
     * Join a meeting as a attendee
     * Returns the client join appointment response.
     */
    post: operations["joinAppointmentAsClient"];
  };
  "/guided-shopping/appointment/attendee": {
    /**
     * Update attendee information
     * Update attendee information
     */
    patch: operations["updateAttendee"];
  };
  "/guided-shopping/appointment/collection/{alias}": {
    /**
     * Get the product ids for the attendee in product collection with the matching alias
     * Returns the product ids for the requesting attendee and matching alias
     */
    get: operations["getAttendeeProductCollection"];
  };
  "/guided-shopping/appointment/collection/{alias}/{productId}": {
    /**
     * Add a product to the attendee product list
     * Add a product with the alias to the product list of the attendee
     */
    post: operations["attendeeProductCollectionAddProduct"];
    /**
     * Remove a product with the alias from the for the attendee product collection
     * Removes the product with the matching alias from of the attendee product collection
     */
    delete: operations["attendeeProductCollectionRemoveProduct"];
  };
  "/guided-shopping/appointment/collection/last-seen": {
    /**
     * Get the last seen products for the current attendee
     * Returns the the last seen products for the requesting client
     */
    get: operations["getLastSeenProducts"];
  };
  "/guided-shopping/appointment/presentation": {
    /**
     * Fetch presentation structure and flat navigation
     * Resolves the presentation structure and navigation by using the attendeeContext information. There will be NO Slot-Data inside call store-api.guided-shopping.presentation-data for that
     */
    get: operations["getPresentationStructure"];
  };
  "/guided-shopping/appointment/presentation/{presentationCmsPageId}/slide/{sectionId}": {
    /**
     * Fetch resolved data for specific slide
     * Gives the resolved slot-data for the given slide index (slot-config)
     */
    get: operations["getSlideData"];
  };
  "/guided-shopping/appointment/presentation/state": {
    /**
     * Get the current presentation state
     * Returns the presentation state for all and the client
     */
    get: operations["getClientPresentationState"];
  };
  "/guided-shopping/interaction": {
    /**
     * Add a interaction to log
     * Create a interaction log entry in a specific appointment
     */
    post: operations["addInteraction"];
  };
  "/guided-shopping/product-listing": {
    /**
     * Fetch a product listing by criteria
     * Fetches a product listing for a given criteria. It also provides filters, sortings and property aggregations, analogous to the /product-listing endpoint.
     */
    post: operations["guidedShoppingProductListing"];
  };
  "/guided-shopping/quickview/{productId}/{cmsPageLayoutId}": {
    /**
     * Fetch a cms page for quickview with product data
     * Takes a product identifier and returns the preconfigured quickview CMS layout (defined in SwagGuidedShopping.config.quickviewPageId ) hydrated with the product specific data
     */
    get: operations["resolveQuickviewPage"];
  };
  "/handle-payment": {
    /**
     * Initiate a payment for an order
     * This generic endpoint is should be called to initiate a payment flow after an order has been created. The details of the payment flow can differ depending on the payment integration and might require calling additional operations or the setup of webhooks.
     *
     * The endpoint internally calls the payment handler of the payment method currently set for the order.
     */
    post: operations["handlePaymentMethod"];
  };
  "/landing-page/{landingPageId}": {
    /**
     * Fetch a landing page with the resolved CMS page
     * Loads a landing page by its identifier and resolves the CMS page.
     *
     * **Important notice**
     *
     * The criteria passed with this route also affects the listing, if there is one within the cms page.
     */
    post: operations["readLandingPage"];
  };
  "/language": {
    /**
     * Fetch languages
     * Perform a filtered search for languages.
     */
    post: operations["readLanguages"];
  };
  "/navigation/{activeId}/{rootId}": {
    /**
     * Fetch a navigation menu
     * This endpoint returns categories that can be used as a page navigation. You can either return them as a tree or as a flat list. You can also control the depth of the tree.
     *
     *     Instead of passing uuids, you can also use one of the following aliases for the activeId and rootId parameters to get the respective navigations of your sales channel.
     *
     *      * main-navigation
     *      * service-navigation
     *      * footer-navigation
     */
    post: operations["readNavigation"];
  };
  "/newsletter/confirm": {
    /**
     * Confirm a newsletter registration
     * You have to use the hash from the link sent out via email to confirm the user registration.
     */
    post: operations["confirmNewsletter"];
  };
  "/newsletter/subscribe": {
    /**
     * Create or remove a newsletter subscription
     * This route is used to create/remove/confirm a newsletter subscription.
     *
     * The `option` property controls what should happen:
     * * `direct`: The subscription is directly active and does not need a confirmation.
     * * `subscribe`: An email will be send to the provided email addrees containing a link to the /newsletter/confirm route.
     * The subscription is only successful, if the /newsletter/confirm route is called with the generated hashes.
     * * `unsubscribe`: The email address will be removed from the newsletter subscriptions.
     * * `confirmSubscribe`: Confirmes the newsletter subscription for the provided email address.
     */
    post: operations["subscribeToNewsletter"];
  };
  "/newsletter/unsubscribe": {
    /**
     * Remove a newsletter subscription
     * Removes a newsletter recipient from the mailing lists.
     */
    post: operations["unsubscribeToNewsletter"];
  };
  "/order": {
    /**
     * Fetch a list of orders
     * List orders of a customer.
     */
    post: operations["readOrder"];
  };
  "/order/download/{orderId}/{downloadId}": {
    /**
     * Download a purchased file
     * Download a file included in the given order and with the given id. Access must be granted.
     */
    get: operations["orderDownloadFile"];
  };
  "/order/payment": {
    /**
     * Update the payment method of an order
     * Changes the payment method of a specific order. You can use the /order route to find out if the payment method of an order can be changed - take a look at the `paymentChangeable`- array in the response.
     */
    post: operations["orderSetPayment"];
  };
  "/order/state/cancel": {
    /**
     * Cancel an order
     * Cancels an order. The order state will be set to 'cancelled'.
     */
    post: operations["cancelOrder"];
  };
  "/payment-method": {
    /** Loads all available payment methods */
    post: operations["readPaymentMethod"];
  };
  "/product": {
    /**
     * Fetch a list of products
     * List products that match the given criteria. For performance reasons a limit should always be set.
     */
    post: operations["readProduct"];
  };
  "/product-export/{accessKey}/{fileName}": {
    /** Export product export */
    get: operations["readProductExport"];
  };
  "/product-listing/{categoryId}": {
    /**
     * Fetch a product listing by category
     * Fetches a product listing for a specific category. It also provides filters, sortings and property aggregations, analogous to the /search endpoint.
     */
    post: operations["readProductListing"];
  };
  "/product/{productId}": {
    /**
     * Fetch a single product
     * This route is used to load a single product with the corresponding details. In addition to loading the data, the best variant of the product is determined when a parent id is passed.
     */
    post: operations["readProductDetail"];
  };
  "/product/{productId}/cross-selling": {
    /**
     * Fetch cross-selling groups of a product
     * This route is used to load the cross sellings for a product. A product has several cross selling definitions in which several products are linked. The route returns the cross sellings together with the linked products
     */
    post: operations["readProductCrossSellings"];
  };
  "/product/{productId}/find-variant": {
    /**
     * Search for a matching variant by product options.
     * Performs a search for product variants and returns the best matching variant.
     */
    post: operations["searchProductVariantIds"];
  };
  "/product/{productId}/review": {
    /**
     * Save a product review
     * Saves a review for a product. Reviews have to be activated in the settings.
     */
    post: operations["saveProductReview"];
  };
  "/product/{productId}/reviews": {
    /**
     * Fetch product reviews
     * Perform a filtered search for product reviews.
     */
    post: operations["readProductReviews"];
  };
  "/salutation": {
    /**
     * Fetch salutations
     * Perform a filtered search for salutations.
     */
    post: operations["readSalutation"];
  };
  "/script/{hook}": {
    /** Access point for different api logics which are provided by apps over script hooks */
    post: operations["postScriptStoreApiRoute"];
  };
  "/search": {
    /**
     * Search for products
     * Performs a search for products which can be used to display a product listing.
     */
    post: operations["searchPage"];
  };
  "/search-suggest": {
    /**
     * Search for products (suggest)
     * Can be used to implement search previews or suggestion listings, that don’t require any interaction.
     */
    post: operations["searchSuggest"];
  };
  "/seo-url": {
    /**
     * Fetch SEO routes
     * Perform a filtered search for seo urls.
     */
    post: operations["readSeoUrl"];
  };
  "/shipping-method": {
    /**
     * Fetch shipping methods
     * Perform a filtered search for shipping methods.
     */
    post: operations["readShippingMethod"];
  };
  "/sitemap": {
    /**
     * Fetch sitemaps
     * Fetches a list of compressed sitemap files, which are often used by search engines.
     */
    get: operations["readSitemap"];
  };
  "/store-api/approval-rule": {
    /**
     * Fetch a list of approval rules
     * This route is used to load approval rules
     */
    get: operations["readApprovalRules"];
    /**
     * List all approval rules
     * This route is used to list all approval rules from the store
     */
    post: operations["listApprovalRules"];
  };
  "/store-api/approval-rule/{id}": {
    /**
     * Fetch one approval rule by id
     * This route is used to fetch a approval rule from the store by id
     */
    get: operations["readApprovalRule"];
    /**
     * Update a approval rule by id
     * This route is used to update a approval rule from the store by id
     */
    patch: operations["updateApprovalRule"];
  };
  "/store-api/approval-rule/create": {
    /**
     * Create a new approval rule
     * This route is used to create a new approval rule
     */
    post: operations["createApprovalRule"];
  };
  "/store-api/employee": {
    /**
     * Fetch a list of employees
     * This route is used to load employees
     */
    post: operations["readEmployees"];
  };
  "/store-api/employee/{id}": {
    /**
     * Fetch a one employee by id
     * This route is used to fetch one employee by id
     */
    post: operations["readEmployee"];
    /**
     * Delete an employee by id
     * This route is used to delete one employee by id
     */
    delete: operations["deleteEmployee"];
    /**
     * Update a one employee by id
     * This route is used to update one employee by id
     */
    patch: operations["updateEmployee"];
  };
  "/store-api/employee/create": {
    /**
     * Create a single employee and returns the employee
     * This route is used to create and return an employee
     */
    post: operations["createEmployee"];
  };
  "/store-api/employee/reinvite/{id}": {
    /**
     * Reinvite employee by id
     * This route is used to reinvite an employee via email by id
     */
    post: operations["reinviteEmployee"];
  };
  "/store-api/pending-order/{id}": {
    /**
     * Fetch one pending order by id
     * This route is used to fetch a pending order from the store by id
     */
    post: operations["fetchPendingOrder"];
  };
  "/store-api/pending-order/{id}/approve": {
    /**
     * Approve a pending order by id
     * This route is used to approve a pending order from the store by id
     */
    post: operations["approvePendingOrder"];
  };
  "/store-api/pending-order/{id}/checkout/order": {
    /**
     * Create a order from a pending order
     * This route is used to create a order from a pending order
     */
    post: operations["createOrderFromPendingOrder"];
  };
  "/store-api/pending-order/{id}/decline": {
    /**
     * Decline a pending order by id
     * This route is used to decline a pending order from the store by id
     */
    post: operations["declinePendingOrder"];
  };
  "/store-api/pending-order/request": {
    /**
     * Request new order approval
     * This route is used to request a new order approval
     */
    post: operations["requestOrderApproval"];
  };
  "/store-api/product/image-upload-search/search-term": {
    /**
     * Fetch product search terms by uploading an image.
     * <b>Experimental until v6.7.0</b>
     *
     * Fetch product search terms by uploading an image.
     */
    post: operations["searchByImageSearchTerm"];
  };
  "/store-api/product/natural-language/search-term": {
    /**
     * Fetch search terms by natural language search query
     * <b>Experimental until v6.7.0</b>
     *
     * Fetch search terms by natural search language query
     */
    post: operations["naturalLanguageSearchTerm"];
  };
  "/store-api/quote/{id}/configure": {
    /**
     * Change payment or shipping method
     * This route is used to change a payment or shipping method when place a order
     */
    post: operations["switchPaymentOrShippingMethod"];
  };
  "/store-api/quote/{id}/decline": {
    /**
     * Decline a quote by id
     * This route is used to decline a quote from the store by id
     */
    post: operations["declineQuote"];
  };
  "/store-api/quote/{id}/request-change": {
    /**
     * Request change a quote by id
     * This route is used to request change a quote from the store by id
     */
    post: operations["requestChangeQuote"];
  };
  "/store-api/quote/detail/{id}": {
    /**
     * Fetch a one quote by id
     * This route is used to fetch one quote by id
     */
    post: operations["readQuote"];
  };
  "/store-api/quote/order/{id}": {
    /**
     * Create a order from a quote
     * This route is used to create a order from a quote
     */
    post: operations["createOrderFromQuote"];
  };
  "/store-api/quote/request": {
    /**
     * Request new quote
     * This route is used to request a new quote from the store
     */
    post: operations["requestQuote"];
  };
  "/store-api/quotes": {
    /**
     * Fetch a list of quotes
     * This route is used to load quotes
     */
    post: operations["readQuotes"];
  };
  "/store-api/role": {
    /**
     * Fetch a list of roles
     * This route is used to load roles
     */
    get: operations["readRoles"];
    /**
     * Fetch a list of roles
     * This route is used to load roles
     */
    post: operations["readRolesPOST"];
  };
  "/store-api/role/{id}": {
    /**
     * Fetch a one role by id
     * This route is used to fetch one role by id
     */
    get: operations["readRole"];
    /**
     * Delete an role by id
     * This route is used to delete one role by id
     */
    delete: operations["deleteRole"];
    /**
     * Update a one role by id
     * This route is used to update one role by id
     */
    patch: operations["updateRole"];
  };
  "/store-api/role/create": {
    /**
     * Create a single role and returns the role
     * This route is used to create and return an role
     */
    post: operations["createRole"];
  };
  "/store-api/role/default": {
    /**
     * Sets the default role Id for new employees
     * This route is used to update the defaultRoleId for new employees
     */
    post: operations["updateDefaultRoleId"];
  };
  "/store-api/role/permissions": {
    /**
     * Fetch a available permissions
     * This route is used to fetch all available permissions
     */
    get: operations["readPermissions"];
  };
};

export type webhooks = Record<string, never>;

export type components = {
  schemas: {
    AbstractDynamicPageOpenedPayload: {
      /** @default true */
      opened?: boolean;
      /** The type of the current dynamic page */
      type: string;
    };
    AccountNewsletterRecipientResult: components["schemas"]["Struct"] & {
      status?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.3.1.0 */
    App: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.3.1.0 */
    AppActionButton: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.4.15.0 */
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
    /** Added since version: 6.4.2.0 */
    AppCmsBlock: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.4.10.0 */
    AppFlowAction: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.5.2.0 */
    AppFlowEvent: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.4.1.0 */
    AppPaymentMethod: {
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
    /** Added since version: 6.4.10.3 */
    AppScriptCondition: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.5.7.0 */
    AppShippingMethod: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.3.1.0 */
    AppTemplate: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    ArrayStruct: components["schemas"]["Struct"];
    /**
     * @example {
     *   "collection": {
     *     "lastSeen": [
     *       "0015b3d83df441e490da7f6880a9c2da",
     *       "60793d25cbab473f92c405ce0525f3ec"
     *     ]
     *   }
     * }
     */
    AttendeeProductCollectionLastSeenResponse: {
      collection?: {
        lastSeen?: string[];
      };
    };
    /**
     * @example {
     *   "collection": {
     *     "liked": [
     *       "0015b3d83df441e490da7f6880a9c2da",
     *       "60793d25cbab473f92c405ce0525f3ec"
     *     ]
     *   }
     * }
     */
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
    /** Members of the attributes object ("attributes") represent information about the resource object in which it's defined. */
    attributes: GenericRecord;
    B2bBusinessPartner: {
      /** Format: date-time */
      createdAt: string;
      customFields?: GenericRecord;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.6.0.0 */
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
    /** Added since version: 6.6.0.0 */
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
    /** Added since version: 6.6.0.0 */
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
    Cart: components["schemas"]["ArrayStruct"] & {
      /** An affiliate tracking code */
      affiliateCode?: string;
      /** A campaign tracking code */
      campaignCode?: string;
      /** A comment that can be added to the cart. */
      customerComment?: string;
      /** A list of all cart errors, such as insufficient stocks, invalid addresses or vouchers. */
      errors?: {
        key?: string;
        level?: string;
        message?: string;
      }[];
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
    /** Added since version: 6.0.0.0 */
    Category: {
      active?: boolean;
      afterCategoryId?: string;
      afterCategoryVersionId?: string;
      breadcrumb?: readonly GenericRecord[];
      /** Format: int64 */
      childCount?: number;
      children?: components["schemas"]["Category"][];
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
      id?: string;
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
    /** Added since version: 6.0.0.0 */
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
    /**
     * @example {
     *   "stateForAll": {
     *     "currentGuideProductId": null,
     *     "lastActiveGuideSection": null,
     *     "currentPageId": null,
     *     "currentSectionId": null,
     *     "currentSlideAlias": 0,
     *     "currentDynamicPage": null,
     *     "started": false,
     *     "running": false,
     *     "ended": false,
     *     "startedAt": null,
     *     "endedAt": null,
     *     "accessibleFrom": null,
     *     "accessibleTo": null,
     *     "appointmentMode": "guided",
     *     "videoAudioSettings": "both",
     *     "videoRoomUrl": "",
     *     "attendeeRestrictionType": "open",
     *     "productDetailDefaultPageId": "bea211b5099241719830df8026624f7f",
     *     "quickviewPageId": "182d3f7f988044adbba449b70c8bc472",
     *     "productListingDefaultPageId": "33e88c7994fa4cf79a1265e5105b93b2",
     *     "allowUserActionsForGuide": true,
     *     "broadcastMode": false,
     *     "extensions": []
     *   },
     *   "stateForClients": {
     *     "videoClientToken": null,
     *     "hoveredElementId": null,
     *     "extensions": []
     *   },
     *   "stateForMe": {
     *     "attendeeName": " admin",
     *     "guideCartPermissionsGranted": false,
     *     "attendeeSubmittedAt": null,
     *     "extensions": []
     *   },
     *   "apiAlias": "swag_guided_shopping_content_presentation_state_sales_channel_get_get_client_presentation_state_struct"
     * }
     */
    ClientPresentationStateResponse: {
      stateForAll?: components["schemas"]["StateForAll"];
      stateForClients?: components["schemas"]["StateForClients"];
      stateForMe?: components["schemas"]["StateForMe"];
    };
    /** Added since version: 6.0.0.0 */
    CmsBlock: {
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
      slots?: components["schemas"]["CmsSlot"][];
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    CmsSection: {
      backgroundColor?: string;
      backgroundMedia?: components["schemas"]["Media"];
      backgroundMediaId?: string;
      backgroundMediaMode?: string;
      blocks?: components["schemas"]["CmsBlock"][];
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Search parameters. For more information, see our documentation on [Search Queries](https://shopware.stoplight.io/docs/store-api/docs/concepts/search-queries.md#structure) */
    Criteria: {
      /** Used to perform aggregations on the search result. For more information, see [Search Queries > Aggregations](https://shopware.stoplight.io/docs/store-api/docs/concepts/search-queries.md#aggregations) */
      aggregations?: {
        /** The field you want to aggregate over. */
        field: string;
        /** Give your aggregation an identifier, so you can find it easier */
        name: string;
        /** The type of aggregation */
        type: string;
      }[];
      /** Used to fetch associations which are not fetched by default. */
      associations?: GenericRecord;
      /** Fields which should be returned in the search result. */
      fields?: string[];
      /** List of filters to restrict the search result. For more information, see [Search Queries > Filter](https://shopware.stoplight.io/docs/store-api/docs/concepts/search-queries.md#filter) */
      filter?: {
        field: string;
        type: string;
        value: string;
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
      crossSelling?: {
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
      products?: components["schemas"]["Product"][];
      /** Format: int32 */
      total?: number;
    }[];
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.4.0.0 */
    CurrencyCountryRounding: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.4.9.0 */
    CustomEntity: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    Customer: {
      accountType: string;
      active?: boolean;
      activeBillingAddress?: components["schemas"]["CustomerAddress"];
      activeShippingAddress?: components["schemas"]["CustomerAddress"];
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
    /** Added since version: 6.0.0.0 */
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
      id?: string;
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
    /** Added since version: 6.0.0.0 */
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
      translated?: {
        name?: string;
        registrationIntroduction?: string;
        registrationSeoMetaDescription?: string;
        registrationTitle?: string;
      };
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.1.0.0 */
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
    /** Added since version: 6.0.0.0 */
    CustomerTag: {
      customerId: string;
      id?: string;
      tag?: components["schemas"]["Tag"];
      tagId: string;
    };
    /** Added since version: 6.3.4.0 */
    CustomerWishlist: {
      /** Format: date-time */
      createdAt: string;
      customerId: string;
      customFields?: GenericRecord;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.3.4.0 */
    CustomerWishlistProduct: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      productId: string;
      productVersionId?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    CustomField: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    CustomFieldSet: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** The document's "primary data" is a representation of the resource or collection of resources targeted by a request. */
    data:
      | components["schemas"]["resource"]
      | components["schemas"]["resource"][];
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    Document: {
      config: GenericRecord;
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
      id?: string;
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    FindProductVariantRouteResponse: {
      foundCombination?: {
        options?: string[];
        variantId?: string;
      };
    };
    /** Added since version: 6.4.6.0 */
    Flow: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.4.6.0 */
    FlowSequence: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.4.18.0 */
    FlowTemplate: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
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
    /** Added since version: 6.0.0.0 */
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
    GuideHoveredPayload: {
      $hoveredElementId?: string | null;
    };
    /** Added since version: 6.0.0.0 */
    ImportExportFile: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    ImportExportLog: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    ImportExportProfile: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    info: {
      jsonapi?: components["schemas"]["jsonapi"];
      links?: components["schemas"]["links"];
      meta: components["schemas"]["meta"];
    };
    /** Added since version: 6.0.0.0 */
    Integration: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /**
     * the name/type of the interaction
     * @enum {string}
     */
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
    /**
     * Includes all data you will need to attend to a appointment.
     * @example {
     *   "mercureSubscriberTopics": [
     *     "gs-guide-actions-2d2c358f1ca04098aacf12873c2eed82",
     *     "gs-presentation-state-for-client-2d2c358f1ca04098aacf12873c2eed82",
     *     "gs-presentation-state-for-all-2d2c358f1ca04098aacf12873c2eed82"
     *   ],
     *   "mercurePublisherTopic": "gs-client-actions-2d2c358f1ca04098aacf12873c2eed82",
     *   "JWTMercureSubscriberToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6WyJncy1ndWlkZS1hY3Rpb25zLTJkMmMzNThmMWNhMDQwOThhYWNmMTI4NzNjMmVlZDgyIiwiZ3MtcHJlc2VudGF0aW9uLXN0YXRlLWZvci1jbGllbnQtMmQyYzM1OGYxY2EwNDA5OGFhY2YxMjg3M2MyZWVkODIiLCJncy1wcmVzZW50YXRpb24tc3RhdGUtZm9yLWFsbC0yZDJjMzU4ZjFjYTA0MDk4YWFjZjEyODczYzJlZWQ4MiJdLCJwdWJsaXNoIjpbXX19.UUkrRCu9PT2FOhkxhWKLo8nUGzwI7l3zqVo74laI-D8",
     *   "mercureHubPublicUrl": "http://localhost:8081/.well-known/mercure",
     *   "JWTMercurePublisherToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6W10sInB1Ymxpc2giOlsiZ3MtY2xpZW50LWFjdGlvbnMtMmQyYzM1OGYxY2EwNDA5OGFhY2YxMjg3M2MyZWVkODIiXX19.g5-_JrB2xdeByr40t7XnnK_qxqOclaY5MKBpTytdFmY",
     *   "id": "2d2c358f1ca04098aacf12873c2eed82",
     *   "newContextToken": "VR9yWqI2ovhNpdRFWbbn6Z5Fy4wUmDsm",
     *   "attendeeId": "b6358241e4ad4a4e99d0f729d21d63be",
     *   "salesChannelId": "4a791ec7f9ff46b2ad67ae2f562891d3",
     *   "presentationGuideMode": "guided",
     *   "isPreview": false,
     *   "apiAlias": "swag_guided_shopping_content_appointment_struct_appointment_join_struct"
     * }
     */
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
    /** An object describing the server's implementation */
    jsonapi: {
      meta?: components["schemas"]["meta"];
      version?: string;
    };
    /** Added since version: 6.4.0.0 */
    LandingPage: {
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
    /** Added since version: 6.4.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
      id?: string;
      label?: string;
      modified?: boolean;
      /** Format: int32 */
      quantity?: number;
      referencedId?: string;
      removable?: boolean;
      stackable?: boolean;
      type?: string;
    };
    /** A link **MUST** be represented as either: a string containing the link's URL or a link object. */
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
    /** The "type" and "id" to non-empty members. */
    linkage: {
      id: string;
      meta?: components["schemas"]["meta"];
      type: string;
    };
    links: GenericRecord;
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    LogEntry: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    MailTemplateMedia: {
      id?: string;
      languageId: string;
      mailTemplateId: string;
      media?: components["schemas"]["Media"];
      mediaId: string;
      /** Format: int64 */
      position?: number;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.1.0.0 */
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
    /** Added since version: 6.1.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
      fileExtension?: string;
      fileName?: string;
      /** Format: int64 */
      fileSize?: number;
      /** Runtime field, cannot be used as part of the criteria. */
      hasFile?: boolean;
      id?: string;
      metaData?: GenericRecord;
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
      url?: string;
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
    /** Added since version: 6.0.0.0 */
    MediaDefaultFolder: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    MediaFolder: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    MediaFolderConfiguration: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    MediaTag: {
      id?: string;
      media?: components["schemas"]["Media"];
      mediaId: string;
      tag?: components["schemas"]["Tag"];
      tagId: string;
    };
    /** Added since version: 6.0.0.0 */
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
      url?: string;
      /** Format: int64 */
      width: number;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Non-standard meta-information that can not be represented as an attribute or relationship. */
    meta: GenericRecord;
    NaturalLanguageSearchTermResponse: {
      /** @enum {string} */
      apiAlias: "product_natural_language_search_term";
      reason: string;
      term: string;
    }[];
    NavigationRouteResponse: components["schemas"]["Category"][];
    /** Added since version: 6.0.0.0 */
    NewsletterRecipient: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    NewsletterRecipientJsonApi: components["schemas"]["resource"] & {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.4.7.0 */
    Notification: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    NumberRange: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    NumberRangeSalesChannel: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    NumberRangeState: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    NumberRangeType: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
      documents?: components["schemas"]["Document"][];
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
      id?: string;
      language?: components["schemas"]["Language"];
      languageId: string;
      lineItems?: components["schemas"]["OrderLineItem"][];
      orderCustomer?: components["schemas"]["OrderCustomer"];
      orderDate?: string;
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
      stateMachineState?: components["schemas"]["StateMachineState"];
      tags?: components["schemas"]["Tag"][];
      taxStatus?: string;
      transactions?: components["schemas"]["OrderTransaction"][];
      /** Format: date-time */
      updatedAt?: string;
      updatedById?: string;
      versionId?: string;
    };
    /** Added since version: 6.0.0.0 */
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
      id?: string;
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
      payload?: GenericRecord;
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
    /** Added since version: 6.4.19.0 */
    OrderLineItemDownload: {
      accessGranted: boolean;
      /** Format: date-time */
      createdAt: string;
      customFields?: GenericRecord;
      id?: string;
      media?: components["schemas"]["Media"];
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
      orders?: components["schemas"]["Order"][];
      /** The key-value pairs contain the uuid of the order as key and a boolean as value, indicating that the payment method can still be changed. */
      paymentChangeable?: GenericRecord;
    };
    /** Added since version: 6.0.0.0 */
    OrderTag: {
      id?: string;
      order?: components["schemas"]["Order"];
      orderId: string;
      orderVersionId?: string;
      tag?: components["schemas"]["Tag"];
      tagId: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.4.12.0 */
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
    /** Added since version: 6.4.12.0 */
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
    /** Added since version: 6.4.12.0 */
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
    /** Added since version: 6.0.0.0 */
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
      id?: string;
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /**
     * @example {
     *   "extensions": {
     *     "cmsPageRelation": {
     *       "translated": {
     *         "title": null
     *       },
     *       "createdAt": "2023-08-09T11:00:13.160+00:00",
     *       "updatedAt": null,
     *       "presentationId": "506cce706e914c1e8b083f05670d85c4",
     *       "cmsPageId": "33e88c7994fa4cf79a1265e5105b93b2",
     *       "title": null,
     *       "productId": null,
     *       "productStreamId": null,
     *       "position": 2,
     *       "isInstantListing": false,
     *       "cmsPage": {
     *         "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *         "translated": {
     *           "name": "Default Guided Shopping product listing page",
     *           "customFields": []
     *         },
     *         "createdAt": "2023-08-03T17:24:09.000+00:00",
     *         "updatedAt": null,
     *         "name": "Default Guided Shopping product listing page",
     *         "type": "presentation_product_list",
     *         "entity": null,
     *         "sections": [
     *           {
     *             "translated": [],
     *             "createdAt": "2023-08-03T17:24:09.000+00:00",
     *             "updatedAt": null,
     *             "type": "default",
     *             "blocks": [
     *               {
     *                 "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "translated": [],
     *                 "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                 "updatedAt": null,
     *                 "type": "product-listing",
     *                 "slots": [
     *                   {
     *                     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "translated": {
     *                       "config": {
     *                         "filters": {
     *                           "value": "manufacturer-filter,rating-filter,price-filter,shipping-free-filter,property-filter",
     *                           "source": "static"
     *                         },
     *                         "boxLayout": {
     *                           "value": "standard",
     *                           "source": "static"
     *                         },
     *                         "showSorting": {
     *                           "value": true,
     *                           "source": "static"
     *                         },
     *                         "defaultSorting": {
     *                           "value": "",
     *                           "source": "static"
     *                         },
     *                         "useCustomSorting": {
     *                           "value": false,
     *                           "source": "static"
     *                         },
     *                         "availableSortings": {
     *                           "value": [],
     *                           "source": "static"
     *                         },
     *                         "propertyWhitelist": {
     *                           "value": [],
     *                           "source": "static"
     *                         }
     *                       },
     *                       "customFields": []
     *                     },
     *                     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                     "updatedAt": null,
     *                     "type": "product-listing",
     *                     "slot": "content",
     *                     "block": null,
     *                     "blockId": "96ea8b9676a5461c9149d205d792ecf2",
     *                     "config": {
     *                       "filters": {
     *                         "value": "manufacturer-filter,rating-filter,price-filter,shipping-free-filter,property-filter",
     *                         "source": "static"
     *                       },
     *                       "boxLayout": {
     *                         "value": "standard",
     *                         "source": "static"
     *                       },
     *                       "showSorting": {
     *                         "value": true,
     *                         "source": "static"
     *                       },
     *                       "defaultSorting": {
     *                         "value": "",
     *                         "source": "static"
     *                       },
     *                       "useCustomSorting": {
     *                         "value": false,
     *                         "source": "static"
     *                       },
     *                       "availableSortings": {
     *                         "value": [],
     *                         "source": "static"
     *                       },
     *                       "propertyWhitelist": {
     *                         "value": [],
     *                         "source": "static"
     *                       }
     *                     },
     *                     "fieldConfig": null,
     *                     "translations": null,
     *                     "data": null,
     *                     "locked": false,
     *                     "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "customFields": null,
     *                     "apiAlias": "cms_slot"
     *                   }
     *                 ],
     *                 "sectionId": "2229e1f1208a4b8086baf7aec84f5e2c",
     *                 "position": 0,
     *                 "name": null,
     *                 "sectionPosition": "main",
     *                 "marginTop": "20px",
     *                 "marginBottom": "20px",
     *                 "marginLeft": "20px",
     *                 "marginRight": "20px",
     *                 "backgroundColor": null,
     *                 "backgroundMediaId": null,
     *                 "backgroundMedia": null,
     *                 "backgroundMediaMode": "cover",
     *                 "cssClass": null,
     *                 "cmsSectionVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "visibility": null,
     *                 "customFields": null,
     *                 "apiAlias": "cms_block"
     *               }
     *             ],
     *             "pageId": "33e88c7994fa4cf79a1265e5105b93b2",
     *             "page": null,
     *             "position": 0,
     *             "sizingMode": "boxed",
     *             "mobileBehavior": "wrap",
     *             "backgroundColor": null,
     *             "backgroundMediaId": null,
     *             "backgroundMedia": null,
     *             "backgroundMediaMode": "cover",
     *             "cssClass": null,
     *             "cmsPageVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *             "visibility": null,
     *             "customFields": null,
     *             "apiAlias": "cms_section"
     *           }
     *         ],
     *         "translations": null,
     *         "cssClass": null,
     *         "config": null,
     *         "previewMediaId": null,
     *         "previewMedia": null,
     *         "landingPages": null,
     *         "id": "33e88c7994fa4cf79a1265e5105b93b2",
     *         "customFields": null,
     *         "apiAlias": "cms_page"
     *       },
     *       "pickedProductIds": null,
     *       "guidedShoppingPresentationVersionId": "213769ba28dd4ee788bdb49dc9ce53d2",
     *       "id": "4ee08e142ed046eb99681594f67599f1",
     *       "customFields": null,
     *       "cmsPageVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *       "apiAlias": "guided_shopping_presentation_cms_page"
     *     }
     *   },
     *   "cmsPage": {
     *     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *     "translated": {
     *       "name": "Default Guided Shopping product listing page",
     *       "customFields": []
     *     },
     *     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *     "updatedAt": null,
     *     "name": "Default Guided Shopping product listing page",
     *     "type": "presentation_product_list",
     *     "entity": null,
     *     "sections": [
     *       {
     *         "translated": [],
     *         "createdAt": "2023-08-03T17:24:09.000+00:00",
     *         "updatedAt": null,
     *         "type": "default",
     *         "blocks": [
     *           {
     *             "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *             "translated": [],
     *             "createdAt": "2023-08-03T17:24:09.000+00:00",
     *             "updatedAt": null,
     *             "type": "product-listing",
     *             "slots": [
     *               {
     *                 "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "translated": {
     *                   "config": {
     *                     "filters": {
     *                       "value": "manufacturer-filter,rating-filter,price-filter,shipping-free-filter,property-filter",
     *                       "source": "static"
     *                     },
     *                     "boxLayout": {
     *                       "value": "standard",
     *                       "source": "static"
     *                     },
     *                     "showSorting": {
     *                       "value": true,
     *                       "source": "static"
     *                     },
     *                     "defaultSorting": {
     *                       "value": "",
     *                       "source": "static"
     *                     },
     *                     "useCustomSorting": {
     *                       "value": false,
     *                       "source": "static"
     *                     },
     *                     "availableSortings": {
     *                       "value": [],
     *                       "source": "static"
     *                     },
     *                     "propertyWhitelist": {
     *                       "value": [],
     *                       "source": "static"
     *                     }
     *                   },
     *                   "customFields": []
     *                 },
     *                 "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                 "updatedAt": null,
     *                 "type": "product-listing",
     *                 "slot": "content",
     *                 "block": null,
     *                 "blockId": "96ea8b9676a5461c9149d205d792ecf2",
     *                 "config": {
     *                   "filters": {
     *                     "value": "manufacturer-filter,rating-filter,price-filter,shipping-free-filter,property-filter",
     *                     "source": "static"
     *                   },
     *                   "boxLayout": {
     *                     "value": "standard",
     *                     "source": "static"
     *                   },
     *                   "showSorting": {
     *                     "value": true,
     *                     "source": "static"
     *                   },
     *                   "defaultSorting": {
     *                     "value": "",
     *                     "source": "static"
     *                   },
     *                   "useCustomSorting": {
     *                     "value": false,
     *                     "source": "static"
     *                   },
     *                   "availableSortings": {
     *                     "value": [],
     *                     "source": "static"
     *                   },
     *                   "propertyWhitelist": {
     *                     "value": [],
     *                     "source": "static"
     *                   }
     *                 },
     *                 "fieldConfig": null,
     *                 "translations": null,
     *                 "data": {
     *                   "listing": {
     *                     "elements": [
     *                       {
     *                         "versionId": null,
     *                         "translated": [],
     *                         "createdAt": null,
     *                         "updatedAt": null,
     *                         "parentId": null,
     *                         "childCount": null,
     *                         "taxId": null,
     *                         "manufacturerId": null,
     *                         "unitId": null,
     *                         "active": null,
     *                         "displayGroup": null,
     *                         "manufacturerNumber": null,
     *                         "ean": null,
     *                         "sales": null,
     *                         "productNumber": null,
     *                         "stock": null,
     *                         "availableStock": null,
     *                         "available": null,
     *                         "deliveryTimeId": null,
     *                         "deliveryTime": null,
     *                         "restockTime": null,
     *                         "isCloseout": null,
     *                         "purchaseSteps": null,
     *                         "maxPurchase": null,
     *                         "minPurchase": null,
     *                         "purchaseUnit": null,
     *                         "referenceUnit": null,
     *                         "shippingFree": null,
     *                         "markAsTopseller": null,
     *                         "weight": null,
     *                         "width": null,
     *                         "height": null,
     *                         "length": null,
     *                         "releaseDate": null,
     *                         "categoryTree": null,
     *                         "streamIds": null,
     *                         "optionIds": null,
     *                         "propertyIds": null,
     *                         "name": null,
     *                         "keywords": null,
     *                         "description": null,
     *                         "metaDescription": null,
     *                         "metaTitle": null,
     *                         "packUnit": null,
     *                         "packUnitPlural": null,
     *                         "tax": null,
     *                         "manufacturer": null,
     *                         "unit": null,
     *                         "cover": null,
     *                         "parent": null,
     *                         "children": null,
     *                         "media": null,
     *                         "cmsPageId": null,
     *                         "cmsPage": null,
     *                         "translations": null,
     *                         "categories": null,
     *                         "properties": null,
     *                         "options": null,
     *                         "configuratorSettings": null,
     *                         "categoriesRo": null,
     *                         "coverId": null,
     *                         "categoryIds": null,
     *                         "productReviews": null,
     *                         "ratingAverage": null,
     *                         "mainCategories": null,
     *                         "seoUrls": null,
     *                         "crossSellings": null,
     *                         "canonicalProductId": null,
     *                         "canonicalProduct": null,
     *                         "streams": null,
     *                         "downloads": null,
     *                         "states": [],
     *                         "id": "a32702bb0b1443e3881c3b9a38c09169",
     *                         "customFields": null,
     *                         "apiAlias": "product"
     *                       }
     *                     ],
     *                     "aggregations": [],
     *                     "page": 1,
     *                     "limit": null,
     *                     "entity": "product",
     *                     "total": 0,
     *                     "states": [],
     *                     "apiAlias": "dal_entity_search_result"
     *                   },
     *                   "apiAlias": "cms_product_listing"
     *                 },
     *                 "locked": false,
     *                 "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "customFields": null,
     *                 "apiAlias": "cms_slot"
     *               }
     *             ],
     *             "sectionId": "2229e1f1208a4b8086baf7aec84f5e2c",
     *             "position": 0,
     *             "name": null,
     *             "sectionPosition": "main",
     *             "marginTop": "20px",
     *             "marginBottom": "20px",
     *             "marginLeft": "20px",
     *             "marginRight": "20px",
     *             "backgroundColor": null,
     *             "backgroundMediaId": null,
     *             "backgroundMedia": null,
     *             "backgroundMediaMode": "cover",
     *             "cssClass": null,
     *             "cmsSectionVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *             "visibility": null,
     *             "customFields": null,
     *             "apiAlias": "cms_block"
     *           }
     *         ],
     *         "pageId": "33e88c7994fa4cf79a1265e5105b93b2",
     *         "page": null,
     *         "position": 0,
     *         "sizingMode": "boxed",
     *         "mobileBehavior": "wrap",
     *         "backgroundColor": null,
     *         "backgroundMediaId": null,
     *         "backgroundMedia": null,
     *         "backgroundMediaMode": "cover",
     *         "cssClass": null,
     *         "cmsPageVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *         "visibility": null,
     *         "customFields": null,
     *         "apiAlias": "cms_section"
     *       }
     *     ],
     *     "translations": null,
     *     "cssClass": null,
     *     "config": null,
     *     "previewMediaId": null,
     *     "previewMedia": null,
     *     "landingPages": null,
     *     "id": "33e88c7994fa4cf79a1265e5105b93b2",
     *     "customFields": null,
     *     "apiAlias": "cms_page"
     *   },
     *   "category": {
     *     "versionId": null,
     *     "translated": {
     *       "breadcrumb": []
     *     },
     *     "createdAt": null,
     *     "updatedAt": null,
     *     "afterCategoryId": null,
     *     "parentId": null,
     *     "mediaId": null,
     *     "name": null,
     *     "breadcrumb": [],
     *     "path": null,
     *     "level": null,
     *     "active": null,
     *     "childCount": null,
     *     "visibleChildCount": 0,
     *     "displayNestedProducts": null,
     *     "parent": null,
     *     "children": null,
     *     "translations": null,
     *     "media": null,
     *     "cmsPageId": null,
     *     "cmsPageIdSwitched": false,
     *     "cmsPage": null,
     *     "linkType": null,
     *     "linkNewTab": null,
     *     "internalLink": null,
     *     "externalLink": null,
     *     "visible": null,
     *     "type": null,
     *     "productAssignmentType": null,
     *     "description": null,
     *     "metaTitle": null,
     *     "metaDescription": null,
     *     "keywords": null,
     *     "seoUrls": null,
     *     "customEntityTypeId": null,
     *     "id": "34f21c5eb6d54a939f10973204aa5f08",
     *     "customFields": null,
     *     "apiAlias": "category"
     *   },
     *   "apiAlias": "pwa_page_result"
     * }
     */
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
    /**
     * @example {
     *   "cmsPageResults": [
     *     {
     *       "resourceType": "frontend.presentation.page",
     *       "resourceIdentifier": "45a2b8ad0bb544e48f61eab564a2171c",
     *       "cmsPage": {
     *         "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *         "translated": {
     *           "name": "Default Guided Shopping product listing page",
     *           "customFields": []
     *         },
     *         "createdAt": "2023-08-03T17:24:09.000+00:00",
     *         "updatedAt": "2023-08-10T04:30:28.668+00:00",
     *         "name": "Default Guided Shopping product listing page",
     *         "type": "presentation_product_list",
     *         "entity": null,
     *         "sections": [
     *           {
     *             "extensions": {
     *               "translations": []
     *             },
     *             "translated": [],
     *             "createdAt": "2023-08-03T17:24:09.000+00:00",
     *             "updatedAt": "2023-08-10T04:30:28.668+00:00",
     *             "type": "default",
     *             "blocks": [
     *               {
     *                 "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "translated": [],
     *                 "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                 "updatedAt": "2023-08-10T04:30:28.667+00:00",
     *                 "type": "product-listing",
     *                 "slots": [
     *                   {
     *                     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "translated": {
     *                       "config": {
     *                         "filters": {
     *                           "value": "manufacturer-filter,rating-filter,price-filter,shipping-free-filter,property-filter",
     *                           "source": "static"
     *                         },
     *                         "boxLayout": {
     *                           "value": "standard",
     *                           "source": "static"
     *                         },
     *                         "showSorting": {
     *                           "value": true,
     *                           "source": "static"
     *                         },
     *                         "defaultSorting": {
     *                           "value": "",
     *                           "source": "static"
     *                         },
     *                         "useCustomSorting": {
     *                           "value": false,
     *                           "source": "static"
     *                         },
     *                         "availableSortings": {
     *                           "value": [],
     *                           "source": "static"
     *                         },
     *                         "propertyWhitelist": {
     *                           "value": [],
     *                           "source": "static"
     *                         }
     *                       },
     *                       "customFields": []
     *                     },
     *                     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                     "updatedAt": null,
     *                     "type": "product-listing",
     *                     "slot": "content",
     *                     "block": null,
     *                     "blockId": "96ea8b9676a5461c9149d205d792ecf2",
     *                     "config": {
     *                       "filters": {
     *                         "value": "manufacturer-filter,rating-filter,price-filter,shipping-free-filter,property-filter",
     *                         "source": "static"
     *                       },
     *                       "boxLayout": {
     *                         "value": "standard",
     *                         "source": "static"
     *                       },
     *                       "showSorting": {
     *                         "value": true,
     *                         "source": "static"
     *                       },
     *                       "defaultSorting": {
     *                         "value": "",
     *                         "source": "static"
     *                       },
     *                       "useCustomSorting": {
     *                         "value": false,
     *                         "source": "static"
     *                       },
     *                       "availableSortings": {
     *                         "value": [],
     *                         "source": "static"
     *                       },
     *                       "propertyWhitelist": {
     *                         "value": [],
     *                         "source": "static"
     *                       }
     *                     },
     *                     "fieldConfig": null,
     *                     "translations": null,
     *                     "data": null,
     *                     "locked": false,
     *                     "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "customFields": null,
     *                     "apiAlias": "cms_slot"
     *                   }
     *                 ],
     *                 "sectionId": "2229e1f1208a4b8086baf7aec84f5e2c",
     *                 "position": 1,
     *                 "name": null,
     *                 "sectionPosition": "main",
     *                 "marginTop": "20px",
     *                 "marginBottom": "20px",
     *                 "marginLeft": "20px",
     *                 "marginRight": "20px",
     *                 "backgroundColor": null,
     *                 "backgroundMediaId": null,
     *                 "backgroundMedia": null,
     *                 "backgroundMediaMode": "cover",
     *                 "cssClass": null,
     *                 "cmsSectionVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "visibility": {
     *                   "mobile": true,
     *                   "tablet": true,
     *                   "desktop": true
     *                 },
     *                 "customFields": null,
     *                 "apiAlias": "cms_block"
     *               }
     *             ],
     *             "pageId": "33e88c7994fa4cf79a1265e5105b93b2",
     *             "page": null,
     *             "position": 0,
     *             "sizingMode": "boxed",
     *             "mobileBehavior": "wrap",
     *             "backgroundColor": null,
     *             "backgroundMediaId": null,
     *             "backgroundMedia": null,
     *             "backgroundMediaMode": "cover",
     *             "cssClass": null,
     *             "cmsPageVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *             "visibility": {
     *               "mobile": true,
     *               "tablet": true,
     *               "desktop": true
     *             },
     *             "customFields": null,
     *             "apiAlias": "cms_section"
     *           }
     *         ],
     *         "translations": null,
     *         "cssClass": null,
     *         "config": null,
     *         "previewMediaId": null,
     *         "previewMedia": null,
     *         "landingPages": null,
     *         "id": "33e88c7994fa4cf79a1265e5105b93b2",
     *         "customFields": null,
     *         "apiAlias": "cms_page"
     *       },
     *       "apiAlias": "pwa_page_result"
     *     },
     *     {
     *       "resourceType": "frontend.presentation.page",
     *       "resourceIdentifier": "45a2b8ad0bb544e48f61eab564a2171c",
     *       "cmsPage": {
     *         "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *         "translated": {
     *           "name": "Default Guided Shopping product detail page",
     *           "customFields": []
     *         },
     *         "createdAt": "2023-08-03T17:24:09.000+00:00",
     *         "updatedAt": null,
     *         "name": "Default Guided Shopping product detail page",
     *         "type": "presentation_product_detail",
     *         "entity": null,
     *         "sections": [
     *           {
     *             "extensions": {
     *               "translations": []
     *             },
     *             "translated": [],
     *             "createdAt": "2023-08-03T17:24:09.000+00:00",
     *             "updatedAt": null,
     *             "type": "default",
     *             "blocks": [
     *               {
     *                 "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "translated": [],
     *                 "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                 "updatedAt": null,
     *                 "type": "product-heading",
     *                 "slots": [
     *                   {
     *                     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "translated": {
     *                       "config": [],
     *                       "customFields": []
     *                     },
     *                     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                     "updatedAt": null,
     *                     "type": "like",
     *                     "slot": "right",
     *                     "block": null,
     *                     "blockId": "c0d3daba2e244122947438c28f776d41",
     *                     "config": [],
     *                     "fieldConfig": null,
     *                     "translations": null,
     *                     "data": null,
     *                     "locked": false,
     *                     "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "customFields": null,
     *                     "apiAlias": "cms_slot"
     *                   },
     *                   {
     *                     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "translated": {
     *                       "config": {
     *                         "content": {
     *                           "value": "product.name",
     *                           "source": "mapped"
     *                         },
     *                         "verticalAlign": {
     *                           "value": null,
     *                           "source": "static"
     *                         }
     *                       },
     *                       "customFields": []
     *                     },
     *                     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                     "updatedAt": null,
     *                     "type": "product-name",
     *                     "slot": "left",
     *                     "block": null,
     *                     "blockId": "c0d3daba2e244122947438c28f776d41",
     *                     "config": {
     *                       "content": {
     *                         "value": "product.name",
     *                         "source": "mapped"
     *                       },
     *                       "verticalAlign": {
     *                         "value": null,
     *                         "source": "static"
     *                       }
     *                     },
     *                     "fieldConfig": null,
     *                     "translations": null,
     *                     "data": null,
     *                     "locked": false,
     *                     "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "customFields": null,
     *                     "apiAlias": "cms_slot"
     *                   }
     *                 ],
     *                 "sectionId": "f4aaa27972314e3c9b7f3bb35c7f8a10",
     *                 "position": 0,
     *                 "name": null,
     *                 "sectionPosition": "main",
     *                 "marginTop": "0",
     *                 "marginBottom": "20px",
     *                 "marginLeft": "0",
     *                 "marginRight": "0",
     *                 "backgroundColor": null,
     *                 "backgroundMediaId": null,
     *                 "backgroundMedia": null,
     *                 "backgroundMediaMode": "cover",
     *                 "cssClass": null,
     *                 "cmsSectionVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "visibility": null,
     *                 "customFields": null,
     *                 "apiAlias": "cms_block"
     *               },
     *               {
     *                 "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "translated": [],
     *                 "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                 "updatedAt": null,
     *                 "type": "image-gallery-big",
     *                 "slots": [
     *                   {
     *                     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "translated": {
     *                       "config": {
     *                         "zoom": {
     *                           "value": true,
     *                           "source": "static"
     *                         },
     *                         "minHeight": {
     *                           "value": "430px",
     *                           "source": "static"
     *                         },
     *                         "fullScreen": {
     *                           "value": true,
     *                           "source": "static"
     *                         },
     *                         "displayMode": {
     *                           "value": "contain",
     *                           "source": "static"
     *                         },
     *                         "sliderItems": {
     *                           "value": "product.media",
     *                           "source": "mapped"
     *                         },
     *                         "bigImageMode": {
     *                           "value": true,
     *                           "source": "static"
     *                         },
     *                         "verticalAlign": {
     *                           "value": null,
     *                           "source": "static"
     *                         },
     *                         "navigationDots": {
     *                           "value": "inside",
     *                           "source": "static"
     *                         },
     *                         "galleryPosition": {
     *                           "value": "left",
     *                           "source": "static"
     *                         },
     *                         "navigationArrows": {
     *                           "value": "inside",
     *                           "source": "static"
     *                         }
     *                       },
     *                       "customFields": []
     *                     },
     *                     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                     "updatedAt": null,
     *                     "type": "image-gallery",
     *                     "slot": "imageGallery",
     *                     "block": null,
     *                     "blockId": "47cc4a3919794162982ea83f64a836fe",
     *                     "config": {
     *                       "zoom": {
     *                         "value": true,
     *                         "source": "static"
     *                       },
     *                       "minHeight": {
     *                         "value": "430px",
     *                         "source": "static"
     *                       },
     *                       "fullScreen": {
     *                         "value": true,
     *                         "source": "static"
     *                       },
     *                       "displayMode": {
     *                         "value": "contain",
     *                         "source": "static"
     *                       },
     *                       "sliderItems": {
     *                         "value": "product.media",
     *                         "source": "mapped"
     *                       },
     *                       "bigImageMode": {
     *                         "value": true,
     *                         "source": "static"
     *                       },
     *                       "verticalAlign": {
     *                         "value": null,
     *                         "source": "static"
     *                       },
     *                       "navigationDots": {
     *                         "value": "inside",
     *                         "source": "static"
     *                       },
     *                       "galleryPosition": {
     *                         "value": "left",
     *                         "source": "static"
     *                       },
     *                       "navigationArrows": {
     *                         "value": "inside",
     *                         "source": "static"
     *                       }
     *                     },
     *                     "fieldConfig": null,
     *                     "translations": null,
     *                     "data": null,
     *                     "locked": false,
     *                     "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "customFields": null,
     *                     "apiAlias": "cms_slot"
     *                   }
     *                 ],
     *                 "sectionId": "f4aaa27972314e3c9b7f3bb35c7f8a10",
     *                 "position": 1,
     *                 "name": null,
     *                 "sectionPosition": "main",
     *                 "marginTop": "20px",
     *                 "marginBottom": "20px",
     *                 "marginLeft": "20px",
     *                 "marginRight": "20px",
     *                 "backgroundColor": null,
     *                 "backgroundMediaId": null,
     *                 "backgroundMedia": null,
     *                 "backgroundMediaMode": "cover",
     *                 "cssClass": null,
     *                 "cmsSectionVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "visibility": null,
     *                 "customFields": null,
     *                 "apiAlias": "cms_block"
     *               },
     *               {
     *                 "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "translated": [],
     *                 "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                 "updatedAt": null,
     *                 "type": "text-two-column",
     *                 "slots": [
     *                   {
     *                     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "translated": {
     *                       "config": {
     *                         "product": {
     *                           "value": null,
     *                           "source": "static"
     *                         },
     *                         "alignment": {
     *                           "value": null,
     *                           "source": "static"
     *                         }
     *                       },
     *                       "customFields": []
     *                     },
     *                     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                     "updatedAt": null,
     *                     "type": "buy-box",
     *                     "slot": "right",
     *                     "block": null,
     *                     "blockId": "095cd9a4eb49493aa95ea1e7a84a9503",
     *                     "config": {
     *                       "product": {
     *                         "value": null,
     *                         "source": "static"
     *                       },
     *                       "alignment": {
     *                         "value": null,
     *                         "source": "static"
     *                       }
     *                     },
     *                     "fieldConfig": null,
     *                     "translations": null,
     *                     "data": null,
     *                     "locked": false,
     *                     "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "customFields": null,
     *                     "apiAlias": "cms_slot"
     *                   },
     *                   {
     *                     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "translated": {
     *                       "config": {
     *                         "product": {
     *                           "value": null,
     *                           "source": "static"
     *                         },
     *                         "alignment": {
     *                           "value": null,
     *                           "source": "static"
     *                         }
     *                       },
     *                       "customFields": []
     *                     },
     *                     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                     "updatedAt": null,
     *                     "type": "product-description-reviews",
     *                     "slot": "left",
     *                     "block": null,
     *                     "blockId": "095cd9a4eb49493aa95ea1e7a84a9503",
     *                     "config": {
     *                       "product": {
     *                         "value": null,
     *                         "source": "static"
     *                       },
     *                       "alignment": {
     *                         "value": null,
     *                         "source": "static"
     *                       }
     *                     },
     *                     "fieldConfig": null,
     *                     "translations": null,
     *                     "data": null,
     *                     "locked": false,
     *                     "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "customFields": null,
     *                     "apiAlias": "cms_slot"
     *                   }
     *                 ],
     *                 "sectionId": "f4aaa27972314e3c9b7f3bb35c7f8a10",
     *                 "position": 2,
     *                 "name": null,
     *                 "sectionPosition": "main",
     *                 "marginTop": "20px",
     *                 "marginBottom": "20px",
     *                 "marginLeft": "20px",
     *                 "marginRight": "20px",
     *                 "backgroundColor": null,
     *                 "backgroundMediaId": null,
     *                 "backgroundMedia": null,
     *                 "backgroundMediaMode": "cover",
     *                 "cssClass": null,
     *                 "cmsSectionVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "visibility": null,
     *                 "customFields": null,
     *                 "apiAlias": "cms_block"
     *               },
     *               {
     *                 "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "translated": [],
     *                 "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                 "updatedAt": null,
     *                 "type": "cross-selling",
     *                 "slots": [
     *                   {
     *                     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "translated": {
     *                       "config": {
     *                         "product": {
     *                           "value": null,
     *                           "source": "static"
     *                         },
     *                         "boxLayout": {
     *                           "value": "standard",
     *                           "source": "static"
     *                         },
     *                         "elMinWidth": {
     *                           "value": "300px",
     *                           "source": "static"
     *                         },
     *                         "displayMode": {
     *                           "value": "standard",
     *                           "source": "static"
     *                         }
     *                       },
     *                       "customFields": []
     *                     },
     *                     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                     "updatedAt": null,
     *                     "type": "cross-selling",
     *                     "slot": "content",
     *                     "block": null,
     *                     "blockId": "2d69edd4faab493baa056c81ea8d131f",
     *                     "config": {
     *                       "product": {
     *                         "value": null,
     *                         "source": "static"
     *                       },
     *                       "boxLayout": {
     *                         "value": "standard",
     *                         "source": "static"
     *                       },
     *                       "elMinWidth": {
     *                         "value": "300px",
     *                         "source": "static"
     *                       },
     *                       "displayMode": {
     *                         "value": "standard",
     *                         "source": "static"
     *                       }
     *                     },
     *                     "fieldConfig": null,
     *                     "translations": null,
     *                     "data": null,
     *                     "locked": false,
     *                     "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "customFields": null,
     *                     "apiAlias": "cms_slot"
     *                   }
     *                 ],
     *                 "sectionId": "f4aaa27972314e3c9b7f3bb35c7f8a10",
     *                 "position": 3,
     *                 "name": null,
     *                 "sectionPosition": "main",
     *                 "marginTop": "0",
     *                 "marginBottom": "0",
     *                 "marginLeft": "0",
     *                 "marginRight": "0",
     *                 "backgroundColor": null,
     *                 "backgroundMediaId": null,
     *                 "backgroundMedia": null,
     *                 "backgroundMediaMode": "cover",
     *                 "cssClass": null,
     *                 "cmsSectionVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "visibility": null,
     *                 "customFields": null,
     *                 "apiAlias": "cms_block"
     *               }
     *             ],
     *             "pageId": "bea211b5099241719830df8026624f7f",
     *             "page": null,
     *             "position": 0,
     *             "sizingMode": "boxed",
     *             "mobileBehavior": "wrap",
     *             "backgroundColor": null,
     *             "backgroundMediaId": null,
     *             "backgroundMedia": null,
     *             "backgroundMediaMode": "cover",
     *             "cssClass": null,
     *             "cmsPageVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *             "visibility": null,
     *             "customFields": null,
     *             "apiAlias": "cms_section"
     *           }
     *         ],
     *         "translations": null,
     *         "cssClass": null,
     *         "config": null,
     *         "previewMediaId": null,
     *         "previewMedia": null,
     *         "landingPages": null,
     *         "id": "bea211b5099241719830df8026624f7f",
     *         "customFields": null,
     *         "apiAlias": "cms_page"
     *       },
     *       "apiAlias": "pwa_page_result"
     *     },
     *     {
     *       "resourceType": "frontend.presentation.page",
     *       "resourceIdentifier": "45a2b8ad0bb544e48f61eab564a2171c",
     *       "cmsPage": {
     *         "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *         "translated": {
     *           "name": "Ended presentation page",
     *           "customFields": []
     *         },
     *         "createdAt": "2023-08-03T17:24:09.000+00:00",
     *         "updatedAt": null,
     *         "name": "Ended presentation page",
     *         "type": "presentation_product_list",
     *         "entity": null,
     *         "sections": [
     *           {
     *             "extensions": {
     *               "translations": []
     *             },
     *             "translated": [],
     *             "createdAt": "2023-08-03T17:24:09.000+00:00",
     *             "updatedAt": null,
     *             "type": "default",
     *             "blocks": [
     *               {
     *                 "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "translated": [],
     *                 "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                 "updatedAt": null,
     *                 "type": "text-hero",
     *                 "slots": [
     *                   {
     *                     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "translated": {
     *                       "config": {
     *                         "content": {
     *                           "value": "<h2 style=\"text-align: center;\">The live presentation ended</h2>\n                        <hr>\n                        <p style=\"text-align: center;\">Thank you for your attention!</p><p style=\"text-align: center;\">Below you can find all products wich were presented to you.</p>",
     *                           "source": "static"
     *                         },
     *                         "verticalAlign": {
     *                           "value": null,
     *                           "source": "static"
     *                         }
     *                       },
     *                       "customFields": []
     *                     },
     *                     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                     "updatedAt": null,
     *                     "type": "text",
     *                     "slot": "content",
     *                     "block": null,
     *                     "blockId": "c49b01e9c6624973b9cdd1992d3c009a",
     *                     "config": {
     *                       "content": {
     *                         "value": "<h2 style=\"text-align: center;\">The live presentation ended</h2>\n                        <hr>\n                        <p style=\"text-align: center;\">Thank you for your attention!</p><p style=\"text-align: center;\">Below you can find all products wich were presented to you.</p>",
     *                         "source": "static"
     *                       },
     *                       "verticalAlign": {
     *                         "value": null,
     *                         "source": "static"
     *                       }
     *                     },
     *                     "fieldConfig": null,
     *                     "translations": null,
     *                     "data": null,
     *                     "locked": false,
     *                     "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "customFields": null,
     *                     "apiAlias": "cms_slot"
     *                   }
     *                 ],
     *                 "sectionId": "0a5e89814463470684a734b975add4ed",
     *                 "position": 0,
     *                 "name": null,
     *                 "sectionPosition": "main",
     *                 "marginTop": "20px",
     *                 "marginBottom": "20px",
     *                 "marginLeft": "20px",
     *                 "marginRight": "20px",
     *                 "backgroundColor": null,
     *                 "backgroundMediaId": null,
     *                 "backgroundMedia": null,
     *                 "backgroundMediaMode": "cover",
     *                 "cssClass": null,
     *                 "cmsSectionVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "visibility": null,
     *                 "customFields": null,
     *                 "apiAlias": "cms_block"
     *               },
     *               {
     *                 "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "translated": [],
     *                 "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                 "updatedAt": null,
     *                 "type": "product-listing",
     *                 "slots": [
     *                   {
     *                     "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "translated": {
     *                       "config": {
     *                         "filters": {
     *                           "value": "manufacturer-filter,rating-filter,price-filter,shipping-free-filter,property-filter",
     *                           "source": "static"
     *                         },
     *                         "boxLayout": {
     *                           "value": "standard",
     *                           "source": "static"
     *                         },
     *                         "showSorting": {
     *                           "value": true,
     *                           "source": "static"
     *                         },
     *                         "defaultSorting": {
     *                           "value": "",
     *                           "source": "static"
     *                         },
     *                         "useCustomSorting": {
     *                           "value": false,
     *                           "source": "static"
     *                         },
     *                         "availableSortings": {
     *                           "value": [],
     *                           "source": "static"
     *                         },
     *                         "propertyWhitelist": {
     *                           "value": [],
     *                           "source": "static"
     *                         }
     *                       },
     *                       "customFields": []
     *                     },
     *                     "createdAt": "2023-08-03T17:24:09.000+00:00",
     *                     "updatedAt": null,
     *                     "type": "product-listing",
     *                     "slot": "content",
     *                     "block": null,
     *                     "blockId": "0a13f5daa9be4e7b8ed5e3ecaba79fe6",
     *                     "config": {
     *                       "filters": {
     *                         "value": "manufacturer-filter,rating-filter,price-filter,shipping-free-filter,property-filter",
     *                         "source": "static"
     *                       },
     *                       "boxLayout": {
     *                         "value": "standard",
     *                         "source": "static"
     *                       },
     *                       "showSorting": {
     *                         "value": true,
     *                         "source": "static"
     *                       },
     *                       "defaultSorting": {
     *                         "value": "",
     *                         "source": "static"
     *                       },
     *                       "useCustomSorting": {
     *                         "value": false,
     *                         "source": "static"
     *                       },
     *                       "availableSortings": {
     *                         "value": [],
     *                         "source": "static"
     *                       },
     *                       "propertyWhitelist": {
     *                         "value": [],
     *                         "source": "static"
     *                       }
     *                     },
     *                     "fieldConfig": null,
     *                     "translations": null,
     *                     "data": null,
     *                     "locked": false,
     *                     "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                     "customFields": null,
     *                     "apiAlias": "cms_slot"
     *                   }
     *                 ],
     *                 "sectionId": "0a5e89814463470684a734b975add4ed",
     *                 "position": 1,
     *                 "name": null,
     *                 "sectionPosition": "main",
     *                 "marginTop": "20px",
     *                 "marginBottom": "20px",
     *                 "marginLeft": "20px",
     *                 "marginRight": "20px",
     *                 "backgroundColor": null,
     *                 "backgroundMediaId": null,
     *                 "backgroundMedia": null,
     *                 "backgroundMediaMode": "cover",
     *                 "cssClass": null,
     *                 "cmsSectionVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *                 "visibility": null,
     *                 "customFields": null,
     *                 "apiAlias": "cms_block"
     *               }
     *             ],
     *             "pageId": "8ea80092faa744559409f3e9f7adcc6b",
     *             "page": null,
     *             "position": 0,
     *             "sizingMode": "boxed",
     *             "mobileBehavior": "wrap",
     *             "backgroundColor": null,
     *             "backgroundMediaId": null,
     *             "backgroundMedia": null,
     *             "backgroundMediaMode": "cover",
     *             "cssClass": null,
     *             "cmsPageVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *             "visibility": null,
     *             "customFields": null,
     *             "apiAlias": "cms_section"
     *           }
     *         ],
     *         "translations": null,
     *         "cssClass": null,
     *         "config": null,
     *         "previewMediaId": null,
     *         "previewMedia": null,
     *         "landingPages": null,
     *         "id": "8ea80092faa744559409f3e9f7adcc6b",
     *         "customFields": null,
     *         "apiAlias": "cms_page"
     *       },
     *       "apiAlias": "pwa_page_result"
     *     }
     *   ],
     *   "navigation": [
     *     {
     *       "groupName": "Default Guided Shopping product listing page",
     *       "groupId": "468b0e34237a44ad8f8a8d5e0b72b78f",
     *       "cmsPageId": "33e88c7994fa4cf79a1265e5105b93b2",
     *       "name": null,
     *       "id": "2229e1f1208a4b8086baf7aec84f5e2c",
     *       "index": 1,
     *       "notes": [
     *         {
     *           "extensions": {
     *             "foreignKeys": {
     *               "extensions": [],
     *               "apiAlias": "cms_slot_foreign_keys_extension"
     *             }
     *           },
     *           "_uniqueIdentifier": "de28c711c20b4ad0a54871d5a23109fc",
     *           "versionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *           "translated": {
     *             "config": {
     *               "content": {
     *                 "value": "<h2>Lorem Ipsum dolor sit amet</h2>\n                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \n                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \n                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \n                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. \n                At vero eos et accusam et justo duo dolores et ea rebum. \n                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>",
     *                 "source": "static"
     *               },
     *               "verticalAlign": {
     *                 "value": null,
     *                 "source": "static"
     *               }
     *             },
     *             "customFields": []
     *           },
     *           "createdAt": "2023-08-10T04:30:28.649+00:00",
     *           "updatedAt": null,
     *           "type": "notes",
     *           "slot": "content",
     *           "block": null,
     *           "blockId": "978ca9beff6e4edca6d5263fac254e13",
     *           "config": {
     *             "content": {
     *               "value": "<h2>Lorem Ipsum dolor sit amet</h2>\n                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \n                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \n                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \n                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. \n                At vero eos et accusam et justo duo dolores et ea rebum. \n                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>",
     *               "source": "static"
     *             },
     *             "verticalAlign": {
     *               "value": null,
     *               "source": "static"
     *             }
     *           },
     *           "fieldConfig": null,
     *           "translations": null,
     *           "data": null,
     *           "locked": false,
     *           "cmsBlockVersionId": "0fa91ce3e96a4bc2be4bd9ce752c3425",
     *           "id": "de28c711c20b4ad0a54871d5a23109fc",
     *           "customFields": null
     *         }
     *       ]
     *     },
     *     {
     *       "groupName": "Default Guided Shopping product detail page",
     *       "groupId": "52f1e61cd45945a0b72bd613d1268d65",
     *       "cmsPageId": "bea211b5099241719830df8026624f7f",
     *       "name": null,
     *       "id": "f4aaa27972314e3c9b7f3bb35c7f8a10",
     *       "index": 2,
     *       "notes": []
     *     },
     *     {
     *       "groupName": "Ended presentation page",
     *       "groupId": "b073190abe03407993f41b8d5bc8ba57",
     *       "cmsPageId": "8ea80092faa744559409f3e9f7adcc6b",
     *       "name": null,
     *       "id": "0a5e89814463470684a734b975add4ed",
     *       "index": 3,
     *       "notes": []
     *     }
     *   ],
     *   "apiAlias": "pwa_page_result"
     * }
     */
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
    /** Added since version: 6.0.0.0 */
    Product: {
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
      id?: string;
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
      seoCategory?: components["schemas"]["Category"];
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
      versionId?: string;
      /** Format: float */
      weight?: number;
      /** Format: float */
      width?: number;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.1.0.0 */
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
    /** Added since version: 6.2.0.0 */
    ProductCrossSellingAssignedProducts: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Represents a product along with detailed information required to display a variant selection. */
    ProductDetailResponse: {
      /** List of property groups with their corresponding options and information on how to display them. */
      configurator?: components["schemas"]["PropertyGroup"][];
      product?: components["schemas"]["Product"];
    };
    /** Added since version: 6.4.19.0 */
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
    /** Added since version: 6.1.0.0 */
    ProductExport: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.3.0.0 */
    ProductFeatureSet: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Additional flags for product listings */
    ProductListingFlags: {
      /** Resets all aggregations in the criteria. This parameter is a flag, the value has no effect. */
      "no-aggregations"?: string | null;
      /** If this flag is set, no products are fetched. Sorting and associations are also ignored. This parameter is a flag, the value has no effect. */
      "only-aggregations"?: string | null;
    };
    ProductListingResult: components["schemas"]["EntitySearchResult"] & {
      /** Contains the available sorting. These can be used to show a sorting select-box in the product listing. */
      availableSortings?: GenericRecord[];
      /** Contains the state of the filters. These can be used to create listing filters. */
      currentFilters?: {
        manufacturer?: GenericRecord[];
        navigationId?: string;
        price?: {
          max?: number;
          min?: number;
        };
        properties?: GenericRecord[];
        rating?: number;
        "shipping-free"?: boolean;
      };
      elements?: components["schemas"]["Product"][];
      sorting?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    };
    ProductPayload: {
      /** the id from the product which is used in the interaction */
      productId: string;
    };
    /** Added since version: 6.0.0.0 */
    ProductPrice: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    ProductReview: {
      comment?: string;
      content: string;
      /** Format: date-time */
      createdAt: string;
      customFields?: GenericRecord;
      id?: string;
      languageId: string;
      /** Format: float */
      points?: number;
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
    /** Added since version: 6.3.5.0 */
    ProductSearchConfig: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.3.5.0 */
    ProductSearchConfigField: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    ProductSearchKeyword: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.3.2.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    ProductStreamFilter: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    Promotion: {
      /** Format: date-time */
      createdAt: string;
      customFields?: GenericRecord;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    PromotionDiscount: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    PromotionDiscountPrices: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    PromotionIndividualCode: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    PromotionSalesChannel: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    PromotionSetgroup: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    PropertyGroupOption: {
      colorHexCode?: string;
      /** Format: date-time */
      createdAt: string;
      customFields?: GenericRecord;
      group?: components["schemas"]["PropertyGroup"];
      groupId: string;
      id?: string;
      media?: components["schemas"]["Media"];
      mediaId?: string;
      name: string;
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
    /** Added since version: 6.5.3.0 */
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
    /** Added since version: 6.5.3.0 */
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
    /** Added since version: 6.5.3.0 */
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
    /** Added since version: 6.5.3.0 */
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
    /** Added since version: 6.5.3.0 */
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
    /** A resource object **MAY** contain references to other resource objects ("relationships"). Relationships may be to-one or to-many. Relationships can be specified by including a member in a resource's links object. */
    relationshipLinks: {
      related?: components["schemas"]["link"];
      self?: GenericRecord[] & components["schemas"]["link"];
      [key: string]: unknown;
    };
    /** Members of the relationships object ("relationships") represent references from the resource object in which it's defined to other resource objects. */
    relationships: unknown;
    /** An array of objects each containing \"type\" and \"id\" members for to-many relationships. */
    relationshipToMany: components["schemas"]["linkage"][];
    relationshipToOne: components["schemas"]["linkage"];
    /** "Resource objects" appear in a JSON API document to represent resources. */
    resource: {
      attributes?: components["schemas"]["attributes"];
      id: string;
      links?: components["schemas"]["links"];
      meta?: components["schemas"]["meta"];
      relationships?: components["schemas"]["relationships"];
      type: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.2.0.0 */
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
        scope?: string;
        source?: string;
        taxState?: string;
        useCache?: boolean;
        versionId?: string;
      };
      /** Currency associated with the current user */
      currency?: {
        /** Format: int32 */
        decimalPrecision?: number;
        factor?: number;
        isoCode?: string;
        isSystemDefault?: boolean;
        name?: string;
        /** Format: int32 */
        position?: number;
        shortName?: string;
        symbol?: string;
      };
      /** Customer group of the current user */
      currentCustomerGroup?: {
        displayGross?: boolean;
        name?: string;
      };
      /** Information about the current customer - `null` if the customer is not logged in */
      customer?: {
        active?: boolean;
        activeBillingAddress?: components["schemas"]["CustomerAddress"];
        activeShippingAddress?: components["schemas"]["CustomerAddress"];
        affiliateCode?: string;
        /** Format: int32 */
        autoIncrement?: number;
        /** Format: date-time */
        birthday?: string;
        campaignCode?: string;
        company?: string;
        customerNumber?: string;
        defaultBillingAddress?: components["schemas"]["CustomerAddress"];
        defaultBillingAddressId?: string;
        defaultPaymentMethodId?: string;
        defaultShippingAddress?: components["schemas"]["CustomerAddress"];
        defaultShippingAddressId?: string;
        /** Format: date-time */
        doubleOptInConfirmDate?: string;
        /** Format: date-time */
        doubleOptInEmailSentDate?: string;
        doubleOptInRegistration?: boolean;
        email?: string;
        /** Format: date-time */
        firstLogin?: string;
        firstName?: string;
        groupId?: string;
        guest?: boolean;
        hash?: string;
        languageId?: string;
        /** Format: date-time */
        lastLogin?: string;
        lastName?: string;
        /** Format: date-time */
        lastOrderDate?: string;
        lastPaymentMethodId?: string;
        legacyEncoder?: string;
        legacyPassword?: string;
        newsletter?: boolean;
        /** Format: int32 */
        orderCount?: number;
        password?: string;
        remoteAddress?: string;
        salesChannelId?: string;
        salutationId?: string;
        title?: string;
      };
      /** Fallback group if the default customer group is not applicable */
      fallbackCustomerGroup?: {
        displayGross?: boolean;
        name?: string;
      };
      /** Selected payment method */
      paymentMethod?: {
        active?: boolean;
        availabilityRuleId?: string;
        description?: string;
        formattedHandlerIdentifier?: string;
        handlerIdentifier?: string;
        mediaId?: string;
        name?: string;
        pluginId?: string;
        /** Format: int32 */
        position?: number;
      };
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
      /** Selected shipping method */
      shippingMethod?: {
        active?: boolean;
        availabilityRuleId?: string;
        deliveryTimeId?: string;
        description?: string;
        mediaId?: string;
        name?: string;
        trackingUrl?: string;
      };
      /** Currently active tax rules and/or rates */
      taxRules?: {
        name?: string;
        /** Format: float */
        taxRate?: number;
      }[];
      /** Context the user session */
      token?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    SalesChannelType: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    ScheduledTask: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.4.7.0 */
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
    /** Added since version: 6.0.0.0 */
    SeoUrl: {
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    ShippingMethod: {
      active?: boolean;
      availabilityRule?: components["schemas"]["Rule"];
      /** Format: date-time */
      createdAt: string;
      customFields?: GenericRecord;
      deliveryTime?: components["schemas"]["DeliveryTime"];
      deliveryTimeId: string;
      description?: string;
      id?: string;
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
      created?: string;
      filename?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    StateMachineHistory: {
      /** Format: date-time */
      createdAt: string;
      fromStateMachineState?: components["schemas"]["StateMachineState"];
      id?: string;
      toStateMachineState?: components["schemas"]["StateMachineState"];
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    success: {
      data: components["schemas"]["data"];
      /** To reduce the number of HTTP requests, servers **MAY** allow responses that include related resources along with the requested primary resources. Such responses are called "compound documents". */
      included?: components["schemas"]["resource"][];
      /** Link members related to the primary data. */
      links?: components["schemas"]["links"] &
        components["schemas"]["pagination"];
      meta?: components["schemas"]["meta"];
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    Tag: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      name: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.5.0.0 */
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
    /** Added since version: 6.1.0.0 */
    TaxRule: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.1.0.0 */
    TaxRuleType: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      translated?: Record<string, never>;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.0.0.0 */
    User: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
    UserAccessKey: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.3.5.0 */
    UserConfig: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.0.0.0 */
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
    /** Added since version: 6.3.1.0 */
    Webhook: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    /** Added since version: 6.4.1.0 */
    WebhookEventLog: {
      /** Format: date-time */
      createdAt: string;
      id?: string;
      /** Format: date-time */
      updatedAt?: string;
    };
    WishlistLoadRouteResponse: {
      products?: components["schemas"]["ProductListingResult"][];
      wishlist?: {
        customerId?: string;
        salesChannelId?: string;
      };
    };
  };
  responses: {
    /** No Content */
    204: {
      content: never;
    };
    /** Bad Request */
    400: {
      content: {
        "application/json": components["schemas"]["failure"];
        "application/vnd.api+json": components["schemas"]["failure"];
      };
    };
    /** Unauthorized */
    401: {
      content: {
        "application/json": components["schemas"]["failure"];
        "application/vnd.api+json": components["schemas"]["failure"];
      };
    };
    /** Forbidden */
    403: {
      content: {
        "application/json": components["schemas"]["failure"];
        "application/vnd.api+json": components["schemas"]["failure"];
      };
    };
    /** Not Found */
    404: {
      content: {
        "application/json": components["schemas"]["failure"];
        "application/vnd.api+json": components["schemas"]["failure"];
      };
    };
    /** Returns the context token. Use that as your `sw-context-token` header for subsequent requests. Redirect if getRedirectUrl is set. */
    ContextTokenResponse: {
      headers: {
        /** Contains sw-context-token value */
        "sw-context-token"?: string;
      };
      content: {
        "application/json": {
          /**
           * @deprecated
           * Deprecated since v6.6.0.0. Please retrieve the context token from the response header instead.
           */
          contextToken?: string;
          /** Define the URL which browser will be redirected to */
          redirectUrl?: string;
        };
      };
    };
  };
  parameters: {
    /** Accepted response content types */
    accept: string;
    /** Content type of the request */
    contentType: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
};

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = {
  /**
   * Create a new address for a customer
   * Creates a new address for a customer.
   */
  createCustomerAddress: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["CustomerAddress"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CustomerAddress"];
        };
      };
    };
  };
  /**
   * Delete an address of a customer
   * Delete an address of customer.
   *
   *     Only addresses which are not set as default addresses for shipping or billing can be deleted. You can check the current default addresses of your customer using the profile information endpoint and change them using the default address endpoint.
   *
   *     **A customer must have at least one address (which can be used for shipping and billing).**
   *
   *     An automatic fallback is not applied.
   */
  deleteCustomerAddress: {
    parameters: {
      path: {
        /** ID of the address to be deleted. */
        addressId: string;
      };
    };
    responses: {
      /** No Content response, when the address has been deleted */
      204: {
        content: never;
      };
      /** Response containing a list of errors, most likely due to the address being in use */
      400: {
        content: never;
      };
    };
  };
  /**
   * Modify an address of a customer
   * Modifies an existing address of a customer.
   */
  updateCustomerAddress: {
    parameters: {
      path: {
        /** Address ID */
        addressId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["CustomerAddress"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CustomerAddress"];
        };
      };
    };
  };
  /**
   * Change a customer's default billing address
   * Updates the default (preselected) billing addresses of a customer.
   */
  defaultBillingAddress: {
    parameters: {
      path: {
        /** Address ID */
        addressId: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  /**
   * Change a customer's default shipping address
   * Updates the default (preselected) shipping addresses of a customer.
   */
  defaultShippingAddress: {
    parameters: {
      path: {
        /** Address ID */
        addressId: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  /**
   * Change the customer's email address
   * Changes a customer's email address to a new email address, using their current password as a validation.
   */
  changeEmail: {
    requestBody: {
      content: {
        "application/json": {
          /** New email address. Has to be unique amongst all customers */
          email: string;
          /** Confirmation of the new email address. */
          emailConfirmation: string;
          /** Customer's current password */
          password: string;
        };
      };
    };
    responses: {
      /** Returns a success response indicating a successful update */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Change the customer's language.
   * Changes the language of the logged in customer
   */
  changeLanguage: {
    requestBody: {
      content: {
        "application/json": {
          /** New languageId */
          language?: string;
        };
      };
    };
    responses: {
      /** Returns a success response indicating a successful update */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Change the customer's password
   * Changes a customer's password using their current password as a validation.
   */
  changePassword: {
    requestBody: {
      content: {
        "application/json": {
          /** New Password for the customer */
          newPassword: string;
          /** Confirmation of the new password */
          newPasswordConfirm: string;
          /** Current password of the customer */
          password: string;
        };
      };
    };
    responses: {
      /** Returns a success response indicating a successful update. */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Change the customer's default payment method
   * Changes a customer's default (preselected) payment method.
   */
  changePaymentMethod: {
    parameters: {
      path: {
        /** Identifier of the desired default payment method */
        paymentMethodId: string;
      };
    };
    responses: {
      /** Returns a success response indicating a successful update. */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Change the customer's information
   * Make changes to a customer's account, like changing their name, salutation or title.
   */
  changeProfile: {
    requestBody: {
      content: {
        "application/json": {
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
      };
    };
    responses: {
      /** Returns a success response indicating a successful update */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Get information about current customer
   * Returns information about the current customer.
   */
  readCustomer: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Returns the logged in customer, also for guest sessions. Check for the value of `guest` field to see whether the customer is a guest. */
      200: {
        content: {
          "application/json": components["schemas"]["Customer"];
        };
      };
    };
  };
  /**
   * Delete the customer's profile
   * Deletes a customer profile along with their addresses, wishlists and associated data. Created orders and their payment/shipping information (addresses) and reviews are not deleted.
   */
  deleteCustomer: {
    responses: {
      /** Returns a no content response indicating a successful removal of the customer profile */
      204: {
        content: never;
      };
    };
  };
  /**
   * Checks if the customer recovery entry for a given hash is expired.
   * This can be used to validate a provided hash has a valid and not expired customer recovery hash.
   */
  getCustomerRecoveryIsExpired: {
    requestBody: {
      content: {
        "application/json": {
          /** Parameter from the link in the confirmation mail sent in Step 1 */
          hash: string;
        };
      };
    };
    responses: {
      /** Returns a CustomerRecoveryIsExpiredResponse that indicates if the hash is expired or not. */
      200: {
        content: {
          "application/json": components["schemas"]["ArrayStruct"];
        };
      };
    };
  };
  /**
   * Fetch addresses of a customer
   * Lists all addresses of the current customer and allows filtering them based on a criteria.
   */
  listAddress: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CustomerAddress"][];
        };
      };
    };
  };
  /**
   * Log in a customer
   * Logs in customers given their credentials.
   */
  loginCustomer: {
    requestBody: {
      content: {
        "application/json": {
          /** Password */
          password: string;
          /** Email */
          username: string;
        };
      };
    };
    responses: {
      200: components["responses"]["ContextTokenResponse"];
      /** If credentials are incorrect an error is returned */
      401: {
        content: {
          "application/json": components["schemas"]["failure"];
        };
      };
    };
  };
  /**
   * Log out a customer
   * Logs out a customer.
   */
  logoutCustomer: {
    responses: {
      200: components["responses"]["ContextTokenResponse"];
      403: components["responses"]["403"];
    };
  };
  /**
   * Fetch newsletter recipients
   * Perform a filtered search for newsletter recipients.
   */
  readNewsletterRecipient: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["AccountNewsletterRecipientResult"][];
        };
      };
    };
  };
  /**
   * Send a password recovery mail
   * This operation is Step 1 of the password reset flow. Make sure to implement Step 2 "Reset password with recovery credentials" in order to allow for the complete flow in your application. Sends a recovery mail containing a link with credentials that allows a customer to reset their password.
   */
  sendRecoveryMail: {
    requestBody: {
      content: {
        "application/json": {
          /** E-Mail address to identify the customer */
          email: string;
          /** URL of the storefront to use for the generated reset link. It has to be a domain that is configured in the sales channel domain settings. */
          storefrontUrl: string;
        };
      };
    };
    responses: {
      /**
       * If email corresponds to an existing customer, a mail will be sent out to that customer containing a link assembled using the following schema:
       *
       * Returns a success indicating a successful initialisation of the reset flow.
       */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Reset a password with recovery credentials
   * This operation is Step 2 of the password reset flow. It is required to conduct Step 1 "Send a password recovery mail" in order to obtain the required credentials for this step.Resets a customer's password using credentials from a password recovery mail as a validation.
   */
  recoveryPassword: {
    requestBody: {
      content: {
        "application/json": {
          /** Parameter from the link in the confirmation mail sent in Step 1 */
          hash: string;
          /** New password for the customer */
          newPassword: string;
          /** Confirmation of the new password */
          newPasswordConfirm: string;
        };
      };
    };
    responses: {
      /** Returns a success response indicating a successful update. */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Register a customer
   * Registers a customer. Used both for normal customers and guest customers.See the Guide "Register a customer" for more information on customer registration.
   */
  register: {
    requestBody: {
      content: {
        "application/json": {
          /** Flag indicating accepted data protection */
          acceptedDataProtection: boolean;
          /**
           * Account type of the customer which can be either `private` or `business`.
           * @default private
           */
          accountType?: string;
          /** Field can be used to store an affiliate tracking code */
          affiliateCode?: string;
          billingAddress: components["schemas"]["CustomerAddress"];
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
      };
    };
    responses: {
      /** Success */
      200: {
        content: {
          "application/json": components["schemas"]["Customer"];
        };
      };
    };
  };
  /**
   * Confirm a customer registration
   * Confirms a customer registration when double opt-in is activated.
   *
   * Learn more about double opt-in registration in our guide "Register a customer".
   */
  registerConfirm: {
    requestBody: {
      content: {
        "application/json": {
          /** Email hash from the email received */
          em: string;
          /** Hash from the email received */
          hash: string;
        };
      };
    };
    responses: {
      /** Returns the logged in customer. The customer is automatically logged in with the `sw-context-token` header provided, which can be reused for subsequent requests. */
      200: {
        content: never;
      };
      /** No hash provided */
      404: {
        content: never;
      };
      /** The customer has already been confirmed */
      412: {
        content: never;
      };
    };
  };
  /**
   * Generate JWT token for app system backend
   * Generate JWT token for authenticated communication with the app server
   */
  generateJWTAppSystemAppServer: {
    parameters: {
      path: {
        /** Name of the app */
        name: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": GenericRecord;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            /** Format: date-time */
            expires?: string;
            shopId?: string;
            token?: string;
          };
        };
      };
    };
  };
  /**
   * Fetch a list of categories
   * Perform a filtered search for categories.
   */
  readCategoryList: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing categories. */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["Category"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch a single category
   * This endpoint returns information about the category, as well as a fully resolved (hydrated with mapping values) CMS page, if one is assigned to the category. You can pass slots which should be resolved exclusively.
   */
  readCategory: {
    parameters: {
      query?: {
        /** Resolves only the given slot identifiers. The identifiers have to be seperated by a '|' character */
        slots?: string;
      };
      path: {
        /** Identifier of the category to be fetched */
        navigationId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"] &
          components["schemas"]["ProductListingCriteria"];
        "application/xml": components["schemas"]["ProductListingCriteria"];
      };
    };
    responses: {
      /** The loaded category with cms page */
      200: {
        content: {
          "application/json": components["schemas"]["Category"];
        };
      };
    };
  };
  /**
   * Fetch or create a cart
   * Used to fetch the current cart or for creating a new one.
   */
  readCart: {
    responses: {
      /** Cart */
      200: {
        content: {
          "application/json": components["schemas"]["Cart"];
        };
      };
    };
  };
  /**
   * Delete a cart
   * This route deletes the cart of the customer.
   */
  deleteCart: {
    responses: {
      /** Successfully deleted the cart */
      204: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Add items to the cart
   * This route adds items to the cart. An item can be a product or promotion for example. They are referenced by the `referencedId`-parameter.
   *
   * Example: [Working with the cart - Guide](https://developer.shopware.com/docs/guides/integrations-api/store-api-guide/work-with-the-cart#adding-new-items-to-the-cart)
   */
  addLineItem: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["CartItems"];
      };
    };
    responses: {
      /** The updated cart. */
      200: {
        content: {
          "application/json": components["schemas"]["Cart"];
        };
      };
    };
  };
  /**
   * Remove items from the cart
   * @deprecated
   * DEPRECATED: use removeLineItem instead. This route removes items from the cart and recalculates it.
   *
   * Example: [Working with the cart - Guide](https://developer.shopware.com/docs/guides/integrations-api/store-api-guide/work-with-the-cart#deleting-items-in-the-cart)
   */
  removeLineItemDeprecated: {
    parameters: {
      query: {
        /** A list of product identifiers. */
        ids: string[];
      };
    };
    responses: {
      /** The updated cart. */
      200: {
        content: {
          "application/json": components["schemas"]["Cart"];
        };
      };
    };
  };
  /**
   * Update items in the cart
   * This route updates items in the cart. A typical example is updating the quantity of an item.
   *
   * Example: [Working with the cart - Guide](https://developer.shopware.com/docs/guides/integrations-api/store-api-guide/work-with-the-cart#updating-items-in-the-cart)
   */
  updateLineItem: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["CartItems"];
      };
    };
    responses: {
      /** The updated cart. */
      200: {
        content: {
          "application/json": components["schemas"]["Cart"];
        };
      };
    };
  };
  /**
   * Remove items from the cart
   * This route removes items from the cart and recalculates it.
   *
   * Example: [Working with the cart - Guide](https://developer.shopware.com/docs/guides/integrations-api/store-api-guide/work-with-the-cart#deleting-items-in-the-cart)
   */
  removeLineItem: {
    requestBody: {
      content: {
        "application/json": {
          /** A list of product identifiers. */
          ids: [string, ...string[]];
        };
      };
    };
    responses: {
      /** The updated cart. */
      200: {
        content: {
          "application/json": components["schemas"]["Cart"];
        };
      };
    };
  };
  /**
   * Create an order from a cart
   * Creates a new order from the current cart and deletes the cart.
   *
   * If you are using the [prepared payment flow](https://developer.shopware.com/docs/concepts/commerce/checkout-concept/payments#2.1-prepare-payment-optional), this endpoint also receives additional transaction details. The exact name of the parameters depends on the implementation of the corresponding *payment handler*.
   */
  createOrder: {
    /** Contains additional metadata which is stored together with the order. It can also contain payment transaction details. */
    requestBody?: {
      content: {
        "application/json": {
          /** The affiliate code can be used to track which referrer the customer came through. An example could be `Price-comparison-company-XY`. */
          affiliateCode?: string;
          /** The campaign code is used to track which action the customer came from. An example could be `Summer-Deals` */
          campaignCode?: string;
          /** Adds a comment from the customer to the order. */
          customerComment?: string;
        };
      };
    };
    responses: {
      /** Order */
      200: {
        content: {
          "application/json": components["schemas"]["Order"];
        };
      };
    };
  };
  /**
   * Fetch and resolve a CMS page
   * Loads a content management page by its identifier and resolve the slot data. This could be media files, product listing and so on.
   *
   * **Important notice**
   *
   * The criteria passed with this route also affects the listing, if there is one within the cms page.
   */
  readCms: {
    parameters: {
      path: {
        /** Identifier of the CMS page to be resolved */
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
          /** Resolves only the given slot identifiers. The identifiers have to be seperated by a `|` character. */
          slots?: string;
        } & components["schemas"]["ProductListingCriteria"];
      };
    };
    responses: {
      /** The loaded cms page */
      200: {
        content: {
          "application/json": components["schemas"]["CmsPage"];
        };
      };
      404: components["responses"]["404"];
    };
  };
  /**
   * Submit a contact form message
   * Used for submitting contact forms. Be aware that there can be more required fields, depending on the system settings.
   */
  sendContactMail: {
    requestBody: {
      content: {
        "application/json": {
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
      };
    };
    responses: {
      /** Message sent successful. */
      200: {
        content: never;
      };
    };
  };
  /**
   * Fetch the current context
   * Fetches the current context. This includes for example the `customerGroup`, `currency`, `taxRules` and many more.
   */
  readContext: {
    responses: {
      /** Returns the current context. */
      200: {
        content: {
          "application/json": components["schemas"]["SalesChannelContext"];
        };
      };
    };
  };
  /**
   * Modify the current context
   * Used for switching the context. A typical example would be changing the language or changing the currency.
   */
  updateContext: {
    requestBody: {
      content: {
        "application/json": {
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
        "application/xml": {
          /** Currency */
          currencyXmlId?: string;
        };
      };
    };
    responses: {
      200: components["responses"]["ContextTokenResponse"];
      /** Cool cool cool */
      201: {
        content: {
          "application/json": components["schemas"]["CrossSellingElementCollection"];
          "application/xml": components["schemas"]["PaymentMethod"];
        };
      };
    };
  };
  /**
   * Fetch countries
   * Perform a filtered search for countries
   */
  readCountry: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing countries. */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["Country"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch the states of a country
   * Perform a filtered search the states for a country
   */
  readCountryState: {
    parameters: {
      path: {
        countryId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing countries. */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["CountryState"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch currencies
   * Perform a filtered search for currencies.
   */
  readCurrency: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing currencies. */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["Currency"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /** Fetch registration settings for customer group */
  getCustomerGroupRegistrationInfo: {
    parameters: {
      path: {
        /** Customer group id */
        customerGroupId: string;
      };
    };
    responses: {
      /** Returns the customer group including registration settings. */
      200: {
        content: {
          "application/json": components["schemas"]["CustomerGroup"];
        };
      };
    };
  };
  /**
   * Fetch a wishlist
   * Fetch a customer's wishlist. Products on the wishlist can be filtered using a criteria object.
   *
   *     **Important constraints**
   *
   *     * Anonymous (not logged-in) customers can not have wishlists.
   *     * The wishlist feature has to be activated.
   */
  readCustomerWishlist: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["WishlistLoadRouteResponse"];
        };
      };
    };
  };
  /**
   * Add a product to a wishlist
   * Adds a product to a customers wishlist.
   *
   *     **Important constraints**
   *
   *     * Anonymous (not logged-in) customers can not have wishlists.
   *     * The wishlist feature has to be activated.
   */
  addProductOnWishlist: {
    parameters: {
      path: {
        /** Identifier of the product to be added. */
        productId: string;
      };
    };
    responses: {
      /** Returns a success response. */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Remove a product from a wishlist
   * Removes a product from a customer's wishlist.
   *
   *     **Important constraints**
   *
   *     * Anonymous (not logged-in) customers can not have wishlists.
   *     * The wishlist feature has to be activated.
   */
  deleteProductOnWishlist: {
    parameters: {
      path: {
        /** The identifier of the product to be removed from the wishlist. */
        productId: string;
      };
    };
    responses: {
      /** Returns a success response indicating a successful removal. */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
      /** The removal of the product failed. Probably because the product could not be found on the wishlist. */
      404: {
        content: {
          "application/json": components["schemas"]["failure"];
        };
      };
    };
  };
  /**
   * Create a wishlist for a customer
   * Create a new wishlist for a logged in customer or extend the existing wishlist given a set of products.
   *
   *     **Important constraints**
   *
   *     * Anonymous (not logged-in) customers can not have wishlists.
   *     * A customer can only have a single wishlist.
   *     * The wishlist feature has to be activated.
   */
  mergeProductOnWishlist: {
    requestBody: {
      content: {
        "application/json": {
          /** List product id */
          productIds?: string[];
        };
      };
    };
    responses: {
      /** Returns a success response. */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Download generated document
   * Returns blob file of a generated document to download.
   */
  download: {
    parameters: {
      path: {
        documentId: string;
        deepLinkCode: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Returns the document information and blob to download. */
      200: {
        content: {
          "application/json": components["schemas"]["Document"];
        };
      };
    };
  };
  /**
   * Fetch product ids by criteria
   * Fetches product ids for a given criteria.
   */
  guidedShoppingLoadAllProductIds: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            ids?: string[];
            total?: number;
          };
        };
      };
    };
  };
  /**
   * Respond the appointment invitation
   * Returns the appointment invitation status
   */
  attendeeRespondInvitation: {
    parameters: {
      path: {
        /** The appointment id you respond to */
        appointmentId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          /**
           * The status you respond to
           * @enum {string}
           */
          invitationStatus?: "accepted" | "maybe" | "declined";
          /** The token will be attached to the invitation response link in the invitation mail */
          token: string;
        };
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["AttendeeRespondInvitationResponse"];
        };
      };
    };
  };
  /**
   * Get the ics file to import to your calendar
   * Returns the calendar file
   */
  getCalendarFile: {
    parameters: {
      path: {
        /** The appointment id you want to get the calendar file */
        appointmentId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          /** The token will be attached to the invitation response link in the invitation mail */
          token: string;
        };
      };
    };
    responses: {
      200: {
        content: {
          "text/calendar": unknown;
        };
      };
    };
  };
  /**
   * Join a meeting as a attendee
   * Returns the client join appointment response.
   */
  joinAppointmentAsClient: {
    parameters: {
      path: {
        /** Presentation path */
        presentationPath: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["JoinAppointmentResponse"];
        };
      };
    };
  };
  /**
   * Update attendee information
   * Update attendee information
   */
  updateAttendee: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateAttendeeRequestBody"];
      };
    };
    responses: {
      204: {
        content: never;
      };
    };
  };
  /**
   * Get the product ids for the attendee in product collection with the matching alias
   * Returns the product ids for the requesting attendee and matching alias
   */
  getAttendeeProductCollection: {
    parameters: {
      path: {
        /** The alias of collection you want to get */
        alias: "liked" | "disliked";
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["AttendeeProductCollectionResponse"];
        };
      };
    };
  };
  /**
   * Add a product to the attendee product list
   * Add a product with the alias to the product list of the attendee
   */
  attendeeProductCollectionAddProduct: {
    parameters: {
      path: {
        /** The alias of collection you want to add */
        alias: "liked" | "disliked";
        /** The product id you want to add */
        productId: string;
      };
    };
    responses: {
      204: {
        content: {};
      };
    };
  };
  /**
   * Remove a product with the alias from the for the attendee product collection
   * Removes the product with the matching alias from of the attendee product collection
   */
  attendeeProductCollectionRemoveProduct: {
    parameters: {
      path: {
        /** The alias of collection you want to remove */
        alias: "liked" | "disliked";
        /** The product id you want to remove */
        productId: string;
      };
    };
    responses: {
      204: {
        content: {};
      };
    };
  };
  /**
   * Get the last seen products for the current attendee
   * Returns the the last seen products for the requesting client
   */
  getLastSeenProducts: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["AttendeeProductCollectionLastSeenResponse"];
        };
      };
    };
  };
  /**
   * Fetch presentation structure and flat navigation
   * Resolves the presentation structure and navigation by using the attendeeContext information. There will be NO Slot-Data inside call store-api.guided-shopping.presentation-data for that
   */
  getPresentationStructure: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PresentationStructure"];
        };
      };
    };
  };
  /**
   * Fetch resolved data for specific slide
   * Gives the resolved slot-data for the given slide index (slot-config)
   */
  getSlideData: {
    parameters: {
      path: {
        /** Presentation CMS page id for which the data is requested */
        presentationCmsPageId: string;
        /** CMS section id for which the data is requested */
        sectionId: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PresentationSlideData"];
        };
      };
    };
  };
  /**
   * Get the current presentation state
   * Returns the presentation state for all and the client
   */
  getClientPresentationState: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ClientPresentationStateResponse"];
        };
      };
    };
  };
  /**
   * Add a interaction to log
   * Create a interaction log entry in a specific appointment
   */
  addInteraction: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateInteractionRequestBody"];
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  /**
   * Fetch a product listing by criteria
   * Fetches a product listing for a given criteria. It also provides filters, sortings and property aggregations, analogous to the /product-listing endpoint.
   */
  guidedShoppingProductListing: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"] & {
          /**
           * Load interaction (like & dislike) to product of attendee. It will be added into product extensions named interaction
           * @default false
           */
          interaction?: boolean;
        };
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["Product"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch a cms page for quickview with product data
   * Takes a product identifier and returns the preconfigured quickview CMS layout (defined in SwagGuidedShopping.config.quickviewPageId ) hydrated with the product specific data
   */
  resolveQuickviewPage: {
    parameters: {
      path: {
        /** The product id */
        productId: string;
        /** The cms page id using as product quick view */
        cmsPageLayoutId: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            cmsPage?: components["schemas"]["CmsPage"];
            configurator?: components["schemas"]["PropertyGroup"][];
            product?: components["schemas"]["Product"];
          };
        };
      };
    };
  };
  /**
   * Initiate a payment for an order
   * This generic endpoint is should be called to initiate a payment flow after an order has been created. The details of the payment flow can differ depending on the payment integration and might require calling additional operations or the setup of webhooks.
   *
   * The endpoint internally calls the payment handler of the payment method currently set for the order.
   */
  handlePaymentMethod: {
    requestBody: {
      content: {
        "application/json": {
          /** URL to which the client should be redirected after erroneous payment */
          errorUrl?: string;
          /** URL to which the client should be redirected after successful payment */
          finishUrl?: string;
          /** Identifier of an order */
          orderId: string;
        };
      };
    };
    responses: {
      /** Redirect to external payment provider */
      200: {
        content: never;
      };
    };
  };
  /**
   * Fetch a landing page with the resolved CMS page
   * Loads a landing page by its identifier and resolves the CMS page.
   *
   * **Important notice**
   *
   * The criteria passed with this route also affects the listing, if there is one within the cms page.
   */
  readLandingPage: {
    parameters: {
      path: {
        /** Identifier of the landing page. */
        landingPageId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"] &
          ({
            /** Resolves only the given slot identifiers. The identifiers have to be seperated by a `|` character. */
            slots?: string;
          } & components["schemas"]["ProductListingCriteria"]);
      };
    };
    responses: {
      /** The loaded landing page with cms page */
      200: {
        content: {
          "application/json": components["schemas"]["LandingPage"];
        };
      };
      404: components["responses"]["404"];
    };
  };
  /**
   * Fetch languages
   * Perform a filtered search for languages.
   */
  readLanguages: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing languages. */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["Language"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch a navigation menu
   * This endpoint returns categories that can be used as a page navigation. You can either return them as a tree or as a flat list. You can also control the depth of the tree.
   *
   *     Instead of passing uuids, you can also use one of the following aliases for the activeId and rootId parameters to get the respective navigations of your sales channel.
   *
   *      * main-navigation
   *      * service-navigation
   *      * footer-navigation
   */
  readNavigation: {
    parameters: {
      header?: {
        /** Instructs Shopware to try and resolve SEO URLs for the given navigation item */
        "sw-include-seo-urls"?: boolean;
      };
      path: {
        /** Identifier of the active category in the navigation tree (if not used, just set to the same as rootId). */
        activeId: string;
        /** Identifier of the root category for your desired navigation tree. You can use it to fetch sub-trees of your navigation tree. */
        rootId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Criteria"] & {
          /** Return the categories as a tree or as a flat list. */
          buildTree?: GenericRecord[];
          /**
           * Format: int32
           * Determines the depth of fetched navigation levels.
           */
          depth?: number;
        };
      };
    };
    responses: {
      /** All available navigations */
      200: {
        content: {
          "application/json": components["schemas"]["NavigationRouteResponse"];
        };
      };
    };
  };
  /**
   * Confirm a newsletter registration
   * You have to use the hash from the link sent out via email to confirm the user registration.
   */
  confirmNewsletter: {
    requestBody: {
      content: {
        "application/json": {
          /** Email hash parameter from the link in the confirmation mail */
          em: string;
          /** Hash parameter from link the in the confirmation mail */
          hash: string;
        };
      };
    };
    responses: {
      /** The newsletter confirmation was successful. */
      200: {
        content: never;
      };
    };
  };
  /**
   * Create or remove a newsletter subscription
   * This route is used to create/remove/confirm a newsletter subscription.
   *
   * The `option` property controls what should happen:
   * * `direct`: The subscription is directly active and does not need a confirmation.
   * * `subscribe`: An email will be send to the provided email addrees containing a link to the /newsletter/confirm route.
   * The subscription is only successful, if the /newsletter/confirm route is called with the generated hashes.
   * * `unsubscribe`: The email address will be removed from the newsletter subscriptions.
   * * `confirmSubscribe`: Confirmes the newsletter subscription for the provided email address.
   */
  subscribeToNewsletter: {
    requestBody: {
      content: {
        "application/json": {
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
      };
    };
    responses: {
      /** Success */
      200: {
        content: never;
      };
    };
  };
  /**
   * Remove a newsletter subscription
   * Removes a newsletter recipient from the mailing lists.
   */
  unsubscribeToNewsletter: {
    requestBody: {
      content: {
        "application/json": {
          /** Email address that should be removed from the mailing lists. */
          email: string;
        };
      };
    };
    responses: {
      /** Unsubscribing was successful. */
      200: {
        content: never;
      };
    };
  };
  /**
   * Fetch a list of orders
   * List orders of a customer.
   */
  readOrder: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["Criteria"] & {
          /** Check if the payment method of the order is still changeable. */
          checkPromotion?: boolean;
        };
      };
    };
    responses: {
      /** An array of orders and an indicator if the payment of the order can be changed. */
      200: {
        content: {
          "application/json": components["schemas"]["OrderRouteResponse"];
        };
      };
    };
  };
  /**
   * Download a purchased file
   * Download a file included in the given order and with the given id. Access must be granted.
   */
  orderDownloadFile: {
    parameters: {
      path: {
        orderId: string;
        downloadId: string;
      };
    };
    responses: {
      /** An arbitrary binary file. */
      200: {
        content: {
          "application/octet-stream": string;
        };
      };
    };
  };
  /**
   * Update the payment method of an order
   * Changes the payment method of a specific order. You can use the /order route to find out if the payment method of an order can be changed - take a look at the `paymentChangeable`- array in the response.
   */
  orderSetPayment: {
    requestBody: {
      content: {
        "application/json": {
          /** The identifier of the order. */
          orderId: string;
          /** The identifier of the paymentMethod to be set */
          paymentMethodId: string;
        };
      };
    };
    responses: {
      /** Successfully updated the payment method of the order. */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
    };
  };
  /**
   * Cancel an order
   * Cancels an order. The order state will be set to 'cancelled'.
   */
  cancelOrder: {
    requestBody: {
      content: {
        "application/json": {
          /** The identifier of the order to be canceled. */
          orderId?: string;
        };
      };
    };
    responses: {
      /**
       * Returns the state of the state machine
       *
       *     example: More information about the state machine can be found in the corresponding guide: [Using the state machine](https://developer.shopware.com/docs/guides/plugins/plugins/checkout/order/using-the-state-machine)
       */
      200: {
        content: {
          "application/json": components["schemas"]["StateMachineState"];
        };
      };
    };
  };
  /** Loads all available payment methods */
  readPaymentMethod: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["Criteria"] & {
          /** List only available */
          onlyAvailable?: boolean;
        };
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            /** aggregation result */
            aggregations?: GenericRecord;
            elements?: components["schemas"]["PaymentMethod"][];
            /** Total amount */
            total?: number;
          };
        };
      };
    };
  };
  /**
   * Fetch a list of products
   * List products that match the given criteria. For performance reasons a limit should always be set.
   */
  readProduct: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing products */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["Product"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /** Export product export */
  readProductExport: {
    parameters: {
      path: {
        /** Access Key */
        accessKey: string;
        /** File Name */
        fileName: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  /**
   * Fetch a product listing by category
   * Fetches a product listing for a specific category. It also provides filters, sortings and property aggregations, analogous to the /search endpoint.
   */
  readProductListing: {
    parameters: {
      path: {
        /** Identifier of a category. */
        categoryId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ProductListingCriteria"] &
          components["schemas"]["ProductListingFlags"];
      };
    };
    responses: {
      /** Returns a product listing containing all products and additional fields to display a listing. */
      200: {
        content: {
          "application/json": components["schemas"]["ProductListingResult"];
        };
      };
    };
  };
  /**
   * Fetch a single product
   * This route is used to load a single product with the corresponding details. In addition to loading the data, the best variant of the product is determined when a parent id is passed.
   */
  readProductDetail: {
    parameters: {
      path: {
        /** Product ID */
        productId: string;
      };
    };
    responses: {
      /** Product information along with variant groups and options */
      200: {
        content: {
          "application/json": components["schemas"]["ProductDetailResponse"];
        };
      };
    };
  };
  /**
   * Fetch cross-selling groups of a product
   * This route is used to load the cross sellings for a product. A product has several cross selling definitions in which several products are linked. The route returns the cross sellings together with the linked products
   */
  readProductCrossSellings: {
    parameters: {
      path: {
        /** Product ID */
        productId: string;
      };
    };
    responses: {
      /** Found cross sellings */
      200: {
        content: {
          "application/json": components["schemas"]["CrossSellingElementCollection"];
        };
      };
    };
  };
  /**
   * Search for a matching variant by product options.
   * Performs a search for product variants and returns the best matching variant.
   */
  searchProductVariantIds: {
    parameters: {
      path: {
        /** Product ID */
        productId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
          /** The options parameter for the variant to find. */
          options: string[];
          /** The id of the option group that has been switched. */
          switchedGroup?: string;
        };
      };
    };
    responses: {
      /** Returns an FoundCombination struct containing the ids matching the search. */
      200: {
        content: {
          "application/json": components["schemas"]["FindProductVariantRouteResponse"];
        };
      };
    };
  };
  /**
   * Save a product review
   * Saves a review for a product. Reviews have to be activated in the settings.
   */
  saveProductReview: {
    parameters: {
      path: {
        /** Identifier of the product which is reviewed. */
        productId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
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
      };
    };
    responses: {
      /** Success response indicating the review was saved successfuly. */
      200: {
        content: never;
      };
    };
  };
  /**
   * Fetch product reviews
   * Perform a filtered search for product reviews.
   */
  readProductReviews: {
    parameters: {
      path: {
        /** Identifier of the product. */
        productId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing product reviews */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["ProductReview"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch salutations
   * Perform a filtered search for salutations.
   */
  readSalutation: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing salutations. */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["Salutation"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /** Access point for different api logics which are provided by apps over script hooks */
  postScriptStoreApiRoute: {
    parameters: {
      path: {
        /** Dynamic hook which used to build the hook name */
        hook: string;
      };
    };
    responses: {
      /** Returns different structures of results based on the called script. */
      200: {
        content: never;
      };
    };
  };
  /**
   * Search for products
   * Performs a search for products which can be used to display a product listing.
   */
  searchPage: {
    requestBody?: {
      content: {
        "application/json": {
          /** Using the search parameter, the server performs a text search on all records based on their data model and weighting as defined in the entity definition using the SearchRanking flag. */
          search: string;
        } & components["schemas"]["ProductListingCriteria"] &
          components["schemas"]["ProductListingFlags"];
      };
    };
    responses: {
      /** Returns a product listing containing all products and additional fields to display a listing. */
      200: {
        content: {
          "application/json": components["schemas"]["ProductListingResult"];
        };
      };
    };
  };
  /**
   * Search for products (suggest)
   * Can be used to implement search previews or suggestion listings, that don’t require any interaction.
   */
  searchSuggest: {
    requestBody: {
      content: {
        "application/json": {
          /** Using the search parameter, the server performs a text search on all records based on their data model and weighting as defined in the entity definition using the SearchRanking flag. */
          search: string;
        } & components["schemas"]["ProductListingFlags"];
      };
    };
    responses: {
      /**
       * Returns a product listing containing all products and additional fields.
       *
       * Note: Aggregations, currentFilters and availableSortings are empty in this response. If you need them to display a listing, use the /search route instead.
       */
      200: {
        content: {
          "application/json": components["schemas"]["ProductListingResult"];
        };
      };
    };
  };
  /**
   * Fetch SEO routes
   * Perform a filtered search for seo urls.
   */
  readSeoUrl: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing seo urls. */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["SeoUrl"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
      404: components["responses"]["404"];
    };
  };
  /**
   * Fetch shipping methods
   * Perform a filtered search for shipping methods.
   */
  readShippingMethod: {
    parameters: {
      query?: {
        /** List only available shipping methods. This filters shipping methods methods which can not be used in the actual context because of their availability rule. */
        onlyAvailable?: boolean;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            /** aggregation result */
            aggregations?: GenericRecord;
            elements?: components["schemas"]["ShippingMethod"][];
            /** Total amount */
            total?: number;
          };
        };
      };
    };
  };
  /**
   * Fetch sitemaps
   * Fetches a list of compressed sitemap files, which are often used by search engines.
   */
  readSitemap: {
    responses: {
      /** Returns a list of available sitemaps. */
      200: {
        content: {
          "application/json": components["schemas"]["Sitemap"][];
        };
      };
    };
  };
  /**
   * Fetch a list of approval rules
   * This route is used to load approval rules
   */
  readApprovalRules: {
    parameters: {
      query?: {
        /** Page number */
        p?: number;
        /** Number of items per page */
        limit?: number;
      };
    };
    responses: {
      /** Entity search result containing approval rules */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["ApprovalRule"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * List all approval rules
   * This route is used to list all approval rules from the store
   */
  listApprovalRules: {
    parameters: {
      query?: {
        /** Page number */
        p?: number;
        /** Number of items per page */
        limit?: number;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing approval rules */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["ApprovalRule"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch one approval rule by id
   * This route is used to fetch a approval rule from the store by id
   */
  readApprovalRule: {
    parameters: {
      path: {
        /** Identifier of the approval rule to be fetched */
        id: string;
      };
    };
    responses: {
      /** Approval rule entity */
      200: {
        content: {
          "application/json": components["schemas"]["ApprovalRule"];
        };
      };
    };
  };
  /**
   * Update a approval rule by id
   * This route is used to update a approval rule from the store by id
   */
  updateApprovalRule: {
    parameters: {
      path: {
        /** Identifier of the approval rule to be updated */
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
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
      };
    };
    responses: {
      /** Approval rule entity */
      200: {
        content: {
          "application/json": components["schemas"]["ApprovalRule"];
        };
      };
    };
  };
  /**
   * Create a new approval rule
   * This route is used to create a new approval rule
   */
  createApprovalRule: {
    requestBody?: {
      content: {
        "application/json": {
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
      };
    };
    responses: {
      /** Approval rule entity */
      200: {
        content: {
          "application/json": components["schemas"]["ApprovalRule"];
        };
      };
    };
  };
  /**
   * Fetch a list of employees
   * This route is used to load employees
   */
  readEmployees: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing employees */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["B2bEmployee"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch a one employee by id
   * This route is used to fetch one employee by id
   */
  readEmployee: {
    parameters: {
      path: {
        /** Identifier of the employee to be fetched */
        id: string;
      };
    };
    responses: {
      /** Employee entity */
      200: {
        content: {
          "application/json": components["schemas"]["B2bEmployee"];
        };
      };
    };
  };
  /**
   * Delete an employee by id
   * This route is used to delete one employee by id
   */
  deleteEmployee: {
    parameters: {
      path: {
        /** Identifier of the employee to be deleted */
        id: string;
      };
    };
    responses: {
      /** No content response */
      204: {
        content: never;
      };
    };
  };
  /**
   * Update a one employee by id
   * This route is used to update one employee by id
   */
  updateEmployee: {
    parameters: {
      path: {
        /** Identifier of the employee to be updated */
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          /** New email of the employee */
          email?: string;
          /** New first name of the employee */
          firstName?: string;
          /** New last name of the employee */
          lastName?: string;
          /** New id of the role of the employee */
          roleId?: string;
        };
      };
    };
    responses: {
      /** Employee entity */
      200: {
        content: {
          "application/json": components["schemas"]["B2bEmployee"];
        };
      };
    };
  };
  /**
   * Create a single employee and returns the employee
   * This route is used to create and return an employee
   */
  createEmployee: {
    requestBody: {
      content: {
        "application/json": {
          /** Email of the new employee */
          email?: string;
          /** First name of the new employee */
          firstName?: string;
          /** Last name of the new employee */
          lastName?: string;
          /** Id of the role of the new employee */
          roleId?: string;
        };
      };
    };
    responses: {
      /** Employee entity */
      200: {
        content: {
          "application/json": components["schemas"]["B2bEmployee"];
        };
      };
    };
  };
  /**
   * Reinvite employee by id
   * This route is used to reinvite an employee via email by id
   */
  reinviteEmployee: {
    parameters: {
      path: {
        /** Identifier of the employee to be reinvited */
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          /** URL of the storefront domain */
          storefrontUrl?: string;
        };
      };
    };
    responses: {
      /** Employee entity */
      200: {
        content: {
          "application/json": components["schemas"]["B2bEmployee"];
        };
      };
    };
  };
  /**
   * Fetch one pending order by id
   * This route is used to fetch a pending order from the store by id
   */
  fetchPendingOrder: {
    parameters: {
      path: {
        /** Identifier of the pending order to be fetched */
        id: string;
      };
    };
    responses: {
      /** Pending order entity */
      200: {
        content: {
          "application/json": components["schemas"]["PendingOrder"];
        };
      };
    };
  };
  /**
   * Approve a pending order by id
   * This route is used to approve a pending order from the store by id
   */
  approvePendingOrder: {
    parameters: {
      path: {
        /** Identifier of the pending order to be approved */
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
          /** Message content */
          comment?: string;
        };
      };
    };
    responses: {
      /** No content response */
      204: {
        content: never;
      };
    };
  };
  /**
   * Create a order from a pending order
   * This route is used to create a order from a pending order
   */
  createOrderFromPendingOrder: {
    parameters: {
      path: {
        /** Identifier of the pending order to be used to create a order */
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
          /** Message content */
          customerComment?: string;
        };
      };
    };
    responses: {
      /** Order entity */
      200: {
        content: {
          "application/json": components["schemas"]["Order"];
        };
      };
    };
  };
  /**
   * Decline a pending order by id
   * This route is used to decline a pending order from the store by id
   */
  declinePendingOrder: {
    parameters: {
      path: {
        /** Identifier of the pending order to be declined */
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
          /** Message content */
          comment?: string;
        };
      };
    };
    responses: {
      /** No content response */
      204: {
        content: never;
      };
    };
  };
  /**
   * Request new order approval
   * This route is used to request a new order approval
   */
  requestOrderApproval: {
    requestBody?: {
      content: {
        "application/json": {
          /** Message content */
          comment?: string;
        };
      };
    };
    responses: {
      /** Pending order entity */
      200: {
        content: {
          "application/json": components["schemas"]["PendingOrder"];
        };
      };
    };
  };
  /**
   * Fetch product search terms by uploading an image.
   * <b>Experimental until v6.7.0</b>
   *
   * Fetch product search terms by uploading an image.
   */
  searchByImageSearchTerm: {
    requestBody: {
      content: {
        "application/json": {
          /**
           * Format: binary
           * Base-64 encoded image
           */
          file?: string;
        };
      };
    };
    responses: {
      /** A collection of search terms */
      200: {
        content: {
          "application/json": components["schemas"]["SearchByImageSearchTermResponse"];
        };
      };
    };
  };
  /**
   * Fetch search terms by natural language search query
   * <b>Experimental until v6.7.0</b>
   *
   * Fetch search terms by natural search language query
   */
  naturalLanguageSearchTerm: {
    requestBody: {
      content: {
        "application/json": {
          /**
           * Natural language query
           * @example I'm looking for a present for my wife
           */
          query?: string;
        };
      };
    };
    responses: {
      /** A collection of search terms, with an associated 'reason' based on search context */
      200: {
        content: {
          "application/json": components["schemas"]["NaturalLanguageSearchTermResponse"];
        };
      };
    };
  };
  /**
   * Change payment or shipping method
   * This route is used to change a payment or shipping method when place a order
   */
  switchPaymentOrShippingMethod: {
    parameters: {
      path: {
        /** Identifier of the quote to be reinvited */
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
          /** Id of the payment method */
          paymentMethodId?: string;
          /** Id of the shipping method */
          shippingMethodId?: string;
        };
      };
    };
    responses: {
      /** No content response */
      204: {
        content: never;
      };
    };
  };
  /**
   * Decline a quote by id
   * This route is used to decline a quote from the store by id
   */
  declineQuote: {
    parameters: {
      path: {
        /** Identifier of the quote to be reinvited */
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
          /** Message content */
          comment?: string;
        };
      };
    };
    responses: {
      /** No content response */
      204: {
        content: never;
      };
    };
  };
  /**
   * Request change a quote by id
   * This route is used to request change a quote from the store by id
   */
  requestChangeQuote: {
    parameters: {
      path: {
        /** Identifier of the quote to be reinvited */
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
          /** Message content */
          comment?: string;
        };
      };
    };
    responses: {
      /** No content response */
      204: {
        content: never;
      };
    };
  };
  /**
   * Fetch a one quote by id
   * This route is used to fetch one quote by id
   */
  readQuote: {
    parameters: {
      path: {
        /** Identifier of the quote to be fetched */
        id: string;
      };
    };
    responses: {
      /** Quote entity */
      200: {
        content: {
          "application/json": components["schemas"]["Quote"];
        };
      };
    };
  };
  /**
   * Create a order from a quote
   * This route is used to create a order from a quote
   */
  createOrderFromQuote: {
    parameters: {
      path: {
        /** Identifier of the quote to be reinvited */
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": {
          /** Message content */
          customerComment?: string;
        };
      };
    };
    responses: {
      /** Order entity */
      200: {
        content: {
          "application/json": components["schemas"]["Order"];
        };
      };
    };
  };
  /**
   * Request new quote
   * This route is used to request a new quote from the store
   */
  requestQuote: {
    requestBody?: {
      content: {
        "application/json": {
          /** Message content */
          comment?: string;
        };
      };
    };
    responses: {
      /** Quote entity */
      200: {
        content: {
          "application/json": components["schemas"]["Quote"];
        };
      };
    };
  };
  /**
   * Fetch a list of quotes
   * This route is used to load quotes
   */
  readQuotes: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing quotes */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["Quote"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch a list of roles
   * This route is used to load roles
   */
  readRoles: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing roles */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["B2bComponentsRole"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch a list of roles
   * This route is used to load roles
   */
  readRolesPOST: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Criteria"];
      };
    };
    responses: {
      /** Entity search result containing roles */
      200: {
        content: {
          "application/json": {
            elements?: components["schemas"]["B2bComponentsRole"][];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
  /**
   * Fetch a one role by id
   * This route is used to fetch one role by id
   */
  readRole: {
    parameters: {
      path: {
        /** Identifier of the role to be fetched */
        id: string;
      };
    };
    responses: {
      /** Role entity */
      200: {
        content: {
          "application/json": components["schemas"]["B2bComponentsRole"];
        };
      };
    };
  };
  /**
   * Delete an role by id
   * This route is used to delete one role by id
   */
  deleteRole: {
    parameters: {
      path: {
        /** Identifier of the role to be fetched */
        id: string;
      };
    };
    responses: {
      /** No content response */
      204: {
        content: never;
      };
    };
  };
  /**
   * Update a one role by id
   * This route is used to update one role by id
   */
  updateRole: {
    parameters: {
      path: {
        /** Identifier of the role to be updated */
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          /** Ability to set the role as default */
          isDefaultRole?: boolean;
          /** New name of the role */
          name?: string;
          /** New permissions of the role */
          permissions?: string[];
        };
      };
    };
    responses: {
      /** Role entity */
      200: {
        content: {
          "application/json": components["schemas"]["B2bComponentsRole"];
        };
      };
    };
  };
  /**
   * Create a single role and returns the role
   * This route is used to create and return an role
   */
  createRole: {
    requestBody: {
      content: {
        "application/json": {
          /** Ability to set the new role as default */
          isDefaultRole?: boolean;
          /** Name of the new role */
          name?: string;
          /** Permissions of the new role */
          permissions?: string[];
        };
      };
    };
    responses: {
      /** Role entity */
      200: {
        content: {
          "application/json": components["schemas"]["B2bComponentsRole"];
        };
      };
    };
  };
  /**
   * Sets the default role Id for new employees
   * This route is used to update the defaultRoleId for new employees
   */
  updateDefaultRoleId: {
    requestBody: {
      content: {
        "application/json": {
          /** Id of the roleId to be set as default */
          id?: string;
        };
      };
    };
    responses: {
      /** No content response */
      204: {
        content: never;
      };
    };
  };
  /**
   * Fetch a available permissions
   * This route is used to fetch all available permissions
   */
  readPermissions: {
    responses: {
      /** Permission collection */
      200: {
        content: {
          "application/json": {
            elements?: {
              permissionDependencies?: string[];
              permissionGroupName?: string;
              permissionName?: string;
            }[];
          } & components["schemas"]["EntitySearchResult"];
        };
      };
    };
  };
};

/**
 * @deprecated this field is not needed anymore
 */
export type operationPaths = string;