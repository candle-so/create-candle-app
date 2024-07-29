// import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { IApiResolverResponse } from "api-resolver-interface";

export const candleResponder = ({ result, status, error }: IApiResolverResponse) => {
  if (status > 499) return NextResponse.json(error, { status });
  if (error) return NextResponse.json(error, { status });
  return NextResponse.json(result, { status });
};
