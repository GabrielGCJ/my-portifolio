import styled, { keyframes } from "styled-components";

const progress = keyframes`
  from { transform: translateX(-110%); }
  to { transform: translateX(310%); }
`;

const pulse = keyframes`
  50% {
    transform: translateY(-3px);
    box-shadow: 0 0 3rem rgba(128, 71, 248, 0.32);
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #101014;
  color: #f7f5fa;
  font-family: 'Roboto', sans-serif;

  &::before,
  &::after {
    position: absolute;
    width: 25rem;
    height: 25rem;
    border: 1px solid rgba(168, 123, 255, 0.12);
    border-radius: 50%;
    content: '';
  }

  &::after {
    width: 34rem;
    height: 34rem;
  }

  .content {
    z-index: 1;
    width: min(19rem, calc(100vw - 3rem));
    text-align: center;
  }

  .mark {
    display: grid;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 auto 1.5rem;
    place-items: center;
    border: 1px solid rgba(183, 148, 255, 0.55);
    border-radius: 1.1rem;
    color: #c7a8ff;
    font-size: 1.25rem;
    font-weight: 700;
    box-shadow: 0 0 2.5rem rgba(128, 71, 248, 0.16);
    animation: ${pulse} 1.6s ease-in-out infinite;
  }

  .name {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.18em;
  }

  .caption {
    margin: 0.65rem 0 1.5rem;
    color: #a5a0ad;
    font-size: 0.8rem;
    letter-spacing: 0.04em;
  }

  .track {
    height: 2px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.12);
  }

  .progress {
    width: 35%;
    height: 100%;
    background: linear-gradient(90deg, #8047f8, #c7a8ff);
    animation: ${progress} 1.25s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .mark,
    .progress { animation: none; }
    .progress { width: 100%; opacity: 0.7; }
  }
`;
