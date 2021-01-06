import Layout from "../../components/shared/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import "./Landing.css";
import { Link } from "react-router-dom";
import { images } from "../../images/HomepageCarousel";

export default function Landing(props) {
  return (
    <Layout user={props.user}>
      <Carousel images={images} />
      <Link className="day-trip-link" to={`/listing-page/Day-Trip`}>
        <div className="shop-day-trip">Shop Day Trip</div>
      </Link>
      <Link className="all-link" to={`/listing-page/all`}>
        <div className="shop-all">Shop All</div>
      </Link>
      <Link className="expedition-link" to={`/listing-page/Expedition`}>
        <div className="shop-expedition">Shop Long Haul</div>
      </Link>
    </Layout>
  );
}
