import React,{useContext} from 'react';
import useForm from './hooks/useForm';
import validate from './validateInfo';
import {
    ModalContainer, 
    RegisterModal, 
    InputBox, 
    SideBar, 
    UnderBar, 
    FormRegister,
    ButtonRegister} from './styled';
import IntroContext from './context/IntroContext';

interface MoveObject {
    login?: string | undefined;
    register?: string | undefined;
}
interface StateObject {
    move?: MoveObject; 
}
interface ModuleObject {
    state?: StateObject;
    slideToLeft?: ()=> void;
    slideToRight?: () => void;
}

// style={{left: '100%'}}
const Register = () => {  
    const {state, slideToRight} = useContext<ModuleObject>(IntroContext);
    const move = state?.move;
    const {values, handleChange, handleSubmit, errors} = useForm(validate);

    const handleSlideLogin = () => {
        slideToRight &&
        slideToRight();
    }
    return (
        <>
        <ModalContainer style={{ left: `${move?.register}`}}>
        <span style={{position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>X</span>
        <RegisterModal>
        <FormRegister onSubmit={handleSubmit}>
                <InputBox>
                Email
                <input  value={values.email} onChange={(e) => handleChange(e)} className="username" type="text" name="email" placeholder="email"/>
                {
                    errors?.email && 
                    <span style={{position: 'absolute'}}>{`${errors?.email}`}</span>
                }
                <UnderBar/>
                </InputBox>
                <InputBox>
                Password
                <input  value={values.password} onChange={(e) => handleChange(e)} className="password" type="password" name="password" id="" placeholder="password"/>
                {
                    errors?.password && 
                    <span style={{position: 'absolute'}}>{`${errors.password}`}</span>
                }
                <UnderBar/>
                </InputBox>
                <InputBox>
                Repeat Password
                <input value={values.secondPassword} onChange={(e) => handleChange(e)} className="password2" type="password" name="secondPassword" id="" placeholder="password"/>
                {
                    errors?.secondPassword &&
                    <span style={{position: 'absolute'}}>{`${errors?.secondPassword}`}</span>
                }
                <UnderBar/>
                </InputBox>
                {
                    values.email !== '' &&
                    <ButtonRegister type="submit">Register Now! </ButtonRegister>
                }
            </FormRegister>
            { values.password !== '' &&
                <span>Keep me log in </span>
            }
            <p><SideBar/>or<SideBar style={{left: '55%'}}/></p>
            <div className="buttons-container">
                <button className="google">Register with Google</button>
                <button className="register" onClick={()=>handleSlideLogin()}>Sign In!</button>
            </div>
        </RegisterModal>
        </ModalContainer>
        </>
    )
};

export default Register;