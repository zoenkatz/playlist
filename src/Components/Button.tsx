import React from "react";

const Button = ({
  value,
  onClick,
  isDisabled,
  className,
}: {
  value: string;
  onClick: () => void;
  isDisabled?: boolean;
  className?: string;
}) => {
  return (
    <button className={`app-button ${className}`} onClick={onClick} disabled={isDisabled}>
      {value}
    </button>
  );
};

export default Button;
