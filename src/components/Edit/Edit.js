import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react/cjs/react.development"
import { useAuthContext } from "../../contexts/AuthContext"
import * as itemsService from '../../services/itemsService'
import "./Edit.css"

const Edit = ({ match, history }) => {
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
    const { user } = useAuthContext()
    let [imageUrl, setImageUrl] = useState('')
    let [product, setProduct] = useState({})
    const productId = match.params.productId

    let imagesChair = ["ringo.jpg", "freedom.jpg", "tn50.jpg"]
    let imagesSitStand = ["kaidi1.jpg", "Voga.jpg", "tn50.jpg"]
    let imagesTools = ["M8-monitor-arm.jpg", "toolbox.jpg", "Addit-bento-ergonomic-toolbox-900-white.jpg"]
    
    let [selectedType, setSelectedType] = useState('')

    let [imageUrls, setImageUrls] = useState([])
    

    useEffect(() => {
        itemsService.getOneCustom(productId)
            .then(result => {
                setProduct(result)
                setSelectedType(result.type)
                if(result.type == 'chairs'){
                    setImageUrls(imagesChair)
                  }
                  if(result.type == 'sit-stand'){
                    setImageUrls(imagesSitStand)
                  }
                  if(result.type == 'work-tools'){
                    setImageUrls(imagesTools)
                  }
               
            })
            

    }, [])
    
  
    function imgSelected(e) {
        let currentdImage = e.target.name
        setImageUrl(currentdImage)
        e.target.className = 'images active'

       Array.from(e.target.parentElement.parentElement.children).map(a => {
           if(a.name !== currentdImage){
               a.childNodes[1].className = "images"
           }
       })
    }

    function handleChange(e) {
        
        setSelectedType(e.target.value);

        if (e.target.value == 'chairs') {
            setImageUrls(imagesChair)

        } else if (e.target.value == 'sit-stand') {
            setImageUrls(imagesSitStand)

        } else if (e.target.value == 'work-tools') {
            setImageUrls(imagesTools)

        }


    }

    

    const onEditHandler = (e) => {
        e.preventDefault();
        let productData = Object.fromEntries(new FormData(e.currentTarget))
        itemsService.edit({...productData, imageUrl}, productId, user.accessToken)
        .then((res) => {
            history.push(`/details-custom-product/${productId}`)
        })


    }

    return (

        <Container>
            <section className="create-container">
                <h2 className="p-5 ms-5">Edit your product</h2>
                <form className="create-form " method='PUT' onSubmit={onEditHandler} >
                    <div className="type">
                        <label htmlFor="chairs">
                            <input type="radio" id="chairs" name="type" value="chairs" checked={selectedType === 'chairs'} onChange={handleChange} />
                            Chairs
                        </label>
                        <label htmlFor="work-tools">
                            <input type="radio" id="work-tools" name="type" value="work-tools" checked={selectedType === 'work-tools'}  onChange={handleChange} />
                            Work tools
                        </label>
                        <label htmlFor="sit-stand">
                            <input type="radio" id="sit-stand" name="type" value="sit-stand" checked={selectedType === 'sit-stand'}  onChange={handleChange} />
                            Sit-Stand
                        </label>
                    </div>
                    <div>
                        <label htmlFor="text">Choose a image:</label>

                        
                        <div className="images-for-product">
                            <a name={imageUrls[0]} onClick={imgSelected} > <img className="images" src={"/" + imageUrls[0]} name={imageUrls[0]} alt="" /></a>
                            <a name={imageUrls[1]} onClick={imgSelected} > <img className="images" src={"/" + imageUrls[1]} name={imageUrls[1]} alt="" /></a>
                            <a name={imageUrls[2]} onClick={imgSelected} > <img className="images" src={"/" + imageUrls[2]} name={imageUrls[2]} alt="" /></a>
                        </div>
                    </div>
                    <div className="title">

                        <input type='text' name="title" defaultValue={product.title}/>
                    </div>
                    <div className="price">
                        <p>
                            <input type='text' name="price" defaultValue={product.price}/> &euro;
                        </p>
                    </div>
                    <div className="description">
                        <h4 htmlFor="description">Description</h4>
                        <input type='text' name="description" defaultValue={product.description} />
                    </div>
                    <input type="submit" value="Edit" style={buttonStyle} />

                </form>

            </section>

        </Container>

    )
}
export default Edit