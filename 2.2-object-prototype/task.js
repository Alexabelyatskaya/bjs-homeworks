// Задание 1

function getAnimalSound(animal) {

	if (animal === undefined) {

		return null;
	}

	let sound = animal.sound;

	return sound;
}

// Задание 2

function getAverageMark(marks) {

	console.log(marks);

    let summ = 0;
    let array1 = marks;

    if (marks.length == 0) {
    	return 0;
    } 

    for (var i = 0; i < array1.length; i++) {
	    summ = Number(array1[i]).valueOf() + summ;
	
    } 

    let roundedAverage = Math.round(summ / array1.length);

    console.log(roundedAverage);

	return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}