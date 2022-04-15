import styles from './App.module.scss';
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import ListView from './views/ListView/ListView';
import AddLinkView from './views/AddLinkView/AddLinkView';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <ListView />
      <AddLinkView returnAddress={'List'} />
    </div>
  );
}

export default App;
