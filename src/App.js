import styles from './App.module.scss';
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import ListView from './views/ListView/ListView';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <ListView />
    </div>
  );
}

export default App;
