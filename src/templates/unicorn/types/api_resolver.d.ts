declare module "api-resolver-interface" {
  export interface IApiResolver {
    _lj: any;
    req: any;
    user: any;
    geo: any;
    params: any;
    query: any;
    data: any;
  }

  export interface IMiddlewareHelper {
    user: any;
    email: string;
  }

  export interface IApiResolverResponse {
    result?: any | null;
    status: number;
    error?: any | null;
  }
}
