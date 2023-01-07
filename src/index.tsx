import React from "react";
import { createRoot } from "react-dom/client";

const rootcontainer = document.getElementById("root");
const root = createRoot(rootcontainer!);

const Application = () => <h1>TODO Application</h1>;

root.render(Application());
