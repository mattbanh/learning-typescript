import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../page.module.css";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const res = await fetch(`http://localhost:3000/api/chapter-notes`, {
    cache: "no-store",
  });

  if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    console.log("error");
    throw new Error("Failed to fetch data");
  }
  // console.log(res.json());
  return res.json();
}

export default async function Part1() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ol className="list-item">
          {data &&
            data.map((chapterTitle, i) => {
              return (
                <li className="list-decimal ml-4" key={i}>
                  <Link href={`part-1/ch-${i + 1}/`}>
                    {chapterTitle.slice(chapterTitle.indexOf(". ") + 1)}
                  </Link>
                </li>
              );
            })}
        </ol>
      </div>
    </main>
  );
}
