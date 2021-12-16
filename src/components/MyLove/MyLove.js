
import { useEffect, useState } from "react/cjs/react.development"
import * as itemsService from '../../services/itemsService' 
import ProductCardCustom from "../ProductCardCustom/ProductCardCustom"

import "./MyLove.css"

const MyLove = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        itemsService.getCustomProducts()
            .then(result => {
                setProducts(Object.values(result))

            })
    }, [])

    return (
        <section>
                <h2>CUSTOM PRODUCTS</h2>
                <div className="container mydiv">
                    <div className="row row-cols-3">
                    {products.map(x => <ProductCardCustom key={x._id} product={x}/>)}
                    </div>
                </div>
            </section>

    )
}
export default MyLove