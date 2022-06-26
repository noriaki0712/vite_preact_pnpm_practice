import React, { FunctionComponent, useCallback } from "preact/compat";
import { styled } from "goober";

type Props = {
  state: boolean;
  onClick: () => void;
};
export const Humberger: FunctionComponent<Props> = React.memo(
  ({ state, onClick }) => {
    return (
      <div className="hamburger-menu">
        <MenuButton click={state} onClick={onClick}>
          <span />
        </MenuButton>
      </div>
    );
  }
);

const MenuButton = styled("label")<{ click: boolean }>`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  z-index: 5;

  span,
  span::before,
  span::after {
    content: "";
    display: block;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background-color: #000000;
    position: absolute;
  }
  span {
    background-color: ${(props) => (props.click ? "#fff" : "#000")};
    transition: background-color 300ms 0s ease;
  }
  span::before {
    bottom: ${(props) => (props.click ? 0 : 8)}px;
    transform: ${(props) => (props.click ? `rotate(-315deg)` : 0)};
    transition: all 300ms 0s ease;
  }
  span::after {
    top: ${(props) => (props.click ? 0 : 8)}px;
    transform: ${(props) => (props.click ? `rotate(315deg)` : 0)};
    transition: all 300ms 0s ease;
  }
`;

const HumbergerLine = styled("span")``;
