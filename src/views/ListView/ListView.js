import { useEffect, useState } from "react";
import styles from "./ListView.module.scss";
import Card from "../../components/Card/Card";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Link from "../../components/Link/Link";
import Dropdown from "../../components/Dropdown/Dropdown";
import LabelGenerator from "../../components/LabelGenerator/LabelGenerator";
import Arrow from "../../components/Arrow/Arrow";

import { dummy } from "../../components/data/dummy";

const sortLabels = [
	{
		label: "Most Voted (Z$0A)",
		generateTarget: [
			{
				target: "$0",
				component: <Arrow className={styles.arrowRight} />,
			},
		],
	},
	{
		label: "Less Voted (A$0Z)",
		generateTarget: [
			{
				target: "$0",
				component: <Arrow className={styles.arrowRight} />,
			},
		],
	},
];

const ListView = ({ itemCount, changeView }) => {
	const [data, setData] = useState(dummy);
	const [pageCount, setpageCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const list = [<LabelGenerator labelSettings={sortLabels[0]} />, <LabelGenerator labelSettings={sortLabels[1]} />];

	useEffect(() => {
		setpageCount(Math.ceil(data.length / itemCount));
	}, [data]);

	const getPaginatedList = (itemCount) => {
		const currentList = data.slice(currentPage * itemCount, (currentPage + 1) * itemCount);
		return currentList.map((item, key) => {
			return <Link key={key} voteCount={item.upvotes - item.downvotes} link={item.link} label={item.label} />;
		});
	};

	return (
		<Card>
			<SubmitButton buttonAction={changeView} />
			<div className={styles.divider}></div>
			<Dropdown list={list} />
			{getPaginatedList(itemCount)}
			<div className={styles.paginationWrapper}>
				<div
					onClick={() => setCurrentPage((prev) => (currentPage !== 0 ? prev - 1 : prev))}
					className={`${styles.arrow} ${styles.backArrow} ${currentPage === 0 && styles.arrowHide}`}
				>
					{"<"}
				</div>
				{Array(pageCount)
					.fill()
					.map((_, key) => {
						return (
							<div
								onClick={() => setCurrentPage(key)}
								className={`${styles.pageNumber} ${key === currentPage ? styles.selectedPage : ""} `}
								key={key}
							>
								{key + 1}
							</div>
						);
					})}
				<div
					onClick={() => pageCount - 1 !== currentPage && setCurrentPage((prev) => prev + 1)}
					className={` ${styles.arrow}  ${styles.forwardArrow} ${
						pageCount - 1 === currentPage && styles.arrowHide
					}`}
				>
					{">"}
				</div>
			</div>
		</Card>
	);
};

export default ListView;
