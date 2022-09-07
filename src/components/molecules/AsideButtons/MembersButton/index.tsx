import MembersIcon from "../../../atoms/Icons/MembersIcon";
import Text from "../../../atoms/Text"
import { ButtonContainer } from "../styles";

interface IMembersButton {
    text: string;
}

const MembersButton = ({ text }: IMembersButton) => {

    return (
        <ButtonContainer>
            <MembersIcon />
            <Text text={text} />
        </ButtonContainer>
    )
}

export default MembersButton