import FilterIconButton from "../../atoms/Buttons/FilterButton";
import NewProjectButton from "../../atoms/Buttons/NewProjectButton";

import SearchBar from "../../molecules/SearchBar";
import { Container } from "./styles";

export const TableMenu = () => {

    return (
        <Container>
            <div>
                <FilterIconButton />
                <SearchBar />
            </div>

            <NewProjectButton />
        </Container>
    )
}

export default TableMenu;