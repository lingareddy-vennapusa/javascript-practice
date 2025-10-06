//promise : two objects resolve , reject

//fullfill-then()
//reject - catch()
//we execute a block of code irrespective of result - finally()


// callback hell:


/* var getuser =()=>
{
    var getorders=()=>
    {
        var getorderdetails=()=>
        {
            var processorder=()=>
            {
                return successful;
            }
        }
    }
} */


  //  replacement of callbacks is promises introduced in ES6


/*    new Promise((res ,rej)=>{


  })
  .then((getorders)=>{})
  .then((getorderdetails)=>{})
  .catch((error)=>{console.log(error)}) */
 
 


/*   //ex1

  var age=10;

  new Promise((res,rej)=>

    {
        if(age>18){
             res(`eligible for voting`)
        }
        else{
             rej(`not eligible for voting`)  
        }
           
    })
    .then((msg)=>{console.log(msg)})
    .catch((error)=>{console.log(error)}) */


    //ex2
/* 
    new Promise((res,rej)=>{
        setTimeout(()=>{
           res(`task completed`)
        },5000)
    })

    .then((msg)=>{console.log(msg)})
    .catch((error)=>{console.log(error)}) 
    
    
    
*/


//Await is used to wait for the promise untill it completes irrespective of result


//example program


/* let mycode= new Promise((res,rej)=>{
    setTimeout(()=>{
        res(`task completed`)
    },5000)
})

function display()
{
    console.log(`task started`)
}
display()
var result=mycode;
console.log(result);
console.log(`thankyou`);

 */
/* 
OUTPUT

task started
Promise { <pending> }
thankyou */


/* let mycode= new Promise((res,rej)=>{
    setTimeout(()=>{
        res(`task completed`)
    },5000)
})

async function display()  // function should be asynchronous
{
    console.log(`task started`)
}
display()
var result= await mycode;  //await 
console.log(result);
console.log(`thankyou`); */

/* task started
task completed
thankyou */









// asynchronous function 

// it always return promises 


async function display()
{
    return(`helloworld`)
}
console.log(display())


//Promise { 'helloworld' }