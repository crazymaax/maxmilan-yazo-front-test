import styled from "styled-components";

interface IStatusPoint {
    status: "Desenvolvimento" | "Concluído";
}

export const StatusPoint = styled.div<IStatusPoint>`
    width: 8px !important;
    height: 8px;

    background-color: ${(props)=> props.status === "Desenvolvimento" ? "var(--yellow-700)" : "var(--green)"};
    border-radius: 50%;

`