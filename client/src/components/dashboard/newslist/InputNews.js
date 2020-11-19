import React, { Fragment, useState } from "react";

const InputNews = ({ setNewsChange }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwtToken", localStorage.token);

      const body = { title, description, image };
      const response = await fetch(`http://localhost:5000/dashboard/article?`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      const parseResponse = await response.json();

      console.log(parseResponse);

      setNewsChange(true);
      setTitle("");
      setDescription("");
      setImage("");
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Input News</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add title here"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="add description"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="add image"
          className="form-control"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <button className="btn btn-success ">Add</button>
      </form>
    </Fragment>
  );
};

export default InputNews;
