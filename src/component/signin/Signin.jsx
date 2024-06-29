import React,{useState} from "react";
import Container from "../container/Container";
import { motion } from "framer-motion";
import { BiSolidShow } from "react-icons/bi";

const Signin = () => {
  const [type, setType] = useState("password");

  const toggelType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <Container className="bg-zinc-900">
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          className="bg-white p-8 rounded shadow-md w-full max-w-md"
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
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 outline-none border rounded text-black"
                type="email"
                id="email"
                name="email"
                required
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
                  required
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
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </motion.p>
        </motion.div>
      </div>
    </Container>
  );
};

export default Signin;
