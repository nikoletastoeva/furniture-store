import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react/cjs/react.development'
import * as itemsService from '../../services/itemsService'
import { Link } from "react-router-dom";
import { useAuthContext } from '../../contexts/AuthContext';
import * as heartsService from '../../services/heartsService'

import "./Details.css"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Details = ({ match }) => {
    let buttonStyle = {
        fontSize: "16px",
        lineHeight: "16px",
        borderRadius: '50px 50px 50px 50px',
        overflow: 'hidden',
        borderWidth: "0px",
        paddingTop: '12px',
        paddingRight: '64px',
        paddingBottom: '12px',
        paddingLeft: '64px',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        color: "#fefefe",
        textDecoration: "none"

    }
    const {productId} = useParams()
    const [product, setProduct] = useState([])
    

    useEffect(() => {
        itemsService.getOne(productId)
            .then(result => {
                setProduct(result)
            })
    }, [])



    


    return (

        <Container className="" style={{ "backgroundColor": "white", "boxShadow": "1px 1px 5px 1px rgb(0 0 0 / 10%)", "borderRadius": "5px" }}>

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

    )
}
export default Details