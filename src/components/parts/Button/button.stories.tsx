import { setup } from "goober";
import { h, Component } from "preact";
import { AnimationButton } from "./button";
setup(h);

export default {
  title: "AnimationButton",
  component: AnimationButton,
  args: { title: "testButton" },
};

const Template = (args: { title: string }) => <AnimationButton {...args} />;
export const AnimationButtonS = Template.bind({});
