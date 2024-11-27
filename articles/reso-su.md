---
createdAt: "2024-11-08"
updatedAt: "2024-11-08"
title: "RSSアグリゲーターのReso-suを作った"
---

むかーしスマホでRSSリーダーを使っていたが、肌に合わなくて使うのをやめてしまいました。いつか自分で作成したいと思っていましたが、Macを持っていないのでiPhone用のアプリは作成できません。ということでRSS Feedを集めて表示するだけのサイトを作りました。

[Reso-su](https://tenjo-t.github.io/reso-su/)

[Astro](https://astro.build/)をSSGフレームワークとして使っていてクライアントJSはありません。唯一インタラクションのあるメニューには[Popover API](https://developer.mozilla.org/ja/docs/Web/API/Popover_API)を使っており、HTMLのタグを指定するだけで簡単にポップアップが作成できます。便利！

Popoverの実装にあたってはJxckさんの[記事](https://blog.jxck.io/entries/2024-09-25/show-modal-dialog.html)がとても参考になりました。

本当はPWA何かを使ってネイティブアプリっぽく仕上げたかったのだが、RSSを取得しようとしてCORSに引っかかって断念しました。そのうち通知くらいは作ってみたいです。
