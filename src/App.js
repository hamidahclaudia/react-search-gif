import logo from './giphy-logo.png'
import YourGiphy from './pages/YourGiphy'
import IronMan from './pages/IronMan';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';


const App = () => {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/search'>
            <YourGiphy />
          </Route>
          <Route path='/ironman'>
            <IronMan />
          </Route>
          <Route path='/'>
            <header className="header">
              <h1 className='title'>WELCOME TO YOUR GIPHY</h1>
              <a href='https://giphy.com/'>
                <img src={logo} alt="giphy" className='logo' />
              </a>
              <Link to="/ironman"><h3>IRON MAN GIPHY</h3> </Link>
              <Link to="/search"><h3>SEARCH YOUR GIPHY</h3></Link>
            </header>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
