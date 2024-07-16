/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from "./styles.module.css"



export function Button(props) {
    return (
        <>
            {!props.href && <button className={`${styles.button} ${props.isSecondary && styles.button_secondary}`} onClick={props.onClick} type={props.type}>{props.text}</button>}
            {props.href && <Link to={props.href} className={`${styles.button} ${props.isSecondary && styles.button_secondary}`} onClick={props.onClick} type={props.type}>{props.text}</Link>}
        </>
    )
}