import { Content } from "./styles";

interface ITitle {
    text: string;
}

const Title = ({text}: ITitle) => {

    return (
        <Content>{text}</Content>
    )
}

export default Title