// Main App component
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Product from './pages/Product';
import AdminDashboard from './admin/AdminDashboard';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/services' component={Services} />
                <Route path='/contact' component={Contact} />
                <Route path='/product' component={Product} />
                <Route path='/admin' component={AdminDashboard} />
            </Switch>
        </Router>
    );
};

export default App;