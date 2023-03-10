import React from 'react';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCart, cartItem } from '../actions';
import { showNotification } from '../Notification/config';

function ItemDetail({ itemDetail }) {

    const dispatch = useDispatch();


    // console.log("itemdetails", itemDetail)
    // this help to add the item to cart 
    const AddToCart = (itemDetail) => {
        if (!itemDetail.qty) {
            console.log("addtocart");
            console.log("itemdetails", itemDetail)
            itemDetail.qty = 1;
            dispatch(addCart(itemDetail))
            dispatch(cartItem());
            showNotification("item added to cart", "success");
        }
        else {
            dispatch(addCart(itemDetail))
            dispatch(cartItem());
            showNotification("item added to cart", "success");
        }
    }

    return (
        <div className="card"
            style={{
                width: "50%",
                height: "65%",
                margin: "auto", textAlign: "center",
            }}>
            {itemDetail.images ? (

                <div className="card-img">
                    {itemDetail.images[0] && (
                        <div className="carousel-item active">
                            <img src={itemDetail.images[0]} className="d-block" alt=""
                                style={{
                                    height: "300px",
                                    width: "65%",
                                    margin: "auto",

                                }}
                            />
                        </div>
                    )}


                </div>


            ) : (
                <img src={itemDetail.thumbnail} alt=""
                    style={{
                        height: "200px",
                        width: "200px",
                    }}
                />
            )
            }

            <div className="">
                <div className="">
                    <div>{itemDetail.title}</div>
                    <div>
                        <Rating name="simple-controlled"
                            value={itemDetail.rating ? itemDetail.rating : 0} />
                    </div>
                </div>
                <div className="">
                    <div><span>Price :</span>Rs.{itemDetail.price}</div>
                    <div>Discount :<span>{itemDetail.discountPercentage ? itemDetail.discountPercentage : ""}%</span></div>
                </div>
                <div>
                    <div> Catergory : <span>{itemDetail.category}</span></div>
                    <div>Stock : <span>{itemDetail.stock ? itemDetail.stock : ""}</span></div>
                    <div>{itemDetail.description}</div>
                </div>

                <div>
                    <button
                        className="btn btn-primary"
                        style={{
                            width: "10rem",
                            backgroundColor: "grey"
                        }}
                        onClick={() => AddToCart(itemDetail)}
                    >
                        Add to cart
                    </button>
                </div>

            </div>

        </div >



    )
}
export default ItemDetail;