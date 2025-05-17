import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./media-query.css";
import App from "./App";
export default App;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => {})
    .catch((err) => {
      console.error(
        "SOMETHING WENT WRONG WHILE REGISTERING SERVICE WORKER: ",
        err
      );
    });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
