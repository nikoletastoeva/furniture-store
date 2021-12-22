import { Container } from "react-bootstrap"
import { useState } from "react/cjs/react.development"
import "./Create.css"
import * as itemsService from '../../services/itemsService'
import { useAuthContext } from "../../contexts/AuthContext"
import { Alert } from "react-bootstrap"

const Create = ({ history }) => {

    const [errors, setErrors] = useState({ name: "", title: false, price: false, description: false })
    let imagesChair = ["ringo.jpg", "freedom.jpg", "tn50.jpg"]
    let imagesSitStand = ["kaidi1.jpg", "Voga.jpg", "tn50.jpg"]
    let imagesTools = ["M8-monitor-arm.jpg", "toolbox.jpg", "Addit-bento-ergonomic-toolbox-900-white.jpg"]

    let [imageUrl, setImageUrl] = useState('')
    let [imageUrls, setImageUrls] = useState(imagesChair)

    const { user } = useAuthContext()



    function imgSelected(e) {
        let currentdImage = e.target.name
        setImageUrl(currentdImage)
        e.target.className = 'images active'

        Array.from(e.target.parentElement.parentElement.children).map(a => {
            if (a.name !== currentdImage) {
                a.childNodes[1].className = "images"
            }
        })

    }

    let [selectedType, setSelectedType] = useState('chairs')

    function handleChange(e) {

        setSelectedType(e.target.value);

        if (e.target.value === 'chairs') {
            setImageUrls(imagesChair)

        } else if (e.target.value === 'sit-stand') {
            setImageUrls(imagesSitStand)

        } else if (e.target.value === 'work-tools') {
            setImageUrls(imagesTools)

        }


    }

    const onCreateHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget)
        let type = formData.get('type')
        let title = formData.get('title')
        let description = formData.get('description')
        let price = formData.get('price')
        let by = formData.get('by')

        itemsService.create({
            type,
            title,
            imageUrl,
            description,
            price,
            by
        }, user.accessToken)
            .then(result => {

                history.push('/custom-products')
            })

    }

    const titleChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 5) {
            setErrors(state => ({ ...state, title: 'Your title sould be at least 5 characters!' }))
        } else {
            setErrors(state => ({ ...state, title: false }))
        }

    }

    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 2) {
            setErrors(state => ({ ...state, name: 'Your name sould be at least 2 characters!' }))
        } else {
            setErrors(state => ({ ...state, name: false }))
        }

    }

    const priceChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 2) {
            setErrors(state => ({ ...state, price: 'Your price sould be at least 2 numbers!' }))
        } else {
            setErrors(state => ({ ...state, price: false }))
        }

    }

    const descriptionChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length > 100) {
            setErrors(state => ({ ...state, description: 'Your description sould be max 100 characters!' }))
        } else {
            setErrors(state => ({ ...state, description: false }))
        }

    }


    return (
        <div className="p-5">
            <Container className='createContainer'>

                <h2 className="text-center p-5">Create your custom product</h2>
                <form className="create-form" method='POST' onSubmit={onCreateHandler} >
                    <fieldset>
                        <div className="type">
                            <label htmlFor="chairs">
                                <input type="radio" id="chairs" name="type" value="chairs" checked={selectedType === 'chairs'} onChange={handleChange} />
                                Chairs
                            </label>
                            <label htmlFor="work-tools">
                                <input type="radio" id="work-tools" name="type" value="work-tools" checked={selectedType === 'work-tools'} onChange={handleChange} />
                                Work tools
                            </label>
                            <label htmlFor="sit-stand">
                                <input type="radio" id="sit-stand" name="type" value="sit-stand" checked={selectedType === "sit-stand"} onChange={handleChange} />
                                Sit-Stand
                            </label>
                        </div>
                        <div >
                            <label htmlFor="text">Choose a image:</label>


                            <div className="images-for-product">
                                <a name={imageUrls[0]} onClick={imgSelected} > <img className="images active" src={imageUrls[0]} name={imageUrls[0]} alt="" /></a>
                                <a name={imageUrls[1]} onClick={imgSelected} > <img className="images" src={imageUrls[1]} name={imageUrls[1]} alt="" /></a>
                                <a name={imageUrls[2]} onClick={imgSelected} > <img className="images" src={imageUrls[2]} name={imageUrls[2]} alt="" /></a>
                            </div>

                        </div>
                        <div className="title">

                            <input className="form-control-lg" type='text' id="title" name="title" placeholder="Title: write something personal..." onBlur={titleChangeHandler} />

                            <Alert variant="danger" show={errors.title}>{errors.title}</Alert>

                        </div>
                        <div className="by">

                            <input className="form-control-lg" type='text' name="by" placeholder="By: Your name" onBlur={nameChangeHandler} />
                            <Alert variant="danger" show={errors.name}>{errors.name}</Alert>
                        </div>
                        <div className="price">
                            <p>
                                <input className="form-control-lg" type='number' name="price" placeholder="Price" onBlur={priceChangeHandler} />

                            </p>
                            <Alert variant="danger" show={errors.price}>{errors.price}</Alert>
                        </div>
                        <div className="description">
                            <h4 htmlFor="description">Description</h4>

                            <textarea className="form-control-lg" type='text' name="description" onBlur={descriptionChangeHandler} required></textarea>
                            <Alert variant="danger" show={errors.description}>{errors.description}</Alert>
                        </div>
                        <input type="submit" value="Create Me!" className="buttonStyle" />
                    </fieldset>
                </form>



            </Container>
        </div>
    )
}
export default Create