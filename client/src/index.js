import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./Store/Store";
import { Provider } from "react-redux";
//import Register from "./Components/Register";
//import Login from "./Components/Login";

import { persistore } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* Wrapping with PersistGate */}
      <PersistGate loading={null} persistor={persistore}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
