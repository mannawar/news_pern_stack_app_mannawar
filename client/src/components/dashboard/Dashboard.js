import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

//components

import InputNews from "./newslist/InputNews";
import ListNews from "./newslist/ListNews";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [allNews, setAllNews] = useState([]);
  const [newsChange, setNewsChange] = useState(false);

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/artdet", {
        method: "GET",
        headers: { jwtToken: localStorage.token }
      });

      const parseData = await res.json();

      setAllNews(parseData);
      setName(parseData[0].user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    setNewsChange(false);
  }, [newsChange]);

  console.log(allNews);

  return (
    <div>
      <div className="d-flex mt-5 justify-content-around">
        <h2>{name}'s News List</h2>
        <button onClick={e => logout(e)} className="btn btn-primary">
          Logout
        </button>
      </div>

      <InputNews setNewsChange={setNewsChange} />
      <ListNews allNews={allNews} setNewsChange={setNewsChange} />
    </div>
  );
};

export default Dashboard;
