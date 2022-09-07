import ConfigurationIconImage from "../../../../assets/ConfigurationIcon.svg"
import { ButtonContainer } from "../styles";

const ConfigurationButton = () => {

    return (
        <ButtonContainer>
            <img src={ConfigurationIconImage} />
            Configurações
        </ButtonContainer>
    )
}

export default ConfigurationButton;