import CheckBox from "../../../atoms/CheckBox";
import Text from "../../../atoms/Text";

import { Container } from "./styles";

const TableHeader = () => {

    return (
        <Container>
            <CheckBox />
            <Text text="Projeto" />
            <Text text="Status" />
            <Text text="Produto(s)" />
            <Text text="Início do projeto" />
            <Text text="Término do projeto" />
        </Container>
    )
}

export default TableHeader;