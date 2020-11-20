import React, { Fragment, useState } from "react";
const EditNews = ({ newslisting, setNewsChange }) => {
  //editText function
  const editText = async id => {
    try {
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

    } catch (err) {
      console.error(err.message);
    }
  };

  const [title] = useState(newslisting.title);
  const [description, setDescription] = useState(newslisting.description);
  const [image] = useState(newslisting.image);

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`${newslisting.user_email}`}
      >
        Edit
      </button>
      <div
        className="modal"
        id={`id${newslisting.news_id}`}
        onClick={() => setDescription(newslisting.description)}
      >      
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">click to edit news description only</h6>
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
