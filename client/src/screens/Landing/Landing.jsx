import Layout from "../../components/shared/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import "./Landing.css";
import { Link } from "react-router-dom";
import { images } from "../../images/HomepageCarousel";
// import Expedition from 

export default function Landing(props) {
  return (
    <Layout user={props.user}>
      <Carousel source={images} imageChange={true} intervalTime={5000} />
      <div className="all-landing">
        <Link className="landing-link" to={`/listing-page/Day-Trip`}>
          <div className="shop">Shop Day Trip</div>
        </Link>
        <Link className="landing-link" to={`/listing-page/all`}>
          <div className="shop"> Shop All</div>
        </Link>
        <Link className="landing-link" to={`/listing-page/Long-Haul`}>
          <div className="long-haul-container">
          <img />
          <div className="shop">Shop Long Haul</div>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
