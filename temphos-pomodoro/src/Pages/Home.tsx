import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";


export function Home() {
    return (
        <>
            <Heading>
                <TimerIcon size={45} />
            </Heading>

            <Heading>
                Temphos
            </Heading>

            <Heading>
                <Button> <HomeIcon /> </Button>
                <Button> <HistoryIcon /> </Button>
                <Button> <SettingsIcon /> </Button>
                <Button> <SunIcon /> </Button>
            </Heading>

        </>
    )
}   