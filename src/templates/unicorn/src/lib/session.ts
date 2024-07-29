import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getSession = async () => {
  const supabase = createServerComponentClient<any>({ cookies });
  const { data, error } = await supabase.auth.getSession();
  if (error) return;
  let { session } = data;
  return session || {};
};

export const clearSession = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
  return;
};

export const createSession = (authenticatedUser: any) => {
  if (!authenticatedUser.token || !authenticatedUser.refreshToken) {
    return { error: "Error creating session" };
  }
  cookies().set("accessToken", authenticatedUser.token);
  cookies().set("refreshToken", authenticatedUser.refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
  return authenticatedUser;
};

export const getUserTokens = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  return { accessToken, refreshToken };
};
