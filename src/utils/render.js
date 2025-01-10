import { createRoot } from "react-dom/client";

const MARK = "__rc_react_root__";

export const render = (node, container) => {
  const root = container[MARK] || createRoot(container);
  root.render(node);
  container[MARK] = root;
};

export const unmount = (container) => {
  container[MARK]?.unmount();
  delete container[MARK];
};
