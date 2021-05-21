import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signin from './components/login/Signin';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact component={Signin} />
      </Switch>

    </Router>
  );
}

export default App;
