import React, {useContext} from 'react';
import {ModalContainer, ModalLogin, InputBox, UnderBar,SideBar} from './styled';
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

const Login = () => {
    const {state, slideToLeft} = useContext<ModuleObject>(IntroContext);
    const move = state?.move;
    const handleSlideRegister = () => {
        slideToLeft &&
        slideToLeft();
    }
    return(
        <>
        <ModalContainer style={{left: `${move?.login}`}}>
            <span style={{position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>X</span>
            <ModalLogin>

            <div className="inputs-container">
                <InputBox>
                <input className="username" type="text" name="username" placeholder="username"/><UnderBar/>
                </InputBox>
                <InputBox>
                <input className="password" type="password" name="userPassword" id="" placeholder="password"/><UnderBar/>
                </InputBox>
            </div>
            { 
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