// import React from 'react';

import { NavLink } from "react-router";

const Register = () => {
    return (
       <>

       {/* Navbar */}
      <div className="flex justify-around items-center pt-10 pb-4 bg-white shadow-md text-black fixed top-0 left-0 w-full z-10">
        <p className="text-4xl font-extrabold">
          Travel <br />
          <span className="text-green-600">Lover</span>
        </p>

        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-64"
          />
          <NavLink className="text-lg hover:text-green-600" to="/news">
            News
          </NavLink>
          <NavLink className="text-lg hover:text-green-600" to="/destination">
            Destination
          </NavLink>
          <NavLink className="text-lg hover:text-green-600" to="/blog">
            Blog
          </NavLink>
          <NavLink className="text-lg hover:text-green-600" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-neutral" to="/login">
            Login
          </NavLink>
        </div>
      </div>

      {/* Login Form */}
      <div className="hero min-h-screen bg-base-200 pt-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <div className="text-center lg:text-left max-w-md">
            <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg text-gray-600">
              Please Do Register in your account.
            </p>
          </div>

          <div className="card w-full max-w-lg p-8 shadow-2xl bg-base-100 rounded-2xl">
            <div className="card-body">
              <fieldset className="fieldset space-y-4">
                <label className="label text-lg font-semibold">Full Name</label>
                <input
                  type="text"
                  className="input input-bordered input-lg"
                  placeholder="Enter your Full Name"
                />
                <label className="label text-lg font-semibold">Email</label>
                <input
                  type="email"
                  className="input input-bordered input-lg"
                  placeholder="Enter your email"
                />
                <label className="label text-lg font-semibold">Password</label>
                <input
                  type="password"
                  className="input input-bordered input-lg"
                  placeholder="Enter your password"
                />
                <div className="flex justify-between mt-2">
                  <a className="link link-hover text-sm">Forgot password?</a>
                  <NavLink to="/register" className="link link-hover text-sm text-green-600">
                    Create account
                  </NavLink >
                </div>
                <button className="btn btn-neutral btn-lg mt-6 w-full">
                  Register
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
       
       
       </>
    );
};

export default Register;