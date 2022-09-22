// import { h1 } from './m'; 
let a = 10;
let b: number = 10;
// console.log(h1);
console.log(a);


let box1 = document.getElementById("box1");

if(box1 !== null) {
  box1.addEventListener("click", function() {
    alert('hello');
  });
}

/* box1?.addEventListener("click", function() {
  alert('hello');
}); */


