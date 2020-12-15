import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = styled(Link)`
width: 100px;
height: 50px;
color: blue;
background-color: gray;
`
 const Home = () => {
    return (
        <>
        <main>
     <Button to="/modal">Modal</Button>
            
        </main> 
        </>
    )
}

export default Home;