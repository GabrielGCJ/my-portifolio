import {
  BlurLayerWhoAmIContainer,
  ImageContainer,
  TextContainer,
  WallpaperWhoAmILayerContainer,
  WhoAmIContainer,
} from "./styles";
import img from "../../assents/perfil-image.jpg";
export const WhoAmI = () => {
  return (
    <WhoAmIContainer>
      <WallpaperWhoAmILayerContainer />
      <BlurLayerWhoAmIContainer />
      <ImageContainer>
        <img src={img} alt="" />
      </ImageContainer>
      <TextContainer>
        <h1>Sobre mim</h1>
        <p>
          Sou apaixonado por tecnologia desde pequeno. Por conta disso, cursei
          Análise e desenvolvimento de sistemas na Unicesumar onde adquiri
          diversas experiências tanto com conceitos práticos quanto técnicos
          sobre softwares, hardwares, redes, metodologias ágeis. Desenvolvi
          alguns projetos utilizando linguagens como Java, C e C++. Além disso,
          no tempo que cursei a faculdade, aproveitei para fazer em paralelo, um
          Bootcamp de Desenvolvimento Web FullStack na Labenu, pois eu queria
          ampliar os meus conhecimentos nessa área. Nos 6 meses que cursei o
          Bootcamp eu adquiri diversos conceitos técnicos e práticos tanto sobre
          desenvolvimento quanto sobre o mundo de trabalho na área de
          tecnologia. Lá criei sites utilizando tecnologias como HTML, CSS,
          Javascript, ReactJs, Redux, NodeJs, Typescript, AWS, etc. Desenvolvi
          projetos em equipe que agregaram bastante conhecimento tanto em
          sentido profissional quanto pessoal.
        </p>
        <p>
          Em Resumo, Eu amo aprender e trocar experiências com as pessoas ao meu
          redor pois acredito que só assim podemos mudar o mundo.
        </p>
      </TextContainer>
    </WhoAmIContainer>
  );
};
