import React, { useState } from "react";
import "./SignIn.css";
import Layout from "../../components/shared/Layout/Layout";
import { signIn } from "../../services/users";
import { useHistory, Link } from "react-router-dom";
import HeyThere from "../../components/HeyThere/HeyThere";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: "",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button className="sign-button" type="submit">
          Sign In
        </button>
      );
    }
  };

  const { username, password } = form;

  return (
    <Layout>
      <div className="form-container">
        <HeyThere />
        <div className="total-sign">
          <form className="signin-form" onSubmit={onSignIn}>
            <label className="signin-label">Username</label>
            <input
              className="input"
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={handleChange}
            />
            <label className="signin-label">Password</label>
            <input
              className="input"
              required
              name="password"
              value={password}
              type="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
            {renderError()}
          </form>
        </div>

        <h3 className="dont-have">
          Don't have an account? Sign up{" "}
          <Link className="sign-up" to="/sign-up">
            here!
          </Link>
        </h3>
      </div>
    </Layout>
  );
};

export default SignIn;
