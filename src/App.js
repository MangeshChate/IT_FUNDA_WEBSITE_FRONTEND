import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/LandingPage/Navbar';
import Body from './Components/LandingPage/Body';
import Footer from './Components/LandingPage/Footer';
function App() {
  return (
    <Router >
          <Routes>
            <Route exact path="/" element={<> <Navbar/> <Body/> <Footer/> </>}></Route>
          </Routes>

    </Router>
  );
}

export default App;
