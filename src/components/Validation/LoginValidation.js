export const LoginValidation = (values) => {
    console.log("===", values)
    let error = {}
    if (!values.email) {
        error.email = "please enter email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        error.email = "Enter valid email"
    } 
    if (!values.password) {
        error.password = "please enter password"
    }else if(values.password.length<3 ){
        error.password = "Password must be min 3 characters"
    }else if(values.password.length>10){
        error.password = "Password max should be 10 characters"
    }
    return error
    // if(!values.email){
    //     errors.email="email is required"
    // }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address';
    // }
}