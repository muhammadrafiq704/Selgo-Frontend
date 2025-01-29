import Button from "../../../../../components/Button";
import { detailsCardData } from "../../../data/DetailsCard";
import "./styles.css";

const DetailsCard = () => {
  return (
    <>
      <div className="details-card-container">
        {detailsCardData.map((card) => (
          <div key={card.id} className="details-card">
            <img src={card.imageUrl} alt="details-card" />
            <h5>{card.name}</h5>
            <h6>{card.price}</h6>
            <p>{card.description}</p>
          </div>
        ))}
        <div className="card-info">
          <div className="info-text">
            <h1>
              The house with four bedrooms or the apartment with a west-facing
              balcony?
            </h1>
            <p>
              1 We understand it's difficult to choose...💙 That's why we've
              created a new comparison service called Bolig i sikte. Here you
              can easily keep track of and compare homes.
            </p>
          </div>
          <Button
            variant="filled"
            name="Compare Homes"
            width={211}
            height={52}
          />
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
