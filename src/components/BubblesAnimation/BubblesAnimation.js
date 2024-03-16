import React, { useState } from "react";
import {
  mdiGithub,
  mdiLinkedin,
  mdiHelp,
  mdiTextBoxSearch,
  mdiCloseThick,
} from "@mdi/js";
import { Tooltip } from "react-tooltip";
import Icon from "@mdi/react";
import CV from "../../assets/files/marius-thiesset-cv.pdf";
import "./bubblesanimation.scss";

function BubblesAnimation() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleGithubClick = () => {
    window.open("https://github.com/levraimarius", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/marius-thiesset/", "_blank");
  };

  const handleHelpClick = () => {
    setShowModal(true);
  };

  const handleCv = () => {
    window.open(CV);
  };
  return (
    <div>
      <div className="bubbles-container">
        <Tooltip id="github-tooltip" />
        <button
          data-tooltip-id="github-tooltip"
          data-tooltip-content="GitHub"
          data-tooltip-place="top-start"
          className="bubble bubble1"
          onClick={handleGithubClick}
        >
          <Icon path={mdiGithub} size={1} />
        </button>
        <Tooltip id="linkedin-tooltip" />
        <button
          data-tooltip-id="linkedin-tooltip"
          data-tooltip-content="Linkedin"
          data-tooltip-place="top-start"
          className="bubble bubble2"
          onClick={handleLinkedinClick}
        >
          <Icon path={mdiLinkedin} size={1} />
        </button>
        <Tooltip id="cv-tooltip" />
        <button
          data-tooltip-id="cv-tooltip"
          data-tooltip-content="Mon CV"
          data-tooltip-place="top-start"
          className="bubble bubble3"
          onClick={handleCv}
        >
          <Icon path={mdiTextBoxSearch} size={1} />
        </button>
        <Tooltip id="info-tooltip" />
        <button
          data-tooltip-id="info-tooltip"
          data-tooltip-content="Détails techniques"
          data-tooltip-place="top-start"
          className="bubble bubble4"
          onClick={handleHelpClick}
        >
          <Icon path={mdiHelp} size={1} />
        </button>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="close-button" onClick={closeModal}>
                <Icon path={mdiCloseThick} size={1} />
              </button>
              <h4>Détails techniques</h4>
              <ul>
                <li>Ce portfolio est développé en React et Typescript.</li>
                <li>
                  Vous pouvez consulter le code source{" "}
                  <a
                    href="https://github.com/levraimarius/portfoliov2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ici
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BubblesAnimation;
