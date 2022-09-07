import { StatusPoint } from "./styles";

interface IStatusIndicatorProps {
    status: string;
}

const StatusIndicator = ({ status }: IStatusIndicatorProps) => {

    return (
        <>
            {status === "Desenvolvimento" ? (
                <StatusPoint status="Desenvolvimento" />
            ) : (
                <StatusPoint status="Concluído" />
            )}
        </>
    )
}

export default StatusIndicator;