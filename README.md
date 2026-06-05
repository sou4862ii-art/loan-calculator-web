# loan-calculator-web

[![tests](https://github.com/sou4862ii-art/loan-calculator-web/actions/workflows/tests.yml/badge.svg)](https://github.com/sou4862ii-art/loan-calculator-web/actions)
[![Deploy](https://github.com/sou4862ii-art/loan-calculator-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/sou4862ii-art/loan-calculator-web/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

シンプルで使ぁE��すい住宁E��ーン計算橁Eシングルペ�EジWebアプリ)、E
🌐 **チE��**: https://sou4862ii-art.github.io/loan-calculator-web/

## 特徴

- 🧮 月、E�E返済額�E総返済額�E利息総額をリアルタイム計箁E(允E��坁E��返済方弁E
- 📊 全期間の返済スケジュール(償還表)を表示
- 🎚�E�Eスライダーと数値入力�E双方向同期で直感的に試箁E- 🌒 落ち着ぁE��ダークチE�Eマ�EモダンUI
- 🚀 依存ライブラリなし、ピュアJS、軽釁E- 🧪 計算ロジチE��は Node.js Test Runner でチE��ト済み (15チE��ト�Eパス)
- ☁E��EGitHub Pages で自動デプロイ

## チE��プレビュー

借�E金額�E金利・年数を変更すると、月、E�E返済額と返済スケジュールが即座に更新されます、E
```
借�E: 3000丁E�E / 年利: 1.5% / 期間: 35年
  ↁE月、E�E返済顁E ¥91,855
総返済顁E     ¥38,579,100
利息総顁E     ¥8,579,100
```

## セチE��アチE�E

### ローカルで動かぁE
```bash
git clone https://github.com/sou4862ii-art/loan-calculator-web.git
cd loan-calculator-web

# どちらでもOK
npm run serve  # ↁEhttp://localhost:8000
# また�E直接 index.html をブラウザで開く
```

### チE��ト実衁E
```bash
npm test
```

## 計算弁E
允E��坁E��返済方式に基づぁE��標準計算式を使用してぁE��す、E
```
M = P ÁEr ÁE(1+r)^n / ((1+r)^n - 1)
```

- M: 月額返済顁E- P: 借�E允E��
- r: 月利 (年利 / 12 / 100)
- n: 返済回数 (年数 ÁE12)

金利0%の場合�E単純割で計算します、E
## プロジェクト構造

```
loan-calculator-web/
├── index.html           # メインのUI
├── src/
━E  └── loan.js         # 計算ロジチE�� (純粋関数)
├── tests/
━E  └── loan.test.js    # Node.js Test Runner
├── .github/workflows/
━E  ├── tests.yml       # CI
━E  └── deploy.yml      # GitHub Pages 自動デプロイ
└── package.json
```

ロジチE��とUIを�E確に刁E��してぁE��ため、計算部刁E�ENode.jsで独立してチE��ト可能です、E
## API (ライブラリとしての利用)

`src/loan.js` は ESM モジュールとして単独で利用できます、E
```javascript
import { monthlyPayment, totalPayment, repaymentSchedule } from "./src/loan.js";

// 3000丁E�E・年利1.5%・35年
console.log(monthlyPayment(30000000, 1.5, 35));  // 91855
console.log(totalPayment(30000000, 1.5, 35));    // 38579100

const schedule = repaymentSchedule(30000000, 1.5, 35);
console.log(schedule[0]);
// { month: 1, payment: 91855, principalPaid: 54355, interestPaid: 37500, balance: 29945645 }
```

## カスタマイズのご相諁E
以下�Eような拡張のご相諁E��りまぁE

- 繰上げ返済シミュレーション機�Eの追加
- ボ�Eナス返済�E対忁E- 褁E��ローンの比輁E���E
- PDF/Excel での結果ダウンローチE- 既存サイトへの絁E��込み

## 免責事頁E
本計算�Eシミュレーションです。実際の借�E条件・金利・諸費用は金融機関にご確認ください、E
## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) を参照
