var table = document.getElementsByTagName('table')[0];
var tBody = table.childNodes[1];
var addRowBtn = document.getElementById('addRow');
var randomTableBtn = document.getElementById('tdRandom');
var checkTableBtn = document.getElementById('checkTable');
var elemTr = document.getElementsByTagName('tr');
var nameArr = ['Катя','Игорь','Даша','Паша','Марина','Матвей','Алеся','Максим','Светлана','Сергей','Алла','Юрий','Ольга','Руслан','Анна','Антон','Маргарита','Роман'];
addRowBtn.onclick = addRow;
randomTableBtn.onclick = insertRandom;
checkTableBtn.onclick = checkTable;

// new row
function addRow() {
    var newRow = document.createElement('tr');
    var firstRow = table.getElementsByTagName('tr')[1];

    newRow.innerHTML = '<td id="studentName"></td><td></td><td></td><td></td><td></td>';
    tBody.insertBefore(newRow, firstRow);
}

// random
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function insertRandom() {
    for (var i = 0; i<elemTr.length - 1; i++) {
        for (var j = 0; j < 4; j++) {
            var elemTd = document.getElementsByTagName('td') [(j + 1) + (i * 5)];
            elemTd.innerHTML = getRandom(5, 10);
        }
        for (var j = 0; j < 1; j++) {
            var elemTd = document.getElementsByTagName('td') [(j) + (i * 5)];
            elemTd.innerHTML = nameArr[getRandom(0, 17)];
        }
    }
}

// insert Input
table.addEventListener('click', insertInput, false);
function insertInput(event) {
    var target = event.target;
    if (target.tagName === 'TD' && target.id !== 'addRow') {
        var value = target.innerText || '';

        target.innerHTML = '<input id="inpMask" type="text" onblur="setText(event)" value="' + value + '">';
        table.getElementsByTagName('input')[0].focus();
    }
}

function  setText(event) {
    var target = event.currentTarget;
    target.parentNode.innerHTML = target.value;
}

// onclick Enter
window.onkeypress = function(event) {
    if (event.keyCode === 13) {
        var input = table.getElementsByTagName('input')[0];
        input && input.blur();
    }
};

// check Table
function checkTable() {
    var checkRes = 0;
    var students = 0;
    var resultInHtml = document.getElementById('resultOut');

    for (var i = 0; i<elemTr.length - 1; i++) {
        checkRes = 0;
        for (var j = 0; j < 4; j++) {
            var elemTd = document.getElementsByTagName('td') [(j+1) + (i*5)];

            if ((elemTd.innerHTML == 7) || (elemTd.innerHTML == 8) || (elemTd.innerHTML == 9)) {
                checkRes++;
            }
        }
        if (checkRes === 4) {students++}
    }
    resultInHtml.innerHTML = students;
}
