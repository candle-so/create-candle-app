// import { headers } from "next/headers";
import { NextResponse } from "next/server";
interface IApiResolverResponse {
  result?: any | null;
  status: number;
  error?: any | null;
}

export const apiResponse = ({ result, status, error }: IApiResolverResponse) => {
  if (status > 499) return NextResponse.json(error, { status });
  if (error) return NextResponse.json(error, { status });
  return NextResponse.json(result, { status });
};
