import { MDXRemote } from 'next-mdx-remote/rsc'
import { Markdown } from './markdown'

export function Post({ children }: { children: string }) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {},
      }}
      components={Markdown}
    />
  )
}
