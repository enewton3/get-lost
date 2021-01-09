import "./Contact.css";
import Layout from "../../components/shared/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  return (
    <Layout user={props.user}>
      <div className="form-container">
        <p className="contact-us">
          {" "}
          Feedback? Questions? Just Want To Say Hi? Drop Us A Line{" "}
        </p>
        <FontAwesomeIcon className="hand-right" icon={faHandPointRight} />

        <div className="total-contact">
          <form>
            <label className="label">Name</label>
            <input
              className="input"
              required
              type="text"
              name="name"
              // value={username}
              placeholder="Name"
              // onChange={handleChange}
            />
            <label className="label">Email</label>
            <input
              className="input"
              required
              name="email"
              // value={password}
              type="text"
              placeholder="Email"
              // onChange={handleChange}
            />
            <label className="label">Message</label>
            <input
              className="mess-input"
              required
              name="contact"
              // value={password}
              type="text"
              placeholder="Your Message"
              // onChange={handleChange}
            />

            <button className="mess-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
