import ScreenWrapper from "../../../components/ScreenWrapper";
import { Chicken } from "../../../assets";
import Tilt from 'react-parallax-tilt';
import './style.scss';

const AboutSection = () => {

  return (
    <ScreenWrapper>
      <div className="about-section">
        <div className="about-section-info">
          <div className="about-section-child about-section-text">
            <h1>GET TO KNOW <span className="text-purple">ME</span></h1>
            <br/>
            <br/>
            <p>
              Hello everyone! My name is <span className="text-yellow">Nam Dao</span>
              <br/>
              I an currently a rising-senior at Drexel University, majoring in <span className="text-yellow">Computer Science</span> and minoring in <span className="text-yellow">Finance</span>.
              <br/>
              <br/>
              I am familiar with various technology stacks, mostly sufficient in <span className="text-yellow">Backend</span> space. However, I could do <span className="text-yellow">Fullstack</span> {" "}
              as I also have good amount of knowledge in <span  className="text-yellow">Frontend</span> development as well.
              <br/>
              <br/>
              During my previous internships and personal projects, I have a chance to work with multiple development spaces. Most of my projects are related to <span className="text-yellow">Web applications</span>. I have little experience working with <span className="text-yellow">Mobile application</span>, yet I am eager to learn and I believe that I can use my knowledge in adjancent fields to pick up skillsets along the way!
            </p>
            <br/>
            <p className="quote">
              <span className="text-purple">"Take a leap of fate, the trust part come later"</span> - <span className="text-yellow">Me 👨🏻‍💻</span>
            </p>
          </div>
          <Tilt className="about-section-child about-section-asset">
            <img src={Chicken} className="about-section-asset-img" alt="developer-gif"/>
          </Tilt>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default AboutSection;