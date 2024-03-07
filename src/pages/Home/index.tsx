import { useContext } from "react";
import { LateralMenu } from "../../components/LateralMenu";
import { PresentationComponent } from "../../components/PresentationComponent";
import { WhoAmI } from "../../components/WhoAmI";
import { HomeContainer } from "./styles";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { MenuOptionsMobile } from "../../components/MenuOptionsMobile";
// import { SliderComponent } from "../../components/SliderComponent";

export function HomePage() {
  const { menuMobileOptions, widthScream } = useContext(PortfolioContext);
  const larguraLimite = 750;
  return (
    <HomeContainer>
      <PresentationComponent />
      <LateralMenu />
      {menuMobileOptions === true && widthScream <= larguraLimite ? (
        <MenuOptionsMobile />
      ) : null}
      <WhoAmI />
      {/* <SliderComponent/> */}
    </HomeContainer>
  );
}
