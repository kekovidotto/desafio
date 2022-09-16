import React, { useContext } from 'react';
import { ProductContext } from '../../providers/contexts/ProductContext';
import { Link } from 'react-router-dom';

/* --- CSS ----*/ 
import './Products.css'

const Products = () => {
    const value = useContext(ProductContext)
    const [products] = value.products
    const addCart = value.addCart

    return (
        <div className="products">
          {
            products.map(product => (
              <div className="card" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.image[0]} alt="" />
                </Link>
                <div className="box">
                  <h3 title={product.title}>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                  </h3>
                  <p>{product.description}</p>
                  <h4>${product.price}</h4>
                  <button onClick={() => addCart(product.id)}>
                    Adicionar à sacola
                  </button>
                </div>
              </div>
            ))
          }
        </div>
    )
}

export default Products