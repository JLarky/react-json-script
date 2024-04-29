import React from "react";
import serializeJavascript from "serialize-javascript";

type JsonScriptProps = Omit<
  React.ComponentProps<"script">,
  "dangerouslySetInnerHTML"
> & {
  json: unknown;
};

/**
 * Serialize a JSON object and embed it as a script tag.
 *
 * Example:
 *
 * ```tsx
 * <JsonScript type="application/ld+json" json={{ "@context": "http://schema.org", "@type": "Organization", "url": "http://www.example.com", "name": "Unlimited Ball Bearings Corp." }} />
 * ```
 */
export function JsonScript(props: JsonScriptProps): JSX.Element {
  const { json, ...rest } = props;
  const serialized = serializeJavascript(json, { isJSON: true });
  return React.createElement("script", {
    ...rest,
    dangerouslySetInnerHTML: { __html: serialized },
  });
}
