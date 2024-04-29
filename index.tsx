import React from "react";
import serializeJavascript from "serialize-javascript";

type JsonScriptProps = Omit<
  React.ComponentProps<"script">,
  "dangerouslySetInnerHTML"
> & {
  json: unknown;
};

export function JsonScript(props: JsonScriptProps): JSX.Element {
  const { json, ...rest } = props;
  const serialized = serializeJavascript(json, { isJSON: true });
  return <script {...rest} dangerouslySetInnerHTML={{ __html: serialized }} />;
}
