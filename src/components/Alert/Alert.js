import styles from './Alert.module.scss';

const Alert = ({ item, action }) => {
    return (
        <div className={styles.AlertWrapper}>
            <div className={`${styles.label} ${styles.item}`}>{typeof item === 'string' && item.toUpperCase()}&nbsp;</div>
            <div className={`${styles.label} ${styles.action}`}>{typeof action === 'string' && action}</div>
        </div>
    );
}

export default Alert;