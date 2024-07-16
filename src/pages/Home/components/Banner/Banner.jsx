
import { URL_IMG } from "../../../../utils/const"
import { PlayIcon } from "../../../../components/Logos"
import styles from "./styles.module.css"

const movie = {
    "adult": false,
    "backdrop_path": "/91qfG6VaxRsCh1SbIi1w2vxknsL.jpg",
    "genre_ids": [
        16,
        35,
        10751
    ],
    "id": 863,
    "original_language": "en",
    "original_title": "Toy Story 2",
    "overview": "Cuando Andy se va de campamento dejando solos a los juguetes, Al McWhiggin, un compulsivo coleccionista de juguetes valiosos, secuestra a Woody. Buzz Lightyear y el resto de los juguetes de Andy deberán actuar con rapidez para rescatarlo, poniéndose al frente de una operación de rescate durante la cual se enfrentarán a múltiples peligros y divertidas situaciones.",
    "popularity": 233.764,
    "poster_path": "/8OTDKkJv2jXg5ZHKazFxBAttKkR.jpg",
    "release_date": "1999-10-30",
    "title": "Toy Story 2: los juguetes vuelven a la carga",
    "video": false,
    "vote_average": 7.597,
    "vote_count": 13553
}
export function Banner() {

    return (
        <article className={styles.banner}>
            <picture className={styles.banner_picture}>
                <div className={styles.banner_shadow}></div>
                <img className={styles.banner_image} src={URL_IMG.concat("w1280".concat(movie.backdrop_path))} />
            </picture>
            <div className={styles.container}>
                <div className={styles.details}>
                    <span className={styles.details_category}>Animación</span>
                    <h2 className={styles.details_title}>{movie.title}</h2>
                    <p className={styles.details_description}>{movie.overview}</p>
                </div>
                <picture className={styles.poster}>
                    <img className={styles.poster_image} src={URL_IMG.concat("w300".concat(movie.poster_path))} />
                    <PlayIcon className={styles.poster_play} />
                </picture>
            </div>
        </article>
    )
}