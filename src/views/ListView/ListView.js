import { useEffect, useState } from "react";
import _ from "lodash";
import styles from "./ListView.module.scss";
import Card from "../../components/Card/Card";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Link from "../../components/Link/Link";
import Dropdown from "../../components/Dropdown/Dropdown";
import LabelGenerator from "../../components/LabelGenerator/LabelGenerator";
import Arrow from "../../components/Arrow/Arrow";
import Modal from "../../components/Modal/Modal";
import Alert from "../../components/Alert/Alert";
import { CONSTANTS } from "../../constants";

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
	const [data, setData] = useState(JSON.parse(localStorage.getItem(CONSTANTS.storageLink)));
	const [pageCount, setpageCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const [deleteTarget, setDeleteTarget] = useState(0);
	const [alertLabel, setAlertLabel] = useState(null);
	const list = [<LabelGenerator labelSettings={sortLabels[0]} />, <LabelGenerator labelSettings={sortLabels[1]} />];

	useEffect(() => {
		setpageCount(Math.ceil(data.length / itemCount));
		localStorage.setItem(CONSTANTS.storageLink, JSON.stringify(data));
	}, [data]);

	const deleteLink = (id) => {
		let link = _.find(data, (item) => item.id === deleteTarget);

		setAlertLabel(link.label);

		setTimeout(() => {
			setAlertLabel(null);
		}, 1000);

		const newData = data.filter((item) => item.id !== id);
		setData(newData);
	};

	const getDeleteModal = () => {
		let link = _.find(data, (item) => item.id === deleteTarget);

		if (!link) return;

		return (
			<Modal
				header="Remove Link"
				text="Do you want to remove:"
				label={link.label}
				positive="OK"
				negative="CANCEL"
				onClickPositive={() => deleteLink(deleteTarget)}
				onClickNegative={() => setDeleteTarget(0)}
			/>
		);
	};

	const getPaginatedList = (itemCount) => {
		const currentList = data.slice(currentPage * itemCount, (currentPage + 1) * itemCount);
		return currentList.map((item) => {
			return (
				<Link
					key={item.id}
					id={item.id}
					voteCount={item.upvotes - item.downvotes}
					link={item.link}
					label={item.label}
					onClick={setDeleteTarget}
				/>
			);
		});
	};

	return (
		<Card>
			{!!alertLabel && <Alert item={alertLabel} action="removed" />}
			{deleteTarget !== 0 && getDeleteModal()}
			<SubmitButton buttonAction={changeView} />
			<div className={styles.divider}></div>
			<Dropdown list={list} />
			{getPaginatedList(itemCount)}
			{pageCount - 1 > 0 && (
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
									className={`${styles.pageNumber} ${
										key === currentPage ? styles.selectedPage : ""
									} `}
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
			)}
		</Card>
	);
};

export default ListView;
