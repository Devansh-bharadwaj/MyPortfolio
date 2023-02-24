import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./components/usecontext";
import { FilterContextProvider } from "./components/Filter_context";
import { CartProvider } from "./components/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const domain = process.env.REACT_APP_AUTH_DOMAIN;
// const clientId = process.env.REACT_APP_CLIENT_ID;
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-7a23yn62rvoeft4k.us.auth0.com"
    clientId="2gHvYnVCJBDAX7ODAvOEDa86Eqq1J7Uc"
    // domain={domain}
    // clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
