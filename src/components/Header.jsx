
import { Logo } from "./Logos"
import { Button } from "./Button"
import styles from "./styles.module.css"
import { useResolvedPath } from "react-router-dom"

export function MainHeader() {
    const pathname = useResolvedPath()

    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.header_buttons}>
                <Button text="HOME" href="/" isSecondary={pathname.pathname !== "/"} />
                <Button text="NUEVO VIDEO" isSecondary={pathname.pathname !== "/new_video"} href="/new_video" />
            </div>
        </header>
    )
}