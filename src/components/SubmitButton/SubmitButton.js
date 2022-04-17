import styles from './SubmitButton.module.scss';

const SubmitButton = ({ buttonAction }) => {
    return (
        <div className={styles.buttonWrapper} onClick={buttonAction}>
            <button className={styles.button}>+</button>
            <p className={styles.label}>{'submit a link'.toUpperCase()}</p>
        </div>
    );
}

export default SubmitButton;