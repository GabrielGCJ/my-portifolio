import { useEffect, useRef, useState } from "react";
import { PlugsConnected } from "phosphor-react";
import {
  FullStackSection, FullStackStage, SectionIntro, Eyebrow, Headline, IntroText,
  StackCard, CardHeader, CardTitle, TechGrid, TechItem, TechMark, CardMeta,
  MergeLine, MergeCore, ScrollHint, OtherWork, WorkGrid, WorkCard, WorkIcon,
  WorkNumber, WorkCopy, WorkAccent,
} from "./styles";

type Technology = { name: string; icon?: string; color: string };

const frontend: Technology[] = [
  { name: "HTML5", icon: "html5", color: "#e34f26" }, { name: "CSS3", icon: "css3", color: "#1572b6" },
  { name: "JavaScript", icon: "javascript", color: "#d6ad00" }, { name: "TypeScript", icon: "typescript", color: "#3178c6" },
  { name: "React", icon: "react", color: "#61dafb" }, { name: "Next.js", icon: "nextdotjs", color: "#f4f5f7" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#38bdf8" }, { name: "Redux", icon: "redux", color: "#764abc" },
  { name: "React Native", icon: "react", color: "#61dafb" }, { name: "Vite", icon: "vite", color: "#a78bfa" },
  { name: "React Router", icon: "reactrouter", color: "#f44250" }, { name: "Git", icon: "git", color: "#f05032" },
  { name: "GitHub", icon: "github", color: "#e6edf3" }, { name: "Netlify", icon: "netlify", color: "#32c6c6" },
];

const backend: Technology[] = [
  { name: "Node.js", icon: "nodedotjs", color: "#83cd29" }, { name: "TypeScript", icon: "typescript", color: "#3178c6" },
  { name: "Express.js", icon: "express", color: "#f4f5f7" }, { name: "NestJS", icon: "nestjs", color: "#e0234e" },
  { name: "C#", icon: "csharp", color: "#9b4f96" }, { name: ".NET", icon: "dotnet", color: "#7952b3" },
  { name: "APIs REST", color: "#68d391" }, { name: "PostgreSQL", icon: "postgresql", color: "#699eca" },
  { name: "MongoDB", icon: "mongodb", color: "#47a248" }, { name: "TypeORM", icon: "typeorm", color: "#e83524" },
  { name: "Jest", icon: "jest", color: "#c63d14" }, { name: "Swagger", icon: "swagger", color: "#85ea2d" },
  { name: "Docker", icon: "docker", color: "#2496ed" }, { name: "AWS (EC2 e S3)", icon: "amazonaws", color: "#ff9900" },
  { name: "RabbitMQ", icon: "rabbitmq", color: "#ff6600" }, { name: "Git", icon: "git", color: "#f05032" },
];

const otherWork = [
  { number: "02", title: "Fotógrafo", text: "Luz, composição e olhar atento para transformar instantes em imagens com identidade.", icon: "camera", accent: "#e1ad73", tag: "OLHAR · COMPOSIÇÃO · LUZ" },
  { number: "03", title: "Filmmaker", text: "Histórias em movimento, construídas com intenção do primeiro plano à cena final.", icon: "film", accent: "#8e9cff", tag: "MOVIMENTO · NARRATIVA · CENA" },
  { number: "04", title: "Editor de Vídeos Profissional", text: "Montagem, ritmo e pós-produção para dar forma e impacto a cada narrativa.", icon: "edit", accent: "#68d4c0", tag: "MONTAGEM · RITMO · FINALIZAÇÃO" },
];

function TechnologyList({ items }: { items: Technology[] }) {
  return <TechGrid>{items.map((item) => <TechItem key={item.name} title={item.name}>
    <TechMark $color={item.color} aria-hidden="true">
      {item.icon ? <img src={`https://cdn.simpleicons.org/${item.icon}/${item.color.slice(1)}`} alt="" loading="lazy" /> : <PlugsConnected weight="fill" />}
    </TechMark><span>{item.name}</span>
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
          <IntroText>Do front-end ao back-end, integro cada camada para transformar ideias em produtos digitais completos, funcionais e consistentes.</IntroText>
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
        <WorkNumber>{work.number}</WorkNumber><WorkIcon aria-hidden="true">
          {work.icon === "camera" && <svg viewBox="0 0 48 48"><path d="M8 15h7l3-4h12l3 4h7a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V18a3 3 0 0 1 3-3Z"/><circle cx="24" cy="27" r="8"/><circle cx="37" cy="21" r="1"/></svg>}
          {work.icon === "film" && <svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" rx="3"/><path d="m20 18 11 6-11 6zM6 17h5m-5 7h5m-5 7h5m26-14h5m-5 7h5m-5 7h5"/></svg>}
          {work.icon === "edit" && <svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" rx="3"/><path d="M10 16h4v4h-4zm8 0h7v4h-7zm11 0h9v4h-9zM10 27h8v5h-8zm12 0h4v5h-4zm8 0h8v5h-8z"/></svg>}
        </WorkIcon><WorkAccent />
        <WorkCopy><span className="work-tag">{work.tag}</span><h2>{work.title}</h2><p>{work.text}</p></WorkCopy>
        <span className="work-arrow" aria-hidden="true">↗</span>
      </WorkCard>)}</WorkGrid>
    </OtherWork>
  </main>;
}
