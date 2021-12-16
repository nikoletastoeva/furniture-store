

import * as authService from '../services/authService';
import { useAuthContext } from '../contexts/AuthContext';
import { useEffect } from 'react';

const Logout = ({history}) => {
    
    const { user, logout } = useAuthContext();
    
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                history.push('/');
            })
    }, [])

    return null;
};

export default Logout;