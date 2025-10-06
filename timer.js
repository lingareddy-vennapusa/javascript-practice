// print 1 to 5

/*
console.log(1);
setTimeout(() => {
    console.log(2);
    setTimeout(() => {
        console.log(3);
        setTimeout(() => {
            console.log(4);
        }, 1000)
    }, 1000)
}, 1000)

*/

for(let i=1;i<=20;i++)
{
    setTimeout(()=>{
        console.log(i);
    }, i*1000);
}
