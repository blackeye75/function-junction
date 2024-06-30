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
  const phoneNumberRegex =
    /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [error, seterror] = useState("");
  const [type, setType] = useState("password");

  const create = async (data) => {
    seterror("");
    // console.log(data);
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();

        // await authService.updateUser( userData.$id,  data );
        await authService.updateUser({ userId: userData.$id,  data });

        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      seterror(error.message);
    }
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
            <div className="mb-2">
              <label className="block text-gray-700 " htmlFor="email">
                Email
              </label>
              <input
                className="w-full text-black px-3 py-2 outline-none border rounded"
                type="text"
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
            <div className="mb-2">
              <label className="block text-gray-700" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="w-full px-3 text-black py-2 outline-none border rounded"
                type="text"
                id="fullname"
                placeholder="Enter Your Full Name"
                name="fullname"
                {...register("name", {
                  required: "Full Name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-gray-700" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="w-full text-black px-3 py-2 outline-none border rounded"
                type="text"
                placeholder="Enter Your Phone Number"
                id="phone"
                name="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Not Valid",
                  },
                  pattern: {
                    value: phoneNumberRegex,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
            <div className="mb-2 ">
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
                    minLength: {
                      value: 8,
                      message: "Not Safe",
                    },
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
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </Container>
  );
};

export default Signup;
