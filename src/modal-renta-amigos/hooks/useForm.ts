import {useState} from 'react';
interface ValuesRegisterObject {
    username?:'';
    email?: string;
    password?: string;
    secondPassword?: string;
}
const useForm = (validate:any) => {
    const [values, setValue] = useState<ValuesRegisterObject>({
        username: '',
        email: '',
        password: '',
        secondPassword: '', 
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.currentTarget;
        setValue({
            ...values,
            [`${name}`]: value,
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement> ):void=> {
        e.preventDefault();
        setErrors(validate(values))
    }
    return{
        values,
        handleChange,
        handleSubmit,
        errors,
    }
}

export default useForm;