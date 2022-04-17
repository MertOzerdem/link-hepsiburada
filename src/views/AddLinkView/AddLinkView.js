import { useState } from "react";
import styles from "./AddLinkView.module.scss";
import Card from "../../components/Card/Card";
import InputBox from "../../components/InputBox/InputBox";
import Arrow from "../../components/Arrow/Arrow";
import Alert from "../../components/Alert/Alert";
import { CONSTANTS } from "../../constants";

const AddLinkView = ({ returnAddress, changeView }) => {
	const [linkName, setLinkName] = useState("");
	const [linkUrl, setLinkUrl] = useState("");
	const [alertText, setAlertText] = useState(null);

	const addLink = () => {
		if (linkName === "" || linkUrl === "") return;

		let links = JSON.parse(localStorage.getItem(CONSTANTS.storageLink)) || [];
		let date = Date.now();
		links.push({
			id: links[links.length - 1] ? links[links.length - 1].id + 1 : 1,
			label: linkName,
			link: linkUrl,
			upvotes: 0,
			downvotes: 0,
			createdAt: date,
			updatedAt: date,
		});
		localStorage.setItem(CONSTANTS.storageLink, JSON.stringify(links));

		setAlertText(linkName);

		setTimeout(() => {
			setAlertText(null);
			changeView((prev) => !prev);
		}, 500);
	};

	return (
		<Card>
			{!!alertText && <Alert item={alertText} action="added." />}
			<div className={styles.addLinkWrapper}>
				<div className={styles.returnButton} onClick={changeView}>
					<Arrow />
					<div>&nbsp;Return to {returnAddress}</div>
				</div>
				<h2 className={styles.label}>Add New Link</h2>

				<InputBox label={"Link Name"} holder={"e.g. Alphabet"} onChange={setLinkName} />
				<InputBox label={"Link URL"} holder={"e.g. http://abc.xyz"} onChange={setLinkUrl} />

				<div className={styles.addButtonWrapper} onClick={addLink}>
					<div className={styles.addButton}>ADD</div>
				</div>
			</div>
		</Card>
	);
};

export default AddLinkView;
