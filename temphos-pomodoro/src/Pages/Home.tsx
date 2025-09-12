import {
  HistoryIcon,
  HomeIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from "lucide-react";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Timer } from "../components/Timer";
import { Paragraph } from "../components/Paragraph";
import { Input } from "../components/Iput";
import { Container } from "../components/Container";

export function Home() {
  return (
    <>
      <Container>
        <Heading>
          {" "}
          <TimerIcon size={45} />{" "}
        </Heading>
      </Container>

      <Heading>Temphos</Heading>

      <Heading>
        <Button>
          {" "}
          <HomeIcon />{" "}
        </Button>
        <Button>
          {" "}
          <HistoryIcon />{" "}
        </Button>
        <Button>
          {" "}
          <SettingsIcon />{" "}
        </Button>
        <Button>
          {" "}
          <SunIcon />{" "}
        </Button>
      </Heading>

      <Timer>00:00</Timer>

      <Paragraph>task</Paragraph>

      <Input />
    </>
  );
}
