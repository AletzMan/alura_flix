/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { DeleteIcon, EditIcon } from "../../../../components/Logos"
import { Button } from "../../../../components/Button"
import { FormEdit } from "../FormEdit/FormEdit"

export function CategorySection(props) {
    const [movies, setMovies] = useState([])
    const [selectMovie, setSelectMovie] = useState({ id: "", title: "", poster_path: "", overview: "", release_date: "", backdrop_path: "", video: "", genre: "" })
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    useEffect(() => {
        const GetMovies = async () => {
            const response = await fetch(`http://localhost:3030/${props.category}`)
            const data = await response.json()
            setMovies(data)
        }
        GetMovies()
    }, [open])

    const HandleOpen = (movie) => {
        setSelectMovie({ id: movie.id, title: movie.title })
        setOpen(prev => !prev)
    }

    const HandleDelete = async () => {
        const response = await fetch(`http://localhost:3030/${props.category}/${selectMovie.id}`, {
            method: "DELETE"
        })
        if (response.ok) {
            setOpen(false)
        }
    }

    const HandleEdit = (movie) => {
        setSelectMovie(movie)
        setOpenEdit(prev => !prev)
    }

    return (
        <>
            <section className={styles.section}>
                <h2 className={`${styles.section_title}  ${props.category === "animation" && styles.title_animation} ${props.category === "action" && styles.title_action} ${props.category === "comedy" && styles.title_comedy}`}>{props.title}</h2>
                <div className={styles.movies}>
                    {movies.map(movie => (
                        <article className={`${styles.movie} ${props.category === "animation" && styles.movie_animation} ${props.category === "action" && styles.movie_action} ${props.category === "comedy" && styles.movie_comedy}`} key={movie.id}>
                            <img className={styles.movie_image} src={movie.poster_path} />
                            <div className={styles.movie_shadow}></div>
                            <span className={styles.movie_title}>{movie.title}</span>
                            <footer className={styles.movie_footer}>
                                <button className={styles.movie_button} onClick={() => HandleOpen(movie)} ><DeleteIcon className={styles.movie_icon} />Borrar</button>
                                <button className={`${styles.movie_button} ${styles.movie_buttonSecondary}`} onClick={() => HandleEdit(movie)}><EditIcon className={styles.movie_icon} />Editar</button>
                            </footer>
                        </article>
                    ))}
                </div>
            </section>
            {open &&
                <dialog className={styles.dialog} open>
                    <article className={styles.dialog_message}>
                        <p className={styles.dialog_text}>{`¿Desea eliminar la película?`}</p>
                        <p className={styles.dialog_text}>{`${selectMovie.title}`}</p>
                        <footer className={styles.dialog_footer}>
                            <Button text="Si" onClick={HandleDelete} />
                            <Button text="No" isSecondary onClick={HandleOpen} />
                        </footer>
                    </article>
                </dialog>
            }
            {openEdit &&
                <dialog className={styles.dialog} open>
                    <FormEdit HandleClose={HandleEdit} movie={selectMovie} />
                </dialog>
            }
        </>
    )
}

