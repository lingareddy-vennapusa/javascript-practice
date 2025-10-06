/*
//ex1

let i;
let j;
let row;
let n=5;

for(i=1;i<=n;i++)
{
  row ="";
  for(j=1;j<=5;j++)
  {
    row =row + "1";

  }
console.log(row);
}



*/

/*

//ex2

let i;
let j;
let row;
let n = 5;

for (i = 1; i <= n; i++)
{
      row = "";
    for (j = 1; j <= n; j++)
    {
      
        if (i == 1 || i == 5 || j == 1 || j == 5) 
            {
            row = row + "*";//*=i;
        }
        else {
            row = row + " ";
        }

    }
    console.log(row);
}


*/



//example 3

let i;
let j;
let row;
let n = 21;

for (i = 0; i < n; i++)
{
      row = "";

    for (j = 0; j <n; j++)
    {
      
        if (i == 0||  i == n-1 ||  j == 0 ||  j == n-1  ||  j==Math.floor(n/2)   
            || i==Math.floor(n/2) || i == j || i+j==n-1 || i+j==Math.floor(n/2) 
            || i-j==Math.floor(n/2) || i+j==(n-1) + Math.floor(n/2) || j-i==Math.floor(n/2))
            {
            row = row + "*";//*=i;
        }
        else {
            row = row + " ";
        }

    }
    console.log(row);
}

