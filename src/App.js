import Home from './pages/Home';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/programas' component={Programs} />
          <Route path='/contacto' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
