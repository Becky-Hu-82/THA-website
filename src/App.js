import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Future from './pages/Future';
import Sponsors from './pages/Sponsors';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/future' component={Future} />
          <Route path='/sponsors' component={Sponsors} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
