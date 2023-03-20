import Subsection from "./Subsection";

export default function ChapterNotes({ chapter }) {
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">{chapter.chapter}</h1>
      {chapter.notes.map((subsection, j) => {
        return <Subsection key={j} subsection={subsection} />;
      })}
    </section>
  );
}
