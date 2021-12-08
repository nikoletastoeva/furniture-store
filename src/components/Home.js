import { Image, Button, Navbar, Container, Nav, Carousel, Row, Col, ToastContainer, Card} from "react-bootstrap";


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

    }
    let imgStyle = {
        float: 'right',
        width: 'auto',
        padding: '10px'
    }
    let h2Style = {
        textTransform: 'uppercase',
        fontSize: '48px',
        lineHeight: '48px',
        textAlign: 'left'
    }
    let col1Style = {
        width: '29.6667%',
        marginRight: '5.5%',
        zIndex: '9',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat'
    }


    return (
        <>

            <Row >
                <Container>
                    <Col bsPrefix='col1' style={col1Style}>
                        <h2 style={h2Style}>KEY UPGRADES FOR <br></br> WFH SUCCESS</h2>
                        <div>
                            <p>Are you experiencing repetitive stress issues like back aches, neck stiffness or leg numbness due to poor ergonomics in your office set up? Click on your paint point and learn more about what could be causing it. For complete self-assessment of your workstation please take our Ergonomic Assessment.
                            </p>
                        </div>
                        <Button bsPrefix='btn-chairs' style={buttonStyle}>All chairs</Button>
                    </Col>
                    <Col  ><Image src="before_new.svg" style={imgStyle}></Image></Col>


                </Container>
            </Row>
            <Button bsPrefix='btn-before' style={buttonStyle}>Before</Button>
            <Button bsPrefix='btn-after' style={buttonStyle}>After</Button>
            <h1>BEST SALE</h1>
            <Row >
                <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src="ringo.jpg" />
                    <Card.Body>
                        <Card.Title>Ringo</Card.Title>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src="ringo.jpg" />
                    <Card.Body>
                        <Card.Title>Ringo</Card.Title>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src="ringo.jpg" />
                    <Card.Body>
                        <Card.Title>Ringo</Card.Title>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src="ringo.jpg" />
                    <Card.Body>
                        <Card.Title>Ringo</Card.Title>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
                
            </Row>

        </>
    )
}
export default Home