import React, { useContext } from 'react';
import { LoginContext } from '../components/contexts/LoginContext';

const Welcome = () => {
    const { userLogged, setUserLogged } = useContext(LoginContext);
    console.log(userLogged)
    return(
        <div>
         <h3>Welcome {userLogged[0].username}</h3>
        </div>
    )
}

export default Welcome;