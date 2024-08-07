import styled, { keyframes } from "styled-components";

const moveRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
  `;

export const MenuMenuAboutMeContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.roboto};

  border-radius: 5px;
  border: 2px solid red;

  position: absolute;
  width: 12rem;
  height: 12rem;

  background-color: black;
  animation: ${moveRight} 0.5s ease-in-out forwards;

  button {
    width: 90%;
    height: 30%;
    text-align: center;

    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

    :hover {
      transition: 0.5s;
      border-right: 6px solid rgb(102,0,17);
    }
  }
`;
