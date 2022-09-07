import Image from "../../atoms/Image";

import DashboardButton from "../../molecules/AsideButtons/DashboardButton";
import MyProjectsButton from "../../molecules/AsideButtons/MyProjectsButton";
import MembersButton from "../../molecules/AsideButtons/MembersButton";
import ConfigurationButton from "../../molecules/AsideButtons/ConfigurationButton";

import { AsideContainer } from "./styles"
import AsideImage from "../../../assets/AsideImage.png"
import ExitButton from "../../molecules/AsideButtons/ExitButton";


const Aside = () => {

    return (
        <AsideContainer>
            <Image src={AsideImage} />

            <ul>
                <li>
                    <DashboardButton text="Dashboard" />
                </li>
                <li>
                    <MyProjectsButton text="Meus Projetos" />
                </li>
                <li>
                    <MembersButton text="Membros" />
                </li>
                <li>
                    <ConfigurationButton text="Configurações" />
                </li>
            </ul>

            <ExitButton text="Sair"/>
        </AsideContainer>
    )
}

export default Aside;