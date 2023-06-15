import { actionTypes } from "./action";

var initialState = {
  employee: {
    employee_id: 0,
    emp_name: "",
    gender: "",
    dob: "",
    salary: "",
    EmpQualifications: [],
  },
  empQlist: [],
  qual: [],
  qualificationList: [],
  EmpQualifications: {
    q_id: "",
    q_Name: "",
    marks: "",
  },
  QualificationDetail: [],
  employeeList: [],
  extraItem: {
    q_id: "",
    q_Name: "",
    marks: "",
  },
};
const empReducer = (state = initialState, action) => {
  let obj;
  let updateState = Object.assign({}, state);
  switch (action.type) {

    case actionTypes.SET_EMPLOYEE:
      // console.log(action.data, "reducer");
      obj = {};
      obj[action.data.field] = action.data.value;
      let newObj = Object.assign({}, state.employee, obj);
      return {
        ...state,
        employee: newObj,
      };

    case actionTypes.SET_EXTRA_ITEM:
      obj = {};
      obj[action.data.field] = action.data.value;
      let qalObj = state.empQlist.find((x) => x.q_id == action.id);
      let newobj = Object.assign({}, qalObj, obj);
      let qalList = state.empQlist.map((obj) =>
        obj.q_id == newobj.q_id ? newobj : obj
      );
      

      return {
        ...state,
        empQlist: qalList,
      };

    case actionTypes.SET_QUALIFICATION_LIST:
      return {
        ...state,
        qual: action.data,
      };

    case actionTypes.DELETE_EMP_QUALIFICATION:
      let ind = state.empQlist.findIndex((x) => x.q_id == action.data);
      state.empQlist.splice(ind, 1);
      let newlist = Object.assign([], state.empQlist);
      return {
        ...state,
        empQlist: newlist,
      };

    case actionTypes.DELETE_EMP_QUAL:
      return {
        ...state,
        employee: action.data,
        empQlist: action.data.emp_Qualifications,
      };

    case actionTypes.EDIT_EMP_QUAL:
      let editObj = state.empQlist.find((x) => x.q_id === action.data);
      let editData = Object.assign({}, state.EmpQualifications, editObj);
      return {
        ...state,
        EmpQualifications: editData,
      };
    
    case actionTypes.SET_EMP_QLIST:
      console.log(action.data, "action.data");
      return {
        ...state,
        empQlist: [...state.empQlist, action.data],
      };
    
    case actionTypes.SET_EMPLOYEE_LIST:
      return {
        ...state,
        employee: action.data,
      };

    case actionTypes.DISPLAY_EMPLOYEE_LIST:
      let emplist = Object.assign([], state.employeeList, action.data);
      return {
        ...state,
        employeeList: emplist,
        
      };

    case actionTypes.UPDATE_EMP_QUAL:
      return {
        ...state,
        employee: action.data,
        empQlist: action.data.emp_Qualifications,
      };

    case actionTypes.RESET_FORM:
      return {
        ...state,
        EmpQualifications: initialState.EmpQualifications,
      };

    case actionTypes.RESET_EMPLOYEE:
      return {
        ...state,
        employee: initialState.employee,
        QualificationDetail: [],
      };

    case actionTypes.EDIT_QUALIFICATION:
      return {
        ...state,
        EmpQualifications: action.data,
      };

    case actionTypes.REMOVE_QUALIFICATION:
      state.QualificationDetail.splice(action.data, 1);
      let newlist1 = Object.assign([], state.QualificationDetail);

      return {
        ...state,
        QualificationDetail: newlist1,
      };

    case actionTypes.SET_EMP_QUALIFICATION_VALUES:
      obj = {};
      obj[action.data.field] = action.data.value;
      let EmpQualifications = Object.assign({}, state.EmpQualifications, obj);
    
      return {
        ...state,
        EmpQualifications,
      };

    case actionTypes.SAVE_QUALIFICATIONS:
      let index = state.QualificationDetail.findIndex(
        (x) => x.qualification === action.data.qualification
      );
      if (index === -1) {
        state.QualificationDetail.push(action.data);
        let qobj = Object.assign([], state.QualificationDetail);
        return {
          ...state,
          QualificationDetail: qobj,
          EmpQualifications: initialState.EmpQualifications,
        };
      } else {
        let editObj = Object.assign([], state.QualificationDetail);
        editObj[index] = action.data;
        return {
          ...state,
          QualificationDetail: editObj,
          EmpQualifications: initialState.EmpQualifications,
        };
      }

    default:
      return updateState;
  }
};

export default empReducer;
