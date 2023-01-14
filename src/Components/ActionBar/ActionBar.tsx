import React from "react";
import Button from "../Button";

const ActionBar = ({
  onSubmit,
  placeholder,
  value,
  onChange,
  onKeyDown,
}: {
  onSubmit: () => void;
  placeholder: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown: (e: any) => void;
}) => {
  return (
    <div className="list-controls">
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        data-testid="video-input"
      />
      <Button value="Add" onClick={onSubmit} className="list-controls-button"/>
    </div>
  );
};

export default ActionBar;
