import React, { Fragment, useState } from "react";

const EditNews = ({ newslisting, setNewsChange }) => {
  //editText function
  const editText = async id => {
    try {
      console.log(newslisting);
      const body = { title, description, image };
      console.log(newslisting);
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwtToken", localStorage.token);

    await fetch(`http://localhost:5000/dashboard/update/${id}`, {
        method: "PATCH",
        headers: myHeaders,
        body: JSON.stringify(body)
      });
      
      setNewsChange(true);

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const [title, setTitle] = useState(newslisting.title);
  const [description, setDescription] = useState(newslisting.description);
  const [image, setImage] = useState(newslisting.image);
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${newslisting.news_id}`}
      >
        Edit
      </button>
      {/* id = "id21"*/}
      <div
        className="modal"
        id={`id${newslisting.news_id}`}
        onClick={() => setDescription(newslisting.description)}
      >      
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit News</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(newslisting.description)}
              >
                 &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText(newslisting.news_id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(newslisting.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditNews;
