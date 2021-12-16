import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react/cjs/react.development'
import * as itemsService from '../../services/itemsService'
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext"

import "./DetailsCustomProduct.css"


const DetailsCustomProduct = ({ match }) => {
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
    const [product, setProduct] = useState([])
    let id = match.params.productId
    useEffect(() => {
        itemsService.getOneCustom(id)
            .then(result => {
                setProduct(result)
            })
    }, [])

    const deleteHandler = (e) => {
        e.preventDefault()
    }
    let { user } = useAuthContext()

    let ownerButtons = (
        <div>
            <Link style={buttonStyle} to={`/edit/${product._id}`}>Edit</Link>
            <button style={buttonStyle} onClick={deleteHandler}>Delete</button>
        </div>

    )
    let likeButtons = (

        <button className='btn btn-outline-danger'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
            </svg> Love</button>

    )


    return (

        <Container className="" style={{ "backgroundColor": "white", "boxShadow": "1px 1px 5px 1px rgb(0 0 0 / 10%)", "borderRadius": "5px" }}>

            <h2 className="text-center p-5">{product.title}</h2>
            <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2 ">
                    <p><b>Type:</b> {product.type}</p>
                    <p><b>By:</b> {product.by}</p>
                    <p><b>Price:</b> {product.price} &euro;</p>
                    <p>{product.description}</p>
                    {user.email ? likeButtons : ""}


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
export default DetailsCustomProduct