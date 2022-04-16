import styles from './App.module.scss';
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import ListView from './views/ListView/ListView';
import AddLinkView from './views/AddLinkView/AddLinkView';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <ListView />
      {/* <AddLinkView returnAddress={'List'} /> */}
      {/* <Modal /> */}
      {/* <Alert item={'label'} action={'is removed!'} /> */}
    </div>
  );
}

export default App;
