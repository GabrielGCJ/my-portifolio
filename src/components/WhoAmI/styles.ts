import styled from "styled-components";

export const WhoAmIContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: purple;
  width: 100vw;
  height: 70vh;
  padding: 10vw;
  gap: 5rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 25vw;
    height: 25vw;
    border-radius: 30%;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
