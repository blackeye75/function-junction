import Container from "../container/Container";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutBtn"

const Headder = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [isOpen, setIsOpen] = useState(false);

  const navigate=useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Services",
      slug: "/services",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true,
    },
    {
      name: "Signin",
      slug: "/signin",
      active: !authStatus,
    },
  ];

  return (
    <header className="">
      <Container className="p-4 ">
        {/* postion fixed stuck over overlapping component */}
        <nav
          className={`bg-zinc-800 sm:rounded-full absolute sm:flex sm:items-center justify-between sm:h-[8vh] h-[6vh] top-3 w-[92vw] md:w-[97vw] z-50 ${
            isOpen ? "fixed w-[92vw] " : null
          } rounded-lg  top-0`}
        >
          <div className="five  flex items-center justify-between px-2 w-full sm:px-6 lg:px-8">
            <div className="four flex items-center w-full  justify-between ">
              <div className="three inset-y-0 left-0 flex items-center sm:hidden"></div>
              <div className="two flex items-center justify-between w-full  sm:items-stretch  sm:justify-between h-[6vh] ">
                <div className="one flex items-center justify-between w-full ">
                  <Link to="/" className="text-white text-xl ">
                    LOgo
                  </Link>
                  <button
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center p-2 sm:hidden rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus focus:ring-inset focus:ring-white "
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    {!isOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="hidden sm:block h-full sm:ml-6">
                  <div className="flex items-center h-full space-x-4">
                    <ul className=" ml-auto hidden md:flex">
                      {navItems.map((item) =>
                        item.active ? (
                          <li key={item.name}>
                            <button
                              className="inline-block px-3 py-2 duration-200  rounded-full font-['Varela_Round'] text-lg"
                              onClick={() => navigate(item.slug)}
                            >
                              {item.name}
                            </button>
                          </li>
                        ) : null
                      )}
                      {authStatus && (
                        <li>
                          <LogoutButton />
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            } z-50 overflow-hidden transition-all bg-slate-900 duration-700 sm:hidden`}
            id="mobile-menu"
          >
            <div className="p-2 pt-0 z-50 flex flex-col items-center">
              {navItems.map((item) =>
                item.active ? (
                  <ul key={item.name}>
                    <li key={item.name} className="decoration-transparent">
                      <button
                        className="inline-block px-6 py-2 duration-200 text-xl hover:bg-blue-100 rounded-full "
                        onClick={() => {
                          navigate(item.slug);
                          setMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </button>
                    </li>
                  </ul>
                ) : null
              )}
              {authStatus && (
                <ul>
                  <li className="text-xl">
                    <LogoutButton />
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Headder;
