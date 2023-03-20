import { NextResponse } from "next/server";
import notes from "../../../../data/notes.json";

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const chapter = pathname.slice(pathname.indexOf("ch-") + 3);
  const index = parseInt(chapter) - 1;
  console.log(notes[index]);
  const res = notes[index];
  return NextResponse.json(res);
}
