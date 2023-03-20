import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Part1() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul>
          <li>
            <Link href="part-1/ch-1/">1. From JavaScript to TypeScript</Link>
          </li>
          <li>
            <Link href="part-1/chapter-1/">2. The Type System</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
