import { GlobalStyle } from '../styles/global';
import { Container, Main } from './styles';
import coracao from '../assets/coracao.png';

export default function Home() {
    return (
        <Main>
            <Container>
                <h1>Você é o elétron que faltava no meu proton</h1>
                <h1>e a nossa união cirou o nucleo atômico;</h1>
                <h1>a força forte *-*</h1>
            </Container>
            <Container>
                <img src="https://cdn.pixabay.com/animation/2023/01/08/01/22/01-22-40-685_512.gif" />
            </Container>
            <GlobalStyle />
        </Main>
    )
}