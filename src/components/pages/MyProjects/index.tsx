import MyProjectsTemplate from "../../templates/MyProjects"

import data from "./data.json";

const MyProjects = () => {

    return (
        <MyProjectsTemplate
            data={data.projectList}
            title="Meus projetos"
        />
    )
}

export default MyProjects;