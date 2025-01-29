import React from "react";
import { useController, Control } from "react-hook-form";

interface RadioProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  options: { value: string; label: string }[];
  rules?: Record<string, unknown>;
}

const Radio: React.FC<RadioProps> = ({ control, name, options, rules }) => {
  const { field } = useController({ name, control, rules });
  return (
    <div>
      {options.map((option) => (
        <label
          key={option.value}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <input
            type="radio"
            value={option.value}
            checked={field.value === option.value}
            // onChange={(e) => field.onChange(e.target.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default Radio;
