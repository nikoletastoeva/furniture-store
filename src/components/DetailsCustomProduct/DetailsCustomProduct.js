import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react/cjs/react.development'
import * as itemsService from '../../services/itemsService'
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext"
import * as heartsService from '../../services/heartsService'

import "./DetailsCustomProduct.css"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';



const DetailsCustomProduct = ({ history }) => {
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
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [classNameLoveBtn, setclassNameLoveBtn] = useState('')
    const [classNamedisLikeBtn, setclassNamedisLikeBtn] = useState('')
    let { user } = useAuthContext()


    useEffect(() => {
        itemsService.getOneCustom(productId)
            .then(result => {
                setProduct(result)
            })
    }, [])

    useEffect(() => {
        heartsService.getOneHeart(productId, user._id)
            .then(result => {

                if (result.length > 0) {
                    setclassNameLoveBtn('hide')
                    setclassNamedisLikeBtn('btn btn-outline-dark')
                } else {
                    setclassNameLoveBtn('btn btn-outline-danger')
                    setclassNamedisLikeBtn('hide')
                }

            })
    }, [])

    const deleteHandler = (e) => {
        e.preventDefault()
        itemsService.deleteProduct(productId, user.accessToken)
            .then((res) => {
                history.push('/custom-products')
            })
    }


    const loveHandler = (e) => {

        heartsService.like(productId, user._id, product, user.accessToken)
            .then((res) => {
                setProduct(state => ({ ...product, hearts: state.hearts ? [...state.hearts, user._id] : [user._id] }))

            })

    }

    const disLikeHandler = (e) => {
        heartsService.dislike(productId, user._id, user.accessToken)
            .then((res) => {
                history.push('/my-love')
            })
    }



    let ownerButtons = (
        <div>
            <Link className="btnDetailsCustom" to={`/edit/${product._id}`}>Edit</Link>
            <button className="btnDetailsCustom" onClick={deleteHandler}>Delete</button>
        </div>

    )
    let likeButtons = (

        <button onClick={loveHandler} className={classNameLoveBtn} disabled={product.hearts?.includes(user._id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
            </svg> Love</button>


    )

    let disLikeButtons = (

        <button onClick={disLikeHandler} className={classNamedisLikeBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
            </svg> UnLove</button>

    )



    return (
        <div className='p-5'>
            <Container className="detailsContainer">

                <h2 className="text-center pt-5">{product.title}</h2>
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2 ">
                        <p><b>Type:</b> {product.type}</p>
                        <p><b>By:</b> {product.by}</p>
                        <p><b>Price:</b> {product.price} &euro;</p>
                        <p>{product.description}</p>

                        {user.email && (user._id === product._ownerId
                            ? ownerButtons
                            : likeButtons)}

                        {user.email
                            ? disLikeButtons
                            : ""
                        }

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
export default DetailsCustomProduct