import React from "react";

export default function CategoriesGrid({ categories }) {
  return (
    <section className="container section">
      <h2>Explore Categories</h2>

      <div className="grid">
        {categories.map((c) => (
          <div className="card" key={c.id}>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>

            <a href={`#/category/${c.id}`} className="btn">
              View Category
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

