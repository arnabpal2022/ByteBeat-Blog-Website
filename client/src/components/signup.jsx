import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const SignUP = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigatePage = useNavigate();

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200){
        alert("registration Successful");
    }else{
        alert("Registration Failed");
    }
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 h-8 w-full">
      <div className="flex flex-col justify-start py-20">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={register}>
          <h2 className="text-4xl text-white font-bold text-center font-serif">
            SIGN UP
          </h2>
          <div className="flex flex-col text-white py-2">
            <label htmlFor="user-id">User Name</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 py-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              name="username"
              id="user-id"
              placeholder="username"
              value={username}
              onChange={(ev) => setUserName(ev.target.value)}
            />
          </div>
          <div className="flex flex-col text-white py-2">
            <label htmlFor="email-id">Email id</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 py-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="email"
              name="email"
              id="email-id"
              placeholder="email-id"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div className="flex flex-col text-white py-2">
            <label htmlFor="password">Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 py-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div>
            <p className="text-white">
              <input
                className="mr-2"
                type="checkbox"
                name=""
                id="remember-user"
              />
              Remember me
            </p>
          </div>
          <button
            type="submit"
            className="w-full my-5 bg-teal-500 shadow-lg shadow-teal-500/80 hover:shadow-teal-500/30 text-white font-semibold rounded-lg"
          >
            Sign up
          </button>
          <div>
            <p className="text-white text-center underline">
              <a>
                Already have an account?
                <button  onClick={() => navigatePage("/login")}
                className="font-semibold text-purple-200 font-serif">
                  {" "}
                  -Sign in
                </button>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUP;
