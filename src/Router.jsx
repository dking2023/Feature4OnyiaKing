import React, { useEffect, useState } from "react";

import HomeS from "./features/HomeS.jsx";
import PersonPage from "./features/PersonPage.jsx";
import CategoryPage from "./features/CategoryPage.jsx";

function getRoute() {
  const hash = window.location.hash.replace("#", "");

  if (!hash) return { page: "home" };

  const parts = hash.split("/");

  if (parts[1] === "person") {
    return { page: "person", id: parts[2] };
  }

  if (parts[1] === "category") {
    return { page: "category", id: parts[2] };
  }

  return { page: "home" };
}

export default function Router() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handle = () => setRoute(getRoute());
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);

  if (route.page === "person") {
    return <PersonPage personId={route.id} />;
  }

  if (route.page === "category") {
    return <CategoryPage categoryId={route.id} />;
  }

  return <HomeS />;
}
