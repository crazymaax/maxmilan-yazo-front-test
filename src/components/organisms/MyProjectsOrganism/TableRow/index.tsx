import CheckBox from "../../../atoms/CheckBox";
import DotsIcon from "../../../atoms/Icons/DotsIcon";
import Text from "../../../atoms/Text";

import ProjectName from "../../../molecules/Table/ProjectName";
import ProjectStatus from "../../../molecules/Table/ProjectStatus";

import { Container } from "./styles";

export const TableRow = () => {

    return (
        <Container>
            <CheckBox />
            <ProjectName />
            <ProjectStatus status="development" />
            <Text text="Web" />
            <Text text="26/08/2022" />
            <Text text="-" />
            <DotsIcon />
        </Container>
    )
}

export default TableRow;