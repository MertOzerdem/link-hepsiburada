import styles from './InputBox.module.scss';

const InputBox = ({ label, holder }) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor="linkName" className={styles.label}>{label}:</label>
            <input type="text" id="linkName" name="linkName" placeholder={holder} className={styles.input} />
        </div>
    )
}

export default InputBox;