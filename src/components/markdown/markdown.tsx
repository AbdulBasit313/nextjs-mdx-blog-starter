import { MDXComponents } from 'mdx/types'

export const Markdown: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      {...props}
      className="mb-4 mt-8 text-3xl font-bold leading-tight text-[#09090B] md:text-4xl"
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      {...props}
      className="mb-3 mt-6 text-2xl font-medium leading-tight text-[#09090B] md:text-3xl"
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 {...props} className="mb-3 mt-6 text-2xl font-medium leading-tight text-[#09090B]">
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p {...props} className="mb-4 text-[16px] text-lg leading-relaxed text-[#09090B]">
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <a
      {...props}
      className="text-sky-500 underline duration-100 hover:text-blue-600"
      target="_blank"
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul {...props} className="mb-4 list-disc pl-6 text-lg leading-relaxed text-[#09090B]">
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol {...props} className="mb-4 list-decimal pl-6 text-lg leading-relaxed text-[#09090B]">
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li {...props} className="mb-2">
      {children}
    </li>
  ),
  img: ({ children, ...props }) => (
    <img {...props} className="mb-4 h-auto max-w-full">
      {children}
    </img>
  ),
}
