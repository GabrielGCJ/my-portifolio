import { FormEvent, useState } from "react";
import gitImage from "../../assents/lateralMenu/github.svg";
import linkedinImage from "../../assents/lateralMenu/linkedin.svg";
import whatsappImage from "../../assents/lateralMenu/whatsapp.svg";
import { Fade, Reveal } from "react-awesome-reveal";
import {
  ContactContainer,
  ContactGlobalContainer,
  ContactLinksContainer,
  ContactForm,
  FormField,
  FormStatus,
  OtherContactsContainer,
  SubmitButton,
  customAnimationGitInst,
  customAnimationLinkedin,
  customAnimationWhatsAppSpotify,
} from "./styles";
import { usePortfolio } from "../../hooks/usePortfolio";

type SubmissionResponse = {
  success: boolean;
  message?: string;
  body?: { message?: string };
};

export const Contact = () => {
  const { language } = usePortfolio();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "missing-key">("idle");
  const [submissionError, setSubmissionError] = useState("");
  const isPortuguese = language === "portuguese";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("missing-key");
      return;
    }

    setIsSending(true);
    setStatus("idle");
    setSubmissionError("");

    try {
      const formData = new FormData(form);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Nova mensagem pelo portfólio",
          from_name: "Portfólio Gabriel Jorge",
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          botcheck: formData.get("botcheck"),
        }),
      });

      const result = (await response.json()) as SubmissionResponse;
      if (!response.ok || !result.success) {
        throw new Error(result.message || result.body?.message || `HTTP ${response.status}`);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "");
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  const statusMessage = {
    idle: "",
    success: isPortuguese
      ? "Mensagem enviada! Obrigado por entrar em contato."
      : "Message sent! Thanks for reaching out.",
    error: submissionError
      ? `${isPortuguese ? "Falha no envio" : "Submission failed"}: ${submissionError}`
      : isPortuguese
        ? "Não foi possível enviar agora. Tente novamente ou use um dos contatos abaixo."
        : "Could not send your message. Please try again or use one of the contacts below.",
    "missing-key": isPortuguese
      ? "O formulário ainda precisa ser configurado. Você pode falar comigo pelos contatos abaixo."
      : "The form still needs to be configured. You can reach me using the contacts below.",
  }[status];

  return (
    <ContactGlobalContainer>
      <Fade>
        <ContactContainer>
          <h2>{isPortuguese ? "Entre em contato" : "Get in touch"}</h2>
          <p className="contact-intro">
            {isPortuguese
              ? "Deixe seus dados e uma mensagem. Eu retorno para você por e-mail."
              : "Leave your details and a message. I will get back to you by email."}
          </p>

          <ContactForm onSubmit={handleSubmit}>
            <input
              className="honeypot"
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <FormField>
              <span>{isPortuguese ? "Seu nome" : "Your name"}</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder={isPortuguese ? "Como posso te chamar?" : "What should I call you?"}
                maxLength={100}
                required
              />
            </FormField>
            <FormField>
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="voce@exemplo.com"
                maxLength={254}
                required
              />
            </FormField>
            <FormField>
              <span>{isPortuguese ? "Mensagem" : "Message"}</span>
              <textarea
                name="message"
                placeholder={isPortuguese ? "Escreva sua mensagem..." : "Write your message..."}
                rows={4}
                maxLength={3000}
                required
              />
            </FormField>
            <SubmitButton type="submit" disabled={isSending}>
              {isSending
                ? isPortuguese ? "Enviando..." : "Sending..."
                : isPortuguese ? "Enviar mensagem" : "Send message"}
            </SubmitButton>
            <FormStatus role="status" aria-live="polite" data-state={status}>
              {statusMessage}
            </FormStatus>
          </ContactForm>

          <OtherContactsContainer>
            <h3>{isPortuguese ? "Ou me encontre por aqui" : "Or find me here"}</h3>
            <ContactLinksContainer>
              <Reveal keyframes={customAnimationGitInst}>
                <a href="https://github.com/GabrielGCJ" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <img className="whiteIcon" src={gitImage} alt="" />
                </a>
              </Reveal>
              <Reveal keyframes={customAnimationLinkedin}>
                <a href="https://www.linkedin.com/in/gabriel-jorge-67635b221/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img className="whiteIcon" src={linkedinImage} alt="" />
                </a>
              </Reveal>
              <Reveal keyframes={customAnimationWhatsAppSpotify}>
                <a href="https://wa.me/5521988436194" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <img className="whiteIcon" src={whatsappImage} alt="" />
                </a>
              </Reveal>
            </ContactLinksContainer>
          </OtherContactsContainer>
        </ContactContainer>
      </Fade>
    </ContactGlobalContainer>
  );
};
