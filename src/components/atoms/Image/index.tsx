import { Img } from "./styles";

interface IImage {
    src: string;
    altText?: string;
}

const Image = ({ src, altText }: IImage) => {

    return (
        <Img
            src={src}
            alt={altText}
        />
    )
}

export default Image