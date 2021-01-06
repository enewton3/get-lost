import React, { useState } from "react";
import "./SignUp.css";
import { signUp, signIn } from "../../services/users";
import { useHistory, Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking} from "@fortawesome/free-solid-svg-icons";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
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
      return <button className = "up-button" type="submit">Sign Up!</button>;
    }
  };

  const { email, username, password, passwordConfirmation } = form;

  return (
    <Layout>
      <div className="form-container">
      <h3 className= "title">Sign Up >></h3><FontAwesomeIcon className= "hike-dude"
          icon={faHiking}/>
        <div className = "all-sign">
        
        <form onSubmit={onSignUp}>
          <label className= "label-up">Username</label>
          <input className= "input-up"
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter username"
            onChange={handleChange}
          />
          <label className= "label-up">Email address</label>
          <input className= "input-up"
            required
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
          <label className= "label-up">Password</label>
          <input className= "input-up"
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label className= "label-up">Password Confirmation</label>
          <input className= "input-up"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
        </div>
        <h3 className= "do-have">Already have an account? Sign in <Link className="sign-in" to="/sign-in">here!</Link></h3>
      </div>
      
    </Layout>
  );
};

export default SignUp;
