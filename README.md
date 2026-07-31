# Poker Defense Calculator

ポットサイズとベットサイズを入力すると、以下をリアルタイムで計算するシンプルなWebアプリです。

- ベットサイズのポット比
- MDF（最小守備頻度）
- 適正ブラフ率
- バリュー：ブラフ比率

## 使い方

`index.html` をブラウザで開いてください。

GitHub Pagesで公開する場合は、フォルダ内のファイルをリポジトリ直下に配置して、
Settings → Pages から公開できます。

## 計算式

- Bet Ratio = B / P
- MDF = P / (P + B)
- Bluff Frequency = B / (P + 2B)
- Value : Bluff = (P + B) / B : 1
