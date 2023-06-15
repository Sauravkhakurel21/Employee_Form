import * as Yup from "yup"

export const signupSchema = Yup.object({
    empName : Yup.string().min(2).max(25).required("Please enter your Name"),
    age: Yup.number().min(10).max(100).required("Enter your valid age"),
    gender:Yup.string().required("Choose any one"),
    address:Yup.string().min(3).max(30).required("Enter your valid address"),
    dob:Yup.string().required("Choose valid date of birth"),
    salary:Yup.number().required("Enter valid salary"),
    qualification:Yup.string().required("Choose qualification"),
    mark:Yup.number().min(0).max(4).required("Enter you valid marks in GPA")
})