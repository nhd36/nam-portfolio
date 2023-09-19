import ScreenWrapper from "../../../components/ScreenWrapper";
import { TypeAnimation } from 'react-type-animation';
import { DeveloperGif } from "../../../assets";
import './style.scss';

const WelcomTextSection = () => {

  return (
    <ScreenWrapper>
      <div className="welcome-section">
        <div className="welcome-section-child welcome-section-text">
          <p color="white">
            Hello everyone!
          </p>
          <p>
            My name is <span className="text-purple">Nam Dao</span>
          </p>
          <br/>
          <br/>
          <p>I am {" "}
            <span>
              <TypeAnimation
                className="welcome-section-p text-purple"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Fullstack Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Backend Developer',
                  1000,
                  'Frontend Developer',
                  1000,
                  'A Creator',
                  1000,
                  'A Student',
                  1000,
                  'A Teacher',
                  1000,
                  'A Friend',
                  1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </span>
          </p>
        </div>
        <div className="welcome-section-child welcome-section-asset">
          <img src={DeveloperGif} className="welcome-section-asset-img" alt="developer-gif"/>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default WelcomTextSection