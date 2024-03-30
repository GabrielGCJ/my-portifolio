// import img from "../.image.jpg"./assents/perfil-
import cv from "../../assents/cv/cv-gabriel-jorge.pdf";
import {
  BlurLayerWhoAmIContainer,
  ButtonCv,
  ImageAndTextContainer,
  ImageContainer,
  TextAndButtonContainer,
  WallpaperWhoAmILayerContainer1,
  WallpaperWhoAmILayerContainer2,
  WhoAmIContainer,
} from "./styles";

export const WhoAmI = () => {
  return (
    <WhoAmIContainer>
      <WallpaperWhoAmILayerContainer1 />
      <WallpaperWhoAmILayerContainer2 />
      <BlurLayerWhoAmIContainer />
      <ImageAndTextContainer>
        <ImageContainer>
          {/* <img src={img} alt="" /> */}
        </ImageContainer>

        <TextAndButtonContainer>
          <h1>Sobre mim</h1>
          <p>
            Sou um apaixonado por tecnologia desde pequeno. Desde muito novo,
            sempre me interessei como usuário de tecnologia por soluções que
            pudessem resolver os problemas à minha volta. Como um bom fissurado
            por soluções criativas e avanços tecnológicos, sempre busquei em
            fóruns e outros meios as melhores ferramentas para meu dia e dos que
            me pediam ajuda. Hoje, eu crio minhas próprias ferramentas e
            soluções, sempre buscando me inspirar no que há de melhor no mundo.
            Nunca, no meu melhor sonho, imaginei que esse amor pela tecnologia
            de anos me traria a profissão que eu exerço hoje com tanto amor. E
            aqui estamos, estudando e codando cada vez mais, trazendo soluções
            cada vez melhores para projetos que impactem positivamente as
            pessoas!
          </p>
          <p>
            Para me especializar, tendo uma boa base na programação, cursei o
            bootcamp de Desenvolvimento Web FullStack na Labenu, pois eu queria
            ampliar os meus conhecimentos nessa área. Nos 6 meses que cursei o
            Bootcamp eu adquiri diversos conceitos técnicos e práticos tanto
            sobre desenvolvimento quanto sobre o mundo do trabalho na área de
            tecnologia. Lá criei sites utilizando tecnologias como HTML, CSS,
            Javascript, ReactJs, Redux, NodeJs, Typescript, AWS, etc. Desenvolvi
            projetos em equipe que agregaram bastante conhecimento tanto em
            sentido profissional quanto pessoal. Hoje, estudando e trabalhando
            já na área de tecnologia, pude adquirir diversas experiências tanto
            com conceitos práticos quanto técnicos sobre softwares, hardwares,
            redes, metodologias ágeis.
          </p>
          <p>
            Em Resumo, Eu amo aprender e trocar experiências com as pessoas ao
            meu redor pois acredito que só assim podemos mudar o mundo.
          </p>
          <a href={cv} download="cv-gabriel-jorge.pdf">
            <ButtonCv>
              <strong>Baixar Curriculo em PDF</strong>
            </ButtonCv>
          </a>
        </TextAndButtonContainer>
      </ImageAndTextContainer>
    </WhoAmIContainer>
  );
};
