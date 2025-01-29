import RentCard from "../../../components/RentCard/RentCard";
import { RentCardData } from "../data/RentCardData";
import "./styles.css";
import TipsSection from "./components/TipsSection";

const Rent = () => {
  return (
    <div className="rent-container">
      <h1>Popular cities to rent in</h1>
      <RentCard data={RentCardData} />
      <TipsSection />
    </div>
  );
};

export default Rent;
