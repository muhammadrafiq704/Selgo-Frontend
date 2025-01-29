import React from "react";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField/InputField";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Checkbox from "../../../components/Checkbox/Checkbox";

const DetailsSection: React.FC = () => {
  const { control } = useForm({
    mode: "onChange",
    defaultValues: { 
      email: "",
      password: "",
    },
  });
  return (
    <>
      <div className="details-container">
        <h2>Welcome to Shopping community</h2>
        <div className="field-container">
          <form action="" className="form">
            <InputField
              control={control}
              name="email"
              label="User name or email address"
              type="email"
              placeholder="Enter your email"
              defaultValue=""
              rules={{ required: "username or email is required" }}
              hieght={50}
            />
            <InputField
              control={control}
              name="username"
              label="User name"
              type="text"
              placeholder="Enter username"
              defaultValue=""
              rules={{ required: "username is required" }}
              hieght={50}
            />
            <InputField
              control={control}
              name="password"
              label="Your password"
              type="password"
              placeholder="Enter your password"
              defaultValue=""
              rules={{ required: "password does not match" }}
              hieght={50}
              icon="/assets/icons/hidden/hide.png"
            />
            <Checkbox
              control={control}
              name="sdf"
              type="checkbox"
              label="I want to receive emails about the product, feature updates, events, and marketing promotions."
              width={24}
              height={24}
            />
            <p className="terms-and-condition">
              By creating an account
              <NavLink to={""}> Terms of Use</NavLink>
              and
              <NavLink to={""}> Privacy Policy</NavLink>
            </p>
            <div className="bottom-button">
              <Button width={130} height={50} name="Sign Up" variant="filled" />
              <p>
                Already have an account? <NavLink to={"/signin"}>Login</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
