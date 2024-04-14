import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  // const [profile, setprofile] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [confirmpassword, setconfirmpassword] = useState("");

  const SignUpHandler = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:4000/api/user/signup", {
        firstname,
        lastname,
        email,
        password,
      });
      if ((response.status = 201)) {
        console.log("User Registered");
      } else {
        console.error("Error registering user:", response.statusText);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly">
      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/17743350/pexels-photo-17743350/free-photo-of-man-wearing-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          backgroundOrigin: "border-box",
          backgroundPosition: "Center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "Cover",
        }}
        className="w-full h-full"
      >
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/50 to-slate-900/50 flex flex-col justify-center items-center text-center">
          <div className="text-white leading-tight">
            <h1 className="text-[4rem] font-bold">Audio</h1>
            <h3 className="text-[1.2rem] font-medium">
              It's modular and designed to last
            </h3>
          </div>
          <form onSubmit={SignUpHandler}>
            <div className=" flex flex-col justify-center items-center p-3">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center gap-3">
                  <input
                    type="text"
                    className="text-gray-500 w-[143px] p-[10px]  rounded outline-none"
                    placeholder="First Name"
                    onChange={(e) => setfirstname(e.target.value)}
                  />
                  <input
                    type="text"
                    className="text-gray-500 w-[143px] p-[10px]  rounded outline-none"
                    placeholder="Last Name"
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="Email"
                    className="text-gray-500  w-[300px] p-[10px]  rounded outline-none"
                    placeholder="Email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-center gap-3">
                  <input
                    type="Password"
                    className="text-gray-500 w-[300px] p-[10px]  rounded outline-none"
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  {/* <input
                    type="Password"
                    className="text-gray-500 w-[300px] p-[10px]  rounded outline-none"
                    placeholder="Confirm Password"
                    onChange={(e) => setconfirmpassword(e.target.value)}
                  /> */}
                </div>
                <div className="flex flex-col justify-center items-center text-white  font">
                  {/* <a className="font-medium"> Forgot Password</a> */}
                  <button
                    type="submit"
                    className="bg-[#0ACF83] p-2 rounded w-[270px] font-semibold  ml-4"
                  >
                    Sign Up
                  </button>
                  <div className="flex justify-between w-[180px] items-center mt-4">
                    <div className="text-[2rem] bg-white text-black p-2 rounded-xl cursor-pointer">
                      <FaApple />
                    </div>
                    <div className="text-[2rem] text-blue-600 bg-white p-2 rounded-xl cursor-pointer">
                      <FaFacebookF />
                    </div>
                    <div className="text-[2rem] bg-white p-2 rounded-xl cursor-pointer">
                      <FcGoogle />
                    </div>
                  </div>
                  <p className="mt-2">
                    If You have any account?{" "}
                    <Link
                      to="/login"
                      className="text-[#0ACF83] font-medium underline"
                    >
                      Sign In Here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
