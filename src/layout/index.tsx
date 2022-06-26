import React, { FunctionComponent, useCallback } from "preact/compat";
import { styled } from "goober";
import { Humberger } from "/components/parts/hamburger";
import { useState } from "preact/hooks";
import Sneaker from "/assets/svg/logo.svg";

type Props = {
  scroll: (id?: number) => void;
};

const Layout: FunctionComponent<Props> = React.memo((props) => {
  const { scroll } = props;
  const [state, setState] = useState<boolean>(false);
  const onClick = useCallback(() => {
    setState((prevState) => !prevState);
    return state;
  }, []);

  return (
    <>
      <Header>
        <Logo>
          <img src={Sneaker} />
        </Logo>
        <Humberger state={state} onClick={onClick} />
        <SideBar active={state}>
          <ul>
            <li
              onClick={() => {
                scroll(), onClick();
              }}
            >
              Top
            </li>
            <li
              onClick={() => {
                scroll(0), onClick();
              }}
            >
              Pick UP
            </li>
            <li
              onClick={() => {
                scroll(1), onClick();
              }}
            >
              Content
            </li>
          </ul>
        </SideBar>
        <Musk active={state} onClick={onClick}></Musk>
      </Header>
      {props.children}
    </>
  );
});

const Logo = styled("div")`
  position: absolute;
  margin: 1rem;
`;

const Header = styled("header")`
  width: 100%;
  height: 80px;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Musk = styled<{
  active: boolean;
  onClick: (prevState: React.StateUpdater<boolean>) => void;
}>("div")`
  position: fixed;
  left: 0;
  top: 0;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  z-index: ${(props) => (props.active ? 100 : -1)};
  background-color: ${(props) => (props.active ? "#000" : "#fff")};
  opacity: ${(props) => (props.active ? 0.5 : 0)};
  width: 100%;
  height: 100vh;
  transition: all 0.5s ease;
`;

const SideBar = styled<{ active: boolean }>("nav")`
  position: relative;
  left: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  color: white;
  ul {
    margin: 0;
    padding: 4rem 0;

    list-style: none;
    li {
      padding-bottom: 1rem;
      border-bottom: 1px solid white;
      cursor: pointer;
    }
    li + li {
      padding: 1rem;
    }
  }
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  z-index: 1000;
  background-color: ${(props) => (props.active ? "#000" : "#fff")};
  opacity: ${(props) => (props.active ? 0.8 : 0)};
  transform: translateX(${(props) => (props.active ? 0 : -300)}px);
  transition: all 0.5s ease;
  /* opacity: 0.8; */
`;

export default Layout;
