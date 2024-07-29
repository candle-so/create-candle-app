declare module "api-resolver-interface" {
  import { createClient } from "@supabase/supabase-js";
  export interface IApiResolver {
    _lj: any;
    req: any;
    user: any;
    geo: any;
    db: ReturnType<typeof createClient>;
    params: any;
    query: any;
    data: any;
  }

  export interface IMiddlewareHelper {
    user: any;
    db: ReturnType<typeof createClient>;
    email: string;
  }

  export interface IApiResolverResponse {
    result?: any | null;
    status: number;
    error?: any | null;
  }
}
