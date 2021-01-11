import "./Contact.css";
import Layout from "../../components/shared/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  return (
    <Layout user={props.user}>
      <div className="contact-form-container">
        <p className="contact-us">
          {" "}
          Feedback? Questions? Just Want To Say Hi? Drop Us A Line{" "}
        </p>
        <FontAwesomeIcon className="hand-right" icon={faHandPointRight} />

        <div className="total-contact">
          <form>
            <label className="contact-label">Name</label>
            <input
              className="contact-input"
              required
              type="text"
              name="name"
              // value={username}
              placeholder="Name"
              // onChange={handleChange}
            />
            <label className="contact-label">Email</label>
            <input
              className="contact-input"
              required
              name="email"
              // value={password}
              type="text"
              placeholder="Email"
              // onChange={handleChange}
            />
            <label className="contact-label">Message</label>
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
