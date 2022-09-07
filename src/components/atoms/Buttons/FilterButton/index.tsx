import FilterIconImage from "../../../../assets/FilterIcon.svg"
import { Container } from "./styles";

const FilterButton = () => {

    return (
        <Container>
            <img src={FilterIconImage} />
            Filtros
        </Container>
    )
}

export default FilterButton;