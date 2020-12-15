import styled from 'styled-components';

export const Modal = styled.div`
width: 500px;
height: 600px;
background-color: whitesmoke;
position: absolute;
border-radius:5px;
boder:none;

`
export const ModalContainer = styled(Modal)`
width: 80%;
height: 70%;
/* background-color: silver; */
`


export const LoginModal = styled(Modal)`
left: calc(50% - 250px);
top: calc(50% - 300px);
display: flex;
justify-content: center;
align-items: center;
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
        cursor:pointer;
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
export const RegisterModal = styled(Modal)`
left: 100%;
display: flex;
justify-content: center;
align-items: center;
`
