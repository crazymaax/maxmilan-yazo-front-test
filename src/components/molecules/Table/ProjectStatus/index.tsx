import StatusIndicator from "../../../atoms/Table/StatusIndicator";
import Text from "../../../atoms/Text";
import { Container } from "./styles";

interface IProjectStatus {
    status: "development" | "done";
}

const ProjectStatus = ({ status }: IProjectStatus) => {

    return (
        <Container>
            <StatusIndicator status={status} />
            <Text text="Desenvolvimento" />
        </Container>
    )
}

export default ProjectStatus;