
import "./about.css"
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="./img/about.png"
          alt="About Me"
          className="about--section--img--style"
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h2 className="skills-section--heading">About Me</h2>

          <p className="hero--section-description">
  I’m <strong>Kalyan Kumar Pulapaka</strong>, a <strong>MERN Stack Developer</strong> with a <strong>Bachelor’s degree in Computer Science</strong> from <strong>Andhra University</strong> (GPA: 7.6/10). With a strong foundation in <strong>web development</strong>, I specialize in designing and developing <strong>scalable, responsive, and user-centric web applications</strong> using modern technologies.
</p>

<p className="hero--section-description">
  My professional journey began at <strong>Accenture</strong>, where I gained experience in <strong>incident management</strong> and process improvement, ensuring efficiency in IT workflows. Later, at <strong>Teleperformance</strong>, I transitioned to development roles, working extensively with <strong>React.js</strong>, <strong>Redux</strong>, and API integrations to deliver seamless user experiences.
</p>

<p className="hero--section-description">
  I have hands-on expertise in leveraging <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong> to build dynamic and data-driven web solutions. My technical proficiency extends to tools like <strong>Git</strong> for version control, <strong>REST APIs</strong> for integration, and <strong>ServiceNow</strong> for IT process automation.
</p>

<p className="hero--section-description">
  As a certified <strong>MERN Stack Developer</strong> from <strong>Guvi-IIT Madras</strong>, I combine technical expertise with a focus on optimizing workflows and delivering high-quality solutions that meet business objectives.
</p>

        </div>
      </div>
    </section>
  );
}
