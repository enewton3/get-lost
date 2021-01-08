import React, { useState, useEffect } from "react";
import "./ProductEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, editProduct } from "../../services/products";

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: [{ image: "" }],
    price: "",
    type: "",
  });
  const [isUpdated, setUpdated] = useState(false);
  const [add, setAdd] = useState(false);
  const params = useParams();
  let { id } = params;

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {}, [add]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await editProduct(id, product);
    setUpdated(updated);
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    product.imgURL[product.imgURL.length] = { image: "" };
    setAdd((prev) => !prev);
  };

  if (isUpdated) {
    return <Redirect to={`/detail/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="product-edit">
        <div className="image-container">
          <img
            className="edit-image"
            src={product.imgURL[0].image}
            alt={product.name}
          />
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          {product.imgURL.map((item, index) => {
            return (
              <input
                className="edit-link"
                placeholder="Image Link"
                value={product.imgURL[index].image}
                name={`${product.imgURL[index].image}`}
                required
                onChange={handleChange}
              />
            );
          })}
          {/* <button
            onClick={(e) => {
              handleAddInput(e);
            }}
          >
            +
          </button> */}
          <input
            className="input-edit"
            placeholder="Name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-edit"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <textarea
            className="input-edit"
            rows={10}
            cols={78}
            placeholder="Description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
          {/* <label htmlFor="type">Type: </label>
          <div id="type">{product.type}</div> */}
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductEdit;
