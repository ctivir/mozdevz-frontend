import Home from './pages/Home';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

function App() {
  return (
  
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/programas' component={Programs} />
          <Route path='/contacto' component={Contact} />
        </Switch>
        <GlobalStyle />
      </Router>
    
  );
}

export default App;
