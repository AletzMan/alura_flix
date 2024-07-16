/* eslint-disable react/prop-types */
//import { useState } from "react"
import { Button } from "../../../../components/Button"
import { ComboBox } from "../../../../components/ComboBox"
import { CloseIcon } from "../../../../components/Logos"
import { TextArea } from "../../../../components/TextArea"
import { TextBox } from "../../../../components/TextBox"
import styles from "./styles.module.css"
//import { isValidURL } from "../../../../utils/helpers"
import { useValidationForm } from "../../../../hooks/useValidationForm"

export function FormEdit(props) {
    const { HandleChange, HandleSubmit, HandleClear, errors, movie } = useValidationForm(props.movie, false, props.HandleClose)

    return (
        <form className={styles.form} onSubmit={HandleSubmit}>
            <button className={styles.form_button} onClick={props.HandleClose}><CloseIcon className={styles.form_icon} /></button>
            <h3 className={styles.form_title}>Editar película</h3>
            <TextBox label="Título" error={errors.title} name="title" onChange={HandleChange} defaultValue={movie.title} />
            <ComboBox label="Género" error={errors.genre} name="genre" options={Genres} onChange={HandleChange} defaultValue={movie.genre} />
            <TextBox label="Poster" error={errors.poster_path} name="poster_path" onChange={HandleChange} defaultValue={movie.poster_path} />
            <TextBox label="Vídeo" error={errors.video} name="video" onChange={HandleChange} defaultValue={movie.video} />
            <TextArea label="Descripción" error={errors.overview} name="overview" onChange={HandleChange} defaultValue={movie.overview} />
            <fieldset className={styles.form_footer}>
                <Button text="GUARDAR" />
                <Button text="LIMPIAR" isSecondary type="reset" onClick={HandleClear} />
            </fieldset>
        </form>
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