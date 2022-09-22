// 表明声明一个变量a，设置指定他的类型是number
let a: number;
// a 的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = 'hello';  // 此行代码会报错，因为变量 a 的类型是number，不能赋值字符串
let b: string;
b = 'hello';
// b = 123;

// 声明完变量直接赋值
// let c: boolean = true;

// 如果变量声明和赋值是同时进行的，ts可以自动对变量进行类型检测

let c = false;
c = true;

// js中的函数是不考虑参数类型和个数的
// function sum(a, b) {
//     return a + b;
// }
//
// console.log(123, 456);
function sum(a: number, b: number): number {
    return a + b;
}

let result = sum(123, 456);