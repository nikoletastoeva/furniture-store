
import Header from "./components/Header/Header";
import { Route,Switch } from 'react-router-dom'
import About from "./components/AboutAs/AboutAs";
import Footer from "./components/Footer/Footer";
import Home1 from "./components/Home/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import CustomProducts from "./components/CustomProducts/CustomProducts";
import Edit from "./components/Edit/Edit";
import { AuthProvider} from "./contexts/AuthContext";
import DetailsCustomProduct from "./components/DetailsCustomProduct/DetailsCustomProduct";
import MyLove from "./components/MyLove/MyLove";
import Logout from "./components/Logout";
import Page404 from "./components/Page404/Page404";
import { GuardedRoute } from "./components/Common/GuardedRoute";





function App() {
  
  let userData = localStorage.getItem('user')
  let user = JSON.parse(userData)

  
 
  return (
    <>
      <AuthProvider>

        <Header />
        <Switch>
          <Route path='/' exact component={Home1} />
          <Route path='/about-as' exact component={About} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/logout' exact component={Logout} />
          <Route path='/details/:productId' exact component={Details} />
          <Route path='/custom-products' exact component={CustomProducts} />
          <Route path='/details-custom-product/:productId' exact component={DetailsCustomProduct} />
          <GuardedRoute path= '/create' exact component={Create}/>         
          <GuardedRoute path= '/my-love' exact component={MyLove}/>          
          <GuardedRoute path= '/edit/:productId' exact component={Edit}/>
          
          <Route component={Page404} />
        </Switch>
        <Footer />

      </AuthProvider>
    </>
  );
}

export default App;
