import Button from "../../../../../components/Button";
import Card from "../../../../../components/Card/Card";
import favoriteCardData from "../../../data/Card";
// import { recomendedCardData } from "../../../data/RecomendedCardData";
import "./styles.css";
const RecomendedCard = () => {
  return (
    <>
      <div className="recomended-container">
        <h1>We think you might like these</h1>
        {/* Recomended Card */}
        <Card data={favoriteCardData} />
        <Button variant="filled" name="Show More" width={211} height={52} />
      </div>
    </>
  );
};

export default RecomendedCard;
