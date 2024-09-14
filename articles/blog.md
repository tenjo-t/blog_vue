---
createdAt: "2024-06-08"
updatedAt: "2024-06-08"
title: "Blog"
---

Zennのスクラップを気に入って時々使っていた、技術記事以外の内容は書けないので自分用のサイトが欲しいと思っていた。そこで、Vueをお試しするために[VitePress](https://vitepress.dev/)を使って作製した。

[[toc]]

## VitePress

VueでSSGができるフレームワークとしてVitePressを選択した。用途的にはAstroでも問題なかったですが、ほとんどAstroのテンプレートを書くことになりVueの勉強にはならなそうなので今回は見送った。

### Theme

独自のデザインにしたかったため、デフォルトのテーマは一切使用していない。

VitePressはMarkdownのみを使ってページを作る。そのため、スタイルを変えたいときはfrontmatterなどを使う。Vue側の唯一のエントリーポイントである`.vitepress/theme/index.ts`の`Theme.Layout`を用いて、frontmatterを確認してスタイルを出し分ける必要がある。

例えば、

```md
---
layout: "home"
---

# Title
```

```md
---
layout: "article"
---

# A
```

```vue
<script setup>
const { frontmatter } = useData();
</script>
<template>
  <Home v-if="frontmatter.layout === 'home'" />
  <Article v-else-if="frontmatter.layout === 'article'" />
  ...
</template>
```

### 記事リスト

記事の一覧ページなどを作りたいときはdata loaderの機能を使う。

### Markdown

[このサイトのMarkdown記法一覧](./markdown.md)を参照。

## Vue

### Composition API

VueはOption APIのときに少しさわったことがある程度だった。Composition APIはよりReactに近い書き心地でOption APIよりとても便利。ただし、スクリプト内でRefに`.value`をめちゃくちゃつけ忘れる。

### Scoped CSS

いつもはCSS Moduleを使っているが、今回はScoped CSSを使ってみた。コンポーネントを細かく分けている場合には雑にタグをセレクターとしてそのまま使えるのは便利。しかし、タグが増えると結局クラス名をつけて指定することになる。また、Scopedではないクラス名を指定するときに`:deep()`で囲まないといけないのは面倒。特に、Markdownから変換された要素にスタイルを当てるときは`:deep()`だらけでごちゃごちゃしてしまった。
