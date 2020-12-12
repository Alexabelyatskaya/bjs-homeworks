'use strict'



// Задание 1

function parseCount(input) {
	let products = Number.parseInt(input);
		if (isNaN(products)) {
			throw new Error ('Невалидное значение!');
		}
		return products;
}

function validateCount(input) {
	let products = 0;
	try {
		products = parseCount(input);
	} catch(e) {
		return new Error ('Невалидное значение!');
	}
	return products;
}



// Задание 2

class Triangle {

	constructor(triangleABC)
	{

		this.a = triangleABC.a;
		this.b = triangleABC.b;
		this.c = triangleABC.c;
		console.log('Поля класса', this.a, this.b, this.c);
		if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
			throw new Error ('Треугольника с такими сторонами не существует!');
		}
	}

	getPerimeter() {
		let perimeter = this.a + this.b + this.c;
		return perimeter;
	}

	getArea() {
		let p = this.getPerimeter() * 0.5;
		let area = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);

		return area;
	}

}

function getTriangle(a, b, c) {

	let object = {'a': a, 'b': b, 'c': c};

	try {
		return new Triangle (object);
	} catch(e) {
		return {'getArea': () => 'Ошибка', 'getPerimeter': () => 'Ошибка'};
	}
}