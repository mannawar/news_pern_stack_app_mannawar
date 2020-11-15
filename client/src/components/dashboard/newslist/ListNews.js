import React, { Fragment, useState, useEffect } from "react";
import EditNews from "./EditNews";

const ListNews = ({ allNews, setNewsChange }) => {
  console.log(allNews);
  const [newslistings, setNewsListings] = useState([]); //empty array

  //delete newslisting function

  async function deleteNews(id) {
    try {
      await fetch(`http://localhost:5000/dashboard/del/${id}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token }
      });
      console.log(newslistings);
      setNewsListings(newslistings.filter(newslisting => newslisting.news_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  // async function getTodos() {
  //   const res = await fetch("http://localhost:5000/newslistings");

  //   const todoArray = await res.json();

  //   setNewsListings(todoArray);
  // }

  useEffect(() => {
    setNewsListings(allNews);
  }, [allNews]);

  console.log(newslistings);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {newslistings.length !== 0 &&
            newslistings[0].news_id !== null &&
            newslistings.map(newslisting => (
              <tr key={newslisting.news_id}>
                <td>{newslisting.title}</td>
                <td>{newslisting.description}</td>
                <td>{newslisting.image}</td>
                <td>
                  <EditNews newslisting={newslisting} setNewsChange={setNewsChange} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteNews(newslisting.news_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListNews;
