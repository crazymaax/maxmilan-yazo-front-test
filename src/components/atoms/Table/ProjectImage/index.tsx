import { Icon } from "./style";

interface IProjectImageProps {
    src: string;
}

const ProjectImage = ({ src }: IProjectImageProps) => {

    return (
        <Icon src={src}>
            {/* <img src="" alt="" /> */} 
            {/* Imagino que aqui esteja a imagem do projeto, portanto deveria haver uma tag <img/> aqui, entretanto foi decido passar para o styled-components para este exemplo. */}

        </Icon>
    )
}

export default ProjectImage;