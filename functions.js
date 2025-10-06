
//functions 

/*
type-1----------------no input no output
function add()
{
    let a=20;
    let b=20;
    
    let c=a+b;
    console.log(c)
}
 add();
*/


/*
 //type-2--------------- no input - output


 function mul()
 {   
    let a=20;
    let b=20;
    c=a*b;
    return c;
   
 }

 let res = mul();
 console.log(res);



*/




/*
 //type-3---------------  input - output

 function div(x,y)
 {
    let z ;
    z=x/y;
    return z;
 }
 let res = div(20,10);
 console.log(res);
*/




/*
 //type-4---------------  input -  without output

 function div(x,y)
 {
    let z ;
    z=x/y;
    console.log(z);
 }
 div(20,10);
*/





//why we need functions 

//DRY principle 


//claculating students grade 

/*
let studentmarks=40;
let studenttotalmarks=100;
let studentgrade;

let studentpercantage=(studentmarks/studenttotalmarks)*100;


if(studentpercantage>=90)
{
    studentgrade = "A";
}
else if(studentpercantage>=80)
{
    studentgrade = "B";
}
else if(studentpercantage>=70)
{
    studentgrade = "C";
}
else if(studentpercantage>=60)
{
    studentgrade = "D";
}
else
{
    studentgrade = "FAil";
}
  console.log(studentgrade);

  */





  /*
//using functions

  let studentmarks=40;
let studenttotalmarks=100;
let studentgrade;


function grade(studentmarks,studenttotalmarks)


{

    
let studentpercantage=(studentmarks/studenttotalmarks)*100;

    if(studentpercantage>=90)
{
    studentgrade = "A";
}
else if(studentpercantage>=80)
{
    studentgrade = "B";
}
else if(studentpercantage>=70)
{
    studentgrade = "C";
}
else if(studentpercantage>=60)
{
    studentgrade = "D";
}
else
{
    studentgrade = "FAil";
}
console.log(studentgrade);
}
grade(72,100);

*/



/*
//function declaration



function sub(a,b)
{
    return a-b;
}
console.log(sub(20,10));



*/



/*

////function expression


let mul = function (c,d)
{
    return c*d;
}
console.log(mul(20,10));


*/


/*

//arrow function

  let div =  (e,f)=>
    {
        return e/fetch;
    }
    console.log(div(20,10));



   // let div =(e,f)=> e/f;
//console.log(div(20,10));



*/



/*
//IIFE


function exmp()
{
console.log("hii")
}
exmp();

(function()
{
    console.log('hello')
})();


*/