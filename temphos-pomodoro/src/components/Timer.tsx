import style from "./Timer.module.css";

type TimigProps = {
    children: React.ReactNode;
};

export function Timer( {children}: TimigProps) {
    return (
        <h1 className={style.timing}> {children} </h1>
    )
}