import { FooterContainer, FooterContent, FooterTop, FooterIdentity, FooterActions, FooterLink, FooterMeta, FooterChessLink } from "./styles"

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <FooterContainer>
            <FooterContent>
                <FooterTop>
                    <FooterIdentity>
                        <span className="brand">Gabriel Jorge</span>
                        <span className="role">Desenvolvedor Full-Stack</span>
                    </FooterIdentity>
                    <FooterActions aria-label="Links do rodapé">
                        <FooterChessLink to="/xadrez" aria-label="Ir para a página de xadrez" title="Xadrez">
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="5.25" r="2.65" />
                                <path d="M10.15 8.08c.22 2.37-.83 3.72-2.54 5.37h8.78c-1.71-1.65-2.76-3-2.54-5.37" />
                                <path d="M7.55 13.45c-.47 1.67-1.28 2.82-2.8 3.94v1.35h14.5v-1.35c-1.52-1.12-2.33-2.27-2.8-3.94" />
                                <path d="M4.75 21h14.5" />
                            </svg>
                        </FooterChessLink>
                        <FooterLink href="/" aria-label="Voltar para o início">
                            Voltar ao início <span aria-hidden="true">↑</span>
                        </FooterLink>
                    </FooterActions>
                </FooterTop>
                <FooterMeta>
                    <span>© {year} Gabriel Jorge. Todos os direitos reservados.</span>
                </FooterMeta>
            </FooterContent>
        </FooterContainer>
    )
}
