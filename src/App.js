import {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState("home");

  return (
  <>
    <Header view={view} setView={setView}/>
    <Main view={view} setView={setView}/>
    <Footer setView={setView}/>
  </>);
}

export default App;