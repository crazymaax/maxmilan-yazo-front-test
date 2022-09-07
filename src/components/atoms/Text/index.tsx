import { Content } from "./styles"

interface IText {
    text: string;
    isActive?: boolean;
}

const Text = ({ text, isActive }: IText) => {

    return (
        <Content isActive={isActive}>{text}</Content>
    )
}

export default Text;