import { Properties } from "csstype";
import { FunctionComponent } from "preact";

type Props = {
  hoge?: string;
  func: (bool: string) => void;
};

const GrandChileButton: FunctionComponent<Props> = (props) => {
  const { func } = props;
  const update = () => {
    const result = func("hogehoge");
  };
  return <button onClick={update}>button</button>;
};

const ChildButton: FunctionComponent<Props> = (props) => {
  const { hoge, func } = props;

  return (
    <>
      <GrandChileButton func={func} />
    </>
  );
};

export const ParentButton: FunctionComponent = () => {
  return (
    <>
      <ChildButton
        hoge="hogehoge"
        func={(bool) => {
          return console.log(bool);
        }}
      />
    </>
  );
};
