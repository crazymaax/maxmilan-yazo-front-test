import Title from "../../atoms/Title"

import TableMenu from "./TableMenu"
import TableRow from "./TableRow"

import { Main } from "./styles"
import TableHeader from "../../molecules/Table/TableHeader/indext"

export const MyProjectsOrganism = () => {

    return (
        <Main>
            <Title text="Meus projetos" />
            <TableMenu />

            <TableHeader />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
        </Main>
    )
}

export default MyProjectsOrganism