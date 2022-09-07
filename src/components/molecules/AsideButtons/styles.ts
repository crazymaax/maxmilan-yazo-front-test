import styled from "styled-components";

interface IButtonContainer {
    isActive?: boolean;
    exitButton?: boolean;
}

export const ButtonContainer = styled.button<IButtonContainer>`
    width:  ${(props) => !props.exitButton && "100%"};

    display: flex;
    gap: 8px;

    padding: 16px;
    padding-right: 25px;

    border-radius: 8px;
    border: transparent;
    background-color: ${(props) => props.isActive ? "rgba(129, 27, 57, 0.1)" : "transparent"}; // rgba é equivalente ao hex, somente foi atribuído o alpha.

    transition: all 0.5s;
    &:hover {
        
        background-color: ${(props) => !props.exitButton && "rgba(129, 27, 57, 0.1)"};

        span {
            color: var(--red);
            opacity: 1;
        }

        img {
            filter: ${(props) => !props.isActive && "invert(15%) sepia(66%) saturate(2229%) hue-rotate(318deg) brightness(95%) contrast(97%)"}
            
        }
    }
`