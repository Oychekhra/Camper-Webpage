import styled from "styled-components";

export const MainContainer =styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:20px;
`

export const AuthContainer =styled.div`
width:500px;
display:flex;
flex-direction:column;
align-items:left;
justify-content:center;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding:25px 30px;

@media only screen and (max-width:700px){
  width:450px;  
}

`
export const TitleContainer =styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
gap:30px;
margin-bottom:20px;

h1{
color: var(--text, #373737);
font-family: "Open Sans";
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const UserInfo =styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
`
export const MiniUserInfo =styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
input{
    width:100%;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.10);
    padding:15px 20px;
    border:none;
}
label{
    color: rgba(55, 55, 55, 0.80);
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding:10px;
}
`

export const MemoryContainer =styled.div`
display:flex;
justify-content:space-between;
align-items:center;
gap:30px;
padding:15px 10px;

div{
color: #373737;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
}
`
export const MemoryContainerRight =styled.div`
display:flex;
justify-content:left;
align-items:center;
gap:5px;

input{
border-radius: 5px;
background-color: rgba(55, 55, 55, 0.15);
border:none;
cursor: pointer;
}

label{
color: #373737;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const OrContainer =styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:10px;
padding-top:20px;
padding-bottom:10px;

hr{
    width:35%;
    background: rgba(55, 55, 55, 0.15);
}

div{
color: #6D6D6D;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`
export const LogoContainer =styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:10px;
padding:20px;
`

export const LogoWrapper =styled.div`
width:46px;
height:46px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
cursor: pointer;
`
export const Button =styled.div`
width:100%;
button{
    width:100%;
    padding:14px;
background-color:white;
border-radius: 10px;
border: 2px solid var(--blue, #006DAB);
text-align:center;
color: var(--blue, #006DAB);
font-family: "Open Sans";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
}
:hover{
    color:white;
    background: var(--blue, #006DAB);
}
`