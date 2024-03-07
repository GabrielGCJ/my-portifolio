import styled from "styled-components";

export const SliderComponentGlobalContainer = styled.div`
background: black ; 
color: white ;

h1{
    padding-left:100px ;
    font-family: ${({ theme }) => theme.fonts.roboto};
    background-color: rgba(29,29,29);
    border-radius : 10% 100% 10% 100%  ;
    border-top: 3px solid red ;
    border-bottom: 3px solid rgb(0,135,95) ;
}

`

export const SliderAndTextComponent = styled.div`
display: flex ;
justify-content: center ;
`

export const SliderComponentContainer = styled.div`

display: flex;
justify-content: center;
align-items: center ;
width: 80vw ;
flex-direction: row;


img{
    width: 33vw ;
    border-radius: 5% ;
}
`