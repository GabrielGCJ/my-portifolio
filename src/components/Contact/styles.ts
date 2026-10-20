import styled from "styled-components";
import { keyframes } from "@emotion/react";

export const ContactGlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 1.25rem;
  flex-direction: column;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.roboto};
  background-color: black;

  h2,
  h3 {
    color: white;
    margin: 0.5rem;
    cursor: default;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 95vw;
  height: auto;
  background: rgba(67, 5, 12, 0.6);
  border-radius: 1rem;
  padding: clamp(1.25rem, 4vw, 2.5rem);
  width: min(100%, 40rem);
  box-sizing: border-box;

  .contact-intro {
    max-width: 30rem;
    margin: 0.25rem 0 1.5rem;
    color: rgba(255, 255, 255, 0.76);
    text-align: center;
    line-height: 1.5;
  }

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

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  .honeypot {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.9rem;
  text-align: left;

  input,
  textarea {
    width: 100%;
    border: 1px solid rgba(199, 168, 255, 0.35);
    border-radius: 0.65rem;
    padding: 0.85rem 1rem;
    background: rgba(16, 16, 20, 0.8);
    color: white;
    font: inherit;
    font-size: 1rem;
    outline: none;
    transition: border-color 150ms ease, box-shadow 150ms ease;

    &::placeholder { color: rgba(255, 255, 255, 0.48); }
    &:focus { border-color: #c7a8ff; box-shadow: 0 0 0 3px rgba(128, 71, 248, 0.2); }
  }

  textarea { min-height: 8rem; resize: vertical; }
`;

export const SubmitButton = styled.button`
  min-height: 3rem;
  border: 0;
  border-radius: 0.65rem;
  padding: 0.8rem 1rem;
  background: #8047f8;
  color: white;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: background 150ms ease, transform 150ms ease;

  &:hover:not(:disabled) { background: #6b35dc; transform: translateY(-1px); }
  &:focus-visible { outline: 2px solid #c7a8ff; outline-offset: 3px; }
  &:disabled { cursor: wait; opacity: 0.7; }
`;

export const FormStatus = styled.p`
  min-height: 1.25rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  text-align: center;

  &[data-state="success"] { color: #a7f3d0; }
  &[data-state="error"], &[data-state="missing-key"] { color: #fca5a5; }
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
  min-height: 9rem;
  height: auto;
  background: rgba(165, 134, 134, 0.2);
  margin-top: 1rem;
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

    @media (max-width: 600px) {
      width: 1.3rem;
    }

    :hover {
      width: 3vw;
    }
  }

  a { display: inline-flex; padding: 0.5rem; }
`;

export const customAnimationGitInst = keyframes`
   from {
        transform: translateX(-200%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
`;

export const customAnimationLinkedin = keyframes`
   from {
        transform: translateY(150%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
`;

export const customAnimationWhatsAppSpotify = keyframes`
   from {
        transform: translateX(200%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
`;
