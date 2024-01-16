import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavigationBar from './components/Navbar';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App" >
      <Router>
        <NavigationBar></NavigationBar>
        <LandingPage></LandingPage>
        <AboutPage></AboutPage>
        <WorkPage></WorkPage>
        <ContactPage></ContactPage>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
