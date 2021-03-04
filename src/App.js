import './App.css';
import Landing from './components/Landing.js';
import LoginForm from './components/LoginForm.js';
import RegistrationForm from './components/RegistrationForm.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={RegistrationForm} />
      </Router>
    </div>
  );
}

export default App;
