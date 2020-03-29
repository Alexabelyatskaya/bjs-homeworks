'use strict'

function getResult(a,b,c){

	var dis = Math.pow(b,2) - (4 * a * c);

	if (dis > 0) {
	    var x1 = (- b + Math.sqrt(dis)) / 2 * a;
        var x2 = (- b - Math.sqrt(dis)) / 2 * a;
        var decision = [x1, x2];
	} 

	else if (dis == 0) {
		var x = - b / (2 * a);
		var decision = [x];
	}

	else if (dis < 0) {
		var decision = [];
	}

	return decision;
}



function getAverageMark(marks){

    var summ = 0;
    var array1 = marks.slice(0, 5);
    console.log(array1);

 if (marks.length == 0) {
    	var a = 0;
    } 

    else {

	for (var i = 0; i < 5; i++) {
		summ = array1[i] + summ;
	}

	var a = summ / array1.length;
    }

	return a;
}

function getAge(year) {

	var date1 = new Date();
	var yearNow = date1.getFullYear();
	var b = year.getFullYear();

	return yearNow - b;
}

function askDrink(name,dateOfBirthday){

    if (getAge(dateOfBirthday) < 18) {
        var a = 'Сожалею, ' + name +', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';
    } else {
    	var a = 'Не желаете ли олд-фэшн, ' + name + '?';
    }

    return a;
}