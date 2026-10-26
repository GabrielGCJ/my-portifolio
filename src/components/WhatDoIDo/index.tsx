import { useEffect, useRef, useState } from "react";
import {
  FullStackSection, FullStackStage, SectionIntro, Eyebrow, Headline, IntroText,
  StackCard, CardHeader, CardTitle, TechGrid, TechItem, TechMark, CardMeta,
  MergeLine, MergeCore, ScrollHint, OtherWork, WorkGrid, WorkCard, WorkIcon,
  WorkNumber, WorkCopy, WorkAccent,
} from "./styles";

type Technology = { name: string; mark: string; color: string };

const frontend: Technology[] = [
  { name: "HTML5", mark: "5", color: "#e34f26" }, { name: "CSS3", mark: "3", color: "#1572b6" },
  { name: "JavaScript", mark: "JS", color: "#d6ad00" }, { name: "TypeScript", mark: "TS", color: "#3178c6" },
  { name: "React", mark: "⚛", color: "#61dafb" }, { name: "Next.js", mark: "N", color: "#f4f5f7" },
  { name: "Tailwind CSS", mark: "≈", color: "#38bdf8" }, { name: "Redux", mark: "R", color: "#764abc" },
  { name: "React Native", mark: "RN", color: "#61dafb" }, { name: "Vite", mark: "ϟ", color: "#a78bfa" },
  { name: "React Router", mark: "⇄", color: "#f44250" }, { name: "Git", mark: "⑂", color: "#f05032" },
  { name: "GitHub", mark: "◉", color: "#e6edf3" }, { name: "Netlify", mark: "◆", color: "#32c6c6" },
];

const backend: Technology[] = [
  { name: "Node.js", mark: "JS", color: "#83cd29" }, { name: "TypeScript", mark: "TS", color: "#3178c6" },
  { name: "Express.js", mark: "Ex", color: "#f4f5f7" }, { name: "NestJS", mark: "N", color: "#e0234e" },
  { name: "C#", mark: "C#", color: "#9b4f96" }, { name: ".NET", mark: ".N", color: "#7952b3" },
  { name: "APIs REST", mark: "↔", color: "#68d391" }, { name: "PostgreSQL", mark: "🐘", color: "#699eca" },
  { name: "MongoDB", mark: "M", color: "#47a248" }, { name: "TypeORM", mark: "T", color: "#e83524" },
  { name: "Jest", mark: "J", color: "#c63d14" }, { name: "Swagger", mark: "S", color: "#85ea2d" },
  { name: "Docker", mark: "▰", color: "#2496ed" }, { name: "AWS (EC2 e S3)", mark: "aws", color: "#ff9900" },
  { name: "RabbitMQ", mark: "▤", color: "#ff6600" }, { name: "Git", mark: "⑂", color: "#f05032" },
];

const otherWork = [
  { number: "02", title: "Fotógrafo", text: "Luz, composição e olhar atento para transformar instantes em imagens com identidade.", icon: "◉", accent: "#e1ad73", tag: "OLHAR · COMPOSIÇÃO · LUZ" },
  { number: "03", title: "Filmmaker", text: "Histórias em movimento, construídas com intenção do primeiro plano à cena final.", icon: "▶", accent: "#8e9cff", tag: "MOVIMENTO · NARRATIVA · CENA" },
  { number: "04", title: "Editor de Vídeos Profissional", text: "Montagem, ritmo e pós-produção para dar forma e impacto a cada narrativa.", icon: "▥", accent: "#68d4c0", tag: "MONTAGEM · RITMO · FINALIZAÇÃO" },
];

function TechnologyList({ items }: { items: Technology[] }) {
  return <TechGrid>{items.map((item) => <TechItem key={item.name} title={item.name}>
    <TechMark $color={item.color} aria-hidden="true">{item.mark}</TechMark><span>{item.name}</span>
  </TechItem>)}</TechGrid>;
}

export function WhatDoIDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (reduced.matches) { setProgress(1); return; }
        const rect = section.getBoundingClientRect();
        const travel = Math.max(1, section.offsetHeight - window.innerHeight);
        setProgress(Math.max(0, Math.min(1, -rect.top / travel)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    reduced.addEventListener?.("change", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      reduced.removeEventListener?.("change", update);
    };
  }, []);

  const eased = progress * progress * (3 - 2 * progress);
  return <main>
    <FullStackSection ref={sectionRef}>
      <FullStackStage>
        <SectionIntro>
          <Eyebrow>O que eu faço <span>— 01 / 04</span></Eyebrow>
          <Headline>Ideias que viram<br /><em>experiências completas.</em></Headline>
          <IntroText>Da interface à infraestrutura, conecto cada camada para criar produtos digitais coesos.</IntroText>
        </SectionIntro>
        <MergeLine $progress={eased} aria-hidden="true"><span /><MergeCore $progress={eased}>APP</MergeCore><span /></MergeLine>
        <StackCard $kind="frontend" $progress={eased} aria-label="Camada Front-end">
          <CardHeader><CardMeta><span className="status-dot" /> CAMADA DE INTERFACE</CardMeta><span className="card-index">01</span></CardHeader>
          <CardTitle>Front-end</CardTitle><p className="card-description">Experiência, interação e tudo o que o usuário vê.</p>
          <TechnologyList items={frontend} />
        </StackCard>
        <StackCard $kind="backend" $progress={eased} aria-label="Camada Back-end">
          <CardHeader><CardMeta><span className="status-dot" /> CAMADA DE SISTEMA</CardMeta><span className="card-index">02</span></CardHeader>
          <CardTitle>Back-end</CardTitle><p className="card-description">Regras, dados e infraestrutura que fazem tudo funcionar.</p>
          <TechnologyList items={backend} />
        </StackCard>
        <ScrollHint><span className="scroll-line" />ROLE PARA CONECTAR AS CAMADAS</ScrollHint>
      </FullStackStage>
    </FullStackSection>
    <OtherWork>
      <SectionIntro className="other-intro">
        <Eyebrow>Além do código <span>— 02 / 04</span></Eyebrow>
        <Headline>Outros jeitos de <em>contar histórias.</em></Headline>
      </SectionIntro>
      <WorkGrid>{otherWork.map((work) => <WorkCard key={work.number} $accent={work.accent}>
        <WorkNumber>{work.number}</WorkNumber><WorkIcon aria-hidden="true">{work.icon}</WorkIcon><WorkAccent />
        <WorkCopy><span className="work-tag">{work.tag}</span><h2>{work.title}</h2><p>{work.text}</p></WorkCopy>
        <span className="work-arrow" aria-hidden="true">↗</span>
      </WorkCard>)}</WorkGrid>
    </OtherWork>
  </main>;
}
