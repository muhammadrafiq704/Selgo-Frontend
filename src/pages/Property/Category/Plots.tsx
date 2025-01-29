import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Button from "../../../components/Button";
import "./plots.css";

const Plots = () => {
  return (
    <div className="plot-container">
      <div className="plot-header">
        <img
          src="/assets/images/Property/RURAL_&_LARGE_PROPERTY.png"
          alt="plot"
        />
        <h1>RURAL & LARGE PROPERTY</h1>
      </div>
      <div className="rating-section">
        <div className="rating">
          <p className="price">$149.99</p>
          <div className="star-icons">
            <IoIosStar className="icon" />
            <IoIosStar className="icon" />
            <IoIosStar className="icon" />
            <IoIosStar className="icon" />
            <IoIosStarHalf className="icon" />
            <span className="rate">4.6 / 5.0</span>
            <p>(559)</p>
          </div>
        </div>
        <div className="comment">
          <p>
            The gently curved lines accentuated by sewn details are kind to your
            body and pleasant to look at.{" "}
          </p>
        </div>
        <div className="button">
          <Button
            variant="filled"
            name="Loan Calculator"
            width={203}
            height={52}
          />
          <Button
            variant="outlined"
            name="Price of Insurance"
            width={203}
            height={52}
          />
        </div>
      </div>
      <div className="info">
        <h1>Key Info</h1>
        <div className="info-list">
          <ul>
            <li>Housing type: Detached house</li>
            <li>Bedroom:3</li>
            <li>Room: 4</li>
            <li>Use area: 192 m²</li>
            <li>Form of ownership: Owner (Owner)</li>
            <li>Plot area6,273 m² (owned)</li>
          </ul>
          <Button variant="outlined" name="See More" width={154} height={52} />
        </div>
      </div>
      <div className="about">
        <div className="about-left">
          <h1>About Home</h1>
          <p>
            Welcome to Sørsidevegen 596. A rural property significantly
            renovated in 2016-2017
          </p>
          <p>Qualities of the property:</p>
          <ul>
            <li>
              Detached house of 192 BRA-i significantly renovated in 2016-2017
            </li>
            <li>
              Large plot of 6.2 acres with several zones & large courtyard
            </li>
            <li>
              Basement renovated in the period 2016-2022 with e.g. living room,
              kitchen, bathroom, office, laundry room, technical room, storage
              room
            </li>
            <li>
              The main floor contains living room/kitchen, 3 bedrooms, hallway &
              bathroom
            </li>
            <li>
              Wood burning & water-borne underfloor heating on both floors
            </li>
            <li>
              Significantly upgraded & furnished outbuilding (2017) with
              fireplace, 2 bedrooms, kitchen, bathroom, living room with bar,
              garage, workshop and lots of storage space
            </li>
            <li>
              Parts of the outhouse have previously been rented out via AirBnB.
              The outhouse is not approved as a separate housing unit
            </li>
            <li>
              New drainage and roof, walls and windows (2016) and treatment
              plant (2022)
            </li>
            <li>
              Great opportunities to grow your own vegetables, and create a
              playground for the children right outside the door
            </li>
            <li>
              Only 35 minutes away from Trondheim Welcome to a pleasant viewing!
            </li>
          </ul>
          <Button
            variant="filled"
            name="View Compplete satatement"
            width={281}
            height={52}
          />
        </div>
        <div className="about-right">
          <h1>Dispaly</h1>
          <p>Tuesday, November 19</p>
          <p>
            Sign up for a viewing or contact the estate agent for a private
            viewing. Viewing will not be carried out without registration.
          </p>
          <div className="left-button">
            <Button
              variant="filled"
              name="Add to Calender"
              width={203}
              height={52}
            />
            <Button
              variant="outlined"
              name="View Registration"
              width={203}
              height={52}
            />
          </div>
        </div>
      </div>
      <div className="location">
        <h1>Location</h1>
        <img src="/assets/images/Property/Sell/map.png" alt="map" />
      </div>
    </div>
  );
};

export default Plots;
