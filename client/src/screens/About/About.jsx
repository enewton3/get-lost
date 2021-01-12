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
import { Link } from "react-scroll";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Liz from "../../components/DevImages/Liz";
import Evyn from "../../components/DevImages/Evyn";
import Mitch from "../../components/DevImages/Mitch";

const About = (props) => {
  return (
    <Layout user={props.user}>
      <div className="about-background">
        <div className="total-about">
          <div className="about-title"> About Us {">>"} </div>
          <div className="all-about">
            <p className="about-lost">
              {" "}
              Get Lost is a travel brand and gear store specializing in packs of
              all sizes for whatever your next adventure may be. All items are
              tested by staff so you can trust they are just as rugged and ready
              for an expedition as you are. Whether your next big adventure is
              being a nomad in the mountains or urban exploring, get ready to
              Get Lost.{" "}
            </p>
            <div className="check-dev">Check Out the Creators of Get Lost</div>
            <Link to="link1" smooth={true} offset={-80} duration={500}>
              <FontAwesomeIcon className="hand-down" icon={faHandPointDown} />
            </Link>
          </div>
          <div className="about-devs">
            <h6 className="the-devs" id="link1">
              <div className="line-1"></div>
              As engineering fellows, Liz, Mitchell, Evyn, and Shelby were
              tasked with a project to build a fully CRUD-capable, fullstack app
              for a retailer with stellar user-experince in mind. We hope you
              enjoy our project! <div className="line-2"></div>
            </h6>
            <div className="dev-div">
              <h1 className="dev-title">
                SHELBY{" "}
                <FontAwesomeIcon className="airplane" icon={faPaperPlane} />
              </h1>
              <h5 className="about-dev">
                Salutations! Born and raised in Ohio, currently a North Carolina
                resident, I've tried to see as much of our planet as possible.
                When I'm not plotting my next great escape, I relax with my
                house plants and quietly enjoy the local trails and parks. I'm
                so exicted to have worked on Get Lost with my team. I'm
                especially thankful for the technincal accumen Evyn, Liz, and
                Mitchell bring--I've learned so much! On this project, I led the
                design, project managemnt, and UX/UI elements while also taking
                a leadership role in most of the styling. Even though my passion
                and strength is in styling, UX/UI, and project planning, I'm
                blessed to have such strong team memebers who are so talented in
                JS and React who took the time to teach me more about backend
                and component creation. I hope you enjoy your adventure through
                our site!
              </h5>
            </div>
            <div className="dev-div">
              <h1 className="dev-title">
                {" "}
                <Evyn className="evyn-pic" />
                EVYN <FontAwesomeIcon className="train" icon={faSubway} />
              </h1>

              <h5 className="about-dev">
                Hey there! I'm a train-loving, theater making, code monkey that
                loves to travel and see new cities and places. Originally from
                Massachusetts, I am excited to be able to travel again soon.
              </h5>
            </div>
            <div className="dev-div">
              <h1 className="dev-title">
                <Liz className="liz-pic" />
                LIZ <FontAwesomeIcon className="paw" icon={faPaw} />
              </h1>
              <h5 className="about-dev">
                Hello fellow adventurers! I’m so glad to be a part of your
                journey! I'm a Colorado native and grew up playing in the Rocky
                Mountains. The Rockies offer a summertime playground where we
                camp, hike, mountain bike and rock climb, just to name a few
                cool ways to spend a day. Every new experience is an opportunity
                to learn more about ourselves and our world. I hope you enjoy
                traversing our site. I led the creation of the component
                hierarchy and planning the technical layout of the site. I
                headed up the back-end development, setting the foundation for
                the site. The Digital Nomads team has been one of the highlights
                of my early development career. Working with a team of talented
                professionals is a huge part of software engineering. I've
                learned and grown a lot through the process of creating this web
                site. I'm looking forward to future challenges!
              </h5>
            </div>
            <div className="dev-div">
              <h1 className="dev-title">
                <Mitch className="mitch-pic" />
                MITCH <FontAwesomeIcon className="notes" icon={faMusic} />
              </h1>
              <h5 className="about-dev">
                Hey there, thank you for taking the time to read about us! I go
                by Mitch. I am a bit of a nomad having lived on almost every
                coast of the US. Currently, I reside in Los Angeles where hikes
                and views are plentiful. The site was a joy to make, as we all
                have a combined interest in travel and exploration. Again,
                thanks for reading up on us, and don't forget to check the sale
                section!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
