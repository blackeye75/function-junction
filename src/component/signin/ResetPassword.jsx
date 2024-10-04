import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth"; // Import your AuthService
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Call resetPassword method from authService
      await authService.resetPassword(userId, secret, data.password);
      setMessage("Password reset successfully.");
      // Optionally, redirect the user to the login page after successful password reset
      navigate("/signin");
    } catch (error) {
      console.log("Error during password reset:", error); // Log the error
      setError(error.message || "An error occurred while resetting the password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        {message && <p className="text-green-600 mb-4 text-center">{message}</p>}
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              New Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded text-black"
              type="password"
              id="password"
              name="password"
              placeholder="Enter new password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
