import React, { useState } from "react";
import data from "../../data/index.json";

export default function MySkills() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section-heading">What can I bring to the table?</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item) => {
          const isExpanded = expandedCardId === item.id;

          return (
            <div
              key={item.id}
              className={`skills--section--card-wrapper ${
                isExpanded ? "expanded" : expandedCardId ? "hidden-card" : ""
              }`}
              onMouseEnter={() => setExpandedCardId(item.id)}
              onMouseLeave={() => setExpandedCardId(null)}
            >
              <div className="skills--section--card">
                <div className="skills--section--img">
                  <img src={item.src} alt={item.title} />
                </div>
                <div className="skills--section--card--content">
                  <h3 className="skills--section--title">{item.title}</h3>
                  <p className="skills--section--description">{item.description}</p>
                  {isExpanded && item.extendedDescription && (
                    <p className="skills--section--extended">{item.extendedDescription}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

