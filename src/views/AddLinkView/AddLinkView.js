import { useState } from "react";
import _ from "lodash";
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
		if (linkName === "" || linkUrl === "" || !!alertText) return;

		let links = JSON.parse(localStorage.getItem(CONSTANTS.storageLink)) || [];
		let date = Date.now();
		let maxIdObject = _.maxBy(links, "id");
		links.push({
			id: maxIdObject ? maxIdObject.id + 1 : 1,
			label: linkName,
			link: linkUrl,
			votes: 0,
			createdAt: date,
			updatedAt: date,
		});
		links = _.orderBy(links, ["createdAt"], ["desc"]);
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
