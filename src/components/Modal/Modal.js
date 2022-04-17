import styles from "./Modal.module.scss";

const Modal = ({
	header = "Modal header",
	text = "Modal Text",
	label = "Modal Label",
	positive = "Yes",
	negative = "No",
	onClickPositive = () => {},
	onClickNegative = () => {},
}) => {
	return (
		<>
			<div className={styles.modalWrapper}>
				<div className={styles.headerWrapper}>
					<div className={styles.header}>{header}</div>
					<div className={styles.close} onClick={onClickNegative}>
						X
					</div>
				</div>
				<div className={styles.contentWrapper}>
					<div className={styles.textWrapper}>
						<div className={styles.text}>{text}</div>
						<div className={styles.label}>{label}</div>
					</div>
					<div className={styles.buttonWrapper}>
						<div className={styles.button} onClick={onClickPositive} data-testid="positive">
							{positive}
						</div>
						<div className={styles.button} onClick={onClickNegative} data-testid="negative">
							{negative}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.overlay} />
		</>
	);
};

export default Modal;
