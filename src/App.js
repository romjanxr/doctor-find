import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import ServiceProvider from './contexts/useFetch';

function App() {
  return (
    <ServiceProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services/:serviceId">
            <ServiceDetail />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </Router>
    </ServiceProvider>
  );
}

export default App;
