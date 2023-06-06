import { useState } from "react";
export default function Contact() {
  const [inputFields, setInputFields] = useState({
    username: "",
    email: "",
    subject: "",
    message: ""
  });
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [subject, setSubject] = useState();
  // const [message, setMessage] = useState();

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.email === "") {
      errors.email = "Email id is required";
    }
    if (inputValues.name === "") {
      errors.password = "Name is required";
    }
    if (inputValues.subject === "") {
      errors.password = "Subject is required";
    }
    if (inputValues.message === "") {
      errors.password = "Message is required";
    }
    return errors;
  };
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.id]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
    inputFields.username = "";
    inputFields.email = "";
    inputFields.subject = "";
    inputFields.message = "";
  };

  return (
    <div className="card text-center m-3">
      <div className="card-header h4">Reach Out </div>
      <div className="card-body">
        <h5 className="card-title">Please to fill form with your query!</h5>
        {Object.keys(errors).length === 0 && submitting ? (
          <span className="success">Successfully submitted ✓</span>
        ) : null}
        <form
          className="border border-dark rounded mt-2 p-3 align-items-center"
          onSubmit={handleSubmit}
        >
          <div className="mb-2 row">
            <div className="col-3">
              <label htmlFor="username" className="form-label">
                Name:
              </label>
            </div>
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                id="username"
                placeholder="Full name"
                required
                value={inputFields.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-2 row">
            <div className="col-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
            </div>
            <div className="col-9">
              <input
                type="email"
                className="form-control"
                id="email"
                required
                placeholder="name@domain.com"
                value={inputFields.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-2 row">
            <div className="col-3">
              <label htmlFor="subject" className="form-label">
                Subject:
              </label>
            </div>
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                id="subject"
                required
                value={inputFields.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-2 row">
            <div className="col-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
            </div>
            <div className="col-9">
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Limit 500 characters"
                required
                value={inputFields.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {/* <button
            type="reset"
            className="btn btn-secondary m-2"
            onClick={() => resetForm()}
          >
            Reset
          </button> */}
        </form>
      </div>
      <div className="card-footer text-body-secondary h5">
        Thanks for you interest!
      </div>
    </div>
  );
}
