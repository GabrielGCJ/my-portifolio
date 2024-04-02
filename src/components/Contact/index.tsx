import { useForm } from "react-hook-form";
import gitImage from "../../assents/lateralMenu/github.svg";
import instagramImage from "../../assents/lateralMenu/instagram.svg";
import linkedinImage from "../../assents/lateralMenu/linkedin.svg";
import whatsappImage from "../../assents/lateralMenu/whatsapp.svg";
import spotifyImage from "../../assents/lateralMenu/spotify.svg";
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

// import { useContext } from "react";
// import { PortfolioContext, infoContact } from "../../contexts/PortfolioContext";

export const Contact = () => {
  // const { setinfo } = useContext(PortfolioContext);
  const { register, handleSubmit, reset } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreateNewBuy = async (data: any) => {
    console.log(data);
    reset()
    // setinfo(data);
  };

  return (
    <form onSubmit={handleSubmit(handleCreateNewBuy)}>
      <ContactGlobalContainer>
        <ContactContainer>
          <h2>Contato</h2>
          <InputsContainer>
            <NameInput
              // style={{ color: 'white' }}
              id="name"
              // name="name"
              placeholder="Nome"
              {...register("name", { required: true })}
            />
            <EmailInput
              id="email"
              // name="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <TelephoneInput
              id="telephone"
              // name="telephone"
              type="tel"
              placeholder="Telefone"
              {...register("telephone", { required: true })}
            />
            <DetailsInput
              id="details"
              // name="details"
              placeholder="Detalhes"
              {...register("details", { required: true })}
            />
            <button type="submit">Enviar</button>
          </InputsContainer>
          <OtherContactsContainer>
            <h3>Outros Contatos</h3>
            <ContactLinksContainer>
              <a href="https://github.com/GabrielGCJ" target="_blank">
                <img className="whiteIcon" src={gitImage} alt="" />
              </a>

              <a href="https://www.instagram.com/gb.j_dev/" target="_blank">
                <img className="whiteIcon" src={instagramImage} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-jorge-67635b221/"
                target="_blank"
              >
                <img className="whiteIcon" src={linkedinImage} alt="" />
              </a>
              <a href="https://wa.me/5521988436194" target="_blank">
                <img className="whiteIcon" src={whatsappImage} alt="" />
              </a>
              <a
                href="https://open.spotify.com/user/ggcj.333?si=j5p0rC6TRpyt3OA3AtgHjQ&utm_source=copy-link"
                target="_blank"
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
