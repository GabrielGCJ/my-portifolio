import { LateralMenu } from "../../components/LateralMenu";
import { PresentationComponent } from "../../components/PresentationComponent";
import { WhoAmI } from "../../components/WhoAmI";
import { HomeContainer } from "./styles";
import { MenuOptionsMobile } from "../../components/MenuOptionsMobile";
import { SliderComponent } from "../../components/SliderComponent";
import { Contact } from "../../components/Contact";
import { usePortfolio } from "../../hooks/usePortfolio";

export function HomePage() {
  const { menuMobileOptions, widthScreen } = usePortfolio();
  const larguraLimite = 750;

  return (
    <HomeContainer>
      <section id="home">

      <PresentationComponent />
      </section>
      <LateralMenu />
      {menuMobileOptions === true && widthScreen <= larguraLimite ? (
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
