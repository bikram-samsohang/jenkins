import logo from './logo.svg';
import './App.css';
import TestComponent from './test/test';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header> */}
      <TestComponent></TestComponent>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
