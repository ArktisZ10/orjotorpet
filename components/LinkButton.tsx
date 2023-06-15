import { JSX } from "preact";

// Based on https://fresh.deno.dev/components/#LinkButton

export default function LinkButton(
  props: JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      {...props}
      class={`inline-block cursor-pointer px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-800 rounded hover:bg-gradient-to-b ${
        props.class ?? ""
      }`}
    />
  );
}
