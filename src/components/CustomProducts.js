import ProductCard from "./ProductCard"
import { useEffect, useState } from "react/cjs/react.development"
import * as itemsService from '../services/itemsService' 

const CustomProducts = () => {
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

    const [products, setProducts] = useState([])

    useEffect(() => {
        itemsService.getAll()
            .then(result => {
                setProducts(Object.values(result))

            })
    }, [])

    return (
        <section>
                <h2>CUSTOM PRODUCTS</h2>
                <div className="container mydiv">
                    <div className="row row-cols-3">
                    {products.map(x => <ProductCard key={x._id} product={x}/>)}
                    </div>
                </div>
            </section>

    )
}
export default CustomProducts