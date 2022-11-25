import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/Register.css";
const Register = () => {
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
      <div className="Registerform">
        <form action="" className="form">
          <h4 className="register">Register</h4>
          <small className="welcome">Welcome! Create an account</small>
          <div className="container1">
            <label htmlFor="email">Email</label>
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
          <div className="container1">
            <label htmlFor="email">Repeat Password</label>
            <input
              type="password"
              className="mailInput"
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
          </div>
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
            Register
          </button>
          <small className="already">
            Already have an account?{" "}
            <span
              onClick={() => {
                navigate("./Login");
              }}
              className="Login"
            >
              Login
            </span>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Register;
