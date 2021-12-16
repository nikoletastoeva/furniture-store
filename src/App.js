
import Header from "./components/Header";
import { Route, Router } from 'react-router-dom'
import About from "./components/AboutAs";
import Footer from "./components/Footer";
import Home1 from "./components/Home1";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Create from "./components/Create";
import Details from "./components/Details";
import CustomProducts from "./components/CustomProducts";
import Edit from "./components/Edit";
import { AuthProvider } from "./contexts/AuthContext";
import { GuardedRoute } from "./components/Common/GuardedRoute";
import DetailsCustomProduct from "./components/DetailsCustomProduct";
import MyLove from "./components/MyLove";
import Logout from "./components/Logout";



function App() {

  return (
    <>
      <AuthProvider>
        <Header />


        <Route path='/' exact component={Home1} />
        <Route path='/about-as' exact component={About} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/logout' exact component={Logout} />

        <Route path='/details/:productId' exact component={Details} />
        <Route path='/custom-products' exact component={CustomProducts} />
        <Route path='/details-custom-product/:productId' exact component={DetailsCustomProduct} />

        <Route>

          <GuardedRoute path="/create">
            <Create />
          </GuardedRoute>

          <GuardedRoute path="/my-love">
            <MyLove />
          </GuardedRoute>

          <Route path="/edit/:productsId" exact component={Edit} />
        </Route>

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
