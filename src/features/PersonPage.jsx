import React, { useEffect, useState } from "react";
import { getLeaderById } from "../services/dataService.js";

export default function PersonPage({ personId }) {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function load() {
      const p = await getLeaderById(personId);
      setPerson(p);
    }

    load();
  }, [personId]);

  if (!person) return <p className="container section">Loading...</p>;

  return (
    <div className="container section">
      <a href="#/">← Back</a>

      <h1>{person.name}</h1>
      <p>{person.summary}</p>

      <h2>Early Life</h2>
      <p>{person.early}</p>

      <h2>Impact</h2>
      <p>{person.impact}</p>

      <h2>Legacy</h2>
      <p>{person.legacy}</p>

      <h2>Achievements</h2>
      <ul>
        {person.achievements.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}
