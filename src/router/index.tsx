import Router, { Route } from "preact-router";
import React, { FunctionComponent, useCallback } from "react";
import { useRef, createRef } from "preact/compat";
import Redirect from "/helper/redirect";
import { h, Component } from "preact";
import { ParentButton } from "/components/parts/Button/nestButton";
import Layout from "/layout";

const Sneaker = React.lazy(() => import("/pages/Sneakers"));

export const Main: FunctionComponent = () => {
  const ref = useRef([...Array(2)].map(() => createRef<HTMLDivElement>()));
  const scroll = useCallback(
    (id?: number) => {
      if (typeof id === "undefined") {
        window.scrollTo({ behavior: "smooth", top: 0 });
        return;
      }
      ref.current[id].current?.scrollIntoView({ behavior: "smooth" });
    },
    [ref]
  );
  return (
    <Layout scroll={scroll}>
      <React.Suspense fallback={<div>...loading</div>}>
        <Router>
          {/* <App path="/page" /> */}
          <Sneaker path="/sneaker" scrollRef={ref} />
          <Redirect to="/sneaker" path="/*" default />
        </Router>
      </React.Suspense>
    </Layout>
  );
};

class Home extends Component {
  setText = (e: any) => {
    this.setState({ text: e.target.value });
  };
  render({}, { text = "xme Text" }) {
    return (
      <section className="home">
        <input value={text} onInput={this.setText} />
        <div>ime cps: {text.toUpperCase()}</div>
        <ParentButton path="/page" name="Go page" />
      </section>
    );
  }
}
