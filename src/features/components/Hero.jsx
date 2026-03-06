import React from "react";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <p className="eyebrow">
          Made by Chidera & Daylon: Upcoming Excellent Young Black Men
        </p>

        <h1>Black Excellence: A Living Legacy</h1>

        <p className="lead">
          This website celebrates the resilience, brilliance, and global impact
          of Black leaders across history.
        </p>

        <div className="hero-actions">
          <a className="btn primary" href="#leaders">
            Explore Featured Leaders
          </a>
          <a className="btn ghost" href="#explore">
            Explore Categories
          </a>
        </div>
      </div>
    </header>
  );
}
