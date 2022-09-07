import { Route, Switch } from "react-router-dom";

import MyProjects from "../components/pages/MyProjects";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={MyProjects} />
        </Switch>
    )
}

export default Routes;