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
import { shopProduct } from "../../services/shopping";
import Carousel from "../../components/Carousel/Carousel";
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
    alert("item deleted");
    history.push("/");
  };

  const handleShop = () => {
    shopProduct(id);
    history.push("/shopping-cart");
  };

  return (
    <Layout user={props.user}>
      <div className="all-detail">
        {isLoaded ? (
          <div className="product-detail">
            <div className="name">{product.name}</div>
            <div className="price">{`${product.price}`}</div>
            <div className="description">{product.description}</div>

            <Carousel
              className="detail-carousel"
              source={product.imgURL}
              type="detail"
            />
            <div className="deet-butt">
              <Link className="edit-link" to={`/edit-product/${product._id}`}>
                <button className="edit-button">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </Link>
              <button
                className="trash-button"
                onClick={() => {
                  window.confirm("Are you sure you want to delete this item?")
                    ? handleDelete()
                    : alert("cancelled");
                }}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>

            <button className="cart-button" onClick={() => handleShop()}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        ) : (
          <h1>The journey is worth the wait!</h1>
        )}
      </div>
    </Layout>
  );
};

export default Detail;
