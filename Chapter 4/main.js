var score = 75;
var msg = ' ';

function congratulate() {
    msg += 'Congratulations!';
}

if (score >= 50) {
    congratulate();
    msg += 'Proceed to the next round .';
}
/**********Using the while loop to create an addition table  **********/
var i = 1;
var result = ' ';
while (i <= 10) {
    result += i + ' + 3 = ' + (i + 3) + '<br/>';
    i++;
}
document.getElementById('answer').innerHTML = result;

/**********Using both an operator and and a while loop to perform a calculation based on a set condition **********/
// var table = 3;
// var operator = 'addition';
// var i = 1;
// var msg = ' ';

// if (operator === 'addition') {
//     while (i < 11) {
//         msg += i + '+' + table + '=' (i + table) + '<br/>';
//         i++;
//     }
// } else {
//     while (i < 11) {
//         msg += i + 'x' + table + '=' (i * table) + '<br/>';
//         i++;
//     }
// }
/********** This would be completed using an event listeners when I've got to Events**********/