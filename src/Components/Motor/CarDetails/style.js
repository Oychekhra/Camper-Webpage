import styled from "styled-components";
import background from '../../../Assets/home/maincarousel1.png'

export const CarDetailsContainer =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color: #FAFAFA;
`

export const CarDetailsTopContainer = styled.div`
margin-top:90px;
background-image:url(${background});
background-position:center;
background-repeat:no-repeat;
background-size:cover;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:700px;
width:100%;


p{
color: #FFF;
text-align: center;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

@media  only screen and (max-width: 900px){
    height:620px;
}

@media  only screen and (max-width: 700px){
    height:410px;
}

`
export const Button = styled.div`
display:flex;
gap:20px;
justify-content:center;
align-items:center;

button{
    margin-top:30px;
    width:181px;
    border-radius: 18px;
border: 2px solid #FFF;
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding:15px 0;
cursor: pointer;
background-color:transparent;

}

:hover {
    background-color:var(--blue, #006DAB);
    border: 2px solid #006DAB;
}
`

export const CarDetails =styled.div`
display:flex;
justify-content:space-between;
align-items:start;
width:100%;
gap:20px;
padding:0 10%;
padding-top:10px;
margin-bottom:80px;

@media  only screen and (max-width: 900px){
    flex-direction:column;
    justify-content:center;
    align-items:start;
}

`
export const ImageWrapper =styled.div`
flex:1;
width:100%;
height:360px;
@media  only screen and (max-width: 700px){
   height:300px;
}

img{
    width:100%;
    height:100%;
}
`

export const DetailsWrapper =styled.div`
flex:1;
width:100%;
padding:30px 20px;
border-radius: 10px;
background: #FFF;
height:360px;
@media  only screen and (max-width: 700px){
   height:255px;
}

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`

export const Header =styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:start;
gap:20px;
padding-bottom:30px;
border-bottom:1px solid rgba(55, 55, 55, 0.30);

h1{
color: #006DAB;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`

export const Info =styled.div`
width:80%;
display:flex;
justify-content:space-between;
align-items:center;
gap:20px;

p{
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-top:10px;
}
`

export const CarDetailsBottomContainer =styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 10%;
@media  only screen and (max-width: 900px){
    flex-direction:column;
    justify-content:center;
    align-items:start;
}
`

export const CarDetailsBottomContainerImg =styled.div`
display:${(props) =>(props.$Top ? "none" : "flex")};
flex:1;
width:100%;
height:470px;

img{
    width:100%;
    height:100%;
}

@media  only screen and (max-width: 900px){
    display:${(props) =>(props.$Bottom ? "none" : "flex")};
}
@media  only screen and (max-width: 700px){
   height:255px;
}
`

export const CarDetailsBottomContainerInfo =styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
width:100%;
height:470px;


@media  only screen and (max-width: 700px){
   height:255px;
   padding:30px 0;
}

/* padding:0 10%; */

p{
    color: #373737;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
padding-top:30px;
padding:0 70px;

@media  only screen and (max-width: 900px){
 padding:0;
}}

h1{
    color: var(--text, #373737);
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding:0 70px;

@media  only screen and (max-width: 900px){
 padding:0;
}
}
`
