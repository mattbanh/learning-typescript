import { NextResponse } from "next/server";
import notes from "../../../data/notes.json";

export async function GET(request: Request) {
  return NextResponse.json({ hi: "hi" });
}
