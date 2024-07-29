import Cookie from "js-cookie";
function isServer() {
  return typeof window === "undefined";
}

// This function retrieves a cookie by name
export function getCookie(name: string): string | undefined {
  if (isServer()) {
    const nextHeaders = require("next/headers");
    const cookieStore = nextHeaders.cookies();
    return cookieStore.get(name)?.value;
  }
  // Client-side: use document.cookie
  return parseCookie(document.cookie, name);
}

// Function to set a cookie

export function setCookie(name: string, value: string, maxAgeDays: number = 7) {
  const maxAge = maxAgeDays * 24 * 60 * 60; // Convert days to seconds
  // const cookieValue = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax`;

  if (isServer()) {
    const nextHeaders = require("next/headers");
    const cookieStore = nextHeaders.cookies();
    cookieStore.set(name, value, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge,
    });
    return value;
  }

  Cookie.set(name, value, { expires: maxAgeDays });

  return value;
}

// Helper function to parse cookies
function parseCookie(cookieString: string | null, name: string): string | undefined {
  if (!cookieString) {
    return undefined;
  }

  const cookies = cookieString.split(";").reduce(
    (acc, cookie) => {
      const [key, value] = cookie.split("=").map((part) => part.trim());
      acc[key] = decodeURIComponent(value);
      return acc;
    },
    {} as { [key: string]: string },
  );
  return cookies[name];
}
