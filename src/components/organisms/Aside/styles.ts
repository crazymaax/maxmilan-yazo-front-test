import styled from "styled-components";

export const AsideContainer = styled.aside`
    width: 235px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;

    padding: 40px;
    padding-top: 80px;
    border: 1px solid #0000001A;

    li {
        & + li {
            margin-top: 8px;
        }
    }

`