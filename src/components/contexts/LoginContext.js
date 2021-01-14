import React, { createContext, useState } from 'react';

const user = [{
        "id": 6,
        "username": "alex",
        "roles": [
        "ROLE_USER"
        ],
        "password": "$argon2id$v=19$m=65536,t=4,p=1$LQpx3qv7y3xL7f/nMv36Ag$mh9J601/LqIh7P1zXRD2hDSwh2OICQy/1Fbhmfx+POc",
        "salt": null,
        "coordX": 2,
        "coordY": 2,
        "avatar": "https://img.favpng.com/18/19/24/nyan-cat-youtube-png-favpng-G1cs1DiEzDQhHaAgXduVYB2Dp.jpg"
}]

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const [userLogged, setUserLogged] = useState(user);

  return (
    <LoginContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </LoginContext.Provider>
  );
}
