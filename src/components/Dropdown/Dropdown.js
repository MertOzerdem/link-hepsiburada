import { useState } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ list = [], onClickSort }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.dropdownWrapper} onClick={() => setIsOpen((prev) => !prev)}>
			<div className={styles.label} data-testid="label">Order by</div>
			<div className={styles.arrowWrapper}>
				<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z" fill="black" />
				</svg>
			</div>
			{isOpen && (
				<div className={styles.list}>
					{list.map((item, index) => {
						return (
							<div key={index} className={styles.dropdownItem} onClick={() => onClickSort(index)}>
								{item}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
