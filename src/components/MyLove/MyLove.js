
import { useContext, useEffect, useState } from "react/cjs/react.development"
import { useAuthContext } from "../../contexts/AuthContext"

import * as heartsService from '../../services/heartsService' 
import ProductCardCustom from "../ProductCardCustom/ProductCardCustom"


import "./MyLove.css"

const MyLove = () => {

    const { user } = useAuthContext()
    const [myLove, setMylove] = useState([])

useEffect(() => {
    heartsService.getMyLove(user._id)
        .then(result => {
            setMylove(result)
        })
}, [])
    
    return (
        <section>
                <h2 className="text-center p-5">My Love</h2>
                <div className="container mydiv">
                   
                        {myLove.length > 0
                        ? (<div className="row row-cols-3">
                            {myLove.map(x => <ProductCardCustom key={x._id} product={x}/>)}
                            </div>)
                        : <h3 className="text-center p-5">No products love yet</h3>
                        }
                    
                    
                </div>
            </section>

    )
}
export default MyLove