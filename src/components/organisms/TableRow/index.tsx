import CheckBox from "../../atoms/CheckBox";
import DotsIcon from "../../atoms/Icons/DotsIcon";
import Text from "../../atoms/Text";

import ProjectName from "../../molecules/Table/ProjectName";
import ProjectStatus from "../../molecules/Table/ProjectStatus";

import { Container } from "./styles";

interface ITableRowProps {
    name: string;
    status: string;
    product: string;
    startDate: string;
    endDate: string;
}

export const TableRow = ({ name, status, product, startDate, endDate }: ITableRowProps) => {

    return (
        <Container>
            <CheckBox />
            <ProjectName name={name} src={name}/>
            <ProjectStatus status={status} />
            <Text text={product} />
            <Text text={startDate} />
            <Text text={endDate} />
            <DotsIcon />
        </Container>
    )
}

export default TableRow;