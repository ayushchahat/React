import logo from './logo.svg';
import './App.css';
import './appStyles.css'
import styles from './appStyles.module.css'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table/>
      {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
    </div>
  );
}

export default App;
