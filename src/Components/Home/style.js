import styled from 'styled-components'


export const  HomeContainer =styled.div`

padding:0 15%;

`

export const MultiCarouselCon =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:start;
padding:10px;
margin:20px;
/* border:1px solid black; */

img{
  width:100%;
  height:100%;
  border:none;
}


`

export const MiniWrapper =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:start;
width:100%;

p{
  color: var(--text, #373737);
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding:20px 0;
}


button{
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: var(--blue, #006DAB);
  color:white;
  color: #FFF;
  width:100%;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding:12px 40px;
  text-align:center;
  border:none;
  margin-bottom:10px;
  border-radius: 1px 1px ;
  transform: skew(-30deg);
    -webkit-transform: skew(-30deg);
    -ms-transform: skew(-30deg);

}

select{
  width:80%;
  border:none;
  padding:10px;
  color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

@media only screen and ( max-width:900px) {
  button{
    font-size: 12px;
  }
}
`




export const HeaderWrapper =styled.div`
display:flex;
  justify-content:center;
  align-items:center;
  padding-bottom:20px;

  @media only screen and (max-width:700px) {
    justify-content:start;
    
  }
`
export const Header =styled.h1`
 text-align:center;
  padding-top:50px;
  color: var(--text, #373737);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;


  border-bottom:${(props) =>(props.$video ? "2px solid #FF7A00" : "none")};

  @media only screen and (max-width:700px) {
    text-align:start;
    
  }
`

export const VideoWrapper =styled.div`
display:grid;
grid-template-areas:'a a a a';
gap:15px;



@media only screen and (max-width:900px){
  grid-template-areas:'a a';

  justify-content:center

}

@media only screen and (max-width:700px){
  grid-template-areas:'a ';
  justify-content:center;

}

`

export const MiniVideo =styled.div`
background-position:center;
background-repeat:no-repeat;
background-size:cover;
display:flex;
justify-content:center;
align-items:center;
height:290px;
min-width:150px;
border:none;
border-radius:30px;
cursor: pointer;

@media only screen and (max-width:900px){
  min-width:250px;
}

img{
  padding:18px;
  border-radius:50%;
  background-color: rgba(255, 255, 255, 0.30);
  border:2px solid white;
}
`
export const BlogsContainer =styled.div`
display:flex;
align-items:start;
justify-content:space-between;
gap:30px;

@media only screen and (max-width:900px){
display:flex;
flex-direction:column;
align-items:center;
justify-content:start;
}

`

export const BlogConLeft =styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:start;
justify-content:start;

@media only screen and (max-width:900px){
align-items:center;
justify-content:center;

p{
  text-align:center;
}

}

@media only screen and (max-width:700px){
align-items:start;
justify-content:start;

p{
  text-align:start;
}

}

h1{
  color: #000;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-bottom:35px;

@media only screen and (max-width:900px){
padding-bottom:20px;

}
}

h4{
  color: var(--sariq, #FF7A00);
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-bottom:9px;
}

p{
color: #000;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`

export const BlogConRight =styled.div`
flex:2;
display:grid;
grid-template-areas:'a a a';
gap:15px;

img{
  width:100%
}

@media only screen and (max-width:900px){
  grid-template-areas:'a a';

  justify-content:center

}

@media only screen and (max-width:700px){
  grid-template-areas:'a ';
  justify-content:center;

}
`





