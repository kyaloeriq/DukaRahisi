import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </Router>
    );
}

export default App;
