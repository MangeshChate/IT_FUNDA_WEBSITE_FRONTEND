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
            <Route exact path="/" element={<> <Navbar/> <Body/> <Footer/> </>}></Route>
            <Route exact path="/home" element={<> <Navbar/><HomeNav/> <Homebody/> </>}></Route>

          </Routes>

    </Router>
  );
}

export default App;
