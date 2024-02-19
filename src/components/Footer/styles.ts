import styled from "styled-components";

export const FooterContainer = styled.footer`
display: flex ;
flex-direction: row ;
gap: 1vw;
justify-content: center;
background-color: black;
color: white ;
font-size: .700rem ;
font-family: ${({ theme }) => theme.fonts.roboto};


.negrito{
    font-weight: bold;
}

`