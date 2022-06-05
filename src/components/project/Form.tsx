import { AnimationButton } from "../parts/Button/button";
import { InputWithLabel, Length } from "/components/parts/InputWithLbel";
import { useState, useCallback } from "preact/compat";
import { FunctionComponent } from "preact";

export const Form: FunctionComponent = () => {
  const [input, setInput] = useState("");
  const onChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (!(target instanceof HTMLInputElement)) {
        return;
      }
      setInput(target?.value);
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
