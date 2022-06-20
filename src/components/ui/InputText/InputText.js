import React from "react";

export default function InputText(props) {
  const handleInputChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="mb-3 row">
      <label className="col-sm-4 col-form-label">
        {props.label}
      </label>

      <div className="col-sm-8">
        <input
          type={props.type}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
