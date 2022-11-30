import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from './views/landing-page';
import KumarProperties from './views/kumar-properties';
import ErrorPage from './views/error-page';
import GodrejNagpurPlots from './views/godrej-nagpur-plots';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/kumar-properties' element={<KumarProperties />} exact/>
      <Route path='/godrej-nagpur-plots' element={<GodrejNagpurPlots />} exact/>
      <Route path='/' element={<LandingPage />} exact/>
      <Route path='/*' element={<ErrorPage />} exact/>
    </Routes>
  </Router>
  );
}

export default App;
