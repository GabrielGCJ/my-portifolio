import { LateralMenu } from "../../components/LateralMenu";
import { PresentationComponent } from "../../components/PresentationComponent";
// import { WhoAmI } from "../../components/WhoAmI";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <PresentationComponent/>
      <LateralMenu/>
      {/* <WhoAmI/> */}
     </HomeContainer>
  );
}
