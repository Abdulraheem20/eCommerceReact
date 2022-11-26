import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/Register.css";

const ShowLogin = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    msg: "",
  });
  const navigate = useNavigate();
  // const [display, setDisplay] = useState("");
  // const data = [];
  return (
    <div>
      <div
        className="Registerform"
        style={{
          background:
            "linear-gradient(180deg, #EAE6FF 0%, rgba(234, 230, 255, 0) 100%)",
        }}
      >
        <form action="" className="form">
          <h4 className="register">Login</h4>
          <small className="welcome">
            Please login using account detail bellow.
          </small>
          <div className="container1">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="mailInput"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </div>
          <div className="container1">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              className="mailInput"
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
          </div>
          <small className="forgetPassword">Forgot your password?</small> <br />{" "}
          <br />
          <button
            className="submitBtn"
            onClick={(e) => {
              e.preventDefault();
              // data.push(
              //   `{Username: ${input1}, Email-address: ${input2}, Password: ${input3}, Password: ${input4}}`
              // );
              // {
              //   JSON.stringify(data);
              // }
              // <h2>{JSON.stringify(data)}</h2>
              console.log(data);
              // setDisplay(data)
            }}
          >
            Sign In
          </button>
          <small className="already">
            Don’t have an Account?{" "}
            <span
              onClick={() => {
                navigate("/");
              }}
              className="Login"
            >
              Create account
            </span>
          </small>
        </form>
      </div>
    </div>
  );
};

export default ShowLogin;
