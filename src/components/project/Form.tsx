import { AnimationButton } from "../parts/Button/button";
import { InputWithLabel, Length } from "/components/parts/InputWithLbel";
import { useState, useCallback, FunctionComponent } from "preact/compat";

export const Form: FunctionComponent = () => {
  const [input, setInput] = useState("");
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) {
        return;
      }
      setInput(e.target?.value);
    },
    [setInput]
  );
  return (
    <>
      <InputWithLabel onChange={onChange} />
      <Length input={input} />
      <AnimationButton title="hogehoge" />
    </>
  );
};
