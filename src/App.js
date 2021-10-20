import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Appointment from './components/Appointment/Appointment';
import ContactUs from './components/ContactUs/ContactUs';
import DoctorsList from './components/DoctorsList/DoctorsList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import AuthProvider from './contexts/AuthProvider';
import ServiceProvider from './contexts/ServiceProvider';

function App() {
  return (
    <AuthProvider>
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
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <PrivateRoute exact path="/contact">
              <ContactUs />
            </PrivateRoute>
            <PrivateRoute path="/services/:serviceId">
              <ServiceDetail />
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route path="/doctors">
              <DoctorsList />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ServiceProvider>
    </AuthProvider>
  );
}

export default App;
