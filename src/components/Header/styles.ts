import styled from "styled-components";

export const GlobalHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 0px 10px;
  width: 100%;

  height: 2.5rem;
  background: ${({ theme }) => theme.colors["base-hover"]};

  :hover {
    transition: 1s;
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

const LeftAndRigth = styled.div`
  /* display: flex; */
  /* align-items: center; */
`;

export const LanguageContainer = styled.div``;

export const HeaderContainerLeft = styled(LeftAndRigth)``;

export const HeaderContainerRigth = styled(LeftAndRigth)`
  display: flex;
  flex-direction: row;  
  gap: 20px;  
  height: 3.5rem;
  
  h1 {
    padding: 10px;
    :hover {
      transition: 0.2s;
      background: ${({ theme }) => theme.colors["brand-purple"]};
      border-radius: 5px 0px 5px 0px;

      border-bottom: 5px solid green;
    }
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    cursor:default ;
  }  
`;

