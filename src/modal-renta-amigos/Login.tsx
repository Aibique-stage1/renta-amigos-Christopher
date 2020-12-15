import React from 'react';
import {LoginModal, ModalContainer, InputBox, UnderBar,SideBar} from './styled'

const handleSlideRegister = () => {
    console.log('hello world')
}
const Login = () => {
    return(
        <>
        <LoginModal>
            <ModalContainer>

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
            </ModalContainer>

        </LoginModal>
        </>
    )
};

export default Login;