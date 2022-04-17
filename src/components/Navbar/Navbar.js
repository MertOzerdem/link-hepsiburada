import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar} data-testid="navbar">
            <header className={styles.header}>hepsiburada
                <span className={styles.span}>.com</span>
            </header>
            <h5 className={styles.sideLink}>
                <span className={styles.span}>Link</span>
                Vote Challenge
            </h5>
        </nav>
    )
}

export default Navbar;