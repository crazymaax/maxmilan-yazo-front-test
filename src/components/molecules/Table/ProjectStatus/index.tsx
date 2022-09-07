import StatusIndicator from "../../../atoms/Table/StatusIndicator";
import Text from "../../../atoms/Text";
import { Container } from "./styles";

interface IProjectStatusProps {
    status: string;
}

const ProjectStatus = ({ status }: IProjectStatusProps) => {

    return (
        <Container>
            <StatusIndicator status={status} />
            <Text text={status} />
        </Container>
    )
}

export default ProjectStatus;