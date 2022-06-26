import { HtmlAttributes, Properties } from "csstype";
import { FunctionComponent } from "preact";
import { route } from "preact-router";

type Props = {
  func?: (bool: boolean) => void;
  name?: string;
};

const GrandChileButton: FunctionComponent<Props> = (props) => {
  const { func, path } = props;
  const update = () => {
    if (path) {
      route(path);
    }
  };
  return <button onClick={update}>{props.name}</button>;
};

const ChildButton: FunctionComponent<Props> = (props) => {
  const { func, path, name } = props;

  return (
    <>
      <GrandChileButton func={func} path={path} name={name} />
    </>
  );
};

export const ParentButton: FunctionComponent<Props> = (props) => {
  return (
    <>
      <ChildButton
        func={(bool) => {
          return console.log(bool);
        }}
        name={props.name}
        path={props.path}
      />
    </>
  );
};
