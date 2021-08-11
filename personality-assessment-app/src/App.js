import './App.css';
import Welcome from './pages/Welcome'
import PersonalDetails from './pages/PersonalDetails'
import Questions from './pages/Questions';
import SampleReport from './pages/SampleReport';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="background-container h-5/6 md:h-4/6">
      </div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/sample_report">
            <SampleReport />
          </Route>
          <Route path="/personal_details">
            <PersonalDetails />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
