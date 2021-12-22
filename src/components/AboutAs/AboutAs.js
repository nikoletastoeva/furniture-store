
import './AboutAs.css'

const About = () => {


    return (
        <div >
            <div className='container px-5'>
                <div className="row gx-5 align-items-center">
                <h1 className="display-1 text-center p-5">WHAT WE STAND FOR</h1>
                <p className="text-center p-5" >Studio Novo is the market leader in elevating the human performance at work through good design and expert knowledge in workplace ergonomics. Our mission is to make it easy for companies to scale their business performance by creating healthy, inspirational and efficient work environments, leveraging our knowledge in furniture/ systems and best workplace practices.</p>
                </div>
            </div>
            <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid" src="img.jpg" alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <p>We are dedicated to bringing timetested design solutions for the contract, residential, and hospitality markets. We have a care fully curated mid century modern and contemporary furniture, lighting, and accessories selection to complement the discerning tastes of interior designers and arc hit ects, contract and residential clients in Sofia, Bulgaria and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5"><img className="img-fluid" src="img1.jpg" alt="..." /></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <p>In addition to our expert furniture and systems knowledge, we takeon entire projects, managing and delivering a turnkey interior product package that meets and exceeds your expectations. Our success is based on a wide product package, backed with expert support and quality service. Studio Novo is a p roducer of custom office furniture and general contractor for a wide range of fit out works for commercial interiors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default About