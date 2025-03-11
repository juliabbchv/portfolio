import "./Note.scss";
import xBtn from "../../assets/icons/x-btn.svg";

export default function Note() {
  return (
    <section className="note">
      <div className="note__wrap">
        <div className="note__back"></div>
        <div className="note__front">
          <div className="note__front-top">
            <div className="note__tags">
              <div className="typewriter">
                <h4 className="note__title">Hi, I'm Julia</h4>
              </div>

              <p className="note__tag">Social Media Specialist</p>
              <p className="note__tag">Full-Stack Web Developer</p>
            </div>
            <img className="note__x" src={xBtn} alt="x button" />
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
