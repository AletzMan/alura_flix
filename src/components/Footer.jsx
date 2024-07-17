import { Logo } from "./Logos"
import styles from "./styles.module.css"

export function Footer() {

    return (
        <footer className={styles.footer}>
            <Logo />
        </footer>
    )
}