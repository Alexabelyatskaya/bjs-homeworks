'use strict'

// Задание 1

function getResult(a,b,c){

	let discriminant = Math.pow(b,2) - (4 * a * c);
    let decision = [];

	if (discriminant > 0) {
	    let x1 = (- b + Math.sqrt(discriminant)) / 2 * a;
        let x2 = (- b - Math.sqrt(discriminant)) / 2 * a;
        decision = [x1, x2];
	} 

	else if (discriminant == 0) {
		let x = - b / (2 * a);
		decision = [x];
	}

	return decision;
}

// Задание 2


function getAverageMark(marks){

    let summ = 0;
    let array1 = marks.slice(0, 5);

    if (marks.length == 0) {
    	return 0;
    } 

    for (var i = 0; i < array1.length; i++) {
	    summ = array1[i] + summ;
	
    } 

	return summ / array1.length;
}

// Задание 3

function getAge(year) {

	return new Date().getFullYear() - year.getFullYear();
}

function askDrink(name,dateOfBirthday){

    if (getAge(dateOfBirthday) < 18) {
        return 'Сожалею, ' + name +', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';
    } else {
    	return 'Не желаете ли олд-фэшн, ' + name + '?';
    }
}