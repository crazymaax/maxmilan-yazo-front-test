import styled from "styled-components";

interface IContentProps {
    isActive?: boolean;
}

export const Content = styled.span<IContentProps>`
    font-weight: bold;
    color: ${(props)=> props.isActive ? "var(--red)" : "var(--black)"};
    opacity: ${(props)=> props.isActive ? "1" : "0.75"};
`