import React, { useContext, useState, useEffect} from 'react';

import { ProductContext } from '../../providers/contexts/ProductContext';
import { Link } from 'react-router-dom';

// /* -- `url(${product.image[0]})` -- */

/* --- CSS ---*/
import './Cart.css';

const Cart = () => {
    const value = useContext(ProductContext)
    const [cart, setCart] = value.cart
    const [total, setTotal] = useState(0)
    const [countCart, setCountCart] = value.countCart

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])

    const reduction = id => {
        cart.forEach(item => {
            if(item.id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }

    const increase = id => {
        cart.forEach(item => {
            if(item.id === id){
                item.count += 1;
            }
        })
        setCart([...cart])
    }

    const removeProduct = id => {
        if(window.confirm("Você deseja remover o produto ?")){
            cart?.forEach((item,index) => {
                if(item.id === id){
                    cart.splice(index, 1);
                }
            })
            setCart([...cart])
            setCountCart(countCart => countCart - 1)
            localStorage.removeItem('dataCart', JSON.stringify(cart))
        }
    }

    if(cart?.length === 0) return <h2 style={{textAlign: "center", fontSize: "5rem" }}>Carinho Vazio</h2>

    return (
        <>
            {
                cart?.map(product => (
                    <div className="details cart" key={product.id}>
                        <div className="img-container"
                            style={{backgroundImage: `url(${product.image[0]})`}} />
                        <div className="boxdetails">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>R$ {product.price}</h3>

                            <div className="amount">
                                <button className="count" onClick={() => reduction(product.id)}> - </button>
                                <span>{product.count}</span>
                                <button className="count" onClick={() => increase(product.id)}> + </button>
                            </div>

                            <div className="delete" onClick={() => removeProduct(product.id)}>Remover</div>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <Link to="/finish">Finalizar Compra</Link>
                <h3>Total: $ {total}</h3>
            </div>
        </>
    )
}

export default Cart