import React, { useState } from "react";
import Container from "../container/Container";
import { motion } from "framer-motion";
import { BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import { login } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const [error, seterror] = useState("");
  const [type, setType] = useState("password");

  const create = async (data) => {
    seterror("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      seterror(error.message);
    }
    console.log(userData);
  };

  const toggelType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <Container className="min-h-screen w-full  ">
      <div className="min-h-screen  flex items-center justify-center bg-zinc-900">
        <motion.div
          className="bg-white p-8 rounded shadow-md w-full max-w-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl  font-bold font-['Bebas_neue'] text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-blue-500"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Join the Party!
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-8 font-['Roboto']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Sign up to start creating unforgettable events with us.
          </motion.p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            onSubmit={handleSubmit(create)}
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full text-black px-3 py-2 outline-none border rounded"
                type="email"
                id="email"
                name="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid",
                    },
                  })}
              />
            </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="fullname">
                      Full Name
                    </label>
                    <input
                      className="w-full px-3 text-black py-2 outline-none border rounded"
                      type="text"
                      id="fullname"
                      name="fullname"
                      {...register("name", {
                        required: true,
                      })}
                    />
                  </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="w-full text-black px-3 py-2 outline-none border rounded"
                type="number"
                id="phone"
                name="phone"
                {...register("phone",{
                  required:true
                })}
              />
            </div>
            <div className="mb-6 ">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border rounded">
                <input
                  className="w-full text-black px-3 py-2 outline-none rounded"
                  type={type}
                  id="password"
                  name="password"
                  {...register("password",{
                    required:true,
                  })}
                />
                <div onClick={toggelType}>
                  <BiSolidShow color="black " size={30} />
                </div>
              </div>
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              type="submit"
            >
              Sign Up
            </button>
          </motion.form>
          <motion.p
            className="text-center text-gray-600 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </Container>
  );
};

export default Signup;
