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
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>

          <p className="hero--section-description">
            I’m <strong>Kalyan Kumar Pulapaka</strong>, a <strong>Full Stack Developer</strong> with <strong>2 year of experience</strong> in the <strong>MERN stack</strong>. I hold a <strong>Bachelor of Computer Science</strong> from Andhra University, and I specialize in <strong>scalable web applications</strong> and <strong>cloud technologies</strong>.
          </p>

          <p className="hero--section-description">
            I began my career at <strong>Accenture</strong> as a <strong>Web Developer Associate</strong>, focusing on <strong>API integration</strong> and <strong>front-end development</strong>. Later, at <strong>Teleperformance</strong>, I worked with <strong>React.js</strong> and <strong>Redux</strong> to build dynamic UIs and optimize performance.
          </p>

          <p className="hero--section-description">
            I also completed a <strong>Full Stack Developer certification</strong> from <strong>Guvi</strong>, enhancing my skills in <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
