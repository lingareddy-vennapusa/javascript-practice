/*


//add or  remove an element

let ar=[20,40,60,80];
console.log(ar);

ar.push(100);//added at last of an array 
//array is dynamic in js 

console.log(ar);

ar.unshift(70);// adding an element at the first 
console.log(ar);


//ar.pop();//remove last element and will return 

let x=ar.pop();
console.log(x);
console.log(ar);



//ar.shift()//del first element of an array and it will return


let y=ar.shift();
console.log(y);
console.log(ar);


// conclusion unshift-add to start , push -add to  end , shift-remove frpm first, pop -remove from end ;


*/

/*

// splice  accepts 3 parameters(startindex, deletecount,items)


let ar =[10,20,30,40,50];
console.log(ar);
//let x= ar.splice(2,2);//del element at particular location
//console.log(x);
//console.log(ar);


let z=ar.splice(2,2,22,44);// replace elements 
console.log(z);
console.log(ar);



*/

//indexof

let ar=[20,30,"str",true,30,90,30]
console.log(ar);
console.log(ar.indexOf(30));//if not present it returne -1;

//1 st occurance only it willgive 

console.log(ar.lastIndexOf(30));//last occurance




