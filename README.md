# React in Vue - Module Federation Demo

This example demos consumption of federated modules from a vite bundle. `layout` app (vue based) depends on a component exposed by `header` app (react based). It is a simple proof of concept using `ReactDOMServer.renderToString` to inject data a html string into a vue template.

## Running Demo

First  run `pnpm build` and `pnpm serve`. This will build and serve both `header` and `layout` on ports 5000, 5001 respectively.

- HOST (layout): [localhost:5000](http://localhost:5000/)
- REMOTE (header): [localhost:5001](http://localhost:5001/)

`CTRL + C` can only stop the host server. You can run `pnpm stop` to stop all services.
