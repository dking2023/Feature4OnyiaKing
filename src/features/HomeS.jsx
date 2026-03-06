import React, { useEffect, useState } from "react";

import Hero from "./components/Hero.jsx";
import Purpose from "./components/Purpose.jsx";
import LeadersSection from "./components/LeadersSection.jsx";
import CategoriesGrid from "./components/CategoriesGrid.jsx";
import Footer from "./components/Footer.jsx";

import { getLeaders, getCategories } from "../services/dataService.js";

/*
  Import hero images for leader sections.
  Vite requires importing images instead of using raw paths.
*/
import MountRushmore from "../assets/MountRushmore.png";
import WomenRushmore from "../assets/WomenRushmore.png";

/*
  Homepage module.

  Responsibilities:
  - Load leaders asynchronously
  - Load categories
  - Render homepage sections
*/

export default function HomeS() {
  const [leaders, setLeaders] = useState({ men: [], women: [] });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadData() {
      const leadersData = await getLeaders();
      const categoriesData = await getCategories();

      setLeaders(leadersData);
      setCategories(categoriesData);
    }

    loadData();
  }, []);

  return (
    <div>
      <Hero />

      <Purpose />

      {/* Leader Sections */}

      <section className="container section">
        <LeadersSection
          title="Mount Rushmore of Black Men"
          people={leaders.men}
          imageSrc={MountRushmore}
          imageAlt="Mount Rushmore style artwork of influential Black male leaders"
        />

        <LeadersSection
          title="Mount Rushmore of Black Women"
          people={leaders.women}
          imageSrc={WomenRushmore}
          imageAlt="Mount Rushmore style artwork of influential Black women leaders"
        />
      </section>

      {/* Categories */}

      <CategoriesGrid categories={categories} />

      <Footer />
    </div>
  );
}
