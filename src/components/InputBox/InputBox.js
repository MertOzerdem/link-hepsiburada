import styles from "./InputBox.module.scss";

const InputBox = ({ label, holder, onChange }) => {
	// let timer;
	// const setNewInput = (value, wait) => {
	// 	if (!timer) {
	// 		const timeout = setTimeout(() => {
	// 			onChange(value);
	// 		}, wait);
	// 	}
	// 	clearTimeout(timer);
	// 	timer = setTimeout(() => {
	// 		timer = null;
	// 	}, wait);
	// };

	return (
		<div className={styles.inputWrapper}>
			<label htmlFor="linkName" className={styles.label}>
				{label}:
			</label>
			<input
				type="text"
				id="linkName"
				name="linkName"
				placeholder={holder}
				className={styles.input}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	);
};

export default InputBox;
