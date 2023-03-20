import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../../page.module.css";
import Note from "./(components)/Note";
import Subsection from "./(components)/Subsection";
import ChapterNotes from "./(components)/Chapter";

async function getData(slug) {
  const res = await fetch(`http://localhost:3000/api/chapter-notes/${slug}`);

  if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    console.log("error");
    throw new Error("Failed to fetch data");
  }
  // console.log(res.json());
  return res.json();
}

export default async function Chapter({ params }) {
  const slug = params.chapter;
  const data = await getData(slug);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {data && <ChapterNotes chapter={data} />}
      </div>
    </main>
  );
}
