export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kalyan Kumar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">MERN Stack</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
  Experienced Web Developer with <strong>2 years of expertise</strong> in creating dynamic and responsive web applications. Specializing in frontend development, with a strong foundation in cloud technologies and Agile methodologies. Committed to delivering innovative solutions and continuously enhancing user experiences.
</p>


        </div>
        <div className="hero--section--buttons">
          {/* Get In Touch Button */}
          <a
            href="mailto:pulapakakalyankumar@gmail.com"
            className="btn btn-primary"
          >
            Get In Touch
          </a>
          {/* Download CV Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1gieQMyStsA0iY8_5RYViLbuSaFZQlJR1"
            className="btn btn-secondary"
            download
          >
            <i className="fa fa-download" aria-hidden="true"></i> Download CV
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/pic.png" className="hero--image" alt="Hero Section" />
      </div>
    </section>
  );
}
