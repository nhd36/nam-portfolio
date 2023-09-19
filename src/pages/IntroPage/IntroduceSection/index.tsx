import ScreenWrapper from "../../../components/ScreenWrapper";
import { DeveloperGif } from "../../../assets";
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import './style.scss';

const IntroduceSection = () => {

  return (
    <ScreenWrapper>
      <div className="introduce-section">
        <div className="introduce-section-info">
          <div className="introduce-section-child introduce-section-text">
            <h1>LET'S HEAR ABOUT <span className="text-purple">MY STORY</span></h1>
            <br/>
            <br/>
            <p>
              My coding journey started when I entered my Senior year during High School <span className="text-purple">(2017)</span>. Originally, I declared {" "}
              <span className="text-purple">Data Science</span> as a major since it was a trending job at the time.
              <br/>
              <br/>
              First year of college has been essential to me, as it helped me to realize that I was going on the <span className="text-purple">wrong direction</span>.
              I didn't enjoy learning theories and statistics, was planning to <span className="text-purple">quit STEM</span> and work on Finance degree.
              <br/>
              <br/>
              Lucky enough, before I quitted, I decided to attend <span className="text-purple">a hackathon</span> with my friends one last time just to grab free 🍕 and networking.
              It turned out to be an amazing opportunity for me to get my hands a little bit of programming. 
              <br/>
              <br/>
              Although we didn't want to win anything at the end, I was still enjoy our time working together to brainstorm and create something meaningful that helps
              solving real world problems.
              <br/>
              <br/>
              This experience ignited my passion towards programming in general, with the desire to craft software that have certain impact to the people
              and society, so I decided to pursue <span className="text-purple">Computer Science</span> 🖥️ for my career.
              <br/>
              <br/>
              Since then, I have been through amazing journeys, gathering lots of experiences during the way and get a chance to meet more amazing people
              in the industry. I am positive about the future and looking forward to having more opportunities to grow and meeting more people!
            </p>
          </div>
          <div className="introduce-section-child introduce-section-asset">
            <img src={DeveloperGif} className="introduce-section-asset-img" alt="developer-gif"/>
          </div>
        </div>
        <div className="introduce-section-contact">
          <h1>Let's connect! I would love to know you</h1>
          <br/>
          <div className="introduce-section-contact-box">
            <ul>
              <li className="facebook"><FaFacebookF color="black"/></li>
              <li className="twitter"><FaTwitter color="black"/></li>
              <li className="instagram"><FaInstagram color="black"/></li>
              <li className="google"><FaGoogle color="black"/></li>
              <li className="linkedin"><FaLinkedinIn color="black"/></li>
            </ul>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default IntroduceSection;