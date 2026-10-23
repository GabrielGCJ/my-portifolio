import styled from "styled-components"
import { Link } from "react-router-dom"

export const FooterContainer = styled.footer`
    width: 100%;
    background: #101014;
    border-top: 1px solid rgba(190, 151, 255, 0.18);
    color: rgba(255, 255, 255, 0.68);
    font-family: ${({ theme }) => theme.fonts.roboto};
`

export const FooterContent = styled.div`
    width: min(100% - 3rem, 76rem);
    margin: 0 auto;
    padding: 0.75rem 0 0;

    @media (max-width: 600px) {
        width: min(100% - 2rem, 76rem);
        padding-top: 0.5rem;
    }
`

export const FooterTop = styled.div`
    min-height: 4.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    @media (max-width: 600px) {
        min-height: 4rem;
        gap: 1rem;
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

export const FooterActions = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.76rem;

    @media (max-width: 600px) {
        gap: 0.7rem;
    }
`

export const FooterMeta = styled.div`
    min-height: 2.65rem;
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.42);
    font-size: 0.7rem;

    @media (max-width: 600px) {
        min-height: 2.4rem;
        font-size: 0.66rem;
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

export const FooterChessLink = styled(Link)`
    display: inline-grid;
    flex: 0 0 auto;
    width: 2rem;
    height: 2rem;
    place-items: center;
    color: rgba(218, 197, 255, 0.66);
    background: rgba(198, 162, 255, 0.055);
    border: 1px solid rgba(198, 162, 255, 0.16);
    border-radius: 0.65rem;
    text-decoration: none;
    transition: color 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;

    svg {
        width: 1.1rem;
        height: 1.1rem;
        stroke: currentColor;
        stroke-width: 1.45;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: transform 180ms ease;
    }

    &:hover {
        color: #e3d1ff;
        background: rgba(155, 105, 230, 0.16);
        border-color: rgba(198, 162, 255, 0.42);
        box-shadow: 0 0 16px rgba(155, 105, 230, 0.14);
        transform: translateY(-2px);

        svg { transform: scale(1.08); }
    }

    &:focus-visible {
        outline: 2px solid #c6a2ff;
        outline-offset: 3px;
        border-radius: 2px;
    }
`
