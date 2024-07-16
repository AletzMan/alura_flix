/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export function ComboBox(props) {

    return (
        <fieldset className={styles.fieldset}>
            <label className={styles.fieldset_label}>{props.label}</label>
            <select
                type="text"
                className={`${styles.fieldset_input} ${props.error !== "" && styles.fieldset_inputError}`}
                name={props.name}
                onChange={props.onChange}
                value={props.defaultValue}
            >
                <option value="-- Seleccione una opción --">-- Seleccione una opción --</option>
                {props?.options?.map(option => (
                    <option key={option.value} value={option.value}>{option.name}</option>
                ))
                }
            </select>
            <label className={`${styles.fieldset_error} ${props.error !== "" && styles.fieldset_errorView}`}>{props.error}</label>
        </fieldset>
    )
}