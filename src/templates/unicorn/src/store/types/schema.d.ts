// types.ts

declare module "schema-interface" {
  export type T_UUID = string;
  export type T_EMAIL = string;
  export type T_FULLNAME = string;
  export type T_TIMEZONE = "America/New_York" | string;
  export type T_CURRENCY = "usd" | string;
  export type T_QUANTITY = number;
  export type T_QUANTITY_HOURS = number;
  export type T_TIME = "string"; // "00:00:00" - "23:59:59"

  export interface ISchema {
    id: T_UUID;
    mode: "test" | "live";
    updated?: Date | string;
    created: Date | string;
  }

  export interface IPlatform extends ISchema {
    name: string;
    admins?: IUser[];
    description?: string;
    logo?: string;
    url: string;
    platformFee: number;
    activeSubscription?: string;
  }

  export interface IUser extends ISchema {
    platform_id?: IPlatform.id;
    email: T_EMAIL;
    username?: string;
    bio?: string;
    name?: T_FULLNAME;
    firstName?: string;
    lastName?: string;
    image?: string;
    plan?: string;
    stripeConnectId?: string;
    chargesEnabled?: boolean;
    detailsSubmitted?: boolean;
    timezone: T_TIMEZONE;
    stripeCustomerId?: string;
    authenticated?: Date | string;
    links?: IUserLink[];
    paymentMethods?: IPaymentMethod[];
    scheduledDeletion?: Date | string | null;
    onboarded?: Date | string;
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

  export interface IContact extends ISchema {
    platform_id: IPlatform.id;
    user_id?: IUser.id;
    contact_for_user_id: IUser.id;
    name?: string;
    email: T_EMAIL;
    phone?: string;
    fullAddress?: string;
    street?: string;
    suite?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    nickname?: string;
    latitude?: number;
    longitude?: number;
    neighborhood?: string;
    specialPrices?: IContactSpecialPrice[];
  }

  interface IContactSpecialPrice extends ISchema {
    user_id: IUser.id;
    contact_id: IContact.id;
    product_id?: IProduct.id;
    service_id?: IService.id;
    label: string;
    description?: string;
    originalPrice: number;
    specialPrice: number;
  }

  export interface ITransaction extends ISchema {
    platform_id: IPlatform.id;
    invoice_id: IInvoice.id;
    buyer_user_id?: IUser.id;
    seller_user_id?: IUser.id;
    amount: number;
    currency: T_CURRENCY;
    stripeChargeId: string;
    type: "outgoing" | "incoming" | "fee:candle" | "fee:platform" | "fee:stripe" | "outgoing:refund" | "incoming:refund" | "fee:candle:refund" | "fee:platform:refund" | "fee:stripe:refund";
    status: "queued" | "ready" | "processing" | "succeeded" | "failed" | "canceled" | "disputed" | "unknown";
  }

  export interface IWaitlist extends ISchema {
    email: T_EMAIL;
    name?: T_FULLNAME;
    position: number;
    granted?: Date | null;
  }

  export interface IWebhook extends ISchema {
    platform_id: IPlatform.id;
    user_id: IUser.id;
    name: string;
    description?: string;
    url: string;
    onEvent: "create" | "update" | "delete";
  }

  export interface IInvoice extends ISchema {
    platform_id: IPlatform.id;
    user_id: IUser.id;
    items?: IInvoiceItem[];
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
    buyers?: IInvoiceBuyer[];
    sellers?: IInvoiceSeller[];
    fees?: IInvoiceFee[];
    includeStripeFees?: boolean;
    includeCandleFees?: boolean;
    includePlatformFees?: boolean;
  }

  interface IInvoiceItem extends ISchema {
    invoice_id: IInvoice.id;
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

  interface IInvoiceFee extends ISchema {
    invoice_id: IInvoice.id;
    buyer_user_id?: IUser.id;
    type: "candle:base" | "platform:base" | "stripe:cc" | "stripe:us_bank_account" | "custom";
    amount: number;
    description: string;
  }

  interface IInvoiceBuyer extends ISchema {
    invoice_id: IInvoice.id;
    product_id?: IProduct.id;
    service_id?: IService.id;
    user_id: IUser.id;
    email: T_EMAIL;
    name: T_FULLNAME;
    baseAmountDue: number;
    amountDue: number;
    amountPaid: number;
  }

  interface IInvoiceSeller extends ISchema {
    invoice_id: IInvoice.id;
    user_id: IUser.id;
    email: T_EMAIL;
    name: T_FULLNAME;
    baseAmountOwed: number;
    amountOwed: number;
    amountReceived: number;
  }

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
    useSeasonalPrices?: boolean;
    activeSubscriptions?: number;
    subscriptionLimit?: number;
    buyerLimit?: number;
    activeBuyers?: number;
    category?: string;
    subcategory?: string;
    tags?: string[];
    price: number;
    cycle?: "hourly" | "daily" | "weekly" | "biweekly" | "monthly" | "yearly";
    expires?: Date | string | null;
    seasonalPrices?: ISeasonalPrice[];
  }

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
    cycle: "hourly" | "daily" | "weekly" | "biweekly" | "monthly" | "yearly";
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
    dayOfWeek?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | null;
    overrideDate?: Date;
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
