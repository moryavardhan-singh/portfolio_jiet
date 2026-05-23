export default function Header() {
  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Moryavardhan Singh Khichi</h1>
        <p className="hero-role">Full-Stack Web Developer</p>

        <div className="hero-contacts">
          <a className="hero-contact-item">
            +91 9509942417
          </a>
          <a className="hero-contact-item">
            moryavardhan@gmail.com
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hero-contact-item"
          >
            github.com/moryavardhan
          </a>
        </div>
      </section>
    </>
  );
}