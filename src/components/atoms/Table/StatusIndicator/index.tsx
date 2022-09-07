import { StatusPoint } from "./styles";

interface IStatusIndicatorProps {
    status: "development" | "done";
}

const StatusIndicator = ({ status }: IStatusIndicatorProps) => {

    return (
        <>
            {status === "development" ? (
                <StatusPoint status="development" />
            ) : (
                <StatusPoint status="done" />
            )}
        </>
    )
}

export default StatusIndicator;