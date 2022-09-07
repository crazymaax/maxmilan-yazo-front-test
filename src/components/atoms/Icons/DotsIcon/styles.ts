import styled from "styled-components";

export const Image = styled.img`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    cursor: pointer;
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: 0px 3px 6px #FD9F2B2F;
    }
`