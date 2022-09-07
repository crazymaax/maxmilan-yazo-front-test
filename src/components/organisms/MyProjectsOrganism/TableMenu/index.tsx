import FilterIconButton from "../../../molecules/FilterButton";
import NewProjectButton from "../../../molecules/NewProjectButton";
import SearchBar from "../../../molecules/SearchBar";
import { Container } from "./styles";

export const TableMenu = () => {

    return (
        <Container>
            <div>
                <FilterIconButton text="Filtros" />
                <SearchBar />
            </div>

            <NewProjectButton text="Novo projeto" />
        </Container>
    )
}

export default TableMenu;