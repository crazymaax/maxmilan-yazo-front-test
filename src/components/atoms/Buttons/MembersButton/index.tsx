import MembersIconImage from "../../../../assets/MembersIcon.svg"
import { ButtonContainer } from "../styles";

const MembersButton = () => {

    return (
        <ButtonContainer>
            <img src={MembersIconImage} />
            Membros
        </ButtonContainer>
    )
}

export default MembersButton;