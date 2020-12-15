import  {useState} from 'react';
import introState from './introState';

const useIntroTransition = () =>{
    const [state, setState] = useState(introState);

    const slideToLeft = () => {
        setState({
            ...state,
            move: {
                login: '-100%',
                register: 'calc(50% - 250px)',
            }

        })

    }
    const slideToRight = () => {
        setState({
            ...state,
            move: {
                login: 'calc(50% - 250px)',
                register: '100%',
            }
        })
    }

    return {
        state,
        slideToLeft,
        slideToRight,
    }

}

export default useIntroTransition;