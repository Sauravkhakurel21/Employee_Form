export const actionTypes = {
  SET_EMPLOYEE: "SET_EMPLOYEE",
  SAVE_EMPLOYEE_LIST: "SAVE_EMPLOYEE_LIST",
  RESET_FORM: "RESET_FORM",
  DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
  EDIT_EMPLOYEE_LIST: "EDIT_EMPLOYEE_LIST",
  UPDATE_EMPLOYEE_LIST: "UPDATE_EMPLOYEE_LIST",
  SET_EMP_QUALIFICATION_VALUES: "SET_EMP_QUALIFICATION_VALUES",
  SAVE_QUALIFICATIONS: "SAVE_QUALIFICATIONS",
  EDIT_EMPLOYEE: "EDIT_EMPLOYEE",
  EDIT_QUALIFICATION: "EDIT_QUALIFICATION",
  REMOVE_QUALIFICATION: "REMOVE_QUALIFICATION",
  SET_EMP_QLIST: "SET_EMP_QLIST",
  GET_QUALIFICATION_LIST: "GET_QUALIFICATION_LIST",
  SET_QUALIFICATION_LIST: "SET_QUALIFICATION_LIST",
  DISPLAY_EMPLOYEE_LIST: "DISPLAY_EMPLOYEE_LIST",
  SET_EMPLOYEE_LIST: "SET_EMPLOYEE_LIST",
  UPDATE_EMP_QUAL: "UPDATE_EMP_QUAL",
  GET_EMPLOYEE_LIST: "GET_EMPLOYEE_LIST",
  RESET_EMPLOYEE: "RESET_EMPLOYEE",
  DELETE_EMP_QUAL: "DELETE_EMP_QUAL",
  EDIT_EMP_QUAL: "EDIT_EMP_QUAL",
  DELETE_EMP_QUALIFICATION: "DELETE_EMP_QUALIFICATION",
  SET_EXTRA_ITEM: "SET_EXTRA_ITEM",
};

export const setEmployee = (data) => {
  return {
    type: actionTypes.SET_EMPLOYEE,
    data,
  };
};
export const setExtraItem = (data, id) => {
  return {
    type: actionTypes.SET_EXTRA_ITEM,
    data,
    id,
  };
};
export const getQualList = (data) => {
  return {
    type: actionTypes.GET_QUALIFICATION_LIST,
    data,
  };
};
export const getEmployeeList = (data) => {
  return {
    type: actionTypes.GET_EMPLOYEE_LIST,
    data,
  };
};
export const editEmployee = (data) => {
  return {
    type: actionTypes.EDIT_EMPLOYEE,
    data,
  };
};
export const deleteEmployee = (data) => {
  return {
    type: actionTypes.DELETE_EMPLOYEE,
    data,
  };
};
export const setEmpQlist = (data) => {
  return {
    type: actionTypes.SET_EMP_QLIST,
    data,
  };
};
export const deleteEmployeeQualification = (data) => {
  return {
    type: actionTypes.DELETE_EMP_QUALIFICATION,
    data,
  };
};

export const saveEmployeeList = (data) => {
  return {
    type: actionTypes.SAVE_EMPLOYEE_LIST,
    data,
  };
};
export const setEmployeeList = (data) => {
  return {
    type: actionTypes.SET_EMPLOYEE_LIST,
    data,
  };
};

export const resetForm = () => {
  return {
    type: actionTypes.RESET_FORM,
  };
};
export const resetEmployee = () => {
  return {
    type: actionTypes.RESET_EMPLOYEE,
  };
};
export const deleteEmpQual = (data) => {
  return {
    type: actionTypes.DELETE_EMP_QUAL,
    data,
  };
};
export const editEmpQual = (data) => {
  return {
    type: actionTypes.EDIT_EMP_QUAL,
    data,
  };
};

export const editEmployeeList = (data) => {
  return {
    type: actionTypes.EDIT_EMPLOYEE_LIST,
    data,
  };
};

export const updateEmployeeList = (data) => {
  return {
    type: actionTypes.UPDATE_EMPLOYEE_LIST,
    data,
  };
};

export const SetEmpQualificationValues = (data) => {
  return {
    type: actionTypes.SET_EMP_QUALIFICATION_VALUES,
    data,
  };
};

export const SaveQualifications = (data) => {
  return {
    type: actionTypes.SAVE_QUALIFICATIONS,
    data,
  };
};

export const editQualification = (data) => {
  return {
    type: actionTypes.EDIT_QUALIFICATION,
    data,
  };
};

export const removeQualification = (data) => {
  return {
    type: actionTypes.REMOVE_QUALIFICATION,
    data,
  };
};
