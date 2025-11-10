import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import App from "./App.jsx";
import { store } from "./redux/store.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="min-h-screen w-screen overflow-hidden">
        <App />
        <Toaster position="top-right" />
      </div>
    </Provider>
  </StrictMode>
);
