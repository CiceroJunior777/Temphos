import { Input } from "../components/Input";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { CountDown } from "../components/CountDown";

export function Home() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Input />
    </>
  );
}
