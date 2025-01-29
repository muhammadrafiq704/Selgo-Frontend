import Button from "../../../components/Button";
import SearchBar from "../../../components/SearchBar/SearchBar";
import SellBottom from "./SellBottom";
import { sellCardData } from "./SellCardData";
import "./styles.css";

const Sell = () => {
  return (
    <div className="sell-container">
      <div className="map-section">
        <h1>Check what price homes in your area have sold for</h1>
        <img src="/assets/images/Property/Sell/map.png" alt="map" />
        <Button
          variant="filled"
          name="See sale prices"
          width={200}
          height={52}
        />
      </div>
      <div className="search-section">
        <h1>Price per square meter</h1>
        <SearchBar width={995} height={60} />
      </div>
      <div className="card-section">
        {sellCardData.map((item) => (
          <div key={item.id} className="sell-card">
            <h5>{item.title}</h5>
            <h6>{item.price}</h6>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <SellBottom />
      <div className="feedback-section">
        <h1>
          Are you wondering about something, or are you missing something on
          this page?
        </h1>
        <div className="feedback-form">
          <label htmlFor="feedback">Give us feedback in the form below!</label>
          <textarea
            id="feedback"
            placeholder="Give Your Feedback..."
          ></textarea>
          <Button variant="filled" name="Submit" width={150} height={52} />
        </div>
      </div>
    </div>
  );
};

export default Sell;
