import { NavBar } from "../components/NavBar";
import { IntroSection } from "../views/landingPage/intro";
import { TextBox } from "../views/landingPage/textBox";
import { TextOne, TextThree, TextTwo } from "../views/landingPage/texts";

export default function Home() {
  return (
    <>
      <NavBar />
      <IntroSection />
      <TextBox />
      <TextOne />
      <TextTwo />
      <TextThree />
    </>
  );
}
