import React from 'react';
import styled from 'styled-components';

import Login from './Login';
import Register from './Register';

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    position: absolute;
    background-color: #7878da;
    
`

export const Modal: React.FC = () => {
    return (
        <>
        <Background>
        <Login/>
        <Register/> 
        </Background>
        </>
    )
}

export default Modal;
