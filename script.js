let name = 'alex'
let account = 7777
let money = 10000


let name_1 = prompt('Как вас зовут ?')
if (name_1 == name) {


    let account_1 = prompt('Номер Счета?')
    if (account_1 == account) {


        let money_1 = prompt('Сколько обналичить?')
        if (money_1 < money) {
            alert('Всё отлично')
        } else {
            alert('Недостаточно средств')
        }

        let total = alert(` Обналичили:${money_1} Осталось: ${money - money_1} `)
    } else {
        alert('Пользователь не найден, досвидули');
    }
} else {
    alert('Пользователь не найден, досвидули');
}