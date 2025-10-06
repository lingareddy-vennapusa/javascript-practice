/* conditions to satisfy as an object 


1)stored in a variable
2) passed to function
3)return from function */






/* 
function bio(about){
    console.log(about)
}
let c={             // stored in a variable

    name:"virat",
    age:35,
    gender:"male"
};

bio(c);//passing to function
console.log(c); */





/* 
function bio(){
let c={             // stored in a variable

    name:"virat",
    age:35,
    gender:"male"
};
  return c;// return from function
}
console.log(bio()); */








//functions are objects in javascript
// checking a function is object are not


/* function add(a,b)
{

}
console.log(add.name);
console.log(add.length); */






/* function add1(a,b)
{
    console.log(a + b);
}
add1(10,20);
let add2;
add2=add1;//stored as variable
add2(200,300);
 */


/* function exmp(fun)
{
   fun(10,20);//calling inside the function// higher order function 
}
function add(a,b)
{
    console.log(a+b);
}
exmp(add)//passed to function as input // call back function
add(200,300)// calling outside the function */




