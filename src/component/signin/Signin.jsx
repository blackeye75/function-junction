import React, { useState } from "react";
import Container from "../container/Container";
import { motion } from "framer-motion";
import { BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { useForm } from "react-hook-form";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [type, setType] = useState("password");

  const toggelType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Container className="bg-zinc-900 p-4">
      <div className="md:min-h-screen h-fit md:pt-0 py-[15vh] flex items-center justify-center">
        <motion.div
          className="bg-white md:p-8 p-4 rounded shadow-md w-full max-w-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-blue-600 font-bold text-center mb-4 font-['Bebas_neue']"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Welcome Back!
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-8 font-['Roboto']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Sign in to access your personalized dashboard and manage your events
            effortlessly.
          </motion.p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            onSubmit={handleSubmit(login)}
          >
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 outline-none border rounded text-black"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                {...register("email", {
                  required: "Email Is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Email address must be valid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-6 ">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border rounded">
                <input
                  className="w-full text-black px-3 py-2 outline-none rounded"
                  type={type}
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: "Password is required",
                    // minLength: {
                    //   value: 8,
                    //   message: "Not Safe",
                    // },
                  })}
                />
                <div onClick={toggelType}>
                  <BiSolidShow color="black " size={30} />
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              type="submit"
            >
              Sign In
            </button>
          </motion.form>
          <motion.p
            className="text-center text-gray-600 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </Container>
  );
};

export default Signin;
