import { Form } from "/components/project/Form";
import { ParentButton } from "/components/parts/Button/nestButton";
import React, { FunctionComponent } from "preact/compat";

type Hoge = { hoge: string };

export const App: FunctionComponent = () => {
  return (
    <React.Fragment>
      <p>Hello Vite + Preact + pnpm!</p>
      <div>
        <Form />
      </div>
      <ParentButton path="/sneaker" name="Go Web page!" />
    </React.Fragment>
  );
};

export default App;
