import React from 'react';
import { useDispatch } from 'react-redux';
import { cartItem, modifyCart, removeCart } from '../actions';

function Cart({ cart }) {

    const dispatch = useDispatch();
    // const dispatch = useDispatch();

    // const dispatchDecrease = useDispatch();
    // const dispatchCancel = useDispatch()
    // when we click the plus icon, quantity of item increases
    const handlePlus = (cart) => {
        cart.qty += 1;

        dispatch(modifyCart(cart));
        dispatch(cartItem());

    }
    // when we click on minus icon, the quantity of item decreases
    const handleMinus = (cart) => {
        if (cart.qty > 1) {
            cart.qty -= 1;
            dispatch(modifyCart(cart))
            dispatch(cartItem());
        }

    }
    // when we click on cancel button , the item is removed from cart
    const cancelCart = (cart) => {
        dispatch(removeCart(cart));
        dispatch(cartItem());

    }


    return (

        <div className="card"
            width={"50%"}
            style={{
                border: "1px solid black",
                marginBottom: "5px",
                textAlign: "center"

            }} >
            <img src={cart.thumbnail} className="card-img-top" alt=""
                style={{
                    width: "60%",
                    margin: "auto"
                }}
            />
            <div className="card-body" >
                <h5 className="card-title">{cart.title}</h5>

                <h5 className="card-price">Price : <span>Rs{cart.price}</span></h5>

                <div className="d-flex gap-3 mt-4"
                    style={{ marginLeft: "35%" }}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6941/6941676.png"
                        alt="error"
                        width={"30rem"}
                        onClick={() => handlePlus(cart)}
                    />
                    <span className=" border border-1 border-dark px-4">
                        {cart.qty}
                    </span>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828777.png"
                        alt="error"
                        width={"30rem"}
                        onClick={() => handleMinus(cart)}
                    />
                </div>

                <div className="align-self-end mt-5 ">
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => cancelCart(cart)}
                    >
                        Cancel
                    </button>
                </div>
            </div>


        </div>
    )
}
export default Cart;