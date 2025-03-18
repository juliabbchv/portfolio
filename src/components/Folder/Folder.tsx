import xBtn from "../../assets/icons/x-btn.svg";
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
        <div className="note__back"></div>
        <div className="note__front">
          <div className="note__front-top">
            <div className="note__tags">
              <div className="typewriter">
                <h4 className="note__title">HHHH</h4>
              </div>

              <p className="note__tag">Social Media Specialist</p>
              <p className="note__tag">Full-Stack Web Developer</p>
            </div>
            <img
              className="note__x note__x--clickable"
              onClick={handleCloseWindow}
              src={xBtn}
              alt="x button"
            />
          </div>
          <div className="note__front-bottom ">
            <p className="note__text">
              Welcome to my corner of the internet...
            </p>

            <p className="note__text typing">
              I like using technology to connect and entertain people.
            </p>

            <p className="note__text typing">
              Browse around for my work in social media & web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
