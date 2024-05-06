import styled from "styled-components"

export const CostInfoWrapper =styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:start;
    width:100%;

`

export const NeedsContainer =styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:start;
    width:100%;


    .Accordion{
        background-color:transparent;
        box-shadow:none;
        width:100%;

    }

    .Summary{
        width:100%;
        background-color:transparent;
        box-shadow:none;
        border-bottom: 1px solid  #B5B0A1;
        padding:0;
    }

    p{
        color: var(--text, #373737);
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%; /* 18px */
    }

    .Details{
        padding-top:20px;
        padding-left:0;
    }
    `

export const EstimatedCost =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    div{
        display:flex;
        flex-direction:column;
        align-items:start;
        justify-content:start;
        margin-right:25px;
    }

    input{
        height:36px;
        width:91px;
        border-radius: 10px;
        border: 1px solid rgba(55, 55, 55, 0.60);
    }
    label{
        color: var(--text, #373737);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 14px */
    }

`
export const Title =styled.div`
    width:100%;
    display:flex;
    align-items:start;
    justify-content:space-between;

    p{
        color: var(--text, #373737);
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%; /* 18px */
    }
        padding-bottom:15px;
        border-bottom:1px solid rgba(55, 55, 55, 0.30);
        margin-top:50px;
        margin-bottom:30px;
`

export const CheckBox =styled.div`
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
div{
    padding-bottom:15px;
}

input{
    margin-right:10px;
}
`

export const ButtonWrapper =styled.div`
    display:flex;
    align-items:start;
    justify-content:space-between;
    gap:8px;
    padding: 20px 0;

    button{
        width:115px;
        height:38px;
        border-radius: 60px;
        background: orange;
        color:white;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight:700;
        text-align:center;
        border:none;
        cursor: pointer;

        /* btn sh */
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    }

    :hover {
        background-color: #006DAB;
    }
`
export const CompareWrapper =styled.div`

    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:start;

    p{
        color: var(--blue, #006DAB);
        font-family: "Open Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`

export const ImgContainer =styled.div`
    display:flex;
    align-items:start;
    justify-content:space-between; 
    width:100%;
    gap:5px;
    padding-top:5px;
    /* padding-left:6%; */

    div{
        display:flex;
        align-items:center;
        justify-content:center;
        flex:1;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
        height:90px;
        cursor: pointer;

        img{
            width:100%;
        }
    }
`
export const MainDrawer =styled.div`

.Button{
    display:none;
    /* border:1px solid red; */
    padding:0;

@media only screen and (max-width:900px) {
    display:flex;
    justify-content:start;
}
}
`
export const DrawerIcon =styled.div`
display:flex;
justify-content:center;
align-items:center;
height:30px;
width:40px;
border: 1px solid rgba(55, 55, 55, 0.30);
border-radius:5px;
img{
    width:100%;
    height:100%;
    border-radius:5px;
}


`