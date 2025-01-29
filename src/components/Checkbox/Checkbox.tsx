import React from "react";
import { Control, useController } from "react-hook-form";
import './styles.css'

interface CheckboxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>; // control is required
  name: string;
  label?: string;
  type?: "checkbox" | "radio";
  rules?: Record<string, unknown>;
  height?: number;
  width?: number;
  options?: { value: string; label: string }[];
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { field, fieldState } = useController(props);

  return (
    <div className="checkbox-radio-container">
      {props.type === "checkbox" ? (
        <label>
          <input
            type={props.type}
            {...field}
            style={{
              width: props.width ? `${props.width}px` : "auto",
              height: props.height ? `${props.height}px` : "auto",
            }}
          />
          {props.label}
          {fieldState.error && (
            <span>{fieldState.error.message}</span>
          )}
        </label>
      ) : props.type === "radio" && props.options ? (
        <div className="radio-container">
          {props.options.map((option) => (
            <label key={option.value} style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value={option.value}
                checked={field.value === option.value}
                onChange={(e) => field.onChange(e.target.value)}
                style={{
                  width: props.width ? `${props.width}px` : "auto",
                  height: props.height ? `${props.height}px` : "auto",
                }}
              />
              {option.label}
            </label>
          ))}
          {fieldState.error && (
            <span className="radio-span">
              {fieldState.error.message}
            </span>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Checkbox;
