
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { additems } from '../actions';

function SortItem() {
    const [bool, setBool] = useState(false);

    const allitems = useSelector((state) => state.allitems);
    const dispatch = useDispatch();

    //when we click on sort ny price, all the item is sorted based on price
    const sortByPrice = () => {
        let data = allitems.sort((a, b) => a.price - b.price);
        dispatch(additems([...data]));
        setBool(true);
    }
    // this help us to cancel the sort property
    const cancelSort = () => {
        let data = JSON.parse(window.localStorage.getItem("allItems"));
        dispatch(additems([...data]));
        setBool(false);
    }

    return (
        <div className="">
            <div className=""
                style={{
                    width: "10rem",
                    cursor: "pointer"
                }}
            >
                <span onClick={() => sortByPrice()}
                    style={{
                        backgroundColor: "lightgrey",
                        padding: "5px",
                        border: "1px solid black",

                    }}
                >
                    Sort by Price
                </span>


                {bool && (
                    <span>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/399/399274.png"
                            onClick={() => cancelSort()}
                            alt=""
                            style={{
                                width: "1rem",
                                cursor: "pointer"
                            }}
                        />
                    </span>
                )}
            </div>

        </div>
    )
}
export default SortItem;