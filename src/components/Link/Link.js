import { useState } from "react";
import styles from "./Link.module.scss";
import globalStyles from "../../variables.module.scss";
import Arrow from "../Arrow/Arrow";

const Link = ({
	id,
	voteCount = 0,
	label = "Default Link",
	link = "https://defaultLink.com",
	onClickDelete,
	onClickVote,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={styles.LinkWrapper}
			onMouseEnter={(e) => {
				setIsHovered(true);
			}}
			onMouseLeave={(e) => {
				setIsHovered(false);
			}}
		>
			<div className={styles.votesWrapper}>
				<div className={styles.voteCount}>{voteCount}</div>
				<div className={styles.voteLabel}>POINTS</div>
			</div>
			<div className={styles.body}>
				<div className={styles.textWrapper}>
					<div className={styles.label}>{label}</div>
					<div className={styles.link}>({link})</div>
				</div>
				<div className={styles.voteWrapper}>
					<div className={styles.vote} onClick={() => onClickVote(id, 1)}>
						<Arrow className={styles.upvote} arrowColor={globalStyles.primaryColor} />
						Up Vote
					</div>
					<div className={styles.vote} onClick={() => onClickVote(id, -1)}>
						<Arrow className={styles.downvote} arrowColor={globalStyles.primaryColor} />
						Down Vote
					</div>
				</div>
			</div>
			{isHovered && (
				<svg
					className={styles.delete}
					onClick={() => onClickDelete(id)}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="12" cy="12" r="12" fill="white" />
					<circle cx="12" cy="12" r="10" fill="#E90505" />
					<rect x="3" y="10" width="18" height="4" rx="2" fill="white" />
				</svg>
			)}
		</div>
	);
};

export default Link;
