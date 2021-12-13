import { Link } from "react-router-dom"
import "./ProductCards.css"

const ProductCard = (match) => {
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



    return (

        <div className="col-md-4">
            <div className="bbb_deals">
                <div className="bbb_deals_slider_container">
                    <div className=" bbb_deals_item">
                        <div className="bbb_deals_image"><img src={match.product.imageUrl} alt="" /></div>
                        <div className="bbb_deals_content">
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">

                            </div>
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_name">{match.product.title}</div>

                            </div>
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_name">By {match.product.by}</div>
                                <div className="bbb_deals_item_price ml-auto">{match.product.price} &euro;</div>
                            </div>
                            <div className=" d-flex flex-row justify-content-start">
                                <Link to={`details/${match.product._id}`} style={buttonStyle}>Details</Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard