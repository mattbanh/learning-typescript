import styles from "../../../page.module.css";
import Note from "./Note";

export default function Subsection({ subsection }) {
  return (
    <article className="mb-6">
      <h2 className="text-base font-semibold">{subsection.subheader}</h2>
      <div className={styles.notes}>
        <ul>
          {subsection &&
            subsection.notes.map((note, i) => {
              return <Note note={note} key={i} />;
            })}
        </ul>
      </div>
    </article>
  );
}
