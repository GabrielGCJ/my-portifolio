import styled, { css } from "styled-components";

export const ChessPageShell = styled.div<{ $dark: boolean }>`
  min-height: 100vh;
  color: ${({ $dark }) => $dark ? "#f4f1eb" : "#272a2f"};
  background: ${({ $dark }) => $dark ? "#101211" : "#f4f2ed"};
  transition: background .25s ease, color .25s ease;
  font-family: ${({ theme }) => theme.fonts.roboto}, Arial, sans-serif;
  --surface: ${({ $dark }) => $dark ? "#191c1a" : "#ffffff"};
  --muted: ${({ $dark }) => $dark ? "#9a9e98" : "#73766f"};
  --line: ${({ $dark }) => $dark ? "#2b302c" : "#e3e1da"};
  --accent: #b6d99c;
`;
export const ChessHeader = styled.header`
  height: 68px; padding: 0 clamp(20px, 6vw, 88px); border-bottom: 1px solid var(--line);
  display: flex; align-items: center; justify-content: space-between;
  a, button { display: inline-flex; align-items: center; gap: 9px; color: inherit; text-decoration: none; font-size: 13px; background: none; border: 0; cursor: pointer; }
  a { color: var(--muted); } a:hover, button:hover { color: var(--accent); }
`;
export const ChessMain = styled.main`
  width: min(1100px, calc(100% - 40px)); margin: 0 auto; padding: 56px 0 70px;
  .intro { margin-bottom: 32px; }
  .eyebrow { color: #91b878; font-size: 10px; font-weight: 700; letter-spacing: .17em; }
  h1 { margin: 9px 0 4px; font-family: ${({ theme }) => theme.fonts.title}, Georgia, serif; font-size: clamp(36px, 5vw, 52px); line-height: 1.05; }
  .intro p { color: var(--muted); font-size: 14px; }
  .game-layout { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(280px, .75fr); gap: 34px; align-items: start; }
  .game-area { width: min(100%, 610px); margin: 0 auto; }
  @media(max-width:760px) { padding-top: 35px; .game-layout { grid-template-columns: 1fr; gap: 22px; } .game-area { width: min(100%, 540px); } }
`;
export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  grid-template-rows: repeat(8, minmax(0, 1fr));
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border: 7px solid var(--surface); border-radius: 5px; box-shadow: 0 18px 55px rgba(0,0,0,.2);
`;
export const Square = styled.button<{ $light: boolean; $pieceColor?: "w" | "b"; $selected: boolean; $last: boolean; $check: boolean; $legal: boolean }>`
  position: relative; display: grid; place-items: center; min-width: 0; min-height: 0; border: 0; padding: 0; cursor: pointer;
  background: ${({ $light }) => $light ? "#e5e2d8" : "#78916e"};
  ${({ $last }) => $last && css`background-color: #c5c96b;`}
  ${({ $selected }) => $selected && css`background-color: #e0cf5b;`}
  ${({ $check }) => $check && css`background: radial-gradient(circle, #e44f4f 0%, #d94c4c 48%, #b93232 100%);`}
  span { font-family: "Segoe UI Symbol", "DejaVu Sans", serif; font-size: clamp(28px, 5.2vw, 58px); line-height: 1; z-index: 1; color: ${({ $pieceColor }) => $pieceColor === "w" ? "#fffdf4" : "#252824"}; -webkit-text-stroke: ${({ $pieceColor }) => $pieceColor === "w" ? "1px #343831" : "0"}; text-shadow: ${({ $pieceColor }) => $pieceColor === "w" ? "0 2px 3px rgba(0,0,0,.48)" : "0 1px 2px rgba(0,0,0,.2)"}; }
  i, em { position: absolute; font-style: normal; font-size: 10px; font-weight: 700; opacity: .72; z-index: 2; }
  i { top: 4px; left: 5px; } em { bottom: 3px; right: 5px; }
  ${({ $light }) => $light ? "i,em{color:#65795b}" : "i,em{color:#f5f0df}"}
  ${({ $legal }) => $legal && css`&:after { content: ""; position: absolute; width: 25%; height: 25%; border-radius: 50%; background: rgba(29,42,28,.28); }`}
  ${({ $legal, $light }) => $legal && !$light && css`&:after { background: rgba(240,245,222,.42); }`}
  ${({ $legal }) => $legal && css`span { position: relative; z-index: 1; }`}
  &:hover { filter: brightness(1.08); }
`;
export const SidePanel = styled.aside`
  display: flex; flex-direction: column; gap: 20px;
  background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 22px; min-height: 430px;
  .live-dot { width: 8px; height: 8px; border-radius: 50%; background: #9bc381; box-shadow: 0 0 0 4px rgba(155,195,129,.12); }
  .status-box { display: flex; align-items: flex-start; gap: 12px; padding: 15px; border: 1px solid var(--line); border-radius: 7px; background: ${({ theme }) => theme.colors["base-background"]}0a; }
  .status-box > div { min-width: 0; }
  .status-box strong, .status-box small { display: block; }
  .status-box strong { font-size: 13px; font-weight: 600; line-height: 1.4; }
  .status-box small { color: var(--muted); font-size: 10px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: .08em; }
  .status-box p { color: var(--muted); font-size: 11px; margin-top: 5px; line-height: 1.4; }
  .turn-dot { width: 8px; height: 8px; margin-top: 3px; border-radius: 50%; background: #a6c88c; } .turn-dot.b { background: #777b78; }
  .move-section { display: flex; flex-direction: column; min-height: 0; }
  .moves-heading { display: flex; justify-content: space-between; align-items: center; font-size: 12px; padding-bottom: 11px; border-bottom: 1px solid var(--line); }
  .moves-heading span { color: var(--muted); font-size: 11px; }
  .move-columns { display: grid; grid-template-columns: 32px 1fr 1fr; gap: 8px; padding: 9px 8px 5px; color: var(--muted); font-size: 10px; }
  .move-columns span:not(:first-child) { text-align: center; }
  .panel-actions { margin-top: auto; }
  .hint { color: var(--muted); font-size: 10px; line-height: 1.45; text-align: center; margin-top: 10px; }
  @media(max-width:760px) { min-height: 350px; }
`;
export const PanelTop = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  h2 { font-size: 17px; margin-top: 7px; letter-spacing: -.02em; } h2 span { color: var(--muted); padding: 0 4px; }
`;
export const PlayerCard = styled.div<{ $active: boolean }>`
  min-height: 61px; display: flex; align-items: center; gap: 11px; padding: 8px 10px;
  background: ${({ $active }) => $active ? "rgba(161,195,134,.11)" : "transparent"}; border-radius: 7px;
  .avatar { display: grid; place-items: center; width: 35px; height: 35px; border-radius: 50%; font-family: "Segoe UI Symbol",serif; font-size: 23px; }
  .machine { color: #f1efe8; background: #474b47; } .human { color: #262b26; background: #d7e7c7; }
  div:nth-child(2) { flex: 1; } strong, small { display:block; } strong { font-size: 12px; } small { color: var(--muted); margin-top: 4px; font-size: 10px; }
`;
export const StatusPill = styled.span`
  color: var(--muted); font-size: 9px; letter-spacing: .08em; border: 1px solid var(--line); border-radius: 4px; padding: 4px 6px;
`;
export const MoveList = styled.div`
  display: grid; grid-template-columns: 1fr; align-content: start; gap: 3px; min-height: 145px; max-height: 190px; overflow-y: auto; padding: 7px 1px;
  .move-row { display: grid; grid-template-columns: 32px 1fr 1fr; gap: 8px; padding: 7px 8px; border-radius: 4px; background: rgba(120,145,110,.08); font-size: 12px; }
  .move-number { color: var(--muted); font-size: 11px; }
  b { font-weight: 500; text-align: center; }
  .pending-move { color: var(--muted); }
  p { color: var(--muted); font-size: 12px; padding: 10px 8px; }
`;
export const ActionButton = styled.button`
  display:flex; align-items:center; justify-content:center; gap:9px; width:100%; padding:11px; color:#182017; background:#b6d99c; border:0; border-radius:5px; font-size:12px; font-weight:700; cursor:pointer;
  &:hover { background:#c8e7b0; }
`;
export const PromotionDialog = styled.div`
  position: fixed; z-index: 5; left: 50%; bottom: 26px; transform: translateX(-50%); display:flex; align-items:center; gap:16px; padding:13px 16px; color:#f4f1eb; background:#252a26; border:1px solid #475044; border-radius:8px; box-shadow:0 12px 35px #0008; font-size:13px;
  button { border:0; border-radius:4px; background:#b6d99c; padding:8px 11px; font-weight:700; cursor:pointer; white-space:nowrap; }
  @media(max-width:500px) { width:calc(100% - 28px); justify-content:space-between; font-size:11px; }
`;
