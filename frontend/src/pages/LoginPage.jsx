import React, { useState } from "react";
import { FaAccusoft } from "react-icons/fa";
import { IoContract, IoHome } from "react-icons/io5";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    // console.log(`${e.target.name} : ${e.target.value}`);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
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

    //api call
    // console.log();
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
