import React, { Fragment, useState, useEffect } from "react";

const NewsSummary = ({ allNews, setNewsChange }) => {
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
            <th>Publisher</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {newslistings.length !== 0 &&
            newslistings[0].news_id !== null &&
            newslistings.map((newslisting, key) => (
              <tr key={Math.random()}>
                <td key={Math.random()}>{newslisting.title}</td>
                <td key={newslisting.user_name}>{newslisting.user_name}</td>
                <td key={newslisting.date_saved}>{newslisting.date_saved}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default NewsSummary;
