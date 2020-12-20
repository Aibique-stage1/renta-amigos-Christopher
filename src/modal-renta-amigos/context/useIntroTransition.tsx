import  {useState} from 'react';
import introState from './introState';

//-- Hook builds Transition Context with reducers
const useIntroTransition = () =>{
    //-- Variables & hooks
    const [state, setState] = useState(introState);

    //-- Function with logic to slide to Left
    const slideToLeft = () => {
        setState({
            ...state,
            move: {
                login: '-100%',
                register: 'calc(50% - 250px)',
            }

        })

    }

    //-- Function with logic to slide to Right
    const slideToRight = () => {
        setState({
            ...state,
            move: {
                login: 'calc(50% - 250px)',
                register: '100%',
            }
        })
    }

    //-- Object returned by the hook
    return {
        state,
        slideToLeft,
        slideToRight,
    }

}

export default useIntroTransition;