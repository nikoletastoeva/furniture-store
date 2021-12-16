
import { useEffect, useState } from "react/cjs/react.development"
import * as itemsService from '../../services/itemsService'
import ProductCard from "../ProductCard/ProductCard";

import "./Home.css"



const Home = () => {
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
        

    }

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
        <div style={{ backgrondColor: "#f5f0ec" }}>
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
                            <div>
                                <p>Are you experiencing repetitive stress issues like back aches, neck stiffness or leg numbness due to poor ergonomics in your office set up? Click on your paint point and learn more about what could be causing it. For complete self-assessment of your workstation please take our Ergonomic Assessment.
                                </p>
                            </div>
                            <button href="/all-products" style={buttonStyle}>All products</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12" style={{ textAlign: "center", marginTop: "20px" }}>
                    <button  style={buttonStyle} onClick={showBeforeImg}>Before</button>
                    <button  style={buttonStyle} onClick={showAfterImg}>After</button>

                </div>
            </section>
            <section>
                <h2 className="text-center  p-5 ">BEST PRODUCTS</h2>
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