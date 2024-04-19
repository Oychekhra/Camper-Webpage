import styled from "styled-components";

export const TopContainer =styled.div`
    margin-top:90px;
    height:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    color: white;
    text-shadow: -1px -5px 22px rgba(0,0,0,0.56);

`
export const InfoContainer =styled.div`
    display:flex;
    align-items:start;
    justify-content:space-between;
    padding:10px 15%;
    gap:50px;

    @media only screen and (max-width:900px) {
        padding:10px 10%;
    }
`
export const LeftInfoWrapper =styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:start;

    @media only screen and (max-width:900px) {
        display:none;
    }
`

export const RightInfoWrapper =styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:start; 
    width:100%;
    margin-top:50px;
    
`

export const RightTopCon =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid  rgba(55, 55, 55, 0.50);;
    width:100%;
    gap:20px;
    padding-bottom:5px;

`
export const RightTopConLeft =styled.div`
    flex:5;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;

    div{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    @media only screen and (max-width:700px) {
        flex-direction:column;
        align-items:start;
        justify-content:center;

        div{
            padding-bottom:5px;

        }

    }

   
`
export const MainDrawer =styled.div`
display:none;

@media only screen and (max-width:900px) {
    display:flex;
    justify-content:center;
    align-items:center;
}
`
export const DrawerIcon =styled.div`
display:none;
justify-content:center;
align-items:center;
height:30px;
width:40px;
border: 1px solid rgba(55, 55, 55, 0.30);
border-radius:5px;
margin-right:10px;
img{
    width:100%;
    height:100%;
    border-radius:5px;
}


`

export const SorterContainer =styled.div`
    display:flex;
    align-items:center;
`

export const MiniSorterContainer =styled.div`
        cursor: pointer;
        display:flex;
        align-items:center;
        height:30px;
        width:30px;
        padding-left:${(props) =>(props.$Left ? "5px" : "0")};
        justify-content:${(props) =>(props.$Left ? "start" : "center")};
        border: 1px solid rgba(55, 55, 55, 0.30);
        border-radius:${(props) =>(props.$Right ? "0px 5px 5px 0px" : "5px 0px 0px 5px")};
`

export const RightTopConRight =styled.div`
    flex:1;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;

    @media only screen and (max-width:700px) {
        flex-direction:column;
        align-items:start;
        justify-content:center;

        div{
            padding-bottom:5px;
        }

    }


   
`


