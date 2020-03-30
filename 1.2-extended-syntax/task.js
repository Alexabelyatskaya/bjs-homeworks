'use strict'

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

	else if (discriminant < 0) {
		decision = [];
	}

	return decision;
}



function getAverageMark(marks){

    let summ = 0;
    let array1 = marks.slice(0, 5);
    let average = 0;

 if (marks.length == 0) {
    	return average;
    } 

    else {
    	for (var i = 0; i < array1.length; i++) {
		summ = array1[i] + summ;
	}

    average = summ / array1.length;
	return average;
    }
}

function getAge(year) {

	return new Date().getFullYear() - year.getFullYear();
}

function askDrink(name,dateOfBirthday){

    if (getAge(dateOfBirthday) < 18) {
        return text = 'Сожалею, ' + name +', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';
    } else {
    	return text = 'Не желаете ли олд-фэшн, ' + name + '?';
    }
}