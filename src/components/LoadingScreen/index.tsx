import { LoadingContainer } from "./styles";

export function LoadingScreen() {
  return (
    <LoadingContainer role="status" aria-label="Carregando portfólio">
      <div className="content">
        <div className="mark" aria-hidden="true">GJ</div>
        <p className="name">GABRIEL JORGE</p>
        <p className="caption">Carregando portfólio!</p>
        <div className="track" aria-hidden="true">
          <div className="progress" />
        </div>
      </div>
    </LoadingContainer>
  );
}
