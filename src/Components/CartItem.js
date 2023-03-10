import React from 'react'
import { useSelector } from 'react-redux';
import Cart from './Cart';

function CartItem() {

    //getting the state from redux store
    const allcarts = useSelector(state => state.cart);
    const totalCart = useSelector(state => state.totalCart);
    // finding the total price of all the carts
    const priceTotal = allcarts.reduce((total, item) => {
        return (total += item.price * item.qty);
    }, 0);
    // getting the total discount of all carts
    const discountTotal = allcarts.reduce((total, item) => {
        return (total += (item.price * item.qty * item.discountPercentage) / 100);
    }, 0);
    //if no item is there in cart
    if (allcarts.length === 0) {
        return <h2>Cart is Empty</h2>
    }

    return (

        <div className="container"
            style={{
                display: 'flex',
                justifyContent: "space-evenly"

            }}>
            <div className="">
                {allcarts.map((cart) => {
                    // console.log("cart", cart);
                    return <Cart cart={cart} key={cart.id} />
                })}

            </div>

            <div className="card"
                style={{
                    width: "20%",
                    height: "10%",
                    backgroundColor: "none"

                }}>

                <div className="card-body">
                    <h2>Price Details</h2>
                    <h5 className="card-price">Price :({totalCart} item ) :
                        <span>{priceTotal}</span>
                    </h5>

                    <h5 className="card-discount"><span>Discount : </span>
                        <span>{Math.floor(discountTotal)}</span>
                    </h5>

                    <h5 className="card-discount"> Total Amount :
                        <span>{priceTotal - Math.floor(discountTotal)}</span>
                    </h5>

                </div>
            </div>
        </div>

    )
}
export default CartItem;