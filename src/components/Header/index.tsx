import {
  HeaderContainer,
  HeaderContainerLeft,
  HeaderContainerRigth,
  GlobalHeaderContainer
} from "./styles";

export const Header = () => {
  return (
    <GlobalHeaderContainer>

    <HeaderContainer>
      <HeaderContainerLeft>
        <h1>Gabriel Jorge</h1>
      </HeaderContainerLeft>
      <HeaderContainerRigth>
        <h1>Home</h1>
        <h1>Idioma</h1>
        <h1>Quem sou eu</h1>
        <h1>Projetos</h1>
        <h1>Contato</h1>
      </HeaderContainerRigth>
    </HeaderContainer>
    </GlobalHeaderContainer>
  );
};
