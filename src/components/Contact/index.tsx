import { useForm } from "react-hook-form";
import {
  ContactContainer,
  ContactGlobalContainer,
  DetailsInput,
  EmailInput,
  InputsContainer,
  NameInput,
  TelephoneInput,
} from "./styles";
// import { useContext } from "react";
// import { PortfolioContext, infoContact } from "../../contexts/PortfolioContext";

export const Contact = () => {
  // const { setinfo } = useContext(PortfolioContext);
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreateNewBuy = async (data: any) => {
    console.log(data);
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
        </ContactContainer>
      </ContactGlobalContainer>
    </form>
  );
};
