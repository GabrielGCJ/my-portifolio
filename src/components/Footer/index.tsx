import { FooterContainer, FooterContent, FooterIdentity, FooterLink, FooterMeta } from "./styles"

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <FooterContainer>
            <FooterContent>
                <FooterIdentity>
                    <span className="brand">Gabriel Jorge</span>
                    <span className="role">Desenvolvedor Full-Stack</span>
                </FooterIdentity>

                <FooterMeta>
                    <span>© {year} Gabriel Jorge. Todos os direitos reservados.</span>
                    <FooterLink href="/" aria-label="Voltar para o início">
                        Voltar ao início <span aria-hidden="true">↑</span>
                    </FooterLink>
                </FooterMeta>
            </FooterContent>
        </FooterContainer>
    )
}
