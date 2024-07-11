import { useContext } from "react";
import { LateralMenu } from "../../components/LateralMenu";
import { PresentationComponent } from "../../components/PresentationComponent";
import { WhoAmI } from "../../components/WhoAmI";
import { HomeContainer } from "./styles";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { MenuOptionsMobile } from "../../components/MenuOptionsMobile";
import { SliderComponent } from "../../components/SliderComponent";
import { Contact } from "../../components/Contact";

export function HomePage() {
  const { menuMobileOptions, widthScream } = useContext(PortfolioContext);
  const larguraLimite = 750;

  return (
    <HomeContainer>
      <section id="home">

      <PresentationComponent />
      </section>
      <LateralMenu />
      {menuMobileOptions === true && widthScream <= larguraLimite ? (
        <MenuOptionsMobile />
      ) : null}
      <section id="whoAmI">
        <WhoAmI />
      </section>
      <section id="projects">
        <SliderComponent />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </HomeContainer>
  );
}
