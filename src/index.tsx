import { render, h } from "preact";
import { Main } from "./router";
import "./style/index.css";
import { setup } from "goober";

setup(h);

render(<Main />, document.getElementById("app")!);
