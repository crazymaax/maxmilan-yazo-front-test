import DashboardIcon from "../../../atoms/Icons/DashboardIcon"
import Text from "../../../atoms/Text"

import { ButtonContainer } from "../styles";

interface IDashboardButton {
    text: string;
}

const DashboardButton = ({ text }: IDashboardButton) => {

    return (
        <ButtonContainer>
            <DashboardIcon />
            <Text text={text}/>
        </ButtonContainer>
    )
}

export default DashboardButton