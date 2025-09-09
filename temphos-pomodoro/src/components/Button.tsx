import style from "./Button.module.css"

type ButtonProps = {
    children: React.ReactNode;
}

export function Button ( {children}: ButtonProps ) {
    return (
        <button className= {style.button}>{children}</button>
    )
}