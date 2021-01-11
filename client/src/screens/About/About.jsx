import React from "react";
import "./About.css";
import Layout from "../../components/shared/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faMusic,
  faPaw,
  faSubway,
} from "@fortawesome/free-solid-svg-icons";

const About = (props) => {
  return (
    <Layout user={props.user}>
      <div className="total-about">
        <div className="about-title"> About Us {">>"} </div>
        <div className="all-about">
          <p className="about-lost">
            {" "}
            Get Lost is a travel brand and gear store specializing in packs of
            all sizes for whatever your next adventure may be. All items are
            tested by staff so you can trust they are just as rugged and ready
            for an expedition as you are. Whether your next big adventure is
            being a nomad in the mountains or urban exploring, get ready to Get
            Lost.{" "}
          </p>
          <div className="check-dev">Check Out the Creators of Get Lost</div>
          <FontAwesomeIcon className="hand-down" icon={faHandPointDown} />
        </div>
        <div className="about-devs">
          <h6 className="the-devs">
            <div className="line-1"></div>
            As engineering fellows, Liz, Mitchell, Evyn, and Shelby were tasked
            with a project to build a fully CRUD-capable, fullstack app for a
            retailer with stellar user-experince in mind. We hope you enjoy our
            project! <div className="line-2"></div>
          </h6>
          <div className="dev-div">
            <h1 className="dev-title">SHELBY</h1>
            <h5 className="about-dev">
              ldhflvhdelhfldehsflsdflsdlkdslkhlsdhvgflsdhlvgfihdslfihsdihfvgiadhwfvgliohdfvlogidihfgvldiohvlsdhvgjlsbfdvkjbsfjvbloaidhfadlkbvkjdabv
              jsdbfvshdvfjsnjksdkjbfsjldfbhsljbfkjsdbfjbvadlJbflaFkjbskdjfb
            </h5>
          </div>
          <div className="dev-div">
            <h1 className="dev-title">
              EVYN <FontAwesomeIcon icon={faSubway} />
            </h1>

            <h5 className="about-dev">
              Hey there! I'm a train-loving, theater making, code monkey that
              loves to travel and see new cities and places. Originally from
              Massachusetts, I am excited to be able to travel again soon.
            </h5>
          </div>
          <div className="dev-div">
            <h1 className="dev-title">
              LIZ <FontAwesomeIcon className="paw" icon={faPaw} />
            </h1>
            <h5 className="about-dev">
              Hello fellow adventurers! I’m so glad to be a part of your
              journey! I'm a Colorado native and grew up playing in the Rocky Mountains. The Rockies offer a summertime playground where we camp,
              hike, mountain bike and rock climb, just to name a few cool
              ways to spend a day. Every new experience is an opportunity to learn
              more about ourselves and our world. 
              I hope you enjoy traversing our site.  I led the creation of the component hierarchy and planning the technical layout of the site.  I headed up the back-end development, setting the foundation for the site.  The Digital Nomads team has been one of the highlights of my early development career.  Working with a team of talented professionals is a huge part of software engineering.  I've learned and grown a lot through the process of creating this web site.  I'm looking forward to future challenges!
            </h5>
          </div>
          <div className="dev-div">
            <h1 className="dev-title">
              MITCH <FontAwesomeIcon className="notes" icon={faMusic} />
            </h1>
            <h5 className="about-dev">
              Hey there, thank you for taking the time to read about us! I go by
              Mitch. I am a bit of a nomad having lived on almost every coast of
              the US. Currently, I reside in Los Angeles where hikes and views
              are plentiful. The site was a joy to make, as we all have a
              combined interest in travel and exploration. Again, thanks for
              reading up on us, and don't forget to check the sale section!
            </h5>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
