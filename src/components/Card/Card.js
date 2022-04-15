import styles from './Card.module.scss';

const Card = ({ children, className, ...props }) => {
    return (
        <div className={`${styles.cardWrapper} ${className || ''}`} {...props}>
            <div className={styles.card}>
                {children}
            </div>
        </div>
    );
}

export default Card;