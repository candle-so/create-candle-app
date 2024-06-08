declare module "clsx" {
  type ClassValue =
    | string
    | number
    | null
    | undefined
    | { [key: string]: boolean }
    | ClassValue[];

  function clsx(...inputs: ClassValue[]): string;

  export { clsx, ClassValue };
  export default clsx;
}
