import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Frontpage from './pages/Frontpage/Frontpage';
import Portfolio from './pages/Portfolio/Portfolio';
// import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Frontpage />
        <Portfolio />
        {/* <About /> */}
        
      </div>
    </Router>
  );
}

export default App;
