import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "id": "1",
            "title": "Moletom Vermelho Cabral",
            "image": ["./imgs/image32.png"],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "colors": ["White", "Black"],
            "sizes": ["P", "M", "G", "XG"],
            "price": 199,
            "count": 1
        },
        {
            "id": "2",
            "title": "Moletom Preto",
            "image": ["./imgs/mpreto.webp"],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "colors": ["Black", "White"],
            "sizes": ["P", "M", "G", "XG"],
            "price": 99.99,
            "count": 1
        },
        {
            "id": "3",
            "title": "Moletom Vermelho",
            "image": ["./imgs/mvermelho.webp"],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "colors": ['Red', "White"],
            "sizes": ["P", "M", "G", "XG"],
            "price": 100,
            "count": 1
        },
        {
            "id": "5",
            "title": "Moletom Verde",
            "image": ["./imgs/image27.jpg"],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "colors": ["Green", "White"],
            "sizes": ["P", "M", "G", "XG"],
            "price": 159
        },
    ])

    const [cart, setCart] = useState([])

    const [countCart, setCountCart] = useState(0)

    const addCart = (id) => {
        console.log(id)
        const checkExistsProductInCart = cart.every(item => {
            return item.id !== id
        })
        if(checkExistsProductInCart){
            const data = products.filter(product => {
                return product.id === id
            })

            cart.push(data[0]);
            setCountCart(countCart => countCart + 1)

            localStorage.setItem('dataCart', JSON.stringify(cart))
        }else {
            alert("Este produto ja foi adcionado.")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart){
            setCountCart(dataCart.length)
            setCart(dataCart)
        }
    }, [])

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
        countCart: [countCart, setCountCart]
    }

    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )
}