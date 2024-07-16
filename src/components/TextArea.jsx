/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export function TextArea(props) {

    return (
        <fieldset className={styles.fieldset}>
            <label className={styles.fieldset_label}>{props.label}</label>
            <textarea
                type="text"
                className={`${styles.fieldset_input} ${props.error !== "" && styles.fieldset_inputError}`}
                name={props.name}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
            />
            <label className={`${styles.fieldset_error} ${props.error !== "" && styles.fieldset_errorView}`}>{props.error}</label>
        </fieldset>
    )
}