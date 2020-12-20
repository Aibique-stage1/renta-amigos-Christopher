import React, {useContext} from 'react';
import useForm from './hooks/useForm';
import validate from './validateInfo';
import {ModuleObject} from '../typed/app';
import {ModalContainer, 
    ModalLogin, InputBox, 
    UnderBar,
    SideBar, 
    FormLogin,
    ButtonLogin} from './styled';
import IntroContext from './context/IntroContext';

    //-- Component Login
const Login = () => {

    //-- Variables & hooks
    const {state, slideToLeft} = useContext<ModuleObject>(IntroContext);
    const move = state?.move;
    const {values, handleChange, handleLogin, errors, validateData} = useForm(validate);

    //-- Functions handlers
    const handleSlideRegister = () => {
        slideToLeft &&
        slideToLeft();
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if(!errors){
            return handleLogin();
        }
        if(Object.keys(errors).length === 1){
            return validateData()
        }else{
            return handleLogin();
        }
    }

    //-- Render of the Component
    return(
        <>
        <ModalContainer style={{left: `${move?.login}`}}>
            <span style={{position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>X</span>
            <ModalLogin>

            <FormLogin onSubmit={handleSubmit}>
                <InputBox>
                Username
                <input value={values.username} onChange={(e) => handleChange(e)} className="username" type="text" name="username" placeholder="username"/>
                {
                    errors?.username &&
                    <span style={{position: 'absolute'}}>{`${errors?.username}`}</span>
                }
                <UnderBar/>
                </InputBox>
                <InputBox>
                Password
                <input value={values.password} onChange={(e) => handleChange(e)} className="password" type="password" name="password" id="" placeholder="password"/>
                {
                    errors?.password && 
                    <span style={{position: 'absolute'}}>{`${errors?.password}`}</span>
                }
                <UnderBar/>
                </InputBox>
                {
                    values.username !== '' &&
                    <ButtonLogin type="submit">Login Now</ButtonLogin>
                }
            </FormLogin>
            { 
            // When the data didn't match
                <span>Forgot password?</span>
            }
            <p><SideBar/>or<SideBar style={{left: '55%'}}/></p>
            <div className="buttons-container">
                <button className="google">Login with Google</button>
                <button className="register" onClick={()=>handleSlideRegister()}>Sign Up!</button>
            </div>
            </ModalLogin>

        </ModalContainer>
        </>
    )
};

export default Login;