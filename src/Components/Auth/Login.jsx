import React from "react";
import { useState } from "react";

function Login({loginHandel}) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    loginHandel(email, password);
    setemail("");
    setpassword("");
  };
  return (
    <>
      <div className="h-screen w-full bg-[#1c1c1c] flex items-center justify-center py-8 px-5">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="h-[57vh] w-[26vw] flex flex-col items-center justify-start rounded-xl border-2 border-emerald-500 text-emerald-700 p-10 ">
            <h2 className="font-bold text-3xl uppercase">Login</h2>
            <div className="mt-3">
              <h3 className="font-semibold text-xl ">Email :</h3>
              <input
                required
                onChange={(e) => setemail(e.target.value)}
                value={email}
                type="email"
                className="border-3 rounded-md border-emerald-600 text-white outline-none px-2  w-[21vw] mt-2 h-[6vh]  placeholder-emerald-600 font-semibold text-sm"
                placeholder="Enter Your Email Here"
              />
            </div>
            <div className="mt-7">
              <h3 className="font-semibold text-xl ">Password:</h3>
              <input
                required
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                type="password"
                className="border-3 border-emerald-600 text-white rounded-md outline-none px-2  w-[21vw] mt-2 h-[6vh]  placeholder-emerald-600 font-semibold text-sm"
                placeholder="Enter Password Here"
              />
            </div>
            <button className="px-5 py-2 mt-9 rounded-lg text-[#1c1c1c] border-1 border-emerald-900 bg-emerald-600 font-bold">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
