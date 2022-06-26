import { route } from "preact-router";
import { FunctionComponent, useEffect } from "preact/compat";

type Props = {
  to: string;
};

const Redirect: FunctionComponent<Props> = (props) => {
  useEffect(() => {
    route(props.to, true);
  }, [props]);

  return null;
};

export default Redirect;
