// const a = new Promise( (resove, rehject) => {
//     resove()
//     function reject() {
//         alert("Fail");
//     }
// });

// a.then(function() {
//     alert();
// }).catch(function() {
//     alert("Fail")
// })


// function ev(x, y, callback) {
//     return setTimeout(()=>{
//         callback(x * y);
//     }, 2000);
// }

// let res = ev(5, 7, function(res) {
//     console.log(res);
// });


// function res(x) {
//     return new Promise ( resolve => {
//         setTimeout( () => {
//             resolve(x);
//         }, 2000)
//     })
// }
// // async await-i mijocov asum enq spasi minchev funkcian ira gorcn ani verjacni nor kashxates
// async function add1(x) {
//     const a = await res(20);
//     const b = await res(34);
//     return x + a + b;
// }

// add1(10).then( x => {
//     console.log(x);
// });


// class A {
//     constructor(a) {
//         this.num1 = a;
//     }

//     getA() {
//         return this.num1;
//     }
// }

// class B extends A {
//     constructor(a, b) {
//         super(a);
//         this.num2 = b;
//     }

//     getSum() {
//         return this.num1 + this.num2;
//     }
// }

// let x = new B(10, 10);
// console.log(x.getSum())


// class A {
//     static met1() {
//         console.log(12);
//     }
// }

// A.met1();


// class A {
//     get hello() {
//         return 'Hello';
//     }
// }

// let a = new A();
// console.log(a.hello)