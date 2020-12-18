interface ValuesRegisterObject {
    username?: string;
    email?: string;
    password?: string;
    secondPassword?: string;
}

export default function validateInfo(values: ValuesRegisterObject, type: string):any {
    let errors: ValuesRegisterObject = {};
    
    //-- This are the errors returned if you are in Login
    if(type === 'login'){
        if(!values?.username?.trim()){
            errors.username = "Username require"
        }
        if(!values.password){
            errors.password = "Password is required"
        } else if (values.password.length < 6){
            errors.password = "Password needs to be 6 characters or more"
        }
        return errors;
    }

    //-- This are the errors it should send if you are in Register
    if(type === 'register'){
        if(!values?.username?.trim()){
                errors.username = "Username require"
            }
        if(!values.email){
            errors.email = "Email require"
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = "Email address is invalid"
        }
    
        if(!values.password){
            errors.password = "Password is required"
        } else if (values.password.length < 6){
            errors.password = "Password needs to be 6 characters or more"
        }
    
        if(!values.secondPassword){
            errors.secondPassword = "Password is required"
        } else if (values.secondPassword !== values.password){
            errors.secondPassword = "Password do not match"
        }
        return errors;
    }

    
}