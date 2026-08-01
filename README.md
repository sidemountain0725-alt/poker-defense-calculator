# Poker Defense Calculator

最初のバージョンのデザインを維持し、計算結果の先頭に Pot Odds を追加した版です。

## 表示項目

- Pot Odds
- ベットサイズのポット比
- MDF
- 適正ブラフ率
- バリュー：ブラフ比率

## 使い方

`index.html` をブラウザで開いてください。

GitHub Pagesを更新する場合は、既存リポジトリの以下のファイルを置き換えてコミットします。

- `index.html`
- `style.css`
- `script.js`
- `README.md`

## 計算式

- Pot Odds = B / (P + 2B)
- Bet Ratio = B / P
- MDF = P / (P + B)
- Optimal Bluff Frequency = B / (P + 2B)
- Value : Bluff = (P + B) / B : 1
