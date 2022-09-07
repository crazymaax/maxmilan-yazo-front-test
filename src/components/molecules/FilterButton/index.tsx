import FilterIcon from "../../atoms/Icons/FilterIcon";
import Text from "../../atoms/Text";

import { Container } from "./styles";

interface IFilterButton {
    text: string;
}

const FilterButton = ({ text }: IFilterButton) => {

    return (
        <Container>
            <FilterIcon />
            <Text text={text} />
        </Container>
    )
}

export default FilterButton