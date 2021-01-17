// import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing'
import Nav from './components/Nav'
// import PropertyList from './components/Properties'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      <Landing />
      {/* <PropertyList /> */}
      </header>
      
    </div>
  );
}

export default App;
