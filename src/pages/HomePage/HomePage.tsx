import "./HomePage.scss";
import Icons from "../../components/Icons/Icons.tsx";
import Note from "../../components/Note/Note.tsx";

export default function HomePage() {
  return (
    <main className="home-main">
      <Icons />
      <Note />
    </main>
  );
}
