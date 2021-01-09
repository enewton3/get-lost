import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Layout from "../../components/shared/Layout/Layout";

async function addToCart(id, quantity) {
  try {
    const response = await fetch(), {
      method: "POST",
      body: JSON.stringify({
        productId: id,
        quantity: quantity,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    let data = await response.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
export default AddToCart;