import NewProjectImage from "../../../../assets/NewProjectIcon.svg"
import { Container } from "./styles";

const NewProjectButton = () => {

    return (
        <Container>
            <img src={NewProjectImage} />
            Novo Projeto
        </Container>
    )
}

export default NewProjectButton;