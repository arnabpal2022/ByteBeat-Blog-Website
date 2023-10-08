import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiAutomaticSas } from "react-icons/gi";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "Read Blogs", path: "/show" },
    { id: 3, link: "Write Blogs", path: "/write" },
  ];

  const authlinks = [
    { id: 1, link: "Log in", path: "/login" },
    { id: 2, link: "Sign Up", path: "/signup" },
  ];

  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
      method: "GET"
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials: 'include',
      method: 'POST',
    });
    setUsername(null)
  }

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.path} // Use Link instead of <a> and remove smooth and duration attributes
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                  aria-current="page"
                >
                  {link.link}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <NavLink
          to="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center lg:mx-auto"
        >
          {/* LOGO */}
          <GiAutomaticSas size={30}></GiAutomaticSas>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            ByteBeat
          </span>
        </NavLink>
        <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
          {username && (
            <>
              <div>{username}</div>
              <a onClick={logout}>Log Out</a>
            </>
          )}
          {!username && authlinks.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.path} // Use Link instead of <a> and remove smooth and duration attributes
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                >
                  {link.link}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="ml-auto lg:hidden">
          <button
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars size={30}></FaBars>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full ">
              <div className="p-5 bg-white border rounded shadow-sm z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <NavLink to="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        ByteBeat
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <button
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaTimes size={30}></FaTimes>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {links.map((link) => {
                      return (
                        <li key={link.id}>
                          <NavLink
                            to={link.path} // Use Link instead of <a> and remove smooth and duration attributes
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                          >
                            {link.link}
                          </NavLink>
                        </li>
                      );
                    })}
                    {username && (
                      <>
                        <div>{username}</div>
                        <a>Log Out</a>
                      </>
                    )}
                    {!username &&
                      authlinks.map((link) => {
                        return (
                          <li key={link.id}>
                            <NavLink
                              to={link.path} // Use Link instead of <a> and remove smooth and duration attributes
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                            >
                              {link.link}
                            </NavLink>
                          </li>
                        );
                      })}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
