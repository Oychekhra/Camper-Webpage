import styled from "styled-components";

export const HomeContainer =styled.div`
    margin-top:90px;
    height:400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    color: white;

`
export const InfoWrapper =styled.div`
    display:flex;
    align-items:start;
    justify-content:space-between;
    padding:60px 70px;
`

export const LeftInfoWrapper =styled.div`
    display:flex;
    flex:2;
    flex-direction:column;
    align-items:start;
    justify-content:start;
    width:90%;

    .Topic{
        display:flex;
        justify-content:space-between;
        border-bottom:1px solid rgba(55, 55, 55, 0.60);
        width:100%;
        padding-bottom:15px;
        p{
        color: var(--text, #373737);
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%; /* 18px */ 
    }

    }

   
    .Cost{

    display:flex;
    justify-content:space-between;
    align-items:start;
    width:80%;
    padding:30px 0 50px 0;
    input{
        border-radius:10px;
        border: 1px solid rgba(55, 55, 55, 0.60);
        height:36px;
        width:50%;
    }

    div{
        display:flex;
        flex-direction:column;
        align-items:start;
        justify-content:start; 
    }
}
   
   .Checkbox{
    padding:30px 0 50px 0;
    div{
        padding-bottom:10px;
        
        label{
            padding-left:10px;
        }
    }
   }

   .Button{
    display:flex;
    width:100%;
    justify-content:space-between;
    button{
        width:45%;
        border-radius: 60px;
        background: var(--sariq, #FF7A00);
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
        color: #FFF;
        font-family: "Open Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding:5% 31px;
        border:none;
        cursor: pointer;
        }
   }

   .Compare{
    padding-top: 30px;
    width:100%;
    .CompareImg{
        padding-top:20px;
        display:flex;
        align-items:start;
        justify-content:space-between;
        div{
            cursor: pointer;
            flex:1;
        }
    .Img{
        margin:0 5px;
        display:flex;
        align-items:center;
        justify-content:center;
        height:100px;
        background-color:white;
        border-radius: 10px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
        img{
            width:100%;
        }
    }
    }
   }

   @media only screen and (max-width:1000px){
    display:none;
    
   }
`
export const RightInfoWrapper =styled.div`
   display:flex;
   flex:7;
    flex-direction:column;
    align-items:start;
    justify-content:start; 
    width:100%;
    padding-left:6%;
    
`


export const RightTopCon =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid black;
    width:100%;
    padding-bottom:6px;

    .Left{
        flex:5;
    }

    .Right{
        flex:2;
    }
`
export const ContainerWrapper =styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media only screen and (max-width: 700px) {
      flex-direction:column;
      justify-content:center;
      align-items:start;
      .Sorter{
        margin-top:15px;
      }

      .Sorter2{
        margin-bottom:15px;
      }
    }

    .Sorter{
    display:flex;
    align-items:center;
    justify-content:space-between;

    select{
        margin:0 15px;
        width:225px;
        height:35px;
        border-radius: 5px;
        border: 1px solid rgba(55, 55, 55, 0.30);

        @media only screen and (max-width: 1000px) {
           width:175px;
        }
    }
    }

    .Sorter2{
        select{
        margin-right:15px;
        width:80px;
        height:35px;
        border-radius: 5px;
        border: 1px solid rgba(55, 55, 55, 0.30);
        }  
    }

    .Sorter3{
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:30px;
        
        .Img1{
            padding:6px 11px;
            border:1px solid rgba(55, 55, 55, 0.30);;
            border-radius: 5px 0px 0px 5px;
        }

        .Img2{
            padding:4px 9px;
            border-radius: 0px 5px 5px 0px;
            border: 1px solid rgba(55, 55, 55, 0.30);
        }
    }
`


export const CampCarInfo  =styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    width:100%;
    gap:20px;
    padding:4% 0;

    @media only  screen and (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);  
    }

    @media only  screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);  
    }
    @media only  screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);  
    }

`
export const CampCarWrapper =styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    border-radius:30px;
    padding:5%;
    background-color:white;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
img{
    align-items:center;
}
h1{
    color: var(--blue, #006DAB);
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top:15px;
}
h2{
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top:15px;
}

.Brand{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:15px;
    width:100%;
}

`

export const Button =styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    padding-top:15px;

    button{
        width:45%;
        height:35px;
        border-radius: 10px;
        border: 1px solid var(--blue, #006DAB);

        /* btn sh */
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
        background-color:white;
        color: var(--blue, #006DAB);
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align:center;
        cursor: pointer;


    }
    .button2{
            background-color:var(--blue, #006DAB);
            color:white;
            display:none;
        }

    @media only screen and (max-width: 1000px) {
        .button2{
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .button1{
            display:none;
        }
        
    }
`