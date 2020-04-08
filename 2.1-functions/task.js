// Задание 1

function getSolutions(a, b, c) {

	let d = Math.pow(b,2) - (4 * a * c);
	let decision = [];

	if (d > 0) {
	    let x1 = (- b + Math.sqrt(d)) / 2 * a;
        let x2 = (- b - Math.sqrt(d)) / 2 * a;
        decision = [x1, x2];
	} 

	else if (d == 0) {
		let x = - b / (2 * a);
		decision = [x];
	}

	return {

		D: d,
		roots: decision
	} ;
}

function showSolutionsMessage( a, b, c ) {

	let result = getSolutions(a, b, c);

	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
	console.log(`Значение дискриминанта: ${result.D}.`);

	if (result.D < 0) {
		console.log(`Уравнение не имеет вещественных корней.`);
	}

	else if (result.D = 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots}.`);

	}

	else 
		console.log(`Уравнение имеет два корня: X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}.`);

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

function getAverageScore(data) {

	let summ = 0;
	let count = 0;

    let result = {};

    for (let index in data) {

    	result[index] = getAverageMark(data[index]);

    	for (let i = 0; i < data[index].length; i++) {

    		summ = summ + data[index][i];

    		count++;
    	}
    }

    let total = summ / count;

    result.average = total;

    return result;
}