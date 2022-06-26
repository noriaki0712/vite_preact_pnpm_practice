import React from "preact/compat";

export const InputWithLabel = React.memo(
  ({ onChange }: { onChange: () => void }) => {
    console.log("!!!!rendering InputWithLabel!!!!");
    return (
      <>
        <span>Label: </span>
        <input type="text" onChange={onChange} />
      </>
    );
  }
);

export const Length = (props: { input: string }) => (
  <div>length: {props.input.length}</div>
);
