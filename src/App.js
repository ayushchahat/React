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
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import { Component } from 'react';
import ComponentC from './components/ComponentC'
function App() {
  return (
    <div className="App">
     <ComponentC />
    </div>
  );
}

export default App;
