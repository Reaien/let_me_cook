import { NextResponse } from "next/server";

export function GET():NextResponse<String> {
    return NextResponse.json('Hello World')
}