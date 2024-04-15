import styled from 'styled-components'


export const CampCarInfo  =styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    width:100%;
    padding:4% 0;

`
export const CampCarWrapper =styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:start;
    padding: 0 18px; 
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    gap:20px;
    margin-bottom:15px;

`

export const ImgWrapper =styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    img{
        width:100%;
    }
`

export const InfoWrapper =styled.div`
    flex:3;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
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

@media only screen and (max-width:700px) {
    h1{
        font-size:14px;
    }

    h2{
        font-size: 16px;  
    }
}

`
export const NameWrapper =styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:15px;
    width:100%;
    gap:10px;


    div{
        display:flex;
        justify-content:space-between;
        align-items:center; 
        p{
            padding-left:5px;
        }
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

    :hover{
        background-color:#006DAB;
        color: white; 
    }

    @media only screen and (max-width:1300px) {
        button{
            font-size: 12px;  
        }
    }
`