import { BackIcon, Container, Text } from "./styles";


type Props = {
    title: string
}

export function TextHeader({title}: Props){
return (
    <Container>
        <BackIcon  size={15} color='#333638'/>
        <Text>{title}</Text>
    </Container>
)

}