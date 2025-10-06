//global scope 


/*

let a;//var and let in  global scope are same
function add()
{
  console.log(a);
}
a=10;
console.log(a);
add();


*/


/*

//function scope


function mul(){
    var a=10;//let and var are same scope in function
    console.log(a);
}
mul();
console.log(a);











*/



//block scope 


let temp=30;

if(temp>25)
{
    var coolingtemp =temp -25;
    console.log("cooling needed")
}
else{

    var heatingtemp =25-temp;
        console.log("heating needed")

}

console.log(temp);
console.log(coolingtemp);
console.log(heatingtemp);

// var and let are behaving different in block scope