import "./Note.scss";

export default function Note() {
  return (
    <section className="note">
      <div className="note__wrap">
        <div className="note__back"></div>
        <div className="note__front">
          <div className="note__front-top"></div>
          <div className="note__front-bottom"></div>
        </div>
      </div>
    </section>
  );
}
