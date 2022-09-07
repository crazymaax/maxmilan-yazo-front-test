import styled from "styled-components";

export const Container = styled.button`
    width: 125px;

    display: flex;
    justify-content: space-between;

    padding: 8px 16px;

    border-radius: 4px;
    background-color: var(--black);
    
    font-size: 12px;
    color: var(--white);

    transition: opacity 0.5s;
    &:hover {
        opacity: 0.9;
    }
`