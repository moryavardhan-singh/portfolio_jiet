import "./globals.css";
import Header from "./components/header";
import Education from "./components/education";
import Experience from "./components/experience";
import Work from "./components/work";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="portfolio-page">
      <Header />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Work />
      <div className="section-divider" />
      <Education />
      <div className="section-divider" />
      <Skills />
    </div>
  );
}
