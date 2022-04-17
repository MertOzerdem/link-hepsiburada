import styles from './LabelGenerator.module.scss';

const LabelGenerator = ({ labelSettings }) => {

    return (
        labelSettings.generateTarget.map((item, key) => {
            let labels = labelSettings.label.split(item.target);

            return (
                <div key={key} className={styles.center}>
                    <div className={styles.inline}>{labels.shift()}</div>
                    {item.component}
                    <div className={styles.inline}>{labels.shift()}</div>
                </div>
            )
        })
    )
}

export default LabelGenerator;