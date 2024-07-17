import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { CreateIcon, HomeIcon } from "./Logos"
import { useResolvedPath } from "react-router-dom"

export function MenuMobile() {
    const pathname = useResolvedPath()
    return (
        <nav className={styles.menuMobile}>
            <Link className={`${styles.menuMobile_link} ${pathname.pathname === "/" && styles.menuMobile_linkActive}`} to={"/"} >
                <HomeIcon className={styles.menuMobile_icon} />
                {pathname.pathname === "/" && "Home"}
            </Link>
            <Link className={`${styles.menuMobile_link} ${pathname.pathname === "/new_video" && styles.menuMobile_linkActive}`} to={"/new_video"} >
                <CreateIcon className={styles.menuMobile_icon} />
                {pathname.pathname === "/new_video" && "Nuevo vídeo"}
            </Link>
        </nav>
    )
}