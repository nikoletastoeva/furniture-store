import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthContext } from "../../contexts/AuthContext";


export const GuardedRoute = ({component: Component, ...rest}) => {
    const { isAuthenticated } = useAuthContext();
    return (
        <Route {...rest}
        render={props => {
            if(isAuthenticated){
                return <Component {...props}/>

            }else{
                return <Redirect to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}/>
            }
        }}/>
    )
}