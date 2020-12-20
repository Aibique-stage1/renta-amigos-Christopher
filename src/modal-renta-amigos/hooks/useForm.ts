import {useState} from 'react';
import axios from 'axios';
import md5 from 'md5';
import {useHistory} from 'react-router-dom';
import { ValuesRegisterObject } from '../../typed/app';

//-- Global variables
const baseUrl = "http://localhost:3001/users"

//-- UseForm Structure
const useForm = (validate:any) => {
    
    //-- Variables & hooks
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
            ? history.push('/')
            : alert('The password or username were incorrect, try again!')
         }catch(err){
             console.log(err.message);
         }
    }

    //-- Function to post the data to the API
    const postData = async () => {
        try{
            const response =  await axios.get(baseUrl, {params: {email: `${values?.email}`}});

            /* THe problem is that I need to make double click to the button to sent or received the alert message
            Its not the sing up button, is not the post function
            Looks like the problem comes from the whole function itself, maybe a second or some slide difference between 
            validateData and post Data that i havent noticed */
            response.data.length === 1
            ? alert(`Sorry the email: ${values.email} was already used`)
            : await axios.post(baseUrl, values)
            // : alert( 'Here i must do push')

         }catch(err){
             console.log(err.message);
         }
    }

    //-- Function to handle the constant input changes
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

    //-- Function to handle the errors in the inputs of Register
    const handleRegister = ( ):void=> {
        setErrors(validate(values, 'register'));
    }

    //-- Returned objects from the Hook
    return{
        values,
        handleChange,
        handleLogin,
        handleRegister,
        errors,
        validateData,
        postData,
    }
}

export default useForm;