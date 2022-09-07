import ProjectIcon from "../../../atoms/Table/ProjectIcon";
import Text from "../../../atoms/Text";

import { Container } from "./styles";

const ProjectName = () => {

    return (
        <Container>
            <ProjectIcon />
            <Text text="Pokedex"/>
        </Container>
    )
}

export default ProjectName;