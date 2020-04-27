//Primer video
//Lección 5
//prueba
alert('hello, world');

//Lección 6
console.log(1);
console.log(1);

//Lección 7 y 8
let edad = 25;
let año = 2019;

console.log(edad, año);

// edad = 30;
// console.log(age);

// const puntos = 100;
// puntos = 50;
// console.log(puntos);

// var puntaje = 75;
// console.log(puntaje);

//segundo video
//Lección 9
// cadenas
console.log('hola, mundo');

let  correo  =  'jeancarloantonioaranda@gmail.com';
console.log(correo);

// concatenación de cadenas
let  primerNombre  =  'Antonio';
let  siguienteNombre  =  'Aranda';

let  nombreCompleto  =  primerNombre  +  ''  +  siguienteNombre;

console.log (nombreCompleto);

// obteniendo personajes individuales
console.log(nombreCompleto[ 2 ]);

// longitud de la cuerda
console.log (nombreCompleto.length);

// métodos de cadena
console.log ( nombreCompleto . toUpperCase ( ) );
let  resultado  =  nombreCompleto . toLocaleLowerCase ( );
console.log ( resultado );

let  index  =  correo.indexOf( '@' );
console.log ('index of the @ sign:', index);

//Lección 10
// métodos de cadena comunes

let correo10 = 'jeancarloantonioaranda@gmail.com';

//let resultado10 = correo10.lastIndexOf('n');

//let resultado10 = correo10.slice(0,5);

//let resultado10 = correo10.substr(5,12);

//let resultado10 = correo10.replace('m', 'w');

let resultado10 = correo10.replace('n', 'w');

console.log(resultado10);

//Lección 11
// numeros

let radio = 10;
let pi = 3.14;

// console.log(radio, pi);

// operaciones aritmeticas - +, -, *, /, **, %

// console.log(10 / 2);
// let resultado11 = radio % 3;
// let resultado11 = pi * radio**2;

// orden de la operación - B I D M A S

// let resultado11 = 5 * (10 - 3)**2;

// console.log(resultado11);

// shorthands
let likes = 10;

// likes = likes + 1;
// likes++;

// likes = likes + 10;
// likes += 10;

// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hola');
// console.log(5 * 'hola');

let resultado11 = 'El blog tiene ' + likes + ' likes.';
console.log(resultado11);

//Lección 12
// Cadenas de plantillas
const title = 'Los mejores Programadores';
const author = 'jhonas';
const likes12 = 70;

// Forma de concatenación

// let result = 'El blog ' + title + ' por ' + author + ' tiene ' + likes + ' likes';
// console.log(result);

// template string way

// let result = `El blog  ${title} por ${author} tiene ${likes} likes`;
// console.log(result);

// Forma de cadena de plantilla
let html = `
  <h2>${title}</h2>
  <p>Por ${author}</p>
  <span>El blog tiene ${likes} likes</span>
`;

console.log(html);

//Lección 13
// arreglos

let juegos = ['COD', 'DARK', 'HUSTLE'];

// juegos[1] = 'CLAHS';
// console.log(juegos[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['COD', 'DARK', 30, 20];

// longitud de arreglo
// console.log(juegos.length);

// metodos con arreglos

// let resultado13 = juegos.join(',');
// let resultado13 = juegos.indexOf('HUSTLE');
// let resultado13 = juegos.concat(['CLAHS', 'DARK']);
//let resultado13 = juegos.push('CLAHS');
let resultado13 = juegos.pop();

console.log(resultado13);
console.log(juegos);

//Lección 14
// null & undefined
let edad14 = null;

console.log(edad14, edad14 + 3, `La edad es ${edad14}`);

//Lección 15
// booleanos y comparaciones
// console.log(true, false, 'true', 'false');

// los métodos pueden devolver booleanos
// let correo = 'jeancarloantonioaranda@gmial.com';
// let nombres = ['jean', 'claun', 'van'];

// let resultado = correo.includes('@');
// let resultado = nombres.includes('claun');

// console.log(resultado);

// Operadores de comparación
let edad15 = 25;

console.log(edad15 == 25);
console.log(edad15 == 30);
console.log(edad15 != 30);
console.log(edad15 > 20);
console.log(edad15 < 20);
console.log(edad15 <= 25);
console.log(edad15 >= 25);

let name = 'toño';

console.log(name == 'toño');
console.log(name == 'Toño');
console.log(name > 'antonio');
console.log(name > 'Toño');
console.log(name > 'Antonio');

//Lección 16
let edad16 = 25;

// comparación suelta (diferentes tipos aún pueden ser iguales)

// console.log(edad16 == 25);
// console.log(edad16 == '25');
// console.log(edad16 != 25);
// console.log(edad16 != '25');

// comparación estricta (diferentes tipos no pueden ser iguales)

// console.log(edad16 === 25);
// console.log(edad16 === '25');
// console.log(edad16 !== 25);
// console.log(edad16 !== '25');

//Lección 17
// conversión de tipo
// let puntaje = '100';

// puntaje  = Number(puntaje );
// console.log(puntaje  + 1);
// console.log(typeof puntaje );

// let resultado17 = Number('hello');
// let resultado17 = String(50);
// let resultado17 = Boolean(100);
// let resultado17 = Boolean(0);
// let resultado17 = Boolean('0');
let resultado17 = Boolean('');

console.log(resultado17, typeof resultado17);

//3° Video
//Lección 19
// para ciclos

// for(let i = 0; i < 5; i++){
//   console.log('loop: ', i);
// }

const nombres = ['jean', 'claun', 'van'];

for(let i = 0; i < nombres.length; i++){
  // console.log(nombres[i]);
  let html = `<div>${nombres[i]}</div>`;
  console.log(html);
}

//Lección 20
// while loops
const nombres20 = ['jean', 'claun', 'van'];
let i = 0;

// while(i < 5){
//   console.log('loop: ', i);
//   i++;
// }

// while(i < nombres20.length){
//   console.log(nombres20[i]);
//   i++;
// }

i = 8;
while(i > 5){
  console.log('loop: ', i);
  i--;
}

//Lección 21
// do while loops
let i21 = 5;

do{
  console.log('El valor de i es: ', i21);
  i21++;
} while(i < 5);

//Lección 22
// si declaraciones
// const edad = 25;

// if(edad > 20){
//   console.log('tienes más de 20 años');
// }

// const juegos = ['COD', 'DARK', 'HUSTLE', FIV];

// if(juegos.length > 3){
//   console.log("eso es un montón de juegos!");
// }

const password22 = 'contraseña.exe';

if(password22.length >= 8){
  console.log('esa contraseña es lo suficientemente larga');
}

//Lección 23
// else if statements
const password23 = 'contraseña.exe';

if(password23.length >= 12){
  console.log('esa contraseña es muy fuerte');
} else if(password23.length >= 8){
  console.log('esa contraseña es suficientemente larga');
  console.log('la contraseña debe tener al menos 8 caracteres de longitud');
}

//Lección 24
// else if statements
const password = 'contraseña.exe';

if(password.length >= 12 && password.includes('@')){
  console.log('esa contraseña es muy fuerte');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
  console.log('esa contraseña es lo suficientemente segura');
} else {
  console.log('esa contraseña NO es lo suficientemente segura');
}

//Lección 25
// Logical NOT
const user = false;

if(!user){
  // do something
  console.log('Usted debe haber iniciado sesión para continuar');
}

console.log(!true);
console.log(!false);

//Lección 26
// break & continue "romper y continuar"
const puntaje = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < puntaje .length; i++){

  if(puntaje [i] === 0){
    continue;
  }

  console.log('tu puntaje es :', puntaje [i]);

  if(puntaje[i] === 100){
    console.log('felicidades, obtuviste el puntaje más alto!');
    break;
  }

}

//Lección 27
// switch statements
const grado = 'D';

switch(grado){
  case 'A':
    console.log('tienes un  10!');
    break;
  case 'B':
    console.log('tienes un 9!');
    break;
  case 'C':
    console.log('tienes un 8!');
    break;
  case 'D':
    console.log('tienes un 7!');
    break;
  case 'E':
    console.log('tienes un 6!');
    break;
  default:
    console.log('repe');
}

// utilizando declaraciones if
// if(grado === 'A'){

// } else if(grado === 'B'){

// } else if(grado === 'C'){

// } else if(grado === 'D'){

// } else if(grado === 'E'){

// } else {

// }

// //Lección 28
// // variables & block scope "variables y alcance del bloque"
// let edad28 = 30;

// if(true){

//   // edad28 = 40;
//   let edad28 = 40;
//   let nombre28 = 'jhonas';
//   console.log('dentro del primer bloque de código:', edad28, nombre28);

//   if(true){

//     let edad = 50;
//     console.log('dentro del segundo bloque de código:', edad28, nombre28);

//   }

// }

// console.log('afuera del  bloque de código:', edad28, nombre28);
//variables & block scope
const age = 30;

if(true){
    const age  = 40;
    const name = 'jhonas';
    console.log('dentro del bloque de código lst: ', age, name);

    if(true){
        const age = 50;
        console.log('dentro del segundo bloque de código:', age);
       
    }
}

console.log('bloque de código externo: ', age, name);
//4° Video
//Lección 30
// function declaration
function greet(){
    console.log('hola a todos');
  }
  
  // function expression
  const speak = function(){
    console.log('buen dia!');
  };
  
  // greet();
  // greet();
  
  speak();

//Lección 31
// arguments & parameters

const speak31 = function(nombre = 'claub', tiempo = 'noche'){
    console.log(`buen ${tiempo}, ${nombre}!`);
  };
  
  // speak('jean', 'dia');
  // speak();
  speak31('van');

//Lección 32
// return statements

// const speak = function(nombre, tiempo){
//   console.log(`buen ${tiempo}, ${nombre}!`);
// };

const calcArea32 = function(radio){
    let area = 3.14 * radio**2;
    return area;
  }
  
  const area = calcArea32(5);
  console.log('el area es:', area);

//Lección 33
// arrow functions

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// arrow function
const calcArea = radius => 3.14 * radius**2;

const area33 = calcArea(5);
console.log('area is:', area33);

// practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }

const greet33 = () => 'hello, world';

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]  + products[i] * tax;
  }
  return total;
}

console.log(greet());
console.log(bill([10,15,30], 0.2));

//Lección 34
const name34 = 'shaun';

// function

const greet34 = () => {
  return 'hello';
};

let resultOne = greet34();
console.log(resultOne);

// method

let resultTwo = name.toUpperCase();
console.log(resultTwo);

//Lección 35
// callbacks & forEach
let people35 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });

people35.forEach(logPerson);

//Lección 36
// const ul36 = document.querySelector('.people');

// const people36 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// let html36 = ``;

// people36.forEach(person => {
//   // create html template for each person
//   html36 += `<li style="color: purple">${person}</li>`;
// });

// console.log(html36);
// ul36.innerHTML = html36;

// get a reference to the 'ul'
const ul = document.querySelector('.People');

const people = ['lui', 'solis', 'pablo', 'pedro', 'alex'];

let html36 = ``;

people.forEach(person => {
   //create html template
   html36 += `<li style="color: blue">${person}</li>`;
});

console.log(html36);
ul.innerHTML = html36;
//5° Video
//Lección 38
// object literals

let user38 = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
  };
  
  console.log(user38);
  console.log(user38.age);
  
  user.age = 35;
  console.log(user38.age);
  
  console.log(user38['name']);
  user['name'] = 'chun-li';
  console.log(user38['name']);
  
  console.log(typeof user38);

//Lección 39
// object literals

let user39 = {
    name39: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
      console.log('the user logged in');
    },
    logout: function(){
      console.log('the user logged out');
    },
    logBlogs: function(){
      // access the blogs here
    }
  };
  
  user39.login();
  user39.logout();
  
  const name39 = 'shaun';
  name39.toUpperCase();

//Lección 40
// object literals

let user40 = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    },
    logBlogs(){
      // access the blogs here
      // console.log(this);
      console.log('this user has written these blogs:');
      this.blogs.forEach(blog => {
        console.log(blog);
      })
    }
  };
  
  // console.log(this);
  user40.logBlogs();

//Lección 41
// const blogs = [
//   {title: 'why mac & cheese rules', likes: 30},
//   {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs[0].title);

let user41 = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
      {title: 'why mac & cheese rules', likes: 30},
      {title: '10 things to make with marmite', likes: 50}
    ],
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    },
    logBlogs(){
      // access the blogs here
      // console.log(this);
      console.log('this user has written these blogs:');
      this.blogs.forEach(blog => {
        console.log(`${blog.title} has ${blog.likes} likes`);
      })
    }
  };
  
  // console.log(this);
  user41.logBlogs();

//Lección 42
// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area42 = 7.7;

console.log(Math.round(area42));
console.log(Math.floor(area42));
console.log(Math.ceil(area42));
console.log(Math.trunc(area42));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

//Lección 43
// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

userOne = { name: 'ryu', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);

//6° Video
//Lección 46
// const para = document.querySelector('p');
// const para = document.querySelector('.error');
const para = document.querySelector('div.error');

console.log(para);

// query multiple elements at once
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(paras, errors);
console.log(paras[1], errors[0]);

//Lección 47
// obtener un elemento por ID
const title47= document.getElementById('titulo de pagina');
console.log(title);

// obtener elementos por su nombre de clase
const errors47 = document.getElementsByClassName('error');
console.log(errors47);
console.log(errors47[0]);

// obtener elementos por su nombre de etiqueta
const paras47 = document.getElementsByTagName('p');
console.log(paras47);
console.log(paras47[1]);

//Lección 48
const para48 = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'los juegos son lo mejor;

const paras48 = document.querySelectorAll('p');

// paras.forEach(p => {
//   console.log(p.innerText);
//   p.innerText = 'nuevo texto!';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>Es un nuevo h2</h2>';

// content.innerHTML += '<h2>Este es un h2 agregado al contenido</h2>';

const people48 = ['jean', 'claun', 'van'];

people48.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});

//Lección 49
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.Elpoderesmio');
link.textContent = 'La pagina del poder';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: blue');
//Lección 50
const title50 = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

console.log(title50.style);
console.log(title50.style.color);

title50.style.margin = '50px';
title50.style.color = 'brown';
title50.style.fontSize = '60px';
title50.style.margin = '';

//Lección 51
// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('success');

const paras51 = document.querySelectorAll('p');

paras51.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  } else if(p.textContent.includes('success')) {
    p.classList.add('success');
  }
});

//Lección 52
const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
});

const title52 = document.querySelector('h7');

console.log(title52.parentElement);
console.log(title52.parentElement.parentElement);
console.log(title52.nextElementSibling);
console.log(title52.previousElementSibling);

// chaining
console.log(title52.nextElementSibling.parentElement.children);

//Lección 53 
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    e.target.style.textDecoration = 'line-through';
  });
});

//Lección 54
const ul54 = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'algo nuevo que hacer';
  //ul.appendChild(li);
  ul54.prepend(li);
});

const items54 = document.querySelectorAll('li');

items54.forEach(item => {
  item.addEventListener('click', e => {
    // e.target.style.textDecoration = 'line-through';
    e.target.remove();
  });
});

//Lección 55
const ul55 = document.querySelector('ul');
const button55 = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'algo nuevo que hacer';
  ul55.appendChild(li);  
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

ul55.addEventListener('click', e => {
  // console.log('evento en UL');
  console.log(e.target, e);
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});

//Lección 56
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('OH! mi contenido tiene derechos de autor!!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);
});

//Lección 57
const button57 = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button57.addEventListener('click', () => {
  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if(e.target.className === 'popup-wrapper'){
    popup.style.display = 'none';
  }
});