import { NextResponse } from "next/server";

export async function GET(response: NextResponse) {
  return NextResponse.json({message : "/api/hello"});
}

