import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Alert() {
  const { loginWithRedirect } = useAuth0();
  const myStyle = {
    padding: "6px 8px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    color: "#863a6f",
    backgroundColor: "#ffadbc",
    cursor: "pointer",
  };
  return (
    <div style={{width: "72%", margin:"45px auto", textAlign:"center"}}>
      <h1 style={{color: "gray"}}>Please Login!</h1>
      <button style={myStyle} onClick={() => loginWithRedirect()}>
        LOGIN
      </button>
    </div>
  );
}

export default Alert;
