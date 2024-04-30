import styled from 'styled-components'


export const CampCarInfo  =styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    width:100%;
    gap:20px;
    padding:4% 0;

    :hover{
        transform: scale(1.03);
        opacity: 0.9;
    }

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
    
    
`

export const ImgWrapper =styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;

    img{
        width:100%;
        border-radius:30px;
    }
`

export const InfoWrapper =styled.div`
    flex:1;
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

`
export const BrandNameWrapper =styled.div`
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