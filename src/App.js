
import Header from "./components/Header/Header";
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import About from "./components/AboutAs/AboutAs";
import Footer from "./components/Footer/Footer";
import Home1 from "./components/Home/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import CustomProducts from "./components/CustomProducts/CustomProducts";
import Edit from "./components/Edit/Edit";
import { AuthProvider, useAuthContext } from "./contexts/AuthContext";
import { GuardedRoute } from "./components/Common/GuardedRoute";
import DetailsCustomProduct from "./components/DetailsCustomProduct/DetailsCustomProduct";
import MyLove from "./components/MyLove/MyLove";
import Logout from "./components/Logout";
import Page404 from "./components/Page404/Page404";





function App() {
  
  let user = localStorage.getItem('user')
  console.log(user.email)
 
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
          <Route path= '/create' render={() => (user.email ? (<Create/>): (<Redirect to='/login'/>))}/>
          <Route path= '/my-love' render={() => (user.email ? (<MyLove/>): (<Redirect to='/login'/>))}/>
          <Route path= '//edit/:productId' render={() => (user.email ? (<Edit/>): (<Redirect to='/login'/>))}/>
          <Route component={Page404} />
        </Switch>
        <Footer />

      </AuthProvider>
    </>
  );
}

export default App;
