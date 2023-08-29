import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
      <Meta title={"SingUp"} />
      <BreadCrumb title="Signup" />

      <Container className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Sing Up</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput type="text" name="name" placeholder="Name" />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput type="tel" name="mobile" placeholder="Mobile" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <Link to="/fogot-password">Forgot Password ?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Create</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
