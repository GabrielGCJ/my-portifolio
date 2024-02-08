import styled from "styled-components";

export const GlobalHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.625rem 0rem 0.625rem;
  width: 100%;

  height: 2.5rem;
  background: ${({ theme }) => theme.colors["base-hover"]};

  :hover {
    transition: 1.5s;
    background: ${({ theme }) => theme.colors["base-error"]};
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 10px;
`;

export const HeaderContainerRigth = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 3.5rem;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 100%;

    cursor: default;

    :hover {
      transition: 0.4s;
      background: ${({ theme }) => theme.colors["brand-purple"]};
      border-radius: 7px 0px 7px 0px;
      border-bottom: 5px solid green;
    }
  }
`;
