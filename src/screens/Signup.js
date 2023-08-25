import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  // let [address, setAddress] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(
    //   JSON.stringify({
    //     name: credentials.name,
    //     email: credentials.email,
    //     password: credentials.password,
    //     location: credentials.geolocation,
    //   })
    // );
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/login");
    } else {
      alert("Enter valid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    // <div style={{backgroundImage: 'url("https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80")', backgroundSize: "cover", height: "100vh"}}>
    <>
      <Navbar />
      <div className="container mt-5 p-5">
        <div className="container mt-5 col-6">
          <div className="container mt-5 fs-2">Sign Up for New Account</div>
          <hr className="w-60" />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={credentials.name}
                onChange={onChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={credentials.email}
                onChange={onChange}
                aria-describedby="emailHelp"
              />
              {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={credentials.password}
                onChange={onChange}
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="geolocation"
                value={credentials.geolocation}
                onChange={onChange}
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="m-3 btn btn-success">
              Submit
            </button>
            <Link to="/login" className="m-3 btn btn-primary">
              Already a user
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
