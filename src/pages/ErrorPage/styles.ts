import styled, { keyframes } from "styled-components";

const glitch = keyframes`
  0% { text-shadow: 2px 2px #ff00c1, -2px -2px #00fff9; }
  20% { text-shadow: -2px -2px #ff00c1, 2px 2px #00fff9; }
  40% { text-shadow: 2px -2px #ff00c1, -2px 2px #00fff9; }
  60% { text-shadow: -2px 2px #ff00c1, 2px -2px #00fff9; }
  80% { text-shadow: 2px 2px #ff00c1, -2px -2px #00fff9; }
  100% { text-shadow: none; }
`;

export const Container = styled.div<{ dark: boolean }>`
  position: relative;
  height: 100vh;
  width: 100%;
  background: ${({ dark }) =>
    dark
      ? "linear-gradient(135deg, #0f0c29, #302b63, #24243e)"
      : "linear-gradient(135deg, #e0eafc, #cfdef3)"};
  color: ${({ dark }) => (dark ? "#fff" : "#111")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
`;

export const Canvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
`;

export const ErrorCode = styled.h1`
  font-size: 8rem;
  margin: 0;
  animation: ${glitch} 1s infinite;
`;

export const Message = styled.p`
  font-size: 1.3rem;
  max-width: 500px;
  margin: 1rem 0;
`;

export const Countdown = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const Button = styled.button<{ dark: boolean }>`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  border: 2px solid ${({ dark }) => (dark ? "#fff" : "#111")};
  background: transparent;
  color: inherit;
  transition: 0.3s;

  &:hover {
    background: ${({ dark }) => (dark ? "#fff" : "#111")};
    color: ${({ dark }) => (dark ? "#000" : "#fff")};
    transform: scale(1.05);
  }
`;