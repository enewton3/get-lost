import React from "react";
import '/Detail.css';
import Layout from '../../components/shared/Layout/Layout';
import { getProduct, deleteProduct } from '../../services/products'
import { useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import shopProduct from '../../services/product';


const Detail = (props) => {

  const [product, setProduct] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
      setLoaded(true)
    }
    fetchProduct()
  }, [id])

  if (!isLoaded) {
    return <h1>The journey is worth the wait!</h1>
  }
  return (
    <Layout user={props.user}>
      <div className='product-detail'>
        <div className='name'>{product.name}</div>
        <div className='price'>{`${product.price}`}</div>
        <div className='description'>{product.description}</div>
        <img className='detail-image' src={product.imgURL} alt={product.name} />
        <Link className='edit-link' to={`/edit-product/${product._id}`}><button className='edit-button'><FontAwesomeIcon icon={faPencilAlt} /></button></Link>
        <button className='delete-button' onClick={() => deleteProduct(product._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        <button className='cart-button' onClick={() => shopProduct(product._id)}><FontAwesomeIcon icon={faCartPlus} /></button>
      </div>
  </Layout>
)
}

export default Detail

