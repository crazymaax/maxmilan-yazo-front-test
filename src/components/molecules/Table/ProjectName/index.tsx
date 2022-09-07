import ProjectImage from "../../../atoms/Table/ProjectImage";
import Text from "../../../atoms/Text";

import { Container } from "./styles";

interface IProjectName {
    name: string;
    src: string;
}

const ProjectName = ({ name, src }: IProjectName) => {

    return (
        <Container>
            <ProjectImage src={src}/>
            <Text text={name} />
        </Container>
    )
}

export default ProjectName;