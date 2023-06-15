import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FormStyle.css";
import {
  resetForm,
  resetEmployee,
  setEmployee,
  SetEmpQualificationValues,
  getQualList,
  getEmployeeList,
  setEmployeeList,
  setEmpQlist,
  editEmpQual,
  deleteEmployeeQualification,
  setExtraItem,
} from "./redux/action";
import Username from "./Username";
import Qualification from "./Qualification";

const NewForm = () => {
  const [updateState, setUpdateState] = useState(-1);
  const [buttonName, setButtonName] = useState("Edit");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQualList());
  }, []);

  useEffect(() => {
    dispatch(getEmployeeList());
  }, []);

  const qualList = useSelector((state) => state.qual);
  const employeedetails = useSelector((state) => state.employee);
  const EmpQualifications = useSelector((state) => state.EmpQualifications);
  const QualificationDetail = useSelector((state) => state.QualificationDetail);
  const empQlist = useSelector((state) => state.empQlist);
  const qual = useSelector((state) => state.qual);

  function handleEventChange(e) {
    let keyValue = {};
    keyValue["field"] = e.target.name;
    keyValue["value"] = e.target.value;
    dispatch(setEmployee(keyValue));
  }

  function handleInputForm(e, item) {
    let keyValue = {};
    keyValue["field"] = e.target.name;
    keyValue["value"] = e.target.value;
    dispatch(setExtraItem(keyValue, item.q_id));
  }
  function Edit({ item }) {
    return (
      <>
        <tr>
          <td className="table-data">
            <Qualification
              options={qualList}
              Value_Field={item?.q_id}
              handleChange={(e) => {
                handleInputForm(e, item);
              }}
              Name_field={"q_id"}
            ></Qualification>
          </td>
          <td className="table-data">
            <Username
              // Label_Name={"Marks"}
              type={"number"}
              NameOfField={"marks"}
              ValueOfField={item?.marks}
              handleEventChange={(e) => handleInputForm(e, item)}
            ></Username>
          </td>
          <td>
            <button
              className="add-btn btn"
              onClick={(e) => {
                handleonEdit(item.q_id, e);
                handleReset(e);
              }}
            >
              {buttonName}
            </button>
            &nbsp;
            <button
              className="add-btn btn"
              onClick={(e) => onDelete(item.q_id, e)}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
  function handleSubmitForm(e) {
    employeedetails.emp_Qualifications = empQlist;
    e.preventDefault();
    dispatch(setEmployeeList(employeedetails));
  }
  const onEdit = (id, e) => {
    e.preventDefault();
    setUpdateState(id);
    setButtonName("Update");
  };
  const handleonEdit = (id, e) => {
    e.preventDefault();
    setButtonName("Update");
    dispatch(editEmpQual(id));
    setUpdateState(-1);
  };

  const onDelete = (id, e) => {
    e.preventDefault();
    dispatch(deleteEmployeeQualification(id));
  };

  function handleReset(e) {
    e.preventDefault();
    dispatch(resetForm());
  }

  function handleResetEmployee(e) {
    e.preventDefault();
    dispatch(resetEmployee());
  }
  const handleInputChangeQualificationForm = (e) => {
    let keyValue = {};
    keyValue["field"] = e.target.name;
    keyValue["value"] = e.target.value;
    dispatch(SetEmpQualificationValues(keyValue));
    dispatch(setEmployee(keyValue));
  };

  const addQualification = (e) => {
    e.preventDefault();

    dispatch(setEmpQlist(EmpQualifications));
  };

  return (
    <form className="form-container">
      <h1 style={{ fontSize: "2rem" }}>Employee Form</h1>
      <div className="inputField">
        <Username
          Label_Name="Name"
          type={"text"}
          NameOfField={"emp_name"}
          ValueOfField={employeedetails?.emp_name}
          handleEventChange={handleEventChange}
        ></Username>
      </div>
      <div className="inputField">
        <Username
          Label_Name={"Date of Birth"}
          type={"date"}
          NameOfField={"dob"}
          ValueOfField={employeedetails?.dob}
          handleEventChange={handleEventChange}
        ></Username>
      </div>
      <div className="inputField">
        <p style={{ margin: 0, fontSize: "1.5rem" }}>Gender</p>
        <div style={{ display: "flex" }}>
          <Username
            Label_Name={"Male"}
            type={"radio"}
            NameOfField={"gender"}
            ValueOfField={"Male"}
            handleEventChange={handleInputChangeQualificationForm}
            checked={employeedetails.gender === "Male"}
          ></Username>
          <Username
            Label_Name={"Female"}
            type={"radio"}
            NameOfField={"gender"}
            ValueOfField={"Female"}
            handleEventChange={handleInputChangeQualificationForm}
            checked={employeedetails.gender === "Female"}
          ></Username>
          <Username
            Label_Name={"Others"}
            type={"radio"}
            NameOfField={"gender"}
            ValueOfField={"Others"}
            handleEventChange={handleInputChangeQualificationForm}
            checked={employeedetails.gender === "Others"}
          ></Username>
        </div>
      </div>
      <div className="inputField">
        <Username
          Label_Name={"Salary"}
          type={"number"}
          NameOfField={"salary"}
          ValueOfField={employeedetails?.salary}
          handleEventChange={handleEventChange}
        ></Username>
      </div>
      <div className="inputField">
        <div>
          <table className="form-table">
            <thead>
              <tr>
                {/* <th className="table-heading">Q_id</th> */}
                <th className="table-heading">Qualification</th>
                <th className="table-heading">Marks</th>
                <th className="table-heading">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <Qualification
                    options={qualList}
                    Name_field={"q_id"}
                    Value_Field={EmpQualifications.q_id}
                    handleChange={handleInputChangeQualificationForm}
                  ></Qualification>
                </th>
                <th>
                  {" "}
                  <Username
                    // Label_Name={"Marks"}
                    type={"number"}
                    NameOfField={"marks"}
                    ValueOfField={EmpQualifications?.marks}
                    handleEventChange={handleInputChangeQualificationForm}
                  ></Username>
                </th>
                <th>
                  <button
                    type="submit"
                    className="add-btn btn"
                    onClick={(e) => {
                      addQualification(e);
                      handleReset(e);
                    }}
                  >
                    Add
                  </button>
                </th>
              </tr>
            </tbody>
            <tbody>
              {empQlist.map((item) => {
                let qname = qual.findIndex((x) => x.q_id == item.q_id);

                return updateState === item.q_id ? (
                  <Edit item={item} />
                ) : (
                  <tr key={item.q_id}>
                    {/* <td>{item.q_id}</td> */}
                    <td className="table-data">{qual[qname].q_Name}</td>
                    <td className="table-data">{item.marks}</td>
                    <td>
                      <button
                        className="add-btn btn"
                        onClick={(e) => {
                          onEdit(item.q_id, e);

                          handleReset(e);
                        }}
                      >
                        Edit
                      </button>
                      &nbsp;
                      <button
                        className="add-btn btn"
                        onClick={(e) => onDelete(item.q_id, e)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="inputField">
        <button
          className="btn"
          onClick={(e) => {
            handleSubmitForm(e);
            handleResetEmployee(e);
          }}
        >
          Add data
        </button>
      </div>
    </form>
  );
};

export default NewForm;
