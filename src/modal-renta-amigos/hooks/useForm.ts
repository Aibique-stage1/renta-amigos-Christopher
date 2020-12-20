import {useState, useEffect} from 'react';
import axios from 'axios';
import md5 from 'md5';
import {useHistory} from 'react-router-dom';

//-- Types
interface ValuesRegisterObject {
    username?: string ;
    email?: string;
    password?: string;
    secondPassword?: string;
}

//-- Global variables
const baseUrl = "http://localhost:3001/users"

//-- useForm
const useForm = (validate:any) => {
    //-- Variables
    const history = useHistory();
    const [errors, setErrors] = useState<ValuesRegisterObject>();
    const [values, setValue] = useState<ValuesRegisterObject>({
        username: '',
        email: '',
        password: '',
        secondPassword: '', 
    });

    //-- Function to validate the data sent to the API
    const validateData = async () => {
        try{
            const response =  await axios.get(baseUrl, {params: {username: `${values.username}`, password: md5(`${values.password}`)}});
            response.data.length === 1
            // ? history.push('/')
            ? alert('push to home')
            : alert('The password or username were incorrect, try again!')
         }catch(err){
             console.log(err.message);
         }
    }
    //-- Function to post the data to the API
    const postData = async (email: string | undefined, password: string | undefined, values: ValuesRegisterObject | undefined) => {
        try{
            const response =  await axios.get(baseUrl, {params: {email: email, password: md5(password)}});
            // console.log(response.data)
            if(response.data.length === 1){
                alert(`Sorry the email: ${email} was already used`)
            }else{
                await axios.post(baseUrl,values);
            }
         }catch(err){
             console.log(err.message);
         }
    }

    //-- Function to handle the constant input Change
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.currentTarget;
        setValue({
            ...values,
            [`${name}`]: value,
        })
    }

    //-- Function to handle the errors in the inputs of Login
    const handleLogin =  ():void=> {
        setErrors(validate(values, 'login'));
    }
    //-- Function to handle the errors in the inputs of Login
    const handleRegister = (e:React.FormEvent<HTMLFormElement> ):void=> {
        e.preventDefault();
        setErrors(validate(values, 'register'));
        postData(values?.email, values?.password, values);

    }
    //-- Returned objects from the Hook
    return{
        values,
        handleChange,
        handleLogin,
        handleRegister,
        errors,
        validateData,
    }
}

export default useForm;