import React from 'react';
import styled from 'styled-components';
import IntroContext from './context/IntroContext';
import useIntroTransition from './context/useIntroTransition'

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
    const initialState = useIntroTransition();
    return (
        <IntroContext.Provider value={initialState}>
        <Background>
        <Login/>
        <Register/> 
        </Background>
        </IntroContext.Provider>
    )
}

export default Modal;
