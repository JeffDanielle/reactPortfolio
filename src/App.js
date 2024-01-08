import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavigationBar from './components/Navbar';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App" >
      <Router>
        <NavigationBar></NavigationBar>
        <LandingPage></LandingPage>
        <AboutPage></AboutPage>
      </Router>
    </div>
  );
}

export default App;
