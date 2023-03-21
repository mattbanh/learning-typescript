import { NextResponse } from "next/server";
import notes from "../../../data/notes.json";

export async function GET(request: Request) {
  const chapterTitles = notes.map((chapterNotes) => {
    return chapterNotes.chapter;
  });
  return NextResponse.json(chapterTitles);
}
