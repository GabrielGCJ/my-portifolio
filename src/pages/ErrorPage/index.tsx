import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Board,
  BugButton,
  GameInfo,
  HomeButton,
  Page,
  Panel,
  RestartButton,
  Score,
  Title,
} from "./styles";

const GAME_LENGTH = 20;

function randomPosition() {
  return {
    left: `${8 + Math.random() * 78}%`,
    top: `${10 + Math.random() * 68}%`,
  };
}

export function ErrorPage() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(GAME_LENGTH);
  const [position, setPosition] = useState(randomPosition);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setTimeout(() => {
      if (seconds <= 1) {
        setSeconds(0);
        setIsPlaying(false);
        return;
      }
      setSeconds(seconds - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [isPlaying, seconds]);

  function catchBug() {
    if (!isPlaying) return;
    setScore((current) => current + 1);
    setPosition(randomPosition());
  }

  function restartGame() {
    setScore(0);
    setSeconds(GAME_LENGTH);
    setPosition(randomPosition());
    setIsPlaying(true);
  }

  return (
    <Page>
      <Panel>
        <span className="eyebrow">OPA! VOCÊ SAIU DA ROTA</span>
        <Title>404</Title>
        <p className="message">
          Essa página não existe. Enquanto encontra o caminho de volta, tente
          capturar o bug fugitivo!
        </p>

        <GameInfo>
          <Score aria-live="polite">Bugs capturados: <strong>{score}</strong></Score>
          <span>{isPlaying ? `Tempo: ${seconds}s` : "Tempo esgotado!"}</span>
        </GameInfo>

        <Board aria-label="Área do jogo: capture o bug">
          {isPlaying ? (
            <BugButton
              type="button"
              style={position}
              onClick={catchBug}
              aria-label="Capturar bug"
              title="Pegue o bug!"
            >
              🐛
            </BugButton>
          ) : (
            <div className="result" role="status">
              <span>{score > 0 ? "Boa captura!" : "O bug escapou!"}</span>
              <RestartButton type="button" onClick={restartGame}>
                Jogar de novo
              </RestartButton>
            </div>
          )}
          <span className="board-hint" aria-hidden="true">clique no bug para pontuar</span>
        </Board>

        <HomeButton type="button" onClick={() => navigate("/")}>
          Voltar ao portfólio <span aria-hidden="true">↗</span>
        </HomeButton>
      </Panel>
      <span className="decoration decoration-one" aria-hidden="true">✳</span>
      <span className="decoration decoration-two" aria-hidden="true">✦</span>
    </Page>
  );
}
