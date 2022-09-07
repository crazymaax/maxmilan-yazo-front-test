import ExitIconImage from "../../../../assets/ExitIcon.svg"
import { ButtonContainer } from "../styles";

const ExitButton = () => {

    return (
        <ButtonContainer exitButton={true}>
            <img src={ExitIconImage} />
            Sair
        </ButtonContainer>
    )
}

export default ExitButton;