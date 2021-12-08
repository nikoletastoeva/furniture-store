import { Button, Navbar, Container, Nav, Carousel } from "react-bootstrap";
import Home from "./components/Home";
import Header from "./components/Header";
import {Route} from 'react-router-dom'
import About from "./components/AboutAs";
import Footer from "./components/Footer";
import Home1 from "./components/Home1";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Create from "./components/Create";
import Details from "./components/Details";
import CustomProducts from "./components/CustomProducts";



function App() {
  return (
<>
 <Header/>
 <Route path='/' exact component={Home1}/>
 <Route path='/about-as' exact component={About}/>
 <Route path='/register' exact component={Register}/>
 <Route path='/login' exact component={Login}/>
 <Route path='/create' exact component={Create}/>
 <Route path='/details/:productId' exact component={Details}/>
 <Route path='/custom-products' exact component={CustomProducts}/>
 <Footer/>

</>
  );
}

export default App;
