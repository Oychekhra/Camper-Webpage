import styled from "styled-components";


export const LogoWrapper =styled.div`

`

export const LogoName =styled.h1`
    color:${(props) => (props.$Login ?"#006DAB" : "white")};
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media only screen and  (max-width: 700px){
        font-size:30px;
}
`

export const NavbarContainer =styled.div`
top:0;
height:90px;
padding:22px 5%;
display:flex;
align-items:center;
justify-content:space-between;
background-color:white;
position:fixed;
width:100%;

img{
    cursor: pointer;
}


`

export const Icon =styled.img`

@media only  screen and (max-width: 700px){
    display:none;
}

`
export const MenuIconImg =styled.div`
display:none;

@media only  screen and (max-width: 900px){
    display:${(props) => (props.$Left ?"flex" : "none")};
    
}

@media only  screen and (max-width: 700px){
    display:${(props) => (props.$Left ?"none" : "flex")};
}

`


export const SideNavbarWrapper =styled.div`
display:flex;
align-items:center;
justify-content:space-between;
gap:10%;

select{
    border:none;
}

@media only  screen and (max-width: 900px){
    select{
        display:none;
    }
}

@media only  screen and (max-width: 700px){
    select{
        display:none;
    }
}
`
export const MiddleNavbarWrapper =styled.div`
display:flex;
align-items:center;
justify-content:space-between;
 
div{
display:flex;
align-items:center;
justify-content:space-between;
img{
    margin-left:5px;
}
}

p{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-left:40px;
cursor: pointer;
}

:hover {
    color: var(--blue, #006DAB);
    font-weight:700;
    font-size:18px;
    
}

@media only  screen and (max-width: 900px){
    display:none;
}

`