import { useContext } from "react";
import cv from "../../assents/cv/cv_gabriel_jorge.pdf";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { Slide, Reveal } from "react-awesome-reveal";
import {
  BlurLayerWhoAmIContainer,
  ButtonCv,
  ImageAndTextContainer,
  ImageContainer,
  TextAndButtonContainer,
  WallpaperWhoAmILayerContainer1,
  WallpaperWhoAmILayerContainer2,
  WhoAmIContainer,
  customAnimationPDF,
} from "./styles";

export const WhoAmI = () => {
  const { language } = useContext(PortfolioContext);
  return (
    <WhoAmIContainer>
      <WallpaperWhoAmILayerContainer1 />
      <WallpaperWhoAmILayerContainer2 />
      <BlurLayerWhoAmIContainer />
      <ImageAndTextContainer>
        <ImageContainer />

        <TextAndButtonContainer>
          <Slide>
            <h1>{language === "portuguese" ? "Sobre mim" : "About me"}</h1>
          </Slide>

          <p>
            {language === "portuguese"
              ? "Sou um apaixonado por tecnologia desde pequeno. Desde muito novo, sempre me interessei como usuário de tecnologia por soluções que pudessem resolver os problemas à minha volta. Como um bom fissurado por soluções criativas e avanços tecnológicos, sempre busquei em fóruns e outros meios as melhores ferramentas para meu dia e dos que me pediam ajuda. Hoje, eu crio minhas próprias ferramentas e soluções, sempre buscando me inspirar no que há de melhor no mundo. Nunca, no meu melhor sonho, imaginei que esse amor pela tecnologia de anos me traria a profissão que eu exerço hoje com tanto amor. E aqui estamos, estudando e codando cada vez mais, trazendo soluções cada vez melhores para projetos que impactem positivamente as pessoas!"
              : "I have been passionate about technology since I was little. Since I was very young, I have always been interested as a technology user in solutions that could solve the problems around me. As someone who loves creative solutions and technological advances, I always searched forums and other media for the best tools for my day and for those who asked me for help. Today, I create my own tools and solutions, always seeking to be inspired by the best in the world. Never, in my wildest dreams, did I imagine that this years-long love for technology would bring me the profession that I practice today with so much love. And here we are, studying and coding more and more, bringing ever better solutions for projects that positively impact people!"}
          </p>

          <p>
            {language === "portuguese"
              ? "Para me especializar, tendo uma boa base na programação, cursei o bootcamp de Desenvolvimento Web FullStack na Labenu, pois eu queria ampliar os meus conhecimentos nessa área. Nos 6 meses que cursei o Bootcamp eu adquiri diversos conceitos técnicos e práticos tanto sobre desenvolvimento quanto sobre o mundo do trabalho na área de tecnologia. Lá criei sites utilizando tecnologias como HTML, CSS, Javascript, ReactJs, Redux, NodeJs, Typescript, AWS, etc. Desenvolvi projetos em equipe que agregaram bastante conhecimento tanto em sentido profissional quanto pessoal. Hoje, estudando e trabalhando já na área de tecnologia, pude adquirir diversas experiências tanto com conceitos práticos quanto técnicos sobre softwares, hardwares, redes, metodologias ágeis."
              : "To specialize, having a good foundation in programming, I attended the FullStack Web Development bootcamp at Labenu, as I wanted to expand my knowledge in this area. In the 6 months that I attended the Bootcamp I acquired several technical and practical concepts both about development and the world of work in the technology area. There I created websites using technologies such as HTML, CSS, Javascript, ReactJs, Redux, NodeJs, Typescript, AWS, etc. I developed team projects that added a lot of knowledge both professionally and personally. Today, studying and working in the technology area, I was able to acquire diverse experiences with both practical and technical concepts about software, hardware, networks, agile methodologies."}
          </p>
          <p>
            {language === "portuguese"
              ? "Em Resumo, Eu amo aprender e trocar experiências com as pessoas ao meu redor pois acredito que só assim podemos mudar o mundo."
              : "In Summary, I love learning and exchanging experiences with the people around me because I believe that this is the only way we can change the world."}
          </p>

          <a href={cv} download="cv-gabriel-jorge.pdf">
            <Reveal keyframes={customAnimationPDF}>
              <ButtonCv>
                <strong>
                  {language === "portuguese"
                    ? "Baixar Curriculo em PDF"
                    : "Download resume in PDF"}
                </strong>
              </ButtonCv>
            </Reveal>
          </a>
        </TextAndButtonContainer>
      </ImageAndTextContainer>
    </WhoAmIContainer>
  );
};
