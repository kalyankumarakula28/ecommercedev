import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto my-4 p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <CustomInput type="password" label="Password" id="pass" />
          <div className="my-2 text-end">
            <Link to="forgot-password">Forgot Password</Link>
          </div>
          <Link to="/admin">
            <button
              className="border-0 px-3 py-2 mt-4 text-white w-100"
              style={{ background: "#ffd333" }}
              type="submit"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
