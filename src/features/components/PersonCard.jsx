import React from "react";

export default function PersonCard({ person }) {
  return (
    <article className="card">
      <h4>{person.name}</h4>
      <p>{person.summary}</p>

      <a className="btn small" href={`#/person/${person.id}`}>
        View Profile
      </a>
    </article>
  );
}
