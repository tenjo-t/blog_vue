<script setup>
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <h1>{{ frontmatter.title }}</h1>
  <template v-if="frontmatter.createdAt === frontmatter.updatedAt">
    <div>{{ frontmatter.createdAt }}に公開</div>
  </template>
  <template v-else>
    <div>{{ frontmatter.updatedAt }}に更新</div>
  </template>
  <Content class="content" />
</template>

<style scoped>
.content {
  padding-top: 32px;
}

.content
  :deep(
    :where(nav, p, ul, ol, blockquote, hr, table, pre, div, details)
      + :where(nav, p, ul, ol, blockquote, hr, table, pre, div, details)
  ) {
  margin-top: var(--body-margin-div);
}

/* Link */
.content :deep(a[href]) {
  color: var(--text-blue-100);
  text-decoration: none;
}

.content :deep(a[href]:hover),
.content :deep(a[href]:focus) {
  text-decoration: underline;
}

.content :deep(a[href]:active) {
  color: var(--text-blue-200);
}

/* Inline code */
.content :deep(:not(pre) > code) {
  background-color: var(--bg-200);
  border-radius: 4px;
  display: inline-block;
  line-height: 1;
  padding: 2px 6px;
}

/* Heading */
h1,
.content :deep(:where(h2, h3, h4, h5, h6)) {
  color: var(--heading);
  font-weight: bolder;
  line-height: var(--heading-line-height);
  margin: var(--heading-margin-top) 0 var(--heading-margin-bottom);
}

h1 {
  font-size: var(--heading-xl);
}

.content :deep(h2) {
  font-size: var(--heading-l);
}

.content :deep(h3) {
  font-size: var(--heading-m);
}

.content :deep(h4) {
  font-size: var(--heading-s);
}

/* List */
.content :deep(:where(ul, ol)) {
  list-style-type: revert;
  padding-inline-start: 1.5em;
}

/* Blockquote */
.content :deep(blockquote) {
  background-color: var(--bg-50);
  border: 2px solid var(--border-decorative-100);
  border-radius: 8px;
  padding: 12px 12px 12px 24px;
  position: relative;
}

.content :deep(blockquote::before) {
  color: var(--disabled);
  content: "“";
  font-size: var(--heading-xl);
  left: 4px;
  position: absolute;
  top: -10px;
}

.content :deep(blockquote blockquote) {
  margin-top: 12px;
  padding: 12px 12px 12px 24px;
}

/* Bar */
.content :deep(hr) {
  border-block-start: 2px solid var(--border-content-100);
}

/* Table */
.content :deep(table) {
  border-spacing: 0;
  --border: 1px solid var(--border-content-100);
  --radius: 8px;
}

.content :deep(th) {
  font-weight: bolder;
  padding: 5px 16px;
}

.content :deep(td) {
  background-color: var(--bg-50);
  border-bottom: var(--border);
  padding: 10px 16px;
}

.content :deep(tr:first-child > td) {
  border-top: var(--border);
}

.content :deep(td:first-child) {
  border-left: var(--border);
}

.content :deep(td:last-child) {
  border-right: var(--border);
}

.content :deep(tr:first-child > td:first-child) {
  border-top-left-radius: var(--radius);
}

.content :deep(tr:first-child > td:last-child) {
  border-top-right-radius: var(--radius);
}

.content :deep(tr:last-child > td:first-child) {
  border-bottom-left-radius: var(--radius);
}

.content :deep(tr:last-child > td:last-child) {
  border-bottom-right-radius: var(--radius);
}

/* Code block */
.content :deep(pre) {
  background-color: var(--gray-800);
  border-radius: 8px;
  overflow-x: auto;
  padding: 16px;
}

.content :deep(pre > code) {
  font-family: var(--monospace);
  line-height: var(--line-height-100);
}

.content :deep(div[class*="language-"]) {
  position: relative;
}

.content :deep(div[class*="language-"] .copy) {
  background-color: var(--gray-800);
  background-image: url("../../../assets/clipboard-document.svg");
  background-origin: content-box;
  background-repeat: no-repeat;
  border: 1px solid var(--border-decorative-200);
  border-radius: 8px;
  bottom: 8px;
  height: 26px;
  padding: 3px;
  position: absolute;
  right: 8px;
  visibility: hidden;
  width: 26px;
  z-index: 1;
}

.content :deep(div[class*="language-"] .copy:active) {
  border-color: var(--border-decorative-300);
}

.content :deep(div[class*="language-"]:hover .copy) {
  visibility: visible;
}

.content :deep(div[class*="language-"] .lang) {
  color: var(--gray-500);
  line-height: 1;
  position: absolute;
  right: 8px;
  top: 8px;
}

.content :deep(.vp-code span) {
  color: var(--shiki-dark);
  text-decoration: var(--shiki-dark-text-decoration);
}

/* Custom block */
.content :deep(.custom-block) {
  border: 2px solid var(--border);
  border-radius: 8px;
  color: var(--color);
  padding: 16px;
}

.content :deep(:where(.custom-block-title, summary)) {
  font-size: var(--heading-xs);
  font-weight: bolder;
  line-height: 1;
}

.content :deep(:where(.custom-block-title, summary) + p) {
  margin-top: 8px;
}

.content :deep(.custom-block.info) {
  --border: var(--border-blue-100);
  --color: var(--text-blue-100);
}

.content :deep(.custom-block.tip) {
  --border: var(--border-green-100);
  --color: var(--text-green-100);
}

.content :deep(.custom-block.warning) {
  --border: var(--border-orange-100);
  --color: var(--text-orange-100);
}

.content :deep(.custom-block.danger) {
  --border: var(--border-red-100);
  --color: var(--text-red-100);
}

.content :deep(.custom-block.details) {
  --border: var(--border-content-100);
  --color: var(--text-100);
}

/* ToC */
.content :deep(.table-of-contents) {
  background-color: var(--bg-200);
  border-radius: 8px;
  padding: 8px;
}

.content :deep(.table-of-contents > ul) {
  list-style-type: none;
  padding: 0 16px;
}

.content :deep(.table-of-contents > ul > li + li) {
  border-top: var(--border-content-100) solid 1px;
  padding: 4px 0;
}

.content :deep(.table-of-contents a[href]) {
  color: var(--text-100);
}

.content :deep(.table-of-contents a[href]:active) {
  color: var(--text-200);
}
</style>
