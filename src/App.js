import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Future from './pages/Future';
import Sponsors from './pages/Sponsors';
import Navbar from './components/Navbar/Navbar';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import './App.css';
import Home from './pages/Home';
import PastEvents from './pages/PastEvents';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/future' component={Future} />
          <Route path='/sponsors' component={Sponsors} />
          <Route path='/contactUs' component={ContactUs} />
          <Route path='/pastEvents' component={PastEvents} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
