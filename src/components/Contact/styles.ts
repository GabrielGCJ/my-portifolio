import styled from "styled-components";

export const ContactGlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: row;

  font-family: ${({ theme }) => theme.fonts.roboto};

  background-color: black;
  gap: 20rem;

  h2 {
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
  max-width: 90vw;
  height: 80%;
  background: rgba(160, 0, 17, 0.6);
  border-radius: 1%;
  padding: 1rem;
  width: 40rem;
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  width: 95%;
  height: 95%;
  gap: 2rem;
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
  height: 10rem;

  ::placeholder {
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
