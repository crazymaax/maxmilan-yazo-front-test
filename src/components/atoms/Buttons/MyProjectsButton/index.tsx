import MyProjectsIconImage from "../../../../assets/MyProjectsIcon.svg"
import { ButtonContainer } from "../styles";

const MyProjectsButton = () => {

    return (
        <ButtonContainer isActive={true}>
            <img src={MyProjectsIconImage} />
            Meus projetos
        </ButtonContainer>
    )
}

export default MyProjectsButton;