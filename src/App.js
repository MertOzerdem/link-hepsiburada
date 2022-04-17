import { useState } from "react";
import styles from "./App.module.scss";
import "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";
import ListView from "./views/ListView/ListView";
import AddLinkView from "./views/AddLinkView/AddLinkView";
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App() {
	const [isListView, setIsListView] = useState(false);

	const changeView = () => {
		setIsListView((prev) => !prev);
	};

	return (
		<div className={styles.App}>
			<Navbar />
			{isListView ? (
				<ListView itemCount={5} changeView={changeView} />
			) : (
				<AddLinkView returnAddress={"List"} changeView={changeView} />
			)}
		</div>
	);
}

export default App;
