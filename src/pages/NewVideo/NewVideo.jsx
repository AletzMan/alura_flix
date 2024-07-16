import { Button } from "../../components/Button"
import { ComboBox } from "../../components/ComboBox"
import { TextArea } from "../../components/TextArea"
import { TextBox } from "../../components/TextBox"
import { useValidationForm } from "../../hooks/useValidationForm"
import styles from "./styles.module.css"

export function NewVideo() {
    const { HandleChange, HandleSubmit, HandleClear, errors, movie } = useValidationForm("", true)



    return (
        <section className={styles.section}>
            <h2 className={styles.section_title}>NUEVO VIDEO</h2>
            <h3 className={styles.section_subtitle}>Complete el formulario para crear una nueva tarjeta de video</h3>
            <h3 className={styles.section_create}>Crear tarjeta</h3>
            <form className={styles.form} onSubmit={HandleSubmit}>
                <fieldset className={styles.fieldset}>
                    <TextBox label="Título" name="title" error={errors.title} onChange={HandleChange} defaultValue={movie.title} />
                    <ComboBox label="Categoria" name="genre" error={errors.genre} onChange={HandleChange} options={Genres} />
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <TextBox label="Poster" name="poster_path" error={errors.poster_path} onChange={HandleChange} />
                    <TextBox label="Video" name="video" error={errors.video} onChange={HandleChange} />
                </fieldset>
                <TextArea label="Descripción" name="overview" error={errors.overview} onChange={HandleChange} />
                <fieldset className={styles.buttons}>
                    <Button text="GUARDAR" />
                    <Button text="LIMPIAR" isSecondary type="reset" onClick={HandleClear} />
                </fieldset>
            </form>
        </section>
    )
}

const Genres = [
    {
        value: "animation",
        name: "Animación"
    },
    {
        value: "action",
        name: "Acción"
    },
    {
        value: "comedy",
        name: "Comedia"
    },
]