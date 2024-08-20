declare module "schema-interface" {
  type T_UUID = string;
  type T_EMAIL = string;
  type T_FULLNAME = string;
  type T_TIMEZONE = "America/New_York" | string;
  type T_CURRENCY = "usd" | string;
  type T_QUANTITY = number;
  type T_QUANTITY_HOURS = number;
  type T_TIME = "string"; // "00:00:00" - "23:59:59"
  export interface ISchema {
    id: T_UUID;
    mode: "_test" | "test" | "live";
    updated?: Date;
    created: Date;
  }
  // Platform
  export interface IPlatform extends ISchema {
    name: string;
    admins?: IUser[];
    description?: string;
    logo?: string;
    url: string;
    platformFee: number;
    activeSubscription?: string;
  }

  interface IPlatformKeys extends ISchema {
    platform_id?: IPlatform.id;
    testSecretKey: string;
    liveSecretKey: string;
    scopes: string[];
  }

  // Users
  export interface IUser extends ISchema {
    platform_id?: IPlatform.id;
    email: T_EMAIL;
    username?: string;
    bio?: string;
    name?: T_FULLNAME;
    firstName?: string;
    lastName?: string;
    image?: string;
    stripeConnectId?: string;
    chargesEnabled?: boolean;
    detailsSubmitted?: boolean;
    timezone: T_TIMEZONE;
    stripeCustomerId?: string;
    authenticated?: Date;
    links?: IUserLink[];
    paymentMethods?: IPaymentMethod[];
    scheduledDeletion?: Date;
  }
  interface Icommunities extends ISchema {
    platform_id: IPlatform.id;
    user_id: IUser.id;
    role: "owner" | "admin" | "editor" | "member";
  }
  interface IUserLink extends ISchema {
    user_id: IUser.id;
    label: string;
    url: string;
  }
  interface IPaymentMethod extends ISchema {
    stripePaymentMethodId: string;
    user_id: IUser.id;
    type: "card" | "us_bank_account";
    isDefault: boolean;
    brand: string;
    last4: string;
    accountHolderType: "individual" | "company";
    expMonth: number;
    expYear: number;
    funding: string;
  }
  // // Contacts
  // export interface IContact extends ISchema {
  //   platform_id: IPlatform.id;
  //   user_id?: IUser.id;
  //   contact_for_user_id: IUser.id;
  //   name?: string;
  //   email: T_EMAIL;
  //   phone?: string;
  //   fullAddress?: string;
  //   street?: string;
  //   suite?: string;
  //   city?: string;
  //   state?: string;
  //   postalCode?: string;
  //   country?: string;
  //   nickname?: string;
  //   latitude?: number;
  //   longitude?: number;
  //   neighborhood?: string;
  //   specialPrices?: IContactSpecialPrice[];
  // }
  // interface IContactSpecialPrice extends ISchema {
  //   user_id: IUser.id;
  //   contact_id: IContact.id;
  //   product_id?: IProduct.Id;
  //   service_id?: IService.Id;
  //   label: string;
  //   description?: string;
  //   originalPrice: number;
  //   specialPrice: number;
  // }
  // Transactions
  export interface ITransaction extends ISchema {
    platform_id: IPlatform.id;
    contract_id: IContract.id;
    buyer_user_id?: IUser.id;
    seller_user_id?: IUser.id;
    amount: number;
    currency: T_CURRENCY;
    stripeChargeId: string;
    type: "outgoing" | "incoming" | "fee:candle" | "fee:platform" | "fee:stripe" | "outgoing:refund" | "incoming:refund" | "fee:candle:refund" | "fee:platform:refund" | "fee:stripe:refund";
    status: "queued" | "ready" | "processing" | "succeeded" | "failed" | "canceled" | "disputed" | "unknown";
  }
  // Waitlists
  export interface IWaitlist extends ISchema {
    email: T_EMAIL;
    name?: T_FULLNAME;
    position: number;
    granted?: Date | null;
  }
  // Webhooks
  export interface IWebhook extends ISchema {
    platform_id: IPlatform.id;
    user_id: IUser.id;
    name: string;
    description?: string;
    url: string;
    onEvent: "create" | "update" | "delete";
  }
  // Contracts
  export interface IContract extends ISchema {
    platform_id: IPlatform.id;
    user_id: IUser.id;
    items?: IContractItem[];
    notes?: string;
    sent?: Date;
    lastSent?: Date;
    due: Date;
    lastPaymentAttempt?: Date;
    paid?: Date;
    subTotal?: number;
    total?: number;
    currency?: T_CURRENCY;
    status: "draft" | "open" | "void" | "paid" | "uncollectible" | "processing";
    buyers?: IContractBuyer[];
    sellers?: IContractSeller[];
    fees?: IContractFee[];
    includeStripeFees?: boolean;
    includeCandleFees?: boolean;
    includePlatformFees?: boolean;
  }
  interface IContractItem extends ISchema {
    contract_id: IContract.id;
    user_id: IUser.id;
    type: "product" | "service" | "subscription";
    service_id?: IService.id;
    product_id?: IProduct.id;
    subscription_id?: ISubscription.id;
    quantity: number;
    price: number;
    tota: number;
    description: IService.name | IProduct.name | ISubscription.name;
  }
  interface IContractFee extends ISchema {
    contract_id: IContract.id;
    buyer_user_id?: IUser.id;
    type: "candle:base" | "platform:base" | "stripe:cc" | "stripe:us_bank_account" | "custom";
    amount: number;
    description: string;
  }
  interface IContractBuyer extends ISchema {
    contract_id: IContract.id;
    product_id?: IProduct.id;
    service_id?: IService.id;
    user_id: IUser.id;
    email: T_EMAIL;
    name: T_FULLNAME;
    baseAmountDue: number;
    amountDue: number;
    amountPaid: number;
  }
  interface IContractSeller extends ISchema {
    contract_id: IContract.id;
    user_id: IUser.id;
    email: T_EMAIL;
    name: T_FULLNAME;
    baseAmountOwed: number;
    amountOwed: number;
    amountReceived: number;
  }

  // Products
  export interface IProduct extends ISchema {
    platform_id: IPlatform.id;
    user_id: IUser.id;
    user?: IUser;
    parent_product_id?: IProduct.id;
    name: string;
    description?: string;
    image?: string;
    quantity?: T_QUANTITY;
    isAvailableInStock?: boolean;
    isEnabled?: boolean;
    category?: string;
    cycle: "hourly" | "daily" | "weekly" | "biweekly" | "monthly" | "yearly";
    subcategory?: string;
    tags?: string[];
    price: number;
    seasonalPrices?: ISeasonalPrice[];
  }
  // Services
  export interface IService extends ISchema {
    platform_id: IPlatform.id;
    user_id: IUser.id;
    parent_service_id?: IService.id;
    name: string;
    description?: string;
    image?: string;
    category?: string;
    subcategory?: string;
    isEnabled?: boolean;
    subscriptionLimit?: number;
    buyerLimit?: number;
    activeSubscriptions?: number;
    activeBuyers?: number;
    metering: "hourly" | "daily" | "weekly" | "biweekly" | "monthly" | "yearly";
    tags?: string[];
    price: number;
    seasonalPrices?: ISeasonalPrice[];
    expires?: Date;
  }
  interface ISeasonalPrice extends ISchema {
    type: "product" | "service";
    product_id?: IProduct.id;
    service_id?: IService.id;
    seasonstart: Date;
    seasonEnd: Date;
    price: number;
  }
  // Carts
  export interface ICart extends ISchema {
    platform_id: IPlatform.id;
    user_id: IUser.id;
    items?: ICartItem[];
  }
  interface ICartItem extends ISchema {
    cart_id: ICart.id;
    type: "product" | "service";
    quanity: T_QUANTITY | T_QUANTITY_HOURS;
    price: number;
    service_id?: IService.id;
    product_id?: IProduct.id;
  }
  // Subscriptions
  export interface ISubscription extends ISchema {
    platform_id: IPlatform.id;
    user_id: IUser.id;
    service_id: IService.id;
    price: number;
    isActive?: boolean;
    isPaused?: boolean;
    pausedAt?: Date;
    pausedUntil?: Date;
    cycle: "hourly" | "daily" | "weekly" | "biweekly" | "monthly" | "yearly";
    startDate: Date;
    ended?: Date;
  }
  // Calendars
  export interface ICalendar extends ISchema {
    platform_id: IPlatform.id;
    user_id: IUser.id;
    name: string;
    description?: string;
    googleCalendarIds?: string[];
    availability?: ICalendarAvailability[];
    events?: ICalendarEvent[];
  }

  interface ICalendarAvailability extends ISchema {
    calendar_id: ICalendar.id;
    dayOfWeek: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    startTime: T_TIME;
    endTime: T_TIME;
  }
  interface ICalendarEvent extends ISchema {
    calendar_id: ICalendar.id;
    user_id: IUser.id;
    service_id?: IService.id;
    subscription_id?: ISubscription.id;
    googleCalendarEventId?: string;
    title: string;
    description?: string;
    location?: string;
    color?: string;
    eventStart: Date;
    eventEnd: Date;
    isDefault: boolean;
    isUnavailable?: boolean;
    cancelled?: Date | null;
    booked?: Date;
    confirmed?: Date;
    attendees?: ICalendarEventAttendee[];
  }
  interface ICalendarEventAttendee extends ISchema {
    calendar_event_id: ICalendarEvent.id;
    user_id: IUser.id;
    email: T_EMAIL;
    name: T_FULLNAME;
    responseStatus: "accepted" | "declined" | "needsAction" | "tentative";
    comment: string;
  }
}
