
//ex1
/*
let ar=[20,30,40,50];
console.log(ar);


//let arr= [...ar];
let arr=ar.slice();//spread operator
console.log(arr);


arr.push(70);
console.log(ar);
console.log(arr);



*/


//ex2
/*
let ar=[[10,20],[30,40]];


console.log(ar);

//let arr=ar.slice();
let arr=[...ar];//spread operator

arr[1].push(90);
console.log(ar);



*/



//deep copy

let ar=[[10,20],[30,40]];


console.log(ar);

let arr=structuredClone(ar);

arr[1].push(90);// cannot affect ar
console.log(ar);
console.log(arr);





//shallow copy
/*
let str=[{name:"aru"}, {name:"ayappa"}]
console.log(str);


let st=str.slice();

st[0].name="rohit";
st[1].name="kohli";
console.log(str);
console.log(st);

*/

//deep copy
let str=[{name:"aru"}, {name:"ayappa"}]
console.log(str);


let st =structuredClone(str);

st[0].name="rohit";
st[1].name="kohli";
console.log(str);
console.log(st);


