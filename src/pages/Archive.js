import { useState, useEffect } from "react";

function Archive() {
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("archive");
    if (saved) {
      setArchive(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="archive-page">
      <h2>Archived Questions</h2>

      {archive.length === 0 ? (
        <p>No archived questions yet.</p>
      ) : (
        <ul>
          {archive.map((item, index) => (
            <li key={index}>
              <strong>Q:</strong> {item.question} <br />
              <strong>A:</strong> {item.answer}
            </li>
          ))}
        </ul>
      )}

      {/* Clear Archive Button */}
      {archive.length > 0 && (
        <button
          onClick={() => {
            localStorage.removeItem("archive");
            setArchive([]);
          }}
        >
          Clear Archive
        </button>
      )}
    </div>
  );
}

export default Archive;
