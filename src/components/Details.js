import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import * as itemsService from '../services/itemsService'

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
        color: "#fefefe"

    }
    const [product, setProduct] = useState([])
    let id = match.params.productId
    useEffect(() => {
        itemsService.getOne(id)
            .then(result => {
                setProduct(result)
            })
    }, [])

console.log(product.imageUrl)
    return (

        <section>
            <div className='container'>
                <h2>{product.title}</h2>
                
                <p>{product.by}</p>
                <p>{product.price}</p>
                
                <p>{product.description}</p>
                <p className="img">
                <img src={product.imageUrl} alt={product.imageUrl} />
                </p>


            </div>
        </section>

    )
}
export default Details