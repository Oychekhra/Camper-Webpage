import styled from "styled-components";

export const DrawerContainer =styled.div`
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
padding:30px 20px;

p, select,div{

color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
}

div{
    margin-bottom:30px;
}

select{
    border:none;
}
`

export const CloseBtn =styled.div`
display:flex;
align-items:center;
justify-content:end;
width:100%;
`

export const MotorType =styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:space-between;
`