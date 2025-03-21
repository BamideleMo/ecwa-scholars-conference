/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Read from "./pages/Read";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/membership" component={Membership} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
      <Route path="/read/:slug" component={Read} />
    </Router>
  ),
  root
);
