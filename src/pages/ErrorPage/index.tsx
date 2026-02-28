import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Canvas, Container, Content, Countdown, ErrorCode, Message } from "./styles";

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [seconds, setSeconds] = useState(5);
  const [dark, setDark] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const isPortuguese = navigator.language.startsWith("pt");

  // 🌙 Detecta mudança de tema do sistema
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => setDark(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // ⏳ Contador regressivo
  useEffect(() => {
    if (seconds === 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  // ✨ Partículas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.3)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [dark]);

  return (
    <Container dark={dark}>
      <Canvas ref={canvasRef} />

      <Content>
        <ErrorCode>404</ErrorCode>

        <Message>
          {isPortuguese
            ? "Você encontrou uma rota inexistente... mas isso também faz parte do projeto 😉"
            : "You found a non-existent route... but this is also part of the project 😉"}
        </Message>

        <Countdown>
          {isPortuguese
            ? `Redirecionando em ${seconds}s`
            : `Redirecting in ${seconds}s`}
        </Countdown>

        <Button dark={dark} onClick={() => navigate("/")}>
          {isPortuguese ? "Voltar agora" : "Go back now"}
        </Button>
      </Content>
    </Container>
  );
};