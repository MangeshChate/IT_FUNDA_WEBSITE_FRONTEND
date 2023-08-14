import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/LandingPage/Navbar';
import Body from './Components/LandingPage/Body';
import Footer from './Components/LandingPage/Footer';
import HomeNav from './Components/home/HomeNav';
import Homebody from './Components/home/Homebody';
function App() {
  return (
    <Router >
          <Routes>
            <Route exact path="/" element={<> <Navbar/> <Body/> <Footer bg="rgb(220,53,69)" text_color="white"/> </>}></Route>
            <Route exact path="/home" element={<> <Navbar/><HomeNav/> <Homebody/> <Footer bg="white" text_color="black"/></>}></Route>

          </Routes>

    </Router>
  );
}

export default App;
