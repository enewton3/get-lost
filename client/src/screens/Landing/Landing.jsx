import Layout from "../../components/shared/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import './Landing.css'

export default function Landing(props) {
  return (
      <Layout user={props.user}>
        <Carousel />
      </Layout>
  );
}
