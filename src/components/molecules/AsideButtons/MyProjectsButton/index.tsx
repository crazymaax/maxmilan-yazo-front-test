import MyProjectsIcon from "../../../atoms/Icons/MyProjectsIcon";
import Text from "../../../atoms/Text"

import { ButtonContainer } from "../styles";

interface IMyProjectsButton {
    text: string;
}

const MyProjectsButton = ({ text }: IMyProjectsButton) => {

    return (
        <ButtonContainer isActive={true}>
            <MyProjectsIcon />
            <Text text={text} isActive={true}/>
        </ButtonContainer>
    )
}

export default MyProjectsButton