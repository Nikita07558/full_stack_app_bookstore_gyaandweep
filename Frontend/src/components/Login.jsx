import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from "react-hot-toast"
import { useAuth } from '../context/AuthProvider'

function Login() {
  const [authUser, setAuthUser] = useAuth(); // ✅ context
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, userInfo);
      if (res.data?.user) {
        toast.success("Logged in Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user); // ✅ set context state

        document.getElementById("my_modal_3").close();

        // optional: go back to homepage or reload
        setTimeout(() => {
          navigate("/"); // or navigate(-1)
          window.location.reload(); // if you depend on reload-based logic
        }, 1000);
      }
    } catch (err) {
      toast.error("Error: " + (err.response?.data?.message || "Login failed"));
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}>
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            <div className="mt-4 space-y-2">
              <span>Email</span> <br />
              <input type="email" placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span> <br />
              <input type="password" placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700">Login</button>
              <p>Not registered? <Link to="/signup" className="underline text-blue-500">Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
