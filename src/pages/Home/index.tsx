import { useContext } from "react";
import { LateralMenu } from "../../components/LateralMenu";
import { PresentationComponent } from "../../components/PresentationComponent";
// import { WhoAmI } from "../../components/WhoAmI";
import { HomeContainer } from "./styles";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { MenuOptionsMobile } from "../../components/MenuOptionsMobile";

export function HomePage() {
  const { menuMobileOptions, widthScream } = useContext(PortfolioContext);
  const larguraLimite = 750
  return (
    <HomeContainer>
      <PresentationComponent />
      <LateralMenu />
      {menuMobileOptions === true && widthScream <= larguraLimite ? <MenuOptionsMobile/> : null}
      {/* <WhoAmI/> */}

    </HomeContainer>
  );
}
