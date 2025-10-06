/*
// 2d array weather data of 3 days at 3 times mrng afternoon evng
let ar=[[25,30,32],[26,30,31,34], [26,33,30]];

let i;
let j;
for(i=0;i<ar.length;i++)
{
    for(j=0;j<ar[i].length;j++)
    {
        console.log(ar[i][j]);
    }
}

*/

// 3d  array

let arr=[
     [
        [25,30,32],[26,30,31,34]
    ],

 [
    [26,33,30],[27,79,39] 
   ]
];

let i;
let j;
let k;
for(i=0;i<arr.length;i++)
{
    for(j=0;j<arr[i].length;j++)
    {

        for(k=0;k<arr[i][j].length;k++)
        {
    
            console.log(arr[i][j][k]);
        }
    }

}



