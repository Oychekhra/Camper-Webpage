import styled from "styled-components";

export const NavbarContainer =styled.div`
top:0;
height:90px;
padding:22px 70px;
display:flex;
align-items:center;
justify-content:space-between;
background-color:white;
position:fixed;
width:100%;

select,p{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
}

:hover{
    color: var(--blue, #006DAB);
    font-weight:700;
    font-size:18px;
    
}
img{
    cursor: pointer;
}
.Menu1{
    display:none;
}
.Menu2{
    display:none;
}

@media only screen and  (max-width: 1000px){

    padding:22px 80px;
    .Menu1{
        display:flex;
    }
}

@media only screen and  (max-width: 700px){
    padding:25px 30px;
    .Menu1{
        display:none;
    }
    .Menu2{
        display:flex;
    }
    .Language{
        display:none;
    }
    .User{
        display:none;
    }
}

`
export const LogoWrapper =styled.div`
color: var(--blue, #006DAB);
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;

@media only screen and  (max-width: 700px){
    font-size:30px;
}
`

export const NavbarWrapper =styled.div`
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;

select{
    border:none;
}
`

export const NavMiddleWrapper  =styled.div`
display:flex;
align-items:center;
justify-content:space-between;
gap:40px;

:hover{
    text-decoration:underline;
}


select{
    border:none;
}

@media only screen and (max-width:1000px){
display:none;
}
`