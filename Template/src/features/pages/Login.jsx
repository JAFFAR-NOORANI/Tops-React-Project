import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useReg } from "../users/userSlice";
import { userLogin } from "../users/loginSlice";

const Login = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.login.token);

  const loginEmail = useRef();
  const loginPassword = useRef();

  const loginHandler = (e) => {
    e.preventDefault();

    const data = {
      email: loginEmail.current.value,
      password: loginPassword.current.value,
    };

    dispatch(userLogin(data));
  };

  const uname = useRef();
  const email = useRef();
  const password = useRef();

  const regHandler = (e) => {
    e.preventDefault();

    const data = {
      name: uname.current.value,
      email: email.current.value,
      password: password.current.value,
      role: "user",
    };
 
    dispatch(useReg(data));

    const token = useSelector((state) => state.login.token);

    
  };



  return (
    <>
      <main className="main">
        {/* <!--=============== BREADCRUMB ===============--> */}
        <section className="breadcrumb">
          <ul className="breadcrumb__list flex container">
            {/* <li><a href="index.html" className="breadcrumb__link">Home</a></li> */}
            <li>
              <span className="breadcrumb__link"></span>
            </li>
            <li>
              <span className="breadcrumb__link">Login / Register</span>
            </li>
          </ul>
        </section>

        {/* <!--=============== LOGIN-REGISTER ===============--> */}
        <section className="login-register section--lg">
          <div className="login-register__container container grid">
            <div className="login">
              <h3 className="section__title">Login</h3>
              <form className="form grid" onSubmit={loginHandler}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form__input"
                  ref={loginEmail}
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  className="form__input"
                  ref={loginPassword}
                />
                <div className="form__btn">
                  <button className="btn">Login</button>
                </div>
              </form>
            </div>
            <div className="register">
              <h3 className="section__title">Create an Account</h3>
              <form className="form grid" onSubmit={regHandler}>
                <input
                  type="text"
                  placeholder="Username"
                  className="form__input"
                  ref={uname}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form__input"
                  ref={email}
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  className="form__input"
                  ref={password}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form__input"
                />
                <div className="form__btn">
                  <button className="btn">Submit & Register</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* <!--=============== NEWSLETTER ===============--> */}
        <section className="newsletter section">
          <div className="newsletter__container container grid">
            <h3 className="newsletter__title flex">
              <img
                src="../src/assets/img/icon-email.svg"
                alt=""
                className="newsletter__icon"
              />
              Sign in to Newsletter
            </h3>
            <p className="newsletter__description">
              ...and receive $25 coupon for first shopping.
            </p>
            <form action="" className="newsletter__form">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="newsletter__input"
              />
              <button type="submit" className="newsletter__btn">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
