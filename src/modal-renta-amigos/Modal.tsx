import React from 'react';
import {Background} from './styled/index'
import IntroContext from './context/IntroContext';
import useIntroTransition from './context/useIntroTransition'

import Login from './Login';
import Register from './Register';

//-- Modal Component
export const Modal: React.FC = () => {

    //-- Variables & hooks
    const initialState = useIntroTransition();
    
    //-- Render of the component
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
