import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloComponent />
  </div>
);
