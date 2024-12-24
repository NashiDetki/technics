// console.log("Hello!")
let link_1 = document.querySelector('.link_1');
let link_2 = document.querySelector('.link_2');
let link_3 = document.querySelector('.link_3');
let link_4 = document.querySelector('.link_4');
let image = document.querySelector('.viewer__image');
// let description_title = document.querySelector('.description__title');
// description_title.innerText = 'Новый самолет'

function image1(){
    image.src = './img/sj100 air.jpg'
}
function image2(){
    image.src = './img/sj100 front.jpg'
}
function image3(){
    image.src = './img/sj100 left.jpg'
}
function image4(){
    image.src = './img/sj100 top.jpg'
}

// link_1.addEventListener('click', function(){
//     image.src = './img/sj100 air.jpg'
// })

// image4();

image.src = './img/sj100 left.jpg'

link_1.innerText = 'Rfhnbyrf';

function imageFunction(srcImage){
    image.src = srcImage
}

// imageFunction('./img/sj100 front.jpg');

link_1.addEventListener('click', image1);
link_2.addEventListener('click', image2);
link_3.addEventListener('click', image3);
link_4.addEventListener('click', image4);

// link_2.addEventListener('click', function(){
//     image.src = './img/sj100 front.jpg'
// })

// link_3.addEventListener('click', function(){
//     image.src = './img/sj100 left.jpg'
// })

// link_4.addEventListener('click', function(){
//     image.src = './img/sj100 top.jpg'
// })


// let арбуз;
// let дыня;
// let всего;

// арбуз = 258;
// дыня = 84;
// всего = арбуз + дыня;

// console.log(всего)

// function sayHello(){
//     console.log('Привет Алексей!');
// }

// sayHello();

// function sayHello(name){
//     console.log('Привет ' + name);
// }

// sayHello('Алексей');

function sayHello(name){
    return ('Привет ' + name);
}

let greeting = sayHello('Алексей');

console.log(greeting);
// alert(greeting);

let user = {
    name: 'Alex',
    dotaLevel: 21,
    dogName: 'Kumertay'
}

console.log(user.name);

let array = ['животные', 'растения', 'грибы', 'микроорганизмы', 'вирусы'];

for (let i=0; i<=4; i=i+1){
    console.log(array[i]);
}