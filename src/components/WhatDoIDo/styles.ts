import styled, { css } from "styled-components";

export const FullStackSection = styled.section`
  position: relative;
  height: 190vh;
  color: #f5f4f0;
  background: #101212;
  @media (max-width: 760px) { height: auto; padding: 72px 0 56px; }
  @media (prefers-reduced-motion: reduce) { height: auto; }
`;

export const FullStackStage = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  min-height: 680px;
  max-height: 1000px;
  overflow: hidden;
  padding: clamp(44px, 6vh, 76px) clamp(24px, 8vw, 132px);
  background:
    radial-gradient(ellipse at 52% 76%, rgba(45, 138, 130, .12), transparent 42%),
    linear-gradient(135deg, #101212 0%, #121817 54%, #101212 100%);
  @media (max-width: 760px) {
    position: relative; height: auto; min-height: 0; max-height: none; overflow: visible;
    padding: 0 20px;
  }
  @media (prefers-reduced-motion: reduce) { position: relative; height: auto; min-height: 0; max-height: none; overflow: visible; }
`;

export const SectionIntro = styled.div`
  position: relative;
  z-index: 3;
  max-width: 740px;
  .other-intro & { max-width: 800px; }
`;
export const Eyebrow = styled.div`
  display: flex; align-items: center; gap: 14px; margin-bottom: 19px;
  color: #77cfc0; font: 600 11px/1.2 "Roboto", Arial, sans-serif; letter-spacing: .18em; text-transform: uppercase;
  span { color: #727d79; font-size: 10px; }
`;
export const Headline = styled.h1`
  margin: 0; color: #f2f1ec; font: 500 clamp(36px, 5vw, 66px)/1.06 "Roboto", Arial, sans-serif; letter-spacing: -.045em;
  em { color: #81cfc0; font-style: normal; }
  @media (max-width: 760px) { font-size: clamp(36px, 10vw, 54px); }
`;
export const IntroText = styled.p`
  max-width: 450px; margin: 15px 0 0; color: #9ca7a2; font: 400 15px/1.65 "Roboto", Arial, sans-serif;
`;

export const StackCard = styled.article<{ $kind: "frontend" | "backend"; $progress: number }>`
  position: absolute; z-index: 2; top: ${({ $kind }) => $kind === "frontend" ? "35%" : "43%"};
  width: min(41%, 610px); min-height: 330px; padding: 22px 24px 25px;
  border: 1px solid ${({ $kind }) => $kind === "frontend" ? "rgba(102, 201, 184, .34)" : "rgba(136, 153, 219, .34)"};
  border-radius: 18px;
  background: ${({ $kind }) => $kind === "frontend" ? "linear-gradient(145deg, rgba(24, 45, 42, .97), rgba(20, 27, 26, .98))" : "linear-gradient(145deg, rgba(31, 37, 58, .97), rgba(21, 26, 35, .98))"};
  box-shadow: 0 25px 80px rgba(0,0,0,.3), inset 0 1px rgba(255,255,255,.035);
  will-change: transform;
  ${({ $kind, $progress }) => $kind === "frontend" ? css`
    right: 8%;
    transform: translate3d(${-($progress * 7)}%, ${$progress * 23}%, 0) scale(${1 - $progress * .025});
  ` : css`
    left: 8%;
    transform: translate3d(${($progress * 7)}%, ${-($progress * 22)}%, 0) scale(${1 - $progress * .025});
  `}
  .card-description { margin: 8px 0 19px; color: #9aa7a2; font: 400 12px/1.5 "Roboto", Arial, sans-serif; }
  @media (max-width: 1050px) { width: 43%; padding: 18px; .card-description { margin-bottom: 14px; } }
  @media (max-width: 760px) {
    position: relative; top: auto; left: auto; right: auto; width: 100%; min-height: 0; margin-top: 26px;
    transform: none; padding: 19px 17px 21px; will-change: auto;
  }
  @media (prefers-reduced-motion: reduce) { transform: none; }
`;
export const CardHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between; min-height: 18px;
  .card-index { color: #75817d; font: 500 11px/1 "Roboto", Arial, sans-serif; letter-spacing: .12em; }
`;
export const CardMeta = styled.div`
  display: flex; align-items: center; gap: 8px; color: #9ca9a4; font: 600 9px/1 "Roboto", Arial, sans-serif; letter-spacing: .14em;
  .status-dot { width: 6px; height: 6px; border-radius: 50%; background: #7bd3c0; box-shadow: 0 0 12px #7bd3c080; }
`;
export const CardTitle = styled.h2`
  margin: 14px 0 0; color: #f3f4ef; font: 500 27px/1.1 "Roboto", Arial, sans-serif; letter-spacing: -.035em;
`;
export const TechGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px 7px;
  @media (max-width: 1050px) { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 7px 6px; }
  @media (max-width: 390px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`;
export const TechItem = styled.div`
  display: flex; align-items: center; gap: 7px; min-width: 0; min-height: 31px; padding: 5px 7px;
  border: 1px solid rgba(228, 239, 234, .065); border-radius: 7px; background: rgba(255,255,255,.025);
  color: #d2d9d5; font: 400 10px/1.15 "Roboto", Arial, sans-serif;
  span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`;
export const TechMark = styled.span<{ $color: string }>`
  display: grid; flex: 0 0 18px; width: 18px; height: 18px; place-items: center; border-radius: 5px;
  color: ${({ $color }) => $color}; background: color-mix(in srgb, ${({ $color }) => $color} 15%, transparent);
  font: 700 9px/1 "Roboto", Arial, sans-serif;
`;
export const CardMetaSpacer = styled.div``;
export const MergeLine = styled.div<{ $progress: number }>`
  position: absolute; z-index: 1; top: 68%; left: 50%; display: flex; align-items: center; justify-content: center;
  width: min(65%, 790px); transform: translate(-50%, -50%); opacity: ${({ $progress }) => .2 + $progress * .8};
  span { display: block; height: 1px; flex: 1; background: linear-gradient(90deg, transparent, rgba(114, 210, 193, .65)); }
  span:last-child { transform: rotate(180deg); }
  @media (max-width: 760px) { display: none; }
`;
export const MergeCore = styled.div<{ $progress: number }>`
  display: grid; width: 42px; height: 42px; margin: 0 11px; place-items: center; border: 1px solid #5b9b90;
  border-radius: 13px; color: #a6f0df; background: #192725; box-shadow: 0 0 28px #58b8a533;
  font: 700 9px/1 "Roboto", Arial, sans-serif; letter-spacing: .08em; opacity: ${({ $progress }) => .25 + $progress * .75};
  transform: rotate(${({ $progress }) => $progress * 45}deg);
`;
export const ScrollHint = styled.div`
  position: absolute; bottom: 27px; left: 50%; display: flex; align-items: center; gap: 10px; transform: translateX(-50%);
  color: #76847f; white-space: nowrap; font: 600 9px/1 "Roboto", Arial, sans-serif; letter-spacing: .15em;
  .scroll-line { display: block; width: 27px; height: 1px; background: #77cfc0; }
  @media (max-width: 760px) { display: none; }
`;

export const OtherWork = styled.section`
  padding: clamp(74px, 10vw, 140px) clamp(24px, 8vw, 132px) clamp(80px, 11vw, 150px);
  color: #f5f4f0; background: #151918;
  .other-intro { margin-bottom: 48px; }
`;
export const WorkGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;
export const WorkCard = styled.article<{ $accent: string }>`
  position: relative; display: flex; flex-direction: column; min-height: 345px; padding: 25px;
  overflow: hidden; border: 1px solid rgba(230, 239, 234, .09); border-radius: 14px;
  background: linear-gradient(145deg, #202624, #191e1c); transition: transform .25s ease, border-color .25s ease;
  &:hover { transform: translateY(-5px); border-color: ${({ $accent }) => `${$accent}70`}; }
  .work-arrow { position: absolute; right: 25px; bottom: 25px; color: ${({ $accent }) => $accent}; font: 400 19px/1 Arial, sans-serif; }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
`;
export const WorkNumber = styled.span`
  position: absolute; top: 22px; left: 25px; color: #74807a; font: 500 11px/1 "Roboto", Arial, sans-serif; letter-spacing: .12em;
`;
export const WorkIcon = styled.div`
  display: grid; width: 64px; height: 64px; margin: 47px 0 21px; place-items: center; border: 1px solid rgba(255,255,255,.12);
  border-radius: 18px; color: #f5f4f0; background: rgba(255,255,255,.045); font: 300 29px/1 Arial, sans-serif;
`;
export const WorkAccent = styled.span`
  position: absolute; top: 29px; right: 28px; width: 7px; height: 7px; border-radius: 50%; background: #80d2c1; opacity: .72;
`;
export const WorkCopy = styled.div`
  margin-top: auto;
  .work-tag { color: #8f9a94; font: 600 9px/1.2 "Roboto", Arial, sans-serif; letter-spacing: .13em; }
  h2 { max-width: 310px; margin: 10px 0 8px; color: #f2f3ef; font: 500 clamp(22px, 2.2vw, 28px)/1.15 "Roboto", Arial, sans-serif; letter-spacing: -.03em; }
  p { max-width: 340px; margin: 0; color: #a6b0aa; font: 400 13px/1.6 "Roboto", Arial, sans-serif; }
`;
export const WorkAccentDot = styled.span``;
export const WorkNumberLabel = styled.span``;
