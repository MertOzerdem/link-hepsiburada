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

const sortTypes = {
	mostVotes: "most votes",
	leastVotes: "least votes",
	createdAt: "createdAt",
};

const getSortedList = (data, sortType) => {
	let sortedList = [];
	if (sortType === sortTypes.mostVotes) {
		sortedList = _.orderBy(data, ["votes", "updatedAt"], ["desc", "desc"]);
	} else if (sortType === sortTypes.leastVotes) {
		sortedList = _.orderBy(data, ["votes", "updatedAt"], ["asc", "desc"]);
	} else if (sortType === sortTypes.createdAt) {
		sortedList = _.orderBy(data, ["createdAt", "updatedAt"], ["desc", "desc"]);
	}

	return sortedList;
};

const ListView = ({ itemCount, changeView }) => {
	const [data, setData] = useState(
		getSortedList(JSON.parse(localStorage.getItem(CONSTANTS.storageLink)), sortTypes.createdAt) || []
	);
	const [pageCount, setpageCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const [deleteTarget, setDeleteTarget] = useState(0);
	const [alertLabel, setAlertLabel] = useState(null);
	const list = [<LabelGenerator labelSettings={sortLabels[0]} />, <LabelGenerator labelSettings={sortLabels[1]} />];

	useEffect(() => {
		setpageCount(Math.ceil(data.length / itemCount));
		localStorage.setItem(CONSTANTS.storageLink, JSON.stringify(data));
	}, [data, itemCount]);

	const deleteLink = (id) => {
		let link = _.find(data, (item) => item.id === deleteTarget);

		setAlertLabel(link.label);

		setTimeout(() => {
			setAlertLabel(null);
		}, 1000);

		const newData = getSortedList(
			data.filter((item) => item.id !== id),
			sortTypes.mostVotes
		);

		if (data.length !== 1 && data.length % itemCount === 1 && currentPage + 1 === pageCount) {
			setCurrentPage((currentPage) => currentPage - 1);
		}

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

	const onClickVote = (id, updateCount) => {
		let link = _.find(data, (item) => item.id === id);
		let links = data.filter((item) => item.id !== id);
		let newLink = { ...link };
		newLink.votes += updateCount;
		newLink.updatedAt = Date.now();
		links.push(newLink);

		setData(getSortedList(links, sortTypes.mostVotes));
	};

	const onClickSort = (index) => {
		if (index === 0) {
			setData(getSortedList(data, sortTypes.mostVotes));
		} else if (index === 1) {
			setData(getSortedList(data, sortTypes.leastVotes));
		}
	};

	const getPaginatedList = (itemCount) => {
		const currentList = data.slice(currentPage * itemCount, (currentPage + 1) * itemCount);
		return currentList.map((item) => {
			return (
				<Link
					key={item.id}
					id={item.id}
					voteCount={item.votes}
					link={item.link}
					label={item.label}
					onClickDelete={setDeleteTarget}
					onClickVote={onClickVote}
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
			<Dropdown list={list} onClickSort={onClickSort} />
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
