export default function Note({ note }) {
  return note.subheader ? (
    <li className="list-none m-0">
      <article className="mb-4">
        <h3 className="font-semibold text-sm mb-2">{note.subheader}</h3>
        <ul className="text-xs">
          {note.notes.map((individualNote, i) => {
            return (
              <li className="list-disc ml-4" key={i}>
                {individualNote}
              </li>
            );
          })}
        </ul>
      </article>
    </li>
  ) : (
    <li className="list-disc ml-4 mb-2 text-xs">{note}</li>
  );
}
