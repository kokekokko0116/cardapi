# カード価格査定API

## DEMO

  - デプロイしている場合はURLを記入（任意）

## 紹介と使い方

  - node.jsを使ってローカルサーバー上でＡＰＩを動かしています。
  - ポケモンカード「白熱のアルカナ」のカード買取価格のリストを遊々亭というサイトから取得してＪＳＯＮデータで取得します
  - コンソール上で　"npm run dev" と入力することでローカルサーバーの立ち上げ、カードデータ取得を行います。
  - "https://localhost8000/api/pokemoncard"でローカルホストの状況確認が可能です

## 工夫した点

  - 販売されているパックごとの情報取得に向いている（ＵＲＬの記述上）な遊々亭のサイトを選んだこと

## 苦戦した点

  - ローカルホストって何？から始まったからnode.jsがどんな動きをしているのかなど勉強するきっかけになりました。
  - 情報取得時にhtmlが文字化けする事件が起きたが、npmモジュール"he"をインストールすることで解決した。

## 参考にした web サイトなど

  - https://www.youtube.com/watch?v=9HXcaDQyWxA&t=1063s
