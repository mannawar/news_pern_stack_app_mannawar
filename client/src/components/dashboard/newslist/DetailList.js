import React, { Fragment, useState, useEffect } from "react";
import EditNews from "./EditNews";

const ListNews = ({ allNews, setNewsChange }) => {
  const [newslistings, setNewsListings] = useState([]); //empty array

  //delete newslisting function
  async function deleteNews(id) {
    try {
      console.log(id);
      await fetch(`http://localhost:5000/dashboard/del/${id}`, {
        method: "DELETE",
        headers: { jwtToken: localStorage.token }
      });
      setNewsListings(newslistings.filter(newslisting => newslisting.news_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    setNewsListings(allNews);
  }, [allNews]);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>News Detail</th>
            <th>Publisher Name</th>
            <th>Published Time</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {newslistings.length !== 0 &&
            newslistings[0].news_id !== null &&
            newslistings.map((newslisting, key) => (
              <tr key={Math.random()}>
                <td key={Math.random()}>{newslisting.description}</td>
                <td key={newslisting.user_name}>{newslisting.user_name}</td>
                <td key={newslisting.date_saved}>{newslisting.date_saved}</td>
                <td key={newslisting.image}>{newslisting.image}</td>
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
