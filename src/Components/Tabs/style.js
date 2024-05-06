import styled from "styled-components";


export const TabWrapper =styled.div`
display:flex;
justify-content:space-between;
align-items:center;

@media only  screen and (max-width:900px) {
    .Title{
        font-size:14px;
    }
}

@media only  screen and (max-width:700px) {
    .Title{
        font-size:9px;
        padding:3px;
    }
}
`


// ReviewItem css

export const MainCon  =styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:start;

`

export const ReviewContainer =styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
gap:20px;
padding:0 15%;

p{
color: var(--text, #373737);
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

@media only screen and (max-width: 900px) {
  p{
    font-size: 14px;
  }
    }    
    
`

export const ReviewWrapper =styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
gap:5px;
padding:10px 15%;
border-bottom:1px solid rgba(55, 55, 55, 0.15);

margin-top:20px;

@media only screen and (max-width:700px ) {
    flex-direction:column;
    justify-content:center;
    align-items:start;
}
`
export const ImgWrapper =styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;

img{
width:100%;
height:100%;  
}
`
export const InfoWrapper =styled.div`
flex:5;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
gap:20px;

@media only screen and (max-width:700px ) {
    flex-direction:column;
    justify-content:center;
    align-items:start;
}
`

export const MiniInfoWrapperRight =styled.div`
flex:4;
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;

h1{
color: var(--text, #373737);
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

p{
color: rgba(55, 55, 55, 0.70);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`
export const MiniInfoWrapperLeft =styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;


p{
color: rgba(55, 55, 55, 0.70);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

@media only screen and (max-width:700px ) {
    width:100%;
    gap:20px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
}

`

// Q&A CSS

export const QueAnsContainer =styled.div`
    width:100%;
    display:flex;
    gap:30px;
    justify-content:space-between;
    align-items:center;
    padding:0 15%;

    @media only screen and (max-width: 900px) {
       flex-direction:column;
       justify-content:center;
       align-items:start; 
    }
`
export const RightContainer =styled.div`
    width:100%;
    flex:3;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;

    /* border:1px solid red; */
`
export const InfoContainer =styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    padding:20px 10px;
    border-bottom:1px solid  rgba(55, 55, 55, 0.30);

    h1{
        color: #373737;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    p{
        color: rgba(55, 55, 55, 0.50);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`

export const LeftContainer =styled.div`
    width:100%;
    flex:4;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;

    .Accordion{
        margin-bottom:20px;
        border:none;
        border-radius:10px;
        min-height:60px;
        box-shadow:0px 2px 10px 0px rgba(0, 0, 0, 0.10);

    }
`

// FAQ CSS

export const FAQContainer =styled.div`
    width:100%;
    display:flex;
    gap:30px;
    justify-content:space-between;
    align-items:start;
    padding:0 15%;

    @media only screen and (max-width: 900px) {
       flex-direction:column;
       justify-content:center;
       align-items:start; 
    }
`


// Question  css

export const QuestionContainer =styled.form`
background-color:white;
padding:30px;
width:100%;
height:432px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

h1{
    padding-bottom:30px;
}

input, textarea{
    width:100%;
    margin-bottom:10px;
    padding:18px 16px;
    border-radius: 8px;
    border: 1px solid #FAFAFA;
    background-color:#FAFAFA;

    color: rgba(55, 55, 55, 0.70);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */

}

@media only screen and (max-width:700px){
  h1{
    font-size:24px;
  }  
}
`

// notification css
export const ButtonCon =styled.button`
    margin-top:10px;
    background-color:#006DAB;
    color:white;
    text-align:center;
    cursor: pointer;
    width:100%;
    margin-bottom:10px;
    padding:18px 16px;
    border-radius: 8px;
    border:none;
`

export const ContactContainer =styled.div`
    width:100%;
    display:flex;
    gap:30px;
    justify-content:space-between;
    align-items:center;
    padding:0 15%;

    @media only screen and (max-width: 900px) {
       flex-direction:column;
       justify-content:center;
       align-items:start; 
    }
`

export const MapWrapper =styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;

    img{
        width:100%;
        height:298px;
    }
`

export const ContactWrapper =styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:30px;
    margin-top:20px;

    @media only screen and (max-width: 700px) {
       flex-direction:column;
       justify-content:start;
       align-items:start; 

    }
    
`
export const ContactMiniWrapper =styled.div`
    flex:1;
    width:100%;
    height:109px;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:start;
    padding:15px 25px;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 700px) {
      /* margin-bottom:10px;  */
    }

    p{
        color: #666;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */
        padding-bottom:15px;
    }

    h1{
        color: var(--txt-color, #1E1C1C);
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 23.4px */
    }
`
