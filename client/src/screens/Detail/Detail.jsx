import React from "react";
import '/Detail.css';
import Layout from '../../components/shared/Layout/Layout';
import { getProduct, deleteProduct } from '../../services/products'
import {useParams, Link} from 'react-router-dom'

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
        <button className='edit-button' onClick={() => editProduct(product._id)}><FontAwesomeIcon icon={fa-trash-alt} /></button>
        <button className='delete-button' onClick={() => deleteProduct(product.id)}><FontAwesomeIcon icon={fa-pencil-alt} /></button>
      </div>
  </Layout>
)

}

export default Detail

