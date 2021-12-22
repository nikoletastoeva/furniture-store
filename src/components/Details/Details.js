import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react/cjs/react.development'
import * as itemsService from '../../services/itemsService'


import "./Details.css"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Details = ({ match }) => {
    
    const {productId} = useParams()
    const [product, setProduct] = useState([])
    

    useEffect(() => {
        itemsService.getOne(productId)
            .then(result => {
                setProduct(result)
            })
    }, [])



    


    return (
<div className='p-5'>
        <Container className='detailsContainer'>

            <h2 className="text-center p-5">{product.title}</h2>

            <div className="row align-items-center">

                <div className="col-lg-6 order-lg-2 ">
                    <p><b>Type:</b> {product.type}</p>
                    <p><b>By:</b> {product.by}</p>
                    <p><b>Price:</b> {product.price} &euro;</p>
                    <p>{product.description}</p>

                </div>
                <div className="col-lg-6 order-lg-1">

                    <p className="img">
                        <img src={`/${product.imageUrl}`} alt="" className='rounded mx-auto d-block' style={{ "width": "400px" }} />
                    </p>
                </div>
            </div>



        </Container>
        </div>
    )
}
export default Details