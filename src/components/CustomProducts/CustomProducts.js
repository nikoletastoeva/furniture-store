
import { useEffect, useState } from "react/cjs/react.development"
import * as itemsService from '../../services/itemsService'
import ProductCardCustom from "../ProductCardCustom/ProductCardCustom"
import "./CustomProducts.css"

const CustomProducts = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        itemsService.getCustomProducts()
            .then(result => {
                setProducts(Object.values(result))

            })
    }, [])

    return (
        <section>
            <h2 className="text-center p-5">CUSTOM PRODUCTS</h2>
            <div className="container mydiv">
                <div className="row">
                    {products.length > 0
                        ? (<div className="row row-cols-3">
                               {products.map(x => <ProductCardCustom key={x._id} product={x} />)}
                        </div>)
                        : <h3 className="text-center p-5">No products created yet</h3>
                    }
                </div>
            </div>
        </section>

    )
}
export default CustomProducts