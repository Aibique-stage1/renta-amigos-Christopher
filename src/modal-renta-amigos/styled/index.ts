import styled from 'styled-components';

export const ModalContainer = styled.div`  
width: 500px;
height: 600px;
transition-property: left;
transition-duration: 1s;
transition-timing-function: linear;
background-color: whitesmoke;
position: absolute;
border-radius:5px;
border:none;
top: calc(50% - 300px);
display: flex;
justify-content: center;
align-items: center;

`
export const ModalLogin = styled.div`
width: 80%;
height: 70%;
/* background-color: silver; */
.inputs-container{
    width: 100%;
}
.username,
.password{
    width: 100%;
    height:50px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color:palegoldenrod;
    border:none;
}
span{
    font-size: 10px;
    text-decoration: underline;
    color: blue;
}
p{
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    font-size: 14px;
    position: relative;
    p:after{
        content: "";
        width:40%;
        height: 2px;

    }
}
.buttons-container{
    width: 100%;
    display: flex;
    flex-direction:column;
    .google,
    .register{
        height: 60px;
        border-radius:5px;
        border: none;
        margin-bottom: 10px;
        text-align: center;
        font-size:18px;
        font-weight: bold;
        background-color: palegoldenrod;
        cursor:pointer
    }
    
}
`

export const InputBox = styled.div`
    position: relative;
    width:100%;
    height: max-content;

`
export const UnderBar = styled.span`
    height: 4px;
    background-color: blue;
    position: absolute;
    left:10px;
    right:10px;
    border: 1px solid black;
    z-index: 10;
    bottom: 15px;
    border-radius: 10px;
`
export const SideBar = styled(UnderBar)`
height: 2px;
background-color: gray;
border: none;
left:0;
width:45%;
z-index:0;
bottom:5px;
`
export const RegisterModal = styled.div`
width: 80%;
height: 70%;
/* background-color: silver; */
.inputs-container{
    width: 100%;
}
.username,
.password,
.password2{
    width: 100%;
    height:50px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color:palegoldenrod;
    border:none;
}
span{
    font-size: 10px;
    text-decoration: underline;
    color: blue;
}
p{
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    font-size: 14px;
    position: relative;
    p:after{
        content: "";
        width:40%;
        height: 2px;

    }
}
.buttons-container{
    width: 100%;
    display: flex;
    flex-direction:column;
    .google,
    .register{
        height: 60px;
        border-radius:5px;
        border: none;
        margin-bottom: 10px;
        text-align: center;
        font-size:18px;
        font-weight: bold;
        background-color: palegoldenrod;
        cursor:pointer
    }
    
}
`
