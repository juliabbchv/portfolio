import xBtn from "../../assets/icons/x-btn.svg";
import msFolder from "../../assets/icons/ms-folder.svg";
import snapsFolder from "../../assets/icons/snaps-folder.svg";
import instockFolder from "../../assets/icons/instock-folder.svg";
import "./Folder.scss";

interface FolderProps {
  selectedApp: string;
  setSelectedApp: (value: string) => void;
}

export default function Folder({ selectedApp, setSelectedApp }: FolderProps) {
  if (!selectedApp) return null;

  const handleCloseWindow = () => {
    setSelectedApp("");
  };

  return (
    <section className="note folder">
      <div className="note__wrap folder__wrap">
        <div className="note__front folder__wrap">
          <div className="note__front-top folder__top">
            <div className="note__tags folder__tags ">
              <div className="typewriter folder__typewriter">
                <h4 className="note__title ">Web Development</h4>
              </div>
              <p className="note__tag ">
                Skills: JavaScript, TypeScript, React, HTML5, CSS3/SCSS,
                Responsive Design, Node.js, Express.js, RESTful API, AI
                Implementation, MySQL, Git/GitHub
              </p>
              <p className="note__tag">
                Education: Diploma, Software Engineering, BrainStation Nov 2024
                - Feb 2025
              </p>
            </div>
            <img
              className="note__x note__x--clickable"
              onClick={handleCloseWindow}
              src={xBtn}
              alt="x button"
            />
          </div>
          <div className="note__front-bottom folder__bottom ">
            <p className="note__text folder__projects-title">Projects:</p>
          </div>
          <div className="folder__projects">
            <div className="folder__project">
              <img
                className="folder__project-icon"
                src={msFolder}
                alt="Microsoft Project"
              />
              <p className="folder__project-text">
                AI-Powered <br /> Small Business Tool
              </p>
            </div>
            <div className="folder__project">
              <img
                className="folder__project-icon"
                src={snapsFolder}
                alt="Snaps Project"
              />
              <p className="folder__project-text">
                Photo Sharing
                <br /> App
              </p>
            </div>
            <div className="folder__project">
              <img
                className="folder__project-icon"
                src={instockFolder}
                alt="In-Stock Project"
              />
              <p className="folder__project-text">
                Inventory Management
                <br /> System
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
