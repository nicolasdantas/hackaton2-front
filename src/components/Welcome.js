import React, { useContext } from "react";
import { LoginContext } from "../components/contexts/LoginContext";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Welcome = () => {
  const { userLogged } = useContext(LoginContext);
  return (
    userLogged.length !== 0 && (
      <div>
        <h3>Bienvenue {capitalizeFirstLetter(userLogged.username)} !</h3>
      </div>
    )
  );
};

export default Welcome;
