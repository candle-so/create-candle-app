import { fetchWrapper } from "@/lib/_fetch";
import { redirect } from "next/navigation";
export const getMe = async () => {
  let response: any = await fetchWrapper({ url: "users/me", method: "GET" });

  if (response.error) return redirect("/auth");
  if (!response.created) return redirect("/onboarding");
  return response;
};
