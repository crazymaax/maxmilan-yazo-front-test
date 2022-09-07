import Title from "../../atoms/Title";

import ProjectTable from "../../organisms/ProjectTable"
import Aside from "../../organisms/Aside"

import { Container, Main } from "./styles";

interface IMyProjectsTemplateProps {
    data: Project[];
    title: string;
}

interface Project {
    name: string;
    status: string;
    product: string;
    startDate: string;
    endDate: string;
}

export const MyProjectsTemplate = ({ data, title }: IMyProjectsTemplateProps) => {

    return (
        <Container>
            <Aside />
            <Main>
                <Title text={title} />

                <ProjectTable projectList={data}/>
            </Main>
        </Container>
    )
}

export default MyProjectsTemplate;