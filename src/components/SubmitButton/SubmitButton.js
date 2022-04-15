import styles from './SubmitButton.module.scss';

const SubmitButton = () => {
    return (
        <div className={styles.buttonWrapper}>
            <button className={styles.button}>+</button>
            <p className={styles.label}>{'submit a link'.toUpperCase()}</p>
        </div>
    );
}

export default SubmitButton;