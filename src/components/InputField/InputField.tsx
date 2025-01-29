import { Control, useController } from "react-hook-form";
import React from "react";
import "./styles.css";

interface InputFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>; //control is required
  name: string; // name is required not optional
  label?: string;
  type?: string;
  placeholder?: string;
  rules?: Record<string, unknown>;
  defaultValue?: string;
  hieght?: number;
  width?: number;
  icon?: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { field, fieldState } = useController(props);

  return (
    <div className="input-field-container">
      <label>
        {props.label} {props.icon && <img src={props.icon} alt="hide icon" />}
      </label>
      <input
        {...field}
        placeholder={props.placeholder}
        type={props.type}
        style={{
          width: props.width ? `${props.width}px` : "auto",
          height: props.hieght ? `${props.hieght}px` : "auto",
        }}
      />
      {fieldState.error && <span>{fieldState.error.message}</span>}
    </div>
  );
};

export default InputField;
