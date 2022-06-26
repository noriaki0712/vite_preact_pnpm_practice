import {
  FunctionComponent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "preact/compat";

type ChildProps = {
  count: number;
};

const Child = memo(
  ({
    hundleClick,
    count,
  }: {
    hundleClick: () => void;
    count: number;
  }): JSX.Element => {
    useEffect(() => {
      console.log("Childがレンダリングされたよ");
    });

    return <button onClick={hundleClick}>Child：{count}</button>;
  }
);

export const Parent: FunctionComponent = () => {
  const [parentCount, setParentCount] = useState<number>(0);
  const [childCount, setChildCount] = useState<number>(0);

  const hundleClick = () => {
    setParentCount(parentCount + 1);
    // console.log("hundleClick");
  };
  const hundleChildeClick = () => {
    console.log("hundleClick");
  };
  useEffect(() => {
    console.log("Parentがレンダリングされたよ");
  });

  return (
    <div>
      <button type="button" onClick={hundleClick}>
        Parent count up
      </button>
      <button
        type="button"
        onClick={() => {
          setChildCount(childCount + 1);
        }}
      >
        Child1 count up
      </button>
      <p>Parent：{parentCount}</p>
      <Child count={childCount} hundleClick={hundleChildeClick} />
    </div>
  );
};
