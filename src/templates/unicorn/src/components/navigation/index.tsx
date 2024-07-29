import { AuthenticatedNavigation } from "./_authenticated";
import { LoggedOutNavigation } from "./_logged_out";

export const Navigation = ({ variant, me, breadcrumbs }: { variant?: "logged-out" | "authenticated"; me?: any; breadcrumbs?: any[] }) => {
  if (!variant || variant === "logged-out") return <LoggedOutNavigation />;
  if (variant === "authenticated" && me) return <AuthenticatedNavigation me={me} breadcrumbs={breadcrumbs} />;
};
