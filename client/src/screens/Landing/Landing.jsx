import Layout from "../../components/shared/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import "./Landing.css";
import { Link } from "react-router-dom";
import { images } from "../../images/HomepageCarousel";

export default function Landing(props) {
  return (
    <Layout user={props.user}>
      <Carousel images={images} imageChange={true} intervalTime={5000} />
      <div className="all-landing">
      <Link className="landing-link" to={`/listing-page/Day-Trip`}>
        <div className="shop">Shop Day Trip</div>
      </Link>
      <Link className="landing-link" to={`/listing-page/all`}>
        <div className="shop"> Shop All</div>
      </Link>
      <Link className="landing-link" to={`/listing-page/Expedition`}>
        <div className="shop">Shop Long Haul</div>
        </Link>
        </div>
    </Layout>
  );
}
