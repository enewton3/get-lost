import React from "react";
import "./About.css";
import Layout from "../../components/shared/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";


const About = (props) => {
  return (
    <Layout user={props.user}>
      <div className="total-about">
        < div className="about-title"> About Us >> </div>
        <div className="all-about">
          <p className="about-lost"> Get Lost is a travel brand and gear store specializing in packs of all sizes for whatever your next adventure may be. All items are tested by staff so you can trust they are just as rugged and ready for an expedition as you are. Whether your next big adventure is being a nomad in the mountains or urban exploring, get ready to Get Lost. </p>
          <div className="check-dev">Check  Out the Creators of Get Lost</div>
          <FontAwesomeIcon className="hand-down" icon={faHandPointDown} />
        </div>
        <div className="about-devs">
          <h6 className="the-devs">As engineering fellows, Liz, Mitchell, Evyn, and Shelby were tasked with a project to build a fully CRUD-capable, fullstack app for a retailer with stellar user-experince in mind.  We hope you enjoy our project!  </h6>
          <div className="shelby-div"><h1 className="shelby-title">SHELBY</h1><h5 className="about-shelby">ldhflvhdelhfldehsflsdflsdlkdslkhlsdhvgflsdhlvgfihdslfihsdihfvgiadhwfvgliohdfvlogidihfgvldiohvlsdhvgjlsbfdvkjbsfjvbloaidhfadlkbvkjdabv
         jsdbfvshdvfjsnjksdkjbfsjldfbhsljbfkjsdbfjbvadlJbflaFkjbskdjfb</h5></div>
          <div className="evyn-div"><h1 className="evyn-title">EVYN</h1><h5 className="about-evyn">ldhflvhdelhfldehsflsdflsdlkdslkhlsdhvgflsdhlvgfihdslfihsdihfvgiadhwfvgliohdfvlogidihfgvldiohvlsdhvgjlsbfdvkjbsfjvbloaidhfadlkbvkjdabv
         jsdbfvshdvfjsnjksdkjbfsjldfbhsljbfkjsdbfjbvadlJbflaFkjbskdjfb</h5></div>
          <div className="liz-div"><h1 className="liz-title">LIZ</h1><h5 className="about-liz">ldhflvhdelhfldehsflsdflsdlkdslkhlsdhvgflsdhlvgfihdslfihsdihfvgiadhwfvgliohdfvlogidihfgvldiohvlsdhvgjlsbfdvkjbsfjvbloaidhfadlkbvkjdabv
         jsdbfvshdvfjsnjksdkjbfsjldfbhsljbfkjsdbfjbvadlJbflaFkjbskdjfb</h5></div>
          <div className="mitch-div"><h1 className="mitch-title">MITCH</h1><h5 className="about-mitch">ldhflvhdelhfldehsflsdflsdlkdslkhlsdhvgflsdhlvgfihdslfihsdihfvgiadhwfvgliohdfvlogidihfgvldiohvlsdhvgjlsbfdvkjbsfjvbloaidhfadlkbvkjdabv
         jsdbfvshdvfjsnjksdkjbfsjldfbhsljbfkjsdbfjbvadlJbflaFkjbskdjfb</h5></div>
        </div>
        <h7 className="about-liz"><strong>Liz Yrineo</strong>Hello fellow adventurers!  I’m so glad to be a part of your journey!  As a Colorado native, I have grown up playing in and caring for the Rocky Mountains.  We’re not just a ski destination.  We also get to camp, hike, mountain bike and rock climb, just to name a few incredible activities that I enjoy.  Whether we’re out for a day-long hike or trekking for days, every new experience is an opportunity to learn more about ourselves and our world.  So throw on your pack and embark on your own wonderous excursion!</h7>
      </div>
  </Layout>
  );
};

export default About;
