import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";
//components

import DetailList from "./newslist/DetailList";

const Detail = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [allNews, setAllNews] = useState([]);
  const [newsChange, setNewsChange] = useState(false);
  const history = useHistory();

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
      history.push("/");
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    setNewsChange(false);
  }, [newsChange]);


  return (
    <div>
      <div className="d-flex mt-5 justify-content-around">
        <h2>View News Details</h2>
        <button onClick={e => logout(e)} className="btn btn-primary">
          Logout
        </button>
      </div>
      <DetailList allNews={allNews} setNewsChange={setNewsChange} />
      <Link to="/dashboard">click here to go back</Link>
    </div>
  );
};

export default Detail;
