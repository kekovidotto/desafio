import React, { useContext} from 'react';
import Colors from '../Colors/Colors';
import Sizes from '../Sizes/Sizes';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../providers/contexts/ProductContext';
import { Link } from 'react-router-dom';

/* --- CSS ---*/
import './Details.css'

/* -- `url(${product.image[0]})` -- */

const Details = () => {
    const {id} = useParams();
    const value = useContext(ProductContext)
    const [products] = value.products
    const addCart = value.addCart

    const details = products.filter((product, index) => {
        return product.id === id
    })

    return (
        <>
            {
                details.map(product => (
                    <div className="details" key={product.id}>
                        <div className="img-container" >
                            <img src="../imgs/image32.png" alt="" />
                            <img src="../imgs/image33.png" alt="" />
                        </div> 
                            
                        <div className="box-details">
                            <h2 title={product.title}>{product.title}</h2>
                            <div className="price-details">
                                <span className="old-price">R$345,90</span>
                                <span className="price">R${product.price}</span>
                                <div className="condition">
                                    <p>EM ATÉ 3X DE R$80,70</p>
                                </div>
                            </div>
                            <Colors colors={product.colors}/>
                            <Sizes sizes={product.sizes} />
                            <button className="cart" onClick={() => addCart(product.id)}>
                                Adicionar à sacola
                            </button>
                            <p>{product.description}</p>
                            <h3 className="plus-details">
                                MAIS DETALHES
                            </h3>
                            <p style={{cursor:"pointer"}}>CALCULAR PRAZO DE ENTREGA | TROCA E DEVOLUÇÃO</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Details