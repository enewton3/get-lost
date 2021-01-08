import React, { useEffect, useState } from "react";

import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPencilAlt,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import shopProduct from "../../services/shopping";
import Carousel from "../../components/Carousel/Carousel";
// import './DetailCarousel.css';
import "./Detail.css";

const Detail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  const handleDelete = () => {
    deleteProduct(id);
    history.push("/");
  };

  return (
    <Layout user={props.user}>
      {isLoaded ? (
        <div className="product-detail">
          <div className="name">{product.name}</div>
          <div className="price">{`${product.price}`}</div>
          <div className="description">{product.description}</div>
          <Carousel className="detail-carousel" images={product.imgURL} />
          {/* <img
            className="detail-image"
            src={product.imgURL}
            alt={product.name}
          /> */}
          <Link className="edit-link" to={`/edit-product/${product._id}`}>
            <button className="edit-button">
              <FontAwesomeIcon icon={faPencilAlt} />
            </button>
          </Link>
          <button
            className="delete-button"
            onClick={() => {
              handleDelete();
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <div className="cart">
          <button
            className="cart-button"
            onClick={() => shopProduct(product._id)}
          >
            <FontAwesomeIcon icon={faCartPlus} />
            </button>
            </div>
        </div>
      ) : (
        <h1>The journey is worth the wait!</h1>
      )}
    </Layout>
  );
};

export default Detail;
