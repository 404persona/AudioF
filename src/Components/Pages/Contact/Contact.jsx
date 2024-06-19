import React from "react";

const Contact = () => {
  return (
    <div className="pt-[100px]">
      <div>
        <h1 className="text-[3rem] text-center font-semibold">Here to Help</h1>
        <div className="flex md:w-[50%] justify-center">
        <div className="flex flex-col p-4 gap-5 ">
          <div className="flex flex-col w-[300px] gap-2">
            <label>Full Name :</label>
            <input
              type="text"
              placeholder="Enter Name Here"
              className="outline-none border-[2px] border-gray-300 rounded-md p-1 focus:border-green-400"
            />
          </div>
          <div className="flex flex-col w-[300px] gap-2">
            <label>Email :</label>
            <input
              type="text"
              placeholder="Enter Email Here"
              className="outline-none border-[2px] border-gray-300 rounded-md p-1 focus:border-green-400"
            />
          </div>
          <div className="flex flex-col w-[300px] gap-2">
            <label>Message :</label>
            <textarea
              type="text"
              placeholder="Enter Message Here"
              className="outline-none border-[2px] border-gray-300 rounded-md p-1 focus:border-green-400 h-[150px] w-[300px]"
            />
          </div>
          <div className="flex justify-center">
            <button className="text-white text-[1rem] font-semibold bg-green-400 p-1 w-[150px] rounded-md">
              Submit
            </button>
          </div>
        </div>
        </div>
        <div>
          <div className="w-[50%] h-screen bg-red-400">
              <div>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
