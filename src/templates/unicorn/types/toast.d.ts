declare module "toast-interface" {
  interface IToast {
    status?: "info" | "warn" | "error" | "success" | null;
    delay?: number | null;
    message?: string | null;
  }
}
