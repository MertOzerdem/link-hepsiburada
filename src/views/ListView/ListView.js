import { useEffect, useState } from 'react';
import styles from './ListView.module.scss';
import Card from '../../components/Card/Card';
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Link from '../../components/Link/Link';
import Dropdown from '../../components/Dropdown/Dropdown';

import { dummy } from '../../components/data/dummy';

const ListView = ({ itemCount }) => {
    const [data, setData] = useState(dummy);
    const [pageCount, setpageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setpageCount(Math.ceil(data.length / itemCount));
    }, [data]);

    const getPaginatedList = (itemCount) => {


        return dummy.map((item, key) => {
            return <Link key={key} link={item.link} label={item.label} />
        })
    }

    return (
        <Card >
            <SubmitButton />
            <div className={styles.divider}></div>
            <Dropdown />
            {getPaginatedList(5)}
            <div className={styles.paginationWrapper}>
                <div className={`${styles.arrow} ${styles.backArrow}`}>{'<'}</div>
                {Array(pageCount).fill().map((_, key) => {
                    return <div className={`${styles.pageNumber} ${key === currentPage ? styles.selectedPage : ''}`} key={key}>{key + 1}</div>
                })}
                <div className={`${styles.arrow} ${styles.forwardArrow}`}>{'>'}</div>
            </div>
        </Card>
    );
}

export default ListView;