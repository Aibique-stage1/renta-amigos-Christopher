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

const useForm = (validate:any) => {
    const history = useHistory();
    const [errors, setErrors] = useState<ValuesRegisterObject>();
    const [values, setValue] = useState<ValuesRegisterObject>({
        username: '',
        email: '',
        password: '',
        secondPassword: '', 
    });

    const validateData = async (username: string | undefined, password: string | undefined) => {
        try{
            const response =  await axios.get(baseUrl, {params: {username: username, password: md5(password)}});
            const validation = validate(values)
            if(validation === {}){
                alert(validation)
            }else{
                alert(validation)
            }
            // response.data.length === 1
            // // ? history.push('/')
            // ? alert('push to home')
            // : alert('The password or username were incorrect, try again!')
         }catch(err){
             console.log(err.message);
         }
    }
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

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.currentTarget;
        setValue({
            ...values,
            [`${name}`]: value,
        })
    }

    const handleLogin =  (e:React.FormEvent<HTMLFormElement> ):void=> {
        e.preventDefault();
        setErrors(validate(values));
        // validateData(values?.username, values?.password)
    }
    const handleRegister = (e:React.FormEvent<HTMLFormElement> ):void=> {
        e.preventDefault();
        setErrors(validate(values));
        postData(values?.email, values?.password, values);

    }
    return{
        values,
        handleChange,
        handleLogin,
        handleRegister,
        errors,
    }
}

export default useForm;