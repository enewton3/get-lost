import "./Contact.css";
import Layout from "../../components/shared/Layout/Layout";


const Contact = () => {
  

  return (
    <Layout>
      
      <div className="form-container">
     
      <div className= "total-contact">
       <h2 className="contact-us"> Feedback? Questions? Just Want To Say Hi? Drop Us </h2>
        <form >
          <label className= "label">Name</label>
          <input className= "input"
            required
            type="text"
            name="name"
            // value={username}
            placeholder="Name"
            // onChange={handleChange}
          />
          <label className= "label">Email</label>
          <input className= "input"
            required
            name="email"
            // value={password}
            type="text"
            placeholder="Email"
            // onChange={handleChange}
            />
            <label className= "label">How Can We Help?</label>
          <input className= "input"
            required
            name="contact"
            // value={password}
            type="text"
            placeholder="Your Message"
            // onChange={handleChange}
          />
          
          
          </form>
        </div>
        
          </div>
    </Layout>
  );
};

export default Contact;
