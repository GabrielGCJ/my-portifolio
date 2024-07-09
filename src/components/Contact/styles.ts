import styled from "styled-components";
import { keyframes } from "@emotion/react";

export const ContactGlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50rem;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.roboto};

  background-color: black;
  gap: 20rem;

  h2,
  h3 {
    color: white;
    margin: 1rem;
    cursor: default;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 95vw;
  height: 80%;
  background: rgba(160, 0, 17, 0.6);
  border-radius: 1%;
  padding: 1rem;
  width: 40rem;

  @keyframes moveUpContact {
    from {
      transform: translateY(50%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: moveUpContact 1.3s ease-out 1;
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  width: 95%;
  height: 65%;
  gap: 1rem;
  padding: 1rem 0 1rem 0;
  flex-direction: column;
  border-radius: 1%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 2rem;
    background-color: rgba(160, 0, 17, 0.6);
    border: 2px solid rgba(160, 0, 17, 0.9);
    border-radius: 0.3rem;
    font-size: 1rem;
    color: white;

    :hover {
      background-color: rgba(160, 0, 17, 0.9);
      transition: 1s;
    }

    :active {
      background-color: white;
      color: black;
      transition: 0.01s;
    }
  }
`;

const ImputProps = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 90%;
  background-color: rgba(160, 0, 17, 0.7);
  border-radius: 10px;
  border: 2px solid white;
  color: white;
  padding: 10px;

  :hover {
    background-color: rgba(160, 160, 160, 0.5);
    transition: 0.7s;
  }
  ::placeholder {
    color: white;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 1rem;
  }
`;

export const NameInput = styled(ImputProps)``;
export const EmailInput = styled(ImputProps)``;
export const TelephoneInput = styled(ImputProps)``;
export const DetailsInput = styled(ImputProps)`
  height: 7rem;

  ::placeholder {
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const OtherContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 12rem;
  background: rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  gap: 1rem;
  padding: 1rem 0 1rem 0;
`;

export const ContactLinksContainer = styled.div`
  padding: 1rem 0 1rem 0;
  background-color: rgba(160, 90, 90, 0.4);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  img {
    width: 2rem;
    transition: 0.25s linear;

    @media (max-width: 300px) {
      width: 1.3rem;
    }

    :hover {
      width: 3vw;
    }
  }
`;

export const customAnimationGitInst = keyframes`
   from {
        transform: translateX(-300%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
`;

export const customAnimationLinkedin = keyframes`
   from {
        transform: translateY(200%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
`;

export const customAnimationWhatsAppSpotify = keyframes`
   from {
        transform: translateX(300%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
`;
