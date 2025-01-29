import React from "react";
import "./styles.css"

interface CardProps {
  name: string;
  imgPath: string;
}

interface RentCardProps {
  data: CardProps[];
}
const RentCard: React.FC<RentCardProps> = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((card) => (
        <div className="rent-card" key={card.name}>
          <img src={card.imgPath} alt={card.name} />
          <p>{card.name}</p>
        </div>
      ))} 
    </div>
  );
};

export default RentCard;