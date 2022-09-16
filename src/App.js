import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProductProvider } from './providers/contexts/ProductContext';

function App() {

  return (
    <ProductProvider>
      <div className="App">
        <Router>
          <Header />
          <section>
            <Routes>
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Details />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </section>
        </Router>
      </div>
    </ProductProvider>
  );
}

export default App;
