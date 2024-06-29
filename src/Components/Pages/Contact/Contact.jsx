import React from "react";

const Contact = () => {
  return (
    <div className="pt-[100px]">
        <h1 className="bg-gradient-to-r max-sm:text-[2.5rem] from-green-400 to-black text-center text-transparent bg-clip-text text-[3rem] font-semibold">Here to Help</h1>
      <div className="flex justify-evenly ">
        <div className="flex justify-center">
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
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center">
            <iframe className="w-[300px]" src="https://lottie.host/embed/4f08547c-8232-47f7-a8b4-2cdacb9d7bd0/zY2bdO4JsU.json"></iframe>
            </div>
            <p className="w-[400px] text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magnam quas pariatur, impedit nisi voluptates quia esse beatae incidunt assumenda commodi veritatis aliquam tempore explicabo dolorem blanditiis, deleniti distinctio, qui saepe earum rem alias? Molestiae minima suscipit, aperiam unde vitae mollitia laboriosam quod perspiciatis non quia sunt odit qui aspernatur?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
