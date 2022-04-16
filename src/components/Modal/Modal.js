import styles from "./Modal.module.scss";

const Modal = ({
    label = "Modal Label",
    text = "Modal Text",
    textBold = "Modal Text Bold",
    positive = "Yes",
    negative = "No",
    positiveClick = () => { },
    negativeClick = () => { },
}) => {
    return (
        <>
            <div className={styles.modalWrapper}>
                <div className={styles.labelWrapper}>
                    <div className={styles.label}>{label}</div>
                    <div className={styles.close}>X</div>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.textWrapper}>
                        <div className={styles.text}>{text}</div>
                        <div className={styles.textBold}>{textBold}</div>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <div className={styles.button} onClick={positiveClick}>{positive}</div>
                        <div className={styles.button} onClick={negativeClick}>{negative}</div>
                    </div>
                </div>
            </div>
            <div className={styles.overlay} />
        </>
    );
};

export default Modal;
