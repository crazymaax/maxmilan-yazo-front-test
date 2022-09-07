import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    font-weight: bold;
    opacity: 0.75;

    cursor: pointer;
    
    transition: all 0.3s;
    
    &:hover {
        box-shadow: 0px 3px 6px #FD9F2B2F;
        opacity: 0.9;
    }
`