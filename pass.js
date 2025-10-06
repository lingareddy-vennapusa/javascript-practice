// pass by value


let a=200;
let b;


b=a;


console.log(a);
console.log(b);


b=300;


console.log(a);
console.log(b);


// pass by reference 


        let c1={
                     name:"BMW",
                     cost:32.5   
        };
         let c2;
        c2 =c1;

        console.log(c1);
        console.log(c2);

        c2.name="KIA";
        console.log(c1);
        console.log(c2);


        //pass by reference means foe both obj same refernce so 2 refernces refering to one object 
        // if we change the vlaue of object it will reflect another reference

