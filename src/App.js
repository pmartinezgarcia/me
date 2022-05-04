import logo from './logo.svg';
import './App.css';
import ContactMe from './components/contactMe/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactMe />
      </header>
    </div>
  );
}

export default App;
