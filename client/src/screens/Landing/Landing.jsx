import Layout from "../../components/shared/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing(props) {
  return (
    <Layout user={props.user}>
      <Carousel />
      <Link to={`/Listing/Day-Trip`}>
        <div className="shop-day-trip">Shop Day Trip</div>
      </Link>
      <Link to={`/Listing/Expedition`}>
        <div className="shop-expedition">Shop Day Trip</div>
      </Link>
      <Link to={`/Listing/all`}>
        <div className="shop-all">Shop Day Trip</div>
      </Link>
    </Layout>
  );
}
