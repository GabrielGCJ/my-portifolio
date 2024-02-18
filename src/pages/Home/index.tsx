import { PresentationComponent } from "../../components/PresentationComponent";
// import { WhoAmI } from "../../components/WhoAmI";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <PresentationComponent/>
      {/* <WhoAmI/> */}
     </HomeContainer>
  );
}
