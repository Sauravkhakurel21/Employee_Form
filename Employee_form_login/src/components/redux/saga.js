import { actionTypes } from "./action";
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getQualificationList() {
  console.log("action");
  try {
    const res = yield axios.get("https://localhost:7061/api/Employee/GetQual");

    const data = res.data;
    yield put({ type: actionTypes.SET_QUALIFICATION_LIST, data });
  } catch (ex) {
    console.log(ex);
  }
}
function* setEmployeeList(action) {
  let eid = action.data.employee_id;

  try {
    if (eid === 0) {
      yield axios
        .post("https://localhost:7061/api/Employee/AddEmployee", action.data)

        .catch((er) => console.log(er, "err"));
      yield* getEmployeeList();
    }
    if (action.data.employee_id > 0) {
      yield axios
        .put("https://localhost:7061/api/Employee/UpdateEmployee", action.data)

        .catch((er) => console.log(er, "err"));
      yield* getEmployeeList();
    }
  } catch (er) {
    console.log(er);
  }
}
function* getEmployeeList() {
  try {
    const res = yield axios.get("https://localhost:7061/api/Employee");
    const data = res.data;
    yield put({ type: actionTypes.DISPLAY_EMPLOYEE_LIST, data });
  } catch (ex) {
    console.log(ex);
  }
}

function* editEmployee(action) {
  let id = action.data;
  try {
    const res = yield axios.get(
      `https://localhost:7061/api/Employee/GetEmployee?id=${id}`
    );
    const data = res.data;
    yield put({ type: actionTypes.UPDATE_EMP_QUAL, data });
  } catch (ex) {
    console.log(ex);
  }
}
function* deleteEmployee(action) {
  let id = action.data;

  try {
    const res = axios.delete(
      `https://localhost:7061/api/Employee/DeleteEmp?id=${id}`
    );

    yield* getEmployeeList();
  } catch (ex) {
    console.log(ex);
  }
}

function* employeeSaga() {
  yield takeEvery(actionTypes.GET_QUALIFICATION_LIST, getQualificationList);
  yield takeEvery(actionTypes.SET_EMPLOYEE_LIST, setEmployeeList);

  yield takeLatest(actionTypes.GET_EMPLOYEE_LIST, getEmployeeList);
  yield takeEvery(actionTypes.EDIT_EMPLOYEE, editEmployee);
  yield takeEvery(actionTypes.DELETE_EMPLOYEE, deleteEmployee);
}
export default employeeSaga;
