import Image from "../../atoms/Image";
import DashboardButton from "../../atoms/Buttons/DashboardButton";
import MyProjectsButton from "../../atoms/Buttons/MyProjectsButton";
import MembersButton from "../../atoms/Buttons/MembersButton";
import ConfigurationButton from "../../atoms/Buttons/ConfigurationButton";
import ExitButton from "../../atoms/Buttons/ExitButton";

import { AsideContainer } from "./styles"
import AsideImage from "../../../assets/AsideImage.png"

const Aside = () => {

    return (
        <AsideContainer>
            <Image src={AsideImage} />

            <ul>
                <li>
                    <DashboardButton />
                </li>
                <li>
                    <MyProjectsButton />
                </li>
                <li>
                    <MembersButton />
                </li>
                <li>
                    <ConfigurationButton />
                </li>
            </ul>

            <ExitButton />
        </AsideContainer>
    )
}

export default Aside;