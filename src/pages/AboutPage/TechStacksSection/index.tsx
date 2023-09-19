import ScreenWrapper from "../../../components/ScreenWrapper";
import "./style.scss";
import programmingLanguages from "../../../types/languages.constants";

const TechStacksSection = () => {

  return (
    <ScreenWrapper>
      <div className="techstacks-section">
        <div className="techstacks-section-title-box">
          <h1>
            <span className="text-yellow">Technologies</span>
          </h1>
        </div>
        <br/>
        <div className="techstacks-section-grid-container">
          {programmingLanguages.map(value => {
            return (
              <div className="techstacks-section-grid-item">
                <value.icon className="techstacks-section-grid-img" color="white" />
              </div>
            );
          })}
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default TechStacksSection;