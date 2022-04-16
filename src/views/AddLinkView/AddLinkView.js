import styles from './AddLinkView.module.scss';
import Card from '../../components/Card/Card';
import InputBox from '../../components/InputBox/InputBox';
import Arrow from '../../components/Arrow/Arrow';

const AddLinkView = ({ returnAddress }) => {
    return (
        <Card>
            <div className={styles.addLinkWrapper}>
                <div className={styles.returnButton}>
                    <Arrow />
                    <div>Return to {returnAddress}</div>
                </div>
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