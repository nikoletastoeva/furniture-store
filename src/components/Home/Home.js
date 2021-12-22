
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development"
import * as itemsService from '../../services/itemsService'
import ProductCard from "../ProductCard/ProductCard";

import "./Home.css"



const Home = () => {
   
    const [products, setProducts] = useState([])

    useEffect(() => {
        itemsService.getAll()
            .then(result => {
                setProducts(Object.values(result))

            })
    }, [])



    const [showResults, setShowResults] = useState(false)
    function showAfterImg() {
        return setShowResults(true)
    }
    function showBeforeImg() {
        return setShowResults(false)
    }



    return (
        <div >
            <section>

                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2 ">
                        {showResults
                            ? <div className="p-0"><img className="img-fluid" src="after_new.svg" alt="..." /></div>
                            : <div className="p-0"><img className="img-fluid" src="before_new.svg" alt="..." /></div>}
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2>KEY UPGRADES FOR <br></br> WFH SUCCESS</h2>
                            <div className="py-5">
                                <p>Are you experiencing repetitive stress issues like back aches, neck stiffness or leg numbness due to poor ergonomics in your office set up? Click on your paint point and learn more about what could be causing it. For complete self-assessment of your workstation please take our Ergonomic Assessment.
                                </p>
                            </div>
                            <Link to="/custom-products" className="buttonStyle ">Custom products</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12" style={{ textAlign: "center", marginTop: "20px" }}>
                    <button  className="buttonStyle" onClick={showBeforeImg}>Before</button>
                    <button  className="buttonStyle" onClick={showAfterImg}>After</button>

                </div>
            </section>
            <section>
                <h2 className="text-center  p-5 ">OUR PRODUCTS</h2>
                <div className="container mydiv">
                    <div className="row row-cols-3">
                    {products.map(x => <ProductCard key={x._id} product={x}/>)}
                    </div>
                </div>
            </section>



        </div>
    )
}
export default Home