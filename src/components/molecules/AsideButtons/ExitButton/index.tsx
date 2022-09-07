import ExitIcon from "../../../atoms/Icons/ExitIcon";
import Text from "../../../atoms/Text"

import { ButtonContainer } from "../styles";

interface IExitButton {
    text: string;
}

const ExitButton = ({ text }: IExitButton) => {

    return (
        <ButtonContainer exitButton={true}>
            <ExitIcon />
            <Text text={text} />
        </ButtonContainer>
    )
}

export default ExitButton;