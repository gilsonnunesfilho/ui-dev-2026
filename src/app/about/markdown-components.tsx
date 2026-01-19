import type { Components } from "react-markdown";

export const markdownComponents: Components = {
  h1: ({ node, ...props }) => (
    <h1
      className="text-3xl font-bold text-label-primary mt-8 mb-4 scroll-m-20"
      {...props}
    />
  ),
  h2: ({ node, ...props }) => (
    <h2
      className="text-2xl font-semibold text-label-primary mt-6 mb-4 scroll-m-20"
      {...props}
    />
  ),
  h3: ({ node, ...props }) => (
    <h3
      className="text-xl font-semibold text-label-primary mt-4 mb-2 scroll-m-20"
      {...props}
    />
  ),
  h4: ({ node, ...props }) => (
    <h4
      className="text-lg font-medium text-label-primary mt-3 mb-2 scroll-m-20"
      {...props}
    />
  ),
  p: ({ node, ...props }) => (
    <p className="text-label-secondary leading-relaxed mb-4" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul
      className="list-disc list-inside space-y-2 mb-4 text-label-secondary"
      {...props}
    />
  ),
  li: ({ node, ...props }) => (
    <li className="text-label-secondary" {...props} />
  ),
  strong: ({ node, ...props }) => (
    <strong className="font-semibold text-label-primary" {...props} />
  ),
  a: ({ node, ...props }) => (
    <a className="text-brand underline hover:no-underline" {...props} />
  ),
  img: ({ node, ...props }) => (
    <img
      className="w-full rounded-lg border border-fill-secondary my-6"
      alt=""
      {...props}
    />
  ),
  code: ({ node, ...props }) => (
    <code
      className="bg-fill-secondary text-label-primary px-2 py-1 rounded text-sm font-mono"
      {...props}
    />
  ),
};
