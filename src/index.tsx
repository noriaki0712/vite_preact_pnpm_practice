import { render, h } from "preact";
import { App } from "/pages/app";
import "./style/index.css";
import { setup } from "goober";

setup(h);

render(<App />, document.getElementById("app")!);
