import ConfigurationIcon from "../../../atoms/Icons/ConfigurationIcon";
import Text from "../../../atoms/Text"

import { ButtonContainer } from "../styles";

interface IConfigurationButton {
    text: string;
}

const ConfigurationButton = ({ text }: IConfigurationButton) => {

    return (
        <ButtonContainer>
            <ConfigurationIcon />
            <Text text={text} />
        </ButtonContainer>
    )
}

export default ConfigurationButton