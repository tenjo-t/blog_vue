import fs from "fs";
import path from "path";
import {
  createContentLoader,
  defineLoader,
  createMarkdownRenderer,
  type SiteConfig,
  type LoaderModule,
  type MarkdownRenderer,
} from "vitepress";
import { normalizePath } from "vite";
import matter from "gray-matter";

export interface Data {
  url: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

declare const data: Data[];

export { data };

export default createContentLoader("articles/**/*.md", {
  includeSrc: true,
  transform(data) {
    return data
      .map(({ url, frontmatter }) => {
        return {
          url,
          title: frontmatter.title,
          createdAt: frontmatter.createdAt,
          updatedAt: frontmatter.updatedAt,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
  },
});
