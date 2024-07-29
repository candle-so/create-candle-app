export const convertURLEncodedToPlusEncoded = (url: string) => {
  return url.replace(/%20/g, "+").replace(/ /g, "+").toLocaleLowerCase();
};

export const isHash = (label: string, hash: string) => {
  if (`#${convertURLEncodedToPlusEncoded(label)}` === convertURLEncodedToPlusEncoded(hash)) return true;
  return false;
};
