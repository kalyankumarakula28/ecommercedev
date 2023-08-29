import React from "react";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333",minHeight:"100vh"}}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto my-4 p-4">
        <h3 className="text-center title">Reset Password </h3>
        <p className="text-center">Please Enter new password</p>
        <form action="" >
        
          <CustomInput   type="password" label="Password" id="pass" />
          <CustomInput   type="password" label="ConfirmPassword" id="pass" />
          <button
            className="border-0 px-3 py-2 mt-4 text-white w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >Reset</button>
          
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
