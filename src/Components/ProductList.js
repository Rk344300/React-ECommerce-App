import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import SortItem from './SortItem';

function ProductList() {
    const data = useSelector((state) => state.allitems);
    // console.log("data", data);
    // upto the data is not fetched , spinner will display 
    if (data?.length === 0) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div
                    className="spinner-border"
                    style={{ height: "20px", width: "20px" }}

                >
                    <span className="visually-hidden">Loading...</span>

                </div>
            </div>
        );
    } else {
        // all datas are represent on the screen
        return (
            <div className="d-flex flex-column container-sm mt-4">
                {/* this component is used to sort the product based on price */}
                <SortItem />
                {data?.map((item) => (

                    <ProductItem item={item} key={item.title} />
                ))}
            </div>
        );
    }
}
export default ProductList;