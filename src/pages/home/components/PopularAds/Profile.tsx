import React from "react";
import Avatar from "/assets/avatar/profile 1.png";
import { ProfileCardsData } from "../data/ProfileCardData";

const ProfileCard: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-head">
        <img src={Avatar} alt="avatar img" />
        <div className="profile-name">
          <p>Hi, John</p>
          <span>Customer Since 2017</span>
        </div>
      </div>
        <p>Top links for you</p>
      <div className="profile-cards">
        {ProfileCardsData.map((data) => (
          <div key={data.id} className="cards">
            <div className="card-details">
              <img src={data.img} alt="card-img" />
              <span>{data.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
