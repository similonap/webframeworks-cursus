import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "components/App/App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
