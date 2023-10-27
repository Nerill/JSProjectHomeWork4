// 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval
detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
    let nIntervId;
	nIntervId = setInterval(() => {
            if(delay > 0) {
                console.log(delay); 
                delay--;} 
            else {
                clearInterval(nIntervId);
                console.log('BOOM!');
            }
        },1000
    );
}


// 2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout
detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
    if(delay>0){
        setTimeout(() => {
            console.log(delay);
            detonatorTimer(delay-1);
          }, 1000);
    }
    else
        setTimeout(() => { console.log('BOOM!')}, 1000);
}


// 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять.
let me = {
	name: 'Kyrylo',
	residency: 'Zhytomyr',
	gender: 'male',
	age: 28,
	hobby: 'gaming',
	defaultMood: 'curiosity',
    currentMood: 'waiting for victory',
	introduce() {
		console.log(`My name is ${this.name} and I live in ${this.residency}`);
	},
	prognose() {
		console.log(`I hope that next year I'm gonna be ${this.age+1}`);
	},
    describeMyMood(){
		console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
	}
}

me.introduce();
me.prognose();
me.describeMyMood();


// 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат


// 5. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.
function someFunction(...args){
    let sum = 0;
    args.forEach( item => {sum += item;})
    console.log(sum);
} // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
    return function (...args) {
        console.log(`Chill out, you will get you result in ${seconds} seconds`);
        setTimeout(()=>{func.apply(this, args);}, seconds * 1000); 
    }
}

let slowedSomeFunction = slower(someFunction, 3); // обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення

slowedSomeFunction(1, 1, 5) // викликаєте декоратор
