import styled from "styled-components";

export const CampingInfoContainer =styled.div`
 display:grid;
    grid-template-columns: repeat(4, 1fr);
    width:100%;
    gap:20px;
    padding:4% 15%;

    :hover{
        transform: scale(1.03);
        opacity: 0.9;
    };

    ;


    @media only  screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);  
    }

    @media only  screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);  
    }
    @media only  screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);  
    }

`

export const CampingPlaceWrapper =styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
margin-top:90px;
padding:0 5%;


`
export const ImageContainer =styled.div`
`
export const CampingNameWrapper =styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;

h1{
    color: #000;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
`
export const LocationName =styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:left;
gap:30px;
padding:10px 0;
border-bottom:1px solid rgba(55, 55, 55, 0.20);

p{
    color: var(--blue, #006DAB);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
`

export const CampingDetailsWrapper =styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;

`
export const CampingDetailsMiniWrapper =styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:left;
gap:100px;
padding-bottom:10px;

div{
width:100%;
display:flex;
align-items:center;
justify-content:start;
gap:10px;
padding-top:15px;
color: var(--text, #373737);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const DescriptionWrapper =styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
padding-bottom:10px;

h3{
    color: var(--blue, #006DAB);
    padding-bottom:15px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

p{
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`

export const LocationWrapper =styled.div`
`
