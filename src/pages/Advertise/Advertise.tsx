import React, { useState } from "react";
import SelectField from "../../components/SelectField/SelectField";
import { SelectChangeEvent } from "@mui/material";
import {
  BoatData,
  CarData,
  HomeAndCabin,
  JobData,
  MotorCycleData,
  NutritionData,
  PropertyData,
  SquareData,
  TenderData,
} from "./data/SelectOptions";
import "./styles.css";

const Advertise: React.FC = () => {
  const [select, setSelect] = useState<{ [key: string]: string }>({
    square: "",
    car: "",
    property: "",
    boat: "",
    home_cabins: "",
    motorcycle: "",
    tender: "",
    job: "",
    nutrition: "",
  });
  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    console.log("name", name);
    console.log("value", value);
    setSelect((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  console.log("select", select);
  return (
    <div className="advertise-container">
      <h2>Create a New Ad</h2>
      <SelectField
        label="The Square"
        name="square"
        options={SquareData}
        onChange={handleSelectChange}
        value={select.square}
      />
      <SelectField
        label="Car and Caravan"
        name="car"
        options={CarData}
        onChange={handleSelectChange}
        value={select.car}
      />
      <SelectField
        label="Property"
        name="property"
        options={PropertyData}
        onChange={handleSelectChange}
        value={select.property}
      />
      <SelectField
        label="Boat"
        name="boat"
        options={BoatData}
        onChange={handleSelectChange}
        value={select.boat}
      />
      <SelectField
        label="Holiday Home and Cabins"
        name="home_cabins"
        options={HomeAndCabin}
        onChange={handleSelectChange}
        value={select.home_cabins}
      />
      <SelectField
        label="MotorCycle"
        name="motorcycle"
        options={MotorCycleData}
        onChange={handleSelectChange}
        value={select.motorcycle}
      />
      <SelectField
        label="My Tender"
        name="tender"
        options={TenderData}
        onChange={handleSelectChange}
        value={select.tender}
      />
      <SelectField
        label="Jobs"
        name="job"
        options={JobData}
        onChange={handleSelectChange}
        value={select.job}
      />
      <SelectField
        label="Nutrition"
        name="nutrition"
        options={NutritionData}
        onChange={handleSelectChange}
        value={select.nutrition}
      />
    </div>
  );
};

export default Advertise;
