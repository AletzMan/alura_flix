import { useState } from "react"
import { isValidURL } from "../utils/helpers"

export function useValidationForm(props, isNew, HandleClose) {
    const [errors, setErrors] = useState({ id: "", title: "", poster_path: "", overview: "", release_date: "", backdrop_path: "", video: "", genre: "" })
    const [movie, setMovie] = useState({ ...props })


    const HandleChange = (e) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        setErrors({ ...errors, [name]: "" })
        setMovie({ ...movie, [name]: value })

    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const title = data.get("title")
        const genre = data.get("genre")
        const poster_path = data.get("poster_path")
        const video = data.get("video")
        const description = data.get("overview")
        if (!title || genre === "-- Seleccione una opción --" || !poster_path || !video || !description) {
            setErrors({
                id: "",
                title: title === "" ? "Este campo es requerido" : "",
                poster_path: poster_path === "" ? "Este campo es requerido" : "",
                overview: description === "" ? "Este campo es requerido" : "",
                release_date: "",
                backdrop_path: "",
                video: video === "" ? "Este campo es requerido" : "",
                genre: genre === "-- Seleccione una opción --" ? "Este campo es requerido" : ""
            })
        } else if (!isValidURL(poster_path)) {
            setErrors({ ...errors, poster_path: "La URL no es válida. Introduce una URL válida." })
        } else if (!isValidURL(video)) {
            setErrors({ ...errors, video: "La URL no es válida. Introduce una URL válida." })
        } else {
            if (isNew) {
                console.log("VIDEO NUEVO")
            } else {
                console.log("Actualizar VIDEO")
                HandleClose()
            }
        }
    }

    const HandleClear = () => {
        setErrors({ id: "", title: "", poster_path: "", overview: "", release_date: "", backdrop_path: "", video: "", genre: "" })
        setMovie({ id: "", title: "", poster_path: "", overview: "", release_date: "", backdrop_path: "", video: "", genre: "-- Seleccione una opción --" })
    }

    return {
        HandleSubmit,
        HandleChange,
        HandleClear,
        errors,
        movie
    }
}