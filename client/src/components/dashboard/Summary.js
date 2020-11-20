import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";

//components
import NewsSummary from "./newslist/NewsSummary";

const Summary = ({ setAuth }) => {
  const history = useHistory();
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
      console.log(parseData);
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
      history.push("/login");
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
        <h2>Welcome to your News Summary List</h2>
        <button onClick={e => logout(e)} className="btn btn-primary">
          Logout
        </button>
      </div>

      
      <NewsSummary allNews={allNews} setNewsChange={setNewsChange} />
      <Link to="/dashboard">Click here to create new news</Link>
    </div>
  );
};

export default Summary;
