import React from "react";

export default function StoryList({ stories = [] }) {
  if (stories.length === 0) {
    return null;
  }

  return (
    <section className="section" style={{ paddingTop: "10px" }}>
      <h2>Related Stories</h2>

      <div className="grid">
        {stories.map((story) => (
          <article className="card" key={story.id}>
            <h4>{story.headline}</h4>
            <p>{story.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
