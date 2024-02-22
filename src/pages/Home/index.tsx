import { useContext } from "react";
import { LateralMenu } from "../../components/LateralMenu";
import { PresentationComponent } from "../../components/PresentationComponent";
// import { WhoAmI } from "../../components/WhoAmI";
import { HomeContainer } from "./styles";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { MenuOptionsMobile } from "../../components/MenuOptionsMobile";

export function HomePage() {
  const { menuMobileOptions } = useContext(PortfolioContext);
  return (
    <HomeContainer>
      <PresentationComponent />
      <LateralMenu />
      {menuMobileOptions === true ? <MenuOptionsMobile/> : null}
      {/* <WhoAmI/> */}

    </HomeContainer>
  );
}
