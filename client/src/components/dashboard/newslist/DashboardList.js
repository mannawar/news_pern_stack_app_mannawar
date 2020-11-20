import React, { Fragment, useState, useEffect } from "react";

const ListNews = ({ allNews, setNewsChange }) => {
  console.log(allNews);
  const [newslistings, setNewsListings] = useState([]); //empty array


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
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {newslistings.length !== 0 &&
            newslistings[0].news_id !== null &&
            newslistings.map((newslisting, key) => (
              <tr key={Math.random()}>
                <td key={Math.random()}>{newslisting.title}</td>
                <td key={newslisting.description}>{newslisting.description}</td>
                <td key={newslisting.image}>{newslisting.image}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListNews;
