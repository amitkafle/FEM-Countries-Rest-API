import Header from './components/ui/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path='/country/:name'>
            <Country />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
