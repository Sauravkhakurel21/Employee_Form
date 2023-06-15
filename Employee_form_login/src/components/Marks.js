import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SetEmpQualificationValues, setEmployee } from "./redux/action";

function Marks() {
  const EmpQualifications = useSelector((state) => state.EmpQualifications);
  const dispatch = useDispatch();
  function handleInputChangeQualificationForm(e) {
    let keyValue = {};
    keyValue["field"] = e.target.name;
    keyValue["value"] = e.target.value;
    dispatch(SetEmpQualificationValues(keyValue));

    
  }
  return (
    <div>
      {/* <label>Marks:</label> */}
      <input
        className="marks-div"
        name="marks"
        value={EmpQualifications.marks}
        type="number"
        onChange={handleInputChangeQualificationForm}
      />
    </div>
  );
}

export default Marks;
