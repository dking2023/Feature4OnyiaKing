import React from "react";

/*
  Displays a section of leaders.
  Used on the homepage for men and women sections.

  Props:
  - title: section title
  - people: array of leader objects
  - imageSrc: optional hero image
  - imageAlt: alt text for image
*/

export default function LeadersSection({
  title,
  people = [],
  imageSrc,
  imageAlt,
}) {
  return (
    <section className="leaders-block">
      <div className="leaders-head">
        <h2 className="leaders-title">{title}</h2>
      </div>

      {/* Optional image displayed above leader cards */}
      {imageSrc && (
        <div className="leaders-image--stacked">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}

      <div className="grid leaders-cards">
        {people.length === 0 ? (
          <p className="muted">No leaders available.</p>
        ) : (
          people.map((person) => (
            <article className="card" key={person.id}>
              <h4>{person.name}</h4>
              <p>{person.summary}</p>

              <a className="btn small" href={`#/person/${person.id}`}>
                View Profile
              </a>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
