import { FormEventHandler } from "react";
import { FunctionComponent } from "preact";
import React, { ChangeEventHandler } from "preact/compat";

type Props = {
  onChange?: FormEventHandler<HTMLInputElement>;
};

export const InputWithLabel: FunctionComponent<Props> = React.memo((props) => {
  const { onChange } = props;
  return (
    <>
      <span>Label: </span>
      <input type="text" onChange={onChange} />
    </>
  );
});

export const Length = (props: { input: string }) => (
  <div>length: {props.input.length}</div>
);
