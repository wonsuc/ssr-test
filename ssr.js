this.grdMenuList1_OnChar = function (obj, strPreText, nChar, strPostText, nLLParam, nHLParam, nRow, nCell, nPivotIndex) {
    // some comments...
    console.info('grdMenuList1_OnChar:nCell:' + nCell + '|strPostText:' + strPostText);
    if (nCell == 0) {
        this.dsLangMenu.setColumn(0, "NM", strPostText);
    }
};