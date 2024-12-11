import React from 'react'; // Ensure React is in scope for JSX
import data from "../../data/index.json";
import "./MyPortfolio.css"; // Assume CSS is in the same folder for styling

export default function MyPortfolio() {
  return (
    <section className="portfolio-section" id="MyPortfolio">
      {/* Header Section */}
      <header className="portfolio-header">
        <div>
          <p className="sub-title">Recent Projects</p>
          <h2 className="section-heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github">Visit My GitHub</button>
        </div>
      </header>

      {/* Cards Section */}
      <div className="portfolio-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio-card">
            {/* Image */}
            <div className="portfolio-image">
              <img src={item.src} alt={item.title} />
            </div>

            {/* Content */}
            <div className="portfolio-content">
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-description">{item.description}</p>
              <p className="portfolio-tech">
                <strong>Tech Used:</strong> {item.tech}
              </p>
              
              {/* GitHub Link */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-github-link"
              >
                View on GitHub 
               
              </a>

              <a
                href={item.link1}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-github-link1"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
