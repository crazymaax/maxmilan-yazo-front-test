import styled from "styled-components";

export const AsideContainer = styled.aside`
    width: calc(235px - 80px - 2px); // Tamanho ideal - padding lateral - borda.
    height: calc(100vh - 120px); // 100vh - 40 paddingtop - 80 paddingbottom.

    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;

    padding: 40px;
    padding-top: 80px;
    border: 1px solid #0000001A;
    background-color: var(--white);
    
    position: fixed;
    z-index: 1;

    li {
        & + li {
            margin-top: 8px;
        }
    }

`