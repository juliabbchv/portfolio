import "./Project.scss";
import xBtn from "../../assets/icons/x-btn.svg";
import msLogo from "../../assets/icons/ms-logo.svg";
import bstnLogo from "../../assets/icons/bstn-logo.svg";
import msDemo from "../../assets/images/ms-demo.png";

interface FolderProps {
  selectedProject: string;
}

export default function Project({ selectedProject }: FolderProps) {
  if (!selectedProject) return null;
  return (
    <>
      {selectedProject === "ms-hackathon" && (
        <section className="note folder">
          <div className="note__wrap folder__wrap">
            <div className="note__front folder__wrap">
              <div className="note__front-top folder__top">
                <div className="note__tags folder__tags ">
                  <div className="typewriter folder__typewriter">
                    <h4 className="note__title ">Hackathon</h4>
                  </div>
                  <p className="note__tag ">
                    Key Skills: JavaScript, React, OpenAI API integration,
                    Node.js
                  </p>
                  <p className="note__tag">Role: Back-End Developer</p>
                </div>
                <img
                  className="note__x note__x--clickable"
                  src={xBtn}
                  alt="x button"
                />
              </div>

              <div className="folder__logos">
                <img
                  className="folder__logo"
                  src={msLogo}
                  alt="Microsoft Logo"
                />
                <span className="x">X</span>
                <img
                  className="folder__logo"
                  src={bstnLogo}
                  alt="BrainStation Logo"
                />
              </div>
              <div className="note__front-bottom folder__bottom ">
                <p className="note__text folder__projects-title folder__overview">
                  Overview:
                </p>
              </div>
              <div className="folder__main-text folder__main-text--project">
                <p className="folder__text">
                  An AI-powered solution designed to help small business owners
                  using Microsoft products explore the benefits of AI while
                  addressing common concerns in a familiar, non-intimidating
                  way, helping those who may not be used to writing prompts to
                  use AI to its full potential.
                </p>
                <img
                  className="folder__demo"
                  src={msDemo}
                  alt="Microsoft Demo"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
