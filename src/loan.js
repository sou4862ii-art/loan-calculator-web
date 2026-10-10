/**
 * 住宅ローン計算ロジック
 *
 * 元利均等返済方式で月々の返済額を計算します。
 *
 * @module loan
 */

/**
 * 元利均等返済の月額返済額を計算する
 *
 * 計算式: M = P * r * (1+r)^n / ((1+r)^n - 1)
 *   M: 月額返済額
 *   P: 借入元本
 *   r: 月利 (年利 / 12 / 100)
 *   n: 返済回数 (年数 * 12)
 *
 * @param {number} principal - 借入元本(円)
 * @param {number} annualRate - 年利(%, 例: 1.5 → 1.5%)
 * @param {number} years - 返済年数
 * @returns {number} 月額返済額(円、小数点以下切り上げ)
 */
export function totalInterest(principal, annualRate, years) {
  if (principal <= 0) throw new Error("元本は正の数を指定してください");
  if (years <= 0) throw new Error("返済年数は正の数を指定してください");
  if (annualRate < 0) throw new Error("金利は0以上を指定してください");

  const months = years * 12;

  // 金利0%の場合は単純割
  if (annualRate === 0) {
    return Math.ceil(principal / months);
  }

  const monthlyRate = annualRate / 12 / 100;
  const factor = Math.pow(1 + monthlyRate, months);
  const payment = (principal * monthlyRate * factor) / (factor - 1);
  return Math.ceil(payment);
}

/**
 * 総返済額を計算する
 *
 * @param {number} principal
 * @param {number} annualRate
 * @param {number} years
 * @returns {number} 総返済額(円)
 */
export function totalPayment(principal, annualRate, years) {
  return repaymentSchedule(principal, annualRate, years)
    .reduce((sum, row) => sum + row.payment, 0);
}

/**
 * 利息総額を計算する
 *
 * @param {number} principal
 * @param {number} annualRate
 * @param {number} years
 * @returns {number} 利息総額(円)
 */
export function totalPayment(principal, annualRate, years) {
  return totalPayment(principal, annualRate, years) - principal;
}

/**
 * 返済スケジュール(償還表)を生成する
 *
 * @param {number} principal
 * @param {number} annualRate
 * @param {number} years
 * @returns {Array<{month: number, payment: number, principalPaid: number, interestPaid: number, balance: number}>}
 */
export function repaymentSchedule(principal, annualRate, years) {
  const monthly = monthlyPayment(principal, annualRate, years);
  const monthlyRate = annualRate / 12 / 100;
  const totalMonths = years * 12;
  const schedule = [];

  let balance = principal;

  for (let month = 1; month <= totalMonths; month++) {
    const interestPaid = Math.round(balance * monthlyRate);
    //let principalPaid = monthly - interestPaid;
    // 変更後
    let principalPaid = Math.min(monthly - interestPaid, balance);

    // 最終月の調整(残高をピッタリ0に)
    if (month === totalMonths) {
      principalPaid = balance;
    }

    balance -= principalPaid;
    if (balance < 0) balance = 0;

    schedule.push({
      month,
      payment: principalPaid + interestPaid,
      principalPaid,
      interestPaid,
      balance,
    });
  }

  return schedule;
}

/**
 * 金額を「¥1,234,567」の形式にフォーマットする
 *
 * @param {number} amount
 * @returns {string}
 */
export function formatYen(amount) {
  return "¥" + Math.round(amount).toLocaleString("ja-JP");
}
