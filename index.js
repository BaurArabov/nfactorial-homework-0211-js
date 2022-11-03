const KAZ_FOOTBALL_TEAM = 'Сборная Казахстана по футболу';

const numbOne_name = 'Bekkhan Shayzada';
let numbOne_number = 1;
const numbTwelve_name = 'BIgor Shatsky';
let numbTwelve_number = 12;
const numbFifteen_name = 'Mukhammedzhan Seysen';
let numbFifteen_number = 15;

const GK = {
    Goalkeepers: true,
    GK_name:{
        name_one: numbOne_name,
        name_twelve: numbTwelve_name,
        name_fifteen: numbFifteen_name,
    },
    GK_number:{
        number_one: numbOne_number,
        number_twelve: numbTwelve_number,
        number_fifteen: numbFifteen_number,
    },
    GK_dateOfBirth:{
        date_one: '28 February 1998',
        date_twelve: '11 May 1989 (age 33)',
        date_fifteen: '14 February 1999',
    }
}

delete GK.GK_name['name_one'];
GK['Forwards'] = false;


const vehicle = {
    brandName: 'BMW',
    model: 'X5'
}
console.log(vehicle)
console.log(vehicle.model); //X5


vehicle.model = 'M1';
console.log(vehicle)
console.log(vehicle.model) //M1

delete vehicle.model;

console.log(vehicle.model) //undefined

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let sum = 0;
for (let sal in salaries){
    console.log(`${salaries[sal]} + ${sum} = `, salaries[sal]+sum);
    sum += salaries[sal];
}
console.log('Сумма значений =', sum);