import { useEffect, useMemo, useRef, useState } from "react";
import { Chess, type Square as ChessSquare } from "chess.js";
import { ArrowLeft, ArrowCounterClockwise, Moon, Sun } from "phosphor-react";
import { Link } from "react-router-dom";
import {
  ChessPageShell, ChessHeader, ChessMain, Board, Square, SidePanel,
  PanelTop, PlayerCard, StatusPill, ActionButton, MoveList, PromotionDialog,
} from "./styles";

const pieceGlyph: Record<string, string> = {
  wk: "♔", wq: "♕", wr: "♖", wb: "♗", wn: "♘", wp: "♙",
  bk: "♚", bq: "♛", br: "♜", bb: "♝", bn: "♞", bp: "♟",
};
const pieceValue: Record<string, number> = { p: 10, n: 30, b: 32, r: 50, q: 90, k: 0 };

export function ChessPage() {
  const game = useRef(new Chess());
  const [revision, setRevision] = useState(0);
  const [selected, setSelected] = useState<ChessSquare | null>(null);
  const [lastMove, setLastMove] = useState<{ from: ChessSquare; to: ChessSquare } | null>(null);
  const [dark, setDark] = useState(true);
  const [thinking, setThinking] = useState(false);
  const chess = game.current;
  const turn = chess.turn();
  const finished = chess.isGameOver();
  const legalMoves = useMemo(
    () => selected ? chess.moves({ square: selected, verbose: true }) : [],
    [chess, selected, revision],
  );
  const destinations = new Set(legalMoves.map(move => move.to));
  const checked = chess.isCheck();
  const status = chess.isCheckmate()
    ? `Xeque-mate — ${turn === "w" ? "máquina" : "você"} venceu`
    : chess.isStalemate() ? "Empate por afogamento"
      : chess.isThreefoldRepetition() ? "Empate por repetição"
        : chess.isDrawByFiftyMoves() ? "Empate pela regra dos 50 lances"
          : chess.isInsufficientMaterial() ? "Empate por material insuficiente"
            : checked ? "Xeque! Proteja seu rei."
              : turn === "w" ? "Sua vez de jogar" : thinking ? "A máquina está pensando…" : "Vez da máquina";
  const history = chess.history({ verbose: true });
  const movePairs = Array.from({ length: Math.ceil(history.length / 2) }, (_, index) => ({
    number: index + 1,
    white: history[index * 2],
    black: history[index * 2 + 1],
  }));

  const refresh = () => setRevision(value => value + 1);
  const play = (from: ChessSquare, to: ChessSquare) => {
    try {
      const move = chess.move({ from, to, promotion: "q" });
      if (!move) return false;
      setLastMove({ from: move.from, to: move.to });
      setSelected(null);
      refresh();
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (turn !== "b" || finished) {
      setThinking(false);
      return;
    }
    setThinking(true);
    const timer = window.setTimeout(() => {
      const options = chess.moves({ verbose: true });
      if (options.length === 0) {
        setThinking(false);
        refresh();
        return;
      }
      // Prefer safe captures, checks and checkmates; add a small random tie-breaker.
      const scored = options.map(move => {
        const capturedValue = move.captured ? pieceValue[move.captured] : 0;
        chess.move(move);
        const givesMate = chess.isCheckmate();
        const givesCheck = chess.isCheck();
        chess.undo();
        return {
          move,
          score: (givesMate ? 10000 : 0) + capturedValue + (givesCheck ? 4 : 0) + Math.random() * 2,
        };
      }).sort((a, b) => b.score - a.score);
      const choice = scored[0]?.move;
      if (choice) play(choice.from, choice.to);
      setThinking(false);
    }, 500);
    return () => window.clearTimeout(timer);
  }, [chess, turn, finished, revision]);

  const reset = () => {
    chess.reset();
    setSelected(null);
    setLastMove(null);
    setThinking(false);
    refresh();
  };

  const squareClick = (square: ChessSquare) => {
    if (turn !== "w" || finished || thinking) return;
    if (selected && destinations.has(square)) {
      if (play(selected, square)) return;
    }
    const piece = chess.get(square);
    setSelected(piece?.color === "w" ? square : null);
  };

  const board = chess.board();
  return <ChessPageShell $dark={dark}>
    <ChessHeader><Link to="/"><ArrowLeft size={18}/> Voltar ao portfólio</Link><button onClick={() => setDark(value => !value)} aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}>{dark ? <Sun size={19}/> : <Moon size={19}/>}<span>{dark ? "Modo claro" : "Modo escuro"}</span></button></ChessHeader>
    <ChessMain>
      <section className="intro"><span className="eyebrow">JOGO CLÁSSICO · 01</span><h1>Xadrez</h1><p>Uma partida entre você e a máquina. Pense com calma, cada movimento conta.</p></section>
      <div className="game-layout"><section className="game-area">
        <PlayerCard $active={turn === "b" && !finished}><span className="avatar machine">♟</span><div><strong>Máquina</strong><small>{turn === "b" ? (thinking ? "Pensando…" : "Jogando agora") : "Nível casual"}</small></div><StatusPill>PRETAS</StatusPill></PlayerCard>
        <Board aria-label="Tabuleiro de xadrez">{board.flatMap((row, r) => row.map((piece, c) => {
          const square = `${String.fromCharCode(97 + c)}${8 - r}` as ChessSquare;
          const isLast = !!lastMove && (lastMove.from === square || lastMove.to === square);
          const isKingInCheck = !!piece && piece.type === "k" && piece.color === turn && checked;
          return <Square key={square} $light={(r + c) % 2 === 0} $pieceColor={piece?.color} $selected={selected === square} $last={isLast} $check={isKingInCheck} $legal={destinations.has(square)} onClick={() => squareClick(square)} aria-label={`${square}${piece ? `, ${piece.color === "w" ? "branca" : "preta"} ${piece.type}` : ""}`}><span>{piece && pieceGlyph[`${piece.color}${piece.type}`]}</span>{c === 0 && <i>{8 - r}</i>}{r === 7 && <em>{String.fromCharCode(97 + c)}</em>}</Square>;
        }))}</Board>
        <PlayerCard $active={turn === "w" && !finished}><span className="avatar human">♙</span><div><strong>Você</strong><small>{turn === "w" ? "Sua vez" : "Aguardando"}</small></div><StatusPill>BRANCAS</StatusPill></PlayerCard>
      </section><SidePanel aria-label="Informações da partida">
        <PanelTop><div><span className="eyebrow">PARTIDA LOCAL</span><h2>Resumo da partida</h2></div><span className="live-dot"/></PanelTop>
        <div className="status-box"><span className={`turn-dot ${turn}`}/><div><small>Status</small><strong>{status}</strong><p>{checked ? "O rei está sob ataque." : turn === "w" ? "Você joga com as peças brancas." : "A máquina joga com as peças pretas."}</p></div></div>
        <section className="move-section" aria-label="Histórico de lances">
          <div className="moves-heading"><strong>Lances</strong><span>{history.length} {history.length === 1 ? "jogado" : "jogados"}</span></div>
          <div className="move-columns"><span>#</span><span>Você</span><span>Máquina</span></div>
          <MoveList>{movePairs.length ? movePairs.map(pair => <div className="move-row" key={pair.number}><span className="move-number">{pair.number}.</span><b>{pair.white.san}</b><b className={!pair.black ? "pending-move" : ""}>{pair.black?.san ?? "—"}</b></div>) : <p>A partida começa com você.</p>}</MoveList>
        </section>
        <div className="panel-actions"><ActionButton onClick={reset}><ArrowCounterClockwise size={17}/> Nova partida</ActionButton><p className="hint">Peões promovem a dama automaticamente.</p></div>
      </SidePanel></div>
    </ChessMain>{finished && <PromotionDialog role="status"><strong>{status}</strong><button onClick={reset}>Jogar novamente</button></PromotionDialog>}
  </ChessPageShell>;
}
