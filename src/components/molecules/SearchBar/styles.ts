import styled from "styled-components";

export const Input = styled.input`
    width: 303px;

    padding: 8px;
    padding-left: calc(16px + 16px);

    background-image:url('/src/assets/SearchIcon.svg');
    background-repeat: no-repeat;
    background-position: 5px calc(16px/2);
    
    border: none;
    border-bottom: 1px solid var(--black);
`