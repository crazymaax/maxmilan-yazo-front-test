import DashboardIconImage from "../../../../assets/DashboardIcon.svg"
import { ButtonContainer } from "../styles";

const DashboardButton = () => {

    return (
        <ButtonContainer>
            <img src={DashboardIconImage} />
            Dashboard
        </ButtonContainer>
    )
}

export default DashboardButton