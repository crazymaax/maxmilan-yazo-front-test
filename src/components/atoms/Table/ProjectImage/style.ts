import styled from "styled-components";

interface IconSrc {
    src: string;
}

export const Icon = styled.div<IconSrc>`
    width: 40px !important;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props) => props.src === "Pokedex" ? "var(--red)" : props.src === "Uber Clone" && "var(--yellow-800)"};
`