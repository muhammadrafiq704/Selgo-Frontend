import ImageSection from "./ImageSection";
import TipsBottom from "./TipsBottom";
import "./tipsSection.css";

const TipsSection = () => {
  return (
    <div className="tips-container">
      <h1 className="header">5 tips from us for those who are going to rent</h1>
      <ImageSection />
      <TipsBottom />
    </div>
  );
};

export default TipsSection;
