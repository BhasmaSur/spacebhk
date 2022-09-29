import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from './views/landing-page';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<LandingPage />} exact/>
    </Routes>
  </Router>
  );
}

export default App;
