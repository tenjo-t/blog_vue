---
createdAt: "2024-06-08"
updatedAt: "2024-06-08"
title: "このサイトのMarkdown記法一覧"
---

VitePressはmarkdown-itを使用してマークダウンをレンダリングする。VitePressで導入されている拡張機能についてはガイドにも説明があるが、比較的使いそうなものを紹介する。

[[toc]]

## テーブル

GFMのテーブル記法をサポートしている。

```md
| 左揃え     | 中央揃え | 右揃え |
| ---------- | :------: | -----: |
| りんご     |  バナナ  | ぶどう |
| さくらんぼ |   もも   |   なし |
```

| 左揃え     | 中央揃え | 右揃え |
| ---------- | :------: | -----: |
| りんご     |  バナナ  | ぶどう |
| さくらんぼ |   もも   |   なし |

## 絵文字

```md
:tada: :100:
```

:tada: :100:

## 目次

```md
[[toc]]
```

[[toc]]

## カスタムコンテナ

```md
::: info
This is an info box.
:::

::: tip ヒント
This is a tip.
:::

::: warning 警告
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

::: info
This is an info box.
:::

::: tip ヒント
This is a tip.
:::

::: warning 警告
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 数式

数式の表示にはmarkdown-it-mathjax3を利用している。

```md
$(ax^2 + bx + c = 0)$の解は、

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
```

$(ax^2 + bx + c = 0)$の解は、

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
