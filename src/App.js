import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from './views/landing-page';
import KumarProperties from './views/kumar-properties';
import ErrorPage from './views/error-page';
import PrivacyPolicy from './views/privacy-policy';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/kumar-properties' element={<KumarProperties />} exact/>
      <Route path='/privacy-policy' element={<PrivacyPolicy />} exact/>
      <Route path='/' element={<LandingPage />} exact/>
      <Route path='/*' element={<ErrorPage />} exact/>
    </Routes>
  </Router>
  );
}

export default App;
