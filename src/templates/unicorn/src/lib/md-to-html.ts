import showdown from "showdown";

export const convertMdToHtml = (md: string) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(md);
};
