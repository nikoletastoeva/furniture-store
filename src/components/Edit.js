import { Container } from "react-bootstrap"
import { useState } from "react/cjs/react.development"
import "./Create.css"

const Edit = () => {
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
    let [imageUrl, setImageUrl] = useState('')
    let [description, setDescription] = useState('')

    function imgSelected(e) {
        setDescription('neshto')
        setImageUrl(e.target.name)
    }

    let [selectedType, setSelectedType] = useState('chairs')

    function handleChange(e) {

        setSelectedType(e.target.value);

    }

    const onCreateHandler = (e) => {
		e.preventDefault();

        
		
	}

    return (

        <Container>
            <section className="create-container">
                <h2 className="p-5 ms-5">Create your custom product</h2>
                <form className="create-form " method='POST' onSubmit={onCreateHandler} >
                    <div className="type">
                        <label htmlFor="chairs">
                            <input type="radio" id="chairs" name="type" value="chairs" checked={selectedType === 'chairs'} onChange={handleChange} />
                            Chairs
                        </label>
                        <label htmlFor="tables">
                            <input type="radio" id="tables" name="type" value="tables" checked={selectedType === 'tables'} onChange={handleChange} />
                            Tables
                        </label>
                        <label htmlFor="sit-stand">
                            <input type="radio" id="sit-stand" name="type" value="sit-stand" checked={selectedType === "sit-stand"} onChange={handleChange} />
                            Sit-Stand
                        </label>
                    </div>
                    <div >
                        <label htmlFor="text">Choose a image:</label>
                        
                        <div className="images-for-product">
                            <a onClick={imgSelected}> <img className="images" src="/ringo.jpg" name="ringo.jpg" /></a>
                            <img className="images" src="/ringo.jpg" />
                            <img className="images" src="/ringo.jpg" />
                        </div>
                    </div>
                    <div className="title">
                    
                    <input type='text' name="title" placeholder="Title: write something personal..." />
                    </div>
                    <div className="price">
                    <p>
                    <input type='text' name="price" placeholder="Price" /> &euro;
                    </p>
                    </div>
                    <div className="description">
                    <h4 htmlFor="description">Description</h4>
                    <input type='text' name="description" defaultValue={description} disabled/>
                    </div>
                    <input type="submit" value="Create Me!" style={buttonStyle} />

                </form>

            </section>

        </Container>

    )
}
export default Edit