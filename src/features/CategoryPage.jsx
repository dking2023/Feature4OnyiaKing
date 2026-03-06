import React, { useEffect, useState } from "react";

import CategoryModel from "../lib/models/CategoryModel.js";
import PersonModel from "../lib/models/PersonModel.js";

export default function CategoryPage({ categoryId }) {
  const [category, setCategory] = useState(null);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function load() {
      const c = await CategoryModel.getById(categoryId);
      const p = await PersonModel.getByCategoryId(categoryId);

      setCategory(c);
      setPeople(p);
    }

    load();
  }, [categoryId]);

  if (!category) return <p className="container section">Loading...</p>;

  return (
    <div className="container section">
      <a href="#/">← Back</a>

      <h1>{category.title}</h1>

      <div className="grid">
        {people.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
