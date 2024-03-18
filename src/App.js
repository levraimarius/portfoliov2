import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Language from "./components/Language/Language";
import Contact from "./components/Contact/Contact";
import BubblesAnimation from "./components/BubblesAnimation/BubblesAnimation";
import "./assets/styles/global.scss";

function Portfolio() {
  return (
    <div className="container">
      <div className="content">
        {/* Profil */}
        <Profile />

        {/* Expérience */}
        <Experience />

        {/* Formations */}
        <Education />

        {/* Compétences */}
        <Skills />

        {/* Langues */}
        <Language />

        {/* Contact */}
        <Contact />

        {/* Bulles */}
        <BubblesAnimation />
      </div>
    </div>
  );
}

export default Portfolio;
