import TableHeader from "../../molecules/Table/TableHeader";

import TableRow from "../TableRow";
import TableMenu from "../TableMenu";

interface IProjectTableProps {
    projectList: Project[];
}

interface Project {
    name: string;
    status: string;
    product: string;
    startDate: string;
    endDate: string;
}

const ProjectTable = ({ projectList }: IProjectTableProps) => {

    return (
        <>
            <TableMenu />
            <TableHeader />

            <div>
                {projectList.map((project, index) => {
                    const { name, status, product, startDate, endDate } = project

                    return (
                        <TableRow
                            key={index}
                            name={name}
                            status={status}
                            product={product}
                            startDate={startDate}
                            endDate={endDate}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ProjectTable;