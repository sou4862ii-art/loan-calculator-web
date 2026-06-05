# loan-calculator-web

[![tests](https://github.com/sou4862ii-art/loan-calculator-web/actions/workflows/tests.yml/badge.svg)](https://github.com/sou4862ii-art/loan-calculator-web/actions)
[![Deploy](https://github.com/sou4862ii-art/loan-calculator-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/sou4862ii-art/loan-calculator-web/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

繧ｷ繝ｳ繝励Ν縺ｧ菴ｿ縺・ｄ縺吶＞菴丞ｮ・Ο繝ｼ繝ｳ險育ｮ玲ｩ・繧ｷ繝ｳ繧ｰ繝ｫ繝壹・繧ｸWeb繧｢繝励Μ)縲・
倹 **繝・Δ**: https://sou4862ii-art.github.io/loan-calculator-web/

## 迚ｹ蠕ｴ

- ｧｮ 譛医・・霑疲ｸ磯｡阪・邱剰ｿ疲ｸ磯｡阪・蛻ｩ諱ｯ邱城｡阪ｒ繝ｪ繧｢繝ｫ繧ｿ繧､繝險育ｮ・(蜈・茜蝮・ｭ芽ｿ疲ｸ域婿蠑・
- 投 蜈ｨ譛滄俣縺ｮ霑疲ｸ医せ繧ｱ繧ｸ繝･繝ｼ繝ｫ(蜆滄ｄ陦ｨ)繧定｡ｨ遉ｺ
- 字・・繧ｹ繝ｩ繧､繝繝ｼ縺ｨ謨ｰ蛟､蜈･蜉帙・蜿梧婿蜷大酔譛溘〒逶ｴ諢溽噪縺ｫ隧ｦ邂・- 健 關ｽ縺｡逹縺・◆繝繝ｼ繧ｯ繝・・繝槭・繝｢繝繝ｳUI
- 噫 萓晏ｭ倥Λ繧､繝悶Λ繝ｪ縺ｪ縺励√ヴ繝･繧｢JS縲∬ｻｽ驥・- ｧｪ 險育ｮ励Ο繧ｸ繝・け縺ｯ Node.js Test Runner 縺ｧ繝・せ繝域ｸ医∩ (15繝・せ繝亥・繝代せ)
- 笘・ｸ・GitHub Pages 縺ｧ閾ｪ蜍輔ョ繝励Ο繧､

## 繝・Δ繝励Ξ繝薙Η繝ｼ

蛟溷・驥鷹｡阪・驥大茜繝ｻ蟷ｴ謨ｰ繧貞､画峩縺吶ｋ縺ｨ縲∵怦縲・・霑疲ｸ磯｡阪→霑疲ｸ医せ繧ｱ繧ｸ繝･繝ｼ繝ｫ縺悟叉蠎ｧ縺ｫ譖ｴ譁ｰ縺輔ｌ縺ｾ縺吶・
```
蛟溷・: 3000荳・・ / 蟷ｴ蛻ｩ: 1.5% / 譛滄俣: 35蟷ｴ
  竊・譛医・・霑疲ｸ磯｡・ ﾂ･91,855
邱剰ｿ疲ｸ磯｡・     ﾂ･38,579,100
蛻ｩ諱ｯ邱城｡・     ﾂ･8,579,100
```

## 繧ｻ繝・ヨ繧｢繝・・

### 繝ｭ繝ｼ繧ｫ繝ｫ縺ｧ蜍輔°縺・
```bash
git clone https://github.com/sou4862ii-art/loan-calculator-web.git
cd loan-calculator-web

# 縺ｩ縺｡繧峨〒繧０K
npm run serve  # 竊・http://localhost:8000
# 縺ｾ縺溘・逶ｴ謗･ index.html 繧偵ヶ繝ｩ繧ｦ繧ｶ縺ｧ髢九￥
```

### 繝・せ繝亥ｮ溯｡・
```bash
npm test
```

## 險育ｮ怜ｼ・
蜈・茜蝮・ｭ芽ｿ疲ｸ域婿蠑上↓蝓ｺ縺･縺・◆讓呎ｺ冶ｨ育ｮ怜ｼ上ｒ菴ｿ逕ｨ縺励※縺・∪縺吶・
```
M = P ﾃ・r ﾃ・(1+r)^n / ((1+r)^n - 1)
```

- M: 譛磯｡崎ｿ疲ｸ磯｡・- P: 蛟溷・蜈・悽
- r: 譛亥茜 (蟷ｴ蛻ｩ / 12 / 100)
- n: 霑疲ｸ亥屓謨ｰ (蟷ｴ謨ｰ ﾃ・12)

驥大茜0%縺ｮ蝣ｴ蜷医・蜊倡ｴ泌牡縺ｧ險育ｮ励＠縺ｾ縺吶・
## 繝励Ο繧ｸ繧ｧ繧ｯ繝域ｧ矩

```
loan-calculator-web/
笏懌楳笏 index.html           # 繝｡繧､繝ｳ縺ｮUI
笏懌楳笏 src/
笏・  笏披楳笏 loan.js         # 險育ｮ励Ο繧ｸ繝・け (邏皮ｲ矩未謨ｰ)
笏懌楳笏 tests/
笏・  笏披楳笏 loan.test.js    # Node.js Test Runner
笏懌楳笏 .github/workflows/
笏・  笏懌楳笏 tests.yml       # CI
笏・  笏披楳笏 deploy.yml      # GitHub Pages 閾ｪ蜍輔ョ繝励Ο繧､
笏披楳笏 package.json
```

繝ｭ繧ｸ繝・け縺ｨUI繧呈・遒ｺ縺ｫ蛻・屬縺励※縺・ｋ縺溘ａ縲∬ｨ育ｮ鈴Κ蛻・・Node.js縺ｧ迢ｬ遶九＠縺ｦ繝・せ繝亥庄閭ｽ縺ｧ縺吶・
## API (繝ｩ繧､繝悶Λ繝ｪ縺ｨ縺励※縺ｮ蛻ｩ逕ｨ)

`src/loan.js` 縺ｯ ESM 繝｢繧ｸ繝･繝ｼ繝ｫ縺ｨ縺励※蜊倡峡縺ｧ蛻ｩ逕ｨ縺ｧ縺阪∪縺吶・
```javascript
import { monthlyPayment, totalPayment, repaymentSchedule } from "./src/loan.js";

// 3000荳・・繝ｻ蟷ｴ蛻ｩ1.5%繝ｻ35蟷ｴ
console.log(monthlyPayment(30000000, 1.5, 35));  // 91855
console.log(totalPayment(30000000, 1.5, 35));    // 38579100

const schedule = repaymentSchedule(30000000, 1.5, 35);
console.log(schedule[0]);
// { month: 1, payment: 91855, principalPaid: 54355, interestPaid: 37500, balance: 29945645 }
```

## 繧ｫ繧ｹ繧ｿ繝槭う繧ｺ縺ｮ縺皮嶌隲・
莉･荳九・繧医≧縺ｪ諡｡蠑ｵ縺ｮ縺皮嶌隲・価繧翫∪縺・

- 郢ｰ荳翫￡霑疲ｸ医す繝溘Η繝ｬ繝ｼ繧ｷ繝ｧ繝ｳ讖溯・縺ｮ霑ｽ蜉
- 繝懊・繝翫せ霑疲ｸ医・蟇ｾ蠢・- 隍・焚繝ｭ繝ｼ繝ｳ縺ｮ豈碑ｼ・ｩ溯・
- PDF/Excel 縺ｧ縺ｮ邨先棡繝繧ｦ繝ｳ繝ｭ繝ｼ繝・- 譌｢蟄倥し繧､繝医∈縺ｮ邨・∩霎ｼ縺ｿ

## 蜈崎ｲｬ莠矩・
譛ｬ險育ｮ励・繧ｷ繝溘Η繝ｬ繝ｼ繧ｷ繝ｧ繝ｳ縺ｧ縺吶ょｮ滄圀縺ｮ蛟溷・譚｡莉ｶ繝ｻ驥大茜繝ｻ隲ｸ雋ｻ逕ｨ縺ｯ驥題檮讖滄未縺ｫ縺皮｢ｺ隱阪￥縺縺輔＞縲・
## 繝ｩ繧､繧ｻ繝ｳ繧ｹ

MIT License - 隧ｳ邏ｰ縺ｯ [LICENSE](LICENSE) 繧貞盾辣ｧ
