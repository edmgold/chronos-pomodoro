import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

export function App() {
  return (
    <>
      <Container>
        <Heading>Chronos</Heading>
      </Container>
      <Container>
        <Logo />
      </Container>
    </>
  );
}
