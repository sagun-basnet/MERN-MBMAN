import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const getData = async () => {
    await axios
      .get(`http://localhost:5000/api/get-single-user/${id}`)
      .then((res) => {
        console.log(res);
        setdata(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    console.log("Here");

    e.preventDefault();

    if (data.email.length === 0) {
      alert("Email field required");
      return;
    }
    if (data.name.length === 0) {
      alert("Email field required");
      return;
    }
    if (data.phone.length === 0) {
      alert("Email field required");
      return;
    }
    if (data.password.length <= 7) {
      alert("Password must be more that 8 char");
      return;
    }

    await axios
      .put(`http://localhost:5000/api/user/${parseInt(id)}`, data)
      .then((res) => {
        console.log(res);
        navigate("/table");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="grid h-screen place-items-center">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[25rem] shadow-2xl rounded-xl p-4"
        >
          <h1 className="text-3xl font-bold">Edit User </h1>
          <input
            value={data.name}
            onChange={handleChange}
            type="text"
            name="name"
            id=""
            placeholder="Enter Name"
          />
          <input
            value={data.phone}
            onChange={handleChange}
            type="number"
            name="phone"
            id=""
            placeholder="Enter Phone"
          />
          <input
            value={data.email}
            onChange={handleChange}
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
          />
          <input
            value={data.password}
            onChange={handleChange}
            type="password"
            name="password"
            id=""
            placeholder="Enter Password"
          />

          <button className="bg-blue-500 w-full" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
