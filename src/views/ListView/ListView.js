import styles from './ListView.module.scss';
import Card from '../../components/Card/Card';
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Link from '../../components/Link/Link';
import Dropdown from '../../components/Dropdown/Dropdown';

import { dummy } from '../../components/data/dummy';

const ListView = () => {
    return (
        <Card >
            <SubmitButton />
            <div className={styles.divider}></div>
            <Dropdown />
            {dummy.map((item, key) => {
                return <Link key={key} link={item.link} label={item.label} />
            })}
        </Card>
    );
}

export default ListView;