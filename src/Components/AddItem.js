import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../actions';

import { showNotification } from '../Notification/config';

function AddItem() {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [rating, setRating] = useState();
    const [thumbnail, setThumbnail] = useState();

    const dispatch = useDispatch();

    const navigate = useNavigate()

    //on clicking add button , a new product is getting added
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: Date.now(),
            title: name,
            price,
            description,
            rating,
            thumbnail,
            change: true,
        }

        dispatch(createProduct(data))
        showNotification("Product Added Successful", "success");
        navigate('/');

        setName("");
        setDescription("");
        setRating("");
        setPrice("");
    }

    return (
        <div className="bg-light border border-1 border-dark mt-4 p-3  "
            style={{
                width: "50%",
                margin: "auto"
            }}

        >
            <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Name"
                    className="p-2"
                    onChange={(e) => setName(e.target.value)}
                />


                <input
                    type="text"
                    placeholder="Description"
                    className="p-2"
                    onChange={(e) => setDescription(e.target.value)}
                />


                <input
                    type="text"
                    placeholder="Price"
                    className="p-2"
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Rating"
                    className="p-2"
                    onChange={(e) => setRating(e.target.value)}
                />


                <input
                    type="text"
                    placeholder="Image Url"
                    className="p-2"
                    onChange={(e) => setThumbnail(e.target.value)}
                />

                <button
                    type="submit"
                    className="btn btn-primary align-self-end mt-4"
                    style={{
                        width: "9rem",
                        backgroundColor: "grey",
                    }}
                >
                    Add
                </button>
            </form>



        </div >
    )
}
export default AddItem;