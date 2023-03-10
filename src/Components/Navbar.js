import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';



function Navbar() {
    //getting the cart from redux store
    const total = useSelector((state) => state.cart);
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg p-4 navbar-light "
            style={style.nav}>
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid">
                <a className="navbar-brand fs-3" href="#" style={style.navHead}>
                    E-commerce
                </a>

                <div className=" navbar-collapse">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link to="/" className="nav-link active text-dark" href="#">

                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/additem" className="nav-link active text-dark" >Add Product</Link>
                        </li>

                    </ul>

                </div>

                <div className="d-flex align-items-center">

                    <div className="text-reset me-3">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/273/273177.png"
                            alt="error"
                            width={"40rem"}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate("/cartDetails")}
                        />
                        {total ? (
                            <span className=""
                                style={{
                                    height: "1rem",
                                    width: "1rem",
                                    top: "5%",
                                    left: "10%",
                                    color: "black"

                                }}
                            >
                                {total.length}
                            </span>
                        ) : (
                            0
                        )}
                    </div>


                    {/* <!-- Avatar --> */}
                    <div>

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/924/924915.png"
                            className="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />


                    </div>
                </div>

            </div>

        </nav>
    )

}
const style = {
    nav: {
        backgroundColor: "cyan",
    }
}
export default Navbar;




