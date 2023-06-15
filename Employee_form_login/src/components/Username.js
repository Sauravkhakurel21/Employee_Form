import React from "react";

function Username({
  Label_Name,
  type,
  NameOfField,
  ValueOfField,
  handleEventChange,
  checked,
}) {
  return (
    <div className="Username-cmp">
      <label style={{ fontSize: "1.25rem", marginBottom:"2rem" }}>{Label_Name}</label>
      <input
        type={type}
        name={NameOfField}
        autoComplete="off"
        value={ValueOfField}
        onChange={handleEventChange}
        checked={checked}
        style={{ fontSize: "1rem" , marginLeft:"1em"}}
      />
    </div>
  );
}

export default Username;
