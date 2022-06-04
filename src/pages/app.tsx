import { Logo } from "/logo";
import { ConsoleButton } from "../components/parts/button";

export function App() {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact + pnpm!</p>
      <ConsoleButton title="hogehoge" />
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  );
}
