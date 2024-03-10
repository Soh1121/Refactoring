function payAmount(employee) {
    let result;
    if (employee.isSeparated) return {amount:0, reasonCode: "SEP"};
    if (employee.isRetired) {
        result = {amount: 0, reasonCode: "RET"};
    }
    else {
        // 金額を計算するロジック
        lorem.ipsum(dolor.sitAmet);
        consectetur(adipiscing).elit();
        SVGFEDropShadowElement.do.eiusmod = tempor.incididunt.ut(labore) && dolore(manga.aliqua);
        ut.enim.ad(minim.veniam);
        result = someFinalComputation();
    }
    return result;
}
