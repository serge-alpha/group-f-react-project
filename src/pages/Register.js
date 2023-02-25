import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ userinfo }) => {
  const [info, setInfo] = useState({
    name: "",
    password: "",
    email: "",
    messege: "",
  });
  const navigate = useNavigate();

  const handleInfo = (event) => {
    setInfo((previnfo) => {
      return { ...previnfo, [event.target.name]: event.target.value };
    });
  };
  const Userdata = () => {
    userinfo(info);
    navigate("/");
  };

  return (
    <div>
      <section className="contact">
        <h2 className="section-title text-center">Registration</h2>
        <div className="card">
          <form action="" className="form" onSubmit={Userdata}>
            <div className="form-control flex-center">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                required
                autocomplete="name"
                onChange={handleInfo}
                name="name"
              />
            </div>

            <div className="form-control flex-center">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                id="name"
                placeholder="Enter your password"
                required
                autocomplete="password"
                onChange={handleInfo}
                name="password"
              />
            </div>

            <div className="form-control flex-center">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                id="name"
                placeholder="Enter your email"
                required
                autocomplete="email"
                onChange={handleInfo}
                name="email"
              />
            </div>

            <div className="form-control flex-center"></div>
            <div className="form-control flex-center">
              <button type="submit" className="submit__btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
