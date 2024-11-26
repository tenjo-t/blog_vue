---
createdAt: "2024-09-18"
updatedAt: "2024-09-18"
title: "TypstとOXCのspanについて"
---

自作のマークアップ言語が作りたくなってしまったので、Typstを参考にしようとコードを読んでいたときの話です。

Typstの`SyntaxNode`（AST）にはソースコード上の位置を表す`Span`という構造体があります。ところで、速いと噂のOXCというRustで書かれたJavaScriptパーサーのASTも同じ名前の構造体を持っています。私はどちらも同じものだと思っていましたが違いがあって面白かったのでメモを残します。

## OXC

OXCにおける`Span`は単一ソースファイル上のトークンの位置を表すものです。

```rust
// oxc/crates/oxc_span/src/span/types.rs
pub struct Span {
    pub start: u32,
    pub end: u32,
}
```

ちなみに、この記事を書くために調べていたところ`Span`の元ネタはRust analyzerの`TextRange`のようです。

## Typst

一方のTypstは

```rust
pub struct Span(NonZeroU64);
```

このように一つの数で表されています。

この数字は`SyntaxNode`で構成されたツリーに対して、子は親より大きい数字になるように、兄弟では弟のほうが兄より数字が大きくなるように振られています。
