import { useForm } from "react-hook-form";
import gitImage from "../../assents/lateralMenu/github.svg";
import instagramImage from "../../assents/lateralMenu/instagram.svg";
import linkedinImage from "../../assents/lateralMenu/linkedin.svg";
import whatsappImage from "../../assents/lateralMenu/whatsapp.svg";
import spotifyImage from "../../assents/lateralMenu/spotify.svg";
import { useContext } from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import {
  ContactContainer,
  ContactGlobalContainer,
  ContactLinksContainer,
  DetailsInput,
  EmailInput,
  InputsContainer,
  NameInput,
  OtherContactsContainer,
  TelephoneInput,
} from "./styles";

export const Contact = () => {
  const { language } = useContext(PortfolioContext);
  const { register, handleSubmit, reset } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreateNewBuy = async (data: any) => {
    console.log(data);
    reset();
    // setinfo(data);
  };

  return (
    <form onSubmit={handleSubmit(handleCreateNewBuy)}>
      <ContactGlobalContainer>
        <ContactContainer>
          <h2>{language === "portuguese" ? "Contato" : "Contact"}</h2>
          <InputsContainer>
            <NameInput
              id="name"
              placeholder={language === "portuguese" ? "Nome" : "Name"}
              {...register("name", { required: true })}
            />
            <EmailInput
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <TelephoneInput
              id="telephone"
              type="tel"
              placeholder={language === "portuguese" ? "Telefone" : "Telephone"}
              {...register("telephone", { required: true })}
            />
            <DetailsInput
              id="details"
              placeholder={language === "portuguese" ? "Detalhes" : "Details"}
              {...register("details", { required: false })}
            />
            <button type="submit">
              {language === "portuguese" ? "Enviar" : "Submit"}
            </button>
          </InputsContainer>
          <OtherContactsContainer>
            <h3>
              {language === "portuguese" ? "Outros Contatos" : "Other contacts"}
            </h3>
            <ContactLinksContainer>
              <a
                className="cont1"
                href="https://github.com/GabrielGCJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="whiteIcon" src={gitImage} alt="" />
              </a>

              <a
                className="cont1"
                href="https://www.instagram.com/gb.j_dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="whiteIcon" src={instagramImage} alt="" />
              </a>

              <a
                className="cont2"
                href="https://www.linkedin.com/in/gabriel-jorge-67635b221/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="whiteIcon" src={linkedinImage} alt="" />
              </a>

              <a
                className="cont3"
                href="https://wa.me/5521988436194"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="whiteIcon" src={whatsappImage} alt="" />
              </a>

              <a
                className="cont3"
                href="https://open.spotify.com/user/ggcj.333?si=j5p0rC6TRpyt3OA3AtgHjQ&utm_source=copy-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="whiteIcon" src={spotifyImage} alt="" />
              </a>
            </ContactLinksContainer>
          </OtherContactsContainer>
        </ContactContainer>
      </ContactGlobalContainer>
    </form>
  );
};
