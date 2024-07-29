import { getCookie } from "./cookies";

interface iFetch {
  isLocal?: boolean;
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
  media?: boolean;
  timezone?: string;
}

export const fetchWrapper = async ({ isLocal, url, method = "GET", data = {}, media, timezone }: iFetch) => {
  const mode = getCookie("mode") || "live";
  const accessToken = getCookie("accessToken");
  let headers: any = {
    authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    "Content-Type": "application/json",
    mode,
  };
  if (media) headers = { "Content-Type": "multipart/form-data" };

  if (timezone) headers = { ...headers, "x-timezone": timezone || "" };

  let payload: any = { method, headers, body: JSON.stringify(data) };
  if (method === "GET") delete payload.body;

  const fetchUrl = isLocal ? url : `${process.env.NEXT_PUBLIC_API_URL}/admin/${url}`;
  const response = await fetch(fetchUrl, payload);


  if (response.status > 499) {
  }
  if (response.status < 300) {
    let result = await response.json();
    return result;
  }
  let error = await response.json();

  let errorMessages = error.message || `Error ${method}-ing /api/${url}`;
  return { message: errorMessages, status: response.status, error };
};
