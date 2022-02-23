import LoginButton from '@/login/primary/loginButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>JHipster Lite Vite+React app</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {' | '}
        <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
          Vite Docs
        </a>
        {' | '}
        <a className="App-link" href="https://github.com/jhipster/jhipster-lite" target="_blank" rel="noopener noreferrer">
          Jhipster Lite Docs
        </a>
      </header>
      {/* <LoginButton /> */}
    </div>
  );
}

export default App;
