import Button from "../../../components/Button";
import "./sellBottom.css"

const SellBottom = () => {
  return (
    <div className="sell-bottom">
      <div className="sell-bottom-left">
        <div className="sell-bottom-text">
          <h6>Are you going to sell a home?</h6>
          <p>
            Selling a home can be both time-consuming, exciting and perhaps a
            little scary? We have put together a number of tips and tricks that
            can be nice to think about when you are selling a property.
          </p>
        </div>
        <Button
          variant="filled"
          name="Check out tips and tricks here"
          width={315}
          height={52}
        />
      </div>
      <img src="/assets/images/Property/Rent/notebook.png" alt="notebook" />
    </div>
  );
};

export default SellBottom;
