import styles from './AddLinkView.module.scss';
import Card from '../../components/Card/Card';
import InputBox from '../../components/InputBox/InputBox';

const AddLinkView = ({ returnAddress }) => {
    return (
        <Card>
            <div className={styles.addLinkWrapper}>
                {/* add arrow svg later */}
                <div className={styles.returnButton}>
                    <svg className={styles.arrow} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 13.5C26.8284 13.5 27.5 12.8284 27.5 12C27.5 11.1716 26.8284 10.5 26 10.5V13.5ZM0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z" fill="black" />
                    </svg>
                    Return to {returnAddress}</div>
                <h2 className={styles.label}>Add New Link</h2>

                <InputBox label={'Link Name'} holder={'e.g. Alphabet'} />
                <InputBox label={'Link URL'} holder={'e.g. http://abc.xyz'} />

                <div className={styles.addButtonWrapper}>
                    <div className={styles.addButton}>ADD</div>
                </div>
            </div>
        </Card>
    )
}

export default AddLinkView;