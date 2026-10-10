
# loan-calculator-web

[![tests](https://github.com/sou4862ii-art/loan-calculator-web/actions/workflows/tests.yml/badge.svg)](https://github.com/sou4862ii-art/loan-calculator-web/actions)
[![Deploy](https://github.com/sou4862ii-art/loan-calculator-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/sou4862ii-art/loan-calculator-web/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

シンプルで使いやすい住宅ローン計算機(シングルページWebアプリ)。

**デモ**: <https://sou4862ii-art.github.io/loan-calculator-web/>
<img width="991" height="700" alt="image" src="https://github.com/user-attachments/assets/220b56c0-4888-4dac-ba6c-3f77505968fd" />

## 特徴

- 月々の返済額・総返済額・利息総額をリアルタイム計算 (元利均等返済方式)
- 全期間の返済スケジュール(償還表)を表示
- スライダーと数値入力の双方向同期で直感的に試算
- 落ち着いたダークテーマのモダンUI
- 依存ライブラリなし、ピュアJS、軽量
- 計算ロジックは Node.js Test Runner でテスト済み (15テスト全パス)
- GitHub Pages で自動デプロイ

## デモプレビュー

借入金額・金利・年数を変更すると、月々の返済額と返済スケジュールが即座に更新されます。

```
借入: 3000万円 / 年利: 1.5% / 期間: 35年
  → 月々の返済額: ¥91,855
総返済額:     ¥38,579,100
利息総額:     ¥8,579,100
```

## セットアップ

### ローカルで動かす

```bash
git clone https://github.com/sou4862ii-art/loan-calculator-web.git
cd loan-calculator-web

npm run serve  # → http://localhost:8000
```

### テスト実行

```bash
npm test
```

## 計算式

元利均等返済方式に基づいた標準計算式を使用しています。

```
M = P × r × (1+r)^n / ((1+r)^n - 1)
```

- M: 月額返済額
- P: 借入元本
- r: 月利 (年利 / 12 / 100)
- n: 返済回数 (年数 × 12)

金利0%の場合は単純割で計算します。

## プロジェクト構造

```
loan-calculator-web/
├── index.html           # メインのUI
├── src/
│   └── loan.js         # 計算ロジック (純粋関数)
├── tests/
│   └── loan.test.js    # Node.js Test Runner
├── .github/workflows/
│   ├── tests.yml       # CI
│   └── deploy.yml      # GitHub Pages 自動デプロイ
└── package.json
```

ロジックとUIを明確に分離しているため、計算部分はNode.jsで独立してテスト可能です。

## API (ライブラリとしての利用)

`src/loan.js` は ESM モジュールとして単独で利用できます。

```javascript
import { monthlyPayment, totalPayment, repaymentSchedule } from "./src/loan.js";

// 3000万円・年利1.5%・35年
console.log(monthlyPayment(30000000, 1.5, 35));  // 91855
console.log(totalPayment(30000000, 1.5, 35));    // 38579100

const schedule = repaymentSchedule(30000000, 1.5, 35);
console.log(schedule[0]);
// { month: 1, payment: 91855, principalPaid: 54355, interestPaid: 37500, balance: 29945645 }
```

## カスタマイズのご相談

以下のような拡張のご相談も承ります:

- 繰上げ返済シミュレーション機能の追加
- ボーナス返済への対応
- 複数ローンの比較機能
- PDF/Excel での結果ダウンロード
- 既存サイトへの組み込み

## 免責事項

本計算はシミュレーションです。実際の借入条件・金利・諸費用は金融機関にご確認ください。

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) を参照
