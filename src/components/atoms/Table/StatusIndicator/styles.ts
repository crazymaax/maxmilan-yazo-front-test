import styled from "styled-components";

interface IStatusPoint {
    status: "development" | "done";
}

export const StatusPoint = styled.div<IStatusPoint>`
    width: 8px;
    height: 8px;

    background-color: ${(props)=> props.status === "development" ? "var(--yellow-700)" : "var(--green)"};
    border-radius: 50%;

`