import {useState} from 'react';
import axios from 'axios';
import md5 from 'md5';
interface ValuesRegisterObject {
    username?: string ;
    email?: string;
    password?: string;
    secondPassword?: string;
}

//-- Global variables
const baseUrl = "http://localhost:3001/users"

const useForm = (validate:any) => {
    const [values, setValue] = useState<ValuesRegisterObject>({
        username: '',
        email: '',
        password: '',
        secondPassword: '', 
    });
    const [errors, setErrors] = useState<ValuesRegisterObject>({});

    const handleLogin = async (username: string | undefined, password: string | undefined) => {
        try{
            const data =  await axios.get(baseUrl, {params: {username: username, password: md5(password)}});
             console.log(data);
             console.log(md5(password))

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

    const handleSubmit = (e:React.FormEvent<HTMLFormElement> ):void=> {
        e.preventDefault();
        console.log('I am going to validate the form')
        setErrors(validate(values));
        console.log('I am done with validating')
        handleLogin(values?.username, values?.password)
    }
    return{
        values,
        handleChange,
        handleSubmit,
        errors,
    }
}

export default useForm;