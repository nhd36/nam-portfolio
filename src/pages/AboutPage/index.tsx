import BasePage from "../BasePage";
import AboutSection from "./AboutSection";
import TechStacksSection from "./TechStacksSection";

const AboutPage = () => {
  return (
    <BasePage>
      <AboutSection/>
      <TechStacksSection />
    </BasePage>
  )
}

export default AboutPage;