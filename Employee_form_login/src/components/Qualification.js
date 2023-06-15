import React from "react";

function Qualification({ options, Name_field, Value_Field, handleChange }) {
  return (
    <div className="qualification-cmp">
      {/* <label>Qualification :</label> */}
      <select
        className="qualification-div"
        name={Name_field}
        value={Value_Field}
        onChange={handleChange}
        style={{fontSize:"1rem"}}
      >
        <option>Select one</option>
        {options?.map((x) => (
          <option value={x.q_id}>{x.q_Name}</option>
        ))}
      </select>
    </div>
  );
}

export default Qualification;
