import Aside from "../../components/organisms/Aside"
import MyProjectsOrganism from "../../components/organisms/MyProjectsOrganism"


import { Container } from "./styles"

const MyProjects = () => {

    return (
        <Container>
            <Aside />

            <MyProjectsOrganism />
        </Container>
    )
}

export default MyProjects