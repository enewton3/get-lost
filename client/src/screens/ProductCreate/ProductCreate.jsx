import React, { useState } from "react";
import "./ProductCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
    type: null,
  });

  const types = ["Day-Trip", "Long-Haul"];

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "imgURL") {
      const imgObject = [{ image: value }];
      setProduct({
        ...product,
        imgURL: imgObject,
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!product.type) {
      alert("Please select a type!");
    } else {
      const created = await createProduct(product);
      setCreated({ created });
    }
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <h1 className="add-title">Add A New Product</h1>
        <input
          className="input-add"
          placeholder="Name"
          value={product.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-add"
          placeholder="Price"
          value={product.price}
          name="price"
          required
          onChange={handleChange}
        />
        <textarea
          className="input-add"
          rows={10}
          placeholder="Description"
          value={product.description}
          name="description"
          required
          onChange={handleChange}
        />
        <input
          className="input-add"
          placeholder="Image Link"
          value={product.imgURL[0].image}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <label htmlFor="type">Type: </label>
        <select name="type" id="type" onChange={handleChange}>
          {types.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default ProductCreate;
