import { Link } from "react-router-dom";
import Button from "../../../../components/Button";
import "./tipsBottom.css";

const TipsBottom = () => {
  return (
    <div className="tips-bottom">
      <div className="tips-bottom-left">
        <div className="text">
          <h6>Rent out housing?</h6>
          <p>
            Renting out is a great way to make a little extra money. However,
            there are a{" "}
            <Link
              to={
                "https://www.finn.no/realestate/artikler/leie-ut-bolig/5-ting-du-ma-huske-pa-nar-du-skal-leie-ut-bolig"
              }
            >
              few things you should keep in mind
            </Link>{" "}
            if you are considering renting.The lease is particularly important!
            To make the process as simple as possible, FINN has drawn up a{" "}
            <Link
              to={
                "https://www.finn.no/realestate/artikler/leie-ut-bolig/5-ting-du-ma-huske-pa-nar-du-skal-leie-ut-bolig"
              }
            >
              lease
            </Link>{" "}
            in collaboration with the Consumer Council, which ensures the rights
            of both the landlord and the tenant.
          </p>
        </div>
        <div className="button-section">
          <Button
            variant="filled"
            name="New rental add"
            width={183}
            height={48}
          />
          <Button
            variant="outlined"
            name="Lease Contract"
            width={183}
            height={48}
          />
        </div>
      </div>
      <img src="/assets/images/Property/Rent/notebook.png" alt="notebook" />
    </div>
  );
};

export default TipsBottom;
