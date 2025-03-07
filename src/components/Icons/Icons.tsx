import computer from "../../assets/icons/computer.svg";
import folder from "../../assets/icons/folder.svg";
import phone from "../../assets/icons/phone.svg";
import "./Icons.scss";

export default function Icons() {
  return (
    <section className="icons">
      <div className="icon">
        <img className="icon__img" src={computer} alt="computer icon" />
        <p className="icon__text">Web Dev</p>
      </div>
      <div className="icon">
        <img className="icon__img" src={folder} alt="folder icon" />
        <p className="icon__text">Social Media</p>
      </div>
      <div className="icon">
        <img className="icon__img" src={phone} alt="phone icon" />
        <p className="icon__text">Contact Me</p>
      </div>
    </section>
  );
}
