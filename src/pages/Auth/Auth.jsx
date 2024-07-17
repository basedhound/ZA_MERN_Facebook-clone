import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
   return (
      <section className="Auth">
         <div className="AuthLeft">
            <img src={Logo} alt="" />
            <div className="Headings">
               <h1>Social Network</h1>
               <h2>Explore ideas throughout the world</h2>
            </div>
         </div>

         <SignUp />
         <Login />
      </section>
   );
};

function Login() {
   return (
      <section className="AuthRight">
         <form className="SignForm SignContainer">
            <h2>Login</h2>
            <div>
               <input
                  type="text"
                  placeholder="Username"
                  className="SignInput"
                  name="username"
               />
            </div>
            <div>
               <input
                  type="text"
                  placeholder="Password"
                  className="SignInput"
                  name="password"
               />
            </div>
            <div>
               <span className="SignAlt">Don't have an account yet ? Sign Up</span>
            </div>
            <form action="" className="Button Btn--SignForm" type="submit">Login</form>
         </form>
      </section>
   );
}





function SignUp() {
   return (
      <section className="AuthRight">
         <form className="SignForm SignContainer">
            <h2>Sign Up</h2>

            <div>
               <input
                  type="text"
                  placeholder="First Name"
                  className="SignInput"
                  name="firstname"
               />
               <input
                  type="text"
                  placeholder="Last Name"
                  className="SignInput"
                  name="lastname"
               />
            </div>
            <div>
               <input
                  type="text"
                  placeholder="Username"
                  className="SignInput"
                  name="username"
               />
            </div>
            <div>
               <input
                  type="text"
                  placeholder="Password"
                  className="SignInput"
                  name="password"
               />
               <input
                  type="text"
                  placeholder="Confirm Password"
                  className="SignInput"
                  name="confirmpassword"
               />
            </div>
            <div>
               <span className="SignAlt">Already have an account ? Login </span>
            </div>
            <form action="" className="Button Btn--SignForm" type="submit">Sign Up</form>
         </form>
      </section>
   );
}

export default Auth;
