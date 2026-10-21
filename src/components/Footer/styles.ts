import styled from "styled-components"

export const FooterContainer = styled.footer`
    width: 100%;
    background: #101014;
    border-top: 1px solid rgba(190, 151, 255, 0.18);
    color: rgba(255, 255, 255, 0.68);
    font-family: ${({ theme }) => theme.fonts.roboto};
`

export const FooterContent = styled.div`
    width: min(100% - 3rem, 76rem);
    min-height: 6.25rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    @media (max-width: 600px) {
        width: min(100% - 2rem, 76rem);
        min-height: auto;
        padding: 1.5rem 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.15rem;
    }
`

export const FooterIdentity = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    .brand {
        color: #fff;
        font-size: 0.95rem;
        font-weight: 700;
        letter-spacing: 0.02em;
    }

    .role {
        color: rgba(255, 255, 255, 0.55);
        font-size: 0.78rem;
    }
`

export const FooterMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 0.76rem;

    @media (max-width: 600px) {
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.85rem;
        font-size: 0.72rem;
    }
`

export const FooterLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: #c6a2ff;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    transition: color 160ms ease;

    span {
        font-size: 1rem;
        transition: transform 160ms ease;
    }

    &:hover {
        color: #e0ccff;

        span {
            transform: translateY(-2px);
        }
    }

    &:focus-visible {
        outline: 2px solid #c6a2ff;
        outline-offset: 4px;
        border-radius: 2px;
    }
`
