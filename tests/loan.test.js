/**
 * 住宅ローン計算ロジックのテスト
 * 実行: node --test tests/loan.test.js
 */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  monthlyPayment,
  totalPayment,
  totalInterest,
  repaymentSchedule,
  formatYen,
} from "../src/loan.js";

describe("monthlyPayment", () => {
  test("3000万円・年利1.5%・35年の月額は約91,855円", () => {
    // 一般的な住宅ローン計算機の値と一致するかを検証
    const result = monthlyPayment(30000000, 1.5, 35);
    // 公的な計算結果: 91,855円 (誤差は切り上げの範囲内)
    assert.ok(Math.abs(result - 91855) < 5, `期待値91855付近、実際${result}`);
  });

  test("金利0%の場合は単純な割り算", () => {
    // 1200万円を10年(120ヶ月)で返す = 月10万円
    const result = monthlyPayment(12000000, 0, 10);
    assert.equal(result, 100000);
  });

  test("元本が負の値ならエラー", () => {
    assert.throws(() => monthlyPayment(-1000, 1.5, 35), /元本/);
  });

  test("年数が0ならエラー", () => {
    assert.throws(() => monthlyPayment(1000000, 1.5, 0), /返済年数/);
  });

  test("金利が負の値ならエラー", () => {
    assert.throws(() => monthlyPayment(1000000, -0.1, 10), /金利/);
  });
});

describe("totalPayment & totalInterest", () => {
  test("総返済額 = 月額 × 返済月数", () => {
    const monthly = monthlyPayment(30000000, 1.5, 35);
    const total = totalPayment(30000000, 1.5, 35);
    assert.equal(total, monthly * 35 * 12);
  });

  test("利息総額 = 総返済額 - 元本", () => {
    const interest = totalInterest(30000000, 1.5, 35);
    const total = totalPayment(30000000, 1.5, 35);
    assert.equal(interest, total - 30000000);
  });

  test("金利0%なら利息も0", () => {
    const interest = totalInterest(12000000, 0, 10);
    assert.equal(interest, 0);
  });
});

describe("repaymentSchedule", () => {
  test("スケジュール件数 = 年数 × 12", () => {
    const schedule = repaymentSchedule(10000000, 1.5, 10);
    assert.equal(schedule.length, 120);
  });

  test("最終月で残高が0になる", () => {
    const schedule = repaymentSchedule(10000000, 1.5, 10);
    const last = schedule[schedule.length - 1];
    assert.equal(last.balance, 0);
  });

  test("初月は利息分が大きく元本分が小さい", () => {
    const schedule = repaymentSchedule(30000000, 1.5, 35);
    const first = schedule[0];
    // 元本3000万・年利1.5%なら初月利息 = 30000000 * 0.015 / 12 = 37500
    assert.ok(first.interestPaid >= 37400 && first.interestPaid <= 37600);
  });

  test("月数が進むと元本充当が増えていく", () => {
    const schedule = repaymentSchedule(30000000, 1.5, 35);
    // 1年目と20年目を比較
    assert.ok(schedule[12 * 20].principalPaid > schedule[0].principalPaid);
  });
});

describe("formatYen", () => {
  test("日本円フォーマット", () => {
    assert.equal(formatYen(1234567), "¥1,234,567");
  });

  test("ゼロも正しくフォーマット", () => {
    assert.equal(formatYen(0), "¥0");
  });

  test("小数は丸めて表示", () => {
    assert.equal(formatYen(1234.6), "¥1,235");
  });
});
