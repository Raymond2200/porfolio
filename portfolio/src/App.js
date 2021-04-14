import logo from './logo.svg';
import './App.css';
import NavList from "./components/NavList/NavList"
import NameCard from "./components/NameCard/NaemCard"
import Motivational from './components/Motivational/Moticational';

function App() {
  return (
    <div className="App">
      <NameCard />
      <NavList />
      <Motivational />
    </div>
  );
}

export default App;
