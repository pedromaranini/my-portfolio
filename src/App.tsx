// import { Home } from './pages/Home/index';
import { Routes } from './routes';

import './App.scss';

function App() {
  return (
    <>
      <Routes />
      {/* <Home /> */}
      <p className="copyright">Copyright 2021 © with❤️ by <a 
          href="https://www.linkedin.com/in/pedromaranini30/" 
          target="_blank" 
          rel="noreferrer" 
        >
          Pedro Maranini
        </a>
      </p>
    </>
  );
}

export default App;
