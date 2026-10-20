import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Page = styled.main`
  position: relative;
  display: grid;
  min-height: 100vh;
  overflow: hidden;
  place-items: center;
  padding: 2rem 1.25rem;
  background:
    radial-gradient(circle at 12% 18%, rgba(128, 71, 248, 0.2), transparent 30rem),
    radial-gradient(circle at 90% 82%, rgba(219, 172, 44, 0.1), transparent 25rem),
    #101014;
  color: #f7f5fa;
  font-family: 'Roboto', sans-serif;

  .decoration {
    position: absolute;
    color: rgba(199, 168, 255, 0.3);
    pointer-events: none;
  }

  .decoration-one { top: 12%; left: 12%; font-size: 2.5rem; }
  .decoration-two { right: 14%; bottom: 12%; font-size: 3rem; }
`;

export const Panel = styled.section`
  z-index: 1;
  width: min(100%, 38rem);
  padding: clamp(1.5rem, 5vw, 3rem);
  border: 1px solid rgba(199, 168, 255, 0.2);
  border-radius: 1.5rem;
  background: rgba(24, 22, 30, 0.88);
  box-shadow: 0 1.5rem 5rem rgba(0, 0, 0, 0.35);
  text-align: center;
  animation: ${appear} 500ms ease both;

  .eyebrow {
    color: #c7a8ff;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.16em;
  }

  .message {
    max-width: 29rem;
    margin: 0 auto 1.5rem;
    color: #c3becb;
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    border-radius: 1.1rem;
    .eyebrow { font-size: 0.65rem; }
    .message { font-size: 0.92rem; }
  }
`;

export const Title = styled.h1`
  margin: 0.25rem 0;
  color: #f7f5fa;
  font-size: clamp(5rem, 22vw, 8rem);
  font-weight: 900;
  letter-spacing: -0.08em;
  line-height: 1;
  text-shadow: 0.06em 0.05em 0 #8047f8;
`;

export const GameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.65rem;
  color: #d7d2df;
  font-size: 0.9rem;

  @media (max-width: 380px) {
    font-size: 0.8rem;
  }
`;

export const Score = styled.span`
  strong { color: #c7a8ff; }
`;

export const Board = styled.div`
  position: relative;
  height: clamp(12rem, 45vw, 17rem);
  overflow: hidden;
  border: 1px solid rgba(199, 168, 255, 0.22);
  border-radius: 1rem;
  background:
    radial-gradient(circle at 25% 35%, rgba(128, 71, 248, 0.12) 0 2px, transparent 3px),
    radial-gradient(circle at 73% 68%, rgba(255, 255, 255, 0.14) 0 1px, transparent 2px),
    #14131a;

  .board-hint {
    position: absolute;
    right: 0.8rem;
    bottom: 0.65rem;
    color: #8e8997;
    font-size: 0.7rem;
    pointer-events: none;
  }

  .result {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    color: #eeeaf5;
    font-weight: 700;
    padding: 1rem;
  }
`;

export const BugButton = styled.button`
  position: absolute;
  z-index: 1;
  display: grid;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  background: rgba(128, 71, 248, 0.22);
  cursor: pointer;
  font-size: 1.8rem;
  transform: translate(-50%, -50%);
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition: background 150ms ease, scale 150ms ease;

  &:hover,
  &:focus-visible {
    background: rgba(128, 71, 248, 0.55);
    scale: 1.15;
    outline: 2px solid #c7a8ff;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

export const HomeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.25rem;
  padding: 0.85rem 1.3rem;
  border: 0;
  border-radius: 999px;
  background: #8047f8;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  transition: background 150ms ease, transform 150ms ease;

  &:hover { background: #6b35dc; transform: translateY(-2px); }
  &:focus-visible { outline: 2px solid #c7a8ff; outline-offset: 3px; }
`;

export const RestartButton = styled(HomeButton)`
  margin-top: 0;
  padding: 0.65rem 1rem;
  font-size: 0.85rem;
`;
