import React from "react";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField/InputField";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

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
        <div className="btn-container">
          <h2>Sign In</h2>
          <Button
            variant="icon-btn"
            name="Continue with Google"
            height={55}
            //   width={300}
            icon="/assets/images/SignIn/google.png"
          />
          <Button
            variant="icon-btn"
            name="Continue with Google"
            height={55}
            //   width={300}
            icon="/assets/images/SignIn/twitter.png"
          />
        </div>
        <div className="divider">
          <hr /> OR
          <hr />
        </div>
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
              name="password"
              label="Your password"
              type="password"
              placeholder="Enter your password"
              defaultValue=""
              rules={{ required: "password does not match" }}
              hieght={50}
              icon="/assets/icons/hidden/hide.png"
            />
            <NavLink to={""}> Forgot your password?</NavLink>
            <div className="bottom-btn">
              <Button width={130} height={50} name="Sign In" variant="filled" />
              <p>
                Don't have an account? <NavLink to={"/signup"}>Sign Up</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
