# @jlarky/react-json-script

## Why

- https://pragmaticwebsecurity.com/articles/spasecurity/json-stringify-xss
- https://twitter.com/ariesrclark/status/1784765484497617203

This causes hydration error (see why `dangerouslySetInnerHTML` in https://blog.logrocket.com/improving-react-seo-structured-data/#adding-structured-data-react-app):

```tsx
const App = () => {
  const data = {"id":1};

  return <script>{JSON.stringify(data)}</script>
}
```

This causes XSS (see https://pragmaticwebsecurity.com/articles/spasecurity/json-stringify-xss):

```tsx
const App = () => {
  const data = {"content":"</script><script>alert('gotcha!')</script>","id":1};

  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
```

## Installation

```bash
bunx jsr add @jlarky/react-json-script
# or
npx jsr add @jlarky/react-json-script
```

## Example

```jsx
import { JsonScript } from "@jlarky/react-json-script";

const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "http://www.example.com",
    "name": "Unlimited Ball Bearings Corp.",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-401-555-1212",
        "contactType": "Customer service"
    }
};

const App = () => (
  <JsonScript type="application/ld+json" data={data} />
);
```

## Development

To install dependencies:

```bash
bun install
```

To publish:

```bash
bun run publish
```
