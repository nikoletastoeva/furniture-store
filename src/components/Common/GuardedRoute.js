
import {Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export const GuardedRoute = ({children, ...rest}) => {
    const { isAuthenticated } = useAuthContext();
    return (
        <Route {...rest} render={({ location }) => {
          return isAuthenticated
            ? children
            : <Redirect to='/login'/>
        }} />
      )
}

