import * as Yup from "yup"

export const yupValidation = Yup.object({
    // name: Yup.string().min(2).max(6).required("please enter your name"),
   name:Yup.string().max(6,'please name too short')
// .required('please enter your name')
.matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
// .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
// .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
.max(9, 'name too short'),
// .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character'),
    // name: Yup.string().matches(/^(?=.*[A-Z])/, 'first capital letter must'),
    email: Yup.string().email(),
    phone: Yup.string().min(6).max(10).required("please enter your mobile number"),
    username: Yup.string().min(2).max(8).required("please enter your user name"),
    password: Yup.string().min(5).max(8).required("please enter your password"),
    confirmpassword: Yup.string().min(5).max(8).required().oneOf([Yup.ref('password'), null], 'password must match')

})