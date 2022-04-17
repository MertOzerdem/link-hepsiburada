import styles from "./LabelGenerator.module.scss";

const LabelGenerator = ({ labelSettings }) => {
	if (!labelSettings) {
		throw new Error("LabelGenerator: labelSettings is required");
	} else if (!labelSettings.label) {
        throw new Error("LabelGenerator: labelSettings.label is required");
    } else if (!labelSettings.generateTarget) {
		throw new Error("LabelGenerator: labelSettings.generateTarget is required");
	}

	return labelSettings.generateTarget.map((item, key) => {
		if (!item.target) {
			throw new Error("LabelGenerator: labelSettings.generateTarget.target is required");
		} else if (!item.component) {
			throw new Error("LabelGenerator: labelSettings.generateTarget.component is required");
		}

		let labels = labelSettings.label.split(item.target);

		return (
			<div key={key} className={styles.center} data-testid="label-generator">
				<div className={styles.inline}>{labels.shift()}</div>
				{item.component}
				<div className={styles.inline}>{labels.shift()}</div>
			</div>
		);
	});
};

export default LabelGenerator;
