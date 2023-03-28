import { GlobalStyle } from '../styles/global';
import { Container, Main } from '../components/styles';

function Home() {
    return (
        <Main>
            <Container>
                <h1>Você é o elétron que faltava no meu proton</h1>
                <h1>e a nossa união criou o nucleo atômico</h1>
                <h1>a força forte</h1>
                <h1>*-*</h1>
            </Container>
            <Container>
                <img src="https://cdn.pixabay.com/animation/2023/01/08/01/22/01-22-40-685_512.gif" />
            </Container>
            <GlobalStyle />
        </Main>
    )
}

export default Home;