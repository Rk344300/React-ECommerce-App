import { Rating } from '@mui/material';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { showNotification } from '../Notification/config';

import { addCart, additems, cartItem, deleteItem, editItem, itemView } from '../actions';



function ProductItem({ item }) {
    const [title, setTitle] = useState(item.title);
    const [price, setPrice] = useState(item.price);
    const [rating, setRating] = useState(item.rating);
    const [description, setDescription] = useState(item.description);
    const [itemToAdd, setItemToAdd] = useState(true);

    const allitems = useSelector((state) => state.allitems);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    //when click to edit icon ,item change property turn to false, that enable the edit mode
    const handleEdit = (item) => {
        item.change = false;
        dispatch(additems([...allitems]));


    }
    //this handle to delete the item
    const handleDelete = (item) => {

        dispatch(deleteItem(item));
        showNotification("item deleted", "warning");

    }
    // help to save the edited item
    const handleSave = (item) => {

        dispatch(editItem(item.id, {
            title,
            price,
            rating,
            description,
            change: true
        }))
        navigate('/');
        showNotification("Edit successful", "success");


    }
    // when we click on cancel button , it doesn't allow to edit 
    const handleCancel = (item) => {
        item.change = true;
        dispatch(additems([...allitems]));
    }
    //when we click on img it help us to navigate the itemDetail component
    const handleView = (item) => {
        dispatch(itemView(item));
        navigate(`/itemDetails/${item.id}`);


    }
    // it help to add the item to cart
    const AddToCart = (item) => {
        if (itemToAdd) {
            item.qty = 1;

            dispatch(addCart(item));
            dispatch(cartItem());
            setItemToAdd(false);
            showNotification("item Added to cart", "success");
        } else {
            navigate('/cartDetails');
        }

    }


    return (
        <div className="card d-flex container-sm bg-white px-1 py-5 mt-4 flex-column flex-lg-row gap-3">

            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img
                    src={item.thumbnail}
                    width={"200px"}
                    height={"250px"}
                    alt=""

                    onClick={() => handleView(item)} />
            </div>

            <div className="card-body">
                <h5 className="card-title">
                    {item.change ? (
                        <p>{item.title}</p>
                    ) : (
                        <input type="text" value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </input>

                    )}

                </h5>
                <h5 className="card-price">
                    {item.change ? (
                        <p>{item.price}</p>
                    ) : (
                        <input
                            type="text" value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        >
                        </input>
                    )}
                </h5>
                <h5 className="card-rating">
                    {item.change ? (
                        <Rating name="simple-controlled"
                            value={item.rating ? item.rating : 0} />
                    ) : (
                        <>
                            <h6>Rating</h6>
                            <input
                                type="number" min={'0'} max={"5"} step={"0.5"}
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            >
                            </input>
                        </>
                    )}
                </h5>
                <div className="p-4">
                    {item.change ? (
                        <span>{item.description}</span>
                    ) : (
                        <div className="form-floating">
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                style={{ width: "45rem", height: "6rem" }}
                            >

                            </textarea>
                        </div>

                    )}
                </div>

                <div className="align-self-end d-flex align-items-center gap-4 flex-lg-grow-1 p-1">
                    {item.change ? (
                        <button
                            className="btn-btn-primary"
                            style={{
                                backgroundColor: "grey",
                                width: "10rem",
                                height: "3rem"
                            }}
                            onClick={() => AddToCart(item)}
                        >
                            {itemToAdd ? "Add to Cart" : "Go to Cart"}

                        </button>
                    ) : (
                        <button
                            className="btn-btn-outline-secondary"
                            onClick={() => handleCancel(item)}
                            style={{ marginRight: "30px" }}
                        >
                            Cancel

                        </button>
                    )}

                    {item.change ? (
                        <>
                            <span>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/483/483923.png"
                                    alt="edit"
                                    width={"30px"}
                                    style={{
                                        cursor: "pointer",
                                        marginLeft: "20px",
                                        marginRight: "20px"
                                    }}
                                    onClick={() => handleEdit(item)}
                                />
                            </span>
                            <span>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                                    alt="delete"
                                    width={"30px"}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleDelete(item)}
                                />

                            </span>
                        </>
                    ) : (
                        <button
                            className="btn btn-outline-success"
                            onClick={() => handleSave(item)}
                        >
                            Save
                        </button>

                    )}

                </div>

            </div>
        </div>
    )
}

export default ProductItem;