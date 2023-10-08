import React, {useState} from "react";
import {Navigate} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const LogIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigatePage = useNavigate();

    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login',{
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {"Content-Type":"application/json"},
            credentials: 'include',
        })
        if(response.ok){
            setRedirect(true);
        } else{
            alert('wrong credentials');
        }
    }

    if(redirect){
        return <Navigate to={"/"}/>
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 h-8 w-full ">
            <div className="flex flex-col justify-start py-20">
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={login}>
                    <h2 className="text-4xl text-white font-bold text-center font-serif">
                        LOG IN 
                    </h2>
                    <div className="flex flex-col text-gray-400 py-2">
                        
                        <input className="rounded-lg bg-gray-700 mt-2 py-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="text"
                            name="username"
                            id="user-id"
                            placeholder=" Username"
                            value={username}
                            onChange={ev => setUsername(ev.target.value)}
                        />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                    <input className="rounded-lg bg-gray-700 mt-2 py-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder=' Password' 
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                        />
                    </div>
                    <div className="flex justify-between text-white py-2">
                    <p className="flex items-center"><input className="mr-2" type="checkbox" name="" id="remember-user"/>Remember me</p>
                    <a href="" className="underline">Forgot Password?</a>
                    </div>
                    
                    <button className="w-full my-5 bg-teal-500 shadow-lg shadow-teal-500/80 hover:shadow-teal-500/30 text-white font-semibold rounded-lg ">Log in</button>
                    <p className="text-white text-center">Don't have any account?</p>
                    <button onClick={() => navigatePage("/signup")}
                    className="w-full my-3 bg-green-900 shadow-lg shadow-green-500/50 hover:shadow-green-500/30 text-white font-semibold rounded-lg">
                    Create new account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
