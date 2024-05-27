import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CgLock } from "react-icons/cg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
// import MaskedInput from 'react-password-mask';

const Login = () => {
  const [Email, setEmail] = useState("");
  const [isShowPassword, setisShowPassword] = useState("");
  const [Password, setPassword] = useState("");
  const [LoginState, setLoginState] = useState("");
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setisShowPassword(!isShowPassword);
  };
  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        {
          email: Email,
          password: Password,
        },
        JSON.stringify({
          Email,
          Password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `jwt ${user.token}`,
          },
        }
      );
      console.log("Server Response", response.data);
      if (!Email || !Password) {
        console.error(
          "Email or password is empty. Please fill in both fields."
        );
      }
      if ((response.status = 201)) {
        const token = response.data.token;
        const UserData = response.data.user;
        localStorage.setItem("jwtToken", token);
        console.log("User Login Success", token);
        setLoginState(true);
        navigate("/", { state: { UserData } });
      } else {
        console.error("Error logging user:", response.statusText);
      }
    } catch (error) {
      console.log(error);
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
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/50 to-slate-900/50 flex flex-col justify-center items-center text-center ">
          <div className="text-white  leading-tight">
            <h1 className="text-[4rem] font-bold max-sm:text-[3.5rem]">
              Audio
            </h1>
            <h3 className="text-[1.2rem] font-medium max-sm:text-[1rem]">
              It's modular and designed to last
            </h3>
          </div>
          <form onSubmit={LoginHandler}>
            <div className=" flex flex-col items-center">
              <div className="flex justify-center items-center p-6">
                <MdOutlineEmail className="text-gray-500 text-[1.3rem] relative left-7" />
                <input
                  type="Email"
                  className="text-gray-500 w-[300px] mr-3 p-[10px] max-sm:w-[280px] pl-10 rounded outline-none"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-center items-center relative left-2">
                <CgLock className="text-gray-500 text-[1.3rem] relative left-7" />
                <input
                  type={isShowPassword ? "text" : "password"}
                  className="text-gray-500 p-[10px] w-[300px] mr-3 pl-10 rounded max-sm:w-[280px] outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className={`relative cursor-pointer right-[50px] text-${
                    isShowPassword ? "green-500" : "gray-500"
                  }`}
                  onClick={toggleShowPassword}
                >
                  <MdRemoveRedEye />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-white p-4 font">
                <a className="font-medium"> Forgot Password ?</a>
                <button
                  // onClick={LoginHandler}
                  type="submit"
                  className="bg-[#0ACF83] p-2 max-sm:w-[200px] rounded md:w-[270px] font-semibold mt-4"
                >
                  Sign In
                </button>
                <p className="mt-2 max-sm:mt-5">
                  Didn't have any account?{" "}
                  <Link
                    to="/signup"
                    className="text-[#0ACF83] font-medium underline"
                  >
                    Sign Up Here
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
