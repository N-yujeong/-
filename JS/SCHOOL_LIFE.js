function showTable(tableId) {
    var tables = document.querySelectorAll('.table-container');
    tables.forEach(function(table) {
        table.classList.remove('active');
    });
    document.getElementById(tableId).classList.add('active');

    var buttons = document.querySelectorAll('.tn');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    document.getElementById('btn_' + tableId).classList.add('active');
}

// 기본적으로 2023년 1학기 시간표를 활성화
document.addEventListener("DOMContentLoaded", function() {
    showTable('table1');
});