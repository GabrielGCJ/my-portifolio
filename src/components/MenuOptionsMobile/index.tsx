import {
  BlurLayerContainer,
  MobileConfigContainer,
  MobileConfigGlobalContainer,
} from "./styles";

export const MenuOptionsMobile = () => {
  return (
    <MobileConfigGlobalContainer>      
      <BlurLayerContainer />
      <MobileConfigContainer>
        <h2>Home</h2>
        <h2>Idioma</h2>
        <h2>Quem sou eu</h2>
        <h2>Contatos</h2>
        <h2>Projetos</h2>
        <h2>Sair</h2>
      </MobileConfigContainer>
    </MobileConfigGlobalContainer>
  );
};
