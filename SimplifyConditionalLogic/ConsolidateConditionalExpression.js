function disabilityAmount(anEmployee) {
    if ((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)) return 0;
    if (anEmployee.isPartTime) return 0;
    // 障害手当を計算する
}
