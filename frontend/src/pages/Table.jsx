import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { get, del } from "../utils/api";

const Table = () => {
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await get("/api/user");

      setData(res.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await del(`/api/user/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit-user/${parseInt(id)}`);
  };

  return (
    <div>
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Image
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                User Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Email
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Password
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-neutral-primary border-b border-default"
                >
                  <th scope="row" className="px-6 py-4">
                    <img
                      className="h-[4rem] w-[6rem]"
                      src={`http://localhost:5000${item.image}`}
                      alt="image"
                    />
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.password}</td>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      className="bg-red-500"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="bg-blue-500"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
