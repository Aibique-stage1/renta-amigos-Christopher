import React,{useContext} from 'react';
import {ModalContainer, RegisterModal, InputBox, SideBar, UnderBar} from './styled';
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

    const handleSlideLogin = () => {
        slideToRight &&
        slideToRight();
    }
    return (
        <>
        <ModalContainer style={{ left: `${move?.register}`}}>
        <span style={{position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>X</span>
        <RegisterModal>
        <div className="inputs-container">
                <InputBox>
                <input className="username" type="text" name="username" placeholder="username"/><UnderBar/>
                </InputBox>
                <InputBox>
                <input className="password" type="password" name="userPassword" id="" placeholder="password"/><UnderBar/>
                </InputBox>
                <InputBox>
                <input className="password2" type="password" name="userPassword" id="" placeholder="password"/><UnderBar/>
                </InputBox>
            </div>
            { 
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