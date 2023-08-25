import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

const Navbar = () => {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  let data = useCart();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="fixed-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-secondary"
        style={{ position: "sticky" }}
      >
        <div className="container-fluid mx-4">
          <Link className="navbar-brand fs-3" to="/">
            <img
              src="https://i.pinimg.com/originals/d0/0a/8f/d00a8fc9078a4ebd1fc8690db9d6eedb.png"
              alt="Burger"
              width="60"
              height="44"
            />
            BurGer
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            {localStorage.getItem("authToken") ? (
              <Link
                className="nav-link active fs-5 text-dark"
                aria-current="page"
                to="/myOrder"
              >
                My Orders
              </Link>
            ) : (
              ""
            )}

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-black mx-1" to="/login">
                  Login
                </Link>
                <Link className="btn bg-white text-black mx-1" to="/createuser">
                  Signup
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn btn-outline-dark text-white mx-2 fs-5"
                  onClick={() => {
                    setCartView(true);
                  }}
                >
                  My Cart{" "}
                  <Badge pill bg="primary" style={{ fontSize: "14px" }}>
                    {data.length}
                  </Badge>
                </div>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : null}
                <div
                  className="btn btn-outline-dark text-light mx-2 fs-5"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
