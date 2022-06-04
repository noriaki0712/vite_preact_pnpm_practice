export const ConsoleButton = ({ title }: { title: string }) => {
  return (
    <>
      <button onClick={() => console.log("hogehoge")}>{title}</button>
    </>
  );
};
