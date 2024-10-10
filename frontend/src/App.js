import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/cart" component={Cart} />
            </Routes>
        </Router>
    );
}

export default App;
