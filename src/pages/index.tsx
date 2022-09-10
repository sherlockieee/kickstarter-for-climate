import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { CallToAction } from "../views/landingPage/callToAction";
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
      <CallToAction />
      <Footer />
    </>
  );
}
