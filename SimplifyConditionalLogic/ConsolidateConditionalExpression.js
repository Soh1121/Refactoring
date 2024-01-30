function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability()) return 0;
    // 障害手当を計算する

    function isNotEligibleForDisability() {
        return ((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime));
    }
}
