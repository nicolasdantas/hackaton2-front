import React, { useContext } from "react";
import { LoginContext } from "../components/contexts/LoginContext";

const Welcome = () => {
  const { userLogged } = useContext(LoginContext);
  return (
    <div>
      <h3>Welcome {userLogged[0].username}</h3>
    </div>
  );
};

export default Welcome;
