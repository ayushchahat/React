import logo from './logo.svg';
import './App.css';
import './appStyles.css'
import styles from './appStyles.module.css'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">
      <FocusInput />
      {/* <RefsDemo/> */}
      {/* <ParentComp /> */}
      {/* <Table/> */}
      {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
    </div>
  );
}

export default App;
