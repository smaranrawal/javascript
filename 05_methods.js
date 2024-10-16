
//FILTER
// let marks=[92,94,20,50,101];

// let newarray=marks.filter((val)=>{
//     return val>90;
// })
// console.log(newarray);



//Take input as n and create an array form 1 to n

let n=prompt("Enter a number ");

let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
//sum of all number in the aray 

let sum=arr.reduce((res , curr) => {
    return res + curr; 
});
console.log("sum=",sum);