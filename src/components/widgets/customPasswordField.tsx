import React, { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CustomInputProps {
  label: string;
  type: string;
  className: string;
}

const CustomInput = ({
  label,
  type,
  className,
  ...props
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="custom-input">
      <div className="input-container">
        <input
          className={className}
          type={showPassword ? "text" : type}
          {...props}
          placeholder="Password..."
        />
        {type === "password" && (
          <div className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
