import { Link } from "react-router-dom";
import Button from "../../../../components/Button";
import "./imageSection.css"
const ImageSection = () => {
  return (
    <div className="image-section-container">
      <div className="image">
        <img src="/assets/images/Property/Rent/tipsImage.png" alt="image" />
      </div>
      <div className="img-info">
        <div className="tips-list">
          <ol>
            <li>
              Write a lease with a notice period. Use FINN's{" "}
              <Link to={"https://www.finn.no/eiendom/leiekontrakt.html"} target="blank">
                rental contract
              </Link>{" "}
              completely free of charge.
            </li>
            <li>
              Make sure you have a deposit in your own account in your name
              (deposit account).
            </li>
            <li>Document any errors or defects in the home upon moving in.</li>
            <li>
              Report any repairs to the landlord. It is not your responsibility!
            </li>
            <li>
              Remember that the electricity bill is often not included in the
              rent, take this into account in the calculation.
            </li>
          </ol>
        </div>
        <Button
          variant="outlined"
          name="More rental tips"
          width={257}
          height={48}
        />
      </div>
    </div>
  );
};

export default ImageSection;
