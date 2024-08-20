import { IPaymentMethod } from "payment-method-interface";

export const CreditCardPreview = ({ paymentMethod }: { paymentMethod: IPaymentMethod }) => {
  return (
    <div className="flex w-full cursor-pointer items-center space-x-3 text-xs font-sans tracking-wide">
      <div className="bg-cndl-primary-700 py-1 px-2 rounded font-bold capitalize text-cndl-light">{paymentMethod?.brand}</div>
      <div className="flex flex-1 justify-between space-x-4 whitespace-pre">
        <span>xxxx xxxx xxxx {paymentMethod?.last4}</span>
        <span>
          {paymentMethod?.expMonth}/{paymentMethod?.expYear}
        </span>
      </div>
    </div>
  );
};

export const BankAccountPreview = ({ paymentMethod }: { paymentMethod: IPaymentMethod }) => {
  return (
    <div className="flex w-full cursor-pointer items-center space-x-2 text-xs font-sans tracking-wide">
      <div className="bg-cndl-primary-700 py-1 px-2 rounded font-bold capitalize text-cndl-light">{paymentMethod?.brand?.toLowerCase()}</div>
      <div className="flex-1">xxxx-{paymentMethod?.last4}</div>
    </div>
  );
};
