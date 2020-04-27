'use strict'

//Задание 1
class Weapon {

    constructor(initialObject)
    {
        this.name = initialObject.name;
        this.attack = initialObject.attack;        
        //Полная прочность
        this.fullDurability = initialObject.durability;
        //Текущая прочность
        this.durability = initialObject.durability;
        this.range = initialObject.range;
    }

    takeDamage(damage)
    {
        if (isNaN(damage))
        {
            return false;
        }
        
        if (this.durability - damage > 0)
        {
            this.durability = this.durability - damage;
        }
        else {
            this.durability = 0;
        }
        
        return true;
    }
    
    getDamage()
    {
        if (this.durability === 0)
        {
            return 0;
        }
        
        if (this.durability / this.fullDurability < 0.3)
        {
            return this.attack / 2;
        }
        else {
            return this.attack;
        }
    }
    
    isBroken()
    {
        return (this.durability === 0);
    }
}

let hand    = new Weapon({name: 'Рука', attack: 1, durability: Infinity, range:1});
let bow     = new Weapon({name:'Лук', attack:10, durability:200, range:3});
let sword   = new Weapon({name:'Меч', attack:25, durability:500, range:1});
let knife   = new Weapon({name:'Нож', attack:5, durability:300, range:1});
let staff   = new Weapon({name:'Посох', attack:8, durability:300, range:2});

let bow2        = new Weapon({name:'Длинный лук', attack:15, durability:200, range:4});
let axe         = new Weapon({name:'Секира', attack:27, durability:800, range:1});
let stormStaff  = new Weapon({name:'Посох Бури', attack:10, durability:300, range:3});

//Задание 2

class Bow extends Weapon {
    constructor()
    {
        super({name:'Лук', attack:10, durability:200, range:3});
    }
}

class Sword extends Weapon {
    constructor()
    {
        super({name:'Меч', attack:25, durability:500, range:1});
    }
}

class Knife extends Weapon {
    constructor()
    {
        super({name:'Нож', attack:5, durability:300, range:1});
    }
}

class Staff extends Weapon {
    constructor()
    {
        super({name:'Посох', attack:8, durability:300, range:2});
    }
}

class Arm extends Weapon {
    constructor()
    {
        super({name:'Рука', attack:1, durability:Infinity, range:1});
    }
}

class LongBow extends Bow {
    constructor()
    {
        super();
        this.name       = 'Длинный лук';
        this.attack     = 15;
        this.range      = 4;
    }
}

class Axe extends Sword {
    constructor()
    {
        super();
        this.name       = 'Секира';
        this.attack     = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor()
    {
        super();
        this.name       = 'Посох Бури';
        this.attack     = 10;
        this.range      = 3;
    }
}


const stormStaff1 = new StormStaff();

console.log(stormStaff1.name); 
console.log(stormStaff1.attack); 
console.log(stormStaff1.durability);
console.log(stormStaff1.range); 


//Задание 3
class StudentLog
{
    constructor(name)
    {
        this.name = name;
        //Оценки - массив 
        this.subjects  = [];
    }
    
    getName()
    {
        return this.name;
    }
    
    addGrade(grade, subject)
    {
        if (isNaN(grade))
        {
            alert('Оценка должна быть числом от 1 до 5');

            if (typeof(this.subjects[subject]) === "undefined") {
            	return 0;
            }
            else
            	return this.subjects[subject].length;
        }
        
        if (grade > 5 || grade < 1)
        {
            alert('Оценка должна быть числом от 1 до 5');

            if (typeof(this.subjects[subject]) === "undefined") {
            	return 0;
            }
            else
            	return this.subjects[subject].length;
        }
        
        if (typeof(this.subjects[subject]) === "undefined")
        {
            this.subjects[subject] = [];
        }
        
        this.subjects[subject].push(grade);
        
        return this.subjects[subject].length;
    }
    
    getAverageBySubject(subject)
    {
        if (typeof(this.subjects[subject]) === "undefined")
        {            
            return 0;
        }
        
        let sum = 0;
        for (const element of this.subjects[subject])
        {
            sum += element;
        }
        return sum/this.subjects[subject].length;
    }
    
    getTotalAverage()
    {
        let sum = 0;
        let count = 0;
        for (let subject in this.subjects)
        {            
            for (const element of this.subjects[subject])
            {
                sum += element;
                count++;
            }
        }
        return sum/count;
    }
}

//Тест
let log = new StudentLog('Саша');

log.addGrade(5, 'Математика');
log.addGrade(4, 'Математика');
log.addGrade(5, 'Математика');

log.addGrade(5, 'Музыка');
log.addGrade(4, 'Музыка');
log.addGrade(5, 'Музыка');


log.addGrade(2, 'ОБЖ');
log.addGrade(3, 'ОБЖ');
log.addGrade(2, 'ОБЖ');

console.log(log.getAverageBySubject('Музыка'));
console.log(log.getAverageBySubject('Математика'));
console.log(log.getAverageBySubject('ОБЖ'));

console.log(log.getTotalAverage());