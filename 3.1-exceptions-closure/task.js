'use strict'



// Задание 1

function parseCount(input) {
	let products = Number.parseInt(input);
		if (isNaN(products)) {
			throw new Error ('Невалидное значение');
		}
		return products;
}

function validateCount(input) {
	try {
		return parseCount(input);
	} catch(e) {
		console.log(e);
		return e;
	}
}



// Задание 2

class Triangle {

	constructor(a, b, c)
	{

		this.a = a;
		this.b = b;
		this.c = c;
		if (a + b <= c || a + c <= b || (b + c <= a)) {
			throw new Error ('Треугольник с такими сторонами не существует');
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c;
		
	}

	getArea() {
		let p = this.getPerimeter() * 0.5;
		return parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
	}

}

function getTriangle(a, b, c) {

	try {
		return new Triangle (a, b, c);
	} catch(e) {
		return {'getArea': () => 'Ошибка! Неправильный треугольник', 'getPerimeter': () => 'Ошибка! Неправильный треугольник'};
	}
}