import { Footer } from "../../components/Footer"
import { Banner } from "./components/Banner/Banner"
import { CategorySection } from "./components/CategorySection/CategorySection"
import styles from "./styles.module.css"


export function Home() {

    return (

        <section className={styles.section}>
            <Banner />
            <CategorySection title="Animación" category="animation" />
            <CategorySection title="Acción" category="action" />
            <CategorySection title="Comedia" category="comedy" />
            <Footer />
        </section>
    )
}