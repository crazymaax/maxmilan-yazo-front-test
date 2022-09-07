import NewProjectIcon from "../../atoms/Icons/NewProjectIcon";
import Text from "../../atoms/Text";

import { Container } from "./styles";

interface INewProjectButton {
    text: string;
}

const NewProjectButton = ({ text }: INewProjectButton) => {

    return (
        <Container>
            <NewProjectIcon />
            <Text text={text} />
        </Container>
    )
}

export default NewProjectButton