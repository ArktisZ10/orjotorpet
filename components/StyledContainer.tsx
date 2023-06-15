import { ComponentChildren } from "preact";

type StyledContainerProps = {
  class?: string;
  children: ComponentChildren;
};

export default function StyledContainer(props: StyledContainerProps) {
  return (
    <div
      class={`${
        props.class ?? ""
      } bg-gradient-to-t from-gray-700 to-gray-800 w-full text-white p-2 rounded-md`}
    >
      {props.children}
    </div>
  );
}
