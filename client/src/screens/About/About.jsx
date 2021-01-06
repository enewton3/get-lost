import React from "react";
import "./About.css";
import Layout from "../../components/shared/Layout/Layout";
// import { Link } from 'react-router-dom';

const About = (props) => {
  return (
    <Layout user={props.user}>
      <div>About Get Lost (and its Dev's!)</div>
    </Layout>
  );
};

export default About;
