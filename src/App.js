import logo from './logo.svg';
import './App.css';
import ButtonBases from './Tiles';
import ButtonAppBar from './AppBar';
const React = require('react')
let url = "https://cstor.com/wp-content/uploads/2016/10/network-icon.png"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar/>
        <ButtonBases/>
      </header>
    </div>
  );
}

export default App;
