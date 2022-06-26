type ReactElementProps = {
  children?: import("preact").ComponentChildren;
  className?: string;
};
type ReactComponent = import("react").ComponentType<any>;
type ReactNode = import("preact").ComponentChildren;
type InputHTMLAttributes =
  import("react").InputHTMLAttributes<HTMLInputElement>;
type ButtonHTMLAttributes =
  import("react").ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorHTMLAttributes =
  import("react").AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonMouseEvent = import("react").MouseEvent<HTMLButtonElement>;
type InputChangeEvent = import("react").ChangeEvent<HTMLInputElement>;
type InputFocusEvent = import("react").FocusEvent<HTMLInputElement>;
