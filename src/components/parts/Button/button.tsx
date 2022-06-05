import { styled } from "goober";
import { useCallback } from "preact/compat";

export const AnimationButton = ({ title }: { title: string }) => {
  let count = 0;

  const addCount = useCallback(() => {
    count++;
    console.log("count", count);
  }, []);

  return (
    <>
      <PracticeButton onClick={addCount}>{title}</PracticeButton>
    </>
  );
};

const PracticeButton = styled("button")`
  padding: 12px;
  background-color: #3574d8b8;
  color: #fafafa;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  border: none;

  transition: 0.5s; /* マウスカーソルを外すとき */
  &:hover {
    opacity: 0.5;
    transition: 0.5s; /* マウスカーソルを載せるとき */
  }
`;
