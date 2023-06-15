import React from "react";
import "./Display.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployeeList,
  editEmployeeList,
  getEmployeeList,
  editEmployee,
  deleteEmployee,
  deleteEmpQual,
} from "./redux/action";
import { useEffect } from "react";

function Display() {
  const empQlist = useSelector((state) => state.employeeList);
  // console.log(empQlist, "empQlist");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployeeList());
  }, []);

  function onDelete(empId) {
    // e.preventdefault();
    // console.log(id, "id on delete");
    // console.log(empId,"Employee listtttttttttttt")
    dispatch(deleteEmployee(empId));
  }
  function onEdit(empId) {
    // dispatch(editEmployeeList(id));
    dispatch(editEmployee(empId));
  }
  return (
    <div className="table-container">
      <div className="section1">
        <h1>Employee Details</h1>
        <table className="table-field">
          <thead>
            <tr>
              <th className="table-heading">Name</th>
              {/* <th className="table-heading">Age</th> */}
              <th className="table-heading">Gender</th>
              {/* <th className="table-heading">Address</th> */}
              <th className="table-heading">Date of Birth</th>
              <th className="table-heading">Salary</th>
              {/* <th className="table-heading">Qualifications</th> */}
              {/* <th className="table-heading">Marks</th> */}
            </tr>
          </thead>
         
          <tbody>
            {empQlist?.map((item, index) => {
              return (
                <tr
                  key={item.employee_id}
                  // onClick={(e) => handleRow(item.employee_id)}
                >
                  <td className="table-data">{item.emp_name}</td>
                  {/* <td className="table-data">{item.age}</td> */}
                  <td className="table-data">{item.gender}</td>
                  {/* <td className="table-data">{item.address}</td> */}
                  <td className="table-data">{item.dob}</td>
                  <td className="table-data">{item.salary}</td>
                  {/* <td className="table-data">
                    {item.EmpQualifications?.map((xy) => (
                      <div>
                        <span>{xy.qualification}</span>
                      </div>
                    ))}
                  </td>
                  <td className="table-data">
                    {item.EmpQualifications?.map((xy) => (
                      <div>
                        <span>{xy.mark}</span>
                      </div>
                    ))}
                  </td> */}

                  <td>
                    <button
                      className="delete-btn btn"
                      onClick={(e) => onDelete(item.employee_id)}
                    >
                      x
                    </button>
                  </td>
                  <td>
                    <button
                      className="edit-btn btn"
                      onClick={(e) => onEdit(item.employee_id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Display;
