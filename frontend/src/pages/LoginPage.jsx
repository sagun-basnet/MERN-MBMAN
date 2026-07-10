import axios from "axios";
import React, { useContext, useState } from "react";
import { FaAccusoft } from "react-icons/fa";
import { IoContract, IoHome } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email.length === 0) {
      alert("Email field required");
      return;
    }
    if (formData.password.length <= 7) {
      alert("Password must be more that 8 char");
      return;
    }

    console.log(formData);

    const res = await login(formData);
    toast.success("Login success");
    // if (res.user.role_id === 1) {
    //   navigate("/admin-dashboard");
    // } else if (res.user.role_id === 2) {
    //   navigate("/staff-dashboard");
    // } else if (res.user.role_id === 4) {
    //   navigate("/");
    // }

    // await axios
    //   .post("http://localhost:5000/auth/login", formData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="grid h-screen place-items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[25rem] shadow-2xl rounded-xl p-4"
      >
        <h1 className="text-3xl font-bold">Login Form </h1>
        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
          id=""
          placeholder="Enter Email"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          name="password"
          id=""
          placeholder="Enter Password"
        />
        <button className="bg-blue-500 w-full" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
