'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {

	if (isNaN(percent) || percent > 100) {
		alert('Неверное значение ставки.');
		return false;
	}

	if (isNaN(contribution)) {
		alert('Неверное значение взноса.');
		return false;
	}

	if (isNaN(amount)) {
		alert('Неверное значение стоимости.');
		return false;
	}

	if (new Date() >= date) {
		alert('Дата введена неверно.');
		return false;
	}

	if (contribution > amount) {
		alert('Начальный взнос не может превышать общую стоимость.');
		return false;
	}

		let p = (percent / 100) / 12;
		let s = amount - contribution;
		let m = Math.round((date - new Date()) / (86400 * 30 * 1000));

		let payment = (s * (p + p / (((1 + p) ** m) - 1)));

		return (payment * m).toFixed(2);
}

function getGreeting(name) {

	if (name == 0) {
		name = 'Аноним';
	}

    let greeting = `Привет, мир! Меня зовут ${name}.`;

    return greeting;
}