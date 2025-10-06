//ifelse 
//flow of execution 


//1

/*
let cartTotal=10000;
if(cartTotal>=10000)
{
    console.log("You have qualified for free shiping");
}
*/






/*
//2

let isVip=true;
if(isVip== true)
{
    console.log("welcome to vip lounge");
}
else
{
    console.log("welcome to regular lounge ")
}
*/




//3



/*
let blnc=1000;
let withdrawamnt=1100;
if(blnc>=withdrawamnt)
{
    console.log("transaction successful");
}
else{
    console.log("Insufficient amount")
}











/*


//4


let age =25;

if(age<=12)
{
    console.log("child ticket price");

}

else if ( age>12 && age<=50  )
{
    console.log("adult ticket price");
}

else if( age>50)
{
    console.log("oldage ticket price");
}
*/



//5  switch 

let userRole="student";

switch(userRole)

{
    case "admin":
    console.log("full permission");
    break;
    case "editor":
    console.log("edit access granted");
    break
    case "author":
    console.log("author access granted");
    break;
    case "student":
    console.log("student access granted");
    break
    default:
        console.log("access denied");
    
}


//switch 2 example


//mapping days to day in a week


let day=6;

switch(day)
{
  case 0 :
  case 6:
    console.log("Happy Weekend");
    break;
     case 2:
    case 3:
    case 4:
        console.log(" Happy Mid week");
    break;

    case 5:
        console.log("thank god its friday")
        break;
        default:
            console.log("enter the day correctly")


}


//ternary operator
/*
let age =20;

let message ;
if(age>=18)
{
console.log("can vote");
}
else{
    console.log("cannot vote");
}
   



let age =14;
let message ;
message =age>=18 ? "can vote" : "cannot vote";
console.log(message);

 */