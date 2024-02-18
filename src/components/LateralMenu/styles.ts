import styled from "styled-components";

export const LateralMenuContainerGlobal = styled.div`
  position: fixed;
  left: 1rem;
  top: 50%;
  transform: translateY(-15%);
  height: 100%;
  z-index: 6;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LateralMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  background-color: rgba(102, 0, 17, 0.5);
  border-radius: 10px;
  gap: 1rem;

  img {
    width: 2vw;
  }

  .whiteIcon {
    filter: invert(100%);
  }
`;
