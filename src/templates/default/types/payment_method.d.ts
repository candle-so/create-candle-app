declare module "payment-method-interface" {
  interface IPaymentMethod {
    stripePaymentMethodId: string;
    accountHolderType?: "individual" | "company";
    type: "card" | "us_bank_account";
    isDefault: boolean;
    funding: "checking" | "credit" | "debit" | "prepaid" | "unknown";
    brand?: string;
    expMonth?: number;
    expYear?: number;
    last4: string;
  }
}
