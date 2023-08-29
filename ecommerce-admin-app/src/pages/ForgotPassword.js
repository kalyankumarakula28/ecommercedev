import React from "react";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto my-4 p-4">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">
          Please Enter Your Registered Email to get password mail
        </p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />

          <button
            className="border-0 px-3 py-2 mt-4 text-white w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
